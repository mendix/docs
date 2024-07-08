---
title: "Todo List Extension Sample"
url: /apidocs-mxsdk/apidocs/extensibility-api/todo-list-extension/
weight: 4
---

## 1 Introduction

This sample extension adds a simple todo list extension to Studio Pro. You should be able to add new todo items to a list. The extension will be added to the Studio Pro main menu and you will add a user interface for the extension by using a dockable pane and some web content. 

This document covers the following topics:

- How to create an extension project and configure it for use as an extension in Studio Pro
- How to create a web based user interface for studio pro
- How to store information in a local storage JSON file
- How to interact with the Mendix metamodel
- How to host your user interface within the Studio Pro IDE

In order to use this guide you will need the following tools installed on your local development environment:

- Microsoft Visual Studio 2022 or another equivalent development environment such as visual studio code or Jetbrains Rider. This sample will assume that you are using Microsoft Visual Studio 2022.
- Mendix Studio Pro 10.6 or higher

## 2 Creating the Project and Configuring It as an Extension

### 2.1 Creating the Project

In order for your extension to be loaded correctly as an extension in Studio Pro you will first need to create a project. From within Visual Studio create a new project. Select the Class library project template.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/todo-list-extension/step-one.png" max-width=80% >}}


After selecting class library you will have to pick a location where you would like to store your extension. Name the project Mendix.ToDoExtension

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/todo-list-extension/step-two.png" max-width=80% >}}

Next you set the framework version to .NET 8.0 (Long Term Support)

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/todo-list-extension/step-three.png" max-width=80% >}}


### 2.2 Installing Extensions API NuGet package

You should now have an empty project. You now need to configure the project so that it can be used as an extension in Studio Pro.
To be usable as an extension your project needs to add the following:

* reference the extensions API nuget package
* add a manifest.json file to the solution.

To reference the nuget package you will need to open the nuget package manager

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/todo-list-extension/step-four.png" max-width=80% >}}

From the browse tab search for Mendix ExtensionsAPI.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/todo-list-extension/step-five.png" max-width=80% >}}

Select the nuget package and click install.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/todo-list-extension/step-six.png" max-width=80% >}}

### 2.3 Adding a manifest.json File

You should now have a class library that can be loaded as an extension by Studio Pro.
However Studio Pro still needs some help in determining how to load the assemblies of your class library.
Studio Pro reads a special file called manifest.json instructs studio pro on which assemblies to load into each execution context.

From the solution explorer add a new file called manifest.json. Ensure that you set the "Copy to Output Directory" property to Copy always to ensure that this file is included in your extensions output files.

Now replace the contents of your manifest.json file with the following:

```json
{
  "mx_extensions": [ "ToDoExtension.dll" ],
  "mx_build_extensions": [ ]
}
```
Within the manifest.json file you specify which assemblies studio pro needs to load for the different execution contexts your extension needs to provide. If your extension only needs access to design time features and requires a user interface then you can add it to the mx_extensions option. However if your extension needs access to runtime information or perhaps needs to translate design time concepts into runtime concepts then you will add it to mx_build_extensions. Note that there are some restrictions here. Build extensions specified in mx_build_extensions will not have access to any user interfaces and attempting to link to user interface libraries will fail. Similarly, extensions loaded from mx_extensions cannot access any runtime features and are strictly design time only.
This will instruct Studio Pro to load Mendix.ToDoExtension.dll whenever it loads Studio Pro extensions for your app. Please adjust your local project names as needed.

As a last step you can remove the Class1.cs file as you will not be needing this file.

## 3 Adding a Dockable Pane to Host Your User Interface

The next step in this Guide is to host a Dockable Pane within Studio Pro. This will provide us with a window wherein you can render the User Interface of the extension.
Add a new file to the solution called ```ToDoListDockablePaneExtension.cs```

Replace the contents of the file with the following code:

```csharp
using System.ComponentModel.Composition;
using Mendix.StudioPro.ExtensionsAPI.Services;
using Mendix.StudioPro.ExtensionsAPI.UI.DockablePane;

namespace Mendix.ToDoExtension;

[Export(typeof(DockablePaneExtension))]
public class ToDoListDockablePaneExtension : DockablePaneExtension
{
    private readonly ILogService _logService;
    public const string PaneId = "ToDoList";

    [ImportingConstructor]
    public ToDoListDockablePaneExtension(ILogService logService)
    {
        _logService = logService;
    }

    public override string Id => PaneId;

    public override DockablePaneViewModelBase Open()
    {
        return new ToDoListDockablePaneViewModel(WebServerBaseUrl, () => CurrentApp, _logService) { Title = "To Do List" };
    }
}
```

