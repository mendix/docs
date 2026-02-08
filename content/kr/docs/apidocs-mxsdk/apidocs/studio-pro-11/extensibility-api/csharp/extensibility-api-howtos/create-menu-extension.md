---
title: "C#을 사용하여 메뉴 확장 프로그램 만들기"
linktitle: "메뉴 만들기"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/
weight: 4
---

## 소개

이 사용 방법(how-to)에서는 처음부터 Studio Pro 메뉴에 항목을 추가하는 확장 프로그램을 만드는 방법을 설명합니다.

이 사용 방법의 예제는 [이 GitHub 저장소](https://github.com/mendix/ExtensionAPI-Samples)에서 다운로드할 수 있습니다.

## 확장 프로젝트 생성

1. Visual Studio를 열고 `C# Class Library` 템플릿을 사용하여 새 프로젝트를 만듭니다.
2. 프로젝트 이름을 지정합니다. `MyCompany.MyProject.MendixExtension`과 유사한 형식을 사용하는 것이 좋습니다.
3. `.NET 8.0` 프레임워크를 선택합니다.
4. `Mendix.StudioPro.ExtensionsAPI` NuGet 패키지를 프로젝트 참조에 추가합니다. 설치한 Studio Pro 버전을 초과하지 않는 버전을 선택합니다. 이를 위해 다음 단계를 수행합니다:

    1. Extensions API [NuGet 패키지](https://www.nuget.org/packages/Mendix.StudioPro.ExtensionsAPI)에 대한 참조를 포함합니다.
    2. 프로젝트에 `manifest.json`이라는 새 파일을 추가합니다.
    3. 파일에 다음 코드를 추가합니다:

        ```json
        { "mx_extensions": [ "<name_of_your_project>.dll" ] }
        ```

    4. `manifest.json` 파일에 대해 **Solution Explorer** > **Properties**를 마우스 오른쪽 버튼으로 클릭하고 **Copy to Output Directory** 속성을 **Copy always**로 변경합니다.

## 테스트 Mendix 앱 생성

Mendix 앱을 만들거나 사용하여 확장 프로그램을 테스트하십시오.

1. 시작 템플릿을 사용하여 새 Mendix 앱을 만들거나 기존 앱을 사용합니다.
2. Studio Pro에서 **App** > **Show App Directory in Explorer**로 이동하여 앱 디렉토리를 엽니다.
3. 앱 디렉토리 내에 *Extensions*라는 새 폴더를 만듭니다.
4. **Extensions** 폴더 내에 확장 프로그램의 이름을 딴 하위 폴더(예: *MyCompany*)를 만듭니다.
5. 하위 폴더의 전체 경로를 복사합니다:
   1. <kbd>Shift</kbd> 키와 오른쪽 마우스 버튼을 동시에 누릅니다.
   2. **Copy as path**를 선택합니다.
6. 확장 프로젝트에 아래의 `Post-build event` 스크립트를 추가합니다:
   1. [Build > Events configuration](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-specify-build-events-csharp?view=vs-2022)으로 이동합니다.
   2. 이 명령을 사용합니다: `xcopy /y /s /i "$(TargetDir)" "<path_to_folder>"`
7. <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>를 눌러 확장 프로젝트를 빌드합니다.
8. Studio Pro에서 [Synchronize App Directory](/refguide/app-menu/#synchronize)를 클릭하거나 <kbd>F4</kbd>를 눌러 확장 프로그램의 최신 버전을 로드합니다.

## 첫 번째 확장 프로그램 생성

Studio Pro에 메뉴 항목을 추가하려면 다음 클래스를 추가하십시오:

```csharp
using System.ComponentModel.Composition;
using Mendix.StudioPro.ExtensionsAPI.UI.Menu;
using Mendix.StudioPro.ExtensionsAPI.UI.Services;

namespace MyCompany.MyProject.MendixExtension;

[method: ImportingConstructor]
[Export(typeof(MenuExtension))]
public class MyMenuExtension(IMessageBoxService messageBoxService) : MenuExtension
{
    public override IEnumerable<MenuViewModel> GetMenus()
    {
        yield return new MenuViewModel("Say hello", () => messageBoxService.ShowInformation("Hello World!"));
    }
}
```

확장 프로그램을 빌드하고 Studio Pro에서 <kbd>F4</kbd>를 누릅니다. 메뉴 항목은 확장 프로그램 이름이 있는 해당 메뉴 아래에 배치됩니다. 예를 들어 확장 프로그램 이름이 *My Extension*인 경우 메뉴 항목은 **Extensions** > **MyCompany** 하위 메뉴 아래에 위치합니다.

Extensibility API는 `ImportingConstructor` 속성을 사용하여 확장 클래스에 주입되는 여러 서비스를 제공합니다.

## 확장 이벤트 구독

`ExtensionLoaded` 및 `ExtensionUnloading` 이벤트를 구독하여 확장 프로그램이 Studio Pro에서 성공적으로 로드되고 언로드될 때 알림을 받을 수 있습니다.

```csharp
using Mendix.StudioPro.ExtensionsAPI.UI.Events;

namespace MyCompany.MyProject.MendixExtension;

[method: ImportingConstructor]
[Export(typeof(MenuExtension))]
public class MyMenuExtension() : MenuExtension
{
    public MyMenuExtension()
    {
       Subscribe<ExtensionLoaded>(onEvent: () => { MyActionOnLoaded() });
       Subscribe<ExtensionUnloading>(onEvent: () => { MyActionOnUnloading() });
    }
}
```

## 확장 프로그램 디버깅

1. Studio Pro에 최신 버전의 확장 코드가 로드되어 있는지 확인하십시오.
2. Visual Studio 디버거를 Studio Pro에 연결합니다:
   1. **Debug** > **Attach to Process** 대화 상자로 이동합니다(또는 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd>를 누릅니다).
   2. `studiopro.exe`를 검색하여 선택합니다.
   3. **Attach**를 클릭합니다.

3. `MyMenuExtension.GetMenus()`의 `Action` 델리게이트 내부에 중단점을 추가합니다.
4. **Extensions** > **MyCompany** > **Say hello** 메뉴 항목을 클릭하여 중단점을 트리거합니다.

## NuGet 종속성 추가

[NuGet](https://www.nuget.org/)을 통해 재사용 가능한 .NET 라이브러리에 액세스할 수 있습니다. 일회성 설정에 대해 다음 단계를 따르십시오:

1. Visual Studio에서 **Solution Explorer** > **Edit Project File**을 마우스 오른쪽 버튼으로 클릭하여 확장 프로젝트 `.csproj` 파일을 엽니다.
2. 첫 번째 `<PropertyGroup>` 내에 다음 줄을 추가합니다:

    ```xml
        <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>
    ```

3. **Manage NuGet Packages**를 사용하여 종속성을 추가합니다.
