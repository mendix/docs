---
title: "Using Modal Views Tutorial"
url: /extensions-api/modal_view_tutorial/
weight: 7
---

# Create a simple webview hosted inside a modal dialog

In this tutorial we will be creating a new webview hosted inside a modal dialog. We will then open the modal from a new menu item.

You can download a copy of this tutorial [here](https://github.com/mendix/ExtensionAPI-Samples)

### Add a view model for your new modal

It would take care of the messages and the overall lifecycle of the modal webview.

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

### Add a controller class

We're creating a controller that we can delegate a part of work to, so that we don't have to pollute the menu item with unrelated business logic.  
For instance conducting the basic setup and showing our webview. Although, it's just a recommendation, not a rule.

>[#NOTE] Please specify both Height and Width properties as otherwise they will default to 0,0

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

### Add a content server
To open static pages we need to source them from either a file system path or via the WebServerExtension route. 
In this tutorial we will cover the latter as this is the preferred way to provide static web content to an extension. 

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

### Add a menu item that would open the modal dialog
Finally, we need to add a menu item to open the dialog. Replace the contents of `MyMenuExtension.cs` with the code below:

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
These changes inject your new controller class into the `MyMenuExtension` class. We then add a new menu item called `Create Entity From Dialog` and then call the controller's `ShowDialog` method. Notice in this example, the parameter `currentApp`, which, if the dialog needs to interact with the model, will be necessary. `WebServerBaseUrl` is just as important though, as without the base path you will never be able to navigate to the route you defined in the web server extension.