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

The 'Settings' overview contains the details of a GenAI resource. Here is more information about: 

- The region where the resource is hosted 
- Cloud provider 
- Type of resource (Text Generation, Embeddings, Knowledgebase) 
- Model (if applicable) 
- Environment (test, acceptance, production) 
- Associated resources (embeddings resources for knowledge bases and the other way around) [learn more about embeddings](https://docs.mendix.com/appstore/modules/genai/rag/#embedding-vector)


### Team

The 'Team' overview can be used to manage who has access to the Cloud GenAI resource. All users in this overview have access to the resource in the GenAI resource portal and can create new keys or invite new users. New users can be added to a resource via the Add User button. 

> Currently it is only possible to invite people within the same organization.


## Keys


The keys overview is the location to manage configuration keys for the resource. Resource keys provide programmatic access to the GenAI resources. From the key overview it is possible to create new keys and revoke existing keys.  

To create a new key: 

1. Click Create Key. 
2. Add a description. 
3. Save the changes.  
4. A pop-up message will appear with the key. Make sure to safely store the key, since it is only shown once. 

After key creation, it can be used in the Mendix application through the Mendix Cloud GenAI Connector which is part of the GenAI For Mendix bundle. 

When creating a key for a knowledgebase, an embeddings key is also automatically created.


## Content (Knowledgebases)

The Content page supports uploading documents to the knowledgebase. 

We offer different options for adding data to a Knowledge Base:  

1. Add Files (Like .TXT or .PDF) 
2. Connect to a MX Data Source. 

### Add Files 

It is possible to directly upload documents in the GenAI portal. Before uploading documents, it is possible to optionally add metadata.  

{{% alert color="info" %}} Only .PDF and .TXT files are supported. {{% /alert %}} 

#### Metadata 

Metadata is additional information that can be attached to data in a GenAI knowledge base. Unlike the actual content, metadata provides structured details that help in organizing, searching, and filtering information more efficiently. It helps with managing large datasets by allowing to retrieve relevant data based on specific attributes rather than relying solely on similarity-based searches.  

Metadata consists of key-value pairs and is additional information, which is connected but not part of the vectorization itself.  

An example is a GenAI knowledge base to store customer support tickets. Each ticket could be associated with metadata such as: Ticket Type, Status, Priority. Instead of performing a similarity-based search on ticket descriptions, a user can filter for only “bug” tickets that have the status “solved”. 

### Connect to a MX Data Source. 

It is possible to upload data directly from Mendix to the Knowledge Base. To see how this can be done, please see [add data chunks to your knowledge base](https://docs.mendix.com/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#add-data-chunks-to-your-knowledge-base). 





































## Read More

* [Mendix Cloud GenAI Resource Packs](https://docs.mendix.com/appstore/modules/genai/mx-cloud-genai/resource-packs/)
