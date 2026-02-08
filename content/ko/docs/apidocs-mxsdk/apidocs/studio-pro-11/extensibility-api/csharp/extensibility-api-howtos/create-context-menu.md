---
title: "C#를 사용하여 컨텍스트 메뉴 만들기"
linktitle: "컨텍스트 메뉴"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-context-menu/
weight: 6
---

## 소개

Studio Pro에서 `IEntity` 또는 Microflow나 페이지 같은 `IDocument`에 컨텍스트 메뉴를 추가할 수 있습니다. These context menus will appear under a menu named after the extension that contains them (for example, `MyExtension`) and can modify the items they relate to. This is achieved by specifying the type when creating the extension.

이 How-to의 예제는 [이 GitHub 저장소](https://github.com/mendix/ExtensionAPI-Samples)에서 다운로드할 수 있습니다.

## 전제 조건

 이 How-to를 시작하기 전에 먼저 [Create a Menu Extension Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/) first.

## Entity 컨텍스트 메뉴 확장 클래스 만들기

1. Open the project you previously created by following [Create a Menu Extension Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/).
2. Add a new class to the project named *MyEntityContextMenuExtension.cs*.
3. Replace the code in the file with the following:

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

위 코드는 다음을 생성합니다 a series of context menu items for any entity. The menus allow you to:

* Rename the entity
* Change the entity's location on the canvas
* Display entity information in a message box
* Enable a previously disabled menu item

{{% alert type="info" %}}
The type `IEntity` is passed so the context menu will only apply to entities. It adds menus using the same logic as `MenuExtension.cs`. For more examples, see [Create a Menu Extension Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/).
{{% /alert %}}

## 문서에 컨텍스트 메뉴 추가하기

문서에도 컨텍스트 메뉴를 추가할 수 있습니다. To do this, specify the type `IDocument` in your context menu extension.

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
