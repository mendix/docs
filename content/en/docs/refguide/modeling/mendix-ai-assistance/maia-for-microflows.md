---
title: "Maia for Microflows"
url: /refguide/maia-for-microflows/
weight: 75
description: "Describes the features in Maia for Microflows."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
## Introduction

{{% alert color="info" %}}
To use Maia for Microflows, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia for Microflows is an AI-powered feature designed to assist users in generating microflow logic. By leveraging AI, it aims to streamline the process of creating microflows, making development more efficient.

## Using Maia for Microflows

Maia for Microflows leverages can generate microflow logic efficiently from your text input. It is a powerful tool for quickly setting up both simple and complex microflows, with the goal of providing ready-to-use logic that minimizes the need for manual adjustments.

### Best Practices for Text Input

To achieve the best results when using Maia for Microflows, consider the following guidelines for your text input:

Be specific: Clearly describe the desired outcome and the steps involved. For example, instead of "create a user," try "create a new user object, set its name attribute to 'John Doe', and commit it."

Use keywords: Incorporating terms relevant to microflow actions, such as "create object," "retrieve," "change object," "show message," "loop," or "decision," can help correct microflow generation.

Provide context: If your microflow interacts with existing entities or attributes, mention them in your input.

## Limitations

### Destructive operations are not supported

Maia for Microflows can create objects and flows and change simple ("primitive") settings, but cannot delete objects or replace complex configuration settings.

### Variability in Results

Due to the nature of AI generation, the exact microflow logic produced can vary between separate runs, even with identical input. It is recommended to review the generated output carefully.

### Layout and Positioning

While Maia aims to create functional logic, the visual layout and positioning of elements within the generated microflow may not always be optimally organized. You may need to adjust the arrangement of activities for better readability and structure.

## Read More

* [Microflows](/refguide/microflows/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
