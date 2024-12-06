---
title: "How to build a Smart App using a Starter Template"
url: /appstore/modules/genai/genai-howto-starterapp/
linktitle: "How to build a Smart App using the Starter Template"
weight: 10
description: "A tutorial that describes how to get started building a smart app with a starter template"
---

## Introduction

This guide will help you take that first step and get started. By the end of this tutorial, you will have the knowledge and tools to create your first GenAI-powered application.

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

## Building Your Smart App with a Starter Template

To simplify your first use case, we will focus on building a chatbot using the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926). This pre-built template streamlines the process, allowing you to quickly integrate AI capabilities into your application. The end result can be visualized in the image below.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-starterapp/starter_genai_interface.jpg" >}}

### Choosing the Infrastructure

Selecting the infrastructure for integrating GenAI into your Mendix application is the first step. Depending on your use case and preferences, you can choose from the following options:

- [OpenAI](/appstore/modules/genai/openai/): The [OpenAI Connector](https://marketplace.mendix.com/link/component/220472?_gl=1*1gbywo4*_gcl_au*NjUwMzI0NzA0LjE3MzI2MjkxMTI.) supports OpenAI’s platform and Azure’s OpenAI service.

{{% alert color="info" %}}
To start, you can sign up for a free trial with OpenAI and receive credits valid for three months from the account creation date. For more details, see the [OpenAI API reference](https://platform.openai.com/docs/api-reference/authentication).
{{% /alert %}}

- [Amazon Bedrock](/appstore/modules/genai/bedrock/): The [Bedrock Connector](https://marketplace.mendix.com/link/component/215042?_gl=1*yogwo1*_gcl_au*NjUwMzI0NzA0LjE3MzI2MjkxMTI.) allows you to leverage Amazon Bedrock’s fully managed service to integrate foundation models from Amazon and leading AI providers. 

- Your Own Connector: If you prefer a custom connector, you can integrate your chosen infrastructure. However, this tutorial focuses on the OpenAI and Bedrock connectors, as they offer comprehensive support and ease of use for getting started.

### Getting Started

After downloading the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) and setting up the **encryption key** in the **App Settings**, follow the next steps depending on the infrastructure you chose.

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
   - Navigate to **App Settings** > **Configurations**.
   - Go to the **Constants** tab and add the following (In this example, we are using static credentials. If you are using temporary credentials or want to learn more, refer to the [AWS Authentification guide](/appstore/modules/aws/aws-authentication/#session).):
     - **AWSAuthentication.AccessKey**: Enter the access key obtained from the Amazon Bedrock console.
     - **AWSAuthentication.SecretAccessKey**: Enter the secret access key from the Amazon Bedrock console.
   - Save your changes.

2. **Run the application locally.**

3. **Configure Bedrock Settings**:
   - In the chatbot-like application interface, go to **Administration** > **Amazon Bedrock Configuration**.
   - Click **New/Edit** and provide the following details:
     - **Region**: Select the AWS region where your Bedrock service is hosted.
     - **Use Static Credentials**: Enable this option if you are using static AWS credentials configured in the app.
   - Click **Save & Sync Data** to ensure your changes are applied.

### Bot configuration

Before starting step 4, you should have set the OpenAI or Bedrock configuration.

4. **Set Up Bot Configuration**:
   - In the **Administration** menu, go to **Bot Configuration**, and click **New**.
   - Enter the following details:
     - **Display Name**: A reference name for the bot configuration (e.g., "Configuration Bot").
     - **Architecture**: Select **OpenAI** or **Bedrock** depending on the choice you made.
     - **Is Selectable in UI**: Enable this option if you want the end user to have the option to select this configuration.
     - **Configuration**: Select the OpenAI or Bedrock configuration you just created.
     - **Action Microflow**: Choose the provided microflow, **ChatContext_ChatWithHistory_ActionMicroflow**.

   - Save your changes and decide whether to make it the default bot configuration by selecting **Make Default** on the Bot Configuration page.

### Test your Chatbot

5. **Test the Chatbot**:
   - Navigate to the **Chat** option in the top menu to open the chatbot interface.
   - In the **Configuration** box:
     - Choose your bot configuration.
     - Optionally, select an instructions for the LLM to follow.
   - Start interacting with your chatbot by typing in the chat box.
   - For a second round of testing, please create a customize instruction for the LLM to follow, such as *'You are a travel advisor assistant. Your role is to provide travel tips and destination information.'*. 

Congratulations! Your chatbot is ready to use.

{{% alert color="warning" %}}
 If an error occurs, check the **Mendix Console** in Studio Pro for details to help resolve the issue.
{{% /alert %}}

## Support Material to continue your GenAI Journey

### Inspirational Material

- The [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) is a template that demonstrates over 10 use cases of how GenAI can be implemented.
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
