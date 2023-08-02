---
title: "mx Command-Line Tool"
url: /refguide9/mx-command-line-tool/
category: "General Info"
weight: 50
description: "Describes the options of the mx command-line tool."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux"]
---

## 1 Introduction

The **mx tool** is a Windows and Linux command-line tool that can be used to perform various actions on a Mendix app.

## 2 Location

Mendix Studio Pro comes with the mx command-line tool. The executable *mx.exe* file can be found in the same folder that contains `studiopro.exe` (for example, *C:\Program Files\Mendix\9.12.2.44241\modeler\mx.exe*).

## 3 mx Tool Options

The mx tool performs the commands described below.

### 3.1 mx convert Command

The `mx convert` command converts the app(s) MPK file(s) to a specific Studio Pro version. For example, if you are using the mx command-line tool for Mendix version 9.12.2.44241, then `mx convert` will convert the app to that version. 

The input can be a single file, directory, or multiple files.

{{% alert color="info" %}}
The mx tool can only upgrade your app; you cannot use it to downgrade the version.
{{% /alert %}}

#### 3.1.1 Usage

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

#### 3.1.2 Examples

Examples of commands are described in the table below:

| Example | Result |
| --- | --- |
| `mx convert --in-place C:\MxProjects\App-main` | Converts the app in folder `C:\MxProjects\App-main` to the specific Studio Pro version which the mx tool is bundled with. |
| `mx convert C:\Mendix\App1.mpk C:\Mendix\App2.mpk C:\Mendix\ConvertedProjects\` | Converts the *App1.mpk* and *App2.mpk* app packages that are in the *C:\Mendix\* folder and puts the results in the `C:\Mendix\ConvertedProjects\` folder. |
| `mx convert --skip-error-check C:\Mendix\Packages\ C:\Mendix\ConvertedPackages\` | Converts all app packages in the `C:\Mendix\Packages\` folder to the `C:\Mendix\ConvertedPackages\` folder without checking for errors. |

#### 3.1.3 Return Codes

Return codes are described in the table below:

| Return Code | Description |
| --- | --- |
| 0 | The conversion was successful. |
| 1 | An internal error occurred. |
| 2 | There is something wrong with the command-line options. |
| 3 | Converting failed. |

### 3.2 mx create-project Command

The `mx create-project` command creates a new app in Studio Pro. The app version depends on the version the tool was bundled with. For example, if you are using the mx tool for Studio Pro version 8.1.0.58215,  `mx create project` will create a new app in that version. 

#### 3.2.1 Usage

Use the following command pattern: `mx create-project [OPTIONS] [TEMPLATE-MPK-FILE]`

The `OPTIONS` are described in the table below:

| Option | Default Value | Result |
| --- | --- | --- |
| `app-name` | App | Assigns the specified app name to the app. |
| `output-dir` | Current directory | The directory in which to create the app. |
| `language-code` | en_US | The default language of the app. | 
| `sprintr-app-id` | Optional | Associates the app [feedback features](/developerportal/general/feedback/) with the provided [Developer Portal app](/developerportal/#my-apps). The value is a GUID. When accessing the app in the Developer Portal, this ID can be found in the browser's URL (for example, `1a428ea7-b00e-4166-9b23-20b7be88a40e`). |

`TEMPLATE-MPK-FILE` is an optional path to a Mendix app package (*.mpk*) file. If this argument is omitted, the app is created with a default empty project template.

#### 3.2.2 Examples

Examples of commands are described in the table below:

| Example | Result |
| --- | --- |
| `mx create-project` | Creates an app in the current folder using all the default parameters. |
| `mx create-project --app-name MyFirstApp --output-dir C:\Projects\MyFirstApp` | Creates an app named `MyFirstApp` in the *C:\Projects\MyFirstApp* folder using all the default parameters. |
| `mx create-project C:\Templates\ExpenseReportTemplate.mpk` | Creates an app with the default parameters from a template located at *C:\Templates\ExpenseReportTemplate.mpk*. |

#### 3.2.3 Return Codes

Return codes are described in the table below:

| Return Code | Description |
| --- | --- |
| 0 | The app creation was successful. |
| 1 | An internal error occurred. |
| 2 | There is something wrong with the command-line options. |

### 3.3 mx check Command [version 9.10+] {#check}

The `mx check` command checks the app MPR file for issues such as Errors, Warnings, Deprecations, or Performance Recommendations.

{{% alert color="info" %}}
The MPR file must be the same version as mx.
{{% /alert %}}

#### 3.3.1 Usage

Use the following command pattern for `mx check`:

`mx check [OPTIONS] INPUT [Optional path to exported Suppress Warnings file (JSON)]`

The `OPTIONS` are described in the table below:

| Option           | Shortcut | Result                                                       |
| ---------------- | -------- | ------------------------------------------------------------ |
| `--help`         | `-h`     | Displays the help text and exits.                            |
| `--warnings`     | `-w`     | Include warnings in the output                               |
| `--deprecations` | `-d`     | Include deprecations in the output                           |
| `--performance`  | `-p`     | [version 9.16+] Include performance checks in the output (performance recommendations are only output if there are no errors) |

{{% alert color="info" %}}
Errors in the MPR are always reported.
{{% /alert %}}

For `INPUT`, enter a single *.mpr* file.

From Studio Pro version 9.17, you can optionally specify the path to an exported Suppress Warnings file (JSON file). This means that `mx check -w` will use the list of suppressed warnings in the JSON file, instead of the default behavior which is to read from the *project-settings.user.json* file in the app directory.

#### 3.3.2 Examples

Examples of commands are described in the table below:

| Example                                                      | Result                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `mx check --help`                                            | Displays the help text for the check command.                |
| `mx check C:\MxProjects\App-main\App-main.mpr`               | Checks the app at `C:\MxProjects\App-main\App-main.mpr` for errors. |
| `mx check C:\MxProjects\App-main\App-main.mpr -p`            | Checks the app at `C:\MxProjects\App-main\App-main.mpr` for errors and performance recommendations. |
| `mx check C:\MxProjects\App-main\App-main.mpr --warnings --deprecations` | Checks the app at `C:\MxProjects\App-main\App-main.mpr` for errors, warnings, and deprecations. Suppressed warnings will be read from the *project-settings.user.json* file within the app directory. |
| `mx check C:\MxProjects\App-main\App-main.mpr c:\MxFiles\my-exported-suppressed-warnings.json --warnings` | Checks the app at `C:\MxProjects\App-main\App-main.mpr` for errors and warnings. Suppressed warnings will be read from the JSON file *my-exported-suppressed-warnings.json*. |
| `mx check C:\MxProjects\App-main\App-main.mpr -w -d -p`      | Checks the app at `C:\MxProjects\App-main\App-main.mpr` for errors, warnings, deprecations, and performance recommendations. |

#### 3.3.3 Return Codes

Return codes are described in the table below:

| Return Code | Description                             |
| ----------- | --------------------------------------- |
| 0           | No issues found.                        |
| 1           | Errors were found.                      |
| 2           | Warnings were found.                    |
| 4           | Deprecations were found.                |
| 8           | Performance recommendations were found. |

Those values are logically OR combined to indicate when there are a mix of errors, warnings, deprecations, or performance recommendations.

For example:

* 3 if errors and warnings found
* 7 if errors, warnings, and deprecations found

### 3.4 mx show-version Command [version 9.4+]

The `mx show-version` command reports which version of Studio Pro was used last time the app was opened.

The input is a single MPR file.

{{% alert color="info" %}}
The MPR file must be the same version as mx.
{{% /alert %}}

#### 3.4.1 Usage

Use the following command pattern for `mx show-version`:

`mx show-version [OPTIONS] INPUT`

The `OPTIONS` are described in the table below:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--help` | `-h` | Displays the help text and exits. |

