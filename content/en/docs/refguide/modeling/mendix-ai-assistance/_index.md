---
title: "Mendix AI Assistance (Maia)"
url: /refguide/mendix-ai-assistance/
weight: 45
description: "Describes Mendix AI Assistance (Maia) in Studio Pro."
aliases:
    - /refguide/mx-assist-studio-pro/
---

## Introduction 

Mendix AI Assistance (Maia) refers to Mendix Platform capabilities that leverage [artificial intelligence (AI)](https://www.mendix.com/glossary/artificial-intelligence-ai/) and [machine learning (ML)](https://www.mendix.com/glossary/machine-learning/) to assist developers in application development. Maia is designed to help development teams in modeling and delivering Mendix applications faster, more consistently, and with higher quality. 

Mendix developers can use Maia to get guidance by asking questions, get recommendation and assistance for certain development tasks, and even generate part of their app. 

For information on Mendix data storage policies and practices for Maia, see [Maia Privacy Policy](https://www.mendix.com/legal/privacy/maia/).

For information on what third-party services Maia uses and what data are sent to the third-party services, see the [Maia Third-Party Services](#maia-third-party-services) section below.

For more information on how to ensure optimal performance of Maia, see the [Best Practice for Maia Performance](#maia-performance-best-practice) section below.

## Network Configuration Requirements {#maia-network-requirement}

To ensure the smooth operation of Mendix AI Assistance (Maia), the following network requirements must be met:

* Ensure access to hostnames within the `maia.mendix.com` subdomain
* Allow secure network traffic through port 443 (HTTPS) to enable uninterrupted operation of Maia

## Maia Capabilities in Mendix Studio Pro 

Mendix AI Assistance (Maia) in Studio Pro has the following capabilities: 

Starting point for app creation:

* **Start with Maia** - a starting point in Studio Pro that helps you to start the app development process. Based on a required text description and an optional image or PDF, it generates an app that includes a domain model, data management overview pages, test data, and a tailored homepage. For more information, see [Start with Maia](/refguide/start-with-maia/).

Guidance:

* **Maia Chat** – a built-in chat interface powered by Generative AI in Studio Pro. It answers questions about app development in Mendix, including how to apply concepts, best practices, and development patterns. For more information, see [Maia Chat](/refguide/maia-chat/). 
* **Maia Learn** – helps you to quickly learn Mendix core concepts and get started with Studio Pro. For more information, see [Maia Learn](/refguide/maia-learn/).
* **Maia Explain** – helps you easily understand a microflow or a nanoflow. It explains the general purpose of the logic and highlights specific technical details to help you understand the logic further. For more information, see [Maia Explain](/refguide/maia-explain/).

Recommenders:

* **Best Practice Recommender** – helps you inspect your app against Mendix development best practice detecting and pinpointing development anti-patterns and, in some cases, automatically fixing them. For more information, see [Best Practice Recommender](/refguide/best-practice-recommender/).
* **Logic Recommender** – helps you model and configure microflows, nanoflows, and rules in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity based on the activities and parameters that are already configured in your application. For more information, see [Logic Recommender](/refguide/logic-recommender/).
* **UI Recommender** – helps you easily add new widgets to a page in Mendix Studio Pro without losing the context of what you are currently working on. For more information, see [UI Recommender](/refguide/ui-recommender/).
* **Workflow Recommender** – helps you model and configure workflows in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity in your workflow based on context-related information. For more information, see [Workflow Recommender](/refguide/workflow-recommender/).

Generators:

* **Maia for Domain Model** – helps you generate new [domain models](/refguide/domain-model/), and explain and provide suggestions for existing domain models. For more information, see [Maia for Domain Model](/refguide/maia-for-domain-model/).
* **Maia for Pages** – helps you generate a [page](/refguide/page/). It helps you add and configure widgets based on a text input and an optional image. After a page is generated, you can continue in the same session to ask Maia for further improvements and explanations. For more information, see [Maia for Pages](/refguide/maia-for-pages/).
* **Maia for OQL** – helps you generate and manage OQL (Object Query Language) queries through an intuitive interface. It is designed to simplify query creation and reduce manual effort. For more information, see [Maia for OQL](/refguide/maia-for-oql/).
* **Maia for Workflows** – helps you generate a [Workflow](/refguide/workflows/). By providing a use case via text input or an image, Maia can help you start creating your workflows. For more information, see [Maia for Workflows](/refguide/maia-for-workflows/).
* **Translation Generator** – helps you with [batch translate](/refguide/translation-generator/#batch-translate) and [translating system texts](/refguide/translation-generator/#translate-system-text) in the web-based system texts editor. For more information, see [Translation Generator](/refguide/translation-generator/).
* **Validation Assist** – helps you build validation microflows in a more automated way using pre-built expressions. For more information, see [Validation Assist](/refguide/validation-assist/).

## Maia in Mendix Portal

Various Maia features are available in Mendix Portal. For more information, refer to [Maia in Mendix Portal](/maia-mx-portal/).

## Maia Third-Party Services {#maia-third-party-services}

The table below presents all the third-party services each Maia capability uses and what data are sent to the third-party services.

| Maia | Third-Party Service | Data Sent to Third-Party Service |
| --- | --- | --- |
| Maia Chat | [Llama 3.1 8B](https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md) hosted in Mendix AWS environment | User prompts and the generated answers |
| Maia Learn | No third-party services used | N/A |
| Maia Explain | [Llama 3.1 8B](https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md) hosted in Mendix AWS environment | Project context to fulfill user prompt request |
| Best Practice Recommender | No third-party services used | N/A |
| Logic Recommender | No third-party services used | N/A |
| UI Recommender | No third-party services used | N/A |
| Workflow Recommender | No third-party services used | N/A |
| Maia for Domain Model | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | Project context to fulfill user prompt request |
| Maia for Pages | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | Project context to fulfill user prompt request |
| Maia for OQL | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | Project context to fulfill user prompt request |
| Maia for Workflows | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | Project context to fulfill user prompt request |
| Translation Generator | [Amazon Translate](https://aws.amazon.com/translate/) | All translatable texts in the application, for example, labels, button names, and menu items |
| Validation Assist | No third-party services used | NA |
| Maia Rewrite | [Mistral 7B](https://mistral.ai/news/announcing-mistral-7b/) hosted in Mendix AWS environment | The draft question description from users |
| Maia Summarize | [Mistral 7B](https://mistral.ai/news/announcing-mistral-7b/) hosted in Mendix AWS environment | [Community](https://community.mendix.com/p/community) threads |
| Maia Create User Story | [Mistral 7B](https://mistral.ai/news/announcing-mistral-7b/) hosted in Mendix AWS environment | User prompts |

## Best Practice for Maia Performance {#maia-performance-best-practice}

For optimal performance, Maia works best when handling focused, well-scoped requests. When working on complex or lengthy content generation tasks, you will get faster and more reliable results by breaking them into smaller, manageable steps. This approach not only reduces the risk of network issues, but often leads to higher-quality outputs that better meet your specific needs.
