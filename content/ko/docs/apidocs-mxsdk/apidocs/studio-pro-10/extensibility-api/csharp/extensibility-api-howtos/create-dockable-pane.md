---
title: "C#을 사용하여 도킹 가능한 창 확장 만들기"
linktitle: "도킹 가능한 창"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-dockable-pane-extension/
weight: 5
---

## 소개

이 사용 방법에서는 Studio Pro에 사용자 정의 도킹 가능 웹 창 윈도우를 추가하는 방법을 설명합니다. 

이 사용 방법의 예제는 [이 GitHub 리포지토리](https://github.com/mendix/ExtensionAPI-Samples)에서 다운로드할 수 있습니다.

## 전제 조건

이 사용 방법을 시작하기 전에 먼저 [C#을 사용하여 메뉴 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/)를 완료하는 것이 좋습니다.

## 도킹 가능한 창 확장 클래스 만들기

1. [C#을 사용하여 메뉴 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/)를 따라 이전에 만든 프로젝트를 여십시오.
2. 프로젝트에 *MyDockablePaneExtension.cs*라는 새 클래스를 추가하십시오.
3. 파일의 코드를 다음으로 바꾸십시오:

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

도킹 가능한 창에는 뷰 모델을 통해 제공되는 콘텐츠가 있습니다. 뷰 모델은 `WebViewDockablePaneViewModel`의 구현입니다. 

`InitWebView` 메서드를 오버라이드하여 도킹 가능한 창 내부의 웹 뷰 콘텐츠를 설정할 수 있습니다. 이 예에서는 `http://mendix.com` 홈페이지가 포함됩니다.

아래는 뷰 모델의 코드 예입니다:

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

## 메뉴를 통해 창 표시하기

새 도킹 가능한 창을 표시하려면 [C#을 사용하여 메뉴 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/)를 따라 만든 확장 기능을 수정하십시오. 

1. `MyMenuExtension.cs`를 여십시오.
2. 내용을 다음 코드로 바꾸십시오:

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

위 코드는 다음 개념을 소개합니다:

* `IDockingWindowService`가 주입되어 도킹 가능한 창을 열 수 있습니다
* *Open My Dockable Pane*이라는 새 메뉴 항목이 추가되어 `IDockingWindow` 서비스를 사용하여 창을 트리거합니다

이러한 변경을 수행한 후 프로젝트를 빌드하십시오. 출력을 대상 폴더에 자동으로 복사하도록 선택하지 않은 경우 [C#을 사용하여 메뉴 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/) 프로세스를 따라 만든 확장 폴더에 프로젝트의 bin 출력을 수동으로 복사하십시오.

## 사용자 정의 메뉴 없이 도킹 가능한 창 표시하기

도킹 창을 열기 위한 별도의 메뉴 항목을 추가하지 않으려면 `DockablePaneExtension` 구현에서 `ViewMenuCaption` 속성을 오버라이드할 수 있습니다. 

이렇게 하면 제공된 캡션을 사용하여 Studio Pro의 `View` 최상위 메뉴 아래에 메뉴가 배치됩니다. 이 경우 별도의 `MenuExtension` 클래스가 필요하지 않습니다.

```csharp

```csharp
public override string? ViewMenuCaption => "My pane without custom menu";
```
