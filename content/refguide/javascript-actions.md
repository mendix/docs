---
title: "JavaScript Actions"
category: "App Modeling"
description: "This reference guide details the ways JavaScript Actions can extend the functionality of your Mendix app."
tags: ["javascript", "javascript action", "parameter", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

With JavaScript actions, you can extend your application's functionality in ways nanoflows alone cannot. To use a JavaScript action, call it from a nanoflow using the [JavaScript Action Call](javascript-action-call).

{{% alert type="info" %}}

Each JavaScript action defined in Mendix Studio Pro corresponds to a file *{name of JavaScript action}.js* in the subdirectory **javascriptsource{module name}/actions/** in your project directory.

The skeletons of these *.js* files are generated automatically when you save the action, and  the JavaScript actions can immediately be edited in the embedded code editor.

{{% /alert %}}

## 2 Settings

The settings for JavaScript actions, and their implications, are detailed below.

### 2.1 Name

This setting handles a JavaScript action's name, which a nanoflow refers to when performing a call to it. This name is also the name of the generated *.js* file.

### 2.2 Parameters

A JavaScript action has zero or more parameters. You use parameters to pass data into a JavaScript action. In a JavaScript action's code, you can access the parameters' values. Each parameter has a name, type, category, and description. 

Use categories to keep parameters apart in a [JavaScript Action Call](javascript-action-call). If you do not specify a category, the parameter will appear in the **Input** group.

The parameter types supported by JavaScript actions are described below.

#### 2.2.1 Object

The object parameter type allows you to pass a Mendix object to a JavaScript action. You must also select its entity type, which can be either a specific entity or a type parameter. In the generated JavaScript action template code, this type is represented as an MxObject.

#### 2.2.2 List

The list parameter type allows you to pass a list of Mendix objects to a JavaScript action. You must also select its entity type, which can be either a specific entity or a type parameter. In the generated JavaScript action template code, this type is represented as an array of MxObjects.

#### 2.2.1 Entity Type

The entity parameter type is a placeholder. It stands in for an entity that will be replaced with a new entity's name when it is called in a nanoflow. Additionally, the entity type can be used to fill in a type parameter. In the generated JavaScript action template code, this type is represented as a string.

#### 2.2.2 Boolean Type 

The Boolean parameter type allows you to pass a Boolean value to a JavaScript action. 

#### 2.2.3 Date and Time Type

The date and time parameter type allows you to pass a date and time value to a JavaScript action. In the generated JavaScript action code, this type will be represented as a JavaScript `Date`.

#### 2.2.4 Decimal Type

The decimal parameter type allows you to pass a decimal value to a JavaScript action. In the generated JavaScript action code, this type will be represented as a [Big](https://www.npmjs.com/package/big-js) object.

#### 2.2.5 Enumeration Type

The enumeration parameter type allows you to pass a enumeration value to a JavaScript action. In the generated JavaScript action code, this type will be represented as a string.

#### 2.2.6 Integer/Long Type

The integer/long parameter type allows you to pass a decimal value to a JavaScript action. In the generated JavaScript action code, this type will be represented as a [Big](https://www.npmjs.com/package/big-js) object.

#### 2.2.7 String Type

The string parameter type allows you to pass a string value to a JavaScript action.

#### 2.2.8 Return Type

The return parameter type determines the type of data a JavaScript action returns. Because many APIs are asynchronous, you can also return a `Promise` object which resolves to this type. The return value of the JavaScript action can be stored as a variable. This variable can be used in the nanoflow where it is called. 

In any type you can use for parameters, you can also use a return type.

### 3 Type Parameters

A type parameter is a placeholder for an entity type which will be filled with a specific entity when called in a nanoflow. Type parameters can be used when configuring the data type of a parameter, which allows users to pass an object or list of an arbitrary entity type.

A JavaScript action has zero or more type parameters. Each type parameter should have a unique name.

### 4 Expose as Nanoflow Action

By selecting **Expose as nanoflow action** in a JavaScript action's **Settings** tab, it is possible to expose a JavaScript action as a nanoflow action. Exposing the JavaScript action will make it appear in the **Toolbox** window when editing a nanoflow in the category of your choice. When this action is used in a nanoflow, it will show the provided caption and icon.

A caption and category are required when exposing a JavaScript action, but an icon is optional. When no icon is selected, the default JavaScript action icon is used. The recommended size for an icon is 16x16 pixels.

## 5 Documentation

In the **Documentation** tab of the JavaScript action's **Settings** tab, you can document a JavaScript action. Your documentation is copied into the JavaScript action as comment on the function in the corresponding *.js* file.

## 6 Code

In the **Code** tab of the JavaScript action's **Settings** tab, you can edit the JavaScript action code without leaving Studio Pro. The editor is based on the [Monaco Editor](https://microsoft.github.io/monaco-editor/index.html). It offers features such as syntax highlighting and code completion.

## Read More

* [JavaScript Action Call](javascript-action-call)
* [Nanoflows](nanoflows)
* [Java Action Call](java-action-call)
* [Microflow Call](microflow-call)