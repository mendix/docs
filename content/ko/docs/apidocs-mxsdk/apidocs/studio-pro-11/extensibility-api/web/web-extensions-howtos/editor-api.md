---
title: "Web API를 사용하여 문서 편집기 열기"
linktitle: "문서 편집기 열기"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/editor-api/
---

## 소개

이 How-to에서는 open an existing document editor in Studio Pro from within an extension.

## 전제 조건

{{% alert="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to the Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert%}}

이 How-to를 시작하기 전에 다음 전제 조건을 완료했는지 확인하세요:

* 이 How-to는 다음의 결과를 사용합니다: [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). 이 How-to를 시작하기 전에 해당 How-to를 먼저 완료하세요.
* 다음에 설명된 메뉴 만들기에 익숙한지 확인하세요: [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## 문서 편집기 열기

Create a menu item following the steps in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

This menu action will look for the `Home_Page` document in `MyFirstModule` (however, you can use any module or document in your app). It will then open it with the editor API. For more information, see [Access a Mendix Model Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/model-api/).

For this example, create a menu with an action by doing the following steps:

1. Look for the page by its name, and by the name of its containing module using the `studioPro.app.model.pages` API. 
2. Call `studioPro.ui.editors.editDocument` to open the document by passing its ID. 

See the code sample below (from `src/main/index.ts`) to see how this is done:

```typescript
import { IComponent, Menu, Primitives, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);

        const menu: Menu = {
            caption: "Open Home Page",
            menuId: "open-home-page",
            action: async () => {
                const [page] = await studioPro.app.model.pages.loadAll(
                    (info: Primitives.UnitInfo) => info.moduleName === "MyFirstModule" && info.name === "Home_Web"
                );

                await studioPro.ui.editors.editDocument(page.$ID);
            }
        };

        await studioPro.ui.extensionsMenu.add(menu);
    }
};
```

## 활성 문서

The editor API notifies the extension when the active document tab is activated in Studio Pro, via the `activeDocumentChanged` event. It also provides this information on demand, via the `studioPro.ui.editors.getActiveDocument` method.

Both the `getActiveDocument` method and the `activeDocumentChanged` event args returns a `ActiveDocumentInfo` object, which contains the document's name, type, container, module name, and id.

See the sample code below, which registers an event listener to be notified when the active document changes. We also add a menu that lets you retrieve this information on demand.

Remember to import `ActiveDocumentInfo` from `@mendix/extensions-api`.

```typescript
studioPro.ui.editors.addEventListener("activeDocumentChanged", async ({ info }) => {
    if (info) {
        studioPro.ui.notifications.show({
            title: "Document Changed Notification",
            message: `Name: ${info.documentName}\nID: ${info.documentId}\nType: ${info.documentType}\nModule: ${info.moduleName}`,
            displayDurationInSeconds: 5
        });
    }
});

const getActiveDocumentMenu: Menu = {
    caption: "Get Active Document",
    menuId: "get-active-document.menu",
    action: async () => {
        const activeDocument: ActiveDocumentInfo | null = await studioPro.ui.editors.getActiveDocument();

        if (activeDocument) {
            studioPro.ui.notifications.show({
                title: "Active Document",
                message: `Name: ${activeDocument.documentName}\nID: ${activeDocument.documentId}\nType: ${activeDocument.documentType}\nModule: ${activeDocument.moduleName}`,
                displayDurationInSeconds: 5
            });
        }
    }
};

await studioPro.ui.extensionsMenu.add(getActiveDocumentMenu);
```

## 확장성 피드백

추가 피드백을 제공하고 싶으시다면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백을 환영합니다.
