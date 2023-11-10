---
title: "MPR dump"
url: /refguide/mx-command-line-tool/dump-mpr
weight: 60
description: "Describes the command used to export the model of a Mendix App."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "mpr", "export"]
---

## 1 Introduction

The `mx dumpmpr` command enables you to export the app model of Mendix in the form of JSON

## 2 Usage

Use the following command pattern: mx dump-mpr [MPR-FILE_NAME] [OPTIONS]

The `MPR-FILE_NAME` is optional. If not supplied, it takes the first MPR it can find in the folder

These are the `OPTIONS`:

| Option | Value | Result |
| --- | --- | --- |
| `--unit-type` | Valid mpr unit types| Filters the results on the supplied unit types and limits the JSON export |

### 2.2 Examples

These are valid examples:

* `mx dump-mpr temp.mpr`
* `mx dump-mpr temp.mpr --unit-type 'DomainModels$DomainModel'`
* `mx dump-mpr --unit-type 'DomainModels$DomainModel,Texts$SystemTextCollection' temp.mpr`

### 2.3 Return Codes

This table shows the return codes and their description:

| Return Code | Description |
| --- | --- |
| `0` | OK. |
| `1` | An incorrect project file was supplied. |
| `2` | The supplied unit types do not exist  |
| `3` | An unknown error occured during export |
| `4` | The supplied mpr is of a version Studio Pro cannot open|