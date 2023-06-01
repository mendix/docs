---
title: "mx diff Command"
linktitle: "diff"
url: /refguide/mx-command-line-tool/mx-diff
category: "General Info"
weight: 40
description: "Describes the mx diff command."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "diff"]
---

The `mx diff` command performs a diff of two MPR files and outputs the differences to a file in json format.

## 1 Usage

Use the following command pattern for `mx diff`:

`mx diff [options] BASE MINE OUTPUT`

The `OPTIONS` are described in the table below:

| Option   | Shortcut | Result                                                                        |
| -------- | -------- | ---------------------------------                                             |
| `--help` | `-h`     | Displays the help text and exits.                                             |
| `--loose-version-check` | `-l` | Loose version check. i.e. auto-convert if possible before diffing. |

`BASE` is the first MPR. This is used as a base in comparison. 

`MINE` is the second MPR. This is used as a changed version in comparison. The optput will contains the changes that are in this file against the base. 
{{% alert color="info" %}}E.g. if BASE mpr has Microflow1 and MINE mpr doesn't have it, Mocroflow1 wil be listed as deleted in the output file. 

If you swap BASE and MINE parameters and compare again, Microflow1 will be listed as added.{{% /alert %}}

`OUTPUT` is the name of output `json` file.

## 2 Examples

`mx diff C:\MyApp\MyApp.mpr C:\MyApp-main\MyApp.mpr c:\comparison\output.json`

## 3 Return Codes

| Return code | Meaning |
| - | - |
| 0 | Ok |
| 2 | Conflicts were found during diff. |
| 3 | an error happened during the merge |
| 4 | the version of either MPR is not supported. |