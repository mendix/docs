---
title: "C#을 사용하여 모달 대화 상자 내에 호스팅되는 웹 뷰 만들기"
linktitle: "모달 웹 뷰"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-modal-web-view/
weight: 7
---

## 소개

이 사용 방법(how-to)에서는 모달 대화 상자 내에 호스팅되는 새 웹 뷰를 만드는 방법과 새 메뉴 항목에서 모달을 여는 방법을 설명합니다.

이 사용 방법의 예제는 [이 GitHub 저장소](https://github.com/mendix/ExtensionAPI-Samples)에서 다운로드할 수 있습니다.

## 새 모달을 위한 뷰 모델 추가

모달 웹 뷰의 수명 주기와 메시징을 관리하기 위해 새 모델에 대한 뷰 모델을 만듭니다.

```csharp
namespace MyCompany.MyProject.MendixExtension;

class MyModalWebViewViewModel(
    string title,
    IModel currentApp,
    IDialogService dialogService,
    IMessageBoxService messageBoxService,
    Uri webServerBaseUrl) : WebViewModalDialogViewModel(title)
{
    public override void InitWebView(IWebView webView)
    {
        webView.MessageReceived += Browser_MessageReceived;
        OnClosing = HandleOnClosed;
        webView.Address = new Uri(webServerBaseUrl + "index");
    }
    
    void HandleOnClosed(CancelEventArgs cancelEventArgs) => messageBoxService.ShowInformation("Entity was created.");

    void Browser_MessageReceived(object? sender, MessageReceivedEventArgs e)
    {
        using var transaction = currentApp.StartTransaction("create entity from modal");

        var entity = currentApp.Create<IEntity>();
        entity.Name = e.Message.Replace("", "").Replace(""", "");
        currentApp.Root.GetModules().First(m => m.Name == "MyFirstModule").DomainModel.AddEntity(entity);

        transaction.Commit();
        
        dialogService.CloseDialog(this);
    }
}
```

{{% alert color="warning" %}}
{{% snippet file="/static/_includes/apidocs-mxsdk/warning-wwwroot.md" %}}
{{% /alert %}}

## 컨트롤러 클래스 추가

작업을 위임할 컨트롤러를 만들어 메뉴 항목에 관련 없는 비즈니스 로직(예: 기본 설정 수행 및 웹 뷰 표시)을 포함하지 않도록 합니다. 이 접근 방식은 권장 사항이지만 필수는 아닙니다.

{{% alert color="info" %}}
`Height` 및 `Width` 속성을 모두 지정하십시오. 그렇지 않으면 기본값인 0,0으로 설정됩니다.
{{% /alert %}}

```csharp
namespace MyCompany.MyProject.MendixExtension;

[method: ImportingConstructor]
[Export(typeof(MyModalWebViewController))]
class MyModalWebViewController(IDialogService dialogService, IMessageBoxService messageBoxService)
{
    public void ShowDialog(IModel currentApp, Uri webServerBaseUrl)
    {
        var modalViewModel = new MyModalWebViewViewModel("Modal WebView", currentApp, dialogService, messageBoxService, webServerBaseUrl)
        {
            Height = 160, Width = 400,
        };

        dialogService.ShowDialog(modalViewModel);
    }
}
```

## 콘텐츠 서버 추가

`WebServerExtension` 경로를 사용하여 확장에 정적 웹 콘텐츠를 제공합니다.

```csharp
namespace MyCompany.MyProject.MendixExtension;

[Export(typeof(WebServerExtension))]
class ContentServer : WebServerExtension
{
    private const string Content = """
<html>
   <head>
       <script>
           function sendMessage(message, data) {
               if (window.chrome?.webview) {
                   window.chrome.webview.postMessage({ message, data })
               } else if (window.webkit?.messageHandlers.studioPro) {
                   window.webkit.messageHandlers.studioPro.postMessage(JSON.stringify({ message, data }))
               }
           }
           function registerMessageListener(eventHandler) {
               if (window.chrome?.webview) {
                   window.chrome.webview.addEventListener("message", (event) => eventHandler(event.data))
                   sendMessage("MessageListenerRegistered")
               } else if (window.webkit?.messageHandlers.studioPro) {
                   window.WKPostMessage = (json) => {
                       const wkMessage = JSON.parse(json)
                       eventHandler(wkMessage)
                   }
                   sendMessage("MessageListenerRegistered")
               }
           }
           function init() {
               registerMessageListener(msgHandler);
           }
           function msgHandler(event) {
               console.log('message sent to JS: '+event.data);
           }
           function create() {
               sendMessage(document.getElementById("entity_name").value, null);
           }
       </script>
   </head>
   <body onload="init()">
       <div>
           <p>Entity Name</p>
           <input type="text" style="width: 150px" id="entity_name"/>
           <p><button onclick="create();">Create Entity</button></p>
       </div>
   </body>
</html>
""";

    public override void InitializeWebServer(IWebServer webServer)
    {
        webServer.AddRoute("index", async (_, response, _) =>
        {
            response.ContentType = "text/html";
            response.StatusCode = 200;
            var content = Encoding.ASCII.GetBytes(Content);
            response.ContentLength64 = content.Length;
            await response.OutputStream.WriteAsync(content, CancellationToken.None);
        });
    }
}
```

## 모달 대화 상자를 여는 메뉴 항목 추가

`MyMenuExtension.cs`의 내용을 아래 코드로 바꾸어 대화 상자를 여는 메뉴 항목을 추가합니다:

```csharp
namespace MyCompany.MyProject.MendixExtension;

[Export(typeof(MenuExtension))]
[method: ImportingConstructor]
class MyMenuExtension(MyModalWebViewController myModalWebViewController) : MenuExtension
{
    public override IEnumerable<MenuViewModel> GetMenus()
    {
        yield return new MenuViewModel("Create Entity From Dialog", () => myModalWebViewController.ShowDialog(CurrentApp!, WebServerBaseUrl));
    }
}
```

이 코드는 컨트롤러 클래스를 `MyMenuExtension` 클래스에 주입합니다. `Create Entity From Dialog`라는 새 메뉴 항목을 추가하고 컨트롤러의 `ShowDialog` 메서드를 호출합니다.

{{% alert type="info" %}}
이 예제에서 대화 상자가 모델과 상호 작용해야 하는 경우 `currentApp` 파라미터가 필수입니다. 또한 `WebServerBaseUrl`이 중요합니다. 기본 경로가 없으면 웹 서버 확장에 정의된 경로로 이동할 수 없습니다.
{{% /alert %}}
