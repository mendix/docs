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
