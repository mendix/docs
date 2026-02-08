---
title: "C#을 사용하여 Studio Pro에 메뉴 및 하위 메뉴 추가하기"
linktitle: "구조화된 메뉴"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/add-menu/
weight: 15
---

## 소개

이 사용 방법에서는 하위 메뉴를 포함하는 메뉴를 추가하는 방법을 설명하며, 일부 하위 메뉴에는 자체 하위 메뉴도 포함됩니다.

이 사용 방법의 예제는 [이 GitHub 리포지토리](https://github.com/mendix/ExtensionAPI-Samples)에서 다운로드할 수 있습니다.

## 전제 조건

이 사용 방법은 [C#을 사용하여 메뉴 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/)의 결과를 사용합니다. 이 사용 방법을 시작하기 전에 해당 문서를 먼저 완료하십시오.

## 메뉴 확장 클래스 만들기

1. [C#을 사용하여 메뉴 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/)를 따라 만든 프로젝트를 여십시오.
2. 프로젝트에 새 클래스를 추가하고 *MyMenuExtension.cs*로 이름을 지정하십시오.
3. 파일의 코드를 다음으로 바꾸십시오:

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

위의 코드는 단일 메뉴 `Beverages`를 만듭니다. 이 메뉴에는 다음이 포함됩니다:

* `Beverages`에는 두 개의 하위 메뉴가 포함됩니다: `Hot`과 `Cold`
* `Hot`에는 `Coffee`와 `Tea`가 포함됩니다
* `Coffee`에는 `Black Coffee`, `Decaf`, `Espresso`가 포함됩니다 
* `Espresso`에는 `Regular Espresso`와 `Ristretto`가 포함됩니다 
* `Cold`에는 `Soda`가 포함됩니다

최상위 부모 메뉴(`Beverages`)만 `GetMenus` 메서드에서 반환됩니다. 부모가 없는 메뉴만 반환해야 합니다.

### 메뉴 배치

앱에 하나 이상의 확장 기능이 포함되어 있으면 Studio Pro의 기본 메뉴 바에 `Extensions`라는 이름의 최상위 메뉴가 나타납니다. 

`MenuExtension` 구현에서 생성된 메뉴는 확장 기능 진입점 이름(이 예에서는 `MyCompany`)별로 그룹화되며 전용 하위 메뉴 아래에 배치됩니다. 예를 들어, `MyMenuExtension`은 다음과 같이 배치됩니다: **Extensions** > **MyCompany** > **MyMenuExtension**.

### 메뉴 속성

메뉴는 다음 중 하나일 수 있습니다:

* 부모(하위 메뉴를 포함하는 메뉴), 또는 
* 액션을 가진 메뉴

하위 메뉴를 포함하면서 동시에 액션을 가진 메뉴는 만들 수 없습니다.

#### 구분선

`Separator` 속성을 사용하여 메뉴에 `MenuSeparator`를 추가할 수 있습니다. 옵션은 다음과 같습니다:

* `After`
* `Before` 
* `None` (기본값). 

#### 메뉴 활성화 및 비활성화

메뉴는 기본적으로 활성화되어 있습니다. 메뉴를 비활성화하려면 `IsEnabled` 속성을 `false`로 설정하십시오.
