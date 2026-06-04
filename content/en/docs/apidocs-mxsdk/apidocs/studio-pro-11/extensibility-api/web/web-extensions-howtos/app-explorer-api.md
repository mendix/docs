---
title: "Using the App Explorer API"
linktitle: "App Explorer API"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/app-explorer-api/
description: "Describes how to use the App Explorer API in Studio Pro to create a context menu for microflows."
---

## Introduction

This how-to describes how to interact with the App Explorer in Studio Pro. In this example, you create a context menu that displays for each microflow in the App Explorer.

## Prerequisites

{{% alert color="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert %}}

Before starting this how-to, complete the following prerequisites:

* Review [how menus work](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu/) in the Web Extensibility API
* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.

## Creating a Context Menu

{{% alert color="info" %}}
Use the full name of the document type to specify which type of document a menu should belong to (for example, `Microflows$Microflow` for microflows or `Pages$Page` for pages). For more information about these document type names, see [Access a Mendix Model Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/model-api/).
{{% /alert %}}

The code below uses the `appExplorer` API `addContextMenu` method to add the context menu to all `Microflow` document nodes. When you click this menu, the document ID is sent as an argument through the `DocumentContext` argument parameter.

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

The `DocumentContext` payload for the menu action is an object containing a document ID (`{ documentId: string }`). When you create a menu for the `appExplorer` `addContextMenu` method, use `DocumentContext` as the context of your menu. The `documentId` is the ID of the document the menu is attached to (in this example, the specific `Microflow` node in the App Explorer).

As explained in the [menu documentation](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu/), `DocumentContext` is not required to add your menu to Studio Pro. However, if you do not use it, the menu will not receive the clicked document ID.

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a short [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
