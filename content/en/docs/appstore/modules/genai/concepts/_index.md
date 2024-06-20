---
title: "GenAI Concepts"
url: /appstore/modules/genai/concepts
linktitle: "How-tos & concepts"
weight: 2
description: "Describes the typical concepts people might implement with GenAI."
---

# Introduction


## 1 The LLM {#llm}

### 1.1 What is an LLM?

One of the most important components for Generative AI is the Large Language Model (LLM). It is an advanced neural network trained on large amounts of text data. This allows the model to understand textual input, and generate input. LLMs are designed to handle a variety of natural language processing tasks, making them versatile tools for developers and businesses alike. You can use it for example to do:

- **Text Generation:** Create coherent and contextually relevant text based on given prompts.
- **Content Creation:** Assist in writing articles, stories, and marketing copy.
- **Translation:** Translate text from one language to another with high accuracy.
- **Summarization:** Condense long documents into concise summaries.
- **Conversational Agents:** Power chatbots and virtual assistants to interact naturally with users.
- **Data Generation:** Generate Mendix objects by combining JSON generation & [Import mappings](/refguide/import-mapping-action/).

Models such as [Anthropic Claude](/appstore/modules/aws/amazon-bedrock/#chat-completions-with-history) and [GPT-4o](/appstore/modules/openai-connector/#chatcompletions-vision) can also use (one or multiple) images as input. This will allow you to ask questions on images for use cases such as Object Recognition, Image to Text (OCR) and validating whether an image is as intended.

### 1.2 What is an LLM Not?

While LLMs are powerful, they are not without limitations:

- **Not Conscious:** LLMs do not possess self-awareness or understanding. They generate text based on patterns in the data they were trained on.
- **Not Perfect:** These models can sometimes produce incorrect or nonsensical outputs, especially if the input is ambiguous or if relevant data is not present.
- **Not a Replacement for Human Judgment:** LLMs should be seen as tools to augment human capabilities, not replace human expertise or critical thinking.
- **LLM is not a ML model trained for specific use cases**: LLMs are trained on a broad variety of use cases, for some specific (e.g. statistical) use cases you need to use traditional machine learning. For more details on how to deploy such a model see [Machine Learning Kit](/refguide/machine-learning-kit).

By understanding both the capabilities and limitations of LLMs, you can more effectively integrate generative AI into your apps. We recommend to use it for accelerating business processes, but still "keep the human in the loop".

### 1.3 Making an LLM more specific

Since an LLM is pretrained on a particular dataset it can do many things out of the box. If you want to make it more specific to your use case and program it to perform specific functions in your apps you can typically do three things:

1. Prompt engineering by giving the LLM instructions in natural language.
2. Ground the LLM in data with patterns such as Retrieval augmented generation and ReAct.
3. Advanced capabilities such as finetuning and training your own model.

When executed well you can use Prompt Engineering, RAG and ReAct to build many use cases and you would not need finetuning.

## 2 Prompt engineering {#prompt-engineering}

Prompt engineering is the activity of designing the input text that will be send to the LLM. This typically contains input from the end-user, enriched with instructions from the developer / administrator. A prompt typically contains:
* instructions on what the model should do,
* context & information that the model needs to follow the instructions,
* the relevant input data (from the end-user or passed from a microflow),
* the requested output structure (e.g. tone of voice or a JSON format).

With prompt engineering you can guide the model to generate accurate, applicable and coherent responses. The quality of your prompts is of direct influence on the quality of the response. Learn more about [prompt engineering here](/appstore/modules/genai/concepts/prompt-engineering/).

## 3 Ground in data with Retrieval Augmented Generation (RAG) {#rag}

The knowledge of LLMs is limited to the data they have been trained on. For use cases where the LLM needs to be aware of relevant private enterprise data you can use the Retrieval Augmented Generation (RAG) pattern. This allows you to provide the LLM with large amounts of additional context to a request, without making the prompts extremely lengthy. To implement RAG, you need to setup a knowledge base that contains the data. When evaluating the actual user prompt, the basic pattern of RAG consists of:

1. Based on the user input, **retrieve** relevant data from the knowledge base,
2. **Augment** the prompt with the retrieved data,
3. **Generate** the response from the LLM.

### 3.1 Bedrock Retrieval Augmented Generation {rag-bedrock}

Amazon Bedrock provides capabilities for the RAG pattern out of the box with the concept of [knowledge bases for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html), which allows you to create a repository of private information that can be used to improve an LLM's response. This knowledge base is based on files (e.g. manuals or historical documents) in an S3 bucket. 

After setting up the knowledge base, use the [Retrieve And Generate](/appstore/modules/aws/amazon-bedrock/#retrieve-and-generate) operation that is available in the Amazon Bedrock Connector, which provides an end-to-end flow, that includes extracting relevant information from the knowledge base, augmenting the user prompt and generating a response based on the retrieved information.

 See the [Amazon Bedrock Showcase App](https://marketplace.mendix.com/link/component/223535) for more details on how to setup a knowledge base and implement this. In the [AI Bot Starter App]() a configuration is provided to create an AI Chatbot that includes the knowledge base without any additional development.

<!-- TODO Update AI BOT STARTER APP link -->

### 3.2 PgVector Knowledge Base with OpenAI or Bedrock {pgvectorknowledgebase}

You can also use the [PgVector Knowledge Base module](/appstore/modules/pgvector-knowledge-base/) in combination with an OpenAI or Bedrock embeddings model, to maintain and use a knowledge base. Index and store your own knowledge in a more dynamic way, since you can use it for storing chunks of texts, or contents of Mendix objects.

You can read further on [how to implement this here](/appstore/modules/openai-connector/rag-example-implementation/). The [OpenAI Showcase App](https://marketplace.mendix.com/link/component/220475) also contains examples on:
* How to ask questions on a large piece of text.
* How to use a multi-lingual database of historical tickets & resolutions to propose resolutions to the users based on historical input.

## 4 Interact with your application through the ReAct pattern (function calling) {#react}

As a second way to provide the LLM additional information and capabilities, you can use function calling, also known as tool use. With function calling you can make specific microflows available to the LLM. While evaluating the prompt, the LLM can "decide" that it needs to execute a particular microflow. The Mendix application will execute this microflow so the LLM can evaluate the prompt with the additional information from the prompt. Since this microflow runs in the context of the user, you can make sure that it only shows data that is relevant for the current user. You can also use it to execute actions on behalf of the user, or interact with page that the user is looking at.

[Read more on this pattern](/appstore/modules/openai-connector/function-calling/) or download the [OpenAI Showcase App](https://marketplace.mendix.com/link/component/220475) for an example of allowing an LLM to answer a question like _What is the status of ticket 42?_ by providing it a microflow like _GetInformationForTicketID_.

This pattern is supported both by [OpenAI](https://platform.openai.com/docs/guides/function-calling) and [Bedrock in the Anthropic Claude v3 models](https://docs.anthropic.com/en/docs/tool-use).

## 5 Agents {#agents}

### 5.1 Connect to a Bedrock Agent

Agents for Amazon Bedrock provides the ability to integrate autonomous agents into your application. A [Bedrock Agent](https://aws.amazon.com/bedrock/agents/) can orchestrate interactions between LLM's, various data sources and user conversations. In addtion, agents can be connected to a knowledge base to perform RAG and autonomously take actions by calling APIs that it has been equipped with.

Connecting to an agent from a Mendix application can easily be done via the Amazon Bedrock Connector. For detailed instructions please refer to the [Connector documentation](/appstore/modules/aws/amazon-bedrock).