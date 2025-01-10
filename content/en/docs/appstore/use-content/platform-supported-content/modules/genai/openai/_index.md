---
title: "OpenAI"
url: /appstore/modules/genai/openai/
linktitle: "OpenAI"
description: "Describes the configuration and usage of the OpenAI Connector, which allows you to integrate generative AI into your Mendix app."
weight: 60
aliases:
    - /appstore/connectors/openai-connector/
---

## Introduction {#introduction}

The [OpenAI Connector](https://marketplace.mendix.com/link/component/220472) allows you to integrate generative AI into your Mendix app. It is compatible with [OpenAI's platform](https://platform.openai.com/) as well as [Azure's OpenAI service](https://oai.azure.com/). 

The current scope covers text generation use cases based on the [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat), image generation use cases based on the [Image Generations API](https://platform.openai.com/docs/api-reference/images), and embeddings use cases based on the [Embeddings API](https://platform.openai.com/docs/api-reference/embeddings).

Mendix provides dual-platform support for both OpenAI and Azure OpenAI.

### Typical Use Cases {#use-cases}

The OpenAI Connector is commonly used for text generation, image generation, and embeddings. These use cases as described in more detail below.

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

### Limitations {#limitations}

The current scope of the connector focuses on text and image generation use cases, as well as embeddings. We try to release early and often, so keep your eyes open for new releases!

### Prerequisites {#prerequisites}

To use this connector, you need to either sign up for an [OpenAI account](https://platform.openai.com/) or have access to deployments at [Azure OpenAI](https://oai.azure.com/).

### Dependencies {#dependencies}

* Mendix Studio Pro version [9.24.2](/releasenotes/studio-pro/9.24/#9242) or higher
* [GenAI Commons](/appstore/modules/genai/commons/)
* [Encryption](/appstore/modules/encryption/)
* [Community Commons](/appstore/modules/community-commons-function-library/)

## Installation {#installation}

 The following modules from the Marketplace need to be installed:

* [GenAI Commons](https://marketplace.mendix.com/link/component/227933) module
* [Encryption](https://marketplace.mendix.com/link/component/1011) module
* [Community Commons](https://marketplace.mendix.com/link/component/170) module

To import the OpenAI Connector into your app, follow the instructions in [How to Use Marketplace Content](/appstore/use-content/).

## Configuration {#configuration}

After you install the OpenAI Connector, you can find it in the **App Explorer**, in the **Marketplace Modules** section. The connector provides a domain model and several activities that you can use to connect your app to OpenAI. To implement an activity, use it in a microflow. To ensure that your app can connect to OpenAI, you must also [configure the Encryption module](/appstore/modules/encryption/#configuration). 

### General Configuration {#general-configuration}

1. Add the module role **OpenAIConnector.Administrator** to your Administrator user role in the security settings of your app. 
2. Add the **Configuration_Overview** page (**USE_ME > Configuration**) to your navigation, or add the **Snippet_Configurations** to a page that is already part of your navigation. 
3. Continue setting up your OpenAI configuration at runtime. Follow the instructions in either [OpenAI Configuration](#openai-configuration) or [Azure OpenAI Configuration](#azure-openai-configuration), depending on which platform you are using.

#### OpenAI Configuration {#openai-configuration} 

The following inputs are required for the OpenAI configuration: 

| Parameter   | Value                                                        |
| ----------- | ------------------------------------------------------------ |
| DisplayName | This is the name identifier of a configuration (for example, *MyConfiguration*). |
| API type    | Select `OpenAI`.<br />For more information, see the [Technical Reference](#technical-reference) section. |
| Endpoint    | This is the API endpoint (for example, `https://api.openai.com/v1`)   |
| API key     | This is the access token to authorize your API call. <br />To get an API, follow these steps:<ol><li>Create an account and sign in at [OpenAI](https://platform.openai.com/).</li><li> Go to the [API key page](https://platform.openai.com/account/api-keys) to create a new secret key. </li><li>Copy the API key and save this somewhere safe.</li></ol> |

{{% alert color="info" %}}
If you have signed up for an OpenAI account and are using free trial credits, note that the credits are only valid for three months after the account is created (not after the API key is created). To continue using the OpenAI API with an account that is more than three months old, you must top up your account balance with credit and create a new API key. For more details, see the [OpenAI API reference](https://platform.openai.com/docs/api-reference/authentication).
{{% /alert %}}

#### Azure OpenAI Configuration {#azure-openai-configuration} 

The following inputs are required for the Azure OpenAI configuration: 

| Parameter      | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| DisplayName    | This is the name identifier of a configuration (for example, *MyConfiguration*). |
| API type       | Select `AzureOpenAI`.<br />For more information, see the [Technical Reference](#technical-reference) section. |
| Endpoint       | This is the API endpoint (for example, `https://your-resource-name.openai.azure.com/openai/deployments/`).<br />For details on how to obtain `your-resource-name`, see the [Obtaining Azure OpenAI Resource Name](#azure-resource-name) section below. |
| DeploymentName | This is the deployment name you chose when you deployed the model. Deployments provide endpoints to the Azure OpenAI base models or your fine-tuned models.<br />To check the deployment name, go to [Azure OpenAI](https://oai.azure.com/) and check the deployment name under **Deployments**. |
| API version    | This is the API version to use for this operation. It follows the `yyyy-MM-dd` format. For supported versions, see [Azure OpenAI documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference). The supported versions can vary depending on the type of model, so make sure to look for the right section (such as Chat Completions, Image Generation, or Embeddings) on that page. |
| API key        | This is the access token to authorize your API call.         |
| Key type       | This is the type of token that is entered in the API key field. For Azure OpenAI, two types of keys are currently supported: Microsoft Entra token and API key. <br />For details on how to generate a Microsoft Entra access token, see [How to Configure Azure OpenAI Service with Managed Identities](https://learn.microsoft.com/en-gb/azure/ai-services/openai/how-to/managed-identity). Alternatively, if your organization allows it, you could use the Azure `api-key` authentication mechanism. For details on how to obtain an API key, see the [Obtaining Azure OpenAI API keys](#azure-api-keys) section below. For more information, see the [Technical Reference](#technical-reference) section. |

{{% alert color="info" %}}
For the Azure OpenAI configuration, each model needs a separate deployment so that it can be used. In order to benefit from multiple supported operations in your Mendix app, you need to create multiple configuration objects—one for every deployed model. For details, see the [Azure OpenAI Service REST API reference](https://learn.microsoft.com/en-gb/azure/ai-services/openai/reference).
{{% /alert %}}

##### Obtaining the Azure OpenAI Resource Name {#azure-resource-name}

1. Go to the [Azure OpenAI portal](https://oai.azure.com/) and sign in.
2. In the upper-right corner, click **Settings** ({{% icon name="cog" %}}). 
3. Go to the **Resource** tab.
4. Go to **Current resource** and click **JSON view**.
5. Use the value of the **Name** field as your resource name in the endpoint URL.

##### Obtaining the Azure OpenAI API keys {#azure-api-keys}

1. Go to the [Azure OpenAI portal](https://oai.azure.com/) and sign in.
2. In the upper-right corner, click **Settings** ({{% icon name="cog" %}}). 
3. Go to the **Resource** tab.
4. Go to **Current resource** and click **JSON view**.
5. Use the value of the **key1** or **key2** field as your API key while setting up the configuration. Note that these keys might not be available, depending on your organization's security settings. 

### Chat Completions Configuration {#chat-completions-configuration} 

After following the general setup above, you are all set to use the microflows in the **USE_ME > Operations > ChatCompletions** folder in your logic. Currently, two microflows for chat completions are exposed as microflow actions under the **OpenAI (Operations)** category in the **Toolbox** in Mendix Studio Pro. 

These microflows expect an `OpenAIConnection` object that refers to a `Configuration`. Additionally, a model or deployment needs to be passed:

* For the OpenAI API configuration, the desired model must be specified for every call in the `Model` attribute of the `OpenAIConnection`.
* For the Azure OpenAI configuration, the model is already determined by the deployment in the [Azure OpenAI portal](https://oai.azure.com/portal) that was set on the referenced `Configuration`. Any model explicitly specified will be ignored and hence can be left empty. 

In the context of chat completions, system prompts and user prompts are two key components that help guide the language model in generating relevant and contextually appropriate responses. For more information on prompt engineering, see the [Read More](#read-more) section. Different exposed microflow activities may require different prompts and logic for how the prompts must be passed, as described in the following sections. For more information on message roles, see the ENUM_MessageRole enumeration in [GenAI Commons](/appstore/modules/genai/commons/).

All chat completions operations within the OpenAI connector support `JSON mode`, [function calling](#chatcompletions-functioncalling), and [vision](#chatcompletions-vision).

For more inspiration or guidance on how to use the above-mentioned microflows in your logic, Mendix recommends downloading our [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of examples. 

#### Chat Completions (without History) {#chatcompletions-without-history}

The microflow activity `Chat Completions (without history)` supports scenarios where there is no need to send a list of (historic) messages comprising the conversation so far as part of the request. The operation requires a specialized [Connection](/appstore/modules/genai/commons/) of type `OpenAIConnection` and a `UserPrompt` as a string. Additional parameters, such as system prompt, can be passed via the optional [Request](/appstore/modules/genai/commons/) object and the optionally referenced `OpenAIRequest_Extension` for OpenAI-specific optional attributes.

Functionally, the prompt strings can be written in a specific way and can be tailored to get the desired result and behavior. For more information on prompt engineering, see the [Read More](#read-more) section.

Optionally, you can also use [function calling](#chatcompletions-functioncalling) by adding a [ToolCollection](/appstore/modules/genai/commons/) to the Request. Or you can [send images](#chatcompletions-vision) along with the user prompt by passing a [FileCollection](#initialize-filecollection).

For technical details, see the [Technical Reference](#technical-reference) section.

#### Chat Completions (with History) {#chatcompletions-with-with-history}

The microflow activity `Chat completions (with history)` supports more complex use cases where a list of (historical) messages (for example, the conversation or context so far) is sent as part of the request to the LLM. The operation requires a specialized [Connection](/appstore/modules/genai/commons/) of type `OpenAIConnection`, a [Request](/appstore/modules/genai/commons/) object containing messages, optional attributes, an optional `ToolCollection`, and the optionally referenced `OpenAIRequest_Extension` for OpenAI-specific optional attributes.

Optionally, you can use [function calling](#chatcompletions-functioncalling) by adding a [ToolCollection](/appstore/modules/genai/commons/) to the Request. Or you can [send images](#chatcompletions-vision) along with the user prompt by passing a [FileCollection](#initialize-filecollection).

For technical details, see the [Technical Reference](#technical-reference) section.

#### Function Calling {#chatcompletions-functioncalling}

Function calling enables LLMs to connect with external tools to gather information, execute actions, convert natural language into structured data, and much more. Function calling thus enables the model to intelligently decide when to let the Mendix app call one or more predefined function microflows to gather additional information to include in the assistant's response.

OpenAI does not call the function. The model returns a tool called JSON structure that is used to build the input of the function (or functions) so that they can be executed as part of the chat completions operation. Functions in Mendix are essentially microflows that can be registered within the request to the LLM​. The OpenAI connector takes care of handling the tool call response as well as executing the function microflows until the API returns the assistant's final response.

Function microflows take a single input parameter of type string or no input parameter and must return a string.

{{% alert color="warning" %}}
Function calling is a very powerful capability and should be used with caution. Function microflows run in the context of the current user, without enforcing entity access. You can use `$currentUser` in XPath queries to ensure that you retrieve and return only information that the end-user is allowed to view; otherwise, confidential information may become visible to the current end-user in the assistant's response.

Mendix also strongly advises that you build user confirmation logic into function microflows that have a potential impact on the world on behalf of the end-user. Some examples of such microflows include sending an email, posting online, or making a purchase.
{{% /alert %}}

You can use function calling in all chat completions operations by adding a `ToolCollection` with a `Function` via the [Tools: Add Function to Request](/appstore/modules/genai/commons/) operation.

For more information, see [Function Calling](/appstore/modules/genai/function-calling/).

#### Vision {#chatcompletions-vision}

Vision enables models like GPT-4o and GPT-4 Turbo to interpret and analyze images, allowing them to answer questions and perform tasks related to visual content. This integration of computer vision and language processing enhances the model's comprehension and makes it valuable for tasks involving visual information. To make use of vision inside the OpenAI connector, an optional [FileCollection](/appstore/modules/genai/commons/) containing one or multiple images must be sent along with a single message.

For `Chat Completions without History`, `FileCollection` is an optional input parameter. For `Chat Completions with History`, `FileCollection` can optionally be added to individual user messages using [Chat: Add Message to Request](/appstore/modules/genai/commons/).

Use the two exposed microflows [Files: Initialize Collection with OpenAI File](#initialize-filecollection) and [Files: Add OpenAIFile to Collection](#add-file) to construct the input with either `FileDocuments` (for vision, it needs to be of type `Image`) or `URLs`. The same file operations exposed by the GenAI commons module can be used for vision requests with the OpenAIConnector; however, they do not support the optional `Detail` attribute of the `OpenAIFileContent` entity.

{{% alert color="info" %}}
OpenAI and Azure OpenAI for vision do not yet provide feature parity when it comes to combining functionalities. In other words, Azure OpenAI does not support the use of JSON mode and function calling in combination with image (vision) input.

When you use Azure OpenAI, it is recommended to set the optional `MaxTokens` input parameter; otherwise, the return output may be cut off.
{{% /alert %}}

For more information on vision, see [OpenAI](https://platform.openai.com/docs/guides/vision) and [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/gpt-with-vision) documentation.

### Image Generations Configuration {#image-generations-configuration}

In order to implement image generations into your Mendix application, you can use the microflows in the **USE_ME > Operations > ImageGenerations** folder. Currently, one microflow for image generations is exposed as a microflow action under the **OpenAI (Operations)** category in the **Toolbox** in Mendix Studio Pro.

The microflow requires a specialized [Connection](/appstore/modules/genai/commons/) of type `OpenAIConnection` that determines the model and endpoint to use, and it also requires optional [ImageOptions](/appstore/modules/genai/commons/) to determine optional attributes like the height and width of the image. The `Response` for a single image can be processed using [Get Generated Image (Single)](/appstore/modules/genai/commons/) to store the image in your custom `Image` entity.

For technical details, see the [Technical Reference](#technical-reference) section.

* For an OpenAI API configuration, the desired model must be specified for every call with the `Model` attribute in the [Connection](/appstore/modules/genai/commons/).
* For the Azure OpenAI configuration, the model is already determined by the deployment in the [Azure OpenAI portal](https://oai.azure.com/portal). Any model explicitly specified will be ignored and hence can be left empty. 

### Embeddings Configuration {#embeddings-configuration}

In order to implement embeddings into your Mendix application, you can use the microflows in the **USE_ME > Operations > Embeddings** folder. Currently, two microflows for embeddings are exposed as microflow actions under the **OpenAI (Operations)** category in the **Toolbox** in Mendix Studio Pro.

These microflows require a specialized [Connection](/appstore/modules/genai/commons/) of type `OpenAIConnection` that determines the model and endpoint to use, and they also require optional [EmbeddingsOptions](/appstore/modules/genai/commons/) to determine optional attributes like the dimensions of the embedding vectors. Depending on the selected operation, an `InputText` String or a [ChunkCollection](/appstore/modules/genai/commons/) needs to be provided. The current version of this operation only supports the float representation of the resulting vector.

* For a OpenAI API configuration, the desired model must be specified for every call with the `Model` attribute in the [Connection](/appstore/modules/genai/commons/).
* For the Azure OpenAI configuration, the model is already determined by the deployment in the [Azure OpenAI portal](https://oai.azure.com/portal). Any model explicitly specified will be ignored and hence can be left empty. 

#### Embeddings (String) {#embeddings-string}

The microflow activity `Embeddings (String)` supports scenarios where the vector embedding of a single string must be generated, e.g. to perform a nearest neighbor search across an existing knowledge base. This input string can be passed directly as the `TextInput` parameter of this microflow. Note that the parameter [EmbeddingsOptions](/appstore/modules/genai/commons/) is optional. Use the exposed microflow [Embeddings: Get First Vector from Response](/appstore/modules/genai/commons/) to retrieve the generated embeddings vector.

For technical details, see the [Technical Reference](#technical-reference) section.

#### Embeddings (ChunkCollection) {#embeddings-chunkcollection}

The microflow activity `Embeddings (ChunkCollection)` supports the more complex scenario where a collection of [Chunk](/appstore/modules/genai/commons/) objects are vectorized in a single API call, such as when converting a collection of text strings (chunks) from a private knowledge base into embeddings. Instead of calling the API for each string, executing a single call for a list of strings can significantly reduce HTTP overhead. The embedding vectors returned after a successful API call will be stored as `EmbeddingVector` attribute in the same `Chunk` object. Use the exposed microflows of [GenAI Commons](/appstore/modules/genai/commons/) Chunks: Initialize ChunkCollection, Chunks: Add Chunk to ChunkCollection, or Chunks: Add KnowledgeBaseChunk to ChunkCollection to construct the input. 

In order to create embeddings, it does not matter whether the ChunkCollection contains Chunks or its specialization KnowledgeBaseChunks. However, if the end goal is to store the generated emebedding vectors in a knowledge base (e.g. using the [PgVector Knowledge Base](/appstore/modules/pgvector-knowledge-base/) module), then Mendix recommends adding `KnowledgeBaseChunks` to the `ChunkCollection` and using these as an input for the embeddings operations, so they can afterwards directly be used to populate the knowledge base with.

For technical details, see the [Technical Reference](#technical-reference) section.

### Exposed Microflows {#exposed-microflows}

You can use the following OpenAI-specific exposed microflows to construct requests via drag-and-drop. These microflows can be found in the **Toolbox** in the **OpenAI (Build Request)** section. Generic exposed microflows are described in [GenAI Commons](/appstore/modules/genai/commons/).

#### `Create OpenAI Connection` {#create-openai-connection}

This microflow can be used to create the `OpenAIConnection` object that is required for the chat completions operations. A [Configuration](#configuration) object is required for the input. For OpenAI configurations (but not Azure OpenAI configurations), the model name is mandatory too.

#### `Chat: Set Response Format` {#set-responseformat-chat}

This microflow can be used to optionally change the `ResponseFormat` of the `OpenAIRequest_Extension` object, which will be created for a `Request` if not present. This describes the format that the chat completions model must output.

#### `Files: Initialize Collection with OpenAI File` {#initialize-filecollection}

This microflow can be used to initialize a new `FileCollection` and add a new `FileDocument` or URL. Optionally, the `Image Detail` or a description using `TextContent` can be passed.

#### `Files: Add OpenAI File to Collection` {#add-file}

This microflow can be used to add a new `FileDocument` or URL to an existing `FileCollection`. Optionally, the `Image Detail` or a description using `TextContent` can be passed.

#### `Image Generations: Set ImageOptions Extension` {#set-imageoptions-extension}

This microflow can be used to add a new `OpenAIImageOptions_Extension` to an [ImageOptions](/appstore/modules/genai/commons/) object to specify additional configurations for the image generations operation. The object will be used inside of the image generations operation if the same `ImageOptions` are passed. The parameters are optional.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}

## GenAI showcase Application {#showcase-application}

For more inspiration or guidance on how to use those microflows in your logic, Mendix recommends downloading the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of example use cases.

{{% alert color="info" %}}
Some examples demonstrate knowledge base interaction and require a connection to a vector database. For more information these concepts, see [Retrieval Augmented Generation (RAG)](/appstore/modules/genai/rag/)
{{% /alert %}}

## Troubleshooting {#troubleshooting}

### Outdated JDK Version Causing Errors while Calling the Embeddings API {#outdated-jdk-version}

The Java Development Kit (JDK) is a framework needed by Mendix Studio Pro to deploy and run applications. For more information, see [Studio Pro System Requirements](/refguide/system-requirements/). Usually, the correct JDK version is installed during the installation of Studio Pro, but in some cases, it may be outdated. An outdated version can cause exceptions when calling the Embeddings API or other REST-based services with large data volumes.

Mendix has seen the following two exceptions when using JDK version `jdk-11.0.3.7-hotspot`:
`java.net.SocketException - Connection reset` or
`javax.net.ssl.SSLException - Received fatal alert: record_overflow`.

To check your JDK version and update it if necessary, follow these steps:

1. Check your JDK version – In Studio Pro, go to **Edit** > **Preferences** > **Deployment** > **JDK directory**. If the path points to `jdk-11.0.3.7-hotspot`, you need to update the JDK by following the next steps.
2. Go to [Eclipse Temurin JDK 11](https://adoptium.net/en-GB/temurin/releases/?variant=openjdk11&os=windows&package=jdk) and download the `.msi` file of the latest release of **JDK 11**.
3. Open the downloaded file and follow the installation steps. Remember the installation path. Usually, this should be something like `C:/Program Files/Eclipse Adoptium/jdk-11.0.22.7-hotspot`.
4. After the installation has finished, restart your computer if prompted.
5. Open Studio Pro and go to **Edit** > **Preferences** > **Deployment** > **JDK directory**. Click **Browse** and select the folder with the new JDK version you just installed. This should be the folder containing the *bin* folder. Save your settings by clicking **OK**.
6. Run the project and execute the action that threw the above-mentioned exception earlier.
    1. You might get an error saying `FAILURE: Build failed with an exception. The supplied javaHome seems to be invalid. I cannot find the java executable.`. In this case, verify that you have selected the correct JDK directory containing the updated JDK version.
    1. You may also need to update Gradle. To do this, go to **Edit** > **Preferences** > **Deployment** > **Gradle directory**. Click **Browse** and select the appropriate Gradle version from the Mendix folder. For Mendix 10.10 and above, use Gradle 8.5. For Mendix 10 versions below 10.10, use Gradle 7.6.3. Then save your settings by clicking **OK**.
    1. Rerun the project.

### Chat Completions with Vision and JSON mode (Azure OpenAI)

Azure OpenAI does not support the use of JSON mode and function calling in combination with image (vision) input and will return a `400 - model error`. Make sure the optional input parameters `ResponseFormat` and `FunctionCollection` are set to `empty` for all chat completions operations if you want to use vision with Azure OpenAI.

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
