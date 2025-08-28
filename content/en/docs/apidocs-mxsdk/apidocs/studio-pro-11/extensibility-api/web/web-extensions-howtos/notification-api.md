---
title: "Show a Pop-up Notification Using Web API"
linktitle: "Show Notification"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/notification-api/
---

## Introduction

This how-to describes how to show a simple pop-up notification in Studio Pro.

## Prerequisites

This guide uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Please complete that how-to before starting this one.

## Showing a Notification

With the notifications API, you can show a pop-up notification when your extension loads. The notification will disappear after five seconds. To do this, follow the steps below:

1. Create an `assets` folder under your `src` folder.
2. Find an icon you want to use in your notification and copy it into the `assets` folder. This example uses the file `check.png`.
3. Create an `Icons.ts` file inside that same `assets` folder.
4. Add the following code to the `Icons.ts` file, replacing `check.png` with the name of your icon and using an appropriate name in the `import`, `IIcons`, and `export` statements.

    ```typescript
    import Check from "./check.png";

    interface IIcons {
        Check: string;
    }

    export default { Check } as IIcons;
    ```

5. Create an `images.d.ts` file. This is a `declaration` file, as indicated by the `d` file extension.
6. Add the line `declare module "*.png";` to the `images.d.ts` file. This tells TypeScript that any import ending in *.png* should be treated as a module. This enables TypeScript to handle *.png* files correctly when you import them in your code and allows you to use images in your extensions.
7. Replace your `src/main/index.ts` file with the following, using the appropriate icon name in place of `Check`:

    ```typescript
    import { IComponent, studioPro } from "@mendix/extensions-api";
    import Icons from "../assets/Icons";

    const notificationsApi = studioPro.ui.notifications;

    class Main implements IComponent {
        async loaded() {
            await notificationsApi.show({
                title: "Extension Loaded",
                message: "The extension was successfully loaded",
                displayDurationInSeconds: 5,
                icon: Icons.Check
            });
        }
    }

    export const component: IComponent = new Main();
    ```

    This code does the following:
    
    * It imports the `notificationsApi` from `studioPro.ui.notifications` to allow you to use the notifications API.
    * It implements a `loaded` event, which calls the `show` method to show a pop-up notification for five seconds with the title `Extension Loaded`, a message, and the `check.png` icon you set up earlier. For more information, see the [Full Reference for Show Method](#reference) section below.

Now, when the extension loads, your notification will show in the top-right corner of Studio Pro:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/notifications/notification.png" >}}

## Full Reference for Show Method {#reference}

The show method has the following parameters:

* `title` – the title of the notification
* `message` – the text content of the notification
* `displayDurationInSeconds` – an optional duration (in seconds) for the notification to remain visible; if no duration is provided, the pop-up will remain indefinitely until the user removes it themselves
* `icon` – an optional icon that is displayed inside the notification

## Extensibility Feedback

If you would like to provide us additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
