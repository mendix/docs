---
title: "Studio Pro Services"
url: /apidocs-mxsdk/apidocs/extensibility-api/introductions/services/
weight: 10
---

## Introduction

A Studio Pro service is an interface that exposes some core Studio Pro functionality to extensions. These interfaces are named `I*Service` and can be found in `Mendix.StudioPro.ExtensionsAPI.Services` or `Mendix.StudioPro.ExtensionsAPI.UI.Services` namespaces. It can be injected using the Microsoft Extensions Framework, also referred to as MEF. For more information about MEF and how to use it please refer to the official [Microsoft documentation](https://learn.microsoft.com/en-us/dotnet/framework/mef/)

{{% alert color="info" %}}You should not implement these interfaces in your production code, although it is possible to make sense to do so for unit testing purposes.{{% /alert %}}

## List of Available Services

* Helpers to operate on the app model or parts of it:
    * [`IMicroflowService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Services/IMicroflowService.md)
    * [`IMicroflowExpressionService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Services/IMicroflowExpressionService.md)
* Services giving access to interactive operations:
    * [`IAppService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.Services/IAppService.md)
    * [`ISelectorDialogService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.Services/ISelectorDialogService.md)
    * [`IDockingWindowService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.Services/IDockingWindowService.md)
* Utility services:
    * [`IConfigurationService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Services/IConfigurationService.md)
    * [`ILogService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Services/ILogService.md)
    * [`IExtensionFileService`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.Services/IExtensionFileService.md)
