---
title: "Configure Module-Level Theme Settings"
url: /howto/front-end/module-level-theme-settings/
weight: 25
description: "Understand the advanced options of module-level theme settings."
tags: ["build", "app", "studio", "studio pro", "style", "styling"]
---

## 1 Introduction

Atlas UI gives you a powerful tool to build a modern user experience. However, the flexibility of Mendix does not stop you from making your design system from scratch. This document will introduce you to the advanced options that module-level theme settings provide. For more information on making a theme module, see the [Create a Theme Module](/howto/front-end/customize-styling-new/#create-theme-mod) section of *Customize Styling*.

The module-level theme settings enable you to control the theme system behavior in Studio and Studio Pro. As the name implies, you have a separate settings file for each module which you can find under **themesource/{your-module}/settings.json**.

If you wish for further guidance on front-end best practices, see [Implement Best Practices for UX Design](/howto/front-end/ux-best-practices/). 

## 2 Excluding UI Elements and Styling

When using a custom design system, you might want to prevent your developers from using other modules' UI elements. The `excludes` property allows you to filter out layouts, page templates, building blocks, design properties, and styling. The general format looks like this:

```json
{
    "excludes": {
        "MODULE_NAME": {
        }
    }
}
```

As the code snippet demonstrates, you can exclude the UI elements of a specific module by grouping them under a module name.

{{% alert color="info" %}}
By excluding a UI element, you can no longer use it across your app.
{{% /alert %}}

### 2.1 Excluding Layouts and Page Templates

By excluding [layouts](/refguide/layout/) and [page templates](/refguide/page-templates/), developers can no longer use them to create a new page. Here is a small example of how to exclude Atlas Core layouts and page templates:

```json
{
    "excludes": {
        "Atlas_Core": {
            "layouts": true,
            "pageTemplates": true
        }
    }
}
```

{{% alert color="info" %}}
Existing pages with the banned designs will continue to work.
{{% /alert %}}

### 2.2 Excluding Building Blocks

Similar to layouts and page templates, excluding the [building blocks](/refguide/building-block/) will hide them from the page editor toolbox. Here is a small example of how to exclude Atlas Web Content building blocks:

```json
{
    "excludes": {
        "Atlas_Web_Content": {
            "buildingBlocks": true
        }
    }
}
```

### 2.3 Filtering Design Properties and Styling

Filtering styling elements like [design properties](/apidocs-mxsdk/apidocs/design-properties/) or [CSS classes](/howto/front-end/customize-styling-new/) is useful when you do not want your developers to apply them. Here is a small example:

```json
{
    "excludes": {
        "Atlas_Web_Content": {
            "designProperties": true,
            "styling": true
        }
    }
}
```

### 2.4 Reviewing a Complete Example

Here is an example which integrates all the concepts described above:

```json
{
    "excludes": {
        "Atlas_Core": {
            "layouts": true,
            "pageTemplates": true
        },
        "Atlas_Web_Content": {
            "buildingBlocks": true,
            "designProperties": true,
            "styling": true
        }
    }
}
```

{{% alert color="info" %}}
Atlas Core provides the base functionalities required by your design system. Therefore, by disabling UI elements from Atlas Core you will encounter some consistency errors.
{{% /alert %}}

## 3 Read More

* [Create a Company Design System](/howto/front-end/create-a-company-design-system/)
* [Atlas 3 Site](https://atlas.mendix.com)