Note that you are expected to get an error at this point around the ToDoListDockablePaneViewModel.

### 3.1 Explanation

There are a few notable features of this class that you might have noticed. The first is that the top of the class is decorated with an ```Export``` attribute:

```csharp
[Export(typeof(DockablePaneExtension))]
```

Studio Pro uses this attribute to identify which extension type to inject this class into. If you do not specify this attribute Studio Pro will not load your extension type. Additionally,the extension descends from ```DockablePaneExtension``` Studio Pro uses abstract classes to enforce behavior for your extensions.

```csharp
public class ToDoListDockablePaneExtension : DockablePaneExtension
```

In order for your type to be loaded you will need to add a ```ImportingConstructor``` attribute to the preferred constructor. Studio Pro will use this constructor when instantiating your extension class. 

When instantiating your class Studio Pro will attempt to perform dependency injection for any of the types that you define in the constructor.
If you wish to inject your own custom types they will also need to be decorated with the ```Export``` attribute.

```csharp
    [ImportingConstructor]
    public ToDoListDockablePaneExtension(ILogService logService)
    {
        _logService = logService;
    }
```

In this constructor you will note that you request an instance of the ILogService and then save the instance in a private field.

```csharp
    public override string Id => PaneId;

    public override DockablePaneViewModelBase Open()
    {
        return new ToDoListDockablePaneViewModel(WebServerBaseUrl, () => CurrentApp, _logService) { Title = "To Do List" };
    }
```

In the final portion of the class you provide some necessary information to Studio Pro. The first is that you override the Id property. This property provides Studio Pro with a way to uniquely identify your dockable pane extension. Next you override the Open method. Within this method you need to return a valid implementation of DockablePaneViewModelBase which studio Pro will use to render your pane's contents.

In closing, in this section you performed the following:

- Create a new class that descends from DockablePaneExtension
- Decorate your class with the Export Attribute
- Decorate your preferred constructor with the ImportingConstructor Attribute.
- Inject the ILogService
- Return a valid view model from the open method.

## 4 Creating a View Model to Host Your View Data

After adding our dockable pane extension, the next step will be adding a view model where you will be storing our view data.
Add a new file to the solution named ```ToDoListDockablePaneViewModel.cs```

Replace the contents of the file with the following code: 

```csharp
using Mendix.StudioPro.ExtensionsAPI.Model;
using Mendix.StudioPro.ExtensionsAPI.Services;
using Mendix.StudioPro.ExtensionsAPI.UI.DockablePane;
using Mendix.StudioPro.ExtensionsAPI.UI.WebView;

namespace Mendix.ToDoExtension;
{
    public class ToDoListDockablePaneViewModel : WebViewDockablePaneViewModel

    private readonly Uri _baseUri;
    private readonly Func<IModel?> _getCurrentApp;
    private readonly ILogService _logService;

    public ToDoListDockablePaneViewModel(Uri baseUri, Func<IModel?> getCurrentApp, ILogService logService)
    {
        _baseUri = baseUri;
        _getCurrentApp = getCurrentApp;
        _logService = logService;
    }

    public override void InitWebView(IWebView webView)
    {
        webView.Address = new Uri(_baseUri, "index");

        webView.MessageReceived += (_, args) =>
        {
            var currentApp = _getCurrentApp();
            if (currentApp == null) return;

            if (args.Message == "AddToDo")
            {
                var toDoText = args.Data["toDoText"]?.GetValue<string>() ?? "New To Do";
                AddToDo(currentApp, toDoText);
                webView.PostMessage("RefreshToDos");
            }

            if (args.Message == "ChangeToDoStatus")
            {
                var toDoId = args.Data["id"]!.GetValue<string>();
                var newIsDone = args.Data["isDone"]!.GetValue<bool>();

                ChangeToDoStatus(currentApp, toDoId, newIsDone);
                webView.PostMessage("RefreshToDos");
            }

            if (args.Message == "ClearDone")
            {
                ClearDone(currentApp);
                webView.PostMessage("RefreshToDos");
            }
        };
    }

    private void AddToDo(IModel currentApp, string toDoText)
    {
        var toDoStorage = new ToDoStorage(currentApp, _logService);
        var toDoList = toDoStorage.LoadToDoList();
        toDoList.ToDos.Add(new ToDoModel(toDoText, false));
        toDoStorage.SaveToDoList(toDoList);
    }

    private void ChangeToDoStatus(IModel currentApp, string toDoId, bool newIsDone)
    {
        var toDoStorage = new ToDoStorage(currentApp, _logService);
        var toDoList = toDoStorage.LoadToDoList();
        var toDo = toDoList.ToDos.FirstOrDefault(x => x.Id == toDoId);
        if (toDo != null)
        {
            toDo.IsDone = newIsDone;
            toDoStorage.SaveToDoList(toDoList);
        }
    }

    private void ClearDone(IModel currentApp)
    {
        var toDoStorage = new ToDoStorage(currentApp, _logService);
        var toDoList = toDoStorage.LoadToDoList();
        toDoList.ToDos.RemoveAll(x => x.IsDone);
        toDoStorage.SaveToDoList(toDoList);
    }
}
```

