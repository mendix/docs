---
title: "mx set-app-version Command"
linktitle: "set-app-version"
url: /refguide/mx-command-line-tool/mx-set-app-version
category: "General Info"
weight: 20
description: "Describes the mx set-app-version command."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "check"]
---

The mx set-app-version command allows you to set the version of your [solution](/appstore/creating-content/sol-solutions-guide/) when building it.

## 1 Usage

Use the following command pattern for `mx set-app-version`:

`mx set-app-version MPR-FILE VERSION`

The `OPTIONS` are described in the table below:

| Option   | Shortcut | Result                            |
| -------- | -------- | --------------------------------- |
| `--help` | `-h`     | Displays the help text and exits. |

For MPR-FILE enter a *.mpr* file.

For VERSION enter a version in [SemVer](https://semver.org) format

## 2 Examples

`mx set-app-version C:\MyApp\MyApp.mpr 1.2.3`

## 3 Return Codes

 This command uses [common format exit codes](/refguide/mx-command-line-tool/adaptable/) for all app-version related commands.

 The table below shows return codes and their meaning:

| Return Code | Description                                              |
| ----------- | -------------------------------------------------------- |
| 0           | No errors                                                |
| 124         | if Version is not in SemVer format                       |
| 313         | if Distribution as a solution is not enabled for the app |


