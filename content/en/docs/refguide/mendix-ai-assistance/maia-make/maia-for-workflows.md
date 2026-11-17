---
title: "Workflows in Maia Make"
linktitle: "Workflows"
url: /refguide/maia-for-workflows/
weight: 75
description: "Describes how Maia Make generates, explains, and improves workflows in Studio Pro."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
In Studio Pro 11.9 and above, workflow generation is part of [Maia Make](/refguide/maia-make/). In Studio Pro 11.7 and below, it is a separate tool called Maia for Workflows.

To use this capability, you need an internet connection and must be signed in to Studio Pro.
{{% /alert %}}

Maia can generate a [workflow](/refguide/workflows/). It can also provide explanations or suggest improvements to the generated elements. You can work on workflows in the same conversation in which you create the domain model, pages, logic, and other parts of your app. For information on the current limitations, see the [Limitations](#limitation) section below.

## Working with Workflows in Maia

Describe a business process you want to model. Maia uses this information to add relevant workflow activities and configures them where possible. For more information on how to communicate with Maia to achieve better results when configuring a workflow, see the [Best Practices](/refguide/maia-make/#workflows-best-practices) section of *Maia Make Capabilities*.

### Version Availability

#### Studio Pro 11.9 and Above

You work on workflows with [Maia](/refguide/maia-make/) in the **Chat** tab, which is enabled by default.

#### Studio Pro 11.8

Workflow generation is not available.

#### Studio Pro 11.7 and Below

In Studio Pro 11.7 and below, workflow generation is a separate tool called Maia for Workflows. To enable Maia for Workflows, go to **Edit** > **Preferences** > the **Maia** tab and select **Enable Maia for Workflows**. After you enable it, you can find it in the toolbar of a workflow:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-for-workflows/maia-for-workflows.png" alt="" max-width=80% >}}

After clicking **Maia for Workflows**, a chat interface appears on the right side of Studio Pro under the **Maia** tab:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-for-workflows/chat-interface.png" alt="" max-width=42% >}}

## Limitations {#limitation}

### Not All Properties Can Be Configured

Due to the complex cross-document nature of a workflow, not all properties of the workflow elements can be generated yet. The following properties cannot be configured yet:

* From the workflow document itself
* [Admin Page](/refguide/workflow-properties/#admin-page)

## Read More

* [Maia Make Capabilities](/refguide/maia-make/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Workflow](/refguide/workflows/)
* [Chat with Maia](/refguide/maia-chat/)
