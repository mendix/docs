---
title: "mx create-module-package Command"
linktitle: "create-module-package"
url: /refguide/mx-command-line-tool/mx-create-module-package
category: "General Info"
weight: 20
description: "Describes the options of the mx command-line tool."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "create-module-package"]
---

The `mx create-module-package` command exports a module package from an app.

## 1 Usage

Use the following command pattern: `mx create-module-package [OPTIONS] TARGET-FILE MODULE-NAME`

The `OPTIONS` are described in the table below:

| Option | Description |
| --- | --- |
| -l, --filter-required-libs |   Includes all files except the userlibs that don't have an accompanying file `[ModuleName].RequiredLib` | 
  -e, --exclude-files |          Exclude all files that match the given regular expression |
  -d, --package-dir |            Export module package to this directory |
  --help |                       Display this help screen. |
 

For `TARGET-FILE` specify the MPR of the App you want to export

For `MODULE-NAME` specify the name of the module you want to export

## 2 Examples

`mx create-module-package c:\MyApps\MyApp.mpr Module1` 

## 3 Return Codes

Return codes are described in the table below:

| Return Code | Description |
| --- | --- |
| 0 | Ok |
| 1 | Wrong project file provided |
| 2 | Output folder not determined |
| 3 | Invalid module name specified |
| 4 | Unknown package export error |