---
title: "Build Microflow Actions Using the Mendix Connector Kit"
category: "Extensibility"
description: "Describes creating custom Microflow actions using advanced Connector Kit options."
menu_order: 4
tags: ["java", "connector kit", "microflow action", "parameter type", "aws", "amazon web services"]
output:
  word_document: default
  html_document: default
#To update screenshots of these microflows in the Desktop Modeler, use the SlackRekognition-main-master app project, which is saved locally in Other Resources > Documentation Backups (No Update).
---

## 1 Introduction

In version 6.6, Mendix introduced the [Connector Kit](https://www.mendix.com/blog/introducing-mendix-connector-kit/). The goal of this enhancement was to enable Java developers to easily add powerful and robust new microflow actions to their Mendix toolbox. These microflow actions can be shared in the Mendix App Store, so anyone can benefit from them without having to know Java.

To illustrate the power of the Connector Kit, here's a high-level design diagram for an application Mendix recently built: a Slack bot that enables users to determine things and people in pictures taken with a mobile Slack app:

![Slack Rekognition Bot design](attachments/how-to-connector-kit/slack-rekogition-bot-architecture.png)

A Mendix application consists of a small number of microflows that use Mendix microflow actions to offer a conversational user interface using [Slack](https://slack.com/) and different Amazon services: [S3](https://aws.amazon.com/s3/), [Rekognition](https://aws.amazon.com/rekognition/), and [Lex](https://aws.amazon.com/lex/).

This image shows what the microflow toolbox looks like after including all the modules that provide connectors to the services used:

 ![Slack Rekognition bot toolbox](attachments/how-to-connector-kit/slack-rekogition-bot-toolkit.png)

For the basics of building toolbox actions, see the [Introducing the Mendix Connector Kit](https://www.mendix.com/blog/introducing-mendix-connector-kit/) blog post. 

**This how-to will teach you how to do the following:**

* Use advanced features when creating your own microflow actions
* Create the **Create object list** action
* Create the **Import string** action
* Create the **Join objects in list** action

![Connectorkit demo toolbox](attachments/how-to-connector-kit/toolkit-connector-kit-demo.png)

## 2 Creating Generic Actions Using Type Parameters

Let's start with type parameters. Mendix 6.6 introduced a new **Type parameters** tab in the Java action definition dialog box, as illustrated in the image below. You can use a type parameter if you want to ensure that certain parameters of your action share the same entity but you do not know the name of this entity when defining the actions.

For example, suppose you want to create an action that takes two objects of the same entity and returns a list containing both objects. You can use a type parameter to guarantee that both the input parameters for specifying the objects and the resulting list all use the same entity.

To create a generic action using type parameters, follow these steps:

1. Define the type parameter to hold the entity used by all the parameters:

    ![Type parameter tab](attachments/how-to-connector-kit/join_objects_type_par.png)

2. Create parameters using the previously defined type parameter *EntityToJoin*:

    ![Type parameter use](attachments/how-to-connector-kit/join_objects_pars.png)

3. The action needs the following parameters:
    * **Entity** – this is used to specify the entity of the objects to join
      * The entity selected by the user will be stored in the type parameter *EntityToJoin*

      ![Type parameter use definition](attachments/how-to-connector-kit/join_objects_type_par_def.png)

    * **Object1** – the first object to be added to the new list

      * This needs to be an object of the `EntityToJoin` entity
    * **Object2** – the second object to be added to the new list
    * **Return type** – the result of the action will be a list of `EntityToJoin` objects

The Java implementation still uses strings to specify the name of an entity, which means that you can upgrade your existing Java actions to use these new parameter types without having to refactor your existing code.

Finally, here's the actual Java implementation of the action defined:

![Java implementation join object](attachments/how-to-connector-kit/join_objects_javacode.png)

You now have a reusable action in your toolbox that will join two objects into a list as illustrated by this example:

![Join objects use](attachments/how-to-connector-kit/join_objects_use.png)

As you can see, type parameters enable creating typesafe generic actions.

## 3 Executing Microflows

The following example illustrates how you can use microflow parameters. The microflow below creates a list of **Product** objects and calls a microflow for every project object to initialize it:

![Init loop](attachments/how-to-connector-kit/init-loop.png)

Here's an alternative to the microflow above that uses a custom Java action to replace the loop, instantiation, and initialization of the objects with a Java action:

![Init list loop with action](attachments/how-to-connector-kit/init-list-use.png)

The action uses the following parameters:

* **ResultEntity** – the entity used for the default object and the result list
* **DefaultObject** – the default value for the objects to be instantiated
* **InitializationMicroflow** – a microflow that will be called for every new object to initialize it
* **ListSize** – the number of objects to be created in the list

The return type is a list of new initialized objects.

As you can see below, this action uses a new parameter type (**Microflow**) to indicate that the user needs to specify a microflow. When using the action, the Modeler will show a list of microflows to make this as easy to use as possible.

![Initialize list using microflow action parameters](attachments/how-to-connector-kit/initialize_list_mf_pars.png)

In the Java implementation for this action, you'll see the following details for the parameters:

* **ResultEntity** – a string with the entity name used for the default object and the result list
* **DefaultObject** – an IMendixObject instance containing the default object
* **InitializationMicroflow** – a string containing the name of the initializing microflow
* **ListSize** – a long variable containing the number of objects desired in the list

![Initialize list java implementation 1](attachments/how-to-connector-kit/initilialize_list_java_1.png)

The `executeAction` method is where all the magic happens:

1. It initializes an ArrayList for the result.
2. It has a for-loop to create the desired number of objects.
3. The objects are created using `Core.instantiate()`. The entity name specified in the action is used as the input to specify what entity to instantiate.
4. The system determines if a default object was specified. If so, it copies all the attribute values to the new object.
5. The system executes the initialization microflow using `Core.execute()`.
6. Add the newly instantiated and initialized object to the result list.
7. The list of new objects is returned.

![Initialize list java implementation 2](attachments/how-to-connector-kit/initilialize_list_java_2.png)

Microflow parameters are especially useful for handling events. For example, the [MQTT connector](https://appstore.home.mendix.com/link/app/3066/Mendix/MQTT-Client) ([GitHub MQTT Connector project](https://github.com/ako/MqttClient)) will execute a microflow when receiving an IoT sensor event so it can be handled using a user-specified microflow.

## 4 Using Import & Export Mappings

Now we will discuss an example of how you can use mappings in your Java actions. In this example, you'll create an action to import a string using an import mapping. This is not particulairly useful, seeing there is a default action in your toolbox already that provides this functionality called **Import with mapping**. However, as an example, it illustrates how to use mappings.

This is an image of what we are building: an action to import JSON strings:

![Example import string use](attachments/how-to-connector-kit/example_import_string_use.png)

The action requires the user to provide a string with the JSON to import, select an import mapping, and define the entity of the result. Finally, a name needs to be provided for the result of the import mapping.

The action is defined as follows:

* **InputString** – a string parameter containing the JSON to be imported
* **ImportMapping** – the name of the mapping to be used for importing the JSON
* **ResultEntity** – the type of object that will be the result of the import
* **Return type** – an object of the type specified with `ResultEntity`

 ![Import String with mapping java action parameters](attachments/how-to-connector-kit/import_string_action_pars.png)

Implement the action in Java as follows:

1. Create an InputStream from the the JSON input so it can be read by the import mapping.
2. Use `Core.integration().importStream()` to import the JSON with the specified mapping.
3. Return the first object imported.

![Import String java action](attachments/how-to-connector-kit/import_string_java.png)

## 5 Some Development Tips

### 5.1 Unit Testing

When developing connector modules, you can use the unit test module to test the actions you are implementing.

If you want to publish your module with custom microflow actions to the Mendix App Store for easy reuse, it's best to have a module containing only the reusable parts. Add another module to your project with all the test microflows and anything else you need
while developing your application.

In the screenshot below, observe two important points. First, the **ConnectorKitDemo** module only contains the actions you want to publish to the App Store. To do this, right-click the module and select **Export module package...**. Second, the **ConnectorKitDemoTests** module contains all the functionality you need while developing the reusable module: a small domain model with some sample data and some test pages. It also contains the unit test microflow **Test_InitProduct**, which will be called by the unit test module.

![Mendix Connector kit module project with tests](attachments/how-to-connector-kit/project_test.png)

### 5.2 Managing Libraries

When you export the module package for publishing in the App Store, you only want to include the relevant Java libraries. The easiest way to manage this is to use a build tool to specify and download the relevant dependencies.

The [ConnectorKitDemo](https://github.com/ako/ConnectorKitDemo) project on GitHub contains two examples of how to do this, which are described below.

The first example is [Apache Ivy](http://ant.apache.org/ivy/), which is a Java library specifically created for managing dependencies. Ivy is small enough that you can include it in your Mendix project. You can create two configurations in an *ivy.xml* configuration file: one
to specify all the jars needed to run the project and execute the tests, and one to specify the libraries that should be included when publishing the module for reuse in the App Store. The demo project contains two configurations called **default** and **export** in the [ivy.xml](https://github.com/ako/ConnectorKitDemo/blob/master/ivy.xml) configuration file.

The second example is [Gradle](https://gradle.org/), which is a full-fledged build tool where you can define tasks to build your project. The example in the demo project uses Gradle only to manage the dependencies. Again, it defines [two build configurations](https://github.com/ako/ConnectorKitDemo/blob/master/build.gradle): one requiring all the dependencies, and one requiring the libraries needed for exporting the module (in this case, just a library to call Slack).

Before developing custom Java actions, follow these steps:

1. Run the build tool to download all the dependencies.
2. Run the build tool to delete all the libraries in your *userlibs* folder.
3. Download only the jars to be included in the published module.
4. Export the module and upload it to the Mendix App Store.
