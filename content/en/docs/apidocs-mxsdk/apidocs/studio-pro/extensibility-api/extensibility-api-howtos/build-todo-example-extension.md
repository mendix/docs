---
title: "Build a Todo Example Extension"
url: /apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/
weight: 20
---

## Introduction

This document describes how to build an example extension that adds a simple todo list extension to Studio Pro. With this example extension, you can add new todo items to a list. The example extension will be added to the main menu of Studio Pro and you will add a user interface for the example extension by using a dockable pane and some web content. 

This document covers the following topics:

* How to create an extension project and configure it for use as an extension in Studio Pro
* How to create a web-based user interface for Studio Pro
* How to store information in a local storage JSON file
* How to interact with the Mendix metamodel
* How to host your user interface within the Studio Pro IDE

## Prerequisites

Before you start the procedure, make sure that you have installed the following tools on your local development environment:

* Microsoft Visual Studio 2022 or another equivalent development environment, such as visual studio code or JetBrains Rider. This example will assume that you are using Microsoft Visual Studio 2022.
* Studio Pro version 10.6 or higher

## Creating the Project and Configuring It as an Extension

### Creating the Project

In order for your extension to be loaded correctly as an extension in Studio Pro, you will first need to create a project:

1. In Visual Studio, create a new project.
2. Select the *Class Library* project template and click **Next**.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-one.png" >}}

3. Name the project *Mendix.ToDoExtension*.
4. Choose a location to store your extension, and click **Next**.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-two.png" >}}

5. Set **Framework** to *.NET 8.0 (Long Term Support)* and click **Create**.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-three.png" max-width=80%  >}}

Now you have an empty project.

### Installing Extensions API NuGet Package

You must do the following steps to configure the project so that it can be used as an extension in Studio Pro:

1. Reference the extensibility API NuGet package
2. Add a `manifest.json` file to the solution.

The details of each step are described below.

#### Referencing the Extensibility API NuGet Package

1. In Visual Studio, go to **Tools** > **NuGet Package Manager** > **Manage NuGet Packages for Solution**.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-four.png" >}}

2. On the **Browse** tab, search for **Mendix ExtensionsAPI**.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-five.png" max-width=50% >}}

3. Select the NuGet package and click **Install**.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-six.png"  max-width=50%  >}}

#### Adding a `manifest.json` File

You now have a class library that can be loaded as an extension by Studio Pro. However, Studio Pro still needs some help in determining how to load the assemblies of your class library. Studio Pro reads a special file called *manifest.json*. This file instructs Studio Pro on which assemblies to load into each execution context.

1. In Visual Studio, go to **View** > **Solution Explorer** to open the Solution Explorer. 
2. Right-click in the Solution Explorer and add a new file called *manifest.json*.
3. Right-click in the Solution Explorer and select **Properties**.
4. Ensure that you set the **Copy to Output Directory** property to **Copy always** to ensure that this file is included in your extensions output files.
5. Replace the contents of your manifest.json file with the following code:

    ```json
    {
      "mx_extensions": [ "ToDoExtension.dll" ],
      "mx_build_extensions": [ ]
    }
    ```

    Within the *manifest.json* file, you specify which assemblies Studio Pro needs to load for the different execution contexts your extension needs to provide. If your extension only needs access to design time features and requires a user interface, then you can add it to the `mx_extensions` option. However, if your extension needs access to runtime information or perhaps needs to translate design time concepts into runtime concepts, then you will add it to `mx_build_extensions`.

    {{% alert color="warning" %}}Build extensions specified in `mx_build_extensions` will not have access to any user interfaces and attempting to link to user interface libraries will fail. Similarly, extensions loaded from `mx_extensions` cannot access any runtime features and are strictly design time only.{{% /alert %}}

    This will instruct Studio Pro to load `Mendix.ToDoExtension.dll`, whenever it loads Studio Pro extensions for your app. Adjust your local project names as needed.

