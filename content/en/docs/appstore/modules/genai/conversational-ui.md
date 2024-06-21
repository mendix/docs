---
title: "Conversational UI"
url: /appstore/modules/genai/conversational-ui
linktitle: "Conversational UI"
weight: 3
description: "Describes the Conversational UI marketplace module that assists developers in implementing conversational use cases such as an AI Bot."
---

## 1 Introduction {#introduction}
The Conversational UI module helps developers to create an AI based Chat UI with snippets, building blocks and page templates. Integrate with any LLM and knowledge base to create your own full screen, sidebar or modal chat.

<!---
[comment]: <> TODO: 
-refer to AI Bot Starter App as a starting point or
- the OpenAI Showcase app for examples.

-refer to GenAICommons? as dependency and that there are operations that can be useful when implementing Conv.UI?

-refer to OpenAI Connector or Bedrock Connector to name the platform supported connectors that make an integration easy?

-explain intend
-->

### 1.1 Typical Use Cases {#use-cases}

* Chat-interface for users to chat with Large Language Models (LLM). 
* Possibility to include advanced capabilities to control the model's behavior, for example by setting the temperature parameter.
* Easily extend the chat interface with advanced concepts, such as RAG or the ReAct pattern (see [GenAI Concepts](/appstore/modules/genai/concepts/)).

### 1.2 Features {#features}

* UI components to easily drag and drop construct your pages such as
    * Layouts to have a sidebar or floating popup chat
    * Snippets to be used directly on your pages, for example to display messages or history sidebar
    * Pages that you can use in your navigation to enable a basic chat
* Domain model to store the chat conversations and additional information
* Operations to construct the request to the LLM and the data to display in the UI

### 1.3 Limitations {#limitations}
This module is intended to enable chat interactions between a user and an LLM. Conversations between two human users is not in scope.

### 1.4 Prerequisites {#prerequisites}

In order to use the Conversational UI module, you are advised to use a connector that is compatible with GenAI Commons. Mendix supports out of the box integration with either [(Azure) OpenAI](/appstore/modules/genai/openai/) or [AWS Bedrock](/appstore/modules/aws/amazon-bedrock/).

### 1.5 Dependencies {#dependencies}

