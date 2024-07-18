---
title: "Domain Model Generator"
url: /refguide/domain-model-generator/
weight: 30
description: "Describes the features in Domain Model Generator."
---

## 1 Introduction

{{% alert color="info" %}}
Domain Model Generator is currently an experimental feature introduced in Studio Pro 10.13.0. For more information on experimental features, see [Beta and Experimental Releases](/releasenotes/beta-features/).
{{% /alert %}}

Maia Domain Model Generator is an AI-powered tool that you can use for generating a [domain model](/refguide/domain-model/). It helps you to generate entities and associations based on text input. As an experimental feature, Domain Model Generator only works when the domain model is empty.

## 2 Using Domain Model Generator

To enable Domain Model Generator, go to **Edit** > **Preferences** > the **New Features** tab > the **Maia** section.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/domain-model-generator/enable-domain-model-generator.png" max-width=100% >}}

Once enabled, you will find **Generate Domain Model** option in the toolbar of a domain model.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/domain-model-generator/domain-model-generator.png" max-width=100% >}}

After clicking **Generate Domain Model**, a dedicated chat interface will appear. Describe your application or its main goals in the chatbox, and Maia will use this information to generate a relevant domain model.

{{% alert color="info" %}}
In this dedicated chat, only requests related to domain model generation will be properly handled. If you have other questions, close this chat and go back to the general [Maia Chat](/refguide/maia-chat/) interface.
{{% /alert %}}

### 2.1 Best Practices for Text Input

To achieve optimal results, provide context about your application by describing its main use cases, customer needs, or other relevant details. The more Maia knows about your application, the more tailored and accurate the generated domain model will be.

Below are some examples you can use as a starting point:

* The app will help users ...
* This module handles ...
* Customers need to be able to ...
* I want to send notifications when ...
* The app will analyze and report on ...
* This feature allows for real-time updates on ...

## 3 Limitations

As an experimental feature, Maia Domain Model Generator has some limitations.

### 3.1 Empty domain models only
If the **Generate Domain Model** option is greyed out, it is because this experimental feature only works for empty domain models. You can always start fresh by creating a new module.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/domain-model-generator/domain-model-generator-greyed-out.png" max-width=100% >}}

### 3.2 Creating only
When you have a generated domain model and the chat is still active, Maia is able to add more entities and associations to your domain model, but does not currently support deleting or editing from it. Note that adding attributes means changing an entity. Therefore, Maia will not work properly in this case, either. You can always edit generated domain model manually, or remove the created domain model and ask Maia to generate again.

## 3 Read More

* [Domain Model](/refguide/domain-model/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Chat](/refguide/maia-chat/)