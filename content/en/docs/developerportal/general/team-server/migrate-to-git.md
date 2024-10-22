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

If your main line is Mendix version 9.24.28 or above, and your team role is Scrum Master, you see a notification on a possible migration at the top of the **Team Server** page for your app. Click **Migrate to Git** to check for migration eligibility and to start the migration.

## Apps Eligible for Migration

{{% alert type="info" %}}

Only a user with the Scrum Master role can migrate an app. For more information, see [App Roles](/developerportal/general/app-roles/). 

{{% /alert %}}

To migrate to Git your app needs to meet several criteria. The automatic eligibility check validates whether your app meets the criteria mentioned below, and checks your SVN repository on certain technical aspects such as Git branch naming conventions. The check can take a couple of minutes, depending on the size of your repository.

These criteria determine whether your app can be migrated to Git:

* The main line ('main') branch in the app is Mendix version 9.24.28 or above
* All branches in the app are Mendix version 9.12 or above
* Current version control is in Team Server SVN
* The size of the `.mpr` file for the latest revision should be smaller than 400 MB

In addition to the hard criteria mentioned above, a check is performed to determine whether your version control history can be migrated or not. To qualify for migrating your history, your app needs to meet this threshold:

* The size of your full SVN repository should be smaller than 3.5 GB

### Eligibility Check Outcomes

#### Not Eligible for Migration

If your app is not eligible for migration the reason(s) will be listed on the page. Resolve these and try again, to continue with the migration.

In case there are reasons you can't address, please reach out to Support or your Customer Success Manager to discuss the options.

#### Eligible for Migrating Without History

If your app is eligible for migration but the SVN repository size exceeds the threshold, you can only migrate the latest commit of the main branch. This limitation has been imposed to guarantee a smooth experience post-migration, as a [large Git Repository Size](/refguide/troubleshoot-repository-size/) can have a detrimental effect on the developer experience.

{{% alert type="info" %}}

You will receive a full backup of your SVN repository after completing the migration.

{{% /alert %}}

#### Eligible for Migrating With History

In case you are eligible for migrating with your history, you will have to choose whether to retain your history when migrating or not. For the smoothest experience post-migration we advise you to migrate without history.

## How Migration Works

If you choose to continue your app will permanently be migrated ot Git, which is not reversible. The path differs for migrating with or without your history.

Access to SVN is disabled as soon as migration starts to prevent developers from making changes to SVN that will not be copied. If migration fails for any reason, it is rolled back and access to SVN is restored.

To inform your team members about the process, two emails are sent out automatically:

* Migration started
* Migration completed or migration failed

These emails give brief information about the stage and emphasize that changes made during migration will be lost, since they cannot be committed to SVN anymore.

### Migrating With History

During migration all app history, including revisions for all branches, is copied from SVN to Git. 

Depending on the size of your repository, the migration can take several hours to complete. If you have a large number of commits, we recommend doing this when developers don't need access to the repository, for example during the night.

{{% alert color="info" %}}

Inform your team members that they should commit their changes before starting the migration.

{{% /alert %}}

{{% alert color="warning" %}}

Deleted SVN branches are not mapped to Git branches by the migration process. If the deleted branch was not merged to a non-deleted branch prior to the migration, all commits are lost.

{{% /alert %}}

### Migrating Without History

During migration only the last revision of the main branch is copied from SVN to Git.

The migration should take a matter of minutes to complete.

After completion of the migration a full backup of your SVN repository will be created and made available to all Scrum Masters. You will receive an email with information how to download the backup, which will remain available for 3 months. A month before this backup expires all Scrum Masters on the app will receive another email.

{{% alert color="info" %}}

Inform your team members that they should commit their changes and merge them to the main line before starting the migration.

{{% /alert %}}

{{% alert color="warning" %}}

All work not merged to the main branch will not be migrated to your Git repository.

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
