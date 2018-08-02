---
title: "Java Actions"
category: "Desktop Modeler"
description: "Describes using Java Actions to extend the functionality of your Mendix app."
---

With Java actions you can extend the functionality of your application in situations where it would be hard to implement this functionality in microflows. You can call a Java action from a microflow using the [Java Action Call](java-action-call).

{{% alert type="info" %}}

Each Java action, defined in the modeler, corresponds with a file &lt;name of Java action&gt;.java in subdirectory javasource/&lt;module name&gt;/actions of the project directory.

The skeletons of these .java files are generated automatically when you deploy for Eclipse (in the Project menu). For more information about creating the Java code in these files see [Java Programming](java-programming).

{{% /alert %}}

## General

### Name

The name of the Java action is used to refer to it from a call to it in a microflow. It is also the name of the generated .java file.

### Parameters

A Java action has zero or more parameters. Parameters are the means by which you pass data into the Java action. In the Java code you can access the values of the parameters.

Each parameter has a name, a type, a category, and a description. 

Use categories to keep the parameters apart in the [Java Action Call](java-action-call). If you don't specify a category the parameter will appear in the _Input_ group.

See [Data Types](data-types) for the possible standard parameter types. When the type is Object or List, you must also select its entity type, which can be either a specific entity or a type parameter. The type parameter postpones the selection of the actual entity type until the Java action is used in a microflow. This allows your Java action to accept a (list of) Mendix object(s) of arbitrary entity type.

The other types supported by Java actions are described below.

#### Entity Type

The 'Entity' parameter type is a placeholder for an entity which will be filled in with the name of the entity when it is called in a microflow. Additionally, the 'Entity' type can be used to fill in a Type Parameter. In the generated Java action template code, this type is represented as String.

Common use cases include, but are not limited to:

* Mapping query result to a certain entity type
* Querying/searching/filtering entities by type

#### Microflow Type

The 'Microflow' parameter type allows users of Java Actions to pass a microflow into a Java Action. In the generated Java Action template code, this type is represented as a string (the name of the microflow).

#### Import Mapping Type

The 'Import mapping' parameter type allows users of Java Actions to pass an import mapping into a Java Action. In the generated Java Action template code, this type is represented as a string (the name of the import mapping).

{{% alert type="info" %}}

The 'Import mapping' parameter type was introduced in version 7.2.0.

{{% /alert %}}

#### Export Mapping Type

The 'Export mapping' parameter type allows users of Java Actions to pass an export mapping into a Java Action. In the generated Java Action template code, this type is represented as a string (the name of the export mapping).

{{% alert type="info" %}}

The 'Export mapping' parameter type was introduced in version 7.2.0.

{{% /alert %}}

#### Return Type

The return type determines the type of the data that the Java action returns. It corresponds with the return type of the executeAction() method in the .java file of the Java action. You can use the result of a Java action in the microflow in which you call it. See [Data Types](data-types) for the possible return types.

As with parameters, the return type can also be an object or a list of some type parameter. The type parameter you choose for the return type must also be used by at least one of the Java action parameters.

## Type Parameters

A type parameter is a placeholder for an entity type which will be filled in with a specific entity when it is called in a microflow. Type parameters can be used when configuring the data type of a parameter, to allow users to pass an Object or a List of an arbitrary entity type.

A Java action has zero or more type parameters. Each type parameter should have a unique name.

## Expose as Microflow action

By selecting the 'Expose as microflow action', it is possible to expose the Java action as a microflow action. Exposing the Java action will make it appear in the the Toolbox window when editing a microflow, in the category of your choice. When this action is used in a microflow, it will show the provided caption and icon.

The caption and category of the microflow action are required, but the icon is optional. When no icon is selected, the default Java action icon is used.

The recommended size for the icon is 16x16.

## Documentation

In the documentation tab of the Java action dialog you can document the Java action. The documentation is copied into the Javadoc of the class of the corresponding .java file.
