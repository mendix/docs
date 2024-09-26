---
title: "Create a Web View Hosted Inside a Modal Dialog"
url: /apidocs-mxsdk/apidocs/extensibility-api/create-modal-web-view/
weight: 7
---

## Introduction

This how-to describes how you can create a new web view hosted inside a modal dialog. You will then open the modal from a new menu item.

You can download the example in this how-to in [this GitHub repository](https://github.com/mendix/ExtensionAPI-Samples)

## Adding a View Model for Your New Modal

Add a view model for your new model. The view model takes care of the messages and the overall lifecycle of the modal web view.

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

## Adding a Controller Class

You are creating a controller to delegate specific tasks, allowing you to keep the menu item free of unrelated business logic, for instance, conducting basic setup and displaying the web view. This approach is recommended, but not mandatory.

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

## Adding a Content Server

To open static pages, you need to source them from either a file system path or via the `WebServerExtension` route.  This document covers the latter, as this is the preferred way to provide static web content to an extension. 

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

## Adding a Menu Item That Opens the Modal Dialog

Finally, you need to add a menu item to open the dialog. Replace the contents of `MyMenuExtension.cs` with the code below:

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

These changes inject your new controller class into the `MyMenuExtension` class. Then you add a new menu item called `Create Entity From Dialog` and call the controller's `ShowDialog` method.

Note that in this example, the parameter `currentApp` will be necessary, if the dialog needs to interact with the model. Additionally, `WebServerBaseUrl` is crucial, because, without the base path, navigating to the route you defined in the web server extension would not be possible.
