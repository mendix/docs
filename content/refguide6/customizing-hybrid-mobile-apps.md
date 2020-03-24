---
title: "Customizing Hybrid Mobile Apps"
category: "Mobile"
---

The Mendix developer app and generated hybrid mobile apps contain their own `index.html` file. This index file cannot be edited to add css files, for example. However, you can influence the index file indirectly through a file called `components.json`. You can add css and Javascript files. The initial contents of `components.json` is shown below.

**Standard 'components.json'**
```
{
    "files": {
        "css": [
            "lib/bootstrap/css/bootstrap.min.css",
            "mxclientsystem/mxui/ui/mxui.css",
            "css/theme.css"
        ],
        "js": [ "mxclientsystem/mxui/mxui.js" ]
    },
    "cachebust": "{% raw %}{{cachebust}}{% endraw %}"
}
```

If you want to include more resources, you can add your own `components.json` file in the root of your theme. Copy the version above and add your own files. See below for an example that dynamically adds a JavaScript file to index.html:

**Custom 'components.json'**
```
{
    "files": {
        "css": [
            "lib/bootstrap/css/bootstrap.min.css",
            "mxclientsystem/mxui/ui/mxui.css",
            "css/theme.css"
        ],
        "js": [
            "mxclientsystem/mxui/mxui.js",
            "myOwnCode.js"
        ]
    },
    "cachebust": "{% raw %}{{cachebust}}{% endraw %}"
}
```
