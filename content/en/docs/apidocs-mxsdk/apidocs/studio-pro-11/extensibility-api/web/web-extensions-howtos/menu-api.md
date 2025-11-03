---
title: "Create a Menu Using Web API"
linktitle: "Create Menu"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/
---

## Introduction

This how-to describes how to create menus using the web extensibility API. In this example, you will:

* Create a simple menu item
* Add menu items with sub-menus
* Update a menu

## Prerequisites

This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Make sure to complete that how-to before starting this one.

## Menu Properties

A menu has the following properties:

| Property             | Description                                                                   |
|----------------------|-------------------------------------------------------------------------------|
| `caption`            | The text of the menu item                                                     |
| `menuId`             | A unique identifier for the menu item                                         |
| `subMenus`           | A list of sub-menu items                                                      |
| `hasSeparatorBefore` <br> (default: `false`)  | Adds a visual separator before the item              |
| `hasSeparatorAfter` <br> (default: `false`)  | Adds a visual separator after the item                |
| `enabled`  <br> (default: `true`)  | Indicates that the menu item notifies the listener when clicked |


{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/grouped_menus.png" width="300" >}}

## Creating a Simple Menu

The code below adds a simple menu to your extension. The code will:

* Create a menu item with the caption *My First Menu*
* Show a dialog when the menu is clicked
* Import `menuApi` from `studioPro.ui.extensionsMenu` to allow you to use the menu API
* Import `messageBoxApi` from `studioPro.ui.messageBoxes` to show a dialog

Replace your `src/main/index.ts` file with the following:

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const menuApi = studioPro.ui.extensionsMenu;
        const messageBoxApi = studioPro.ui.messageBoxes;

        const menuId = "my-menu-unique-id";
        const caption = "My First Menu";

        // Open a message box when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener("menuItemActivated", (args) => {
            if (args.menuId === "my-menu-unique-id") {
                messageBoxApi.show("info", `My menu '${args.menuId}' was clicked`);
            }
        });

        const menu: Menu = {
            caption: caption,
            menuId: menuId,
            subMenus: [],
            hasSeparatorBefore: false,
            hasSeparatorAfter: true,
            enabled: true,
        };

        await menuApi.add(menu);
    }
}
```

When this code is added, it does the following:

1. Studio Pro starts listening to the `menuItemActivated` endpoint. This notifies the extension when **My First Menu** is clicked.
2. The `args` parameter contains the information sent from Studio Pro to the extension, indicating which menu item was clicked.
3. The listener checks if the clicked `menuId` matches your defined ID. If it does, it calls `messageBoxApi.show()`.
4. Studio Pro displays an information dialog with the message you provided.

Your extensions should now appear like this:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/my_first_menu.png" width="200" >}}

## Creating a Menu with Submenus

You can also include multiple sub-menus to expand your menu structure.

To do this, add additional menu items to your code and add them to the `subMenus` array for the relevant menu item. These child menus can have their own sub-menus, and so on. Only parent menus (menus that are not sub-menus to any others) should be added through the `await menuApi.add()` call, as shown in the code sample below.

{{% alert color="info" %}}
Parent menus (with `subMenus`) do not create `menuItemActivated` events. These are only sent when a leaf menu (a menu that does not have any sub-menus) is clicked.
{{% /alert %}}

The following `src/main/index.ts` generates one menu item with sub-menus, and one menu item without sub-menus.

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const menuApi = studioPro.ui.extensionsMenu;
        const messageBoxApi = studioPro.ui.messageBoxes;

        // Open a message box when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener("menuItemActivated", (args) => {
            messageBoxApi.show("info", `Child menu '${args.menuId}' was clicked`);
        });

        const grandChild: Menu = {
            caption: "Grandchild Menu",
            menuId: "grandChild",
        };

        const childMenu1: Menu = {
            caption: "Child Menu 1",
            menuId: "child_1",
            subMenus: [grandChild],
        };

        const childMenu2: Menu = {
            caption: "Child Menu 2",
            menuId: "child_2",
        };

        const menu1: Menu = {
            caption: "Menu 1",
            menuId: "menu1",
            subMenus: [childMenu1, childMenu2],
        };

        const menu2: Menu = {
            caption: "Menu 2",
            menuId: "menu2",
            subMenus: [],
        };

        await menuApi.add(menu1);
        await menuApi.add(menu2);
    }
}
```

The menu hierarchy will be displayed like this:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/child_menus.png" >}}

## Updating a Menu

You can disable a menu or update its caption, depending on a condition. You can do this by calling the menu API's `updateMenu` method.

An example is shown in the code below. If you click the menu item, it will be disabled and its caption will be updated.

{{% alert color="info" %}}
Only `caption` and `enabled` can be updated.
{{% /alert %}}

You can test it by the following code as the contents of  `src/main/index.ts`.

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const menuApi = studioPro.ui.extensionsMenu;

        const menuId = "my-menu-unique-id";
        const caption = "My First Menu";

        menuApi.addEventListener("menuItemActivated", (args) => {
            if (args.menuId !== menuId) return;
            menuApi.update(menuId, {
                caption: `${caption} (Disabled)`,
                enabled: false,
            });
        });

        const menu: Menu = {
            caption: caption,
            menuId: menuId,
            subMenus: [],
            hasSeparatorBefore: false,
            hasSeparatorAfter: true,
            enabled: true,
        };

        await menuApi.add(menu);
    }
}
```

The disabled state is shown in the image below:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/disabled_menu.png" width="300" >}}

## Attaching a Command to the Menu

Instead of listening to the `menuItemActivated` event, it is possible to register a command, then attach the `commandId` of the new command to your menu. When the menu is clicked, if its `commandId` property has been set, the backend will execute the command instead of firing the `menuItemActivated` event. 

For more information on how to register commands, see the [Commands API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/command-api/).

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