6. Remove the `Class1.cs` file, as you will not need it anymore.

## Adding a Dockable Pane to Host Your User Interface

In this section, you will host a dockable pane within Studio Pro. This will provide you with a window where you can render the User Interface of the extension.

1. Add a new file to the solution called `ToDoListDockablePaneExtension.cs`.
2. Replace the contents of the file with the following code:

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

{{% alert color="info" %}}
You are expected to get an error at this point around the `ToDoListDockablePaneViewModel`.
{{% /alert %}}

### Explanation

There are a few notable features of the class in the code above:
First, the top of the class is decorated with an `Export` attribute:

```csharp
[Export(typeof(DockablePaneExtension))]
```

Studio Pro uses this attribute to identify which extension type to inject this class into. If you do not specify this attribute, Studio Pro will not load your extension type. Additionally, the extension descends from `DockablePaneExtension`. Studio Pro uses abstract classes to enforce behavior for your extensions.

```csharp
public class ToDoListDockablePaneExtension : DockablePaneExtension
```

In order for your type to be loaded, you will need to add a `ImportingConstructor` attribute to the preferred constructor. Studio Pro will use this constructor when instantiating your extension class. 

When instantiating your class, Studio Pro will attempt to perform dependency injection for any of the types that you define in the constructor.

If you wish to inject your own custom types, they will also need to be decorated with the `Export` attribute.

```csharp
    [ImportingConstructor]
    public ToDoListDockablePaneExtension(ILogService logService)
    {
        _logService = logService;
    }
```

In this constructor, you will note that you request an instance of the `ILogService` and then save the instance in a private field.

```csharp
    public override string Id => PaneId;

    public override DockablePaneViewModelBase Open()
    {
        return new ToDoListDockablePaneViewModel(WebServerBaseUrl, () => CurrentApp, _logService) { Title = "To Do List" };
    }
```

In the final portion of the class, provide some necessary information to Studio Pro:

First, you override the `Id` property. This property provides Studio Pro with a way to uniquely identify your dockable pane extension. Second, you override the `Open` method. Within this method you need to return a valid implementation of `DockablePaneViewModelBase` which studio Pro will use to render your pane's contents.

In summary, in this section you performed the following:

1. Create a new class that descends from `DockablePaneExtension`.
2. Decorate your class with the `Export` attribute.
3. Decorate your preferred constructor with the `ImportingConstructor` attribute.
4. Inject the `ILogService`.
5. Return a valid view model from the open method.

## Creating a View Model to Host Your View Data

In this section, you will add a view model to store our view data:

1. Add a new file to the solution and name it `ToDoListDockablePaneViewModel.cs`.
2. Replace the contents of the file with the following code: 

    ```csharp
    using Mendix.StudioPro.ExtensionsAPI.Model;
    using Mendix.StudioPro.ExtensionsAPI.Services;
    using Mendix.StudioPro.ExtensionsAPI.UI.DockablePane;
    using Mendix.StudioPro.ExtensionsAPI.UI.WebView;
    
    namespace Mendix.ToDoExtension;
    
    public class ToDoListDockablePaneViewModel : WebViewDockablePaneViewModel {
    
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

{{% alert color="warning" %}}
{{% snippet file="/static/_includes/apidocs-mxsdk/warning-wwwroot.md" %}}
{{% /alert %}}

### Explanation

The first important thing to note about this view model class is that you do not decorate this class with the export attribute. This means that the extension will be responsible for instantiating this type within the extension. This also means that you can specify any type you like within the constructor. You already set up the instantiation of this class in the previous section. The important bit here is that you pass in the `baseUri`, `getCurrentApp` lambda expression and an instance of the logging class.

```csharp
    public ToDoListDockablePaneViewModel(Uri baseUri, Func<IModel?> getCurrentApp, ILogService logService)
    {
        _baseUri = baseUri;
        _getCurrentApp = getCurrentApp;
        _logService = logService;
    }
