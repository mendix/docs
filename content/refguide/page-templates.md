---
title: "Page Templates"
parent: "pages"
---

## 1 Introduction

Page templates fill newly created pages with content. Instead of starting with an empty page, you start with a beautiful design that you can then customize to match your needs.

The base of the page templates is the **Create Page** form in the Desktop Modeler.

When creating a new page, there are multiple choices to be made:

* **Layout type** – at the top of the form, you select the type of layout the page will use: responsive, tablet-specific, or phone specific
* **Page name**
* **Navigation layout** – the layout on which the page will be based; these are filtered based on the selected layout type, and the module name is displayed between parentheses
* **Category list** – on the left of the form, the page template categories are displayed
* **Page template** – the page templates are filtered by category and show a preview of what they will look like in a web browser

### 1.1 Changes in Page Generation

Generated pages will contain a [layout grid](layout-grid), and input widgets will have their built-in labels enabled. For existing projects, this might mean that the new pages will not be styled properly, as the page structure is different.

## 2 Images

Page templates may contain (placeholder) images. These images are copied to an image collection named **PageTemplateImages** in the module where the newly created page resides. If the image collection with that name does not exist, it will be made.

The image collection is a regular image collection. You can change the images and remove them. However, if an image is used, you will get an error in the Modeler.