For `INPUT`, enter a *.mpr* file.

#### 3.4.2 Examples

Examples of commands are described in the table below:

| Example | Result |
| --- | --- |
| `mx show-version --help` | Displays the help text for the `show-version` command. |
| `mx show-version C:\Mendix\App1\App1.mpr` | Displays the version of Studio Pro that was last used to open the app. |

#### 3.4.3 Return Codes

Return codes are described in the table below:

| Return Code | Description |
| --- | --- |
| 0 | The command ran successfully. |

### 3.5 mx merge Command [version 9.17+]

The mx merge command performs a three-way merge of two MPR files having a common base commit.

The input is three MPR files: base, mine, and theirs

#### 3.5.1 Usage

Use the following command pattern for `mx merge`:

`mx merge [OPTIONS] BASE MINE THEIRS`

The `OPTIONS` are described in the table below:

| Option   | Shortcut | Result                            |
| -------- | -------- | --------------------------------- |
| `--help` | `-h`     | Displays the help text and exits. |

`BASE` is common base commit.

`MINE` is the version to merge into; this MPR contains the results of the merge.

`THEIRS` is the version to merge changes from.

#### 3.5.2 Conflicts

If there are conflicts during the merge, you have to resolve those by opening the app in Studio Pro.

#### 3.5.3 Examples

