// var jetblackId = "jetblackStylesheet";
// var googleblackId = "googleblackStylesheet";
// var cssId = "classroomDarkModeStylesheet"; // Add missing cssId variable
// var head = document.getElementsByTagName("head")[0];

// function isClassroomPage() {
//     try {
//         // Check if we can access the top window (same origin)
//         const topHostname = window.top.location.hostname;
//         return topHostname === "classroom.google.com";
//     } catch (e) {
//         // Cross-origin frame - check if we're likely embedded in classroom
//         const currentHostname = window.location.hostname;
//         const referrer = document.referrer;
        
//         // If current page is classroom.google.com, always allow
//         if (currentHostname === 'classroom.google.com') {
//             return true;
//         }
        
//         // For other domains, check if referrer is from classroom or if we're in a frame
//         const isFromClassroom = referrer.includes('classroom.google.com');
//         const isInFrame = window !== window.top;
//         const isAllowedDomain = ['ogs.google.com', 'docs.google.com'].includes(currentHostname);
        
//         // Only allow if it's an allowed domain, in a frame, and from classroom
//         return isAllowedDomain && isInFrame && isFromClassroom;
//     }
// }

// chrome.storage.sync.get(["GCDM-active", "GCDM-theme", "GCJB-active", "GCGB-active"], function (result) {
// 	// Only apply theme if we're on a classroom page
// 	if (!isClassroomPage()) {
// 		return;
// 	}
	
// 	// Handle new storage format
// 	if (result["GCDM-active"] !== undefined) {
// 		const isActive = result["GCDM-active"] === "true";
// 		const theme = result["GCDM-theme"] || "googleblack";
		
// 		if (isActive) {
// 			if (theme === "jetblack") {
// 				addTheme(jetblackId, "css/jetblack.css");
// 				removeTheme(googleblackId);
// 			} else if (theme === "googleblack") {
// 				addTheme(googleblackId, "css/googleblack.css");
// 				removeTheme(jetblackId);
// 			}
// 		}
// 	} else {
// 		// Handle legacy storage format
// 		if (result["GCJB-active"] === "true") {
// 			addTheme(jetblackId, "css/jetblack.css");
// 		} else if (result["GCJB-active"] === "false") {
// 			removeTheme(jetblackId);
// 		}
		
// 		if (result["GCGB-active"] === "true") {
// 			addTheme(googleblackId, "css/googleblack.css");
// 		} else if (result["GCGB-active"] === "false") {
// 			removeTheme(googleblackId);
// 		}
// 	}
// });

// function addTheme(id, cssFile) {
// 	if (!document.getElementById(id)) {
// 		try {
// 			head.appendChild(createLink(id, cssFile));
// 		} catch (err) {
// 			console.error(`Error while loading ${id}:`, err);
// 		}
// 	}
// }

// function removeTheme(id) {
// 	const linkElement = document.getElementById(id);
// 	if (linkElement) {
// 		linkElement.parentElement.removeChild(linkElement);
// 	}
// }

// Track injected CSS for each tab
const injectedCSS = new Map();

chrome.webNavigation.onCommitted.addListener((details) => {
    const url = new URL(details.url);
    if (url.hostname === "classroom.google.com") {
        console.log("Navigated to classroom.google.com");
        chrome.storage.sync.get(["GCDM-active", "GCDM-theme", "GCDM-class-colors", "GCJB-active", "GCGB-active"], function (result) {
            if (result["GCDM-active"] === "true") {
                console.log("Dark mode is active");
                const theme = result["GCDM-theme"] || "googleblack";
                const classColorsEnabled = result["GCDM-class-colors"] === "true";
                
                const cssFile = theme === "jetblack" ? "css/jetblack.css" : "css/googleblack.css";
                const classColorsFile = classColorsEnabled ? "css/modifiedClassColours.css" : "css/darkClassColours.css";
                
                // Store the CSS files for this tab
                injectedCSS.set(details.tabId, [cssFile, classColorsFile]);
                
                chrome.scripting.insertCSS({
                    target: { tabId: details.tabId },
                    files: [cssFile, classColorsFile]
                });
            }
        });
    }
});

// Listen for tab updates to clean up when navigating away from classroom
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        const url = new URL(tab.url);
        if (url.hostname !== "classroom.google.com" && injectedCSS.has(tabId)) {
            // Remove CSS when leaving classroom
            removeInjectedCSS(tabId);
        }
    }
});

// Clean up when tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
    injectedCSS.delete(tabId);
});

// Function to remove injected CSS
async function removeInjectedCSS(tabId) {
    try {
        const cssFiles = injectedCSS.get(tabId);
        if (cssFiles) {
            // Handle both single file (legacy) and array of files
            const filesToRemove = Array.isArray(cssFiles) ? cssFiles : [cssFiles];
            await chrome.scripting.removeCSS({
                target: { tabId: tabId },
                files: filesToRemove
            });
            injectedCSS.delete(tabId);
            console.log(`Removed CSS from tab ${tabId}`);
        }
    } catch (error) {
        console.error("Error removing CSS:", error);
        // Clean up the map entry even if removal failed
        injectedCSS.delete(tabId);
    }
}

// Listen for messages from content script or popup to remove CSS
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "removeCSS" && sender.tab) {
        removeInjectedCSS(sender.tab.id);
        sendResponse({success: true});
    }
});

// Handle extension disable/enable by checking all active tabs
chrome.management.onDisabled.addListener(() => {
    // Remove CSS from all tracked tabs when extension is disabled
    injectedCSS.forEach((cssFile, tabId) => {
        removeInjectedCSS(tabId);
    });
});

// Re-inject CSS when extension is re-enabled
chrome.management.onEnabled.addListener(() => {
    // Check all classroom tabs and re-inject CSS if needed
    chrome.tabs.query({url: "https://classroom.google.com/*"}, (tabs) => {
        tabs.forEach(tab => {
            chrome.storage.sync.get(["GCDM-active", "GCDM-theme", "GCDM-class-colors"], function (result) {
                if (result["GCDM-active"] === "true") {
                    const theme = result["GCDM-theme"] || "googleblack";
                    const classColorsEnabled = result["GCDM-class-colors"] === "true";
                    
                    const cssFile = theme === "jetblack" ? "css/jetblack.css" : "css/googleblack.css";
                    const classColorsFile = classColorsEnabled ? "css/modifiedClassColours.css" : "css/darkClassColours.css";
                    
                    injectedCSS.set(tab.id, [cssFile, classColorsFile]);
                    
                    chrome.scripting.insertCSS({
                        target: { tabId: tab.id },
                        files: [cssFile, classColorsFile]
                    });
                }
            });
        });
    });
});