---
title: "Node Permissions"
url: /developerportal/deploy/node-permissions/
weight: 18
description: "The permission settings for your node."
tags: ["Node","Permission","Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Fine-grained access management for your Mendix Cloud environments is handled in the **Permissions** tab of the [Environments](/developerportal/deploy/environments/) page for your app.

Here, the [Technical Contact](/developerportal/general/app-roles/#technical-contact) can manage various permissions to the environments for each team member.

Each team member can subscribe to (and unsubscribe from) the alerts.

To learn more about the roles of team members, see [App Roles](/developerportal/general/app-roles/).

## 2 Viewing Your Nodes{#nodes}

To find a list of all Mendix Cloud licensed nodes that you have access to, open the [Switch to](/developerportal/#navigation) menu and select **Cloud**.

You will see a list of all your licensed nodes:

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/node-permissions/nodes-list.png" alt="Licensed Mendix Cloud nodes" >}}

Click **Environments** to go to the [Environments](/developerportal/deploy/environments/) page for the app that is deployed to that node.

## 3 Permissions

In the **Permissions** tab of the **Environments** page, you can manage access to your environments for each team member.

### 3.1 User Roles for Managing Permissions

Users with the Technical Contact role and any team members with **Manage Permissions** enabled can manage the permission settings for the cloud node.

{{% alert color="info" %}}
Mendix Admins can manage permissions using the Deploy API v4. For more information, see [Deploy API – Version 4](/apidocs-mxsdk/apidocs/deploy-api-4/).
{{% /alert %}}

The permissions are set independently for each environment. You can choose the environment at the top of the **Permissions** tab. Changing the permissions for a production environment requires [two-factor authentication](/developerportal/deploy/two-factor-authentication/).

Team members with a user role that includes **Cloud Access** can view the permissions.

{{% alert color="info" %}}
Team members with a user role that includes **Cloud Access** are listed in the **Permissions** tab. This tab also shows deactivated users who have been given these permissions, even though these users no longer have access to your project. 

You can change user roles for team members in [Team](/developerportal/general/team/).
{{% /alert %}}

### 3.2 Accessing Node Permissions

To access the node permissions, do the following:

1. Click **Environments** for your app.
2. Switch to the **Permissions** tab.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/node-permissions/node-permissions.png" >}}

3. From the drop-down menu, select the environment for which you want to change permissions.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/node-permissions/node-flexible-environments.png" >}}

4. Complete two-factor authentication, if required for the selected environment.

### 3.3 Permissions

The Technical Contact and team members specifically allowed to manage permissions can set the following node permissions: **Manage Permissions**, **Transport Rights**, **Access to Backups**, **Receive Alerts**, **API Rights**, and **Access to Monitoring**.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/node-permissions/nodepermission.png" alt="Node permissions dashboard" >}}

#### 3.3.1 Manage Permissions

Team members with **Manage Permissions** permissions can change the permissions granted to team members. Only the Technical Contact has this enabled by default.

{{% alert color="info" %}}
Only the Technical Contact can grant this permission to other team members.
{{% /alert %}}

#### 3.3.2 Transport Rights{#transport-rights}

Team members with **Transport Rights** permissions can deploy new versions of the application to the node. They can also create new deployment packages, stop and start the environment, and change configuration settings such as constants and scheduled events.

For more information about deployment, see [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/).

#### 3.3.3 Access to Backups

Team members with **Access to Backups** permissions can access the backups of the environment. They can view, [create](/developerportal/operate/create-backup/), [download](/developerportal/operate/download-backup/), and [restore](/developerportal/operate/restore-backup/) backups.

For more information, see [Backups](/developerportal/operate/backups/).

#### 3.3.4 Receive Alerts

Team members with **Receives Alerts** permissions will receive an email whenever an alert is triggered.

Alerts are triggered by any of the following circumstances:

* The app goes offline unexpectedly
* The application logs a message with level **Critical**
* The health check fails
* An infrastructure problem occurs

#### 3.3.5 API Rights

Team members with **API Rights** permissions can use the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/) to get programmatic access to the environment.

Because the API does not require two-factor authentication, it is disabled for the production environment by default. The Technical Contact can assign API access for each user.

{{% alert color="info" %}}
Other permissions are needed in addition to **API Rights**. For example, to access backups via the API, you need **Access to Backups** in addition to **API Rights**.
{{% /alert %}}

#### 3.3.6 Access to Monitoring

Team members with **Access to Monitoring** permissions can view the application metrics, logs, and alerts in the [Developer Portal](http://sprintr.home.mendix.com). This allows them to successfully operate your Mendix Cloud environments.

For more information, see [Metrics](/developerportal/operate/metrics/), [Logs](/developerportal/operate/logs/), and [Alerts](/developerportal/operate/monitoring-application-health/).

## 4 Downloading Node Permissions

You may want to have a complete list of node permissions for audit purposes. The Technical Contact can download a list of permissions as a CSV by clicking **Download to CSV**. This button is shown only to Technical Contacts.

The CSV file contains a list of environments, users, and their respective permissions.

In addition, all changes to node permissions are logged on the activity log.

## 5 Technical Contact

A cloud node has a single Technical Contact. They manage the cloud node and can edit the privileges of regular team members.

The Technical Contact can give the Technical Contact role to another team member. To transfer the role from yourself to another user, click **Change to Technical Contact** under the other user's name. Note that only one user at a time can be the Technical Contact.

For full details on this role, see the [Technical Contact](/developerportal/general/app-roles/#technical-contact) section of **App Roles**.

{{% alert color="info" %}}
Mendix Admins can also give the Technical Contact role to another team member using the Deploy API v4. For more information, see [Deploy API – Version 4](/apidocs-mxsdk/apidocs/deploy-api-4/).
{{% /alert %}}

## 6 Read More

* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
