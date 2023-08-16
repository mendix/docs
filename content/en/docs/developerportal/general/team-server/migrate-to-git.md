---
title: "Migrate to Git"
url: /developerportal/general/migrate-to-git/
aliases:
    - /developerportal/collaborate/migrate-to-git/
weight: 10
description: "Describes how to migrate apps to Git."
tags: ["Studio Pro", "Team Server", "migration", "Git", "migrate"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

Scrum Masters can migrate apps from SVN version control system to Git. For more information on version control, see [Version Control](/refguide/version-control/) in the *Studio Pro Guide*. 

Git is a more modern version control system that has several advantages over SVN. For more information, see [Version Control FAQ](/refguide/version-control-faq/).

## 2 Apps Eligible for Migration

To be able to migrate your app to Git, your app needs to meet the following criteria:

* Mendix version of *all branches* in the app is 9.12 or above
* Current version control is in Team Server SVN

{{% alert type="info" %}}

Only a user with the Scrum Master role can migrate an app. For more information, see [App Roles](/developerportal/general/app-roles/). 

{{% /alert %}}

{{% alert color="warning" %}}

At this moment we are limited in our ability to migrate large SVN repositories. If the full SVN repository including all history and branches exceeds approximately 80GB, migration will likely fail. We are working on solutions to both notify you when this issue applies to you and to extend our migration capabilities for large repositories.

{{% /alert %}}

## 3 How Migration Works

If your app is eligible for migration and your team role is Scrum Master, you see a notification on possible migration at the top of all pages within the **Collaborate** section. Click **Migrate to Git** to start migration:

{{< figure src="/attachments/developerportal/general/team-server/migrate-to-git/migrate-to-git.jpg" >}}

During migration all app history, including revisions for all branches, is copied from SVN to Git. 

{{% alert type="info" %}}

Deleted SVN branches are not mapped to Git branches by the migration process. If the deleted branch was not merged to a non-deleted branch prior to the migration, all commits are lost.

{{% /alert %}}

Access to SVN is disabled as soon as migration starts to prevent developers from making changes to SVN that will not be copied. If migration fails for any reason, it is rolled back and access to SVN is restored.

To inform your team members about the process, two emails are sent out automatically:

* Migration started
* Migration completed or migration failed

These emails give brief information about the stage and emphasize that changes made during migration will be lost, since they cannot be committed to SVN anymore.

{{% alert type="warning" %}}

Inform your team members that they should commit their changes before migration.

{{% /alert %}}

## 4 Steps After Migration

After migration, existing local copies are no longer linked to a working version control system. To be able to work on your app and store your changes in the version control system, you need to check out (re-download) the app from Team Server. Do the following:

1. Open Studio Pro, then select the app that was migrated to Git. You can identify it by its Git icon. Click **Open** in Studio Pro to download the Git version of your app. Once this is completed you can make changes and store them in version control.
1. Remove previous local copies of the app to avoid working on the wrong app version.

## 5 If Migration Failed

If the migration process failed, all changes are rolled back. This means access to SVN is restored and you can keep developing your app.
You can check common causes of a failed migration below and resolve them. After that you can attempt to migrate your app again.

The *most likely reason* your migration has failed is that you have branches that are invalid: they are below Mendix version 9.12. To resolve this, delete or upgrade these branches. 

Migration failure may be also caused by the naming of your branches. You can resolve such migration failures by connecting to Tortoise SVN. For more information, see the [Working Outside Studio Pro](/refguide/using-version-control-in-studio-pro/#working-outside-studio-pro) section in *Using Version Control in Studio Pro*. Reasons can be one of the following:

* There are no branches called *branches/trunk* or *branches/tags*.
* There are branches with the same name but a different casing, such as *branch1* and *BRANCH1*.
* There are branches with a name that is not valid in Git, for more information see [Git Documentation](https://git-scm.com/docs/git-check-ref-format).

## 6 Read More

* [Version Control](/refguide/version-control/)
* [Version Control FAQ](/refguide/version-control-faq/)
