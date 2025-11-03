---
title: "Packaging Your Extension"
url: /apidocs-mxsdk/apidocs/extensibility-api-11/packaging-your-extension
weight: 30
---

# Packaging Your Extension

After completing development on your extension, you can package it into an add-on module so  others can use it. Once packaged, the module can be published to the Mendix Marketplace, allowing other users to download it into their Studio Pro apps.

To package your extension, follow the steps below:

1. Make sure the`--enable-extension-development` command-line option is enabled.
2. In your Studio Pro app, create a new module and include your development extension.
3. Give the module a name. 
4. Open the module's settings and in the **Export** tab, choose **Add-on module**. 
5. In the **Extension name** drop-down, select the extension you want to package into it.

![Extension Add-on Module](/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensionAddOnModule.png)

After you have created your add-on module with its extension, you can export it by right-clicking the module in the **App Explorer** and selecting **Export add-on module package**.

![Export Module](/attachments/apidocs-mxsdk/apidocs/extensibility-api/exportAddOnModule.png)

You can now save the add-on module to a location of your choice.

# Importing the Extension Add-on Module

When the add-on module is available to a Studio Pro user, they are now able to add it in their application. This is done by right-clicking the app in the **App Explorer** and selecting **Import module package**.

![Import Module](/attachments/apidocs-mxsdk/apidocs/extensibility-api/importAddOnModule.png)

When an add-on module containing an extension is imported in the app, Studio Pro will show a warning to the user, asking to trust the extension contained in it. If the user does not choose to trust, the module will still be imported but the extension inside it will not be loaded.

![Trust Extension](/attachments/apidocs-mxsdk/apidocs/extensibility-api/trustExtension.png)
