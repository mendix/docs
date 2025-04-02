---
title: "Navigate through the Mendix Cloud GenAI Portal"
url: /appstore/modules/genai/mx-cloud-genai/Navigate-MxGenAI/
linktitle: "Mendix Cloud GenAI Portal"
description: "Describes how to navigate through the Mendix Cloud GenAI Portal."
weight: 30
---

## Introduction

The [Mendix Cloud GenAI portal](https://genai.home.mendix.com/) is an online platform that provides access to Mendix Cloud GenAI resources. These resource packs on Mendix Cloud enable seamless integration with Generative AI technology, provisioned and hosted by Mendix: 

* GenAI Model Resource Packs provide access to model resources: Anthropic's  Claude and Cohere's Embed. 
* GenAI Knowledge Base Resource Packs provide the infrastructure to deliver RAG architecture and other GenAI use cases requiring a vector database. 

GenAI resource packs accelerate the delivery of complete Generative AI solutions within Mendix apps that seamlessly integrate with GenAI technology. Learn more about [Mendix Cloud GenAI Resource Packs](https://docs.mendix.com/appstore/modules/genai/mx-cloud-genai/resource-packs/) and the [Mendix Cloud GenAI Connector](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/). To start with a GenAI-infused Mendix application, see [creating a chatbot using the AI Bot Starter App](https://docs.mendix.com/appstore/modules/genai/using-genai/starter-template/) or [building a GenAI app from scratch with the Blank GenAI App](https://docs.mendix.com/appstore/modules/genai/using-genai/blank-app/). 

## Resource Details 

### Settings

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenAIResource_Settings.png" >}}

The **Settings** tab contains the details of a GenAI resource. Here is more information:

* **Display Name**: indicates the name of the resource.
* **ID**: indicates the resource ID.
* **Region**: the region where the resource is hosted.
* **Cloud provider**: indicates the cloud provider, for example, AWS.
* **Type**: this is the type of resource, for example, Text Generation, Embedding, Knowledge Base, etc.
* **Model**: indicates which model is used, for example, Anthropic Claude Sonnet 3.5.
* **Plan**: indicates the subscription plan used for compute resources (for example, embedding or text generation resources).
* **Environment**: shows which environment is used, for example, test, acceptance, or production.
* Additionally when you are looking at the knowledge base resource settings, you will see details of the associated embeddings resource and vice versa. To learn more about embeddings,  see [Embedding vector](https://docs.mendix.com/appstore/modules/genai/rag/#embedding-vector).

### Team

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenAIResource_Team.png" >}}

The **Team** allows you to manage access to the Mendix Cloud GenAI resource. All users listed in this overview have access to the resource in the GenAI resource portal and can create new keys or invite new users. You can add new users via the **Add Member** button and remove them using the **Remove Member** button next to their name in the overview.

{{% alert color="info" %}}Currently, you can only invite people within the same organization.{{% /alert %}} 

### Keys

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenAIResource_Keys.png" >}}

The **Keys** tab allows you to manage configuration keys for the resources. These keys provide programmatic access to the GenAI resources. From the **Keys** tab, you can create new keys and revoke existing ones.  

To create a new key, click **Create Key**, add a description, and save the changes. A pop-up message will display the key. Make sure to store it securely, as it will only be shown once.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenAIResource_KeyGeneration.png" >}}

Once created, the key can be used in the Mendix application via the Mendix Cloud GenAI Connector, which is part of the GenAI for the Mendix bundle. When you create a key for a knowledge base, an embedding key is automatically generated and marked accordingly in the keys overview.

### Content (Only for Knowledge Bases)

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenAIResource_Content.png" >}}

{{% alert color="info" %}} The **Content** tab is available only for Knowledge Bases.{{% /alert %}} 

On the **Content** page, you can find information on adding knowledge to your Knowledge Base resource and managing its content.

Currently, you have the following options for adding data to a Knowledge Base:

1. Add files (for example, TXT or PDF)

2. Add data from a Mendix application

#### Add Files 

When you select **Add Files Like .TXT or .PDF** option, you can upload documents directly to the GenAI portal. Before uploading, you also have the option to add metadata. For more information, see the [metadata](#metadata) section below.

{{% alert color="info" %}} Only TXT and PDF files are supported. {{% /alert %}} 

##### Metadata {#metadata}

Metadata is additional information that can be attached to data in a GenAI knowledge base. Unlike the actual content, metadata provides structured details that help in organizing, searching, and filtering information more efficiently. It helps manage large datasets by allowing to retrieve of relevant data based on specific attributes rather than relying solely on similarity-based searches.  

Metadata consists of key-value pairs and serves as additional information connected to the data, though it is not part of the vectorization itself.

For example, a GenAI Knowledge Base could be used to store customer support tickets. Each ticket may have associated metadata such as Ticket Type, Status, and Priority. Instead of relying solely on similarity-based searches of ticket descriptions, users can filter for specific tickets, such as 'bug' tickets with the status set to 'solved'.

#### Add Data from a Mendix Application

You can upload data directly from Mendix to the Knowledge Base. To do so, several operations of the Mendix Cloud GenAI Connector are required. For a detailed guide on this process, see [Add Data Chunks to Your Knowledge Base](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#add-data-chunks-to-your-knowledge-base).