### 4.1 Explanation

The first important thing to note about this viewmodel class is that you do not decorate this class with the export attribute. This means that the extension will be responsible for instantiating this type within the extension. This also means that you can specify any type you like within the constructor. You already setup the instantiation of this class in the previous section of the guide. the important bit here is that you pass in the baseUri, getCurrentApp lambda expression and an instance of the logging class.

```csharp
    public ToDoListDockablePaneViewModel(Uri baseUri, Func<IModel?> getCurrentApp, ILogService logService)
    {
        _baseUri = baseUri;
        _getCurrentApp = getCurrentApp;
        _logService = logService;
    }
```

In order to host a web interface inside Studio Pro, your viewmodel must implement InitWebView. Within this method you are passed an instance of IWebView. This is your application's isolated webview. You now need to provide the webview some information so that it will render its data correctly.

```csharp
    public override void InitWebView(IWebView webView)
    {
        webView.Address = new Uri(_baseUri, "index");

        webView.MessageReceived += (_, args) =>
        {
            var currentApp = _getCurrentApp();
            if (currentApp == null) return;

            if (args.Message == "AddToDo")
            {
                var toDoText = args.Data["toDoText"]?.GetValue<string>() ?? "New To Do";
                AddToDo(currentApp, toDoText);
                webView.PostMessage("RefreshToDos");
            }

            if (args.Message == "ChangeToDoStatus")
            {
                var toDoId = args.Data["id"]!.GetValue<string>();
                var newIsDone = args.Data["isDone"]!.GetValue<bool>();

                ChangeToDoStatus(currentApp, toDoId, newIsDone);
                webView.PostMessage("RefreshToDos");
            }

            if (args.Message == "ClearDone")
            {
                ClearDone(currentApp);
                webView.PostMessage("RefreshToDos");
            }
        };
    }
```

Firstly you set the default address to ```new Uri(_baseUri, "index");``` you will delve a bit deeper into where this index comes from later in the guide. If you want to skip ahead, check out the heading 'Setting up communication between the user interface and extension'

Secondly you add an event handler for the ```MessageReceived``` event. You will be using this method send and respond to messages from the webview. Within Studio Pro you use a two-way message bus as the primary communication method between your web based user interface and your extension logic.

Inside the message received event handler you add some code to handle the tasks you need to perform
- AddToDo will add a Todo Item to the list.
- ChangeToDoStatus will change the status of a Todo item.
- ClearDone will remove all items flagged as done.

```csharp
    var currentApp = _getCurrentApp();
    if (currentApp == null) return;

    if (args.Message == "AddToDo")
    {
        var toDoText = args.Data["toDoText"]?.GetValue<string>() ?? "New To Do";
        AddToDo(currentApp, toDoText);
        webView.PostMessage("RefreshToDos");
    }

    if (args.Message == "ChangeToDoStatus")
    {
        var toDoId = args.Data["id"]!.GetValue<string>();
        var newIsDone = args.Data["isDone"]!.GetValue<bool>();

        ChangeToDoStatus(currentApp, toDoId, newIsDone);
        webView.PostMessage("RefreshToDos");
    }

    if (args.Message == "ClearDone")
    {
        ClearDone(currentApp);
        webView.PostMessage("RefreshToDos");
    }
```

