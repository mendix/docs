---
title: "Apps"
url: /control-center/apps/
category: "Control Center"
description: "Describes the Apps page in the Mendix Control Center."
tags: ["control center", "mendix admin", "apps"]
weight: 15
no_list: true
aliases:
    - /developerportal/company-app-roles/users.html
    - /developerportal/company-app-roles/users
---

## 1 Introduction

The **Apps** page shows you all the apps belonging to your company. It also allows you to manage default app roles in your company.

The **Apps** page has the following tabs available: **Mendix Cloud**, **Mendix Free Cloud**, **Other Apps**, **Deactivated Apps**, and **Default App Roles**.

{{% alert color="info" %}}
We are working on giving private clouds a separate tab. Stay tuned.
{{% /alert %}}

## 2 Mendix Cloud

The **Mendix Cloud** tab gives an overview of all the licensed apps that can be published on the Mendix Public Cloud.

By default you only see apps and their production environments. Turn off the **Production** toggle on the right side above the table to see all the environments.

You can customize the columns of the table by clicking the column selector (the {{% icon name="view" %}} icon) on the upper-right corner of the table. The items selected are shown as columns in the table.

{{< figure src="/attachments/control-center/apps/column-selection-public-cloud.png" >}}

The description of the items that you can select are as follows:

* **AppID**: the unique identifier of the app

