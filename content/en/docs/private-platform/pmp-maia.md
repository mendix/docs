---
title: "Maia in Private Mendix Platform"
url: /private-mendix-platform/maia/
description: "Provides information on Maia options in Private Mendix Platform."
weight: 51
---

## Introduction

Mendix AI Assistance (Maia) refers to Mendix Platform capabilities that leverage [artificial intelligence (AI)](https://www.mendix.com/glossary/artificial-intelligence-ai/) and [machine learning (ML)](https://www.mendix.com/glossary/machine-learning/) to assist developers in application development. Maia is designed to help development teams in modeling and delivering Mendix applications faster, more consistently, and with higher quality. 

## Maia Capabilities in Private Mendix Platform

Mendix AI Assistance (Maia) in Private Mendix Platform has the following capabilities: 

Starting point for app creation:

* **Start with Maia** - a starting point in Studio Pro that helps you to start the app development process. Based on a required text description and an optional image or PDF, it generates an app that includes a domain model, data management overview pages, test data, and a tailored homepage. For more information, see [Start with Maia](/refguide/start-with-maia/).

Recommenders:

* **Best Practice Recommender** – helps you inspect your app against Mendix development best practice detecting and pinpointing development anti-patterns and, in some cases, automatically fixing them. For more information, see [Best Practice Recommender](/refguide/best-practice-recommender/).
* **UI Recommender** – helps you easily add new widgets to a page in Mendix Studio Pro without losing the context of what you are currently working on. For more information, see [UI Recommender](/refguide/ui-recommender/).
* **Workflow Recommender** – helps you model and configure workflows in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity in your workflow based on context-related information. For more information, see [Workflow Recommender](/refguide/workflow-recommender/).

Generators:

* **Maia for Domain Model** – helps you generate new [domain models](/refguide/domain-model/), and explain and provide suggestions for existing domain models. For more information, see [Maia for Domain Model](/refguide/maia-for-domain-model/). 

    For Private Mendix Platform, this feature is supported for version 11.6 and newer.
    
* **Maia for Pages** – helps you generate a [page](/refguide/page/). It helps you add and configure widgets based on a text input and an optional image. After a page is generated, you can continue in the same session to ask Maia for further improvements and explanations. For more information, see [Maia for Pages](/refguide/maia-for-pages/).

    For Private Mendix Platform, this feature is supported for version 11.6 and newer.

* **Maia for Workflows** – helps you generate a [Workflow](/refguide/workflows/). By providing a use case via text input or an image, Maia can help you start creating your workflows. For more information, see [Maia for Workflows](/refguide/maia-for-workflows/).
* **Validation Assist** – helps you build validation microflows in a more automated way using pre-built expressions. For more information, see [Validation Assist](/refguide/validation-assist/).

## Changing the LLM Provider for Maia

Starting in Private Mendix Platform 2.6, instead of usign the default Large Language Model, you can connect Maia to several different models of your choice. Currently this includes the following LLMs:

* Anthropic
    * Small text model - Claude Haiku 4.5
    * Large text model - Claude Opus 4.6
* [AWS Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/models-regions.html)
    * Small text model - Claude Haiku 4.5
    * Large text model - Claude Sonnet 4.5
    * Fallback model - Claude Sonnet 4
* [Azure](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/models-sold-directly-by-azure)
    * o3-mini
* OpenAI
    * GPT-5-Mini

### Feature Comparison

The following table shows which Maia capabilities are supported by various models.

| Maia Capability | AWS Bedrock | Anthropic | Azure | OpenAI |
| --- | --- | --- | --- | --- |
| **Maia for Pages** | Full support | Full support | Simple requests only | Simple requests only |
| **Maia for Domain Model** | Full support | Full support | Full support | Full support |
| **Maia for Workflows** | Full support | Full support | Simple requests only | Does not support workflow creation |
| **Start with Maia** | Full support | Full support | Full support | Full support |
| **Best Practice Recommender** | Full support | Full support | Full support | Full support |
| **UI Recommender** | Full support | Full support | Full support | Full support |
| **Workflow Recommender** | Full support | Full support | Full support | Full support |
| **Validation Assist** | Full support | Full support | Full support | Full support |

In summary, Maia on AWS Bedrock and Anthropic modules can handle complex requests with high accuracy and reliability. For Azure and OpenAI models, the output quality for some request types may be low or inconsistent.

### Configuring a Custom LLM for Maia

To configure Maia to use your own Large Language Model, perform the following steps:

1. Log in to Private Mendix Platform as a user with [Company Administrator](/private-mendix-platform/reference-guide/admin/company/) access rights.
2. Switch to Admin Mode by clicking the profile picture in the top right corner of the screen and selecting **Switch to Admin Mode**.
3. In the left navigation menu, open the **Manage** section.
4. Fill out the following information:

    * **Maia Appgen URL** - Enter the URL where Maia is installed. For more information, see [Private Mendix Platform Quick Start Guide: Installing Maia](/private-mendix-platform/quickstart/#maia).
    * **LLM Provider** - Select your LLM provider.
    * **Small Text Model** - Enter one of the following model IDs, depending on your chosen LLM:

        * For AWS Bedrock Claude models, enter `<your region prefix>.anthropic.claude-haiku-4-5-20251001-v1:0`
        * For Anthropic models, enter `claude-haiku-4-5-20251001`
        * For Azure models, enter `o3-mini`
        * For OpenAI models, enter `gpt-5-mini-2025-08-07`

    * **Small Files Model** - Enter one of the following model IDs, depending on your chosen LLM:

        * For AWS Bedrock Claude models, enter `<your region prefix>.anthropic.claude-haiku-4-5-20251001-v1:0`
        * For Anthropic models, enter `claude-haiku-4-5-20251001`
        * For Azure models, enter `o3-mini`
        * For OpenAI models, enter `gpt-5-mini-2025-08-07`

    * **Large Text Model** - Enter one of the following model IDs, depending on your chosen LLM:

        * For AWS Bedrock Claude models, enter `<your region prefix>.anthropic.claude-sonnet-4-5-20250929-v1:0`
        * For Anthropic models, enter `claude-opus-4-6`
        * For Azure models, enter `o3-mini`
        * For OpenAI models, enter `gpt-5-mini-2025-08-07`     

    * **Large Files Model** - Enter one of the following model IDs, depending on your chosen LLM:

        * For AWS Bedrock Claude models, enter `<your region prefix>.anthropic.claude-sonnet-4-5-20250929-v1:0`
        * For Anthropic models, enter `claude-opus-4-6`
        * For Azure models, enter `o3-mini`
        * For OpenAI models, enter `gpt-5-mini-2025-08-07`  

    * **Fallback Model** - Enter one of the following model IDs, depending on your chosen LLM:

        * For AWS Bedrock Claude models, enter `<your region prefix>.anthropic.claude-sonnet-4-20250514-v1:0`
        * For Anthropic models, enter `claude-opus-4-6`
        * For Azure models, enter `o3-mini`
        * For OpenAI models, enter `gpt-5-mini-2025-08-07`

    * **API Key** - Specify your secret source.

{{% alert color="info" %}}
For AWS Bedrock Claude models, the region prefix is the same as for inference profile IDs, for example, `eu`.
{{% /alert %}}
