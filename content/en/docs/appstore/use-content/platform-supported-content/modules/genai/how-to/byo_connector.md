---
title: "Build Your Own GenAI Connector"
url: /appstore/modules/genai/how-to/byo-connector
linktitle: "Build Your Own GenAI connector"
weight: 70
description: "A tutorial that describes how to build your own GenAI connector"
---

## Introduction

If you want to create your own connection to the LLM model of your choice while leveraging the chat UI capabilities of the [ConversationalUI](/appstore/modules/genai/genai-for-mx/conversational-ui/) module, which is built using entities from [GenAICommons](/appstore/modules/genai/genai-for-mx/commons/), then this document will guide you on how to get started with building your own GenAI Commons connector.

Building your own GenAI Commons connector offers several practical benefits that streamline development and enhance flexibility. You can reuse [ConversationalUI](/appstore/modules/genai/genai-for-mx/conversational-ui/) components, quickly set up with [starter apps](/appstore/modules/genai/how-to/starter-template/), and switch providers effortlessly. This guide will help you integrate your preferred LLM while maintaining a seamless and user-friendly chat experience.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-byo/connectors_diagram.jpg" >}}

### Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* Basic understanding of GenAI concepts: Review the [Enrich Your Mendix App with GenAI Capabilities](/appstore/modules/genai/) page to gain foundational knowledge and become familiar with the key [concepts](/appstore/modules/genai/get-started/).

