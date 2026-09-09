---
title: "Migration Guide for Web Extensibility API Older Versions"
linktitle: "Migration Guide"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/
weight: 2
---

## Introduction

Studio Pro 11.6 introduced a breaking change in the Web Extensibility API that changed the way [menus](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu/) are created. This guide explains how to update your extension code after you upgrade to Studio Pro 11.6 from an earlier version.

## `MenuItemActivated` Event

If your extension created menus using `menuId` and the `menuItemActivated` event to trigger actions, you can now use the action that was called when the event was triggered as the `action` property of your menu.

For example, if your code looked like this:

```typescript

const menuId = "myextension.menu";

await studioPro.ui.extensionsMenu.add({
            menuId: menuId,
            caption: "My Menu",
        });

studioPro.ui.extensionsMenu.addEventListener(
    "menuItemActivated",
    async (args) => {
        if (args.menuId === menuId) {
            await studioPro.ui.messageBoxes.show("info", "My Menu was Clicked!")
        }
    }
);
```

The action called when the event triggers for your menu can now be used directly as the menu action:

```typescript
await studioPro.ui.extensionsMenu.add({
        menuId: "myextension.menu",
        caption: "My Menu",
        action: async () => await studioPro.ui.messageBoxes.show("info", "My Menu was Clicked!")
    });
```

The `menuItemActivated` event no longer exists.

## Registering Commands

{{%alert type="info" %}}
The command registration API has been removed and is no longer available for Studio Pro 11.6 and above.
{{% /alert%}}

If your extension created menus using a command ID of a pre-registered command, the action sent to the command registration API when registering the command can now be used directly as the action of the menu.

For example, if your code looked like this:

```typescript
const commandId = "myextension.menu-command";

await studioPro.app.commands.registerCommand(
    commandId,
    async () => await studioPro.ui.messageBoxes.show("info", "My Menu was Clicked!")
);
await studioPro.ui.extensionsMenu.add({ caption: "My Menu", menuId: "myextension.menu", commandId });
```

The same action sent to the command registration API can now become the `action` property value on the menu:

```typescript
await studioPro.ui.extensionsMenu.add({
        menuId: "myextension.menu",
        caption: "My Menu",
        action: async () => await studioPro.ui.messageBoxes.show("info", "My Menu was Clicked!")
    });
```

## Action Arguments

Action arguments are also possible in the new Menu API. For a detailed explanation, review [Menus](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu/).
