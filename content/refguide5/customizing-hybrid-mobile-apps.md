---
title: "Customizing Hybrid Mobile Apps"
category: "Mobile"
---


The Mendix developer app and generated hybrid mobile apps contain their own `index.html` file. This index file cannot be edited to add css files, for example. However, you can influence the index file indirectly through a file called `components.json`. You can add css and JavaScript files and arbitrary meta tags. The initial contents of `components.json` is shown below.

**Standard 'components.json'**
{% highlight json %}
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

{% endhighlight %}

If you want to include more resources, you can add your own `components.json` file in the root of your theme. Copy the version above and add your own files and/or meta tags. See below for an example that dynamically adds a Javascript file and a meta-tag to index.html:

**Custom 'components.json'**
{% highlight json %}
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
    "meta": [
      {
        "name": "keywords",
        "content": "search,engine,keywords,go,here"
      }
    ],
    "cachebust": "{% raw %}{{cachebust}}{% endraw %}"
}
{% endhighlight %}
