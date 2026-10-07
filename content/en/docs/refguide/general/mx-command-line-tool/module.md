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

The `mx module-import` command imports a source module (*.mpk*) into an app.

{{% alert color="warning" %}}
In Studio Pro 11.14, the `mx.exe module-import replace` and `mx.exe module-import update` commands will not rescue storage GUIDs after a module update, which will result in data loss.
{{% /alert %}}

### Usage

Use the following command pattern for `mx module-import`:

`mx module-import MPK_PATH MPR_PATH [--import-mode <add|replace|update>] [--conflict <fail|take_mine|take_theirs>] [--metadata <take_new|take_existing|erase>]`

For `MPK_PATH`, enter a *.mpk* file with the module you want to import.

For `MPR_PATH`, enter a *.mpr* file of the project you want to import a module into.

For `--import-mode`, enter one of the following values to control what happens when a module with the same name already exists in the app:

* `add` – Add the module. Fails if a module with the same name already exists. This is the default.
* `replace` – Replace the existing module. Fails with exit code `310` if no module with that name is found in the app.
* `update` – Replace the module if it already exists, or add it if it does not.

For `--conflict`, enter one of the following values to control what happens when a same-name module already exists. This applies to the `add` and `update` modes:

* `fail` – Return an error. This is the default.
* `take_mine` – Keep the existing module and skip the import silently.
* `take_theirs` – Replace the existing module.

For `--metadata`, enter one of the following values to control how Marketplace identity fields are handled when a module is replaced. This option only takes effect when a replacement actually occurs:

* `take_new` – Use the identity fields from the incoming module. This is the default.
* `take_existing` – Copy the identity fields from the module being replaced.
* `erase` – Clear all identity fields.

Regardless of the chosen strategy, `FromAppStore` is always inherited from the existing module, and `AppStoreVersion` falls back to the existing values when the incoming module does not provide them.

### Examples

Add a module to an app:

`mx module-import MyNewModule.mpk MyApp.mpr`

Replace an existing module, keeping its marketplace identity:

`mx module-import MyNewModule.mpk MyApp.mpr --import-mode replace --metadata take_existing`

Update a module if it exists or add it if not, overwriting on collision:

`mx module-import MyNewModule.mpk MyApp.mpr --import-mode update --conflict take_theirs`

### Return Codes

The command returns 0 if it is successful.

In case of errors, the exit code consists of three digits `XYZ`:

* X determines the error type:

    * 1 – parameter validation error
    * 2 – output-related error
    * 3 – errors related to the execution of the operation

* Y is the number of the parameter the error is related to. This component is only valid if X = 1. If the error is not related to the parameters, Y contains the error details code described in Z below.

* Z indicates the error details:

    * 1 – Module you are trying to import is protected and cannot be imported.
    * 2 – Module you are trying to import is a Theme module and cannot be imported.
    * 3 – Project already contains a module with the same name as the module you are importing. Thus the module cannot be imported.
    * 4 – No module is found in the MPK package.
    * 5 – Project Version is not supported by the current version of mx.exe
    * 6 – Project can't be loaded
    * 7 – Module can't be loaded
    * 8 – Import of a module failed. Resulting project can't be saved.
    * 9 – File does not exist
    * 10 – `--import-mode replace` was specified but no module with that name exists in the project
    * 11 – The *.mpk* file has an unrecognized extension

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
