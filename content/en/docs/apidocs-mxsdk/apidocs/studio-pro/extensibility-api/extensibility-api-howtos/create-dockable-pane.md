---
title: "Create a Dockable Pane Extension"
url: /apidocs-mxsdk/apidocs/extensibility-api/create-dockable-pane-extension/
weight: 5
---

## Introduction

This how-to describes how you can add a custom dockable web pane window to Studio Pro. Before you start this how-to, it is recommended to [create a menu extension](/apidocs-mxsdk/apidocs/extensibility-api/create-menu-extension/) first.

You can download the example in this how-to in [this GitHub repository](https://github.com/mendix/ExtensionAPI-Samples).

## Creating a Dockable Pane Extension Class

1. Open the project that you previously created when you [created the menu extension](/apidocs-mxsdk/apidocs/extensibility-api/create-menu-extension/).
2. Add a new class to the project and name it `MyDockablePaneExtension.cs`.
3. Replace the code in the file with the following code:

    ```csharp
    using System.ComponentModel.Composition;
    using Mendix.StudioPro.ExtensionsAPI.UI.DockablePane;
    
    namespace MyCompany.MyProject.MendixExtension;
    
    [Export(typeof(DockablePaneExtension))]
    public class MyDockablePaneExtension : DockablePaneExtension
    {
        public const string ID = "my-dockable-pane";
        public override string Id => ID;
    
        public override DockablePaneViewModelBase Open() => new MyDockablePaneExtensionWebViewModel("http://mendix.com");
    }
    ```

## The View Model for the Extension Tab

The dockable pane will have content, and this content comes in the form of a view model. The view model is an implementation of `WebViewDockablePaneViewModel`. 

You need to override the `InitWebView` method in which you can set up the content of your web view inside the dockable pane. In this example, it will contain the home page of `http://mendix.com`.

Below is a small example code of the view model:

```csharp
using Mendix.StudioPro.ExtensionsAPI.UI.DockablePane;
using Mendix.StudioPro.ExtensionsAPI.UI.WebView;

namespace MyCompany.MyProject.MendixExtension;

public class MyDockablePaneExtensionWebViewModel(string homePage) : WebViewDockablePaneViewModel
{
    public override void InitWebView(IWebView webView) => webView.Address = new Uri(homePage);
}
```

{{% alert color="warning" %}}
{{% snippet file="/static/_includes/apidocs-mxsdk/warning-wwwroot.md" %}}
{{% /alert %}}

The code above creates a new web-enabled tab view. You still need a way to show the new dockable pane. To do so, you need to modify the menu extension you added when you [created the menu extension](/apidocs-mxsdk/apidocs/extensibility-api/create-menu-extension/). Simple replace the existing content of `MyMenuExtension.cs` with the following code:

```csharp
using System.ComponentModel.Composition;
using Mendix.StudioPro.ExtensionsAPI.UI.Menu;
using Mendix.StudioPro.ExtensionsAPI.UI.Services;

namespace MyCompany.MyProject.MendixExtension;

[Export(typeof(MenuExtension))]
public class MyMenuExtension(IDockingWindowService dockingWindowService, IMessageBoxService messageBoxService) : MenuExtension
{
    public override IEnumerable<MenuViewModel> GetMenus()
    {
        yield return new MenuViewModel("Say hello", () => messageBoxService.ShowInformation("Hello World!"));
        yield return new MenuViewModel("Open My Dockable Pane", () => dockingWindowService.OpenPane(MyDockablePaneExtension.ID));
    }
}
```

The code above introduces a few new concepts.

Firstly, you inject the `IDockingWindowService` so that you can open a new dockable pane.

Secondly, you add a new menu item with the caption **Open My Dockable Pane** that you will use to open your new dockable pane using the `IDockingWindow` service that you have injected.

In order for the changes to reflect, you need to build your project. If you have opted to not automatically copy the output to the destination folder, then you will also need to manually copy the bin output from your project to your extension folder you created when you [created the menu extension](/apidocs-mxsdk/apidocs/extensibility-api/create-menu-extension/).

## Showing a Dockable Pane Without Adding a Custom Menu

Instead of adding a separate menu to open the docking pane, you can override the `ViewMenuCaption` property in the implementation of the `DockablePaneExtension`. This means that the menu that opens will be placed under the `View` top-level menu in Studio Pro and will have the caption provided. There is no need for a separate `MenuExtension` in this case.

```csharp
public override string? ViewMenuCaption => "My pane without custom menu";
```
