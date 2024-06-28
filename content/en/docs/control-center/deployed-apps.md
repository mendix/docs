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

The **Deployed Apps Overview** page shows a list of all the apps within your company. You can use it to view an app's name, ID, Technical Contact, status, number of environments, and how many [cloud credits](/control-center/entitlements/#cloud-credits) are used. The page has separate tabs for **Mendix Cloud Apps** and **Free Apps**.

{{< figure src="/attachments/control-center/deployed-apps/apps-overview.png"   alt="Deployed Apps - apps overview" >}}

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
