---
title: "Extensibility Extension Points in C#"
linktitle: "Extension Points"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/extension-points/
weight: 9
---

## Introduction

Extension points allow you to hook functionality into various areas of the Studio Pro IDE. `ExtensionPoint` is a base class that extension developers can inherit from. Once inherited, your functionality will be loaded by Studio Pro. These classes all have the `*Extension` suffix, inherit from the [`ExtensionBase`](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI/ExtensionBase.md) base class, and include a few virtual or abstract members.

`ExtensionPoint` is the only way to add custom behavior to Studio Pro. All other APIs provided solely to support the implementation or expression of these behaviors.

To be injected, your class must be decorated with the [ExportAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.composition.exportattribute?view=dotnet-plat-ext-6.0),
as shown in the example above. This attribute is part of the [Managed Extensibility Framework](https://docs.microsoft.com/en-us/dotnet/framework/mef/) that is used by Studio Pro.

## List of Available Extension Points

### Studio Pro UI Extensions

* [ContextMenuExtension](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.Menu/ContextMenuExtension-1.md) – allows injecting new context menu items into model elements
* [MenuExtension](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.Menu/MenuExtension.md) – allows injecting new menu items into the Studio Pro menu bar
* [DockablePaneExtension](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI.DockablePane/DockablePaneExtension.md) – allows introducing new
  [dockable pane](/refguide/studio-pro-overview/#panes), like Connector or Documentation; panes integrate with Studio Pro
  [layout system](/refguide/view-menu/#layout-of-panes) automatically.
  
  {{% alert color="info" %}}It is advised to introduce a new **View** menu item for each pane so Studio Pro users have a way to open it.{{% /alert %}}

There are additional features that provide access to the following:

* [Studio Pro configuration](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI/ExtensionBase/Configuration.md)
* [The currently opened app](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI/UIExtensionBase/CurrentApp.md), as well as event subscription mechanism to that app
* Events can be subscribed to by using the subscribe and unsubscribe methods exposed in [UIExtensionBase](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.UI/UIExtensionBase.md)

### Studio Pro and MxBuild Extensions

* [ConsistencyCheckExtension](https://github.com/mendix/ExtensionAPI-Samples/blob/main/API%20Reference/Mendix.StudioPro.ExtensionsAPI.ConsistencyCheck/ConsistencyCheckExtension-1.md) – allows injecting custom logic into the [Consistency check](/refguide/consistency-errors/) process
