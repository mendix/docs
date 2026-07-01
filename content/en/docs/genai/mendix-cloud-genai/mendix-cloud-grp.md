---
title: "Mendix Cloud GenAI Resource Packs"
url: /agents/mx-cloud-genai/resource-packs/
linktitle: "Mendix Cloud GenAI Resource Packs"
description: "Provides an overview of Mendix Cloud GenAI Resource Packs, including their capabilities, limitations, and frequently asked questions."
weight: 10
aliases:
    - /appstore/modules/genai/mx-cloud-genai/resource-packs/
---

## Introduction

Mendix Cloud GenAI Resource Packs provide turn-key access to Generative AI technology, delivered through Mendix Cloud.

{{% alert color="info" %}}
Model Resource Packs now use a Cloud Token for the GenAI Units conversion that allows you to use any supported Anthropic Claude model from a single resource, while Cohere Embed models are provided through separate Embeddings Resource Packs.
{{% /alert %}}

* Model Resource Packs offer access to large language model capacity. You choose a monthly Cloud Token amount, which is converted to [GenAI Units](/agents/mx-cloud-genai/Navigate-MxGenAI/#what-are-tokens-and-genai-units) at a rate of 100 GenAI Units per Cloud Token. GenAI Units are consumed against a model-specific exchange rate, so you can use any supported Anthropic Claude model, for example, Haiku, Sonnet, or Opus from a single resource.

* Embeddings Resource Packs provide access to Cohere Embed models for generating embedding vectors. New model versions are automatically available on your existing resource as Mendix adds them — no resource changes or key updates are required. For a full list of available models, see [Supported Models](#supported-models).

* Knowledge Base Resource Packs provide an OpenSearch-based vector database to support Retrieval-Augmented Generation (RAG), Semantic Search, and other Generative AI use cases.

Developers can use the Mendix Cloud GenAI Portal to manage their Mendix Cloud GenAI resources and seamlessly integrate model and knowledge base capabilities into their Mendix apps using the [Mendix Cloud GenAI Connector](/agents/mx-cloud-genai/mxgenai-connector/). Optimized for high performance and low latency, Mendix Cloud GenAI Resource Packs provide the easiest and fastest way to deliver end-to-end Generative AI solutions with Mendix.

### General Availability

Mendix Cloud GenAI Resource Packs is a premium Mendix product that requires an additional purchase. To start using GenAI Resource Packs or inquire about pricing, contact your Customer Success Manager (CSM). For more information, you can also contact [genai-resource-packs@mendix.com](mailto:genai-resource-packs@mendix.com).

You can purchase GenAI Resource Packs using Mendix Cloud Tokens. For details around costs, see [Cloud Tokens](/control-center/cloud-tokens/).

## Models

Mendix Cloud GenAI Resource Packs give you access to Anthropic's Claude model families and Cohere's Embed models. A single text generation resource supports multiple Claude model families, for example, Haiku, Sonnet, and Opus so you can use the most appropriate model for each use case without managing separate resources. Embeddings resources support Cohere Embed models for generating embedding vectors.

{{% alert color="info" %}}
To use multiple models from a single resource, upgrade [Mendix Cloud GenAI Connector](/agents/mx-cloud-genai/mxgenai-connector/) to V6.2.0 or later.
{{% /alert %}}

### Supported Models

The Mendix Cloud GenAI Resource Packs provide access to the following models:

| Model | Model Type | Regions | Available Only via Cross-Region Inference (CRI) | AWS Inference Regions |
| ----- | ---------- | --------- | ----------------------------------------------- | --------------------------- |
| Anthropic Claude Haiku 4.5 | Text | Mendix Cloud EU (Frankfurt, Germany) | YES | eu-north-1,<br> Europe (Paris),<br> eu-south-1,<br> eu-south-2,<br> Europe (Ireland),<br> Europe (Frankfurt) |
| Anthropic Claude Sonnet 4.5 | Text | Mendix Cloud EU (Frankfurt, Germany) | YES | eu-north-1,<br> Europe (Paris),<br> eu-south-1,<br> eu-south-2,<br> Europe (Ireland),<br> Europe (Frankfurt) |
| Anthropic Claude Sonnet 4.6 | Text | Mendix Cloud EU (Frankfurt, Germany) | YES | eu-north-1,<br> Europe (Paris),<br> eu-south-1,<br> eu-south-2,<br> Europe (Ireland),<br> Europe (Frankfurt) |
| Anthropic Claude Sonnet 3 | Text | Mendix Cloud Canada (Montreal) | NO | ca-central-1 |
| Anthropic Claude Opus 4.6 | Text | Mendix Cloud EU (Frankfurt, Germany) | YES | eu-north-1,<br> Europe (Paris),<br> eu-south-1,<br> eu-south-2,<br> Europe (Ireland),<br> Europe (Frankfurt) |
| Anthropic Claude Opus 4.7 | Text | Mendix Cloud EU (Frankfurt, Germany) | YES | eu-north-1,<br> Europe (Paris),<br> eu-south-1,<br> eu-south-2,<br> Europe (Ireland),<br> Europe (Frankfurt) |
| Anthropic Claude Opus 4.8 | Text | Mendix Cloud EU (Frankfurt, Germany) | YES | eu-north-1,<br> Europe (Paris),<br> eu-south-1,<br> eu-south-2,<br> Europe (Ireland),<br> Europe (Frankfurt) |
| Cohere Embed v4 | Embeddings | Mendix Cloud EU (Frankfurt, Germany) | YES | eu-north-1,<br> Europe (Paris),<br> eu-south-1,<br> eu-south-2,<br> Europe (Ireland),<br> Europe (Frankfurt) |
| Cohere Embed v3 <br> English and multilingual | Embeddings | Mendix Cloud EU (Frankfurt, Germany) <br> Mendix Cloud Canada (Montreal) | NO | Europe (Frankfurt),<br> ca-central-1 |

The models are available through the Mendix Cloud, leveraging AWS's highly secure Amazon Bedrock multi-tenant architecture. This architecture employs advanced logical isolation techniques to effectively segregate customer data, requests, and responses, ensuring a level of data protection that aligns with global security compliance requirements. Customer prompts, requests, and responses are neither stored nor used for model training. Your data remains your data.

Customers looking to leverage other models in addition to the above can also take advantage of Mendix's [(Azure) OpenAI Connector](/agents/reference-guide/external-connectors/openai/), Amazon [Bedrock Connector](/agents/reference-guide/external-connectors/bedrock/), and [Mistral Connector](/agents/reference-guide/external-connectors/mistral/) to integrate numerous other models into their apps.

{{% alert color="info" %}}
If you have questions about upcoming regions or want to explore making models available in your specific region, reach out to [genai-resource-packs@mendix.com](mailto:genai-resource-packs@mendix.com).
{{% /alert %}}

### GenAI Units and Model Exchange

Text generation and embeddings resources use a flexible consumption model based on [GenAI Units](/agents/mx-cloud-genai/Navigate-MxGenAI/#what-are-tokens-and-genai-units). When you provision a resource, you choose a monthly GenAI Unit capacity in Mendix Cloud Tokens. The system converts your selection to GenAI Units at a fixed rate of 100 GenAI Units per Cloud Token. All consumption is then deducted from this GenAI Units balance at a model-specific exchange rate. For more information, see [Provisioning GenAI Resources](/control-center/genai-resources-self-service/#provisioning-genai-resources).

For example, if you allocate 50 Cloud Tokens per month, your resource receives 5,000 GenAI Units per month. You can use any combination of available models against this balance. The exchange rates are as follows:

| Model Family | GenAI Units per 1M Input Tokens | GenAI Units per 1M Output Tokens |
| ------------ | ------------------------------- | -------------------------------- |
| Claude Haiku 4.5 | 35.81 | 179.07 |
| Claude Sonnet 4.5 | 107.44 | 537.21 |
| Claude Sonnet 4.6 | 107.44 | 537.21 |
| Claude Opus 4.6 | 179.07 | 895.35 |
| Claude Opus 4.7 | 179.07 | 895.35 |
| Claude Opus 4.8 | 179.07 | 895.35 |
| Cohere Embed V3 English | 30.23 | — |
| Cohere Embed V3 Multilingual | 30.23 | — |
| Cohere Embed V4 | 30.23 | — |

There are no fixed capacity tiers. You choose any Cloud Token amount that matches your expected usage and adjust it at any time. For more information, see the [Adjusting Resource GenAI Unit Capacity](/control-center/genai-resources-self-service/#adjusting-resource-genai-unit-capacity) section of *GenAI Resources*.

{{% alert color="info" %}}
Unused GenAI Units at the end of a bundle month do not carry over. Your balance is refilled at the start of each new bundle month.
{{% /alert %}}

## Accessing GenAI Resources

Company Admins can obtain access to GenAI resources through a self-service capability, enabling them to provision, deprovision, and manage resources independently from the Control Center. This enables faster provisioning and reduces manual dependency.

For Company Admins who do not meet the self-service prerequisites, GenAI resources can still be provisioned or deprovisioned by contacting a sales representative or Customer Success Manager (CSM) to order the existing stock keeping unit (SKU) associated with your Mendix subscription.

### Provisioning GenAI Resources Using the Self-Service Capability

When using the self-service capability, Company Admins can manage the provisioning and deprovisioning of GenAI resources directly through the [Control Center](https://controlcenter.mendix.com/index.html). They can provision the new resource, review it, and open it in a new tab of the [Mendix Cloud GenAI portal](https://genai.home.mendix.com/p/homepage). For more information, see [GenAI Resources](/control-center/genai-resources-self-service/).

To provision GenAI resources successfully using self-service, ensure that you meet the requirements below:

1. You have access to the Control Center as a Company Admin.
2. You have sufficient free Mendix Cloud Tokens. These tokens are required to allocate GenAI Unit capacity. For more information, see [Cloud Tokens](/control-center/cloud-tokens/).

For further details, see the [Prerequisites](/control-center/genai-resources-self-service/#prerequisites) section of *GenAI Resources*.

### Provisioning GenAI Resources Without Using the Self-Service Capability

If the self-service capability is not available in your environment, you can still provision your GenAI resources by ordering the existing SKU associated with your Mendix subscription. To do so, contact your sales representative or CSM.

## Knowledge Bases

Mendix Cloud Knowledge Base Resource Packs provide customers with an elastic, logically isolated vector database to use for standard Generative AI architectural patterns such as Retrieval-Augmented Generation (RAG), semantic similarity search, and other Generative AI use cases. The Knowledge Bases on Mendix Cloud are based on AWS's highly secure Amazon Bedrock Knowledge Bases capability, combined with AWS' OpenSearch Serverless database—a widely adopted standard infrastructure for Generative AI Knowledge Bases on AWS, ensuring fast and accurate information retrieval.

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

## More Resources

### Mendix Cloud GenAI Portal

The [Mendix Cloud GenAI Portal](https://genai.home.mendix.com/) allows easy access to manage your resources.

* Monitor GenAI Unit consumption and input/output token usage for Text and Embeddings Generation Resources.
* Manage content for Knowledge Bases.
* Manage team access to all resources.
* Create and manage connection keys to connect your apps with all resources.
* Track activity logs for team access and connection key management.

For more information, see [Navigate Through the Mendix Cloud GenAI Portal](/agents/mx-cloud-genai/Navigate-MxGenAI/).

### Mendix Cloud GenAI Connector

The [Mendix Cloud GenAI connector](/agents/mx-cloud-genai/mxgenai-connector/) lets you use Mendix Cloud GenAI Resource Packs directly within your Mendix application. It allows you to integrate generative AI by dragging and dropping common operations from its toolbox. Note that any versions older than the ones listed below are no longer functional:  

* GenAI for Mendix bundle v2.4.1 (Mendix 9) (contains Mendix Cloud GenAI connector) or
* Mendix Cloud GenAI connector v3.1.1 (no `DeployedKnowledgeBase` support) or
* Mendix Cloud GenAI connector v4.4.0 (`DeployedKnowledgeBase` support).

## FAQ

### What Happens to Data Processed by Mendix Cloud GenAI Services?

For Mendix Cloud GenAI Model Resources using Anthropic’s Claude and Cohere’s Embed, neither Mendix nor its partners (Amazon, Anthropic, and Cohere) store any requests (prompts) or responses (answers, embeddings). Your data is not used for model training.

Data stored in GenAI Knowledge Base Resources resides in a logically isolated database, accessible only to you—the customer—via keys you can generate in the Portal.

### How Does the Mendix Cloud GenAI Service Store and Use Data Sent to It?

Requests (prompts) sent to and responses (answers, embeddings) received from the models are not stored and not used for training. Only metadata—such as token input/output counts—is collected for logging, monitoring, metering, billing, product improvement, and maintenance purposes.

Data sent to the Knowledge Base (vectors, chunks) is stored in a logically isolated, fully secure vector database, following industry-standard practices. This data is exclusively accessible to you and not used by Mendix. Similar to model requests, only metadata about Knowledge Base usage is collected for logging, monitoring, metering, billing, product improvement, and maintenance purposes.

### Read More

* [Enrich Your Mendix App with Agentic Capabilities](/agents/)
* [Build a Chatbot Using the AI Bot Starter App](/agents/how-to/starter-template/)
* [Creating Your First Agent](/agents/how-to/creating-agents/)
* [Grounding Your Large Language Model in Data – Mendix Cloud GenAI](/agents/how-to/howto-groundllm/)
