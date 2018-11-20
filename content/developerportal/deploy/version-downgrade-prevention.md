---
title: "Version Downgrade Prevented"
parent: "general"
menu_order: 30
description: "What to do if you cannot migrate a Mendix database to an earlier version"
tags: ["downgrade", "migration", "pre-analysis", "version", "database"]
---

When downgrading to an older version of Mendix; during the migration phase, the data storage layer will first check whether any Mendix system tables have changed. It does this by comparing the pre-analysis phase migration version number in the database with the same version number in the runtime. If the existing database version number is bigger than the runtime version number to which you are downgrading, then the migration will be canceled, and an error message will be shown.

For example, if you downgrade from Mendix version 7.4 to Mendix version 6.10, then the following log line is shown in the Mendix console: `Unsupported pre-analysis migration: version '3.0.0' cannot be downgraded to version '2.0.1'.`

In such cases, the only way to downgrade to an older version of Mendix is by restoring the backup of the database of the older version of Mendix.
