---
title: "Groups"
url: /control-center/groups/
description: "Describes the Groups page in the Mendix Control Center."
weight: 25
no_list: true 
---

{{% alert color="info" %}}
A member in Control Center means a user of the Mendix platform who participates in the development process. It does not mean an end-user of an app built in the Mendix Platform.
{{% /alert %}}

## Introduction

A Mendix Admin can set up **App Access Groups**, which consist of end-users (who are active users of Mendix Platform in your company) who will have access to [Mendix SSO](/appstore/modules/mendix-sso/)-enabled apps with specific environments and roles.

## Adding Access Group

To create a new group, click **Add Access Group**  on the upper-right corner and then enter the **Name** and **Description**.

## Overview of Access Groups

Click a group name on the list to bring up the group details pop-up window. Then you can click **Add Member** to add a Mendix Platform user in your company to the group. When you add someone to an app access group, they will automatically be granted access to the apps listed on **Accessible Apps** tab. After you select an app to be accessible for the group, you also need to select a specific app [environment](/developerportal/deploy/environments/) node to be accessible, in addition to specific [user roles](/refguide/user-roles/) that should be able to access the app.

{{< figure src="/attachments/control-center/groups/access-group.jpg" class="no-border" >}}

{{% alert color="warning" %}}
You can only add apps that utilize [Mendix SSO](/appstore/modules/mendix-sso/) to App Access Groups.
{{% /alert %}}

When you select groups in the list, Mendix Platform users in your company, or accessible apps in the group details page, a context menu will appear with options for exporting item details to an *.xlsx* file, deleting access groups, removing the Mendix Platform users in your company from access groups, and removing accessible apps.
