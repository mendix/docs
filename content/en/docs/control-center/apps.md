---
title: "Company Apps Dashboard "
linktitle: "Apps"
url: /control-center/apps/
description: "Describes the Apps page in the Mendix Control Center."
weight: 15
no_list: true
aliases:
    - /developerportal/company-app-roles/users.html
    - /developerportal/company-app-roles/users
---

## Introduction

The **Apps** page gives an overview of all the apps belonging to your company. The page has the following tabs available: **Mendix Cloud**, **Mendix Free Cloud**, **Other Apps**, and **Deactivated Apps**.

{{% alert color="info" %}}
We will enhance this page to provide information about apps deployed on standalone private clouds. Stay tuned.
{{% /alert %}}

## Mendix Cloud

The **Mendix Cloud** tab gives an overview of all the licensed apps that can be published on the Mendix Cloud.

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

* **Environment**: the name of the environment

* **Deployed Status**: whether the app has been deployed on this environment

* **Mainline Version**: the Mendix version of the app on the mainline in the repository

* **Deployed Version**: the Mendix version of the app deployed on this environment

* **Last Commit**: the date of the last commit in the main line

* **Members**: the number of the team members in the app development team

* **Created Date**: the date the app was created

* **Env Owner**: the company that owns the environments of this app

    {{% alert color="info" %}}If the owner fo the environments is not your company, you have limited control over the deployment of your app. For information on how to resolve this, see [How to Resolve Shared Ownership of Apps](/control-center/resolve-shared-ownership-of-apps/).{{% /alert %}}

* **Env Owner Id**: the ID of the company that owns the environments of this app 

* **Cloud Resource Pack**: the resource pack for the cloud environment where the app is deployed

    {{% alert color="info" %}}For the technical details of each cloud resource pack, see the [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) section in *Mendix Cloud*.{{% /alert %}}

* **Cloud Location**: the location of the environment

* **App RAM**: the size of the RAM allocated for running the app

* **DB RAM**: the size the RAM allocation for database operations

* **DB Storage**: the size of the database storage

* **DB Storage Extra**: the extra storage of the database

* **File Storage**: the size of the storage allocated for storing files

