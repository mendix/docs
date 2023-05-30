---
title: "mx show-version Command"
linktitle: "show-version"
url: /refguide/mx-command-line-tool/mx-show-version
category: "General Info"
weight: 20
description: "Describes the options of the mx command-line tool."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "show-version"]
---

The `mx show-version` command reports which version of Studio Pro was used last time the app was opened.

The input is a single MPR file.

{{% alert color="info" %}}
The MPR file must be the same version as mx.
{{% /alert %}}

## 1 Usage

Use the following command pattern for `mx show-version`:

`mx show-version [OPTIONS] INPUT`

The `OPTIONS` are described in the table below:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--help` | `-h` | Displays the help text and exits. |

For `INPUT`, enter a *.mpr* file.

## 2 Examples

Examples of commands are described in the table below:

| Example | Result |
| --- | --- |
| `mx show-version --help` | Displays the help text for the `show-version` command. |
| `mx show-version C:\Mendix\App1\App1.mpr` | Displays the version of Studio Pro that was last used to open the app. |

## 3 Return Codes

Return codes are described in the table below:

| Return Code | Description |
| --- | --- |
| 0 | The command ran successfully. |
