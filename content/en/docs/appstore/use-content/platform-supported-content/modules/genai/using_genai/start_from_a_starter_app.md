---
title: "Build a Chatbot Using the AI Bot Starter App"
url: /appstore/modules/genai/using-genai/starter-template
linktitle: "Build a Chatbot Using the AI Bot Starter App"
weight: 10
description: "A tutorial that describes how to get started building a smart app with a starter template"
---

## Introduction

This document guides on building a smart app using a starter template. Alternatively, you can create your smart app from scratch using a blank GenAI app template. For more details, see [Build a Smart App from a Blank GenAI App](/appstore/modules/genai/using-genai/blank-app/).

### Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

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

* [OpenAI](/appstore/modules/genai/openai/): The [OpenAI Connector](https://marketplace.mendix.com/link/component/220472?_gl=1*1gbywo4*_gcl_au*NjUwMzI0NzA0LjE3MzI2MjkxMTI.) supports OpenAI’s platform and Azure’s OpenAI service.

{{% alert color="info" %}}
To start, you can sign up for a free trial with OpenAI and receive credits valid for three months from the account creation date. For more details, see the [OpenAI API reference](https://platform.openai.com/docs/api-reference/authentication).
{{% /alert %}}

* [Amazon Bedrock](/appstore/modules/genai/bedrock/): The [Bedrock Connector](https://marketplace.mendix.com/link/component/215042?_gl=1*yogwo1*_gcl_au*NjUwMzI0NzA0LjE3MzI2MjkxMTI.) allows you to leverage Amazon Bedrock’s fully managed service to integrate foundation models from Amazon and leading AI providers. 

* Your Own Connector: Optionally, if you prefer a custom connector, you can integrate your chosen infrastructure. However, this document focuses on the OpenAI and Bedrock connectors, as they offer comprehensive support and ease of use to get started.

### Getting Started

Download the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) from the Marketplace and configure the **encryption key** in the **App Settings**. Follow the steps below based on the infrastructure you chose.

#### OpenAI Configuration

Follow the steps below to configure OpenAI for your application. For more information, see the [Configuration](/appstore/modules/genai/openai/#configuration) section of the *OpenAI*.

1. Run the application locally.

2. Configure OpenAI Settings:

   * In the chatbot-like application interface, go to the **Settings** ({{% icon name="cog" %}}) icon, and find the **OpenAI Configuration**.
   * Click **New** and provide the following details:
     * **Display Name**: A reference name to identify this configuration (for example, "My OpenAI Configuration").
     * **API Type**: Choose between **OpenAI** or **Azure OpenAI**.
     * **Endpoint**: Enter the endpoint URL for your selected API type.
     * **Token**: Provide the API key for authentication.
     * If using Azure OpenAI, add:
       * **Deployment Name**: Specify the deployed model (for example, *gpt-4o*, *gpt-3.5-turbo*, etc.)
       * **API Version**: Provide the version of the API you are using (for example, *2024-06-01*, *2024-10-21*, etc.)

   * Click **Save** to store your configuration.

3. Test the Configuration:

   * Select the configuration you created, and click **Test Configuration**.
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

Before starting the bot configuration, ensure that the OpenAI or Bedrock configuration is complete.

1. In the **Administration** menu, go to the **Bot Configuration**, and click **New**.
2. Enter the following details:

     * **Display Name**: A reference name for the bot configuration (for example, "Configuration Bot").
     * **Architecture**: Select **OpenAI** or **Bedrock** based on your choice.
     * **Is Selectable in UI**: Enable this option to allow the end user to select this configuration.
     * **Configuration**: Select the OpenAI or Bedrock configuration you just created.
     * **Action Microflow**: Choose the provided microflow, `ChatContext_ChatWithHistory_ActionMicroflow`.

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
