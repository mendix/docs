---
title: "C#를 사용하여 메뉴 확장 만들기"
linktitle: "메뉴 만들기"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/
weight: 4
---

## 소개

이 How-to에서는 create an extension that adds an item to Studio Pro menu from scratch.

이 How-to의 예제는 [이 GitHub 저장소](https://github.com/mendix/ExtensionAPI-Samples)에서 다운로드할 수 있습니다.

## 확장 프로젝트 만들기

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

## 테스트 Mendix 앱 만들기

Mendix 앱을 만들거나 기존 앱을 사용하여 확장을 테스트하세요.

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

## 첫 번째 확장 만들기

Studio Pro에 메뉴 항목을 추가하려면 다음 클래스를 추가하세요:

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

확장을 빌드하고 <kbd>F4</kbd> in Studio Pro. Menu items are placed under a corresponding menu with the extensions name. For example, if your extension is named *My Extension*, your menu items will be located under the **Extensions** > **MyCompany** sub-menu.

The Extensibility API provides several services you can use and are injected into your extension classes by using the `ImportingConstructor` attribute.

## 확장 이벤트 구독하기

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

## 확장 디버깅

1. Ensure the latest version of the extension code is loaded in Studio Pro.
2. Attach the Visual Studio debugger to Studio Pro:
   1. Go to **Debug** > **Attach to Process** dialog box (or press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd>).
   2. Search for and select `studiopro.exe`.
   3. Click **Attach**.

3. Add a breakpoint inside the `Action` delegate in `MyMenuExtension.GetMenus()`. 
4. Trigger the breakpoint by clicking **Extensions** > **MyCompany** > **Say hello** menu item.

## NuGet 종속성 추가하기

You can access reusable .NET libraries via [NuGet](https://www.nuget.org/) Follow the steps below for a one-time setup:

1. In Visual Studio, open your extension project `.csproj` file by right-clicking **Solution Explorer** > **Edit Project File**.
2. Add the following line inside the first `<PropertyGroup>`:

    ```xml
        <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>
    ```

3. Use the **Manage NuGet Packages** to add a dependency. 
