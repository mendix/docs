---
title: "Private Mendix Platform Functionalities - Company Administrators"
linktitle: "Company Administrators"
url: /private-mendix-platform/reference-guide/admin/company/
description: "Provides details on the features and functionality of the Private Mendix Platform that are available to company administrators."
weight: 10
---

## Introduction

In Private Mendix Platform, company administrators primarily manage business-as-usual tasks, for example inviting new users to an app, or approving Marketplace contents. Settings relevant for company admins are available in the [Manage](#manage) section of the admin navigation menu.

## Accessing the Configuration Settings

As a user with company administrator access rights, you can access the Private Mendix Platform configuration settings by performing the following steps:

1. Switch to Admin Mode by clicking the profile picture in the top right corner of the screen and selecting **Switch to Admin Mode**.
2. In the left navigation menu, open the **Manage** section.

## Manage {#manage}

The **Manage** section of the administrator navigation menu contains setting relevant to your day-to-day tasks as a company admin. You can use it to manage your company apps, users and groups, Marketplace contents, and deployment clusters.

### Apps

The **Apps** section of the navigation menu lets administrators manage their apps.

#### App Management

On the **App Management** page, you can view a summary of your apps.

{{< figure src="/attachments/private-platform/pmp-admin1.png" class="no-border" >}}

By clicking **More Actions** ({{% icon name="three-dots-menu-horizontal" %}}) in the **Action** column, you can quickly perform a number of actions:

* [Edit app details](#app-details)
* [Assign the app to a new owner](#ownership)
* [Share the app with groups](#share)
* [Archive the app](#archive)
* [Delete the app](#delete)

##### Editing App Details {#app-details}

Company admins can edit app details such as the app branding or ownership, team membership, and others.

1. In the **App Management** page, in the **Action** column, click **More Actions** > **Edit**.
2. Configure any of the following settings:

* **App Details** - Configure the following basic app details:
    * **App ID** - An automatically assigned internal ID. This value cannot be adjusted.
    * **Name** - The name of your app. This value should be meaningful, so that users can easily identify the app.
    * **Description** - An optional description of the application.
    * **App Logo** - A browser logo for your app. This value can only be adjusted by the app owner.
* **Team Membership** - Invite users to join your app, or remove them from the app. Before you can invite a user, you must first configure their account on the [User Management](#users) page.
* **Git Server** - View the revisions per branch for this app.
* **Ownership and Sharing** - Select the user and optionally the group that owns this app. If an app is owned by a specific group, the owner must be a user who belongs to that group.

##### Assigning the App to a New Owner {#ownership}

Each app is owned by a specific user, who can change settings such as the application branding (logo). By default, the owner is the user who created the app. To transfer the ownership to another user, on the **App Management** page, in the **Action** column, click **More Actions** > **Transfer Ownership**. Alternatively, you can access the same option in the **Ownership and Sharing** tab of the [App Details](#app-details) page.

In addition to specifying the owner, you can also assign ownership of the app to a specific group. If an app is owned by a group, the owner must be a user who belongs to that group.

##### Sharing the App with Selected User Groups {#share}

You can share your app with any user groups by selecting the **More Actions** > **Share with Groups** option from the **App Management** page.

##### Archiving the App {#archive}

If an app is not needed for a time, you can archive it. An archived app is no longer available to users, but its data is still stored, and it can be quickly un-archived if required.

To archive an app, on the **App Management** page, in the **Action** column, click **More Actions** > **Archive App**. To reactivate an archived app, select **Unarchive App** from the same menu. Alternatively, you can access the same options on the [App Details](#app-details) page. The app is archived or unarchived immediately.

##### Deleting the App {#delete}

If the app is no longer needed and you do not want to store its data, you can delete it. Deleting an app removes its repository, so that it cannot be restored afterwards. To delete an app, click **Delete App** on the [App Details](#app-details) page.

You will be warned of the consequences and asked for confirmation before the app is deleted.

#### Import Apps

On the **Import Apps** page, administrators can import existing Mendix apps that are in their version control host but not yet in Private Mendix Platform. The import currently supports the following hosts:

* GitLab
* GitHub
* Bitbucket
* Azure DevOps

{{< figure src="/attachments/private-platform/pmp-admin6.png" class="no-border" >}}

The list of apps on the page is not refreshed automatically. To refresh it, click the **Scan for Apps** button.

### Marketplace

In the **Marketplace** section, administrators can manage various settings related to the content available on the Private Platform Marketplace. The Private Platform Marketplace is a local version of the [Mendix Marketplace](/appstore/overview/), enclosed entirely within the Private Platform. Developers in your organization can also create their own modules, connectors, and sample apps, and share them on the Private Platform Marketplace to make them available to other users.

As the administrator, you can perform the following actions:

#### Content Management {#content}

In the **Content Management** tab, you can view the Marketplace content that your users have already published, as well as any items which are pending approval, or which have been rejected.

{{< figure src="/attachments/private-platform/pmp-admin7.png" class="no-border" >}}

You can click on an item to view more information about it, download, approve, or delete it.

#### Taxonomy Management

In the **Taxonomy Management** tab, you can configure the supported Studio Pro versions and sub-categories that your users can select when creating Marketplace content. You can also view and edit the available licenses.

{{< figure src="/attachments/private-platform/pmp-admin8.png" class="no-border" >}}

##### Supported Versions

The versions listed on the **Supported Versions** page indicate the Mendix Studio Pro versions that a Marketplace content item is compatible with. Users can select these versions from a list when uploading new Marketplace content.

##### Licenses

The **Licenses** tab allows administrators to specify the licenses that are available to their apps. To add a new license, click **New License** and specify the following values:

* **Name** - Name of the license
* **URL** - URL at which the license can be accessed
* **Contents** - Optional additional information about the license.

##### App Categories

In the **App Categories** tab, you can view the predefined categories that users can specify for their Marketplace content items. You can also add custom categories, for example, for Marketplace contents related to a specific project.

Predefined app categories cannot be edited or deleted. To edit or delete a custom category, click the **Action** menu, and then select one of the available options.

#### Import Content

You can populate your private Marketplace with contents by importing a zip file that contains the content packages along with a *package.json* file. You can upload the file from a Content Delivery Network, or manually from your local machine.

{{< figure src="/attachments/private-platform/pmp-admin9.png" class="no-border" >}}

#### Upload Marketplace Bundle {#manual-upload}

To manually upload a content bundle from your own computer, perform the following steps:

1. Download the Marketplace Bundle with contents available in a zip file. If you do not have access to the bundle, contact your Mendix point of contact.
2. In the **Import Content** > **Upload Marketplace Bundle** tab, drag and drop the file that you want to upload.

    * The file must be in *zip* format.
    * The file must not be larger than 2048 MB.
    * Your infrastructure must support the upload of large files (up to 2048MB).
    * You should also have at least 40 GB available disk space to account for temporary files.
    
3. Click **Import Marketplace Bundle components**.

    {{< figure src="/attachments/private-platform/pmp-config1.png" class="no-border" >}}

4. To view the progress of your upload, click **View Task Queue**.

{{% alert color="info" %}}
If you are experiencing high latency during manual uploads, you can increase the timeouts. For example, for nginx, you can perform the following commands:

```text
nginx.ingress.kubernetes.io/client-header-timeout: "300"
nginx.ingress.kubernetes.io/proxy-connect-timeout: "300"
nginx.ingress.kubernetes.io/proxy-read-timeout: "300"
nginx.ingress.kubernetes.io/proxy-send-timeout: "300"
```

{{% /alert %}}

#### Import from CDN

To import content from a Content Delivery Network, follow these steps:

1. Ensure that your system administrator has [configured the Marketplace import bundle URL](/private-mendix-platform/reference-guide/admin/system/#configure-import).
2. In the **Import Content** > **Import from CDN** tab, view and download the available content items.

### Deployment

In the **Deployment** section, administrators can manage existing clusters and register new ones.

#### Cluster Manager

The **Cluster Manager** page allows administrators to configure clusters to be used in their devOps CI/CD pipelines. To configure a cluster, perform the following steps:

1. In **Switch to Admin Mode** > **Manage** > **Cluster Manager**, click **Register New Cluster**.
2. Configure the following values:
    
    * **Cluster Name** - Specify a name for the cluster.
    * **Cluster type** - Select the cluster type. **Kubernetes** is recommended.
    * **API Server** - Specify your API server.
    * **Token** - You must first create a service account, cluster role, and cluster role binding in the cluster, and then get the service account's token. For an example, see [Configuring Build Cluster Setting](/private-mendix-platform/configure-k8s/#build-cluster).
    * **Enable Logging and Monitoring** - Specify whether Grafana and Prometheus monitoring should be enabled for this cluster.
    * **Package Type** - For Kubernetes and Manual Production Deployment, select the type of package that will be uploaded to environments in this cluster.
    * **S3 Endpoint** - For Kubernetes and Manual Production Deployment, specify the S3 endpoint, for example, `Cloud Object Storage - Amazon S3 - AWS`.
    * **S3 Bucket Name** - For Kubernetes and Manual Production Deployment, specify the S3 bucket name, for example, `mybucket`.
    * **Region** - For Kubernetes and Manual Production Deployment, specify the region, for example, `ap-southeast-1`.
    * **Access Key ID** - For Kubernetes and Manual Production Deployment, this ID value is used to access the S3 bucket.
    * **Secret Access Key** - For Kubernetes and Manual Production Deployment, this secret key value is used to access the S3 bucket.

3. Click **Save**.
4. Click the newly created cluster and expand it, and then click **Retrieve Namespace(s)** to retrieve all the namespace and storage plans, or **Manually Register Namespace**. 
    
    Namespaces without any storage plan are skipped. This step requires the Mendix Operator to be installed and configured. You can repeat this step as required to retrieve additional namespaces.

5. After the cluster is registered, create environments with the cluster, namespace and plans.

##### Configuring CI/CD Pipelines with Manual Approval {#manual-deployment}

If your production and development environments must be fully air-gapped and separated from each other, and you want to limit the ability to deploy packages to either selected users or an automated pipeline with manual approval, you can configure your cluster type to be **Manual Production Deployment**.

Selecting this option allows you to specify an S3 bucket. This bucket is then used as the destination where the deployment package is uploaded at the end of the pipeline, instead of being deployed to the production environment. Designated approvers can then retrieve the package from the S3 bucket and manually deploy it to the target environment.

### Users {#users}

In the **User Management** section, administrators can manage user accounts and user groups.

{{< figure src="/attachments/private-platform/pmp-admin3.png" class="no-border" >}}

As the administrator, you can perform the following actions:

#### User Management

In the **User Management** tab, you can create and edit accounts for your local users and API users (that is, accounts that are used by an API service to access your Private Mendix Platform). By clicking **More Actions** ({{% icon name="three-dots-menu-horizontal" %}}) by an account, you can quickly perform a number of actions:

    * Edit a user's name and email
    * Assign or remove user roles (local users only)
    * Block a user
    * Change a user's password
    * Configure the language and time zone settings for a user (local users only)
    * Log out a user (local users only)
    * Delete a user account

In the **Actions** tab, you can also log out all users currently logged in to your app.

#### Group Management

In the **Group Management** tab, you can create and edit user groups. These groups typically reflect your organization's structure. You can also use the **Automation Settings** option to automatically assign users to groups based on their profile attributes.

### Platform

In the **Deployment** section, administrators can view and manage statistics, activity logs, webhooks, and licenses.

As the administrator, you can perform the following actions:

* In the **Webhooks** tab, you can view and manage your [Webhooks](/developerportal/deploy/webhooks/).
* In the **Licensing** tab, you can check the status of your licenses, or upload a new Private Mendix Platform license bundle.

#### Platform Statistics

In the **Platform Statistics** section, you can access statistics such as the number of users and apps, daily user login times and numbers, or most active users.

#### Activity Logs

For auditing purposes, you can view a log of the most recent actions taken by users of the platform. 

##### Recent Actions

This tab contains a list of the recent actions, logged for the time period specified in the **Log Settings** tab. The following actions are logged:

* Creating and editing user accounts
* Creating and deleting apps
* Creating app packages
* Changing platform settings

You can use the **Search** field to search for a specific action by name.

##### Archived Actions

This tab contains a list of actions that were archived after the period specified in the **Log Settings** tab has expired. You can download the archive if required for auditing purposes.

##### Log Settings

You can select how long the actions are kept in the logs, in days. The minimum number of days is 1, and the maximum is 365. You can also specify the logging level, from no logging to complete logging.

#### Webhooks

In the **Webhooks** tab, you can view and manage your webhooks.

Webhooks allow you to send information about your licensed Mendix app deployed to Mendix Cloud or Mendix for Private Cloud to an external app or workflow. In Private Mendix Platform, you can use them to trigger a step in an automated [Build](/private-mendix-platform/reference-guide/admin/system/#build-steps) or [Deployment](/private-mendix-platform/reference-guide/admin/system/#deploy-steps) pipeline.

For more information about configuring webhooks, refer to [webhooks documentation](/developerportal/deploy/webhooks/).

#### Licensing

On this page, you can view the status of your Private Mendix Platform license, and upload a new license bundle if necessary.

[Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/) must be used to manage the Private Mendix Platform license. It can also be used to manage and provision your own app licenses.

Private Mendix Platform licenses are either **valid** or **not found**; when not found, the Platform operates in developer mode, where access to some features and capabilities is restricted.

{{< figure src="/attachments/private-platform/pmp-wizard2.png" class="no-border" >}}

When valid, licenses can have the following statuses:

* Active (shown in green)
* About to expire (shown in yellow)
* Expired (shown in red)
