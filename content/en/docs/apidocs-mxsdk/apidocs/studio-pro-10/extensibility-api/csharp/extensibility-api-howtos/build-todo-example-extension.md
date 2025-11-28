---
title: "Build a To-do Example Extension Using C#"
linktitle: "To-do Example"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/build-todo-example-extension/
weight: 20
---

## Introduction

This document describes how to build a simple to-do list extension for Studio Pro.

The extension allows you to add new to-do items to a list, which integrate with Studio Pro's main menu. You will also create a user interface for the extension using a dockable pane and web content.

This document covers the following topics:

* Creating and configuring an extension project in Studio Pro
* Building a web-based user interface
* Storing data in a local JSON file
* Interacting with the Mendix metamodel
* Hosting the UI within the Studio Pro IDE

## Prerequisites

Ensure the following tools are installed on your local development environment before starting:

* Microsoft Visual Studio 2022 (or equivalent, such as Visual Studio Code or JetBrains Rider); this example assumes you are using Microsoft Visual Studio 2022
* Studio Pro version 10.6 or higher

## Creating the Project and Configuring the Extension

### Creating the Project

Create a new project to ensure your extension is loaded correctly in Studio Pro. Follow the steps below:

1. Open Visual Studio and create a new project.
2. Select the **Class Library** project template and click **Next**.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-one.png" >}}

3. Name the project *Mendix.ToDoExtension*.
4. Choose a location to store your extension, then click **Next**.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-two.png" >}}

5. Set **Framework** to *.NET 8.0 (Long Term Support)*.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-three.png" max-width=80%  >}}

6. Click **Create**.

### Install the Extensions API NuGet Package

1. In Visual Studio, go to **Tools** > **NuGet Package Manager** > **Manage NuGet Packages for Solution**.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-four.png" >}}

2. On the **Browse** tab, search for **Mendix ExtensionsAPI**.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-five.png" max-width=50% >}}

3. Select the NuGet package and click **Install**.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-six.png"  max-width=50%  >}}

### Adding a `manifest.json` File

You now have a class library that can be loaded as an extension by Studio Pro. However, it still needs to determine how to load the assemblies of your class library. Studio Pro reads a special file called *manifest.json*, which instructs it on which assemblies to load into each execution context.

1. In Visual Studio, open the Solution Explorer by clicking **View** > **Solution Explorer**.
2. Right-click in the Solution Explorer and add a new file called *manifest.json*.
3. Right-click in the Solution Explorer and select **Properties**.
4. Set the **Copy to Output Directory** property to **Copy always** to ensure the file is included in your extensions output files.
5. Replace the contents of your `manifest.json` file with the following code:

    ```json
    {
      "mx_extensions": [ "ToDoExtension.dll" ],
      "mx_build_extensions": [ ]
    }
    ```

     Within the `manifest.json` file, you specify which assemblies Studio Pro needs to load for the different contexts your extension needs to provide. If your extension only needs access to design time features and requires a user interface, you can add it to the `mx_extensions` option. However, if your extension needs access to runtime information or needs to translate design time concepts into runtime concepts, add it to `mx_build_extensions`.

    This instructs Studio Pro to load `Mendix.ToDoExtension.dll`, whenever it loads Studio Pro extensions for your app. Adjust your local project names as needed.

    {{% alert color="warning" %}}Build extensions specified in `mx_build_extensions` will not have access to any user interfaces. Attempting to link to user interface libraries will fail. Similarly, extensions loaded from `mx_extensions` cannot access any runtime features and are strictly design time only.{{% /alert %}}

6. Remove the `Class1.cs` file, as it is not needed.

## Add a Dockable Pane for the UI

1. Add a new file to the solution called *ToDoListDockablePaneExtension.cs*.
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
You will see an error around the `ToDoListDockablePaneViewModel`—this is expected.
{{% /alert %}}

### Key Features

There are a few notable features in the code above:

* `Export` attribute:

```csharp
[Export(typeof(DockablePaneExtension))]
```

   Studio Pro uses this attribute to identify which extension type to inject this class into. If you do not specify this attribute, Studio Pro will not load your extension type. The extension descends from `DockablePaneExtension`. Studio Pro uses abstract classes to enforce behavior for your extensions.

```csharp
public class ToDoListDockablePaneExtension : DockablePaneExtension
```

* `ImportingConstructor` attribute

    This attribute must be added to the preferred constructor in order for your type to be loaded. Studio Pro uses this constructor when instantiating your extension class. 

    When instantiating your class, Studio Pro will attempt to perform dependency injection for any of the types that you define in the constructor.

* `ILogService`

    If you want to inject your own custom types, they will also need to be decorated with the `Export` attribute:

    ```csharp
        [ImportingConstructor]
        public ToDoListDockablePaneExtension(ILogService logService)
        {
            _logService = logService;
        }
    ```

    In this constructor, you request an instance of the `ILogService`, then save it in a private field:

    ```csharp
        public override string Id => PaneId;

        public override DockablePaneViewModelBase Open()
        {
            return new ToDoListDockablePaneViewModel(WebServerBaseUrl, () => CurrentApp, _logService) { Title = "To Do List" };
        }
    ```

* Override properties

    Provide the following information to Studio Pro:

    * Override the `Id` property
        * This property provides Studio Pro a way to uniquely identify your dockable pane extension
    * Override the `Open` method
        * Within this method, you need to return a valid implementation of `DockablePaneViewModelBase`, which Studio Pro will use to render your pane's contents

## Creating a View Model to Host Your View Data

Add a view model to store view data by following the steps below:

1. Add a new file to the solution and name it *ToDoListDockablePaneViewModel.cs*.
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

