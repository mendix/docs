---
title: "Testing Microflows with the Unit Testing Module"
linktitle: "Testing Microflows with Unit Test Module"
url: /refguide9/testing-microflows-with-unit-testing-module/
weight: 3
---

## Introduction

Verify that your [microflow](/refguide9/microflows/) works as expected by creating unit tests with the [Unit Testing](/appstore/modules/unit-testing/) module. 

The Unit Testing module provides a user-friendly interface to manage and run unit tests that are created by using microflows, as well as unit tests that are by created using JUnit.

This how-to teaches you how to do the following:

* Set up the Unit Testing module
* Unit-test a microflow

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/)
* Review the Marketplace components used in this how-to:

    | Component | Version Used in This How-to |
    | --- | --- |
    | [Unit Testing](/appstore/modules/unit-testing/) | 9.2.0 |

    {{% alert color="info" %}}All the images, names, and steps in this how-to are based on the Marketplace component versions listed above. When using later versions of this content, images or names on your screen may be different than shown in this how-to.{{% /alert %}}

## Setting up the Unit Testing Module

To set up the unit testing module and run the example tests, follow these steps:

1. Create a [new app](/refguide9/new-app/).
2. Download and install the [Unit Testing](/appstore/modules/unit-testing/) module. 

    For more information, see [Using Marketplace Content](/appstore/use-content/).

