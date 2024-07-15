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

The **Deployed Apps Overview** page shows all the apps within your company. You can use it to view an app's name, ID, Technical Contact, status, number of environments, and how many [cloud credits](/control-center/entitlements/#cloud-credits) are used if applicable. It also offers you a self-service tool to provision and offboard environments for apps on Mendix Cloud.

The **Deployed Apps Overview** page has the following tabs: [Mendix Cloud](#mendix-cloud), [Free Apps](#free-apps), and [Apps with License Keys](#apps-license-keys).

## 2 Mendix Cloud {#mendix-cloud}

The **Mendix Cloud** tab gives you an overview of all the apps that are deployed on Mendix Cloud and allows you to manage your cloud resources using the self-service tool.

{{% alert color="info" %}}
This feature is in beta. To see if this capability can be activated for your company, contact your Customer Success Manager.
{{% /alert %}}

{{% todo %}}Check what the following text refers to{{% /todo %}}

Click the icon in the top right corner to access the following pages that allow you to [make requests to Mendix Support](/support/submit-support-request/#submitting):

* [Resize Environment](/support/new-app-node-request-template/#resize) – requests a container size change
* [Offboard Environment](/support/new-app-node-request-template/#offboard) – requests that an app is offboarded

The list on this tab shows the following information:

* **App Name**: This is the name of the app. Click the name of an app goes to the [app environment details](#mendix-cloud-app-environment) page
* **Technical Contact** – This shows the registered email address for sending license keys to. If the Technical Contact is not correct, you can change it by clicking the pencil button next to the email address. You may only have one Technical Contact per app. When you change the Technical Contact, both the new and the old contact receive a notification email about the change.

* **Status**
* **Env Count**: This is the number of the environments available for this app.
* **Credits Used**: This shows the number of credits that the app has used.

### 2.1 App Environment Details {#mendix-cloud-app-environment}

If you click the name of an app in the list, a page opens and shows the app environment details.

{{< figure src="/attachments/control-center/deployed-apps/cloud-provisioning.png"  alt="cloud provisioning page for an app" >}}

On the top, you can see the app name, credits used, and the Technical Contact. The labels below show whether the app is licensed or active.

To quickly change the Technical Contact for your app, click **Edit** by the name of the contact, and then select the new contact from the list. You may only have one Technical Contact per app. When you change the Technical Contact, both the new and the old contact receive a notification email about the change.

On the right side above the list, you see the **Add Environment** button. You can click it to [add a new environment](#add-environment).

The list shows the all the environments available for the app, with the following columns:

* **Environment**: This is the name of the environment.
* **Resource Pack**: This is the resource pack selected for the environment.
* **Running State**: This shows whether the app is running or not deployed.
* **Production**: This shows whether the environment is a production environment.
* **URL**: This shows the URL of the environment.
* **Mendix Version**: 
* **Credits Used**: This shows the number of the credit that the environment has used.
* **Action**
  * **Offboard** – Clicking this button starts [offboarding an environment](#offboard-environment)

#### 2.2.1 Adding a New Environment {#add-environment}

To add a new environment for your app, click the name of an app, and then click the **Add Environment** button. You must specify the following information:

* **Environment Name** – Enter a name for your new environment. The name must be unique (that is, your app cannot have more than one environment with the same name).
* **Resource Pack** – Select the resources required for the new environment. The page displays the resources included in each resource pack, and their cost in cloud credits.
* **Production Environment** – Indicate whether the environment will be used for production.

{{< figure src="/attachments/control-center/deployed-apps/new-environment.png"   alt="adding a new environment" >}}

#### 2.2.2 Offboarding an Environment {#offboard-environment}

To offboard an environment, click **Offboard**, which is available for stopped environments. After that, confirm that you have made any necessary backups, and type *Offboard* to confirm.

{{< figure src="/attachments/control-center/deployed-apps/offboarding.png" width= 50% alt="confirming the offboarding" class="no-border" >}}

{{% alert color="warning" %}}
Offboarding an environment deletes it permanently. You are responsible for making a backup of the environment in case you need it in the future.
{{% /alert %}}

## 3 Free Apps {#free-apps}

The **Free Apps** tab shows all the apps deployed to Mendix Free Cloud.

{{% todo %}}Add info here.{{% /todo %}}

## 4 Apps with License Keys {#apps-license-keys}

The **Apps with License Keys** tab gives you an overview of all the apps for which you have been provided with a license key. This includes your apps deployed on Mendix for Private Cloud Standalone or any form of server-based deployments.

License keys are aligned with your contracts with Mendix and need to be applied by you to each individual app. Each app environment (such as test, acceptance, and production) needs its own license key.

{{% alert color="info" %}}When contracts are created or renewed, new license keys are automatically generated, which must be applied to the environments of the app the contract was changed for.{{% /alert %}}

To download all the license keys, click {{% icon name="download-bottom" %}} **Download all keys** on the right side above the list.

The list shows the following information:

* **App Name**: This is the name of the app. Note that the app names shown are the names that were initially given to these apps when license keys needed to be generated. Your current app names may differ. You can click on the app name to go to the [app environment details](#apps-license-keys-app-environment).
* **Technical Contact**: This shows the registered email address for sending license keys to. If the Technical Contact is not correct, you can change it by clicking the pencil button next to the email address. You may only have one Technical Contact per app. When you change the Technical Contact, both the new and the old contact receive a notification email about the change.
* **Created Date**: This is the date on which the app was originally created.
* **Actions**: You can carry out actions with the following icons:
  * **Email** icon ({{% icon name="email" %}})–  Clicking this will email the license keys of the corresponding app to the registered Technical Contact. 
  * **Download** button ({{% icon name="download-bottom" %}})– Clicking this downloads the license keys to your local computer. The license keys can then be applied to the app for which they were created. 

### 4.1 App Environment Details {#apps-license-keys-app-environment}

After clicking an app name in the list, a page opens and shows the environments that belong to that app, together with the license start and end dates. This page allows you to verify the validity of your license keys and download or email them to the Technical Contact of the app.

At the left top of the page, you see the name of the app, the email address of the Technical Contact, and the date that will be used as the license end date when new keys are generated.

To quickly change the Technical Contact for your app, click **Edit** by the name of the contact, and then select the new contact from the list. You may only have one Technical Contact per app. When you change the Technical Contact, both the new and the old contact receive a notification email about the change.

On the right side above the list, you can see two buttons:

*  {{% icon name="email" %}} **Email Keys** – Clicking this will email the license keys of the corresponding app to the registered Technical Contact. 

* {{% icon name="download-bottom" %}} **Download Keys** – Clicking this downloads the license keys to your local computer. The license keys can then be applied to the app for which they were created.

The list below show the details of the environments with the following columns:

* **Environment**: This shows the names of the environments that belong to the app that you selected.
* **ServerID**: This shows the server ids that have been used to generate the license keys for each environment.

* **LicenseID**: This is the id of the license that has been emailed to the Technical Contact when the license keys were generated. It is a unique identifier for the license that you might have stored for reference and you can match your license administration with the licenses for your environments.
* **Start Date** and **End Date**: These two columns show the dates between which your license keys are valid. Apps need active contracts with a contract end date in the future to keep working.

