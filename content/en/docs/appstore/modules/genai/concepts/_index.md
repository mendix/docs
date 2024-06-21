---
title: "Using Generative AI"
url: /appstore/modules/genai/concepts
linktitle: "Using GenAI"
weight: 2
description: "Describes the concepts behind generative AI and what you might implement with it."
---

## 1 Introduction

Generative AI can be very powerful in providing user-friendly interactions with your app. However, using generative AI is very different from writing low- or high-code. This page introduces some important concepts in generative AI and suggests ways in which it can enhance your low-code app.

## 2 Large Language Model (LLM) {#llm}

By understanding both the capabilities and limitations of LLMs, you can more effectively integrate generative AI into your apps. Mendix recommends that you use it to accelerate business processes, but still "keep the human in the loop".

### 2.1 What is an LLM?

One of the most important components for generative AI is the Large Language Model (LLM). It is an advanced neural network trained on large amounts of text data. This allows the model to understand textual input, and generate output. LLMs are designed to handle a variety of natural language processing tasks, making them versatile tools for developers and businesses alike.

For example, you can use an LLM to do:

* **Text Generation:** Creating coherent and contextually relevant text from a prompt.
* **Content Creation:** Assisting in writing articles, stories, and marketing copy.
* **Translation:** Translating text from one language to another with high accuracy.
* **Summarization:** Condensing long documents into concise summaries.
* **Conversational Agents:** Powering chatbots and virtual assistants to interact naturally with users.
* **Data Generation:** Generating Mendix objects by combining JSON generation & [Import mappings](/refguide/import-mapping-action/).

