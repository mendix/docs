---
title: "Build Your Own GenAI Connector"
url: /agents/agents-kit-2/how-to/byo-connector/
linktitle: "Build Your Own GenAI connector"
weight: 70
description: "Agents Kit 2: Build your own GenAI connector to integrate alternative AI providers with Agents Kit."
aliases:
    - /agents/how-to/byo-connector/
    - /appstore/modules/genai/how-to/byo-connector/
---

## Introduction

This guide explains how to build a custom connector that uses [GenAICommons](/agents/agents-kit-2/reference-guide/commons/) entities to integrate the large language model (LLM) of your choice with the [ConversationalUI](/agents/agents-kit-2/reference-guide/conversational-ui/) module.

Build a custom connector when you need to integrate an LLM provider that is not supported by the existing [Agents Kit connectors](/agents/agents-kit-2/#connectors). Building a connector that follows the [GenAICommons](/agents/agents-kit-2/reference-guide/commons/) interface means that your connector is compatible with other Agents Kit modules, so you can reuse chat UI components from [ConversationalUI](/agents/agents-kit-2/reference-guide/conversational-ui/), build agentic functionality with [Agent Commons](/agents/agents-kit-2/reference-guide/agent-commons/), and set up quickly using [starter apps](/agents/agents-kit-2/#starter-apps) such as the Blank GenAI App.

{{< figure src="/attachments/genai/howto-byo/connectors_diagram.png" alt="" >}}

### Prerequisites

Before starting this guide, complete the following prerequisites:

* Be on Mendix Studio Pro 11.12 or higher
* Basic understanding of GenAI concepts – Review the [Enrich Your Mendix App with Agentic Capabilities](/agents/) page to gain foundational knowledge and become familiar with the key [concepts](/agents/get-started/).
* Understanding Large Language Models (LLMs) and prompt engineering – Read about [LLMs](/agents/get-started/#llm) and [prompt engineering](/agents/get-started/#prompt-engineering).

### GenAI for Mendix

Before building your own connector, determine whether starting from scratch is necessary. If your provider’s API structure is similar to an existing connector, you can use that connector’s code as a foundation and modify it as needed.

For example, if your provider’s REST-based API uses JSON payloads similar to OpenAI’s, you can reuse much of the microflows and logic from the OpenAIConnector. The OpenAI connector serves as a strong starting point even if you are running a custom model on a private server or another cloud environment. You can adapt and extend it to meet your needs. For details, see [How to Run Open-Source LLMs Locally with the OpenAI Connector and Ollama](https://www.mendix.com/blog/how-to-run-open-source-llms-locally-with-the-openai-connector-and-ollama/).

However, you may need to create a new connector if your provider uses a different authentication mechanism, requires an SDK (such as Bedrock’s Java SDK), or follows a unique request-response format. This document guides you through the integration process and ensures full compatibility with the ConversationalUI module.

## Determining the Right Approach for Building Your Own Connector

When developing your own GenAI Connector, use one of these approaches:

* Start from an existing connector (for example, [OpenAIConnector](https://marketplace.mendix.com/link/component/220472)) 
* Build from scratch (starting from the Echo connector) 

### Starting from the OpenAIConnector

If your provider's API is identical or very similar to OpenAI's, you may be able to duplicate the [OpenAIConnector](https://marketplace.mendix.com/link/component/220472) module and make the necessary adjustments. Key modifications may include the following:

* Small changes in the request/response payload (for example, extra or fewer fields, slightly different JSON structure)
* Modifying the base URL to align with the provider's endpoint structure
* Adding additional query parameters in the URL or payload
* Adapting the authentication mechanism (for example, switching from API Key to OAuth) 

This approach reuses a well-structured connector, minimizes development effort, and ensures compatibility with [ConversationalUI](/agents/agents-kit-2/reference-guide/conversational-ui/) and [GenAICommons](/agents/agents-kit-2/reference-guide/commons/).

### Building from Scratch

If your provider's API differs significantly from OpenAI's, start from scratch or use the Echo connector found in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475). Use this approach if the provider requires a different protocol. Different protocols often result in substantial differences in communication structure and authentication methods. In such cases, building a new connector from scratch is more efficient than modifying an existing REST-based connector.

Refer to the [GenAI Commons](/agents/agents-kit-2/reference-guide/commons/) to explore available out-of-the-box components that accelerate development. Pay close attention to the following:

* The domain model (data structure) to see how existing entities can be reused
* The **Connector Building** folders, which contain useful microflows and helper activities for working with the provided entities

To explore the [GenAICommons](https://marketplace.mendix.com/link/component/227933) module, check out the [public repository](https://github.com/mendix/genai-showcase-app).

## Building Your Own Connector

{{% alert color="info" %}}
The Echo connector is a module in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475). Use it as a starting point to build your own connector. It contains example pages to configure access and models at runtime and provides a foundation for compatibility with [GenAICommons](/agents/agents-kit-2/reference-guide/commons/) and [ConversationalUI](/agents/agents-kit-2/reference-guide/conversational-ui/).
{{% /alert %}}

### Chat Completions: With History

This section focuses on implementing chat completions, a fundamental capability supported by most LLMs. To make the process more practical, Mendix has developed an example connector: the Echo connector. This simple connector returns similar text as output provided as input while remaining fully compatible with the chat capabilities of GenAICommons and ConversationalUI.

During development, you learn the key considerations for creating your own connector. Start from scratch and build your own connector, or use the finished Echo connector from the GenAI Showcase App and modify it for your use case.

To enable chat completion, the key microflow to consider is `ChatCompletions_WithHistory`, located in the GenAICommons module. This microflow derives and calls the appropriate microflow from the provided DeployedModel. This ensures that the module remains independent of individual connectors. This is especially important for modules like ConversationalUI, which should work seamlessly with any connector following the same principles.

To integrate properly, the microflow must supply two essential input objects:

* [DeployedModel](/agents/agents-kit-2/reference-guide/commons/#deployed-model) – Represents the specific model being used and determines which connector (microflow) is being called.
* [Request](/agents/agents-kit-2/reference-guide/commons/#request) – Contains the details of the user's input and conversation history as well as other configurations.

And one output object:

* [Response](/agents/agents-kit-2/reference-guide/commons/#response) – Contains the details of the LLM's results.

Since this structure is already standardized, the `Request` entity needs no modifications. Instead, when implementing a new connector, map the request data from the existing `Request` object to the format required by the specific provider—in this case, the Echo connector.

{{< figure src="/attachments/genai/howto-byo/GenAICommons_TextFiles_DomainModel.png" alt="" >}}

Just as the `Request` entity structures input for the LLM, the `Response` entity defines how to format the model’s output for proper display in the chat interface. When an LLM returns a result, convert it to the `Response` entity’s format to ensure compatibility with GenAICommons and ConversationalUI.

The `Response` entity includes key attributes such as:

* Message – A single message that the model generated
* Tool Call – A request from the model to call one or multiple tools (for example, a microflow). Available tools are defined in the request via the [ToolCollection](/agents/agents-kit-2/reference-guide/commons/#toolcollection).

Because different providers return responses in different formats, map the provider’s response to match the `Response` entity’s structure when implementing a new connector. If you need additional attributes on the `Request` or `Response` entity, extend those entities in your own connector by creating an association or a specialization. For example, both patterns are applied in the OpenAIConnector (association to `Request`) and AmazonBedrockConnector (specialization of `Response`).

### Deployed Model

#### Specialization

The `Request` and `Response` objects are essential for enabling chat functionalities in ConversationalUI. However, to correctly call and interact with an LLM, the model must be properly configured. This is where the `DeployedModel` entity becomes essential.

The `DeployedModel` represents a GenAI model that the Mendix app can invoke. It tells your app module which microflow to call and how to communicate with the model. It includes generic attributes commonly used across different LLM providers. However, because each provider may require additional model-specific details, the `DeployedModel` entity does not cover all necessary attributes.

To accommodate this, create a new entity within your connector that inherits from `GenAICommons.DeployedModel` and extend it with provider-specific attributes required for your integration.

{{< figure src="/attachments/genai/howto-byo/GenAICommons_DeployedModel_DM.png" alt="" >}}

For the Echo connector, a specialization of `DeployedModel` is created to include any additional attributes required for proper functionality.

#### Authentication {#authentication}

Your model requires an authentication method based on your provider’s requirements. Because authentication mechanisms vary, the connector must handle credentials and access tokens appropriately. Depending on the provider, this may involve API keys, OAuth tokens, or other authentication strategies.

To enable seamless model invocation, Mendix recommends creating an entity to store authentication details. A `Configuration` entity is associated with the specialized `EchoDeployedModel`, allowing users to manage credentials separately from the deployed model. The specific attributes required in this `Configuration` entity depend on the model’s authentication method and requirements. A basic example is shown below:

{{< figure src="/attachments/genai/howto-byo/EchoConnector_DomainModel.png" alt="" >}}

When storing sensitive authentication data, use encryption methods to keep the application secure. The Echo connector implementation in the GenAI Showcase App provides an example of this setup.

#### Microflow

Set the `Microflow` attribute in the generic `DeployedModel` entity when creating or saving `DeployedModel` objects. This attribute determines which microflow executes when invoking `ChatCompletions_WithHistory` and ensures that the correct process runs based on the specified microflow. This design keeps the action provider-agnostic and allows different models to integrate seamlessly as long as they follow the same `request-in` and `response-out` interface.

When creating specialized `DeployedModel` objects, set the `Microflow` attribute to the microflow that handles requests for the model—in this case, the Echo model’s implementation. To set this attribute, use the `DeployedModel_Create` or `DeployedModel_SetMicroflow` Java actions available in the GenAICommons module.

DeployedModel_Create       |  DeployedModel_SetMicroflow
:-------------------------:|:-------------------------:
{{< figure src="/attachments/genai/howto-byo/DeployedModel_Create.png" alt="" >}}  |  {{< figure src="/attachments/genai/howto-byo/DeployedModel_SetMicroflow.png" alt="" >}}

Define a microflow that handles the request and generates a response in the expected format. Use this microflow as the Microflow attribute for the `EchoDeployedModel` objects to ensure that when an Echo model is called, it follows the same structure required for chat interactions.

The following microflow was created as the `Microflow` attribute for the `EchoDeployedModel` objects: 

{{< figure src="/attachments/genai/howto-byo/EchoDeployedModel_CallLLM.png" alt="" >}}

As mentioned earlier, in the Echo connector, the microflow returns the input provided by the user. To achieve this, retrieve the latest user message from the Request and create a Response along with an assistant's message.

Because the microflow follows the same input parameters and returns a `Response` object, it remains fully compatible with the reusable components in the GenAICommons and ConversationalUI modules. Responses are seamlessly processed and displayed in existing chat interfaces without additional UI customization.

{{% alert color="info" %}}
To track the consumption usage of tokens for your models, see the `GenAICommons.Usage_Create_TextAndFiles` microflow and related [documentation](/agents/agents-kit-2/reference-guide/commons/#token-usage). Add this microflow at the end of your microflow.
{{% /alert %}}

### Testing the Echo Connector

To test the connector, set up the configuration and deployed models. The Echo connector includes UI components to configure settings and create `EchoDeployedModel` objects, which can be used in the GenAI Showcase App's Chat UI examples.

To set this up:

1. Find **Echo Configurations** in the **Management** section of the homepage. This leads you to the page where you can set up the configuration for the Echo connector.
2. Click **New**, fill in the required fields, and click **Save**. For this example, leave the input empty because no real credentials are needed. When you click **Save**, two `EchoDeployedModel` objects are created for the new configuration. Because the Echo connector simply returns the request content as the response, these serve as test models for the Chat UI examples. In a custom connector, this step involves importing available models based on the configuration or allowing the admin to create models manually.
3. After you create the configuration and the models, go back to the homepage and open one of the showcases in the **Conversational UI** section.
4. In the **Model** drop-down list, select one of the models created by the Echo connector and start chatting.