* Understanding Large Language Models (LLMs) and Prompt Engineering: Learn about [LLMs](/appstore/modules/genai/get-started/#llm) and [prompt engineering](/appstore/modules/genai/get-started/#prompt-engineering) to effectively use these within the Mendix ecosystem.

### GenAI for Mendix

Before building your own connector, determine whether starting from scratch is necessary. If your provider’s API structure is similar to an existing connector, it is often best to use that connector’s code as a foundation and modify it as needed. For example, if your provider’s REST-based API uses JSON payloads similar to OpenAI’s, you can likely reuse much of the microflows and logic from the OpenAIConnector. Even if you are running a custom model on a private server or another cloud environment, the OpenAIConnector can still serve as a strong starting point, allowing you to adapt and extend it to meet your specific needs. See the blog on [How to Run Open-Source LLMs Locally with the OpenAI Connector and Ollama](https://www.mendix.com/blog/how-to-run-open-source-llms-locally-with-the-openai-connector-and-ollama/), which may be helpful.

However, if your provider uses a different authentication mechanism, requires an SDK (such as Bedrock’s Java SDK), or follows a unique request-response format, you may need to create a new connector. In that case, this document will guide you through the integration process while ensuring full compatibility with the ConversationalUI module.

## Determining the Right Approach for Building Your Own Connector

When developing your own GenAI Connector, there are two possible approaches:

1. Starting from an existing connector (for example, [OpenAIConnector](https://marketplace.mendix.com/link/component/220472)) 
2. Building from scratch (starting from the Echo Connector) 

### Starting from the OpenAIConnector

If your provider's API is identical or very similar to OpenAI's, it may be a good indication that you can duplicate the [OpenAIConnector](https://marketplace.mendix.com/link/component/220472) module and make the necessary adjustments. Some key modifications might include:

* Small changes in the request/response payload (for example, extra or fewer fields, slightly different JSON structure). 
* Modifying the base URL to align with the provider's endpoint structure. 
* Adding additional query parameters in the URL or payload. 
* Adapting the authentication mechanism, for example, switching from API Key to OAuth. 

This approach allows you to reuse a well-structured connector, minimizing development effort while ensuring compatibility with [ConversationalUI](/appstore/modules/genai/genai-for-mx/conversational-ui/) / [GenAICommons](/appstore/modules/genai/genai-for-mx/commons/).

### Building from Scratch

If your provider's API differs significantly from OpenAI's, it is best to start from scratch or use the Echo Connector found in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475). This approach is recommended if the provider requires a different protocol, as it often results in substantial differences in communication structure and authentication methods. In such cases, building a new connector from scratch is typically more efficient than modifying an existing REST-based connector.

Additionally, refer to the [GenAI Commons](/appstore/modules/genai/genai-for-mx/commons/) to explore available out-of-the-box components that can help accelerate development. Pay close attention to:

* The domain model (data structure) to see how existing entities can be reused. 
* The **Connector Building** folders, contain useful microflows and helper activities for working with the provided entities.

If you would like to explore the [GenAICommons](https://marketplace.mendix.com/link/component/227933) module, check out the [public repository](https://github.com/mendix/genai-showcase-app).

## Building Your Own Connector

{{% alert color="info" %}}
The Echo connector is a module in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) and can be used as a starting point to build your own connector. It contains a few example pages to configure access and models at runtime while providing a foundation for compatibility  with [GenAICommons](/appstore/modules/genai/genai-for-mx/commons/) and [ConversationalUI](/appstore/modules/genai/genai-for-mx/conversational-ui/).
{{% /alert %}}

### Chat Completions: With History

This section allows you to focus on implementing chat completions, a fundamental capability supported by most LLMs. To make the process more practical, develop an example connector—the Echo Connector. This simple connector returns the similar text as output provided as input while remaining fully compatible with the chat capabilities of GenAICommons and ConversationalUI.
During development, you will get the key considerations to keep in mind when creating your own connector. You can either start from scratch and build your own connector or use the finished Echo Connector from the GenAI Showcase App and modify it to fit your use case.

To enable chat completion, the key microflow to consider is `ChatCompletions_WithHistory`, located in the GenAICommons module. 

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-byo/ChatCompletions_WithHistory.png" >}}

This microflow plays a crucial role as it derives and calls the appropriate microflow from the provided DeployedModel, ensuring that the module remains independent of individual connectors. This is especially important for modules like ConversationalUI, which should work seamlessly with any connector following the same principles.

To integrate properly, the microflow must supply two essential input objects:

* [DeployedModel](/appstore/modules/genai/genai-for-mx/commons/#deployed-model) - Represents the specific model being used and determines which connector (microflow) is being called.
* [Request](/appstore/modules/genai/genai-for-mx/commons/#request) - Contains the details of the user's input and conversation history as well as other configurations.

And one output object:

* [Response](/appstore/modules/genai/genai-for-mx/commons/#response) - Contains the details of the LLM's results.

Since this structure is already standardized, no modifications are needed for the `Request` entity. Instead, when implementing a new connector, map the request data from the existing `Request` object to the format required by the specific provider—in this case, the Echo Connector.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-byo/GenAICommons_TextFiles_DomainModel.png" >}}

Just as the `Request` entity structures input for the LLM, the Response entity defines how the model's output must be formatted for proper display in the chat interface. When an LLM returns a result, it must be converted into the `Response` entity’s format to ensure compatibility with GenAICommons and ConversationalUI.

The `Response` entity includes key attributes such as:

* Messages - A single message that the model generated. 
* Tool Call - A request from the model to call one or multiple tools, for example, a microflow. Available tools are defined in the request via the [ToolCollection](/appstore/modules/genai/genai-for-mx/commons/#toolcollection).

Since different providers return responses in different formats, when implementing a new connector, map the provider’s response to match the `Response` entity’s structure. If it is required to have additional attributes on the `Request` or `Response` entity, it is recommended to extend those entities in your own connector by either creating an association or a specialization. For example, you can find both patterns being applied in the OpenAIConnector (association to `Request`) and AmazonBedrockConnector (specialization of `Response`).

### Deployed Model

#### Specialization

The `Request` and `Response` objects are essential for enabling chat functionalities in ConversationalUI. However, to correctly call and interact with an LLM, the model must be properly configured. This is where the `DeployedModel` entity becomes essential.

The `DeployedModel` represents a GenAI model that the Mendix application can invoke, ensuring connector knows which microflow to call and how to communicate with the model. It also includes a set of generic attributes commonly used across different LLM providers. However, since each provider may require additional model-specific details, the `DeployedModel` entity does not cover all necessary attributes.

To accommodate this, you will need to create a new entity within your connector that inherits from `GenAICommons.DeployedModel`. This allows you to extend it with any provider-specific attributes required for your integration.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-byo/GenAICommons_DeployedModel_DM.png" >}}

For the Echo Connector, a specialization of `DeployedModel` is created to include any additional attributes required for proper functionality.

#### Authentication {#authentication}

Your model will require an authentication method based on your provider’s requirements. Since authentication mechanisms vary, the connector must handle credentials and access tokens appropriately. This may involve API keys, OAuth tokens, or other authentication strategies depending on the provider you are integrating with.

To enable seamless model invocation, creating an entity to store authentication details is recommended. A `Configuration` entity is associated with the specialized `EchoDeployedModel`, allowing users to manage credentials separately from the deployed model. The specific attributes required in this `Configuration` entity depend on the model’s authentication method and requirements. A basic example is shown below:

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-byo/EchoConnector_DomainModel.png" >}}

When storing sensitive authentication data, use encryption methods to keep the application secure. For reference, the Echo Connector implementation in the GenAI Showcase App provides an example of how this can be set up.

#### Microflow

The `Microflow` attribute, found in the generic `DeployedModel` entity, must be set when creating or saving `DeployedModel` objects. This attribute is essential as it determines which microflow will be executed when invoking `ChatCompletions_WithHistory`, ensuring that the correct process runs based on the specified microflow. This design keeps the action provider-agnostic, allowing different models to integrate seamlessly as long as they follow the same `request-in` and `response-out` interface.

When creating specialized `DeployedModel` objects, the `Microflow` attribute must be set to the appropriate microflow that will handle requests for the model—in this case, the Echo model’s implementation. To set this attribute, use the `DeployedModel_Create` or `DeployedModel_SetMicroflow` Java actions available in the GenAICommons module.

DeployedModel_Create       |  DeployedModel_SetMicroflow
:-------------------------:|:-------------------------:
{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-byo/DeployedModel_Create.png" >}}  |  {{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-byo/DeployedModel_SetMicroflow.png" >}}

Define a microflow that will handle the request and generate a response in the expected format. This microflow will be used as the Microflow attribute for the `EchoDeployedModel` objects, ensuring that when an Echo model is called, it follows the same structure required for chat interactions.

The following microflow was created to be used as the `Microflow` attribute for the `EchoDeployedModel` objects: 

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-byo/EchoDeployedModel_CallLLM.png" >}}

As mentioned earlier, in the EchoConnector, the microflow simply returns the input provided by the user. To achieve this, the latest user message must be retrieved from the Request, and a Response along with an assistant's message must be created.

Since the microflow follows the same input parameters and returns a `Response` object, it remains fully compatible with the reusable components in the GenAICommons and ConversationalUI modules. This ensures that responses are seamlessly processed and displayed in existing chat interfaces without any additional UI customization.

{{% alert color="info" %}}
If you would like to track the consumption usage of tokens of your models, please look into the `GenAICommons.Usage_Create_TextAndFiles` microflow and related [documentation](/appstore/modules/genai/genai-for-mx/commons/#token-usage). This microflow can be added at the end of your microflow.
{{% /alert %}}

### Testing the Echo connector

To test the connector, first set up the configuration and deployed models. While the setup approach is flexible, the Echo Connector includes UI components to configure settings and create `EchoDeployedModel` objects, which can be used in the GenAI Showcase App's Chat UI examples.

To set this up:

1. Find **Echo Configurations** in the **Management** section of the homepage. This will lead you to the page where the configuration can be set up for the Echo Connector.
2. Click **New**, fill in the required fields, and click **Save**. For this example, the input can be left empty as no real credentials are needed. When you click **Save**, two `EchoDeployedModel` objects are created for the new configuration. Since the Echo Connector simply returns the request content as the response, these serve as test models for the Chat UI examples. In a custom connector, this step could involve importing available models based on the configuration or allowing the admin to create models manually.
3. After the configuration and the models have been created, go back to the homepage and open one of the showcases in the **Conversational UI** section.
4. In the **Model** dropdown, select one of the models created by the Echo Connector and start chatting.
