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

If your main line is Studio Pro version 9.24.28 or above and your team role is Scrum Master, you see a notification on a possible migration at the top of the **Team Server** page for your app. Click **Migrate to Git** to check for migration eligibility and to start the migration.

## When to Migrate from SVN to Git

Mendix recommends to combine a migration to Git with an upgrade to Mendix 10, as the advantages of Git in Mendix 9 are limited. For more details on this recommendation, see the [Recommendation on Avoiding Git Issues](/refguide/troubleshoot-repository-size/#recommendation) section in *Troubleshooting Repository Size*.

## Apps Eligible for Migration

{{% alert type="info" %}}

Only a user with the Scrum Master role can migrate an app. For more information, see [App Roles](/developerportal/general/app-roles/). 

{{% /alert %}}

To migrate to Git your app needs to meet several criteria. The automatic eligibility check validates whether your app meets the criteria mentioned below, and checks your SVN repository on certain technical aspects such as Git branch naming conventions. The check can take a couple of minutes, depending on the size of your repository.

The following criteria determine whether your app can be migrated to Git:

* The main line ('main') branch in the app is Studio Pro version 9.24.28 or above
* All branches in the app are Studio Pro version 9.12 or above
* Current version control is in Team Server SVN
* The size of the *mpr* file for the latest revision is smaller than 400 MB

In addition to the hard criteria mentioned above, a check is performed to determine whether your version control history can be migrated. To qualify for migrating your history, the size of your full SVN repository should be smaller than 3.5 GB.

{{% alert type="info" %}}

The eligibility check does not display your repository size, and Support Engineers do not have access to this information. Additionally, deleting branches will not reduce the server-side repository size due to the way SVN manages data.

{{% /alert %}}

### Eligibility Check Outcomes

#### Eligible for Migrating With History

If your repository is eligible for migrating with full history, you can choose whether to retain your history during migration or not. For the smoothest experience after the migration, Mendix advises to migrate without history.

#### Eligible for Migrating Without History

If your app is eligible for migration, but the SVN repository size exceeds the threshold, you can only migrate the latest commit of the main branch. This limitation has been imposed to guarantee a smooth experience after the migration, as a [large Git Repository Size](/refguide/troubleshoot-repository-size/) can have a negative effect on the developer experience.

{{% alert type="info" %}}

You will receive a full backup of your SVN repository after completing the migration.

{{% /alert %}}

#### Not Eligible for Migration

If your app is not eligible for migration the reason(s) will be listed on a page. To continue the process, resolve these reasons and try again.

##### MPR File Size

When the size of the *.mpr* file exceeds the threshold, migration is blocked to prevent rapid repository growth after migrating to Git. To get your app approved for migration, you have to agree on the following steps with Support or your Customer Success Manager:

1. [Migrate without history](#without-history). This requires converging all branches which you want to retain.
2. Update your app to Studio Pro version 10.18 or above, and convert to [MPRv2](/refguide10/troubleshoot-repository-size/#mprv2). If you upgrade to Studio Pro 10.22 and above, the conversion will happen automatically. 
3. Execute a [Git cleanup](/refguide/troubleshoot-repository-size/#cleanup-tool).

The first two steps need to be executed within a short timeframe. The last step is technically optional, but is strongly recommended for the best experience.

## How Migration Works

If you choose to continue, your app will permanently be migrated to Git and this will not be reversible. The process differs for migrating with or without your history. For more information, see [Migrating Without History](#without-history) and [Migrating With History](#with-history) sections below.

Access to SVN is disabled as soon as migration starts to prevent developers from making changes to SVN that will not be copied. If migration fails for any reason, it is rolled back and the access to SVN is restored.

To inform your team members about the process, two emails are sent out automatically:

* Migration started
* Migration completed or migration failed

These emails give brief information about the stage and emphasize that changes made during migration will be lost, since they cannot be committed to SVN anymore.

### Migrating Without History {#without-history}

During migration without history, only the last revision of the main branch is copied from SVN to Git.

The migration should take a few minutes to complete.

After migration is completed a full backup of your SVN repository is created and made available to all Scrum Masters for a period of 90 days. They receive an email with information on how to download the backup. Several days before this backup expires all Scrum Masters on the app receive another email.

{{% alert color="info" %}}

Inform your team members that they should commit their changes and merge them to the main line before starting the migration.

{{% /alert %}}

{{% alert color="warning" %}}

All work not merged to the main branch will not be migrated to your Git repository.

{{% /alert %}}

#### Using an SVN Backup

All Scrum Masters receive an email with a link to download an SVN backup. The backup can also be accessed through `https://git-migration.home.mendix.com/p/view-backup/[repository-ID]`, where you need to fill in the *[repository-ID]*.

You can then download a *[repository-id].dump* file to your local device and you can use this file to restore the repository locally.

{{% alert color="warning" %}}

The SVN backup automatically expires after 90 days. After this time the SVN history is permanently deleted and connot be recovered.

{{% /alert %}}

To set up your local SVN repository, follow these steps:

1. Download and Install VisualSVN Server – Use [VisualSVN Server](https://www.visualsvn.com/server/download/) and import the existing repository from the *.dump* file. This will create a locally hosted SVN repository.

2. Access the Repository – Use [TortoiseSVN](https://tortoisesvn.net/) to check the repository. This will allow you to inspect the *.mpr* file or any other files within the repository.

    {{% alert color="info" %}}To inspect files from a historical revision, use **TortoiseSVN** and select **Update to revision** to check a specific revision.{{% /alert %}}

### Migrating With History {#with-history}

During migration with history, all app history, including revisions for all branches, is copied from SVN to Git. 

Depending on the size of your repository, the migration can take several hours to complete. If you have a large number of commits, Mendix recommends doing this when developers do not need access to the repository, for example during the night.

{{% alert color="info" %}}

Inform your team members that they should commit their changes before starting the migration.

{{% /alert %}}

{{% alert color="warning" %}}

Previously deleted SVN branches will not be mapped to Git branches by the migration process and will be permanently removed. If the deleted SVN branch has not been merged to another branch beforehand, commits belonging to the deleted SVN branch will also be permanently removed.

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
