---
title: "Create a Menu Extension Using C#"
linktitle: "Create Menu"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/
weight: 4
---

## Introduction

This how-to describes how to create an extension that adds an item to Studio Pro menu from scratch.

You can download the example in this how-to in [this GitHub repository](https://github.com/mendix/ExtensionAPI-Samples).

## Creating an Extension Project

1. Open Visual Studio and create a new project using the `C# Class Library` template.
2. Name your project. It recommended to use a format similar to `MyCompany.MyProject.MendixExtension`.
3. Select the `.NET 8.0` Framework.
4. Add `Mendix.StudioPro.ExtensionsAPI` NuGet package to the project references. Pick the version that does not exceed the Studio Pro version you installed. To do so, perform the following steps:

    1. Include a reference to the Extensions API [NuGet package](https://www.nuget.org/packages/Mendix.StudioPro.ExtensionsAPI): 
    2. Add new file named `manifest.json` to your project. 
    3. Add the following code into the file:

        ```json
        { "mx_extensions": [ "<name_of_your_project>.dll" ] }
        ```

    4. For the `manifest.json` file, right-click **Solution Explorer** > **Properties** and change the **Copy to Output Directory** property to **Copy always**.

## Creating a Test Mendix App

Test your extension by creating or using a Mendix app.

1. Create a new Mendix app using a starter template, or use an existing app.
2. In Studio Pro, go to **App** > **Show App Directory in Explorer** to open the app directory.
3. Inside the app directory, create a new folder named *Extensions*.
4. Inside the **Extensions** folder, create a sub-folder named after your extension (for example, *MyCompany*).
5. Copy the full path of the sub-folder:
   1. Press <kbd>Shift</kbd> and right-click at the same time
   2. Select **Copy as path**.
6. Add the `Post-build event` script below to your extension project:
   1. Go to [Build > Events configuration](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-specify-build-events-csharp?view=vs-2022)
   2. Use this command: `xcopy /y /s /i "$(TargetDir)" "<path_to_folder>"`
7. Build your extension project by pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>
8. In Studio Pro, click [Synchronize App Directory](/refguide/app-menu/#synchronize) (or press <kbd>F4</kbd>) to load the latest version of your extension.

## Creating Your First Extension

To add a menu item to Studio Pro, add the following class:

```csharp
using System.ComponentModel.Composition;
using Mendix.StudioPro.ExtensionsAPI.UI.Menu;
using Mendix.StudioPro.ExtensionsAPI.UI.Services;

namespace MyCompany.MyProject.MendixExtension;

[method: ImportingConstructor]
[Export(typeof(MenuExtension))]
public class MyMenuExtension(IMessageBoxService messageBoxService) : MenuExtension
{
    public override IEnumerable<MenuViewModel> GetMenus()
    {
        yield return new MenuViewModel("Say hello", () => messageBoxService.ShowInformation("Hello World!"));
    }
}
```

Build your extension and press <kbd>F4</kbd> in Studio Pro. Menu items are placed under a corresponding menu with the extensions name. For example, if your extension is named *My Extension*, your menu items will be located under the **Extensions** > **MyCompany** sub-menu.

The Extensibility API provides several services you can use and are injected into your extension classes by using the `ImportingConstructor` attribute.

## Subscribing to Extension Events

You can be notified when your extension has been successfully loaded and unloaded from Studio Pro by subscribing to the `ExtensionLoaded` and `ExtensionUnloading` events.

```csharp
using Mendix.StudioPro.ExtensionsAPI.UI.Events;

namespace MyCompany.MyProject.MendixExtension;

[method: ImportingConstructor]
[Export(typeof(MenuExtension))]
public class MyMenuExtension() : MenuExtension
{
    public MyMenuExtension()
    {
       Subscribe<ExtensionLoaded>(onEvent: () => { MyActionOnLoaded() });
       Subscribe<ExtensionUnloading>(onEvent: () => { MyActionOnUnloading() });
    }
}
```

## Debugging Your Extension

1. Ensure the latest version of the extension code is loaded in Studio Pro.
2. Attach the Visual Studio debugger to Studio Pro:
   1. Go to **Debug** > **Attach to Process** dialog box (or press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd>).
   2. Search for and select `studiopro.exe`.
   3. Click **Attach**.

3. Add a breakpoint inside the `Action` delegate in `MyMenuExtension.GetMenus()`. 
4. Trigger the breakpoint by clicking **Extensions** > **MyCompany** > **Say hello** menu item.

## Adding a NuGet Dependency

You can access reusable .NET libraries via [NuGet](https://www.nuget.org/) Follow the steps below for a one-time setup:

1. In Visual Studio, open your extension project `.csproj` file by right-clicking **Solution Explorer** > **Edit Project File**.
2. Add the following line inside the first `<PropertyGroup>`:

    ```xml
        <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>
    ```

3. Use the **Manage NuGet Packages** to add a dependency. 
