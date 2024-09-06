---
title: "Using Generative AI"
url: /appstore/modules/genai/using-gen-ai/
linktitle: "Using GenAI"
weight: 10
description: "Describes the concepts behind generative AI and what you might implement with it."
---

## Introduction

Generative AI can be very powerful in providing user-friendly interactions with your app. However, using generative AI is very different from writing low- or high-code. This page introduces some important concepts in generative AI and suggests ways in which it can enhance your low-code app.

## Large Language Model (LLM) {#llm}

By understanding both the capabilities and limitations of LLMs, you can more effectively integrate generative AI into your apps. Mendix recommends that you use it to accelerate business processes, but still "keep the human in the loop".

### What is an LLM?

One of the most important components for generative AI is the Large Language Model (LLM). It is an advanced neural network trained on large amounts of textual data. This allows the model to understand textual input, and generate output. LLMs are designed to handle a variety of natural language processing tasks, making them versatile tools for developers and businesses alike.

For example, you can use an LLM to do:

* **Text Generation:** Creating coherent and contextually relevant text from a prompt.
* **Content Creation:** Assisting in writing articles, stories, and marketing copy.
* **Translation:** Translating text from one language to another.
* **Summarization:** Condensing long documents into concise summaries.
* **Conversational Interaction:** Powering chatbots and virtual assistants to interact naturally with users.
* **Data Generation:** Generating Mendix objects by combining JSON generation and [Import mappings](/refguide/import-mapping-action/).

Some LLMs, such as [Anthropic Claude](/appstore/modules/aws/amazon-bedrock/) and [GPT-4o](/appstore/modules/genai/openai/), can also use one or more images as input, allowing you to ask questions about images for use cases such as object recognition, image to text (OCR), and validating whether an image is as intended.

### What is an LLM Not?

While LLMs are powerful, they are not without limitations. Remember they are:

* **not conscious:** LLMs do not possess self-awareness or semantic knowledge (understanding). They generate text based on patterns in the data they were trained on.
* **not perfect:** These models can sometimes produce incorrect or nonsensical outputs (so-called hallucinations), especially if the input is ambiguous or if they were not trained on the relevant data.
* **not a replacement for human judgment:** LLMs should be seen as tools to augment human capabilities, not replace human expertise or critical thinking.
* **not trained for specific use cases**: LLMs are trained on a broad variety of use cases, for some specific (e.g. statistical) use cases you need to use traditional machine learning (ML) models. For more details on how to deploy such a model see [Machine Learning Kit](/refguide/machine-learning-kit/).

### Making an LLM more specific

Since an LLM is pretrained on a huge dataset it can do many things out of the box. If you want to make it more specific to your use case and program it to perform specific functions in your apps, you can typically do three things:

1. Engineer prompts by giving the LLM instructions in natural language.
2. Ground the LLM in data with patterns such as Retrieval Augmented Generation (RAG) and ReAct (reasoning and acting).
3. Leverage advanced capabilities such as fine-tuning and training your own model.

Often, you can use prompt engineering, RAG, and ReAct to build your use case and do not need fine-tuning.

## Prompt Engineering {#prompt-engineering}

Prompt engineering is the activity of designing the input text that will be send to the LLM. This typically contains input from the end-user, enriched with instructions from the developer / administrator. A prompt typically contains:

* instructions on what the model should do
* context and information that the model needs to follow the instructions
* the relevant input data (from the end-user or passed from a microflow)
* the requested output structure (for example, tone of voice or a JSON format)

With prompt engineering you can guide the model to generate accurate, applicable, and coherent responses. The quality of your prompts directly influences the quality of the response. See [Prompt Engineering](/appstore/modules/genai/prompt-engineering/) to learn more about prompt engineering.

## Retrieval Augmented Generation (RAG) {#rag}

The knowledge of LLMs is limited to the data they have been trained on. This is generally-available information, for example from Wikipedia and other internet sources.

For use cases where the LLM needs to be aware of domain-specific or private enterprise data, you can use the RAG pattern. This allows you to add large amounts of additional context to a request without making the prompts extremely lengthy. To implement RAG, you need to set up a knowledge base that contains the data. When evaluating the actual user prompt, the basic pattern of RAG consists of three phases:

1. Use the user input to **retrieve** relevant data from the knowledge base.
2. **Augment** the prompt with the retrieved data.
3. **Generate** the response from the LLM.

This allows you to use your own knowledge base to do things like:

* ask questions about a large piece of text
* use a multi-lingual database of historical support tickets and resolutions to propose resolutions to end-users based on previous support tickets

There are two approaches to including RAG in your generative AI-powered app.

### Fully-Integrated RAG

Some architectures provide the capabilities for the RAG pattern out of the box, which shields you from having to retrieve and augment your prompt yourself. All you need to do is ensure that your knowledge base is available to the model.

For example, Amazon Bedrock has the concept of [knowledge bases for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html), which allows you to create a repository of private information that can be used to improve an LLM's response. This knowledge base is based on files (e.g. manuals or historical documents) in an S3 bucket. You can then use the Retrieve And Generate operation which will retrieve data from the knowledge base, augment the prompt with the retrieved information, and generate the response.

### PgVector Knowledge Base {#pgvectorknowledgebase}

If your chosen architecture doesn't have fully-integrated RAG capabilities, or if you want tighter control of the RAG process, you can create and use your own knowledge base.

In this case you will have to index and store your knowledge yourself, and index your input data in order to retrieve the information with which you want to augment your prompt. For this you can use the [PgVector Knowledge Base module](/appstore/modules/genai/pgvector/) in combination with an embeddings model, to maintain and use your knowledge base. 

An example of how this can be done with OpenAI is described in [RAG Example Implementation in the GenAI Showcase App](/appstore/modules/genai/rag/).

## The ReAct Pattern (Function Calling) {#react}

Another way to provide the LLM with additional information and capabilities is to use function calling, also known as tool use. With function calling you can make specific microflows available to the LLM. While evaluating the prompt, the LLM will, optionally, ask to execute a particular microflow. The Mendix application will execute this microflow and return additional information for the LLM to add to the prompt being processed.

This microflow runs in the context of the user, allowing you to make sure that it only shows data that is relevant for the current user. You can also use it to execute actions on behalf of the user, or interact with page that the user is looking at.

See [Function Calling](/appstore/modules/genai/function-calling/) for more information on ReAct. You can see ReAct implemented in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) where the `GetInformationForTicketID` microflow allows an LLM to answer a question like "What is the status of ticket 42?".

This pattern is supported both by [OpenAI](https://platform.openai.com/docs/guides/function-calling) and [various models available on Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features).

## Agents and Assistants {#agents}

Some vendors of generative AI solutions have the concept of an "Agent" or "Assistant" which can combine prompts, RAG, and ReAct in a single call. You can also specify multiple steps which the agent should follow, and ask the agent to create the prompts or API calls needed for those steps.

For example, [Agents for Amazon Bedrock](https://aws.amazon.com/bedrock/agents/) provides this functionality for Amazon Bedrock. You can find out how to use this in your Mendix application in [Invoking an Agent with the InvokeAgent Operation](/appstore/modules/aws/amazon-bedrock/#invokeagent) section of the *Amazon Bedrock* module documentation.
