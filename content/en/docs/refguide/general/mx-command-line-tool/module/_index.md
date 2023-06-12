---
title: "Module Commands"
url: /refguide/mx-command-line-tool/module
weight: 30
description: "Describes the module-related commands for mx CLT."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "module", "show-module-version", "set-module-version"]
---

## 1 Introduction

The commands in this group are related to Mendix modules.

Typically, these commands require a path to the *.mpr* file and the module name as parameters.

These are the return codes of the commands in this group:

| Return Code | Description |
| --- | --- |
| 0 | No errors. |
| 1 | If the module in question does not have have a version. |

## 2 mx show-module-version Command

The mx show-module-verion command outputs the version of the module or the version of a module

### 2.1 Usage

Use the following command pattern for `mx show-module-version`:

`mx show-module-version TARGET-FILE MODULE-NAME` 

The `OPTIONS` are described in the table below:

| Option       | Shortcut | Result                            |
| ------------ | -------- | --------------------------------- |
| `--help`     | `-h`     | Displays the help text and exits. |

For TARGET-FILE enter a *.mpr* file.
For MODULE-NAME enter the name of the module.

### 2.2 Examples

`mx show-module-version C:\MyApp\MyApp.mpr MyFirstModule`

### 2.3 Return Codes

 The table below shows return codes and their meaning:

| Return Code | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| 0           | No errors                                                    |
| 1           | If the module in question doesn't have a version             |

The command will output the version of a module to the command line output.