---
title: "Java Actions"
url: /refguide8/java-actions/
weight: 10
description: "Describes using Java Actions to extend the functionality of your Mendix app."
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/java-actions.pdf).
{{% /alert %}}

## 1 Introduction

With Java actions you can extend the functionality of your application in situations where it would be hard to implement this functionality in microflows. You can call a Java action from a microflow using the [Java action call](/refguide8/java-action-call/).

{{% alert color="info" %}}
Each Java action defined in Studio Pro corresponds to a file *{name of Java action}.java* in the subdirectory *javasource/{module name}/actions* of the project directory. The skeletons of these *.java* files are generated automatically when you deploy for Eclipse (in the **Project** menu). For more information about creating the Java code in these files, see [Java Programming](/refguide8/java-programming/).
{{% /alert %}}

For a deep-dive look into this Java actions, check out this video:

{{< vidyard "rof7aUB6Hom4et6qQU7FuT?" >}}

## 2 General

### 2.1 Name

The name of the Java action is used to refer to it from a call to it in a microflow. It is also the name of the generated *.java* file.

### 2.2 Parameters

A Java action has zero or more parameters. Parameters are the means by which you pass data into the Java action. In the Java code, you can access the values of the parameters.

Each parameter has a name, type, category, and description. 

Use categories to keep the parameters apart in the [Java action call](/refguide8/java-action-call/). If you do not specify a category, the parameter will appear in the **Input** group.

See [Data Types](/refguide8/data-types/) for the possible standard parameter types. When the type is an Object or List, you must also select its Entity type, which can be either a specific entity or a type parameter. The type parameter postpones the selection of the actual entity type until the Java action is used in a microflow. This allows your Java action to accept a (list of) Mendix object(s) of an arbitrary entity type.

The other types supported by Java actions are described below.

#### 2.2.1 Entity Type

The **Entity** parameter type is a placeholder for an entity that will be filled in with the name of the entity when it is called in a microflow. Additionally, the entity type can be used to fill in a type parameter. In the generated Java action template code, this type is represented as a string.

Common use cases include but are not limited to the following:

* Mapping a query result to a certain entity type
* Querying, searching, and filtering entities by type

#### 2.2.2 Microflow Type

The **Microflow** parameter type allows users of Java actions to pass a microflow into a Java action. In the generated Java action template code, this type is represented as a string (as in, the name of the microflow).

#### 2.2.3 Import Mapping Type

The **Import mapping** parameter type allows you to pass an import mapping into a Java action. In the generated Java action template code, this type is represented as a string (as in, the name of the import mapping).

#### 2.2.4 Export Mapping Type

The **Export mapping** parameter type allows you to pass an export mapping into a Java action. In the generated Java action template code, this type is represented as a string (the name of the export mapping).

#### 2.2.5 String Template Type {#string-template-type}

The **String template** parameter type allows you to pass a string template into a Java action. In the generated Java action template code, this type is represented as a `IStringTemplate`.

The template can contain parameters that are written as a number between braces (for example, `{1}`). The first parameter has the number `1`, the second `2`, and so on.

For each parameter in the template, define a microflow expression, the value of which will be inserted at the position of the parameter. 

In the generated code, the `IStringTemplate` type provides methods for the evaluation of the passed string template using default or custom logic. 

#### 2.2.6 Return Type

The return type determines the type of the data that the Java action returns. It corresponds with the return type of the `executeAction()` method in the *.java* file of the Java action. You can use the result of a Java action in the microflow in which you call it. See [Data Types](/refguide8/data-types/) for the possible return types.

As with parameters, the return type can also be an object or a list of some type parameter. The type parameter you choose for the return type must also be used by at least one of the Java action parameters.

## 3 Type Parameters

A type parameter is a placeholder for an entity type which will be filled in with a specific entity when it is called in a microflow. Type parameters can be used when configuring the data type of a parameter, to allow users to pass an object or a list of an arbitrary entity type.

A Java action has zero or more type parameters. Each type parameter should have a unique name.

## 4 Expose as Microflow Action

By selecting the **Expose as microflow action** option, it is possible to expose the Java action as a microflow action. Exposing the Java action will make it appear in the the **Toolbox** window when editing a microflow in the category of your choice. When this action is used in a microflow, it will show the provided caption and icon.

The caption and category of the microflow action are required, but the icon is optional. When no icon is selected, the default Java action icon is used.

The recommended size for the icon is 16x16 pixels.

## 5 Documentation

In the **Documentation** tab of the Java action dialog box, you can document the Java action. The documentation is copied into the `Javadoc` of the class of the corresponding *.java* file.
