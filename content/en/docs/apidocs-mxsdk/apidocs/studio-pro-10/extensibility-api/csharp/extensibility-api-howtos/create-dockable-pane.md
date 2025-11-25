---
title: "Create a Dockable Pane Extension Using C#"
linktitle: "Dockable Pane"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-dockable-pane-extension/
weight: 5
---

## Introduction

This how-to describes how to add a custom dockable web pane window to Studio Pro. 

You can download the example in this how-to in [this GitHub repository](https://github.com/mendix/ExtensionAPI-Samples).

## Prerequisites

Before you start this how-to, it is recommended to [Create a Menu Extension Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/) first.

## Creating a Dockable Pane Extension Class

1. Open the project you previously created by following [Create a Menu Extension Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/).
2. Add a new class to the project named *MyDockablePaneExtension.cs*.
3. Replace the code in the file with the following:

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

## Creating The View Model for the Extension Tab

The dockable pane has content, which is provided through a view model. The view model is an implementation of `WebViewDockablePaneViewModel`. 

Override the `InitWebView` method, where you can set up the content of your web view inside the dockable pane. In this example, it contains the `http://mendix.com` home page.

Below is a code example of the view model:

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

## Displaying the Pane Through a Menu

To show the new dockable pane, modify the extension you created when following [Create a Menu Extension Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/). 

1. Open `MyMenuExtension.cs`.
2. Replace its contents with the following code:

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

The code above introduces the following concepts:

* The `IDockingWindowService` is injected to allow opening the dockable pane
* A new menu item named *Open My Dockable Pane* is added to trigger the pane using the `IDockingWindow` service

Once you have made these changes, build your project. If you have opted to not automatically copy the output to the destination folder, manually copy the bin output from your project to your extension folder you created when you followed the [Create a Menu Extension Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/) process.

## Showing a Dockable Pane Without a Custom Menu

If you prefer to not add a separate menu item to open the docking pane, you can override the `ViewMenuCaption` property in the `DockablePaneExtension` implementation. 

This places the menu under the `View` top-level menu in Studio Pro using the caption provided. In this case, you do not need a separate `MenuExtension` class.

```csharp

```csharp
public override string? ViewMenuCaption => "My pane without custom menu";
```
