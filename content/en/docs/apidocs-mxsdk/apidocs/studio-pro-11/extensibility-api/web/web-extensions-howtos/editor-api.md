---
title: "Open a Document Editor Using Web API"
linktitle: "Open a Document Editor"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/editor-api/
---

## Introduction

This how-to describes how to open an existing document editor in Studio Pro from within an extension.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.
* Make sure you are familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## Opening a Document Editor

Create a menu item following the steps in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

This menu action will look for the `Home_Page` document in `MyFirstModule` (however, you can use any module or document in your app). It will then open it with the editor API. For more information, see [Access a Mendix Model Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/model-api/).

For this example, add an event listener for the `menuItemActivated` event for when a menu is clicked. When the event triggers, do the following:

1. Look for the page by its name, and by the name of its containing module using the `studioPro.app.model.pages` API. 
2. Call `studioPro.ui.editors.editDocument` to open the document by passing its ID. 

See the code sample below (from `src/main/index.ts`) to see how this is done:

```typescript
import { IComponent, Menu, Primitives, getStudioProApi } from "@mendix/extensions-api";

const menuId = "open-home-page";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);

        studioPro.ui.extensionsMenu.addEventListener("menuItemActivated", async args => {
            if (args.menuId === menuId) {
                const [page] = await studioPro.app.model.pages.loadAll(
                    (info: Primitives.UnitInfo) => info.moduleName === "MyFirstModule" && info.name === "Home_Web"
                );

                await studioPro.ui.editors.editDocument(page.$ID);
            }
        });

        const menu: Menu = {
            caption: "Open Home Page",
            menuId
        };

        await studioPro.ui.extensionsMenu.add(menu);
    }
}
```

## Active Documents

The editor API notifies the extension when the active document tab is activated in Studio Pro, via the `activeDocumentChanged` event. It also provides this information on demand, via the `studioPro.ui.editors.getActiveDocument` method.

Both the `getActiveDocument` method and the `activeDocumentChanged` event args returns a `ActiveDocumentInfo` object, which contains the document's name, type, container, module name, and id.

See the sample code below:

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

studioPro.ui.extensionsMenu.addEventListener("menuItemActivated", async args => {
    if (args.menuId === menuId) {
        const activeDocument: ActiveDocumentInfo | null = await studioPro.ui.editors.getActiveDocument();

        if (activeDocument) {
            studioPro.ui.notifications.show({
                title: "Active Document",
                message: `Name: ${activeDocument.documentName}\nID: ${activeDocument.documentId}\nType: ${activeDocument.documentType}\nModule: ${activeDocument.moduleName}`,
                displayDurationInSeconds: 5
            });
        }
    }
});
```

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
