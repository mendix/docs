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

Developers can use the Mendix Portal to manage their Mendix Cloud GenAI resources and seamlessly integrate model and knowledge base capabilities into their Mendix applications using the [Mendix Cloud GenAI Connector](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/). Optimized for high performance and low latency, Mendix Cloud GenAI Resource Packs provide the easiest and fastest way to deliver end-to-end Generative AI solutions on a single platform.

### Limited Availability

Mendix Cloud GenAI Resource Packs are currently available under limited availability. Mendix is collaborating with early adopters—including customers, partners, and ISVs—to drive successful project outcomes. Access to GenAI Resource Packs is evaluated on a case-by-case basis. To learn more about the conditions for access during the limited availability phase, contact [genai-resource-packs@mendix.com](mailto:genai-resource-packs@mendix.com) until the general availability release.

## Models

Mendix Cloud Model Resource Packs provide customers with a monthly quota of input and output tokens for Anthropic's Claude and Cohere's Embed models. This allows customers to implement typical Generative AI use cases like:

### Supported models

Mendix Cloud provides access to the following models:

* Anthropic Claude v3.5 Sonnet v1
* Cohere Embed v3 (English & multilingual options)

The models are available through the Mendix Cloud, leveraging AWS's highly secure Amazon Bedrock multi-tenant architecture. This architecture employs advanced logical isolation techniques to effectively segregate customer data, requests, and responses, ensuring a level of data protection that aligns with global security compliance requirements. Customer prompts, requests, and responses are neither stored nor used for model training. Your data remains your data.

Customers looking to leverage other models in addition to the above can also take advantage of Mendix's [(Azure) OpenAI Connector](/appstore/modules/genai/reference-guide/external-connectors/openai/) and Amazon [Bedrock Connector](/appstore/modules/genai/reference-guide/external-connectors/bedrock/) to integrate numerous other models into their apps.

## Knowledge Bases

Mendix Cloud Knowledge Base Resource Packs provide customers with an elastic, logically isolated vector database, to use for standard Generative AI architectural patterns such as Retrieval-Augmented Generation (RAG), semantic similarity search, and other Generative AI use cases. The Knowledge Bases on Mendix Cloud are based on AWS's highly secure Amazon Bedrock Knowledge Bases capability, combined with AWS' OpenSearch Serverless database— a widely adopted standard infrastructure for Generative AI Knowledge Bases on AWS, ensuring fast & accurate information retrieval.

Knowledge bases enable you to bring your own data for RAG, semantic similarity search, and other generative AI use cases:

* Make your app's data available through integration
* Connect to third-party information sources
* Manage knowledge base content and add metadata labels

Knowledge Bases are based on elastically scaling, serverless OpenSearch vector databases, to ensure high performance under load. The database is set up as a highly available cluster to ensure business continuity. Customer data is stored in logical isolation from other customers and is not used for model training, ensuring data security and privacy in compliance with industry standards.

## Mendix Portal

The Mendix Portal allows easy access to manage the resources, through the GenAI Resources section in the portal.

* Get insight into the consumption of input/output tokens against entitlements for Models
* Manage content for Knowledge Bases
* Manage team access to all resources
* Create and manage connection keys to connect your apps with all resources
* Track activity logs for team access and connection key management

## Mendix Cloud GenAI Connector

The [Mendix Cloud GenAI connector](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/) lets you utilize Mendix Cloud GenAI resource packs directly within your Mendix application. It allows you to integrate generative AI by dragging and dropping common operations from its toolbox.

## Regional Availability

Mendix Cloud GenAI Resource Packs are available in the following regions of Mendix Cloud:

* Europe (Frankfurt) - eu-central-1

## FAQ

### What Happens to Data Processed by Mendix Cloud GenAI Services?

For Mendix Cloud GenAI Model Resources using Anthropic’s Claude and Cohere’s Embed, neither Mendix nor its partners (Amazon, Anthropic, and Cohere) store any requests (prompts) or responses (answers, embeddings). Your data is not used for model training.

Data stored in GenAI Knowledge Base Resources resides in a logically isolated database, accessible only to you—the customer—via keys you can generate in the Portal.

### How does Mendix Cloud GenAI service Store and Use Data Sent to It?

Requests (prompts) sent to and responses (answers, embeddings) received from the models are not stored and not used for training. Only metadata—such as token input/output counts—is collected for logging, monitoring, metering, billing, product improvement, and maintenance purposes.

Data sent to the Knowledge Base (vectors, chunks) is stored in a logically isolated, fully secure vector database, following industry-standard practices. This data is exclusively accessible to you and not used by Mendix. Similar to model requests, only metadata about Knowledge Base usage is collected for logging, monitoring, metering, billing, product improvement, and maintenance purposes.

### Read More

* [Enrich your Mendix app with GenAI capabilities](/appstore/modules/genai/)
* [Build a Chatbot Using the AI Bot Starter App](/appstore/modules/genai/using-genai/starter-template/)
