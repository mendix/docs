---
title: "Deployed Apps"
url: /control-center/deployed-apps/
description: "Describes the Deployed Apps page in the Mendix Control Center."
weight: 55
no_list: true

---

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## 1 Introduction

The **Deployed Apps Overview** page is a self-service tool that enables you to provision and offboard environments.

The **Deployed Apps Overview** page shows a list of all the apps within your company. You can use it to view an app's name, ID, Technical Contact, status, number of environments, and how many [cloud credits](/control-center/entitlements/#cloud-credits) are used. The page has the following tabs: **Mendix Cloud**, **Free Apps**, and **Apps with License Keys**.

{{< figure src="/attachments/control-center/deployed-apps/apps-overview.png"   alt="Deployed Apps - apps overview" >}}

## 2 Mendix Cloud

The **Mendix Cloud** tab gives you an overview of all the apps that are deployed on Mendix Cloud.

The list shows the following information:

* **App Name**: This is the name of the app. Click the name of an app goes to the [app details](#mendix-cloud-app-details) page
* **Technical Contact** – This shows the registered email address for sending license keys to. If the Technical Contact is not correct, you can change it by clicking the pencil button next to the email address.
* **Status**
* **Env Count**
* **Credits Used**

You can click the name of an app to see a list of environments available for the app.

{{< figure src="/attachments/control-center/deployed-apps/cloud-provisioning.png"  alt="cloud provisioning page for an app" >}}

Click the icon in the top right corner to access the following pages that allow you to [make requests to Mendix Support](/support/submit-support-request/#submitting):

* [Resize Environment](/support/new-app-node-request-template/#resize) – requests a container size change
* [Offboard Environment](/support/new-app-node-request-template/#offboard) – requests that an app is offboarded

## 2 Adding a New Environment

To add a new environment for your app, click the name of an app, and then click the **Add Environment** button. You must specify the following information:

* **Environment Name** – Enter a name for your new environment. The name must be unique (that is, your app cannot have more than one environment with the same name).
* **Resource Pack** – Select the resources required for the new environment. The page displays the resources included in each resource pack, and their cost in cloud credits.
* **Production Environment** – Indicate whether the environment will be used for production.

{{< figure src="/attachments/control-center/deployed-apps/new-environment.png"   alt="adding a new environment" >}}

## 3 Offboarding an Environment

To offboard an environment, click **Offboard**, which is available for stopped environments. After that, confirm that you have made any necessary backups, and type *Offboard* to confirm.

{{< figure src="/attachments/control-center/deployed-apps/offboarding.png" width= 50% alt="confirming the offboarding" class="no-border" >}}

{{% alert color="warning" %}}
Offboarding an environment deletes it permanently. You are responsible for making a backup of the environment in case you need it in the future.
{{% /alert %}}

## 4 Changing the Technical Contact of an App

To quickly change the [Technical Contact](/developerportal/general/app-roles/#technical-contact) for your app, click **Edit** by the name of the contact, and then select the new contact from the list.

{{< figure src="/attachments/control-center/deployed-apps/edit-technical-contact.png" max-width=100%  alt="changing the technical contact" >}}

{{% alert color="info" %}}
You may only have one Technical Contact per app. When you change the Technical Contact, both the new and the old contact receive a notification email about the change.
{{% /alert %}}

## Apps with License Keys

The **Apps with License Keys** tab gives you an overview of all the apps that use license keys. License keys are aligned with your contracts with Mendix and need to be applied by you to each individual app. Each app environment (such as test, acceptance, and production) needs its own license key.

{{% alert color="info" %}}When contracts are created or renewed, new license keys are automatically generated, which must be applied to the environments of the app the contract was changed for.{{% /alert %}}

The list shows the following information:

* App Name: This is the name of the app. Note that the app names shown are the names that were initially given to these apps when license keys needed to be generated. Your current app names may differ. You can click on the app name to go to the [details of that app](https://mendix.atlassian.net/wiki/spaces/LM/pages/2892726366/Draft+Deployed+Apps+view+is+enhanced+for+apps+with+License+Keys#app_environments_screen).
* Technical Contact: This shows the registered email address for sending license keys to. If the Technical Contact is not correct, you can change it by clicking the pencil button next to the email address.
* Created Date: This is the date on which the app was originally created.
* Actions
  * Email icon –  Clicking the email button will email the license keys of the corresponding app to the registered Technical Contact. 
  * Download button – Clicking the download button downloads the license keys to your local computer. The license keys can then be applied to the app for which they were created. 

## App Environment Page

After clicking an app name in the list, the page with environments that belong to that app are shown, together with the license start and end dates. This page allows you to verify the validity of your license keys and download or email them to the Technical Contact of that app.

At the left top of the page, you see the name of the app, the email address of the Technical Contact, and the date that will be used as the license end date when new keys are generated.

On the right side above the list, you can see two buttons:

* Email Keys – 

* Download Keys –

The list below show the details of the environments with the following columns:

* Environment: This shows the names of the environments that belong to the app that you selected.
* ServerID: This shows the server ids that have been used to generate the license keys for each environment.

* LicenseID: This is the id of the license that has been emailed to the Technical Contact when the license keys were generated. It is a unique identifier for the license that you might have stored for reference and you can match your license administration with the licenses for your environments.
* Start Date and End Date: These two columns show the dates between which your license keys are valid. Apps need active contracts with a contract end date in the future to keep working.

