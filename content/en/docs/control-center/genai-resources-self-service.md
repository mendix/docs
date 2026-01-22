---
title: "GenAI Resources"
url: /control-center/genai-resources-self-service
description: "Describes how to provision and deprovision GenAI Resources using self-service."
weight: 20
---

## Introduction

The **GenAI Resources** section provides a detailed overview of all Mendix GenAI resources available within your company, allowing Mendix Admins to seamlessly provision and deprovision GenAI resources as needed. With this feature, Mendix Admins can efficiently manage all GenAI resources directly within the [Control Center](https://controlcenter.mendix.com/index.html) through a self-service capability, ensuring streamlined operations and improved governance. For more information, refer to [Accessing GenAI Resources](/appstore/modules/genai/mx-cloud-genai/resource-packs/#accessing-genai-resources).

## Prerequisites

Self-service provisioning of GenAI resources using Mendix Cloud Tokens is available only if the users meets the following conditions:

1. Sufficient token entitlements – The user should have an adequate number of available Mendix Cloud Token to allocate for GenAI resource provisioning.
2. Valid subscription plan – The user's Mendix subscription must be based on the FY21 price list or newer. Older subscription plans are not eligible for provisioning.
3. Single account ownership – The user should have a single account. Owning multiple accounts is not supported for self-service GenAI provisioning.
4. Enterprise platform subscription – The user should have a single active enterprise platform subscription. If no active subscription is found, the system will display a warning message with this text: "We couldn't retrieve your correct platform account, which is required to access available tokens and create resources. Please contact Mendix Support for assistance."

## Overview of Deployed Resources

The overview page provides a centralized view of all deployed GenAI resources, including text generation resources, embeddings generation resources, and knowledge base resources. From this page, you can easily review the status, basic information, and usage details of each deployed resource. The following list shows detailed information about your GenAI resource.

* **Status** – The current status of the resource.
* **Name** – The name of the resource.
* **Model** – The model that is used, for example, Anthropic Claude Sonnet 4.0.
* **Plan** – The subscription plan used for resources, for example, small, medium, or large.
* **Created For** – For whom it is created.

{{< figure src="/attachments/control-center/genai-resources/overview-genai-resources.png" >}}

## Provisioning GenAI Resources

You can provision any GenAI resources directly within the Control Center using the self-service capability. 
To do so, select the appropriate resource type and click **Provision Resource**. 

{{% alert color="info" %}}
Ensure that you are on the correct resource tab before provisioning. For example, to create a new text generation resource, first select the **Text Generation Resources** tab.
{{% /alert %}}

When provisioning a new resource, enter the following information:

* **Display Name** – The name of the resource.
* **Environment** – The environment for which the resource is created, such as Test, Acceptance, or Production.
* **Mendix Cloud Region** – The cloud region where the resource will be hosted.
* **Cross-region inference** – Specifies whether the selected model supports cross-region inference. For more information, refer to the [Settings](/appstore/modules/genai/mx-cloud-genai/Navigate-MxGenAI/#settings) section of *Navigate through the Mendix Cloud GenAI Portal*.
* **Available Text Generation Models** – A list of the supported models you can choose from, for example, Anthropic Claude Sonnet V4.
* **Size** – The subscription plan with the tokens used for resources. 
* **User** – The name of the user for whom the provisioning was initially created.
* **Email** – The user's email address.

After filling in the required fields, you can review all entered details in the **Resource Specification**. To learn more, refer to [Mendix Cloud GenAI Resource Packs](/appstore/modules/genai/mx-cloud-genai/resource-packs/).

Click **Provision Resource** to finalize the process. You are taken back to the **GenAI Resources** page, where the newly created resource is displayed in the list. Selecting the newly provisioned resource opens its details directly in the Mendix Cloud GenAI Portal in a new tab.

## Deprovisioning GenAI Resources

If you want to deprovision the resource, click the three dots icon ({{% icon name="three-dots-menu-horizontal" %}}) next to the selected resource and select **Deprovision Resource**. 
A confirmation pop-up appears, displaying a message and the details of the selected resource, as shown in the example below.

{{< figure src="/attachments/control-center/genai-resources/deprovisioning.png" >}}

Click **Deprovision** to proceed. After confirmation, the resource status updates on the **GenAI Resource** page to reflect that deprovisioning is scheduled. 

{{% alert color="info" %}}
Your subscription plan operates on a monthly bundle cycle. When you deprovision a resource, the actual deprovisioning will occur at the end of the current subscription month. Until that date, you can still use the resource, and the scheduled deprovisioning date will appear in the resource's **Status**. 
{{% /alert %}}