#### Instantiation and Constructor 

Unlike the other extension class, this view model is not decorated with the `export` attribute. This means:

* The extension is responsible for instantiating this class
* You can specify any type of constructor you need

You must pass the following parameters:

* `baseUri` – the base address for the web interface
* `getCurrentApp` – a lambda expression to retrieve the current app instance
* `logService` – an instance of the logging service

```csharp
    public ToDoListDockablePaneViewModel(Uri baseUri, Func<IModel?> getCurrentApp, ILogService logService)
    {
        _baseUri = baseUri;
        _getCurrentApp = getCurrentApp;
        _logService = logService;
    }
```

You have already configured instantiation in the previous section.

#### Implementation

To host a web interface inside Studio Pro, the view model must implement `InitWebView`. This method receives an instance of `IWebView`, which represents your application's isolated webview. 

Provide the webview with the following code so the data is rendered correctly:

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

#### Webview Setup and Message Handling

Set the default address to `new Uri(_baseUri, "index")`. You will explore the origin of this index below in [Setting up Communication Between the User Interface and Extension](#set-up-communication).

The `MessageReceived` event handler enables two-way communication between the webview and your extension logic. Studio Pro uses a message bus for the interaction.

Within the event handler, you define the logic for three message types:

* `AddToDo` – adds a new to-do item
* `ChangeToDoStatus` – updates the status of a to-do item
* `ClearDone` – removes all completed items

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

#### Logic Methods

These methods perform the actual data manipulation based on the received messages:

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

## Creating a Model to Store the To-do Information

To store to-do data on disk, create model classes that represent individual items and the overall list. 

### Create the To-do Item Model

1. Add a new class file named *ToDoModel.cs*.
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


 ### Create the To-do List Model

1. Add another class file named *ToDoListModel.cs*.
2. Replace the contents of this file with the following code:

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

With the models in place, create a storage handler that will manage reading and writing to disk.

### Add the Storage Handler Class

1. Add a new class file named *ToDoStorage.cs*.
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

The `ToDoStorage` class is responsible for storing the to-do information to disk. In order to store the file in the correct path, request the path from the `CurrentApp` instance:

```csharp
    public ToDoStorage(IModel currentApp, ILogService logService)
    {
        _logService = logService;
        _toDoFilePath = Path.Join(currentApp.Root.DirectoryPath, "to-do-list.json");
    }
```

You also need to implement methods to load and save the to-do list:

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

## Adding a Menu Item to Launch the Extension

Add a menu item to make the extension accessible from the Studio Pro toolbar.

1. Create a `MenuExtension`.
2. Add a new class file named *ToDoListMenuExtension.cs*.
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

Now that the logic is in place, add a user interface that Studio Pro can render as web content.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/add-web-items.png"  >}}

1. Add a new folder to the solution named *wwwroot*.
2. In the folder, add:

    * `index.html` – an HTML page that contains the layout of the user interface 
    * `main.js` – A JavaScript file that contains the client-side logic

3. Open `index.html`.
4. Replace its contents with the following code:

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

5. Open `main.js`.
6. Add the JavaScript logic by replacing the contents of the file with the following code:

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

This HTML page provides a simple interface styled with Tailwind CSS. The JavaScript file enables communication between your web view and extension logic.

#### JavaScript Setup

1. Add a helper function to simplify the call to the browser API:

```javascript
function postMessage(message, data) {
  window.chrome.webview.postMessage({ message, data });
}
```

2. Initialize message handling and respond to incoming messages: 

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

{{% alert color="warning" %}}

Set `index.html` and `main.js` to **Copy always** or **Copy if newer** in their **Copy to Output Directory** property. Otherwise, they will not be included in the build output.

{{% /alert %}}

## Setting up Communication Between the User Interface and Extension {#set-up-communication}

Link the extension C# logic with the JavaScript UI by adding a utility class for handling web responses.

1. Add a new filed named *HttpListenerResponseUtils.cs*.
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

Your web-based user interface is hosted inside Studio Pro in an isolated web container. This utility class simplifies communication between the extension and web view:

* `SendFileAndClose` – send the contents of a file to the UI
* `SendJsonAndClose` – Sends a JSON stream
* `SendNoBodyAndClose` – Sends an empty response with a status code
* `AddDefaultHeaders` – adds default HTTP headers to the requests

## Adding a Web Server Extension

This extension type allows you to serve web content easily within Studio Pro.

1. Add a new file named *ToDoListWebServerExtension.cs*.
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

### Explanation

This class is the web container that allows Studio Pro to interact with your UI. It:

* Inherits from `WebServerExtension`, which serves content to Studio Pro
* Overrides `InitializeWebServer`, where you define three routes:
    * `ServeIndex`
    * `ServeMainJs`
    * `ServeToDos`
  
These web routes are the locations where your UI can be accessed from.

## Hosting the Extension in Studio Pro

With everything in place, follow the steps below to build and deploy your extension.

### Build and Deploy

1. In Visual Studio, select **Build** > **Build Solution**.
2. Navigate to the Mendix app where your extension will be hosted. 
3. Create a new folder named *extensions*.
4. Inside it, add a sub-folder named *TodoExtension*. Your path should look like this: `[Mendix App]/extensions/MyTodoExtension/`.
5. Copy the content from your Visual Studio project's `bin/debug` sub-folder into your app extension folder.
6. Run Studio Pro.

### Enable Extension Development

Use a command-line flag to enable extensions:

1. Open the Studio Pro Installation folder.
2. From the command-line, run: `.\studiopro.exe --enable-extension-development`.

This will launch Studio Pro and load your extension. You can now access it from the **View** > **Todo** menu item.