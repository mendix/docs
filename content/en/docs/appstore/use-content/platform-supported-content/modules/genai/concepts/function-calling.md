---
title: "Function Calling"
url: /appstore/modules/genai/function-calling/
linktitle: "Function Calling"
weight: 20
description: "Describes function calling in Mendix"
---

## Introduction {#introduction}

Function calling enables LLMs (Large Language Models) to connect with external tools to gather information, execute actions, convert natural language into structured data, and much more. Function calling thus enables the model to intelligently decide when to let the Mendix app call one or more predefined functions (microflows) to gather additional information to include in the assistant's response.

The LLM (e.g. OpenAI ChatGPT, Anthropic Claude) does not call the function. The model returns a tool call JSON structure that is used to build the input of the functions so that they can be executed as part of the chat completions operation.

## High-level flow {#high-level}

If you use the `Chat Completions (without history)` or `Chat Completions (with history)` actions for text generation with function calling, the LLM connector (OpenAI Connector or Amazon Bedrock Connector) will handle the whole process for you in just one step:

1. Invoke the chat completions API with a user prompt and a collection of available functions (microflows) with their expected input parameter.

    The model will decide which function (microflow) should be called within the LLM connector, if any. The response of the operation will be based on the information you provide and the response of any function (microflow) that was called.

This automates the following process happening inside the LLM connector (OpenAI Connector, Amazon Bedrock Connector):

1. Invoke the chat completions API with a user prompt and a collection of available functions (microflows) with their expected input parameters.
2. The model decides which function (microflow) should be called, if any, based on the user prompt and the available functions. If a function should be called, the content of the assistant's response will be a stringified JSON object containing the input parameter of the function as described in the request.  Note that the LLM can possibly hallucinate parameters, so they should be validated inside the function microflow before being used.
3. The LLM connector parses the string into JSON and executes the function microflow with its input parameter. 
4. The existing list of messages is appended with a new tool message containing the function response. Then, the chat completions API is invoked again and the model can answer the initial prompt with the new information provided by the function.

For more general information on this topic, see [OpenAI: Function Calling](https://platform.openai.com/docs/guides/function-calling) or [Anthropic Claude: Tool Use](https://docs.anthropic.com/en/docs/tool-use).

## Function Calling with the GenAI Commons Module and the LLM Connectors {#llm-connector}

Both the [OpenAI Connector](/appstore/modules/genai/openai/) and [Amazon Bedrock Connector](/appstore/modules/aws/amazon-bedrock/) support function calling by leveraging the [GenAI Commons module](/appstore/modules/genai/commons/). In both connectors, function calling is supported for all chat completions operations. All entity, attribute and activity names in this section refer to the GenAI Commons module. 

Functions in Mendix are essentially microflows that can be registered within the request to the LLM​. The LLM connector takes care of handling the tool call response as well as executing the function microflow(s) until the LLM returns the final assistant's response. Currently, function microflows can either have no input parameters or one input parameter of type string and must return a string.

To enable function calling, a `ToolCollection` object must be added to the request, which is associated to one or many `Function` objects. 

A helper operation is available in [GenAI Commons](/appstore/modules/genai/commons/) to construct the `ToolCollection` with a list of `Functions`:

* Tools: Add Function to Request can be used to initialize a new `ToolCollection` and add a new `Function` to it in order to enable function calling.

Depending on the user prompt and the available functions, the model can suggest one or multiple tool calls to the same or different functions or there might be multiple API calls followed by new tools calls until the model returns the final assistant's response.
A way to steer the function calling process is the `ToolChoice` parameter. This optional attribute on the Request entity controls which (if any) function is called by the model.

A helper operation is available in GenAI Commons to define the Tool Choice: 

* Tools: Set Tool Choice can be used to set the `ToolChoice` parameter and the `ToolCollection_ToolChoice` association accordingly.

{{% alert color="warning" %}}
Function calling is a very powerful capability, but may be used with caution. Please note that function microflows run in the context of the current user without enforcing entity-access. You can use `$currentUser` in XPath queries to ensure you retrieve and return only information that the end-user is allowed to view; otherwise confidential information may become visible to the current end-user in the assistant's response.

We also strongly advise that you build user confirmation logic into function microflows that have a potential impact on the world on behalf of the end-user, for example sending an email, posting online, or making a purchase.
{{% /alert %}}

### Supported OpenAI models {#supported-models-openai}

OpenAI's latest GPT-3.5 Turbo, GPT-4 Turbo and GPT-4o models are trained with function calling data. Older model versions may not support parallel function calling. For more details view [OpenAI Documentation](https://platform.openai.com/docs/guides/function-calling/supported-models).

For models used through Azure OpenAI, feature availability is currently different depending on method of input and deployment type. For details view [Azure OpenAI Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#differences-between-openai-and-azure-openai-gpt-4-turbo-ga-models).

### Supported Amazon Bedrock models {#supported-models-bedrock}

Multiple models available on Amazon Bedrock support function calling. In Bedrock documentation, function calling is often addressed as *Tool Use*, which describes the same concept.
A detailed overview showing which models support function calling (tool use) can be found [here](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features).
 
## Use cases {#use-cases}

Function calling can be used for a variety of use cases including the following:

* Creating assistants that can answer questions about data from your Mendix database or a knowledge base
    * for example, getTicketById (string identifier) or findSimilarTickets (string description)
* Creating assistants that can get information from external APIs
    * for example, getCurrentWeather (string location)
* Extracting structured data from natural language
    * for example, extractBirthday (string birthday)
* Executing actions like creating objects
    * for example, createTicket (string subject); Note that we recommend building user confirmation logic for actions that manipulate data on behalf of the current user.

## Examples {#examples}

The [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) contains multiple examples that demonstrate function calling. Two scenarios are visualized in the diagrams below.

The first diagram shows a simple process where the user is interested in the status of a certain ticket. The LLM connector takes care of handling the tool call response as well as executing the function microflows until the API returns the final assistant's response as visualized by the blue box.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/function-calling/function-calling.png" >}}

In the second diagram, the user did not provide the required input for the function. The model was instructed in the system prompt to not assume parameters and ask for clarification if needed: `Don't make assumptions about what values to plug into functions. Ask for clarification if a user request is ambiguous. If a tool call was not successful, give this information to the user and ask for clarification.`
The second user prompt contains the identifier and the whole message history is sent as part of the request. With this information, the model is now able to answer the initial question of the user.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/function-calling/function-calling-with-clarification.png" >}}
