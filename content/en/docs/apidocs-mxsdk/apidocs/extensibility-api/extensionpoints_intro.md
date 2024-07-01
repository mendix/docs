---
title: "Introduction to Extension Points"
url: /extensions-api/extensionpoints_intro/
weight: 9
---

# Extension Points

Extension points allow you to hook functionality into various areas of the Studio Pro IDE.

- **Extension point** - is a base class that you as an extension developer can inherit from. Your functionality will then be loaded by Studio Pro. These classes all have the `*Extension` suffix,
  inherit from [`ExtensionBase`](xref:Mendix.StudioPro.ExtensionsAPI.ExtensionBase) base class, and contain a few virtual or abstract members.
  - Extension point is the only way you can add a custom behavior to Studio Pro. The rest of the APIs are there only to aid with implementing or expressing these behaviors.
  - To be injected, your class must be decorated with [ExportAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.composition.exportattribute?view=dotnet-plat-ext-6.0)
    like in the example above. This attribute is part of [Managed Extensibility Framework](https://docs.microsoft.com/en-us/dotnet/framework/mef/)
    that is employed by Studio Pro.

### List of available extension points

#### Studio Pro UI extensions
- [ContextMenuExtension](xref:Mendix.StudioPro.ExtensionsAPI.UI.Menu.ContextMenuExtension`1) = allows injecting new context menu items into model elements.
- [MenuExtension](xref:Mendix.StudioPro.ExtensionsAPI.UI.Menu.MenuExtension) - allows injecting new menu items into Studio Pro menu bar.
- [DockablePaneExtension](xref:Mendix.StudioPro.ExtensionsAPI.UI.DockablePane.DockablePaneExtension) - allows introducing new
  [dockable pane](https://docs.mendix.com/refguide/studio-pro-overview/#5-dockable-panes) like Connector or Documentation. Panes integrate with Studio Pro
  [layout system](https://docs.mendix.com/refguide/view-menu/#layout-of-panes) automatically.
  - Note that it is advised to introduce a new View menu item for each pane, so that Studio Pro user has a way to open it.

Additionally, there are additional features that provide access to:

- [Studio Pro configuration](xref:Mendix.StudioPro.ExtensionsAPI.ExtensionBase.Configuration) and to the
- [The currently opened App](xref:Mendix.StudioPro.ExtensionsAPI.UI.UIExtensionBase.CurrentApp), as well as event subscription mechanism to that App being
- Events can be subscribed to by using the subscribe and unsubscribe methods exposed in [UIExtensionBase](xref:Mendix.StudioPro.ExtensionsAPI.UI.UIExtensionBase). 

#### Studio Pro and MxBuild extensions
- [ConsistencyCheckExtension](xref:Mendix.StudioPro.ExtensionsAPI.ConsistencyCheck.ConsistencyCheckExtension`1) - allows injecting custom logic into
  the [Consistency check](https://docs.mendix.com/refguide/consistency-errors/) process.