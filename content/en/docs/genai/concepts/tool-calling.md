---
title: "Tool Calling"
url: /agents/function-calling/
linktitle: "Tool Calling"
weight: 20
description: "Describes how tool calling enables LLMs to connect with external tools and microflows in Mendix apps."
aliases:
    - /appstore/modules/genai/function-calling/
---

## Introduction {#introduction}

Tool calling (also known as function calling) enables [large language models (LLMs)](/agents/glossary/#large-language-model) to connect with external tools to gather information, run actions, convert natural language into structured data, and more. This enables the model to decide when to let the Mendix app call one or more predefined functions (microflows) to gather additional information for the assistant's response.

The LLM (for example, OpenAI ChatGPT or Anthropic Claude) does not call the function directly. The model returns a tool call JSON structure that is used to build the input of the functions so they can be run as part of the chat completions operation.

## High-Level Flow {#high-level}

If you use the `Chat Completions (without history)` or `Chat Completions (with history)` actions for text generation with tool calling, the LLM connector handles the whole process in one step:

1. Invoke the chat completions API with a user prompt and a collection of available functions (microflows) with their expected input parameter.

    The model decides which function (microflow) to call within the LLM connector, if any. The response is based on the information you provide and the response of any function (microflow) that was called.

This automates the following process inside the LLM connector:

1. Invoke the chat completions API with a user prompt and a collection of available functions (microflows) with their expected input parameters.
2. The model decides which function (microflow) to call, if any, based on the user prompt and the available functions. If a function is to be called, the content of the assistant's response is a stringified JSON object containing the input parameters of the function as described in the request. Note that the LLM can hallucinate parameters, so it is important to validate parameters inside the function microflow before using them.
3. The LLM connector parses the string into JSON and runs the function microflow with its input parameters.
4. The existing list of messages is appended with a new tool message containing the function response. The chat completions API is then invoked again and the model can answer the initial prompt with the new information provided by the function.

For more information, see [OpenAI: Function Calling](https://platform.openai.com/docs/guides/function-calling) or [Anthropic Claude: Tool Use](https://docs.anthropic.com/en/docs/tool-use).

### User Control {#user-control}

Sometimes, tool calls should not run immediately but first require confirmation from the user—for example, when actions are taken on behalf of the user, such as sending an email or triggering a workflow. In such cases, tools can be configured for [User Access and Approval](/agents/agents-kit-2/reference-guide/commons/#enum-useraccessapproval) to pause function execution until the user decides. If the user rejects the call, the LLM is informed of the decision and may find another way to fulfill the request.

## Tool Calling with the GenAI Commons Module and the LLM Connectors {#llm-connector}

All platform-supported connectors ([Mendix Cloud GenAI](/agents/agents-kit-2/mx-cloud-genai/mxgenai-connector/), [OpenAI](/agents/agents-kit-2/reference-guide/external-connectors/openai/), and [Amazon Bedrock Connector](/agents/reference-guide/external-connectors/bedrock/)) support tool calling by leveraging the [GenAI Commons module](/agents/agents-kit-2/reference-guide/commons/). Tool calling is supported for all chat completions operations. All entity, attribute, and activity names in this section refer to the GenAI Commons module.

Functions in Mendix are microflows that can be registered within the request to the LLM. The LLM connector handles the tool call response and runs the function microflows until the LLM returns the final assistant's response. Function microflows can have no, one, or multiple primitive input parameters such as Boolean, Datetime, Decimal, Enumeration, Integer, or String. They may also accept the [Request](/agents/agents-kit-2/reference-guide/commons/#request) or [Tool](/agents/agents-kit-2/reference-guide/commons/#tool) objects as inputs. The microflow can only return a String value.

To enable tool calling, a `ToolCollection` object must be added to the request, associated with one or more `Function` objects.

A helper operation is available in [GenAI Commons](/agents/agents-kit-2/reference-guide/commons/) to construct the `ToolCollection` with a list of `Functions`:

* `Tools: Add Function to Request` initializes a new `ToolCollection` and adds a new `Function` to enable tool calling.

Depending on the user prompt and the available functions, the model can suggest one or more tool calls to the same or different functions. There may also be multiple API calls followed by new tool calls until the model returns the final assistant's response.

The `ToolChoice` parameter controls this process. This optional attribute on the Request entity controls which function (if any) the model calls.

A helper operation is available in GenAI Commons to define the Tool Choice:

* `Tools: Set Tool Choice` sets the `ToolChoice` parameter and the `ToolCollection_ToolChoice` association accordingly.

{{% alert color="warning" %}}

Tool calling is a powerful capability, but use it with caution. Function microflows run in the context of the current user without enforcing entity access. Use `$currentUser` in XPath queries to ensure you retrieve and return only information the end-user is allowed to view; otherwise, confidential information may become visible in the assistant's response.

Mendix recommends building user confirmation logic into function microflows that could have an impact on behalf of the end-user, such as sending an email, posting online, or making a purchase. For details, see the [User Control](#user-control) section above.
{{% /alert %}}

### Supported OpenAI Models {#supported-models-openai}

OpenAI's latest GPT-3.5 Turbo, GPT-4 Turbo, and GPT-4o models are trained with tool calling (function calling) data. Older model versions may not support parallel tool calls. For details, see [OpenAI Documentation](https://platform.openai.com/docs/guides/function-calling/supported-models).

For models used through Microsoft Foundry, feature availability differs depending on the method of input and deployment type. For details, see [Microsoft Foundry Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#differences-between-openai-and-azure-openai-gpt-4-turbo-ga-models).

### Supported Amazon Bedrock Models {#supported-models-bedrock}

Multiple models available on Amazon Bedrock support tool calling. In the Bedrock documentation, tool calling is often referred to as "Tool Use," which describes the same concept. For an overview of which models support tool calling, see [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features).
 
## Use Cases {#use-cases}

Tool calling supports a variety of use cases, including the following:

* Creating assistants that can answer questions about data from your Mendix database or a knowledge base
    * Example: getTicketById (integer identifier) or findSimilarTickets (string description)
* Creating assistants that can retrieve information from external APIs
    * Example: getCurrentWeather (string location)
* Extracting structured data from natural language
    * Example: extractBirthday (string birthday)
* Running actions like creating objects
    * Example: createTicket (string subject). Mendix recommends building user confirmation logic for actions that manipulate data on behalf of the current user.

## Examples {#examples}

The [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) contains multiple examples that demonstrate tool calling. Three scenarios are shown in the diagrams below.

The first diagram shows a simple process where the user asks about the status of a ticket. The LLM connector handles the tool call response and runs the function microflows until the API returns the final assistant's response, shown by the blue box.

{{< figure src="/attachments/genai/function-calling/function-calling.png" alt="" >}}

In the second diagram, the user does not provide the required input for the function. The model is instructed in the system prompt not to assume parameters and to ask for clarification if needed: `Don't make assumptions about what values to plug into functions. Ask for clarification if a user request is ambiguous. If a tool call was not successful, give this information to the user and ask for clarification.`

The second user prompt contains the identifier, and the full message history is sent as part of the request. With this information, the model can answer the user's initial question.

{{< figure src="/attachments/genai/function-calling/function-calling-with-clarification.png" alt="" >}}

In the last diagram, the `Ticket_CreateNew` function is registered with `UserConfirmationRequired`, so it only runs when the user confirms it. The tool call is shown to the user, who can confirm or reject it. If rejected, the microflow does not run and the LLM is informed of the decision. If confirmed, the microflow runs and returns the response to the LLM as usual.

{{< figure src="/attachments/genai/function-calling/function-calling-with-user-control.png" alt="" >}}
