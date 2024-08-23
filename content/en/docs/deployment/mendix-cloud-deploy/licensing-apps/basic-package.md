---
title: "Mendix Basic Package"
url: /developerportal/deploy/basic-package/
weight: 20
description: "Obtaining a Mendix Basic Package Node"
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

You can only run a Mendix app in production on Mendix Cloud if the app is linked to a licensed node. If you have an app that you want to license, you can do this simply and cost-effectively by ordering the [Mendix Basic](https://www.mendix.com/pricing/basic-package/) package.

{{% alert color="info" %}}
After you order the Mendix Basic package, it may take up to 48 hours before your licensed node is ready for use.
{{% /alert %}}

{{% alert color="info" %}}
Without a license, you can still deploy and test your app, but the functionality is limited compared to the Basic Package. For more information, see [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/).
{{% /alert %}}

## Features of the Basic Package

The Basic Package has the following features:

* Runs in Mendix Cloud
* Supports 5-100 users
* Can be paid for via invoice only
* Has a limited amount of resources and a single cloud environment on Mendix Cloud, together with the ability to preview and test in Studio Pro. The cloud environment has the following features:
    * 1 GiB App RAM
    * 0.25 vCPU
    * 1 GiB database schema as a part of a shared database — your schema is private to your app, and some database monitoring graphs are not available (see [Metrics](/developerportal/operate/metrics/) for more information)
    * 1 GiB file storage for `FileDocument` and `Image` entities
* The regular Mendix [Service Level Agreement](https://www.mendix.com/wp-content/uploads/Mx_ServiceLevelAgreement_v2018-01.pdf) applies, but note the following:
    * You cannot get telephone support; you can only access support via the [Mendix Support](https://support.mendix.com) website.
    * Support is only available for general platform issues; Mendix Support cannot help solve problems with individual apps.

## Purchasing a Basic Package

From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of the Free App you want to license.

When you view your Free App environment, you will see a banner showing that you are using a Free App.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/basic-package/free-app-message.png" alt="Free App banner" class="no-border" >}}

To order your Mendix Basic package, do the following:

1. Click **Learn More**.

2. Review the features of Mendix Basic and click **Upgrade Now**.

3. Configure the Basic Package by choosing the following:

    * **App Name** – This defaults to the current Free App, but you can choose another one of your Free Apps using the drop-down list.
    * **App URL** – Choose your preferred subdomain of `.mendixcloud.com`. This is where users can find your app.
    * **Deployment Region** – Choose your preferred region. Mendix recommends selecting the region where you expect to receive the most visitors. The available regions correspond to AWS regions.
    * **Number of Users** – The cost of your Basic package depends on the number of users.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/basic-package/configure-basic-package.png" alt="Configuration screen" class="no-border" >}}

    You can see a summary of your Basic package on the right side of the screen.

4. Click **Continue**.

5. Enter your account and billing details.

    {{% alert color="info" %}}Enter an email address that you monitor. Mendix uses this email address to send important information about your Mendix Basic package.{{% /alert %}}

6. Click **Continue**.

7. Review your order and make any changes needed. Review and accept the **Terms & Conditions**.

    {{% alert color="info" %}}The license may take 48 hours to provision. You will receive your invoice about 14 days after you submit your order.{{% /alert %}}

8. Depending on your payment method, you will be asked to enter your credit card details or to continue with the payment on your account. 

9. Click **Purchase** to complete your order.

10. Read the confirmation details and click **Done** to return to the Mendix Portal. You will also receive a confirmation email at the email address entered in your order.

## Linking Your App to your Mendix Basic Node

After 48 hours, your Mendix Basic package will be provisioned as a new licensed node. You will receive an email at the address entered in your order; this email notifies you that your node is ready and directs you to documentation on how to use the node.

To link your app to your licensed node, follow the same process as for any other sort of license. For details on how to link your app, see the following documents:

* For brief instructions, see [How To Migrate a Free App to Mendix Basic](/developerportal/deploy/migrate-free-app-to-basic/)
* For full details, see [Linking Your App to a Licensed Node](/developerportal/deploy/licensing-apps/#licensed-node) in *Licensing Mendix Cloud Apps*

## Invoicing for your Basic Package

It takes about 14 days to prepare your invoice. The invoice is sent to the **Invoice Email** that you provide. 

For automatic orders, payment occurs when the package is ordered. For manual orders, payment is due within 30 days.

## Renewing Your Payment Method

Your plan automatically renews 12 months from the date of provision. You can opt out of auto-renewal 60 days before the period ends.

Before renewing the licenses for your company, Mendix checks if your company's payment method is still valid. If it is expired, you will receive an email that asks you to update your company's payment method on the **Billing Accounts** page.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/basic-package/billing-accounts-page.png" alt="billing accounts page" class="no-border" >}}

The **Billing Accounts** page shows the details of your company's existing billing accounts. These accounts are on the company level. If your company has multiple billing accounts, you can select a billing account from the drop-down list on the page.

You can find the **Payment Method** at the bottom of the page. Depending on the payment method, you will see either an invoice or the credit card data.

{{% alert color="info" %}}You might have used different credit cards with the same billing account when purchasing premium content at the Marketplace in the past. These cards are not shown here. The **Payment Method** section shows only the most recent credit card registered for your company's billing account. This card is also used to renew the existing subscriptions.{{% /alert %}}

If the credit card is expired, the credit card data is shown in red. To update the credit card data, click **Update**, fill in the new credit card data, and click **Update Details**.
