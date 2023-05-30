---
title: "mx create-project Command"
linktitle: "create-project"
url: /refguide/mx-command-line-tool/mx-create-project
category: "General Info"
weight: 10
description: "Describes the options of the mx command-line tool."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "create-project"]
---

The `mx create-project` command creates a new app in Studio Pro. The app version depends on the version the tool was bundled with. For example, if you are using the mx tool for Studio Pro version 10.0.0.5003,  `mx create project` will create a new app in that version. 

## 1 Usage

Use the following command pattern: `mx create-project [OPTIONS] [TEMPLATE-MPK-FILE]`

The `OPTIONS` are described in the table below:

| Option | Default Value | Result |
| --- | --- | --- |
| `app-name` | App | Assigns the specified app name to the app. |
| `output-dir` | Current directory | The directory in which to create the app. |
| `language-code` | en_US | The default language of the app. | 
| `sprintr-app-id` | Optional | Associates the app [feedback features](/developerportal/collaborate/feedback/) with the provided [Developer Portal app](/developerportal/#my-apps). The value is a GUID. When accessing the app in the Developer Portal, this ID can be found in the browser's URL (for example, `1a428ea7-b00e-4166-9b23-20b7be88a40e`). |

`TEMPLATE-MPK-FILE` is an optional path to a Mendix app package (*.mpk*) file. If this argument is omitted, the app is created with a default empty project template.

## 2 Examples

Examples of commands are described in the table below:

| Example | Result |
| --- | --- |
| `mx create-project` | Creates an app in the current folder using all the default parameters. |
| `mx create-project --app-name MyFirstApp --output-dir C:\Projects\MyFirstApp` | Creates an app named `MyFirstApp` in the *C:\Projects\MyFirstApp* folder using all the default parameters. |
| `mx create-project C:\Templates\ExpenseReportTemplate.mpk` | Creates an app with the default parameters from a template located at *C:\Templates\ExpenseReportTemplate.mpk*. |

## 3 Return Codes

Return codes are described in the table below:

| Return Code | Description |
| --- | --- |
| 0 | The app creation was successful. |
| 1 | An internal error occurred. |
| 2 | There is something wrong with the command-line options. |

