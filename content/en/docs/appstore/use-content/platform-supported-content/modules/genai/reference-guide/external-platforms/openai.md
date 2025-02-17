---
title: "OpenAI"
url: /appstore/modules/genai/reference-guide/external-connectors/openai/
linktitle: "OpenAI"
description: "Describes the configuration and usage of the OpenAI Connector, which allows you to integrate generative AI into your Mendix app."
weight: 20
aliases:
    - /appstore/connectors/openai-connector/
    - /appstore/modules/genai/openai/
---

## Introduction {#introduction}

The [OpenAI Connector](https://marketplace.mendix.com/link/component/220472) allows you to integrate generative AI into your Mendix app. It is compatible with [OpenAI's platform](https://platform.openai.com/) as well as [Azure's OpenAI service](https://oai.azure.com/). 

The current scope covers text generation use cases based on the [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat), image generation use cases based on the [Image Generations API](https://platform.openai.com/docs/api-reference/images), and embedding use cases based on the [Embeddings API](https://platform.openai.com/docs/api-reference/embeddings).

Mendix provides dual-platform support for both OpenAI and Azure OpenAI.

### Typical Use Cases {#use-cases}

The OpenAI Connector is commonly used for text generation, image generation, and embeddings. These use cases are described in more detail below.

#### Text Generation {#use-cases-text}

* Develop interactive AI chatbots and virtual assistants that can carry out conversations in a natural and engaging manner. 
* Use OpenAI’s large language models (LLMs) for text comprehension and analysis use cases such as summarization, synthesis, and answering questions about large amounts of text.
* Fine-tune the OpenAI models on a specific task or domain by training them on custom data to improve their performance. 
* Integrate more easily with OpenAI’s platform. By providing text generation models, this allows you to build applications with the following features:
    * Draft documents 
    * Write computer code 
    * Answer questions about a knowledge base 
    * Analyze texts
    * Give software a natural language interface 
    * Tutor in a range of subjects 
    * Translate languages 
    * Simulate characters for games
    * Image to text

OpenAI provides market-leading LLM capabilities with GPT-4:

* Advanced reasoning – Follow complex instructions in natural language and solve difficult problems with accuracy. 
* Creativity – Generate, edit, and iterate with end-users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning an end-user’s writing style.
* Longer context – GPT-4 can handle over 25,000 words of text, allowing for use cases like long-form content creation, extended conversations, and document search and analysis. 

#### Image Generation {#use-cases-images}

Generate one or more completely new, original images and art from a text description. Powered by the OpenAI DALL-E models, the connector enables developers to generate these images by combining concepts, attributes, and styles.

#### Embeddings {#use-cases-embeddings}

Convert strings into vector embeddings for various purposes based on the relatedness of texts.

Embeddings are commonly used for the following:

* Search 
* Clustering 
* Recommendations 
* Anomaly detection 
* Diversity measurement 
* Classification 

Combine embeddings with text generation capabilities and leverage specific sources of information to create a smart chat functionality tailored to your own knowledge base.

{{% alert color="info" %}}
For more information on how to set up a vector database, see [Retrieval Augmented Generation (RAG)](/appstore/modules/genai/rag/). Also, check out the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) from the Marketplace for an example implementation.
{{% /alert %}}

### Features {#features}

Mendix provides dual-platform support for both [OpenAI](https://platform.openai.com/) and [Azure OpenAI](https://oai.azure.com/). 

With the current version, Mendix supports the Chat Completions API for [text generation](https://platform.openai.com/docs/guides/text-generation), the Image Generations API for [images](https://platform.openai.com/docs/guides/images), and the Embeddings API for [vector embeddings](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings). 

### Prerequisites {#prerequisites}

To use this connector, you need to either sign up for an [OpenAI account](https://platform.openai.com/) or have access to deployments at [Azure OpenAI](https://oai.azure.com/).

### Dependencies {#dependencies}

* Mendix Studio Pro version [9.24.2](/releasenotes/studio-pro/9.24/#9242) or higher
* [GenAI Commons module](/appstore/modules/genai/commons/)
* [Encryption module](/appstore/modules/encryption/)
* [Community Commons module](/appstore/modules/community-commons-function-library/)

## Installation {#installation}

 The following modules from the Marketplace need to be installed:

* GenAI Commons module, available in the [GenAI for Mendix](https://marketplace.mendix.com/link/component/227931) marketplace listing.
* [Encryption](https://marketplace.mendix.com/link/component/1011) module
* [Community Commons](https://marketplace.mendix.com/link/component/170) module

To import the OpenAI Connector into your app, follow the instructions in [How to Use Marketplace Content](/appstore/use-content/).

## Configuration {#configuration}

After you install the OpenAI Connector, you can find it in the **App Explorer**, in the **Marketplace Modules** section. The connector provides a domain model and several activities that you can use to connect your app to OpenAI. To implement an activity, use it in a microflow. To ensure that your app can connect to OpenAI, you must also [configure the Encryption module](/appstore/modules/encryption/#configuration). 

### General Configuration {#general-configuration}

1. Add the module role **OpenAIConnector.Administrator** to your Administrator user role in the security settings of your app. 
2. Add the **Configuration_Overview** page (**USE_ME > Configuration**) to your navigation, or add the **Snippet_Configurations** to a page that is already part of your navigation. 
3. Continue setting up your OpenAI configuration at runtime. Follow the instructions in either [OpenAI Configuration](#openai-configuration) or [Azure OpenAI Configuration](#azure-openai-configuration), depending on which platform you are using.
4. Configure the models you need to use for your use case.

#### OpenAI Configuration {#openai-configuration} 

The following inputs are required for the OpenAI configuration: 

| Parameter   | Value                                                        |
| ----------- | ------------------------------------------------------------ |
| Display name | This is the name identifier of a configuration (for example, *MyConfiguration*). |
| API type    | Select `OpenAI`. |
| Endpoint    | This is the API endpoint (for example, `https://api.openai.com/v1`)   |
| Token     | This is the access token to authorize your API call. <br />To get an API, follow these steps:<ol><li>Create an account and sign in at [OpenAI](https://platform.openai.com/).</li><li> Go to the [API key page](https://platform.openai.com/account/api-keys) to create a new secret key. </li><li>Copy the API key and save this somewhere safe.</li></ol> |

#### Azure OpenAI Configuration {#azure-openai-configuration} 

The following inputs are required for the Azure OpenAI configuration: 

| Parameter      | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Display name | This is the name identifier of a configuration (for example, *MyConfiguration*). |
| API type | Select `AzureOpenAI`. |
| Endpoint | This is the API endpoint (for example, `https://your-resource-name.openai.azure.com/openai/deployments/`).<br />For details on how to obtain `your-resource-name`, see the [Obtaining Azure OpenAI Resource Name](#azure-resource-name) section below. |
| Azure key type | This is the type of token that is entered in the API key field. For Azure OpenAI, two types of keys are currently supported: Microsoft Entra token and API key. <br />For details on how to generate a Microsoft Entra access token, see [How to Configure Azure OpenAI Service with Managed Identities](https://learn.microsoft.com/en-gb/azure/ai-services/openai/how-to/managed-identity). Alternatively, if your organization allows it, you could use the Azure `api-key` authentication mechanism. For details on how to obtain an API key, see the [Obtaining Azure OpenAI API keys](#azure-api-keys) section below. For more information, see the [Technical Reference](#technical-reference) section. |
| Token / API key | This is the access token to authorize your API call. |

##### Obtaining the Azure OpenAI Resource Name {#azure-resource-name}

1. Go to the [Azure OpenAI portal](https://oai.azure.com/) and sign in.
2. In the upper-right corner, next to your Avatar, click on the scope dropdown. 
3. The tab shows your Directory, Subscription, and Azure OpenAI resource.
4. Make sure the right Azure OpenAI resource is selected.
5. Use the copy icon ({{% icon name="copy" %}}) and use it as your resource name in the endpoint URL.

##### Obtaining the Azure OpenAI API Keys {#azure-api-keys}

1. Go to the [Azure OpenAI portal](https://oai.azure.com/) and sign in.
2. In the upper-right corner, next to your Avatar, click on the scope dropdown. 
3. The tab shows your Directory, Subscription, and Azure OpenAI resource.
4. Make sure the right Azure OpenAI resource is selected.
5. You can now view ({{% icon name="view" %}}) and copy ({{% icon name="copy" %}}) the value of the **key1** or **key2** field as your API key while setting up the configuration. Note that these keys might not be visible for everyone in the Azure OpenAI Portal, depending on your organization's security settings. 

#### Configuring the OpenAI Deployed Models

A [Deployed Model](/appstore/modules/genai/genai-for-mx/commons/#deployed-model) represents a GenAI model instance that can be used by the app to generate text, embeddings, or images. For every model you want to invoke from your app, you need to create a `OpenAIDeployedModel` record, a specialization of `DeployedModel`. In addition to the model display name and a technical name/identifier, an OpenAI deployed model contains a reference to the additional connection details as configured in the previous step. For OpenAI, a set of common models will be prepopulated automatically upon saving the configuration. If you want to use additional models that are made available by OpenAI you need to configure additional OpenAI deployed models in your Mendix app. For Azure OpenAI no deployed models are created by default. The technical model names depend on the deployment names that were chosen while deploying the models in the [Azure Portal](https://oai.azure.com/resource/deployments). Therefore in this case you always need to configure the deployed models manually in your Mendix app.

1. If needed, click the three dots for an OpenAI configuration to open the "Manage Deployed Models" pop-up.
2. For every additional model, add a record. The following fields are required:

    | Field      | Description                                                        |
    | -------------- | ------------------------------------------------------------ |
    | Display name | This is the reference to the model for app users in case they have to select which one is to be used. |
    | Deployment name / Model name | This is the technical reference for the model. For OpenAI this is equal to the [model aliases](https://platform.openai.com/docs/models#current-model-aliases). For Azure OpenAI this is the deployment name from the [Azure Portal](https://oai.azure.com/resource/deployments).
    | Output modality| Describes what the output of the model is. This connector currently supports Text, Embedding, and Image.
    | Azure API version    | Azure OpenAI only. This is the API version to use for this operation. It follows the `yyyy-MM-dd` format. For supported versions, see [Azure OpenAI documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference). The supported versions can vary depending on the type of model, so make sure to look for the right section (such as Chat Completions, Image Generation, or Embeddings) on that page. |

3. Close the popup and test the configuration with the newly created deployed models.

### Using GenAI Commons Operations {#genai-commons-operations} 

After following the general setup above, you are all set to use the microflow actions under the **GenAI (Generate)** category from the toolbox. These operations are part of GenAI Commons. Since OpenAI is compatible with the principles of GenAI Commons, you can pass an `OpenAIDeployedModel` to all GenAI Commons operations that expect the generalization `DeployedModel`. All actions under **GenAI (Generate)** will take care of executing the right provider-specific logic, based on the type of specialization passed, in this case OpenAI. From an implementation perspective, it is not needed to inspect the inner workings of this operation. The input, output, and behavior are as described in the [GenAICommons documentation](/appstore/modules/genai/genai-for-mx/commons/#microflows). Applicable operations and some OpenAI-specific aspects are listed below.

For more inspiration or guidance on how to use the microflow actions in your logic, Mendix recommends downloading our [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of examples that cover all the operations mentioned.

#### Chat Completions

Operations for chat completions focus on the generation of text based on a certain input. In this context, system prompts and user prompts are two key components that help guide the language model in generating relevant and contextually appropriate responses. For more information on the type of prompts and message roles, see the [ENUM_MessageRole](/appstore/modules/genai/genai-for-mx/commons/#enum-messagerole) enumeration. To learn more about how to create the right prompts for your use case, see the prompt engineering links in the [Read More](#read-more) section.

The `OpenAIDeployedModel` is compatible with the two [Chat Completions operations from GenAI Commons](/appstore/modules/genai/genai-for-mx/commons/#genai-generate). While developing your custom microflow, you can drag and drop the following operations from the toolbox in Studio Pro, see category **GenAI (Generate)**: 

* Chat Completions (with history) 
* Chat Completions (without history)

You can use the GenAI Commons toolbox actions to [create the required Request](/appstore/modules/genai/genai-for-mx/commons/#genai-request-building) and [handle the Response](/appstore/modules/genai/genai-for-mx/commons/#genai-response-handling) for your use case. 

The internal chat completion logic within the OpenAI connector supports [JSON mode](#chatcompletions-json-mode), [function calling](#chatcompletions-functioncalling), and [vision](#chatcompletions-vision). Make sure to check the actual compatibility of the available models with these functionalities, as this changes over time. Any specific OpenAI microflow actions from the toolbox are listed below.

#### JSON Mode {#chatcompletions-json-mode}

When JSON mode is used, the model is programmatically instructed to return valid JSON. For OpenAI you have to explicitly mention the necessity of a JSON structure in a message in the conversation, e.g. the system prompt. Additionally after creating the request, but before passing it to the chat completions operation, use the toolbox action `Set Response Format` to set the required response format to JSON. 

#### Function Calling {#chatcompletions-functioncalling}

Function calling enables LLMs to connect with external tools to gather information, execute actions, convert natural language into structured data, and much more. Function calling thus enables the model to intelligently decide when to let the Mendix app call one or more predefined function microflows to gather additional information to include in the assistant's response.

OpenAI does not call the function. The model returns a tool called JSON structure that is used to build the input of the function (or functions) so that they can be executed as part of the chat completions operation. Functions in Mendix are essentially microflows that can be registered within the request to the LLM​. The OpenAI connector takes care of handling the tool call response as well as executing the function microflows until the API returns the assistant's final response. 

This is all part of the implementation that is executed by the GenAI Commons chat completions operations mentioned before. As a developer, you have to make the system aware of your functions and what these do by registering the function(s) to the request. This is done using the GenAI Commons operation [Tools: Add Function to Request](/appstore/modules/genai/genai-for-mx/commons/#add-function-to-request) once per function before passing the request to the chat completions operation.

Currently, the connector supports the calling of Function microflows that take a single input parameter of type string or no input parameter and return a string.

{{% alert color="warning" %}}
Function calling is a very powerful capability and should be used with caution. Function microflows run in the context of the current user, without enforcing entity access. You can use `$currentUser` in XPath queries to ensure that you retrieve and return only information that the end-user is allowed to view; otherwise, confidential information may become visible to the current end-user in the assistant's response.

Mendix also strongly advises that you build user confirmation logic into function microflows that have a potential impact on the world on behalf of the end-user. Some examples of such microflows include sending an email, posting online, or making a purchase.
{{% /alert %}}

For more information, see [Function Calling](/appstore/modules/genai/function-calling/).

#### Vision {#chatcompletions-vision}

Vision enables models like GPT-4o and GPT-4 Turbo to interpret and analyze images, allowing them to answer questions and perform tasks related to visual content. This integration of computer vision and language processing enhances the model's comprehension and makes it valuable for tasks involving visual information. To make use of vision inside the OpenAI connector, an optional [FileCollection](/appstore/modules/genai/genai-for-mx/commons/#filecollection) containing one or multiple images must be sent along with a single message.

For `Chat Completions without History`, `FileCollection` is an optional input parameter. 

For `Chat Completions with History`, `FileCollection` can optionally be added to individual user messages using [Chat: Add Message to Request](/appstore/modules/genai/genai-for-mx/commons/#chat-add-message-to-request).

Use the two OpenAI-specific microflow actions from the toolbox [Files: Initialize Collection with OpenAI File](#initialize-filecollection) and [Files: Add OpenAIFile to Collection](#add-file) to construct the input with either `FileDocuments` (for vision, it needs to be of type `Image`) or `URLs`. There are similar file operations exposed by the GenAI commons module that can be used for vision requests with the OpenAIConnector; however, these generic operations do not support the optional OpenAI-specific `Detail` attribute.

{{% alert color="info" %}}
OpenAI and Azure OpenAI for vision do not necessarily all models provide feature parity when it comes to combining functionalities. In other words, Azure OpenAI does not support the use of JSON mode and function calling in combination with image (vision) input for certain models, so make sure to check the [Azure Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models).

When you use Azure OpenAI, it is recommended to set the optional `MaxTokens` input parameter; otherwise, the return output may be cut off.
{{% /alert %}}

For more information on vision, see [OpenAI](https://platform.openai.com/docs/guides/vision) and [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/gpt-with-vision) documentation.

#### Image Generations {#image-generations-configuration}

OpenAI also provides image generation capabilities which can be invoked using this connector module. The `OpenAIDeployedModel` entity is compatible with the [image generation operation from GenAI Commons](/appstore/modules/genai/genai-for-mx/commons/#generate-image).

To implement image generation into your Mendix application, you can use the Image generation microflow action from GenAI Commons directly. When developing your microflow, you can drag and drop it from the toolbox: find it under the **GenAI (Generate)** category in the **Toolbox** in Mendix Studio Pro:

* Generate Image

When you drag this operation into your app microflow logic, use the `user prompt` to describe the desired image, and for the `DeployedModel` pass the relevant `OpenAIDeployedModel` that supports image generation. Additional parameters like the height and the width can be configured using [Image Generation: Create ImageOptions](/appstore/modules/genai/genai-for-mx/commons/#imageoptions-create). To configure OpenAI-specific options, like quality and style an extension to the ImageOptions can be added using [Image Generation: Set ImageOptions Extension](#set-imageoptions-extension). 

A generated image needs to be stored in a custom entity that inherits from the `System.Image` entity. The `Response` from the single image operation can be processed using [Get Generated Image (Single)](/appstore/modules/genai/genai-for-mx/commons/#image-get-single) to store the image in your custom `Image` entity.

#### Embeddings Generation {#embeddings-configuration}

OpenAI also provides vector embedding generation capabilities which can be invoked using this connector module. The `OpenAIDeployedModel` entity is compatible with the [knowledge base operations](/appstore/modules/genai/genai-for-mx/commons/#genai-knowledgebase-content) from the GenAI Commons.

In order to implement embeddings generation into your Mendix application, you can use the Embedding generation microflow actions from GenAI Commons directly. When developing your microflow, you can drag and drop the one you need from the toolbox: find it under the **GenAI (Generate)** category in the **Toolbox** in Mendix Studio Pro:

* Generate Embeddings (String)
* Generate Embeddings (Chunk Collection)

Depending on the operation you use in the microflow, an `InputText` String or a [ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection) needs to be provided. The current version of this operation only supports the float representation of the resulting vector.

The microflow action  `Generate Embeddings (String)` supports scenarios where the vector embedding of a single string must be generated, e.g. to use for a nearest neighbor search across an existing knowledge base. This input string can be passed directly as the `InputText` parameter of this microflow. Additionally, [EmbeddingsOptions](/appstore/modules/genai/genai-for-mx/commons/#embeddingsoptions-entity) is optional and can be instantiated using [Embeddings: Create EmbeddingsOptions](/appstore/modules/genai/genai-for-mx/commons/#embeddingsoptions-create) from GenAI Commons. Use the GenAI Commons toolbox action [Embeddings: Get First Vector from Response](/appstore/modules/genai/genai-for-mx/commons/#embeddings-get-first-vector) to retrieve the generated embeddings vector. Both mentioned operations can be found under **GenAI Knowledge Base (Content)** in the **Toolbox** in Mendix Studio Pro.

The microflow action `Generate Embeddings (Chunk Collection)` supports the more complex scenario where a collection of string inputs is vectorized in a single API call, such as when converting a collection of texts (chunks) into embeddings to be inserted into a knowledge base. Instead of calling the API for each string, executing a single call for a list of strings can significantly reduce HTTP overhead. Use the exposed microflows of GenAI Commons [Chunks: Initialize ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection-create) to create the wrapper and [Chunks: Add Chunk to ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection-add-chunk), or [Chunks: Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection-add-knowledgebasechunk) to construct the input. The resulting embedding vectors returned after a successful API call will be stored in the `EmbeddingVector` attribute in the same `Chunk` object. \
Purely to generate embeddings, it does not matter whether the ChunkCollection contains Chunks or its specialization KnowledgeBaseChunks. However, if the end goal is to store the generated embedding vectors in a knowledge base (e.g. using the [PgVector Knowledge Base](/appstore/modules/pgvector-knowledge-base/) module), then Mendix recommends adding `KnowledgeBaseChunks` to the `ChunkCollection` and using these as an input for the embeddings operations, so they can afterward directly be used to populate the knowledge base with.

Note that currently, the OpenAI connector does not support knowledge base interaction (e.g. inserting or retrieving chunks). For more information on possible ways to work with knowledge bases when using the OpenAI Connector for embedding generation, read more about [PgVector Knowledge Base](/appstore/modules/pgvector-knowledge-base/) and [setting up a Vector Database](/appstore/modules/genai/pgvector-setup/).

### Exposed Microflow Actions for (Azure) OpenAI {#exposed-microflows}

OpenAI-specific exposed microflow actions to construct requests via drag-and-drop are listed below. These microflows can be found in the **Toolbox** in Studio Pro. Note that using these flows is only required if you need to add options to the request that are specific to OpenAI. For the generic part can use the GenAI Commons toolbox actions to [create the required Request](/appstore/modules/genai/genai-for-mx/commons/#genai-request-building) and [handle the Response](/appstore/modules/genai/genai-for-mx/commons/#genai-response-handling), which can be found under the **GenAI (Request Building)** and **GenAI (Response Handling)** categories in the Toolbox.

#### Set Response Format {#set-responseformat-chat}

This microflow changes the `ResponseFormat` of the `OpenAIRequest_Extension` object, which will be created for a `Request` if not present. This describes the format that the chat completions model must output. The default behavior for OpenAI's models currently is `Text`. This operation must be used to enable JSON mode by providing the value `JSONObject` as input.

#### Files: Initialize Collection with OpenAI File {#initialize-filecollection}

This microflow initializes a new `FileCollection` and adds a new `FileDocument` or URL. Optionally, the `Image Detail` or a description using `TextContent` can be passed.

#### Files: Add OpenAI File to Collection {#add-file}

This microflow adds a new `FileDocument` or URL to an existing `FileCollection`. Optionally, the `Image Detail` or a description using `TextContent` can be passed.

#### Image Generation: Set ImageOptions Extension {#set-imageoptions-extension}

This microflow adds a new `OpenAIImageOptions_Extension` to an [ImageOptions](/appstore/modules/genai/genai-for-mx/commons/#imageoptions-entity) object to specify additional configurations for the image generation operation. The object will be used inside of the image generation operation if the same `ImageOptions` are passed. The parameters are optional.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}

## GenAI showcase Application {#showcase-application}

For more inspiration or guidance on how to use those microflows in your logic, Mendix recommends downloading the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of example use cases.

{{% alert color="info" %}}
Some examples demonstrate knowledge base interaction and require a connection to a vector database. For more information on these concepts, see [Retrieval Augmented Generation (RAG)](/appstore/modules/genai/rag/)
{{% /alert %}}

## Troubleshooting {#troubleshooting}

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

### Chat Completions with Vision and JSON Mode (Azure OpenAI)

Azure OpenAI does not support the use of JSON mode and function calling in combination with image (vision) input and will return a `400 - model error`. Make sure the optional input parameters `ResponseFormat` and `FunctionCollection` are set to `empty` for all chat completion operations if you want to use vision with Azure OpenAI.

### Chat Completions with Vision Response is Cut Off (Azure OpenAI)

When you use Azure OpenAI, it is recommended to set the optional `MaxTokens` input parameter; otherwise, the response may be cut off. For more details, see the [Azure OpenAI Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/gpt-with-vision?tabs=rest%2Csystem-assigned%2Cresource#call-the-chat-completion-apis).

## Read More {#read-more}

* [Prompt Engineering – OpenAI Documentation](https://platform.openai.com/docs/guides/prompt-engineering)
* [Introduction to Prompt Engineering – Microsoft Azure Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering)
* [Prompt Engineering Techniques – Microsoft Azure Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/advanced-prompt-engineering?pivots=programming-language-chat-completions)
* [ChatGPT Prompt Engineering for Developers - DeepLearning.AI](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers)
* [Function Calling - OpenAI Documentation](https://platform.openai.com/docs/guides/function-calling)
* [Vision - OpenAI Documentation](https://platform.openai.com/docs/guides/vision)
* [Vision - Azure OpenAI Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/gpt-with-vision)
