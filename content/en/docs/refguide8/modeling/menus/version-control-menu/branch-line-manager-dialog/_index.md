---
title: "Branch Line Manager"
url: /refguide8/branch-line-manager-dialog/
weight: 80
tags: ["studio pro", "manage branch lines", "branch line manager"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/branch-line-manager-dialog.pdf).
{{% /alert %}}

## 1 Introduction

The **Branch Line Manager** is used to manage [branch lines](/refguide8/version-control/#branches) of an app that is stored on a version control server:

{{< figure src="/attachments/refguide8/modeling/menus/version-control-menu/branch-line-manager-dialog/branch-line-manager.png" alt="Branch Line Manager" >}}

To view the **Branch Line Manager** dialog box, open **Version Control** > **Manage Branch Lines**.

A branch line allows independent development from other development lines. There are two main reasons for creating a branch line:
1. To do maintenance development on a version of your app that is running in production. You can keep on developing in the main line while you fix issues in the branch line.
2. If you are starting the development of a very large feature that will take more than a day to develop. By doing this in a branch line you can commit the half-implemented feature (possibly even with errors) without disturbing other development in the main line.

## 2 Location

Use this setting to select the location where your app is stored. This can be either the [Team Server](#team-server-app) or [another SVN server](#other-svn-server-app).

{{% alert color="warning" %}}

This option is only available when support for other SVN servers is enabled in the Preferences dialog.

{{% /alert %}}

### 2.1 Team Server App {#team-server-app}

Select the Team Server app of which you want to manage the branch lines. If you have an app open in Studio Pro it will be selected automatically. However, you can also manage branch lines without opening an app first, in which case no app will be selected.

For more information about the Mendix Team Server, see [Team Server](/developerportal/collaborate/team-server/).

### 2.2 Other SVN Server App {#other-svn-server-app}

In the **SVN repository address field**, enter the address of the app you want to manage and click **Connect** to load the available branches from the repository.

## 3 Managing Branch Lines

In the **Branch Line Manager**, you can create and delete branch line, enable and disable Mendix Studio for the project. For more information on how to perform these actions, see the [Managing Development Lines in Studio Pro](/refguide8/collaborative-development/#managing-branches) section in *Collaborative Development*. 

## 4 Read More

* [Version Control](/refguide8/version-control/)
* [Collaborative Development](/refguide8/collaborative-development/)
