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
            <a aria-hidden="true" style="display: inline-block; visibility: hidden; padding: .1rem; border-radius:4px;" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--bs-gray-900)" width="24" height="24" viewBox="0 0 32 32"><path d="M18.9001 7.22C20.5201 5.6 23.1601 5.6 24.7801 7.22C26.4001 8.84 26.4001 11.48 24.7801 13.1L20.4001 17.48L21.8101 18.89L26.1901 14.51C28.5901 12.11 28.5901 8.2 26.1901 5.8C23.7901 3.4 19.8801 3.4 17.4801 5.8L13.1001 10.18L14.5101 11.59L18.8901 7.21L18.9001 7.22Z"/><path d="M10.16 28C11.74 28 13.32 27.4 14.52 26.2L18.9 21.82L17.49 20.41L13.11 24.79C11.49 26.41 8.85002 26.41 7.23002 24.79C5.61002 23.17 5.61002 20.53 7.23002 18.91L11.61 14.53L10.2 13.12L5.82002 17.5C3.42002 19.9 3.42002 23.81 5.82002 26.21C7.02002 27.41 8.60002 28.01 10.18 28.01L10.16 28Z"/><path d="M9.44971 21.1336L21.124 9.45927L22.5383 10.8735L10.8639 22.5478L9.44971 21.1336Z"/></svg>
            </a>
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
                
                // Initialize Bootstrap tooltip
                $(a).tooltip({
                    title: 'Copy link to clipboard',
                    placement: 'right',
                    trigger: 'hover',
                });

                // Add on-click behavior
                a.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent scrolling
                    var href = a.href;
                    navigator.clipboard.writeText(href); // Copy to clipboard
                    window.history.pushState({}, document.title, href); // Update URL
                    // Update tooltip text
                    var tooltipInner = document.querySelector('div.tooltip-inner');
                    if (tooltipInner) {
                        tooltipInner.textContent = 'Copied!';
                    }
                });
            }
        });
    });

}(jQuery));
