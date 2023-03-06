---
title: "Migrate to Git"
url: /developerportal/collaborate/migrate-to-git/
weight: 10
description: "Describes how to migrate apps to Git."
tags: ["Studio Pro", "Team Server", "migration", "Git", "migrate"]
---

## 1 Introduction

Scrum masters can migrate apps from SVN version control system to Git. For more information on version control, see [Version Control](/refguide/version-control/) in *Studio Pro 9 Guide*. 

Git is a more modern version control system that has several advantages over SVN. For more information on advantages of Git, see the [What Are the Advantages of Team Server Git over Team Server SVN?](/refguide/version-control-faq/#git-advantages) section in *Version Control FAQ*.

## 2 Apps Eligible for Migration

To be able to migrate your app to Git, your app needs to meet the following criteria:

* Mendix version of *all branches* in the app is 9.12 or above
* Current version control is in Team Server SVN

{{% alert type="info" %}}

Only a user with the Scrum master role can migrate an app. For more information, see [App Roles](/developerportal/collaborate/app-roles/). 

{{% /alert %}}

## 3 How Migration Works

If your app is eligible for migration and your team role is Scrum master, you see a notification on possible migration at the top of the **Team Server** screen. Click **Migrate to Git** to start migration:

{{< figure src="/attachments/developerportal/collaborate/team-server/migrate-to-git/migrate-to-git.jpg" >}}

During migration all app history, including revisions for all branches, is copied from SVN to Git. 

Access to SVN is disabled as soon as migration starts to prevent developers from making changes to SVN that will not be copied. If migration fails for any reason, it is rolled back and access to SVN is restored.

To inform your team members about the process, several emails are sent out automatically :

* Migration started
* Migration completed or migration failed

These emails give brief information about the stage and emphasize that changes made during migration will be lost, since they cannot be committed to SVN anymore.

{{% alert type="warning" %}}

Inform your team members that they should commit their changes before migration.

{{% /alert %}}

## 4 Steps After Migration

After migration is completed all developers need to check out (re-download) the app from Team Server and remove existing local copies, since developers can no longer interact with SVN. For more information, see [Migrating from SVN to Git: Steps After Migration and Process Differences](/refguide/svn-git-differences/).

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
* [Migrating from SVN to Git: Steps After Migration and Process Differences](/refguide/svn-git-differences/)
