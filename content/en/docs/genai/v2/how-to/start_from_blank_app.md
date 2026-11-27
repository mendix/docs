---
title: "Build a Chatbot from Scratch Using the Blank GenAI App"
url: /agents/agents-kit-2/how-to/blank-app/
linktitle: "Build a Chatbot Using the Blank GenAI App"
weight: 20
description: "Agents Kit 2: How to build a chatbot from the Blank GenAI App, including setting up the chat interface and configuring your LLM provider."
aliases:
    - /agents/how-to/blank-app/
    - /appstore/modules/genai/using-genai/blank-app/
    - /appstore/modules/genai/how-to/blank-app
---

## Introduction

This document explains how to build a smart app from scratch using the Blank GenAI App. Alternatively, you can begin with one of the other [Agents Kit starter apps](/agents/agents-kit-2/#starter-apps).

### Prerequisites

Before starting this guide, complete the following prerequisites:

* Be on Mendix Studio Pro 11.12 or higher
* Have intermediate knowledge of the Mendix platform – Familiarity with Studio Pro, microflows, and modules is required.
* Have a basic understanding of GenAI concepts – Review the [Enrich Your Mendix App with Agentic Capabilities](/agents/) page to gain foundational knowledge and become familiar with the key [concepts](/agents/get-started/).
* Understand large language models (LLMs) and prompt engineering – Read about [LLMs](/agents/get-started/#llm) and [prompt engineering](/agents/get-started/#prompt-engineering) to use these within the Mendix ecosystem.

### Learning Goals

By the end of this document, you will:

* Understand the core concepts of generative AI and its integration with the Mendix platform.
* Build your first augmented Mendix application using a GenAI starter app and connectors.
* Develop a solid foundation for using GenAI capabilities to address common business use cases.

## Building Your Smart App

To start building your smart app, download the [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) from Mendix Marketplace. This app provides a clean slate, so you can build your GenAI-powered application step by step. This document describes how to build a chatbot. The following image shows the final result.

{{< figure src="/attachments/genai/howto-blankapp/blank_genai_interface.jpg" alt="Chatbot interface in the running app, with a message history and a text box for entering messages" >}}

### Important Modules

The [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) has the essential Agents Kit modules preinstalled, which helps you become familiar with the GenAI functionality that Mendix offers. The preinstalled modules include the following:

* [GenAI Commons](/agents/agents-kit-2/reference-guide/commons/) – Provides pre-built operations and data structures for integration with platform-supported GenAI connectors, such as Mendix Cloud GenAI, OpenAI, or Amazon Bedrock.
* [Conversational UI](/agents/agents-kit-2/reference-guide/conversational-ui/) – Offers UI elements for chat interfaces and usage data monitoring.
* The connectors for [Mendix Cloud GenAI](/agents/agents-kit-2/mx-cloud-genai/mxgenai-connector/), [OpenAI](/agents/agents-kit-2/reference-guide/external-connectors/openai/), [Amazon Bedrock](/agents/agents-kit-2/reference-guide/external-connectors/bedrock/), [Google Gemini](/agents/agents-kit-2/reference-guide/external-connectors/gemini/), and [Mistral](/agents/agents-kit-2/reference-guide/external-connectors/mistral/) – Support the use of LLMs in your applications.
* [Agent Editor](/agents/agents-kit-2/reference-guide/agent-editor/) – Lets you define agents as documents in Studio Pro. This guide does not use it.

### Choosing the Infrastructure

Selecting the infrastructure for integrating GenAI into your Mendix application is the first step. Depending on your use case and preferences, you can choose from the following options:

* [Mendix Cloud GenAI Resource Packs](/agents/mx-cloud-genai/resource-packs/) – The [Mendix Cloud GenAI Connector](https://marketplace.mendix.com/link/component/239449) integrates LLMs by dragging and dropping common operations from its toolbox in Studio Pro.
* [OpenAI](/agents/agents-kit-2/reference-guide/external-connectors/openai/) – The [OpenAI Connector](https://marketplace.mendix.com/link/component/220472) supports both the OpenAI platform and Microsoft Foundry.
* [Amazon Bedrock](/agents/agents-kit-2/reference-guide/external-connectors/bedrock/) – The [Amazon Bedrock Connector](https://marketplace.mendix.com/link/component/215042) lets you use Amazon Bedrock's fully managed service to integrate foundation models from Amazon and leading AI providers.
* Your own connector – If you prefer a custom connector, you can integrate your chosen infrastructure. For more information, see [Build Your Own GenAI Connector](/agents/agents-kit-2/how-to/byo-connector/).

This document focuses on the Mendix Cloud GenAI, OpenAI, and Amazon Bedrock connectors. For the Google Gemini and Mistral connectors, see their reference guides: [Google Gemini](/agents/agents-kit-2/reference-guide/external-connectors/gemini/) and [Mistral](/agents/agents-kit-2/reference-guide/external-connectors/mistral/).

### Creating a Conversational UI Interface

In this section, you set up a conversational interface for your application using the **Conversational UI** module. The process involves creating a page, configuring microflows, and preparing the chat context.

#### Creating a Page

Copy the `ConversationalUI_FullScreenChat` page from **ConversationalUI** > **USE_ME** > **Conversational UI** > **Pages** into your module, which in this example is named `MyFirstBot`. If you do not plan to change the page, you can use it directly without copying.

#### Configuring the Page Parameter and Chat Box Settings

The **ConversationalUI_FullScreenChat** page contains a data view that uses a `ChatContext` object as a parameter, so you cannot add it directly to the navigation. Use a template microflow instead:

1. Locate the pre-built microflow `ACT_FullScreenChat_Open` in **ConversationalUI** > **USE_ME** > **Conversational UI** > **Pages**. Right-click the microflow, select **Include in project**, and then copy it into your `MyFirstBot` module.
2. In the **Show page** activity of the microflow, set the page to `ConversationalUI_FullScreenChat` from your `MyFirstBot` module or the `ConversationalUI` module.

#### Customizing the System Prompt (Optional) {#changing-system-prompt}

To tailor your application's behavior, you can customize the [system prompt](/agents/prompt-engineering/#system-prompt) to make it more specific to your use case.

{{< figure src="/attachments/genai/howto-blankapp/blank_genai_systemprompt.png" alt="The ChatContext action in the ACT_FullScreenChat_Open microflow with the System prompt parameter" >}}

1. In your `MyFirstBot` module, open the `ACT_FullScreenChat_Open` microflow.
2. Locate the **ChatContext** action.
3. In this action, find the `System prompt` parameter, which has an empty value by default.
4. Update the `System prompt` value to reflect your desired behavior. For example:
    * For a customer service chatbot: "You are a helpful customer service assistant providing answers to common product questions."
    * For a travel advisor assistant: "You are a travel advisor assistant providing travel tips and destination information."
    * For a simple assistant: "You are an assistant."
5. Save the changes.

#### Configuring Navigation

In the app's **Navigation**, configure **Home** to call the `ACT_FullScreenChat_Open` microflow from your `MyFirstBot` module when a user clicks it.

{{% alert color="warning" %}}
You may encounter an error about allowed roles. To resolve this, go to the **Properties** pane and update the **Navigation** > **Visible for** setting to include the appropriate user roles.
{{% /alert %}}

### Configuring Infrastructure {#config}

Configure the infrastructure you chose in [Choosing the Infrastructure](#choosing-the-infrastructure) at runtime.

#### Mendix Cloud GenAI Configuration

Follow these steps to configure the Mendix Cloud GenAI Resource Packs for your application. For more background information, see the [Configuration](/agents/agents-kit-2/mx-cloud-genai/mxgenai-connector/#configuration) section of *Mendix Cloud GenAI Connector*.

1. Run the application locally.
2. Configure the Mendix Cloud GenAI settings:
    * In the running app, click **Settings** ({{< icon name="cog" >}}) and open **Mendix Cloud GenAI Configuration**.
    * Click **Import key** and paste the key from the Mendix Portal. For more information, see [Navigate through the Mendix Cloud GenAI Portal](/agents/mx-cloud-genai/Navigate-MxGenAI/).
3. Test the configuration:
    * Find the configuration you created, and click **Test Key** on the right side of the row.
    * If an error occurs, check the **Mendix Console** for more details on resolving the issue.

#### OpenAI Configuration

Follow these steps to configure OpenAI for your application. For more information, see the [Configuration](/agents/agents-kit-2/reference-guide/external-connectors/openai/#configuration) section of *OpenAI*.

1. Run the application locally.
2. Configure the OpenAI settings:
    * In the running app, click **Settings** ({{< icon name="cog" >}}) and open **OpenAI Configuration**.
    * Click **New** and provide the following details:
        * **Display Name** – A reference name to identify this configuration (for example, "My OpenAI Configuration").
        * **API Type** – Choose **OpenAI** or **Azure OpenAI**.
        * **Endpoint** – The endpoint URL for your selected API type.
        * **API key** – The API key for authentication.
        * **Azure key type** – If you use Microsoft Foundry, choose between **OpenAI** and **Azure OpenAI**.
    * Click **Save**. A dialog box opens for adding deployed models.
    * Click **Add deployed model** and provide the following details (optional for the OpenAI API type):
        * **Display name** – A reference name for the deployed model (for example, "GPT-4 Conversational").
        * **Deployment Name** – The deployed model (for example, `gpt-4o`).
        * **Output modality** – The type of output (for example, Text, Embeddings, or Image).
        * **Support system prompt** – Whether the model supports system prompts.
        * **Support conversations with history** – Whether the model can use earlier messages in the chat as context.
        * **Support function calling** – Whether the model can call functions during the conversation based on the user input.
        * **Azure API Version** – The version of the API you use (for example, `2024-10-21`).
        * **Is active** – Whether the deployed model is active and available in the app.
    * Click **Save** to store your configuration.
3. Test the configuration:
    * Find the configuration you created, click **More Options** ({{< icon name="three-dots-menu-horizontal" >}}) on the right side, and select **Test**.
    * In the **Test configuration** dialog box, select the deployed model and click **Test**.
    * If an error occurs, check the **Mendix Console** for more details on resolving the issue.

#### Amazon Bedrock Configuration

Follow these steps to configure Amazon Bedrock for your application. For more information, see the [Configuration](/agents/agents-kit-2/reference-guide/external-connectors/bedrock/#configuration) section of *Amazon Bedrock*.

1. Set up AWS credentials:
    * In Studio Pro, go to **App** > **Settings** > **Configurations**.
    * Open the **Constants** tab and add the following constants. This example uses static credentials. For more information about temporary credentials, see the [Implementing Temporary Credentials](/appstore/modules/aws/aws-authentication/#session) section of *AWS Authentication*.
        * `AWSAuthentication.AccessKey` – The access key from the Amazon Bedrock console.
        * `AWSAuthentication.SecretAccessKey` – The secret access key from the Amazon Bedrock console.
    * Save your changes.
2. Run the application locally.
3. Configure the Bedrock settings:
    * In the running app, click **Settings** ({{< icon name="cog" >}}) and open **Amazon Bedrock Configuration**.
    * Click **New/Edit** and provide the following details:
        * **Region** – The AWS Region where your Bedrock service is hosted.
        * **Use Static Credentials** – Enable this option if you use the static AWS credentials configured in the app.
    * Click **Save & Sync Data** to apply your changes.

{{% alert color="info" %}}
If you encounter issues while using the Amazon Bedrock connector, see the [Troubleshooting](/agents/agents-kit-2/reference-guide/external-connectors/bedrock/#troubleshooting) section of *Amazon Bedrock*.
{{% /alert %}}

## Testing and Troubleshooting

Before testing your app, complete the Mendix Cloud GenAI, OpenAI, or Amazon Bedrock configuration.

To test the chatbot, click **Home** to open the chatbot interface. Start interacting with your chatbot by typing in the chat box.

If an error occurs, check the **Mendix Console** in Studio Pro for details to help resolve the issue.
