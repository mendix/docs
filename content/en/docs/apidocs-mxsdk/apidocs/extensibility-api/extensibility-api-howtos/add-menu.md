---
title: "Add a Menu to Studio Pro"
url: /apidocs-mxsdk/apidocs/extensibility-api/add-menu/
weight: 15
---

## Introduction

This how-to describes how you can add a menu that contains submenus, some of which also contain submenus of their own. Before you start this how-to, it is recommended to [create a menu extension](/apidocs-mxsdk/apidocs/extensibility-api/create-menu-extension/) first.

You can download the example in this how-to in [this GitHub repository](https://github.com/mendix/ExtensionAPI-Samples).

## Creating Menu Extension Class

1. Open the project that you previously created when you [created the menu extension](/apidocs-mxsdk/apidocs/extensibility-api/create-menu-extension/).
2. Add a new class to the project and name it `MyMenuExtension.cs`.
3. Replace the code in the file with the following code:

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

The code above creates a single menu, `Beverages`, which contains the submenus `Hot` and `Cold`, both of which contain some submenus. Note that when you are creating this menu structure, you only return the main parent menu (in this example, the `Beverages` menu) from the `GetMenus` method. You should only return the topmost parents in your list, so only the ones that do not have a parent should be returned. In the example above, there is only one.

If an app contains one or more extensions, a top-level menu named `Extensions` will appear in the main menu bar of Studio Pro. Menus that are created from `MenuExtension` implementations will be grouped by their extension entry point name (in this example, `MyCompany`), and then placed under their own dedicated submenu under the main `Extensions` top-level menu. For example, the `MyMenuExtension` above will be placed as follows: **Extensions** > **MyCompany** > **MyMenuExtension**.

A menu can only be a parent (namely, a menu that contains submenus) or have an action. You cannot create a menu with an action which also contains submenus.

You can add a `MenuSeparator` to a menu, via the `Separator` property. Options are `After`, `Before` or `None`. The default value is `None`. You can also disable a menu by setting its `IsEnabled` property to `false`. Menus are enabled by default.
