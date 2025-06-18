---
title: "Create a Menu Using Web API"
linktitle: "Create Menu"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/
weight: 30
---

## Introduction

This how-to shows you how to create both a simple menu item and a menu item with subsidiary items beneath it using the web extension API.

## Prerequisites

This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Please complete that how-to before starting this one.

## Creating a Simple Menu

In this section, you will add a simple menu to your extension.

The code below will:

* create a menu item with the caption "My First Menu"
* show a dialog when the menu is clicked

Replace your `src/main/index.ts` file with the following:

```typescript
import { IComponent, Menu, studioPro } from "@mendix/extensions-api";

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
class Main implements IComponent {
  async loaded() {
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

export const component: IComponent = new Main();
```

The code imports the following:

* `menuApi` from `studioPro.ui.extensionsMenu` to allow you to use the menu API
* `messageBoxApi` from `studioPro.ui.messageBoxes` to show a dialog.

It starts listening to the `menuItemActivated` endpoint which will notify the extension when **My First Menu** is clicked.

The `menuItemActivated` listener event handles the actual function of the menu. The arguments `args` contain the data returned by Studio Pro to the extension, notifying it which menu item was activated (clicked). This is passed as the `menuId` that was used when creating the menu item and the `menuId` in the `if` statement is used to identify this. In this example it is `"my-menu-unique-id"` and the handler calls the `messageBoxApi` to show an information dialog.

Your extensions should now appear like this:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/my_first_menu.png" >}}

## Menu Properties

The menu has the following properties:

* `caption` – the text of the menu item
* `menuId` – a unique id for the menu item
* `subMenus` – a list of menus subsidiary to this menu item
* `hasSeparatorBefore` (default: `false`) – shows a visual separator before this menu item
* `hasSeparatorAfter` (default: `false`) – shows a visual separator after this menu item
* `enabled` (default: `true`) – indicates that this menu item notifies the listener when clicked

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/grouped_menus.png" >}}

## Creating a Menu with Submenus

You can also have a number of submenus that branch out your menu.

To do so, add additional menu items to your code and add these to the `subMenus` array for the relevant menu item. These child menus can in turn have their own submenus, and so on. Only parent menus (menus that are not sub menus to any others) should be added through the `await menuApi.add()` call, as shown in the code sample below.

{{% alert color="info" %}}
Parent menus (with `subMenus`) do not create `menuItemActivated` events. These only get sent when a leaf menu (a menu that does not have any submenus) is clicked.
{{% /alert %}}

The following `src/main/index.ts` generates one menu item with sub menus and one menu item without sub menus.

```typescript
import { IComponent, Menu, studioPro } from "@mendix/extensions-api";

const menuApi = studioPro.ui.extensionsMenu;
const messageBoxApi = studioPro.ui.messageBoxes;

// Open a message box when the menu item is clicked
studioPro.ui.extensionsMenu.addEventListener("menuItemActivated", (args) => {
  messageBoxApi.show("info", `Child menu '${args.menuId}' was clicked`);
});
class Main implements IComponent {
  async loaded() {
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

export const component: IComponent = new Main();
```

The menu hierarchy will then be displayed like this:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/child_menus.png" >}}

## Updating a menu

Sometimes you might want to disable a menu or update its caption depending on a condition. You can do so by calling the menu API's `updateMenu` method.

An example is shown in the code below. If you click on the menu item, it will be disabled and its caption will be updated.

{{% alert color="info" %}}
Only `caption` and `enabled` can be updated.
{{% /alert %}}

You can test it by the following code as the contents of  `src/main/index.ts`.

```typescript
import { IComponent, Menu, studioPro } from "@mendix/extensions-api";

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
class Main implements IComponent {
  async loaded() {
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

export const component: IComponent = new Main();
```

The disabled state is shown in the image below.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/menus/disabled_menu.png" >}}

## Conclusion

You have seen how to create simple menu items and menu items with sub menus.
You can also dynamically change the enabled status and caption of a menu item.

## Extensibility Feedback

If you would like to provide us with some additional feedback you can complete a small [Survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)

Any feedback is much appreciated.
