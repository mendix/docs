---
title: "Run two applications locally at once"
parent: "project-settings"
space: "Mendix 4 How-to's"
---
## Description

This section will explain the steps you have to take to run two different Mendix applications at once on the same computer.

## Instructions

![](attachments/819203/917932.png) **Open the Project Settings by double-clicking on 'Settings' in the Project Explorer.**

![](attachments/819203/917932.png) **Choose the 'Server' tab and change the HTTP port and Server admin port to values different from those the other application uses.** ![](attachments/2621507/2752790.png)

You can elect to use the default ports for the second application, or set it to use different ports in the same way as detailed above.

<div class="alert alert-warning">{% markdown %}

If you try to run two applications locally in the same browser, you will have to constantly log in again when switching between the applications, as they both run in the same domain. You can avoid this by running the applications in two different browsers, for example Firefox and Internet Explorer, which use separate cookies.

{% endmarkdown %}</div>
