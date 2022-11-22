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
* Your app has maximum 100 revisions across all branches (we plan to increase this maximum in the coming months)

{{% alert type="info" %}}

Only a user with the Scrum master role can migrate an app. For more information, see [App Roles](/developerportal/collaborate/app-roles/). 

{{% /alert %}}

## 3 How Migration Works

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

## 5 What to do if the migration failed?

In case of a failed migration we'll roll back all changes. This means access to SVN is restored and you can keep developing on your app, so you can check for the common causes of a failed migration. Once you have checked and resolved the likely culprits, you can attempt another migration.

There are several cases that can cause a migration to fail:

* There are no branches called `branches/trunk` or `branches/tags`
* There are branches with the same name with different casing, such as "branch1" and "BRANCH1"
* There are branches with a name that isn't valid in Git, see [this page](https://git-scm.com/docs/git-check-ref-format) for more details
* There are branches that are below version 9.12

## 6 Read More

* [Version Control](/refguide/version-control/)
* [Version Control FAQ](/refguide/version-control-faq/)
* [Migrating from SVN to Git: Steps After Migration and Process Differences](/refguide/svn-git-differences/)
