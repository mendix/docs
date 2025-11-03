---
title: "Register a Command Using Web API"
linktitle: "Register Commands"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/command-api/
---

## Introduction

This how-to describes how to register a command in Studio Pro from an extension. This command can then be attached to a menu or context menus for a document or an editor.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one. 
* Make sure you are familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## Register Commands

The Commands API allows you to register a reusable command that can be attached to menus and context menus. At this time, two APIs support this feature:

* [Documents API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/documents-api/)
* [App Explorer API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/app-explorer-api/)

## Using `registerCommand` API

To register commands, use the Commands API `registerCommand`.

In the sample code below, we register a command, then attach it to a menu by setting the property `commandId` to the `Menu` object.

```typescript
import { ComponentContext, IComponent, Menu, StudioProApi, getStudioProApi } from "@mendix/extensions-api";

const extensionId = "myextension";

export const component: IComponent = {
    async loaded(componentContext: ComponentContext) {
        const studioPro = getStudioProApi(componentContext);

        await this.createMenuWithCommand(studioPro);
    }

    async createMenuWithCommand(studioPro: StudioProApi) {
        const commandId = `${extensionId}.menu-command`;
        const menuId = `${commandId}.menu`;

        await studioPro.app.commands.registerCommand<void>(
            commandId,
            async () => await studioPro.ui.messageBoxes.show("info", `This menu executed a command with id '${commandId}'`)
        );

        await studioPro.ui.extensionsMenu.add({ caption: "Menu with command", menuId, commandId });
    }
}
```

## Payloads

The `registerCommand` requires a generic type for the command payload once executed. 

* For commands without payload, use `<void>`. When using `void`, the generic type declaration can also be left out (for example, `registerCommand<void>(commandId...)` becomes `registerCommand(commandId...)`).
* For commands that require payload, make sure the payload type matches the expected structure.

See the [App Explorer API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/app-explorer-api/) and [Documents API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/documents-api/) documentation for examples.

## Context Menu Integration

{{% alert color="info" %}}
The command must be registered before creating any menus that might be attached to it.
{{% /alert %}}

You can attach registered commands to context menus in:

* [App Explorer API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/app-explorer-api/) 
* [Documents API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/documents-api/). 

The command registration for commands that interact with documents require a payload of type `{ documentId: string }`.  The `documentId` is the id of the exact document that was interacted with by the menu. The backend will return the menu when it is clicked. 

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
