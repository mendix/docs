---
title: "Adaptable Solution Commands"
url: /refguide/mx-command-line-tool/adaptable
weight: 20
description: "Describes the adaptable solution-related commands for the mx command-line tool."
---

## Introduction

The commands in this group are related to [adaptable solutions](/appstore/creating-content/sol-adapt/). 

These commands use common format exit codes.

The commands return `0` in case of success.

In case of errors, the exit code consists of three digits `XYZ`:

* `X` determines the error type:
    * `1` – parameter validation error
    * `2` – output-related error
    * `3` – errors related to the execution of the operation
* `Y` is the number of the parameter the error is related to (if applicable). If the error is not related to the parameters, this is zero.
* `Z` determines error details:
    * `1` – file is not found
    * `2` – app is too old
    * `3` – distribution is not enabled
    * `4` – version is not in the SemVer format
    * `5` – app was not initialized from a solution package

For exit code examples, refer to the specific commands below.

## mx show-app-version Command {#show-app-version}

The `mx show-app-version` command enables seeing the [publisher-side](/appstore/creating-content/sol-solutions-guide/) version of your solution (the version of the solution that you develop) and the [consumer-side](/appstore/creating-content/sol-solutions-impl/) version of the solution package that your app is based on (the version of the solution package when you consumed the solution).

### Usage

Use the following command pattern for `mx show-app-version`:

`mx show-app-version MPR-FILE [OPTIONS]`

These are the `OPTIONS`:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--based-on` | `-b` | Shows the `Based on` version. |
| `--help` | | Shows help for the `mx show-app-version` command and exits. |

For `MPR-FILE`, enter an *.mpr* file.

The `--based-on` version is a version of a solution package (*.mxsolution*) that the current app is based on.

### Examples

Here are two examples:

* `mx show-app-version C:\MyApp\MyApp.mpr`
* `mx show-app-version C:\MyApp\MyApp.mpr -b`

### Return Codes

This command uses the common format exit codes described above for all app-version related commands.

This table shows the return codes and their description:

| Return Code | Description |
| --- | --- |
| `0` | No errors. |
| `315` | If `-b` was specified, but the app is not based on a solution.  |
| `313` | If `-b` was not specified, but distribution as a solution is not enabled for the app. |

## mx set-app-version Command {#set-app-version}

The `mx set-app-version` command enables setting the version of your [solution](/appstore/creating-content/sol-solutions-guide/) when building it.

### Usage

Use the following command pattern for `mx set-app-version`:

`mx set-app-version MPR-FILE VERSION`

These are the `OPTIONS`:

| Option | Result |
| --- | --- |
| `--help` | Shows help for the `mx set-app-version` command and exits. |

For `MPR-FILE`, enter an *.mpr* file.

For `VERSION`, enter a version in the [SemVer](https://semver.org) format.

### Examples

Here is an example:

`mx set-app-version C:\MyApp\MyApp.mpr 1.2.3`

### Return Codes

This command uses the common format exit codes described above for all app-version related commands.

This table shows the return codes and their description:

| Return Code | Description |
| --- | --- |
| `0` | No errors. |
| `124` | The version is not in the SemVer format. |
| `313` | Distribution as a solution is not enabled for the app. |
