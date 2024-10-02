---
title: "Configure Your Theme"
url: /howto/front-end/configuring-your-theme/
weight: 15
description: "Describes how to configure the styling of your page in Studio Pro."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This document describes how to configure the styling of your page in Studio Pro.

## Configuring Your Theme

The styling that is loaded when opening your Mendix application in a web browser is configured in the HTML of your index pages.

To ensure that the same styling is loaded when viewing your page in Studio Pro, you can configure the `"cssFiles"` property in *settings.json* in the theme folder of your app. For example, in this configuration, `theme/web/main.scss` is loaded when viewing a page in Studio Pro:

```json
{
    "cssFiles": [ "theme/web/css/main.scss" ]
}
```

To avoid having to maintain the styling that is loaded in the client and Studio Pro separately, you can use the following token in your index pages to load the same styling in the client: `{{themecss}}`.

```html
<head>
    {{themecss}}
</head>
```
