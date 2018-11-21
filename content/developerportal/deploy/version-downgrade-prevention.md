---
title: "Version Downgrade Prevented"
parent: "general"
menu_order: 30
description: "What to do if you cannot migrate a Mendix database to an earlier version"
tags: ["downgrade", "migration", "pre-analysis", "version", "database"]
---

## 1 Scenario

This issue applies when you are downgrading an app to a lower version of Mendix.

During the migration phase, the data storage layer will first check whether any Mendix system tables have changed. It does this by comparing the migration version number in the database before the analysis stage with the same version number in the runtime. If the existing database version number is higher than the runtime version number to which you are downgrading, then the migration will be canceled, and an error message will be shown.

For example, if you downgrade from Mendix version 7.4 to Mendix version 6.10, then the following log line is shown in the Mendix console: `Unsupported pre-analysis migration: version '3.0.0' cannot be downgraded to version '2.0.1'.`

## 2 Solution

If this happens, the only way to downgrade to an older version of Mendix is by restoring a backup of the database to the older version of Mendix.
