---
title: "Web API를 사용하여 사용자 환경설정 표시하기"
linktitle: "사용자 환경설정 표시"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/preference-api/
---

## 소개

이 How-to에서는 create a simple menu that shows the user's preferences (current theme and language) in a message box.

## 전제 조건

{{% alert="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to the Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert%}}

이 How-to를 시작하기 전에 다음 전제 조건을 완료했는지 확인하세요:

* 이 How-to는 다음의 결과를 사용합니다: [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). 이 How-to를 시작하기 전에 해당 How-to를 먼저 완료하세요.
* 다음에 설명된 메뉴 만들기에 익숙한지 확인하세요: [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/) and message boxes as described in [Show a Message Box Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/messagebox-api/).

## 확장 구조 설정하기 

Create a menu that will display a dialog with text in the `loaded` method in the main entry point (`src/main/index.ts`). This can be done by following the steps in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

In the example below, you create one menu item that will show a message box with the user's preferences, such as `Light` or `Dark` mode, and current language.

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
                `User Preferences are:\n Theme is: ${preferences.theme}\n Language is: ${preferences.language}`
            );
        };

        const menu: Menu = { caption, menuId, action };

        await menuApi.add(menu);
    }
};
```

The code uses the:

* `menuApi` from `studioPro.ui.extensionsMenu` to allow you to use the menu API
* `messageBoxApi` from `studioPro.ui.messageBoxes` to show a dialog
* `preferencesApi` from `studioPro.ui.preferences` to retrieve the current configuration

    {{% alert color="info" %}} The function is `async` in order for you to use `await` when fetching the preferences.
    {{% /alert %}}

The `getPreferences()` function returns an object with two properties:

* Theme — either **Light** or **Dark**, representing the current theme setting in Studio Pro
* Language — a string representing the current language setting, such as `en_US` for English (United States)

## 확장성 피드백

추가 피드백을 제공하고 싶으시다면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백을 환영합니다.
