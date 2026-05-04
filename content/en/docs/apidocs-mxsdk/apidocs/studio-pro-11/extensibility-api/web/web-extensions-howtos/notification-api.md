---
title: "Show a Pop-up Notification Using Web API"
linktitle: "Show Notification"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/notification-api/
description: "Describes how to display a simple pop-up notification in Studio Pro using the Web Extensibility API."
---

## Introduction

This document describes how to display a simple pop-up notification in Studio Pro.

## Prerequisites

This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.

## Showing a Notification

With the notifications API, you can show a pop-up notification when your extension loads. The notification disappears after five seconds. To do this, follow these steps:

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

5. Create an `images.d.ts` file inside the `assets` folder. This is a `declaration` file, as indicated by the `d` file extension.
6. Add the line `declare module "*.png";` to the `images.d.ts` file. This tells TypeScript that any import ending in *.png* should be treated as a module. This allows TypeScript to handle *.png* files correctly when you import them in your code and use images in your extensions.
7. Replace your `src/main/index.ts` file with the following, using the appropriate icon name in place of `Check`:

    ```typescript
    import { IComponent, getStudioProApi } from "@mendix/extensions-api";
    import Icons from "../assets/Icons";

    export const component: IComponent = {
        async loaded(componentContext) {
            const studioPro = getStudioProApi(componentContext);
            const notificationsApi = studioPro.ui.notifications;
            await notificationsApi.show({
                    title: "Extension Loaded",
                    message: "The extension was successfully loaded",
                    displayDurationInSeconds: 5,
                    icon: {
                        relativePath: Icons.Check,
                        componentName: "extension/myextension"
                    }
            });
        }
    }
    ```

    This code does the following:
    
    * It uses the `notificationsApi` from `studioPro.ui.notifications` to access the notifications API.
    * It implements a `loaded` method, which calls the `show` method to display a pop-up notification for five seconds with the title `Extension Loaded`, a message, and the `check.png` icon you set up earlier. For more information, see the [Full Reference for Show Method](#reference) section.

Now, when the extension loads, your notification shows in the upper-right corner of Studio Pro:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/notifications/notification.png" alt="" >}}

## Full Reference for Show Method {#reference}

The show method has the following parameters:

* `title` – The title of the notification.
* `message` – The text content of the notification.
* `displayDurationInSeconds` – An optional duration (in seconds) for the notification to remain visible; if no duration is provided, the pop-up remains indefinitely until the user removes it.
* `icon` – An optional icon that displays inside the notification.

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a short [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
