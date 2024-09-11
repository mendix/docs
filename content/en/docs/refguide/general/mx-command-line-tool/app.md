---
title: "App Commands"
url: /refguide/mx-command-line-tool/app
weight: 10
description: "Describes the app-related commands for the mx command-line tool."
---

## Introduction

The commands in this group are related to Mendix app creation, checking, versioning, and conversion.

Typically, these commands require a path to the *.mpr* file as a parameter.

## mx create-project Command {#create-project}

The `mx create-project` command creates a new app in Studio Pro. The app version depends on the version the tool was bundled with. For example, if you are using the mx tool for Studio Pro 10.0.0, `mx create project` will create a new app in that version. 

### Usage

Use the following command pattern: `mx create-project [OPTIONS] [TEMPLATE-MPK-FILE]`

These are the `OPTIONS`:

| Option | Default Value | Result |
| --- | --- | --- |
| `--app-name` | App | Assigns the specified app name to the app. |
| `--help` | | Shows help for the `mx create-project` command and exits.|
| `--language-code` | en_US | The default language of the app. | 
| `--output-dir` | Current directory | The directory in which to create the app. |
| `--sprintr-app-id` | Optional | Associates the app [feedback features](/developerportal/app-insights/feedback/) with the provided [app](/developerportal/#my-apps) in **Apps**. The value is a GUID. When accessing the app in [Apps](https://sprintr.home.mendix.com/), this ID can be found in the browser's URL (for example, `1a428ea7-b00e-4166-9b23-20b7be88a40e`). |

`TEMPLATE-MPK-FILE` is an optional path to a Mendix app package *.mpk* file. If this argument is omitted, the app is created with a default empty project template.

### Examples

These are example commands:

| Example | Result |
| --- | --- |
| `mx create-project` | Creates an app in the current folder using all the default parameters. |
| `mx create-project --app-name MyFirstApp --output-dir C:\Projects\MyFirstApp` | Creates an app named `MyFirstApp` in the *C:\Projects\MyFirstApp* folder using all the default parameters. |
| `mx create-project C:\Templates\ExpenseReportTemplate.mpk` | Creates an app with the default parameters from a template located at *C:\Templates\ExpenseReportTemplate.mpk*. |

### Return Codes

These are the return codes:

| Return Code | Description |
| --- | --- |
| `0` | The app creation was successful. |
| `1` | An internal error occurred. |
| `2` | There is something wrong with the command-line options. |

## mx show-version Command {#show-version}

The `mx show-version` command reports which version of Studio Pro was used last time the app was opened.

The input is a single *.mpr* file.

{{% alert color="info" %}}
The *.mpr* file must be the same version as mx.
{{% /alert %}}

### Usage

Use the following command pattern for `mx show-version`:

`mx show-version [OPTIONS] INPUT`

These are the `OPTIONS`:

| Option | Result |
| --- | --- |
| `--help` | Shows help for the `mx show-version` command and exits. |

For `INPUT`, enter an *.mpr* file.

### Examples

These are example commands:

| Example | Result |
| --- | --- |
| `mx show-version --help` | Displays the help text for the `show-version` command. |
| `mx show-version C:\Mendix\App1\App1.mpr` | Displays the version of Studio Pro that was last used to open the app. |

### Return Codes

These are the return codes:

| Return Code | Description |
| --- | --- |
| `0` | The command ran successfully. |

## mx show-java-version Command{#show-java-version}

{{% alert color="info" %}}
This command is available from 10.14 onwards and in MTS versions 10.6.12+ and 10.12.2+.
{{% /alert %}}

The `mx show-java-version` command reports what the configured Java version of the app is.

The input is a single MPR file.

{{% alert color="info" %}}
The MPR file must be the same version as mx.
{{% /alert %}}

### Usage

Use the following command pattern for `mx show-java-version`:

`mx show-java-version INPUT`

For `INPUT`, enter an *.mpr* file.

### Examples

Examples of commands are described in the table below:

| Example | Result |
| --- | --- |
| `mx show-java-version C:\Mendix\App1\App1.mpr` | Displays the configured Java version of the app. |

### Return Codes

Return codes are described in the table below:

| Return Code | Description |
| --- | --- |
| 0 | The command ran successfully. |
| 1 | The command failed. For example because the *.mpr* file could not be found. |

## mx convert Command {#convert}

The `mx convert` command converts the *.mpk* file (or files) of the app (or apps) to a specific Studio Pro version. For example, if you are using the mx command-line tool for Studio Pro 10.0.0, `mx convert` will convert the app to that version. 

The input can be a single file, directory, or multiple files.

{{% alert color="info" %}}
The mx tool can only upgrade your app. You cannot use it to downgrade the version.
{{% /alert %}}

### Usage

Use the following command pattern for `mx convert`:

`mx convert [OPTIONS] INPUT... OUTPUT`

These are the `OPTIONS`:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--help` | | Shows help for the `mx convert`` command and exits. |
| `--in-place` | `-p` | Converts the current app directory. Use this option to convert a folder containing a Mendix app. Otherwise, `mx convert` will convert *.mpk* files. | 
| `--skip-error-check` | `-s` | Does not check for errors. Use this option to disable app error-checking during the conversion. When omitted, the tool will report on the number of errors, warnings, and deprecations in the app and do the conversion. |

For `INPUT...`, enter one or more *.mpk* files or one directory that needs to be converted.

For `OUTPUT`, enter the output location for the converted results. Please note the following:

* When `INPUT...` is a single file, `OUTPUT` can be a single file or directory; otherwise, `OUTPUT` must be a directory
* When using the `--in-place` option, the `INPUT...` folder will also be used as the `OUTPUT` folder, so you do not need to specify a separate `OUTPUT` folder

### Examples

These are example commands:

| Example | Result |
| --- | --- |
| `mx convert --in-place C:\MxProjects\App-main` | Converts the app in folder *C:\MxProjects\App-main* to the specific Studio Pro version that the mx tool is bundled with. |
| `mx convert C:\Mendix\App1.mpk C:\Mendix\App2.mpk C:\Mendix\ConvertedProjects\` | Converts the *App1.mpk* and *App2.mpk* app packages that are in the *C:\\Mendix\\* folder and puts the results in the *C:\\Mendix\\ConvertedProjects\\* folder. |
| `mx convert --skip-error-check C:\Mendix\Packages\ C:\Mendix\ConvertedPackages\` | Converts all the app packages in the *C:\\Mendix\\Packages\\* folder to the *C:\\Mendix\\ConvertedPackages\\* folder without checking for errors. |

### Return Codes

These are the return codes:

| Return Code | Description |
| --- | --- |
| `0` | The conversion was successful. |
| `1` | An internal error occurred. |
| `2` | There is something wrong with the command-line options. |
| `3` | Converting failed. |

## mx check Command {#check}

The `mx check` command checks the app *.mpr* file for issues such as errors, warnings, deprecations, or performance recommendations.

{{% alert color="info" %}}
The *.mpr* file must be the same version as the mx tool.
{{% /alert %}}

### Usage

Use the following command pattern for `mx check`:

`mx check [OPTIONS] INPUT [Optional path to exported Suppress Warnings file (JSON)]`

These are the `OPTIONS`:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--help`| | Shows help for the `mx check` command and exits. |
| `--warnings` | `-w` | Includes warnings in the output. |
| `--deprecations` | `-d` | Includes deprecations in the output. |
| `--performance`  | `-p` | Includes performance checks in the output (performance recommendations are only outputted if there are no errors). |

{{% alert color="info" %}}
Errors in the *.mpr* are always reported.
{{% /alert %}}

For `INPUT`, enter a single *.mpr* file.

You can optionally specify the path to an exported suppress-warnings (JSON) file. This means `mx check -w` will use the list of suppressed warnings in the JSON file, instead of the default behavior (which is to read from the *project-settings.user.json* file in the app directory).

### Examples

These are example commands:

| Example | Result |
| --- | --- |
| `mx check --help` | Displays the help text for the check command. |
| `mx check C:\MxProjects\App-main\App-main.mpr` | Checks the app at *C:\MxProjects\App-main\App-main.mpr* for errors. |
| `mx check C:\MxProjects\App-main\App-main.mpr -p` | Checks the app at *C:\MxProjects\App-main\App-main.mpr* for errors and performance recommendations. |
| `mx check C:\MxProjects\App-main\App-main.mpr --warnings --deprecations` | Checks the app at *C:\MxProjects\App-main\App-main.mpr* for errors, warnings, and deprecations. Suppressed warnings will be read from the *project-settings.user.json* file within the app directory. |
| `mx check C:\MxProjects\App-main\App-main.mpr c:\MxFiles\my-exported-suppressed-warnings.json --warnings` | Checks the app at *C:\MxProjects\App-main\App-main.mpr* for errors and warnings. Suppressed warnings will be read from the JSON file *my-exported-suppressed-warnings.json*. |
| `mx check C:\MxProjects\App-main\App-main.mpr -w -d -p` | Checks the app at *C:\MxProjects\App-main\App-main.mpr* for errors, warnings, deprecations, and performance recommendations. |

### Return Codes

These are the return codes:

| Return Code | Description |
| --- | --- |
| `0` | No issues found. |
| `1` | Errors were found. |
| `2` | Warnings were found. |
| `4` | Deprecations were found. |
| `8` | Performance recommendations were found. |

Those values are logically `OR` combined to indicate when there are a mix of errors, warnings, deprecations, or performance recommendations.

For example:

* `3` if errors and warnings found
* `7` if errors, warnings, and deprecations found
