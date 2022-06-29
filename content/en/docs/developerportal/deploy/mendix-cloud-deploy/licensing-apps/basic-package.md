---
title: "Mendix Basic Package"
url: /developerportal/deploy/basic-package/
weight: 20
description: "Obtaining a Mendix Basic Package Node"
tags: ["App", "Node", "Developer Portal", "Licensed", "Free App", "Upgrade", "Basic Package", "Basic license"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

To run Mendix apps in production on the Mendix Cloud, they must be linked to a licensed node. Without a licensed node you can still deploy your app and test it, however it will only run for a couple of hours before shutting down, cannot be scaled and has limited operational information available.

If you have an app which you want to license, you can do this simply and cost-effectively by ordering the **Mendix Basic** package. This can be done online.

{{% alert color="info" %}}
Your order is made immediately but the provisioning of your licensed node will take 48 hours.
{{% /alert %}}

## 2 Features of the Basic Package

The basic package has the following features.

* Runs in the Mendix Cloud
* Supports between five and a hundred (5-100) users
* Can be paid for via invoice only
* Has a limited amount of resources and a single cloud environment on Mendix Cloud V4, together with the ability to preview and test in Studio Pro and Studio. The cloud environment has the following features:
    * 1GB App RAM
    * 0.25 vCPU
    * 1GB database schema as a part of a shared database — your schema is private to your app and some database monitoring graphs are not available (see [Trends in Mendix Cloud v4](/developerportal/operate/trends-v4/) for more information)
    * 1GB file storage for `FileDocument` and `Image` entities
* The regular Mendix [Service Level Agreement](https://www.mendix.com/wp-content/uploads/Mx_ServiceLevelAgreement_v2018-01.pdf) applies, but please note the following:
    * You cannot get telephone support: access to support is via the [Mendix support website](https://support.mendix.com) only.
    * Support is only available for general platform issues – Mendix support cannot give help on problems with individual apps.

## 3 Purchasing a Basic Package

Select your Free App in the Developer Portal, and click **Environments** in the left-hand menu.

When you view your Free App environment, you will see a banner showing that you are using a Free App.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/basic-package/free-app-message.png" alt="Free App banner" >}}

To order your Mendix Basic package, do the following:

1. Click the **Learn More** button.

2. Review the features of Mendix Basic and click **Upgrade Now**.

3. Configure the Basic Package by choosing the following:

    * **Select the application you would like to upgrade** – this will default to the current Free App, but you can choose another of your Free Apps using the dropdown
    * **URL you want to use to access your app** – choose your preferred subdomain of `.mendixcloud.com`, this is where users can find your app
    * **Select the region to deploy your app** – choose your preferred region, we recommend the region where you expect to receive most visitors — these regions correspond to AWS regions
    * **Fill in the number of Users** – the cost of your basic package relates to the number of users

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/basic-package/configure-basic-package.png" alt="Configuration screen" >}}

    You can see a summary of your basic package on the right-hand side of the screen.

4. Click **Continue**

5. Enter the invoice details.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/basic-package/invoice-details.png" alt="Invoice details entry screen" >}}

    {{% alert color="info" %}}Ensure that the **Email Address** is monitored. Mendix will use this to send further information about your Mendix Basic package.{{% /alert %}}

6. Click **Continue**.

7. Review your order and make any changes needed.

8. Click to agree to the **Terms & Conditions**.

    {{% alert color="info" %}}The license will take 48 hours to provision.<br />You will receive your invoice 7-14 days after you submit your order.{{% /alert %}}

9. Click **Order Now** to complete your order.

10. Read the confirmation details and click **Done** to return to the Developer Portal.

    You will also receive confirmation email at the address entered in your order.

## 4 Linking Your App to your Mendix Basic Node

After 48 hours, your Mendix Basic package will be provisioned as a new licensed node. You will receive an email at the address entered in your order informing you that this has happened and linking you to the documentation on how to use the node.

Linking your app to your licensed node is done in the same way as for any other sort of license. See the following documents for more information on how to do this:

* [How To Migrate a Free App to Mendix Basic](/developerportal/deploy/migrate-free-app-to-basic/) for brief instructions
* [Linking Your App to a Licensed Node](/developerportal/deploy/licensing-apps/#licensed-node) in *Licensing Mendix Cloud Apps* for full details

## 5 Invoicing for your Basic Package

It will take 7-14 days to prepare your invoice. This will be sent to the address that you entered as the **invoice Email Address**.

Our payment terms are 30 days.
