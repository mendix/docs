---
title: "Build a Chatbot from Scratch Using the Blank GenAI App"
url: /appstore/modules/genai/using-genai/blank-app
linktitle: "Build a Chatbot Using the Blank GenAI App"
weight: 20
description: "A tutorial that describes how to get started building a smart app from a Blank GenAI App"
---

## Introduction

This document guides you on building a smart app from scratch using a blank GenAI app template. Alternatively, you can use a starter app template to begin your build. For more details, see [Build a Smart App Using a Starter Template](/appstore/modules/genai/using-genai/starter-template/).

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

## Building Your Smart App

To start building your smart app with a blank GenAI App template, download the [Blank GenAI App Template](https://marketplace.mendix.com/link/component/227934) from the Mendix Marketplace. This template provides a clean slate, enabling you to build your GenAI-powered application step by step. You can see the result in the image below.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-blankapp/blank_genai_interface.jpg" >}}

### Important Modules

The [Blank GenAI App Template](https://marketplace.mendix.com/link/component/227934) includes an essential pre-installed bundle called [GenAI For Mendix](https://marketplace.mendix.com/link/component/227931), which is beneficial to familiarize yourself with the GenAI functionalities Mendix can offer, as it includes:

* The [GenAI Commons](/appstore/modules/genai/commons/) module: provides pre-built operations and data structures for seamless integration with platform-supported GenAI connectors, such as the Mendix Cloud GenAI, OpenAI, or Amazon Bedrock.

* The [Conversational UI](/appstore/modules/genai/conversational-ui/) module: offers UI elements for chat interfaces and usage data monitoring.

* The [Mendix Cloud GenAI Resources Packs](/appstore/modules/genai/MxGenAI/) connector: supports the usage of LLMs in your applications.

### Choosing the Infrastructure

Selecting the infrastructure for integrating GenAI into your Mendix application is the first step. Depending on your use case and preferences, you can choose from the following options:

* [Mendix Cloud GenAI Resources Packs](/appstore/modules/genai/MxGenAI/): Part of [GenAI For Mendix](https://marketplace.mendix.com/link/component/227931), integrates LLMs by dragging and dropping common operations from its toolbox in Studio Pro.
* [OpenAI](/appstore/modules/genai/openai/): The [OpenAI Connector](https://marketplace.mendix.com/link/component/220472) supports both OpenAI’s platform and Azure’s OpenAI service.

{{% alert color="info" %}}
To start, you can sign up for a free trial with OpenAI and receive credits valid for three months from the account creation date. For more details, see [OpenAI API reference](https://platform.openai.com/docs/api-reference/authentication).
{{% /alert %}}

* [Amazon Bedrock](/appstore/modules/genai/bedrock/): The [Amazon Bedrock Connector](https://marketplace.mendix.com/link/component/215042) allows you to leverage Amazon Bedrock’s fully managed service to integrate foundation models from Amazon and leading AI providers. 

* Your Own Connector: Optionally, if you prefer a custom connector, you can integrate your chosen infrastructure. However, this document focuses on the OpenAI and Bedrock connectors, as they offer comprehensive support and ease of use to get started.

### Creating a Conversational UI interface

In this section, you can set up a conversational interface for your application using the **Conversational UI** module. The process involves creating a page, configuring microflows, and preparing the chat context.

#### Creating a Page
 
Copy the `ConversationalUI_FullScreenChat` page from the **ConversationalUI > USE_ME > Conversational UI > Pages** into your module, which can be named `MyFirstBot` module. Alternatively, if you do not plan to make any changes to the page, you can use it directly without copying.

#### Configuring the Page Parameter and Chat Box Settings

Since the **ConversationalUI_FullScreenChat** page contains a **Data View** using a `ChatContext` object as a parameter, it cannot be added directly to the navigation. Therefore, a template microflow can be used.

1. Locate the pre-built microflow `ACT_FullScreenChat_Open` in **ConversationalUI > USE_ME > Pages**. Right-click on the microflow and select **Include in project** to copy it into your `MyFirstBot` module.
2. Locate the show Page action for `ConversationalUI_FullScreenChat`. Inside this action, change the page to `ConversationalUI_FullScreenChat` from your `MyFirstBot` module or the `ConversationalUI` module.

#### Customizing the System Prompt (Optional)

To tailor your application's behavior, you can customize the [System Prompt](/appstore/modules/genai/prompt-engineering/#system-prompt) to make it more specific to your use case:

##### Changing the System Prompt {#changing-system-prompt}

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-blankapp/blank_genai_systemprompt.png" >}}

1. Open the copied `ACT_FullScreenChat_Open` microflow from your `MyFirstBot` module.
2. Locate the **ChatContext** action.
3. Inside this action, find the `System prompt` parameter, which has default an empty value.
4. Update the `System prompt` value to reflect your desired behavior. For example:
   * For a customer service chatbot: *'You are a helpful customer service assistant providing answers to common product questions.'*
   * For a travel advisor assistant: *'You are a travel advisor assistant providing travel tips and destination information.'*
   * Or keep it simple with *'You are an assistant.'*
5. Save the changes.

#### Navigation Configuration

Click **Home** and select the `ACT_FullScreenChat_Open` microflow from your `MyFirstBot` module to configure the **Navigation**.

{{% alert color="warning" %}}
You may encounter an error about allowed roles. To resolve this, go to the page **Properties** and update the **Navigation > Visible for** setting to include the appropriate user roles.
{{% /alert %}}

### Infrastructure Configuration {#config}

#### Mendix Cloud GenAI Configuration

Follow these steps to configure the Mendix Cloud GenAI Resources Packs for your application and more background information, look at the [Mendix Cloud GenAI Configuration](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#configuration) documentation:

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
         * If using Azure OpenAI, add the **Azure key type** by choosing between **OpenAI** or **Azure OpenAI**.

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

#### Amazon Bedrock Configuration

Follow the steps below to configure Amazon Bedrock for your application:

1. Set Up AWS credentials:

   * Navigate to **App Settings** > **Configurations** in Studio Pro.
   * Go to the **Constants** tab and add the following (In this example, static credentials are used. For more details on the temporary credentials, see the [Implementing Temporary Credentials](/appstore/modules/aws/aws-authentication/#session) section of the *AWS Authentication*).

     * `AWSAuthentication.AccessKey`: Enter the access key obtained from the Amazon Bedrock console.
     * `AWSAuthentication.SecretAccessKey`: Enter the secret access key from the Amazon Bedrock console.

   * Save your changes.

2. Run the application locally.

3. Configure Bedrock Settings:

   * In the chatbot-like application interface, go to the **Settings** ({{% icon name="cog" %}}) icon, and find the **Amazon Bedrock Configuration**.
   * Click **New/Edit** and provide the following details:
     * **Region**: Select the AWS region where your Bedrock service is hosted.
     * **Use Static Credentials**: Enable this option if you are using static AWS credentials configured in the app.
   * Click **Save & Sync Data** to ensure your changes are applied.

{{% alert color="info" %}}
If you encounter any issues while using the Amazon Bedrock connector, see the [Troubleshooting](/appstore/modules/aws/amazon-bedrock/#troubleshooting) section of the *Amazon Bedrock*.
{{% /alert %}}

## Testing and Troubleshooting

Before testing your app, complete the Mendix Cloud GenAI, OpenAI or Bedrock configuration.

To test the Chatbot, navigate to the **Home** icon to open the chatbot interface. Start interacting with your chatbot by typing in the chat box.

Congratulations! Your chatbot is now ready to use.

If an error occurs, check the **Mendix Console** in Studio Pro for details to help resolve the issue.
