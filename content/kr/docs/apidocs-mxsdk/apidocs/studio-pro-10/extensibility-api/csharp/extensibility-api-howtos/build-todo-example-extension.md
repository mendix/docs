---
title: "C#을 사용하여 To-do 예제 확장 프로그램 빌드"
linktitle: "To-do 예제"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/build-todo-example-extension/
weight: 20
---

## 소개

이 문서는 Studio Pro를 위한 간단한 할 일 목록(To-do List) 확장 프로그램을 빌드하는 방법을 설명합니다.

이 확장 프로그램을 사용하면 목록에 새 할 일 항목을 추가할 수 있으며, 이는 Studio Pro의 기본 메뉴와 통합됩니다. 또한 도킹 가능한 창(Dockable Pane)과 웹 콘텐츠를 사용하여 확장 프로그램의 사용자 인터페이스를 만들 것입니다.

이 문서에서는 다음 주제를 다룹니다:

* Studio Pro에서 확장 프로젝트 생성 및 구성
* 웹 기반 사용자 인터페이스 구축
* 로컬 JSON 파일에 데이터 저장
* Mendix 메타모델과의 상호 작용
* Studio Pro IDE 내에서 UI 호스팅

## 전제 조건

시작하기 전에 로컬 개발 환경에 다음 도구가 설치되어 있는지 확인하십시오:

* Microsoft Visual Studio 2022(또는 Visual Studio Code나 JetBrains Rider와 같은 동등한 도구); 이 예제에서는 Microsoft Visual Studio 2022를 사용한다고 가정합니다.
* Studio Pro 버전 10.6 이상

## 프로젝트 생성 및 확장 프로그램 구성

### 프로젝트 생성

Studio Pro에서 확장 프로그램이 올바르게 로드되도록 새 프로젝트를 만듭니다. 다음 단계를 따르십시오:

1. Visual Studio를 열고 새 프로젝트를 만듭니다.
2. **Class Library** 프로젝트 템플릿을 선택하고 **Next**를 클릭합니다.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-one.png" >}}

3. 프로젝트 이름을 *Mendix.ToDoExtension*으로 지정합니다.
4. 확장 프로그램을 저장할 위치를 선택한 다음 **Next**를 클릭합니다.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-two.png" >}}

5. **Framework**를 *.NET 8.0 (Long Term Support)*으로 설정합니다.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-three.png" max-width=80%  >}}

6. **Create**를 클릭합니다.

### Extensions API NuGet 패키지 설치

1. Visual Studio에서 **Tools** > **NuGet Package Manager** > **Manage NuGet Packages for Solution**으로 이동합니다.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-four.png" >}}

2. **Browse** 탭에서 **Mendix ExtensionsAPI**를 검색합니다.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-five.png" max-width=50% >}}

3. NuGet 패키지를 선택하고 **Install**을 클릭합니다.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/step-six.png"  max-width=50%  >}}

### `manifest.json` 파일 추가

이제 Studio Pro에서 확장 프로그램으로 로드할 수 있는 클래스 라이브러리가 있습니다. 그러나 클래스 라이브러리의 어셈블리를 로드하는 방법을 결정해야 합니다. Studio Pro는 *manifest.json*이라는 특수 파일을 읽어 각 실행 컨텍스트에 로드할 어셈블리를 지시합니다.

1. Visual Studio에서 **View** > **Solution Explorer**를 클릭하여 솔루션 탐색기를 엽니다.
2. 솔루션 탐색기를 마우스 오른쪽 버튼으로 클릭하고 *manifest.json*이라는 새 파일을 추가합니다.
3. 솔루션 탐색기를 마우스 오른쪽 버튼으로 클릭하고 **Properties**를 선택합니다.
4. **Copy to Output Directory** 속성을 **Copy always**로 설정하여 파일이 확장 프로그램 출력 파일에 포함되도록 합니다.
5. `manifest.json` 파일의 내용을 다음 코드로 바꿉니다:

    ```json
    {
      "mx_extensions": [ "ToDoExtension.dll" ],
      "mx_build_extensions": [ ]
    }
    ```

     `manifest.json` 파일 내에서 확장 프로그램이 제공해야 하는 다양한 컨텍스트에 대해 Studio Pro가 로드해야 하는 어셈블리를 지정합니다. 확장 프로그램이 디자인 타임 기능에만 액세스하고 사용자 인터페이스가 필요한 경우 `mx_extensions` 옵션에 추가할 수 있습니다. 그러나 확장 프로그램이 런타임 정보에 액세스해야 하거나 디자인 타임 개념을 런타임 개념으로 변환해야 하는 경우 `mx_build_extensions`에 추가하십시오.

    이것은 Studio Pro가 앱에 대한 확장 프로그램을 로드할 때마다 `Mendix.ToDoExtension.dll`을 로드하도록 지시합니다. 필요에 따라 로컬 프로젝트 이름을 조정하십시오.

    {{% alert color="warning" %}}`mx_build_extensions`에 지정된 빌드 확장 프로그램은 사용자 인터페이스에 액세스할 수 없습니다. 사용자 인터페이스 라이브러리에 연결하려고 하면 실패합니다. 마찬가지로 `mx_extensions`에서 로드된 확장 프로그램은 런타임 기능에 액세스할 수 없으며 디자인 타임 전용입니다.{{% /alert %}}

