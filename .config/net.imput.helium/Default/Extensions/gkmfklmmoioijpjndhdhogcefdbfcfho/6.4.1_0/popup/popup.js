document.addEventListener("DOMContentLoaded", function () {
	// Elements
	const masterToggle = document.getElementById("master-toggle");
	const themeSelector = document.getElementById("theme-selector");
	const systemThemeToggle = document.getElementById("system-theme-toggle");
	const classColorsToggle = document.getElementById("class-colors-toggle");
	const themeSection = document.getElementById("theme-section");
	const systemThemeSection = document.getElementById("system-theme-section");
	const classColorsSection = document.getElementById("class-colors-section");
	const statusElement = document.getElementById("status");
	const versionElement = document.getElementById("version");

	    // Constants
    const version = "v6.4.1";
    const STORAGE_KEYS = {
        ACTIVE: "GCDM-active",
        THEME: "GCDM-theme", 
        SYSTEM_THEME: "GCDM-system-theme",
        CLASS_COLORS: "GCDM-class-colors"
    };

    // State for system theme interaction
    let systemThemeClickCount = 0;
    let isOnClassroom = false;

	// Initialize
	versionElement.textContent = version;
	
	// Handle animation completion to prevent conflicts
	document.querySelectorAll('.setting-section').forEach((section, index) => {
		section.addEventListener('animationend', () => {
			section.classList.add('animation-complete');
		});
	});
	
	// Check if current tab is classroom.google.com before loading settings
	checkCurrentTab();

	// Event listeners
	masterToggle.addEventListener("change", handleMasterToggle);
	themeSelector.addEventListener("change", handleThemeChange);
	systemThemeToggle.addEventListener("change", handleSystemThemeToggle);
	classColorsToggle.addEventListener("change", handleClassColorsToggle);

	// System theme detection
	if (window.matchMedia) {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', handleSystemThemeChange);
	}

	function checkCurrentTab() {
		// Check if current active tab is classroom.google.com
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			const currentTab = tabs[0];
			
			if (currentTab && currentTab.url && currentTab.url.includes('classroom.google.com')) {
				isOnClassroom = true;
				loadSettings();
			} else {
				// Show restriction message if not on classroom.google.com
				showRestrictionMessage();
			}
		});
	}

	function showRestrictionMessage() {
		// Hide all setting sections
		const settingSections = document.querySelectorAll('.setting-section');
		settingSections.forEach(section => {
			section.style.display = 'none';
		});
		
		// Create and show restriction message
		const restrictionMessage = document.createElement('div');
		restrictionMessage.className = 'restriction-message';
		restrictionMessage.innerHTML = `
			<div class="restriction-icon">🚫</div>
			<div class="restriction-text">
				<h3>Extension Not Available</h3>
				<p>This extension only works on <strong>classroom.google.com</strong></p>
				<p>Please navigate to Google Classroom to use dark mode.</p>
			</div>
		`;
		
		// Insert after the notice section
		const noticeSection = document.querySelector('.notice-section');
		noticeSection.insertAdjacentElement('afterend', restrictionMessage);
		
		// Update status
		statusElement.textContent = "Not on Google Classroom";
		statusElement.className = "status inactive";
		
		console.log("Extension restricted: Not on classroom.google.com");
	}

	function loadSettings() {
		chrome.storage.sync.get([
			STORAGE_KEYS.ACTIVE,
			STORAGE_KEYS.THEME,
			STORAGE_KEYS.SYSTEM_THEME,
			STORAGE_KEYS.CLASS_COLORS,
			// Legacy keys for migration
			"GCJB-active", 
			"GCGB-active"
		], function (result) {
			// Migration from old storage format
			let isActive = result[STORAGE_KEYS.ACTIVE];
			let selectedTheme = result[STORAGE_KEYS.THEME];
			let systemThemeEnabled = result[STORAGE_KEYS.SYSTEM_THEME] === "true";
			let classColorsEnabled = result[STORAGE_KEYS.CLASS_COLORS] === "true";

			// Handle legacy data migration
			if (isActive === undefined) {
				if (result["GCJB-active"] === "true") {
					isActive = "true";
					selectedTheme = "jetblack";
				} else if (result["GCGB-active"] === "true") {
					isActive = "true";
					selectedTheme = "googleblack";
				} else {
					isActive = "false";
					selectedTheme = "googleblack"; // default
				}
				
				// Save migrated settings
				chrome.storage.sync.set({
					[STORAGE_KEYS.ACTIVE]: isActive,
					[STORAGE_KEYS.THEME]: selectedTheme,
					[STORAGE_KEYS.SYSTEM_THEME]: "false"
				});
			}

			// Set default values if not found
			if (selectedTheme === undefined) selectedTheme = "googleblack";
			if (isActive === undefined) isActive = "false";
			if (classColorsEnabled === undefined) classColorsEnabled = false;

			// Update UI
			masterToggle.checked = isActive === "true";
			themeSelector.value = selectedTheme;
			systemThemeToggle.checked = systemThemeEnabled;
			classColorsToggle.checked = classColorsEnabled;

			updateUIState();
			updateStatus();

			// Handle system theme if enabled
			if (systemThemeEnabled) {
				handleSystemThemeChange();
			}

			console.log("Settings loaded:", { isActive, selectedTheme, systemThemeEnabled, classColorsEnabled });
		});
	}

	    function handleMasterToggle() {
        // Don't process if no classroom tabs are found
        if (!isOnClassroom) return;
        
        const systemThemeEnabled = systemThemeToggle.checked;
        
        // Special logic when system theme is enabled
        if (systemThemeEnabled) {
            systemThemeClickCount++;
            
            if (systemThemeClickCount === 1) {
                // First click: disable system theme, restore switch appearance, but don't move switch
                systemThemeToggle.checked = false;
                chrome.storage.sync.set({ 
                    [STORAGE_KEYS.SYSTEM_THEME]: "false"
                });
                
                // Restore the switch to its previous position (before the click)
                const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                masterToggle.checked = isDarkMode;
                
                updateUIState();
                updateStatus();
                
                console.log("System theme disabled on first click, switch restored to system state");
                return; // Don't toggle the master switch
            } else {
                // Reset click count for next time
                systemThemeClickCount = 0;
            }
        } else {
            // Reset click count when system theme is not enabled
            systemThemeClickCount = 0;
        }
        
        // Normal toggle behavior
        const isActive = masterToggle.checked;
        
        chrome.storage.sync.set({ 
            [STORAGE_KEYS.ACTIVE]: isActive.toString() 
        });

        updateUIState();
        updateStatus();
        sendMessageToTabs(isActive);

        console.log("Master toggle:", isActive ? "ON" : "OFF");
    }

	function handleThemeChange() {
		// Don't process if no classroom tabs are found
		if (!isOnClassroom) return;
		
		const selectedTheme = themeSelector.value;
		
		chrome.storage.sync.set({ 
			[STORAGE_KEYS.THEME]: selectedTheme 
		});

		// If dark mode is active, apply the theme change immediately
		if (masterToggle.checked) {
			sendMessageToTabs(true);
		}

		console.log("Theme changed to:", selectedTheme);
	}

	    function handleSystemThemeToggle() {
        // Don't process if no classroom tabs are found
        if (!isOnClassroom) return;
        
        const systemThemeEnabled = systemThemeToggle.checked;
        
        chrome.storage.sync.set({ 
            [STORAGE_KEYS.SYSTEM_THEME]: systemThemeEnabled.toString() 
        });

        // Reset click count when toggling system theme
        systemThemeClickCount = 0;

        updateUIState();

        if (systemThemeEnabled) {
            handleSystemThemeChange();
        }

        console.log("System theme:", systemThemeEnabled ? "ENABLED" : "DISABLED");
    }

	function handleClassColorsToggle() {
		// Don't process if no classroom tabs are found
		if (!isOnClassroom) return;
		
		const classColorsEnabled = classColorsToggle.checked;
		
		chrome.storage.sync.set({ 
			[STORAGE_KEYS.CLASS_COLORS]: classColorsEnabled.toString() 
		});

		// If dark mode is active, apply the class colors change immediately
		if (masterToggle.checked) {
			sendMessageToTabs(true);
		}

		console.log("Class colors:", classColorsEnabled ? "ENABLED" : "DISABLED");
	}

	    function handleSystemThemeChange() {
        // Don't process if no classroom tabs are found
        if (!isOnClassroom) return;
        
        if (!systemThemeToggle.checked) return;

        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        masterToggle.checked = isDarkMode;
        
        chrome.storage.sync.set({ 
            [STORAGE_KEYS.ACTIVE]: isDarkMode.toString() 
        });

        updateUIState();
        updateStatus();
        sendMessageToTabs(isDarkMode);

        console.log("System theme change detected:", isDarkMode ? "DARK" : "LIGHT");
    }

	    function updateUIState() {
        const isActive = masterToggle.checked;
        const systemThemeEnabled = systemThemeToggle.checked;

        // Handle master toggle appearance when system theme is enabled
        const masterSwitchContainer = masterToggle.closest('.modern-switch');
        if (systemThemeEnabled) {
            masterSwitchContainer.classList.add('system-controlled');
            
            // Set master toggle to match system theme
            const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            masterToggle.checked = isDarkMode;
            
            // Update storage to match system
            chrome.storage.sync.set({ 
                [STORAGE_KEYS.ACTIVE]: isDarkMode.toString() 
            });
        } else {
            masterSwitchContainer.classList.remove('system-controlled');
        }

        // Show/hide theme section based on master toggle
        if (masterToggle.checked) {
            themeSection.classList.remove('theme-disabled');
            classColorsSection.classList.remove('theme-disabled');
        } else {
            themeSection.classList.add('theme-disabled');
            classColorsSection.classList.add('theme-disabled');
        }
    }

	function updateStatus() {
		const isActive = masterToggle.checked;
		const systemThemeEnabled = systemThemeToggle.checked;
		
		if (systemThemeEnabled) {
			statusElement.textContent = "Following System Theme";
			statusElement.className = "status";
		} else if (isActive) {
			statusElement.textContent = `Active - ${getThemeDisplayName()}`;
			statusElement.className = "status active";
		} else {
			statusElement.textContent = "Inactive";
			statusElement.className = "status inactive";
		}
	}

	function getThemeDisplayName() {
		return themeSelector.value === "jetblack" ? "Jet Black" : "Google Black";
	}

	function sendMessageToTabs(isActive) {
		const theme = themeSelector.value;
		let message;

		if (isActive) {
			message = "mainOn";
		} else {
			message = "mainOff";
		}

		// Query all tabs that match Google Classroom only (narrowest permission)
		const urlPatterns = [
			"https://classroom.google.com/*"
		];

		// Get all tabs across all windows that match our content script URLs
		chrome.tabs.query({}, function (tabs) {
			tabs.forEach(tab => {
				if (tab.url && urlPatterns.some(pattern => {
					const regex = new RegExp(pattern.replace(/\*/g, '.*'));
					return regex.test(tab.url);
				})) {
					// Send message to each matching tab
					chrome.tabs.sendMessage(tab.id, message).catch(error => {
						// Silently handle errors for tabs that don't have the content script loaded
						console.log(`Could not send message to tab ${tab.id}:`, error);
					});
				}
			});
		});

		console.log("Message sent to all relevant tabs:", message);
	}
});
