---
title: "Menu Tutorial"
url: /extensions-api/menu_tutorial/
weight: 15
---

# Add a menu to Studio Pro

In this how-to tutorial we will be adding a menu which contains submenus, some of which also containing submenus of their own. This tutorial builds upon the [basic tutorial](/extensions-api/basic_tutorial/) it is best if you start there first.

You can download a copy of this tutorial [here](https://github.com/mendix/ExtensionAPI-Samples)

### Create menu extension class

Open the project that you previously created in the [basic tutorial](/extensions-api/basic_tutorial/). You can now add a new class to the project. Call it `MyMenuExtension.cs`. You can now replace the code within the file with the following code:

```csharp
using Mendix.StudioPro.ExtensionsAPI.UI.Menu;
using Mendix.StudioPro.ExtensionsAPI.UI.Services;
using System.ComponentModel.Composition;

namespace MyCompany.MyProject.MendixExtension;

[Export(typeof(MenuExtension))]
public class MyMenuExtension : MenuExtension
{
    readonly IMessageBoxService messageBoxService;

    [ImportingConstructor]
    public MyMenuExtension(IMessageBoxService messageBoxService)
    {
        this.messageBoxService = messageBoxService;
    }

    public override IEnumerable<MenuViewModel> GetMenus()
    {
        var ristretto = new MenuViewModel("Ristretto", () => messageBoxService.ShowInformation("Ristretto"));
        var regularExpresso = new MenuViewModel("Regular Espresso", () => messageBoxService.ShowInformation("Regular Espresso"));
        var espresso = new MenuViewModel("Espresso", [regularExpresso, ristretto]);
        var blackCoffee = new MenuViewModel("Black Coffee", () => messageBoxService.ShowInformation("Black Coffee"));
        var decaf = new MenuViewModel("Decaf", () => messageBoxService.ShowInformation("Decaf")) { Separator = MenuSeparator.After };
        var coffee = new MenuViewModel("Coffee", [blackCoffee, decaf, espresso]);

        var tea = new MenuViewModel("Tea", () => messageBoxService.ShowInformation("Tea"));

        var hot = new MenuViewModel("Hot", [coffee, tea]);

        var soda = new MenuViewModel("Soda", () => messageBoxService.ShowInformation("Soda"));
        var cold = new MenuViewModel("Cold", [soda]);

        var beverages = new MenuViewModel("Beverages", [hot, cold]);
        yield return beverages;
    }
}
```

This will create a single menu, `Beverages`, which contains the submenus `Hot` and `Cold`, both of which contain some submenus. It is important to note that when you are creating this menu structure, you only return the main parent menu (in this example, the `Beverages` menu) from the `GetMenus` method. You should only return the topmost parents in your list, so only the ones that don't have a parent should be returned. In the sample above, there is only one.

If an app contains one or more extensions, a top-level menu named `Extensions` will appear in the main menu bar of Studio Pro. Menus that are created from `MenuExtension` implementations will be grouped by their extension entry point name (in this example, `MyCompany`), and then placed under their own dedicated submenu under the main `Extensions` top-level menu. For example, the `MyMenuExtension` above will be placed like so: `Extensions > MyCompany > MyMenuExtension`;

A menu can only be a parent (menu that contains submenus) or have an action. You cannot create a menu with an action which also contains submenus.

You can add a `MenuSeparator` to a menu, via the `Separator` property. Options are `After`, `Before` or `None`, which is the default. You can also disable a menu by setting its `IsEnabled` property to false. Menus are enabled by default.
