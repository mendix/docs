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

Function calling enables LLMs (Large Language Models) to connect with external tools to gather information, execute actions, convert natural language in structure data and much more. Thereby, function calling enables the model to intelligently decide when to call one or more predefined functions (microflows) to gather additional information to include in the assistant's response. OpenAI does not call the function; instead, the model returns a tool call JSON structure that is used to build the input of the function(s) so that they can be executed as part of the chat completions operation.

### 1.1 High-level flow {#high-level}

The basic process steps of function calling contain at least the following:
1. Invoke the chat completions API with a user prompt and a list of available functions (microflows) with expected input parameters.
2. Based on the user prompt and the available functions, the model can intelligently decide if it's needed to call one or more functions. If so, the content of the assistant's response will be a stringified JSON object containing the input parameters of the function as desceribed in the request. Note that the model may hallucinate parameters, so they should be validated before the function is actually called.
3. Parse the string into JSON and call the function (microflow) with its input parameters. The microflow runs in the original user's session and `$currentUser` can for example be used to apply secruity constraints.
4. Append the existing list of messages with the function response as a new tool message. Then, invoke the chat completions API again and let the model answer your initial prompt with the new information provided by the function.

For more general information on this topic, see [Function Calling](https://platform.openai.com/docs/guides/function-calling).

### 1.2 Function calling with the OpenAI Connector {#openai-connecor}

Function calling is supported for all chat completions operations by adding the optional input parameter [FunctionCollection](#functioncollection). Functions in Mendix are essentially microflows that can be registered within the request to the LLM​. The OpenAI connector takes care of handling the tool call response as well as executing the function microflow(s) until the API returns the final assistant's response. Currently, function microflows are limited to one input parameter of type string and must return a string.

Two helper microflow are available to construct the `FunctionCollection` with a list of `Functions`:

* `FunctionCollection_CreateAndAddFunction` can be used to initialize a new `FunctionCollection` and add a new `Function` to it in order to enable [function calling](#chatcompletions-functioncalling).
* `FunctionCollection_AddFunction` can be used to add a new `Function` to an existing `FunctionCollection`.

Note that depending on the user prompt and the available functions, the model may suggest multiple tool calls to the same or different functions or there might be multiple API calls followed by new tools calls until the model returns the final assistant's response.
A way to steer the function calling process is the [ToolChoice](/appstore/modules/openai-connector/_index/#enum-toolchoice) parameter. This optional attribute on the [FunctionCollection](/appstore/modules/openai-connector/_index/#functioncollection) entity controls which (if any) function is called by the model.

{{% alert color="warning" %}}
Function calling is a very powerful capability, but this also introduces potential risks. Function microflows do not respect entity access of the current user. Make sure to only retrieve and return information that the user is allowed to view, otherwise confidential information may be visible to the current user in the assistant's response. Furthermore, we strongly advise developer to build user confirmation logic into function microflows that have a potential impact on the world on behalf of the user, such as sending an email, posting online, making a purchase, etc.
{{% /alert %}}

### 1.3 Use cases {#use-cases}

Function calling can be used for a variety of usecases including

* Create assisants that can answer questions about data from your Mendix database or a knowledge base
    * e.g., getTicketById(String identifier) or findSimilarTickets(String description)
* Create assistants that can get information from external APIs
    * e.g., getCurrentWeather(String location)
* Extract structured data from natural language
    * e.g., extractBirthday(String birthday)
* Execute action like creating objects
    * e.g., createTicket(String subject); Note that we recommend building user confirmation logic for actions that manipulate data on behalf of the current user.

### 1.4 Examples {#examples}

The [OpenAI Showcase Application](https://marketplace.mendix.com/link/component/220475) contains multiple examples that demonstrate function calling. Two scenarios are visualized in the diagrams below.

The first diagram shows a simple process where the user is interested in the status of a certain ticket. The OpenAI connector takes care of handling the tool call response as well as executing the function microflow(s) until the API returns the final assistant's response as visualized by the blue box.

{{< figure src="/attachments/appstore/modules/openai-connector/FunctionCalling.png" >}}

In the second diagram, the user did not provide the required input for the function. The model was instructed in the system prompt to not assume parameters and ask for clarification if needed: `Don't make assumptions about what values to plug into functions. Ask for clarification if a user request is ambiguous. If a tool call was not successful, give this information to the user and ask for clarification.`
The second user prompt contains the identifier and the whole message history is sent as part of the request. With this information, the model is now able to answer the initial question of the user.

{{< figure src="/attachments/appstore/modules/openai-connector/FunctionCallingWithClarification.png" >}}