---
title: "Exchange Information Between Active Views Using Web API"
linktitle: "Communication Between Views"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/message-passing-api/
---

## Introduction

This how-to describes how to pass information between different active views (such as tabs, dialogs, and panes) within the same extension.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one. 
* Make sure you are familiar with:
    * Creating [menus](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/)
    * Creating different kinds of views, such as [tabs](/apidocs-mxsdk/apidocs/web-extensibility-api-11/tab-api/) and [panes](/apidocs-mxsdk/apidocs/web-extensibility-api-11/dockable-pane-api/)

## Communication Patterns

Use the Message Passing API to pass information between different active contexts within an extension (such as its main entry point and active views). Access this API via `studioPro.ui.messagePassing`, where `studioPro` refers to the Studio Pro object returned by the `getStudioProApi` call.

This API supports two communication patterns: request-reply and message broadcasting.

### Request-Reply

In the request-reply pattern, one endpoint sends a message to another endpoint and waits for a reply. The Message Passing API supports this pattern by allowing the sender to include a callback function, which is triggered when a reply is received.

To implement this behavior, insert the following code in `main/index.ts`:

```typescript {hl_lines=["16-25"]}
import { IComponent, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        let counter = 0;
        // Add a menu item to the Extensions menu
        await studioPro.ui.extensionsMenu.add({
            menuId: "message-passing.MainMenu",
            caption: "Message passing",
            subMenus: [
                { menuId: "message-passing.ShowTab", caption: "Show tab" },
            ],
        });

        await studioPro.ui.messagePassing.addMessageHandler<{type:string}>(async messageInfo => {
            const messageData = messageInfo.message;
            if (messageData.type === "incrementCounter") {
                counter++;
                await studioPro.ui.messagePassing.sendResponse(messageInfo.messageId, {
                    type: "counterValue",
                    counter
                });
            }
        });

        // Open a tab when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            async (args) => {
                if (args.menuId === "message-passing.ShowTab") {
                    await studioPro.ui.tabs.open(
                        {
                            title: "MyExtension Tab"
                        },
                        {
                            componentName: "extension/message-passing",
                            uiEntrypoint: "tab",
                        }
                    );
                }
            }
        );
    }
}
```

Insert the following code into `src/ui/index.tsx`:

```typescript {hl_lines=["14-19"]}
import React, { StrictMode, useCallback, useState } from "react";
import { createRoot } from "react-dom/client";
import { ComponentContext, getStudioProApi, IComponent } from "@mendix/extensions-api";


type MessagePassingAppProps = {
    componentContext: ComponentContext
}

function CounterState({ componentContext }: MessagePassingAppProps) {
    const studioPro = getStudioProApi(componentContext);
    const [counter, setCounter] = useState<number | null>(null);
    const incrementCounter = useCallback(async () => {
        studioPro.ui.messagePassing.sendMessage(
            { type: "incrementCounter"}, 
            async (response: {type: 'counterValue', counter: number}) => {
                setCounter(response.counter);
            }
        );
    }, [componentContext]);

    return (
        <div>
            <button onClick={incrementCounter}> Increment counter </button>
            <p> Counter value: {counter ?? "unknown"} </p>
        </div>
    );
}

export const component: IComponent = {
    async loaded(componentContext) {
        createRoot(document.getElementById("root")!).render(
            <StrictMode>
                <CounterState componentContext={componentContext} />
            </StrictMode>
        );
    }
}
```

In this example, the extension increases the `counter` value in the main context every time the user clicks a button in the active tab. To achieve this, the tab sends a message to the main context, expecting a reply with the current `counter` value.

The highlighted lines demonstrate how to respond to a message. In the main context (`src/main/index.ts`), a listener is registered, which handles incoming messages from other contexts. Each message has an ID, which can be used to identify and respond to that specific message.

When the main context sends a response, it is received by the `onResponse` callback registered in 
the highlighted lines of `src/ui/index.tsx`. Note that this callback will be invoked only once,
as each message can have a single response.

### Broadcast

In the broadcast pattern, one context sends a messages to all other contexts that are listening for it. To implement this pattern, do the following:

