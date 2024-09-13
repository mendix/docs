---
title: "Migrate to Git"
url: /developerportal/general/migrate-to-git/
weight: 10
description: "Describes how to migrate apps to Git."
aliases:
    - /developerportal/collaborate/migrate-to-git/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

Scrum Masters can migrate apps from SVN version control system to Git. For more information on version control, see [Version Control](/refguide/version-control/) in the *Studio Pro Guide*. 

Git is a more modern version control system that has several advantages over SVN. For more information, see [Version Control FAQ](/refguide/version-control-faq/).

## Apps Eligible for Migration

To be able to migrate your app to Git, your app needs to meet the following criteria:

* The main line ('main') branch in the app is Mendix version 9.24.11 or above
* All branches in the app are Mendix version 9.12 or above
* Current version control is in Team Server SVN
* The size of the `.mpr` file for the latest revision of your app and the total number of commits in your version control history fall in one of these two categories:

    1. `.mpr` file smaller than 75 MB
    2. fewer than 2000 commits and `.mpr` file smaller than 125 MB

{{% alert type="info" %}}

Only a user with the Scrum Master role can migrate an app. For more information, see [App Roles](/developerportal/general/app-roles/). 

{{% /alert %}}

## How Migration Works

If your main line is Mendix version 9.24.11 or above, and your team role is Scrum Master, you see a notification on a possible migration at the top of the **Team Server** page for your app. Click **Migrate to Git** to check for migration eligibility and to start the migration.

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

## Steps After Migration

After migration, existing local copies are no longer linked to a working version control system. To be able to work on your app and store your changes in the version control system, you need to check out (re-download) the app from Team Server. Do the following:

1. Open Studio Pro, then select the app that was migrated to Git. You can identify it by its Git icon. Click **Open** in Studio Pro to download the Git version of your app. Once this is completed you can make changes and store them in version control.
2. Remove previous local copies of the app to avoid working on the wrong app version.

## If Migration Failed

If the migration process failed, all changes are rolled back. This means access to SVN is restored and you can keep developing your app.
You can check common causes of a failed migration below and resolve them. After that you can attempt to migrate your app again.

The *most likely reason* your migration has failed is that you have branches that are invalid: they are below Mendix 9.12. To resolve this, delete or upgrade these branches. 

## Read More

* [Version Control](/refguide/version-control/)
* [Version Control FAQ](/refguide/version-control-faq/)
