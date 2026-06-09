---
title: "Tool Calling"
url: /agents/function-calling/
linktitle: "Tool Calling"
weight: 20
description: "Describes tool calling in Mendix"
aliases:
    - /appstore/modules/genai/function-calling/
---

## Introduction {#introduction}

Tool calling (also known as function calling) enables LLMs (Large Language Models) to connect with external tools to gather information, execute actions, convert natural language into structured data, and much more. Tool calling thus enables the model to intelligently decide when to let the Mendix app call one or more predefined functions (microflows) to gather additional information to include in the assistant's response.

The LLM (e.g. OpenAI ChatGPT, Anthropic Claude) does not call the function. The model returns a tool call JSON structure that is used to build the input of the functions so that they can be executed as part of the chat completions operation.

## High-Level Flow {#high-level}

If you use the `Chat Completions (without history)` or `Chat Completions (with history)` actions for text generation with tool calling, the LLM connector will handle the whole process for you in just one step:

1. Invoke the chat completions API with a user prompt and a collection of available functions (microflows) with their expected input parameter.

    The model will decide which function (microflow) should be called within the LLM connector, if any. The response of the operation will be based on the information you provide and the response of any function (microflow) that was called.

This automates the following process happening inside the LLM connector:

1. Invoke the chat completions API with a user prompt and a collection of available functions (microflows) with their expected input parameters.
2. The model decides which function (microflow) should be called, if any, based on the user prompt and the available functions. If a function should be called, the content of the assistant's response will be a stringified JSON object containing the input parameters of the function as described in the request.  Note that the LLM can possibly hallucinate parameters, so they should be validated inside the function microflow before being used.
3. The LLM connector parses the string into JSON and executes the function microflow with its input parameters. 
4. The existing list of messages is appended with a new tool message containing the function response. Then, the chat completions API is invoked again and the model can answer the initial prompt with the new information provided by the function.