Let's also create the methods responsible for performing the logic

```csharp
    private void AddToDo(IModel currentApp, string toDoText)
    {
        var toDoStorage = new ToDoStorage(currentApp, _logService);
        var toDoList = toDoStorage.LoadToDoList();
        toDoList.ToDos.Add(new ToDoModel(toDoText, false));
        toDoStorage.SaveToDoList(toDoList);
    }

    private void ChangeToDoStatus(IModel currentApp, string toDoId, bool newIsDone)
    {
        var toDoStorage = new ToDoStorage(currentApp, _logService);
        var toDoList = toDoStorage.LoadToDoList();
        var toDo = toDoList.ToDos.FirstOrDefault(x => x.Id == toDoId);
        if (toDo != null)
        {
            toDo.IsDone = newIsDone;
            toDoStorage.SaveToDoList(toDoList);
        }
    }

    private void ClearDone(IModel currentApp)
    {
        var toDoStorage = new ToDoStorage(currentApp, _logService);
        var toDoList = toDoStorage.LoadToDoList();
        toDoList.ToDos.RemoveAll(x => x.IsDone);
        toDoStorage.SaveToDoList(toDoList);
    }
```

## 5 Creating a Model to Store the Todo Information

In order to store the information to disk you will have to add some model classes that will be able to store the To do information.
First lets add a new class that will host the To do information itself. You will call the file ```ToDoModel.cs```

Now replace the contents of the file with the following code:

```csharp
using System.Text.Json.Serialization;

namespace Mendix.ToDoExtension;

public record ToDoModel
{
    [JsonConstructor]
    public ToDoModel(string id, string text, bool isDone)
    {
        Id = id;
        Text = text;
        IsDone = isDone;
    }
    
    public ToDoModel(string text, bool isDone)
        : this(Guid.NewGuid().ToString(), text, isDone)
    {
    }

    public string Id { get; set; }
    public string Text { get; set; }
    public bool IsDone { get; set; }
}
```

You will also need a model class that will store a list of all the todos that you have available. Let's add another class and this time name it ```ToDoListModel.cs```
Now replace the contents of this file with the following code:

```csharp
using System.Text.Json.Serialization;

namespace Mendix.ToDoExtension;

public record ToDoListModel
{
    [JsonConstructor]
    public ToDoListModel(List<ToDoModel> toDos)
    {
        ToDos = toDos;
    }
    
    public List<ToDoModel> ToDos { get; }
}
```

## 6 Creating a Storage Handler to Store the Todo Information

With the models created you can now create a storage handler that will manage storing these models to disk. As before you will add a new class file. This time you will call it ```ToDoStorage.cs```

Now replace the contents of the file with the following code: 

```csharp
using System.Text;
using System.Text.Json;
using Mendix.StudioPro.ExtensionsAPI.Model;
using Mendix.StudioPro.ExtensionsAPI.Services;

namespace Mendix.ToDoExtension;

public class ToDoStorage
{
    private readonly ILogService _logService;
    private readonly string _toDoFilePath;

    public ToDoStorage(IModel currentApp, ILogService logService)
    {
        _logService = logService;
        _toDoFilePath = Path.Join(currentApp.Root.DirectoryPath, "to-do-list.json");
    }

    public ToDoListModel LoadToDoList()
    {
        ToDoListModel? toDoList = null;

        try
        {
            toDoList = JsonSerializer.Deserialize<ToDoListModel>(File.ReadAllText(_toDoFilePath, Encoding.UTF8));
        }
        catch (Exception exception)
        {
            _logService.Error($"Error while loading To Dos from {_toDoFilePath}", exception);
        }

        return toDoList ?? new ToDoListModel(new[]
        {
            new ToDoModel("Buy milk", false),
            new ToDoModel("Fix house", false),
            new ToDoModel("Shave yak", true)
        }.ToList());
    }

    public void SaveToDoList(ToDoListModel toDoList)
    {
        var jsonText = JsonSerializer.Serialize(toDoList, new JsonSerializerOptions() { WriteIndented = true });
        File.WriteAllText(_toDoFilePath, jsonText, Encoding.UTF8);
    }
}
```

### 6.1 Explanation

