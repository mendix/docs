---
title: "Entitlements"
url: /control-center/entitlements/
description: "Describes the Entitlements page in the Mendix Control Center."
weight: 50
no_list: true 

---

## Introduction

The **Entitlements** page is a self-service tool that displays transactions which use cloud tokens, and that helps manage plan change requests. It also displays the number of entitled, consumed, and remaining cloud tokens.

### Mendix Cloud Tokens Explained {#cloud-tokens}

Mendix cloud tokens are annual capacity-based virtual credits that allow you to provision and allocate any Mendix [cloud resource pack](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) for your Mendix Cloud deployments.

You can see available and used cloud tokens on the **Entitlements** page. If you cannot, contact your Customer Success Manager (CSM).

{{% alert color="info" %}}
From now on, you can only purchase and provision Standard, Premium, and Premium Plus cloud resource packs, not legacy resource packs. The cloud tokens for legacy resource packs that you already purchased are credited back to your account if you deprovision an environment.
{{% /alert %}}

### Cloud Resource Packs

For the technical details of each cloud resource pack, refer to the [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) section in *Mendix Cloud*.

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

## Entitlements Page Tabs

The **Entitlements** page contains the following tabs:

* **Transactions** – Allows you to monitor your cloud token consumption.
* **Requests** – Allows you to view and manage plan change requests.

### The Transactions Tab

On the **Transactions** tab, you can view a list of transactions that use cloud tokens.

{{< figure src="/attachments/control-center/apps/entitlements/entitlements-transactions_beta.png" alt="The Transactions tab of the Entitlements page">}}

These are the details available for each transaction:

* **Transaction** – The identifier of the transaction, made up of the provisioned plan, and the impacted application and environment.
* **Transaction Date** - The date when the transaction occurred.
* **Quantity** - <!-- add description -->
* **Tokens per Unit** – The number of cloud tokens included in the transaction. <!-- check -->
* **Transaction Type** – This can be either **Credit** or **Debit**.
* **Cloud Tokens** – The number of cloud tokens consumed within the transaction. <!-- check -->

### The Requests Tab {#plan-change-requests-tab}

{{% alert color="info" %}}
This feature is in Public Beta. For more information, refer to [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

The Technical Contact can request a plan change for an app environment. To do that, they need to click the **Change Plan** button on the environment in the **Apps** section of Mendix Portal. For more information, refer to [Changing Your Plan in Mendix Cloud](/developerportal/deploy/change-plan/).    

The **Requests** tab displays all plan change requests, along with the actions you can take for each request. 

{{< figure src="/attachments/control-center/apps/entitlements/entitlements-requests_beta.png" alt="The Requests tab of the Entitlements page">}}  

These are the details available for each request:

* **Request Type** – The type of request being submitted.    
    The only available option is **Plan Upgrade**.
* **App Name** – The name of the app for which the request is submitted.
* **Environment** – The app environment for which the request is submitted.
* **Production** – This column displays a green checkmark if the environment for which the request is submitted is production.
* **Current Plan** – The plan that the environment is currently on.
* **Requested Plan** – The plan that the environment should be moved to.
* **Submitted On** - The date when the request was submitted.
* **Status** - The current status of the request, which can be one of the following:

    * **Pending Approval**
    * **Approved**
    * **Canceled**
    * **Rejected**
    * **Expired**

You can filter requests by status and type.

#### Request Details

Once a plan change request is submitted at the app environment level, a banner and a notification are displayed on the **Entitlements** page.      
You can access the request details by clicking the notification itself or the **Details** button next to the request in the list. The details include the same information that is available on the **Requests** tab, as well as the cost of the plan change and the reason for the request.

#### Approving a Request

Follow these steps to approve a request:

1. Click **Approve** in the request details window.
2. Click **Approve** again in the confirmation window that opens.

Once a request is approved, its status changes as follows:

* To **Approved** on the **Requests** tab of the **Entitlements** page
* To **Pending Schedule** on the **Request Overview** tab of the **Environments** page.

The Technical Contact needs to specify when the plan change should take effect. For more information, refer to [Scheduling a Plan Change](/developerportal/deploy/change-plan/#scheduling-a-plan-change) in *Changing Your Plan in Mendix Cloud*.

#### Rejecting a Request

Follow these steps to reject a request:

1. Click **Reject** in the request details window.
2. Provide a reason for the rejection in the confirmation window that opens.
3. Click **Reject** again.

Once a request is rejected, its status changes to **Rejected** on both the **Requests** tab of the **Entitlements** page, and the **Request Overview** tab of the **Environments** page.
