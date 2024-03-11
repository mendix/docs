(function ($) {
    'use strict';

    $(function () {
        // Append anchor links to headings in Markdown
        var article = document.getElementsByTagName('main')[0];
        if (!article) {
            return;
        }

        // Create a template for anchor and tooltip
        var template = document.createElement('template');
        template.innerHTML = `
            <a aria-hidden="true" style="visibility: hidden; padding-left: .1rem; padding-bottom: .1rem; padding-right: 0rem; padding-top:0rem; border-radius:4px;" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--bs-gray-900)" width="24" height="24" viewBox="0 0 32 32"><path d="M18.9001 7.22C20.5201 5.6 23.1601 5.6 24.7801 7.22C26.4001 8.84 26.4001 11.48 24.7801 13.1L20.4001 17.48L21.8101 18.89L26.1901 14.51C28.5901 12.11 28.5901 8.2 26.1901 5.8C23.7901 3.4 19.8801 3.4 17.4801 5.8L13.1001 10.18L14.5101 11.59L18.8901 7.21L18.9001 7.22Z"/><path d="M10.16 28C11.74 28 13.32 27.4 14.52 26.2L18.9 21.82L17.49 20.41L13.11 24.79C11.49 26.41 8.85002 26.41 7.23002 24.79C5.61002 23.17 5.61002 20.53 7.23002 18.91L11.61 14.53L10.2 13.12L5.82002 17.5C3.42002 19.9 3.42002 23.81 5.82002 26.21C7.02002 27.41 8.60002 28.01 10.18 28.01L10.16 28Z"/><path d="M9.44971 21.1336L21.124 9.45927L22.5383 10.8735L10.8639 22.5478L9.44971 21.1336Z"/></svg>
            </a>
            <span style="font-family: noto-sans; font-weight: 500; font-size: .75rem; padding: 2px 4px; border-radius: 4px; background-color: var(--bs-gray-900); color: #fff; vertical-align: middle; margin-left: 0.5rem; position: relative; visibility: hidden; display: inline-block;">
                Copy link to clipboard
                <span style="position: absolute; top: 50%; right: 100%; transform: translateY(-50%); border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right: 5px solid var(--bs-gray-900);"></span>
            </span>
        `;

        // Create a document fragment to hold the template content
        var fragment = document.createDocumentFragment();
        fragment.appendChild(template.content.cloneNode(true));

        // Select all headings in the article
        var headings = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(function (heading) {
            if (heading.id) {
                // Clone the template content to create a new set of anchor and tooltip elements
                var clone = fragment.cloneNode(true);
                var a = clone.querySelector('a');
                var tooltip = clone.querySelector('span');

                // Set the href attribute of the anchor element
                a.href = '#' + heading.id;

                // Append the cloned elements to the heading
                heading.appendChild(clone);

                // Show icon when hovering over heading
                heading.addEventListener('mouseenter', function () {
                    a.style.visibility = 'initial';
                });

                // Hide icon when mouse leaves heading
                heading.addEventListener('mouseleave', function () {
                    a.style.visibility = 'hidden';
                });
                
                // Show tooltip and background when hovering over the icon
                a.addEventListener('mouseenter', function () {
                    tooltip.style.visibility = 'initial';
                    a.style.background = 'var(--bs-gray-200)';
                });

                // Hide tooltip and background when mouse leaves the icon
                a.addEventListener('mouseleave', function () {
                    tooltip.style.visibility = 'hidden';
                    tooltip.textContent = 'Copy link to clipboard'; // Reset tooltip text when mouse leaves
                    a.style.background = 'none';
                });
                
                // Add on-click behavior
                a.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent scrolling
                    var href = a.href;
                    navigator.clipboard.writeText(href); // Copy to clipboard
                    tooltip.textContent = 'Copied!'; // Update tooltip text
                    window.history.pushState({}, document.title, href); // Update URL
                });
            }
        });
    });

}(jQuery));