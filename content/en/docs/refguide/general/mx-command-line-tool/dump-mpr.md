---
title: "MPR dump"
url: /refguide/mx-command-line-tool/dump-mpr
weight: 60
description: "Describes the command used to create a JSON description of the model of a Mendix App."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "mpr", "export"]
---

## 1 Introduction

The `mx dump-mpr` command enables you to export the app model of Mendix in the form of JSON. This command is available as of Mendix 10.4.

## 2 Usage

Use the following command pattern: `mx dump-mpr [OPTIONS] [TARGET-FILE]`

The `TARGET-FILE` points to the location of the project file, this file has the extension '.mpr'.

These are the `OPTIONS`:

| Option | Value | Result |
| --- | --- | --- |
| `--unit-type` | A single unit type, or a comma-separated list of unit types. | Filters the results on the supplied unit types and limits the JSON export. |

### 2.1 Examples

These are valid examples:

* `mx dump-mpr temp.mpr`
* `mx dump-mpr temp.mpr --unit-type DomainModels$DomainModel`
* `mx dump-mpr --unit-type DomainModels$DomainModel,Texts$SystemTextCollection temp.mpr`

### 2.2 Return Codes

This table shows the return codes and their description:

| Return Code | Description |
| --- | --- |
| `0` | OK |
| `1` | An incorrect project file was supplied |
| `2` | The supplied unit types do not exist |
| `3` | An unknown error occurred during export |
| `4` | The supplied mpr is of a version Studio Pro cannot open |
