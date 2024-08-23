---
title: "Node Permissions"
url: /developerportal/deploy/node-permissions/
weight: 80
description: "The permission settings for your node."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

Fine-grained access management for your Mendix Cloud environments is handled in the **Permissions** tab of your app's [Environments](/developerportal/deploy/environments/) page.

On this tab, the [Technical Contact](/developerportal/general/app-roles/#technical-contact) and any team members with **Manage Permissions** enabled can manage various permissions to the environments for each team member.

Team members who have a role with **Cloud Access** can view the permissions. For more information, see [App Roles](/developerportal/general/app-roles/).

## Viewing Your Nodes{#nodes}

To find a list of all Mendix Cloud licensed nodes that you have access to, open the [Global Navigation menu](/developerportal/global-navigation/) and click **Deployment**.

You will see a list of all your licensed nodes:

{{< figure src="/attachments/deployment/mendix-cloud-deploy/node-permissions/nodes-list.png" alt="Licensed Mendix Cloud nodes" class="no-border" >}}

To go to the [Environments](/developerportal/deploy/environments/) page for the app that is deployed to a node, click **Environments** on that node.

## Permissions{#permissions-tab}

In the **Permissions** tab of the **Environments** page, you can manage access to your environments for each team member.

### User Roles for Managing Permissions

The Technical Contact and any team members with **Manage Permissions** enabled can manage the permission settings for the cloud node.

{{% alert color="info" %}}
Mendix Admins can manage permissions using the Deploy API v4. For more information, see [Deploy API – Version 4](/apidocs-mxsdk/apidocs/deploy-api-4/).
{{% /alert %}}

Permissions are set independently for each environment. To choose the environment, use the drop-down list in the upper-right corner of the **Permissions** tab. Changing the permissions for a production environment requires [two-factor authentication](/developerportal/deploy/two-factor-authentication/).

Team members with a user role that includes **Cloud Access** can view the permissions.

{{% alert color="info" %}}
Team members with a user role that includes **Cloud Access** are listed in the **Permissions** tab. This tab also shows deactivated users who have been given these permissions, even though these users no longer have access to your project.<br><br>You can change user roles for team members in [Team](/developerportal/general/team/).
{{% /alert %}}

### Accessing Node Permissions

To access the node permissions, do the following:

1. Click **Environments** for your app.
2. Switch to the **Permissions** tab.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/node-permissions/permissions-tab.png" class="no-border" >}}

3. From the drop-down list in the upper-right corner, select the environment for which you want to change permissions.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/node-permissions/change-environments.png" alt="" width=25% class="no-border" >}}

4. If prompted, complete two-factor authentication.

### Permissions

The Technical Contact can enable and disable **Manage Permissions** for the other team members. Any team members with **Manage Permissions** enabled can set the following node permissions: **Transport Rights**, **Access to Backups**, **Receive Alerts**, **API Rights**, and **Access to Monitoring**.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/node-permissions/node-permission.png" alt="Node permissions dashboard" class="no-border" >}}

#### Manage Permissions

Team members with **Manage Permissions** permissions can change the permissions granted to team members. Only the Technical Contact has this enabled by default.

{{% alert color="info" %}}
Only the Technical Contact can grant this permission to other team members.
{{% /alert %}}

#### Transport Rights{#transport-rights}

Team members with **Transport Rights** permissions can deploy new versions of the application to the node. They can also create new deployment packages, stop and start the environment, and change configuration settings such as constants and scheduled events.

For more information about deployment, see [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/).

#### Access to Backups

Team members with **Access to Backups** permissions can access the backups of the environment. They can view, [create](/developerportal/operate/create-backup/), [download](/developerportal/operate/download-backup/), and [restore](/developerportal/operate/restore-backup/) backups.

For more information, see [Backups](/developerportal/operate/backups/).

#### Receive Alerts

Team members with **Receive Alerts** permissions will receive an email whenever an alert is triggered.

Alerts are triggered by any of the following circumstances:

* The app goes offline unexpectedly
* The application logs a message with level **Critical**
* The health check fails
* An infrastructure problem occurs

#### API Rights

Team members with **API Rights** permissions can use the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/) to get programmatic access to the environment.

Because the API does not require two-factor authentication, it is disabled for the production environment by default. The Technical Contact can assign API access for each user.

{{% alert color="info" %}}
Other permissions are needed in addition to **API Rights**. For example, to access backups via the API, you need **Access to Backups** in addition to **API Rights**.
{{% /alert %}}

#### Access to Monitoring

Team members with **Access to Monitoring** permissions can view the application metrics, logs, and alerts in [Apps](https://sprintr.home.mendix.com). This allows them to successfully operate your Mendix Cloud environments.

For more information, see [Metrics](/developerportal/operate/metrics/), [Logs](/developerportal/operate/logs/), and [Alerts](/developerportal/operate/monitoring-application-health/).

## Downloading Node Permissions

You may want to have a complete list of node permissions for audit purposes. The Technical Contact can download a list of permissions as a CSV by clicking **Download to CSV**. This button is shown only to Technical Contacts.

The CSV file contains a list of environments, users, and their respective permissions.

In addition, all changes to node permissions are logged on the activity log.

## The Technical Contact

A cloud node has a single Technical Contact. The Technical Contact manages the cloud node and can control whether the other team members have access to **Manage Permissions**.

The Technical Contact can give the Technical Contact role to another team member. To transfer the role from yourself to another user, click **Change to Technical Contact** under the other user's name. Note that only one user at a time can be the Technical Contact.

For full details on this role, see the [Technical Contact](/developerportal/general/app-roles/#technical-contact) section of *App Roles*.

{{% alert color="info" %}}
Mendix Admins can also give the Technical Contact role to another team member using the Deploy API v4. For more information, see [Deploy API – Version 4](/apidocs-mxsdk/apidocs/deploy-api-4/).
{{% /alert %}}

## Read More

* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
