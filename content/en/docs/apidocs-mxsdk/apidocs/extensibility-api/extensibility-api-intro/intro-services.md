---
title: "Introduction to Studio Pro Services"
linktitle: "Studio Pro Services"
url: /apidocs-mxsdk/apidocs/extensibility-api/introductions/services/
weight: 10
---

## 1 Introduction

A Studio Pro service is an interface that exposes some core Studio Pro functionality to extensions. These interfaces are named `I*Service` and can be found in `Mendix.StudioPro.ExtensionsAPI.Services` or `Mendix.StudioPro.ExtensionsAPI.UI.Services` namespaces. It can be injected using MEF like in the second example
above (the example uses constructor injection, but [other methods](https://docs.microsoft.com/en-us/dotnet/framework/mef/attributed-programming-model-overview-mef#import-and-export-basics)
are supported as well).

{{% alert color="info" %}}You should not implement these interfaces in your production code, although it is possible to make sense to do so for unit testing purposes.{{% /alert %}}

## 2 List of Available Services
- Helpers to operate on the app model or parts of it:
  - [`IMicroflowService`](xref:Mendix.StudioPro.ExtensionsAPI.Services.IMicroflowService)
  - [`IMicroflowExpressionService`](xref:Mendix.StudioPro.ExtensionsAPI.Services.IMicroflowExpressionService)
- Services giving access to interactive operations:
  - [`IAppService`](xref:Mendix.StudioPro.ExtensionsAPI.UI.Services.IAppService)
  - [`ISelectorDialogService`](xref:Mendix.StudioPro.ExtensionsAPI.UI.Services.ISelectorDialogService)
  <!--TODO move to internal docs  - [`IUserAuthenticationService`](xref:Mendix.StudioPro.ExtensionsAPI.Internal.UI.Services.IUserAuthenticationService) -->
  - [`IDockingWindowService`](xref:Mendix.StudioPro.ExtensionsAPI.UI.Services.IDockingWindowService) (not stable)
- Utility services:
  - [`IConfigurationService`](xref:Mendix.StudioPro.ExtensionsAPI.Services.IConfigurationService)
  - [`ILogService`](xref:Mendix.StudioPro.ExtensionsAPI.Services.ILogService)
  - [`IExtensionFileService`](xref:Mendix.StudioPro.ExtensionsAPI.Services.IExtensionFileService)