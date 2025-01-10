---
title: "Unit Testing"
url: /appstore/modules/unit-testing/
description: "Describes the configuration and usage of the Unit Testing module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Use the [Unit Testing](https://marketplace.mendix.com/link/component/390/) module to run Mendix and JUnit unit tests inside your app.

### Dependencies

* *junit-4.13.1.jar*
* *commons-io-2.11.0.jar*
* *commons-lang3-3.12.0.jar*
* *httpclient5-5.0.3.jar*
* *httpcore5-5.0.3.jar*
* *hamcrest-2.2.jar*

{{% alert color="info" %}}
For module version 9.1.0, the [Community Commons](/appstore/modules/community-commons-function-library/) module is required as a dependency. This dependency has been removed in module version 9.2.0.
{{% /alert %}}

{{% alert color="info" %}}
For module versions below 9.1.0, the [Object Handling](/appstore/modules/object-handling/) module is required as a dependency.
{{% /alert %}}

## Installation

1. Import the Unit Testing module into your app.

    For more information, see [How to Use Marketplace Content](/appstore/use-content/).

1. Map the module role **TestRunner** to the applicable user roles in your app.
1. Add the **UnitTestOverview** microflow to your navigation structure, or include the **UnitTestOverview** snippet on a custom page.
1. The following steps are optional:
    * For including JUnit tests – set the **UnitTesting.FindJUnitTests** constant to true (take the app settings regarding cloud security into consideration)
    * For running remote unit tests via API:
        * Add the **Startup** flow to your app model's startup sequence
        * Set the **UnitTesting.RemoteApiEnabled** constant to true and provide a password for **UnitTesting.RemoteApiPassword**
        * When hosting in a cloud node or on-premises, open a request handler on the **unittests/** path

## Usage

To run a unit test, first navigate to the test suite overview on the left side of the page. A test suite reflects all the unit tests that are available in a module of your app. When you select a test suite, all the unit tests inside the suite are displayed, including their last result, if applicable.

Click **Run all module tests** to run all the unit tests in all the suites or all the unit tests in the selected suite. When the unit tests are running, the progress will be tracked.

You can also run a test individually by clicking **Run test**. If a JUnit test class is selected, all the tests in the test class are run another time.

When a unit test has been run, additional details about the test result will appear (for example, success, failure, and exception stack traces).

## Creating Unit Tests

### Creating Microflow Unit Tests

To create a new microflow test in a module, just add a microflow with a name that starts with **TEST_** or **UT_** (case-insensitive). A test microflow should have no input arguments and either no result type, a Boolean result type, or a string result type. For string results, a non-empty string is interpreted as an error message. A microflow without a return type is considered to be successful as long as no exceptions are thrown.

In addition, it is possible to create a **Setup** and **TearDown** microflow per module. Those microflows are invoked once before and after each test run (regardless of whether the test run consists of one or multiple unit tests).

The Unit Testing module publishes a **reportStep** microflow that can be used inside your test microflow to track the progress inside a test. The last step successfully reached in a unit test is reported back in the test result. This makes it easier to inspect where things go wrong (although using the [microflow/nanoflow debugger](/refguide/debug-microflows-and-nanoflows/) is usually more insightful).

### Creating a Java Unit Tests (with JUNit)

The Java unit test runner is driven by [JUnit](https://junit.org/junit5/) and requires a general understanding of JUnit version 4. A JUnit test method is run if it exists somewhere in the module name space (that is, it is stored as a Java class that lives somewhere in the *javasource/yourmodulename* folder). A Java function is recognized as a test if it is public, non-static, parameter-less, and annotated with the `org.junit.Test` annotation. Multiple tests can exists in a single class, but JUnit does not guarantee the execution order of the tests.

For some example JUnit unit tests, see the *src/javasource/unittesting/UnittestingUnitTest1.java* and *src/javasource/unittesting/UnittestingUnitTest2.java* files.

You can base unit test classes on the **AbstractUnitTest** class. This class provides some time measurement functions (for example, to ignore `setup` and `teardown` in the time measure) and the `reportStep` function (which is otherwise accessible through `TestManager.instance().reportStep`).

## Running Unit Tests Through the Remote API

A new test run through the remote JSON REST API can be started by using the endpoint `unittests/start`. Here is an example:

```json
POST http://localhost:8080/unittests/start
{
	"password" : "1"
}
```

This request will be responded to with a `204 NO CONTENT` response if the test run was started successfully. From that point on, you can pull for the status of the test run by invoking `unittests/status`. Here is an example:

```json
POST http://localhost:8080/unittests/status
{
	"password" : "1"
}
```

This is an example response:

```json
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
```

{{% alert color="info" %}}
The completed flag will be `false` as long as the test run is not finished. The `runtime` flag will return the total runtime of the suite in milliseconds after the test run has finished.
{{% /alert %}}

## Read More

* [How to Test Microflows Using the UnitTesting Module](/refguide/testing-microflows-with-unit-testing-module/)
