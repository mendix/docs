---
title: "Exchange Information Between Active Views Using Web API"
linktitle: "Communication between views"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/message-passing-api/
---

## Introduction

This how-to describes how to pass information between different active views (e.g., tabs, dialogs and panes)
of the same extension.

## Prerequisites

This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Please complete that how-to before starting this one. You should also be familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/), and creating different kinds of views
such as [tabs](/apidocs-mxsdk/apidocs/web-extensibility-api-11/tab-api/) 
and [panes](/apidocs-mxsdk/apidocs/web-extensibility-api-11/dockable-pane-api/).

## Communication patterns

To support passing information between different active contexts of an extension (its main entry point and active views),
we have introduced Message Passing API, which can be obtained in `studioPro.ui.messagePassing`, where `studioPro` is
the Studio Pro object obtained with `getStudioProApi` call.

This API supports two communication patterns: request-reply and message broadcasting.

### Request-reply

In request-reply pattern, one endpoint sends a message to another endpoint and expects to receive a reply.
Message Passing API supports this pattern by allowing the sending side to send a message and specify a callback
that will be invoked once a reply has been received. 

To implement this behavior, insert this code in `main/index.ts`

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

This extension will increase the value of `counter` in the main context every time the user presses a button in the
active tab. To implement this we send a message from the tab to the main context, expecting that the main context
will reply with the current value of `counter`.

In the highlighted lines we illustrate the behavior of responding to a message. First, in the main context (the file `src/main/index.ts`)
we register a listener which will respond to every message sent from other contexts. Every message has an ID which
we can use if we want to respond to this message. We use this ID to identify the message we are responding to.

When the main context sends a response, it will be picked up the `onResponse` callback registered in 
the highlighted lines of the file (`src/ui/index.tsx`). Note that this callback will be invoked at most once,
as each message can have only one response.

### Broadcast

In the broadcast pattern, one context broadcasts messages to all other contexts that are listening to
a message. To implement this pattern, copy the following code to `src/main/index.ts`:

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

Then rename `src/ui/index.tsx` to `src/ui/tab.tsx` and paste the following code into it:

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

Then, create a file `src/ui/pane.tsx` and paste the following code into it:

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

Add the new views to `build-extension.mjs` by replacing the value of `entryPoints` array by

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

Lastly, replace the `manifest.json` contents by

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

This code first ensures that both the tab and the pane are registered in `src/main/index.ts`.
Then, the code in the tab will send a message every time the value of `name` is updated.
The pane is listening to all the messages emitted from the tab and reacts by updating its 
view any time the new message is received.

## Conclusion

You have mastered two patterns of communication between different active views in Studio Pro.

## Extensibility Feedback

If you would like to provide us with additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
