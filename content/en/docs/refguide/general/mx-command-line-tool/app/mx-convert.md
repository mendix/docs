---
title: "mx convert Command"
linktitle: "convert"
url: /refguide/mx-command-line-tool/mx-convert
category: "General Info"
weight: 30
description: "Describes the options of the mx command-line tool."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "convert"]
---

The `mx convert` command converts the app(s) MPK file(s) to a specific Studio Pro version. For example, if you are using the mx command-line tool for Studio Pro version 10.0.0.5003,  `mx convert` will convert the app to that version. 

The input can be a single file, directory, or multiple files.

{{% alert color="info" %}}
The mx tool can only upgrade your app; you cannot use it to downgrade the version.
{{% /alert %}}

## 1 Usage

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

## 2 Examples

Examples of commands are described in the table below:

| Example | Result |
| --- | --- |
| `mx convert --in-place C:\MxProjects\App-main` | Converts the app in folder `C:\MxProjects\App-main` to the specific Studio Pro version which the mx tool is bundled with. |
| `mx convert C:\Mendix\App1.mpk C:\Mendix\App2.mpk C:\Mendix\ConvertedProjects\` | Converts the *App1.mpk* and *App2.mpk* app packages that are in the *C:\Mendix\* folder and puts the results in the `C:\Mendix\ConvertedProjects\` folder. |
| `mx convert --skip-error-check C:\Mendix\Packages\ C:\Mendix\ConvertedPackages\` | Converts all app packages in the `C:\Mendix\Packages\` folder to the `C:\Mendix\ConvertedPackages\` folder without checking for errors. |

## 3 Return Codes

Return codes are described in the table below:

| Return Code | Description |
| --- | --- |
| 0 | The conversion was successful. |
| 1 | An internal error occurred. |
| 2 | There is something wrong with the command-line options. |
| 3 | Converting failed. |
