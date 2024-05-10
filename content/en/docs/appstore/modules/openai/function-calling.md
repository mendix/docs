---
title: "Function Calling"
url: /appstore/modules/openai-connector/function-calling/
category: "Open AI"
linktitle: "Function Calling"
weight: 5
description: "Describes function calling with OpenAI"
tags: ["OpenAI", "generative AI", "AI", "connector", "marketplace", "chatgpt", "genAI", "Azure OpenAI", "function calling", "tools", "ReAct", "chat completions", "text generation"]
---

## 1 Introduction {#introduction}

Function calling enables LLMs (Large Language Models) to connect with external tools to gather information, execute actions, convert natural language into structured data, and much more. Function calling thus enables the model to intelligently decide when to let the Mendix app call one or more predefined functions (microflows) to gather additional information to include in the assistant's response.

OpenAI does not call the function. The model returns a tool call JSON structure that is used to build the input of the functions so that they can be executed as part of the chat completions operation.

## 2 High-level flow {#high-level}

If you use the `ChatCompletions_Execute_WithoutHistory` or `ChatCompletions_Execute_WithHistory` microflows for text generation with function calling, the OpenAI connector will handle the whole process for you in just one step:

1. Invoke the chat completions API with a user prompt and a list of available functions (microflows) with their expected input parameter.

    The model will decide which function (microflow) should be called within the OpenAI connector, if any. The response of the operation will be based on the information you provide and the response of any function (microflow) that was called.

This automates the following process happening inside the OpenAI connector:

1. Invoke the chat completions API with a user prompt and a list of available functions (microflows) with their expected input parameters.
2. The model decides which function (microflow) should be called, if any, based on the user prompt and the available functions. If a function should be called, the content of the assistant's response will be a stringified JSON object containing the input parameter of the function as described in the request.  Note that the model can possibly hallucinate parameters, so they should be validated inside the function microflow before being used.
3. The OpenAI connector parses the string into JSON and executes the function microflow with its input parameter. 
4. The existing list of messages is appended with a new tool message containing the function response. Then, the chat completions API is invoked again and the model can answer your initial prompt with the new information provided by the function.

For more general information on this topic, see [Function Calling](https://platform.openai.com/docs/guides/function-calling).

## 2 Function calling with the OpenAI Connector {#openai-connector}

Function calling is supported for all chat completions operations by adding the optional input parameter [FunctionCollection](/appstore/modules/openai-connector/#functioncollection). Functions in Mendix are essentially microflows that can be registered within the request to the LLM​. The OpenAI connector takes care of handling the tool call response as well as executing the function microflow(s) until the API returns the final assistant's response. Currently, function microflows are limited to one input parameter of type string and must return a string.

Two helper microflows are available to construct the `FunctionCollection` with a list of `Functions`:

* `FunctionCollection_CreateAndAddFunction` can be used to initialize a new `FunctionCollection` and add a new `Function` to it in order to enable [function calling](/appstore/modules/openai-connector/#chatcompletions-functioncalling).
* `FunctionCollection_AddFunction` can be used to add a new `Function` to an existing `FunctionCollection`.

Depending on the user prompt and the available functions, the model can suggest multiple tool calls to the same or different functions or there might be multiple API calls followed by new tools calls until the model returns the final assistant's response.
A way to steer the function calling process is the [ToolChoice](/appstore/modules/openai-connector/#enum-toolchoice) parameter. This optional attribute on the [FunctionCollection](/appstore/modules/openai-connector/#functioncollection) entity controls which (if any) function is called by the model.

{{% alert color="warning" %}}
Function calling is a very powerful capability, but this also introduces potential risks. Function microflows do not respect any entity access rules for the current end-user. You can use `$currentUser` to help you ensure you retrieve and return only information that the end-user is allowed to view; otherwise confidential information can be visible to the current end-user in the assistant's response.

Mendix also strongly advises that you build user confirmation logic into function microflows that have a potential impact on the world on behalf of the end-user, for example sending an email, posting online, or making a purchase.
{{% /alert %}}

## 3 Use cases {#use-cases}

Function calling can be used for a variety of use cases including the following:

* Creating assistants that can answer questions about data from your Mendix database or a knowledge base
    * for example, getTicketById (string identifier) or findSimilarTickets (string description)
* Creating assistants that can get information from external APIs
    * for example, getCurrentWeather (string location)
* Extracting structured data from natural language
    * for example, extractBirthday (string birthday)
* Executing actions like creating objects
    * for example, createTicket (string subject); Note that we recommend building user confirmation logic for actions that manipulate data on behalf of the current user.

## 4 Examples {#examples}

The [OpenAI Showcase Application](https://marketplace.mendix.com/link/component/220475) contains multiple examples that demonstrate function calling. Two scenarios are visualized in the diagrams below.

The first diagram shows a simple process where the user is interested in the status of a certain ticket. The OpenAI connector takes care of handling the tool call response as well as executing the function microflows until the API returns the final assistant's response as visualized by the blue box.

{{< figure src="/attachments/appstore/modules/openai-connector/function-calling/function-calling.png" >}}

In the second diagram, the user did not provide the required input for the function. The model was instructed in the system prompt to not assume parameters and ask for clarification if needed: `Don't make assumptions about what values to plug into functions. Ask for clarification if a user request is ambiguous. If a tool call was not successful, give this information to the user and ask for clarification.`
The second user prompt contains the identifier and the whole message history is sent as part of the request. With this information, the model is now able to answer the initial question of the user.

{{< figure src="/attachments/appstore/modules/openai-connector/function-calling/function-calling-with-clarification.png" >}}
