---
title: "Maia for Microflows"
url: /refguide/maia-for-microflows/
weight: 75
description: "Describes the features in Maia for Microflows."
---

## Introduction

{{% alert color="info" %}}
This feature was released as part of [Maia Make](/refguide/maia-make/) capabilities in Studio Pro 11.8.

To use Maia for Microflows, you need an internet connection and must be signed in to Studio Pro.
{{% /alert %}}

Maia for Microflows is an AI-powered capability available in [Maia Make](/refguide/maia-make/) in Studio Pro. Maia Make is a unified conversational interface within Studio Pro that consolidates all AI-assisted development capabilities into a single chat experience.

With the microflow generation capability, you can use Maia to generate microflow logic from your text input. It quickly sets up both simple and complex microflows and provides ready-to-use logic that reduces the need for manual adjustments.

## Using Maia for Microflows

Open the Maia Make conversational interface in Studio Pro to access its microflow generation capability. Use natural language to describe your goal. Maia generates the microflows for you, including XPath constraints and expressions.

{{% alert color="warning" %}}
Due to the nature of AI generation, the exact microflow logic produced can vary between separate runs, even with identical input. Review the generated output carefully. The visual layout and positioning of elements may not always be optimally organized; you may need to adjust the arrangement of activities for better readability and structure.
{{% /alert %}}

## Limitations

### Destructive Operations

Maia for Microflows can create objects and flows and change simple ("primitive") settings, but it has limitations on deleting elements and replacing complex configuration settings.

In Studio Pro 11.9 and above, Maia can delete flows and microflow objects. However, it cannot change activity types or replace complex configuration settings.

In Studio Pro 11.8, Maia cannot delete objects or flows. For existing objects, Maia can change variable names, move objects, or reconnect flows, but it cannot delete objects or flows, or change the activity types.

## Read More

* [Microflows](/refguide/microflows/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
