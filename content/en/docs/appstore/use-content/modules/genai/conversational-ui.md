---
title: "Conversational UI"
url: /appstore/modules/genai/conversational-ui/
linktitle: "Conversational UI"
weight: 20
description: "Describes the Conversational UI marketplace module that assists developers in implementing conversational use cases such as an AI Bot."
---

## Introduction {#introduction}

With the [Conversational UI module](https://marketplace.mendix.com/link/component/227931), you can create an AI-based chat user interface. It contains the needed data model, pages, snippets and building blocks to do so. You can integrate with any LLM and knowledge base to create your own full screen, sidebar or modal chat. It integrates with the Atlas framework and is the basis for the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926). It is also included in the [Blank GenAI App](https://marketplace.mendix.com/link/component/227934).

Mendix has produced a [Conversational AI Design Checklist](/howto/front-end/conversation-checklist/) which suggests some best practices for introducing conversational AI into your app.

### Typical Use Cases {#use-cases}

Typical use cases include the following:

* Create a chat interface for users to chat with Large Language Models (LLM). 
* Allow users to switch between different implementations by switching providers. 
* Include advanced capabilities to control the model's behavior, for example by setting the temperature parameter.
* Easily extend the chat interface with advanced concepts, such as RAG or the ReAct pattern. For more information, see [Using Generative AI](/appstore/modules/genai/using-gen-ai/).

### Features {#features}

The Conversational UI module provides the following functionalities:

* UI components that you can drag and drop onto your pages, for example:
    * Layouts to have a sidebar or floating popup chat
    * Pages that you can use in your navigation for chat
    * Snippets that you can use directly on your pages, for example to display messages or a history sidebar
    * A floating button that for opening a chat
* Operations to set up your context, interact with the model, and add the data to be displayed in the UI
* Domain model to store the chat conversations and additional information
* Integration with any model that is compatible with [GenAI Commons](https://marketplace.mendix.com/link/component/227933)

### Limitations {#limitations}

This module is intended to enable chat interactions between a user and an AI model. It is not designed for conversations between two human users.

### Prerequisites {#prerequisites}

To use the Conversational UI module, your Mendix Studio Pro version must be [9.24.2](/releasenotes/studio-pro/9.24/#9242) or higher.

You must also ensure that you have the prerequisite modules that Conversational UI requires. The modules are included by default in the [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) and the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926), otherwise you must install them yourself:

* [Atlas Core](https://marketplace.mendix.com/link/component/117187)
* [GenAI Commons](https://marketplace.mendix.com/link/component/227933)
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)
* [Web Actions](https://marketplace.mendix.com/link/component/114337)

Finally, you must also install and configure a connector that is compatible with GenAI Commons. Mendix provides platform-supported integration with either [(Azure) OpenAI](/appstore/modules/genai/openai/) or [Amazon Bedrock](/appstore/modules/aws/amazon-bedrock/). You can also integrate with custom models, by making them compatible with the [GenAI Commons](/appstore/modules/genai/commons/) Request and Response.

## Installation {#installation}

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the Conversational UI into your app.

## Configuration {#configuration}

To use Conversational UI in your app, you must perform the following tasks:

1. Configure the relevant [user roles](#module-roles).
2. Create a [chat context](#chat-context).
3. Associate a [provider](#provider-config) and create an [action microflow](#action-microflow).
4. Use the [pages](#pages-and-layouts) and [snippets](#snippets) to create your UI.

## Technical Reference {#technical-reference}

To help you work with the Conversational UI module, the following sections of this document list the available entities and activities that you can use in your application.

{{< figure src="/attachments/appstore/use-content/modules/genai/conversational-ui/domain-model.png" alt="" width="50%">}}

### Module Roles {#module-roles}

Make sure that the module role `User` is part of the user roles that are intended to chat with the model. Optionally, you can grant the `_addOn_ReadAll` role to admin roles, so that users with that role can read all messages.

| Module role | Description |
| --- | --- |
| `User` | Role needed for every user that should be able to interact with the chat components. Users can only read their own messages (and related data). |
| `_addOn_ReadAll` | Role can be granted additionally. Users with both roles can read all data. |

### ChatContext {#chat-context}

The `ChatContext` is the central entity in the UI and microflows. It can only be viewed by the owner (see [Module Roles](#module-roles) for exceptions). The object needs to be created for every new chat interaction and comprises the `messages` that are sent to and received from the model. A `ProviderConfig` should be associated via `ChatContext_ProviderConfig_Active` in order to execute the correct [action microflow](#action-microflow).

If you need additional attributes or associations on the `ChatContext`, use an extension entity that refers to the object which can then be retrieved and altered when needed (for example in the action microflow). The [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) shows an example of this approach.

#### Chat Context Operations {#chat-context-operations}

The following operations can be found in the toolbox for processing the [ChatContext](#chat-context):

* `Create ChatContext & Set ActionMicroflow` creates a new `ChatContext` and a new `ProviderConfig` (or a specialization of such depending on the input). The `ProviderConfig` is added to the `ChatContext` and set to active. Additionally, the action microflow of the new `ProviderConfig` is set.
* `Create ChatContext & Set ProviderConfig` creates a new `ChatContext` and sets a given `ProviderConfig` to active.
* `Create ChatContext & Set ProviderConfig (List)` creates a new `ChatContext` and adds a `ProviderConfig` to the `ChatContext` and sets it to active. In addition, a list of `ProviderConfigs` can be added to the `ChatContext` (non-active, but selectable in the UI).
* `Set ConversationID` sets the ConversationID on the `ChatContext`. Storing the ConversationID is needed for chat with history within Retrieve and Generate with [Amazon Bedrock](/appstore/modules/aws/amazon-bedrock/).
* `Set Topic` sets the `Topic` of the `ChatContext`. This attribute can be used in the **History** sidebar while making historical chats visible to users.

#### Request Operations {#request-operations}

* `Create Request from ChatContext` creates a [Request](/appstore/modules/genai/commons/) object that is used as input parameter in a `Chat with History` operation as part of the [action microflow](#action-microflow). For more information about the `Chat with History` operation, see [(Azure) OpenAI](/appstore/modules/genai/openai/) or [Amazon Bedrock](/appstore/modules/aws/amazon-bedrock/).
* `Get Current User Prompt` gets the current user prompt. It can be used in the [action microflow](#action-microflow), because the `CurrentUserPrompt` from the chat context is no longer available.
* `Update Assistant Response` processes the response of the model and adds the new message and any sources to the UI. This is typically one of the last steps of the logic in an [action microflow](#action-microflow).

#### Message {#message}

A `Message` contains the content of both user and assistant messages, distinguishable by the `Role` attribute (such as User or Assistant).

##### Source {#source}

The model can return `Sources` which can be added to a message and displayed in the UI for the user. This can increase the understanding of the reasoning process, for example, why a model came up with a specific response. The content of the sources can come from a knowledge base or the model, depending on the implementation.

#### SuggestedUserPrompt {#suggested-user-prompt}

It is possible to add suggested user prompts to a `ChatContext`. They appear as a button for new chats. When a user clicks the **Suggested User Prompt** that appears above the chat input box, the [action microflow](#action-microflow) sends the content of the prompt to the model and starts a predefined chat in the interface. New `SuggestedUserPrompts` can be created and added to a `ChatContext` with the **Add SuggestedUserPrompt** toolbox action.

#### AdvancedSettings {#advanced-settings}

`AdvancedSettings` can be used to allow users to configure parameters which can influence the model's behavior (see [Configuration Snippets](#snippet-configuration)). Currently, only temperature is exposed to users in the module by the slider input element. The object needs to be created when the chat context is shown to the page, for example in a navigation flow. Ranges can be set to control the values a user can select.

### ProviderConfig {#provider-config}

The `ProviderConfig` contains the selection of the model provider for the AI Bot to chat with. This contains an action microflow that is executed when the **Send** button is clicked. You can store additional information, such as connection details, on the `ProviderConfig` by using a specialization and adding the necessary fields. For an example implementation, see the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926).

The **Create ProviderConfig for ChatContext** toolbox action adds a new `ProviderConfig` (or a specialization of such depending on the input) to a `ChatContext`. The `ProviderConfig` can optionally also be set to active if `IsActive` is set to true. Additionally, the action microflow of the new `ProviderConfig` is set.

#### Action Microflow {#action-microflow}

The `Action Microflow` is executed by clicking the **Send** button. It handles the interaction between the LLM connectors and the Conversational UI entities. An example for each are provided in The **USE_ME** folder included in the Conversational UI module contains example action microflows for both [OpenAI](/appstore/modules/genai/openai/) and [Amazon Bedrock](/appstore/modules/aws/amazon-bedrock/). You can copy these microflows and modify them for your use cases, or use them directly for test purposes.

##### Using the Action Microflow {#set-action-microflow}

Add the action microflow to an existing `ProviderConfig` by using the **Set ActionMicroflow** toolbox action. Note that the action does not commit the object, so you must also add a step to commit it after.

##### Creating a Custom Action Microflow

If you want to create your own custom action microflow, keep the following considerations in mind:

* Only one input parameter of [ChatContext](#chat-context) is accepted.
* The return type needs to be a `Success` Boolean.
* Use the [request operations](#request-operations) to facilitate the interaction between the chat context and the model.
* When creating the `ProviderConfig`, use [Set ActionMicroflow](#set-action-microflow) to set the microflow.

### Pages and Layouts {#pages-and-layouts}

You can include the following pages in your navigation, or copy them to your module and modify them to suit your use case:

* **ConversationalUI_FullScreenChat** - This page displays a centered chat interface on a full screen responsive page. 
* **ConversationalUI_PopUp** - This is a floating pop-up in the bottom-right corner. To open it, users can click the **Snippet_FloatingChatButton** that floats in the bottom-right corner. Alternatively, you can use the building block **Floating Button OpenChat** from the toolbox to create your custom opening logic.
* **ConversationalUI_Sidebar** - This page displays the chat interface on the right side with the full height.

All pages expect a [ChatContext](#chat-context) that needs to have an active [ProviderConfig](#provider-config). The user can chat with the LLM on all pages, but not configure any additional settings, such as the model or system prompt. This needs to happen before the page was opened, for example, or in the [action microflow](#action-microflow) that is stored in the active [ProviderConfig](#provider-config).

### Snippets {#snippets}

Drag the following snippets onto your other pages to quickly build your own version of the chat interface.

#### Chat Interface Snippets {#snippet-chat-interface}

Chat interface snippets contain the whole chat history as a list view, and below that a text area for users to enter the user prompt. There are some UI components that show an error message, when a call has failed, or that show progressing loading bots when waiting for the response. When a user clicks the **Send** button, the [action microflow](#action-microflow) is executed.

The following versions are available and can be swapped as needed:

* **Snippet_ChatContext_ConversationalUI** - This snippet shows both the user messages and the responses on the left side of the container.
* **Snippet_ChatContext_ConversationalUI_Bubbles** - This snippet shows the user messages on the right side and the responses on the left side, similarly to common chat apps. The content is placed inside colored cards (bubbles).

If the snippet does not fit your use case, you can [inline the snippet](/refguide/snippet-call/#inline-snippet) to customize it to your needs.

#### Message Snippets {#snippet-messages}

The messages snippets are already part of the [Chat Interface Snippets](#snippet-chat-interface), but can be used individually in your custom setup. They contain the content of the messages list view.

The following versions are available and can be swapped as needed:

* **Snippet_Message** - This snippet shows both the user messages and the responses on the left side of the list.
* **Snippet_Message_Bubble** - This snippet shows the user messages on the right side and the responses on the left side, similarly to common chat apps. The content is placed inside colored cards (bubbles).

#### Configuration Snippets {#snippet-configuration}

* **Snippet_ChatContext_AdvancedSettings** - This snippet can be placed on pages to let users configure specific parameters (currently **temperature**).
* **Snippet_ChatContext_SelectActiveProviderConfig** - With this snippet, users can select an active [Provider Config](#provider-config) from all associated configurations, for example to let them select a model.
* **Snippet_ChatContext_HistorySideBar** - This snippet can be used in a list view of past conversations.

See the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) or the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) on how to use those snippets.

### Additional Operations {#operations}

The following additional microflows can be found in the **USE_ME** folder:

* **ChatContext_AddProviderConfig_SetActive** - This microflow adds a `ProviderConfig` to the chat context and sets it to active.
* **ChatContext_Delete** - This microflow deletes a chat context.
* **AdvancedSettings_GetAndUpdate** - This microflow can be used after chat context creation to set the boundaries and default value for advanced settings in the UI. For more information, see [Configuration Snippets](#snippet-configuration).
