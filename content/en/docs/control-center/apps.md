---
title: "Apps"
url: /control-center/apps/
category: "Control Center"
description: "Describes the Apps page in the Mendix Control Center."
tags: ["control center", "mendix admin", "apps"]
weight: 15
no_list: true 
---

{{% alert color="info" %}}
A member in Control Center means a user of the Mendix platform who participates in the development process. It does not mean an end-user of an app built in the Mendix Platform.
{{% /alert %}}

## 1 Introduction

The **Apps** page shows you all the apps belonging to your company and allows you to manage default app roles in your company.

## 2 Mendix Cloud

The **Mendix Cloud** tab gives an overview of all the licensed apps on the Mendix Public Cloud.

You can customize the columns of the table by clicking the column selector (the eye icon) on the upper-righter corner of the table. The items selected are shown as columns.

{{< figure src="/attachments/control-center/apps/column-selection-public-cloud.png" >}}

The description of these items are as follows:

- **AppID**: the unique identifier of the app

- **App Name**: if  you click on this you go to the app details (reference)

- **Technical Contact**: the technical contact of the app. 

  {{% alert color="info" %}}
  You can edit the Technical Contact of an app by clicking the pencil icon next to the currect Technical Contact in the table.
  {{% /alert %}}

- **EnvID**: the unique identifier of the environment.

- **Environment**: the name of the environment.

- **Deployed Status**: whether the app has been deployed on this environment

- **Mainline Version**: the Mendix version of the app on the mainline in the repository

- **Deployed Version**: the Mendix version of the deployed app

- **Last Commit**: the last commit in any branch of the repository

- **Members**: the number of team members of the app

- **Production**: Whether the environment is a production environment

- **Created Date**: the date the app was created

The **Production** toggle on the upper-right corner enables you to only show apps that are deployed in the production environments.


## 3 Mendix Free Cloud

The Mendix Free Cloud tab shows all the apps that are deployed on the Mendix Free Cloud.

You can customize the columns of the table by clicking the column selector (the eye icon) on the upper-righter corner of the table. The items selected are shown as columns.

{{< figure src="/attachments/control-center/apps/column-selection-free-cloud.png" >}}

The description of these items are as follows:

- **AppID**: the unique identifier of the app

- **App Name**: if you click on this you go to the app details (reference)

- **Technical Contact**: the technical contact of the app. 

  {{% alert color="info" %}}
  You can edit the Technical Contact of an app by clicking the pencil icon next to the currect Technical Contact in the table.
  {{% /alert %}}

- **EnvID**: the unique identifier of the environment.

- **Deployed Status**: whether the app has been deployed on this environment

- **Mainline Version**: the Mendix version of the app on the mainline in the repository

- **Deployed Version**: the Mendix version of the deployed app

- **Last Commit**: the last commit in any branch of the repository

- **Members**: the number of team members of the app

- **Created Date**: the date the app was created

