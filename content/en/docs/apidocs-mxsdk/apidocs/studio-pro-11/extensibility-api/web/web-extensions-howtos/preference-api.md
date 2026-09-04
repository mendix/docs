---
title: "Show User's Preferences Using Web API"
linktitle: "Show User's Preferences"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/preference-api/
---

## Introduction

This how-to describes how to create a simple menu that shows the user's preferences (current theme and language) in a message box.

## Prerequisites

{{% alert="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to the Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert%}}

Before starting this how-to, complete the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.
* Familiarize yourself with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/) and message boxes as described in [Show a Message Box Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/messagebox-api/).

## Set Up the Extension Structure 

Create a menu that displays a dialog with text in the `loaded` method in the main entry point (`src/main/index.ts`). This can be done by following the steps in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

In the example below, you create one menu item that shows a message box with the user's preferences, such as `Light` or `Dark` mode, current language and the version of Studio Pro the user is using.

{{% alert type="info" %}}
Seeing the current Studio Pro version is available for Studio Pro 11.12 and above.
{{% /alert %}} 

Replace your `src/main/index.ts` file with the following:

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const menuApi = studioPro.ui.extensionsMenu;
        const preferencesApi = studioPro.ui.preferences;

        const messageBoxApi = studioPro.ui.messageBoxes;
        const menuId = "get-preferences-menu";
        const caption = "My Preferences";       

        // Get and show the preferences when the menu item is clicked
        const action = async () => {
            const preferences = await preferencesApi.getPreferences();

            await messageBoxApi.show(
                "info",
                `User Preferences are:\n Theme is: ${preferences.theme}\n Language is: ${preferences.language}\nVersion is: ${preferences.version}\n`
            );
        };

        const menu: Menu = { caption, menuId, action };

        await menuApi.add(menu);
    }
};
```

The code uses:

* `menuApi` from `studioPro.ui.extensionsMenu` to use the menu API
* `messageBoxApi` from `studioPro.ui.messageBoxes` to show a dialog
* `preferencesApi` from `studioPro.ui.preferences` to retrieve the current configuration

    {{% alert color="info" %}}
The function is `async` so you can use `await` when fetching the preferences.
    {{% /alert %}}

The `getPreferences()` function returns an object with two properties:

* Theme – either **Light** or **Dark**, representing the current theme setting in Studio Pro
* Language – a string representing the current language setting, such as `en_US` for English (United States)
* Version - a string representing the current version of Studio Pro, such as `11.12.0`.

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a short [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
