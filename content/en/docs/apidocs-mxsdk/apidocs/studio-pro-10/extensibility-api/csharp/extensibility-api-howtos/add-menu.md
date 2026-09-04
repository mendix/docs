---
title: "Add Menus and Submenus to Studio Pro Using C#"
linktitle: "Structured Menus"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/add-menu/
weight: 15
---

## Introduction

This how-to describes how to add a menu that contains sub-menus, some of which also contain sub-menus of their own. 

You can download the example in this how-to in [this GitHub repository](https://github.com/mendix/ExtensionAPI-Samples).

## Prerequisites

This how-to uses the results of [Create a Menu Extension Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/). Complete that how-to before starting this one.

## Creating Menu Extension Class

1. Open the project you created when following [Create a Menu Extension Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/).
2. Add a new class to the project and name it *MyMenuExtension.cs*.
3. Replace the code in the file with the following:

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

### Menu Structure Overview

The code above creates a single menu, `Beverages`. This menu contains the following:

* `Beverages` contain two sub-menus: `Hot` and `Cold`
* `Hot` contains `Coffee` and `Tea`
* `Coffee` contains `Black Coffee`, `Decaf`, and `Espresso` 
* `Espresso` contains `Regular Espresso` and `Ristretto` 
* `Cold` contains `Soda`

Only the top-most parent menu (`Beverages`) is returned from the `GetMenus` method. You should only return menus that do not have a parent.

### Menu Placement

If an app contains one or more extensions, a top-level menu named `Extensions` will appear in the main menu bar of Studio Pro. 

Menus that are created from `MenuExtension` implementations are grouped by their extension entry point name (in this example, `MyCompany`), and are placed under a dedicated sub-menu. For example, `MyMenuExtension` will be placed as follows: **Extensions** > **MyCompany** > **MyMenuExtension**.

### Menu Properties

A menu can either:

* Be a parent (a menu that contains sub-menus), or 
* Have an action

You cannot create a menu that both contains sub-menus and has an action.

#### Separators

You can add a `MenuSeparator` to a menu using the `Separator` property. The options include:

* `After`
* `Before` 
* `None` (default). 

#### Enabling and Disabling Menus

Menus are enabled by default. To disable a menu, set its `IsEnabled` property to `false`.
