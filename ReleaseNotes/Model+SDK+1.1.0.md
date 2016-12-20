---
title: "Model SDK 1.1.0"
category: "releasenotes"
space: "Release Notes"
---
| Story # | Impact | Description |
| --- | --- | --- |
| 600896 | Low | Various meta model updates _for Mendix version 6.1.0_ - see below. |

The following changes are made per 600896 and pertain exclusively to models made with Mendix version 6.1.0 and higher:

*   Introduced a new modelling construct `SelectorDatabaseSource` for pages.
*   `DatabaseConstraint` cannot be created directly in a `DatabaseSourceBase` instance anymore. Instead, use the `create` method of `DatabaseConstraint` and assign the instance explicitly to a suitable container, i.e. `databaseConstraints` of either an instance of (a sub type of) `DatabaseSourceBase` or `SelectorDatabaseSource`.
*   These properties have been deleted, so should not be accessed on models with Mendix version 6.1.0 and higher:
    *   `systemEntityType` of both `MsdMicroflow` and `MsdMicroflowParameter`,
    *   `parameterTypeName` of `ExportMapping`, and
    *   `allowSimpleMappingInheritance` of `OperationInfo`.