6. 필요하지 않은 `Class1.cs` 파일을 제거하십시오.

## UI를 위한 도킹 가능한 창(Dockable Pane) 추가

1. 솔루션에 *ToDoListDockablePaneExtension.cs*라는 새 파일을 추가합니다.
2. 파일의 내용을 다음 코드로 바꿉니다:

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
`ToDoListDockablePaneViewModel` 주변에 오류가 표시되는데, 이는 예상된 것입니다.
{{% /alert %}}

### 주요 기능

위 코드에는 몇 가지 주목할 만한 기능이 있습니다:

* `Export` 속성:

```csharp
[Export(typeof(DockablePaneExtension))]
```

   Studio Pro는 이 속성을 사용하여 이 클래스를 주입할 확장 유형을 식별합니다. 이 속성을 지정하지 않으면 Studio Pro는 확장 유형을 로드하지 않습니다. 확장은 `DockablePaneExtension`에서 상속됩니다. Studio Pro는 추상 클래스를 사용하여 확장 프로그램의 동작을 강제합니다.

```csharp
public class ToDoListDockablePaneExtension : DockablePaneExtension
```

* `ImportingConstructor` 속성

    이 속성은 유형을 로드하기 위해 기본 생성자에 추가해야 합니다. Studio Pro는 확장 클래스를 인스턴스화할 때 이 생성자를 사용합니다.

    클래스를 인스턴스화할 때 Studio Pro는 생성자에 정의한 모든 유형에 대해 의존성 주입을 수행하려고 시도합니다.

* `ILogService`

    자체 사용자 지정 유형을 주입하려면 해당 유형에도 `Export` 속성을 장식해야 합니다:

    ```csharp
        [ImportingConstructor]
        public ToDoListDockablePaneExtension(ILogService logService)
        {
            _logService = logService;
        }
    ```

    이 생성자에서는 `ILogService`의 인스턴스를 요청한 다음 개인 필드에 저장합니다:

    ```csharp
        public override string Id => PaneId;

        public override DockablePaneViewModelBase Open()
        {
            return new ToDoListDockablePaneViewModel(WebServerBaseUrl, () => CurrentApp, _logService) { Title = "To Do List" };
        }
    ```

* 속성 재정의

    Studio Pro에 다음 정보를 제공하십시오:

    * `Id` 속성 재정의
        * 이 속성은 Studio Pro가 도킹 가능한 창 확장 프로그램을 고유하게 식별할 수 있는 방법을 제공합니다.
    * `Open` 메서드 재정의
        * 이 메서드 내에서 Studio Pro가 창의 콘텐츠를 렌더링하는 데 사용할 `DockablePaneViewModelBase`의 유효한 구현을 반환해야 합니다.

## 뷰 데이터를 호스팅하기 위한 뷰 모델 생성

다음 단계에 따라 뷰 데이터를 저장할 뷰 모델을 추가하십시오:

1. 솔루션에 새 파일을 추가하고 이름을 *ToDoListDockablePaneViewModel.cs*로 지정합니다.
2. 파일의 내용을 다음 코드로 바꿉니다:

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

### 설명

#### 인스턴스화 및 생성자

다른 확장 클래스와 달리 이 뷰 모델은 `export` 속성으로 장식되지 않습니다. 이는 다음을 의미합니다:

* 확장 프로그램이 이 클래스를 인스턴스화할 책임이 있습니다.
* 필요한 모든 유형의 생성자를 지정할 수 있습니다.

