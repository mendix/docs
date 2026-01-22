---
title: "Mendix AI Assistance (Maia)"
url: /refguide10/mendix-ai-assistance/
weight: 45
description: "Describes Mendix AI Assistance (Maia) in Studio Pro."
aliases:
    - /refguide10/mx-assist-studio-pro/
---

## Introduction 

Mendix AI Assistance (Maia) refers to Mendix Platform capabilities that leverage [artificial intelligence (AI)](https://www.mendix.com/glossary/artificial-intelligence-ai/) and [machine learning (ML)](https://www.mendix.com/glossary/machine-learning/) to assist developers in application development. Maia is designed to help development teams in modeling and delivering Mendix applications faster, more consistently, and with higher quality. 

Mendix developers can use Maia to get guidance by asking questions, get recommendation and assistance for certain development tasks, and even generate part of their app. 

For information on Mendix data storage policies and practices for Maia, see [Maia Privacy Policy](https://www.mendix.com/legal/privacy/maia/).

For information on what third-party services Maia uses and what data are sent to the third-party services, see the [Maia Third-Party Services](#maia-third-party-services) section below.

## Network Configuration Requirements {#maia-network-requirement}

To ensure the smooth operation of Mendix AI Assistance (Maia), the following network requirements must be met:

* Ensure access to hostnames within the `maia.mendix.com` subdomain
* Allow secure network traffic through port 443 (HTTPS) to enable uninterrupted operation of Maia

## Maia Capabilities in Mendix Studio Pro 

Maia in Mendix Studio Pro has the following capabilities: 

Guidance:

* **Maia Chat** (generally available in Studio Pro 10.12.0) – a built-in chat interface powered by Generative AI in Studio Pro. It answers questions about app development in Mendix, including how to apply concepts, best practices, and development patterns. For more information, see [Maia Chat](/refguide10/maia-chat/). 
* **Maia Learn** (available in Studio Pro 10.18 and above) - helps you to quickly learn Mendix core concepts and get started with Studio Pro. For more information, see [Maia Learn](/refguide10/maia-learn/).
* **Maia Explain** (introduced in Studio Pro 10.21.0) – an AI-powered tool that helps you easily understand a microflow or a nanoflow. It explains the general purpose of the logic and highlights specific technical details to help you understand the logic further. For more information, see [Maia Explain](/refguide10/maia-explain/).

Recommenders:

* **Best Practice Recommender** – helps you inspect your app against Mendix development best practice detecting and pinpointing development anti-patterns and, in some cases, automatically fixing them. For more information, see [Best Practice Recommender](/refguide10/best-practice-recommender/).
* **Logic Recommender** – helps you model and configure microflows, nanoflows, and rules in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity based on the activities and parameters that are already configured in your application. For more information, see [Logic Recommender](/refguide10/logic-recommender/).
* **UI Recommender** (available in Studio Pro 10.18 and above) – helps you easily add new widgets to a page in Mendix Studio Pro without losing the context of what you are currently working on. For more information, see [UI Recommender](/refguide10/ui-recommender/).
* **Workflow Recommender** (available in Studio Pro 10.12 and above) – helps you model and configure workflows in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity in your workflow based on context-related information. For more information, see [Workflow Recommender](/refguide10/workflow-recommender/).

Generators:

* **Maia for Domain Model** (introduced in Studio Pro 10.13.0) - an AI-powered tool that you can use for generating new [domain models](/refguide10/domain-model/) as well as explaining and providing suggestions for existing domain models. For more information, see [Maia for Domain Model](/refguide10/maia-for-domain-model/).
* **Maia for Pages** (introduced in Studio Pro 10.21.0) - an AI-powered tool that lets you generate a [page](/refguide10/page/). It helps you add and configure widgets based on a text input and an optional image. After a page is generated, you can continue in the same session to ask Maia for further improvements and explanations. For more information, see [Maia for Pages](/refguide10/maia-for-pages/).
* **Translation Generator** (introduced in Studio Pro 10.12.0) - an AI-powered translation tool available in Mendix Studio Pro. Currently, it can be used for [batch translate](/refguide10/translation-generator/#batch-translate) and [translating system texts](/refguide10/translation-generator/#translate-system-text) in the new web-based system texts editor (in Studio Pro 10.14.0 and above). For more information, see [Translation Generator](/refguide10/translation-generator/).
* **Validation Assist** – helps you build validation microflows in a more automated way using pre-built expressions. For more information, see [Validation Assist](/refguide10/validation-assist/).

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
| Translation Generator | [Amazon Translate](https://aws.amazon.com/translate/) | All translatable texts in the application, for example, labels, button names, and menu items |
| Validation Assist | No third-party services used | NA |
| Maia Rewrite | [Llama 3.1 8B](https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md) hosted in Mendix AWS environment | The draft question description from users |
| Maia Summarize | [Llama 3.1 8B](https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md) hosted in Mendix AWS environment | [Community](https://community.mendix.com/p/community) threads |
| Maia Create User Story | [Llama 3.1 8B](https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md) hosted in Mendix AWS environment | User prompts |
