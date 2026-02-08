---
title: "C#을 사용하여 Studio Pro에 메뉴 및 하위 메뉴 추가"
linktitle: "구조화된 메뉴"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/add-menu/
weight: 15
---

## 소개

이 사용 방법(how-to)에서는 하위 메뉴를 포함하는 메뉴를 추가하는 방법을 설명하며, 그 중 일부는 자체적인 하위 메뉴를 포함합니다.

이 사용 방법의 예제는 [이 GitHub 저장소](https://github.com/mendix/ExtensionAPI-Samples)에서 다운로드할 수 있습니다.

## 전제 조건

이 사용 방법은 [C#을 사용하여 메뉴 확장 프로그램 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/)의 결과를 사용합니다. 이 사용 방법을 시작하기 전에 해당 사용 방법을 완료하십시오.

## 메뉴 확장 클래스 생성

1. [C#을 사용하여 메뉴 확장 프로그램 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/)를 따를 때 생성한 프로젝트를 엽니다.
2. 프로젝트에 새 클래스를 추가하고 이름을 *MyMenuExtension.cs*로 지정합니다.
3. 파일의 코드를 다음으로 바꿉니다:

    ```csharp
    using Mendix.StudioPro.ExtensionsAPI.UI.Menu;
    using Mendix.StudioPro.ExtensionsAPI.UI.Services;
    using System.ComponentModel.Composition;
    
    namespace MyCompany.MyProject.MendixExtension;
    
    [Export(typeof(MenuExtension))]
    public class MyMenuExtension : MenuExtension
    {
        readonly IMessageBoxService messageBoxService;
    
        [ImportingConstructor]
        public MyMenuExtension(IMessageBoxService messageBoxService)
        {
            this.messageBoxService = messageBoxService;
        }
    
        public override IEnumerable<MenuViewModel> GetMenus()
        {
            var ristretto = new MenuViewModel("Ristretto", () => messageBoxService.ShowInformation("Ristretto"));
            var regularExpresso = new MenuViewModel("Regular Espresso", () => messageBoxService.ShowInformation("Regular Espresso"));
            var espresso = new MenuViewModel("Espresso", [regularExpresso, ristretto]);
            var blackCoffee = new MenuViewModel("Black Coffee", () => messageBoxService.ShowInformation("Black Coffee"));
            var decaf = new MenuViewModel("Decaf", () => messageBoxService.ShowInformation("Decaf")) { Separator = MenuSeparator.After };
            var coffee = new MenuViewModel("Coffee", [blackCoffee, decaf, espresso]);
    
            var tea = new MenuViewModel("Tea", () => messageBoxService.ShowInformation("Tea"));
    
            var hot = new MenuViewModel("Hot", [coffee, tea]);
    
            var soda = new MenuViewModel("Soda", () => messageBoxService.ShowInformation("Soda"));
            var cold = new MenuViewModel("Cold", [soda]);
    
            var beverages = new MenuViewModel("Beverages", [hot, cold]);
            yield return beverages;
        }
    }
    ```

### 메뉴 구조 개요

위 코드는 단일 메뉴인 `Beverages`를 생성합니다. 이 메뉴에는 다음이 포함됩니다:

* `Beverages`에는 `Hot` 및 `Cold`라는 두 개의 하위 메뉴가 있습니다.
* `Hot`에는 `Coffee` 및 `Tea`가 있습니다.
* `Coffee`에는 `Black Coffee`, `Decaf` 및 `Espresso`가 있습니다.
* `Espresso`에는 `Regular Espresso` 및 `Ristretto`가 있습니다.
* `Cold`에는 `Soda`가 있습니다.

`GetMenus` 메서드에서는 최상위 부모 메뉴(`Beverages`)만 반환됩니다. 부모가 없는 메뉴만 반환해야 합니다.

### 메뉴 배치

앱에 하나 이상의 확장 프로그램이 포함된 경우 Studio Pro의 기본 메뉴 표시줄에 `Extensions`라는 최상위 메뉴가 나타납니다.

`MenuExtension` 구현에서 생성된 메뉴는 확장 진입점 이름(이 예에서는 `MyCompany`)별로 그룹화되어 전용 하위 메뉴 아래에 배치됩니다. 예를 들어 `MyMenuExtension`은 다음과 같이 배치됩니다: **Extensions** > **MyCompany** > **MyMenuExtension**.

### 메뉴 속성

메뉴는 다음 중 하나일 수 있습니다:

* 부모(하위 메뉴를 포함하는 메뉴)이거나
* 작업을 가질 수 있습니다.

하위 메뉴를 포함하면서 동시에 작업을 가진 메뉴는 생성할 수 없습니다.

#### 구분선(Separators)

`Separator` 속성을 사용하여 메뉴에 `MenuSeparator`를 추가할 수 있습니다. 옵션은 다음과 같습니다:

* `After`
* `Before`
* `None` (기본값).

#### 메뉴 활성화 및 비활성화

메뉴는 기본적으로 활성화되어 있습니다. 메뉴를 비활성화하려면 `IsEnabled` 속성을 `false`로 설정하십시오.
