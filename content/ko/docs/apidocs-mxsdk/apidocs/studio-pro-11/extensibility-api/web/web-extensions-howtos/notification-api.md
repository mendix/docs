---
title: "Web API를 사용하여 팝업 알림 표시하기"
linktitle: "알림 표시"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/notification-api/
---

## 소개

이 How-to에서는 show a simple pop-up notification in Studio Pro.

## 전제 조건

이 How-to는 다음의 결과를 사용합니다: [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). 이 How-to를 시작하기 전에 해당 How-to를 먼저 완료하세요.

## 알림 표시하기

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

5. Create an `images.d.ts` file inside the `assets` folder. This is a `declaration` file, as indicated by the `d` file extension.
6. Add the line `declare module "*.png";` to the `images.d.ts` file. This tells TypeScript that any import ending in *.png* should be treated as a module. This enables TypeScript to handle *.png* files correctly when you import them in your code and allows you to use images in your extensions.
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
    
    * It uses the `notificationsApi` from `studioPro.ui.notifications` to allow you to use the notifications API.
    * It implements a `loaded` method, which calls the `show` method to show a pop-up notification for five seconds with the title `Extension Loaded`, a message, and the `check.png` icon you set up earlier. For more information, see the [Full Reference for Show Method](#reference) section below.

Now, when the extension loads, your notification will show in the top-right corner of Studio Pro:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/notifications/notification.png" >}}

## Show 메서드 전체 레퍼런스 {#reference}

The show method has the following parameters:

* `title` – the title of the notification
* `message` – the text content of the notification
* `displayDurationInSeconds` – an optional duration (in seconds) for the notification to remain visible; if no duration is provided, the pop-up will remain indefinitely until the user removes it themselves
* `icon` – an optional icon that is displayed inside the notification

## 확장성 피드백

추가 피드백을 제공하고 싶으시다면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백을 환영합니다.
