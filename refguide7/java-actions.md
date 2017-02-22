---
title: "Java Actions"
space: "Mendix 7 Reference Guide"
category: "Modeler"
---


With Java actions you can extend the functionality of your application in situations where it would be hard to implement this functionality in microflows. You can call a Java action from a microflow using the [Java Action Call](java-action-call).

<div class="alert alert-info">{% markdown %}

Each Java action, defined in the modeler, corresponds with a file <name of Java action>.java in subdirectory javasource/<module name>/actions of the project directory.

The skeletons of these .java files are generated automatically when you deploy for Eclipse (in the Project menu). For more information about creating the Java code in these files see [Java Programming](java-programming).

{% endmarkdown %}</div>

## General

### Name

The name of the Java action is used to refer to it from a call to it in a microflow. It is also the name of the generated .java file.

### Parameters

A Java action has zero or more parameters. Parameters are the means by which you pass data into the Java action. In the Java code you can access the values of the parameters.

Each parameter has a name and a type. See [Data Types](data-types) for the possible standard parameter types. When the type is Object or List, you must also select its entity type, which can be either a specific entity or a type parameter. The type parameter postpones the selection of the actual entity type until the Java action is used in a microflow. This allows your Java action to accept a (list of) Mendix object(s) of arbitrary entity type.

The other types supported by Java actions are described below.

#### Entity Type

The 'Entity' parameter type is a placeholder for an entity which will be filled in with the name of the entity when it is called in a microflow. Additionally, the 'Entity' type can be used to fill in a Type Parameter. In the generated Java action template code, this type is represented as String.

Common use cases include, but are not limited to:

* Mapping query result to a certain entity type
* Querying/searching/filtering entities by type

#### Microflow Type

The 'Microflow' parameter type allows users of Java actions to pass a microflow into a Java action. In the generated Java action template code, this type is represented as String.

#### Return type

The return type determines the type of the data that the Java action returns. It corresponds with the return type of the executeAction() method in the .java file of the Java action. You can use the result of a Java action in the microflow in which you call it. See [Data Types](data-types) for the possible return types.

As with parameters, the return type can also be an object or a list of some type parameter. The type parameter you choose for the return type must also be used by at least one of the Java action parameters.

## Type parameters

A type parameter is a placeholder for an entity type which will be filled in with a specific entity when it is called in a microflow. Type parameters can be used when configuring the data type of a parameter, to allow users to pass an Object or a List of an arbitrary entity type.

A Java action has zero or more type parameters. Each type parameter should have a unique name.

## Expose as microflow action

By selecting the 'Expose as microflow action', it is possible to expose the Java action as a microflow action. Exposing the Java action will make it appear in the the Toolbox window when editing a microflow, in the category of your choice. When this action is used in a microflow, it will show the provided caption and icon.

The caption and category of the microflow action are required, but the icon is optional. When no icon is selected, the default Java action icon is used.

## Documentation

In the documentation tab of the Java action dialog you can document the Java action. The documentation is copied into the Javadoc of the class of the corresponding .java file.