* **Fallback**: whether the data in the database is automatically copied to a database in a second availability zone.

    {{% alert color="info" %}}For more information, see the [High Availability and Fallback](/developerportal/deploy/mendix-cloud-deploy/#fallback) section in *Mendix Cloud*.{{% /alert %}}

You can filter the apps in the table. For details, see the [Filtering Apps in the Table](#filter-apps) section.

You can export apps to an Excel file. For details, see the [Exporting Apps to an Excel File](#export-to-excel) section.

## Private Cloud (Connected) {#pc-connected}

The **Mendix Private Cloud** tab shows all the apps that are deployed on the Mendix Private Cloud Connected.

You can customize the columns of the table by clicking the column selector (the {{% icon name="view" %}} icon) on the upper-right corner of the table. The items selected are shown as columns in the table.

{{< figure src="/attachments/control-center/apps/column-selection-private-cloud-connected.png"  max-width=50% >}}

The description of the items that you can select are as follows:

* **AppID**: the unique identifier of the app

* **App Name**: the name of the app

  {{% alert color="info" %}}You can view the [app details](#app-details) by clicking the app name in the table.{{% /alert %}}
  
* **Technical Contact**: the technical contact of the app

    {{% alert color="info" %}}You can edit the Technical Contact of an app by clicking **Edit** ({{% icon name="pencil" %}}) next to the current Technical Contact in the table.{{% /alert %}}
  
* **EnvID**: the unique identifier of the environment

* **Environment**: the name of the environment

* **Env Status**: the app deployment status on environment

* **Mainline Version**: the Mendix version of the app on the mainline in the repository

* **Deployed Version**: the Mendix version of the deployed app

* **Last Commit**: the date of the last commit in the main line

* **Members**: the number of the team members in the app development team

* **Created Date**: the date the app was created

* **NamespaceID**: the ID of the namespace

* **Namespace**: the Kubernetes namespace

    {{% alert color="info" %}}For more information, see [How to Create a Cluster and Namespace](/developerportal/deploy/private-cloud-cluster/#create-cluster-namespace) in *Creating a Private Cloud Cluster*.{{% /alert %}}

* **Database Name**: the name of the database

* **Storage Name**: the name of the storage

## Mendix Free Cloud

The **Mendix Free Cloud** tab shows all the free apps that are deployed on the Mendix Cloud.

You can customize the columns of the table by clicking the column selector (the {{% icon name="view" %}} icon) on the upper-right corner of the table. The items selected are shown as columns in the table.

{{< figure src="/attachments/control-center/apps/column-selection-free-cloud.png" >}}

The description of the items that you can select are as follows:

* **AppID**: the unique identifier of the app

* **App Name**: the name of the app

    {{% alert color="info" %}}You can view the [app details](#app-details) by clicking the app name in the table.{{% /alert %}}

* **Technical Contact**: the technical contact of the app. 

    {{% alert color="info" %}}You can edit the Technical Contact of an app by clicking **Edit** ({{% icon name="pencil" %}}) next to the current Technical Contact in the table.{{% /alert %}}

* **EnvID**: the unique identifier of the environment.

* **Deployed Status**: whether the app has been deployed on this environment

* **Mainline Version**: the Mendix version of the app on the mainline in the repository

* **Deployed Version**: the Mendix version of the deployed app

* **Last Commit**: the date of the last commit in the main line

* **Members**: the number of the team members in the app development team

* **Created Date**: the date the app was created

* **Cloud Location**: the location of the environment

* **Actions**: adding the action menu ({{% icon name="three-dots-menu-horizontal" %}}) to enable you to **Deactivate App** and **Delete App** (For more information, see the [Deactivating and Deleting Apps](#deactivate-delete-apps) section.)

You can filter the apps in the table. For details, see the [Filtering Apps in the Table](#filter-apps) section.

When you select the apps via the checkboxes in the table, a context menu appears at the bottom of the screen with the options for deactivating and deleting apps. For details, see [Deactivating and Deleting Apps](#deactivate-delete-apps) section.

You can export apps to an Excel file. For details, see the [Exporting Apps to an Excel File](#export-to-excel) section.

## Other Apps

The **Other Apps** tab shows the unlicensed apps that are not deployed and the apps that are deployed on a private cloud unconnected.

You can customize the columns of the table by clicking the column selector (the {{% icon name="view" %}} icon) on the upper-right corner of the table. The items selected are shown as columns in the table.

{{< figure src="/attachments/control-center/apps/column-selection-other-apps.png" >}}

The description of the items that you can select are as follows:

* **AppID**: the unique identifier of the app
* **App Name**: the name of the app

    {{% alert color="info" %}}You can view the [app details](#app-details) by clicking the app name in the table.{{% /alert %}}
* **Last Commit**: the date of the last commit in the main line
* **Members**: the number of the team members in the app development team
* **Created Date**: the date the app was created
* **Actions**: adding the action menu ({{% icon name="three-dots-menu-horizontal" %}}) to enable you to **Deactivate App** and **Delete App**. (For more information, see the [Deactivating and Deleting Apps](#deactivate-delete-apps) section.)

You can filter the apps in the table. For details, see the [Filtering Apps in the Table](#filter-apps)section.

When you select the apps via the checkboxes in the table, a context menu appears at the bottom of the screen with the options for deactivating and deleting apps. For details, see [Deactivating and Deleting Apps](#deactivate-delete-apps) section.

You can export apps to an Excel file. For details, see the [Exporting Apps to an Excel File](#export-to-excel) section.

## Deactivated Apps

The **Deactivated Apps** tab shows all the deactivated apps that belong to your company.

You can customize the columns of the table by clicking the column selector (the {{% icon name="view" %}} icon) on the upper-right corner of the table. The items selected are shown as columns in the table.

{{< figure src="/attachments/control-center/apps/column-selection-deactivated-apps.png" >}}

The description of the items that you can select are as follows:

* **AppID**: the unique identifier of the app
* **App Name**: the name of the app

    {{% alert color="info" %}}You can view the [app details](#app-details) by clicking the app name in the table.{{% /alert %}}
* **Created Date**: the date the app was created
* **Mainline Version**: the Mendix version of the app on the mainline in the repository
* **Last Commit**: the date of the last commit in the main line
* **Members**: the number of the team members in the app development team
* **Actions**: adding the action menu ({{% icon name="three-dots-menu-horizontal" %}}) to enable you to **Activate App** and **Delete App**. (For more information, see the [Deactivating and Deleting Apps](#deactivate-delete-apps) section.)

You can filter the apps in the table. For details, see the [Filtering Apps in the Table](#filter-apps)section.

When you select the apps via the checkboxes in the table, a context menu appears at the bottom of the screen with the option for activating and deleting apps. After you activate an app, the app will appear on the corresponding tab. For details about deleting apps, see [Deactivating and Deleting Apps](#deactivate-delete-apps) section.

You can export apps to an Excel file. For details, see the [Exporting Apps to an Excel File](#export-to-excel) section.

## Filtering Apps in the Table {#filter-apps}

On each tab with a table of apps, you can find filters on the top, which allows you to filter apps using different criteria. 

With the filter as shown below, you can search for string matches on any of the string fields in the table, for example, the app ID, app name, or environment name. Clicking the button on the left allows you to use comparisons and string operations, such as **Contains**, **Starts with**, and **Greater than**. (This filter is available on the **Mendix Cloud**, **Mendix Free Cloud**, and **Other Apps** tabs.)

{{< figure src="/attachments/control-center/apps/filter-apps.png" >}}

With the filter as shown below, you can filter apps by the date of the last commit. Clicking the button on the left allows you to use comparisons and string operations, such as **Between** and **Empty**. (This filter is available on the **Mendix Cloud**, **Mendix Free Cloud**, **Other Apps**, and **Deactivated Apps** tabs.)

{{< figure src="/attachments/control-center/apps/filter-last-commit.png" >}}

The filter shown as below allows you to filter apps by **Deployed Status**. (This filter is only available on the **Mendix Cloud** tab.)

{{< figure src="/attachments/control-center/apps/filter-mendix-cloud.png" >}}

## Viewing App Details {#app-details}

If you click an app name on a tab, a page opens and shows the details of this app.

The app details page has the following tabs:

* **App Info** – This tab has the **Description** and **App ID** fields, which are also available on the [Settings](/developerportal/collaborate/general-settings/) page for your app in [Apps](https://sprintr.home.mendix.com/).
* **Members** – This tab presents the team members in the app development team.
    * You can directly deactivate a team member from the app by clicking their name and selecting **Deactivate Member**.
    * For other member management options, click **Manage Members**, which will open the [Team](/developerportal/general/team/#managing) page of the app. As a Mendix Admin, you can also add yourself to a team via this page.
* **Environments** – This tab shows all Mendix Cloud environments. For the free Mendix Cloud environment, you can delete the environment on this tab. Once the free environment is deleted, all data will be removed. However, the app team members can still access the associated app repository in the Mendix Portal.
* **App Roles** – This tab presents the app team roles defined via the **Default App Roles** feature on the [Roles & Permissions](/control-center/roles-and-permissions/) page.

If the app is not a licensed app, you can see the action menu ({{% icon name="three-dots-menu-horizontal" %}}) on the upper-right corner of the page. If the app is active, then you have the options to deactivate the app and delete the app; and if the app is deactivated, then you have the options to activate the app and delete the app.

{{% alert color="info" %}}
Deleting and deactivating apps is currently not supported for licensed apps or apps that are not running on Mendix Cloud. For the consequences of these operations, see the table in the [Deactivating and Deleting Apps](#deactivate-delete-apps) section.
{{% /alert %}} 

## Deactivating and Deleting Apps {#deactivate-delete-apps}

You can delete or deactivate a single app, or deactivate (or activate) multiple apps in one go.

The consequences of deactivating and deleting an app are as below:

|                                                             | Deactivating an App                                          | Deleting an App                                              |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| App code repository stays persistent                        | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| App team members can access the app code repository         | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| App stays persistent                                        | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| App team members can access the app in [Apps](https://sprintr.home.mendix.com/) | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| Cloud environment stays persistent                          | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |

{{% alert color="info" %}}
Deleting and deactivating apps is currently not supported for licensed apps or apps that are not running on Mendix Cloud. Therefore, you do not see these options on the **Mendix Cloud** tab; and you also do not see these options on the **Other Apps** tab if you select apps that are deployed on a private cloud.
{{% /alert %}}

## Exporting the Information About Apps to an Excel File {#export-to-excel}

On each tab with an overview of apps, you can export information of apps to an Excel file. To do so, select the apps in the table, and click **Selection Export** below the table. 

To export information about ALL the apps in the table, click **Export All** on the upper-top corner. 

The Excel file covers the following columns: **AppId**, **AppName**, **TechnicalContact**, **Environment**, **DeployedStatus**, **MendixVersionOnMainline**, **DeployedMendixVersion**, **LastCommit**, **Members**, **Production**, **AppCreatedDate**, **CloudLocation**, **Fallback**, **CloudResourcePack**, **AppRAM**, **DbRAM**, **DbStorage**, **DbStorageExtra**, and **FileStorage**.
