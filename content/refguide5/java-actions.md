---
title: "Java Actions"
category: "Modeler"
---


With Java actions you can extend the functionality of your application in situations where it would be hard to implement this functionality in microflows. You can call a Java action from a microflow using the [Java Action Call](java-action-call).

{{% alert type="info" %}}

Each Java action, defined in the modeler, corresponds with a file <name of Java action>.java in subdirectory javasource/<module name>/actions of the project directory.

The skeletons of these .java files are generated automatically when you deploy for Eclipse (in the Project menu). For more information about creating the Java code in these files see [Java Programming](java-programming).

{{% /alert %}}

## Properties

### Name

The name of the Java action is used to refer to it from a call to it in a microflow. It is also the name of the generated .java file.

### Documentation

In the documentation of a Java action you can document the Java action. The documentation is copied into the Javadoc of the class of the corresponding .java file.

### Parameters

A Java action has zero or more parameters. Each parameter has a name and a type. One of the possible types is 'Any object' which allows you to write a Java action that can accept an arbitrary Mendix object.

Parameters are the means by which you pass data into the Java action. In the Java code you can access the values of the parameters.

### Return type

The return type determines the type of the data that the Java action returns. It corresponds with the return type of the executeAction() method in the .java file of the Java action. You can use the result of a Java action in the rest of the microflow in which you call it.
