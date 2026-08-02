---
title: "Create a Menu Using Web API"
linktitle: "Create Menu"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/
---

## Introduction

This how-to describes how to create menus using the Web Extensibility API. In this example, you will do the following:

* Create a simple menu item
* Add menu items with submenus
* Update a menu

## Prerequisites

{{% alert="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to the Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert%}}

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Make sure to complete that how-to before starting this one.
* Review [how menus work](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu/) in the Web Extensibility API.

## Creating a Simple Menu

The code below adds a simple menu to your extension. The code does the following:

* Creates a menu item with the caption **My First Menu**
* Shows a dialog when you click the menu
* Imports `menuApi` from `studioPro.ui.extensionsMenu` to allow you to use the menu API
* Imports `messageBoxApi` from `studioPro.ui.messageBoxes` to show a dialog

Replace your `src/main/index.ts` file with the following code:

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

Your extension should now appear like this:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/my_first_menu.png" width="200" >}}

## Creating a Menu with Submenus

You can include multiple submenus to expand your menu structure.

To do this, add additional menu items to your code and add them to the `subMenus` array for the relevant menu item. These child menus can have their own submenus, and so on. Only parent menus (menus that are not submenus to any others) should be added through the `await menuApi.add()` call, as shown in the code sample below.

{{% alert color="info" %}}
Parent menus (with `subMenus`) do not create `menuItemActivated` events. These are only sent when you click a leaf menu (a menu that does not have any submenus).
{{% /alert %}}

The following `src/main/index.ts` generates one menu item with submenus and one menu item without submenus.

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

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/child_menus.png" alt="Menu hierarchy showing parent menus with child and grandchild menus" >}}

## Updating a Menu

You can disable a menu or update its caption, depending on a condition. You can do this by calling the menu API's `updateMenu` method.

An example is shown in the code below. If you click the menu item, it will be disabled and its caption will be updated.

{{% alert color="info" %}}
Only `caption` and `enabled` can be updated.
{{% /alert %}}

You can test this by using the following code as the contents of `src/main/index.ts`.

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

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/disabled_menu.png" alt="Menu item in disabled state with updated caption" width="300" >}}

## Setting the Action Property on the Menu

You can also set the `action` property on the menu directly.

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const menuApi = studioPro.ui.extensionsMenu;

        const menuId = "my-menu-unique-id";
        const caption = "Menu with Action";

        const menu: Menu = {
            caption: caption,
            menuId: menuId,
            action: async () => {
                await menuApi.update(menuId, {
                    caption: `${caption} (Disabled)`,
                    enabled: false
                });
            }
        };

        await menuApi.add(menu);
    }
}
```

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a short [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
