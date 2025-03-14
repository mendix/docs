---
title: "Navigate through the Mendix Cloud GenAI Portal"
url: /appstore/modules/genai/mx-cloud-genai/Navigate-MxGenAI/
linktitle: "Mendix Cloud GenAI Portal"
description: "Describes the steps to take when navigating through the Mendix Cloud GenAI Portal."
weight: 30
---

## Introduction

The Mendix Cloud GenAI portal is the location for the Mendix Cloud GenAI resources. The portal can be found on [genai.home.mendix.com](https://genai.home.mendix.com/). 

Mendix GenAI resource packs on Mendix Cloud provide access to Generative AI technology provisioned and hosted by Mendix: 

- GenAI Model Resource Packs provide access to model resources: Anthropic's  Claude & Cohere's Embed. 
- GenAI Knowledge Base Resource Packs provide the infrastructure to deliver RAG architecture & other GenAI use cases that need a vector database. 

GenAI resource packs accelerate the delivery of full Generative AI solutions within Mendix apps that seamlessly integrate with GenAI technology. Learn more about [Mendix Cloud GenAI Resource Packs](https://docs.mendix.com/appstore/modules/genai/mx-cloud-genai/resource-packs/) and the [Mendix Cloud GenAI Connector](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/). To get started with a GenAI-infused Mendix application see: [creating a chatbot using the AI Bot Starter App](https://docs.mendix.com/appstore/modules/genai/using-genai/starter-template/) or [building a GenAI app from scratch with the Blank GenAI App](https://docs.mendix.com/appstore/modules/genai/using-genai/blank-app/). 



## Resource Details 

### Settings

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/Settings.png" >}}

The `Settings` tab contains the details of a GenAI resource. Here is more information about: 

- The region where the resource is hosted 
- Cloud provider (e.g. AWS)
- Type of resource (Text Generation, Embeddings, Knowledge Base) 
- Model (e.g. Anthropic Claude Sonnet 3.5) 
- Environment (test, acceptance, production) 
- Associated resources (embeddings resources for knowledge bases and the other way around) [learn more about embeddings](https://docs.mendix.com/appstore/modules/genai/rag/#embedding-vector)

### Team

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/Team.png" >}}

The `Team` tab can be used to manage who has access to the Mendix Cloud GenAI resource. All users listed in this overview have access to the resource in the GenAI resource portal and can create new keys or invite new users. New users can be added to a resource via the Add User button. They can be removed by clicking the 'Remove' button next to their name in the overview.

{{% alert color="info" %}} Currently it is only possible to invite people within the same organization. {{% /alert %}} 


### Keys


{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/Keys.png" >}}

The keys overview is the location to manage configuration keys for the resource. Resource keys provide programmatic access to the GenAI resources. From the key overview it is possible to create new keys and revoke existing keys.  

To create a new key: 

1. Click Create Key. 
2. Add a description. 
3. Save the changes.  
4. A pop-up message will appear with the key. Make sure to safely store the key, since it is only shown once.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenerateKey.png" >}}

After key creation, it can be used in the Mendix application through the Mendix Cloud GenAI Connector which is part of the GenAI For Mendix bundle. 

When creating a key for a knowledge base, an embeddings key is automatically created and indicated as such in the keys overview.


### Content (Only for Knowledge Bases)

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/navigate_mxgenai/GenerateKey.png" >}}

On the content page you can find information about how to add knowledge to your knowledge base resource and manage the knowledge base's content. 

We currently offer the following options for adding data to a Knowledge Base:  

1. Add Files (Like .TXT or .PDF) 
2. Add data from a Mendix application. 

#### Add Files 

When selecting this option, you can directly upload documents in the GenAI portal. Before the upload, there also is the option to add metadata. You can find more information about metadata in the next section.

{{% alert color="info" %}} Only .PDF and .TXT files are supported. {{% /alert %}} 

##### Metadata 

Metadata is additional information that can be attached to data in a GenAI knowledge base. Unlike the actual content, metadata provides structured details that help in organizing, searching, and filtering information more efficiently. It helps with managing large datasets by allowing to retrieve relevant data based on specific attributes rather than relying solely on similarity-based searches.  

Metadata consists of key-value pairs and is additional information, which is connected but not part of the vectorization itself.  

An example is a GenAI knowledge base to store customer support tickets. Each ticket could be associated with metadata such as: Ticket Type, Status, Priority. Instead of performing a similarity-based search on ticket descriptions, a user can filter for only “bug” tickets that have the Status “solved”. 

#### Add data from a Mendix application

It is possible to upload data directly from Mendix to the Knowledge Base. In order to do that, several operations of the Mendix Cloud GenAI connector are required. Please see [add data chunks to your knowledge base](https://docs.mendix.com/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#add-data-chunks-to-your-knowledge-base) for a more detailed guide on how this works. 
