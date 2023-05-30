---
title: "mx check Command"
linktitle: "check"
url: /refguide/mx-command-line-tool/mx-check
category: "General Info"
weight: 40
description: "Describes the options of the mx command-line tool."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "check"]
---

The `mx check` command checks the app MPR file for issues such as Errors, Warnings, Deprecations, or Performance Recommendations.

{{% alert color="info" %}}
The MPR file must be the same version as mx.
{{% /alert %}}

## 1 Usage

Use the following command pattern for `mx check`:

`mx check [OPTIONS] INPUT [Optional path to exported Suppress Warnings file (JSON)]`

The `OPTIONS` are described in the table below:

| Option           | Shortcut | Result                                                       |
| ---------------- | -------- | ------------------------------------------------------------ |
| `--help`         | `-h`     | Displays the help text and exits.                            |
| `--warnings`     | `-w`     | Include warnings in the output                               |
| `--deprecations` | `-d`     | Include deprecations in the output                           |
| `--performance`  | `-p`     | Include performance checks in the output (performance recommendations are only output if there are no errors) |

{{% alert color="info" %}}
Errors in the MPR are always reported.
{{% /alert %}}

For `INPUT`, enter a single *.mpr* file.

You can optionally specify the path to an exported Suppress Warnings file (JSON file). This means that `mx check -w` will use the list of suppressed warnings in the JSON file, instead of the default behavior which is to read from the *project-settings.user.json* file in the app directory.

## 2 Examples

Examples of commands are described in the table below:

| Example                                                      | Result                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `mx check --help`                                            | Displays the help text for the check command.                |
| `mx check C:\MxProjects\App-main\App-main.mpr`               | Checks the app at `C:\MxProjects\App-main\App-main.mpr` for errors. |
| `mx check C:\MxProjects\App-main\App-main.mpr -p`            | Checks the app at `C:\MxProjects\App-main\App-main.mpr` for errors and performance recommendations. |
| `mx check C:\MxProjects\App-main\App-main.mpr --warnings --deprecations` | Checks the app at `C:\MxProjects\App-main\App-main.mpr` for errors, warnings, and deprecations. Suppressed warnings will be read from the *project-settings.user.json* file within the app directory. |
| `mx check C:\MxProjects\App-main\App-main.mpr c:\MxFiles\my-exported-suppressed-warnings.json --warnings` | Checks the app at `C:\MxProjects\App-main\App-main.mpr` for errors and warnings. Suppressed warnings will be read from the JSON file *my-exported-suppressed-warnings.json*. |
| `mx check C:\MxProjects\App-main\App-main.mpr -w -d -p`      | Checks the app at `C:\MxProjects\App-main\App-main.mpr` for errors, warnings, deprecations, and performance recommendations. |

## 3 Return Codes

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
