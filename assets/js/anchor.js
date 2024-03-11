(function ($) {
    'use strict';

    // Headers' anchor link that shows on hover
    $(function () {
        // append anchor links to headings in markdown.
        var article = document.getElementsByTagName('main')[0];
        if (!article) {
            return;
        }
        var headings = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(function (heading) {
            if (heading.id) {
                var a = document.createElement('a');
                // [a11y] hide this from screen readers, etc..
                a.setAttribute('aria-hidden', 'true');
                // material insert_link icon in svg format
                a.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>';
                a.href = '#' + heading.id;
                a.style.visibility = 'hidden';

                // Create tooltip element for the text
                var tooltip = document.createElement('span');
                tooltip.textContent = 'Copy link to clipboard';
                tooltip.style.fontFamily = 'noto-sans';
                tooltip.style.fontWeight = '500';
                tooltip.style.fontSize = '.75rem';
                tooltip.style.padding = '2px 4px';
                tooltip.style.borderRadius = '4px';
                tooltip.style.backgroundColor = 'var(--bs-link-color)';
                tooltip.style.color = "#fff"
                tooltip.style.verticalAlign = "middle";
                tooltip.style.marginLeft = "0.5rem";
                tooltip.style.position = 'relative';
                tooltip.style.visibility = 'hidden';
                tooltip.style.display = 'inline-block';

                // Create tip element
                var tip = document.createElement('span');
                tip.style.position = 'absolute';
                tip.style.top = '50%'; // Position in the middle vertically
                tip.style.right = '100%'; // Position to the left of the tooltip
                tip.style.transform = 'translateY(-50%)'; // Center the tip vertically
                tip.style.borderTop = '5px solid transparent'; // Triangle pointing right
                tip.style.borderBottom = '5px solid transparent'; // Triangle pointing right
                tip.style.borderRight = '5px solid var(--bs-link-color)'; // Triangle pointing right

                // Insert the tip into the tooltip
                tooltip.appendChild(tip);

                // Insert the tooltip directly into the heading
                heading.appendChild(a);
                heading.appendChild(tooltip);

                heading.addEventListener('mouseenter', function () {
                    a.style.visibility = 'initial';
                    tooltip.style.visibility = 'initial';
                });
                heading.addEventListener('mouseleave', function () {
                    a.style.visibility = 'hidden';
                    tooltip.style.visibility = 'hidden';
                });

                // Add click event listener to copy href to clipboard
                a.addEventListener('click', function(event) {
                    var href = a.href;
                    navigator.clipboard.writeText(href);
                });
            }
        });
    });

}(jQuery));
