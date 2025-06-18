---
title: "Packaging Your Extension"
url: /apidocs-mxsdk/apidocs/extensibility-api-10/packaging-your-extension
weight: 30
---

# Packaging your extension

Once you have finished development on your extension, you might want to package it into an add-on module so that others can start using it. Once you have created the add-on module, it can then be published to the Mendix Marketplace for your extension users to download into their Studio Pro app.

To package your extension, you will still need the `--enable-extension-development` command line option turned on. Create a new module in your Studio Pro app containing your dev extension, give it an appropriate name. Open the module's settings form and set it to be an Add-on module. In the `Extension name` dropdown, select the extension you want to package into it.

![Extension Add-on Module](/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensionAddOnModule.png)

After you've created your add-on module with its extension, you can now export it, by right-clicking the module in the App Explorer and choosing `Export add-on module package`, as shown below.

![Export Module](/attachments/apidocs-mxsdk/apidocs/extensibility-api/exportAddOnModule.png)

You can now save the add-on module to a location of your choice.

# Importing the extension add-on module

Once the add-on module is available to a Studio Pro user, they are now able to add it in their application. They can so so by right-clicking the app in the App Explorer and choosing `Import module package`, as shown below.

![Import Module](/attachments/apidocs-mxsdk/apidocs/extensibility-api/importAddOnModule.png)

Once an add-on module containing an extension is imported in the app, Studio Pro will show a warning to the user, asking to trust the extension contained in it. If the user does not choose to trust, the module will still be imported but the extension inside it won't be loaded.

![Trust Extension](/attachments/apidocs-mxsdk/apidocs/extensibility-api/trustExtension.png)
