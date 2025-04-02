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

{{% alert color="info" %}}
To use Domain Model Generator, internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia Domain Model Generator is an AI-powered tool that you can use for generating a [domain model](/refguide/domain-model/). It helps you to generate entities and associations based on text input. In Studio Pro 10.18 and above, you can also use Domain Model Generator in existing domain models. As an experimental feature, Domain Model Generator still have several limitations. For more information, see the [Limitations](#limitation) section below.

## Using Domain Model Generator

In Studio Pro 10.18 and above, Domain Model Generator is enabled by default.

You can find it in the the toolbar of a domain model:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/domain-model-generator/domain-model-generator.png" max-width=80% >}}

If you want to disable this feature, go to **Edit** > **Preferences** > the **New Features** tab > the **Maia** section.

After clicking **Generate Domain Model**, a dedicated chat interface will appear at the right side of Studio Pro under the **Maia** tab:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/domain-model-generator/chat-interface.png" max-width=42% >}}

Describe your application or its main goals in the chatbox. Maia will use this information to generate a relevant domain model for you! After a domain model is generated and if the dedicated chat is still active, you can still ask Maia to add more entities and associations to the generated domain model. In Studio Pro 10.17 and above, it also supports adding more attributes to an existing entity in the generated domain model. Give it a try!

{{% alert color="info" %}}
In this dedicated chat, only requests related to domain model generation will be properly handled. If you have other questions, close this chat and go back to the general [Maia Chat](/refguide/maia-chat/) interface.
{{% /alert %}}

{{% alert color="info" %}}
Domain Model Generator does not support deleting items in the domain model. You can always delete them manually. 
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

### Enumeration Generation

In Studio Pro 10.17 and below, it is not possible to generate [enumerations](/refguide/enumerations/). In Studio Pro 10.18, it can generate an attribute of type Enumeration if there is an existing enumeration in the module to refer to.

### Generalization Not Supported

Currently, it cannot set [generalization](/refguide/generalization-and-association/) for an entity.

## Read More

* [Data in the Domain Model](/refguide/domain-model/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
