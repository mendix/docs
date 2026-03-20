---
title: "Maia for Microflows"
url: /refguide/maia-for-microflows/
weight: 75
description: "Describes the features in Maia for Microflows."
---
## Introduction

{{% alert color="info" %}}
This feature is released as part of [Make Make](/refguide/maia-make/) capabilities in Studio Pro 11.8. 
{{% /alert %}}

Maia for Microflows is an AI-powered capability that is available when using [Maia Make](/refguide/maia-make/) in Studio Pro. Maia Make is a unified conversational interface within Studio Pro that consolidates all AI-assisted development capabilities into a single chat experience. 

With the microflow generation capability, you can leverage Maia to generate microflow logic efficiently from your text input. It is a powerful tool for quickly setting up both simple and complex microflows, with the goal of providing ready-to-use logic that minimizes the need for manual adjustments.

## Using Maia for Microflows

Open the Maia Make conversational interface in Studio Pro to access its microflow generation capability. Use natural language to describe your goal, Maia will generate the microflows for you, including XPath constraints and expressions. See the section below for text input best practices.

### Best Practices for Text Input

To achieve the best results when using Maia to generate microflows, consider the following guidelines for your text input:

* Be specific: Clearly describe the desired outcome and the steps involved. For example, instead of using *Create a user*, use *Create a new user object, set its name attribute to 'John Doe', and commit it*.
* Use keywords: Incorporate terms relevant to microflow activities, such as *create object*, *retrieve*, *change object*, *show message*, *loop*, or *decision*. This can help with correct microflow generation.
* Provide context: If your microflow interacts with existing entities or attributes, mention them in your text input.

## Limitations

### Destructive Operations Are Not Supported

Maia for Microflows can create objects and flows and change simple ("primitive") settings, but it cannot delete objects or replace complex configuration settings. For example, for existing objects, Maia can change variable names, move objects, or reconnect flows, but it cannot delete objects or flows, or change the activity types.

### Variability in Results

Due to the nature of AI generation, the exact microflow logic produced can vary between separate runs, even with identical input. It is recommended to review the generated output carefully.

### Layout and Positioning

While Maia aims to create functional logic, the visual layout and positioning of elements within the generated microflow may not always be optimally organized. You may need to adjust the arrangement of activities for better readability and structure.

## Read More

* [Microflows](/refguide/microflows/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
