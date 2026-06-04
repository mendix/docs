---
title: "Export Package Commands"
url: /refguide/mx-command-line-tool/export/
weight: 40
description: "Describes commands that export different package types from your app using the mx command-line tool."
---

## Introduction

The commands in this group export different package types from your app.

## mx create-project-package Command {#create-project-package}

The `mx create-project-package` command exports the app as a [source app package](/refguide/export-app-package-dialog/).

### Usage

Use the following command pattern:

`mx create-project-package [OPTIONS] TARGET-FILE`

These are the `OPTIONS`:

| Option | Description |
| --- | --- |
| `-s, --include-snapshot` | Includes a snapshot in the app package. |
| `-d, --package-dir` | Exports the package to the directory. |
| `-k, --skip-managed-dependency-sync` | Does not synchronize managed dependencies; uses existing files in `vendorlib` instead. |
| `--help` | Displays the help screen. |

For `TARGET-FILE`, specify the *.mpr* app you want to export.

### Example

`mx create-project-package c:\MyApps\MyApp.mpr` 

### Return Codes

This table shows the return codes and their descriptions:

| Return Code | Description |
| --- | --- |
| `0` | OK. |
| `1` | Incorrect app file provided. |
| `2` | Output folder not determined. |
| `4` | Unknown package export error. |

## mx create-module-package Command {#create-module-package}

The `mx create-module-package` command exports a module package from an app.

### Usage

Use the following command pattern:

`mx create-module-package [OPTIONS] TARGET-FILE MODULE-NAME`

These are the `OPTIONS`:

| Option | Description |
| --- | --- |
| `-l, --filter-required-libs` | Includes all files except the userlibs that do not have an accompanying `[ModuleName].RequiredLib` file. | 
| `-e, --exclude-files` | Excludes all files that match the given regular expression. |
| `-d, --package-dir` | Exports the module package to the directory. |
| `-m, --exclude-managed-dependencies` | Excludes managed dependencies from synchronization and the exported module package. This prevents the module from being used if Gradle synchronization is disabled in Studio Pro. |
| `--help` | Displays the help screen. |

For `TARGET-FILE`, specify the *.mpr* app you want to export.

For `MODULE-NAME`, specify the name of the module you want to export.

### Example

`mx create-module-package c:\MyApps\MyApp.mpr Module1` 

### Return Codes

This table shows the return codes and their descriptions:

| Return Code | Description |
| --- | --- |
| `0` | OK. |
| `1` | Incorrect app file provided. |
| `2` | Output folder not determined. |
| `3` | Invalid module name specified. |
| `4` | Unknown package export error. |

## mx create-solution-package Command {#create-solution-package}

The `mx create-solution-package` command exports the app as a [solution package](/refguide/export-app-package-dialog/).

### Usage

Use the following command pattern:

`mx create-solution-package [OPTIONS] TARGET-FILE`

These are the `OPTIONS`:

| Option | Description |
| --- | --- |
| `-s, --include-snapshot` | Includes a snapshot in the app package. |
| `-d, --package-dir` | Exports the package to the directory. |
| `-k, --skip-managed-dependency-sync` | Does not synchronize managed dependencies; uses existing files in `vendorlib` instead. |
| `--help` | Displays the help screen. |

For `TARGET-FILE`, specify the *.mpr* app you want to export.

### Example

`mx create-solution-package c:\MyApps\MyApp.mpr` 

### Return Codes

This table shows the return codes and their descriptions:

| Return Code | Description |
| --- | --- |
| `0` | OK. |
| `1` | Incorrect app file provided. |
| `2` | Output folder not determined. |
| `4` | Unknown package export error. |
