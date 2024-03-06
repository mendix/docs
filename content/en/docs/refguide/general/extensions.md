---
title: "Studio Pro Extensions"
url: /refguide/extensions/
category: "General Info"
weight: 30
description: "Describes Studio Pro Extensions."
tags: ["Studio Pro", "Extensions"]
---

## 1 Studio Pro Extensions
Studio Pro Extensions are a functionality in Studio Pro that allows you to add new functionality to your development environment. 

These extensions are part of your application, and therefore will become available for all members of your project who are developing this application. 

Currently, extensions can only be created by Mendix Partners.

## 2 Studio Pro Extensions API
The Studio Pro Extensions API allows you to interact with different parts of Mendix Studio Pro by adding new functionality to them, as well as interact with the opened app model. 

Currently interface elements that are available are the panes, the top bar menus, the context menus in the domain model and app explorer. 

It is possible to add new functionality to these and open custom interfaces that interact with the currently open app model.

## 3 Installing Extensions
Extensions come as part of add-on modules. This means you can download them directly from the marketplace. 

Once you find an extension you want to use from the marketplace, you can follow the following steps: 

1. Click on Download
   
{{< figure src="/attachments/refguide/extensions/download-extension.png" alt="Download extension" >}}

2. You will get a warning. Click on Trust module and install extension. If you decide to not trust the extension, you will get asked whether or not to trust the extension every time you reload the application. 
If you do not want to trust the extension and would prefer to remove the extension itself altogether, you can remove the addon module that has been added.

{{< figure src="/attachments/refguide/extensions/trust-extension.png" alt="trust extension" >}}

3. You will then get a confirmation message saying that the module was successfully installed. Click on OK. 

{{< figure src="/attachments/refguide/extensions/ok-extension.png" alt="OK the usage of add-on module" >}}

Your extension is now installed and will be ready to use. Depending on the extension that you installed, the functionality will be added in a different location. Read the extension specific documentation to get more information on how to use it. 
