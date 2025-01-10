---
title: "Create a Context Menu"
url: /apidocs-mxsdk/apidocs/extensibility-api/create-context-menu/
weight: 6
---

## Introduction

It is possible to add a context menu to an `IEntity` in Studio Pro or to a `IDocument`, such as microflows and pages, etc. Context menus will be placed under a menu named after the extension that contains them (e.g. `MyExtension`) and context menus can modify those items they relate to. You can achieve this simple by specifying the type when creating the extension.

This how-to describes how you can add a context menu to an entity. Before you start this how-to, it is recommended to [create a menu extension](/apidocs-mxsdk/apidocs/extensibility-api/create-menu-extension/) first.

You can download the example in this how-to in [this GitHub repository](https://github.com/mendix/ExtensionAPI-Samples).

## Creating an Entity Context Menu Extension Class

1. Open the project that you previously created when you [created the menu extension](/apidocs-mxsdk/apidocs/extensibility-api/create-menu-extension/).
2. Add a new class to the project and name it `MyEntityContextMenuExtension.cs`.
3. Replace the code in the file with the following code:

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

The code above creates a series of context menu items for any entity. It is important to note the type `IEntity` is passed in so that the context menu will only apply to entities. It adds menus using the same logic as `MenuExtension.cs`. For more examples, see [Create a Menu Extension](/apidocs-mxsdk/apidocs/extensibility-api/create-menu-extension/).

In the code above, you can see a few context menus that can perform changes on the entity they belong to. In The entity's location on the canvas can be changed, it can be renamed, and some of its information is shown in a message box. 

It is also possible to add menus that are disabled until some action is performed.

## Adding a Context Menu to a Document

You can also add a context menu to a document. All you have to do is specify the type `IDocument` in the context menu extension.

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
