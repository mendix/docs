---
title: "Documents API 사용하기"
linktitle: "Documents API"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/documents-api/
---

## 소개

이 How-to에서는 create context menus for a document editor. In the example below, you create a menu which is shown for each entity in the domain model of Studio Pro.

## 전제 조건

{{% alert="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to the Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert%}}

이 How-to를 시작하기 전에 다음 전제 조건을 완료했는지 확인하세요:

* 이 How-to는 다음의 결과를 사용합니다: [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). 이 How-to를 시작하기 전에 해당 How-to를 먼저 완료하세요. 
* Review [how menus work](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu/) in the Web Extensibility API.

## 컨텍스트 메뉴 만들기

{{% alert color="info" %}}
Use the full name of the document type (for example, `DomainModels$Entity` for entities, `DomainModels$Annotation` for annotations, or  `DomainModels$DomainModel` for the editor canvas itself). For more information about these document type names, see [Access a Mendix Model Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/model-api/).
{{% /alert %}}

The code below does the following:

1. Create a menu object with a `DocumentContext`.
2. Use the `documents` API's `addContextMenu` method to add the menu to an entity inside the domain model editor.

```typescript
import { ComponentContext, DocumentContext, IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

const extensionId = "myextension";

export const component: IComponent = {
    async loaded(componentContext: ComponentContext) {
        const studioPro = getStudioProApi(componentContext);

        const menuId = `${extensionId}.entity.menu`;

        const action = async (args: { documentId: string }) => {
            await studioPro.ui.notifications.show({
                title: `Entity executed`,
                message: `You clicked a context menu for an Entity! (${args.documentId})`,
                displayDurationInSeconds: 4
            });
        };

        const entityMenu: Menu<DocumentContext> = { caption: `Entity menu`, menuId, action };

        await studioPro.ui.documents.addContextMenu(entityMenu, "DomainModels$Entity");
    }
};
```

As you can see from the example above, the expected payload of the menu action is `DocumentContext` (for example, an object containing a document id (`{ documentId: string }`)). The `documentId` will be the Id of the document the menu is attached to (in this example, the exact entity in the domain model editor canvas).

## 확장성 피드백

추가 피드백을 제공하고 싶으시다면 간단한 [설문 조사](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)를 완료할 수 있습니다.

모든 피드백을 환영합니다.
