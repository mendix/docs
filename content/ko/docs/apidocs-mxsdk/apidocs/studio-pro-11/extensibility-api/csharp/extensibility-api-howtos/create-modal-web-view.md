---
title: "C#를 사용하여 모달 대화 상자에 호스팅된 웹 뷰 만들기"
linktitle: "모달 웹 뷰"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-modal-web-view/
weight: 7
---

## 소개

이 How-to에서는 create a new web view hosted inside a modal dialog, and how to open the modal from a new menu item.

이 How-to의 예제는 [이 GitHub 저장소](https://github.com/mendix/ExtensionAPI-Samples)에서 다운로드할 수 있습니다.

## 새 모달의 뷰 모델 추가하기

Create a view model for your new model to manage the lifecycle and messaging of the modal web view.

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
        entity.Name = e.Message.Replace("\\", "").Replace("\"", "");
        currentApp.Root.GetModules().First(m => m.Name == "MyFirstModule").DomainModel.AddEntity(entity);

        transaction.Commit();
        
        dialogService.CloseDialog(this);
    }
}
```

{{% alert color="warning" %}}
{{% snippet file="/static/_includes/apidocs-mxsdk/warning-wwwroot.md" %}}
{{% /alert %}}

## 컨트롤러 클래스 추가하기

Create a controller to delegate tasks, allowing you to keep the menu item free of unrelated business logic (for example, conducting basic setup and displaying the web view). This approach is recommended, but not mandatory.

{{% alert color="info" %}}
Specify both `Height` and `Width` properties; otherwise, they will default to 0,0.
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

## 컨텐츠 서버 추가하기

Use the `WebServerExtension` route to provide static web content to the extension. 

```csharp
namespace MyCompany.MyProject.MendixExtension;

[Export(typeof(WebServerExtension))]
[method: ImportingConstructor]
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

## 모달 대화 상자를 여는 메뉴 항목 추가하기

Replace the contents of `MyMenuExtension.cs` with the code below to add a menu item to open the dialog:

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

This code injects your controller class into the `MyMenuExtension` class. It adds a new menu item called `Create Entity From Dialog` and calls the controller's `ShowDialog` method.

{{% alert type="info" %}}
In this example, the `currentApp` parameter is required if the dialog needs to interact with the model. Additionally, `WebServerBaseUrl` is crucial; without the base path, navigating to the route defined in the web server extension would not be possible.
{{% /alert %}}
