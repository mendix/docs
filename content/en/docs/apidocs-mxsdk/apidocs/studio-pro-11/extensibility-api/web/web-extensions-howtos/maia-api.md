---
title: "Set the Maia Chat Prompt Using Web API"
linktitle: "Maia Chat"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/maia-chat-api/
description: "Describes how to populate the Maia Agent chat prompt from an extension in Studio Pro using the Web Extensibility API."
---

## Introduction

This document describes how to use an extension in Studio Pro to populate the Maia Agent chat prompt for the user to review and send. For example, an extension can add text selected by the user and send it to Maia as a prompt.

The Maia chat API is available to extensions through `studioPro.ai.chat`.

## Prerequisites

Before starting this how-to, complete the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.
* Make sure you are familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## Setting the Maia Chat Prompt

With the Maia Chat API, you can set a prompt text in the Maia Agent chat.

To do this, replace your `src/main/index.ts` file with the following text:

```typescript
import { IComponent, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);

        const maiaChatApi = studioPro.ai.chat;
        const menuId = "set-maia-prompt-menu";

        await studioPro.ui.extensionsMenu.add({
            menuId,
            caption: "Ask Maia about my app",
            action: async () => {
                await maiaChatApi.setChatPrompt("Explain what this app does and suggest improvements.", true);
            }
        });
    }
};
```

This code:

* Uses `maiaChatApi` from `studioPro.ai.chat` to access the Maia Chat API
* Adds a menu item named *Ask Maia about my app* that calls `setChatPrompt` to populate the Maia Agent chat input and sends the prompt to Maia without user review

You can also populate the prompt with text the user selects in your own editor UI, for example, from a context-menu action on a text area:

```typescript
const sendToMaiaHandler = async (textarea: HTMLTextAreaElement | null) => {
    if (textarea) {
        await studioPro.ai.chat.setChatPrompt(textarea.value, false);
    }
};
```
The value `false` allows the user to review the text and send it themselves in the Maia chat window.

## Maia Chat API

The `setChatPrompt` API provides a method that allows users to interact with the Maia Agent chat.

### Setting the Chat Prompt

The `setChatPrompt` method takes a `prompt` string to populate the Maia Agent chat input and an `autoSend` to control whether the prompt is automatically send to the Maia chat. Set `autoSend` to `true` to send the prompt automatically, or `false` to let the user review, edit, and send it. If the Maia tab is not open, the method opens it and makes it active.

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a short [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
