---
title: "Mendix Cloud GenAI Resource Packs"
url: /appstore/modules/genai/mx-cloud-genai/resource-packs
linktitle: "Mendix Cloud GenAI Resource Packs"
description: "Provides an overview of Mendix Cloud GenAI Resource Packs, including their capabilities, limitations, and frequently asked questions (FAQ)"
weight: 10
---

## Introduction

Mendix Cloud GenAI Resource Packs provide turn-key access to Generative AI technology, delivered through Mendix Cloud.

* Model Resource Packs offer customers access to large language model capacity. Each resource pack includes an allocation of input/output tokens for Anthropic's Claude and Cohere's Embed. Support for additional models will be introduced in the future.

* Knowledge Base Resource Packs provide an OpenSearch-based vector database to support Retrieval-Augmented Generation (RAG), Semantic Search, and other Generative AI use cases.

Developers can use the Mendix Portal to manage their Mendix Cloud GenAI resources and seamlessly integrate model and knowledge base capabilities into their Mendix applications using the [Mendix Cloud GenAI Connector](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/). Optimized for high performance and low latency, Mendix Cloud GenAI Resource Packs provide the easiest and fastest way to deliver end-to-end Generative AI solutions with Mendix.

### General Availability

Mendix Cloud GenAI Resource Packs is a premium Mendix product that requires an additional purchase. To start using GenAI Resource Packs or inquire about pricing, contact your Customer Success Manager (CSM). For more information, you can also reach out to [genai-resource-packs@mendix.com](mailto:genai-resource-packs@mendix.com).
GenAI Resource Packs can be purchased using Mendix Cloud Tokens. For details around costs, refer to [Cloud Tokens](/control-center/cloud-tokens/).

## Models

Mendix Cloud Model Resource Packs provide customers with a monthly quota of input and output tokens for Anthropic's Claude and Cohere's Embed models. This allows customers to implement typical Generative AI use cases using text generation, embeddings, and knowledge bases.

### Supported Models

The Mendix Cloud GenAI Resource Packs provide access to the following models:

* Anthropic Claude 3.7 Sonnet (Cross-region inference profile)
* Anthropic Claude 4 Sonnet (Cross-region inference profile)
* Cohere Embed v3 (English and multilingual options)

The models are available through the Mendix Cloud, leveraging AWS's highly secure Amazon Bedrock multi-tenant architecture. This architecture employs advanced logical isolation techniques to effectively segregate customer data, requests, and responses, ensuring a level of data protection that aligns with global security compliance requirements. Customer prompts, requests, and responses are neither stored nor used for model training. Your data remains your data.

Customers looking to leverage other models in addition to the above can also take advantage of Mendix's [(Azure) OpenAI Connector](/appstore/modules/genai/reference-guide/external-connectors/openai/), Amazon [Bedrock Connector](/appstore/modules/genai/reference-guide/external-connectors/bedrock/), and [Mistral Connector](/appstore/modules/genai/reference-guide/external-connectors/mistral/) to integrate numerous other models into their apps.

### Technical Details for Model Resource Packs

| GenAI Model Resource Pack Plan             | S                 | M                 | L                 |
| ------------------------------------------ | ----------------- | ----------------- | ----------------- |
| Anthropic Claude (any version) (Tokens in/month)    | 2.5 million    | 5 million         | 10 million        |
| Anthropic Claude (any version) (Tokens out/month)   | 1.25 million   | 2.5 million       | 5 million         |
| Cohere Embed V3 (Tokens in/month)                   | 5 million      | 10 million        | 20 million        |

## Accessing GenAI Resources

Developers can easily obtain access to GenAI resources through a self-service capability, enabling them to access and manage GenAI resources independently. 
Developers with the required prerequisites can use the self-service capability to provision, deprovision, and manage GenAI resources directly from the Control Center. This enables faster provisioning and reduces manual dependency. 
For developers who do not have self-service capabilities, GenAI resources can still be provisioned or deprovisioned by contacting sales representatives or customer success manager (CSM) to order an existing stock keeping unit (SKU). 
Both approaches allow users to scale GenAI resources efficiently and explore more generative AI solutions with Mendix.

### Provisioning GenAI Resources Using the Self-Service Capability

