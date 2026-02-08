---
title: "App Explorer API 사용하기"
linktitle: "App Explorer API"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/app-explorer-api/
---

## 소개

이 How-to에서는 interact with the App Explorer in Studio Pro. In this example, you create a menu which will show for each microflow in the App Explorer.

## 전제 조건

{{% alert="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to the Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert%}}

이 How-to를 시작하기 전에 다음 전제 조건을 완료했는지 확인하세요:

* Review [how menus work](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu/) in the Web Extensibility API
* 이 How-to는 다음의 결과를 사용합니다: [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). 이 How-to를 시작하기 전에 해당 How-to를 먼저 완료하세요.

## 컨텍스트 메뉴 만들기

{{% alert color="info" %}}
Use the full name of the document type to specify which type of document a menu should belong to (for example, `Microflows$Microflow` for microflows or `Pages$Page` for pages). For more information about these document type names, see [Access a Mendix Model Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/model-api/).
{{% /alert %}}

The code below uses the `appExplorer` API's `addContextMenu` method to add the menu to all `Microflow` document nodes. When this menu is clicked, the document's Id is sent as an argument through the `DocumentContext` argument parameter of the menu.

```typescript
import { ComponentContext, DocumentContext, IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

const extensionId = "myextension";

export const component: IComponent = {
    async loaded(componentContext: ComponentContext) {
        const studioPro = getStudioProApi(componentContext);

        const menuId = `${extensionId}.microflow.menu`;

        const action = async (args: DocumentContext) => {
            await studioPro.ui.notifications.show({
                title: `Microflow action executed`,
                message: `You clicked a context menu for a Microflow! (${args.documentId})`,
                displayDurationInSeconds: 4
            });
        };

        const microflowMenu: Menu<DocumentContext> = { caption: `Microflow menu`, menuId, action };

        await studioPro.ui.appExplorer.addContextMenu(microflowMenu, "Microflows$Microflow");
    }
};
```

The `DocumentContext` payload for the menu action is an object containing a document Id (`{ documentId: string }`). When creating a menu for the `appExplorer`'s `addContextMenu` method, the `DocumentContext` should be used as the context of your menu. The `documentId` will be the Id of the document the menu is attached to (in this example, the exact `Microflow` node in the App Explorer).

As explained in the [menu documentation](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu/), the `DocumentContext` is not necessary to add your menu to Studio Pro. However, if it is not used, the menu will not receive the clicked document's ID.

## 확장성 피드백

추가 피드백을 제공하고 싶으시다면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백을 환영합니다.
