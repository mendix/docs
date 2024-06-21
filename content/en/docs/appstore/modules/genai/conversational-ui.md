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


## 2 Installation {#installation}
<!---
[comment]: <> TODO: 
-GenAICommons
- (NanoflowCommons, AtlasCore, WebActions are part of every starter app?)
-->

## 3 Configuration {#configuration}

<!---
[comment]: <> TODO:
-OPEN TO DISCUSS: how do we advise for the resuable ProviderConfig approach or the "one created for every new chatcontext"?
    -do we say that there are two options or go with one?

- Userroles (User vs AddonAdmin)
    -users need User role to see messages and interact with LLM
    -AddOnAdmin role can be granted if you want the admin to see user messages. Compliancy remark?


-Describe exposed (USE_ME) Pages, Snippets, Operations, Building Block (?)

-What is a ChatContext
    -Comprises chat messages between user and LLM
    -belongs to one user (entity access applied to owner)
    -can be viewed in a history sidebar and users can continue with an older chat (if implemented)
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



## 4 Read more