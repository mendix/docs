---
title: "App Commands"
url: /refguide/mx-command-line-tool/app/
weight: 10
description: "Describes the app-related commands for the mx command-line tool."
---

## Introduction

The commands in this group are related to Mendix app creation, checking, versioning, and conversion tasks.

Most commands require a path to the *.mpr* file as a parameter.

## mx create-project Command {#create-project}

The `mx create-project` command creates a new app in Studio Pro. The app version depends on the version the tool was bundled with. For example, if you are using the mx tool for Studio Pro 11.0.0, `mx create project` will create a new app in that version.

### Usage

Use the following command pattern: `mx create-project [OPTIONS] [TEMPLATE-MPK-FILE]`

These are the `OPTIONS`:

| Option                 | Default Value     | Result                                                                                                                                                                                                                                                                                                                                    |
|------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--app-name`           | App               | Assigns the specified app name to the app.                                                                                                                                                                                                                                                                                                |
| `--help`               |                   | Shows help for the `mx create-project` command and exits.                                                                                                                                                                                                                                                                                 |
| `--language-code`      | en_US             | The default language of the app.                                                                                                                                                                                                                                                                                                          |
| `--use-mpr-format-v1`  | MPRv2          | If specified, the app is created in MPRv1 format (otherwise, with MPRv2).                                                                                                                                                                                                                 |
| `--output-dir`         | Current directory | The directory in which to create the app.                                                                                                                                                                                                                                                                                                 |
| `--sprintr-app-id`     | Optional          | Associates the app [feedback features](/developerportal/app-insights/feedback/) with the provided [app](/developerportal/#my-apps) in **Apps**. The value is a GUID. You can find this ID in the browser URL when you access the app in [Apps](https://sprintr.home.mendix.com/) (for example, `1a428ea7-b00e-4166-9b23-20b7be88a40e`). |

`TEMPLATE-MPK-FILE` is an optional path to a Mendix app package *.mpk* file. If omitted, the command creates the app with a default empty project template.

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

The `mx show-version` command reports which version of Studio Pro last opened the app.

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

## mx show-java-version Command {#show-java-version}

The `mx show-java-version` command reports the configured Java version of the app.

The input is a single *.mpr* file.

{{% alert color="info" %}}
The *.mpr* file must be the same version as the mx tool.
{{% /alert %}}

### Usage

Use the following command pattern for `mx show-java-version`:

`mx show-java-version INPUT`

For `INPUT`, enter an *.mpr* file.

### Examples

These are example commands:

| Example | Result |
| --- | --- |
| `mx show-java-version C:\Mendix\App1\App1.mpr` | Displays the configured Java version of the app. |

### Return Codes

These are the return codes:

| Return Code | Description |
| --- | --- |
| `0` | The command ran successfully. |
| `1` | The command failed, for example, because the *.mpr* file could not be found. |

## mx convert Command {#convert}

The `mx convert` command converts app *.mpk* file (or files) of the app (or apps) to a specific Studio Pro version. For example, the mx command-line tool for Studio Pro 11.0.0 converts apps to version 11.0.0. 

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
| `--help` | | Shows help for the `mx convert` command and exits. |
| `--in-place` | `-p` | Converts the current app directory. Use this option to convert a folder containing a Mendix app. Otherwise, `mx convert` converts *.mpk* files. | 
| `--skip-error-check` | `-s` | Does not check for errors. Use this option to disable app error checking during conversion. When omitted, the tool reports the number of errors, warnings, and deprecations in the app before converting it. |

For `INPUT...`, enter one or more *.mpk* files or one directory that needs to be converted.

For `OUTPUT`, enter the output location for the converted results. Note the following:

* When `INPUT...` is a single file, `OUTPUT` can be a single file or directory. Otherwise, `OUTPUT` must be a directory.
* When using the `--in-place` option, the `INPUT...` folder is also used as the `OUTPUT` folder, so you do not need to specify a separate `OUTPUT` folder.

### Examples

These are example commands:

| Example | Result |
| --- | --- |
| `mx convert --in-place C:\MxProjects\App-main` | Converts the app in folder *C:\MxProjects\App-main* to the Studio Pro version that the mx tool is bundled with. |
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

The `mx check` command checks the app *.mpr* file for errors, warnings, deprecations, and performance recommendations.

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
| `--performance`  | `-p` | Includes performance checks in the output. Performance recommendations are only included if there are no errors. |

{{% alert color="info" %}}
Errors in the *.mpr* are always reported.
{{% /alert %}}

For `INPUT`, enter a single *.mpr* file.

You can optionally specify the path to an exported suppress-warnings (JSON) file. If specified, `mx check -w` uses the list of suppressed warnings in the JSON file instead of reading from the *project-settings.user.json* file in the app directory.

### Examples

These are example commands:

| Example | Result |
| --- | --- |
| `mx check --help` | Displays the help text for the check command. |
| `mx check C:\MxProjects\App-main\App-main.mpr` | Checks the app at *C:\MxProjects\App-main\App-main.mpr* for errors. |
| `mx check C:\MxProjects\App-main\App-main.mpr -p` | Checks the app at *C:\MxProjects\App-main\App-main.mpr* for errors and performance recommendations. |
| `mx check C:\MxProjects\App-main\App-main.mpr --warnings --deprecations` | Checks the app at *C:\MxProjects\App-main\App-main.mpr* for errors, warnings, and deprecations. Suppressed warnings are read from the *project-settings.user.json* file in the app directory. |
| `mx check C:\MxProjects\App-main\App-main.mpr c:\MxFiles\my-exported-suppressed-warnings.json --warnings` | Checks the app at *C:\MxProjects\App-main\App-main.mpr* for errors and warnings. Suppressed warnings are read from the JSON file *my-exported-suppressed-warnings.json*. |
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

These values are logically combined with `OR` to indicate a mix of errors, warnings, deprecations, or performance recommendations.

For example:

* `3` if errors and warnings are found
* `7` if errors, warnings, and deprecations are found

## mx translate Command {#translate}

The `mx translate` command exports and imports all translatable texts in your Mendix app. This command is currently in public beta.

{{% alert color="warning" %}}
By default, this command excludes Marketplace modules from the exported texts. When Marketplace modules are updated, texts from a previous export will not import correctly, and your translations will be lost when you import a new version of a Marketplace module.
{{% /alert %}}

{{% alert color="info" %}}
The *.mpr* file must be the same version as the mx tool.
{{% /alert %}}

### Usage

Use the following command pattern for `mx translate`:

`mx translate [-i|-e] -t EXPORT_FORMAT -s LANGUAGE_CODE PROJECT TRANSLATION_PATH [OPTIONS]`

These are the required parameters:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--import-translations` | `-i` | Imports translations from the specified translation directory. This is required if `--export-translations` is not specified. |
| `--export-translations` | `-e` | Exports translations to the specified translation directory. This is required if `--import-translations` is not specified. |
| `--type`  | `-t` | Specifies the file type. This can be either `xlsx` or `po`. |
| `--source-language-code`| `-s` | Specifies the ISO 639 language code (for example, `en_US`) to use as the source language. |

