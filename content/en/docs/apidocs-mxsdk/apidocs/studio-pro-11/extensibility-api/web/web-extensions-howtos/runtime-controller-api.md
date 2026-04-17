---
title: "Listen for Connection Changes"
linktitle: "Runtime Controller"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/runtime-controller-api/
---

## Introduction

This how-to describes how to create a simple menu that displays when the connection changed in a message box.

{{% alert color="info" %}}
Listening for connection changes was introduced in version 11.9.0.
{{% /alert %}}

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.
* Make sure you are familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/) and message boxes as described in [Show a Message Box Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/messagebox-api/).
* Your app must be running locally in Studio Pro to use the Runtime Controller API.

## Listening for Connection Changes

You can listen for runtime connection state changes to know when the app starts or stops running. To do this, follow the steps below:

1. Add an event listener to respond when the connection state changes.
2. Replace the content of your `src/main/index.ts` file with the following:

```typescript
import { IComponent, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const runtimeControllerApi = studioPro.runtime.controller;
        const messageBoxApi = studioPro.ui.messageBoxes;

        // Listen for connection state changes
        runtimeControllerApi.addEventListener("connectionChanged", (args) => {
            messageBoxApi.show(
                "info",
                `Runtime connection: ${args.isConnected ? "Connected" : "Disconnected"}`
            );
        });
    }
};
```

The code uses the:

* `menuApi` from `studioPro.ui.extensionsMenu` to allow you to use the menu API
* `messageBoxApi` from `studioPro.ui.messageBoxes` to show a dialog
* `runtimeControllerApi` from `studioPro.runtime.controller` to check if the connection changed.

{{% alert color="info" %}} The function is `async` in order for you to use `await` when executing the preview action.
{{% /alert %}}

The `connectionChanged` event returns an object with:

* `isConnected` – a boolean indicating whether the runtime is currently connected (true) or disconnected (false)

{{% alert color="info" %}} The event only detects when the runtime connects or disconnects. It cannot be used to determine when the runtime is completely initialized.
{{% /alert %}}

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
