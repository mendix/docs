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
            <a aria-hidden="true" style="visibility: hidden;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--bs-link-color)" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
            </a>
            <span style="font-family: noto-sans; font-weight: 500; font-size: .75rem; padding: 2px 4px; border-radius: 4px; background-color: var(--bs-link-color); color: #fff; vertical-align: middle; margin-left: 0.5rem; position: relative; visibility: hidden; display: inline-block;">
                Copy link to clipboard
                <span style="position: absolute; top: 50%; right: 100%; transform: translateY(-50%); border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right: 5px solid var(--bs-link-color);"></span>
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

                // Make icon and tooltip visible on hover
                heading.addEventListener('mouseenter', function () {
                    a.style.visibility = 'initial';
                    tooltip.style.visibility = 'initial';
                });

                // Hide icon and tooltip when mouse leaves
                heading.addEventListener('mouseleave', function () {
                    a.style.visibility = 'hidden';
                    tooltip.style.visibility = 'hidden';
                    tooltip.textContent = 'Copy link to clipboard'; // Reset tooltip text when mouse leaves
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