The ToDoStorage class will be responsible for storing the todo information to disk. In order to store the file in the correct path you need to request the path from the CurrentApp instance. 

```csharp
    public ToDoStorage(IModel currentApp, ILogService logService)
    {
        _logService = logService;
        _toDoFilePath = Path.Join(currentApp.Root.DirectoryPath, "to-do-list.json");
    }
```

You also need to handle loading and saving of the todo data.

```csharp
    public ToDoListModel LoadToDoList()
    {
        ToDoListModel? toDoList = null;

        try
        {
            toDoList = JsonSerializer.Deserialize<ToDoListModel>(File.ReadAllText(_toDoFilePath, Encoding.UTF8));
        }
        catch (Exception exception)
        {
            _logService.Error($"Error while loading To Dos from {_toDoFilePath}", exception);
        }

        return toDoList ?? new ToDoListModel(new[]
        {
            new ToDoModel("Buy milk", false),
            new ToDoModel("Fix house", false),
            new ToDoModel("Shave yak", true)
        }.ToList());
    }

    public void SaveToDoList(ToDoListModel toDoList)
    {
        var jsonText = JsonSerializer.Serialize(toDoList, new JsonSerializerOptions() { WriteIndented = true });
        File.WriteAllText(_toDoFilePath, jsonText, Encoding.UTF8);
    }
```

## 7 Adding a Menu Item to Open the Extension from the Main Menu

Next you will add a menu item to the toolbar that will allow us to select the ToDo list from a menu item. In order to do this you will be creating a MenuBarExtension. Let's add another class and call it ```ToDoListMenuBarExtension.cs```

Now within the file lets replace the contents of the file with the following code:

```csharp
using System.ComponentModel.Composition;
using Mendix.StudioPro.ExtensionsAPI.UI.Menu;
using Mendix.StudioPro.ExtensionsAPI.UI.Services;

namespace Mendix.ToDoExtension;

[Export(typeof(MenuBarExtension))]
public class ToDoListMenuBarExtension : MenuBarExtension
{
    private readonly IDockingWindowService _dockingWindowService;

    [ImportingConstructor]
    public ToDoListMenuBarExtension(IDockingWindowService dockingWindowService)
    {
        _dockingWindowService = dockingWindowService;
    }

    public override IEnumerable<MenuViewModelBase> GetMenus()
    {
        yield return new MenuItemViewModel("To Do List", new[] { "View" }, "Stories")
            { Action = () => _dockingWindowService.OpenPane(ToDoListDockablePaneExtension.PaneId) };
    }
}
```

## 8 Adding a Web-based User Interface

Up to now you have been adding all the logic that will allow your extension to run inside Studio Pro. Within the next step you need to add a user interface for the extension. In Studio Pro you need to load your user interface elements as web content. This web content is then rendered from within an isolated webview in studio pro.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/todo-list-extension/add-web-items.png"  >}}

First you need to add a new folder to the solution. You need to call it ```wwwroot```
Within the folder you will add two files:

-The First is a html page that will contain the layout of the user interface. Let's call it ```index.html```
-Next you need to add a js file that will contain the client side logic for the user interface. Let's call it ```main.js```

Okay now let's add some code. Let's start with ```index.html``` open the file and replace its contents with the following:

```html
<html lang="en">
  <head>
    <title>To Do List</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style type="text/tailwindcss">
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        body {
          @apply m-6;
        }
        h1 {
          @apply text-2xl mt-6;
        }
        h2 {
          @apply text-xl mt-6;
        }
        input[type=checkbox] + label {
          @apply ml-2;
        }
        input[type=checkbox]:checked + label {
          text-decoration: line-through;
        }
        button {
          @apply text-blue-600 italic
        }
      }
    </style>
  </head>
  <body>
    <div><label for="addToDoInput">Add to do:</label> <input id="addToDoInput" type="text" placeholder="To do text" /> <button id="addToDoButton">Add</button></div>
    <h1>To Do</h1>
    <div id="todo"></div>
    <h1>Done</h1>
    <div id="done"></div>
    <button id="clearDoneButton">Clear</button>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

Now you need to add the js logic. Let's open ```main.js```.
Now replace the contents of the file with the following:

```js
function postMessage(message, data) {
  window.chrome.webview.postMessage({ message, data });
}

