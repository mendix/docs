---
title: "Entitlements"
url: /control-center/entitlements/
description: "Describes the Entitlements page in the Mendix Control Center."
weight: 50
no_list: true 

---

## Introduction

The **Entitlements** page is a self-service tool that displays transactions which use Mendix Cloud Tokens, and that helps manage plan change requests. It also displays the number of entitled, consumed, and remaining Mendix Cloud Tokens.

### Mendix Cloud Tokens Explained {#cloud-tokens}

Mendix Cloud Tokens are a type of Token that can be used within the Mendix Platform to consume Cloud Resources, such as  [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) (CRPs), for your Mendix Cloud deployments. The contractual definitions of Tokens and Mendix Cloud Tokens can be found on our [Order Form Definitions](https://www.mendix.com/legal/platform-usage/order-form-definitions/#section-9) page.


{{% alert color="info" %}}
From now on, you can only purchase and provision Standard, Premium, and Premium Plus cloud resource packs, not legacy resource packs. The cloud tokens for legacy resource packs that you already purchased are credited back to your account if you deprovision an environment.
{{% /alert %}}

### Cloud Resource Packs

For the technical details of each cloud resource pack, refer to the [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) section in *Mendix Cloud*.

The number of Mendix Cloud Tokens required for each type of Cloud Resource Pack is specified in the [Cloud Resource Packs](#crps) section of this document. All your current CRPs will be converted to their equivalent Mendix Cloud Tokens and aggregated with any other Mendix Cloud Tokens. You can then use these to provision Cloud resources (of any type and size) as specified in your contracts. 

You can see available and used Mendix Cloud Tokens on the **Entitlements** page. If you cannot, contact your Customer Success Manager (CSM).

### Legacy Cloud Resource Packs

{{% alert color="info" %}}
It is no longer possible to purchase Legacy Cloud Resources Packs. It is now only possible to purchase and provision the following CRPs: Standard; Premium; and Premium Plus. Any legacy Cloud Resource Packs you already purchased will be converted into Mendix Cloud Tokens if they are deprovisioned. This will use the rate specified in the [Cloud Resource Packs](#crps) section and the Mendix Cloud Tokens will be added to your Token pool.
{{% /alert %}}

### Key Takeaways

* Mendix Cloud Tokens are a specific type of token used to access Cloud Resources in the Mendix Platform.
* The number of tokens required depends on the CRP you want, as listed below.
* You buy tokens in advance and can use them to obtain CRPs.
* If you no longer need those resources, you can reuse the token to obtain other CRPs or keep it to be used later.

## Cloud Resource Packs {#crps}

{{% alert color="info" %}}
For the technical details of each cloud resource pack, see the [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) section of *Mendix Cloud*.
{{% /alert %}}

The tables below show how many Mendix Cloud Tokens each CRP requires:

| Standard Resource Packs | Mendix Cloud Tokens |
| --- | --: |
| XS21 | 10 |
| S21 | 20 |
| M21 | 40 |
| L21 | 80 |
| XL21 | 160 |
| 2XL21 | 320 |
| 3XL21 | 640 |
| 4XL21 | 1280 |
| 4XL-5XLDB | 2240 |

|Premium Resource Packs | Mendix Cloud Tokens |
| --- | --- |
| S21 | 30 |
| M21 | 60 |
| L21 | 120 |
| XL21 | 240 |
| 2XL21 | 480 |
| 3XL21 | 960 |
| 4XL21 | 1920 |
| 4XL-5XLDB | 3360 |

|Premium Plus Resource Packs | Mendix Cloud Tokens |
| --- | --: |
| XL21 | 400 |
| 2XL21 | 800 |
| 3XL21 | 1600 |
| 4XL21 | 3200 |
| 4XL-5XLDB | 5600 |

| Legacy Resource Packs | Mendix Cloud Tokens |
| --- | --: |
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

* **Transactions** – Allows you to monitor your Mendix Cloud Token consumption.
* **Requests** – Allows you to view and manage plan change requests.

### The Transactions Tab

On the **Transactions** tab, you can view a list of transactions that use Mendix Cloud Tokens.

{{< figure src="/attachments/control-center/apps/entitlements/entitlements-transactions_beta.png" alt="The Transactions tab of the Entitlements page">}}

These are the details available for each transaction:

* **Transaction** – The identifier of the transaction, made up of the provisioned plan, and the impacted application and environment.
* **Transaction Date** - The date when the transaction occurred.
* **Quantity** - The number of Mendix Cloud Tokens credited or debited. <!-- check -->
* **Tokens per Unit** – The number of Mendix Cloud Tokens included in the transaction. <!-- check -->
* **Transaction Type** – This can be either **Credit** or **Debit**.
* **Cloud Tokens** – The number of Mendix Cloud Tokens consumed within the transaction. <!-- check -->

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
* **Submitted On** – The date when the request was submitted.
* **Status** – The current status of the request, which can be one of the following:

    * **Pending Approval**
    * **Approved**
    * **Canceled**
    * **Rejected**
    * **Expired**

You can filter requests by status and type.

#### Request Details

Once a plan change request is submitted at the app environment level, a banner and a notification are displayed on the **Entitlements** page. For more information, refer to [Changing Your Plan in Mendix Cloud](/developerportal/deploy/change-plan/).         
You can access the request details by clicking the notification itself or the **Details** button next to the request in the list. The details include the same information that is available on the **Requests** tab, as well as the cost of the plan change and the reason for the request.

#### Approving a Request

Follow these steps to approve a request:

1. Click **Approve** in the request details window.
2. Click **Approve** again in the confirmation window that opens.

Once a request is approved, its status changes to **Approved**.

For the Technical Contact, the status changes to **Pending Schedule** on the [Request Overview tab](/developerportal/deploy/environments-redesign/#request-overview) of the **Environments** page. They then need to specify when the plan change should take effect. For more information, refer to the [Scheduling a Plan Change](/developerportal/deploy/change-plan/#scheduling-a-plan-change) section in *Changing Your Plan in Mendix Cloud*.

#### Rejecting a Request

Follow these steps to reject a request:

1. Click **Reject** in the request details window.
2. Provide a reason for the rejection in the confirmation window that opens.
3. Click **Reject** again.

Once a request is rejected, its status changes to **Rejected**.    
The Technical Contact can see the same status on the **Request Overview** tab of the **Environments** page.
