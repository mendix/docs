---
title: "Module Commands"
url: /refguide/mx-command-line-tool/module
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

The `mx show-module-verion` command outputs the version of a module.

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
| `1` | The module does not have a version. |

The command will output the version of the module to the command line output.

## mx set-module-version Command {#set-module-version}

The `mx set-module-version` command outputs the version of a module.

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
| `1` | The module does not have a version. |

## mx module-import Command {#module-import}

The `mx module-import` command imports a source module (*.mpk*) into an app.

### Usage

Use the following command pattern for `mx module-import`:

`mx module-import MPK_PATH MPR_PATH` 

For `MPK_PATH`, enter a *.mpk* file with the module you want to import.

For `MPR_PATH`, enter a *.mpr* file of the project you want to import a module into.

### Examples

Here is an example:

`mx module-import MyNewModule.mpk MyApp.mpr`

### Return Codes

The command returns 0 if it is successful.

In case of errors, the exit code consists of three digits `XYZ`:

* X determines the error type:

    * 1 – parameter validation error
    * 2 – output-related error
    * 3 – errors related to the execution of the operation

* Y is the number of the parameter the error is related to. If the error is not related to the parameters, this is zero.

* Z indicates the error details:

    * 1 – Module you are trying to import is protected and cannot be imported.
    * 2 – Module you are trying to import is a Theme module and cannot be imported.
    * 3 – Project already contains a module with the name as the module you are importing. Thus the module can't be imported.
    * 4 – No module is found in the MPK package.
    * 5 – Project Version is not supported by the current version of mx.exe
    * 6 – Project can't be loaded
    * 7 – Module can't be loaded
    * 8 – Import of a module failed. Resulting project can't be saved.

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
