---
title: "Conversational UI"
url: /appstore/modules/genai/conversational-ui
linktitle: "Conversational UI"
weight: 3
description: "Describes the Conversational UI marketplace module that assists developers in implementing conversational use cases such as an AI Bot."
---

## 1 Introduction {#introduction}
With the Conversational UI module you can create an AI based chat user interface. It contains the needed data model, pages, snippets and building blocks to do so. You can integrate with any LLM and knowledge base to create your own full screen, sidebar or modal chat. It integrates with the Atlas framework and the is the basis of our [AI Bot Starter App]() and included in the [Blank GenAI App]().
<!-- TODO: include links when they become available -->

### 1.1 Typical Use Cases {#use-cases}

* Create a chat interface for users to chat with Large Language Models (LLM). 
* Allow users to switch between different implementations by switching "providers". 
* Include advanced capabilities to control the model's behavior, for example by setting the temperature parameter.
* Easily extend the chat interface with advanced concepts, such as RAG or the ReAct pattern (see [Using Generative AI](/appstore/modules/genai/concepts/)).

### 1.2 Features {#features}

* UI components to easily drag and drop construct your pages such as:
    * Layouts to have a sidebar or floating popup chat
    * Pages that you can use in your navigation for chat
    * Snippets to be used directly on your pages, for example to display messages or history sidebar
    * A floating button that for opening a chat
* Operations to setup your context, interact with the model and add the data to be displayed in the UI
* Domain model to store the chat conversations and additional information
* Integration with any model that is compatible with GenAI Commons

### 1.3 Limitations {#limitations}
This module is intended to enable chat interactions between a user and an AI model. It is not designed for conversations between two human users.

### 1.4 Prerequisites {#prerequisites}

