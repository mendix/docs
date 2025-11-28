---
title: "Using the Element Selector API"
linktitle: "Element Selector API"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/element-selector-api/
---

## Introduction

This how-to describes how to use the Element Selector API to allow users to select documents or entities from their Mendix application. The extension displays selection dialogs that filter results based on query parameters such as module name, document name, and SDK name.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one. 
* Make sure you are familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## Overview

The Element Selector API provides two main methods:

* `selectDocument()` – opens a dialog to select a document from your application
* `selectEntity()` – opens a dialog to select an entity from your domain model

## Selecting Documents

Use basic document selection to select any document in your application without filters:

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const elementSelector = studioPro.ui.elementSelectors;
        const messageApi = studioPro.ui.messageBoxes;

        const selector = await elementSelector.selectDocument({ allowNone: true });

        if (selector.status === "ok") {
            await messageApi.show("info", `document selected:\n ${JSON.stringify(selector.selected)}`);
        }
    }
}
```

The `allowNone` option permits users to close the dialog without selecting a document, returning a status of `none`.

### Filtering Documents

You can filter documents by their SDK name, their exact name, or restrict the selection within a module.

For example, to filter documents by their SDK name, to restrict selection to a specific document type (for example, `Pages$Page` for pages), use the code sample below:

```typescript
const selector = await elementSelector.selectDocument({
    query: { sdkName: "Pages$Page" }
});

if (selector.status === "ok") {
    await messageApi.show("info", `document selected:\n ${JSON.stringify(selector.selected)}`);
}
```

You can replace your `main index.ts` with the following code to see most of the available filtering for document selector:

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const menuApi = studioPro.ui.extensionsMenu;
        const elementSelector = studioPro.ui.elementSelectors;
        const messageApi = studioPro.ui.messageBoxes;

        const documentSelectorTopLevelMenu: Menu = {
            menuId: "DocumentSelectorTopLevelMenu",
            caption: "Document Selector Tests",
            subMenus: [
                {
                    menuId: "SelectDocumentNoFilter",
                    caption: "Select Document with no filter and allow none",
                    action: async () => {
                        const selector = await elementSelector.selectDocument({ allowNone: true });

                        if (selector.status === "ok") {
                            await messageApi.show("info", `document selected:\n ${JSON.stringify(selector.selected)}`);
                        }
                    }
                },
                {
                    menuId: "SelectDocumentModuleFilter",
                    caption: "Select Document with module(MyFirstModule) filter",
                    action: async () => {
                        const selector = await elementSelector.selectDocument({ query: { module: "MyFirstModule" } });

                        if (selector.status === "ok") {
                            await messageApi.show("info", `document selected:\n ${JSON.stringify(selector.selected)}`);
                        }
                    }
                },
                {
                    menuId: "SelectDocumentModuleAndNameFilter",
                    caption: "Select Document with name(Home_Web) filter",
                    action: async () => {
                        const selector = await elementSelector.selectDocument({ query: { name: "Home_Web" } });

                        if (selector.status === "ok") {
                            await messageApi.show("info", `document selected:\n ${JSON.stringify(selector.selected)}`);
                        }
                    }
                },
                {
                    menuId: "SelectDocumentWithSdkNameFilter",
                    caption: "SelectDocument with sdk name(Pages$Page) filter",
                    action: async () => {
                        const selector = await elementSelector.selectDocument({ query: { sdkName: "Pages$Page" } });

                        if (selector.status === "ok") {
                            await messageApi.show("info", `document selected:\n ${JSON.stringify(selector.selected)}`);
                        }
                    }
                },
                {
                    menuId: "SelectDocumentFromMarketplaceModuleWithNameFilter",
                    caption: "Select Document from marketplace module(Atlas_Core) filter by name",
                    action: async () => {
                        const selector = await elementSelector.selectDocument({ query: { module: "Atlas_Core" } });

                        if (selector.status === "ok") {
                            await messageApi.show("info", `document selected:\n ${JSON.stringify(selector.selected)}`);
                        }
                    }
                },
                {
                    menuId: "SelectDocumentReturnsEmptyList",
                    caption: "Select Document with filter that returns empty list (module : test, name: test, sdkName: test)",
                    action: async () => {
                        const selector = await elementSelector.selectDocument({ query: { module: "test", name: "test", sdkName: "test" } });

                        if (selector.status === "ok") {
                            await messageApi.show("info", `document selected:\n ${JSON.stringify(selector.selected)}`);
                        }
                    }
                }
            ]
        };

        await menuApi.add({
            menuId: "ElementSelectorMainMenu",
            caption: "Element selector API Tests",
            subMenus: [documentSelectorTopLevelMenu]
        }); 
    }
};
```