`mx merge C:\MyApp\MyApp.mpr C:\MyApp-main\MyApp.mpr C:\MyApp-FeatureBranch\MyApp.mpr`

#### 3.5.4 Return Codes

| Return Code | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| 0           | Merge is successful, there are no conflicts. *MINE.mpr* contains the result of the merge. |
| 1           | The command is invalid, check input parameters.              |
| 2           | Conflicts are detected. Open *MINE.mpr* in Studio Pro to resolve them. |
| 3           | This code means an exception – an error occurred during the merge. Error details are printed to the command line output. |
| 4           | The version is unsupported.                                  |

### 3.6 mx show-app-version Command [version 9.24.2+]

The mx show-app-version command allows you to see the [publisher-side](/appstore/creating-content/sol-solutions-guide/) version of your solution (meaning, the version of the solution that you develop) and the [consumer-side](/appstore/creating-content/sol-solutions-impl/) version of the solution package that your app is based on (meaning, the version of the solution package when you consumed the solution).

#### 3.6.1 Usage

Use the following command pattern for `mx show-app-version`:

`mx show-app-version MPR-FILE [OPTIONS]`

The `OPTIONS` are described in the table below:

| Option       | Shortcut | Result                            |
| ------------ | -------- | --------------------------------- |
| `--based-on` | `-b`     | Show `Based on` version.          |
| `--help`     | `-h`     | Displays the help text and exits. |

For MPR-FILE enter a *.mpr* file.

`Based on` version is a version of a solution package (.mxsolution) current App is based on.

#### 3.6.2 Examples

`mx show-app-version C:\MyApp\MyApp.mpr`

`mx show-app-version C:\MyApp\MyApp.mpr -b`

#### 3.6.3 Return Codes

This command uses common format exit codes for all app-version related commands.

The command outputs a version requested. If there is no errors, exit code is 0.

In case of errors the exit code consists of 3 digits XYZ:

**X:** determines the error type:

 1: Parameter validation error.

 2: Output-related error.

 3: Errors related to the execution of the operation.

**Y:** is the number of the parameter the error is related to (if applicable).

**Z:** determines the following error details:

 1: File not found.

 2: App is too old.

 3: Distribution is not enabled.

 4: Version is not in the SemVer format.

 5: App was not initialized from a solution package.

 The table below shows return codes and their meaning:

| Return Code | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| 0           | No errors                                                    |
| 315         | if -b was specified but the app is not based on a solution.  |
| 313         | if -b was not specified but distribution as a solution is not enabled for the app. |

### 3.7 mx set-app-version Command [version 9.24.2+]

The mx set-app-version command allows you to set the version of your [solution when building it](/appstore/creating-content/sol-solutions-guide/).

#### 3.7.1 Usage

Use the following command pattern for `mx set-app-version`:

`mx set-app-version MPR-FILE VERSION`

The `OPTIONS` are described in the table below:

| Option   | Shortcut | Result                            |
| -------- | -------- | --------------------------------- |
| `--help` | `-h`     | Displays the help text and exits. |

For MPR-FILE enter a *.mpr* file.

For VERSION enter a version in [SemVer](https://semver.org) format

#### 3.7.2 Examples

`mx set-app-version C:\MyApp\MyApp.mpr 1.2.3`

#### 3.7.3 Return Codes

This command uses common format exit codes for all app-version related commands.

The command outputs a version requested. If there is no errors, exit code is 0.

In case of errors the exit code consists of 3 digits XYZ:

**X:** determines the error type:

 1: Parameter validation error.

 2: Output-related error.

 3: Errors related to the execution of the operation.

**Y:** is the number of the parameter the error is related to (if applicable).

**Z:** determines error details:

 1: File is not found.

 2: App is too old.

 3: Distribution is not enabled.

 4: Version is not in the SemVer format.

 5: App was not initialized from a solution package.

 The table below shows return codes and their meaning:

| Return Code | Description                                              |
| ----------- | -------------------------------------------------------- |
| 0           | No errors                                                |
| 124         | if Version is not in SemVer format                       |
| 313         | if Distribution as a solution is not enabled for the app |

### 3.8 Undocumented Options

The mx tool contains options that are not described in this document. Those are for internal Mendix usage and are not officially supported. This might change in the future, but these options can be used only at your own risk.
