---
title: "Build Microflow Actions with Java"
url: /howto9/extensibility/howto-connector-kit/
description: "Describes how to create custom microflow actions using Java."
weight: 80
#To update screenshots of these microflows in Studio Pro, use the SlackRekognition-main-master app, which is saved locally in Other Resources > Documentation Backups (No Update).
---

## Introduction

Mendix provides the tools to enable Java developers to easily add powerful and robust new microflow actions to their Mendix toolbox. These microflow actions can be shared in the Mendix Marketplace, so anyone can benefit from them without having to know Java. This is particularly useful when building connectors to services.

The diagram below illustrates the power of Mendix's integration with Java. It shows a Mendix Slack bot that enables users to determine things and people in pictures taken with a mobile Slack app:

{{< figure src="/attachments/howto9/extensibility/howto-connector-kit/slack-rekogition-bot-architecture.png" alt="Slack Rekognition Bot design" class="no-border" >}}

The Mendix application consists of a small number of microflows that use Mendix microflow actions to offer a conversational user interface using [Slack](https://slack.com/) and different Amazon services: [S3](https://aws.amazon.com/s3/), [Rekognition](https://aws.amazon.com/rekognition/), and [Lex](https://aws.amazon.com/lex/).

This image shows what the microflow toolbox looks like after including all the modules that provide connectors to the services used:

{{< figure src="/attachments/howto9/extensibility/howto-connector-kit/slack-rekogition-bot-toolkit.png" alt="Slack Rekognition bot toolbox" class="no-border" >}}

For the basics of building toolbox actions, see the blog post [Introducing the Mendix Connector Kit](https://www.mendix.com/blog/introducing-mendix-connector-kit/). 

This how-to teaches you how to do the following:

* Use advanced features when creating your own microflow actions
* Create the **Create object list** action
* Create the **Import string** action
* Create the **Join objects in list** action

## Creating Generic Actions Using Type Parameters

Let's start with type parameters. In the **Type parameters** tab in the Java action definition dialog box, you can use a type parameter if you want to ensure that certain parameters of your action share the same entity but you do not know the name of this entity when defining the actions.

For example, suppose you want to create an action that takes two objects of the same entity and returns a list containing both objects. You can use a type parameter to guarantee that both the input parameters for specifying the objects and the resulting list all use the same entity.

To create a generic action using type parameters, follow these steps:

1. Define the type parameter to hold the entity used by all the parameters:

    {{< figure src="/attachments/howto9/extensibility/howto-connector-kit/join_objects_type_par.png" alt="Type parameter tab" class="no-border" >}}

2. Create parameters using the previously defined type parameter *EntityToJoin*:

    {{< figure src="/attachments/howto9/extensibility/howto-connector-kit/join_objects_pars.png" alt="Type parameter use" class="no-border" >}}

3. The action needs the following parameters:
    * **Entity** – this is used to specify the entity of the objects to join
        * The entity selected by the user will be stored in the type parameter *EntityToJoin*

        {{< figure src="/attachments/howto9/extensibility/howto-connector-kit/join_objects_type_par_def.png" alt="Type parameter use definition" class="no-border" >}}

    * **Object1** – the first object to be added to the new list

        * This needs to be an object of the `EntityToJoin` entity
    * **Object2** – the second object to be added to the new list
    * **Return type** – the result of the action will be a list of `EntityToJoin` objects

The Java implementation still uses strings to specify the name of an entity, which means that you can upgrade your existing Java actions to use these new parameter types without having to refactor your existing code.

Finally, here's the actual Java implementation of the action defined:

{{< figure src="/attachments/howto9/extensibility/howto-connector-kit/join_objects_javacode.png" alt="Java implementation join object" class="no-border" >}}

You now have a reusable action in your toolbox that will join two objects into a list as illustrated by this example:

{{< figure src="/attachments/howto9/extensibility/howto-connector-kit/join_objects_use.png" alt="Join objects use" class="no-border" >}}

As you can see, type parameters enable creating typesafe generic actions.

## Executing Microflows

The following example illustrates how you can use microflow parameters. The microflow below creates a list of **Product** objects and calls a microflow for every app object to initialize it:

{{< figure src="/attachments/howto9/extensibility/howto-connector-kit/init-loop.png" alt="Init loop" class="no-border" >}}

Here's an alternative to the microflow above that uses a custom Java action to replace the loop, instantiation, and initialization of the objects with a Java action:

{{< figure src="/attachments/howto9/extensibility/howto-connector-kit/init-list-use.png" alt="Init list loop with action" class="no-border" >}}

The action uses the following parameters:

* **ResultEntity** – the entity used for the default object and the result list
* **DefaultObject** – the default value for the objects to be instantiated
* **InitializationMicroflow** – a microflow that will be called for every new object to initialize it
* **ListSize** – the number of objects to be created in the list

The return type is a list of new initialized objects.

As you can see below, this action uses a new parameter type (**Microflow**) to indicate that the user needs to specify a microflow. When using the action, Studio Pro will show a list of microflows to make this as easy to use as possible.

{{< figure src="/attachments/howto9/extensibility/howto-connector-kit/initialize_list_mf_pars.png" alt="Initialize list using microflow action parameters" class="no-border" >}}

In the Java implementation for this action, you'll see the following details for the parameters:

* **ResultEntity** – a string with the entity name used for the default object and the result list
* **DefaultObject** – an IMendixObject instance containing the default object
* **InitializationMicroflow** – a string containing the name of the initializing microflow
* **ListSize** – a long variable containing the number of objects desired in the list

{{< figure src="/attachments/howto9/extensibility/howto-connector-kit/initilialize_list_java_1.png" alt="Initialize list java implementation 1" class="no-border" >}}

The `executeAction` method is where all the magic happens:

1. It initializes an ArrayList for the result.
2. It has a for-loop to create the desired number of objects.
3. The objects are created using `Core.instantiate()`. The entity name specified in the action is used as the input to specify what entity to instantiate.
4. The system determines if a default object was specified. If so, it copies all the attribute values to the new object.
5. The system executes the initialization microflow using `Core.microflowCall()`.
6. The newly instantiated and initialized object is added to the result list.
7. The list of new objects is returned.

```java
  @Override
  public List<IMendixObject> executeAction() throws Exception {
    // BEGIN USER CODE
    var logger = Core.getLogger("MyLogNode");
    logger.info(String.format("creating list of %d %s objects, initialized by %s",
        this.ListSize, this.ResultEntity, this.InitializationMicroflow));

    // Create a list to return with all the instantiated objects
    var resultList = new ArrayList<IMendixObject>();

    for (int i = 0; i < this.ListSize; i++) {
      // create new object of type resultentity
      var newObject = Core.instantiate(getContext(), this.ResultEntity);

      if (this.DefaultObject != null) {
        // copy values from default object
        for (var entry : DefaultObject.getMembers(getContext()).entrySet()) {
          var member = entry.getValue();

          if (member.isVirtual() ||
              member instanceof MendixObjectReference ||
              member instanceof MendixObjectReferenceSet ||
              member instanceof MendixAutoNumber) {
            continue;
          }

          newObject.setValue(this.getContext(), entry.getKey(), member.getValue(this.getContext()));
        }
      }

      // run the specified initialization microflow
      Core.microflowCall(this.InitializationMicroflow)
          .withParam("objectToInit", newObject)
          .inTransaction(true)
          .execute(getContext());

      // add new object to list
      resultList.add(newObject);
    }

    return resultList;
    // END USER CODE
  }
```

Microflow parameters are especially useful for handling events. For example, the community-supported [MQTT Client](https://marketplace.mendix.com/link/component/3066/Mendix/MQTT-Client) connector (via the [GitHub MQTTClient project](https://github.com/ako/MqttClient)) will execute a microflow when receiving an IoT sensor event so it can be handled using a user-specified microflow.

## Using Import and Export Mappings

Now we will discuss an example of how you can use mappings in your Java actions. In this example, you'll create an action to import a string using an import mapping. This is not particularly useful, seeing there is a default action in your toolbox already that provides this functionality called **Import with mapping**. However, as an example, it illustrates how to use mappings.

This is an image of what we are building: an action to import JSON strings:

{{< figure src="/attachments/howto9/extensibility/howto-connector-kit/example_import_string_use.png" alt="Example import string use" class="no-border" >}}

The action requires the user to provide a string with the JSON to import, select an import mapping, and define the entity of the result. Finally, a name needs to be provided for the result of the import mapping.

The action is defined as follows:

* **InputString** – a string parameter containing the JSON to be imported
* **ImportMapping** – the name of the mapping to be used for importing the JSON
* **ResultEntity** – the type of object that will be the result of the import
* **Return type** – an object of the type specified with `ResultEntity`

{{< figure src="/attachments/howto9/extensibility/howto-connector-kit/import_string_action_pars.png" alt="Import String with mapping Java action parameters" class="no-border" >}}

Implement the action in Java as follows:

1. Create an InputStream from the JSON input so it can be read by the import mapping.
2. Use `Core.integration().importStream()` to import the JSON with the specified mapping.
3. Return the first object imported.

{{< figure src="/attachments/howto9/extensibility/howto-connector-kit/import_string_java.png" alt="Import String Java action" class="no-border" >}}

## Some Development Tips

### Unit Testing

When developing connector modules, you can use the unit test module to test the actions you are implementing.

If you want to publish your module with custom microflow actions to the Mendix Marketplace for easy reuse, it's best to have a module containing only the reusable parts. Add another module to your app with all the test microflows and anything else you need
while developing your application.

In the screenshot below, observe two important points. First, the **ConnectorKitDemo** module only contains the actions you want to publish to the Marketplace. To do this, right-click the module and select **Export module package...**. Second, the **ConnectorKitDemoTests** module contains all the functionality you need while developing the reusable module: a small domain model with some sample data and some test pages. It also contains the unit test microflow **Test_InitProduct**, which will be called by the unit test module.

### Managing Libraries

When you export the module package for publishing in the Marketplace, you only want to include the relevant Java libraries. The easiest way to manage this is to use a build tool to specify and download the relevant dependencies.

The [ConnectorKitDemo](https://github.com/ako/ConnectorKitDemo) project on GitHub contains two examples of how to do this, which are described below.

The first example is [Apache Ivy](https://ant.apache.org/ivy/), which is a Java library specifically created for managing dependencies. Ivy is small enough that you can include it in your Mendix app. You can create two configurations in an *ivy.xml* configuration file: one
to specify all the *.jar* files needed to run the app and execute the tests, and one to specify the libraries that should be included when publishing the module for reuse in the Marketplace. The demo app contains two configurations called **default** and **export** in the [ivy.xml](https://github.com/ako/ConnectorKitDemo/blob/master/ivy.xml) configuration file.

The second example is [Gradle](https://gradle.org/), which is a full-fledged build tool where you can define tasks to build your app. The example in the demo app uses Gradle only to manage the dependencies. Again, it defines [two build configurations](https://github.com/ako/ConnectorKitDemo/blob/master/build.gradle): one requiring all the dependencies, and one requiring the libraries needed for exporting the module (in this case, just a library to call Slack).

Before developing custom Java actions, follow these steps:

1. Run the build tool to download all the dependencies.
2. Run the build tool to delete all the libraries in your *userlibs* folder.
3. Download only the *.jar* files to be included in the published module.
4. Export the module and upload it to the Mendix Marketplace.
