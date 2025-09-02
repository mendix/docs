---
title: "Using the App Explorer API"
linktitle: "App Explorer API"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/app-explorer-api/
---

## Introduction

This how-to describes how to interact with the App Explorer in Studio Pro.

## Prerequisites

This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Please complete that how-to before starting this one. You should also be familiar with command registration as described in [Register a Command Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/command-api/).

## Creating a Context Menu

In this example, you will create a menu which will show for each microflow in the App Explorer. Use the full name of the document type to specify which type of document a menu should belong to (for example, `Microflows$Microflow` for microflows or `Pages$Page` for pages). The documentation for these document type names can be found at [Access a Mendix Model Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/model-api/).

The code below does the following:

1. Registers a command through the [Command API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/command-api/).
2. Attaches the `commandId` to the new menu. 
3. Uses the `appExplorer` API's `addContextMenu` method to add the menu to all `Microflow` document nodes.

```typescript
import { ComponentContext, IComponent, Menu, StudioProApi, getStudioProApi } from "@mendix/extensions-api";

const extensionId = "myextension";

export const component: IComponent = {
    async loaded(componentContext: ComponentContext) {
        const studioPro = getStudioProApi(componentContext);

        const commandId = `${extensionId}.microflow.command`;
        const menuId = `${commandId}.menu`;

        await studioPro.app.commands.registerCommand<{ documentId: string }>(commandId, async (args: { documentId: string }) => {
            await studioPro.ui.notifications.show({
                title: `Microflow command executed`,
                message: `You clicked a context menu for a Microflow! (${args.documentId})`,
                displayDurationInSeconds: 4
            });
        });

        const microflowMenu: Menu = { caption: `Microflow command menu`, menuId, commandId };

        await studioPro.ui.appExplorer.addContextMenu(microflowMenu, "Microflows$Microflow");
    }
}
```

The payload of the command must be an object containing a document Id (`{ documentId: string }`). Registering the command requires the exact type of the payload, or your extension will not compile. The `documentId` will be the Id of the document the menu is attached to (in this scenario, the exact `Microflow` node in the App Explorer).

{{% alert color="warning" %}}
The command must be registered before creating the menu.
{{% /alert %}}

## Conclusion

You have seen how to create context menus for a document node in the App Explorer. The menu executes a previously registered command.

## Extensibility Feedback

If you would like to provide us with additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
