---
title: "Show a Message Box Using Web API"
linktitle: "Message Box"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/messagebox-api/
---

## Introduction

This how-to describes how to show a message box to a user. In this example, you will create three menu items that will display a dialog with text.

## Prerequisites

{{% alert="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to the Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert%}}

Before starting this how-to, make sure you have completed the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.
* Make sure you are familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## Showing a Message Box

Create menus that will display a dialog with text (one for each type). This is done in the `loaded` method of your main entry point (`src/main/index.ts`).

The message has the format `messageBoxApi.show(<message-type>, <message>, <message-details>)`, where:

* `<message-type>` is the type of message, indicated in the pane title and indicated by an icon. Values are "information" {{% icon name="info-circle" color="blue" %}}, "warning" {{% icon name="alert-triangle" color="yellow" %}}, and "error" {{% icon name="remove-circle" color="red" %}}.
* `<message>` is the message to display.
* `<message-details>` is an optional extended message which is displayed in an expandable area that is initially collapsed.  

The full TypeScript file (`src/main/index.ts`) to implement these three menu items and message boxes is as follows:

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);

        const messageBoxApi = studioPro.ui.messageBoxes;
        const menuApi = studioPro.ui.extensionsMenu;

        const infoMenu: Menu = {
            caption: "Show Info",
            menuId: "show-info-menu",
            action: async () => await messageBoxApi.show("info", "This is information.", "Extra info")
        };

        const errorMenu: Menu = {
            caption: "Show Error",
            menuId: "show-error-menu",
            action: async () => await messageBoxApi.show("error", "This is an error.", "Extra error details")
        };

        const warningMenu: Menu = {
            caption: "Show Warning",
            menuId: "show-warning-menu",
            action: async () => await messageBoxApi.show("warning", "This is a warning.", "Extra warning details")
        };

        await menuApi.add(infoMenu);
        await menuApi.add(errorMenu);
        await menuApi.add(warningMenu);
    }
};
```

For example, the **Show Info** menu item displays the following message box.

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/messageBoxes/info.png" >}}

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)

Any feedback is appreciated.
