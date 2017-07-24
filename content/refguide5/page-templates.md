---
title: "Page Templates"
parent: "pages"
---


{{% alert type="info" %}}

Added in Mendix 5.18.

{{% /alert %}}

Page templates fill newly created pages with content. Instead of starting with an empty page, you start with a beautiful design which you can then customize to match your needs. The base of the page templates is the "Create Page" form.

When creating a new page there are multiple choices to be made.

*   **Layout type**. On top you select the type of layout the page will use: responsive, tablet specific or phone specific.
*   **Page name**.
*   **Naviga****tion layout**. Layout to base the page on. These are filtered based on the selected layout type. The module name is displayed between parentheses.
*   **Category list**. On the left the page template categories are displayed.
*   **Page template**. The page templates are filtered by category and show a preview of what they will look like in the web browser.

## Enabling page templates

For existing projects the page templates are disabled by default. Themes or sample applications may have the setting enabled by default.

{{% alert type="info" %}}

To enable the page templates, expand `Project` in the `Project Explorer` and open the `Settings`. Go to the second tab, `Model`, and set `Enable page templates` to `Yes (beta)`.

{{% /alert %}}

### Changes in page generation

If page templates are enabled generated pages will contain a [layout grid](layout-grid) instead of a table and input widgets will have their built-in labels enabled. For existing projects this might mean that the new pages will not be styled properly as the page structure is different.

With page templates disabled the generated pages will be the same as in Mendix 5.17.

### Changes in how pages are opened

If page templates are disabled, pages are opened in content or as a pop-up based on the location property of a button. With page templates enabled this is determined by the [layout type](layout), unless the layout type is legacy. This may result in different behavior of your application.

For more information see [layout](layout).

## Navigation layouts

Layouts in Mendix 5.18 are meant to be used for navigation only. In older versions, you were often forced to use layouts to create certain pages because the layout container, which helps defining scroll behavior, could only be used in layouts. This restriction is lifted in Mendix 5.18 which means that layouts can become simpler and you need fewer of them.

## Images

Page templates may contain (placeholder) images. These images are copied to an image collection named "PageTemplateImages" in the module where the newly created page resides. If the image collection with that name does not exist, it will be made.

The image collection is a regular image collection. You can change the images and remove them. However, if an image is used you will get an error in the Modeler.