Some LLMs, such as [Anthropic Claude](/appstore/modules/aws/amazon-bedrock/#chat-completions-with-history) and [GPT-4o](/appstore/modules/openai-connector/#chatcompletions-vision), can also use one or more images as input, allowing you to ask questions about images for use cases such as object recognition, image to text (OCR), and validating whether an image is as intended.

### 2.2 What is an LLM Not?

While LLMs are powerful, they are not without limitations. Remember they are:

* **not conscious:** LLMs do not possess self-awareness or understanding. They generate text based on patterns in the data they were trained on.
* **not perfect:** These models can sometimes produce incorrect or nonsensical outputs (so-called hallucinations), especially if the input is ambiguous or if they were not trained on the relevant data.
* **not a replacement for human judgment:** LLMs should be seen as tools to augment human capabilities, not replace human expertise or critical thinking.
* **not machine learning (ML) models trained for specific use cases**: LLMs are trained on a broad variety of use cases, for some specific (e.g. statistical) use cases you need to use traditional machine learning. For more details on how to deploy such a model see [Machine Learning Kit](/refguide/machine-learning-kit).

### 2.3 Making an LLM more specific

Since an LLM is pretrained on a huge dataset it can do many things out of the box. If you want to make it more specific to your use case and program it to perform specific functions in your apps, you can typically do three things:

1. Engineer prompts by giving the LLM instructions in natural language.
2. Ground the LLM in data with patterns such as Retrieval Augmented Generation (RAG) and ReAct (reasoning and acting).
3. Leverage advanced capabilities such as fine-tuning and training your own model.

Often, you can use prompt engineering, RAG, and ReAct to build your use case and do not need fine-tuning.

## 3 Prompt Engineering {#prompt-engineering}

Prompt engineering is the activity of designing the input text that will be send to the LLM. This typically contains input from the end-user, enriched with instructions from the developer / administrator. A prompt typically contains:

* instructions on what the model should do,
* context & information that the model needs to follow the instructions,
* the relevant input data (from the end-user or passed from a microflow),
* the requested output structure (e.g. tone of voice or a JSON format).

With prompt engineering you can guide the model to generate accurate, applicable and coherent responses. The quality of your prompts direct influences the quality of the response. See [Prompt Engineering](/appstore/modules/genai/concepts/prompt-engineering/) to learn more about prompt engineering.

## 4 Retrieval Augmented Generation (RAG) {#rag}

The knowledge of LLMs is limited to the data they have been trained on. This is generally-available information, for example from Wikipedia and other internet sources. For use cases where the LLM needs to be aware of relevant private enterprise data, you can use the RAG pattern. This allows you to provide the LLM with large amounts of additional context to a request without making the prompts extremely lengthy. To implement RAG, you need to setup a knowledge base that contains the data. When evaluating the actual user prompt, the basic pattern of RAG consists of three phases:

1. Use the user input to **retrieve** relevant data from the knowledge base.
2. **Augment** the prompt with the retrieved data.
3. **Generate** the response from the LLM.

### 4.1 Bedrock Retrieval Augmented Generation {rag-bedrock}

Amazon Bedrock provides capabilities for the RAG pattern out of the box with the concept of [knowledge bases for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html), which allows you to create a repository of private information that can be used to improve an LLM's response. This knowledge base is based on files (e.g. manuals or historical documents) in an S3 bucket. 

After setting up the knowledge base, use the [Retrieve And Generate](/appstore/modules/aws/amazon-bedrock/#retrieve-and-generate) operation that is available in the Amazon Bedrock Connector, which provides an end-to-end flow, that includes extracting relevant information from the knowledge base, augmenting the user prompt and generating a response based on the retrieved information.

 See the [Amazon Bedrock Showcase App](https://marketplace.mendix.com/link/component/223535) for more details on how to setup a knowledge base and implement this. In the [AI Bot Starter App]() a configuration is provided to create an AI Chatbot that includes the knowledge base without any additional development.

<!-- TODO Update AI BOT STARTER APP link -->

### 4.2 PgVector Knowledge Base with OpenAI or Bedrock {pgvectorknowledgebase}

You can also use the [PgVector Knowledge Base module](/appstore/modules/pgvector-knowledge-base/) in combination with an OpenAI or Bedrock embeddings model, to maintain and use a knowledge base. Index and store your own knowledge in a more dynamic way, since you can use it for storing chunks of texts, or contents of Mendix objects.

You can read further on [how to implement this here](/appstore/modules/openai-connector/rag-example-implementation/). The [OpenAI Showcase App](https://marketplace.mendix.com/link/component/220475) also contains examples on:

* How to ask questions on a large piece of text.
* How to use a multi-lingual database of historical tickets & resolutions to propose resolutions to the users based on historical input.

## 5 The ReAct Pattern (Function Calling) {#react}

Another way to provide the LLM with additional information and capabilities is to use function calling, also known as tool use. With function calling you can make specific microflows available to the LLM. While evaluating the prompt, the LLM will, optionally, ask to execute a particular microflow. The Mendix application will execute this microflow and return additional information for the LLM to add to the prompt being processed.

This microflow runs in the context of the user, allowing you to make sure that it only shows data that is relevant for the current user. You can also use it to execute actions on behalf of the user, or interact with page that the user is looking at.

See [Function Calling](/appstore/modules/openai-connector/function-calling/) for more information on ReAct. You can see ReAct implemented in the [OpenAI Showcase App](https://marketplace.mendix.com/link/component/220475) where the `GetInformationForTIecketID` microflow allows an LLM to answer a question like "What is the status of ticket 42?".

This pattern is supported both by [OpenAI](https://platform.openai.com/docs/guides/function-calling) and [Bedrock in the Anthropic Claude v3 models](https://docs.anthropic.com/en/docs/tool-use).

## 6 Agents {#agents}

### 6.1 Connect to a Bedrock Agent

Agents for Amazon Bedrock provides the ability to integrate autonomous agents into your application. A [Bedrock Agent](https://aws.amazon.com/bedrock/agents/) can orchestrate interactions between LLM's, various data sources and user conversations. In addtion, agents can be connected to a knowledge base to perform RAG and autonomously take actions by calling APIs that it has been equipped with.

Connecting to an agent from a Mendix application can easily be done via the Amazon Bedrock Connector. For detailed instructions please refer to the [Connector documentation](/appstore/modules/aws/amazon-bedrock).
