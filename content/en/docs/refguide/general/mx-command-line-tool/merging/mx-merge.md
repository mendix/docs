---
title: "mx merge Command"
linktitle: "merge"
url: /refguide/mx-command-line-tool/mx-merge
category: "General Info"
weight: 40
description: "Describes the mx merge command."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "merge"]
---

The mx merge command performs a three-way merge of two MPR files having a common base commit.

The input is three MPR files: base, mine, and theirs

## 1 Usage

Use the following command pattern for `mx merge`:

`mx merge [OPTIONS] BASE MINE THEIRS`

The `OPTIONS` are described in the table below:

| Option   | Shortcut | Result                            |
| -------- | -------- | --------------------------------- |
| `--help` | `-h`     | Displays the help text and exits. |

`BASE` is common base commit.

`MINE` is the version to merge into; this MPR contains the results of the merge.

`THEIRS` is the version to merge changes from.

## 2 Conflicts

If there are conflicts during the merge, you have to resolve those by opening the app in Studio Pro.

## 3 Examples

`mx merge C:\MyApp\MyApp.mpr C:\MyApp-main\MyApp.mpr C:\MyApp-FeatureBranch\MyApp.mpr`

## 4 Return Codes

| Return Code | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| 0           | Merge is successful, there are no conflicts. *MINE.mpr* contains the result of the merge. |
| 1           | The command is invalid, check input parameters.              |
| 2           | Conflicts are detected. Open *MINE.mpr* in Studio Pro to resolve them. |
| 3           | This code means an exception – an error occurred during the merge. Error details are printed to the command line output. |
| 4           | The version is unsupported