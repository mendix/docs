---
title: "Audit Trail"
url: /appstore/modules/audit-trail/
description: "Describes the configuration and usage of the Audit Trail module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Audit Trail](https://marketplace.mendix.com/link/component/138/) module creates a log history for the changes made to objects in your Mendix application.

### Typical Use Cases

This module keeps keep track of what changes are made in your Mendix application as well as when, by whom, and how much.

### Features

* Keep track of objects that are created, changed, or deleted
* Only save changes made on an object that has the `AuditTrail.AudittrailSuperClass` as a superclass and where the commit is done with an event (this could be a performance risk for apps with too many entities or records)
* Add a commit event which analysis and save the changes
* Log the complete state of the entity (all attributes) or only the changed attributes by modifying a constant

## Configuration

The two sections below describe the two options for configuring this module.

{{% alert color="info" %}}

As both configuration options require changing the entity, it is not possible to use Audit Trail directly with entities in the **System** module. It is still possible to add audit to specializations of such entities using the associations and events option.

While it is possible to add required associations and event handlers to marketplace modules, such model changes are overwritten when marketplace modules are updated. Therefore, in this scenario it is recommended to use specializations.
{{% /alert %}} 

### Associations and Events

For this configuration option, add a reference set association from your entity to the **Log** entity or an association from the **Log** entity to the entity that needs to be audited. Add a before-commit and before-delete event to your entity that is identical to the events on the **AudittrailSuperClass**. The Java actions will automatically create the log item and all the required log lines based on the changes.

Next, configure the **IncludeOnlyChangedAttributes** constant for whether you want to log all the attributes or just the changes.

Finally, add the **LogOverviewSnippet** snippet to a page in a custom module.

### Inheritance

For this option, all the objects you want to log need to have the **AuditTrail.AudittrailSuperClass** as a superclass (note that this is not possible for subclasses of the **System.User** object). The module will then automatically log all the changes on the create, commit, and delete events.

Next, configure the **IncludeOnlyChangedAttributes** constant for whether you want to log all the attributes or just the changes.

Finally, add the **LogOverviewSnippet** snippet to a page in a custom module.

## Changing Audit Behavior

Changing the audit behavior is easily done by altering the values of the constants below (for module version 7.6.0 and above; please note that if no value is set, the default is used) or the default values of the **Configuration** entity in the module's domain model (for module version 7.5.0 and below):

* **IncludeOnlyChangedAttributes** (default: false) – This determines if the module creates a log line for every single member every time it initiates the Audit, or if it only logs the changed members.
* **LogAllMembersOnCreate** (default: true) – This property only affects the scenario when **IncludeOnlyChangedAttributes** is **false**. This indicates if the application will create a log line for all attributes when the record is created.
* **IncludeCalculatedAttributes** (default: false) – This determines if the module resolves calculated attributes and checks if the result has changed since the last commit.
* **CreateLogObjectWithoutMemberChanges** (default: false) – If none of the members have been changed, this property determines whether a commit will still generate a log record populated only with the `changed date` and `changed by` fields.
* **LogLineDateFormat** (default: MM/dd/yyyy) – This constant determines the format to be used to convert date attributes to strings. It uses the same pattern as used by the [parse and format date function calls](/refguide/parse-and-format-date-function-calls/).
* **LogServerTimeZoneDateNotation** (default: true) – This determines if the date is audited in the **ServerTimeZone**. If both the session time zone and **ServerTimeZone** are enabled, you will see two dates in the audit overview.
* **ServerTimeZone** (default: UTC) – This is the time zone in which the server time zone is printed. This will be a static time zone, which matches the notation as used in Java (for an example, see [TimeZones in Java](https://stackoverflow.com/questions/1694885/timezones-in-java)).
* **LogSessionTimeZoneDateNotation** (default: false) – This determines if the date is audited in the session time zone of the user that makes the change. If both the session time zone and the server time zone are enabled, you will see two dates in the audit overview.
* **LogUseDecimalScientificNotation** (default: true) - This determines whether the module logs large decimal values using scientific notation (`BigDecimal.toString`) or not (`BigDecimal.toPlainString`).
