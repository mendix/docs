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

### 2 Mendix Cloud

The **Mendix Cloud** tab gives an overview of all the apps that can be deployed on the Mendix Public Cloud.

The list shows the following information of an app:

- **App Name**: if  you click on this you go to the app details (reference)
- **Technical Contact**: the technical contact of the app. Note you can also edit the technical contact here
- **Environment**: name given to the production environment
- **Deployed Status**: if the app has been deployed on this environment
- **Mainline Version**: the mendix version of the app on the mainline in the repository
- **Deployed Version**: the Mendix version of the deployed app
- **Last Commit**: the last commit on the project repository (in any branch)

#### 2.1 Filtering Apps in the List

The three filters on the top enables you to filter apps using different criteria. 

{{< figure src="/attachments/control-center/apps/filter-mendix-cloud.png" >}}

With the left filter, you can filter apps by the app ID, name, Mendix versions, Technical Contact, environment name, envirionment ID, mainline version, and, deployed version. Clicking the button on the left allows you to use comparisons and string operations, such as **Contains**, **Starts with**, and **Greater than**.

{{< figure src="/attachments/control-center/apps/filter-left.png" >}}

With the middle filter, you can filter apps by the date of last commit. Clicking the button on the left allows you to use comparisons and string operations, such as **Between** and **Empty**.

{{< figure src="/attachments/control-center/apps/filter-middle.png" >}}

The right filter allows you to filter apps by **Deployed Status**.

The **Production** toggle on the upper-right corner enables you to only show apps that are deployed in the production environments.

#### 2.2 Exporting Apps to an Excel file

To export information about apps to an Excel file, select them in the list, and click **Selection Export** below the list. 

To export information about all the apps in this list, click **Export All** on the upper-top corner. 

The Excel file covers the following information: AppId, AppName, TechnicalContact, Environment, DeployedStatus, MendixVersionOnMainline, DeployedMendixVersion, LastCommit, Members, Production, AppCreatedDate, CloudLocation, Fallback, CloudResourcePack, AppRAM, DbRAM, DbStorage, DbStorageExtra, anc FileStorage.


### 3 Mendix Free Cloud

The Mendix Free Cloud tab shows all the apps that are deployed on the Mendix Free Cloud.

### 4 Other Apps

The Other Apps tab shows all the other apps. They are either deployed to other clouds or do not have an environment. 

{{% alert color="info" %}}
It is in our roadmap to give every cloud its own tab.
{{% /alert %}}

## 2 Active and Deactivated Apps {#active-deactivated}

### 2.1 Overview {#overview}

On the **Active Apps** tab and the **Deactivated Apps** tab, you can see an overview of the active and deactivated apps that belong to your company.

When you select one or more apps via the checkboxes in the list, a context menu appears at the bottom of the screen with options for exporting app details to an *.xlsx* file, deactivating apps (on the **Active Apps** tab) or activating apps (on the **Deactivated Apps** tab), and deleting an app.

{{% alert color="info" %}}
Deleting and deactivating apps is currently not supported for licensed apps or apps that are not running on Mendix Cloud.
{{% /alert %}}

{{% alert color="info" %}}
In the overview, you can activate or deactivate up to 100 apps at a time and delete 1 app at a time.
{{% /alert %}}

The consequences of deactivating and deleting an app are as below:

| | Deactivating an App | Deleting an App |
| --- | --- | --- |
| App code repository stays persistent | {{< figure src="/attachments/control-center/apps/check-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |
| App team members can access the app code repository | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |
| App stays persistent | {{< figure src="/attachments/control-center/apps/check-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |
| App team members can access the app in the Developer Portal | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |
| Cloud environment stays persistent | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} | {{< figure src="/attachments/control-center/apps/cross-mark.svg" >}} |

### 2.2 App Details {#app-details}

If you click the name of an app in the overview list, a page opens and shows the details of this app.

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

## 3 Default App Roles

The **Default App Roles** tab shows the default [team roles](/developerportal/general/app-roles/#team-roles) assigned for every new app created in your company. Hovering over a role brings up options to **Delete** and **Edit** the role. Click **Add Role** to add a new default role, which includes permissions on accessing [Team Server](/developerportal/general/team-server/) and [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) information.

{{< figure src="/attachments/control-center/apps/roles.jpg" >}}
