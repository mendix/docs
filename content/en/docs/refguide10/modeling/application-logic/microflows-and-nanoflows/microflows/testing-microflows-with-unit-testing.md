---
title: "Testing Microflows with the Unit Testing Module"
linktitle: "Testing Microflows with Unit Test Module"
url: /refguide10/testing-microflows-with-unit-testing-module/
weight: 3
---

## Introduction

The [Unit Testing](/appstore/modules/unit-testing/) module provides the capabilities to verify if your [microflow](/refguide10/microflows/) logic and your custom Java code works as expected. It provides a user-friendly interface to manage and run unit tests that are created by using microflows, as well as unit tests that are by created using JUnit.

This how-to teaches you how to do the following:

* Set up the Unit Testing module
* Unit test a microflow

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/)
* Review the Marketplace components used in this how-to:

    | Component | Version Used in This How-to |
    | --- | --- |
    | [Unit Testing](/appstore/modules/unit-testing/) | 9.6.0 |

    {{% alert color="info" %}}All the images, names, and steps in this how-to are based on the Marketplace component versions listed above. When using later versions of this content, images or names on your screen may be different than shown in this how-to.{{% /alert %}}

## Setting up the Unit Testing Module

To set up the unit testing module and run the example tests, follow these steps:

1. Create a [new app](/refguide10/new-app/).
2. Download and install the [Unit Testing](https://marketplace.mendix.com/link/component/390) module. 

    For more information, see [How to Use Marketplace Content](/appstore/use-content/).

3. In the App Explorer, expand the **App {App name}** node, and then click **Settings**.
4. On the **Runtime** tab of the **App settings** dialog box, select the **After startup** microflow.

    {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/testing/select-after-startup-microflow.png" alt="Selecting the After startup microflow" max-width=80% >}}

5. Click **Marketplace modules** > **UnitTesting** > **_USE ME** > **Microflows** > **Startup**.
6. Click **Select** and then **OK**.
7. In the App Explorer, under the **App {App name}** node, click **Navigation**.
8. In the **Menu** section, click **New item**.
9. In the **Caption** field, enter *UnitTestOverview*.
10. In the **On click** field, select **Call a microflow**, and then select the **UnitTestOverview** microflow.

    {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/testing/select-UnitTestOverview-microflow.png" alt="Selecting the UnitTestOverview microflow" max-width=60% >}}

11. Click **Select**.
12. Run the app locally.
13. Go to `http://localhost:8080/index.html`.
14. In the navigation pane, click **UnitTestOverview**.

    The app shows the **UnitTesting** page, as in the following image:

    {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/testing/unit-testing-overview.png" alt="A view of the UnitTesting page and default tests" max-width=100% >}}

    You can use this page to execute unit tests, or to reset the test status back to not executed. Use the left-side navigation pane to select a module that contains unit tests. In this scenario, **UnitTesting** is the only module that contains unit tests.

15. Ensure that the **Rollback microflow tests after execution** checkbox is selected.

    {{% alert color="warning" %}}If the checkbox is cleared, all changes made by the microflows that you test are saved to the database. This can result in populating the database with unwanted test data. As a best practice, do not clear the checkbox unless you need to for your specific use case.{{% /alert %}}

16. Validate that the Unit Testing module is correctly set up by running the **UnitTesting.Test_ValidUnitTest** test. 

    The color of the test case changes to red if the test fails, and to green if it passes.

    {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/testing/example-passed-test.png" alt="An example of a passed test case" max-width=60% >}}

17. To view detailed test results, click **Details** in the **UnitTesting.Test_ValidUnitTest** row.

## Unit Testing a Microflow

In this section, you will learn how to create and run a microflow unit test.

### Creating a Sample Microflow for Testing {#sample-microflow}

For the purpose of this how-to, create a sample microflow that you can then test with unit testing. In a real-life scenario, the steps below may be different, depending on the microflow that you want to create.

To create a sample microflow for testing, follow these steps:

1. Create a new [enumeration](/refguide10/configuring-a-domain-model/#add-enumeration) with the following properties:
    * **Name** – *Level*
    * **Enumeration values** **Caption** and **Name** – *Junior*, *Medior*, and *Senior*.

    {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/testing/create-level-enumeration.png" alt="Enumeration with three values" max-width=70% >}}

2. Open the domain model of **MyFirstModule**.
3. Create a new [entity](/refguide10/configuring-a-domain-model/#create-entity) with the following properties:
    * **Name** – *Employee*
    * **Attributes** – *Name* (of the **String** type) and *Level* ( of the  **Enumeration** > **Level** type).

    {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/testing/employee-entity.png" alt="A view of the Employee entity used by the sample microflow" max-width=80% >}}

4. Create a microflow called **Promote** that changes the **Level** attribute of the **Employee** entity based on the enumeration value:
    * For the **Change Employee's level to Medior** activity, set the **Level** value to *MyFirstModule.Level.Medior*
    * For the **Change Employee's level to Senior** activity, set the **Level** value to *MyFirstModule.Level.Senior*

    {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/testing/promote-microflow.png" alt="A view of the sample Promote microflow" max-width=80% >}}

### Creating a Unit Test

This section describes how to create a microflow-based unit test for the sample microflow described in the [Creating a Sample Microflow for Testing](#sample-microflow) section above. In a real-life scenario, the steps below may be different, depending on the microflow that you want to test. For guidelines on creating unit test microflows, see the [Creating Unit Tests for Microflows](/appstore/modules/unit-testing/#creating-microflow-unit-tests) section of *Unit Testing*.

{{% alert color="info" %}}As a best practice, do not test every microflow in your application. Instead, test your most essential microflows.{{% /alert %}}

To create a sample test microflow, follow these steps:

1. In the left-side navigation pane, right-click on **MyFirstModule**, and then click **Add folder**. 
2. In the **Name** field, enter *UnitTests*.
3. Right-click the **UnitTests** folder, and then click **Add microflow**.
4. In the **Name** field, enter *Test_PromoteEmployeeToMedior*.
5. In the **Test_PromoteEmployeeToMedior** microflow, add a new **Create object** activity for the **Employee** entity. 
6. In the **Commit** section of the activity, select **Yes**.
7. In the **Member** section of the activity, add a new member with the following properties:
    * **Name** – *'John'*
    * **Member type** – **String (200)**
8. In the **Member** section of the activity, add another new member with the following properties:
    * **Level** – *MyFirstModule.Level.Junior*
    * **Member type** – **Enumeration 'Level'**
9. In the **Test_PromoteEmployeeToMedior** microflow, call the **Promote** microflow by adding a **Microflow Call** activity with the following properties:
    * **Microflow** – **MyFirstModule.Promote**
    * **Parameter** – **Employee**
    * **Argument** –*$NewEmployee*

    {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/testing/call-promote-microflow.png" alt="A microflow call activity with Employee as the parameter" max-width=70% >}}

10. To test if the employee is promoted to the right level, add an **Assert using expression** activity with the following properties:
    * **Name** – *‘Promoted to Medior?’*
    * **Expression** – *$NewEmployee/Level = MyFirstModule.Level.Medior*
    * **FailureMessage** – *'Expected employee level to be Medior. Actual value: ' + getCaption($NewEmployee/Level)*
    * **StopOnFailure** - *False*

    {{% alert color="warning" %}}The **StopOnFailure** option determines if the test should stop or continue in case the assertion fails. This gives you the option to still verify other assertions.<br /><br />A failed assertion will always result in a failed test.{{% /alert %}}

11. Right-click the **Assert using expression** activity that you created. 
12. Select **Edit caption**, and then enter *Promoted to Medior?* for the new caption.
13. To provide more information about test results for failed tests, add a **Report step** activity by doing the following steps:
    1. Add a new **Report step** activity between **Create Employee** and **Promote**
    2. Set the argument of the **Message** parameter to string ‘Employee created’.
    3. Right-click the activity, select **Edit caption**, and then enter Employee created for the new caption.
    4. Add a new **Report step** activity between **Promote** and **Promoted to Medior?**.
    5. Set the argument of the **Message** parameter to string ‘Employee promoted’.
    6. Right-click the activity, select **Edit caption**, and then enter ‘Employee promoted’ for the new caption.
14. Connect the activities, as shown in the following figure:

    {{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/microflows/testing/promote-to-medior.png" alt="A view of the sample unit test microflow" max-width=100% >}}

15. In the left-side navigation pane, in the **UnitTests** folder, duplicate the **Test_PromoteEmployeeToMedior** twice, and then rename the new microflows in the following way:
    * *Test_PromoteEmployeeToSenior*
    * *Test_EmployeeStillSenior*
16. In each of the new microflows, make edits to reflect the employee level for that microflow. In the **Test_PromoteEmployeeToSenior** microflow:
    * Set the value of the **Level** member to *MyFirstModule.Level.Medior* for the **Create Employee** activity.
    * Set the following values for the **Promoted to Medior?** activity: 
        * **Name** – *Promoted to Senior?*
        * **Expression** – *$NewEmployee/Level = MyFirstModule.Level.Senior*
        * **FailureMessage** – *'Expected employee level to be Senior. Actual value: ' + getCaption($NewEmployee/Level)*
17. In the **Test_EmployeeStillSenior** microflow:
    * Set the value of the **Level** member to *MyFirstModule.Level.Senior* for the **Create Employee** activity.
    * Set the following values for the **Promoted to Medior?** activity: 
        * **Name** – *Employee still Senior?*
        * **Expression** – *$NewEmployee/Level = MyFirstModule.Level.Senior*
        * **FailureMessage** - *'Expected employee level to be Senior. Actual value: ' + getCaption($NewEmployee/Level)*
18. Run the app locally and view it. 
19. In the left-side navigation pane, click **UnitTestOverview > MyFirstModule**.
20. Verify that the **Rollback microflow tests after execution** checkbox is selected.
21. Click **Run all module tests** and verify that all the test cases pass.

## Read More

* [Unit Testing](/appstore/modules/unit-testing/)