다음 파라미터를 전달해야 합니다:

* `baseUri` – 웹 인터페이스의 기본 주소
* `getCurrentApp` – 현재 앱 인스턴스를 검색하기 위한 람다 식
* `logService` – 로깅 서비스의 인스턴스

```csharp
    public ToDoListDockablePaneViewModel(Uri baseUri, Func<IModel?> getCurrentApp, ILogService logService)
    {
        _baseUri = baseUri;
        _getCurrentApp = getCurrentApp;
        _logService = logService;
    }
```

이전 섹션에서 이미 인스턴스화를 구성했습니다.

#### 구현

Studio Pro 내부에서 웹 인터페이스를 호스팅하려면 뷰 모델이 `InitWebView`를 구현해야 합니다. 이 메서드는 애플리케이션의 격리된 웹뷰를 나타내는 `IWebView`의 인스턴스를 수신합니다.

데이터가 올바르게 렌더링되도록 다음 코드를 웹뷰에 제공하십시오:

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

#### 웹뷰 설정 및 메시지 처리

기본 주소를 `new Uri(_baseUri, "index")`로 설정합니다. 아래 [사용자 인터페이스와 확장 프로그램 간의 통신 설정(#set-up-communication)](#set-up-communication)에서 이 인덱스의 출처를 살펴보겠습니다.

`MessageReceived` 이벤트 핸들러는 웹뷰와 확장 프로그램 로직 간의 양방향 통신을 가능하게 합니다. Studio Pro는 상호 작용을 위해 메시지 버스를 사용합니다.

이벤트 핸들러 내에서 세 가지 메시지 유형에 대한 로직을 정의합니다:

* `AddToDo` – 새 할 일 항목 추가
* `ChangeToDoStatus` – 할 일 항목의 상태 업데이트
* `ClearDone` – 완료된 모든 항목 제거

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

#### 로직 메서드

이 메서드들은 수신된 메시지를 기반으로 실제 데이터 조작을 수행합니다:

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

## 할 일 정보를 저장하기 위한 모델 생성

할 일 데이터를 디스크에 저장하려면 개별 항목과 전체 목록을 나타내는 모델 클래스를 만드십시오.

### 할 일 항목 모델 생성

1. *ToDoModel.cs*라는 새 클래스 파일을 추가합니다.
2. 파일의 내용을 다음 코드로 바꿉니다:

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

### 할 일 목록 모델 생성

1. *ToDoListModel.cs*라는 또 다른 클래스 파일을 추가합니다.
2. 이 파일의 내용을 다음 코드로 바꿉니다:

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

## 할 일 정보를 저장하기 위한 저장소 핸들러 생성

모델이 준비되면 디스크 읽기 및 쓰기를 관리할 저장소 핸들러를 만듭니다.

### 저장소 핸들러 클래스 추가

1. *ToDoStorage.cs*라는 새 클래스 파일을 추가합니다.
2. 파일의 내용을 다음 코드로 바꿉니다:

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

### 설명

`ToDoStorage` 클래스는 할 일 정보를 디스크에 저장하는 역할을 합니다. 파일을 올바른 경로에 저장하려면 `CurrentApp` 인스턴스에서 경로를 요청하십시오:

```csharp
    public ToDoStorage(IModel currentApp, ILogService logService)
    {
        _logService = logService;
        _toDoFilePath = Path.Join(currentApp.Root.DirectoryPath, "to-do-list.json");
    }
```

할 일 목록을 로드하고 저장하는 메서드도 구현해야 합니다:

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

## 확장 프로그램을 실행할 메뉴 항목 추가

Studio Pro 도구 모음에서 확장 프로그램에 액세스할 수 있도록 메뉴 항목을 추가합니다.

1. `MenuExtension`을 생성합니다.
2. *ToDoListMenuExtension.cs*라는 새 클래스 파일을 추가합니다.
3. 파일의 내용을 다음 코드로 바꿉니다:

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

## 웹 기반 사용자 인터페이스 추가

로직이 준비되었으므로 Studio Pro가 웹 콘텐츠로 렌더링할 수 있는 사용자 인터페이스를 추가합니다.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/build-todo-example-extension/add-web-items.png"  >}}

1. 솔루션에 *wwwroot*라는 새 폴더를 추가합니다.
2. 폴더에 다음을 추가합니다:

    * `index.html` – 사용자 인터페이스의 레이아웃을 포함하는 HTML 페이지
    * `main.js` – 클라이언트 측 로직을 포함하는 JavaScript 파일

3. `index.html`을 엽니다.
4. 내용을 다음 코드로 바꿉니다:

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

5. `main.js`를 엽니다.
6. 파일의 내용을 다음 코드로 바꾸어 JavaScript 로직을 추가합니다:

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

### 설명

이 HTML 페이지는 Tailwind CSS로 스타일이 지정된 간단한 인터페이스를 제공합니다. JavaScript 파일은 웹 뷰와 확장 프로그램 로직 간의 통신을 가능하게 합니다.

#### JavaScript 설정

1. 브라우저 API 호출을 단순화하는 도우미 함수를 추가합니다:

    ```javascript
    function postMessage(message, data) {
        window.chrome.webview.postMessage({ message, data });
    }
    ```

2. 메시지 처리를 초기화하고 수신 메시지에 응답합니다:

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

**Copy to Output Directory** 속성에서 `index.html` 및 `main.js`를 **Copy always** 또는 **Copy if newer**로 설정하십시오. 그렇지 않으면 빌드 출력에 포함되지 않습니다.

{{% /alert %}}

## 사용자 인터페이스와 확장 프로그램 간의 통신 설정 {#set-up-communication}

웹 응답을 처리하기 위한 유틸리티 클래스를 추가하여 확장 프로그램 C# 로직과 JavaScript UI를 연결합니다.

1. *HttpListenerResponseUtils.cs*라는 새 파일을 추가합니다.
2. 파일의 내용을 다음으로 바꿉니다:

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

### 설명

웹 기반 사용자 인터페이스는 격리된 웹 컨테이너의 Studio Pro 내부에서 호스팅됩니다. 이 유틸리티 클래스는 확장 프로그램과 웹 뷰 간의 통신을 단순화합니다:

* `SendFileAndClose` – 파일 내용을 UI로 전송
* `SendJsonAndClose` – JSON 스트림 전송
* `SendNoBodyAndClose` – 상태 코드와 함께 빈 응답 전송
* `AddDefaultHeaders` – 요청에 기본 HTTP 헤더 추가

## 웹 서버 확장 추가

이 확장 프로그램 유형을 사용하면 Studio Pro 내에서 웹 콘텐츠를 쉽게 제공할 수 있습니다.

1. *ToDoListWebServerExtension.cs*라는 새 파일을 추가합니다.
2. 파일의 내용을 다음 코드로 바꿉니다:

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

### 설명

이 클래스는 Studio Pro가 UI와 상호 작용할 수 있도록 하는 웹 컨테이너입니다. 다음과 같은 역할을 합니다:

* `WebServerExtension`을 상속하여 Studio Pro에 콘텐츠를 제공합니다.
* `InitializeWebServer`를 재정의하여 세 가지 경로를 정의합니다:
    * `ServeIndex`
    * `ServeMainJs`
    * `ServeToDos`
  
이러한 웹 경로는 UI에 액세스할 수 있는 위치입니다.

## Studio Pro에서 확장 프로그램 호스팅

모든 준비가 완료되었으므로 다음 단계에 따라 확장 프로그램을 빌드하고 배포하십시오.

### 빌드 및 배포

1. Visual Studio에서 **Build** > **Build Solution**을 선택합니다.
2. 확장 프로그램이 호스팅될 Mendix 앱으로 이동합니다.
3. *extensions*라는 새 폴더를 만듭니다.
4. 그 안에 *TodoExtension*이라는 하위 폴더를 추가합니다. 경로는 다음과 같아야 합니다: `[Mendix App]/extensions/MyTodoExtension/`.
5. Visual Studio 프로젝트의 `bin/debug` 하위 폴더 내용을 앱 확장 프로그램 폴더로 복사합니다.
6. Studio Pro를 실행합니다.

### 확장 프로그램 개발 활성화

명령줄 플래그를 사용하여 확장 프로그램을 활성화합니다:

1. Studio Pro 설치 폴더를 엽니다.
2. 명령줄에서 `.\studiopro.exe --enable-extension-development`를 실행합니다.

그러면 Studio Pro가 실행되고 확장 프로그램이 로드됩니다. 이제 **View** > **Todo** 메뉴 항목에서 액세스할 수 있습니다.
