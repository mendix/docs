---
title: "Audit Trail"
category: "Modules"
description: "Describes the configuration and usage of the Audit Trail module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "audit trail", "log", "platform support"]
draft: true
---

## 1 Introduction

The [Audit Trail](https://appstore.home.mendix.com/link/app/138/) module creates a log history for the changes made to objects in your Mendix application.

### 1.1 Typical Usage Scenarios

This module keeps keep track of what changes are made in your Mendix application as well as when, by whom, and how much.

### 1.2 Features

* Keep track of objects that are created, changed, or deleted
* Only save changes made on an object that has the `AuditTrail.AudittrailSuperClass` as a superclass and where the commit is  done with events (this could be a performance risk for apps with too many entities  or records)
* Add a commit event which analysis and save the changes
* Log the complete state of the entity (all attributes) or only the changed attributes by modifying a constant

## 2 Configuration

The two sections below describe the two options for configuring this module.

### 2.1 Associations & Events

For this configuration option, add a reference set association from your entity to the  **Log** entity or an association from the **Log** entity to the entity that needs to be audited. Add an after-create, before-commit, and before-delete event to your entity that is identical to the events on the **AudittrailSuperClass**. The Java actions will automatically create the log item and all the required log lines based on the changes.

Next, configure the **LogOnlyChangedAttributes** constant for whether you want to log all the attributes or just the changes.

Finally, add the **LogOverviewSnippet** snippet to a page in a custom module.

### 2.2 Inheritance

For this option, all the objects you want to log need to have the **AuditTrail.AudittrailSuperClass** as a superclass (except the subclasses of the **System.User** object. The module will then automatically log all the changes on the create, commit, and delete events.

Next, configure the **LogOnlyChangedAttributes** constant for whether you want to log all the attributes or just the changes.

Finally, add the **LogOverviewSnippet** snippet to a page in a custom module.

## 3 Changing Audit Behavior

Changing the audit behavior is easily done by altering the default values of the **Configuration** entity in the module's domain model. The following settings are configurable:

* **IncludeOnlyChangedAttributes** (default: false) – This determines if the module  should create a log line for every single member every time it initiates the Audit, or if it should only log the changed members.
* **LogAllMembersOnCreate** (default: true) – This property only effects the  scenario when **IncludeOnlyChangedAttributes** is **false**. This indicates if the application will create a log line for all attributes when the record  is created (regardless of whether the value changed).
* **IncludeCalculatedAttributes** (default: false) – This determines if the module should resolve calculated attributes and compare if the result has changed since the  last commit.
* **CreateLogObjectWithoutMemberChanges** (default: false) – If none of the members  have been changed, this property detrmines whether you want to have a log record populated only with the `changed date` and `changed by` fields.
* **LogLineDateFormat** (default: MM/dd/yyyy) – When auditing date fields, the module  will format the date as a string. This determines the notation for all the dates in the audit trail. This also uses the same tokens in a microflow.
* **LogServerTimeZoneDateNotation** (default: true) – This determines if the date should be audited in the **ServerTimeZone**. If both the session time zone and **ServerTimeZone** are enabled, you will see two dates in the audit overview.
* **ServerTimeZone** (default: Etc/UTC) – This the time zone in which the server time zone  is printed. This will be a static time zone and should match the notation as used in Java (for an example, see [TimeZones in Java](http://stackoverflow.com/questions/1694885/timezones-in-java)).
* **LogSessionTimeZoneDateNotation** (default: true) – This determines if the date should be audited in the session time zone of the user that makes the change. If both the session time zone and the UTC time zone are enabled, you will see two dates in the audit overview.