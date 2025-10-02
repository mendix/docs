---
title: "Apps Overview"
linktitle: "Apps Overview"
url: /control-center/apps-overview/
description: "Describes the Apps page in the Mendix Control Center."
weight: 10
no_list: true
aliases:
    - /developerportal/company-app-roles/users.html
    - /developerportal/company-app-roles/users
---

## Introduction

The **Apps** page in Control Center provides a central place to monitor, manage, and interact with all the apps belonging to your company. 

Use the search bar at the top of the page to find an app using either its name or app ID. You can find the app ID under **Project ID** in your app’s [Settings](/developerportal/general-settings/) in [Apps](https://sprintr.home.mendix.com/).

{{< figure src="/attachments/control-center/apps/apps-overview/top-search-bar.png" >}}

Search results appear in a pop-up window where you can apply filters for **AppName**, **AppID**, **Technical Contact**, **Last Commit**, **Created Date**, and **Deployment**. Click the app name to open the [app details](#app-details).

The **Apps** page includes the following tabs: **Mendix Cloud**, **Private Cloud**, **Mendix Free Cloud**, **Other Apps**, and **Deactivated Apps**.

Each tab contains a table. By clicking the column selector ({{% icon name="view" %}}) in the upper-right corner of the table, you can choose which fields to display. You can also:

* Filter the apps in a table. For details, refer to the [Filtering Apps in a Table](#filter-apps) section
* Export app information to an Excel file. For details, refer to the [Exporting Apps to an Excel File](#export-to-excel) section

Refer to the [Fields Glossary](#fields-glossary) section for descriptions of the table columns.

## Mendix Cloud

The **Mendix Cloud** tab lists all licensed apps that can be deployed on Mendix Cloud.

By default, the table shows only apps deployed to the production environments. To view all environments, toggle off the **Production** switch in the upper-right corner of the table.

When you select apps using the checkboxes in the table, a context menu appears at the bottom of the screen. Use it to export the selected apps.

## Private Cloud (Connected) {#pc-connected}

The **Private Cloud** tab shows all the apps that are deployed on the Mendix Private Cloud Connected.

## Mendix Free Cloud

The **Mendix Free Cloud** tab shows all the free apps deployed on Mendix Cloud.

{{% alert color="info" %}}
When you select apps in the Mendix Free Cloud or the Other Apps tabs using the checkboxes in the table, a context menu appears at the bottom of the screen. Use it to deactivate, delete, or export selected apps. Refer to the [Deactivating and Deleting Apps](#deactivate-delete-apps) section for more details.
{{% /alert %}}

## Other Apps

The **Other Apps** tab shows unlicensed apps that are not deployed and apps deployed on a Private Cloud Connected .

## Deactivated Apps

The **Deactivated Apps** tab shows all your company's deactivated apps.

When you select apps using the checkboxes in the table, a context menu appears at the bottom of the screen. Use it to activate, delete, or export selected apps. After activation, the app appears on the corresponding active tab. Refer to the [Deactivating and Deleting Apps](#deactivate-delete-apps) section for more information.

## Viewing App Details {#app-details}

Clicking an app name in a tab or the search results opens its details page, which includes the following tabs:

* **App Info** – Shows the **Description** and **App ID**, also found in your app's [Settings](/developerportal/general-settings/).
* **Members** – Lists the team members in the app development team.
    * You can directly deactivate a team member from the app by clicking their name and selecting **Deactivate Member**.
    * For other member management options, click **Manage Members**, which will open the [Team](/developerportal/general/team/#managing) page of the app. As a Mendix Admin, you can also add yourself to a team via this page.
* **Environments** – Lists all Mendix Cloud environments. For the free Mendix Cloud environment, you can delete the environment on this tab. Once the free environment is deleted, all data will be removed. However, the app team members can still access the associated app repository in the Mendix Portal.

If the app is not a licensed app, you can see the action menu ({{% icon name="three-dots-menu-horizontal" %}}) on the upper-right corner of the page. If the app is active, then you have the options to deactivate the app and delete the app; and if the app is deactivated, then you have the options to activate the app and delete the app.

{{% alert color="info" %}}
You cannot deactivate or delete licensed apps or apps not hosted on Mendix Cloud. For the consequences of these operations, refer to the table in the [Deactivating and Deleting Apps](#deactivate-delete-apps) section for more information.
{{% /alert %}}

## App Management

This section details common functionalities for managing apps, including filtering, exporting, and deactivating, and a glossary of all the fields available across all tabs.

### Fields Glossary {#fields-glossary}

This glossary describes all the fields that appear across all the tables in the **Mendix Cloud**, **Private Cloud**, **Mendix Free Cloud**, **Other Apps**, and **Deactivated Apps** tabs.

| **Field**               | **Description**                                                                                                                                                                      | **Appears In**                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| **Action**              | The action menu ({{<icon name="three-dots-menu-horizontal">}}) which provides options to **Activate App** and **Delete App**. Refer to the [Deactivating and Deleting Apps](#deactivate-delete-apps) section | Mendix Free Cloud, Other Apps, Deactivated Apps |
| **AppID**               | Unique identifier of the app                                                                                                                                                       | All tabs                                        |
| **App Name**            | Name of the app. Click the name to view the [app details](#app-details)                                                                                                            | All tabs                                        |
| **App RAM**             | RAM size allocated for running the app                                                                                                                                         | Mendix Cloud                                    |
| **Cloud Location**      | Environment location                                                                                                                                                            | Mendix Cloud, Mendix Free Cloud                 |
| **Cloud Resource Pack** | The resource pack for the cloud environment where the app is deployed. For details, refer to the [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) section in *Mendix Cloud*  | Mendix Cloud              |
| **Created Date**        | The date the app was created                                                                                                                                                        | All tabs                 |
| **Database Name**       | The database name                                                                                                                                                                   | Private Cloud (Connected)                     |
| **Action**              | The action menu ({{<icon name="three-dots-menu-horizontal">}}) which provides options to **Activate App** and **Delete App**. Refer to the [Deactivating and Deleting Apps](#deactivate-delete-apps) section | Mendix Free Cloud, Other Apps, Deactivated Apps |
| **DB Storage**          | Database storage size                                                                                                                                                               | Mendix Cloud                    |
| **DB Storage Extra**    | Extra database storage size                                                                                                                                                              | Mendix Cloud                    |
| **Deployed Status**     | Whether the app is deployed                                                                                                                                                         | Mendix Cloud, Mendix Free Cloud                 |
| **Deployed Version**    | Mendix version of the app currently deployed                                                                                                                                                  | Mendix Cloud, Mendix Free Cloud, Private Cloud (Connected)   |
| **EnvID**               | Unique identifier of the environment                                                                                                                  | Mendix Cloud, Mendix Free Cloud, Private Cloud (Connected)   |
| **Env Owner**           | The company that owns the environment. If it’s not your company, you have limited control over your app's deployment. Refer to [How to Resolve Shared Ownership of Apps](/control-center/resolve-shared-ownership-of-apps/)    | Mendix Cloud   |
| **Environment**         | Name of the environment                                                                                                                                                             | Mendix Cloud, Private Cloud (Connected)                      |
| **Env Owner ID**        | ID of the company that owns the environments of this app                                                                                                                                              | Mendix Cloud                                    |
| **Env Status**          | The app deployment status on environment                                                                                                                                | Private Cloud (Connected)                                    |
| **Fallback**            | Whether the data in the database is automatically copied to a database in a second availability zone. For more information, refer to the [High Availability and Fallback](/developerportal/deploy/mendix-cloud-deploy/#fallback) section in *Mendix Cloud* | Mendix Cloud |
| **File Storage**        | Size of the storage allocated for storing files                                                                                                                                                            |    Mendix Cloud                                 |
| **Last Commit**         | Date of the last commit in the main line                                                                                                                                           | All tabs                                        |
| **Mainline Version**    | Mendix version of the app on the mainline in the repository                                                                                                                                         |         Mendix Cloud, Mendix Free Cloud, Private Cloud (Connected) ,  Deactivated Apps   |
| **Members**             | Number of team members in the app development team                                                                                                                                                              | All tabs                                         |
| **Namespace**           | Kubernetes namespace. Refer to [Creating a Private Cloud Cluster](/developerportal/deploy/private-cloud-cluster/#create-cluster-namespace)                                                      |  Private Cloud  (Connected)                         |
| **NamespaceID**         | Namespace ID                                                       |  Private Cloud (Connected)                         |
| **Storage Name**        | Name of the storage                                                                                                                                                         |  Private Cloud                          |
| **Technical Contact**   | Technical contact of the app. To edit, click **Edit** ({{<icon name="pencil">}}) next to the current Technical Contact’s name                                                    |  Mendix Cloud, Mendix Free Cloud, Private Cloud (Connected) |

### Filtering Apps in a Table {#filter-apps}

On each tab with a table of apps, you can find filters on the top, which allows you to view apps based on different criteria.

With the filter as shown below, you can search for string matches on any of the string fields in the table, for example, the app name or environment name.

Clicking the filter button allows you to use comparisons and string operations, such as **Contains**, **Starts with**, and **Greater than**.

{{< figure src="/attachments/control-center/apps/apps-overview/filter-apps.png" >}}

With the filter as shown below, you can filter apps by the date of the last commit. Clicking the button on the left allows you to use comparisons, such as **Between** and **Empty**. 

{{< figure src="/attachments/control-center/apps/apps-overview/filter-last-commit.png" >}}

The filter shown below allows you to filter apps by **Deployed Status**. 

{{< figure src="/attachments/control-center/apps/apps-overview/filter-mendix-cloud.png" >}}

### Deactivating and Deleting Apps {#deactivate-delete-apps}

You can delete or deactivate a single free app, or deactivate (or activate) multiple free apps in one go.

The consequences of deactivating and deleting a free app are as follows:

|                                                             | Deactivating an App                                          | Deleting an App                                              |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| App code repository stays persistent                        | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| App team members can access the app code repository         | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| App stays persistent                                        | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| App team members can access the app in [Apps](https://sprintr.home.mendix.com/) | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| Cloud environment stays persistent                          | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |

{{% alert color="info" %}}
Deleting and deactivating apps is only supported in free apps. It is currently not supported for licensed apps or apps that are not running on Mendix Cloud.
{{% /alert %}}

### Exporting the Information About Apps to an Excel File {#export-to-excel}

You can export app data to Excel file from the table in any of the available tabs.

* To export selected apps:

  1. Select the apps using the checkboxes in the table.
  2. In the context menu that appears at the bottom of the screen, click **Selection Export**.

* To export all apps: Click **Export All** in the upper-right corner of the table.

The Excel file includes the following columns: **AppId**, **AppName**, **TechnicalContact**, **Environment**, **DeployedStatus**, **MendixVersionOnMainline**, **DeployedMendixVersion**, **LastCommit**, **Members**, **Production**, **AppCreatedDate**, **CloudLocation**, **Fallback**, **CloudResourcePack**, **AppRAM**, **DbRAM**, **DbStorage**, **DbStorageExtra**, and **FileStorage**.