// Register message handler.
window.chrome.webview.addEventListener("message", handleMessage);
// Indicate that we're ready to receive messages.
postMessage("MessageListenerRegistered");

async function handleMessage(event) {
  const { message, data } = event.data;
  if (message === "RefreshToDos") {
      await refreshToDos();
  }
}

async function refreshToDos() {
    let todosResponse = await fetch("./todos");
    let todos = await todosResponse.json();

    let todoDiv = document.getElementById("todo");
    let doneDiv = document.getElementById("done");

    let todoItems = [];
    let doneItems = [];

    for (const todo of todos.ToDos) {
        let item = document.createElement("div");
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `todo-${todo.Id}`;
        checkbox.checked = todo.IsDone;
        checkbox.addEventListener("click", () => {
           postMessage("ChangeToDoStatus", { id: todo.Id, isDone: !todo.IsDone });
        });
        
        let label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.innerText = todo.Text;
        
        item.replaceChildren(checkbox, label);

        if (todo.IsDone) {
            doneItems.push(item);
        } else {
            todoItems.push(item);
        }
    }

    todoDiv.replaceChildren(...todoItems);
    doneDiv.replaceChildren(...doneItems);
}

async function addToDo(){
    let addToDoInput = document.getElementById("addToDoInput");
    const toDoText = addToDoInput.value;
    postMessage("AddToDo", { toDoText });
    addToDoInput.value = "";
}

document.getElementById("addToDoButton").addEventListener("click", addToDo);
document.getElementById("clearDoneButton").addEventListener("click", () => {
    postMessage("ClearDone");
});

await refreshToDos();
```

### 8.1 Explanation

This html page is pretty self-explanatory as you are providing a very simple interface with some added css styling provided by Tailwind css.
Within the Js file you need to add some logic so that the webview will be able to communicate with your extension logic correctly.

You add a small helper function to simplify the call to the browser api:

```javascript
function postMessage(message, data) {
  window.chrome.webview.postMessage({ message, data });
}
```

You also need to perform some initialization to ensure that you can respond to messages send to javascript and 

```javascript
// Register message handler.
window.chrome.webview.addEventListener("message", handleMessage);
// Indicate that we're ready to receive messages.
postMessage("MessageListenerRegistered");

async function handleMessage(event) {
  const { message, data } = event.data;
  if (message === "RefreshToDos") {
      await refreshToDos();
  }
}
```

It is important to set these two `index.html` and `main.js` files to "Copy always" or "Copy if newer" in their "Copy to Output Directory" property or they will not be present in the build output folder when you are ready to start using the extension.

## 9 Setting up Communication Between the User Interface and Extension

So far you have configured the extension to be usable in studio pro. You added support for storing the to do items. You also added a user interface that users can interact with. The last step in this process is to link the extension c# logic with the web based javascript logic.

Let's start with adding a utility class to help simplify the way you interact with web responses. Let's call the file ```HttpListenerResponseUtils.cs```.
Now let's replace the contents of the file with the following:

```csharp
using System.Net;
using System.Text;

namespace Mendix.ToDoExtension;

public static class HttpListenerResponseUtils
{
    public static async Task SendFileAndClose(this HttpListenerResponse response, string contentType, string filePath, CancellationToken ct)
    {
        response.AddDefaultHeaders(200);

        var fileContents = await File.ReadAllBytesAsync(filePath, ct);

        response.ContentType = contentType;
        response.ContentLength64 = fileContents.Length;

        await response.OutputStream.WriteAsync(fileContents, ct);

        response.Close();
    }

    public static void SendJsonAndClose(this HttpListenerResponse response, MemoryStream jsonStream)
    {
        response.AddDefaultHeaders(200);

        response.ContentType = "application/json";
        response.ContentEncoding = Encoding.UTF8;
        response.ContentLength64 = jsonStream.Length;

        jsonStream.WriteTo(response.OutputStream);

        response.Close();
    }

    public static void SendNoBodyAndClose(this HttpListenerResponse response, int statusCode)
    {
        response.AddDefaultHeaders(statusCode);

        response.Close();
    }

