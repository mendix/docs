---
title: "Page Break (document template)"
parent: "Document+Templates"
space: "Reference Guide 5"
---


When inserting a page break, the current page will be cut off after the break and widgets below the break will be inserted in a new page.

<div class="alert alert-info">{% markdown %}

![](attachments/819203/918135.png)
A page break

{% endmarkdown %}</div>

## Common Properties

### Name

The internal name of the widget. You can use this to give sensible names to widgets. The name property also appears in the generated HTML: the widget DOM element automatically includes the class '`mx-name-{NAME}`', which can be useful for [Selenium testing](/howto50/Selenium+Support).
