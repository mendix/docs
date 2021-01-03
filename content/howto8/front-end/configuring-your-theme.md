---
title: "Configure Your Theme"
category: "Front-End"
menu_order: 15
tags: ["theming", "UX", "Front-End"]
aliases:
    - /howto8/ux/configuring-your-theme.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This document describes how to configure the styling of your page in Studio Pro and Studio.

## 2 Configuring Your Theme

The styling that is loaded when opening your Mendix application in a web browser is configured in the HTML of your index pages.

To ensure that the same styling is loaded when viewing your page in Studio Pro and Studio, you can configure the `"cssFiles"` property in *settings.json* in the theme folder of your project. For example, in this configuration, `styles/web/css/main.css` is loaded when viewing a page in Studio Pro:

```json
{
    "cssFiles": [ "styles/web/css/main.css" ]
}
```

To avoid having to maintain the styling that is loaded in the client and Studio Pro separately, you can use the following token in your index pages to load the same styling in the client: `{{themecss}}`.

```html
<head>
    {{themecss}}
</head>
```
