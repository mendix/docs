---
title: "mx show-module-version Command"
linktitle: "show-module-version"
url: /refguide/mx-command-line-tool/mx-show-module-version
category: "General Info"
weight: 10
description: "Describes the options of the mx show-module-version command-line tool command."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "show-module-version"]
---

The mx show-module-verion command outputs the version of the module or the version of a module

## 1 Usage

Use the following command pattern for `mx show-module-version`:

`mx show-module-version TARGET-FILE MODULE-NAME` 

The `OPTIONS` are described in the table below:

| Option       | Shortcut | Result                            |
| ------------ | -------- | --------------------------------- |
| `--help`     | `-h`     | Displays the help text and exits. |

For TARGET-FILE enter a *.mpr* file.
For MODULE-NAME enter the name of the module.

## 2 Examples

`mx show-module-version C:\MyApp\MyApp.mpr MyFirstModule`

## 3 Return Codes

 The table below shows return codes and their meaning:

| Return Code | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| 0           | No errors                                                    |
| 1           | If the module in question doesn't have a version             |

The command will output the version of a module to the command line output.