var jetblackId = "jetblackStylesheet";
var googleblackId = "googleblackStylesheet";
var cssId = "classroomDarkModeStylesheet"; // Add missing cssId variable
var darkClassColorsId = "darkClassColorsStylesheet";
var modifiedClassColorsId = "modifiedClassColorsStylesheet";

// Function to safely get the head element
function getHead() {
	return document.head || document.getElementsByTagName("head")[0] || document.documentElement;
}

// Function to check if the TOP-LEVEL page is classroom.google.com
function isClassroomPage() {
    try {
        // Check if we can access the top window (same origin)
        const topHostname = window.top.location.hostname;
        return topHostname === "classroom.google.com";
    } catch (e) {
        // Cross-origin frame - check if we're likely embedded in classroom
        const currentHostname = window.location.hostname;
        const referrer = document.referrer;
        
        // If current page is classroom.google.com, always allow
        if (currentHostname === 'classroom.google.com') {
            return true;
        }
        
        // For other domains, check if referrer is from classroom or if we're in a frame
        const isFromClassroom = referrer.includes('classroom.google.com');
        const isInFrame = window !== window.top;
        const isAllowedDomain = ['ogs.google.com', 'docs.google.com'].includes(currentHostname);
        
        // Only allow if it's an allowed domain, in a frame, and from classroom
        return isAllowedDomain && isInFrame && isFromClassroom;
    }
}

// Check storage and apply appropriate theme - but only on classroom pages
chrome.storage.sync.get(["GCDM-active", "GCDM-theme", "GCDM-class-colors", "GCJB-active", "GCGB-active"], function (result) {
	// Only apply theme if we're on a classroom page
	if (!isClassroomPage()) {
		return;
	}
	
	// Handle new storage format
	if (result["GCDM-active"] !== undefined) {
		const isActive = result["GCDM-active"] === "true";
		const theme = result["GCDM-theme"] || "googleblack";
		const classColorsEnabled = result["GCDM-class-colors"] === "true";
		
		if (isActive) {
			if (theme === "jetblack") {
				addTheme(jetblackId, "css/jetblack.css");
				removeTheme(googleblackId);
			} else if (theme === "googleblack") {
				addTheme(googleblackId, "css/googleblack.css");
				removeTheme(jetblackId);
			}
			
			// Apply class colors CSS
			if (classColorsEnabled) {
				addTheme(modifiedClassColorsId, "css/modifiedClassColours.css");
				removeTheme(darkClassColorsId);
			} else {
				addTheme(darkClassColorsId, "css/darkClassColours.css");
				removeTheme(modifiedClassColorsId);
			}
		}
	} else {
		// Handle legacy storage format
		if (result["GCJB-active"] === "true") {
			addTheme(jetblackId, "css/jetblack.css");
		} else if (result["GCJB-active"] === "false") {
			removeTheme(jetblackId);
		}
		
		if (result["GCGB-active"] === "true") {
			addTheme(googleblackId, "css/googleblack.css");
		} else if (result["GCGB-active"] === "false") {
			removeTheme(googleblackId);
		}
	}
});

function addTheme(id, cssFile) {
	if (!document.getElementById(id)) {
		try {
			const head = getHead();
			if (head) {
				head.appendChild(createLink(id, cssFile));
			} else {
				console.error(`Error while loading ${id}: head element not found`);
			}
		} catch (err) {
			console.error(`Error while loading ${id}:`, err);
		}
	}
}

function removeTheme(id) {
	const linkElement = document.getElementById(id);
	if (linkElement) {
		linkElement.parentElement.removeChild(linkElement);
	}
}

