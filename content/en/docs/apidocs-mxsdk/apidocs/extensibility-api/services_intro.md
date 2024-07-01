---
title: "Introduction to Services"
url: /extensions-api/services_intro/
weight: 10
---

# Studio Pro Services

- **Service** - an interface that exposes some core Studio Pro functionality to extensions. These interfaces are named `I*Service` and can be found in `Mendix.StudioPro.ExtensionsAPI.Services` or `Mendix.StudioPro.ExtensionsAPI.UI.Services` namespaces. It can be injected using MEF like in the second example
  above (the example uses constructor injection, but [other methods](https://docs.microsoft.com/en-us/dotnet/framework/mef/attributed-programming-model-overview-mef#import-and-export-basics)
  are supported as well).
  - Note that you should not implement these interfaces in your production code. Though it might make sense to do so for unit testing purposes.

### List of available services
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