---
title: "Entitlements"
url: /control-center/entitlements/
description: "Describes the Entitlements page in the Mendix Control Center."
weight: 50
no_list: true 

---

## Introduction

The **Entitlements** page is a self-service tool that displays transactions which use cloud tokens, and that helps manage plan change requests. It also displays the number of entitled, consumed, and remaining cloud tokens.

<!-- change screenshot --> {{< figure src="/attachments/control-center/apps/entitlements/entitlements.png" alt="entitlements page" >}}

### Mendix Cloud Tokens Explained {#cloud-tokens}

Mendix cloud tokens are annual capacity-based virtual credits that allow you to provision and allocate any Mendix [cloud resource pack](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) for your Mendix Cloud deployments.

To use cloud tokens, you need to enable self-service. If you want to enable self-service or have questions about cloud tokens, contact your Customer Success Manager (CSM).

{{% alert color="info" %}}
If you have previously worked with cloud credits, note that they have been replaced with cloud credits. Cloud tokens will be available as a product on the Mendix pricelist starting in early 2025.    
One cloud credit is equivalent to ten cloud tokens. For more information, see [From Cloud Credits to Cloud Tokens](#cloud-tokens-faq).
{{% /alert %}}

{{% alert color="info" %}}
From now on, you can only purchase and provision Standard, Premium, and Premium Plus cloud resource packs, not legacy resource packs. The cloud tokens for legacy resource packs that you already purchased are credited back to your account if you deprovision an environment.
{{% /alert %}}

### Cloud Resource Packs

For the technical details of each cloud resource pack, see the [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) section in *Mendix Cloud*.

The following tables show how many cloud tokens each cloud resource pack costs:

| Standard Resource Packs | Cloud Tokens |
| --- | --- |
| XS21 | 10 |
| S21 | 20 |
| M21 | 40 |
| L21 | 80 |
| XL21 | 160 |
| 2XL21 | 320 |
| 3XL21 | 640 |
| 4XL21 | 1280 |
| 4XL-5XLDB | 2240 |

|Premium Resource Packs | Cloud Tokens |
| --- | --- |
| S21 | 30 |
| M21 | 60 |
| L21 | 120 |
| XL21 | 240 |
| 2XL21 | 480 |
| 3XL21 | 960 |
| 4XL21 | 1920 |
| 4XL-5XLDB | 3360 |

|Premium Plus Resource Packs | Cloud Tokens |
| --- | --- |
| XL21 | 400 |
| 2XL21 | 800 |
| 3XL21 | 1600 |
| 4XL21 | 3200 |
| 4XL-5XLDB | 5600 |

| Legacy Resource Packs | Cloud Tokens |
| --- | --- |
| XS20 | 10 |
| S20 | 20 |
| M20 | 40 |
| L20 | 80 |
| XL20 | 160 |
| 2XL20 | 320 |
| Strato | 12 |
| Meso | 47 |
| Iono | 67 |
| Magneto | 147 |
| S | 8 |
| M | 16 |
| L | 37 |
| XL | 73 |
| 2XL | 167 |
| 3XL | 640 |

### From Cloud Credits to Cloud Tokens{#cloud-tokens-faq}

If you have previously worked with cloud credits, these are the changes you can expect as a result of moving to cloud tokens:

* Name change – Cloud tokens have replaced cloud credits throughout the Mendix Platform. This name change primarily affects the **Entitlements** page and the [Deployed Apps](/control-center/deployed-apps/) page in Control Center.
* Value adjustment – A cloud credit is equivalent to ten cloud tokens. As a result, Mendix cloud resource packs are valued differently with cloud tokens compared to cloud credits.    
    For example, the smallest cloud resource pack, the XS standard resource pack, is now equivalent to ten cloud tokens. Previously, it was valued at one cloud credit.    
    Your existing transactions and the number of cloud tokens are automatically adjusted. You can see this change on the **Entitlements** page in Control Center. 
* Direct ordering – You can order Mendix cloud tokens directly from the Mendix pricelist. You can use your available cloud tokens to provision any cloud resource pack for your apps.

For any questions, contact your Mendix Customer Success Manager. If you experience any issues, create a support ticket with Mendix Support.

## Entitlements Page Tabs

The **Entitlements** page contains the following tabs:

* **Transactions** – Allows you to monitor your cloud token consumption.
* **Requests** – Allows you to view and manage plan change requests.

### Transactions

On the **Transactions** tab, you can see a list of transactions that use cloud tokens, with the following details:

* **Transaction** – The name of the transaction, which includes the provisioned plan, and the impacted application and environment.
* **Transaction Date** - The date when the transaction occurred.
* **Quantity** - 
* **Tokens per Unit** – The number of cloud tokens included in the transaction.
* **Transaction Type** – This can be credit or debit.
* **Cloud Tokens** – The number of cloud tokens consumed within the transaction. 

### Requests

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

This tab lists plan change requests, along with the actions you can take for each request. 

These are the details available for each request:

* **Request Type** – The type of request being submitted. This can be **Plan Upgrade**.
* **App Name** – The name of the app for which the request is submitted.
* **Environment** – The app environment for which the request is submitted.
* **Production** – This column displays a green checkmark if the environment for which the request is submitted is production.
* **Current Plan** – The plan that the environment is currently on.
* **Requested Plan** – The plan that the environment should be moved to.
* **Submitted On** - The date when the request was submitted.
* **Status** - The current status of the request, which can be one of the following:

    * **Pending approval**
    * **Approved**
    * **Canceled**

Once a plan change request is submitted at the app environment level, a banner and a notification are displayed on the **Entitlements** page. You can access the request details by clicking the notification itself or the **Details** button next to the request in the list. The details include the cost of the plan change and the reason for the request.

#### Approving a Request

Follow these steps to approve a request:

1. Click **Approve** in the request details window.
2. Click **Approve** again in the confirmation window that opens.

This is what happens once a request is approved:

* Its status changes to **Approved** on the **Requests** tab of the **Entitlements** page.
* Its status changes to **Pending Schedule** on the **Environments** page.
* The Technical Contact is notified on the **Environments** page.    
    They then need to specify when the plan change should take effect.  <!--[add link to cloud docs]-->

#### Rejecting a Request

Follow these steps to reject a request:

1. Click **Reject** in the request details window.
2. Provide a reason for the rejection in the confirmation window that opens.
3. Click **Reject** again.