chrome.runtime.onMessage.addListener(function (message) {
	if (message === "jetblackOn") {
		addTheme(jetblackId, "css/jetblack.css");
		removeTheme(googleblackId);
	}

	if (message === "jetblackOff") {
		removeTheme(jetblackId);
	}

	if (message === "googleblackOn") {
		addTheme(googleblackId, "css/googleblack.css");
		removeTheme(jetblackId);
	}

	if (message === "googleblackOff") {
		removeTheme(googleblackId);
	}
	
	if (message === "mainOn") {
		// Get current theme and class colors setting and apply them
		chrome.storage.sync.get(["GCDM-theme", "GCDM-class-colors"], function(result) {
			const theme = result["GCDM-theme"] || "googleblack";
			const classColorsEnabled = result["GCDM-class-colors"] === "true";
			
			if (theme === "jetblack") {
				addTheme(jetblackId, "css/jetblack.css");
				removeTheme(googleblackId);
			} else {
				addTheme(googleblackId, "css/googleblack.css");
				removeTheme(jetblackId);
			}
			
			// Apply class colors CSS
			if (classColorsEnabled) {
				addTheme(modifiedClassColorsId, "css/modifiedClassColours.css");
				removeTheme(darkClassColorsId);
			} else {
				addTheme(darkClassColorsId, "css/darkClassColours.css");
				removeTheme(modifiedClassColorsId);
			}
		});
		// Also check for picker iframes when turning on
		checkForPickerIframes();
	}

	if (message === "mainOff") {
		removeTheme(jetblackId);
		removeTheme(googleblackId);
		removeTheme(darkClassColorsId);
		removeTheme(modifiedClassColorsId);
		// Also remove picker iframe styles when turning off
		removePickerIframeStyles();
		// Request background script to remove injected CSS
		chrome.runtime.sendMessage({action: "removeCSS"});
	}
});

function createLink(id, ref) {
	var link = document.createElement("link");
	link.id = id;
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = chrome.runtime.getURL(ref);
	link.media = "all";
	return link;
}

// Inject CSS into a specific iframe's document once it's fully loaded
function injectStylesIntoIframe(iframe) {
    if (!isClassroomPage()) return;
    
    iframe.addEventListener('load', function () {
        try {
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDocument) {
                injectStylesheetIntoIframe(iframeDocument); // Inject into this iframe
                injectIntoAllIframes(iframeDocument); // Recursively inject into nested iframes
            }
        } catch (e) {
            console.error("Cannot access iframe:", e);
        }
    });
}

// Inject CSS into a specific iframe's document
function injectStylesheetIntoIframe(iframeDocument) {
    if (!isClassroomPage()) return;
    
    // Check if dark mode is enabled before injecting
    chrome.storage.sync.get(["GCDM-active", "GCDM-theme", "GCDM-class-colors"], function(result) {
        const isActive = result["GCDM-active"] === "true";
        const theme = result["GCDM-theme"] || "googleblack";
        const classColorsEnabled = result["GCDM-class-colors"] === "true";
        
        if (isActive && !iframeDocument.getElementById(cssId)) {
            // Use the appropriate CSS file based on theme
            const cssFile = theme === "jetblack" ? "css/jetblack.css" : "css/googleblack.css";
            const classColorsFile = classColorsEnabled ? "css/modifiedClassColours.css" : "css/darkClassColours.css";
            
            // Ensure iframe has a head element before appending
            const iframeHead = iframeDocument.head || iframeDocument.getElementsByTagName("head")[0];
            if (iframeHead) {
                var link = createLink(cssId, cssFile);
                var classColorsLink = createLink(cssId + "-class-colors", classColorsFile);
                iframeHead.appendChild(link);
                iframeHead.appendChild(classColorsLink);
            }
        }
    });
}

// Inject CSS into all nested iframes after they are fully loaded
function injectIntoAllIframes(doc) {
    if (!isClassroomPage()) return;
    
    var iframes = doc.getElementsByTagName('iframe');
    for (let iframe of iframes) {
        // Use the load event to ensure the iframe is fully ready before injecting styles
        injectStylesIntoIframe(iframe);
    }
}

