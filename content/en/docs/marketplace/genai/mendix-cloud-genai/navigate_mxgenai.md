---
title: "Navigate through the Mendix Cloud GenAI Portal"
url: /appstore/modules/genai/mx-cloud-genai/Navigate-MxGenAI/
linktitle: "Mendix Cloud GenAI Portal"
description: "Describes how to navigate through the Mendix Cloud GenAI Portal."
weight: 30
---

## Introduction

The [Mendix Cloud GenAI portal](https://genai.home.mendix.com/) is the part of the Mendix portal that provides access to [Mendix Cloud GenAI Resource Packs](/appstore/modules/genai/mx-cloud-genai/resource-packs/). After logging in, you can navigate to the overview of all resources. You can see all resources, that you are a team member of and access their details.

## Resource Details 

After clicking on a specific resource, you land on its details page, offering shortcut to consumption insights, key generation, team management, and helpful documentation. 

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenAIResource_Details.png" >}}

### Settings

The **Settings** tab contains the details of a GenAI resource. It shows the following:

* **Display Name**: indicates the name of the resource.
* **ID**: indicates the resource ID.
* **Region(s)**: the region where the resource is hosted.
* **Cross Region Inference (CRI)**: shows if the model supports cross-region inference ¹.
* **Cloud Provider**: indicates the cloud provider, for example, AWS.
* **Type**: this is the type of resource, for example, Text Generation, Embedding, Knowledge Base, etc.
* **Model**: indicates which model is used, for example, Anthropic Claude Sonnet 3.5. For more information, see the [Upgrading the Text Model Version](#upgrade-model) section below.
* **Plan**: indicates the subscription plan used for compute resources (for example, embedding or text generation resources).
* **Environment**: shows which environment is used, for example, test, acceptance, or production.

¹ Cross-region inference (CRI) allows a model to redirect requests to another region, helping to distribute the load across multiple regions within the same area. So, EU requests always stay within EU regions. Connecting to a cross-region inference profile does not change how the request is sent; the redirection happens on the server side, determining the region to handle the request to get the fastest response. For more information, see [Increase throughput with cross-Region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html). If applicable, CRI profiles are selected during provisioning of a model resource. New models are available under the CRI inferencing type by default. 

#### Additional Details for Knowledge Base Resources

For knowledge base resources, you can also see details of the associated embeddings resource and vice versa. To learn more about embeddings, see the [Embedding vector](/appstore/modules/genai/rag/#embedding-vector) section of *RAG in a Mendix App*.

#### Upgrading the Text Model Version{#upgrade-model}

Model version upgrades let you migrate your Text Generation Resources to a newer, non-deprecated model within the same model family. For example, GenAI Resources offer the Claude Sonnet family, ranging from Claude Sonnet 3.7 to Claude Sonnet 4.5. Upgrading ensures you gain the latest performance improvements and AI capabilities. In the **Settings** tab of your Text Generation Resource, click **Change Model** to view and select the available model version.

{{% alert color="warning" %}}
While changing the model version, note the following:

* Changing a model version in production requires careful evaluation. Even within the same model family, newer versions can behave differently, and may affect how your LLM-driven applications, such as agents, perform.

* Always validate a new model version in a test environment before using it for your use case, and downgrade to the previous version if required.
{{% /alert %}}

{{% alert color="info" %}}
Ensure you are using Mendix Cloud GenAI Connector version 5.3.0 and above to support the latest Cohere Embed v4 model. To see the upgraded model version reflected in your GenAI Connector after upgrading, make sure you are using Mendix Cloud GenAI Connector version 5.4.0 and above.
{{% /alert %}}

### Team

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenAIResource_Team.png" >}}

The **Team** page allows you to manage access to the Mendix Cloud GenAI resource. All users listed in this overview have access to the resource in the GenAI resource portal and can create new keys or invite new users. You can add new users via the **Add Member** button and remove them using the **Remove Member** button next to their name in the overview.

{{% alert color="info" %}}Currently, you can only invite people within the same organization.{{% /alert %}} 

### Keys

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenAIResource_Keys.png" >}}

The **Keys** tab allows you to manage configuration keys for the resources. These keys provide programmatic access to the GenAI resources. From the **Keys** tab, you can create new keys and revoke existing ones.  

To create a new key, click **Create Key**, add a description, and save the changes. A pop-up message will display the key.

{{% alert color="info" %}}
Make sure to store it securely, as it will only be shown once.
{{% /alert %}}

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenAIResource_KeyGeneration.png" >}}

Once created, the key can be used in the Mendix application via the Mendix Cloud GenAI Connector. 

#### Additional Information for Knowledge Base Resource Keys

When you create a key for a knowledge base, an embeddings resource key is automatically generated for the selected embeddings model and marked accordingly in the keys overview. To configure a knowledge base connection from a Mendix application, you only need to import the knowledge base resource key. The connection details for the embeddings model are created automatically.

### Content (Only for Knowledge Bases)

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenAIResource_Content.png" >}}

{{% alert color="info" %}} The **Content** tab is available only for Knowledge Bases.{{% /alert %}} 

On the **Content** page, you can find information on adding knowledge to your Knowledge Base resource and managing its content.

Currently, you have the following options for adding data to a Knowledge Base:

* Add files (for example, TXT or PDF)
* Add data from a Mendix application.

#### Add Files 

When you select the **Add Files Like .TXT or .PDF** option, you can upload documents directly to the GenAI portal. Before uploading, you also have the option to add metadata. For more information, see the [metadata](#metadata) section below.

{{% alert color="info" %}} Only TXT and PDF files are supported. {{% /alert %}} 

Before uploading, you can choose to upload the data to a new collection, the default collection, or another existing collection within the resource. A Knowledge Base resource can comprise several collections. Each collection is specifically designed to hold numerous documents, serving as a logical grouping for related information based on its shared domain, purpose, or thematic focus. Below is a diagram showing how resources are organized into separate collections. This approach allows multiple use cases to share a common resource while the option to only add the required collections to the conversation context is preserved.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenAIKnowledgeBaseResource.png" >}}

{{% alert color="info" %}} While collections provide a mechanism for data separation, it is not best practice to create a large number of collections within a single Knowledge Base resource. A more performant and practical approach for achieving fine-grained data separation is through the strategic use of [Metadata](#metadata). {{% /alert %}} 

##### Metadata {#metadata}

Metadata is additional information that can be attached to data in a GenAI knowledge base. Unlike the actual content, metadata provides structured details that help in organizing, searching, and filtering information more efficiently. It helps manage large datasets by allowing the retrieval of relevant data based on specific attributes rather than relying solely on similarity-based searches.

Metadata consists of key-value pairs and serves as additional information connected to the data, though it is not part of the vectorization itself.

In the employee onboarding and IT ticket support example, instead of having two different collections, such as IT setup, and equipment and historical support tickets, there could be one named 'Company IT'. To retrieve tickets only and no other information from this collection, add the metadata below during insertion.

```text
key: `Category`, value: `Ticket`
```

The model then generates its response using the specified metadata instead of solely the input text. 

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenAIKBMetadataSeparation.png" >}}

Using metadata, even more fine-grained filtering becomes feasible. Each ticket may have associated metadata, such as

* key: `Ticket Type`, value: `Bug`
* key: `Status`, value: `Solved`
* key: `Priority`, value: `High`

Instead of relying solely on similarity-based searches of ticket descriptions, users can then filter for specific tickets, such as 'Bug' tickets with the status set to 'Solved'.

#### Add Data from a Mendix Application

You can upload data directly from Mendix to the Knowledge Base. To do so, several operations of the Mendix Cloud GenAI Connector are required. For a detailed guide on this process, see the [Add Data Chunks to Your Knowledge Base](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#add-data-chunks-to-your-knowledge-base) section of **Mendix Cloud GenAI Connector**.

### Consumption (Only for Text and Embeddings Generation Resources)

{{% alert color="info" %}} The **Consumption** tab is available for Model resources only.{{% /alert %}} 

The **Consumption** section provides outcomes of token consumption monitoring for each GenAI resource in a graphical way. Use this overview to see the current usage, insights on the usage per day, and to compare the current month with previous months. Note that months represent bundle months here, which is the period during which token consumption is tracked, beginning on the date of your last GenAI Resource plan entitlement reset and ending on the next reset date. This creates a recurring monthly cycle based on your plan activation date, not the calendar month.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenAIResource_TokenConsumptionMonitor.png" >}}

#### What Are Tokens?

Tokens are what you pay for when consuming large language model services.

In order for a large language model to understand text input, the text is first ‘tokenized’: broken down into smaller pieces where each piece represents a token with its unique ID. A good rule of thumb is that 100 tokens are around 75 English words, however there are always differences depending on the model or the language used. After tokenization, each token will be assigned an embeddings vector. The tokens required to feed the input prompt to the model are called ‘input tokens’. The tokens required to transform the model output vectors into, for example, text or images are called ‘output tokens’.

#### When Are Tokens Consumed?

Text generation resources consume both input and output tokens (text sent to the model and generated by the model).

Embeddings resources only consume input tokens. This is because only the generated embedding vectors are returned and the generated output is not tokenized.

Knowledge base resources do not consume tokens as they only store embedding vectors. Uploading a document to a knowledge base connected to an Embeddings resource will consume tokens in the embeddings resource.

#### Exporting Token Consumption Data 

Click **Export** to export consumption data in CSV format. The export contains basic information about input tokens, output tokens, and dates. Days with no consumption are not exported. 
