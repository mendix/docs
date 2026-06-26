---
title: "GenAI Resources"
url: /control-center/genai-resources-self-service/
description: "Describes how to provision and deprovision GenAI Resources using self-service."
weight: 20
---

## Introduction

The **GenAI Resources** section provides a detailed overview of all Mendix GenAI resources available within your company, allowing Company Admins to seamlessly provision and deprovision GenAI resources as needed. With this feature, Company Admins can efficiently manage all GenAI resources directly within the [Control Center](https://controlcenter.mendix.com/index.html) through a self-service capability, ensuring streamlined operations and improved governance. For more information, see [Accessing GenAI Resources](/agents/mx-cloud-genai/resource-packs/#accessing-genai-resources).

## Prerequisites

Self-service provisioning of GenAI resources using Mendix Cloud Tokens is available only if you meet the following conditions:

1. Sufficient token entitlements – You must have an adequate number of available Mendix Cloud Tokens to allocate for GenAI resource provisioning.
2. Valid subscription plan – Your Mendix subscription must be based on the FY21 price list or newer. Older subscription plans are not eligible for provisioning.
3. Single account ownership – You must have a single account. Owning multiple accounts is not supported for self-service GenAI provisioning.
4. Enterprise platform subscription – You must have a single active enterprise platform subscription. If no active subscription is found, the system displays the following warning: "We couldn't retrieve your correct platform account, which is required to access available tokens and create resources. Please contact Mendix Support for assistance."

## Overview of Deployed Resources

The overview page provides a centralized view of all deployed GenAI resources, including text generation resources, embeddings generation resources, and knowledge base resources. From this page, you can easily review the status, basic information, and usage details of each deployed resource. The following list shows detailed information about your GenAI resource.

* **Name** – The name of the resource.
* **Models** – The model versions available on the resource, grouped by family, for example, Claude Haiku, Sonnet, or Opus. For a full list of available models, see [Supported Models](/agents/mx-cloud-genai/resource-packs/#supported-models).
* **Capacity** – The monthly GenAI Unit allocation for the resource.
* **Status** – The current status of the resource, for example, **Active**.

{{< figure src="/attachments/control-center/genai-resources/overview-genai-resources.png" alt="Overview page showing deployed GenAI resources with columns for Name, Models, Capacity, and Status" >}}

## Provisioning GenAI Resources

You can provision any GenAI resources directly within the Control Center using the self-service capability. To do so, select the appropriate resource type and click **Provision Resource**.

{{% alert color="info" %}}
Ensure that you are on the correct resource tab before provisioning. For example, to create a new text generation resource, first select the **Text Generation Resources** tab.
{{% /alert %}}

When provisioning a new resource, enter the following information:

* **Name** – The name of the resource.
* **Environment** – The environment for which the resource is created, such as Test, Acceptance, or Production.
* **Mendix Cloud Region** – The cloud region where the resource is hosted.
* **Cross Region Inference** – Select whether to enable cross region inference for this resource. Without cross region inference, the latest model versions may not be available. For more information, see the [Settings](/agents/mx-cloud-genai/Navigate-MxGenAI/#settings) section of *Navigate through the Mendix Cloud GenAI Portal*.
* **Available Models** – The model versions to enable on the resource. For text generation resources, select one or more versions from the available Claude model families (Haiku, Sonnet, or Opus). For embeddings resources, select a single model from the available options. For a full list of available models, see [Supported Models](/agents/mx-cloud-genai/resource-packs/#supported-models).
* **Default Model** – The model version used when no model is explicitly specified in an API call. Select one of the model versions chosen in **Available Models**. This ensures backward compatibility with existing apps that use older connector versions.
* **Cloud Tokens** – The number of Mendix Cloud Tokens to allocate per month (minimum one). Each Cloud Token provides 100 [GenAI Units](/agents/mx-cloud-genai/Navigate-MxGenAI/#what-are-tokens-and-genai-units). **Resource Specification** shows the resulting monthly GenAI Unit allocation.
* **User** – The name and email address of the user for whom the provisioning was initially created.

{{< figure src="/attachments/control-center/genai-resources/provisioning.jpg" alt="" >}}

After filling in the required fields, review all the entered details in **Resource Specification**. If the entered Cloud Token amount exceeds your available balance, **Cloud Tokens Consumption** turns red and the **Provision Resource** button is disabled. To learn more about GenAI Unit allocation, see [GenAI Units and Model Exchange](/agents/mx-cloud-genai/resource-packs/#genai-units-and-model-exchange).

Click **Provision** to proceed. Before provisioning is finalized, a **Resource Summary** confirmation dialog shows a read-only overview of all entered details. Review the summary and click **Provision** to complete provisioning. You are taken back to the **GenAI Resources** page, where the newly created resource is displayed in the list. Selecting the newly provisioned resource opens its details directly in the Mendix Cloud GenAI Portal in a new tab.

## Deprovisioning GenAI Resources

To deprovision a resource, click the three-dot icon ({{% icon name="three-dots-menu-horizontal-filled" %}}) next to the selected resource and select **Deprovision Resource**. A confirmation dialog box appears, displaying a message and the details of the selected resource, as shown in the example below.

{{< figure src="/attachments/control-center/genai-resources/deprovisioning.png" alt="Confirmation dialog for deprovisioning a GenAI resource showing resource details and Deprovision button" >}}

Click **Deprovision** to proceed. After confirmation, the resource status updates on the **GenAI Resources** page to reflect that deprovisioning is scheduled.

{{% alert color="info" %}}
When you deprovision a resource, the actual deprovisioning occurs at the end of the current bundle month. Until that date, you can still use the resource, and the scheduled deprovisioning date appears in the resource's **Status**. Knowledge base and embeddings resources can be deprovisioned in the same bundle month. The system handles the dependency automatically.
{{% /alert %}}

## Adjusting Resource GenAI Unit Capacity {#adjusting-resource-genai-unit-capacity}

You can change the Cloud Token allocation of an already provisioned GenAI resource (text generation or embeddings) to better match your actual usage. You can adjust the allocation through the self-service capability of the Control Center.

To adjust the GenAI Unit capacity of a resource, do the following:

1. Log in to the Control Center as a Company Admin.
2. On the **GenAI Resources** page, click the three-dot ({{% icon name="three-dots-menu-horizontal-filled" %}}) icon next to the selected resource and select **Edit Resource**.
3. Enter the new **Cloud Tokens** amount and review the updated **Cloud Tokens Consumption**.
4. You can also change the **Name** and **Default Model** at this stage.
5. Click **Edit** to save the changes. 

{{< figure src="/attachments/control-center/genai-resources/edit-resource.jpg" alt="Edit Resource dialog showing Cloud Tokens field, Name field, Default Model dropdown, and Cloud Tokens Consumption summary" >}}

### Increasing GenAI Unit Capacity

Increases take effect immediately. The additional GenAI Units are added to the current bundle month and apply to all future months. Your account must have sufficient available Cloud Tokens to cover the increase.

### Decreasing GenAI Unit Capacity

The behavior depends on how much of the current month's allocation has already been consumed:

* Immediate decrease – If the GenAI Units consumed so far in the current bundle month are less than the new allocation, the decrease takes effect immediately and Cloud Tokens are released immediately.
* Deferred decrease – If the GenAI Units consumed so far in the current bundle month exceed the new allocation, the current month continues at the existing allocation. The decrease takes effect at the start of the next bundle month, and Cloud Tokens are released at that point.
