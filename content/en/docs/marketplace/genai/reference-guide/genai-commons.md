---
title: "GenAI Commons"
url: /appstore/modules/genai/genai-for-mx/commons/
linktitle: "GenAI Commons"
description: "Describes the purpose, configuration and usage of the GenAI Commons module from the Mendix Marketplace that allows developers to integrate GenAI common principles and patterns into their Mendix app."
weight: 10
aliases:
    - /appstore/modules/genai-commons/
    - /appstore/modules/genai/commons/
---

## Introduction {#introduction}

The [GenAI Commons](https://marketplace.mendix.com/link/component/239448) module combines common generative AI patterns found across various models on the market. Platform-supported GenAI-connectors use the underlying data structures and their operations. This makes it easier to develop vendor-agnostic AI-enhanced apps with Mendix, for example by using one of the connectors or the [Conversational UI](/appstore/modules/genai/conversational-ui/) module.

If two different connectors both adhere to the GenAI Commons module, they can be easily swapped, which reduces dependency on the model providers. In addition, the initial implementation of AI capabilities using the connectors becomes a drag-and-drop experience, so that developers can quickly get started. The module exposes useful operations which developers can use to build a request to a large language model (LLM) and to handle the response.

Developers who want to connect to another LLM provider or their own service are advised to use the GenAI Commons module as well. This speeds up the development and ensures that common principles are taken into account. Lastly, other developers or consumers of the connector can adapt to it more quickly.

### Limitations {#limitations}

The current scope of the module is focused on text and image generation, as well as embeddings and knowledge base use cases.

### Dependencies {#dependencies}

The GenAI Commons module requires Mendix Studio Pro version 10.24.0 or above.

You must also download the [Community Commons](/appstore/modules/community-commons-function-library/) module.

## Installation {#installation}

If you are starting from the [Blank GenAI app](https://marketplace.mendix.com/link/component/227934), or the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926), the GenAI Commons module is already included and does not need to be downloaded manually.

If you start from a blank app, or have an existing project where you want to include a connector for which the GenAI Commons module is required, you must install GenAI Commons manually. First, install the [Community Commons](/appstore/modules/community-commons-function-library/) module, and then follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to install the [GenAI Commons](https://marketplace.mendix.com/link/component/239448) module.

## Implementation {#implementation}

GenAI Commons is the foundation of large language model implementations within the [Mendix Cloud GenAI Connector](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/), [OpenAI connector](/appstore/modules/genai/reference-guide/external-connectors/openai/), and the [Amazon Bedrock connector](/appstore/modules/genai/bedrock/), but may also be used to build other GenAI service implementations on top of it by reusing the provided domain model and exposed actions.

Although GenAI Commons technically defines additional capabilities typically found in chat completion APIs, such as image processing (vision) and tools (function calling), it depends on the connector module of choice for whether these are actually implemented and supported by the LLM. To learn which additional capabilities a connector supports and for which models these can be used, refer to the documentation of that connector.

### Token Usage

GenAI Commons can help store usage data which allows admins to understand the token usage. Usage data is only persisted if the constant `StoreUsageMetrics` is set to `true` and the GenAI connector of choice has implemented the operation to store token usage. In general, this is only supported for chat completions and embedding operations.

To clean up usage data in a deployed app, you can enable the daily scheduled event `ScE_Usage_Cleanup` in the Mendix Cloud Portal. Use the `Usage_CleanUpAfterDays` constant to control for how long token usage data should be persisted. 

Lastly, the [Conversational UI module](/appstore/modules/genai/conversational-ui/) provides pages, snippets, and logic to display and export token usage information. For this to work, the module roles `UsageMonitoring` from both Conversational UI as well as GenAI Commons need to be assigned to the applicable project roles.

## Technical Reference {#technical-reference}

The technical purpose of the GenAI Commons module is to define a common domain model for generative AI use cases in Mendix applications. To help you work with the **GenAI Commons** module, the following sections list the available [entities](#domain-model), [enumerations](#enumerations), and [microflows](#microflows) to use in your application. 

### Domain Model {#domain-model} 

The domain model in Mendix is a data model that describes the information in your application domain in an abstract way. For more general information, see the [Data in the Domain Model](/refguide/domain-model/) documentation. To learn about where the entities from the domain model are used and relevant during implementation, see the [Microflows](#microflows) section below.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genaicommons/demain-model.png" alt="" >}}

#### `DeployedModel` {#deployed-model}

The `DeployedModel` represents a GenAI model that can be invoked by the Mendix app. It contains a display name and a technical name/identifier. It also contains the name of the microflow to be executed for the specified model and other information relevant to connect to a model. The creation of Deployed Models is handled by the connectors themselves (see their specializations) where admins can configure those at runtime.

The `DeployedModel` entity replaces the capabilities that were covered by the `Connection` entity for model invocations in earlier versions of GenAI Commons. For knowledge base interactions, the `DeployedKnowledgeBase` entity is used.

| Attribute | Description |
| --- | --- |
| `DisplayName` | The display name of the deployed model. |
| `Architecture` | The architecture of the deployed model; e.g. OpenAI or Amazon Bedrock. |
| `Model` | The model identifier of the LLM provider. |
| `OutputModality` | The type of information the model returns. |
| `Microflow` |  The microflow to execute for the specified model and modality. |
| `SupportsSystemPrompt` | An enum to specify if the model supports system prompts. |
| `SupportsConversationsWithHistory` | An enum to specify if the model supports conversation with history. |
| `SupportsFunctionCalling` | An enum to specify if the model supports function calling. |
| `IsActive` | A boolean to specify if the model is active/usable with the current authentication settings and user preference. |

#### `DeployedKnowledgeBase` {#deployed-knowledge-base}

The `DeployedKnowledgeBase` represents a GenAI knowledge base that can be added to the request when calling an LLM. It contains a display name, a technical name (or identifier), the name of the microflow to be executed for the specified knowledge base specialization, and other relevant information  to connect to the knowledge base. These objects are created by the connectors themselves (see their specializations), allowing admins to configure them at runtime.

The `DeployedKnowledgeBase` entity replaces the capabilities covered by the `Connection` entity for knowledge base interaction in earlier versions of GenAI Commons. 

| Attribute | Description |
| --- | --- |
| `DisplayName` | The display name of the deployed knowledge base. | 
| `Name` | The name of the deployed knowledge base. |
| `Architecture` | The architecture of the deployed model, for example, Mendix Cloud or Amazon Bedrock. |
| `Microflow` |  The microflow to execute to retrieve information for the specified knowledge. |
| `IsActive` | A boolean to specify if the knowledge base is active/usable with the current authentication settings and user preference. |

#### `InputModality` {#Usage}

Accepted input modality of the associated deployed model.

| Attribute | Description |
| --- | --- |
| `ModelModality` | The type of information the model accepts as input. |

#### `Usage` {#Usage}

This entity represents usage statistics of a call to an LLM. It refers to a complete LLM interaction; in case there are several iterations (e.g. recursive processing of function calls), everything should be aggregated into one Usage record.

Following the principles of GenAI Commons, it must be stored based on the response for every successful call to a system of an LLM provider. This is only applicable to text & file operations and embedding operations. It is the responsibility of connector developers implementing the GenAI principles in their GenAI operations to include the right microflows to ensure the storage of Usage details after successful calls.

The data stored in this entity is to be used later on for token consumption monitoring.

| Attribute | Description |
| --- | --- |
| `Architecture` | The architecture of the used deployed model; e.g. OpenAI or Amazon Bedrock. |
| `DeployedModelDisplayName` | DisplayName of the DeployedModel. |
| `InputTokens` | The amount of tokens consumed by an LLM call that is related to the input. |
| `OutputTokens` | The amount of tokens consumed by an LLM call that is related to the output. |
| `TotalTokens` | The total amount of tokens consumed by an LLM call. |
| `DurationMilliseconds` | The duration in milliseconds of the technical part of the call to the system of the LLM provider. This excludes custom pre and postprocessing but corresponds to a complete LLM interaction. |
| `_DeploymentIdentifier` | Internal object used to identify the DeployedModel used. |

#### `Connection` {#connection}

The Connection entity was previously used as an input parameter for Chat completions, Embeddings, and Image Generation operations, but it has been replaced by the `DeployedModel` entity. It was also used as a general connection entity for Knowledge Base interactions, which is now replaced with the `DeployedKnowledgeBase` entity.

#### `Request` {#request} 

The `Request` is an input object for the chat completions operations defined in the platform-supported GenAI-connectors and contains all content-related input needed for an LLM to generate a response for the given chat conversation. 

| Attribute | Description |
| --- | --- |
| `SystemPrompt` | A `SystemPrompt` provides the model with context, instructions, or guidelines. |
| `MaxTokens` | Maximum number of tokens per request. |
| `Temperature` | `Temperature` controls the randomness of the model response. Low values generate a more predictable output, while higher values allow creativity and diversity. It is recommended to steer either the temperature or `TopP`, but not both. |
| `TopP` | `TopP` is an alternative to temperature for controlling the randomness of the model response. `TopP` defines a probability threshold so that only words with probabilities greater than or equal to the threshold will be included in the response. It is recommended to steer either the temperature or `TopP`, but not both. |
| `ToolChoice` | Controls which (if any) tool is called by the model. For more information, see the [ENUM_ToolChoice](#enum-toolchoice) section containing a description of the possible values. |

#### `Message` {#message}

A message that is part of the request or the response. Each instance contains data (text, file collection) that needs to be taken into account by the model when processing the completion request. 

| Attribute | Description |
| --- | --- |
| `Role` | The role of the message's author. For more information, see the [ENUM_Role](#enum-messagerole) section. |
| `Content` | The text content of the message. |
| `MessageType` | The type of the message can be either text or file, where file means that the associated FileCollection should be taken into account. For more information, see the [ENUM_MessageType](#enum-messagetype) section.|
| `ToolCallId` | The id of the tool call proposed by the model that this message is responding to. This attribute is only applicable for messages with the role `tool`. |

#### `FileCollection` {#filecollection}

This is an optional collection of files that is part of a Message. It is used for patterns like *vision*, where image files are sent along with the user message for the model to process. It functions as a wrapper entity for files and has no attributes.

#### `FileContent` {#filecontent}

This is a file in a collection of files that belongs to a message. Each instance represents a single file. Currently, only files of the type *image* and *document* are supported.

| Attribute | Description |
| --- | --- |
| `FileContent` | Depending on the `ContentType`, this is either a URL or the base64-encoded file data. |
| `ContentType` | This describes the type of file data. Supported content types are either URL or base64-encoded file data. For more information, see the [ENUM_ContentType](#enum-contenttype) section.
| `FileType` | Currently only images and documents are supported file types. In general, not all file types might be supported by all AI providers or models. For more information, see the [ENUM_FileType](#enum-filetype).
| `TextContent` | An optional text content describing the file content. | 
| `FileExtension` | Extension of the file, e.g. *png* or *pdf*. Note that this attribute may only be filled if the ContentType equals *Base64* and can be empty. | 
| `FileName` | If a FileDocument is added, the `Filename` is extracted automatically. | 

#### `ToolCollection` {#toolcollection}

This is an optional collection of tools to be sent along with the `Request`. Using tool call capabilities (also known as function calling) might not be supported by certain AI providers or models. This entity functions as a wrapper entity for tools and has no attributes.

#### `Tool` {#tool}

A tool in the tool collection. This is sent along with the request to expose a list of available tools. In the response, the model can suggest calling a certain tool (or multiple tools in parallel) to retrieve additional data or perform certain actions.

| Attribute | Description |
| --- | --- |
| `Name` | The name of the tool to call. This is used by the model in the response to identify which function needs to be called. |
| `Description` | An optional description of the tool, used by the model in addition to the name attribute to choose when and how to call the tool. | 
| `ToolType` | The type of the tool. Refer to the documentation supplied by your AI provider for information about the supported types. |
| `Microflow` | The name (string) of the microflow that this tool represents. |

#### `Function` {#function}

A tool of the type *function*. This is a specialization of [Tool](#tool) and represents a microflow in the same Mendix application. The return value of this microflow when executed as a function is sent to the model in the next iteration and hence must be of type String.

{{% alert color="info" %}}
Since this microflow runs in the context of the user, you can make sure that it only shows data that is relevant to the current user.
{{% /alert %}}

#### `KnowledgeBaseRetrieval` {#knowledge-base-retrieval}

A tool of the type *function*. This is a specialization of [Tool](#tool) and represents a microflow in the same Mendix application. It is typically used internally inside of connector operations to enable the model with a knowledge base retrieval.

| Attribute | Description |
| --- | --- |
| `MinimumSimilarity` | Specifies the minimum similarity score (usually 0-1) of the passed chunk and the knowledge chunks in the knowledge base. |
| `MaxNumberOfResults` | Specifies the maximum number of results that should be retrieved from the knowledge base. |

#### `ArgumentInput` {#argument-input}

For tools which are not executed in the same Mendix application, but still registered with the request and called from the application, `ArgumentInput` objects are added to the [Tool](#tool). When the tool is called, the arguments are not passed directly to the microflow, but can be extracted from the [Argument](#argument) of the [ToolCall](#toolcall).

| Attribute | Description |
| --- | --- |
| `Name` | Name of the argument. |
| `_Type` | Data type of the argument, for example, string, number, boolean, enum. |
| `Required` | Indicates if the argument is required for calling the tool. |

#### `EnumValue` {#enum-value}

The `EnumValue` specifies available keys for "enum" [ArgumentInput](#argument-input) data types, so that the model is restricted to use valid input.

| Attribute | Description |
| --- | --- |
| `Key` | Key of an enumeration. |

#### `StopSequence` {#stopsequence}

For many models, `StopSequence` can pass a list of character sequences (for example a word) along with the request. The model will stop generating content when a word of that list occurs next.

| Attribute | Description |
| --- | --- |
| `Sequence` | A sequence of characters that would prevent the model from generating further content. |

#### `Response` {#response}

The response returned by the model contains usage metrics and a response message.

| Attribute | Description |
| --- | --- |
| `RequestTokens` | Number of tokens in the request. | 
| `ResponseTokens` | Number of tokens in the generated response. |
| `TotalTokens` | Total number of tokens (request + response). |
| `DurationMilliseconds` | Duration in milliseconds for the call to the LLM to be finished. |
| `StopReason` | The reason why the model stopped is to generate further content. See AI provider documentation for possible values. | 
| `ResponseText` | The text content of the response message. | 

#### `ToolCall` {#toolcall}

A tool call object may be generated by the model in certain scenarios, such as a function call pattern. This entity is only applicable for messages with role `assistant`.

| Attribute | Description |
| --- | --- |
| `Name` | The name of the tool to call. This refers to the `Name` attribute of one of the [Tools](#tool) in the Request. |
| `ToolType` | The type of the tool. View AI provider documentation for supported types. |
| `ToolCallId` | This is a model-generated ID of the proposed tool call. It is used by the model to map an assistant message containing a tool call with the output of the tool call (tool message). |

#### `Argument` {#argument}

The arguments are used to call the tool, generated by the model in JSON format. Note that the model does not always generate valid JSON and may hallucinate parameters that are not defined by your tool's schema. Mendix recommends validating the arguments in the code before calling the tool. One argument is generated for each primitive input parameter of the selected microflow.

| Attribute | Description |
| --- | --- |
| `Key` | The name of the input parameter as given in the microflow. |
| `Value` | The value that is passed to the input parameter. |

#### `Reference` {#reference}

An optional reference for a response message.

| Attribute | Description |
| --- | --- |
| `Title` | The title of the reference. | 
| `Content` | The content of the reference. |
| `Source` | The source of the reference, e.g. a URL. | 
| `SourceType` | The type of the source. For more information, see [ENUM_SourceType](#enum-sourcetype). |

#### `Citation` {#citation}

An optional citation. This entity can visualize the link between a part of the generated text and the actual text in the source on which the generated text was based.

| Attribute | Description |
| --- | --- |
| `StartIndex` | An index that marks the beginning of a citation in a larger document. |
| `EndIndex` | An index that marks the end of a citation in a larger document. | 
| `Text` | The part of the generated text that contains a citation. | 
| `Quote` | Contains the cited text from the reference. |

#### `ChunkCollection` {#chunkcollection}

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genaicommons/genai-commons-domain-model-embeddings.png" alt="">}}

This entity represents a collection of chunks. It is a wrapper entity for [Chunk](#chunk-entity) objects or specialization(s) to pass it to operations that execute embedding calculations or knowledge base interaction. 

#### `Chunk` {#chunk-entity}

A piece of information (InputText) and the corresponding embeddings vector retrieved from an Embeddings API. This is the relevant entity if you need to generate embedding vectors but do not need to store them in a knowledge base.

| Attribute | Description |
| --- | --- |
| `InputText` | The input text to create the embedding for. |
| `EmbeddingVector` | The corresponding embedding vector of the input text. |
| `_Index` | Internal attribute. Do not use. |

#### `KnowledgeBaseChunk` {#knowledgebasechunk-entity}

This entity represents a discrete piece of knowledge that can be used for embedding and storage operations. As a specialization of [Chunk](#chunk-entity), it is the appropriate entity to use when both generating embedding vectors and storing them in a knowledge base.

| Attribute | Description |
| --- | --- |
| `ChunkID` | This is a system-generated UUID for the chunk in the knowledge base. |
| `HumanReadableID` | This is a front-end reference to the KnowledgeBaseChunk so that users know what it refers to (e.g. URL, document location, human-readable record ID). |
| `MxObjectID` | If the KnowledgeBaseChunk was based on a Mendix object during creation, this will contain the GUID of that object at the time of creation. |
| `MxEntity` | If the KnowledgeBaseChunk was based on a Mendix object during creation, this will contain its full entity name at the time of creation. |
| `Similarity` | In case the chunk was retrieved from the knowledge base as part of a similarity search (for example, nearest neighbors retrieval) this will contain the cosine similarity to the input vector for the retrieval that was executed. |

#### `MetadataCollection` {#metadatacollection-entity}

An optional collection of metadata. This is a wrapper entity for one or more [Metadata](#metadata-entity) objects for a [KnowledgeBaseChunk](#knowledgebasechunk-entity).

#### `Metadata` {#metadata-entity}

This entity represents additional information to be stored with the [KnowledgeBaseChunk](#knowledgebasechunk-entity) in the knowledge base. At the insertion stage, you can link multiple metadata objects to a KnowledgeBaseChunk as needed. These metadata objects consist of key-value pairs used for custom filtering during retrieval. Retrieval operates on an exact string-match basis for each key-value pair, returning records only if they match all metadata records specified in the search criteria.

| Attribute | Description |
| --- | --- |
| `Key` | This is the name of the metadata and typically tells how the value should be interpreted. |
| `Value` | The value of the metadata that provides additional information about the chunk in the context of the given key. |

#### `EmbeddingsOptions` {#embeddingsoptions-entity}

An optional input object for the embedding operations to set optional request attributes.

| Attribute | Description |
| --- | --- |
| `Dimensions`| The number of dimensions the resulting output embeddings should have. |

#### `EmbeddingsResponse` {#embeddingsresponse-entity}

The response returned by the model contains token usage metrics. Not all connectors or models might support token usage metrics.

| Attribute | Description |
| --- | --- |
| `PromptTokens` | Number of tokens in the prompt. |
| `TotalTokens` | Total number of tokens used in the request. |
| `DurationMilliseconds` | Duration in milliseconds for the call to be finished. |

#### `ImageOptions` {#imageoptions-entity}

An optional input object for the image generation operations to set optional request attributes.

| Attribute | Description |
| --- | --- |
| `Height` | This determines the height of the image. |
| `Width` | This determines the width of the image. |
| `NumberOfImages` | This determines the number of images to be generated. |
| `Seed` | This can be used to influence the randomness of the generation. Ensures the reproducibility and consistency of the generated images by controlling the initial state of the random number generator. |
| `CfgScale` | This can be used to influence the randomness of the generation. Adjusts the balance between adherence to the prompt and creative randomness in the image generation process. |
| `ImageGenerationType` | This describes the type of image generation. Currently, only text to image is supported. For more information, see [ENUM_ImageGenerationType](#enum-imagegenerationtype). |

### Microflow Activities {#microflows}

Use the exposed microflows and Java Actions to map the required information for GenAI operations from your custom app implementation to the GenAI model and vice versa. 

#### GenAI (Generate) {#genai-generate}

Chat completions, embeddings, and image generation operations can be used by passing a [DeployedModel](#deployed-model) object of the desired connector. The action calls the internally assigned microflow of the connector and returns the response. Operations from different connectors can be exchanged very easily without much additional development effort.

It is recommended that you adapt to the same interface when developing custom chat completions or image generation operations, such as integration with different AI providers. The generic interfaces are described below. For more detailed information, refer to the documentation of the connector that you want to use, since it may expect specializations of the generic GenAI common entities as an input.

##### Chat Completions (with history) {#chat-completions-with-history}

The `Chat Completions (with history)` operation supports more complex use cases where a list of (historical) messages (for example, comprising the conversation or context so far) is sent as part of the request to the LLM.

###### Input Parameters

| Name | Type | Notes | Description |
| --- | --- | --- |--- |
| `DeployedModel` | [DeployedModel](#deployed-model) | mandatory | The DeployedModel entity replaces the Connection entity. It contains the name of the microflow to be executed for the specified model and other information relevant to connect to a model. The OutputModality of the DeployedModel needs to be Text. |
| `Request` | [Request](#request) | mandatory | This is an object that contains messages, optional attribute, and an optional [ToolCollection](#toolcollection). |

###### Return Value

| Name | Type | Description |
| --- | --- | --- |
| `Response` | [Response](#response) | A `Response` object that contains the assistant's response. |

##### Chat Completions (without history) {#chat-completions-without-history}

The `Chat Completions (without history)` operation supports scenarios where there is no need to send a list of (historic) messages comprising the conversation so far as part of the request.

###### Input Parameters

| Name | Type | Notes | Description |
| --- | --- | ---| --- |
| `UserPrompt` | String | mandatory | A user message is the input from a user. |
| `DeployedModel` | [DeployedModel](#deployed-model) | mandatory | The DeployedModel entity replaces the Connection entity. It contains the name of the microflow to be executed for the specified model and other information relevant to connecting to a model. The OutputModality of the DeployedModel needs to be Text. |
| `OptionalRequest` | [Request](#request) | optional | This is an optional object that contains optional attributes and an optional [ToolCollection](#toolcollection). If no Request is passed, one will be created. |
| `OptionalFileCollection` | [FileCollection](#filecollection) | optional | This is an optional collection of files to be sent along with the request to use vision or document chat. |

###### Return Value

| Name | Type | Description |
| --- | --- | --- |
| `Response` | [Response](#response) | A `Response` object that contains the assistant's response.|

##### Generate Embeddings (Chunk Collection) {#embeddings-chunk-collection}

The `Generate Embeddings (Chunk Collection)` operation allows the invocation of an embeddings API with a [ChunkCollection](#chunkcollection) and returns an [EmbeddingsResponse](#embeddingsresponse-entity) object with token usage statistics, if applicable. The response object is associated with the original [ChunkCollection](#chunkcollection) used as an input, and the [Chunk](#chunk-entity) (or [KnowledgeBaseChunk](#knowledgebasechunk-entity)) objects will be updated with their corresponding embedding vector retrieved from the Embeddings API within this microflow.

###### Input Parameters

| Name | Type | Notes | Description |
| --- | --- | ---| --- |
| `ChunkCollection` | [ChunkCollection](#chunkcollection) | mandatory | A ChunkCollection with Chunks for which an embedding vector should be generated. Use operations from GenAI commons to create a ChunkCollection and add Chunks or KnowledgeBaseChunks to it. |
| `DeployedModel` | [DeployedModel](#deployed-model) | mandatory | The DeployedModel entity replaces the Connection entity. It contains the name of the microflow to be executed for the specified model and other information relevant to connecting to a model. The OutputModality needs to be Embeddings. |
| `EmbeddingOptions` | [EmbeddingsOptions](#embeddingsoptions-entity) | optional | Can be used to pass optional request attributes. |

###### Return Value

| Name | Type | Description |
| --- | --- | --- |
| `EmbeddingsResponse` | [EmbeddingsResponse](#embeddingsresponse-entity) | An response object that contains the token usage statistics and the corresponding embedding vector as part of a ChunkCollection. |

##### Generate Embeddings (String) {#embeddings-string}

The `Generate Embeddings (String)` operation allows the invocation of the embeddings API with a String input and returns an `EmbeddingsResponse` object with token usage statistics, if applicable. The `EmbeddingsResponse_GetFirstVector` microflow from GenAI Commons can be used to retrieve the corresponding embedding vector in a String representation. This operation supports scenarios where the vector embedding of a single string must be generated, e.g. to perform a nearest neighbor search across an existing knowledge base. 

###### Input Parameters

| Name | Type | Notes | Description |
| --- | --- | ---| --- |
| `InputText` | String | mandatory | Input text to create the embedding vector. |
| `DeployedModel` | [DeployedModel](#deployed-model) | mandatory | The DeployedModel entity replaces the Connection entity. It contains the name of the microflow to be executed for the specified model and other information relevant to connecting to a model. The OutputModality needs to be Embeddings. |
| `EmbeddingOptions` | [EmbeddingsOptions](#embeddingsoptions-entity) | optional | Can be used to pass optional request attributes.|

###### Return Value

| Name | Type | Description |
| --- | --- | --- |
| `EmbeddingsResponse` | [EmbeddingsResponse](#embeddingsresponse-entity) | A response object that contains the token usage statistics and the corresponding embedding vector as part of a ChunkCollection |

##### Generate Image {#generate-image}

The `Generate Image` operation supports the generation of images based on a `UserPrompt` passed as a string. The returned `Response` contains a `FileContent` via `FileCollection` and `Message`. See microflows in the `Handle Response` folder to get the image (list).

###### Input Parameters

| Name | Type | Notes | Description |
| --- | --- | --- |--- |
| `DeployedModel` | [DeployedModel](#deployed-model) | mandatory | The DeployedModel entity replaces the Connection entity. It contains the name of the microflow to be executed for the specified model and other information relevant to connect to a model. The OutputModality needs to be Image. |
| `UserPrompt` | String | mandatory | This is the description the image will be based on. |
| `ImageOptions` | [ImageOptions](#imageoptions-entity) | optional | This can be used to pass optional request attributes. |

###### Return Value

| Name | Type | Description |
| --- | --- | --- |
| `Response` | [Response](#response) | A `Response` object that contains the assistant's response including a `FileContent` which needs to be used in [Get Generated Image (Single)](#image-get-single) or [Get Generated Images (List)](#image-get-list).|

#### GenAI (Request Building) {#genai-request-building}

The following microflows help you construct the input request structures for the operations defined in the GenAI Commons.

##### Add Message to Request {#chat-add-message-to-request}

This microflow can add a new [Message](#message) to the [Request](#request) object. A message represents the conversation text content and optionally has a collection of files attached that need to be taken into account when generating the response (such as images for vision). Make sure to add messages chronologically so that the most recent message is added last.

###### Input Parameters

| Name | Type | Notes | Description |
|--- |---|---|---|
| `Request` | [Request](#request) | mandatory | This is the request object that contains the functional input for the model to generate a response. |
| `ENUM_MessageRole` | [ENUM_MessageRole](#enum-messagerole) | mandatory | The role of the message author. |
| `FileCollection` | [FileCollection](#filecollection) | optional | This is an optional collection of files that are part of the message. |
| `ContentString` | String | mandatory | This is the textual content of the message. |

###### Return Value

This microflow does not have a return value.

##### Create Request {#chat-create-request}

This microflow can be used to create a request for a chat completion operation. This is the request object that contains the top-level functional input for the language model to generate a response.

###### Input Parameters

| Name | Type | Notes | Description |
|--- |--- |--- |--- |
| `SystemPrompt` | String | optional | A system message can specify the assistant persona or give the model more guidance, context, or instructions. This attribute is optional. |
| `Temperature` | Decimal | optional | This is the sampling temperature. Higher values will make the output more random, while lower values make it more focused and deterministic. This attribute is optional. |
| `MaxTokens` | Integer/Long | Depends on AI provider or model | This is the maximum number of tokens to generate in the chat completion. The total length of input tokens and generated tokens is limited by the model's context length. This attribute is optional. |
| `TopP` | Decimal | optional | This is an alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with Top_p probability mass. Mendix generally recommends altering Top_p or Temperature but not both. This attribute is optional. |

###### Return Value

| Name | Type | Description |
|--- |--- |--- |
| `Request` |[Request](#request) | This is the created request object. |

##### Files: Add File to Collection {#add-file-to-collection}

Use this microflow to add a file to an existing [FileCollection](#filecollection). The File Collection is an optional part of a [Message](#message).

###### Input Parameters

| Name | Type | Notes | Description |
|---|---|---|---|
| `FileCollection` | [FileCollection](#filecollection) | mandatory | The wrapper object for Files. The File Collection is an optional part of a [Message](#message). |
| `URL` | String | Either URL or FileDocument is required. | This is the URL of the file. |
| `FileDocument` | `System.FileDocument` | Either URL or FileDocument is required. | The file for which the contents are part of a message. |
| `ENUM_FileType` | [ENUM_FileType](#enum-filetype) | mandatory | This is the type of the file. |
| `TextContent` | String | mandatory | An optional text content describing the file content or giving it a specific name. |

###### Return Value

This microflow does not have a return value.

##### Files: Initialize Collection with File {#initialize-filecollection}

To include files within a message, you must provide them in the form of a file collection. This helper microflow creates the file collection and adds the first file. The File Collection is an optional part of a [Message](#message) object.

###### Input Parameters

| Name | Type | Notes | Description |
|---|---|---|---|
| `URL` | String | Either URL or FileDocument is required. | This is the URL of the file. |
| `FileDocument` | `System.FileDocument` | Either URL or FileDocument is required. | The file for which the contents are part of a message. |
| `ENUM_FileType` | [ENUM_FileType](#enum-filetype) | mandatory | This is the type of the file. |
| `TextContent` | String | optional | An optional text content describing the file content or giving it a specific name. |

###### Return Value

| Name | Type | Description |
|--- |---|---|
| `FileCollection` | [FileCollection](#filecollection) | This is the created file collection with the new file associated with it. |

##### Tools: Add Function to Request {#add-function-to-request}

Adds a new Function to a [ToolCollection](#toolcollection) that is part of a Request. Use this action to expose microflows as tools to the LLM via [function calling](/appstore/modules/genai/function-calling/). If supported by the LLM connector, the chat completion operation calls the right functions based on the LLM response and continues the process until the assistant's final response is returned.

###### Input Parameters

| Name | Type | Notes | Description |
|---|---|---|---|
| `Request` | [Request](#request) | mandatory | The request to add the function to. |
| `ToolName` | String | mandatory | The name of the tool to use/call. |
| `ToolDescription` | String | optional | An optional description of what the tool does, used by the model to choose when and how to call the tool. |
| `FunctionMicroflow` | Microflow | mandatory | The microflow that is called within this function. |

{{% alert color="info" %}}
Since this microflow runs in the context of the user, you can make sure that it only shows data that is relevant to the current user.
The microflow can have none, a single, or multiple primitive input parameters such as Boolean, Datetime, Decimal, Enumeration, Integer or String. Additionally, they may accept the [Request](#request) or [Tool](#tool) objects as inputs. The microflow can only return a String value. 
Note that calling the microflow may fail if the model passes parameters in the wrong format, for example, a decimal number for an integer parameter. Such errors are logged and returned to the model, which may either inform the user or retry the tool call. The model can also pass empty values, so proper validation is recommended.
{{% /alert %}}

###### Return Value

| Name | Type | Description |
|---|---|---|
| `Function` | [Function](#function) | This is the function object that was added to [ToolCollection](#toolcollection) which is part of the request. This object can be used optionally as input for controlling the tool choice of the [Request](#request), see [Tools: Set Tool Choice](#set-toolchoice). |

##### Tools: Set Tool Choice {#set-toolchoice}

Use this microflow to control how the model should determine which function to leverage (typically to gather additional information). The microflow sets the ToolChoice within a [Request](#request). This controls which (if any) function is called by the model. If the ENUM_ToolChoice equals `tool`, the `Tool` input is required which will become the tool choice. This will force the model to call that particular tool. 

###### Input Parameters

| Name | Type | Notes | Description |
|---|---|---|---|
| `Request` | [Request](#request) | mandatory | The request for which to set a tool choice. |
| `Tool` | [Tool](#tool) | Required if `ENUM_ToolChoice` equals `tool`. | Specifies the tool to be used. Required if the `ENUM_ToolChoice` equals `tool`; ignored for all other enumeration values. |
| `ENUM_ToolChoice` | [ENUM_ToolChoice](#enum-toolchoice) | mandatory | Determines the tool choice. For more information, see the [ENUM_ToolChoice](#enum-toolchoice) section for a list of the available values. |

###### Return Value

This microflow does not have a return value.

##### Tools: Add Knowledge Base {#add-knowledge-base-to-request}

This tool adds a function that performs a retrieval from a knowledge base to a [ToolCollection](#toolcollection) that is part of a Request. Use this microflow when you have knowledge bases in your application that may be called to retrieve the required information as part of a GenAI interaction. If you want the model to be aware of these microflows, you can use this operation to add them as functions to the request. If supported by the LLM connector, the chat completion operation calls the appropriate knowledge base function based on the LLM response and continue the process until the assistant's final response is returned.

`DeployedKnowledgeBase` objects have provider-specific specializations, for example, `Collection` for Mendix Cloud.

###### Input Parameters

| Name | Type | Notes | Description |
|---|---|---|---|
| `Request` | [Request](#request) | mandatory | The request to which the knowledge base should be added. |
| `Name` | String | mandatory | The name of the knowledge base to use or call. Technically, this is the name of the tool that is passed to the LLM. This needs to be unique per request (if multiple tools/knowledge base retrievals are added). |
| `Description` | String | optional | A description of the knowledge base's purpose, used by the model to determine when and how to invoke it. |
| `DeployedKnowledgeBase` | Object | mandatory | The knowledge base that is called within this tool. This object includes a `microflow`, which is executed when the knowledge base is invoked. |
| `MaxNumberOfResults` | Integer | optional | This can be used to limit the number of results that should be retrieved. |
| `MinimumSimilarity` | Decimal | optional | Filters the results to retrieve only chunks with a similarity score greater than or equal to the specified value. The score ranges from 0 (no similarity) to 1.0 (the same vector). |
| `MetadataCollection` | Object | optional | Optional: This contains a list for additional filtering in the retrieve. Only chunks that comply with the metadata labels will be returned. |

###### Return Value

This microflow returns a `KnowledgeBaseRetrieval` object.

#### GenAI (Response Handling) {#genai-response-handling}

The following microflows handle the response processing.

##### Get Generated Image (List) {#image-get-list}

This operation processes a response that was created by an image generation operation. A return entity can be specified using ResponseImageEntity (needs to be of type `System.Image` or its specialization). A list of images of that type will be created and returned.

###### Input Parameters

| Name | Type | Notes | Description |
|---|---|---|---|
| `ResponseImageEntity` | Entity | mandatory | This is to specify the entity of the returned image. Must be of type `System.Image` or its specializations. |
| `Response` | [Response](#response) | mandatory | This is the response that was returned by an image generation operation. It points to a message with the FileContent to create the image. |

###### Return Value

| Name | Type | Description |
|---|---|---|
| `GeneratedImageList` | List of type determined by `ResponseImageEntity` | The list of generated images. |

##### Get Generated Image (Single) {#image-get-single}

This operation processes a response that was created by an image generation operation. A return entity can be specified using ResponseImageEntity (needs to be of type `System.Image` or its specialization). An image of that type will be created and returned.

###### Input Parameters

| Name | Type | Notes | Description |
|---|---|---|---|
| `ResponseImageEntity` | Entity | mandatory | This is to specify the entity of the returned image. Must be of type `System.Image` or its specializations. |
| `Response` | [Response](#response) | mandatory | This is the response that was returned by an image generation operation. It points to a message with the FileContent to create the image. |

###### Return Value

| Name | Type | Description |
|---|---|---|
| `GeneratedImage` | Object of type determined by `ResponseImageEntity` | The generated image. |

##### Get References {#chat-get-references}

Use this microflow to get the list of references that may be included in the model response. These can be used to display source information, content, and citations on which the model response text was based according to the language model. References are only available if they were specifically requested from the LLM and mapped from the LLM response into the GenAI Commons [domain model](#domain-model).

###### Input Parameters

| Name | Type | Notes | Description |
|---|---|---|---|
| `Response` | [Response](#response) | mandatory | The response object. |

###### Return Value

| Name | Type | Description |
|---|---|---|
| `ReferenceList` | List of [Reference](#reference) | The references with optional citations were part of the response message. |

##### Get Response Text {#chat-get-model-response-text}

This microflow can get the content from the latest assistant message over association `Response_Message`. Use this microflow to get the response text from the latest assistant response message. In many cases, this is the main value needed for further logic after the operation or is displayed to the end user. Note that the content can be directly extracted from the [Response's](#response) attribute `ResponseText`.

###### Input Parameters

| Name | Type | Notes | Description |
|---|---|---|---|
| `Response` | [Response](#response) | mandatory | The response object. |

###### Return Value

| Name | Type | Description |
|---|---|---|
| `ResponseText` | String | This is the string `Content` of the message with role `assistant` that was generated by the model as a response to a user message. |

#### GenAI (Request Building, Expert)

##### Configure Stop Sequence {#chat-add-stop-sequence}

This microflow can be used to add an optional [StopSequence](#stopsequence) to the request. It can be used after the request has been created. If available for the connector and model of choice, stop sequences let models know when to stop generating text.

###### Input Parameters

| Name | Type | Notes | Description |
|---|---|---|---|
| `Request` | [Request](#request) | mandatory | This is the request object that contains the functional input for the model to generate a response. |
| `StopSequence` | String | mandatory | This is the stop sequence string, which is used to make the model stop generating tokens at a desired point. |

###### Return Value

This microflow does not have a return value.

##### Image Generation: Create ImageOptions {#imageoptions-create}

This microflow creates new [ImageOptions](#imageoptions-entity).

###### Input Parameters

| Name | Type | Notes | Description |
|--- |--- |--- |--- |
| `Height` | Integer/Long | optional | To set Width. |
| `Width` | Integer/Long | optional | To set Height. |
| `NumberOfImages` | Integer/Long | optional | To set NumberOfImages to create. |

###### Return Value

| Name | Type | Description |
|--- |--- |--- |
| `ImageOptions` | [ImageOptions](#imageoptions-entity) | The newly created ImageOptions object. |

#### GenAI Knowledge Base (Content) {#genai-knowledgebase-content}

The following microflows and Java actions help you construct the input structures for the operations for knowledge bases and embeddings as defined in GenAI Commons.

##### Chunks: Add Chunk to ChunkCollection{#chunkcollection-add-chunk}

This microflow adds a new [Chunk](#chunk-entity) to the [ChunkCollection](#chunkcollection).

###### Input Parameters

| Name | Type | Notes | Description |
|--- |--- |--- |--- |
| `InputText` | String | mandatory | Input text to generate an embedding vector. |
| `ChunkCollection` | [ChunkCollection](#chunkcollection) | mandatory | ChunkCollection to add the new Chunks to. |

###### Return Value

| Name | Type | Description |
|--- |--- |--- |
| `Chunk` | [Chunk](#chunk-entity) | The added Chunk object. |

##### Chunks: Add KnowledgeBaseChunk to ChunkCollection{#chunkcollection-add-knowledgebasechunk}

This Java action adds a new [KnowledgeBaseChunk](#knowledgebasechunk-entity) to the ChunkCollection to create the input for embeddings or knowledge base operations. Optionally, a MetadataCollection can be added for more advanced filtering. Use [Initialize MetadataCollection with Metadata](#knowledgebase-initialize-metadatacollection) to instantiate a MetadataCollection first, if needed.

###### Input Parameters

| Name | Type | Notes | Documentation |
|--- |--- |--- |--- |
| `ChunkCollection` | [ChunkCollection](#chunkcollection) | mandatory | This is the ChunkCollection to which the KnowledgebaseChunk will be added. This ChunkCollection is the input for other operations. |
| `InputText` | String | mandatory | Input text to generate an embedding vector. |
| `HumanReadableID` | String | mandatory | This is a front-end identifier that can be used for showing or retrieving sources in a custom way. If it is not relevant, "empty" must be passed explicitly here. |
| `MxObject` | Type parameter | optional | This parameter is used to capture the Mendix object to which the chunk refers. This can be used for finding the record in the Mendix database later on after the retrieval step. |
| `MetadataCollection` | [MetadataCollection](#metadatacollection-entity) | optional | This is an optional MetadataCollection that contains extra information about the KnowledgeBaseChunk. Any key-value pairs can be stored. In the retrieval operations, it is possible to filter on one or multiple metadata key-value pairs. |

###### Return Value

| Name | Type | Description |
|--- |--- |--- |
| `KnowledgeBaseChunk` | [KnowledgeBaseChunk](#knowledgebasechunk-entity) | The added KnowledgeBaseChunk object. |

##### Chunks: Initialize ChunkCollection {#chunkcollection-create}

This microflow creates a new [ChunkCollection](#chunkcollection) and returns it.

###### Input Parameters

This microflow has no input parameters.

###### Return Value

| Name | Type | Description |
|--- |--- |--- |
| `ChunkCollection` | [ChunkCollection](#chunkcollection) | The newly created ChunkCollection object. |

##### Embeddings: Create EmbeddingsOptions {#embeddingsoptions-create}

This microflow creates new [EmbeddingsOptions](#embeddingsoptions-entity).

###### Input Parameters

| Name | Type | Notes | Description |
|--- |--- |--- |--- |
| `Dimensions` | Integer/Long | optional | The number of dimensions the resulting output embedding vectors should have. See connector documentation for supported values and models. |

###### Return Value

| Name | Type | Description |
|--- |--- |--- |
| `EmbeddingsOptions` | [EmbeddingsOptions](#embeddingsoptions-entity) | The newly created EmbeddingsOptions object. |

##### Embeddings: Get First Vector from Response {#embeddings-get-first-vector}

This microflow gets the first embedding vector from the response of an embedding operation.

###### Input Parameters

| Name | Type | Notes | Description |
|--- |--- |--- |--- |
| `EmbeddingsResponse` | [EmbeddingsResponse](#embeddingsresponse-entity) | mandatory | Response object that gets returned by the embeddings operations. |

###### Return Value

| Name | Type | Description |
|--- |--- |--- |
| `Vector` | String | The first vector from the response. |

##### Knowledge Base: Add Metadata to MetadataCollection {#knowledgebase-add-metadata}

This microflow adds a new [Metadata](#metadatacollection-entity) object to a given [MetadataCollection](#metadatacollection-entity). Use [Initialize MetadataCollection with Metadata](#knowledgebase-initialize-metadatacollection) to instantiate a MetadataCollection first, if needed.

###### Input Parameters

| Name | Type | Notes | Description |
|--- |--- |--- |--- |
| `Key` | String | mandatory | This is the name of the metadata and typically tells how the value should be interpreted. |
| `Value` | String | mandatory | This is the value of the metadata that provides additional information about the chunk in the context of the given key. |
| `MetadataCollection` | [MetadataCollection](#metadatacollection-entity) | mandatory | The MetadataCollection to which the new Metadata object will be added. |

###### Return Value

This microflow does not have a return value.

##### Knowledge Base: Initialize MetadataCollection with Metadata {#knowledgebase-initialize-metadatacollection}

This microflow creates a new [MetadataCollection](#metadatacollection-entity) and adds a new [Metadata](#metadatacollection-entity). The [MetadataCollection](#metadatacollection-entity) will be returned. To add additional Metadata, use [Add Metadata to MetadataCollection](#knowledgebase-add-metadata).

###### Input Parameters

| Name | Type | Notes | Description |
|--- |--- |--- |--- |
| `Key` | String | mandatory | This is the name of the metadata and typically tells how the value should be interpreted. |
| `Value` | String | mandatory | This is the value of the metadata that provides additional information about the chunk in the context of the given key. |

###### Return Value

| Name | Type | Description |
|--- |--- |--- |
| `MetadataCollection` | [MetadataCollection](#metadatacollection-entity) | The newly created MetadataCollection object. |

### Enumerations {#enumerations} 

#### `ENUM_MessageRole` {#enum-messagerole}

`ENUM_MessageRole` provides a list of message author roles. 

| Name | Caption | Description |
| --- | --- | --- |
| `user` | **User** | A user message is the input from an end-user. |
| `assistant` | **Assistant** | An assistant message was generated by the model as a response to a user message. |
| `system` | **System** | A system message can be used to specify the assistant persona or give the model more guidance and context. This is typically specified by the developer to steer the model response. | 
| `tool` | **Tool** | A tool message contains the return value of a tool call as its content. Additionally, a tool message has a `ToolCallId` that is used to map it to the corresponding previous assistant response which provides the tool call input. | 

#### `ENUM_MessageType` {#enum-messagetype}

`ENUM_MessageType` provides a list of ways of interpreting a message object.

| Name | Caption | Description |
| --- | --- | --- |
| `Text` | **Text** | The message represents a normal message and contains text content in the `Content` attribute. | 
| `File` | **File** | The message contains file data and the files in the associated [FileCollection](#filecollection) should be taken into account. |

#### `ENUM_ContentType` {#enum-contenttype}

`ENUM_ContentType` provides a list of possible file content types, which describe how the file data is encoded in the `FileContent` attribute on the [FileContent](#filecontent) object that is part of the Message.

| Name | Caption | Description |
| --- | --- | --- |
| `URL` | **Url** | The content of the file can be found on a (publicly available) URL which is provided in the `FileContent` attribute. |
| `Base64` | **Base64** | The content of the file can be found as a base64-encoded string in the `FileContent` attribute. |

#### `ENUM_FileType` {#enum-filetype}

`ENUM_FileType` provides a list of file types. Currently, only *image* and *document* are supported file types. Not all file types might be supported by all AI providers or models.

| Name | Caption | Description |
| --- | --- | --- |
| `image` | **Image** | The file represents an image (e.g. a *.png* file). | 
| `document` | **Document** | The file represents a document (e.g. a *.pdf* file). | 

#### `ENUM_ToolChoice` {#enum-toolchoice}

`ENUM_ToolChoice` provides a list of ways to control which (if any) tool is called by the model. Not all tool choices might be supported by all AI providers or models.

| Name | Caption | Description |
| --- | --- | --- |
| `auto` | **Auto** | The model can pick between generating a message or calling a function. |
| `none` | **None** | The model does not call a function and instead generates a message. |
| `any` | **Any** | Any function will be called. Not available for all providers and might be changed to auto. |
| `tool` | **Tool** | A particular tool needs to be called, which is the one specified over association `ToolCollection_ToolChoice`. |

#### `ENUM_SourceType` {#enum-sourcetype}

`ENUM_SourceType` provides a list of source types, which describes how the pointer to the `Source` attribute on the [Reference](#reference) object should be interpreted to get the source location. Currently, only `Url` is supported.

| Name | Caption | Description |
| --- | --- | --- |
| `Url` | **Url** | The `Source` attribute contains the URL to the source on the internet. |

#### `ENUM_ImageGenerationType` {#enum-imagegenerationtype}

`ENUM_ImageGenerationType` describes how the image generation operation is to be used. Currently, only text to image is supported.

| Name | Caption | Description |
| --- | --- | --- |
| `TEXT_TO_IMAGE` | **TEXT_TO_IMAGE** | The LLM will generate an image (or multiple images) based on a text description. |

#### `ENUM_ModelModality` {#enum-modalmodality}

`ENUM_ModelModality` describes the modalities that the model supports input or output.

| Name | Caption | Description |
| --- | --- | --- |
| `Text` | **Text** | The model supports text. |
| `Embeddings` | **Embeddings** | The model supports embeddings. |
| `Image` | **Image** | The model supports image. |
| `Document` | **Document** | The model supports document. |
| `Audio` | **Audio** | The model supports audio. |
| `Video` | **Video** | The model supports video. |
| `Other` | **Other** | The model supports another modality. |

#### `ENUM_ModelSupport` {#enum-modalsupport}

`ENUM_ModelSupport` describes if the model supports certain functionality.

| Name | Caption | Description |
| --- | --- | --- |
| `_True` | **True** | The model supports the functionality. |
| `_False` | **False** | The model does not support the functionality. |
| `Unknown` | **Unknown** | The support is currently unknown. |

## Troubleshooting

This section lists possible solutions to known issues.

### Outdated JDK Version Causing Errors while Calling a REST API {#outdated-jdk-version}

The Java Development Kit (JDK) is a framework needed by Mendix Studio Pro to deploy and run applications. For more information, see [Studio Pro System Requirements](/refguide/system-requirements/). Usually, the correct JDK version is installed during the installation of Studio Pro, but in some cases, it may be outdated. An outdated version can cause exceptions when calling REST-based services with large data volumes, like for example embeddings operations or chat completions with vision.

Mendix has seen the following two exceptions when using JDK versions below `jdk-11.0.5.0-hotspot`:
`java.net.SocketException - Connection reset` or
`javax.net.ssl.SSLException - Received fatal alert: record_overflow`.

To check your JDK version and update it if necessary, follow these steps:

1. Check your JDK version – In Studio Pro, go to **Edit** > **Preferences** > **Deployment** > **JDK directory**. If the path points to a version below `jdk-11.0.5.0-hotspot`, you need to update the JDK by following the next steps.
2. Go to [Eclipse Temurin JDK 11](https://adoptium.net/en-GB/temurin/releases/?variant=openjdk11&os=windows&package=jdk) and download the `.msi` file of the latest release of **JDK 11**.
3. Open the downloaded file and follow the installation steps. Remember the installation path. Usually, this should be something like `C:/Program Files/Eclipse Adoptium/jdk-11.0.22.7-hotspot`.
4. After the installation has finished, restart your computer if prompted.
5. Open Studio Pro and go to **Edit** > **Preferences** > **Deployment** > **JDK directory**. Click **Browse** and select the folder with the new JDK version you just installed. This should be the folder containing the *bin* folder. Save your settings by clicking **OK**.
6. Run the project and execute the action that threw the above-mentioned exception earlier.
    1. You might get an error saying `FAILURE: Build failed with an exception. The supplied javaHome seems to be invalid. I cannot find the java executable.` In this case, verify that you have selected the correct JDK directory containing the updated JDK version.
    2. You may also need to update Gradle. To do this, go to **Edit** > **Preferences** > **Deployment** > **Gradle directory**. Click **Browse** and select the appropriate Gradle version from the Mendix folder. For Mendix 10.10 and above, use Gradle 8.5. For Mendix 10 versions below 10.10, use Gradle 7.6.3. Then save your settings by clicking **OK**.
    3. Rerun the project.
  
### Migration from Add-On module to App module

As the module has been changed with version 3.0.0 from an add-on to an app module, if you are updating the module the install from marketplace will need a migration to work properly with your application.

The process may look like this:

1. Backup of data; either as database backup or individual:
    * Incoming associations to protected module’s entities will be deleted
    * Usage data will be lost but can be exported in the ConversationalUI module via the Token Consumption Monitor snippets
2. Delete Add-On module: GenAICommons
3. Download the module from the marketplace; note that the module is from now on located under the “Marketplace modules” category in the app explorer.
4. Test your application locally and verify that everything works as before.
5. Restore lost data on deployed environments. Usually incoming associations to the protected modules need to be reset.

### Conflicted Lib Error After Module Import

If you encounter an error caused by conflicting Java libraries, such as `java.lang.NoSuchMethodError: 'com.fasterxml.jackson.annotation.OptBoolean com.fasterxml.jackson.annotation.JsonProperty.isRequired()'`, try synchronizing all dependencies (**App** > **Synchronize dependencies**) and then restart your application.
