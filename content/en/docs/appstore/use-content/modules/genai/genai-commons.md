---
title: "GenAI Commons"
url: /appstore/modules/genai/commons/
linktitle: "GenAI Commons"
description: "Describes the purpose, configuration and usage of the GenAI Commons module from the Mendix Marketplace that allows developers to integrate GenAI common principles and patterns into their Mendix app."
weight: 50
aliases:
    - /appstore/modules/genai-commons/
---

## 1 Introduction {#introduction}

The [GenAI Commons](https://marketplace.mendix.com/link/component/227933) module combines common GenAI patterns found in a variety of generative AI models on the market. Platform-supported GenAI-connectors use the underlying data structures and their operations. This makes it easier to develop vendor agnostic AI-enhanced apps with Mendix, for example by using one of the connectors or the [Conversational UI](/appstore/modules/genai/conversational-ui/) module.

If two different connectors both adhere to the GenAI Commons module, they can be easily swapped, which reduces dependency on the model providers. In addition, the initial implementation of AI capabilities using the connectors becomes a drag and drop experience, so that developers can quickly get started. The module exposes useful operations which developers can use to build a request to a large language model (LLM), and to handle the response.

Developers who want to connect to another LLM provider or their own service are advised to use the GenAI Commons module as well. This speeds up the development and ensures that common principles are taken into account. Lastly, other developers or consumers of the connector can adapt to it more quickly.

### 1.1 Limitations {#limitations}

The current scope of the module is focused on text and image generation, as well as embeddings and knowledgebase use cases.

### 1.2 Dependencies {#dependencies}

The GenAI Commons module requires Mendix Studio Pro version [9.24.2](/releasenotes/studio-pro/9.24/#9242) or above.

You must also install and configure the [Community Commons](/appstore/modules/community-commons-function-library/) module.

## 2 Installation {#installation}

If you are starting from the [Blank GenAI app](https://marketplace.mendix.com/link/component/227934), or the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926), the GenAI Commons module is included and does not need to be installed manually.

If you start from a blank app, or have an existing project where you want to include a connector for which the GenAI Commons module is a required module, you must install GenAI Commons manually. First, install the [Community commons](/appstore/modules/community-commons-function-library/) module, and then follow the instructions in [using Marketplace content](/appstore/use-content/) to import the GenAI Commons module into your app.

## 3 Implementation {#implementation}

GenAI Commons is the foundation of chat completion implementations within the [OpenAI connector](/appstore/modules/genai/openai/) and the [Amazon Bedrock connector](/appstore/modules/genai/bedrock/), but may also be used to build other GenAI service implementations on top of it by reusing the provided domain model and exposed microflows.

Although GenAI Commons technically defines additional capabilities typically found in chat completion APIs, such as image processing (vision) and tools (function calling), it depends on the connector module of choice for whether these are actually implemented and supported by the LLM. To learn which additional capabilities a connector supports and for which models these can be used, refer to the documentation of that connector.

The GenAI Commons module is [protected](/refguide/consume-add-on-modules-and-solutions/), which means that it cannot be changed and the logic of the microflows is not visible. For information about what each exposed operation does, see [Microflows](#microflows), or refer to the documentation inside the module.

## 4 Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro. You can also download a copy of the full documentation available for your app.

### 4.1 Using the Documentation Pane

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/use-content/modules/technical-reference/doc-pane.png" class="no-border" >}}

### 4.2 Downloading a Local Copy of the Documentation

You can download a copy of the technical reference documentation for later use. Keep in mind that the documentation is regularly updated by the development team, which may cause your local copy to become outdated.

1. In the App Explorer, right-click on the name of your app.
2. Click **Export documentation**.

    {{< figure src="/attachments/appstore/use-content/modules/technical-reference/doc-export.png" class="no-border" >}}