---
title: "Private Mendix Platform Administration Guide"
url: /private-mendix-platform/administration/
description: "Documents the business-as-usual administrator tasks for the Private Mendix Platform."
weight: 40
aliases:
    - /private-mendix-platform-administration/
---

## 1 Introduction

As a user with Administrator access rights, you can perform the business-as-usual administrator tasks such as  app management and user management. You can also manage Marketplace-related settings for your company.

## 2 Accessing the Admin Mode

Administrator tasks are available when you are in admin mode. To access the admin mode, perform the following steps.

1. Log in to Private Mendix Platform as a user with Administrator access.
2. In the upper right corner of the screen, click on the user icon, and then select **Switch to Admin Mode**.

{{< figure src="/attachments/private-platform/pmp-admin4.png" class="no-border" >}}

The left navigation pane now displays the available options, grouped in the following sections:

* **Manage** - This section give you access to the business-as-usual tasks that you may need to perform on a regular basis as an administrator. This includes managing apps, users, deployments, and other settings. For more information, refer to the following sections of this document.
* **Settings** - This section gives you access to the settings that you may need to configure as part of setting up Private Mendix Platform. Settings in this section usually do not need to be modified as part of your business-as-usual administrator tasks. For more information, see [Configuring Private Mendix Platform](/private-mendix-platform/configuration/).

## 3 Managing and Importing Apps

In the **Apps** section, you can manage your apps' ownership and status, as well as import new apps from your GitHub repository.

### 3.1 App Management

The **App Management** page shows a summary of your apps.

{{< figure src="/attachments/private-platform/pmp-admin1.png" class="no-border" >}}

Click an app name to see more details about the app.

By clicking **Action** ({{% icon name="three-dots-menu-horizontal" %}}) in the app tile, you can quickly perform a number of actions:

* Edit details such as app name and description
* Invite users to work on the app
* View the Git revisions per branch for the app
* Assign the app to a new owner or group
* Archive the app, provided you are the only team member.
    
    You will be warned of the consequences and asked for confirmation before the app is archived.

* Delete the app, provided you are the only team member.
    
    You will be warned of the consequences and asked for confirmation before the app is archived.

### 3.2 Import Apps

The **Import Apps** page lets you scan for apps that users have added to your GitHub repository, and easily import them into your Platform environment.

To view the available apps, click **Scan for Apps**. After the scan is completed, the page shows the list of apps in your GitHub repository. You can import any or all of them by clicking **Import App** or **Import All Apps**.

For any imported apps, you can click **Show App** to switch to the app.

{{< figure src="/attachments/private-platform/pmp-admin5.png" class="no-border" >}}

## 4 Managing the Marketplace

In the **Marketplace** section, you can manage various settings related to the content available on the Private Platform Marketplace. The Private Platform Marketplace is a local version of the [Mendix Marketplace](/appstore/overview/), enclosed entirely within the Private Platform. Developers in your organization can also create their own modules, connectors, and sample apps, and share them on the Private Platform Marketplace to make them available to other users.

{{< figure src="/attachments/private-platform/pmp-admin2.png" class="no-border" >}}

### 4.1 Content Management

The **Content Management** page displays the Marketplace content that your users have published, as well as any items which are pending approval, or which have been declined. Click a content item name to see more details about the content. You can perform the following action for each content item:

* View and edit details such as the name, type, category, or license
* Specify which groups have the right to view the content
* View and download the current or previous versions of the content
* Assign the content to a new owner or group
* Delete the content.

For content items that are pending approval, you can allow them to be published, or decline them. You can also decline items that have already been published.

### 4.2 Taxonomy Management

On the **Taxonomy Management** page, you can configure the supported Studio Pro versions and app categories that your users can select when creating Marketplace content. You can also view and edit the available licenses.

### 4.3 Content Import

You can populate your private Marketplace with contents by importing a zip file that contains the content packages along with a *package.json* file. You can upload the file from a Content Delivery Network, or manually from your local machine.

#### 4.3.1 Manully Importing Marketplace Content

To manually upload a content bundle from your own computer, perform the following steps:

1. Download the Marketplace Bundle with contents available in a zip file. If you do not have access to the bundle, contact your Mendix point of contact.
2. In the **Content Import** > **Upload Markeplace Bundle** tab, drag and drop the file that you want to upload.

    {{% alert color="info" %}}<ul><li>The file must be in *zip* format.</li><li>The file must not be larger than 2048 MB.</li><li>Your infrastructure must support the upload of large files (up to 2048MB).</li><li>You should also have at least 40 GB available disk space to account for temporary files.</li></ul>
    {{% /alert %}}

3. Click **Import Marketplace Bundle components**.

    {{< figure src="/attachments/private-platform/pmp-config1.png" class="no-border" >}}

4. To view the progress of your upload, click **Open Task Queue**.

    {{< figure src="/attachments/private-platform/pmp-config2.png" class="no-border" >}}

{{% alert color="info" %}}
If you are experiencing high latency during manual uploads, you can increase the timeouts. For example, for nginx, you can perform the following commands:

```text
nginx.ingress.kubernetes.io/client-header-timeout: "300"
nginx.ingress.kubernetes.io/proxy-connect-timeout: "300"
nginx.ingress.kubernetes.io/proxy-read-timeout: "300"
nginx.ingress.kubernetes.io/proxy-send-timeout: "300"
```

{{% /alert %}}

#### 4.3.2 Importing Marketplace Content from a CDN

To enable content import from a Content Delivery Network, follow these steps:

1. Download the Marketplace Bundle with contents available in a zip file. If you do not have access to the bundle, contact your Mendix point of contact.
2. Unzip the files to an internal location which Private Mendix Platform can access via HTTP or HTTPS. Do not change the directory structure.
3. If using a self-signed certificate for your internal locations, configure Mendix Operator to trust your private Certificate Authorities. For more information, see [Creating a Private Cloud Cluster](/developerportal/deploy/standard-operator/#custom-tls).
4. In the **Content Import** tab, in the **Marketplace import bundle URL** field, enter the root URL of the *package.json* file included in the Marketplace download. 

    For example, if the *package.json* can be accessed at the URL `https://<your domain>/release/marketplace/Marketplace-1.0/package.json`, enter the following URL: `https://<your domain>/release/marketplace/Marketplace-1.0/`.

    {{< figure src="/attachments/private-platform/pmp-config3.png" class="no-border" >}}

5. Set the toggle **Enable content import with external source** to **ON**.
6. Click **Save** to enable content import from this bundle.
7. In the **Content Import** > **Import from CDN** tab, you can now view the available downloads.

## 5 Deployment

## 6 Users

In the **Users** section, administrators can manage user accounts and user groups.

{{< figure src="/attachments/private-platform/pmp-admin3.png" class="no-border" >}}

As the administrator, you can perform the following actions:

* In the **User Management** tab, you can create and edit accounts for your local users and API users (that is, accounts that are used by an API service to access your Private Mendix Platform). By clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) by an account, you can quickly perform a number of actions:

    * Edit a user's name and email
    * Assign or remove user roles
    * Block a user
    * Change a user's password
    * Configure the language and time zone settings for a user
    * Delete a user account

In the **Group Management** tab, you can create and edit user groups. These groups typically reflect your organization's structure. You can also use the **Automation Settings** option to automatically assign users to groups based on their profile attributes.

## 7 Platform

In the **Platform** section, administrators can view logs and statistics, upload licenses, and configure webhooks.

