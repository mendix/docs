---
title: "Page Template"
url: /refguide8/page-templates/
weight: 20
tags: ["studio pro", "page template", "page resource"]
aliases:
    - /refguide8/page-template.html
    - /refguide8/page-template
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/page-templates.pdf).
{{% /alert %}}

## 1 Introduction

Page templates are the starting point for creating new pages. Every time a new page is created, a page template is selected as a baseline that can then be edited to match the pages specific needs. 

When creating a new page, the user is presented with an overview of all the compatible page templates in the project. Page templates as document types allow users to edit existing page templates and even create entirely new ones.

## 2 Custom Page Templates

By mapping out the common design patterns of a project, a great deal of the initial work involved in creating new pages can be mitigated. 

Generally, page templates are stored in the project's [UI resources package](/refguide8/ui-resources-package/). This keeps them in sync with the project theme, as well as providing a handy place to consolidate all design-related data. 

To create a page template, right-click a page in either the **Project Explorer** or an empty section of the canvas and select **Create page template**. The page will be added as a new page template, which will automatically make it available in the **Create Page** wizard.

As the purpose of page templates is to facilitate design rather than functionality, page templates should be devoid of references to other documents. This is to prevent users from facing confusing errors when creating a new page. It also mitigates the chance of errors when importing page templates from a different project.

Page template properties are described in the sections below.

## 3 Common Properties

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

## 4 Designer Properties

{{% snippet file="/static/_includes/refguide8/designer-properties.md" %}}

## 5 General Properties

### 5.1 Display Name

The display name determines by what name the page template will appear in the **Create Page** wizard.

### 5.2 Image

The image selected will appear in the **Create Page** wizard. Selecting a representative image will allow users to easily distinguish between page templates. If left blank, the template will display an empty white field. Any image selected will be scaled down to 200x200 pixels.

### 5.3 Shown When

Depending on the context in which a page is created, the user is presented with a different set of page templates to choose from. This setting determines which set the page template belongs to.

Value | Description
--- | ---
Creating new pages *(default)* | The page template is available when creating new pages from most contexts, such as from the Project Explorer.
Generating edit pages | The page template is available when a user generates a new page from a new or edit button.
Generating select pages | The page templates is available when the user generates a new page from a select button.

This setting may also place extra restrictions on the template. Page templates intended as new or edit pages require exactly one top-level data view be present. Page templates intended as Select pages require exactly one list view, data grid, or template grid. 

### 5.4 Layout Type

[Layouts](/refguide8/layout/) are all assigned a type in their properties. This type determines in which profiles the layout can be used. To ensure that a user can always map a page template to a compatible layout during page creation, a page template must be assigned one of these same layout types. In practice, this setting will affect in which profile tab of the **Create Page** wizard the page template is displayed. Additionally, it will automatically restrict the default layout setting to layouts of the same type.

### 5.5 Preview Layout

Although page templates and layouts can be mixed and matched, this setting will determine which layout will be used to display the template in the editor. It also has a minor effect on the page creation process: if the template describes contents for layout [placeholders](/refguide8/placeholder/) that are not present in the previously selected layout, the first compatible layout will be pre-selected in the **Create Page** wizard. For a full description of the interaction between a page template and its preview layout, see [Layout](/refguide8/layout/).

The options available for this setting are regulated by the layout type setting. If you are having trouble finding the layout you are looking for, check if the layout type of the template and the desired layout match.
