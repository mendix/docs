---
title: "Using the Tools API"
linktitle: "Tools API"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/tools-api/
description: "Describes how to use the Tools API in Studio Pro to extend capabilities of Maia"
---

## Introduction

This how-to describes how to register a custom tool that Maia can invoke. Once registered, the tool's name, description, and input schema are made available to the LLM agent, which can call the tool's `run` function whenever it decides the tool is relevant to the user's request.

## Prerequisites

Before starting this how-to, make sure you have completed the following
prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](https://docs.mendix.com/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.
* Familiarize yourself with extension permissions. For more details, refer to [Extension Permissions in Overview Pane](https://docs.mendix.com/apidocs-mxsdk/apidocs/web-extensibility-api-11/extension-permissions/).

## Declare the Permission

Registering a tool requires the `register-ai-tools` permission. Add it to your extension's `manifest.json` after the entry points:

```json
{
  "mendixComponent": {
    "entryPoints": {
      "main": "main.js"
    },
    "permissions": {
      "register-ai-tools": true
    }
  }
}
```

Set the permission to `true` to make it appear in the Extensions Overview pane. When a user installs your extension, they can grant this permission through the Extensions Overview pane (**View** > **Extensions**) in Studio Pro. `registerTool()` will not run otherwise and MAIA will not be able to know of its existense.

## Set Up the Extension Structure

Replace the contents of your `src/main/index.ts` file with the following:

```typescript
import { ComponentContext, IComponent, getStudioProApi } from "@mendix/extensions-api";

import { registerTool } from "./tools";

class Main implements IComponent {
    async loaded(componentContext: ComponentContext) {
        const studioPro = getStudioProApi(componentContext);

        const permission = "register-ai-tools";
        const currentPermissions = await studioPro.ui.extensionPermissions.getPermissions();
        const registerAiToolsPermission = currentPermissions.find(p => p.name === permission);

        if (!registerAiToolsPermission) {
            studioPro.ui.notifications.show({
                title: `Required permission '${permission}' not found`,
                message: `We need the '${permission}' permission to be granted in order to register the AI tool. But it was not found.`,
                displayDurationInSeconds: 3
            });
            return;
        }

        if (!registerAiToolsPermission.granted) {
            studioPro.ui.notifications.show({
                title: `Please grant the '${permission}' permission`,
                message: `We need the '${permission}' permission to be granted in order to register the AI tool. Please go to the 'Extension Permissions' dialog and grant this permission.`,
                displayDurationInSeconds: 3
            });
            return;
        }

        await registerTool(studioPro);
    }
}

export const component: IComponent = new Main();
```

Add a `src/main/tools.ts` file that defines and registers the tool, based on the `e2e-ai-tools-extension` test extension:

```typescript
import { ExternalAIToolDefinition, StudioProApi } from "@mendix/extensions-api";

export const documentToolName = "create-document-tool";

export async function registerTool(studioPro: StudioProApi) {
    const toolInputSchema = {
        type: "object",
        properties: {
            documentName: {
                type: "string",
                description: "The name of the custom blob document to be created and opened by the tool"
            },
            moduleName: {
                type: "string",
                description:
                    "The name of the module in which the custom blob document will be created. If not provided, the tool will create the document in the first module of the app model."
            }
        },
        required: ["documentName"]
    };

    const run = async (input: object) => {
        const { documentName, moduleName } = input as {
            documentName: string;
            moduleName?: string;
        };

        const moduleContainer = await studioPro.app.model.modules.getModule(moduleName ?? "MyFirstModule");

        const document = await studioPro.app.model.customBlobDocuments.createDocument({
            containerId: moduleContainer!.$ID,
            type: "myExtension.ToolDocument",
            content: { toolName: documentToolName, content: "this document was created by the ai tool" },
            documentName
        });

        await studioPro.ui.editors.editDocument({ id: document.documentId });

        return `The tool has created a new custom blob document '${documentName}' in the module '${moduleName}' and opened it in a new editor tab.`;
    };

    const toolDefinition: ExternalAIToolDefinition = {
        name: documentToolName,
        description: "This tool creates a custom blob document inside the module provided and opens it in a new editor tab.",
        inputSchema: toolInputSchema as ExternalAIToolDefinition["inputSchema"],
        run
    };

    await studioPro.ui.extensionsMenu.add({
        caption: "Register document tool",
        menuId: "register-document-tool",
        action: async () => studioPro.ai.tools.registerTool(toolDefinition)
    });
}
```

The code uses the following:

* `studioPro.ui.extensionPermissions` to check whether the required permission has been granted
* `studioPro.ui.extensionsMenu` to add a menu item that registers the tool on demand
* `studioPro.ai.tools` to register the tool itself

The function is `async` so you can use `await` when registering the tool.
If a tool with the same name is already registered, `registerTool()` throws an error.

## The Tool Definition

An `ExternalAIToolDefinition` has the following properties:

* `name` – the tool name as given to the LLM. It must be descriptive and contain no special characters, since different LLMs restrict tool names differently.
* `description` – a short paragraph explaining what the tool does and how it should be used. Clearly describe any non-intuitive behavior or rules the agent must follow.
* `inputSchema` – a JSON Schema describing the tool's input, as shown above.
* `run(input)` – the async function that is called with the validated input object and returns a string result to the LLM.
* `inProgressMessage` *(optional)* – text shown in the UI while the tool is running, or while the user is asked for permission to run it. It can be a static string or a function that receives the tool input and returns a promise. If omitted, a default message is shown.

## Behavior and Limitations

Keep the following behavior in mind when registering tools:

* **User confirmation is always required.** Every invocation of an externally-registered tool asks the user for confirmation before running.
* **Tool names must be globally unique.** `registerTool()` throws `Tool '<name>' is already registered.` if a tool with the same name is already registered by any extension, not only your own.
* **Tools are deregistered automatically.** There is no derefister method. Registered tools are removed automatically when the extension that registered them is unloaded.
* **Permission changes apply immediately.** If the user revokes `register-ai-tools` after a tool has been registered, the tool becomes unavailable to the agent without needing to re-register.

If you follow the above code, you should give permissions for the tool to run from the View->Extensions Overview pane. then register the tool from the extension menu. Ask MAIA to run the tool with 2 numbers and give it access to the tools.

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a short
[survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
