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

The **Deployed Apps Overview** page provides a comprehensive view of all the apps within your company. On this page, you can find detailed information about each app, including its name, ID, Technical Contact, status, number of environments, and the number of [cloud credits](/control-center/entitlements/#cloud-credits) used, if applicable. Additionally, this page allows you to provision and offboard environments for apps on Mendix Cloud. Moreover, you can email or download the license keys for your apps directly from this page.

The **Deployed Apps Overview** page has the following tabs: [Mendix Cloud](#mendix-cloud), [Free Apps](#free-apps), and [Apps with License Keys](#apps-license-keys).

If you click the **...** icon in the upper-right corner, you can access the following pages that allow you to [make requests to Mendix Support](/support/submit-support-request/#submitting):

* [Resize Environment](/support/new-app-node-request-template/#resize) – requests a container size change
* [Offboard Environment](/support/new-app-node-request-template/#offboard) – requests that an app is offboarded

## 2 Mendix Cloud {#mendix-cloud}

The **Mendix Cloud** tab gives you an overview of all the apps that are deployed on Mendix Cloud and allows you to manage your cloud resources using the self-service tool.

{{% alert color="info" %}}
This feature is in beta. To see if this capability can be activated for your company, contact your Customer Success Manager.
{{% /alert %}}

The list on this tab shows the following information:

* **App Name** – This is the name of the app. Click the name of an app goes to the [app environment details](#mendix-cloud-app-environment) page
* **Technical Contact** – This shows the registered email address for sending license keys to. If the Technical Contact is not correct, you can change it by clicking the edit icon ({{% icon name="pencil" %}}) next to the email address. You may only have one Technical Contact per app. When you change the Technical Contact, both the new and the old contact receive a notification email about the change.

* **Status** – This shows whether app is active or not.
* **Env Count** – This is the number of the environments available for this app.
* **Credits Used** – This shows the number of credits that the app has used.

### 2.1 App Environment Details {#mendix-cloud-app-environment}

If you click the name of an app in the list, a page opens and shows the app environment details.

{{< figure src="/attachments/control-center/deployed-apps/cloud-provisioning.png"  alt="cloud provisioning page for an app" >}}

On the top, you can see the app name, credits used, and the Technical Contact. The labels below show whether the app is licensed or active.

To quickly change the Technical Contact for your app, click **Edit** by the name of the contact, and then select the new contact from the list. You may only have one Technical Contact per app. When you change the Technical Contact, both the new and the old contact receive a notification email about the change.

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

The list shows the following information:

* **App Name** – This is the name of the app.
* **App ID** – This shows the app ID.
* **Technical Contact** – This shows the registered email address for sending license keys to. If the Technical Contact is not correct, you can change it by clicking the edit icon ({{% icon name="pencil" %}}) next to the email address. You may only have one Technical Contact per app. When you change the Technical Contact, both the new and the old contact receive a notification email about the change.

* **Status** – This shows whether app is active or not.

## 4 Apps with License Keys {#apps-license-keys}

The **Apps with License Keys** tab provides an overview of all apps for which license keys have been issued. You can find the latest version of these keys for all environments here, including Mendix for Private Cloud Standalone and other server-based setups.This tab also allows you to manage license keys for all on-premises deployed apps.

{{% alert color="info" %}}
For more information, see [Guidelines for Applying Mendix License Keys to App Environments](#guidelines).
{{% /alert %}}

On the **Apps with License Keys** tab, you can do the following:

- View your apps with issued license keys.
- See active license keys for all environments of an app.
- Delete license keys for environments that are no longer in use.
- Resend licenses to the Technical Contacts of your on-premises deployed apps or download all licenses to your local device.
- Quickly change Technical Contacts for these apps and resend keys as needed.

To download all the license keys, click {{% icon name="download-bottom" %}} **Download all keys** on the right side above the list.

The list shows the following information:

* **App Name** – This is the name of the app. Note that the app names shown are the names that were initially given to these apps when license keys needed to be generated. Your current app names may differ. You can click on the app name to go to the [app environment details](#apps-license-keys-app-environment).
* **Technical Contact** – This shows the registered email address for sending license keys to. If the Technical Contact is not correct, you can change it by clicking the edit icon ({{% icon name="pencil" %}}) next to the email address. You may only have one Technical Contact per app. When you change the Technical Contact, both the new and the old contact receive a notification email about the change.
* **Created Date** – This is the date on which the app was originally created.
* **Actions** – You can carry out actions with the following icons:
  * {{% icon name="email" %}} – Clicking this emails the license keys of the corresponding app to the registered Technical Contact. 
  * {{% icon name="download-bottom" %}} – Clicking this downloads the license keys to your local computer. The license keys can then be applied to the app for which they were created. 

### 4.1 App Environment Details {#apps-license-keys-app-environment}

After clicking an app name in the list, a page opens and shows the environments that belong to that app, together with the license start and end dates. This page allows you to verify the validity of your license keys and download or email them to the Technical Contact of the app.

At the upper-left corner the page, you see the name of the app, the email address of the Technical Contact, and the date that will be used as the license end date when new keys are generated.

To quickly change the Technical Contact for your app, click the edit icon ({{% icon name="pencil" %}}) by the name of the contact, and then select the new contact from the list. You may only have one Technical Contact per app. When you change the Technical Contact, both the new and the old contact receive a notification email about the change.

On the right side above the list, you can see two buttons:

*  {{% icon name="email" %}} **Email Keys** – Clicking this emails the license keys of the corresponding app to the registered Technical Contact. 

* {{% icon name="download-bottom" %}} **Download Keys** – Clicking this downloads the license keys to your local computer. The license keys can then be applied to the app for which they were created.

The list below show the details of the environments with the following columns:

* **Environment** – This shows the names of the environments that belong to the app that you selected.
* **ServerID** – This shows the server IDs that were used to generate the license keys for each environment.
* **LicenseID** – This shows the ID of the license that was emailed to the Technical Contact when the license keys were generated. This unique identifier allows you to reference and manage your licenses, ensuring they align with the licenses in your various environments.
* **Start Date** and **End Date** – These two columns show the dates between which your license keys are valid. Apps need active contracts with a future end date to keep working.
* **Actions**– You can carry out an action with the following icon:
  * {{% icon name="trash-can" %}} – Clicking this offboards that license from the database. Before the action is completed, a dialog box opens to ask for your confirmation. When the last license of an app is offboarded, the app is automatically offboarded and will no longer show up on the **Apps with Licensed Keys** tab.

### 4.2 Guidelines for Applying Mendix License Keys to App Environments {#guidelines}

License keys are aligned with your contracts with Mendix and need to be applied by you to each individual app. Each app environment (such as test, acceptance, and production) needs its own license key.

For details on how to apply license keys, see [How to Activate a Mendix License](https://docs.mendix.com/developerportal/deploy/licensing-apps-outside-mxcloud/#activate-mendix-license). Any changes to licenses will require the Technical Contacts of these apps to reapply license keys to their respective app environments.

When contracts are created or renewed, new license keys are automatically generated. These new license keys must be applied to the environments of the app for which the contract was changed.

### 4.3 Frequent Asked Questions {#license-keys-faq}

#### 4.3.1 How Do I Know If My Company Uses License Keys?

Several deployment options require you to manually apply license keys to your app environments. For details, see [How to Activate a Mendix License](/developerportal/deploy/licensing-apps-outside-mxcloud/#activate-mendix-license).

In some exceptional cases, you may also receive license keys for other deployment models. Your Mendix Admins should be aware of these.

You can find the latest version of license keys created for your apps on the **Apps with Licensed Keys** tab on the **Deployed Apps** page in Control Center.

#### 4.3.2 Do These Unrecognized Apps and License Keys Belong to Us?

Yes, all apps and license keys visible in Control Center belong to your account. These keys have been requested by the Technical Contact of the apps. If there are apps or app environments that are no longer active, you should delete them from the list.

If you have any doubts, contact Mendix Support.

#### 4.3.3 Why Are Unused or Unrecognized App Names Still in the List? How Can I Correct This?

These apps still appear in Control Center because they were not formally offboarded. You can easily offboard these apps by removing the keys associated with the environments of the app.

#### 4.3.4 Why Are Some Apps Hosted via License Keys Not Shown in the List?

There might be multiple reasons for this. However, it is likely that your app is using incorrect license keys for the app environments. Try the following:

1. [Request new license keys](https://newnode.mendix.com/) for the app environments.
2. Download the keys.
3. Follow the instructions in [How to Activate a Mendix License](#activate-mendix-license) to reapply keys for apps with discrepancies.

#### 4.3.5 How Can My License End Date Differ from My License Keys End Date?

The license keys end date is configured to match your Mendix contract end date. These license keys are published on Control Center and have correct dates.

In case of discrepancy, download the keys and follow the normal procedure to reapply keys for apps with discrepancies.

#### 4.3.6 Do I Have to Download New License Keys Once I Renew My Contract?

Upon renewal of your Mendix contract, new license keys will be automatically emailed to the Technical Contact of your apps. Additionally, Mendix administrators can also download them from the License Keys view on Control Center.

#### 4.3.7 Do I Have to Manually Activate License Keys After Contract Renewal?

Yes, you need to manually apply new license keys to your app after renewing your contract. For further details, see [Deployment](/deployment/).

#### 4.3.8 What Happens If I Do Not Update My License Keys After the License Key End Date? Will I Lose My Data?

After the end date of the license key has passed, your apps enter a 30-day grace period. During this grace period, the app will continue to run normally using the expired license. However, you may notice extra warning messages in the app logs during this period.

If you do not update your keys by the end of this period, your app may be forcefully stopped by the Mendix runtime. Upon restart, the app will switch to trial mode and will follow the limitations of trial mode. For details of license limitations, see [How to License Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

#### 4.3.9 My App Stopped Working Because the License Key Expired. What Should I Do?

Contact your Customer Success Manager (CSM) to renew your contract.
