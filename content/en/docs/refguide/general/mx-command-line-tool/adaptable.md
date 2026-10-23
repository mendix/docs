---
title: "Adaptable Solution Commands"
url: /refguide/mx-command-line-tool/adaptable/
weight: 20
description: "Describes commands for managing adaptable solution versions in the mx command-line tool."
---

## Introduction

The commands in this group are related to [adaptable solutions](/appstore/creating-content/sol-adapt/). 

These commands use a common exit code format.

The commands return `0` on success.

On error, the exit code consists of three digits `XYZ`:

* `X` – Error type:
    * `1` – parameter validation error
    * `2` – output-related error
    * `3` – operation execution error
* `Y` – Parameter number the error relates to (if applicable). This is zero if the error is not parameter-related.
* `Z` – Error detail:
    * `1` – file not found
    * `2` – app is too old
    * `3` – distribution is not enabled
    * `4` – version is not in SemVer format
    * `5` – app was not initialized from a solution package

For exit code examples, refer to the specific commands below.

## mx show-app-version Command {#show-app-version}

The `mx show-app-version` command shows the [publisher-side](/appstore/creating-content/sol-solutions-guide/) version of your solution (the version you develop) and the [consumer-side](/appstore/creating-content/sol-solutions-impl/) version of the solution package your app is based on (the version when you consumed the solution).

### Usage

Use the following command pattern for `mx show-app-version`:

`mx show-app-version MPR-FILE [OPTIONS]`

These are the `OPTIONS`:

| Option | Shortcut | Description |
| --- | --- | --- |
| `--based-on` | `-b` | Shows the `Based on` version. |
| `--help` | | Shows help for the `mx show-app-version` command and exits. |

For `MPR-FILE`, enter an *.mpr* file.

The `--based-on` version is the version of the solution package (*.mxsolution*) that the current app is based on.

### Examples

Here are two examples:

* `mx show-app-version C:\MyApp\MyApp.mpr`
* `mx show-app-version C:\MyApp\MyApp.mpr -b`

### Return Codes

This command uses the common exit code format described above for all app-version related commands.

This table shows the return codes and their descriptions:

| Return Code | Description |
| --- | --- |
| `0` | No errors. |
| `315` | The `-b` flag was specified, but the app is not based on a solution. |
| `313` | The `-b` flag was not specified, but distribution as a solution is not enabled for the app. |

## mx set-app-version Command {#set-app-version}

The `mx set-app-version` command sets the version of your [solution](/appstore/creating-content/sol-solutions-guide/) when building it.

### Usage

Use the following command pattern for `mx set-app-version`:

`mx set-app-version MPR-FILE VERSION`

These are the `OPTIONS`:

| Option | Description |
| --- | --- |
| `--help` | Shows help for the `mx set-app-version` command and exits. |

For `MPR-FILE`, enter an *.mpr* file.

For `VERSION`, enter a version in the [SemVer](https://semver.org) format.

### Examples

Here is an example:

`mx set-app-version C:\MyApp\MyApp.mpr 1.2.3`

### Return Codes

This command uses the common exit code format described above all app-version related commands.

This table shows the return codes and their descriptions:

| Return Code | Description |
| --- | --- |
| `0` | No errors. |
| `124` | The version is not in SemVer format. |
| `313` | Distribution as a solution is not enabled for the app. |
