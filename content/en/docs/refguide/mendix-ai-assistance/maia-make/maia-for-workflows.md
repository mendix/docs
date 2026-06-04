---
title: "Maia for Workflows"
url: /refguide/maia-for-workflows/
weight: 75
description: "Describes the features in Maia for Workflows."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
To use Maia for Workflows, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia for Workflows helps you generate a [workflow](/refguide/workflows/). It can also provide explanations or further improvements based on the generated elements. The current version has some known limitations. For more details, see the [Limitations](#limitation) section below.

## Using Maia for Workflows

Describe a business process you want to model. Maia uses this information to add relevant workflow activities, and tries to configure them where possible. For more information on how to communicate with Maia to achieve better results when configuring a workflow, see the [Best Practices for Text Input](#text-input-best-practice) section below.

### Version Availability

#### Studio Pro 11.9 and Above

Maia for Workflows is incorporated into the unified [Maia Make Capabilities](/refguide/maia-make/), which are enabled by default.

#### Studio Pro 11.8

Maia for Workflows is not available.

#### Studio Pro 11.7 and Below

To enable Maia for Workflows, go to **Edit** > **Preferences** > the **Maia** tab and select **Enable Maia for Workflows**. Once enabled, you can find it in the toolbar of a workflow:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-for-workflows/maia-for-workflows.png" max-width=80% >}}

After clicking **Maia for Workflow**, a chat interface appears at the right side of Studio Pro under the **Maia** tab:

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-for-workflows/chat-interface.png" max-width=42% >}}

### Best Practices for Text Input {#text-input-best-practice}

To achieve optimal results, provide context about your workflow by describing its main use cases, customer needs, or other relevant details. The more Maia knows about your workflow, the more tailored and accurate the generated workflow will be.

Below are some examples of prompts you can use as a starting point:

* Please generate a workflow for a process that...
* Create a workflow based on the image.
* Base the workflow on the image, but change ... to ...

Maia for Workflows can analyze a BPMN image representing employee onboarding, rework it using Mendix Workflows terminology, and generate the corresponding activities for you. Alongside the image, you can also use text input to specify how the generated workflow should differ from the provided image. For example, you might write: *Generate a workflow based on this BPMN image, but make sure it waits before sending an email to the new employee.*

Make sure to select a clear image to help Maia better understand your request. For example, you can provide a screenshot, a photo, BPMN schema, or a close-up picture of a drawing. Avoid heavily compressed or low quality images, as these may result in the loss of important details.

Below are some examples of prompts you can use to ask Maia for further explanations or suggestions to improve the generated workflow:

* Can you explain this workflow to me?
* Can you give me suggestions to improve this workflow?
* Can you make the timer wait for 5 days?
* I want the process to run in parallel.

## Limitations {#limitation}

Maia for Workflows currently has some limitations.

### Not All Properties Can Be Configured

Due to the complex cross-document nature of a workflow, not all properties of the workflow elements can be generated yet. The following properties cannot be configured yet:

* From the workflow document itself
* [Admin Page](/refguide/workflow-properties/#admin-page)

## Read More

* [Maia Make Capabilities](/refguide/maia-make/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Workflow](/refguide/workflows/)
* [Maia Chat](/refguide/maia-chat/)
