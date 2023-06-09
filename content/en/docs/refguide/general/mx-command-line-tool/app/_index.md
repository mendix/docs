---
title: "App Commands"
url: /refguide/mx-command-line-tool/app
weight: 10
description: "Describes the app related commands."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "create-project", "show-version"]
---

## 1 Introduction

The commands in this group are related to Mendix app creation, checking, versioning and conversion.

Typically, these commands require a path to the *.mpr* file as a parameter.

## 2 mx create-project Command

The `mx create-project` command creates a new app in Studio Pro. The app version depends on the version the tool was bundled with. For example, if you are using the mx tool for Studio Pro version 10.0.0, `mx create project` will create a new app in that version. 

### 2.1 Usage

Use the following command pattern: `mx create-project [OPTIONS] [TEMPLATE-MPK-FILE]`

These are the `OPTIONS`:

| Option | Default Value | Result |
| --- | --- | --- |
| `app-name` | App | Assigns the specified app name to the app. |
| `output-dir` | Current directory | The directory in which to create the app. |
| `language-code` | en_US | The default language of the app. | 
| `sprintr-app-id` | Optional | Associates the app [feedback features](/developerportal/collaborate/feedback/) with the provided [Developer Portal app](/developerportal/#my-apps). The value is a GUID. When accessing the app in the Developer Portal, this ID can be found in the browser's URL (for example, `1a428ea7-b00e-4166-9b23-20b7be88a40e`). |

`TEMPLATE-MPK-FILE` is an optional path to a Mendix app package *.mpk* file. If this argument is omitted, the app is created with a default empty project template.

### 2.2 Examples

These are example commands:

| Example | Result |
| --- | --- |
| `mx create-project` | Creates an app in the current folder using all the default parameters. |
| `mx create-project --app-name MyFirstApp --output-dir C:\Projects\MyFirstApp` | Creates an app named `MyFirstApp` in the *C:\Projects\MyFirstApp* folder using all the default parameters. |
| `mx create-project C:\Templates\ExpenseReportTemplate.mpk` | Creates an app with the default parameters from a template located at *C:\Templates\ExpenseReportTemplate.mpk*. |

### 2.3 Return Codes

These are the return codes:

| Return Code | Description |
| --- | --- |
| 0 | The app creation was successful. |
| 1 | An internal error occurred. |
| 2 | There is something wrong with the command-line options. |

## 3 mx show-version Command

The `mx show-version` command reports which version of Studio Pro was used last time the app was opened.

The input is a single *.mpr* file.

{{% alert color="info" %}}
The *.mpr* file must be the same version as mx.
{{% /alert %}}

### 3.1 Usage

Use the following command pattern for `mx show-version`:

`mx show-version [OPTIONS] INPUT`

These are the `OPTIONS`:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--help` | `-h` | Displays the help text and exits. |

For `INPUT`, enter an *.mpr* file.

### 3.2 Examples

These are example commands:

| Example | Result |
| --- | --- |
| `mx show-version --help` | Displays the help text for the `show-version` command. |
| `mx show-version C:\Mendix\App1\App1.mpr` | Displays the version of Studio Pro that was last used to open the app. |

### 3.3 Return Codes

These are the return codes:

| Return Code | Description |
| --- | --- |
| 0 | The command ran successfully. |

