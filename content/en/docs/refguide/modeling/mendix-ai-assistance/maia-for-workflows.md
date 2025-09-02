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

Maia for Workflows helps you generate a [workflow](/refguide/workflows/). It can also provide explanations or further improvements based on the generated elements. The current version has some known limitations. For example, it is currently intended only for use with empty workflows. Generated elements are appended to the end of the workflow, which may result in incorrectly modeled workflows if the workflow is not empty. For more details, see the [Limitations](#limitation) section below.

## Using Maia for Workflows

To enable Maia for Workflows, go to **Edit** > **Preferences** > the **Maia** tab and select **Enable Maia for Workflows**.

Once enabled, you can find it in the the toolbar of a workflow:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/maia-for-workflows/maia-for-workflows.png" max-width=80% >}}

After clicking **Maia for Workflow**, a dedicated chat interface appears at the right side of Studio Pro under the **Maia** tab:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/maia-for-workflows/chat-interface.png" max-width=42% >}}

Describe a business process which you want to model and Maia uses this information to add relevant workflow activities, and tries to configure them where possible. You can also supplement text input with a maximum of one image and one PDF file, which Maia uses to interpret your request more effectively. For more information, see the [Attachment Requirements](#attachment-requirements) section below. 

After a workflow is generated, you can continue asking Maia in the same session to further improve the workflow and provide explanations.

{{% alert color="info" %}}
In this dedicated chat, only requests related to Workflows will be properly handled. If you have other questions, close this chat and go back to the general [Maia Chat](/refguide/maia-chat/) interface.
{{% /alert %}}

### Best Practices for Text Input

To achieve optimal results, provide context about your workflow by describing its main use cases, customer needs, or other relevant details. The more Maia knows about your workflow, the more tailored and accurate the generated workflow will be.

Below are some examples of prompts you can use as a starting point:

* The workflow will be used to ...
* Create a workflow based on the image.
* Base the workflow on the image, but change ... to ...

Below are some examples of prompts you can use to ask Maia for further explanations or suggestions to improve the generated page:

* Can you make the timer wait for 5 days?
* I want the process to run in parallel.

{{% alert color="warning" %}}
Requests for improvements or explanations currently only work within the same session where the workflow is generated. If you close the session and start a new session on that workflow, any attempts to make changes to the workflow will result in the removal of existing elements.
{{% /alert %}}

### Attachment Requirements {#attachment-requirements}

Maia for Workflows supports adding a maximum of one image and one PDF as attachments. Support for adding a PDF file was introduced in Studio Pro 11.2.0.

The attachments must meet the following requirements:

* The image format must be PNG or JPG.
* The image file size must not exceed 512 KB.
* The image resolution must be no greater than 3840 × 2400 pixels.
* The PDF file size must not exceed 1024 KB.

For example, Maia for Workflows can analyze a BPMN image representing employee onboarding, rework it using Mendix Workflows terminology, and generate the corresponding activities for you. Alongside the image, you can also use text input to specify how the generated workflow should differ from the provided image. For example, you might write: *Generate a workflows based on this BPMN image, but make sure it waits before sending an email to the new employee.*

Make sure to select a clear image to help Maia better understand your request. For example, you can provide a screenshot, a photo, BPMN schema, or a close-up picture of a drawing. Avoid heavily compressed or low quality images, as these may result in the loss of important details.

## Limitations {#limitation}

Maia for Workflows has some limitations.

### Empty Workflows Only

Maia for Workflows is currently intended only for use with empty Workflows. Using it on existing workflows can result in incorrectly modeled business processes.

Requests for improvements and explanations currently only work within the same session where a workflow has been generated. Once the session is closed, Maia for Workflows loses the context. Any attempts to make changes to that workflow in a new session will also result in the removal of all existing elements.

### Supported Workflow Elements

Currently, annotations are not supported. However, most of the other workflow elements are supported. See below a list of supported workflow elements:

* [User Task](/refguide/user-task/)
* [Multi-user Task](/refguide/multi-user-task/)
* [Decision](/refguide/decision-in-workflows/)
* [Parallel Split](/refguide/parallel-split/)
* [Jump](/refguide/jump-activity/)
* [Wait for Notification](/refguide/wait-for-notification/)
* [Timer](/refguide/timer/)
* [Call Microflow](/refguide/call-microflow/)
* [Call Workflow](/refguide/call-workflow/)
* [Boundary Events](/refguide/workflow-boundary-events/)

### Not All Properties Can Be Configured

Due to the complex cross-document nature of a workflow, not all properties of the workflow elements can be generated yet. The following properties cannot be configured yet:

* The following properties of [User Task](/refguide/user-task/):
    * Task page
    * Targeted users
    * Due date
* Any [properties](/refguide/workflow-properties/) of the workflow document itself

## Read More

* [Workflow](/refguide/workflows/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
