---
title: "Upgrade steps"
space: "Application Performance Monitor"
category: "Installation"
---
This document describes the upgrade steps for version 1.5.5 and above.

## Backup

Do you have a backup? Is your other work committed to the team server?

## Clear javasource folder

This step is almost never necessary, but does not hurt either.

Remove <project-folder>/javasource/apmagent/actions/*.java first, so no old code remains and could give compile errors.

## Remove old jar from userlib

Check the userlib folder for performancetool*.jar and apmtool*.jar. If found multiple leave the one belonging to this release and the proper Mendix version.

## Clean deployment

Clean deployment before startup, so no old jar stays in your deployment folder.

## Repeat installation procedure steps

Now start following the installation procedure steps after the backup. Most the steps do not have to be repeated, because they are preserved. The following steps need attention:

*   Optional Revert overwritten widgets, because they are overwritten on the import of the module
*   Copy Language, because the newly imported module has only english-us in it

When upgrading from below 1.7.0 to a version above you need a new license.

In 1.10.0 a new constant AppName was introduced. This constant is needed when a new
license request is done.