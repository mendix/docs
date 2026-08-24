---
title: "Testing"
url: /appstore/creating-content/best-practices/testing/
weight: 12
---

## Introduction

You can use the [Unit Testing](/appstore/modules/unit-testing/) module to test Mendix by calling microflows for whole pieces of functionality. Use unit tests for smaller, more targeted tests at the method-level of your Java code.

As with any automated testing, it is a great supplement for capturing known, expected behavior. For capturing unknown behavior, Mendix recommends risk-based exploratory testing.

## Testing Microflows

Use the Mendix app where you built the module to test your module. The Unit Testing module can help call microflows and actions to aid in testing. See [Testing Microflows with the Unit Testing Module](/refguide/testing-microflows-with-unit-testing-module/) for more information.

## Java Unit Tests {#unit-testing}

Java unit tests are a good way to automate the testing of your Java code. This is helpful when you extend your Mendix app or connector with Java actions.

### Java Unit Testing Tools

The following tools are part of the testing process of custom Java code in your Mendix app:

* [JUnit](https://junit.org/junit5/) — This allows you to run Java unit tests easily.
* [Mockito](https://site.mockito.org/) — This allows you to mock Java classes. You can fake a class during a test so that it thinks that it deals with a real class, while it is actually just behaving like one.
* [JaCoCo](https://www.jacoco.org/jacoco/trunk/index.html) (Java Code Coverage) — This helps you check how well your code is covered by tests.
* [Gradle](https://gradle.org/) — This pulls everything together to manage Java dependencies, and provides a way to work with JUnit and Mockito.  
   Gradle can handle managing Java dependencies and running [JUnit](https://junit.org) tests. Read about setting up Gradle in the [Extending App Setup for Building Connectors with Java](/appstore/creating-content/best-practices/development/#extend-app-java) section of *Development*. If you have a pipeline, Mendix recommends running your tests as part of it. 

### Using the Java Unit Test Reference

Mendix apps need `Core` classes, and the **Class Core** [Runtime API](/apidocs-mxsdk/apidocs/) allows you to do things that you usually do in a microflow, like committing an object. `CoreProxy` serves as a mockable layer between your Java logic and the **Core** API. 

Our [Java unit test reference](https://Github.com/mendixlabs/javaunittestreference) is available to help you through this process. `MendixUnitTestBase.java` is extendable and reusable for your own purposes. When extended, it enables Mockito on your test classes and mocks `Core` API behavior.  This does the following:

* Checks that your code sends a certain log message to a log node.
* Verifies that your code calls a microflow with correct parameters.
* Makes constants available to your Java code.

{{% alert color="info" %}}
The Java unit test reference has been tested up to and including Studio Pro [9.12](/releasenotes/studio-pro/9.12/).
{{% /alert %}}

### Writing Java Code

When writing Java code, try to use as much Mendix-independent logic as possible. This helps with testability, so you do not have to mock Mendix `Core` to unit test the Java code. 

If you code the bulk of the behavior in generic Java classes that can run without Mendix, development and testing becomes a lot simpler and faster. There is no need to run your Mendix app to test, and you can also rely on Java JUnit tests for testing.

For another example of a Java unit test, see the [Slack Connector test](https://Github.com/ako/SlackConnector/blob/master/javasource/testslackconnector/tests/TestSlackConnector.java).
