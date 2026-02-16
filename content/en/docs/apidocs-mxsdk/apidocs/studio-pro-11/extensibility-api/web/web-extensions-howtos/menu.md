---
title: "Menus in the Extensibiity API"
linktitle: "Menus"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/menu/
---

## Menu Properties

A menu has the following properties:

| Property             | Description                                                                   |
|----------------------|-------------------------------------------------------------------------------|
| `caption`            | The text of the menu item                                                     |
| `menuId`             | A unique identifier for the menu item                                         |
| `subMenus`           | A list of sub-menu items                                                      |
| `hasSeparatorBefore` <br> (default: `false`)  | Adds a visual separator before the item              |
| `hasSeparatorAfter` <br> (default: `false`)  | Adds a visual separator after the item                |
| `enabled`  <br> (default: `true`)  | If disabled, the action of the menu will not be invoked when clicked |
| `action` | The action that executes when the menu is clicked |

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/grouped_menus.png" width="300" >}}

{{% alert color="info" %}}
A menu can only have an action or sub-menus—it cannot have both. A parent menu is not a clickable menu, it can only contain sub-menus that are clickable or more parent menus. If you try to add both sub-menus and an action to a menu, the code will not compile.
{{% /alert %}}

## Menu Action Payload

A menu can either have a context or no context. When adding a context menu to a document or an entity through the [appExplorer](/apidocs-mxsdk/apidocs/web-extensibility-api-11/app-explorer-api/) or [documents](/apidocs-mxsdk/apidocs/web-extensibility-api-11/documents-api/) APIs, Studio Pro sends the document Id back to the menu. The menu then invokes the action and passes this document Id as the argument. Because of this, the menu must be identified as `Menu<DocumentContext>`. When you create the menu with this context, the action needs to have a `DocumentContext` argument; otherwise, the action will not receive the document Id when the context menu is clicked.

{{% alert="info" %}}
The code will not compile if your action has the wrong payload (for example, if you pass a number or a different object). However, it is valid for your action to have no payload at all if your context menu does not need to use the document Id.
{{% /alert %}}

The `DocumentContext` type has only one property, the `documentId` string:

```typescript
type DocumentContext = { documentId: string };
```

## Menu Usage Examples

Below are the different ways to use menus:

```typescript
import { DocumentContext, IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const menuApi = studioPro.ui.extensionsMenu;
        const appExplorerApi = studioPro.ui.appExplorer;
        const messageBoxApi = studioPro.ui.messageBoxes;

        const menuId = "menu-without-context";

        const menu: Menu = {
            caption: "Menu Without Context",
            menuId,
            action: async () => await messageBoxApi.show("info", `My menu '${menuId}' was clicked`)
        };

        await menuApi.add(menu);

        const documentContextMenuId = "menu-with-context";

        const documentContextMenu: Menu<DocumentContext> = {
            caption: "Menu With Context",
            menuId: documentContextMenuId,
            action: async (arg: DocumentContext) =>
                await messageBoxApi.show("info", `My menu '${documentContextMenuId}' for microflow id ${arg.documentId} was clicked`)
        };

        await appExplorerApi.addContextMenu(documentContextMenu, "Microflows$Microflow");

        const documentContextMenuWithoutPayloadId = "menu-with-context-no-payload";

        const documentContextMenuNoPayload: Menu<DocumentContext> = {
            caption: "Menu With Context But No Payload",
            menuId: documentContextMenuWithoutPayloadId,
            action: async () =>
                await messageBoxApi.show("info", `My menu '${documentContextMenuWithoutPayloadId}' for a microflow was clicked`)
        };

        await appExplorerApi.addContextMenu(documentContextMenuNoPayload, "Microflows$Microflow");
    }
};
```