## Selecting Entities

Use basic entity selection to select any entity from your domain model without filters:

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const elementSelector = studioPro.ui.elementSelectors;
        const messageApi = studioPro.ui.messageBoxes;

        const selector = await elementSelector.selectEntity({ allowNone: true });

        if (selector.status === "ok") {
            await messageApi.show("info", `entity selected:\n ${JSON.stringify(selector.selected)}`);
        }
    }
}
```

### Filtering Entities

You can filter entities by their their exact name or restrict the selection within a module.

For example, you can replace your `main/index.ts` with the following code to see some filters for the entity selector:

```typescript
import { IComponent, Menu, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const menuApi = studioPro.ui.extensionsMenu;
        const elementSelector = studioPro.ui.elementSelectors;
        const messageApi = studioPro.ui.messageBoxes;

        
        const entitySelectorTopLevelMenu: Menu = {
            menuId: "EntitySelectorTopLevelMenu",
            caption: "Entity Selector Tests",
            subMenus: [
                {
                    menuId: "SelectEntityNoFilter",
                    caption: "Select Entity with no filter and allow none",
                    action: async () => {
                        const selector = await elementSelector.selectEntity({ allowNone: true });

                        if (selector.status === "ok") {
                            await messageApi.show("info", `Entity selected:\n ${JSON.stringify(selector.selected)}`);
                        }
                    }
                },
                {
                    menuId: "SelectEntityModuleFilter",
                    caption: "Select Entity with module(MyFirstModule) filter",
                    action: async () => {
                        const selector = await elementSelector.selectEntity({ query: { module: "MyFirstModule" } });

                        if (selector.status === "ok") {
                            await messageApi.show("info", `Entity selected:\n ${JSON.stringify(selector.selected)}`);
                        }
                    }
                },
                {
                    menuId: "SelectEntityModuleAndNameFilter",
                    caption: "Select Entity with name(Entity) filter",
                    action: async () => {
                        const selector = await elementSelector.selectEntity({ query: { name: "Entity" } });

                        if (selector.status === "ok") {
                            await messageApi.show("info", `Entity selected:\n ${JSON.stringify(selector.selected)}`);
                        }
                    }
                },
                {
                    menuId: "SelectEntityFromMarketplaceModuleWithNameFilter",
                    caption: "Select Entity from marketplace module(Administration) filter by name(Account)",
                    action: async () => {
                        const selector = await elementSelector.selectEntity({ query: { module: "Administration", name: "Account" } });

                        if (selector.status === "ok") {
                            await messageApi.show("info", `Entity selected:\n ${JSON.stringify(selector.selected)}`);
                        }
                    }
                },
                {
                    menuId: "SelectEntityReturnsEmptyList",
                    caption: "Select Entity with filter that returns empty list (module: test, name: test)",
                    action: async () => {
                        const selector = await elementSelector.selectEntity({ query: { module: "test", name: "test" } });

                        if (selector.status === "ok") {
                            await messageApi.show("info", `Entity selected:\n ${JSON.stringify(selector.selected)}`);
                        }
                    }
                }
            ]
        };

        await menuApi.add({
            menuId: "ElementSelectorMainMenu",
            caption: "Element selector API Tests",
            subMenus: [entitySelectorTopLevelMenu]
        }); 
    }
}
```

## Query Parameters

The optional query parameter allows you to filter selector results:

| Parameter | Type | Description | Applies To |
| --- | --- | --- | --- |
| `module` | `string` | Filter by module name | Documents, Entities |
| `name` | `string` | Filter by their name | Documents, Entities |
| `sdkName` | `string` | Filter by SDK name (for example, `Pages$Page`) | Documents only |

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a short [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
