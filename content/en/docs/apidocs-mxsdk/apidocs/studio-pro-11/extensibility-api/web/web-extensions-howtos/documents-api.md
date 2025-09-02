---
title: "Using the Documents API"
linktitle: "Documents API"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/documents-api/
---

## Introduction

This how-to describes how to create context menus for a document editor that execute previously registered commands.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Please complete that how-to before starting this one. 
* Make sure you are familiar with command registration as described in [Register a Command Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/command-api/).

## Creating a Context Menu

In the example below, you create a menu which is shown for each entity in the Domain model editor of Studio Pro. In order to specify which type of document a menu should belong to, you need to use the full name of the document type, i.e. `DomainModels$Entity` for entities, `DomainModels$Annotation` for annotations, or  `DomainModels$DomainModel` for the editor canvas itself. For more information on these document types, see [Access a Mendix Model Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/model-api/).

First, a command must be registered through the [Commands API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/command-api/), then the `commandId` can be attached to the new menu. Afterwards, using the `documents` API's `addContextMenu` method, the menu can be added to an entity inside the Domain model editor.

```typescript
import { ComponentContext, IComponent, Menu, StudioProApi, getStudioProApi } from "@mendix/extensions-api";

const extensionId = "myextension";

export const component: IComponent = {
    async loaded(componentContext: ComponentContext) {
        const studioPro = getStudioProApi(componentContext);

        const commandId = `${extensionId}.entity.command`;
        const menuId = `${commandId}.menu`;

        await studioPro.app.commands.registerCommand<{ documentId: string }>(commandId, async (args: { documentId: string }) => {
            await studioPro.ui.notifications.show({
                title: `Entity command executed`,
                message: `You clicked a context menu for an Entity! (${args.documentId})`,
                displayDurationInSeconds: 4
            });
        });

        const microflowMenu: Menu = { caption: `Entity command menu`, menuId, commandId };

        await studioPro.ui.documents.addContextMenu(microflowMenu, "DomainModels$Entity");
    }
}
```

As you can see from the example above, the expected payload of the command is an object containing a document id (`{ documentId: string }`). Registering the command requires the exact type of the payload, otherwise your extension will not compile. The `documentId` will be the id of the document the menu is attached to, in this case, the exact entity in the Domain Model editor canvas.

{{% alert color="info" %}}
The command must be registered before creating the menu.
{{% /alert %}}

## Extensibility Feedback

If you would like to provide us with some additional feedback, please complete a short [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)

Any feedback is much appreciated.
