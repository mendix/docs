---
title: "Markdown Viewer"
url: /appstore/widgets/markdown-viewer/
description: "Describes the purpose, features, and configuration of the Markdown Viewer widget which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Markdown Viewer](https://marketplace.mendix.com/link/component/230248/) widget renders markdown content from a string attribute as formatted HTML.

The widget does the following:

- Displays markdown-formatted text as rendered HTML, supporting headings, bold, italic, lists, links, images, tables, code blocks, blockquotes, and horizontal rules
- Applies typographic enhancements such as smart quotes, em dashes, en dashes, and ellipses
- Automatically converts URLs in the text to clickable links
- Shows a loading indicator while the data source is being retrieved

### Typical Use Cases

- Displaying user-authored markdown content such as knowledge base articles or notes
- Rendering formatted text stored in a database attribute
- Showing README-style documentation within a Mendix application

### Features

- Standard markdown syntax rendering, including headings, emphasis, lists, links, images, tables, code blocks, blockquotes, and horizontal rules
- Typographic replacements (smart quotes, em dashes, en dashes, ellipses)
- Automatic URL-to-link conversion (linkification)
- Offline capable
- Conditional visibility support

### Limitations

- The widget is read-only and does not provide editing or input capabilities
- Code blocks render as plain monospace text without syntax highlighting
- Custom HTML tags within markdown content are not supported

## Configuration

To configure the Markdown Viewer widget, do the following:

1. Place the widget in a data container such as a Data view, List view, or Template grid widget.
1. Navigate to the **General** tab and select the **Value attribute** to use as the content source. This attribute contains the markdown-formatted text to render.

{{% alert color="info" %}}
Use an unlimited string data type for the **Value attribute** to avoid truncation of longer markdown content.
{{% /alert %}}

Optionally, you can configure the widget further:

- Navigate to the **Label** section to add a label for the widget
- Navigate to the **Conditional visibility** section to control when the widget is displayed

## Styling

The widget renders its content inside a container with the `widget-markdown` CSS class. The following default styles are applied:

- **Tables** are rendered with borders, padding, and left-aligned text. Header cells have a light gray background.
- **Images** render at a maximum of 35% of the container width by default.
- **Horizontal rules** span the full width of the container.

You can override these styles by targeting the `.widget-markdown` class in your custom SCSS or theme.

## Read More

- [markdown-it](https://github.com/markdown-it/markdown-it) — the markdown parsing library used by this widget
