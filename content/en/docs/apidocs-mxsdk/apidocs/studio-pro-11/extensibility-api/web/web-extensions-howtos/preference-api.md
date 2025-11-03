---
title: "Show User's Preferences Using Web API"
linktitle: "Show User's Preferences"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/preference-api/
---

## Introduction

This how-to describes how to create a simple menu that shows the user's preferences (current theme and language) in a message box.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.
* Make sure you are familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/) and message boxes as described in [Show a Message Box Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/messagebox-api/).

## Set Up the Extension Structure 

Create a menu that will display a dialog with text in the `loaded` method in the main entry point (`src/main/index.ts`). This can be done by following the steps in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

In the example below, you create one menu item that will show a message box.

Replace your `src/main/index.ts` file with the following:

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const menuApi = studioPro.ui.extensionsMenu;

        const messageBoxApi = studioPro.ui.messageBoxes;
        const menuId = "my-menu";
        const caption = "My Preferences";

        // Open a message box when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener("menuItemActivated", async (args) => {
            if (args.menuId === menuId) {
                await messageBoxApi.show("info", `User Preferences are:`);
            }
        });

        const menu: Menu = {
            caption: caption,
            menuId: menuId,
        };

        await menuApi.add(menu);
    }
}
```

The code uses the:

* `menuApi` from `studioPro.ui.extensionsMenu` to allow you to use the menu API
* `messageBoxApi` from `studioPro.ui.messageBoxes` to show a dialog

It listens to the `menuItemActivated` endpoint, which will notify the extension when **My Preferences** is clicked.

## Import and Use the Preferences API

Import the preferences API and use it to fetch the user’s preferences. 

1. Add the following code after the introduction of `menuApi` variable on line 6.

    ```typescript
    const preferencesApi = studioPro.ui.preferences;
    ```

2. Update the event listener to use the preferences API:

    ```typescript
    studioPro.ui.extensionsMenu.addEventListener(
      "menuItemActivated",
      async (args) => {
        if (args.menuId === menuId) {
          const preferences = await preferencesApi.getPreferences();

          await messageBoxApi.show(
              "info",
              `User Preferences are:\n Theme is: ${preferences.theme}\n Language is: ${preferences.language}`
          );
        }
      }
    );
    ```

{{% alert color="info" %}}
The function is `async` in order for you to use `await` when fetching the preferences.
{{% /alert %}}

3. Use the fetched preferences to update the text in the message box so you can see the user's current theme and language.

The `getPreferences()` function returns an object with two properties:

* Theme — either **Light** or **Dark**, representing the current theme setting in Studio Pro
* Language — a string representing the current language setting, such as `en_US` for English (United States)

The complete `src/main/index.ts` file should now look like this:

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const menuApi = studioPro.ui.extensionsMenu;
        const preferencesApi = studioPro.ui.preferences;

        const messageBoxApi = studioPro.ui.messageBoxes;
        const menuId = "my-menu";
        const caption = "My Preferences";

        // Open a message box when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            async (args) => {
                if (args.menuId === menuId) {
                    const preferences = await preferencesApi.getPreferences();

                    await messageBoxApi.show(
                        "info",
                        `User Preferences are:\n Theme is: ${preferences.theme}\n Language is: ${preferences.language}`
                    );
                }
            }
        );

        const menu: Menu = {
            caption: caption,
            menuId: menuId,
        };

        await menuApi.add(menu);
    }
}
```

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
