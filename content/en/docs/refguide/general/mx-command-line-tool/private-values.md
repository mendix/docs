---
title: "Private Values Commands"
url: /refguide/mx-command-line-tool/private-values/
weight: 10
description: "Describes the commands related to private values for the mx command-line tool."
---

## Introduction

The commands in this group are related to showing and deleting private values.

Studio Pro stores private values, such as values for [private constants](/refguide/configuration/#constants), in an encrypted way in the user's local app data. These private values are defined by:

* The path of the `.mpr` file of the app
* The version of Studio Pro
* A key, such as `StudioPro.Settings.Configuration.ConstantValue.MyFirstModule.MyConstant` for the configured constant value for constant `MyFirstModule.MyConstant`

Make sure to exit all instances of Studio Pro before using these commands, as Studio Pro keeps a cache of private values.

## mx show-private-values Command {#show-private-values}

The `mx show-private-values` command produces a list of paths, versions, and keys of all private values stored in the current user's local app data. It does not show the (encrypted) value.

### Usage

Use the following command pattern: `mx show-private-values`

The tool will output one line for each private value, with the path, version, and key, separated by the `tab` character.

### Examples

The output might look something like this:

```
C:\Users\John.Doe\Mendix\MyProductApp\MyProductApp-main.mpr 10.12.0 StudioPro.Settings.Configuration.ConstantValue.MyFirstModule.MyConstant
C:\Users\John.Doe\Mendix\MyProductApp\MyProductApp-main.mpr 10.18.0 StudioPro.Settings.Configuration.ConstantValue.MyFirstModule.MyConstant
C:\Users\John.Doe\Mendix\MyBikesApp\MyBikesApp-main.mpr 10.12.0 StudioPro.Settings.Configuration.ConstantValue.MyFirstModule.OtherConstant
```

### Return Codes

These are the return codes:

| Return Code | Description |
| --- | --- |
| `0` | The command ran successfully. |

## mx delete-private-values Command {#delete-private-values}

The `mx delete-private-values` command deletes private values from the current user's local app data.

When used with `-f` (`--force`), it deletes private values and displays the number of private values it has deleted. When used with `-n` (`--dry-run`), it shows which private values would be deleted, but does not actually delete anything.

When you delete a private value that is needed by an app, the next time you open that app in Studio Pro, it will produce a consistency error indicating that you have to type the value again.

### Usage

Use the following command pattern: `mx delete-private-values [-n|-f] [OPTIONS]`

These are the required parameters:

| Option | Shortcut | Result |
| --- | --- | --- |
| `--dry-run` | `-n` | Shows which private values would be deleted, but does not actually delete anything. |
| `--force` | `-f` | Deletes private values. |

Either `-n` or `-f` must be specified.

These are the `OPTIONS`:

When used without options, the command deletes all private values. The options filter the list of private values to be deleted.

| Option | Result |
| ---  | --- |
| `--not-on-disk` | Deletes only private values whose path cannot be found on disk. |
| `--path`        | Deletes only private values for the given path. |
| `--version`     | Deletes only private values of the given Studio Pro version. |
| `--key`         | Deletes only private values with the given key. |
| `--item`        | Specifies the path, version, and key, separated by whitespace, of a specific private value to be deleted. |

### Examples

| Example | Result |
| --- | --- |
| `mx delete-private-values -n` | Shows all private values, but does not delete them (Same as `mx show-private-values`). |
| `mx delete-private-values -f --not-on-disk` | Deletes all private values for which the path cannot be found on disk. This is useful when you have deleted one or more apps from your disk. |
| `mx delete-private-values -f --path="C:\Users\John.Doe\Mendix\MyBikesApp\MyBikesApp-main.mpr" --version=10.12.0` | Deletes private values that were stored for the app `MyBikesApp-main.mpr` for Studio Pro version 10.12.0. This is useful after you have upgraded that app to a later version. |
| `mx delete-private-values -f --version=10.12.0` | Deletes private values for Studio Pro version 10.21.0. This is useful after you have upgraded all your apps to later versions. |
| `mx delete-private-values -f --item="C:\Users\John.Doe\Mendix\MyProductApp\MyProductApp-main.mpr 10.12.0 StudioPro.Settings.Configuration.ConstantValue.MyFirstModule.MyConstant"` | Deletes a specific private value (Same as specifying `--path=`, `version=` and `key=`). |

### Return Codes

These are the return codes:

| Return Code | Description |
| --- | --- |
| `0` | The command ran successfully. |
| `2` | There is something wrong with the command-line options. |