1. Copy the following code into `src/main/index.ts`:

    ```typescript
    import { IComponent, getStudioProApi } from "@mendix/extensions-api";

    export const component: IComponent = {
        async loaded(componentContext) {
            const studioPro = getStudioProApi(componentContext);
            let counter = 0;
            // Add a menu item to the Extensions menu
            await studioPro.ui.extensionsMenu.add({
                menuId: "message-passing.MainMenu",
                caption: "Message Passing",
                subMenus: [
                    { menuId: "message-passing.ShowTab", caption: "Show tab" },
                    { menuId: "message-passing.ShowPane", caption: "Show pane" },
                ],
            });

            const paneHandle = await studioPro.ui.panes.register({
                title: 'Message Passing Pane',
                initialPosition: 'right',
            }, {
                componentName: "extension/message-passing",
                uiEntrypoint: "pane"
            })

            // Open a tab when the menu item is clicked
            studioPro.ui.extensionsMenu.addEventListener(
                "menuItemActivated",
                async (args) => {
                    if (args.menuId === "message-passing.ShowTab") {
                        await studioPro.ui.tabs.open(
                            {
                                title: "MyExtension Tab"
                            },
                            {
                                componentName: "extension/message-passing",
                                uiEntrypoint: "tab",
                            }
                        );
                    } else if (args.menuId === "message-passing.ShowPane") {
                        await studioPro.ui.panes.open(paneHandle);
                    }
                }
            );
        }
    }
    ```

2. Rename `src/ui/index.tsx` to `src/ui/tab.tsx` and paste the following code into it:

    ```typescript {hl_lines=["13-15"]}
    import React, { StrictMode, useCallback, useEffect, useState } from "react";
    import { createRoot } from "react-dom/client";
    import { ComponentContext, getStudioProApi, IComponent } from "@mendix/extensions-api";


    type MessagePassingAppProps = {
        componentContext: ComponentContext
    }

    function NameBroadcaster({ componentContext }: MessagePassingAppProps) {
        const studioPro = getStudioProApi(componentContext);
        const [name, setName] = useState<string>("");
        useEffect(() => {
            studioPro.ui.messagePassing.sendMessage({ type: "nameChanged", name });
        }, [name]);

        return (
            <div>
                Name: <input value={name} onChange={e => setName(e.target.value)} />
            </div>
        );
    }

    export const component: IComponent = {
        async loaded(componentContext) {
            createRoot(document.getElementById("root")!).render(
                <StrictMode>
                    <NameBroadcaster componentContext={componentContext} />
                </StrictMode>
            );
        }
    }
    ```

3. Create a new file `src/ui/pane.tsx` and paste the following code into it:

    ```typescript {hl_lines=["14-19"]}
    import React, { StrictMode, useCallback, useEffect, useState } from "react";
    import { createRoot } from "react-dom/client";
    import { ComponentContext, getStudioProApi, IComponent } from "@mendix/extensions-api";


    type MessagePassingAppProps = {
        componentContext: ComponentContext
    }

    function Greeter({ componentContext }: MessagePassingAppProps) {
        const studioPro = getStudioProApi(componentContext);
        const [name, setName] = useState<string>("unknown");
        useEffect(() => {
            studioPro.ui.messagePassing.addMessageHandler<{ type: string; name: string }>(async messageInfo => {
                const messageData = messageInfo.message;
                if (messageData.type === "nameChanged") {
                    setName(messageData.name);
                }
            });
        }, [componentContext]);

        return (
            <div>
                Hello {name}!
            </div>
        );
    }

    export const component: IComponent = {
        async loaded(componentContext) {
            createRoot(document.getElementById("root")!).render(
                <StrictMode>
                    <Greeter componentContext={componentContext} />
                </StrictMode>
            );
        }
    }
    ```

4. Update `build-extension.mjs` by replacing the `entryPoints` array with:

    ```javascript
    const entryPoints = [
        {
            in: 'src/main/index.ts',
            out: 'main'
        }   
    ]

    entryPoints.push({
        in: 'src/ui/tab.tsx',
        out: 'tab'
    })

    entryPoints.push({
        in: 'src/ui/pane.tsx',
        out: 'pane'
    })
    ```

5. Replace the contents of `manifest.json` with:

    ```
    {
    "mendixComponent": {
        "entryPoints": {
        "main": "main.js",
        "ui": {
            "tab": "tab.js",
            "pane": "pane.js"
        }
        }
    }
    }
    ```

This setup ensures that both the tab and the pane are registered in `src/main/index.ts`.
The tab sends a message whenever the `name` value is updated. The pane listens for these messages emitted from the tab, and updates its
view accordingly each time a new message is received.

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