// Remove CSS from all nested iframes
function removeStylesFromIframes(doc) {
    if (!isClassroomPage()) return;
    
    var iframes = doc.getElementsByTagName('iframe');
    for (let iframe of iframes) {
        try {
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDocument) {
                removeStylesFromIframe(iframeDocument); // Remove from this iframe
                removeStylesFromIframes(iframeDocument); // Recursively remove from nested iframes
            }
        } catch (e) {
            console.error("Cannot access iframe: ", e);
        }
    }
}

// Remove CSS from a specific iframe's document
function removeStylesFromIframe(iframeDocument) {
    if (!isClassroomPage()) return;
    
    var linkToCSS = iframeDocument.getElementById(cssId);
    var linkToClassColorsCSS = iframeDocument.getElementById(cssId + "-class-colors");
    
    if (linkToCSS) {
        linkToCSS.parentElement.removeChild(linkToCSS);
        console.log("Dark mode removed from iframe.");
    }
    
    if (linkToClassColorsCSS) {
        linkToClassColorsCSS.parentElement.removeChild(linkToClassColorsCSS);
        console.log("Class colors CSS removed from iframe.");
    }
}

// Toggle dark mode based on active state
function toggleDarkMode(active) {
    if (!isClassroomPage()) return;
    
    if (active) {
        // Get current theme and class colors setting and apply them
        chrome.storage.sync.get(["GCDM-theme", "GCDM-class-colors"], function(result) {
            const theme = result["GCDM-theme"] || "googleblack";
            const classColorsEnabled = result["GCDM-class-colors"] === "true";
            
            if (theme === "jetblack") {
                addTheme(jetblackId, "css/jetblack.css");
                removeTheme(googleblackId);
            } else {
                addTheme(googleblackId, "css/googleblack.css");
                removeTheme(jetblackId);
            }
            
            // Apply class colors CSS
            if (classColorsEnabled) {
                addTheme(modifiedClassColorsId, "css/modifiedClassColours.css");
                removeTheme(darkClassColorsId);
            } else {
                addTheme(darkClassColorsId, "css/darkClassColours.css");
                removeTheme(modifiedClassColorsId);
            }
        });
        injectIntoAllIframes(document); // Inject into all iframes
        checkForPickerIframes(); // Also handle picker iframes
    } else {
        removeTheme(jetblackId);
        removeTheme(googleblackId);
        removeTheme(darkClassColorsId);
        removeTheme(modifiedClassColorsId);
        removeStylesFromIframes(document); // Remove from all nested iframes
        removePickerIframeStyles(); // Remove picker iframe styles
        // Request background script to remove injected CSS
        chrome.runtime.sendMessage({action: "removeCSS"});
    }
}

// Listen for messages from the background script or popup for new storage format
chrome.runtime.onMessage.addListener(function (message) {
    if (message === "newMainOn") {
        toggleDarkMode(true);
    }

    if (message === "newMainOff") {
        toggleDarkMode(false);
        // Request background script to remove injected CSS
        chrome.runtime.sendMessage({action: "removeCSS"});
    }
    
    // Handle storage changes from background script
    if (message === "storageChanged") {
        // Re-check storage and apply appropriate theme
        chrome.storage.sync.get(["GCDM-active", "GCDM-theme", "GCDM-class-colors"], function(result) {
            if (result["GCDM-active"] !== undefined) {
                const isActive = result["GCDM-active"] === "true";
                toggleDarkMode(isActive);
            }
        });
    }
});

// Listen for changes in the active state (new storage format)
chrome.storage.sync.get(["GCDM-active"], function (result) {
    if (result["GCDM-active"] !== undefined) {
        const isActive = result["GCDM-active"] === "true";
        toggleDarkMode(isActive);
    }
});

