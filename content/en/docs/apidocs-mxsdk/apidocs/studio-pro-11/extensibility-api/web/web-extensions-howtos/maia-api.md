---
title: "Set the Maia Chat Prompt Using Web API"
linktitle: "Maia Chat"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/maia-chat-api/
description: "Describes how to populate the Maia Agent chat prompt from an extension in Studio Pro using the Web Extensibility API."
---

## Introduction

This document describes how to populate the Maia Agent chat prompt from an extension in Studio Pro, ready for the user to review and send. For example, an extension can take text that the user selects and send it to the Maia chat as a prompt.

The Maia chat API is available to extensions through `studioPro.ai.chat`.

## Prerequisites

Before starting this how-to, complete the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.
* Make sure you are familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## Setting the Maia Chat Prompt

With the Maia chat API, you can set a prompt text in the Maia Agent chat.

Replace your `src/main/index.ts` file with the following:

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
                await maiaChatApi.setChatPrompt("Explain what this app does and suggest improvements.");
            }
        });
    }
};
```

This code does the following:

* It uses `maiaChatApi` from `studioPro.ai.chat` to access the Maia chat API.
* It adds a menu item named **Ask Maia about my app** that calls `setChatPrompt` to populate the Maia Agent chat input.

You can also set the prompt from text the user selects in your own editor UI. For example, from a context-menu action on a text area:

```typescript
const sendToMaiaHandler = async (textarea: HTMLTextAreaElement | null) => {
    if (textarea) {
        await studioPro.ai.chat.setChatPrompt(textarea.value);
    }
};
```

## Maia Chat API

This API provides a method that allows interacting with the Maia Agent chat.

* `setChatPrompt`

### Setting the Chat Prompt

The `setChatPrompt` method takes a `prompt` string and places it into the Maia Agent chat input. The prompt is not sent automatically, so the user can review, edit, and send it. If the Maia tab is not open, it is opened and made active.

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a short [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.
