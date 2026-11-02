---
title: "Module Commands"
url: /refguide/mx-command-line-tool/module/
weight: 30
description: "Describes the module-related commands for the mx command-line tool."
---

## Introduction

The commands in this group are related to Mendix modules.

Typically, these commands require a path to the *.mpr* file and the module name as parameters.

{{% alert color="info" %}}
To see the command parameters for each command, use the `--help` parameter. For example, `mx show-module-version --help`.
{{% /alert %}}

## mx show-module-version Command {#show-module-version}

The `mx show-module-version` command outputs the version of a module. 

{{% alert color="info" %}}
As of Studio Pro 11.14 and 11.12.3, this command works for all modules in the app, except the System module.
{{% /alert %}}

### Usage

Use the following command pattern for `mx show-module-version`:

`mx show-module-version TARGET-FILE MODULE-NAME` 

For `TARGET-FILE`, enter a *.mpr* file.

For `MODULE-NAME`, enter the name of the module.

### Examples

Here is an example:

`mx show-module-version C:\MyApp\MyApp.mpr MyFirstModule`

### Return Codes

This table shows the return codes and their description:

| Return Code | Description |
| --- | --- |
| `0` | No errors. |
| `1` | The specified project file does not exist, the module does not exist, or the module is the System module. |

The command will output the version of the module to the command line output.

## mx set-module-version Command {#set-module-version}

The `mx set-module-version` command changes the version of a module. 

{{% alert color="info" %}}
As of Studio Pro 11.14 and 11.12.3, this command works for all modules in the app, except the System module.
{{% /alert %}}

### Usage

Use the following command pattern for `mx set-module-version`:

`mx set-module-version TARGET-FILE MODULE-NAME NEW-VERSION` 

For `TARGET-FILE`, enter a *.mpr* file.

For `MODULE-NAME`, enter the name of the module.

For `NEW-VERSION`, enter a version in the [SemVer](https://semver.org) format.

### Examples

Here is an example:

`mx set-module-version C:\MyApp\MyApp.mpr MyFirstModule 1.2.3`

### Return Codes

This table shows the return codes and their description:

| Return Code | Description |
| --- | --- |
| `0` | No errors. |
| `1` | The specified project file does not exist, the module does not exist, or the module is the System module. |

## mx module-import Command {#module-import}

The `mx module-import` command imports a source module (*.mpk*) into an app, or updates a module that already exists.

{{% alert color="info" %}}
As of Studio Pro 11.16, the `update` import mode performs a three-way merge and restores storage GUIDs, in the same way as the **Update from file** option in Studio Pro. The `replace` import mode and the `--metadata` option is no longer available.
{{% /alert %}}

{{% alert color="warning" %}}
In Studio Pro 11.14 and 11.15, the `mx.exe module-import replace` and `mx.exe module-import update` commands will not rescue storage GUIDs after a module update, which will result in data loss.
{{% /alert %}}

### Usage

Use the following command pattern for `mx module-import`:

`mx module-import MPK_PATH MPR_PATH [--import-mode <add|update>] [--original-mpk <ORIGINAL_MPK_PATH>] [--module-name <MODULE_NAME>] [--conflict <fail|take_mine|take_theirs>]`

For `MPK_PATH`, enter a *.mpk* file with the module you want to import. When updating a module, this is the new version of the module.

For `MPR_PATH`, enter a *.mpr* file of the project you want to import a module into.

For `--import-mode`, enter one of the following values:

* `add` – Add the module. Fails if a module with the same name already exists. This is the default.
* `update` – Update a module that already exists in the app by performing a three-way merge between the original module package, your app's version of the module, and the new module package. Storage GUIDs are restored, so no data is lost. Fails with exit code `314` if the module is not found in the app.

For `--original-mpk`, enter the *.mpk* file of the module version that is currently installed in the app. This is used as the common base for the three-way merge. This option is required when `--import-mode update` is used.

For `--module-name`, enter the name of the module in the app that you want to update. This option only applies to `--import-mode update`. Use it when the module in your app has a different name than the module in the *.mpk* file, for example, when the same module was imported more than once under different names. If this option is not specified, the name of the module in the *.mpk* file is used.

For `--conflict`, enter one of the following values to control what happens when the three-way merge results in conflicts. This applies to the `update` mode:

* `fail` – Return an error with exit code `313` and revert the app to its state before the update. This is the default.
* `take_mine` – Resolve all conflicts by keeping the version in your app.
* `take_theirs` – Resolve all conflicts by using the version from the new module package.

{{% alert color="warning" %}}
Updating a module from the command line is not supported if the package IDs of the original module package, the new module package, and the module in your app do not match.
{{% /alert %}}

{{% alert color="info" %}}
The app is only reverted automatically when it is under Git version control. Make sure there are no uncommitted changes before you update a module. If the app is not under version control, you need to restore it manually after a failed update.
{{% /alert %}}

### Examples

* Add a module to an app:

    `mx module-import MyNewModule.mpk MyApp.mpr`

* Update an existing module from version 1.0.0 to version 2.0.0:

    `mx module-import MyModule_2.0.0.mpk MyApp.mpr --import-mode update --original-mpk MyModule_1.0.0.mpk`

* Update an existing module and resolve any conflicts by using the new version:

    `mx module-import MyModule_2.0.0.mpk MyApp.mpr --import-mode update --original-mpk MyModule_1.0.0.mpk --conflict take_theirs`

* Update a module that has a different name in the app than in the module package:

    `mx module-import MyModule_2.0.0.mpk MyApp.mpr --import-mode update --original-mpk MyModule_1.0.0.mpk --module-name MyRenamedModule`

### Return Codes

The command returns 0 if it is successful.

In case of errors, the exit code consists of three digits `XYZ`:

* X determines the error type:

    * 1 – Parameter validation error
    * 2 – Output-related error
    * 3 – Errors related to the execution of the operation

* Y is the number of the parameter the error is related to. This component is only valid if X = 1. If the error is not related to the parameters, Y contains the error details code described in Z below.

* Z indicates the error details:

    * 1 – Module you are trying to import is protected and cannot be imported.
    * 2 – Module you are trying to import is a Theme module and cannot be imported.
    * 3 – Project already contains a module with the same name as the module you are importing. Thus the module cannot be imported.
    * 4 – No module is found in the MPK package.
    * 5 – Project Version is not supported by the current version of mx.exe.
    * 6 – Project can't be loaded.
    * 7 – Module can't be loaded.
    * 8 – Import of a module failed. Resulting project can't be saved.
    * 9 – File does not exist.
    * 10 – `--import-mode replace` was specified but no module with that name exists in the project (Studio Pro 11.14 and 11.15 only).
    * 11 – The *.mpk* file has an unrecognized extension.
    * 12 – `--original-mpk` was not provided for `--import-mode update`.
    * 13 – The three-way merge resulted in unresolved conflicts and the project has been reverted. Retry with `--conflict take_mine` or `--conflict take_theirs` to resolve the conflicts automatically.
    * 14 – `--import-mode update` was specified but no module with that name exists in the project.
    * 15 – A previous module update was interrupted. Revert the project and delete the `.mendix-cache/updates/<module-name>` directory before retrying.
    * 16 – A module update is already in progress. Commit or revert the pending changes and delete the `.mendix-cache/updates/<module-name>` directory before retrying.

For example:

```bash
> mx.exe module-import Module.mxmodule App.mpr
Importing protected module is not supported
```

Exit code 111

or

```bash
> mx.exe module-import Module.mpk App.mpr
The mpr file version is '10.3.0-dev'.
Importing module Module into project MyApp
Module 'Module' already exists in the app.
```

Exit code 303
