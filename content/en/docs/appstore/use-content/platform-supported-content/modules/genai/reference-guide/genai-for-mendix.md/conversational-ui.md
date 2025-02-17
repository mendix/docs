---
title: "Conversational UI"
url: /appstore/modules/genai/genai-for-mx/conversational-ui/
linktitle: "Conversational UI"
weight: 20
description: "Describes the Conversational UI marketplace module that assists developers in implementing conversational use cases such as an AI Bot."
aliases:
   - /appstore/modules/genai/conversational-ui/
---

## Introduction {#introduction}

With the Conversational UI module (available as part of [GenAI for Mendix](https://marketplace.mendix.com/link/component/227931)), you can create a GenAI-based chat user interface. It contains the needed data model, pages, snippets, and building blocks. You can integrate with any LLM and knowledge base to create your full-screen, sidebar, or modal chat. It integrates with the Atlas framework and is the basis for the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926). It is also included in the [Blank GenAI App](https://marketplace.mendix.com/link/component/227934), the [Support Assistant Starter App](https://marketplace.mendix.com/link/component/231035), and the [RFP Assistant Starter App](https://marketplace.mendix.com/link/component/235917).

Mendix has produced a [Conversational AI Design Checklist](/howto/front-end/conversation-checklist/) with some best practices for introducing conversational AI into your app.

### Typical Use Cases {#use-cases}

Typical use cases for Conversational UI include the following:

* Create a chat interface for users to chat with Large Language Models (LLM). 
* Allow users to switch between different implementations by switching providers. 
* Include advanced capabilities to control the model's behavior, for example, by setting the temperature parameter.
* Easily extend the chat interface with advanced concepts, such as RAG or the ReAct pattern. For more information, see [Get Started with Generative AI](/appstore/modules/genai/get-started/).

### Features {#features}

The Conversational UI module provides the following functionalities:

* UI components that you can drag and drop onto your pages, for example:
    * Layouts to have a sidebar or floating pop-up chat
    * Pages that you can use in your navigation for chat
    * Snippets that you can use directly on your pages, for example, to display messages or a history sidebar
    * A floating button for opening a pop-up chat
    * Pages, snippets, and logic to display and export token usage data (if enabled in GenAI Commons and supported by the GenAI Connector of choice)
    * Pages, snippets, and logic to experiment with prompts. An admin, developer, or data scientist can test multiple versions at runtime, define variables, and decide which prompt version should be applied when end-users use the app. See [Prompt Management](/appstore/modules/genai/genai-for-mx/prompt-management/) for more information.

* Operations to set up your context, interact with the model, and add the data to be displayed in the UI
* Domain model to store the chat conversations and additional information
* Integration with any model that is compatible with [GenAI Commons](/appstore/modules/genai/commons/)

### Limitations {#limitations}

This module is intended to enable building chat interactions between a human user and an AI model. It is not designed for conversations between two human users.

### Prerequisites {#prerequisites}

To use the Conversational UI module, your Mendix Studio Pro version must be [9.24.2](/releasenotes/studio-pro/9.24/#9242) or higher.

When you download [GenAI for Mendix](https://marketplace.mendix.com/link/component/227931) from the marketplace, [GenAI Commons](/appstore/modules/genai/commons/) and the [Mendix Cloud GenAI Connector](/appstore/modules/genai/MxGenAI/) are already included.

You must also ensure you have the other prerequisite modules that Conversational UI requires. These modules are included by default in the [Blank GenAI App](https://marketplace.mendix.com/link/component/227934), the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926), the [Support Assistant Starter App](https://marketplace.mendix.com/link/component/231035), and the [RFP Assistant Starter App](https://marketplace.mendix.com/link/component/235917). If not, you need to install them manually.

* [Atlas Core](https://marketplace.mendix.com/link/component/117187)
* [Data Widgets](https://marketplace.mendix.com/link/component/116540) 
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)
* [Web Actions](https://marketplace.mendix.com/link/component/114337)

Finally, you must also set up a connector that is compatible with [GenAI Commons](/appstore/modules/genai/commons/). One option is to use the Mendix Cloud GenAI connector, which is part of the above Marketplace listing package. For more information on how to configure this connector, see the [Configuration](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#configuration) section of *Mendix Cloud GenAI connector*. Additionally, Mendix offers platform-supported integration with [(Azure) OpenAI](/appstore/modules/genai/openai/) and [Amazon Bedrock](/appstore/modules/aws/amazon-bedrock/). If desired, you need to download these integrations manually from the Marketplace. Alternatively, you can integrate with custom models by creating your own connector and making its operations and object structure compatible with the [GenAI Commons](/appstore/modules/genai/commons/) `Request` and `Response`.

## Installation {#installation}

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Conversational UI module into your app.

## Configuration {#configuration}

To use Conversational UI in your app, you must perform the following tasks in Studio Pro:

1. Add the relevant [module roles](#module-roles) to the user roles in the project security.
2. Create the [UI for the chat](#ui-components) in your app by using the [pages](#pages-and-layouts) and [snippets](#snippets) as a basis.
3. Make sure there is a [chat context](#chat-context) available on the page where the conversation should be shown.
4. Associate one or more [provider-configs](#provider-config) to the chat context. 
5. Use a default [action microflow](#action-microflow) or create a custom flow that will be executed when the user clicks the **Send** button.
6. In the project theme settings, include the ConversationalUI module in the right order. Add it after Atlas_Core so the styling does not get overwritten (see [Ordering UI Resource Modules](/howto/front-end/customize-styling-new/#ordering-ui-resource-modules) for more information).
7. Optionally, [customize styling](#customize-styling) by overwriting variables and adding custom scss. Custom styling modules need to be loaded after ConversationalUI when ordering UI resources.

The main entities are shown for reference in the diagram below. For technical documentation, follow the steps in the [Technical Reference](#technical-reference) section.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/conversational-ui/domain-model.png" >}}

### Configuring the Roles {#module-roles}

Make sure that the module role `User` is part of the user roles that are intended to chat with the model. Optionally, you can grant the `_addOn_ReadAll` role to admin roles, so that users with that role can read all messages. A role for usage monitoring is related only to the [Token consumption monitor snippets](#snippet-token-monitor). Additionally, a separate role is applicable for the [Prompt Management functionality](/appstore/modules/genai/genai-for-mx/prompt-management/). Both do not relate to the conversational snippets.

| Module role | Description |
| --- | --- |
| `User` | Role needed for every user that should be able to interact with the chat components. Users can only read their messages (and related data). |
| `_addOn_ReadAll` | Role can be granted additionally. Users with both roles can read all chat data. |
| `UsageMonitoring` | Can view and export all token usage data. This is related to a module role with the same name in the GenAI Commons module. |
| `PromptAdmin` | Designs, manages and tests prompts. Also decides which version is used in the running app environment. |

### Creating the Chat UI {#ui-components} 

A set of reusable pages, layouts, and snippets is included in this module to allow you to add the conversational UI to your app.

#### Pages and Layouts {#pages-and-layouts}

You can include the following pages in your navigation, or copy them to your module and modify them to suit your use case:

* **ConversationalUI_FullScreenChat** - This page displays a centered chat interface on a full-screen responsive page. 
* **ConversationalUI_Sidebar** - This page displays the chat interface on the right side with the full height.
* **ConversationalUI_PopUp** - This is a floating pop-up in the bottom-right corner. To open it, users can click the **Snippet_FloatingChatButton** that floats in the bottom-right corner. Alternatively, you can use the building block **Floating Chat Button** from the toolbox to create your custom opening logic.

All pages expect a [ChatContext](#chat-context) that needs to have an active [ProviderConfig](#provider-config). The user can chat with the LLM on all these pages, but cannot configure additional settings, such as the model or system prompt. There are many ways to enable this: on a custom page before the chat was opened, on a custom version of the chat page itself, or in the [action microflow](#action-microflow) that is stored in the active [ProviderConfig](#provider-config).

#### Snippets {#snippets}

Drag the following snippets onto your other pages to quickly build your version of the chat interface.

##### Chat Interface Snippets {#snippet-chat-interface}

Chat interface snippets show the entire message history of a conversation in a list view. At the bottom, a text area allows users to enter their message, which is the user prompt. Some UI components show an error message when a call fails, or show progressing loading bots while waiting for the response. When a user clicks the **Send** button, the [action microflow](#action-microflow) is executed.

The following versions are available and can be swapped as needed:

* **Snippet_ChatContext_ConversationalUI** - This snippet shows both the user messages and the responses on the left side of the container.
* **Snippet_ChatContext_ConversationalUI_Bubbles** - This snippet shows the user messages on the right side and the responses on the left side, similar to common chat apps. The content is placed inside colored cards (bubbles).

If the snippet does not fit your use case, you can [inline the snippet](/refguide/snippet-call/#inline-snippet) to customize it to your needs.

##### Message Snippets {#snippet-messages}

The message snippets are already part of the [Chat Interface Snippets](#snippet-chat-interface) but can be used individually in your custom setup if needed. They contain the content of a single message, for example, to be used in a list view.

The following versions are available and can be swapped as needed:

* **Snippet_Message** - This snippet shows both the user messages and the responses on the left side of the list.
* **Snippet_Message_Bubble** - This snippet shows the user messages on the right side and the responses on the left side, similar to common chat apps. The content is placed inside colored cards (bubbles).

##### Advanced Configuration Snippets {#snippet-configuration}

The following additional snippets can be used to give the user more control over the chat conversations.

* **Snippet_ChatContext_AdvancedSettings** - This snippet can be placed on pages to let users configure specific parameters (current **temperature**). Use the microflow **AdvancedSettings_GetAndUpdate** to set the boundaries and default value for advanced settings in the UI. 
* **Snippet_ChatContext_SelectActiveProviderConfig** - With this snippet, users can select an active [Provider Config](#provider-config) from all associated configurations, for example, to let them select a model.
* **Snippet_ChatContext_HistorySideBar** - This snippet can be used in a list view to show past conversations. It displays the **topic** of the chat context as well as a delete icon on hover. For details on how to set the topic, see [ChatContext operations](#chatcontext-operations).

See the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) or the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) on how to use those snippets.

### Providing the ChatContext {#chat-context}

The `ChatContext` is the central entity in the pages and snippets above and represents a chat conversation with potentially many messages. It functions as the input for the action microflow, which contains the logic for LLM interaction and is executed when the user clicks the **Send** button. The `ChatContext` is visible only to its owner (see [Module Roles](#module-roles) for exceptions). 

The `ChatContext` object must be created for every new chat conversation displayed on a page. It comprises the `messages` sent to and received from the model during a chat interaction. At least one `ProviderConfig` must be associated via `ChatContext_ProviderConfig_Active` which determines the [action microflow](#action-microflow) to execute and `DeployedModel` used for the LLM interaction. 
You can build your own ACT microflow that opens the chat page. For examples of how to implement this, refer to the **USE_ME** > **Pages** folder.

If you need custom attributes or settings in your action microflow required for your chat logic, you can achieve this by using a specialization or an extension entity to the `ChatContext` entity. In the action microflow, this specialization or extension object can then be retrieved, used, or altered when needed. The [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) shows an example of the extension entity approach, see the `ContextExtension`.

#### Chat Context Operations {#chat-context-operations}

Depending on the implementation, you can create this object using a microflow that opens the page or using a datasource microflow on the page itself. The following are the operations in the toolbox for creating the ChatContext:

* `New Chat` creates a new `ChatContext` and a new `ProviderConfig`. The `ProviderConfig` is added to the `ChatContext` and set to active. Additionally, the action microflow of the new `ProviderConfig` is set. A [DeployedModel](/appstore/modules/genai/genai-for-mx/commons/#deployed-model) needs to be passed in order to access the right model. Via the association `ProviderConfig_DeployedModel` the DeployedModel can be retrieved and used to pass to the [Chat Completions (with history)](/appstore/modules/genai/genai-for-mx/commons/#chat-completions-with-history) later in the Action Microflow.
* `New Chat with Existing Config` creates a new `ChatContext` and sets a given `ProviderConfig` to active.
* `New Chat with Additional Configs` creates a new `ChatContext`, adds a `ProviderConfig` to the `ChatContext`, and sets it to active. In addition, a list of `ProviderConfig` can be added to the `ChatContext` (non-active, but selectable in the UI).

#### SuggestedUserPrompt {#suggested-user-prompt}

Typical chat interfaces provide suggestions for messages that the user can click, as an alternative to typing their own message fully from scratch. During development, it is possible to add predefined suggested user prompts to a `ChatContext`, which at runtime will appear above the chat input box. For this, the **Add Suggested User Prompt** microflow action can be dragged and dropped from the **Toolbox in Studio Pro**. At runtime, when a user clicks such a **Suggested User Prompt**, the content of the selected prompt will automatically be used in the [action microflow](#action-microflow) for the call to the model. 

### Associating the ProviderConfig {#provider-config}

The `ProviderConfig` contains the selection of the model provider with which the AI Bot can chat. It also refers to an action microflow that is executed when the **Send** button is clicked for a `ChatContext` that has the `ProviderConfig` associated. 

A `ProviderConfig` (or specialization) can be added directly using the aforementioned [operations](#chat-context-operations) that create a new `ChatContext`. This will be adequate in most cases.
If the `ChatContext`, however, already exists and a new `ProviderConfig` needs to be added, use the **New Config for Chat** toolbox action. This action can also set the  `ProviderConfig` to be the active one for the `ChatContext` by setting the `IsActive` parameter to *true*. Additionally, for this action, you have to specify the action microflow that will be executed. 

**ChatContext_AddProviderConfig_SetActive** is the counterpart of this flow when both the `ChatContext` and the `ProviderConfig` exist already. 

### Defining and Setting the Action Microflow {#action-microflow}

The `Action Microflow` stored on a `ProviderConfig` is executed when the user clicks the **Send** button. This microflow handles the interaction between the LLM connectors and the Conversational UI entities. The **USE_ME > ConversationalUI > Action microflow examples** folder included in the Conversational UI module contains an example action microflow that is compatible with all connectors that follow GenAI Commons principles (such as [MxGenAI](/appstore/modules/genai/MxGenAI/), [OpenAI](/appstore/modules/genai/openai/), and [Amazon Bedrock](/appstore/modules/aws/amazon-bedrock/)). You can copy and modify the microflow or use it directly. 

Add the action microflow to an existing `ProviderConfig` by using the **Set Chat Action** toolbox action. Note that this action does not commit the object, so you must add a step to commit it afterward.

#### Creating a Custom Action Microflow

A typical action microflow is responsible for the following:

* Convert the `ChatContext` with user input to a `Request` structure for the chat completions operation. This module provides the **Default Preprocessing** toolbox action to take care of that in basic cases; for more advanced or custom cases you need to create your own logic based on this.
* Execute the [Chat Completions (with history)](/appstore/modules/genai/genai-for-mx/commons/#chat-completions-with-history) operation. To pass a [DeployedModel](/appstore/modules/genai/genai-for-mx/commons/#deployed-model), you can use the `ProviderConfig_DeployedModel` association of the active `ProviderConfig` for the `ChatContext`.
* Update the `ChatContext` structure based on the response so that the user can see the result in the UI. This module provides the **Update Assistant Response** microflow action in the toolbox. It is only required to execute this logic in successful model interactions, make sure to pass the response object. In the case of an unhappy scenario, the action microflow should return false and the module logic will take care of setting the applicable error status and no response object is needed. 

The example action microflow in this module, to be found in the **USE_ME > ConversationalUI > Action microflow examples** folder follows this basic structure.

If you want to create your custom action microflow, keep the following considerations in mind:

* Only one input parameter of [ChatContext](#chat-context) or a specialization is accepted.
* The return type needs to be a `Success` Boolean.
* Use the [chat context](#chatcontext-operations) and [request operations](#request-operations) to facilitate the interaction between the chat context and the model.
* The custom action microflow can only be triggered if it is set as an action microflow for the `ProviderConfig` using one of the operations mentioned before.

##### ChatContext operations {#chatcontext-operations}

The following operations can be found in the toolbox for changing the [ChatContext](#chat-context) in a (custom) action microflow:

* `Set Topic` sets the `Topic` of the `ChatContext`. This attribute can be used in the **History** sidebar while making historical chats visible to users.
* `Default Preprocessing` sets a default `Topic` for `ChatContext` and creates a sample [Request](/appstore/modules/genai/genai-for-mx/commons/#request).
* `Set ConversationID` sets the ConversationID on the `ChatContext`. Storing the ConversationID is needed for a chat with history within [Retrieve and Generate with Amazon Bedrock](/appstore/modules/aws/amazon-bedrock/#retrieve-and-generate).

##### Request Operations {#request-operations}

The following operations are used in a (custom) action microflow:

* `Create Request with Chat History` creates a [Request](/appstore/modules/genai/commons/) object that is used as an input parameter in a [Chat Completions (with history)](/appstore/modules/genai/genai-for-mx/commons/#chat-completions-with-history) operation as part of the [action microflow](#action-microflow).
* `Get Current User Prompt` gets the current user prompt. It can be used in the [action microflow](#action-microflow) because the `CurrentUserPrompt` from the chat context is no longer available.
* `Update Assistant Response` processes the response of the model and adds the new message and any sources to the UI. This is typically one of the last steps of the logic in an [action microflow](#action-microflow). It only needs to be included at the end of the happy flow of an action microflow. Make sure to pass the response object.

### Customizing styling {#customize-styling}

The ConversationalUI module comes with stylesheets that are intended to work on top of Atlas Core. You can use variables and custom classes to modify the default rendering and think of colors, sizes, and positions. To learn more about customizing styling in a Mendix app in general and targeting elements using SCSS selectors, refer to the [how-to](/howto/front-end/customize-styling-new/#add-custom-styling) page.

#### Variables {#customize-styling-variables}

The following variables have a default value defined in the Conversational UI module. You can override the values by setting a custom value in the _custom-variables.scss file or your styling module. 

| Variable name | Description |
| --- | --- |
| `chat-width` | the max-width of the chat UI in a full-page setup |
| `send-btn-size` | the height and width of the button in the user chat input box | 
| `chat-input-max-height` | the max-height of the user chat input box | 
| `chat-header-color` | the background color of the top bar of the pop-up and sidebar chat window |
| `pop-up-chat-bottom-position` | the absolute bottom position of the pop-up chat window |
| `pop-up-chat-right-position` | the absolute right position of the pop-up chat window |
| `pop-up-chat-width` | the width of the pop-up and sidebar chat window |
| `pop-up-chat-height` | the height of the pop-up chat window | 
| `chat-bubble-user-background` | the background color of a user message in the pop-up and sidebar chat | 
| `chat-bubble-assistant-background` | the background color of an assistant message in the pop-up and sidebar chat |

You can find the default values of these variables in the `_chat-variables.scss` file that is shipped with this module.

#### Creating Custom SCSS {#customize-styling-classes}

You can use the following classes in your custom stylesheets to create SCSS selectors, override the default Conversational UI styling, and modify the behavior of chat elements in your app. 

| Class name | Target element |
| --- | --- | 
| `btn-chat-popup` | the floating button that opens the pop-up chat, also see `Snippet_FloatingChatButton` |
| `chat-container` | the container around the chat, including the input box and messages |
| `messages-container` | the container around the messages inside of `chat-container` |
| `send-btn` | the button in the user chat input box | 
| `chat-btn-suggested-prompt` | a suggested prompt for the user to click instead of typing |
| `chat-input-wrapper` | the container around the user chat input box |
| `user-input-instructions` | the additional information text below the user chat input box |
| `message--assistant` | an assistant message in the conversation| 
| `chat-bubble-wrapper--assistant` | an assistant message in the pop-up and sidebar chat |  
| `message--user` | a user message in the conversation |  
| `chat-bubble-wrapper--user` | a user message in the pop-up and sidebar chat |  

#### Creating a custom page {#custom-page}

You may need to use the following classes when building a more complex custom page that includes Conversational UI components.

| Class name | Description |
| --- | --- | 
| `chat-container` | To be added to additional containers around the chat interface snippet, to make sure the height and flex-grow properties work correctly | 
| `card--full-height` | To be added to a `card` container, in case the chat interface snippet needs to be displayed as a card | 
| `layoutgrid--full-height` | To be added to any layoutgrid (1 row is supported) around the chat UI components |
| `dataview--display-contents` | To be added to any data view around chat components to prevent it from breaking the flex-flow on the page | 

### Token Consumption Monitor Snippets {#snippet-token-monitor}

A separate set of snippets has been made available to display and export token usage information in the running application. This is applicable for LLM connectors that follow the principles of [GenAI Commons](/appstore/modules/genai/genai-for-mx/commons/#token-usage) and as a result store token usage information. The following snippets can be added to (admin) pages independently from the conversation logic described in earlier sections. 

* **Snippet_TokenMonitor** - This snippet can be used to display token usage information in charts and contains several other snippets that you can use to build your token consumption monitor dashboard. To display the token usage data, users will need the `UsageMonitoring` user role.
* **Snippet_TokenMonitor_Export** - This snippet can be used to display token usage information in a grid and export it as *.xlsx*. 

### Prompt Management {#prompt-management}

The Conversational UI module comes with pages and snippets that provide the Prompt Management functionality. For more details, see [Prompt Management](/appstore/modules/genai/genai-for-mx/prompt-management/).

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}

## Troubleshooting

This section lists possible solutions to known issues.

### Chat Messages Do Not Appear in the UI

The messages that are sent and received do not show up in the user interface, even though the technical communication with the LLM is successful. 

#### Cause 

The chat UI snippets from this module rely on the height property of the parent element(s) to be defined. Any additional custom containers around the Conversational UI components might cause the `messages-container` element to shrink to zero height, which makes the messages disappear even in successful interactions.

#### Solution 

Make sure that any custom containers and layout grids that were added on your page (or the page layout for that matter) around the Conversational UI components have their `height` property defined. Useful helper classes that could be used for this are `chat-container`, `chat-card--full-height`, and `layoutgrid--full-height`. 

If needed, verify that no data view widget is breaking the flow; for example, use `dataview--display-contents`. See the example page `ConversationalUI_FullScreenChat` for a basic implementation of the mentioned elements.

### Cannot Export Usage Data for the Token Consumption Monitor

The export of usage data for the token consumption monitor does not work correctly.

#### Cause 

The [Data Widgets](https://marketplace.mendix.com/link/component/116540) module that you have installed is in an older version which does not support exporting data to *.xlsx* format from the Data Grid 2 widget.

#### Solution 

Update the [Data Widgets](https://marketplace.mendix.com/link/component/116540) module to version 2.22.0 or above.
