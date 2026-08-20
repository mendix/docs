---
title: "Packaging Your Extension"
url: /apidocs-mxsdk/apidocs/extensibility-api-11/packaging-your-extension/
weight: 30
description: "Explains how to package extensions into add-on modules and publish them to the Mendix Marketplace."
---

# Packaging Your Extension

After you complete development on your extension, you can package it into an add-on module so others can use it. You can then publish the module to the Mendix Marketplace so other users can download it into their apps.

To package your extension, follow these steps:

1. Verify that you have enabled the [Extension Development](/refguide/preferences-dialog/#extension-development) setting in your app's **Preferences**. Alternatively, start Studio Pro with the `--enable-extension-development` command-line option.
2. In your app, create a new module and include your development extension.
3. Name the module.
4. Open the module's settings and on the **Export** tab, select **Add-on module**.
5. In the **Extension name** list, select the extension you want to package.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensionAddOnModule.png" alt="Extension settings showing Add-on module selected with Extension name dropdown" width="400" >}}

After you create your add-on module with its extension, export it by right-clicking the module in the **App Explorer** and selecting **Export add-on module package**.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/exportAddOnModule.png" width="400" >}}

You can now save the add-on module to a location of your choice.

# Importing the Extension Add-on Module

When the add-on module is available to a Studio Pro user, they can add to their app. This is done by right-clicking the app in the **App Explorer** and selecting **Import module package**.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/importAddOnModule.png" width="400" >}}

When an add-on module containing an extension is imported in the app, Studio Pro displays a warning to the user, asking to trust the extension contained in it. If the user does not choose to trust the extension, the module is still imported but the extension inside it will not be loaded.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/trustExtension.png" width="400" >}}
