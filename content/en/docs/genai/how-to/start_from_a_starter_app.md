---
title: "Build a Chatbot Using the AI Bot Starter App"
url: /appstore/modules/genai/how-to/starter-template
linktitle: "Build a Chatbot Using the AI Bot Starter App"
weight: 10
description: "A tutorial that describes how to get started building a smart app with a starter template"
aliases:
    - /appstore/modules/genai/using-genai/starter-template/
---

## Introduction

This document guides on building a smart app using a starter template. Alternatively, you can create your smart app from scratch using a blank GenAI app template. For more details, see [Build a Smart App from a Blank GenAI App](/appstore/modules/genai/how-to/blank-app/).

### Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* Be on Mendix Studio Pro 10.12.4 or higher.

* Intermediate knowledge of the Mendix platform: Familiarity with Mendix Studio Pro, microflows, and modules is required.

* Basic understanding of GenAI concepts: Review the [Enrich Your Mendix App with GenAI Capabilities](/appstore/modules/genai/) page to gain foundational knowledge and become familiar with the key [concepts](/appstore/modules/genai/get-started/).

* Understanding Large Language Models (LLMs) and Prompt Engineering: Learn about [LLMs](/appstore/modules/genai/get-started/#llm) and [prompt engineering](/appstore/modules/genai/get-started/#prompt-engineering) to effectively use these within the Mendix ecosystem.

### Learning Goals

By the end of this document, you will:

* Understand the core concepts of Generative AI and its integration with the Mendix platform.

* Build your first augmented Mendix application using GenAI starter apps and connectors.

* Develop a solid foundation for leveraging GenAI capabilities to address common business use cases.

## Building Your Smart App with a Starter Template

To simplify your first use case, start building a chatbot using the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926). This pre-built template streamlines the process, allowing you to quickly integrate AI capabilities into your application. You can see the result in the image below.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-starterapp/starter_genai_interface.jpg" >}}

### Choosing the Infrastructure

Selecting the infrastructure for integrating GenAI into your Mendix application is the first step. Depending on your use case and preferences, you can choose from the following options:

