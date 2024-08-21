---
title: "Deployed Apps"
url: /control-center/deployed-apps/
description: "Describes the Deployed Apps page in the Mendix Control Center."
weight: 55
beta: true
no_list: true

---

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

The **Deployed Apps Overview** page provides a comprehensive view of all the apps within your company. On this page, you can find detailed information about each app, including its name, ID, Technical Contact, status, number of environments, and the number of [cloud credits](/control-center/entitlements/#cloud-credits) used, if applicable. Additionally, this page allows you to provision and offboard environments for apps on Mendix Cloud. Moreover, you can email or download the license keys for your apps directly from this page.

The **Deployed Apps Overview** page has the following tabs: [Mendix Cloud](#mendix-cloud), [Free Apps](#free-apps), and [Apps with License Keys](#apps-license-keys).

If you click the **...** icon in the upper-right corner, you can access the following pages that allow you to [make requests to Mendix Support](/support/submit-support-request/#submitting):

* [Resize Environment](/support/new-app-node-request-template/#resize) – requests a container size change
* [Offboard Environment](/support/new-app-node-request-template/#offboard) – requests that an app is offboarded

## Mendix Cloud {#mendix-cloud}

The **Mendix Cloud** tab gives you an overview of all the apps that are deployed on Mendix Cloud and allows you to manage your cloud resources using the self-service tool.

{{% alert color="info" %}}
This feature is in beta. To see if this capability can be activated for your company, contact your Customer Success Manager.
{{% /alert %}}

The list on this tab shows the following information:

* **App Name** – This is the name of the app. To view the [app environment details](#mendix-cloud-app-environment), click the app name.
* **Technical Contact** – This shows the registered email address for sending license keys to. If the Technical Contact is not correct, you can change it by clicking the edit icon ({{% icon name="pencil" %}}) next to the email address. Every app can only have one Technical Contact. After you change the Technical Contact, both the new and the old contact receive a notification email about the change.

* **Status** – This shows whether app is active or not.
* **Env Count** – This is the number of the environments available for this app.
* **Credits Used** – This shows the number of credits that the app has used.

### App Environment Details {#mendix-cloud-app-environment}

If you click the name of an app in the list, a page opens and shows the app environment details.

{{< figure src="/attachments/control-center/deployed-apps/cloud-provisioning.png"  alt="cloud provisioning page for an app" >}}

On the top, you can see the app name, credits used, and the Technical Contact. The labels below show whether the app is licensed or active.

To quickly change the Technical Contact for your app, click **Edit** by the name of the Technical Contact, and then select the new Technical Contact from the list. Every app can only have one Technical Contact. After you change the Technical Contact, both the new and the old contact receive a notification email about the change.

On the right side above the list, you see the **Add Environment** button. You can click it to [add a new environment](#add-environment).

The list shows the all the environments available for the app, with the following columns:

* **Environment** – This is the name of the environment.
* **Resource Pack** –This is the resource pack selected for the environment.
* **Running State** – This shows whether the app is running or not deployed.
* **Production** – This shows whether the environment is a production environment.
* **URL** – This shows the URL of the environment.
* **Mendix Version** – This shows the Mendix version.
* **Credits Used** – This shows the number of the credit that the environment has used.
* **Action**
    * **Offboard** – Clicking this button starts [offboarding an environment](#offboard-environment)

#### Adding a New Environment {#add-environment}

To add a new environment for your app, click the name of an app, and then click the **Add Environment** button. You must specify the following information:

* **Environment Name** – Enter a name for your new environment. The name must be unique (that is, your app cannot have more than one environment with the same name).
* **Resource Pack** – Select the resources required for the new environment. The page displays the resources included in each resource pack, and their cost in cloud credits.
* **Production Environment** – Indicate whether the environment will be used for production.

{{< figure src="/attachments/control-center/deployed-apps/new-environment.png"   alt="adding a new environment" >}}

#### Offboarding an Environment {#offboard-environment}

To offboard an environment, click **Offboard**, which is available for stopped environments. After that, confirm that you have made any necessary backups, and type *Offboard* to confirm.

{{< figure src="/attachments/control-center/deployed-apps/offboarding.png" width= 50% alt="confirming the offboarding" class="no-border" >}}

{{% alert color="warning" %}}
Offboarding an environment deletes it permanently. You are responsible for making a backup of the environment in case you need it in the future.
{{% /alert %}}

## Free Apps {#free-apps}

The **Free Apps** tab shows all the apps deployed to Mendix Free Cloud.

The list shows the following information:

* **App Name** – This is the name of the app.
* **App ID** – This shows the app ID.
* **Technical Contact** – This shows the registered email address for sending license keys to. If the Technical Contact is not correct, you can change it by clicking the edit icon ({{% icon name="pencil" %}}) next to the email address. Every app can only have one Technical Contact. After you change the Technical Contact, both the new and the old contact receive a notification email about the change.

* **Status** – This shows whether app is active or not.

## Apps with License Keys {#apps-license-keys}

The **Apps with License Keys** tab provides an overview of all apps for which license keys have been issued to their respective key contacts. You can find the latest version of license keys for these app environments here. This includes all your apps deployed on Mendix for Private Cloud Standalone, Docker, Cloud Foundry buildpack, and on-premises environments. 

License keys here are aligned with your contracts with Mendix and need to be applied by you to each individual app. Each app environment (such as test, acceptance, and production) needs its own license key. Any changes to licenses require the Technical Contacts to reapply license keys to their respective app environments. For example, when contracts are created or renewed, new license keys are automatically generated. Then these new license keys must be applied to the environments of the app for which the contract was changed. For details on how to apply license keys, see the [Activating a Mendix License](/developerportal/deploy/licensing-apps-outside-mxcloud/#activate-mendix-license) section in *Licensing Apps*.

On the **Apps with License Keys** tab, you can do the following:

* View your apps with issued license keys.
* See active license keys for all environments of an app.
* Delete license keys for environments that are no longer in use.
* Resend licenses to the Technical Contacts of your on-premises deployed apps or download all licenses to your local device.
* Quickly change Technical Contacts for these apps and resend keys as needed.

You can download all the license keys by clicking {{% icon name="download-bottom" %}} **Download all keys** on the right side above the list.

The list shows the following information:

* **App Name** – This is the name of the app. To view [app environment details](#apps-license-keys-app-environment), click the app name.

    {{% alert color="info" %}}The app name shown here is the name that was initially given to the app when the license keys were generated. Your current app name may be different.{{% /alert %}}

* **Technical Contact** – This shows the registered email address to which the license keys are sent. If the Technical Contact is not correct, you can change it by clicking the edit icon ({{% icon name="pencil" %}}) next to the email address. Every app can only have one Technical Contact. After you change the Technical Contact, both the new and the old contact receive a notification email about the change.

* **Created Date** – This is the date on which the app was originally created.

* **Actions** – You can carry out actions with the following icons:
    * {{% icon name="email" %}} – Clicking this emails the license keys of the app to the registered Technical Contact. 
    * {{% icon name="download-bottom" %}} – Clicking this downloads the license keys to your local computer. The license keys can then be applied to the app for which they were created. 

### App Environment Details {#apps-license-keys-app-environment}

After clicking an app name in the list, a page opens and shows the environments that belong to that app, together with the license start and end dates. This page allows you to verify the validity of your license keys and download or email them to the Technical Contact of the app.

At the upper-left corner the page, you see the name of the app, the email address of the Technical Contact, and the date that will be used as the license end date when new keys are generated.

To quickly change the Technical Contact for your app, click the edit icon ({{% icon name="pencil" %}}) by the name of the Technical Contact, and then select the new Technical Contact from the list. Every app can only have one Technical Contact. After you change the Technical Contact, both the new and the old contact receive a notification email about the change.

On the right side above the list, you can see the following buttons:

* {{% icon name="email" %}} **Email Keys** – Clicking this emails the license keys of the app to the registered Technical Contact. 

* {{% icon name="download-bottom" %}} **Download Keys** – Clicking this downloads the license keys to your local computer. The license keys can then be applied to the app for which they were created.

The list below show the details of the environments with the following columns:

* **Environment** – This shows the names of the environments that belong to the app that you selected.
* **ServerID** – This shows the server IDs that were used to generate the license keys for each environment.
* **LicenseID** – This shows the ID of the license that was emailed to the Technical Contact when the license keys were generated. This unique identifier allows you to reference and manage your licenses, ensuring they align with the licenses in your various environments.
* **Start Date** and **End Date** – Your license keys are valid between these two dates. An app needs an active contract with a future end date to keep working.
* **Actions** – You can carry out an action with the following icon:
    * {{% icon name="trash-can" %}} – Clicking this offboards that license from the database. Before the action is completed, a dialog box opens to ask for your confirmation. When the last license of an app is offboarded, the app is automatically offboarded and will no longer show up on the **Apps with License Keys** tab.

### Frequent Asked Questions {#license-keys-faq}

#### How Do We Know If Our Company Has Apps with Issued License Keys?

The latest version of license keys created for the apps are shown on the **Apps with License Keys** tab on the **Deployed Apps** page in Control Center.

Several deployment options require the Technical Contact to manually apply license keys to the app environments. For details on how to apply license keys, see the [Activating a Mendix License](/developerportal/deploy/licensing-apps-outside-mxcloud/#activate-mendix-license) section in Licensing Apps.

In some exceptional cases, the Technical Contact may also receive license keys for other deployment models. As a Mendix Admin, you are aware of these.

#### Do These Unrecognized Apps and License Keys Belong to Us?

Yes, all apps and license keys visible in Control Center belong to your company. These keys have been requested by the Technical Contact of the apps. If there are apps or app environments that are no longer active, you should delete them from the **Apps with License Keys** tab on the **Deployed Apps** page in Control Center.

If you have any doubts, contact Mendix Support.

#### Why Are Unused or Unrecognized App Names Still in Control Center? How Can We Correct This?

Some apps still appear on the **Apps with License Keys** tab on the **Deployed Apps** page in Control Center, because they were not formally offboarded. You can easily offboard these apps by removing the license keys associated with the environments of the app.

#### Why Are Some Apps Hosted via License Keys Not Shown in Control Center?

There might be multiple reasons for this. However, it is likely that your app is using incorrect license keys for the app environments. To fix the issue, ask the Technical Contacts of these apps do the following:

1. [Request new license keys](https://newnode.mendix.com/) for the app environments.
2. Download the license keys.
3. Reapply license keys for apps with discrepancies. For details on how to apply license keys, see the [Activating a Mendix License](/developerportal/deploy/licensing-apps-outside-mxcloud/#activate-mendix-license) section in *Licensing Apps*.

#### How Can Our License End Date Differ from Our License Keys End Date? How to Correct this?

The end date of license keys is configured to match your Mendix contract end date. These license keys are published in Control Center and have correct dates.

In case of discrepancy, email the license keys to the Technical Contacts of these apps, and ask them to reapply the license keys for the apps with discrepancies. For details on how to apply license keys, see the [Activating a Mendix License](/developerportal/deploy/licensing-apps-outside-mxcloud/#activate-mendix-license) in *Licensing Apps*.

#### Do We Have to Download New License Keys Once We Renew Our Contract?

Upon renewal of a Mendix contract, new license keys will be automatically emailed to the Technical Contacts of the apps. Additionally, you can also download them on the **Apps with License Keys** tab on the **Deployed Apps** page in Control Center.

#### Do We Have to Manually Activate License Keys After Contract Renewal?

Yes, the Technical Contact of the app needs to manually apply new license keys to the app after the contract is renewed. For details on how to apply license keys, see the [Activating a Mendix License](/developerportal/deploy/licensing-apps-outside-mxcloud/#activate-mendix-license) in *Licensing Apps*.

#### What Happens If We Do Not Update Our License Keys After the License Key End Date? Will We Lose Our Data?

After the end date of the license key has passed, your apps enter a 30-day grace period. During this grace period, the app will continue to run normally using the expired license. However, you may notice extra warning messages in the app logs during this period.

If the Technical Contact of the app does not update the license keys by the end of this period, the app may be forcefully stopped by the Mendix runtime. Upon restart, the app will switch to trial mode and will follow the limitations of trial mode. For details of license limitations, see [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

#### Our App Stopped Working Because the License Key Expired. What Should We Do?

Contact your Customer Success Manager (CSM) to renew your contract.