```

In order to host a web interface inside Studio Pro, your viewmodel must implement `InitWebView`. Within this method you are passed an instance of `IWebView`. This is your application's isolated webview. You now need to provide the webview some information so that it will render its data correctly.

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

{{% alert color="warning" %}}
{{% snippet file="/static/_includes/apidocs-mxsdk/warning-wwwroot.md" %}}
{{% /alert %}}

Firstly, you set the default address to `new Uri(_baseUri, "index")`. You will delve a bit deeper into where this index comes from later in the guide. If you want to skip ahead, see [Setting up Communication Between the User Interface and Extension](#set-up-communication)

Secondly, you add an event handler for the `MessageReceived` event. You will be using this method send and respond to messages from the webview. Within Studio Pro, use a two-way message bus as the primary communication method between your web based user interface and your extension logic.

Inside the message received event handler, add some code to handle the tasks you need to perform:

* `AddToDo` will add a Todo Item to the list.
* `ChangeToDoStatus` will change the status of a Todo item.
* `ClearDone` will remove all items flagged as done.

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

Now, create the methods responsible for performing the logic:

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

## Creating a Model to Store the Todo Information

In order to store the information to disk, add some model classes that will be able to store the Todo information.

1. Add a new class that will host the To do information itself. Call the file `ToDoModel.cs`
2. Replace the contents of the file with the following code:

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

    You will also need a model class that will store a list of all the todos that you have available.

3. Add another class and name it `ToDoListModel.cs`.
4. Replace the contents of this file with the following code:

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

## Creating a Storage Handler to Store the Todo Information

With the models created, you can now create a storage handler that will manage storing these models to disk.

1. Add a new class file and call it `ToDoStorage.cs`.
2. Replace the contents of the file with the following code: 

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

### Explanation

The `ToDoStorage` class will be responsible for storing the todo information to disk. In order to store the file in the correct path, you need to request the path from the `CurrentApp` instance. 

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

## Adding a Menu Item to Open the Extension from the Main Menu

In this section, you will add a menu item to the toolbar that will allow you to select the ToDo list from a menu item.

1. Create a `MenuExtension`.
2. Add another class and call it `ToDoListMenuExtension.cs`.
3. Replace the contents of the file with the following code:

    ```csharp
    using System.Collections.Generic;

    using System.ComponentModel.Composition;
    using Mendix.StudioPro.ExtensionsAPI.UI.DockablePane;
    using Mendix.StudioPro.ExtensionsAPI.UI.Menu;
    using Mendix.StudioPro.ExtensionsAPI.UI.Services;

    namespace Mendix.ToDoExtension;

    [Export(typeof(Mendix.StudioPro.ExtensionsAPI.UI.Menu.MenuExtension))]
    public class ToDoListMenuBarExtension : MenuExtension
    {
        private readonly IDockingWindowService _dockingWindowService;

        [ImportingConstructor]
        public ToDoListMenuBarExtension(IDockingWindowService dockingWindowService)
        {
            _dockingWindowService = dockingWindowService;
        }

        public override IEnumerable<MenuViewModel> GetMenus()
        {
            yield return new MenuViewModel("To Do List", () => _dockingWindowService.OpenPane(ToDoListDockablePaneExtension.PaneId));
        }
    }
    ```

## Adding a Web-based User Interface

Up to now you have been adding all the logic that will allow your extension to run inside Studio Pro. In this section, you will add a user interface for the extension. In Studio Pro, you need to load your user interface elements as web content. This web content is then rendered from within an isolated web view in Studio Pro.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/add-web-items.png"  >}}

1. Add a new folder to the solution and call it `wwwroot`.
2. In the folder, add two files:

    * A HTML page that contains the layout of the user interface. Call it `index.html`
    * A JavaScript file that contains the client side logic for the user interface. Call it `main.js`

3. Open `index.html`.
4. Replace its contents with the following:

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

5. Open `main.js` and add the JavaScript logic by replacing the contents of the file with the following:

    ```js
    function postMessage(message, data) {
      window.chrome.webview.postMessage({ message, data });
    }
    
    // Register message handler.
    window.chrome.webview.addEventListener("message", handleMessage);
    // Indicate that you are ready to receive messages.
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