* [Mendix Cloud GenAI Resources Packs](/appstore/modules/genai/mx-cloud-genai/resource-packs/): The [Mendix Cloud GenAI Connector](https://marketplace.mendix.com/link/component/239449) integrates LLMs by dragging and dropping common operations from its toolbox in Studio Pro.

* [OpenAI](/appstore/modules/genai/openai/): The [OpenAI Connector](https://marketplace.mendix.com/link/component/220472) supports OpenAI's platform and Microsoft Foundry.

* [Amazon Bedrock](/appstore/modules/genai/bedrock/): The [Amazon Bedrock Connector](https://marketplace.mendix.com/link/component/215042) allows you to leverage Amazon Bedrock’s fully managed service to integrate foundation models from Amazon and leading AI providers. 

* Your Own Connector: Optionally, if you prefer a custom connector, you can integrate your chosen infrastructure. However, this document focuses on the platform-supported connectors, as they offer comprehensive support and ease of use to get started.

### Getting Started

Follow the steps below to set up the app.

1. Download the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) from the Marketplace.

2. Configure the `EncryptionKey` in the **App Settings** in Studio Pro. Make sure that it is 32 characters long. For more information, see the [EncryptionKey Constant](/appstore/modules/encryption/#encryptionkey-constant) section of *Encryption*. 

Next, follow the steps below based on the infrastructure you chose.

#### Mendix Cloud GenAI Configuration

Follow these steps to configure the Mendix Cloud GenAI Resources Packs for your application and for more background information, look at the [Mendix Cloud GenAI Configuration](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#configuration) documentation:

1. Run the application locally.

2. Configure the Mendix Cloud GenAI Settings:
   * In the chatbot-like application interface, go to **Administration** icon, and find the **Mendix Cloud GenAI Configuration**.
   * Select **Import key** and paste the key from the Mendix Portal given to you.

3. Test the Configuration:
   * Find the configuration you created, and select **Test Key** on the right side of the row.
   * If an error occurs, check the **Mendix Console** for more details on resolving the issue.

#### OpenAI Configuration

Follow the steps below to configure OpenAI for your application. For more information, see the [Configuration](/appstore/modules/genai/reference-guide/external-connectors/openai/#configuration) section of the *OpenAI*.

1. Run the application locally.

2. Configure OpenAI Settings:

   * In the chatbot-like application interface, go to the **Administration** ({{% icon name="cog" %}}) icon, and find the **OpenAI Configuration**.
   * Click **New** and provide the following details:
     * **Display Name**: A reference name to identify this configuration (for example, "My OpenAI Configuration").
     * **API Type**: Choose between **OpenAI** or **Azure OpenAI**.
     * **Endpoint**: Enter the endpoint URL for your selected API type.
     * **API key**: Provide the API key for authentication.
         * If using Microsoft Foundry, add the **Azure key type** by choosing between **OpenAI** or **Azure OpenAI**.

     * After saving the changes, a new pop-up will appear to add the deployment models. Select **Add deployed model** and provide the following details (optional for the OpenAI API Type):
         * **Display name**: A reference name for the deployed model (e.g., "GPT-4 Conversational").
         * **Deployment Name**: Specify the deployed model (for example, *gpt-4o*, *gpt-3.5-turbo*, etc.)
         * **Output modality**: Indicate the type of output (e.g., Text, Embeddings, Image).
         * **Support system prompt**: Indicate whether the model supports system prompts.
         * **Support conversations with history**: Indicate whether the model can remember and utilize previous interactions in a conversation by referring back to earlier messages in the chat.
         * **Support function calling**: Indicate whether the model can invoke different functions during the conversation based on the user input.
         * **Azure API Version**: Provide the version of the API you are using (for example, *2024-06-01*, *2024-10-21*, etc.)
         * **Is active**: Indicate whether the deployment model should be active to be used in the app.

   * Click **Save** to store your configuration.

3. Test the Configuration:

   * Find the configuration you created, click the three dots on the right side, and select **Test**.
   * In the **Test configuration**, select the deployed model and press **Test**.
   * If an error occurs, check the **Mendix Console** for more details on resolving the issue.

#### Bedrock Configuration

Follow the steps below to configure Amazon Bedrock for your application:

1. Set Up AWS credentials:

   * Navigate to **App Settings** > **Configurations** in Studio Pro.
   * Go to the **Constants** tab and add the following (In this example, static credentials are used. For more details on the temporary credentials, see the [Implementing Temporary Credentials](/appstore/modules/aws/aws-authentication/#session) section of the *AWS Authentication*).

     * `AWSAuthentication.AccessKey`: Enter the access key obtained from the Amazon Bedrock console.
     * `AWSAuthentication.SecretAccessKey`: Enter the secret access key from the Amazon Bedrock console.

   * Save your changes.

2. Run the application locally.

3. Configure Bedrock settings:

   * In the chatbot-like application interface, go to **Administration** > **Amazon Bedrock Configuration**.
   * Click **New/Edit** and provide the following details:
     * **Region**: Select the AWS region where your Bedrock service is hosted.
     * **Use Static Credentials**: Enable this option if you are using static AWS credentials configured in the app.
   * Click **Save & Sync Data** to ensure your changes are applied.

### Bot Configuration

Before starting the bot configuration, ensure that the Mendix Cloud GenAI, OpenAI or Bedrock configuration is complete.

1. In the **Administration** menu, go to the **Bot Configuration**, and click **New**.
2. Enter the following details:

     * **Display Name**: A reference name for the bot configuration (for example, "Mendix Cloud GenAI Configuration Bot").
     * **Is Selectable in UI**: Enable this option to allow the end user to select this configuration.
     * **Model**: Select the  Mendix Cloud GenAI, OpenAI, or Bedrock model you just created.
     * **Action Microflow**: Choose the provided microflow (e.g.,  `ChatContext_ChatWithHistory_ActionMicroflow`).

3. Save your changes, and optionally set it as the default bot configuration by selecting **Make Default** on the Bot Configuration page.

## Testing and Troubleshooting

Follow the steps below to test the chatbot:

1. Navigate to the **Chat** option in the top menu to open the chatbot interface.
2. In the **Configuration** box:
     * Select your bot configuration.
     * Optionally, choose instructions for the LLM to follow.
3. Start interacting with your chatbot by typing in the chat box.
4. For additional testing, create a custom instruction for the LLM, such as: 'You are a travel advisor assistant. Your role is to provide travel tips and destination information.'

Congratulations! Your chatbot is now ready to use.

If an error occurs, check the **Mendix Console** in Studio Pro for details to help resolve the issue.
