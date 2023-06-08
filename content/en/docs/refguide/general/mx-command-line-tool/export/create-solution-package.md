---
title: "mx create-solution-package Command"
linktitle: "create-solution-package"
url: /refguide/mx-command-line-tool/mx-create-solution-package
category: "General Info"
weight: 30
description: "Describes the options of the mx command-line tool."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "create-solution-package"]
---

The `mx create-solution-package` command exports the app as a [Solution package](/refguide/export-app-package-dialog).

## 1 Usage

Use the following command pattern: `mx create-solution-package [OPTIONS] TARGET-FILE`

The `OPTIONS` are described in the table below:

| Option | Default Value | Result |
| --- | --- | --- |
| -s, --include-snapshot    | Include a snapshot in the app package |
| -d, --package-dir         | Export package to this directory |
| --help                    | Display this help screen. |
 
For `TARGET-FILE` specify the MPR of the App you want to export

## 2 Examples

`mx create-solution-package c:\MyApps\MyApp.mpr` 

## 3 Return Codes

Return codes are described in the table below:

| Return Code | Description |
| --- | --- |
| 0 | Ok |
| 1 | Wrong project file provided |
| 2 | Output folder not determined |
| 4 | Unknown package export error |