When using the self-service capability, Mendix Admins can manage the provisioning and deprovisioning of GenAI resources directly through the [Control Center](https://controlcenter.mendix.com/index.html). They can provision the new resource, review it, and open it in a new tab of the [Mendix Cloud GenAI portal](https://genai.home.mendix.com/p/homepage). For more information, refer to [GenAI Resources](/control-center/genai-resources-self-service/). 

To provision GenAI resources successfully using self-service, ensure that you meet the requirements below:

1. Mendix Admins can access the Control Center to provision or deprovision the GenAI resources. 
2. You have sufficient free Mendix Cloud Tokens. These tokens are required to allocate GenAI capacity. For more information, refer to [Cloud Tokens](/control-center/cloud-tokens/).

For further details, refer to the [Prerequisites](/control-center/genai-resources-self-service/#prerequisites) section of *GenAI Resources*.

### Provisioning GenAI Resources Without Using the Self-Service Capability

If the self-service capability is not available in your environment, you can still provision your GenAI resources by ordering the existing SKU associated to your Mendix subscription. To do so, you can contact your sales representative or CSM.

## Knowledge Bases

Mendix Cloud Knowledge Base Resource Packs provide customers with an elastic, logically isolated vector database, to use for standard Generative AI architectural patterns such as Retrieval-Augmented Generation (RAG), semantic similarity search, and other Generative AI use cases. The Knowledge Bases on Mendix Cloud are based on AWS's highly secure Amazon Bedrock Knowledge Bases capability, combined with AWS' OpenSearch Serverless database— a widely adopted standard infrastructure for Generative AI Knowledge Bases on AWS, ensuring fast & accurate information retrieval.

Knowledge bases enable you to bring your own data for RAG, semantic similarity search, and other generative AI use cases:

* Make your app's data available through integration
* Connect to third-party information sources
* Manage knowledge base content and add metadata labels

Knowledge Bases are based on elastically scaling, serverless OpenSearch vector databases, to ensure high performance under load. The database is set up as a highly available cluster to ensure business continuity. Customer data is stored in logical isolation from other customers and is not used for model training, ensuring data security and privacy in compliance with industry standards.

### Technical Details for Knowledge Base Resource Packs

| GenAI Knowledge Base Resource Pack    | Standard      | 
| ------------------------------------- | ------------- |
| Compute                               | Elastic       |
| Memory                                | Elastic       |
| Disk Space                            | 10 GB         |

## Regional Availability

Mendix Cloud GenAI Resource Packs are available in the following regions of Mendix Cloud:

* Europe (Frankfurt) - eu-central-1
* Canada (Montreal) - ca-central-1

The availability of model versions depends on the selected region.

## Understanding Third-Party Requirements

Mendix AI services are powered by third-party technologies, including AWS Bedrock, Anthropic, and Cohere. To help you succeed with your implementation, here is what to do next:

1. Review and follow the Service Terms
   * AWS Bedrock – [Ground rules for infrastructure usage](https://aws.amazon.com/service-terms/)
  
2. Understand AI Usage Policies
   * Anthropic – [Guidelines for responsible AI use](https://anthropic.com/legal)
   * Cohere – [Responsible use requirements](https://docs.cohere.com/v2/docs/usage-policy)

{{% alert color="info" %}}
Save these links for future reference. Always review the terms before starting development, and check for updates when notified.
{{% /alert %}}

{{% alert color="warning" %}}
Compliance with these terms is mandatory to maintain access to the services.
{{% /alert %}}

## More resources

### Mendix Cloud GenAI Portal

The [Mendix Cloud GenAI Portal](https://genai.home.mendix.com/) allows easy access to manage the resources through the GenAI Resources section of the portal.

* Get insight into the consumption of input/output tokens for Text and Embeddings Generation Resources.
* Manage content for Knowledge Bases.
* Manage team access to all resources.
* Create and manage connection keys to connect your apps with all resources.
* Track activity logs for team access and connection key management.

For more information, see [Navigate through the Mendix Cloud GenAI Portal](/appstore/modules/genai/mx-cloud-genai/Navigate-MxGenAI/).

### Mendix Cloud GenAI Connector

The [Mendix Cloud GenAI connector](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/) lets you utilize Mendix Cloud GenAI resource packs directly within your Mendix application. It allows you to integrate generative AI by dragging and dropping common operations from its toolbox. Note that any versions older than the ones listed below are no longer functional:  

* GenAI for Mendix bundle v2.4.1 (Mendix 9) (contains Mendix Cloud GenAI connector) or
* Mendix Cloud GenAI connector v3.1.1 (no `DeployedKnowledgeBase` support) or
* Mendix Cloud GenAI connector v4.4.0 (`DeployedKnowledgeBase` support).

## FAQ

### What Happens to Data Processed by Mendix Cloud GenAI Services?

For Mendix Cloud GenAI Model Resources using Anthropic’s Claude and Cohere’s Embed, neither Mendix nor its partners (Amazon, Anthropic, and Cohere) store any requests (prompts) or responses (answers, embeddings). Your data is not used for model training.

Data stored in GenAI Knowledge Base Resources resides in a logically isolated database, accessible only to you—the customer—via keys you can generate in the Portal.

### How does Mendix Cloud GenAI service Store and Use Data Sent to It?

Requests (prompts) sent to and responses (answers, embeddings) received from the models are not stored and not used for training. Only metadata—such as token input/output counts—is collected for logging, monitoring, metering, billing, product improvement, and maintenance purposes.

Data sent to the Knowledge Base (vectors, chunks) is stored in a logically isolated, fully secure vector database, following industry-standard practices. This data is exclusively accessible to you and not used by Mendix. Similar to model requests, only metadata about Knowledge Base usage is collected for logging, monitoring, metering, billing, product improvement, and maintenance purposes.

### Read More

* [Enrich your Mendix app with GenAI capabilities](/appstore/modules/genai/)
* [Build a Chatbot Using the AI Bot Starter App](/appstore/modules/genai/how-to/starter-template/)