// Delay the iframe injection after page load to wait for iframes to render fully
window.addEventListener("load", function () {
    setTimeout(() => {
        // Only inject if dark mode is enabled
        chrome.storage.sync.get(["GCDM-active"], function(result) {
            const isActive = result["GCDM-active"] === "true";
            if (isActive) {
                injectIntoAllIframes(document); // Inject into all iframes with a delay
            }
        });
        // Replace YouTube image regardless of dark mode state
        replaceYouTubeImage();
    }, 5000); // 5-second delay to wait for nested iframes to fully render
});

// Function to handle special picker iframes
function handlePickerIframe(iframe) {
    if (!iframe.classList.contains('Ae97qf')) return;
    
    iframe.addEventListener('load', function() {
        try {
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDocument && iframeDocument.URL.includes('https://classroom.google.com/u/0/n/picker?hl=en')) {
                // Check if dark mode is active before applying styles
                chrome.storage.sync.get(["GCDM-active"], function(result) {
                    if (result["GCDM-active"] === "true") {
                        // Apply background style to the html element
                        const htmlElement = iframeDocument.documentElement;
                        if (htmlElement) {
                            htmlElement.style.setProperty('background', 'var(--background1)', 'important');
                        }
                    }
                });
            }
        } catch (e) {
            console.error("Cannot access picker iframe:", e);
        }
    });
}

// Function to check all existing iframes for picker iframes
function checkForPickerIframes() {
    const iframes = document.querySelectorAll('iframe.Ae97qf');
    iframes.forEach(iframe => {
        handlePickerIframe(iframe);
    });
}

// Function to remove custom background from picker iframes
function removePickerIframeStyles() {
    const iframes = document.querySelectorAll('iframe.Ae97qf');
    iframes.forEach(iframe => {
        try {
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDocument && iframeDocument.URL.includes('https://classroom.google.com/u/0/n/picker?hl=en')) {
                const htmlElement = iframeDocument.documentElement;
                if (htmlElement) {
                    htmlElement.style.removeProperty('background');
                }
            }
        } catch (e) {
            console.error("Cannot access picker iframe for style removal:", e);
        }
    });
}

// Use MutationObserver to detect when new iframes are added to the DOM
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            // Check for new picker iframes
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Check if the added node is an iframe with class Ae97qf
                    if (node.tagName === 'IFRAME' && node.classList.contains('Ae97qf')) {
                        handlePickerIframe(node);
                    }
                    // Also check for iframes within the added node
                    const nestedIframes = node.querySelectorAll && node.querySelectorAll('iframe.Ae97qf');
                    if (nestedIframes && nestedIframes.length > 0) {
                        nestedIframes.forEach(iframe => {
                            handlePickerIframe(iframe);
                        });
                    }
                }
            });
            
            // Only inject if dark mode is enabled
            chrome.storage.sync.get(["GCDM-active"], function(result) {
                const isActive = result["GCDM-active"] === "true";
                if (isActive) {
                    injectIntoAllIframes(document); // Check for iframes when DOM changes
                }
            });
            
            // Replace YouTube image when DOM changes
            replaceYouTubeImage();
        }
    });
});

// Observe changes to the body - wait for it to be ready
function setupObserver() {
    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
    } else {
        setTimeout(setupObserver, 100);
    }
}

setupObserver();

// Check for existing picker iframes on page load
window.addEventListener("load", function() {
    setTimeout(() => {
        checkForPickerIframes();
        // Also replace YouTube image on initial load
        replaceYouTubeImage();
    }, 1000); // Small delay to ensure iframes are loaded
});

// Function to replace YouTube image with new URL
function replaceYouTubeImage() {
    if (!isClassroomPage()) return;
    
    // Find the specific YouTube image element
    const youtubeImg = document.querySelector('img.cuHavc[aria-label="YouTube"][src^="data:image/svg+xml;base64,PHN2ZyB4bWxuc"]');
    
    if (youtubeImg) {
        // Replace with the new YouTube image URL
        youtubeImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/YouTube_2024_%28white_text%29.svg/2560px-YouTube_2024_%28white_text%29.svg.png";
    }
}