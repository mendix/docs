---
title: "Maia for Workflows"
url: /refguide/maia-for-workflows/
weight: 75
description: "Describes the features in Maia for Workflows."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
To use Maia for Workflows, you need an internet connection and must be signed in to Studio Pro.
{{% /alert %}}

Maia for Workflows helps you generate a [workflow](/refguide/workflows/). It can also provide explanations or suggest improvements to the generated elements. It has some limitations. For more details, see the [Limitations](#limitation) section below.

## Using Maia for Workflows

Describe a business process you want to model. Maia uses this information to add relevant workflow activities and configures them where possible. For more information on how to communicate with Maia to achieve better results when configuring a workflow, see the [Best Practices](/refguide/maia-make/#workflows-best-practices) section of *Maia Make Capabilities*.

### Version Availability

#### Studio Pro 11.9 and Above

Maia for Workflows is incorporated into the unified [Maia Make Capabilities](/refguide/maia-make/), which are enabled by default.

#### Studio Pro 11.8

Maia for Workflows is not available.

#### Studio Pro 11.7 and Below

To enable Maia for Workflows, go to **Edit** > **Preferences** > the **Maia** tab and select **Enable Maia for Workflows**. After you enable it, you can find it in the toolbar of a workflow:

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
* [Maia Chat](/refguide/maia-chat/)
