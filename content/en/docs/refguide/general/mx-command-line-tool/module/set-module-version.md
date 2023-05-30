---
title: "mx set-module-version Command"
linktitle: "set-module-version"
url: /refguide/mx-command-line-tool/mx-set-module-version
category: "General Info"
weight: 20
description: "Describes the options of the mx set-module-version command-line tool command."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "set-module-version"]
---

The mx set-module-version command outputs the version of the module or the version of a module

## 1 Usage

Use the following command pattern for `mx set-module-version`:

`mx set-module-version TARGET-FILE MODULE-NAME NEW-VERSION` 

The `OPTIONS` are described in the table below:

| Option       | Shortcut | Result                            |
| ------------ | -------- | --------------------------------- |
| `--help`     | `-h`     | Displays the help text and exits. |

For TARGET-FILE enter a *.mpr* file.
For MODULE-NAME enter the name of the module.
For NEW-VERSIOn enter a version in [SemVer](https://semver.org) format

## 2 Examples

`mx set-module-version C:\MyApp\MyApp.mpr MyFirstModule 1.2.3`

## 3 Return Codes

 The table below shows return codes and their meaning:

| Return Code | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| 0           | No errors                                                    |
| 1           | If the module in question doesn't have a version             |