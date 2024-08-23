---
title: "Export an Extension"
linktitle: "Export an Extension"
url: /apidocs-mxsdk/apidocs/extensibility-api/export-an-extension/
weight: 22
---

## Introduction

This how-to describes how you can export an extension so that you can publish it in the Marketplace or directly share it with other Mendix developers.

## Prerequisites

To be able to export extension add-on modules, you need to have the feature flag `--enable-extension-development` enabled. For more information, see [Get Started with the Extensibility API](/apidocs-mxsdk/apidocs/extensibility-api/getting-started/).

## Procedure

1. In Studio Pro, open the app that contains your development extension.
2. Create a new module with the same name as your extension folder. For example, if your extension folder is called 'MyFirstExtension', your module must also be called 'MyFirstExtension'.
3. In **App Explorer**, go to **Settings** of this module and then go to the **Export** tab.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/export-an-extension/export-tab.png" max-width=80% >}}

4. Set **Module type** to *Add-on module*.
5. In the **Module version** field, enter the version number of the extension.
6. In the **Extension Name** field, select the name of your extension. This must match with your module name.

    {{% alert color="info" %}} If you do not set the **Extension name** field, your feature flag is not configured correctly. For more information, see [Get Started with the Extensibility API](/apidocs-mxsdk/apidocs/extensibility-api/getting-started/). {{% /alert %}}

7. Click **OK** to save the settings.
8. In **App Explorer**, right-click the module and click **Export** to export the extension.

Now you can [publish the extension in the Marketplace](/appstore/sharing-content/#adding) or directly share it with other Mendix developers.
