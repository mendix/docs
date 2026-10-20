/**
 * Usercentrics Cookie Consent Management
 *
 * Handles Cookie Monster consent events and Google Consent Mode v2 integration.
 *
 * Note: Usercentrics and Cookie Monster are loaded by Adobe Launch.
 * This script only sets up event listeners to respond to consent changes.
 *
 * Adobe Launch loads:
 * - Usercentrics banner (settings ID: xUbnOnjLm)
 * - Cookie Monster script
 * - Environment-specific configurations
 *
 * @version 2.0.0 - Production optimized
 */

window.UserCentrics = {
	/**
	 * Initialize Cookie Monster listeners
	 */
	init() {
		// Ensure dataLayer exists
		window.dataLayer = window.dataLayer || [];

		// Create gtag function for Google Consent Mode v2
		this.createGtagFunction();

		// Wait for Cookie Monster to be available (loaded by Adobe Launch)
		this.waitForCookieMonster();
	},

	/**
	 * Wait for Cookie Monster to load (from Adobe Launch)
	 */
	waitForCookieMonster() {
		const self = this;
		const maxAttempts = 50; // 5 seconds max
		let attempts = 0;

		const checkCookieMonster = setInterval(() => {
			attempts++;

			if (window.cookieMonster) {
				clearInterval(checkCookieMonster);
				self.setupCookieListeners();
				self.restoreSavedConsent();
				self.dispatchReadyEvent();
			} else if (attempts >= maxAttempts) {
				clearInterval(checkCookieMonster);
			}
		}, 100);
	},

	/**
	 * Create gtag function for Google Consent Mode v2 communication
	 */
	createGtagFunction() {
		window.dataLayer = window.dataLayer || [];
		if (typeof window.gtag !== 'function') {
			window.gtag = function () {
				window.dataLayer.push(arguments);
			};
		}
	},

	/**
	 * Set up Usercentrics consent change listeners
	 * Listens to UC_UI_CMP_EVENT for all consent changes (accept/reject/save)
	 */
	setupCookieListeners() {
		const self = this;

		// Listen for all Usercentrics consent events
		window.addEventListener('UC_UI_CMP_EVENT', (event) => {
			if (event.detail) {
				const { type } = event.detail;

				// Handle all consent-changing events
				if (
					type === 'ACCEPT_ALL' ||
					type === 'DENY_ALL' ||
					type === 'SAVE'
				) {
					self.updateAllConsentStates();
				}
			}
		});
	},

	/**
	 * Restore saved consent preferences on page load
	 * Uses polling to wait for Cookie Monster to load consent data
	 */
	restoreSavedConsent() {
		const self = this;

		// Check if user has previously saved consent
		if (window.cookieMonster.hasInteracted()) {
			// Poll until Cookie Monster has loaded the consent data
			let attempts = 0;
			const maxAttempts = 10; // 1 second max

			const checkReady = setInterval(() => {
				attempts++;

				// Test if data is loaded by checking if required cookies return true
				const dataLoaded =
					window.cookieMonster.permitted('reqd') === true;

				if (dataLoaded || attempts >= maxAttempts) {
					clearInterval(checkReady);
					self.updateAllConsentStates();
				}
			}, 100);
		}
	},

	/**
	 * Update all consent states in GTM based on current Cookie Monster permissions
	 */
	updateAllConsentStates() {
		// Check Targeting cookies
		const targPermitted = window.cookieMonster.permitted('targ');
		gtag('consent', 'update', {
			ad_storage: targPermitted ? 'granted' : 'denied',
			ad_user_data: targPermitted ? 'granted' : 'denied',
			ad_personalization: targPermitted ? 'granted' : 'denied',
			personalization_storage: targPermitted ? 'granted' : 'denied',
		});

		// Check Performance cookies
		const perfPermitted = window.cookieMonster.permitted('perf');
		gtag('consent', 'update', {
			analytics_storage: perfPermitted ? 'granted' : 'denied',
		});

		// Check Functional cookies
		const fnctPermitted = window.cookieMonster.permitted('fnct');
		gtag('consent', 'update', {
			functionality_storage: fnctPermitted ? 'granted' : 'denied',
		});

		// Push custom dataLayer event for GTM triggers
		// This allows GTM to fire tags conditionally based on consent state
		window.dataLayer.push({
			event: 'consent_update',
			consent_state: {
				ad_storage: targPermitted ? 'granted' : 'denied',
				ad_user_data: targPermitted ? 'granted' : 'denied',
				ad_personalization: targPermitted ? 'granted' : 'denied',
				personalization_storage: targPermitted ? 'granted' : 'denied',
				analytics_storage: perfPermitted ? 'granted' : 'denied',
				functionality_storage: fnctPermitted ? 'granted' : 'denied',
			},
		});
	},

	/**
	 * Dispatch custom event when Cookie Monster is ready
	 */
	dispatchReadyEvent() {
		window.cookieMonsterReady = true;

		if (typeof CustomEvent !== 'undefined') {
			const event = new CustomEvent('cookieMonsterReady', {
				detail: {
					version: window.cookieMonster.VERSION || 'unknown',
					engine: window.cookieMonster.ENGINE || 'unknown',
				},
			});
			document.dispatchEvent(event);
		}
	},
};

/**
 * Auto-initialize when DOM is ready
 */
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => UserCentrics.init());
} else {
	// DOM already loaded
	UserCentrics.init();
}
