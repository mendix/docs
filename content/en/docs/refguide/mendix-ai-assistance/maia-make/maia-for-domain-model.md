---
title: "Maia for Domain Model"
url: /refguide/maia-for-domain-model/
weight: 50
description: "Describes the features in Maia for Domain Model."
aliases:
    - /refguide/domain-model-generator/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
To use Maia for Domain Model, you need an internet connection and must be signed in to Studio Pro.
{{% /alert %}}

Maia for Domain Model helps you generate new [domain models](/refguide/domain-model/) and explain and improve existing domain models. It has some limitations. For more information, see the [Limitations](#limitation) section below.

## Using Maia for Domain Model

### In Studio Pro 11.8 and Above

In Studio Pro 11.8 and above, Maia for Domain Model is incorporated into the unified Maia Make capabilities, which are enabled by default. Maia for Domain Model does not have a dedicated interface. For more information, see [Maia Make Capabilities](/refguide/maia-make/).

### In Studio Pro 11.7 and Below

In Studio Pro 11.7 and below, Maia for Domain Model is enabled by default. You can find it in the toolbar of a domain model:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-for-domain-model/maia-for-domain-model.png" alt="" max-width=80% >}}

If you want to disable this feature, go to **Edit** > **Preferences** > the **Maia** tab and clear the **Enable Maia for Domain Model** checkbox.

After clicking **Maia for Domain Model**, a dedicated chat interface appears on the right side of Studio Pro under the **Maia** tab:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-for-domain-model/chat-interface.png" alt="" max-width=42% >}}

Describe your application or its main goals in the chat. Maia uses this information to generate a relevant domain model for you. In Studio Pro 11.1 and above, you can also attach up to one image and one PDF to help Maia better understand your request. For more information, see the [Attachment Requirements](#attachment-requirements) section below.

After Maia generates a domain model, if the dedicated chat is still active, you can continue asking Maia to add entities and associations to the domain model. Maia also supports adding more attributes to an existing entity in the domain model. You can also ask Maia to explain or improve the generated domain model.

{{% alert color="info" %}}
Maia for Domain Model does not support deleting items in the domain model. You can always delete them manually. 
{{% /alert %}}

{{% alert color="info" %}}
In this dedicated chat, only requests related to the domain model are handled. If you have other questions, close this chat and go back to the general [Maia Chat](/refguide/maia-chat/) interface.
{{% /alert %}}

#### Attachment Requirements {#attachment-requirements}

In Studio Pro 11.1 and above, Maia for Domain Model supports adding up to one image and one PDF as attachments. The attachments must meet the following requirements:

* The image format must be PNG or JPG.
* The image file size must not exceed 512 KB.
* The image resolution must be no greater than 3840 × 2400 pixels.
* The PDF file size must not exceed 1024 KB.

#### Limitations {#limitation}

Maia for Domain Model has the following limitations:

* It can only generate an attribute of type Enumeration if there is an existing enumeration in the module to refer to.
* It cannot set [generalization](/refguide/generalization-and-association/) for an entity.

## Read More

* [Data in the Domain Model](/refguide/domain-model/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