- **Actions**: adding the ellipsis icon (**...**) to enable you to **Deactivate App** and **Delete App**.

  {{% alert color="info" %}}
  For more information, see the [Deactivating and Deleting Apps](#deactivate-delete-apps) section.
  {{% /alert %}}

## 4 Other Apps

The **Other Apps** tab shows all the other apps. They are either deployed to other clouds or do not have an environment. 

{{% alert color="info" %}}
We are working on giving give every cloud its own tab.
{{% /alert %}}

You can customize the columns of the table by clicking the column selector (the eye icon) on the upper-righter corner of the table. The items selected are shown as columns.

{{< figure src="/attachments/control-center/apps/column-selection-other-apps.png" >}}

The description of these items are as follows:

- **AppID**: the unique identifier of the app

- **App Name**: if  you click on this you go to the app details (reference)

- **Members**: the number of team members of the app

- **Created Date**: the date the app was created

- **Actions**: adding the ellipsis icon (**...**) to enable you to **Deactivate App** and **Delete App**.

  {{% alert color="info" %}}
  For more information, see the [Deactivating and Deleting Apps](#deactivate-delete-apps) section.
  {{% /alert %}}

## 5 Deactivated Apps

The **Deactivated Apps** tab shows all the deactivated apps that belong to your company.

You can customize the columns of the table by clicking the column selector (the eye icon) on the upper-righter corner of the table. The items selected are shown as columns.

{{< figure src="/attachments/control-center/apps/column-selection-deactivated-apps.png" >}}

The description of these items are as follows:

- **AppID**: the unique identifier of the app
- **App Name**: if  you click on this you go to the app details (reference)
- **Members**: the number of team members of the app
- **Created Date**: the date the app was created
- **Actions**: adding the ellipsis icon (**...**) to enable you to **Deactivate App** and **Delete App**.

## 6 Default App Roles

The **Default App Roles** tab shows the default [team roles](/developerportal/general/app-roles/#team-roles) assigned for every new app created in your company. Hovering over a role brings up options to **Delete** and **Edit** the role. Click **Add Role** to add a new default role, which includes permissions on accessing [Team Server](/developerportal/general/team-server/) and [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) information.

{{< figure src="/attachments/control-center/apps/roles.jpg" >}}

## 7 Filtering Apps in the Table

On each tab with an table of apps, different filters are available on the top, which allows you to filter apps using different criteria. 

With the filter below, you can filter apps by the app ID, name, Mendix versions, Technical Contact, environment name, envirionment ID, mainline version, and, deployed version. Clicking the button on the left allows you to use comparisons and string operations, such as **Contains**, **Starts with**, and **Greater than**.

{{< figure src="/attachments/control-center/apps/filter-apps.png" >}}

With the filter below, you can filter apps by the date of the last commit. Clicking the button on the left allows you to use comparisons and string operations, such as **Between** and **Empty**.

{{< figure src="/attachments/control-center/apps/filter-last-commit.png" >}}

On the **Mendix Cloud** tab, there is one extra filter that allows you to filter apps by **Deployed Status**.

{{< figure src="/attachments/control-center/apps/filter-mendix-cloud.png" >}}

## 8 Viewing App Details {#app-details}

If you click the name of an app in the overview table, a page opens and shows the details of this app.

If the app is not a licensed app, you can see the **...** icon on the upper-right corner of the page. If the app is active, then you have the options to deactivate the app and delete the app; and if the app is deactivated, then you have the options to activate the app and delete the app.

{{% alert color="info" %}}
Deleting and deactivating apps is currently not supported for licensed apps or apps that are not running on Mendix Cloud. For the consequences of these operations, see the table in the [Overview of Apps](#overview) section.
{{% /alert %}} 

The app details page has the following tabs:

* **App Info** – This tab has the **Description** and **App ID** fields, which are also available on the [General Settings](/developerportal/collaborate/general-settings/) page for your app in the Developer Portal.
* **Members** – This tab presents the internal members and external members of the app.
  * You can directly deactivate an internal member from the app by clicking their name and selecting **Deactivate Member**.
  * For other member management options, click **Manage Members**, which will open the **Security** > [Team](/developerportal/general/team/#managing) page. As a Mendix Admin, you can also add yourself to a team via this page.
* **Environments** – This tab shows all Mendix Cloud environments. You can delete a free Mendix Cloud environment on this tab. Once the free environment is deleted, all data will be removed. However, the app team members can still access the associated app repository in the Developer Portal.
* **App Roles** – This tab presents the app team roles defined via the **Default App Roles** tab and/or customized for a particular app

## 9 Deactivating and Deleting Apps {#deactivate-delete-apps}

If you select one or more apps via the checkboxes in the table, a context menu appears at the bottom of the screen with options for deactivating apps (on the tabs with active apps) or activating apps (on the **Deactivated Apps** tab), and deleting an app.

{{% alert color="info" %}}
Deleting and deactivating apps is currently not supported for licensed apps or apps that are not running on Mendix Cloud. Therefore, you do not see these options on the **Mendix Cloud** tab or on the **Other Apps** tab if you select apps that are deployed on other environments.
{{% /alert %}}

{{% alert color="info" %}}
In the table, you can activate or deactivate up to 100 apps at a time and delete 1 app at a time.
{{% /alert %}}

The consequences of deactivating and deleting an app are as below:

|                                                             | Deactivating an App                                          | Deleting an App                                              |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| App code repository stays persistent                        | {{< figure src="/attachments/control-center/apps/check-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |
| App team members can access the app code repository         | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |
| App stays persistent                                        | {{< figure src="/attachments/control-center/apps/check-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |
| App team members can access the app in the Developer Portal | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |
| Cloud environment stays persistent                          | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |

## 10 Exporting Apps to an Excel file

On each tab with an table of apps, you can export information about apps to an Excel file. To do so, select the apps in the table, and click **Selection Export** below the table. 

To export information about all the apps in the table, click **Export All** on the upper-top corner. 

The Excel file covers the following columns: **AppId**, **AppName**, **TechnicalContact**, **Environment**, **DeployedStatus**, **MendixVersionOnMainline**, **DeployedMendixVersion**, **LastCommit**, **Members**, **Production**, **AppCreatedDate**, **CloudLocation**, **Fallback**, **CloudResourcePack**, **AppRAM**, **DbRAM**, **DbStorage**, **DbStorageExtra**, and **FileStorage**.
