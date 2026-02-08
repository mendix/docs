---
title: "C#를 사용하여 도킹 가능한 패널 확장 만들기"
linktitle: "도킹 가능한 패널"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-dockable-pane-extension/
weight: 5
---

## 소개

이 How-to에서는 add a custom dockable web pane window to Studio Pro. 

이 How-to의 예제는 [이 GitHub 저장소](https://github.com/mendix/ExtensionAPI-Samples)에서 다운로드할 수 있습니다.

## 전제 조건

이 How-to를 시작하기 전에 먼저 [Create a Menu Extension Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/) first.

## 도킹 가능한 패널 확장 클래스 만들기

1. Open the project you previously created by following [Create a Menu Extension Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/).
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

## 확장 탭의 뷰 모델 만들기

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

## 메뉴를 통해 패널 표시하기

To show the new dockable pane, modify the extension you created when following [Create a Menu Extension Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/). 

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

위 코드에서는 다음 개념을 소개합니다:

* The `IDockingWindowService` is injected to allow opening the dockable pane
* A new menu item named *Open My Dockable Pane* is added to trigger the pane using the `IDockingWindow` service

이러한 변경을 완료한 후 프로젝트를 빌드하세요. If you have opted to not automatically copy the output to the destination folder, manually copy the bin output from your project to your extension folder you created when you followed the [Create a Menu Extension Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/) process.

## 사용자 정의 메뉴 없이 도킹 가능한 패널 표시하기

If you prefer to not add a separate menu item to open the docking pane, you can override the `ViewMenuCaption` property in the `DockablePaneExtension` implementation. 

This places the menu under the `View` top-level menu in Studio Pro using the caption provided. In this case, you do not need a separate `MenuExtension` class.

```csharp
public override string? ViewMenuCaption => "My pane without custom menu";
```