    static void AddDefaultHeaders(this HttpListenerResponse response, int statusCode)
    {
        response.StatusCode = statusCode;

        // Makes sure the web-code can receive responses
        response.AddHeader("Access-Control-Allow-Origin", "*");
    }
}
```

### 9.1 Explanation

Your web based user interface is hosted inside studio pro in an isolated web container. As such to communicate with it you are adding some utility functionality to help us improve the code.

The first method you add is SendFileAndClose. This function will allow us to send the contents of a file located on your hard drive to the webpage where your user interface is hosted.

Next you add SendJsonAndClose. This method functions similarly to SendFileAndClose but will accept a json stream instead of a file path.

After that you add SendNoBodyAndClose. This sends an empty response with just a status code to the webpage.

The final method AddDefaultHeaders is a utility method that adds some default http headers to the requests.

### 9.2 Next Steps

Now you will add a web server extension. This extension type allows you to serve web content easily within extensions.
Let's add a new file called: ```ToDoListWebServerExtension.cs```.

Now replace the contents of the file with the following: 

```csharp
using System.ComponentModel.Composition;
using System.Net;
using System.Text.Json;
using Mendix.StudioPro.ExtensionsAPI.Services;
using Mendix.StudioPro.ExtensionsAPI.UI.WebServer;

namespace Mendix.ToDoExtension;

[Export(typeof(WebServerExtension))]
public class ToDoListWebServerExtension : WebServerExtension
{
    private readonly IExtensionFileService _extensionFileService;
    private readonly ILogService _logService;

    [ImportingConstructor]
    public ToDoListWebServerExtension(IExtensionFileService extensionFileService, ILogService logService)
    {
        _extensionFileService = extensionFileService;
        _logService = logService;
    }

    public override void InitializeWebServer(IWebServer webServer)
    {
        webServer.AddRoute("index", ServeIndex);
        webServer.AddRoute("main.js", ServeMainJs);
        webServer.AddRoute("todos", ServeToDos);
    }

    private async Task ServeIndex(HttpListenerRequest request, HttpListenerResponse response, CancellationToken ct)
    {
        var indexFilePath = _extensionFileService.ResolvePath("wwwroot", "index.html");
        await response.SendFileAndClose("text/html", indexFilePath, ct);
    }

    private async Task ServeMainJs(HttpListenerRequest request, HttpListenerResponse response, CancellationToken ct)
    {
        var indexFilePath = _extensionFileService.ResolvePath("wwwroot", "main.js");
        await response.SendFileAndClose("text/javascript", indexFilePath, ct);
    }

    private async Task ServeToDos(HttpListenerRequest request, HttpListenerResponse response, CancellationToken ct)
    {
        if (CurrentApp == null)
        {
            response.SendNoBodyAndClose(404);
            return;
        }

        var toDoList = new ToDoStorage(CurrentApp, _logService).LoadToDoList();
        var jsonStream = new MemoryStream();
        await JsonSerializer.SerializeAsync(jsonStream, toDoList, cancellationToken: ct);

        response.SendJsonAndClose(jsonStream);
    }
}
```

This class is the web container that allows Studio Pro to interact with your user interface. Within this class you will serve the web content to your extension logic.

Please note that you inherit from WebServerExtension. a WebServerExtension does exactly what is says: it serves web content to Studio Pro.

Additionally, you override the InitializeWebServer method. Studio Pro will call this method during startup, and you should place all your initialization logic in here. This implementation adds three web routes. These web routes are the locations where your user interface can be accessed from.

ServeIndex, ServeMainJs, ServeToDos serves the contents of the 3 routes to your extension logic.


## 10 Hosting the Extension in Studio Pro

All the code you need should now be complete. The last step in the process is building your solution and adding your binary output as an extension inside your app.

To do this you will need to do the following:

- Build your solution in Visual Studio by selecting the Build -> Build Solution.
- Navigate to the Mendix app where you wish to have your extension hosted. Create a new folder called extensions also add a subfolder called TodoExtension. You should now have a folder with a path similar to this (Mendix App)/extensions/MyTodoExtension
- Copy the files from your visual studio extension projects bin/debug subfolder into your mendix app extension folder: (Mendix App)/extensions/MyTodoExtension
- When complete you should have something like this:

Now run Studio Pro. 
Note that while developing extensions you will need to also use command line flag to enable extensions.
To do this navigate to your Studio Pro Installation folder and from the command line call the following command: .\studiopro.exe --enable-extension-development

This should start an instance of Studio Pro and load your extension. You should now be able to view your new extension interface from the View -> Todo menu item.
