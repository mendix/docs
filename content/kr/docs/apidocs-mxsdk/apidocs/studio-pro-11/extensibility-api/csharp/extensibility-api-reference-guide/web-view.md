---
title: "C#의 Extensibility 웹 뷰"
linktitle: "웹 뷰"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/web-views/
weight: 12
---

## 소개

Studio Pro Extensibility API를 사용하여 사용자 지정 UI를 추가할 수 있는 곳이면 어디든 웹 기술을 사용하여 구현할 수 있습니다.

Studio Pro에는 웹 기반 UI를 표시하기 위한 내장 웹 뷰가 포함되어 있습니다. 또한 웹 UI와 필요한 데이터를 모두 제공하는 데 사용할 수 있는 내장 웹 서버도 제공합니다.

또한 양방향 메시지 전달 메커니즘을 통해 웹 콘텐츠와 확장 프로그램의 C# 부분 간에 직접 통신할 수 있습니다.

## UI에 웹 뷰 표시

Extensibility API를 사용하여 사용자 지정 UI를 추가할 수 있는 곳이 많이 있습니다.

일반적으로 Extensibility API는 UI에 대한 뷰 모델을 반환하도록 요구합니다. 모든 뷰 모델 유형에는 웹 뷰에 UI를 표시하는 데 사용되는 해당 기본 클래스가 있습니다.

아래 표에는 사용자 지정 UI를 지원하는 API와 해당 뷰 모델 기본 클래스가 나열되어 있습니다:

| UI 요소                     | UI 추가용 API                        | 뷰 모델용 기본 클래스      |
|--------------------------------|------------------------------------------|--------------------------------|
| 탭(작업 영역)          | `IDockingWindowManager.OpenTab(...)`     | `WebViewTabViewModel`          |
| 문서 탭(작업 영역) | `AppExplorerExtension.EditDocument(...)` | `WebViewDocumentTabViewModel`  |
| 도킹 가능한 창                  | `DockablePaneExtension.Open(...)`        | `WebViewDockablePaneViewModel` |
| 모달 대화 상자                   | `IDialogService.ShowDialog(...)`         | `WebViewModalDialogViewModel`  |

뷰 모델 기본 클래스는 `abstract`이므로 기본 클래스에서 파생되는 고유한 뷰 모델 클래스를 만들어야 합니다.

각 뷰 모델 클래스에는 웹 뷰를 초기화하기 위해 재정의해야 하는 `InitWebView`라는 메서드가 있습니다.

이 메서드에서 웹 뷰에 웹 콘텐츠가 포함된 (로컬) URL로 이동하도록 지시할 수 있습니다.

또한 뷰 모델 클래스를 사용하여 웹 뷰와 통신하기 위한 로직을 보관할 수 있습니다.

## 웹 뷰에 콘텐츠 제공

웹 뷰에 콘텐츠를 제공하고 양방향으로 통신하는 방법은 [Todo 예제 확장 프로그램 빌드](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/build-todo-example-extension/)를 참조하십시오.

{{% alert color="warning" %}}
{{% snippet file="/static/_includes/apidocs-mxsdk/warning-wwwroot.md" %}}
{{% /alert %}}

## 문제 해결

### 웹 콘텐츠를 로드하지 못함

Studio Pro를 닫을 때 창이나 탭이 열려 있었다면 Studio Pro를 다시 열 때 웹 콘텐츠를 로드하지 못할 수 있습니다. 이는 시작 시퀀스의 타이밍 문제로 인해 `WebServerBaseUrl` 속성이 null이기 때문입니다.

이를 해결하려면 `WebServerExtension`에서 `OnWebServerBaseUrlChanged`를 수신 대기하십시오. 이렇게 하면 URL이 재초기화될 때 URL을 가져올 수 있습니다.

다음 코드를 사용할 수 있습니다:

```csharp
[Export(typeof(WebServerExtension))]
class ContentServer : WebServerExtension
{
    [ImportingConstructor]
    public ContentServer(INotificationPopupService notificationPopupService)
    {
        OnWebServerBaseUrlChanged += () =>  notificationPopupService.ShowNotification("Web Server Base Url Initialized", WebServerBaseUrl.ToString(), null, 2);
    }
}
```