### Explanation

This HTML page is self-explanatory, as you are providing a very simple interface with some added CSS styling provided by Tailwind CSS.

Within the JavaScript file, you need to add some logic so that the web view can communicate with your extension logic correctly.

You add a small helper function to simplify the call to the browser API:

```javascript
function postMessage(message, data) {
  window.chrome.webview.postMessage({ message, data });
}
```

You also need to perform some initialization to ensure that you can respond to messages send to JavaScript and 

```javascript
// Register message handler.
window.chrome.webview.addEventListener("message", handleMessage);
// Indicate that you are ready to receive messages.
postMessage("MessageListenerRegistered");

async function handleMessage(event) {
  const { message, data } = event.data;
  if (message === "RefreshToDos") {
      await refreshToDos();
  }
}
```

It is important to set these two `index.html` and `main.js` files to *Copy always* or *Copy if newer* in their **Copy to Output Directory** property; otherwise, they will not be present in the build output folder when you are ready to start using the extension.

## Setting up Communication Between the User Interface and Extension {#set-up-communication}

So far you have configured the extension to be usable in Studio Pro. You added support for storing the to do items. You also added a user interface that users can interact with. The last step in this process is to link the extension c# logic with the web-based JavaScript logic.

1. Start with adding a utility class to help simplify the way you interact with web responses. Call the file `HttpListenerResponseUtils.cs`.
2. Replace the contents of the file with the following:

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

### Explanation

Your web-based user interface is hosted inside Studio Pro in an isolated web container. As such to communicate with it you are adding some utility functionality to help you improve the code.

The first method you add is `SendFileAndClose`. This function will allow you to send the contents of a file located on your hard drive to the webpage where your user interface is hosted.

Next you add `SendJsonAndClose`. This method functions similarly to `SendFileAndClose`, but will accept a json stream instead of a file path.

After that you add `SendNoBodyAndClose`. This sends an empty response with just a status code to the webpage.

The final method `AddDefaultHeaders` is a utility method that adds some default http headers to the requests.

## Next Steps

In this section, you will add a web server extension. This extension type allows you to serve web content easily within extensions.

1. Add a new file called: `ToDoListWebServerExtension.cs`.
2. Replace the contents of the file with the following code:

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

Note that you inherit from `WebServerExtension`.  `WebServerExtension` serves web content to Studio Pro.

Additionally, you override the `InitializeWebServer` method. Studio Pro will call this method during startup, and you should place all your initialization logic in here. This implementation adds three web routes. These web routes are the locations where your user interface can be accessed from.

`ServeIndex`, `ServeMainJs`, and `ServeToDos` serve the contents of the 3 routes to your extension logic.

## Hosting the Extension in Studio Pro

All the code you need should now be complete. The last step in the process is building your solution and adding your binary output as an extension inside your app.

To do this you will need to do the following:

1. Build your solution in Visual Studio by selecting the **Build** > **Build Solution**.
2. Navigate to the Mendix app where your extension will be hosted. 
3. Create a new folder and name it `extensions`.
4. Add a subfolder and name it `TodoExtension`. You now have a folder with a path similar to this `[Mendix App]/extensions/MyTodoExtension`/.
5. Copy the files from your Visual Studio extension projects `bin/debug` subfolder into your mendix app extension folder: [`Mendix App]/extensions/MyTodoExtension`.
6. Run Studio Pro. 

While developing extensions, also use command line flag to enable extensions as follows:

1. Navigate to your Studio Pro Installation folder.
2. From the command line, call the following command: `.\studiopro.exe --enable-extension-development`.

This will start an instance of Studio Pro and load your extension. You can now view your new extension interface from the **View** > **Todo** menu item.
