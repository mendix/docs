---
title: "Basic Tutorial"
url: /extensions-api/basic_tutorial/
weight: 4
---

# Create a simple Menu extension

In this how-to we go through the process of creating an extension that adds an item to Studio Pro menu from scratch.

You can download a copy of this tutorial [here](https://github.com/mendix/ExtensionAPI-Samples)

### Create extension project

- Create a new project in Visual Studio based on `C# Class Library` template.
- Choose a name for the project. We recommend using a format like `MyCompany.MyProject.MendixExtension`, but it is not a hard requirement.
- Choose `.NET 6.0` Framework.
- Add `Mendix.StudioPro.ExtensionsAPI` nuget package to the project references. Pick the version that does not exceed the Studio Pro version you've installed. To do so:
- Include a reference to the Extensions API [nuget package](https://www.nuget.org/packages/Mendix.StudioPro.ExtensionsAPI): 
- Add new file named `manifest.json` to your project. Put the following content into it:
```json
{ "mx_extensions": [ "<name_of_your_project>.dll" ] }
```
- Change "Copy to Output Directory" property of that file (accessible with right click in Solution Explorer > Properties) to "Copy always".

### Create test Mendix App

It is handy to have a single App where the extension is used for the testing purposes. You might even want to share this App with you team by
committing its code next to the extension project.

- Create new Mendix App to use for extension testing, based on Starter App of your choice.
  - You can also use an existing App - just open it in Studio Pro.
- Open App in Windows Explorer using App > Show App Directory in Explorer menu.
- Create new folder `extensions` inside the App directory.
- Create sub-folder named after your extension (e.g. `MyCompany`) inside of `extensions` folder. Copy its full path (for example with Shift + right click > Copy as path).
- Add the following "Post-build event" script to your extension project [Build > Events configuration](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-specify-build-events-csharp?view=vs-2022):
  `xcopy /y /s /i "$(TargetDir)" "<path_to_folder>"`

Now if you build your extension project (usually can be done with `Ctrl+Shift+B` shortcut) and click [Synchronize App Directory](https://docs.mendix.com/refguide/app-menu/#synchronize)
in Studio Pro (or use `F4` shortcut), the latest version of your extension will be loaded.

### Create your first extension

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

Build your extension and press `F4` in Studio Pro. Extension menu items are placed under a corresponding menu with the extensions name. If your extension is named "My Extension" then your menu items will be located under the "Extensions" > "My Company" submenu. For more information about creating menus, please see the menu tutorial [here](/extensions-api/menu_tutorial/)

You might also have noticed the usage of the `IMessageBoxService` by the menu action. The Extensibility API will provide you with several services you can use and they will be injected into your extension classes by using the `ImportingConstructor` attribute.

It is also possible to be notified when your extension has been successfully loaded into Studio Pro and also just before it gets unloaded. It is as simple as subscribing to the `ExtensionLoaded` and `ExtensionUnloading` events.

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

### Debug your extension

- Make sure that the current version of the extension code is loaded in Studio Pro.
- Attach to Studio Pro process in Visual Studio debugger. To do that:
  - open "Attach to Process" dialog through Debug menu (or `Ctrl+Alt+P` shortcut);
  - search for `studiopro.exe` among the processes;
  - select the only found process (or the one with correct title if you have many) and click Attach.
- Add a Breakpoint inside `Action` delegate in `MyMenuExtension.GetMenus()`. It will be hit when you click `Extensions > MyCompany > Say hello` menu item.

### Add NuGet dependency

You can freely use [NuGet packages](https://www.nuget.org/) from extensions to access reusable .NET libraries. Except that one-time
additional setup is required:
- Open your extension project `.csproj` file (e.g. with right click in Solution Explorer > Edit Project File).
- Add the following line into the first `<PropertyGroup>`:
```xml
    <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>
```
- Then you can add a NuGet dependency e.g. using Manage NuGet Packages menu.
