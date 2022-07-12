---
title: "Declaring Native Dependencies"
url: /apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies/
description: A guide for understanding native dependencies for pluggable widgets and JavaScript actions.
tags: ["Widget", "Pluggable",  "JavaScript", "Native"]

weight: 40
aliases:
 - /apidocs-mxsdk/apidocs/native-dependencies
---

## 1 Introduction

While developing pluggable widgets and JavaScript actions it is essential to reuse existing modules and libraries from the JavaScript ecosystem. Mendix empowers widget developers with [Pluggable Widgets Tools](https://github.com/mendix/widgets-resources/tree/master/packages/tools/pluggable-widgets-tools) to help you create, develop, and ship pluggable widgets. These tools do the power lifting of linking and embedding third-party dependencies into pluggable widgets' code. The tooling also provides information about Android- and iOS-specific setup parts of some libraries to Mendix native mobile apps. Read on to learn more about how pluggable widgets communicate native dependencies to the Mendix native ecosystem.

While this tooling exists for pluggable widgets, some manual work has to be done for JavaScript actions in order to use libraries targeting `react-native` Android- and iOS-specific setups. Read this page if you want to use such libraries in your JavaScript actions.

## 2 Declaration File {#declaration-file}

The declaration file is a *.json* file which contains information about the specific setup required by a pluggable widget or a JavaScript action.

Where you place the file depends on your situation:

* For JavaScript actions, declare in the *.json* file
* For widgets, if you are using the latest **pluggable-widgets-tools** they will collect and create the declaration file automatically
* If you are creating a widget on your own, create a a *.json* file which has the same name as your widget as listed in its *.mpk*

### 2.1 Naming Conventions

For pluggable widgets, the declaration file should be named after the [Widget Definition XML File](/apidocs-mxsdk/apidocs/pluggable-widgets/#widget-definition), but should use a *.json* extension.

For JavaScript actions, the declaration file should be named after the name of a `.js` file of the action, but should use a *.json* extension.

### 2.2 File Format

The file is a *.json* file of one object of which uses the following format:

```json
{
    "nativeDependencies": {
        "dependency-name": "1.2.3"
    }
}
```

Only the `nativeDependencies` key is allowed in that file. This field is used to declare the native dependencies of the pluggable widget or JavaScript action that this file belongs to.

## 3 Native Dependencies

In order to declare native dependencies needed for a pluggable widget or a JavaScript action, entries are added to the JSON object under the `nativeDependencies` key. The following example specifies two dependencies with their corresponding versions:

```json
{
    "nativeDependencies": {
        "@react-native-community/netinfo": "5.9.10",
        "react-native-image-picker": "3.1.4"
    }
}
```

As you can see above, the key of the entry is a name of the dependency and the value is a version of a dependency needed. Note that `semver` is not supported; an exact version must be specified.

## 4 Conflict Checking

It is not possible to include different versions of the same native dependency in one app. Therefore, when different components in an app use the same native dependency Studio Pro begins a conflict check. It makes sure there is no mismatch between versions required by different components. If version conflicts are detected, they are reported.

## 5 Read More

* [Pluggable Widget API Documentation](/apidocs-mxsdk/apidocs/pluggable-widgets/)
* [Build JavaScript Actions for Native Mobile](/howto/extensibility/create-native-javascript-action/)
