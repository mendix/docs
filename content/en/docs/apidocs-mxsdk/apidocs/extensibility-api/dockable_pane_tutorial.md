---
title: "Dockable Pane Tutorial"
url: /extensions-api/dockable_pane_tutorial/
weight: 5
---

# Create a simple Dockable pane extension

In this how-to tutorial we will be adding a custom dockable web pane window to Studio Pro. This tutorial builds upon the [basic tutorial](/extensions-api/basic_tutorial/) it is best if you start there first.

You can download a copy of this tutorial [here](https://github.com/mendix/ExtensionAPI-Samples)

### Create a Dockable pane extension class

Open the project that you previously created in the [basic tutorial](/extensions-api/basic_tutorial/). You can now add a new class to the project. Call it `MyDockablePaneExtension.cs`. You can now replace the code within the file with the following code:

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
#### The view model for the extension tab
The dockable pane will have content, and this content comes in the form of a view model, which is an implementation of `WebViewDockablePaneViewModel`. You need to override the `InitWebView` method in which you can set up the content of your webview inside the dockable pane (in this example, it will contain the home page of `http://mendix.com`). A small sample code of the view model can be seen below:

```csharp
using Mendix.StudioPro.ExtensionsAPI.UI.DockablePane;
using Mendix.StudioPro.ExtensionsAPI.UI.WebView;

namespace MyCompany.MyProject.MendixExtension;

public class MyDockablePaneExtensionWebViewModel(string homePage) : WebViewDockablePaneViewModel
{
    public override void InitWebView(IWebView webView) => webView.Address = new Uri(homePage);
}
```

This will create a new web enabled tabview but we still need a way to show the new dockable pane. In order to do that we will be modifying the menu extension you added in the [basic tutorial](/extensions-api/basic_tutorial/)

Simply replace the existing content of `MyMenuExtension.cs` with the following code:

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

With the changes we introduced a few new concepts. Firstly we have injected the IDockingWindowService so that we can open a new dockable pane.

Second we added a new Menu item with the caption 'Open My Dockable Pane' which we will use to open our new dockable pane using the IDockingWindow service that we injected.

In order for the changes to reflect you need to build your project. (If you have opted to not automatically copy the output to the destination folder then you will also need to manually copy the bin output from your project to your extension folder you created in [basic tutorial](/extensions-api/basic_tutorial/))

### Showing a dockable pane without adding a custom menu

Instead of adding a separate menu to open the docking pane, we can just override the `ViewMenuCaption` property in our implementation of the `DockablePaneExtension`. This will mean that the menu that opens it will be placed under the `View` top level menu in Studio Pro and will have the caption provided. No need for a separate `MenuExtension` in this case.

```csharp
public override string? ViewMenuCaption => "My pane without custom menu";
```
