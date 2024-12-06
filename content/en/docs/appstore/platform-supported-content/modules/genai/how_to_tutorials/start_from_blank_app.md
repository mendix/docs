---
title: "How to build a Smart App from the Blank GenAI App"
url: /appstore/modules/genai/genai-howto-blankapp/
linktitle: "How to build a Smart App from a Blank GenAI App"
weight: 10
description: "A tutorial that describes how to get started building a smart app from a Blank GenAI App"
---

## Introduction

This guide aims to help you step out of your comfort zone and begin building a smart app from scratch. If you find this process challenging, please refer to the documentation on [How to build a Smart App using the Starter Template](/appstore/modules/genai/genai-howto-starterapp/) for additional support.

### Pre-requisites

Before diving into this guide, ensure you meet the following requirements:

- **Intermediate knowledge of the Mendix platform**: Familiarity with Mendix Studio Pro, microflows, and modules.

- **Basic understanding of GenAI concepts**: Review the [Enrich Your Mendix App with GenAI Capabilities](/appstore/modules/genai/) page for foundational knowledge and familiarized yourself with the [concepts](/appstore/modules/genai/using-gen-ai/).

- **Understanding Large Language Models (LLMs) and Prompt Engineering**: Learn about [LLMs](/appstore/modules/genai/using-gen-ai/#llm) and [prompt engineering](/appstore/modules/genai/using-gen-ai/#prompt-engineering) for use within the Mendix ecosystem.

### Learning Goals

By following this tutorial, you will:

- **Understand the core concepts** of Generative AI and its integration with the Mendix platform.

- **Build your first augmented Mendix application** using GenAI starter apps and connectors.

- **Gain a solid foundation** in leveraging GenAI capabilities to address common business use cases.

## Building Your Smart App with a Blank GenAI App Template

To start building your smart app with a blank GenAI App template, download the [Blank GenAI App Template](https://marketplace.mendix.com/link/component/227934) from the Mendix Marketplace. This template provides a clean slate, enabling you to build your own GenAI-powered application step by step. The end result can be visualized in the image below.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-blankapp/blank_genai_interface.jpg" >}}

### Important Modules

The [Blank GenAI App Template](https://marketplace.mendix.com/link/component/227934) includes two essential modules that are pre-installed, but it is beneficial to be familiar with.

- The [**GenAI Commons**](https://marketplace.mendix.com/link/component/227933) module, which provides pre-built operations and data structures for seamless integration with platform-supported GenAI connectors like OpenAI or Amazon Bedrock.
- The [**Conversational UI**](https://marketplace.mendix.com/link/component/227931) module, which provides UI elements for chat interfaces and monitoring usage data. Download it from the Mendix Marketplace.

### Choosing the Infrastructure

Selecting the infrastructure for integrating GenAI into your Mendix application is the first step. Depending on your use case and preferences, you can choose from the following options:

- [OpenAI](/appstore/modules/genai/openai/): The [OpenAI Connector](https://marketplace.mendix.com/link/component/220472?_gl=1*1gbywo4*_gcl_au*NjUwMzI0NzA0LjE3MzI2MjkxMTI.) supports OpenAI’s platform and Azure’s OpenAI service.

{{% alert color="info" %}}
To start, you can sign up for a free trial with OpenAI and receive credits valid for three months from the account creation date. For more details, see the [OpenAI API reference](https://platform.openai.com/docs/api-reference/authentication).
{{% /alert %}}

- [Amazon Bedrock](/appstore/modules/genai/bedrock/): The [Bedrock Connector](https://marketplace.mendix.com/link/component/215042?_gl=1*yogwo1*_gcl_au*NjUwMzI0NzA0LjE3MzI2MjkxMTI.) allows you to leverage Amazon Bedrock’s fully managed service to integrate foundation models from Amazon and leading AI providers. 

- Your Own Connector: If you prefer a custom connector, you can integrate your chosen infrastructure. However, this tutorial focuses on the OpenAI and Bedrock connectors, as they offer comprehensive support and ease of use for getting started.


### Creating Your Conversational UI Page

In this step, you'll set up a conversational interface for your application using the **Conversational UI** module previously downloaded. The process involves creating a page, configuring microflows, and preparing the chat context.

#### Create the Page
 
- Copy the `ConversationalUI_FullScreenChat` page from the **ConversationalUI > USE_ME > Pages** into your module, which in this case we will call it `MyFirstBot` module. 

#### Prepare the Page Parameter and Chat Box Settings

Since the **ConversationalUI_FullScreenChat** page contains a **Data View** using a `ChatContext` object as a parameter, it cannot be added directly to navigation. Depending on your preference in the infrastructure, you can pick up the OpenAI or the Bedrock configuration.

##### Use a Template Microflow - OpenAI  
1. Locate the pre-built microflow named `ACT_FullScreenChat_Open_OpenAI` in **ConversationalUI > USE_ME > Pages**. Right-click on the microflow and select *Include in project* to copy it into your `MyFirstBot` module.
2. Locate the `Show Page ConversationalUI_FullScreenChat` action.
3. Inside this action, change the page to `ConversationalUI_FullScreenChat` from your `MyFirstBot` module.

##### Use a Template Microflow - Bedrock  
1. Locate the pre-built microflow named `ACT_FullScreenChat_Open_Bedrock` in **ConversationalUI > USE_ME > Pages**. Right-click on the microflow and select *Include in project* to copy it into your `MyFirstBot` module.
2. Locate the `Show Page ConversationalUI_FullScreenChat` action.
3. Inside this action, change the page to `ConversationalUI_FullScreenChat` from your `MyFirstBot` module.

#### Optional Step: Customize the System Prompt

To tailor your application's behavior, you can customize the [**system prompt**](/appstore/modules/genai/prompt-engineering/#system-prompt) to make it more specific to your use case:

##### Copy or Duplicate the Microflow: 

- Copy the `ChatContext_ChatWithHistory_ActionMicroflow_OpenAI` or the `ChatContext_ChatWithHistory_ActionMicroflow_Bedrock` microflow to your `MyFirstBot` project from **ConversationalUI > USE_ME > Conversational UI > Action microflow examples**.

##### Change the System Prompt:

1. Open the copied `ChatContext_ChatWithHistory_ActionMicroflow_OpenAI` or `ChatContext_ChatWithHistory_ActionMicroflow_Bedrock` microflow from your `MyFirstBot` module.
2. Locate the `Create Request from ChatContext` action.
3. Inside this action, find the `SystemPrompt` parameter, which has a default value of `"You are an assistant"`.
4. Update the `SystemPrompt` value to match your desired behavior. For example:
   - For a customer service chatbot: `"You are a helpful customer service assistant providing answers to common product questions."`
   - For a travel advisor assistant: `"You are a travel advisor assistant. Your role is to provide travel tips and destination information."`
5. Save the changes.

##### Apply the changes:

1. Open the `ACT_FullScreenChat_Open_OpenAI` or `ACT_FullScreenChat_Open_Bedrock` microflow from your `MyFirstBot` module.
2. Locate the `New Chat` action.
3. Inside this action, change the **Action microflow** to the `ChatContext_ChatWithHistory_ActionMicroflow_OpenAI` or `ChatContext_ChatWithHistory_ActionMicroflow_Bedrock` microflow from your `MyFirstBot` module.
4. Save the changes.

#### Navigation Configurations

- Go to **Home** and select the `ACT_FullScreenChat_Open_OpenAI` or `ACT_FullScreenChat_Open_Bedrock` microflow from your `MyFirstBot` module to configure the navigation.

{{% alert color="warning" %}}
You may encounter an error about allowed roles. To resolve this, go to the page **Properties** and update the **Navigation > Visible for** setting to include the appropriate user roles.
{{% /alert %}}

### Infrastructure Configuration

#### OpenAI Configuration

Follow these steps to configure OpenAI for your application and for more background information, look at the [OpenAI Configuration](/appstore/modules/genai/openai/#configuration) documentation:

1. **Run the application locally.**

2. **Configure OpenAI Settings**:
   - In the chatbot-like application interface, go to **Settings** icon, and find the **OpenAI Configuration**.
   - Click **New** and provide the following details:
     - **Display Name**: A reference name to identify this configuration (e.g., "My OpenAI Configuration").
     - **API Type**: Choose between **OpenAI** or **Azure OpenAI**.
     - **Endpoint**: Enter the endpoint URL for your selected API type.
     - **Token**: Provide the API key for authentication.
     - If using Azure OpenAI, add:
       - **Deployment Name**: Specify the deployed model (e.g., `gpt-4o`, `gpt-3.5-turbo`).
       - **API Version**: Provide the version of the API you are using (e.g., `2024-06-01`, `2024-10-21`).

   - Click **Save** to store your configuration.

3. **Test the Configuration**:
   - Select the configuration you created, and click **Test Configuration**.
   - If an error occurs, check the **Mendix Console** for more details on resolving the issue.

#### Bedrock Configuration

Follow these steps to configure Amazon Bedrock for your application:

1. **Set Up AWS Credentials**:
   - Navigate to **App Settings** > **Configurations** in Studio Pro.
   - Go to the **Constants** tab and add the following (In this example, we are using static credentials. If you are using temporary credentials or want to learn more, refer to the [AWS Authentification guide](/appstore/modules/aws/aws-authentication/#session).):
     - **AWSAuthentication.AccessKey**: Enter the access key obtained from the Amazon Bedrock console.
     - **AWSAuthentication.SecretAccessKey**: Enter the secret access key from the Amazon Bedrock console.
   - Save your changes.

2. **Run the application locally.**

3. **Configure Bedrock Settings**:
   - In the chatbot-like application interface, go to **Settings** icon, and find the **Amazon Bedrock Configuration**.
   - Click **New/Edit** and provide the following details:
     - **Region**: Select the AWS region where your Bedrock service is hosted.
     - **Use Static Credentials**: Enable this option if you are using static AWS credentials configured in the app.
   - Click **Save & Sync Data** to ensure your changes are applied.

{{% alert color="info" %}}
If you encounter any issues while using the Amazon Bedrock connector, check the [Troubleshooting](/appstore/modules/aws/amazon-bedrock/#troubleshooting) documentation for support.
{{% /alert %}}

### Test your Chatbot

Before starting step 4, you should have set the OpenAI or Bedrock configuration.

4. **Test the Chatbot**:
   - Navigate to the **Home** icon to open the chatbot interface.
   - Start interacting with your chatbot by typing in the chat box.

Congratulations! Your chatbot is ready to use.

{{% alert color="warning" %}}
 If an error occurs, check the **Mendix Console** in Studio Pro for details to help resolve the issue.
{{% /alert %}}

## Support Material to continue your GenAI Journey

### Inspirational Material

- The [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) is a showcase app that demonstrates over 10 use cases of how GenAI can be implemented.
- The [Support Assistant Starter App](https://marketplace.mendix.com/link/component/231035) is a template that incorporates [**RAG (Retrieval-Augmented Generation)**](/appstore/modules/genai/rag/), [**function calling (ReAct Pattern)**](/appstore/modules/genai/function-calling/), and knowledge base integration. For more details on this use case, you can refer to the blog post [How to Build Smarter Apps with Function Calling & Generative AI](https://www.mendix.com/blog/building-smarter-apps-with-function-calling-and-generative-ai/) which provides an in-depth exploration of the topic.

### Prompt Engineering Support 

- The [Prompt Engineering](/appstore/modules/genai/prompt-engineering/) Documentation provides an introduction to the basics of prompting, along with useful tips.
- The [Prompt Library](https://mendixlabs.github.io/smart-apps-prompt-library/) offers a collection of prompts used in Mendix applications, as well as other examples.
- The [Hey ChatGPT, Write a Blog Post About Prompt Engineering – Part 1](https://www.mendix.com/blog/part-one-hey-chatgpt-can-you-write-me-a-blog-post-about-prompt-engineering/) blog post introduces the fundamentals of prompt engineering, including techniques and examples.
- The [Hey ChatGPT, Write a Blog Post About Prompt Engineering – Part 2](https://www.mendix.com/blog/hey-chatgpt-can-you-write-me-a-blog-post-about-prompt-engineering-part-2/) blog post explores the Tree-of-Thought prompt technique, offers recommendations for getting started, and discusses how to handle hallucinations.

### The 'Good to know' Documentation

- Basic documentation on [Using Generative AI](/appstore/modules/genai/using-gen-ai/) is always helpful to read when starting the journey.
- The modules [GenAI Commons](/appstore/modules/genai/commons/) and [Conversational UI](/appstore/modules/genai/conversational-ui/) provide a great overview on the technical side.
- The [OpenAI](/appstore/modules/genai/openai/) documentation introduces the most relevant information on the OpenAI connector.
- The [Amazon Bedrock](/appstore/modules/aws/amazon-bedrock/) introduces the most relevant information on the AWS Bedrock connector.
- The [PGVector Knowledge Base](/appstore/modules/genai/pgvector/) offers the option for a private knowledge base outside of the LLM infrastructure.

For any additional feedback, please send us a message in the #genai-connectors channel in the Mendix Community Slack. You can sign up [here!](https://mendixcommunity.slack.com/join/shared_invite/zt-270ys3pwi-kgWhJUwWrKMEMuQln4bqrQ#/shared-invite/email)