In order to use the Conversational UI module, you are advised to use a connector that is compatible with GenAI Commons. Mendix supports out of the box integration with either [(Azure) OpenAI](/appstore/modules/genai/openai/) or [AWS Bedrock](/appstore/modules/aws/amazon-bedrock/). You can also integrate with custom models, by making it compatible with the GenAI Commons [Request](/appstore/modules/genai-commons/#request) and [Response](/appstore/modules/genai-commons/#response).

### 1.5 Dependencies {#dependencies}

* Mendix Studio Pro version [9.24.2](/releasenotes/studio-pro/9.24/#9242) or higher
* [Atlas Core](https://marketplace.mendix.com/link/component/117187)
* [GenAI Commons]()
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)
* [Web Actions](https://marketplace.mendix.com/link/component/114337)

All modules above are aleady part of the [Blank GenAI App]() and the [AI Bot Starter App]().
<!---
[comment]: <> TODO: Insert links to MP
-->


## 2 Installation {#installation}

* Mendix Studio Pro version [9.24.2](/releasenotes/studio-pro/9.24/#9242) or higher
* [Atlas Core](https://marketplace.mendix.com/link/component/117187)
* [GenAI Commons]()
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)
* [Web Actions](https://marketplace.mendix.com/link/component/114337)

All modules above are aleady part of the [Blank GenAI App]() and the [AI Bot Starter App]().
Follow the instructions in [Using Marketplace Content](/appstore/overview/use-content/) to import the Conversational UI into your existing app.
<!---
[comment]: <> TODO: Insert links to MP
-->


## 3 Configuration {#configuration}

In order to get started:
1. Configure the relevant user roles,
2. Create a Chat Context,
3. Associate a provider and set an action microflow,
4. Use the pages and snippets to create your UI.

## 4 Components {#components}

{{< figure src="/attachments/appstore/modules/genai/conversational-ui/domain-model.png" alt="" width="50%">}}

### 4.1 Module Roles {#module-roles}
Make sure that the module role `User` is part of the the user roles, that are intended to chat with the model. Optionally, the role `_addOn_ReadAll` can additionally be granted to admin roles, so that users with that role can read all messages.

| Module role      | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| User             | Role needed for every user that should be able to interact with the chat components. Users can only read their own messages (and related data).                                                                                          |
| _addOn_ReadAll   | Role can be granted additionally. Users with both roles can read all data. |


### 4.2 ChatContext {#chat-context}

The `ChatContext` is the central entity in the UI and microflows. It can only be viewed by the owner (see [Module Roles](#module-roles) for exceptions). The object needs to be created for every new chat interaction and comprises the `messages` that are sent to and received from the model. A `ProviderConfig` should be associated via `ChatContext_ProviderConfig_Active` in order to execute the correct [action microflow](#action-microflow).

If you need additional attributes or associations on the `ChatContext`, we advise to use an extension entity that refers to the object which can then be retrieved and altered when needed (for example in the action microflow). This pattern was implemented in the [AI Bot Starter App]().
<!---
[comment]: <> TODO: Insert links to MP
-->

#### 4.2.1 Chat Context Operations {#chat-context-operations}

The following operations can be found in the tool box for processing the [ChatContext](#chat-context):
* `Create ChatContext & Set ProviderConfig` creates a new chat context and sets a given `ProviderConfig` to active.
* `Create ChatContext` creates and returns a new chat context.
* `Add ProviderConfig List to ChatContext` adds `ProviderConfig` to the chat context and sets it to active. In addition, a list of ProviderConfigs can be added to the chat context (non-active, but selectable in the UI).

#### 4.2.2 Request Operations {#request-operations}

* `Create Request from ChatContext` will create [Request](/appstore/modules/genai-commons/#request) object that is used as input parameter in a "Chat with History" operation (see also [(Azure) OpenAI](/appstore/modules/genai/openai/) or [AWS Bedrock](/appstore/modules/aws/amazon-bedrock/)) as part of the [action microflow](#action-microflow). 
* `Update Assistant Response` will process the response of the model and add the new message and (if present) sources to the UI.
* `Get Current User Prompt` gets the current user prompt. Can be used in the [action microflow](#action-microflow), because the `CurrentUserPrompt` from the chat context is no longer available.
* `Set ChatContext Topic` sets the `Topic`of the chat context. Will be used in the history-sidebar to make historical chats recognizable for users.


#### 4.2.3 Message {#message}

A `Message` contains the content of both user and assistant messages, distinguishable by the `Role` attribute (e.g. User and Assistant).

##### 4.2.3.1 Source {#source}

The model can return `Sources` that can be added to a message and be displayed in the UI for the user. This might increase the understanding of the reasoning process, why a model came to the response. The content of the sources can come from a knowledge base or the model (depends on the specific implementation).

#### 4.2.4 SuggestedUserPrompt {#suggested-user-prompt}

It is possible to add suggested user prompts to a `ChatContext`. They appear as button for new chats. When clicked, the content of the button will be sent as user prompt to the model (via the [action microflow](#action-microflow)).

* `Add Suggested User Prompt to ChatContext` creates a [SuggestedUserPrompt](#suggested-user-prompt) that can start a predefined chat in the interface when clicked.


#### 4.2.5 AdvancedSettings {#advanced-settings}
`AdvancedSettings` can be used to allow users to configure parameters which can influence the model's behavior (see [Configuration Snippets](#snippet-configuration)). Currently, only temperature is exposed to users in the module by the slider input element. The object needs to be created when the chat context is shown to the page, for example in a navigation flow. Ranges can be set to control the values a user can select.


### 4.3 ProviderConfig {#provider-config}
The `ProviderConfig` contains the selection of the model provider for the AI Bot to chat with. This contains an "action microflow" that will be executed when the send button is clicked. You could store additional information, such as connection details, on the `ProviderConfig` by using a specialization and adding the necessarry fields. This pattern was implemented in the [AI Bot Starter App]().

<!---
[comment]: <> TODO: Insert links to MP
-->

#### 4.3.1 Creating and setting an Action Microflow {#action-microflow}
The `Action Microflow` is executed via the send button and handles the interaction with the LLM's connectors and the Conversational UI entities. An example for each [OpenAI](/appstore/modules/genai/openai/) and [AWS Bedrock](/appstore/modules/aws/amazon-bedrock/) are provided in the `USE_ME` folder that can be seen as inspiration (copy and modify) or directly for test-purposes.

Set the action microflow through the  `Set ActionMicroflow` toolbox action. Note that it does not commit the object.

Note the following when developing your own custom action microflow:
* Only one input parameter of [ChatContext](#chat-context) is accepted.
* The return type needs to be a `Success` boolean.
* Use the [request operations](#request-operations) to facilitate the interaction between the chat context and the model.
* When creating the `ProviderConfig`, use [Set ActionMicroflow](#provider-config-operations) to set the microflow.

### 4.4 Pages & Layouts {#pages-and-layouts}

There are three pages that can be included in your navigation directly or which you can copy to your module to modify it. 
* `ConversationalUI_FullScreenChat` displays a centered chat interface on a full screen responsive page. 
* `ConversationalUI_PopUp` is a floating pop-up in the bottom-right corner. Can be opened directly via the `Snippet_FloatingChatButton` that floats in the bottom-right corner as well. Alternatively, there you could use the building block `Floating Button OpenChat` from the toolbox to create your custom opening logic.
* ConversationalUI_Sidebar displays the chat interface on the right side with full height.

All pages expect a [ChatContext](#chat-context) that needs to have an active [ProviderConfig](#provider-config). The user can chat with the LLM on all pages, but not configure any additional settings, such as the model or system prompt. This needs to happen before the page was opened, for exampleor in the [action microflow](action-microflow) that is stored in the active [ProviderConfig](#provider-config).

### 4.5 Snippets {#snippets}

Drag the following snippets on your other pages to quickly build your own version of the chat interface.

#### 4.5.1 Chat Interface Snippets {#snippet-chat-interface}

Chat interface snippets contain the whole chat history as a listview and below that a text area for user's to enter the user prompt. There are some UI components that show an error message, when a call has failed, or that show progressing loading-bots when waiting for the response. When the send button is clicked, the [action microflow](#action-microflow) will be executed.

The following versions are available and interchangeable:
* `Snippet_ChatContext_ConversationalUI` shows both messages (user's and assistant's) on the left side of the container while
* `Snippet_ChatContext_ConversationalUI_Bubbles` shows the user's message on the right side and the responses on the left side (similar to commonly known chat apps). The content is placed inside colored cards (bubbles).

If the snippet does not exactly fit into your use case, you can [inline the snippet](/refguide/snippet-call/#inline-snippet) to customize to your needs.

#### 4.5.2 Message Snippets {#snippet-messages}

The messages snippets are already part of the [Chat Interface Snippets](#snippet-chat-interface), but can be used individually in your custom setup. They contain the content of the messages listview.

The following versions are available and interchangeable:
* `Snippet_Message` shows both messages (user's and assistant's) on the left side in the list while
* `Snippet_Message_Bubble` shows the user's message on the right side and the responses on the left side (similar to commonly known chat apps). The content is placed inside colored cards (bubbles).

#### 4.5.3 Configuration Snippets {#snippet-configuration}

* `Snippet_ChatContext_AdvancedSettings` can be placed on pages to let user's configure specific parameters. Currently, only temperature is exposed to users in the module by the slider input element. 
* `Snippet_ChatContext_SelectActiveProviderConfig` the user's can select an active [Provider Config](#provider-config) from all associated configurations, for example to let them select a model.
* `Snippet_ChatContext_HistorySideBar` can be used in a listview of historic conversations.

See the [AI Bot Starter App]() or the [OpenAI Showcase App](https://marketplace.mendix.com/link/component/220475) on how to use those snippets.

### 4.6 Additional Operations {#operations}

The following microflows can be found in the `USE_ME` folder:
* `ChatContext_AddProviderConfig_SetActive` adds a `ProviderConfig` to the chat context and sets it to active.
* `ChatContext_Delete` deletes a chat context.
* `ChatContext_SetConversationID` sets the `ConversationID` of the chat context.
* `AdvancedSettings_GetAndUpdate` can be used after the chat context was created to set the boundaries and default value for advanced settings in the UI (see [Configuration Snippets](#snippet-configuration)).



<!---
[comment]: <> TODO as part of a separate PR:
-General styling tips (apart from using the example pages either directly or for insipration)
-  ##5 Technical Reference (Not in scope, will be separate PR)

-->