For more general information on this topic, see [OpenAI: Function Calling](https://platform.openai.com/docs/guides/function-calling) or [Anthropic Claude: Tool Use](https://docs.anthropic.com/en/docs/tool-use).

### User Control {#user-control}

Sometimes, tool calls should not be executed immediately, and should first require confirmation from the user, for example, if actions are taken on behalf of the user such as sending an email or triggering a workflow. In such cases, tools can be configured for [User Access and Approval](/agents/genai-for-mx/commons/#enum-useraccessapproval) to stop the function execution until the user takes a decision. If the user rejects the call, the LLM gets informed about the decision and might find another way to fulfill the user's request.

## Tool Calling with the GenAI Commons Module and the LLM Connectors {#llm-connector}

All platform-supported connectors ([Mendix Cloud GenAI](/agents/mx-cloud-genai/mxgenai-connector/), [OpenAI](/agents/reference-guide/external-connectors/openai/), and [Amazon Bedrock Connector](/appstore/modules/aws/amazon-bedrock/)) support tool calling by leveraging the [GenAI Commons module](/agents/genai-for-mx/commons/). Tool calling is supported for all chat completions operations. All entity, attribute, and activity names in this section refer to the GenAI Commons module. 

Functions in Mendix are essentially microflows that can be registered within the request to the LLM​. The LLM connector takes care of handling the tool call response as well as executing the function microflows until the LLM returns the final assistant's response. Function microflows can have none, a single, or multiple primitive input parameters such as Boolean, Datetime, Decimal, Enumeration, Integer or String. Additionally, they may accept the [Request](/agents/genai-for-mx/commons/#request) or [Tool](/agents/genai-for-mx/commons/#tool) objects as inputs. The microflow can only return a String value.

To enable tool calling, a `ToolCollection` object must be added to the request, which is associated to one or many `Function` objects. 

A helper operation is available in [GenAI Commons](/agents/genai-for-mx/commons/) to construct the `ToolCollection` with a list of `Functions`:

* `Tools: Add Function to Request` can be used to initialize a new `ToolCollection` and add a new `Function` to it in order to enable tool calling.

Depending on the user prompt and the available functions, the model can suggest one or multiple tool calls to the same or different functions or there might be multiple API calls followed by new tools calls until the model returns the final assistant's response.
A way to steer the tool calling process is the `ToolChoice` parameter. This optional attribute on the Request entity controls which (if any) function is called by the model.

A helper operation is available in GenAI Commons to define the Tool Choice: 

* `Tools: Set Tool Choice` can be used to set the `ToolChoice` parameter and the `ToolCollection_ToolChoice` association accordingly.

{{% alert color="warning" %}}

Function calling is a very powerful capability, but may be used with caution. Note that function microflows run in the context of the current user without enforcing entity-access. You can use `$currentUser` in XPath queries to ensure you retrieve and return only information that the end-user is allowed to view; otherwise confidential information may become visible to the current end-user in the assistant's response.

Mendix also strongly advises that you build user confirmation logic into function microflows that have a potential impact on the world on behalf of the end-user, for example, sending an email, posting online, or making a purchase, see [user control](#user-control) above.
{{% /alert %}}

### Supported OpenAI Models {#supported-models-openai}

OpenAI's latest GPT-3.5 Turbo, GPT-4 Turbo, and GPT-4o models are trained with tool calling (function calling) data. Older model versions may not support parallel tool calls. For more details, see [OpenAI Documentation](https://platform.openai.com/docs/guides/function-calling/supported-models).

For models used through Microsoft Foundry, feature availability is currently different depending on method of input and deployment type. For details, see [Microsoft Foundry Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#differences-between-openai-and-azure-openai-gpt-4-turbo-ga-models).

### Supported Amazon Bedrock Models {#supported-models-bedrock}

Multiple models available on Amazon Bedrock support tool calling. In the Bedrock documentation, tool calling is often addressed as *Tool Use*, which describes the same concept. For a detailed overview showing which models support tool calling (tool use), refer to [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features).
 
## Use Cases {#use-cases}

Tool calling can be used for a variety of use cases including the following:

* Creating assistants that can answer questions about data from your Mendix database or a knowledge base
    * for example, getTicketById (integer identifier) or findSimilarTickets (string description)
* Creating assistants that can get information from external APIs
    * for example, getCurrentWeather (string location)
* Extracting structured data from natural language
    * for example, extractBirthday (string birthday)
* Executing actions like creating objects
    * for example, createTicket (string subject); Note that we recommend building user confirmation logic for actions that manipulate data on behalf of the current user.

## Examples {#examples}

The [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) contains multiple examples that demonstrate tool calling. Three scenarios are visualized in the diagrams below.

The first diagram shows a simple process where the user is interested in the status of a certain ticket. The LLM connector takes care of handling the tool call response as well as executing the function microflows until the API returns the final assistant's response as visualized by the blue box.

{{< figure src="/attachments/genai/function-calling/function-calling.png" alt="" >}}

In the second diagram, the user does not provide the required input for the function. The model is instructed in the system prompt not to assume parameters and ask for clarification if needed: `Don't make assumptions about what values to plug into functions. Ask for clarification if a user request is ambiguous. If a tool call was not successful, give this information to the user and ask for clarification.`

The second user prompt contains the identifier, and the whole message history is sent as part of the request. With this information, the model is now able to answer the initial question of the user.

{{< figure src="/attachments/genai/function-calling/function-calling-with-clarification.png" alt="" >}}

In the last diagram, the `Ticket_CreateNew` function is registered with `UserConfirmationRequired`, so it is only executed when user confirms it. The tool call is shown to the user, who can decide to confirm or reject it. If rejected, the microflow will not be executed, and the LLM gets informed about the decision. If confirmed, the microflow gets executed and returns the response as usual to the LLM.

{{< figure src="/attachments/genai/function-calling/function-calling-with-user-control.png" alt="" >}}
