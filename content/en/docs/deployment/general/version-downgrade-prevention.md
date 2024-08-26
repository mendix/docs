---
title: "Version Downgrade Protection"
url: /developerportal/deploy/version-downgrade-prevention/
weight: 50
description: "What to do if you cannot migrate a Mendix database to an earlier version"
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Scenario

This issue applies when you are downgrading an app to a lower version of Mendix.

During the migration phase, the data storage layer will first check whether any Mendix system tables have changed. It does this by comparing the migration version number in the database before the analysis stage with the same version number in the runtime. If the existing database version number is higher than the runtime version number to which you are downgrading, then the migration will be canceled, and an error message will be shown.

For example, if you downgrade from Mendix 9.0.5 to Mendix 8.18.4, then the following log line is shown in the Mendix console: `The database version is of Mendix '9.0.5' which can not be downgraded to older Mendix versions.`

## Solution

If this happens, the only way to downgrade to an older version of Mendix is by restoring a backup of the database to the older version of Mendix.
