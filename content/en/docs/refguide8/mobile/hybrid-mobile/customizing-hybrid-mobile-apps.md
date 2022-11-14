---
title: "Customizing Hybrid Mobile Apps"
url: /refguide8/customizing-hybrid-mobile-apps/
tags: ["studio pro"]
---

## 1 Introduction

The Mendix Developer App and generated hybrid mobile apps contain their own `index.html` file. This index file cannot be edited to add CSS files, for example. However, you can alter the index file indirectly through a file called *components.json*. There, you can add CSS and JavaScript files. These are the initial contents of *components.json*:

## 2 Standard components.json

```js
{
    "files": {
        "css": ["styles/web/css/main.css"],
        "js": ["mxclientsystem/mxui/mxui.js"]
    },
    "cachebust": "{{cachebust}}"
}

```

If you want to include more resources, you can add your own *components.json* file in the root of your theme. Copy the version above and add your own files. This is an example that dynamically adds a JavaScript file to `index.html`:

## 3 Custom components.json

```js
{
    "files": {
        "css": ["styles/web/css/main.css"],
        "js": [
		"mxclientsystem/mxui/mxui.js",
		"myOwnCode.js"
	]
    },
    "cachebust": "{{cachebust}}"
}
```
