---
title: "Declaring Native Dependencies"
parent: "pluggable-parent-9"
menu_order: 10
description: A guide for understanding native dependencies for pluggable widgets and JavaScript actions.
tags: ["Widget", "Pluggable",  "JavaScript", "Native"]
---

## 1 Introduction

While developing pluggable widgets and JavaScript actions it is essential to reuse already existing modules and libraries from JavaScript ecosystem. Mendix empowers widget developers with [Pluggable Widgets Tools](https://github.com/mendix/widgets-resources/tree/master/packages/tools/pluggable-widgets-tools) for creating, developing and shipping pluggable widgets. It does the power lifting of linking and embedding 3rd party dependencies into code of pluggable widgets. The tooling also takes care of providing infomation about Android and iOS specific setup parts of some libraries to Mendix Native apps. Read this page if you want more details on how pluggable widgets communicate native dependencies to Mendix Native ecosystem.

While this tooling exists for pluggable widgets some manual work has to be done for JavaScript actions in order to use libraries targeting `react-native` where Andriod and iOS specific setup is required. Read this page if you want to use such libraries in your JavaScript actions.


## 2 Declaration File

Declaration file is a JSON file which contains information about specific setup required to a pluggable widget or a JavaScript action.

### 2.1 Naming convention

For pluggable widgets this file should be named after [Widget Definition XML File](pluggable-widgets#widget-definition), but with `.json` extension.

For JavaScript actions this file should be named after the name of a `.js` file of the action, but with `.json` extension.

### 2.2 File Format

The file is a JSON file of one object of the following format:

```json
{
    "nativeDependencies": {
        "dependency-name": "1.2.3"
    }
}
```

Only `nativeDependencies` key is allowed in that file. This field is used for declaring native dependencies of a pluggable widget or a JavaScript action this file belongs to.


## 3 Native Dependencies

In order to declare native dependencies needed for a pluggable widget or a JavaScript action entries are added to JSON object under `nativeDependencies` key. The following example specifies two dependencies with their corresponding versions:

```json
{
    "nativeDependencies": {
        "@react-native-community/netinfo": "5.9.10",
        "react-native-image-picker": "3.1.4"
    }
}
```

Where the key of the entry is a name of the dependency and the value is a version of a dependency needed. Note that semver is not supported and an exact version must be specified.


## 4 Conflict Checking

It is not possible to include different version of the same native dependency in one project. For that reason when different components in a project use same native dependency the conflict check takes place in Studio Pro. It makes sure there is no mismatch between versions required by different components. In case of version conflict those are reported to the user.


## 5 Read More

* [Pluggable Widget API information](pluggable-parent-9)
* [Build JavaScript Actions for Native Mobile](/howto/extensibility/create-native-javascript-action)