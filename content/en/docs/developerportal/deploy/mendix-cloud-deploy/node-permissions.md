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

Here, the [Technical Contact](/developerportal/collaborate/app-roles/#technical-contact) can manage various permissions to the environments for each team member.

Each team member can subscribe to, or unsubscribe from, the alerts,

See [App Roles](/developerportal/collaborate/app-roles/) to learn more about the roles of team members.

## 2 Viewing Your Nodes{#nodes}

To find a list of all the Mendix Cloud nodes to which you have access, click the **Switch-to** menu in the Developer Portal and choose **Cloud**.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/node-permissions/go-to-nodes-page.png" alt="Licensed Mendix Cloud nodes" >}}

You will see a list of all your nodes:

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/node-permissions/nodes-list.png" alt="Licensed Mendix Cloud nodes" >}}

Clicking **Environments** will take you to the [Environments](/developerportal/deploy/environments/) page for the app that is deployed to this node.

## 3 Permissions

Permissions allow you to give specific access to your environments to individual members of a team.

### 3.1 User Roles for Managing Permissions

Only users with the *Technical Contact* role or team members specifically allowed to *Manage Permissions* can manage the permission settings for the cloud node.

The permissions are set independently for each environment. You can choose the environment at the top of the *Permissions* tab. Changing the permissions for a *production* environment will require two-factor authentication (see [Two-Factor Authentication](/developerportal/deploy/two-factor-authentication/)).

Only team members who have permission to *Deploy, Publish, and Monitor* can view the permissions.

{{% alert color="info" %}}

Only team members with a *user role* which includes permission to *Deploy, Publish, and Monitor* the app will be listed in the Node Permissions tab. For completeness, you will also see deactivated users who have been given these permissions, even though they no longer have access to your project. 

You can change permissions for team members in [Team](/developerportal/collaborate/team/).

{{% /alert %}}

### 3.3 Accessing Node Permissions

To access the node permissions, do the following:

1. Click **Environments** for your app.

2. Open the **Permissions** tab.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/node-permissions/node-permissions.png" >}}

3. Select the environment for which you want to change permissions from the drop-down.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/node-permissions/node-flexible-environments.png" >}}

4. Complete two-factor authentication, if required for the selected environment.

### 3.4 Permissions

The Technical Contact and team members specifically allowed to *Manage Permissions* can set the following node permissions.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/node-permissions/nodepermission.png" >}}

#### 3.4.1 Manage Permissions

With Manage Permissions, team members other than the Technical Contact can change the permissions granted to team members.

{{% alert color="info" %}}
Only the Technical Contact can grant this permission to other team members.
{{% /alert %}}

#### 3.4.2 Transport Rights

With Transport Rights you can deploy new versions of the application to the node. You can also create new deployment packages, stop and start the environment, and change configuration settings such as constants and scheduled events.

For more information about deployment, see [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/).

#### 3.4.3 Access to Backups

The Access to Backups permission grants access to the backups of the environment. You can view, [create](/developerportal/operate/create-backup/), [download](/developerportal/operate/download-backup/), and [restore](/developerportal/operate/restore-backup/) backups.

For more information, see [Backups](/developerportal/operate/backups/).

#### 3.4.4 Receive Alerts

When Receives Alerts is checked, this user will receive an email when an alert is triggered.

Alerts are triggered by any of the following circumstances:

* the app goes offline unexpectedly
* the application logs a message with level *Critical*
* the health check fails
* one of a number of infrastructure problems occurs

#### 3.4.5 API Rights

With API rights, you can use the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/) to get programmatic access to the environment.

As the API does not require two-factor authentication, it is disabled for the production environment by default. The Technical Contact can assign API access for each user.

{{% alert color="info" %}}
Other permissions are needed in addition to *API Rights*.

For example, to access backups via the API you need *Access to Backups* in addition to *API Rights*.
{{% /alert %}}

#### 3.4.6 Access to Monitoring

With the Access to Monitoring permission, you can view the application metrics, logs, and alerts in the [Developer Portal](http://sprintr.home.mendix.com). This allows you to successfully operate your Mendix Cloud environments.

For more information, see [Metrics](/developerportal/operate/metrics/), [Logs](/developerportal/operate/logs/), and [Alerts](/developerportal/operate/monitoring-application-health/).

## 4 Downloading Node Permissions

You may want to have a complete list of node permissions for audit purposes. The Technical Contact can download a list of permissions as a CSV by clicking the **Download to CSV** button. This button is only shown to Technical Contacts.

The CSV file will contain a list of environments, users, and their respective permissions.

In addition, all changes to node permissions will be logged on the activity log.

## 5 Technical Contact

A cloud node has a single Technical Contact. They manage the cloud node and can edit the privileges of regular team members.

The Technical Contact can give the technical contact role to another team member. Click **Change to Technical Contact** under the user who should be the new Technical Contact. After this, the new user has the Technical Contact role, the old user does not.

For full details on this role, see the [Technical Contact](/developerportal/collaborate/app-roles/#technical-contact) section of *App Roles*.
