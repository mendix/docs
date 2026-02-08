---
title: "Web API를 사용하여 메시지 상자 표시하기"
linktitle: "메시지 상자"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/messagebox-api/
---

## 소개

이 How-to에서는 show a message box to a user. In this example, you will create three menu items that will display a dialog with text.

## 전제 조건

{{% alert="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to the Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert%}}

이 How-to를 시작하기 전에 다음 전제 조건을 완료했는지 확인하세요:

* 이 How-to는 다음의 결과를 사용합니다: [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). 이 How-to를 시작하기 전에 해당 How-to를 먼저 완료하세요.
* 다음에 설명된 메뉴 만들기에 익숙한지 확인하세요: [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## 메시지 상자 표시하기

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

## 확장성 피드백

추가 피드백을 제공하고 싶으시다면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백을 환영합니다.
