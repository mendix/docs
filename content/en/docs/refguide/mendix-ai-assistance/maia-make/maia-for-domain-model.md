---
title: "Domain Models in Maia Make"
linktitle: "Domain Models"
url: /refguide/maia-for-domain-model/
weight: 50
description: "Describes how Maia Make generates, explains, and improves domain models in Studio Pro."
aliases:
    - /refguide/domain-model-generator/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
In Studio Pro 11.8 and above, domain model generation is part of [Maia Make](/refguide/maia-make/). In Studio Pro 11.7 and below, it is a separate tool called Maia for Domain Model.

To use this capability, you need an internet connection and must be signed in to Studio Pro.
{{% /alert %}}

Maia can generate new [domain models](/refguide/domain-model/) and explain and improve existing domain models. You can work on the domain model in the same conversation in which you create pages, logic, and other parts of your app. For information on the current limitations, see the [Limitations](#limitation) section below.

## Working with Domain Models in Maia

Describe your application or its main goals in the chat. Maia uses this information to generate a relevant domain model for you. In Studio Pro 11.1 and above, you can also attach up to one image and one PDF to help Maia better understand your request. For more information, see the [Attachment Requirements](#attachment-requirements) section below.

After Maia generates a domain model, you can continue asking Maia to add entities and associations to the domain model. Maia also supports adding more attributes to an existing entity in the domain model. You can also ask Maia to explain or improve the generated domain model.

### In Studio Pro 11.8 and Above

In Studio Pro 11.8 and above, you can work on domain models with Maia in the **Chat** tab, which is enabled by default. There is no dedicated interface for domain models. For more information, see [Maia Make Capabilities](/refguide/maia-make/).

### Maia for Domain Model in Studio Pro 11.7 and Below

In Studio Pro 11.7 and below, Maia for Domain Model is enabled by default. You can find it in the toolbar of a domain model:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-for-domain-model/maia-for-domain-model.png" alt="" max-width=80% >}}

If you want to disable this feature, go to **Edit** > **Preferences** > the **Maia** tab and clear the **Enable Maia for Domain Model** checkbox.

After clicking **Maia for Domain Model**, a dedicated chat interface appears on the right side of Studio Pro under the **Maia** tab:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-for-domain-model/chat-interface.png" alt="" max-width=42% >}}

{{% alert color="info" %}}
Maia for Domain Model does not support deleting items in the domain model. You can always delete them manually. 
{{% /alert %}}

{{% alert color="info" %}}
In this dedicated chat, only requests related to the domain model are handled. If you have other questions, close this chat and go back to the general [Chat](/refguide/maia-chat/) interface.
{{% /alert %}}

#### Attachment Requirements {#attachment-requirements}

In Studio Pro 11.1 and above, Maia for Domain Model supports adding up to one image and one PDF as attachments. The attachments must meet the following requirements:

* The image format must be PNG or JPG.
* The image file size must not exceed 512 KB.
* The image resolution must be no greater than 3840 × 2400 pixels.
* The PDF file size must not exceed 1024 KB.

## Limitations {#limitation}

Maia has the following limitations when it works with domain models:

* It can only generate an attribute of type Enumeration if there is an existing enumeration in the module to refer to.
* It cannot set [generalization](/refguide/generalization-and-association/) for an entity.

## Read More

* [Maia Make Capabilities](/refguide/maia-make/)
* [Data in the Domain Model](/refguide/domain-model/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Chat with Maia](/refguide/maia-chat/)
