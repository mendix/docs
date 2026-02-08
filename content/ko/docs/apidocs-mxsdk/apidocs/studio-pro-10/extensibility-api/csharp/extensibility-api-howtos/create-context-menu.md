---
title: "C#을 사용하여 컨텍스트 메뉴 만들기"
linktitle: "컨텍스트 메뉴"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-context-menu/
weight: 6
---

## 소개

Studio Pro에서 `IEntity`나 Microflow 및 페이지와 같은 `IDocument`에 컨텍스트 메뉴를 추가할 수 있습니다. 이러한 컨텍스트 메뉴는 해당 확장 기능의 이름(예: `MyExtension`)으로 명명된 메뉴 아래에 나타나며, 관련 항목을 수정할 수 있습니다. 이는 확장 기능을 만들 때 타입을 지정하여 수행됩니다.

이 사용 방법의 예제는 [이 GitHub 리포지토리](https://github.com/mendix/ExtensionAPI-Samples)에서 다운로드할 수 있습니다.

## 전제 조건

 이 사용 방법을 시작하기 전에 먼저 [C#을 사용하여 메뉴 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/)를 완료하는 것이 좋습니다.

## Entity 컨텍스트 메뉴 확장 클래스 만들기

1. [C#을 사용하여 메뉴 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/)를 따라 이전에 만든 프로젝트를 여십시오.
2. 프로젝트에 *MyEntityContextMenuExtension.cs*라는 새 클래스를 추가하십시오.
3. 파일의 코드를 다음으로 바꾸십시오:

    ```csharp
    namespace MyCompany.MyProject.MendixExtension;
    
    [method: ImportingConstructor]
    [Export(typeof(Mendix.StudioPro.ExtensionsAPI.UI.Menu_V2.ContextMenuExtension<>))]
    class MyEntityContextMenuExtension(IMessageBoxService messageBoxService) : Mendix.StudioPro.ExtensionsAPI.UI.Menu_V2.ContextMenuExtension<IEntity>
    {
        MenuViewModel? disabledMenu;
    
        public override IEnumerable<MenuViewModel> GetContextMenus(IEntity entity)
        {
            var nudgeDownLeft = new MenuViewModel("Left", () => NudgeIt(entity, right: false, down: true));
            var nudgeDownLeftRight = new MenuViewModel("Right", () => NudgeIt(entity, right: true, down: true) );
            var nudgeDown = new MenuViewModel("Down", [nudgeDownLeft, nudgeDownLeftRight]);
    
            var nudgeUpLeft = new MenuViewModel("Left", () => NudgeIt(entity, right: false, down: false));
            var nudgeUpRight = new MenuViewModel("Right", () => NudgeIt(entity, right: true, down: false));
            var nudgeUp = new MenuViewModel("Up", [nudgeUpLeft, nudgeUpRight])
            {
                Separator = MenuSeparator.Before
            };
    
            yield return new MenuViewModel("Nudge it!", [nudgeDown, nudgeUp]);
    
            // new group
            var randomRenameString = new MenuViewModel("Random string", () => RenameEntity(entity, number: false));
            var randomRenameNumber = new MenuViewModel("Random number", () => RenameEntity(entity, number: true));
    
            yield return new MenuViewModel("Randomly rename", [randomRenameString, randomRenameNumber]);
    
            // show location
            yield return new MenuViewModel("Show location", () => ShowLocation(entity, messageBoxService));
    
            var showName = new MenuViewModel("Show current name", () => messageBoxService.ShowInformation(entity.Name));
            // "Randomly rename" was added previously, thus it will trigger an exception when collected if uncommented
            //yield return new MenuViewModel("Randomly rename", [showName]);
    
            // Enabling a disabled menu
            disabledMenu ??= new MenuViewModel("Disabled menu", () =>
            {
                messageBoxService.ShowInformation("I'm enabled now. But not for long!");
                disabledMenu!.IsEnabled = false;
            }){ IsEnabled = false };
            var enablingMenu = new MenuViewModel("Enable disabled menu", () => disabledMenu.IsEnabled = true );
    
            yield return new MenuViewModel("Enabling menus", [disabledMenu, enablingMenu]);
    
        }
    
        void NudgeIt(IEntity entity, bool right, bool down)
        {
            var incrementRight = right ? 20 : -20;
            var incrementDown = down ? 20 : -20;
            using var transaction = CurrentApp!.StartTransaction("nudge with context menu");
            entity.Location = new Location(entity.Location.X + incrementRight, entity.Location.Y + incrementDown);
    
            transaction.Commit();
        }
    
        void RenameEntity(IEntity entity, bool number)
        {
            using var transaction = CurrentApp!.StartTransaction("rename with context menu");
    
            entity.Name = number ? $"E_{new Random().Next()}" : $"E_{Guid.NewGuid().ToString().Replace("-", "")}";
    
            transaction.Commit();
        }
        static void ShowLocation(IEntity entity, IMessageBoxService messageBoxService) => messageBoxService.ShowInformation($"X: {entity.Location.X}, Y: {entity.Location.Y}");
    }
    ```

위 코드는 모든 Entity에 대한 일련의 컨텍스트 메뉴 항목을 만듭니다. 메뉴를 통해 다음을 수행할 수 있습니다:

* Entity 이름 변경
* 캔버스에서 Entity의 위치 변경
* 메시지 상자에 Entity 정보 표시
* 이전에 비활성화된 메뉴 항목 활성화

{{% alert type="info" %}}
컨텍스트 메뉴가 Entity에만 적용되도록 `IEntity` 타입이 전달됩니다. `MenuExtension.cs`와 동일한 로직을 사용하여 메뉴를 추가합니다. 더 많은 예제는 [C#을 사용하여 메뉴 확장 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-menu-extension/)를 참조하십시오.
{{% /alert %}}

## 문서에 컨텍스트 메뉴 추가하기

문서에도 컨텍스트 메뉴를 추가할 수 있습니다. 이를 위해 컨텍스트 메뉴 확장에서 `IDocument` 타입을 지정하십시오.

```csharp
namespace MyCompany.MyProject.MendixExtension;

[method: ImportingConstructor]
[Export(typeof(ContextMenuExtension<>))]
class MyDocumentContextMenuExtension(IMessageBoxService messageBoxService) : ContextMenuExtension<IDocument>
{
    public override IEnumerable<MenuViewModel> GetContextMenus(IDocument document)
    {
        if (document is IMicroflow microflow)
            yield return new MenuViewModel("This document is a  microflow", () => messageBoxService.ShowInformation(microflow.Name));

        else if (document is IPage page)
            yield return new MenuViewModel("This document is a  page", () => messageBoxService.ShowInformation(page.Name));
    }
}
```
