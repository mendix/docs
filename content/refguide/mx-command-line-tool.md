---
title: "mx command-line tool"
category: "General Info"
menu_order: 50
description: "Describes the options of the mx command-line tool"
tags: ["mx", "project", "project package", "command-line", "tool", "mx", "studio pro", "windows", "linux"]
---

## 1 Introduction

The `mx` tool is a Windows and Linux command-line tool that can be used to do useful things with your Mendix project.

## 2 Location

Mendix Studio Pro comes with the `mx` command-line tool. The executable `mx.exe` can be found in the same folder that contains `studiopro.exe`, so for example `C:\Program Files\Mendix\8.1.0.58215\modeler\mx.exe`

## 3 Mx tool options

The mx tool has a number of options.

* [mx convert](#3.1-using-the-`mx-convert`-option)
* [undocumented options](#3.2-undocumented-options)

### 3.1 Using the `mx convert` option 

The option `mx convert` converts the input projects(s) to the version of Studio Pro that it was bundled with. So if you are using the mx command-line tool that came with Mendix version 8.1.0.58215 then `mx convert` will convert projects to that version. Note that it can only upgrade. You cannot use it to convert to a lower version.

The input can be a single file or directory, or multiple files.

#### Usage

`mx convert [OPTIONS] INPUT... OUTPUT`

|Option|Shortcut|Result|
|---|---|---|
|`--help`|`-h`|display the help text and exit|
|`--in-place`|`-p`|convert a project directory in place|
|`--skip-error-check`|`-s`|don't check for errors|

Use option `--in-place` to convert a folder containing a Mendix project. Otherwise `mx convert` will convert mpk-files.

Use option `--skip-error-check` to disable project error checking during the conversion. When omitted, the tool will report on the number of errors, warnings and deprecations in the project and do the conversion.


#### INPUT...

One or more mpk-files or one directory that needs to be converted.

#### OUTPUT

The output location for the converted results.

When INPUT is a single file the output can be a single file or directory. Otherwise OUTPUT must be a directory.

When using option `--in-place` the input folder will also be used as the output folder, so you don't need to specify a separate output folder.

#### Examples

|Example|Result|
|---|---|
|`mx convert --in-place C:\MxProjects\App-main`|converts the project in folder `C:\MxProjects\App-main` to the version of the mx tool.|
|`mx convert C:\Mendix\App1.mpk C:\Mendix\App2.mpk C:\Mendix\ConvertedProjects\`|convert project packages `App1.mpk` and `App2.mpk` that are in the `C:\Mendix\` folder and put the results in the `C:\Mendix\ConvertedProjects\` folder.|
|`mx convert --skip-error-check C:\Mendix\Packages\ C:\Mendix\ConvertedPackages\`|convert all project packages in folder `C:\Mendix\Packages\` and output to folder `C:\Mendix\ConvertedPackages\` without checking for errors.|

#### Return codes 

|Exit code|Description|
|---|---|
|0|The conversion was successful|
|1|An internal error occurred|
|2|There’s something wrong with the command-line options|
|3|Converting the project(s) failed|


### 3.2 Undocumented options

The `mx` tool contains options that are not described in this document. Those are for internal Mendix usage and are not officially supported. This might change in the future, but currently using these options is for your own risk.


