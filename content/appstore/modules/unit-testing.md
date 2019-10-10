---
title: "Unit Testing"
category: "Modules"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

Use the [Unit Testing](https://appstore.home.mendix.com/link/app/390/) module to  run Mendix and JUnit unit tests inside your app project.

### 1.1 Dependencies

* [ObjectHandling](https://appstore.home.mendix.com/link/app/37114/) module
* *junit-4.11.jar*
* *org.apache.commons.io-2.3.0.jar*
* *org.apache.commons.lang3.jar*
* *org.apache.httpcomponents.httpclient_4.4.1.jar*
* *org.apache.httpcomponents.httpcore_4.4.1.jar*

## 2 Installation

1. Import the Unit Testing module into your app project.
2. Download the latest Object Handling module into your app project.
3. Map the module role **TestRunner** to the applicable user roles in your app.
4. Add the **UnitTestOverview** microflow to your navigation structure, or include the **UnitTestOverview** snippet on a custom page.
5. The following steps are optional:
	* Optional for including JUnit tests – set the **UnitTesting.FindJUnitTests** constant to true (take the the app project settings regarding cloud security into consideration)
	* Optional for running remote unit tests via API:
		* Add the **Startup** flow to your app model's startup sequence
		* Set the **UnitTesting.RemoteApiEnabled** constant to true and provide a password for **UnitTesting.RemoteApiPassword**
		* When hosting in a cloud node or on-premises. open a request handler on the **unittests/** path

## 3 Usage

To run a unit test, first navigate to the **Test Suite Overview**. On the left side of the page, there is an overview of the available test suites. A test suite reflects all the unit tests that are available in a module of your project. When selecting a testsuite, all unit tests inside the test suite are displayed, including their last result if applicable.

Use the Refresh button to have all available unit tests in the project listed.

Use the Run all button to run all unit tests or all unit tests in the selected test suite (module). When unit tests are running, the progress will be tracked.

You can also run a test individually. If a JUnit test class is selected, all tests in the test class are run another time.

When a unit test has been ran, additional details about the unit test result will appear. E.g. success, failure and exception stacktraces.

As an example, try running all unit tests in the Unit Testing module. Those are available by default.

## 4 Creating Unit Tests

### 4.1 Creating a microflow unit tests

To create a new microflow test in a module, just add a microflow with a name that starts with (case insensitive) "Test_" or "UT_". A test microflow should have no input arguments and either no result type, a boolean result or a string result. For string results, a non empty string is interpreted as error message. A microflow without return type is considered to be successful as long as no exceptions where thrown.

Furthermore it is possible to create a Setup and TearDown microflow per module. Those microflows are invoked once before and after eacht test run (regardless whether the test run consists on one or multiple unit tests).

The Unit Testing module publishes a reportStep microflow that can be used inside your test microflow to track progress inside a test. The last step that was successfully reached in a unit test is reported back in the test result. This makes it easier to inspect where things go wrong. (Albeit using the microflow debugger is usually more insightful)

### 4.2 Creating a Java unit tests (with JUNit)

The Java unit test runner is driven by junit.org and requires general understanding of junit (version 4). A Junit test method is run if it exists somewhere in the module namespace (that is, it is stored a java class that lives somewhere in the folder javasource/yourmodulename). A java function is recognized as test if it is public, non static, parameterless and annotated with the org.junit.Test annotation. Multiple tests can exists in a single class, but junit does not guarantuee the execution order of the tests.

See the files src/javasource/unittesting/UnittestingUnitTest1.java and src/javasource/unittesting/UnittestingUnitTest2.java for some example JUnit unit tests.

The AbstractUnitTest class can be used to base unit test classes on. This class provides some time measurement functions (to ignore setup / teardown in the time measure) and the reportStep function. (Which is otherwise accessible through TestManager.instance().reportStep).

## 5 Running unit tests through the remote api

Running unit tests through the remote json REST api is pretty trivial. A new test run can be kicked off (if none is running yet) by using the endpoint unittests/start. Example:

POST http://localhost:8080/unittests/start
{
	"password" : "1"
}

This request will be responded to with a 204 NO CONTENT response if the test run was started successfully. From that point on, one can pull for the status of the test run by invoking unittests/status. Example:

POST http://localhost:8080/unittests/status

{
	"password" : "1"
}

Example response:

{
    "failures": 1,
    "tests": 10,
    "runtime": -1,
    "failed_tests": [{
        "error": "This exception is doopery nice",
        "name": "MyFirstModule.Test_ThisTestIsSupposedToFailToCheckExceptionRendering",
        "step": "Starting microflow test 'MyFirstModule.Test_ThisTestIsSupposedToFailToCheckExceptionRendering'"
    }],
    "completed": false
}

Please note that the completed flag will be false as long as the test run isn't finished. The runtime flag will return the total runtime of the suite in milliseconds after the test run has finished.