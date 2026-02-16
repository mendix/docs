---
title: "mx Command-Line Tool"
url: /refguide8/mx-command-line-tool/
weight: 50
description: "Describes the options of the mx command-line tool"
---

## Introduction

The **mx tool** is a Windows and Linux command-line tool that can be used to do useful things with your Mendix app.

## Location

Mendix Studio Pro comes with the mx command-line tool. The executable *mx.exe* file can be found in the same folder that contains `studiopro.exe` (for example, *C:\Program Files\Mendix\8.1.0.58215\modeler\mx.exe*).

## mx Tool Options

The mx tool enables the options described below.

### mx convert Command

The `mx convert` command converts the apps to a specific Studio Pro version. For example, if you are using the mx command-line tool for Mendix 8.1.0.58215, then `mx convert` will convert apps to that version. 

The input can be a single file, directory, or multiple files.

{{% alert color="info" %}}
The mx tool can only upgrade your project, but you cannot use it to downgrade the version.
{{% /alert %}}

#### Usage

Use the following command pattern for `mx convert`:

`mx convert [OPTIONS] INPUT... OUTPUT`

The `OPTIONS` are described in the table below:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--help` | `-h` | Displays the help text and exits. |
| `--in-place` | `-p` | Converts the current app directory. Use this option to convert a folder containing a Mendix app. Otherwise, `mx convert` will convert *.mpk* files. |
| `--skip-error-check` | `-s` | Does not check for errors. Use this option to disable app error-checking during the conversion. When omitted, the tool will report on the number of errors, warnings, and deprecations in the app and do the conversion. |

For `INPUT...`, enter one or more *.mpk* files or one directory that needs to be converted.

For `OUTPUT`, enter the output location for the converted results. Mind the following:

* When `INPUT...` is a single file, `OUTPUT` can be a single file or directory; otherwise, `OUTPUT` must be a directory.
* When using the `--in-place` option, the `INPUT...` folder will also be used as the `OUTPUT` folder, so you do not need to specify a separate `OUTPUT` folder

#### Examples

Examples of commands are described in the table below:

| Example | Result |
| --- | --- |
| `mx convert --in-place C:\MxProjects\App-main` | Converts the app in folder `C:\MxProjects\App-main` to a specific Studio Pro version which the mx tool is bundled with. |
| `mx convert C:\Mendix\App1.mpk C:\Mendix\App2.mpk C:\Mendix\ConvertedProjects\` | Converts the *App1.mpk* and *App2.mpk* app packages that are in the *C:\Mendix\* folder and puts the results in the `C:\Mendix\ConvertedProjects\` folder. |
| `mx convert --skip-error-check C:\Mendix\Packages\ C:\Mendix\ConvertedPackages\` | Converts all app packages in the `C:\Mendix\Packages\` folder to the `C:\Mendix\ConvertedPackages\` folder without checking for errors. |

#### Return Codes 

Return codes are described in the table below:

| Exit Code | Description |
| --- | --- |
| 0 | The conversion was successful. |
| 1 | An internal error occurred. |
| 2 | There is something wrong with the command-line options. |
| 3 | Converting failed. |

### mx create-project Command

The `mx create-project` command creates a new app in Studio Pro. The app version depends on the version the tool was bundled with. For example, if you are using the mx tool for Studio Pro 8.1.0.58215, `mx create project` will create a new app in that version. 

#### Usage

Use the following command pattern: `mx create-project [OPTIONS] [TEMPLATE-MPK-FILE]`

The `OPTIONS` are described in the table below:

| Option | Default Value | Result |
| --- | --- | ---
| `app-name` | App | Assigns the specified app name to the app. |
| `output-dir` | Current directory | The directory in which to create the project. |
| `language-code` | Optional | The default language of the app. |
| `sprintr-app-id` | Optional | Associates the app [feedback features](/developerportal/app-insights/feedback/) with the provided [app](/developerportal/#my-apps) in **Apps**. |

`TEMPLATE-MPK-FILE` is an optional path to a Mendix app package (*.mpk*) file. If this argument is omitted, the app is created with a default empty project template.

#### Examples

Examples of commands are described in the table below:

| Example | Result |
| --- | --- |
| `mx create-project` | Creates an app in the current folder using all the default parameters. |
| `mx create-project --app-name "MyFirstApp" --output-dir "C:/Projects/MyFirstApp"` | Creates an app named `MyFirstApp` in the *C:/Projects/MyFirstApp* folder using all the default parameters. |
| `mx create-project "C:/Templates/ExpenseReportTemplate.mpk"` | Creates an app with the default parameters from a template located at *C:/Templates/ExpenseReportTemplate.mpk*. |

#### Return Codes 

Return codes are described in the table below:

| Exit Code | Description |
| --- | --- |
| 0 | The app creation was successful. |
| 1 | An internal error occurred. |
| 2 | There is something wrong with the command-line options. |

### Undocumented Options

The mx tool contains options that are not described in this document. Those are for internal Mendix usage and are not officially supported. This might change in the future, but these options can be used only at your own risk.
