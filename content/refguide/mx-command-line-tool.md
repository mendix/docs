---
title: "mx Command-Line Tool"
category: "General Info"
menu_order: 50
description: "Describes the options of the mx command-line tool"
tags: ["mx", "project", "project package", "command-line", "tool", "mx", "studio pro", "windows", "linux"]
---

## 1 Introduction

The **mx** tool is a Windows and Linux command-line tool that can be used to do useful things with your Mendix app project.

## 2 Location

Mendix Studio Pro comes with the mx command-line tool. The executable `mx.exe` file can be found in the same folder that contains `studiopro.exe` (for example, *C:\Program Files\Mendix\8.1.0.58215\modeler\mx.exe*).

## 3 mx Tool Options

The mx tool enables the options described below.

### 3.1 `mx convert`

The `mx convert` command converts the inputted app project(s) to the Studio Pro version with which the tool was bundled. For example, if you are using the mx command-line tool that came with Mendix version 8.1.0.58215, then `mx convert` will convert app projects to that version. 

The input can be a single file, directory, or multiple files.

{{% alert type="info" %}}
The mx tool can only upgrade. You cannot use it to convert to a lower version.
{{% /alert %}}

#### 3.1.1 Usage

Use this command pattern for `mx convert`:

`mx convert [OPTIONS] INPUT... OUTPUT`

These are the `OPTIONS`:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--help` | `-h` | Displays the help text and exits. |
| `--in-place` | `-p` | Convert an app project directory in place. Use this option to convert a folder containing a Mendix app project. Otherwise, `mx convert` will convert *.mpk* files. |
| `--skip-error-check` | `-s` | Does not check for errors. Use this option to disable app project error-checking during the conversion. When omitted, the tool will report on the number of errors, warnings, and deprecations in the app project and do the conversion. |

For `INPUT...`, enter one or more *.mpk* files or one directory that needs to be converted.

For `OUTPUT`, enter the output location for the converted results. Keep the following points in mind:

* When `INPUT...` is a single file, `OUTPUT` can be a single file or directory; otherwise, `OUTPUT` must be a directory.
* When using the `--in-place` option, the `INPUT...` folder will also be used as the `OUTPUT` folder, so you do not need to specify a separate `OUTPUT` folder

#### 3.1.4 Examples

| Example | Result |
| --- | --- |
| `mx convert --in-place C:\MxProjects\App-main` | Converts the app project in folder *C:\MxProjects\App-main* to the Studio Pro version with which the mx tool was bundled. |
| `mx convert C:\Mendix\App1.mpk C:\Mendix\App2.mpk C:\Mendix\ConvertedProjects\` | Converts the *App1.mpk* and *App2.mpk* app project packages that are in the *C:\Mendix\* folder and puts the results in the *C:\Mendix\ConvertedProjects\* folder. |
| `mx convert --skip-error-check C:\Mendix\Packages\ C:\Mendix\ConvertedPackages\` | Converts all app project packages in the *C:\Mendix\Packages\* folder and outputs to the *C:\Mendix\ConvertedPackages\* folder without checking for errors. |

#### 3.1.5 Return Codes 

| Exit Code | Description |
| --- | --- |
| 0 | The conversion was successful. |
| 1 | An internal error occurred. |
| 2 | There is something wrong with the command-line options. |
| 3 | Converting the project(s) failed. |

### 3.2 Undocumented Options

The mx tool contains options that are not described in this document. Those are for internal Mendix usage and are not officially supported. This might change in the future, but these options can be used only at your own risk.
