---
title: "Configuring your theme"
category: "Theming"
tags: ["theming"]
---

## Configuring your theme

The styling that is loaded when opening your Mendix application in a web browser is configured in the HTML of your index pages.

To ensure that we load the same styling when viewing your page in the desktop modeler and web modeler, you can configure the `"cssFiles"` property in settings.json in the theme folder of your project. For example, with the following configuration we load `theme.css` when viewing a page in the modeler.

```json
{
    "cssFiles": [ "theme.css" ]
}
```

To avoid having to maintain the styling that is loaded in the client and the modeler separately, you can use the following token in your index pages to load the same styling in the client: `{{themecss}}`.

```html
<head>
    {{themecss}}
</head>
```
