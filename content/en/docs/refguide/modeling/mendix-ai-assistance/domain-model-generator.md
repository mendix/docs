---
title: "Domain Model Generator"
url: /refguide/domain-model-generator/
weight: 50
description: "Describes the features in Domain Model Generator."
---

## Introduction

{{% alert color="info" %}}
Domain Model Generator is currently an experimental feature introduced in Studio Pro 10.13.0. For more information on experimental features, see [Beta and Experimental Releases](/releasenotes/beta-features/).
{{% /alert %}}

Maia Domain Model Generator is an AI-powered tool that you can use for generating a [domain model](/refguide/domain-model/). It helps you to generate entities and associations based on text input. As an experimental feature, Domain Model Generator only works when the domain model is empty. For more information, see the [Limitations](#limitation) section below.

## Using Domain Model Generator

To enable Domain Model Generator, go to **Edit** > **Preferences** > the **New Features** tab > the **Maia** section.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/domain-model-generator/enable-domain-model-generator.png" max-width=80% >}}

Once enabled, you will find the **Generate Domain Model** option in the toolbar of a domain model.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/domain-model-generator/domain-model-generator.png" max-width=80% >}}

After clicking **Generate Domain Model**, a dedicated chat interface will appear at the right side of Studio Pro under the **Maia** tab.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/domain-model-generator/chat-interface.png" max-width=42% >}}

Describe your application or its main goals in the chatbox, and Maia will use this information to generate a relevant domain model for you!

{{% alert color="info" %}}
In this dedicated chat, only requests related to domain model generation will be properly handled. If you have other questions, close this chat and go back to the general [Maia Chat](/refguide/maia-chat/) interface.
{{% /alert %}}

### Best Practices for Text Input

To achieve optimal results, provide context about your application by describing its main use cases, customer needs, or other relevant details. The more Maia knows about your application, the more tailored and accurate the generated domain model will be.

Below are some examples you can use as a starting point:

* The app will help users ...
* This module handles ...
* Customers need to be able to ...
* I want to send notifications when ...
* The app will analyze and report on ...
* This feature allows users to ...

## Limitations {#limitation}

As an experimental feature, Domain Model Generator has some limitations.

### Studio Pro Restart Required

Studio Pro restart is required after Domain Model Generator is enabled in the Preferences.

### Empty Domain Model Only

If the **Generate Domain Model** option is greyed out, it is because it currently only works for empty domain models. You can always start fresh with an empty domain model by creating a new module in your application.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/domain-model-generator/domain-model-generator-greyed-out.png" max-width=100% >}}

### Creating only

After a domain model is generated and if the dedicated chat is still active, you can still ask Maia to add more entities and associations to the generated domain model. 

However, it currently does not support deleting or editing what are already in the generated domain model. This includes adding more attributes to an existing entity. Such requests will not be handled properly at this moment.

You can always edit the generated domain model manually, or remove it and ask Maia to generate a new domain model with adjusted text input.

### Enumeration Generation Not Supported

Currently, it cannot generate [enumerations](/refguide/enumerations/). So, it is not possible to generate an attribute of type Enumeration.

### Generalization Not Supported

Currently, it cannot set [generalization](/refguide/generalization-and-association/) for an entity.

## Read More

* [Domain Model](/refguide/domain-model/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
