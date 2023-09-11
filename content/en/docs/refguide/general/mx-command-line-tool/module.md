---
title: "Module Commands"
url: /refguide/mx-command-line-tool/module
weight: 30
description: "Describes the module-related commands for the mx command-line tool."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "module", "show-module-version", "set-module-version"]
---

## 1 Introduction

The commands in this group are related to Mendix modules.

Typically, these commands require a path to the *.mpr* file and the module name as parameters.

## 2 mx show-module-version Command {#show-module-version}

The `mx show-module-verion` command outputs the version of a module.

### 2.1 Usage

Use the following command pattern for `mx show-module-version`:

`mx show-module-version TARGET-FILE MODULE-NAME` 

These are the `OPTIONS`:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--help` | `-h` | Displays the help text `and exits.`, |

For `TARGET-FILE`, enter a *.mpr* file.

For `MODULE-NAME`, enter the name of the module.

### 2.2 Examples

Here is an example:

`mx show-module-version C:\MyApp\MyApp.mpr MyFirstModule`

### 2.3 Return Codes

This table shows the return codes and their description:

| Return Code | Description |
| --- | --- |
| `0` | No errors. |
| `1` | The module does not have a version |

The command will output the version of the module to the command line output.

## 3 mx set-module-version Command {#set-module-version}

The `mx set-module-version` command outputs the version of a module.

### 3.1 Usage

Use the following command pattern for `mx set-module-version`:

`mx set-module-version TARGET-FILE MODULE-NAME NEW-VERSION` 

These are the `OPTIONS`:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--help` | `-h` | Displays the help text and exits. |

For `TARGET-FILE`, enter a *.mpr* file.

For `MODULE-NAME`, enter the name of the module.

For `NEW-VERSION`, enter a version in the [SemVer](https://semver.org) format.

### 3.2 Examples

Here is an example:

`mx set-module-version C:\MyApp\MyApp.mpr MyFirstModule 1.2.3`

### 3.3 Return Codes

This table shows the return codes and their description:

| Return Code | Description |
| --- | --- |
| `0` | No errors. |
| `1` | The module does not have a version |

## 4 mx module-import Command {#module-import}

The `mx module-import` command imports a specified source module into an App.

### 4.1 Usage

Use the following command pattern for `mx module-import`:

`mx module-import MPK_PATH MPR_PATH` 

These are the `OPTIONS`:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--help` | `-h` | Displays the help text and exits. |

For `MPK_PATH`, enter a *.mpk* file with the module.

For `MPR_PATH`, enter a *.mpr* file of the project you want to import a module in.

### 4.2 Examples

Here is an example:

`mx module-import MyNewModule.mpk MyApp.mpr`

### 4.3 Return Codes

The commands return 0 in case of success.

In case of errors, the exit code consists of three digits XYZ:

X determines the error type:
1 – parameter validation error
2 – output-related error
3 – errors related to the execution of the operation
Y is the number of the parameter the error is related to
Z determines error details:
1 - Module you are trying to import is protected and cannot be imported.
2 - Module you are trying to import is Theme module and cannot be imported.
3 - Project already contains a module with the name of an importing module. Thus the module can't be imported.
4 - Module is not found in the MPK package
5 - Project Version is not supported by the current version of Mx.exe
6 - Project can't be loaded
7 - Module can't be loaded
8 - Import of a module failed. Result project can't be saved.

E.g. 

`> mx.exe module-import Module.mxmodule App.mpr`

`Importing protected module is not supported`

Exit code 111

`> mx.exe module-import Module.mpk App.mpr`

`The mpr file version is '10.3.0-dev'.`

`Importing module Module into project MyApp`

`Module 'Module' already exist in the app.`

Exit code 303
