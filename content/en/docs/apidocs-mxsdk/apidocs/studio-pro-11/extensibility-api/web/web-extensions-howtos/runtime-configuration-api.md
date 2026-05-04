---
title: "Access Runtime Constants Using Web API"
linktitle: "Runtime Constants"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/runtime-configuration-api/
---

## Introduction

This how-to describes how to create a simple menu that retrieves and displays the runtime constants from the active configuration in a message box.

{{% alert color="info" %}}
Access to runtime constants using the web API was introduced in version 11.9.0.
{{% /alert %}}

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.
* Make sure you are familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/) and message boxes as described in [Show a Message Box Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/messagebox-api/).

## Set Up the Extension Structure 

Set up the extension structure by following the steps below:

1. Create a menu that will display the runtime constants in the `loaded` method in the main entry point (`src/main/index.ts`). This can be done by following the steps in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).
2. Replace the contents of your `src/main/index.ts` file with the following:

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const menuApi = studioPro.ui.extensionsMenu;
        const runtimeConfigApi = studioPro.runtime.configuration;
        const messageBoxApi = studioPro.ui.messageBoxes;

        const menuId = "show-constants-menu";
        const caption = "Show Runtime Constants";       

        // Get and show the constants when the menu item is clicked
        const action = async () => {
            const constants = await runtimeConfigApi.getConstants();

            if (constants.length === 0) {
                await messageBoxApi.show("info", "No constants found in the active configuration.");
                return;
            }

            const accessibleConstants = constants.filter(c => c.isPrivate === false);
            const privateConstants = constants.filter(c => c.isPrivate === true);

            let message = "";

            if (accessibleConstants.length > 0) {
                message += "Accessible Constants:\n";
                message += accessibleConstants.map(c => `  ${c.constantName}: ${c.value}`).join("\n");
            }

            if (privateConstants.length > 0) {
                message += `\n\n${privateConstants.length} private constant(s) not accessible.`;
            }

            await messageBoxApi.show("info", `Runtime Constants:\n\n${message}`);
        };

        const menu: Menu = { caption, menuId, action };

        await menuApi.add(menu);
    }
};
```

In this example, you create one menu item that will show a message box with the runtime constants from the active configuration.

The code uses the:

* `menuApi` from `studioPro.ui.extensionsMenu` to allow you to use the menu API
* `messageBoxApi` from `studioPro.ui.messageBoxes` to show a dialog
* `runtimeConfigApi` from studioPro.runtime.configuration to retrieve the runtime constants

{{% alert color="info" %}} The function is `async` in order for you to use `await` when executing the preview action.
{{% /alert %}}

The `getConstants()` function returns an array of constant objects, each with the following properties:

* `isPrivate` – a boolean indicating whether the constant value is hidden (true) or accessible (false)
* `constantName` – the fully qualified name of the constant (for example, `MyModule.MyConstant`)
* `value` – the constant value as a string (only present when `isPrivate` is false)

## Accessing Private Constants

By default, private constants are not accessible and will have `isPrivate` set to true with no value. To access private constant values, your extension must request the `runtime-configuration-private` permission.

Add the permission to your extension's `package.json` after the entry points:

```json
{
  "mendixComponent": {
    "entryPoints": {
      "main": "main.js",
      "ui": {
        "tab": "tab.js"
      }
    },
    "permissions": {
      "runtime-configuration-private": true
    }
  }
}

```

You have to set the permission to true if you want the permission to appear in the Extensions Overview pane.

When a user installs your extension, they can grant this permission through the Extensions Overview pane (**View** > **Extensions**) in Studio Pro. Once granted, private constants will be returned with `isPrivate` set to false and their value included.

You can read more about permissions in [Extension Permissions in Overview Pane](/apidocs-mxsdk/apidocs/web-extensibility-api-11/extension-permissions/).

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a short [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