For `PROJECT`, enter a single *.mpr* file.

For `TRANSLATION_PATH`, enter a file path to import or export the translation files.

These are the `OPTIONS`:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--force-import`  | `-f` | Accepts some warnings and errors and continues the import process. |
| `--loose-version-check`  | `-l` | Converts the project to the version of the mx.exe if the versions differ. |
| `--include-marketplace-modules` | `-m` | Includes Marketplace modules in the output. By default, Marketplace modules are excluded. |

{{% alert color="info" %}}
Errors in the *.mpr* are always reported.
{{% /alert %}}

### Examples

These are example commands:

| Example | Result |
| --- | --- |
| `mx translate --help` | Displays the help text for the translate command. |
| `mx translate -i -t po -s en_US C:\MxProjects\App-main\App-main.mpr C:\MxProjects\App-main\translations` | Imports *.po* files from *C:\MxProjects\App-main\translations* in to the app at *C:\MxProjects\App-main\App-main.mpr* with *en_US* as the source language code. |
| `mx translate -e -t xlsx -s en_US C:\MxProjects\App-main\App-main.mpr C:\MxProjects\App-main\translations` | Exports *.xlsx* files from the app at *C:\MxProjects\App-main\App-main.mpr* in to the directory at *C:\MxProjects\App-main\translations* with *en_US* as the source language code. |

### Return Codes

These are the return codes:

| Return Code | Description |
| --- | --- |
| `0` | No issues found. |
| `100` | Validation error on the input. |
| `300` | Exception, something went wrong. |

## mx sync-java-dependencies Command {#java-dependencies}

The `mx sync-java-dependencies` command synchronizes the managed Java dependencies configured in the project modules. This adds the corresponding *.jar* files to the `vendorlib` directory in the project root.

The input is a single *.mpr* file.

{{% alert color="info" %}}
The *.mpr* file must be the same version as the mx tool.
{{% /alert %}}

### Usage

Use the following command pattern for `mx sync-java-dependencies`:

`mx sync-java-dependencies INPUT`

For `INPUT`, enter an *.mpr* file.

### Examples

These are example commands:

| Example | Result |
| --- | --- |
| `mx sync-java-dependencies C:\Mendix\App1\App1.mpr` | Synchronizes the managed Java dependencies of the project. |

### Return Codes

These are the return codes:

| Return Code | Description |
| --- | --- |
| `0` | The command ran successfully. |
| `1` | The command failed, for example, because the *.mpr* file could not be found. |
