---
title: "Module-level theme settings"
category: "Front-End"
parent: "atlas-ui"
menu_order: 20
description: "This document aims to introduce you to the advanced options that module-level theme settings provide."
tags: ["build", "app", "studio", "studio pro", "style", "styling"]
---

## 1 Introduction

Atlas UI gives you a powerful tool to build a modern user experience. However, the flexibility of Mendix does not stop you from making your design system from scratch.

The module-level theme settings enable you to control the theme system behavior in Studio and Studio Pro. As the name implies, you have a separate settings file for each module which you can find under `themesource/your-module/settings.json`.

This document aims to introduce you to the advanced options that module-level theme settings provide.

## 2 Excluding UI Elements and Styling

When using a custom design system, You might want to prevent your developers from using other modules' UI elements. The `excludes` property allows you to filter out layouts, page templates, building blocks, design properties, and styling. The general format looks like this:

```json
{
    "excludes": {
        "MODULE_NAME": {
        }
    }
}
```

As the above code snippet demonstrates, you can exclude the UI elements of a specific module by grouping them under a module name.

{{% alert type="info" %}}
Please note that by excluding a UI element, you can no longer use it across your project.
{{% /alert %}}

### 2.1 Layouts and Page Templates
By excluding [layouts](https://docs.mendix.com/refguide/layout) or [page templates](https://docs.mendix.com/refguide/page-templates), developers can no longer use them to create a new page. Here's a small example of how to exclude Atlas Core layouts and page templates:

```json
{
    "excludes": {
        "Atlas_Core": {
            "layouts": true,
            "pageTemplates": true
        }
}
```

{{% alert type="info" %}}
Please note that existing pages with the banned designs will continue to work.
{{% /alert %}}

### 2.2 Building Blocks
Similar to layouts and page templates, excluding the [building blocks](https://docs.mendix.com/refguide/building-block), will hide them from the page editor toolbox. Here's a small example of how to exclude Atlas Web Content building blocks:

```json
{
    "excludes": {
        "Atlas_Web_Content": {
            "buildingBlocks": true
        }
    }
}
```

### 2.3 Design Properties or Styling
Finally, filtering the styling elements like [design properties](https://docs.mendix.com/apidocs-mxsdk/apidocs/design-properties) or [CSS classes](https://docs.mendix.com/howto/front-end/customize-styling-new) is useful when you don't want your developers to apply them. Here's a small example:

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

### 2.4 Complete Example

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

{{% alert type="info" %}}
Please note that Atlas Core provides the base functionalities required by your design system. Therefore, by disabling UI elements from Atlas Core, you will face some consistency errors.
{{% /alert %}}