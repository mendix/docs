'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Append anchor links to headings in Markdown
    const article = document.getElementsByTagName('main')[0];
    if (!article) {
        return;
    }

    // Select all headings in the article
    const headings = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading) => {
        if (heading.id) {
            const a = document.createElement('a');
            a.setAttribute('aria-hidden', 'true');
            a.classList.add('anchor-icon'); // Add anchor-icon class (_styles_project.scss)
            a.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="var(--bs-body-color)" width="20" height="20" viewBox="0 0 32 32"><path d="M18.9001 7.22C20.5201 5.6 23.1601 5.6 24.7801 7.22C26.4001 8.84 26.4001 11.48 24.7801 13.1L20.4001 17.48L21.8101 18.89L26.1901 14.51C28.5901 12.11 28.5901 8.2 26.1901 5.8C23.7901 3.4 19.8801 3.4 17.4801 5.8L13.1001 10.18L14.5101 11.59L18.8901 7.21L18.9001 7.22Z"/><path d="M10.16 28C11.74 28 13.32 27.4 14.52 26.2L18.9 21.82L17.49 20.41L13.11 24.79C11.49 26.41 8.85002 26.41 7.23002 24.79C5.61002 23.17 5.61002 20.53 7.23002 18.91L11.61 14.53L10.2 13.12L5.82002 17.5C3.42002 19.9 3.42002 23.81 5.82002 26.21C7.02002 27.41 8.60002 28.01 10.18 28.01L10.16 28Z"/><path d="M9.44971 21.1336L21.124 9.45927L22.5383 10.8735L10.8639 22.5478L9.44971 21.1336Z"/></svg>`;
            a.href = '#' + heading.id;

            // Append anchor element to heading
            heading.appendChild(a);

            // Show icon when hovering over heading
            heading.addEventListener('mouseenter', () => {
                a.style.display = 'inline-block';
            });

            // Hide icon when mouse leaves heading
            heading.addEventListener('mouseleave', () => {
                a.style.display = 'none';
            });

            // Initialize Bootstrap tooltip
            const tooltip = new bootstrap.Tooltip(a, {
                title: 'Copy link to clipboard',
                placement: 'right',
                trigger: 'hover focus'
            });

            // Add on-click behavior
            a.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent scrolling
                const href = a.href;
                navigator.clipboard.writeText(href); // Copy to clipboard
                window.history.pushState({}, document.title, href); // Update URL
                // Update tooltip text
                const tooltipInner = document.querySelector('div.tooltip-inner');
                if (tooltipInner) {
                    tooltipInner.textContent = 'Copied!';
                }
            });
        }
    });
});
