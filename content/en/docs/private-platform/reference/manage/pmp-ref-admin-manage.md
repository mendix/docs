---
title: "Company Administrator Settings - Apps"
linktitle: "Apps"
url: /private-mendix-platform/admin-company/apps/
description: "Provides details on the apps configuration settings that are available to company administrators."
weight: 10
---

## Introduction

The **Apps** section of the navigation menu lets administrators manage their apps.

## App Management

On the **App Management** page, you can view a summary of your apps.

{{< figure src="/attachments/private-platform/pmp-admin1.png" class="no-border" >}}

By clicking **More Actions** ({{% icon name="three-dots-menu-horizontal" %}}) in the **Action** column, you can quickly perform a number of actions:

* [Edit app details](#app-details)
* [Assign the app to a new owner](#ownership)
* [Share the app with groups](#share)
* [Archive the app](#archive)
* [Delete the app](#delete)

### Editing App Details {#app-details}

Company admins can edit app details such as the app branding or ownership, team membership, and others.

1. In the **App Management** page, in the **Action** column, click **More Actions** > **Edit**.
2. Configure any of the following settings:

* **App Details** - Configure the following basic app details:
    * **App ID** - An automatically assigned internal ID. This value cannot be adjusted.
    * **Name** - The name of your app. This value should be meaningful, so that users can easily identify the app.
    * **Description** - An optional description of the application.
    * **App Logo** - A browser logo for your app. This value can only be adjusted by the app owner.
* **Team Membership** - Invite users to join your app, or remove them from the app. Before you can invite a user, you must first configure their account on the [User Management](#users) page. 
    
    When adding a member, the dialog displays any roles inherited from groups. If the user is not a member of any groups, the dialog shows **NONE**.

* **Git Server** - View the revisions per branch for this app.
* **Ownership and Sharing** - Select the user and optionally the group that owns this app. If an app is owned by a specific group, the owner must be a user who belongs to that group.

### Assigning the App to a New Owner {#ownership}

Each app is owned by a specific user, who can change settings such as the application branding (logo). By default, the owner is the user who created the app. To transfer the ownership to another user, on the **App Management** page, in the **Action** column, click **More Actions** > **Transfer Ownership**. Alternatively, you can access the same option in the **Ownership and Sharing** tab of the [App Details](#app-details) page.

In addition to specifying the owner, you can also assign ownership of the app to a specific group. If an app is owned by a group, the owner must be a user who belongs to that group.

{{% alert color="info" %}}
Ownership of Private Mendix Platform apps created through Studio Pro is automatically given to the `Mendix` root user group. If required, you can transfer the ownership to another group after creation.
{{% /alert %}}

### Sharing the App with Selected User Groups {#share}

You can share your app with any user groups by selecting the **More Actions** > **Share with Groups** option from the **App Management** page. Sharing makes the app visible to groups that otherwise may not be able to see or access your app. Members of the group with which you have shared the app do not have automatic access. Instead, they can request access from the app's owner.

### Archiving the App {#archive}

If an app is not needed for a time, you can archive it. An archived app is no longer available to users, but its data is still stored, and it can be quickly un-archived if required.

To archive an app, on the **App Management** page, in the **Action** column, click **More Actions** > **Archive App**. To reactivate an archived app, select **Unarchive App** from the same menu. Alternatively, you can access the same options on the [App Details](#app-details) page. The app is archived or unarchived immediately.

### Deleting the App {#delete}

If the app is no longer needed and you do not want to store its data, you can delete it. Deleting an app removes its repository, so that it cannot be restored afterwards. To delete an app, click **Delete App** on the [App Details](#app-details) page.

You will be warned of the consequences and asked for confirmation before the app is deleted.

## Software Composition {#software-composition}

The **Software Composition** page provides visibility into the component dependencies in each app environment. The components displayed here are based on the [Software Bill of Materials (SBOM)](/refguide/sbom-generation/).

### Overview

On the **Overview** tab, you can see a list of all the deployed apps and their environments, if applicable. You can also see the number of findings for each severity level.

The **Insights** cards display the number of findings across all environments, broken down by severity level. For example, if a build package contains one critical finding and is deployed to the test and production environments, two findings are added to **Insights**.    

Each card also displays a rolling average of how the number of findings has evolved over the past 30 days, expressed as a percentage. 

The app list contains the following information:

* **App Name** – The name of the app. Clicking this opens the **Application Environment Summary** page, if it is available.
* **Environment** – The name of the environment.
* **Purpose** - The purpose of the environment (Development, Test, Acceptance, or Production).
* **Runtime** – The Mendix Runtime version. Unsupported versions of the Mendix Runtime display a warning.
* **Owner** – The owner of the app.
* **Cluster** – The type of cluster where the environment is deployed.
* **Findings** – The number of findings of each type.
* Column customization ({{% icon name="view" %}}) – You can customize the columns in the list by clicking the {{% icon name="view" %}} icon and selecting or deselecting options.

### Components

The **Components** tab gives an overview of all the unique components used across your app landscape.

The component list contains the following information:

* **Component** – The name of the component. Clicking this opens the **Component Details** page.
* **Type** – The type of component, which can be one of the following:
  
    * **Module** – Standard module imported from the Marketplace, such as [Community Commons](https://marketplace.mendix.com/link/component/170), or a module created by the developer.
    * **Widget** – User interface elements downloaded from the Marketplace, such as [Charts](https://marketplace.mendix.com/link/component/105695), or a widget created by the developer.
    * **Framework** – The Mendix Runtime version, for example 10.12.0
    * **Jar** – Java libraries imported into your app using [Managed Dependencies](/refguide/managed-dependencies/), or those manually added in the **userlib** folder depending on the Studio Pro version used, such as `org.apache.commons.io`.
    * **npms** – `npm` libraries that are used in your [JavaScript actions](/refguide/javascript-actions/).
    * **Unknown** – When the type of the component is none of the above and hence undetermined.

* **Support** – The support type of the Marketplace component. This can be **Mendix**, **Partner**, or **Community**. 
* **Version** – The version of the component that is being used.
* **Findings** – The number of findings of each type, color-coded according to severity level.
* **Apps using component** – The number of apps where the component is used.
* **License** – For components derived from the Mendix Marketplace, this is the end-user license for the component.
* Column customization ({{% icon name="view" %}}) – You can customize the columns of the list by clicking the {{% icon name="view" %}} icon and selecting or deselecting options.

### Findings

The **Findings** tab allows you to view a list of all the findings discovered in your apps. A finding represents an issue identified in the components of an app.

The findings are divided into the following types:

* Vulnerable - A finding is generated when a component is published on the [Security Advisories](/releasenotes/security-advisories/) page, and is assigned a specific CVSS score. CVSS scores are based on the [NVD Vulnerability Metrics](https://nvd.nist.gov/vuln-metrics) framework, and cannot be orverriden.
* Outdated - A finding is generated when a component becomes outdated, meaning when a new runtime compatible version is published.
* Deprecated - A finding is generated when a component has been labeled as deprecated in the Private Marketplace.

These are the severity levels of a finding:

* **Critical**
* **High**
* **Medium**
* **Low**

### Scoring Criteria

The **Scoring Criteria** tab allows you to adjust the conditions and severity for each type of finding. Scoring criteria reflect your company's risk preference.

The settings on this tab determine how each such vulnerability is calculated for apps, environments, and components.

The types of findings that you can adjust for are **Outdated** and **Deprecated**. For outdated components, you can adjust all severity levels.     For deprecated components, you can choose which severity level to assign.

## Import Apps

On the **Import Apps** page, administrators can import existing Mendix apps that are in their version control host but not yet in Private Mendix Platform. The import currently supports the following hosts:

* GitLab
* GitHub
* Bitbucket
* Azure DevOps Services (cloud, `dev.azure.com`)
* Azure DevOps Server (on-premises). A project is listed when it has exactly one repository (the default repository, named like the project) with an `.mpr` file in its root, that your Personal Access Token can read, and that is not yet linked to an app. After the import, the app behaves like an app created in Private Mendix Platform; deleting the app deletes the Azure DevOps project.

{{< figure src="/attachments/private-platform/pmp-admin6.png" class="no-border" >}}

The list of apps on the page is not refreshed automatically. To refresh it, click the **Scan for Apps** button.
