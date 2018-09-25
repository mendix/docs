---
title: "Configure Your Theme"
category: "UX"
tags: ["theming", "UX"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This document describes how to configure the styling of your page in the Desktop Modeler and Web Modeler.

{{% alert type="info" %}}

This functionality was introduced in Mendix 7.16.

{{% /alert %}}

## 2 Configuring Your Theme

The styling that is loaded when opening your Mendix application in a web browser is configured in the HTML of your index pages.

To ensure that the same styling is loaded when viewing your page in the Desktop Modeler and Web Modeler, you can configure the `"cssFiles"` property in *settings.json* in the theme folder of your project. For example, in this configuration, `theme.css` is loaded when viewing a page in the Modeler:

```json
{
    "cssFiles": [ "theme.css" ]
}
```

To avoid having to maintain the styling that is loaded in the client and the Modeler separately, you can use the following token in your index pages to load the same styling in the client: `{{themecss}}`.

```html
<head>
    {{themecss}}
</head>
```