* **App Name**: the name of the app

  {{% alert color="info" %}}
  You can view the [app details](#app-details) by clicking the app name in the table.
  {{% /alert %}}

* **Technical Contact**: the technical contact of the app. 

  {{% alert color="info" %}}
  You can edit the Technical Contact of an app by clicking **Edit** ({{% icon name="pencil" %}}) next to the current Technical Contact in the table.
  {{% /alert %}}

* **EnvID**: the unique identifier of the environment.

* **Environment**: the name of the environment.

* **Deployed Status**: whether the app has been deployed on this environment

* **Mainline Version**: the Mendix version of the app on the mainline in the repository

* **Deployed Version**: the Mendix version of the app deployed on this environment

* **Last Commit**: the date of the last commit in the main line

* **Members**: the number of the team members in the app development team

* **Production**: Whether the environment is a production environment

* **Created Date**: the date the app was created

You can filter the apps in the table. For details, see the [Filtering Apps in the Table](#filter-apps)section.

You can export apps to an Excel file. For details, see the [Exporting Apps to an Excel File](#export-to-excel) section.

## 3 Mendix Free Cloud

The **Mendix Free** Cloud tab shows all the free apps that are deployed on the Mendix Cloud.

You can customize the columns of the table by clicking the column selector (the {{% icon name="view" %}} icon) on the upper-right corner of the table. The items selected are shown as columns in the table.

{{< figure src="/attachments/control-center/apps/column-selection-free-cloud.png" >}}

The description of the items that you can select are as follows:

* **AppID**: the unique identifier of the app

* **App Name**: the name of the app

  {{% alert color="info" %}}
  You can view the [app details](#app-details) by clicking the app name in the table.
  {{% /alert %}}

* **Technical Contact**: the technical contact of the app. 

  {{% alert color="info" %}}
  You can edit the Technical Contact of an app by clicking **Edit** ({{% icon name="pencil" %}}) next to the current Technical Contact in the table.
  {{% /alert %}}

* **EnvID**: the unique identifier of the environment.

* **Deployed Status**: whether the app has been deployed on this environment

* **Mainline Version**: the Mendix version of the app on the mainline in the repository

* **Deployed Version**: the Mendix version of the deployed app

* **Last Commit**: the date of the last commit in the main line

* **Members**: the number of the team members in the app development team

* **Created Date**: the date the app was created

* **Actions**: adding the action menu ({{% icon name="three-dots-menu-horizontal" %}}) to enable you to **Deactivate App** and **Delete App** (For more information, see the [Deactivating and Deleting Apps](#deactivate-delete-apps) section.)

You can filter the apps in the table. For details, see the [Filtering Apps in the Table](#filter-apps) section.

When you select the apps via the checkboxes in the table, a context menu appears at the bottom of the screen with the options for deactivating and deleting apps. For details, see [Deactivating and Deleting Apps](#deactivate-delete-apps) section.

You can export apps to an Excel file. For details, see the [Exporting Apps to an Excel File](#export-to-excel) section.

## 4 Other Apps

The **Other Apps** tab shows the unlicensed apps that are not deployed and the apps that are linked to  private clouds. 

{{% alert color="info" %}}
We are working on giving private clouds a separate tab. Stay tuned.
{{% /alert %}}

You can customize the columns of the table by clicking the column selector (the {{% icon name="view" %}} icon) on the upper-right corner of the table. The items selected are shown as columns in the table.

{{< figure src="/attachments/control-center/apps/column-selection-other-apps.png" >}}

The description of the items that you can select are as follows:

* **AppID**: the unique identifier of the app
* **App Name**: the name of the app

  {{% alert color="info" %}}
  You can view the [app details](#app-details) by clicking the app name in the table.
  {{% /alert %}}
* **Last Commit**: the date of the last commit in the main line
* **Members**: the number of the team members in the app development team
* **Created Date**: the date the app was created
* **Actions**: adding the action menu ({{% icon name="three-dots-menu-horizontal" %}}) to enable you to **Deactivate App** and **Delete App**. (For more information, see the [Deactivating and Deleting Apps](#deactivate-delete-apps) section.)

You can filter the apps in the table. For details, see the [Filtering Apps in the Table](#filter-apps)section.

When you select the apps via the checkboxes in the table, a context menu appears at the bottom of the screen with the options for deactivating and deleting apps. For details, see [Deactivating and Deleting Apps](#deactivate-delete-apps) section.

You can export apps to an Excel file. For details, see the [Exporting Apps to an Excel File](#export-to-excel) section.

## 5 Deactivated Apps

The **Deactivated Apps** tab shows all the deactivated apps that belong to your company.

You can customize the columns of the table by clicking the column selector (the {{% icon name="view" %}} icon) on the upper-right corner of the table. The items selected are shown as columns in the table.

{{< figure src="/attachments/control-center/apps/column-selection-deactivated-apps.png" >}}

The description of the items that you can select are as follows:

* **AppID**: the unique identifier of the app
* **App Name**: the name of the app

  {{% alert color="info" %}}
  You can view the [app details](#app-details) by clicking the app name in the table.
  {{% /alert %}}
* **Created Date**: the date the app was created
* **Mainline Version**: the Mendix version of the app on the mainline in the repository
* **Last Commit**: the date of the last commit in the main line
* **Members**: the number of the team members in the app development team
* **Actions**: adding the action menu ({{% icon name="three-dots-menu-horizontal" %}}) to enable you to **Activate App** and **Delete App**. (For more information, see the [Deactivating and Deleting Apps](http://localhost:1313/control-center/apps/#deactivate-delete-apps) section.)

You can filter the apps in the table. For details, see the [Filtering Apps in the Table](#filter-apps)section.

When you select the apps via the checkboxes in the table, a context menu appears at the bottom of the screen with the option for activating and deleting apps. After you activate an app, the app will appear on the corresponding tab. For details about deleting apps, see [Deactivating and Deleting Apps](#deactivate-delete-apps) section.

You can export apps to an Excel file. For details, see the [Exporting Apps to an Excel File](#export-to-excel) section.

## 6 Default App Roles

The **Default App Roles** tab shows the default [team roles](/developerportal/general/app-roles/#team-roles) assigned for every new app created in your company. Hovering over a role brings up options to **Delete** and **Edit** the role. Click **Add Role** to add a new default role, which includes permissions on accessing [Team Server](/developerportal/general/team-server/) and [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) information.

{{< figure src="/attachments/control-center/apps/roles.jpg" >}}

## 7 Filtering Apps in the Table {#filter-apps}

On each tab with an table of apps, you can find filters on the top, which allows you to filter apps using different criteria. 

With the filter as shown below, you can search for string matches on any of the string fields in the table, for example, the app ID, app name, or environment name. Clicking the button on the left allows you to use comparisons and string operations, such as **Contains**, **Starts with**, and **Greater than**. (This filter is available on the **Mendix Cloud**, **Mendix Free Cloud**, and **Other Apps** tabs.)

{{< figure src="/attachments/control-center/apps/filter-apps.png" >}}

With the filter as shown below, you can filter apps by the date of the last commit. Clicking the button on the left allows you to use comparisons and string operations, such as **Between** and **Empty**. (This filter is available on the **Mendix Cloud**, **Mendix Free Cloud**, **Other Apps**, and **Deactivated Apps** tabs.)

{{< figure src="/attachments/control-center/apps/filter-last-commit.png" >}}

The filter shown as below allows you to filter apps by **Deployed Status**. (This filter is only available on the **Mendix Cloud** tab.)

{{< figure src="/attachments/control-center/apps/filter-mendix-cloud.png" >}}

## 8 Viewing App Details {#app-details}

If you click the name of an app in the overview table, a page opens and shows the details of this app.

The app details page has the following tabs:

* **App Info** – This tab has the **Description** and **App ID** fields, which are also available on the [General Settings](/developerportal/collaborate/general-settings/) page for your app in the Developer Portal.
* **Members** – This tab presents the team members in the app development team.
    * You can directly deactivate a team member from the app by clicking their name and selecting **Deactivate Member**.
    * For other member management options, click **Manage Members**, which will open the **Security** > [Team](/developerportal/general/team/#managing) page. As a Mendix Admin, you can also add yourself to a team via this page.
* **Environments** – This tab shows all Mendix Cloud environments. For the free Mendix Cloud environment, you can delete the environment on this tab. Once the free environment is deleted, all data will be removed. However, the app team members can still access the associated app repository in the Developer Portal.
* **App Roles** – This tab presents the app team roles defined via the **Default App Roles** tab and/or customized for a particular app

If the app is not a licensed app, you can see the action menu ({{% icon name="three-dots-menu-horizontal" %}}) on the upper-right corner of the page. If the app is active, then you have the options to deactivate the app and delete the app; and if the app is deactivated, then you have the options to activate the app and delete the app.

{{% alert color="info" %}}
Deleting and deactivating apps is currently not supported for licensed apps or apps that are not running on Mendix Cloud. For the consequences of these operations, see the table in the [Deactivating and Deleting Apps](#deactivate-delete-apps) section.
{{% /alert %}} 

## 9 Deactivating and Deleting Apps {#deactivate-delete-apps}

You can delete or deactivate a single app, or deactive (or activate) mutilple apps in one go.

The consequences of deactivating and deleting an app are as below:

|                                                             | Deactivating an App                                          | Deleting an App                                              |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| App code repository stays persistent                        | {{< figure src="/attachments/control-center/apps/check-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |
| App team members can access the app code repository         | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |
| App stays persistent                                        | {{< figure src="/attachments/control-center/apps/check-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |
| App team members can access the app in the Developer Portal | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |
| Cloud environment stays persistent                          | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |

{{% alert color="info" %}}
Deleting and deactivating apps is currently not supported for licensed apps or apps that are not running on Mendix Cloud. Therefore, you do not see these options on the **Mendix Cloud** tab; and you also do not see these options on the **Other Apps** tab if you select apps that are deployed on a private cloud.
{{% /alert %}}

## 10 Exporting the Information About Apps to an Excel File {#export-to-excel}

On each tab with an overview of apps, you can export information of apps to an Excel file. To do so, select the apps in the table, and click **Selection Export** below the table. 

To export information about ALL the apps in the table, click **Export All** on the upper-top corner. 

The Excel file covers the following columns: **AppId**, **AppName**, **TechnicalContact**, **Environment**, **DeployedStatus**, **MendixVersionOnMainline**, **DeployedMendixVersion**, **LastCommit**, **Members**, **Production**, **AppCreatedDate**, **CloudLocation**, **Fallback**, **CloudResourcePack**, **AppRAM**, **DbRAM**, **DbStorage**, **DbStorageExtra**, and **FileStorage**.
