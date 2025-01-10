---
title: "Extension Points"
url: /apidocs-mxsdk/apidocs/extensibility-api/extensionpoints_intro/
weight: 9
---

## Introduction

Extension points allow you to hook functionality into various areas of the Studio Pro IDE. Extension point is a base class that you as an extension developer can inherit from. Your functionality will then be loaded by Studio Pro. These classes all have the `*Extension` suffix, inherit from [`ExtensionBase`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI/ExtensionBase.md) base class, and contain a few virtual or abstract members.

Extension point is the only way you can add a custom behavior to Studio Pro. The rest of the APIs are there only to aid with implementing or expressing these behaviors.

To be injected, your class must be decorated with [ExportAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.composition.exportattribute?view=dotnet-plat-ext-6.0)
like in the example above. This attribute is part of [Managed Extensibility Framework](https://docs.microsoft.com/en-us/dotnet/framework/mef/)
that is employed by Studio Pro.

## List of Available Extension Points

### Studio Pro UI Extensions

* [ContextMenuExtension](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.Menu/ContextMenuExtension-1.md) – This allows injecting new context menu items into model elements.

* [MenuExtension](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.Menu/MenuExtension.md) – This allows injecting new menu items into Studio Pro menu bar.

* [DockablePaneExtension](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.DockablePane/DockablePaneExtension.md) – allows introducing new
  [dockable pane](/refguide/studio-pro-overview/#panes) like Connector or Documentation. Panes integrate with Studio Pro
  [layout system](/refguide/view-menu/#layout-of-panes) automatically.
  
  {{% alert color="info" %}}It is advised to introduce a new **View** menu item for each pane, so that Studio Pro users have a way to open it.{{% /alert %}}

Additionally, there are additional features that provide access to the following:

* [Studio Pro configuration](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI/ExtensionBase/Configuration.md)
* [The currently opened app](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI/UIExtensionBase/CurrentApp.md), as well as event subscription mechanism to that app
* Events can be subscribed to by using the subscribe and unsubscribe methods exposed in [UIExtensionBase](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI/UIExtensionBase.md). 

### Studio Pro and MxBuild Extensions

* [ConsistencyCheckExtension](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.ConsistencyCheck/ConsistencyCheckExtension-1.md) – This allows injecting custom logic into the [Consistency check](/refguide/consistency-errors/) process.
