---
title: "mx show-app-version Command"
linktitle: "show-app-version"
url: /refguide/mx-command-line-tool/mx-show-app-version
category: "General Info"
weight: 10
description: "Describes the mx show-app-version command."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "check"]
---

The mx show-app-version command allows you to see the [publisher-side](/appstore/creating-content/sol-solutions-guide/) version of your solution (meaning, the version of the solution that you develop) and the [consumer-side](/appstore/creating-content/sol-solutions-impl/) version of the solution package that your app is based on (meaning, the version of the solution package when you consumed the solution).

## 1 Usage

Use the following command pattern for `mx show-app-version`:

`mx show-app-version MPR-FILE [OPTIONS]`

The `OPTIONS` are described in the table below:

| Option       | Shortcut | Result                            |
| ------------ | -------- | --------------------------------- |
| `--based-on` | `-b`     | Show `Based on` version.          |
| `--help`     | `-h`     | Displays the help text and exits. |

For MPR-FILE enter a *.mpr* file.

`Based on` version is a version of a solution package (.mxsolution) current App is based on.

## 2 Examples

`mx show-app-version C:\MyApp\MyApp.mpr`

`mx show-app-version C:\MyApp\MyApp.mpr -b`

## 3 Return Codes

 This command uses [common format exit codes](/refguide/mx-command-line-tool/adaptable/) for all app-version related commands.

 The table below shows return codes and their meaning:

| Return Code | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| 0           | No errors                                                    |
| 315         | if -b was specified but the app is not based on a solution.  |
| 313         | if -b was not specified but distribution as a solution is not enabled for the app. |
