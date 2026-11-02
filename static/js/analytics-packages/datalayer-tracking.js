/**
 * DataLayer Management and Analytics Tracking
 *
 * Centralizes dataLayer initialization and provides consistent API
 * for all analytics tracking across the site.
 *
 * @version 2.0.0 - Production optimized
 */

// Initialize dataLayer as early as possible
window.dataLayer = window.dataLayer || [];

/**
 * Unified dataLayer push function
 * @param {Object} data - Data to push to dataLayer
 * @param {string} source - Source identifier (optional, for internal tracking)
 */
window.pushToDataLayer = function (data, source) {
	if (window.dataLayer) {
		window.dataLayer.push(data);
	}
};

/**
 * Legacy pusher function for backwards compatibility
 * Provides consistent interface for pushing consent and tracking data
 * @param {Object} payload - Data payload to push to dataLayer
 */
window.pusher = function (payload) {
	if (typeof window.pushToDataLayer === 'function') {
		window.pushToDataLayer(payload, 'legacy-pusher');
	} else {
		window.dataLayer.push(payload);
	}
};

/**
 * Track various clicks and page events in Google Analytics
 */
document.addEventListener('DOMContentLoaded', function () {
	// Track PDF downloads - ensure PDFs aren't crawled by search engines
	const pdfLinks = document.querySelectorAll('a[href*="pdf"]');
	pdfLinks.forEach(function (link) {
		link.setAttribute('rel', 'nofollow');
		link.addEventListener('click', function () {
			pushToDataLayer(
				{
					event: 'PDFClick',
					clickedHREF: this.getAttribute('href'),
				},
				'pdf-tracking'
			);
		});
	});

	// Track signin clicks
	const signinLinks = document.querySelectorAll("a[href*='home.mendix.com']");
	signinLinks.forEach(function (link) {
		link.addEventListener('click', function () {
			pushToDataLayer(
				{
					event: 'SigninClick',
				},
				'signin-tracking'
			);
		});
	});

	// Send virtual page view when document is ready
	pushToDataLayer(
		{
			event: 'virtual_page_view',
		},
		'page-view'
	);
});
