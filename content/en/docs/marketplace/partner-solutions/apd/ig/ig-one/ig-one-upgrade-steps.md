---
title: "Upgrade Steps"
url: /appstore/partner-solutions/apd/ig-one-upgrade-steps/
weight: 4
---

## Introduction

This document describes the upgrade steps for version 1.5.5 and above.

## Backup

Do you have a backup? Is your other work committed to the team server?

## Clear javasource Folder

This step is almost never necessary, but it does not hurt, either.

Remove `<project-folder>/javasource/apmagent/actions/*.java` first so that no old code remains and could lead to compile errors.

## Remove Old jar from userlib

Check the `userlib` folder for `performancetool*.jar` and `apmtool*.jar`. If you find multiples, leave the one belonging to this release and the proper Mendix version.

## Clean Deployment

Clean deployment before startup so that no old jar stays in your deployment folder.

## Repeat Installation Procedure Steps

Now start following the installation procedure steps after the backup. Most of the steps do not have to be repeated, because they are preserved. The following steps need attention:

* Optionally revert overwritten widgets, because they are overwritten on the import of the module
* Copy the language, because the newly imported module has only *english-us* in it

When upgrading from below 1.7.0 to a version above, you need a new license.

In 1.10.0, a new constant `AppName` was introduced. This constant is needed when a new license request is done.