3. In the App Explorer, expand the **App {App name}** node, and then click **Settings**.
4. On the **Runtime** tab of the **App settings** dialog box, select the **After startup** microflow.

    {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/testing/18580370.png" alt="Selecting the After startup microflow" class="no-border" >}}

5. Click **Unit Testing** > **_USE ME** > **Microflows** > **Startup**, and then click **Select**.
6. Click **OK**.
7. In the App Explorer, under the **App {App name}** node, click **Navigation**.
8. In the **Menu** section, click **New item**.
9. In the **Caption** field, enter *UnitTestOverview*.
10. In the **On click** field, select **Call a microflow**, and then select the **UnitTestOverview** microflow.

    {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/testing/18580363.png" alt="Selecting the UnitTestOverview microflow" class="no-border" >}}

11. Click **OK**.
12. Run the app locally.
13. Go to `http://localhost:8080/index.html`.
14. In the navigation pane, click **UnitTestOverview**.

    The app shows the **UnitTesting** page, as in the following image:

    {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/testing/18580341.png" alt="A view of the UnitTesting page and default tests" class="no-border" >}}

    You can use this page to execute unit tests, or to reset the test status back to not executed. Use the left-side navigation pane to select a module that contains unit tests. In this scenario, **UnitTesting** is the only module that contains unit tests. 

15. Ensure that the **Rollback microflow tests after execution** checkbox is selected.

    {{% alert color="warning" %}}If the checkbox is cleared, all changes made by the microflows that you test are saved to the database. This can result in populating the database with unwanted test data. As a best practice, do not clear the checkbox unless it is required by your specific use case.{{% /alert %}}

16. Validate that the Unit Testing module is correctly set up by running the **UnitTesting.Test_ValidUnitTest** test. 

    The color of the test case changes to red if the test fails, and to green if it passes.

    {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/testing/18580358.png" alt="An example of a passed test case" class="no-border" >}}

17. To view detailed test results, in the **UnitTesting.Test_ValidUnitTest** row, click **Details**.

## Unit-testing a Microflow

In this section, you will learn how to create and run a microflow unit test.

### Creating a Sample Microflow for Testing {#sample-microflow}

For the purpose of this how-to, create a sample microflow that you can then test with unit testing. In a real-life scenario, the steps below may be different, depending on the microflow that you want to create.

To create a sample microflow for testing, follow these steps:

1. Create a new [enumeration](/refguide9/create-a-basic-data-layer/#add-enumeration) with the following parameters:
    * **Name** – *Level*
    * **Enumeration values** – *Junior*, *Medior*, and *Senior*.

    {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/testing/18580356.png" alt="Enumeration with three values" class="no-border" >}}

2. Open the domain model of **MyFirstModule**.
3. Create a new [entity](/refguide9/create-a-basic-data-layer/#create-entity) with the following parameters:
    * **Name** – *Employee*
    * **Attributes** – *Name* (of the **String** type) and *Level* ( of the  **Enumeration** > **Level** type).

    {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/testing/18580355.png" alt="A view of the Employee entity used by the sample microflow" class="no-border" >}}

4. Create a microflow called **Promote** that changes the Level parameter for the Employee entity based on the enumeration.

    {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/testing/promote.jpg" alt="A view of the sample Promote microflow" class="no-border" >}}

### Creating a Unit Test Microflow

This section describes how to create a microflow test for the sample microflow described in the [Creating a Sample Microflow for Testing](#sample-microflow) section above. In a real-life scenario, the steps below may be different, depending on the microflow that you want to test. If you need to adapt the microflow test to your requirements, bear in mind the following considerations:

* The test microflow name must start with *Test*, for example *Test_RegisterTrainee*.
* The microflow should have no input arguments.
* The result type must be set to one of the following types:
    * **Boolean** – For this result type, a *true* result means that the test succeeded, while a *false* result means that the test failed.
    * **String** – For this result type, any non-empty string indicates a failed test.
* As a best practice, do not test every microflow in your application. Instead, test the most used or most complex microflows.
* You can create a Setup and TearDown microflow in each module. The Setup microflow is invoked once before each test run, and the TearDown microflow is invoked once after each test run, regardless of whether the test run consists of one or multiple unit tests.

To create a sample test microflow, follow these steps:

1. In the left-side navigation pane, right-click on **MyFirstModule**, and then click **Add folder**. 
2. In the **Name** field, enter *UnitTests*.
3. Right-click the **UnitTests** folder, and then click **Add microflow**.
4. In the **Name** field, enter *Test_PromoteEmployeeToJunior*.
5. In the **Test_PromoteEmployeeToJunior** microflow, add **Employee** as an input parameter.
6. Add a new **Create object** activity for the **Employee** entity. 
7. In the **Commit** section of the activity, select **Yes**.
8. In the **Member** section of the activity, add a new member with the following parameters:
    * **Name** – *John*
    * **Member type** – **String**
9. In the **Test_PromoteEmployeeToJunior** microflow, call the **Promote** microflow with the **Employee** object by adding an activity with the following parameters:
    * **Type** – **Microflow call**
    * **Microflow** – **MyFirstModule.Promote**
    * **Parameter** – **Employee**
    * **Argument** –*$NewEmployee*

    {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/testing/18580352.png" alt="A microflow call activity with Employee as the parameter" class="no-border" >}}

10. Promote the employee to the right level by using an activity with the following parameters:
    * **Type** – **Microflow call**
    * **Microflow** – **UnitTesting.AssertTrue1**
    * **Parameter** – **ValueToAssert**
    * **Argument** –*$NewEmployee/Level = MyFirstModule.Level.Junior*
11. Right-click the **AssertTrue1** activity that you created. 
12. Select **Edit caption**, and then enter *Promoted to Junior?* for the new caption.
13. To provide more information about test results for failed tests, call the **ReportStep** sub-microflow by doing the following steps:
    1. Add a new activity of the **Microflow call** type between **Create Employee** and **Promote**
    2. Select **UnitTesting.ReportStep** as the microflow.
    3. Set the argument of the **Message** parameter to *Employee created*.
    4. Add a new activity of the **Microflow call** type between **Promote** and **Promoted to Junior?**.
    5. Select **UnitTesting.ReportStep** as the microflow.
    6. Set the argument of the **Message** parameter to *Employee promoted*.
14. Double-click the **End event**, and then specify the following properties:
    * **Type** – **Boolean**
    * **Return value** – *true*
15. Connect the activities, as shown in the following figure:

    {{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/microflows/testing/promotetojunior.jpg" alt="A view of the sample unit test microflow" class="no-border" >}}

16. In the left-side navigation pane, in the **UnitTests** folder, duplicate the **Test_PromoteEmployeeToJunior** three times, and then rename the new microflows in the following way:
    * *Test_PromoteEmployeeToMedior*
    * *Test_PromoteEmployeeToSenior*
    * *Test_EmployeeStillSenior*
17. In each of the new microflows, edit the **Promoted to Junior?** activity to reflect the employee level for that microflow.
    For example, in the **Test_PromoteEmployeeToMedior** microflow, set the following values for the activity:
    * **Caption** - *Promoted to Medior?*
    * **Argument** –*$NewEmployee/Level = MyFirstModule.Level.Medior*
18. Run the app locally and view it. 
19. In the left-side navigation pane, click **UnitTestOverview > MyFirstModule**.
20. Verify that the **Rollback microflow tests after execution** checkbox is selected.
21. Click **Run all module tests** and verify that all the test cases pass.

## Read More

* [Unit Testing](/appstore/modules/unit-testing/)
