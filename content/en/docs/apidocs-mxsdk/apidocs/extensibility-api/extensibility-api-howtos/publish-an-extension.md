---
title: "Publish an Extension"
linktitle: "Publish an Extension"
url: /apidocs-mxsdk/apidocs/extensibility-api/publishing-an-extension/
weight: 16
---

## 1 Introduction

This how-to describes how you can create an extension so that you can publish it to the Marketplace.

## 2 Prerequisites

To be able to export extension add-on modules, you need to have the feature flag `--enable-extension-development` enabled. For more information, see [Get Started with the Extensibility API](/apidocs-mxsdk/apidocs/extensibility-api/getting-started/).

## 3 Procedure

1. In the app that contains your development extension, create a new module with the same name as your extension folder. For example, if your extension folder is called 'MyFirstExtension', your module should be called 'MyFirstExtension'.

2. Open the module settings and go to the **Export** tab.

3. Set module type to *Add-on module*.

4. In the **Extension Name** field, select the name of your extension. This must match with your module name.
    {{% alert color="info" %}} If you do not set the **Extension Name** field, your feature flag is not configured correctly. For more information, see [Get Started with the Extensibility API](/apidocs-mxsdk/apidocs/extensibility-api/getting-started/). {{% /alert %}}

5. Click **OK** to save the settings, and export the module.

You can now [share the extension in the Marketplace](/appstore/sharing-content/) with other Mendix developers.
