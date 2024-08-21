---
title: "Create a Menu Extension"
url: /apidocs-mxsdk/apidocs/extensibility-api/create-menu-extension/
weight: 4
---

## Introduction

This how-to describes how you can create an extension that adds an item to Studio Pro menu from scratch.

You can download the example in this how-to in [this GitHub repository](https://github.com/mendix/ExtensionAPI-Samples).

## Creating an Extension Project

1. Create a new project in Visual Studio based on `C# Class Library` template.
2. Choose a name for the project. Use a format similar to `MyCompany.MyProject.MendixExtension`, but it is not a hard requirement.
3. Choose `.NET 8.0` Framework.
4. Add `Mendix.StudioPro.ExtensionsAPI` NuGet package to the project references. Pick the version that does not exceed the Studio Pro version you installed. To do so, perform the following steps:

    1. Include a reference to the Extensions API [NuGet package](https://www.nuget.org/packages/Mendix.StudioPro.ExtensionsAPI): 
    2. Add new file named `manifest.json` to your project. Put the following content into it:

        ```json
        { "mx_extensions": [ "<name_of_your_project>.dll" ] }
        ```

    3. For the `manifest.json` file, right-click **Solution Explorer** > **Properties** and change the **Copy to Output Directory** property to **Copy always**.

## Creating a Test Mendix App

It is handy to have an app where the extension is used for the testing purposes. Perhaps you even want to share this app with your team by committing its code next to the extension project.

1. Create a new Mendix app to use for testing the extension, based on a starter app of your choice. You can also use an existing app.
2. Go to **App** > **Show App Directory in Explorer** to open the app directory.
3. Create a new folder `extensions` inside the app directory.
4. Create a subfolder named after your extension, for example, `MyCompany`, inside the `extensions` folder.
5. Copy the full path of the subfolder by pressing <kbd>Shift</kbd> and right-clicking at the same time, and then selecting **Copy as path**.
6. Add the `Post-build event` script below to your extension project [Build > Events configuration](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-specify-build-events-csharp?view=vs-2022):
   `xcopy /y /s /i "$(TargetDir)" "<path_to_folder>"`

Now if you build your extension project (usually you can do this by pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>) and click [Synchronize App Directory](/refguide/app-menu/#synchronize) in Studio Pro (or press <kbd>F4</kbd>), the latest version of your extension will be loaded.

## Creating Your First Extension

To introduce a simple extension that adds a menu item to Studio Pro, add the following class:

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

Build your extension and press <kbd>F4</kbd> in Studio Pro. Extension menu items are placed under a corresponding menu with the extensions name. If your extension is named "My Extension", then your menu items will be located under the **Extensions** > **My Company** submenu.

The Extensibility API provides you with several services you can use and they are injected into your extension classes by using the `ImportingConstructor` attribute.

It is also possible to get notified when your extension has been successfully loaded into Studio Pro and also just before it gets unloaded. It is as simple as subscribing to the `ExtensionLoaded` and `ExtensionUnloading` events.

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

1. Make sure that the current version of the extension code is loaded in Studio Pro.
2. Attach to Studio Pro process in Visual Studio debugger as follows:
   1. On the **Debug** menu, open the **Attach to Process** dialog box  (or press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd>).
   2. Search for `studiopro.exe` among the processes.
   3. Select the only found process (or the one with correct title, if you have many) and select **Attach**.

3. Add a Breakpoint inside `Action` delegate in `MyMenuExtension.GetMenus()`. It will be hit when you click **Extensions** > **MyCompany** > **Say hello** menu item.

## Adding a NuGet Dependency

You can freely use [NuGet packages](https://www.nuget.org/) from extensions to access reusable .NET libraries. The following one-time additional setup is required:

1. Open your extension project `.csproj` file by right-clicking **Solution Explorer** > **Edit Project File**.
2. Add the following line into the first `<PropertyGroup>`:

    ```xml
        <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>
    ```

Then you can add a NuGet dependency, for example, using the **Manage NuGet Packages** menu.
