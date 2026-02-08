---
title: "C# Studio Pro Extensibility Services"
linktitle: "Studio Pro Services"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/services/
weight: 10
---

## 소개

Studio Pro 서비스는 Studio Pro의 일부 핵심 기능을 확장에 노출하는 인터페이스입니다. These interfaces are named `I*Service` and can be found in `Mendix.StudioPro.ExtensionsAPI.Services` or `Mendix.StudioPro.ExtensionsAPI.UI.Services` namespaces. It can be injected using the Microsoft Extensions Framework, also referred to as MEF. For more information about MEF and how to use it, refer to the official [Microsoft documentation](https://learn.microsoft.com/en-us/dotnet/framework/mef/)

{{% alert color="info" %}}You should not implement these interfaces in your production code, although it is possible to make sense to do so for unit testing purposes.{{% /alert %}}

## 사용 가능한 Services 목록

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
