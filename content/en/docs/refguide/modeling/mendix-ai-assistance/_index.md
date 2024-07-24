---
title: "Mendix AI Assistance (Maia)"
url: /refguide/mendix-ai-assistance/
weight: 45
description: "Describes Mendix AI Assistance (Maia) in Studio Pro."
aliases:
    - /refguide/mx-assist-studio-pro/
---

## 1 Introduction 

Mendix AI Assistance (Maia) refers to Mendix Platform capabilities that leverage [artificial intelligence (AI)](https://www.mendix.com/glossary/artificial-intelligence-ai/) and [machine learning (ML)](https://www.mendix.com/glossary/machine-learning/) to assist developers in application development (via AI-assisted development (AIAD)). Maia is designed to help development teams in modeling and delivering Mendix applications faster, more consistently, and with higher quality. 

Mendix developers can use Maia to get guidance by asking questions, get recommendation and assistance for certain development tasks, and even generate part of their app. 

## 2 Maia in Mendix Studio Pro 

In Mendix Studio Pro, Maia consists of the following capabilities: 

Guidance:

* **Maia Chat** (released in GA in Studio Pro 10.12.0) – a built-in chat interface powered by Generative AI in Studio Pro. It answers questions about app development in Mendix, including how to apply concepts, best practices, and development patterns. For more information, see [Maia Chat](/refguide/maia-chat/).

Recommenders:

* **Logic Recommender** – helps you model and configure microflows, nanoflows, and rules in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity based on the activities and parameters that are already configured in your application. For more information, see [Logic Recommender](/refguide/logic-recommender/).
* **Workflow Recommender** (available in Studio Pro 10.12 and above) – helps you model and configure workflows in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity in your workflow based on context-related information. For more information, see [Workflow Recommender](/refguide/workflow-recommender/).
* **Best Practice Recommender** – helps you inspect your app against Mendix development best practice detecting and pinpointing development anti-patterns and, in some cases, automatically fixing them. For more information, see [Best Practice Recommender](/refguide/best-practice-recommender/).

Generators:

* **Translation Generator** (currently an [experimental feature](/releasenotes/beta-features/) introduced in Studio Pro 10.12.0) - an AI-powered translation tool for **Batch translate** in Mendix Studio Pro. It helps you to translate your model to different languages for which you may not have a translation. It gives contextualized translations for the languages that you have selected, using parameters in the way that works specifically for the selected languages. For more information, see [Translation Generator](/refguide/translation-generator/).

## 3 Maia in Mendix Portal

Below are the Maia capabilities that are available in Mendix Portal:

* **Maia Summarize** - an AI-assisted summarizing aid which condenses lengthy discussions for a question posted on Mendix Community into key points, making it easier for you to find solutions to your questions without having to plough through every single answer in the thread. For more information on how to use it, see the [Question Details](/community-tools/mendix-community/#question-details) section in *Mendix Community*.
* **Maia Rewrite** - an AI-assisted writing aid integrated within the Mendix Community posting interface, which helps you to ask properly-formatted questions that are more likely to be answered. For more information on how to use it, see the [Asking Your Question](/community-tools/mendix-community/#asking-question) section in *Mendix Community*.
