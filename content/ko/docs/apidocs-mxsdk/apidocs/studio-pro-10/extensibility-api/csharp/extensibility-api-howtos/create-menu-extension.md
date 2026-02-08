---
title: "C#을 사용하여 메뉴 확장 만들기"
linktitle: "메뉴 만들기"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/
weight: 4
---

## 소개

이 사용 방법에서는 처음부터 Studio Pro 메뉴에 항목을 추가하는 확장 기능을 만드는 방법을 설명합니다.

이 사용 방법의 예제는 [이 GitHub 리포지토리](https://github.com/mendix/ExtensionAPI-Samples)에서 다운로드할 수 있습니다.

## 확장 프로젝트 만들기

1. Visual Studio를 열고 `C# Class Library` 템플릿을 사용하여 새 프로젝트를 만드십시오.
2. 프로젝트 이름을 지정하십시오. `MyCompany.MyProject.MendixExtension`과 유사한 형식을 사용하는 것이 좋습니다.
3. `.NET 8.0` Framework를 선택하십시오.
4. 프로젝트 참조에 `Mendix.StudioPro.ExtensionsAPI` NuGet 패키지를 추가하십시오. 설치한 Studio Pro 버전을 초과하지 않는 버전을 선택하십시오. 다음 단계를 수행하십시오:

    1. Extensions API [NuGet 패키지](https://www.nuget.org/packages/Mendix.StudioPro.ExtensionsAPI)에 대한 참조를 포함하십시오: 
    2. 프로젝트에 `manifest.json`이라는 새 파일을 추가하십시오. 
    3. 파일에 다음 코드를 추가하십시오:

        ```json
        { "mx_extensions": [ "<name_of_your_project>.dll" ] }
        ```

    4. `manifest.json` 파일에 대해 **Solution Explorer** > **Properties**를 마우스 오른쪽 버튼으로 클릭하고 **Copy to Output Directory** 속성을 **Copy always**로 변경하십시오.

## 테스트 Mendix 앱 만들기

Mendix 앱을 만들거나 기존 앱을 사용하여 확장 기능을 테스트하십시오.

1. 스타터 템플릿을 사용하여 새 Mendix 앱을 만들거나 기존 앱을 사용하십시오.
2. Studio Pro에서 **App** > **Show App Directory in Explorer**로 이동하여 앱 디렉터리를 여십시오.
3. 앱 디렉터리 안에 *Extensions*라는 새 폴더를 만드십시오.
4. **Extensions** 폴더 안에 확장 기능 이름으로 하위 폴더를 만드십시오(예: *MyCompany*).
5. 하위 폴더의 전체 경로를 복사하십시오:
   1. <kbd>Shift</kbd>를 누른 상태에서 마우스 오른쪽 버튼을 동시에 클릭하십시오.
   2. **Copy as path**를 선택하십시오.
6. 확장 프로젝트에 아래 `Post-build event` 스크립트를 추가하십시오:
   1. [Build > Events configuration](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-specify-build-events-csharp?view=vs-2022)으로 이동하십시오.
   2. 다음 명령을 사용하십시오: `xcopy /y /s /i "$(TargetDir)" "<path_to_folder>"`
7. <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>를 눌러 확장 프로젝트를 빌드하십시오.
8. Studio Pro에서 [앱 디렉터리 동기화](/refguide/app-menu/#synchronize)(또는 <kbd>F4</kbd> 누름)를 클릭하여 최신 버전의 확장 기능을 로드하십시오.

## 첫 번째 확장 기능 만들기

Studio Pro 메뉴에 메뉴 항목을 추가하려면 다음 클래스를 추가하십시오:

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

확장 기능을 빌드하고 Studio Pro에서 <kbd>F4</kbd>를 누르십시오. 메뉴 항목은 확장 기능 이름에 해당하는 메뉴 아래에 배치됩니다. 예를 들어, 확장 기능 이름이 *My Extension*이면 메뉴 항목은 **Extensions** > **MyCompany** 하위 메뉴 아래에 위치합니다.

Extensibility API는 `ImportingConstructor` 속성을 사용하여 확장 클래스에 주입되는 여러 서비스를 제공합니다.

## 확장 이벤트 구독하기

확장 기능이 Studio Pro에서 성공적으로 로드되고 언로드될 때 `ExtensionLoaded` 및 `ExtensionUnloading` 이벤트를 구독하여 알림을 받을 수 있습니다.

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

## 확장 기능 디버깅

1. 최신 버전의 확장 기능 코드가 Studio Pro에 로드되었는지 확인하십시오.
2. Visual Studio 디버거를 Studio Pro에 연결하십시오:
   1. **Debug** > **Attach to Process** 대화 상자로 이동하십시오(또는 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd> 누름).
   2. `studiopro.exe`를 검색하고 선택하십시오.
   3. **Attach**를 클릭하십시오.

3. `MyMenuExtension.GetMenus()`의 `Action` 대리자 안에 중단점을 추가하십시오. 
4. **Extensions** > **MyCompany** > **Say hello** 메뉴 항목을 클릭하여 중단점을 트리거하십시오.

## NuGet 의존성 추가하기

[NuGet](https://www.nuget.org/)을 통해 재사용 가능한 .NET 라이브러리에 접근할 수 있습니다. 일회성 설정을 위해 아래 단계를 따르십시오:

1. Visual Studio에서 **Solution Explorer** > **Edit Project File**을 마우스 오른쪽 버튼으로 클릭하여 확장 프로젝트 `.csproj` 파일을 여십시오.
2. 첫 번째 `<PropertyGroup>` 안에 다음 줄을 추가하십시오:

    ```xml
        <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>
    ```

3. **Manage NuGet Packages**를 사용하여 의존성을 추가하십시오. 
