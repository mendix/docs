---
title: "GenAI Concepts"
url: /appstore/modules/genai/concepts
linktitle: "How-tos & concepts"
weight: 2
description: "Describes the typical concepts people might implement with GenAI."
---

# Introduction


## 1 The LLM

### 1.1 What is an LLM?

A Large Language Model (LLM) is an advanced neural network trained on large amounts of text data. This allows the model to understand textual input, and generate input. LLMs are designed to handle a variety of natural language processing tasks, making them versatile tools for developers and businesses alike. You can use it for example to do:

- **Text Generation:** Create coherent and contextually relevant text based on given prompts.
- **Content Creation:** Assist in writing articles, stories, and marketing copy.
- **Translation:** Translate text from one language to another with high accuracy.
- **Summarization:** Condense long documents into concise summaries.
- **Conversational Agents:** Power chatbots and virtual assistants to interact naturally with users.
- **Data generation:** Generate Mendix objects by combining JSON generation & [Import mappings](/refguide/import-mapping-action/).

Models such as Anthropic Claude and GPT-4o can also use Images as input. This will allow you to ask questions on images for use cases such as Object Recognition, Image to Text (OCR) and Validating 

### 1.2 What is an LLM Not?

While LLMs are powerful, they are not without limitations:

- **Not Conscious:** LLMs do not possess self-awareness or understanding. They generate text based on patterns in the data they were trained on.
- **Not Perfect:** These models can sometimes produce incorrect or nonsensical outputs, especially if the input is ambiguous or if relevant data is not present.
- **Not a Replacement for Human Judgment:** LLMs should be seen as tools to augment human capabilities, not replace human expertise or critical thinking.
- **LLM is not a ML model trained for specific use cases**: LLMs are trained on a broad variety of use cases, for some specific (e.g. statistical) use cases you need to use traditional machine learning. For more details on how to deploy such a model see [Machine Learning Kit](/refguide/machine-learning-kit).

By understanding both the capabilities and limitations of LLMs, you can more effectively integrate generative AI into your apps. We recommend to use it for accelerating business processes, but still "keep the human in the loop".

### 1.3 Making an LLM more specific

Since an LLM is pretrained on particular dataset it can do many things out of the box. If you want to make it more specific to your use case and program it to perform specific functions in your apps you can typically do three things:

1. Prompt engineering by giving the LLM instructions in natural language.
2. Ground the LLM in data with patterns such as Retrieval augmented generation and ReAct.
3. Advanced capabilities such as finetuning and training your own model.

When executed well you can use Prompt Engineering, RAG and ReAct to build many use cases and you would not need finetuning.

## 2 Prompt engineering

[Prompt engineering](/appstore/modules/openai-connector/prompt-engineering/) is the activity of designing the input text that will be send to the LLM. This typically contains input from the end-user, enriched with instructions from the developer / administrator. With Prompt engineering you can guide the model to generate accurate, applicable and coherent responses. The quality of your prompts is of direct influence on the quality of the response.

## 3 Ground in data with Retrieval Augmented Generation (RAG)

### 3.1 Bedrock Retrieval Augmented Generation

The knowledge of LLMs is limited to the data they have been trained on. For use cases where the LLM needs to be aware of relevant private data, such as enterprise data, Bedrock provides an easy way to leverage the RAG technique. Bedrock RAG is based on the concept of [knowledge bases for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html), which allows you to create a repository of private information that can be used to improve an LLM's response.

The easiest way to use Retrieval Augmented Generation in your Mendix application is the [Retrieve And Generate](/appstore/modules/aws/amazon-bedrock/#retrieve-and-generate) operation available in the Amazon Bedrock Connector, which provides an end-to-end flow, that includes extracting relevant information from the knowledge base, augmenting the user prompt and generating a response based on the retrieved information.

### 3.2 Azure AI Search

### 3.3 PgVector Knowledge Base

## 4 Interact with your application through the ReAct pattern (function calling)

## 5 Agents

### 5.1 Connect to a Bedrock Agent

Agents for Amazon Bedrock provides the ability to integrate autonomous agents into your application. A Bedrock agent can orchestrate interactions between LLM's, various data sources and user conversations. In addtion, agents can be connected to a knowledge base to perform RAG and autonomously take actions by calling APIs that it has been equipped with.

Connecting to an agent from a Mendix application can easily be done via the Amazon Bedrock Connector. For detailed instructions please refer to the [Connector documentation](/appstore/modules/aws/amazon-bedrock).

