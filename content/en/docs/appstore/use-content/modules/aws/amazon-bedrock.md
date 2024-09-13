---
title: "Amazon Bedrock"
url: /appstore/modules/aws/amazon-bedrock/
description: "Describes the configuration and usage of the Amazon Bedrock connector from the Mendix Marketplace. Amazon Bedrock is a fully managed service that makes foundation models (FMs) from Amazon and leading AI startups available through an API."
weight: 20
aliases:
    - /appstore/connectors/aws/amazon-bedrock/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Amazon Bedrock](https://marketplace.mendix.com/link/component/215042) connector enables you to enrich your Mendix app with generative AI capabilities by connecting it to [Amazon Bedrock](https://aws.amazon.com/bedrock/).

### Typical Use Cases

Amazon Bedrock is a fully managed service that makes foundation models (FMs) from Amazon and leading AI startups available through an API, so you can choose from various FMs to find the model that is best suited for your use case. With the Amazon Bedrock serverless experience, you can quickly get started, easily experiment with FMs, and seamlessly integrate and deploy them into your applications using AWS tools and capabilities. Typical use cases include the following:

* Chatting with an AI assistant, including a chat history.
* Building an AI agent to answer questions about proprietary data.
* Generating images based on text prompts and displaying them in the Mendix app.
* Generating embedding vectors for text inputs.

### Prerequisites {#prerequisites}

The Amazon Bedrock connector requires Mendix Studio Pro version 9.24.2 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS Authentication connector version 3.0.0 or higher](https://marketplace.mendix.com/link/component/120333). It is crucial for the Amazon Bedrock connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

You must also install the [GenAI Commons version 1.2.0 or higher](/appstore/modules/genai/commons/). To make integration of generative AI capabilities as easy as possible, the Amazon Bedrock connector depends on the generic domain model and operations provided by the GenAICommons module.

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

The pricing of the Amazon Bedrock Connectors is dependent on the Foundational Model that you use. You can find information about the pricing in the Foundational Model overview in the AWS console.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the Amazon Bedrock connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonBedrockConnector** section. The connector provides a [domain model and several activities](#technical-reference) that you can use to connect your app to Amazon Bedrock. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### Using Amazon Bedrock Models

To use Amazon Bedrock models, keep in mind some specific requirements, as listed below.

#### Model Lifecycle

Amazon Bedrock models have a lifecycle that consists of the Active, Legacy, and EOL stages. For more information, see [Model lifecycle](https://docs.aws.amazon.com/bedrock/latest/userguide/model-lifecycle.html). Models are no longer available for use after they reach the EOL state. To ensure that your application functions as intended, make sure that you regularly monitor the state of the model that you are using. For example, you may want to use an API call to retrieve the status of the model and alert you once it reaches the Legacy state. To programmatically get information about available models and their lifecycle status, you can use the **ListFoundationModels** operation.

### Configuring AWS Authentication

In order to use the Amazon Bedrock service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module.

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon Bedrock, you can implement the functions of the connector by using the provided activities in microflows. The **USE_ME** folder contains several subfolders containing operations that depend on the GenAICommons module. The following example microflows have been created for each of these inside the **ExampleImplementations** folder:

* EXAMPLE_ChatCompletions_FunctionCalling
* EXAMPLE_ChatCompletions_Vision
* EXAMPLE_ChatCompletions_withHistory
* EXAMPLE_ChatCompletions_withoutHistory
* EXAMPLE_Embeddings_ChunkCollection
* EXAMPLE_Embeddings_SingleString
* EXAMPLE_Retrieve
* EXAMPLE_RetrieveAndGenerate
* EXAMPLE_ImageGeneration_MultipleImages

For operations that do not depend on the GenAICommons, you can take a different approach. For example, to list all foundational models, implement the **List Foundation Models** activity by doing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_ListFoundationModels*, and then click **OK**.
3. From the **Toolbox**, drag a **Create Object** activity to your microflow and create an object of type `ListFoundationModelsRequest`.
4. In the **Toolbox**, in the in the **Amazon Bedrock (other)** section, find the **ListFoundationModels** activity.
5. Drag the **ListFoundationModels** activity onto the work area of your microflow.
6. Double-click the **ListFoundationModels** activity to configure the required parameters.
7. For the **ENUM_Region** parameter, provide a value by using a variable or an expression. This must be of the type `ENUM_Region` of the AWS Authentication connector.
8. For the **Credentials** parameter, provide a **Credentials** object from the AWS Authentication connector:
    1. In the **App Explorer**, in the **AWSAuthentication** > **Operations** section, find the **GetStaticCredentials** or **GetTemporaryCredentials** action.
    2. Drag the one you would like to use to the beginning of your microflow.
    3. Double-click the microflow action to configure the required parameters and provide a value for the AWS Region. For the **ListFoundationModels** parameter, provide the `ListFoundationModelsRequest` created in step 3.
9. The `ListFoundationModelsResponse` object is returned by the **ListFoundationModels** activity.
10. From the **Toolbox**, drag a **Retrieve** activity to your microflow and place it after the **ListFoundationModels** activity.
11. Double-click the **Retrieve** activity and make sure **By Association** is selected.
12. Select the **FoundationModelSummary_ListFoundationModelsResponse** association, which will return a list of the type **FoundationModelSummary**.
13. To further use the response information, you can create an implementation module with copies of the `ListFoundationModelsResponse` and `ModelSummary` Entities. This way, you can use your custom user roles and access rules for those entities and keep them when updating the connector.

You can follow a similar approach to implement any of the other operations in **Amazon Bedrock (other)**.

### Chatting with Large Language Models using the ChatCompletions Operation

A common use case of the Amazon Bedrock Connector is the development of chatbots and chat solutions. The **ChatCompletions (without history / with history)** operations offer an easy way to connect to most of the text-generation models available on Amazon Bedrock. The ChatCompletions operations are built on top of Bedrock's Converse API, allowing you to talk to different models without the need of a model-specific implementation. 

For an overview of supported models and model-specific capabilities and limitations, see [Amazon Bedrock Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features) in the AWS documentation.

To build a simple microflow that uses the ChatCompletions operation to send a single message to the Anthropic Claude 3.5 Sonnet model and show the response on a page, perform the following steps:

1. Create a new microflow and name it, for example, *AmazonBedrockChatCompletions*.
2. In the **Toolbox**, search for the **Chat Completions (without history)** activity in the *Amazon Bedrock (Operations)* and drag it onto your microflow.
3. Double click on the activity to see its parameters.
    1. The **Request** and **FileCollection** parameters are not needed for this example, so you can set them to **empty**.
    2. For the **UserPrompt** parameter, enter a string of your choice, for example *Hi, Claude!*. 
    3. CLick **OK**. The input for the **Connection** parameter will be created in the next step.
4. In the **Toolbox**, search for the **Create Amazon Bedrock Connection** operation and drag it to the beginning of your microflow.
5. Double-click it to configure its parameters.
    1. For the **ENUM_Region** parameter, enter a value of the `AWSAuthentication.ENUM_Region` enumeration. Choose the region where you have access to Amazon Bedrock. For example, *AWSAuthentication.ENUM_Region.us_east_1*.
    2. For the **ModelId** parameter, enter the model id of the LLM you want to send a message to. The model id of Claude 3.5 Sonnet is *anthropic.claude-3-5-sonnet-20240620-v1:0*.
    3. For the **UseStaticCredentials** parameter, enter *true* if you have configured static AWS Credentials, and *false* if you have configured temporary AWS Credentials.
    4. Click **OK**.
6. Double-click the **ChatCompletion** operation and, for the **Connection** parameter, pass the newly created **AmazonBedrockConnection** object.
7. In the **Toolbox**, search for the **Get Model Response Text** operation from the *GenAI Commons (Text & Files - Response)* category, and drag it to the end of your microflow.
8. Double-click on it and pass the **Response** from the ChatCompletions operation as parameter. The **Get Model Response Text** will return the response from Claude as a string.
9. Add a **Show Message** activity to the end of the microflow and configure it to show the returned response string.
10. Add a button that calls this microflow, run your project, and verify the results.

{{< figure src="/attachments/appstore/use-content/modules/aws-bedrock/chat-completions-mf.png" class="no-border" >}}

### Invoking Specific Models by Using the InvokeModel Operation

Depending on your needs, you can just reuse the operations inside of the **AmazonBedrockConnector (GenAICommons)** section. You can also find guidance on how to implement the required structures in the [GenAICommons](/appstore/modules/genai/) documentation. To help users understand what needs to be done to invoke specific models using the **Invoke Model** instead, the example microflow **EXAMPLE_TitanImageGeneratorG1** within the connector and the [Bedrock Showcase app](https://marketplace.mendix.com/link/component/223535) **invokeModel** topic and showcase can serve as an inspiration. 

Most text models can be used with the **ChatCompletions** operation. For an overview of the supported models and capabilities, see [Supported models and model features](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features).

To invoke a specific model that is not covered by the ChatCompletions operation, perform the following steps:

1. Choose the model with which you want to interact by using the **Invoke Model** operation.
2. In the [Model Parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) section of the Amazon Bedrock user guide, find the request and response JSON structures of the specific model that you want to invoke.
3. Create your domain model inspired by the JSON structures that you found. You can use a tool to visualize Json structures if needed, such as [JSON Crack](https://jsoncrack.com/editor).
4. In Mendix Studio Pro, create a JSON structure by doing the following steps:
    1. Right-click on the target folder.
    2. Click **Add other** > **JSON structure**.
    3. Create a structure for the request JSON.
    4. Repeat the previous steps to create a structure for the response JSON.
    5. Open the created JSON structure.
    6. Paste the request or response JSON into the created structure.
    7. Click **OK**.
5. Generate export and import mappings for the request and response JSON structures.
    The export mapping creates a JSON from the request-related objects (specific to the model that you want to invoke). The JSON must be added as the request body of the `InvokeModelRequest` object provided as input parameter to the **Invoke Model** operation. The import mapping maps the response returned by the **Invoke Model** operation to your model-specific response objects. To create import or export mappings, perform the following steps:
    1. Right-click the target folder.
    2. Click **Add other** > **Import/Export mapping**.
    3. In the dialogue window, select the **Schema source**.
    4. Click **JSON structure** and select the appropriate request/response JSON structure.
    5. Select the relevant schema elements.
    6. Click **OK**.
    7. Map the relevant elements to the correct attributes by double-clicking the shown entities and choosing the correct entity attributes for the correct elements.
6. Create a microflow that invokes a specific model using the **Invoke Model** operation, such as in the following figure (for Claude v. 2.1):

    {{< figure src="/attachments/appstore/use-content/modules/aws-bedrock/microflow.png" class="no-border" >}}

### Invoking an Agent with the InvokeAgent Operation {#invokeagent}

Agents in Amazon Bedrock can perform certain automated tasks such as API calls and data source interactions. For more information, see [Agents in Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html).

To invoke a Bedrock agent for your Mendix app, do the following steps:

1. Create the agent, as described in [Create an agent](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-create.html) in the Amazon Bedrock documentation.
2. Deploy the agent to create an alias, as described in [Deploy your agent](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-deploy.html) in the Amazon Bedrock documentation.
3. In your Mendix app, create a new microflow and add the **InvokeAgent** operation as a microflow step.
4. Either pass an **InvokeAgentRequest** object as a parameter to the flow, or create one within the microflow. Ensure that the following attributes are populated for the request:

    * Agent ID
    * Agent Alias ID
    * Input text (the prompt to send to the agent).
    * The session id (by reusing this value in a subsequent request, it is possible to continue a conversation).
    * Make a choice on 'EnableTrace' to enable or disable the tracking of the reasoning process.
    * Set 'EndSession' to specify whether or not you want to have the option of continuing the conversation in another request.
  
5. Enter the desired region as a value of the **AWSAuthentication.ENUM_Region** type.
6. Select a **Credentials** object. You can put it in scope with the **AWSAuthentication.GetStaticCredentials** or the **AWSAuthentication.GetTemporaryCredentials** microflow.
7. Select a microflow that takes an **AmazonBedrockConnector.InvokeAgentResponse** object as an input and handles that response.
    This is necessary because InvokeAgent is an asynchronous operation which means that it will not necessarily finish when the process that it was invoked from finishes. By giving the operation a handler microflow, the response can be handled as soon as it arrives. For an example handler microflow, see **AmazonBedrockConnector.InvokeAgentResponse_Handle** in the connector module. This microflow logs the response, so you can also use it just to investigate the response.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/use-content/modules/technical-reference/doc-pane.png" class="no-border" >}}

#### Operations to Persist Amazon Bedrock Metadata inside the Application

The Amazon Bedrock Connector offers a range of operations to retrieve and store metadata information in the Mendix app's database.

This can be useful to e.g. associate a chatbot configuration to an available model by selecting the model via dropdown in runtime. The persistent domain model allows for simple and efficient filtering capabililties on the available metadata. Further, the *SNIP_Settings_Admin_BedrockConfig* Snippet can be used to manage and view the synced data from an administrator perspective.

Currently, there are operations available to sync metadata about:

* Sync Models 
* Sync Knowledge Bases
* Sync Agents

The syncing process works the same for all of these operations. 

1. The information about models / knowledge bases / agents is persistent in the mendix app's database on the initial sync.
2. An association to the `AmazonBedrockRegion` object, that represents the AWS region used when syncing, is stored.
3. On a subsequent syncing process the available data is extended and updated. No data will be removed from the app's database - even if it is no longer available on AWS. The reason is that exising usages of the object in the running application should not be removed.

## Troubleshooting

If you encounter any issues while using the Amazon Bedrock connector, use the following troubleshooting tips to help you solve them.

### Error Code 400 - Bad Request

The service returns the error code *400 - Bad Request*.

#### Cause

Your AWS organization may not have been granted access to the model which you are trying to invoke.

#### Solution

To solve this issue, follow these steps:

1. In your Amazon Bedrock environment, navigate to **Model Access** for the region in which you would like to work.
2. If the status of a model is **Available**, enable access to this model for your AWS organization by doing the following steps:
    1. In the top-right corner of the overview, click on **Edit**.
    2. Select the check boxes by the models which you want to access with your credential set.
    3. Click **Save Changes**.

After the status of the models changes to **Access Granted**, you can use it with the Amazon Bedrock connector.

### Error code 403 - AccessDeniedException

When invoking a model, the error code *403 - Access denied* indicates that you do not have access to the targeted resource.

#### Cause

Possible root causes for this error include the following:

* You do not have access to the model in the specified AWS region.

#### Solution

To solve this issue, ensure that you have selected an AWS Region where you have model access. You can see an overview of the models accessible to you in the AWS Management Console, in the [Model Access](https://us-west-2.console.aws.amazon.com/bedrock/home?#/modelaccess) section of your Amazon Bedrock environment.

### Error code 404 - ResourceNotFoundException

When invoking a model, the error code *404 - Resource not found* indicates that the targeted resource was not found.

#### Cause

Possible root causes for this error include the following:

* The model which you are trying to invoke is not available in your specified AWS region.
* The model which you are trying to invoke is deprecated.

#### Solution

To solve this issue, verify the following:

1. Ensure that you have selected an AWS Region where the targeted model exists. You can see an overview of the models accessible to you in the AWS Management Console, on the [Overview page](https://us-west-2.console.aws.amazon.com/bedrock/home?#/overview) of your Amazon Bedrock environment. Make sure the region specified in the AWS Console matches the region you have configured in Mendix. 
2. Ensure that the model that you have selected is not deprecated and that the *model-id* is currently available in Amazon Bedrock.

## Appendix

### Knowledge Base {#knowledge-base}

In Bedrock, a *knowledge base* denotes a substantial storehouse of data and information. This serves as a foundational resource, enabling the AI system to glean insights and effectively comprehend and respond to natural language queries.

For more information about knowledge bases, see [Knowledge Base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html) in the Amazon Bedrock documentation.

#### Creating a Knowledge Base

Setting up knowledge bases is usually a one-time configuration, which can be done with the AWS Console. In order to get the best results, you should consider whether you want to use one of the chunking strategies available on AWS when creating the knowledge base, or whether you want to pre-process the data beforehand. 

*Chunking* is the practice of breaking large chunks of data into smaller segments. Chunking the data allows the embedding algorithm to process the given data in chunks, thus increasing efficiency. Chunking can also introduce a structure that helps the model understand which data belongs to the same context. You can use the default chunking strategy, or create a custom strategy if there is a specific way in which the model data should be split. 

For example, when building a chatbot that gives restaurant recommendations, you should set up the knowledge base with a list of restaurant reviews. In this case, using the default chunking into 300 tokens might result in chunks containing reviews for different restaurants, which is not optimal. You will likely have better results if each chunk corresponds to reviews for one restaurant, as with that strategy it is less likely that the model will then associate a review with the wrong restaurant. You can achieve the required results by pre-processing the data so that there is one file per restaurant, and using the **No chunking** option when setting up the knowledge base.

For more information about creating the knowledge base, including a list of the available chunking strategies, see [Create a knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-create.html). 

#### Adding Data from Your App

After a knowledge base has been set up, information from your app can be added in a file to the relevant S3 bucket, and then used during subsequent inquiries. Which information is used and how that information is exported depends on the customer's use case and is up to the Mendix developer to implement. For more information, see [Set up your data for ingestion](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup.html).

Amazon Bedrock only processes the information that existed during the last sync, so the data source must be synchronized whenever a new file is added to your S3 bucket or the existing files are changed. For more information, see [Sync to ingest your data sources into the knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ingest.html). 

The sync can be done from the information page of your knowledge base in the Amazon Bedrock Console, or by using the **StartIngestionJob** action in the Amazon Bedrock Connector.

{{% alert color="info" %}}
The sync can take up to a few minutes and the calls to your knowledge base during this process cannot be handled accurately. To make sure the sync process has ended, you can use the **GetIngestionJob** action in the Amazon Bedrock Connector to retrieve the status of the ingestion job, along with other details.
{{% /alert %}}

### Safeguards

AWS has introduced safeguards for Bedrock (currently in preview). When available, there will be two features: Guardrails and Watermark detection. 

The guardrail feature will allow you to: 

* Filter harmful content with configurable thresholds based on your responsible AI policies.
* Determine how to handle personally identifiable information (PII).
* Deny topics.

The watermark detection feature will make it possible to tell if an image has been created using Amazon Titan.

More information about guardrails can be found in this [AWS blogpost](https://aws.amazon.com/blogs/aws/guardrails-for-amazon-bedrock-helps-implement-safeguards-customized-to-your-use-cases-and-responsible-ai-policies-preview/) and in the [AWS documentation](https://aws.amazon.com/en/bedrock/guardrails/).

### Advanced Prompts for Agents

By default, an agent is configured with the following base prompt templates, one for each step in the agent sequence:

* Pre-processing
* Orchestration 
* Knowledge base response generation 
* Post-processing
  
By customizing the prompt templates and modifying these configurations, you can fine-tune your agent's accuracy. Additionally, you can provide custom examples for a technique known as few-shot prompting. This involves providing labeled examples for specific tasks, which further enhances the model's performance in targeted areas. For more information about advanced prompts, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html) in the AWS documentation.

You can also use placeholder variables in agent prompt templates. For example, in the orchestration prompt template, the *$prompt_session_attributes$* placeholder variable can be used to ingest the information from the `PromptSessionAttribute` entity into the prompt, if it was specified as part of the `InvokeAgentRequest`. For more information about placeholder variables available in agent prompt templates, see [Prompt placeholders](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html) in the AWS documentation.