* Mendix Studio Pro version [9.24.2](/releasenotes/studio-pro/9.24/#9242) or higher
* [Atlas Core](https://marketplace.mendix.com/link/component/117187)
* [GenAI Commons]()
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)
* [Web Actions](https://marketplace.mendix.com/link/component/114337)

All of the above are aleady part of the [Blank GenAI App]() and the [AI Bot Starter App]().
<!---
[comment]: <> TODO: Insert links to MP
-->


## 2 Installation {#installation}

* Mendix Studio Pro version [9.24.2](/releasenotes/studio-pro/9.24/#9242) or higher
* [Atlas Core](https://marketplace.mendix.com/link/component/117187)
* [GenAI Commons]()
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)
* [Web Actions](https://marketplace.mendix.com/link/component/114337)

All of the above are aleady part of the [Blank GenAI App]() and the [AI Bot Starter App]().
Follow the instructions in [Using Marketplace Content](/appstore/overview/use-content/) to import the Conversational UI into your existing app.
<!---
[comment]: <> TODO: Insert links to MP
-->


## 3 Configuration {#configuration}

### 3.1 Module Roles {#module-roles}

Make sure that the module role `User` is part of the the user roles, that are intended to chat with the LLM. Optionally, the role `_addOn_ReadAll` can additionally be granted to admin roles, so that users with that role can read all messages.

| Module role      | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| User             | Role needed for every user that should be able to interact with the chat components. Users can only read their own messages (and related data).                                                                                          |
| _addOn_ReadAll   | Role can be granted additionally. Users with both roles can read all data. |

#### 3.2 ChatContext {#chat-context}

The `ChatContext` is the central entity in the UI and microflows. It can only be viewed by the owner (see [Module Roles](#module-roles) for exceptions), for example via the `Snippet_ChatContext_HistorySideBar` snippet. The object needs to be created for every new chat interaction and comprises the `messages` that are sent to and received from the LLM. A `ProviderConfig` should be associated via `ChatContext_ProviderConfig_Active` in order to execute the correct [action microflow](#action-microflow).

If you need additional attributes or associations on the `ChatContext`, we advise to use an extension entity that refers to the object which can then be retrieved and altered when needed (for example in the action microflow). This pattern was implemented in the [AI Bot Starter App]().
<!---
[comment]: <> TODO: Insert links to MP
-->

#### 3.2.1 Source {#source}

`Sources` can be added to a message and can then be displayed in the UI for the user. This might increase the understanding of the reasoning process, why an LLM came to the response. The content of the sources can come from a knowledge base or the LLM (depends on the specific implementation).

#### 3.2.2 SuggestedUserPrompt {#suggested-user-prompt}

Can be added via `ChatContext: Add Suggested User Prompt` to the new `ChatContext`. They appear as button for new chats. When clicked, the content of the button will be sent as user prompt to the LLM (via the [action microflow](#action-microflow)).


#### 3.3 ProviderConfig {#provider-config}
The `ProviderConfig` refers to the action microflow that will be executed when the send button is clicked. When you create the object, use `ProviderConfig: Set Action Microflow` to associate to the action microflow. You could store additional information, such as connection details, on the `ProviderConfig` by using a specialization and adding the necessarry fields.

#### 3.3.1 Action Microflow {#action-microflow}
The `Action Microflow` is executed via the send button and handles the interaction with the LLM's connectors and the Conversational UI entities. An example for each [OpenAI](/appstore/modules/genai/openai/) and [AWS Bedrock](/appstore/modules/aws/amazon-bedrock/) are provided in the `USE_ME` folder that can be seen as inspiration (copy and modify) or directly for test-purposes.

Note the following when developing your own custom action microflow:
* Only one input parameter of [ChatContext](#chat-context) is accepted.
* The return type needs to be a `Success` boolean.
* Use the `ChatContext: Update Assistant Response` operation at the end to process the assistant's response
* When creating the `ProviderConifg`, use `ProviderConfig: Set Action Microflow` to set the microflow


## 4 Components {#components}

### 4.1 Pages


### 4.2 Snippets

### 4.3 Operations



<!---
[comment]: <> TODO:
-OPEN TO DISCUSS: how do we advise for the resuable ProviderConfig approach or the "one created for every new chatcontext"?
    -do we say that there are two options or go with one?

- Userroles (User vs AddonAdmin)
    -users need User role to see messages and interact with LLM
    -AddOnAdmin role can be granted if you want the admin to see user messages. Compliancy remark?


-Describe exposed (USE_ME) Pages, Snippets, Operations, Building Block (?)

-What is a ProviderConfig
    -Makes sure that the conntection and model details are conntected to the ChatContext (that is in the UI and starting point in the action MF)
    -If the general ProviderConfig is not sufficient, we recommend to create a specialization and add necessary attributes/associations
    -refers to the Action Microflow
    -might be selectable for users on the page, might be selected in microflows in the backend
-What is an Action Microflow
    -will be executed when the send button is clicked
    -ProviderConfig stores which microflow will be executed
    -Only has a "ChatContext" as param and output: bool
    -refer to example flow, some general tips/structure

-Source
    -can enrich messages with additional information
    -reference to GenAICommons or the example in the showcase? Or to Retrieve and Generate?

-AdvancedSettings:
    -made to expose to UI or usable in the backend to configure advanced settings (currently only temperature via a slider)


-SuggestedUserPrompt
    -Can be attached to new ChatContexts to suggest prompts to users


-General styling tips (apart from using the example pages either directly or for insipration)


-->


<!---
[comment]: <> ##4 Technical Reference (Not in scope)

-->



## 5 Read more