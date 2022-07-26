---
title: "Test Microflows Using the Unit Testing Module"
linktitle: "Test Microflows Using Unit Test Module"
url: /howto/testing/testing-microflows-using-the-unittesting-module/
category: "Testing"
weight: 10
tags: ["test", "testing", "microflow", "unit testing"]
---

## 1 Introduction

Verify that your [microflow](/refguide/microflows/) works as expected by creating unit tests with the Unit Testing module. 

The Unit Testing module provides a user-friendly interface to manage and run unit tests. The module supports unit tests that are created using microflows and unit tests that are created using JUnit.

This how-to will teach you how to do the following:

* Set up the Unit Testing module
* Unit-test a microflow

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro/)
* Review the Marketplace components used in this how-to:

    | Component | Version Used in This How-to |
    | --- | --- |
    | [Unit Testing](/appstore/modules/unit-testing/) | 8.0.0 |
    | [Community Commons Function Library](/appstore/modules/community-commons-function-library/) | 8.1.0 |
    | [Object Handling](/appstore/modules/object-handling/) | 3.0.0 |

	{{% alert color="info" %}}All the images, names, and steps in this how-to are based on the Marketplace component versions listed above. When using later versions of this content, images and/or names on your screen may be different than what is used in this how-to.
	{{% /alert %}}

## 3 Setting up the Unit Testing Module

To set up the unit testing module and run the example tests, follow these steps:

1. Create a [new app](/refguide/new-app/).
2. Download and install the [Unit Testing](/appstore/modules/unit-testing/) module.
3. Download and install the [Community Commons Function Library](/appstore/modules/community-commons-function-library/) module.
4. Download and install the [Object Handling](/appstore/modules/object-handling/) module.
5. In the App Explorer, expand the **App {App name}** node, and then click **Settings**.
6. On the **Runtime** tab of the **App settings** dialog box, select the **After startup** microflow, as in the following figure:

	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/18580370.png" >}}

8. Click **Unit Testing > _USE ME > Microflows > Startup**, and then click **Select**.
9. Click **OK**.
10. In the App Explorer, under the **App {App name}** node, click **Navigation**.
11. In the **Menu** section, click **New item**.
12. In the **Caption** field, enter *UnitTestOverview*.
13. In the **On click** field, select **Call a microflow**, and then select the **UnitTestOverview** microflow, as in the following figure:

	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/18580363.png" >}}

14. Click **OK**.
15. Run the app locally.
16. Go to [http://localhost:8080/index.html](http://localhost:8080/index.html).
17. In the navigation pane, click **UnitTestOverview**.

	The app shows the **UnitTesting** page, as in the following figure:

	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/18580341.png" >}}

	You can use this page to execute unit tests, or to reset the test status back to not executed. Use the left-side navigation pane to select a module that contains unit tests. In this scenario, **Unit Testing** is the only module that contains unit tests. 

18. Ensure that the **Rollback microflow tests after execution** check box is selected.

	{{% alert color="warning" %}}If the check box is cleared, all changes made by the microflows that you test are saved to the database. This can result in populating the database with unwanted test data. As a best practice, do not clear the check box unless it is required by your specific use case.
	{{% /alert %}} 

19. Validate that the Unit Testing module is correctly set up by running the **UnitTesting.Test_ValidUnitTest** test. 

	The color of the test case changes to red if the test fails, and to green if it passes, as in the following figure:

	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/18580358.png" >}}

20. To view detailed test results, in the **UnitTesting.Test_ValidUnitTest** row, click **Details**.

## 4 Unit-testing a Microflow

In this section, you will learn how to create and run a microflow unit test.

### 4.1 Creating a Sample Microflow for Testing

Optionally, create a sample microflow that you can then test with unit testing. In a real-life scenario, the steps below may be different, depending on the microflow that you want to create.

To create a sample microflow for testing, follow these steps:

1.  [Create a new enumeration](/studio/domain-models-enumeration/#create-new-enumeration) with the following parameters:
	* **Name** – *Level*
	* **Enumeration values** – *Junior*, *Medior*, and *Senior*, as in the following figure:
  
	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/18580356.png" >}}

2.  Open the domain model of **MyFirstModule**.
3.  [Create a new entity](/studio/domain-models/#adding-new-entities) with the following parameters:
	* **Name** – *Employee*
	* **Attributes** – *Name* (of the **String** type) and *Level* ( of the  **Enumeration** > **Level** type), as in the following figure:

	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/18580355.png" >}}

4.  Create a microflow called **Promote** that changes the Level parameter for the Employee entity based on the enumeration, as in the following figure:

	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/promote.jpg" >}}

### 4.2 Creating a Unit Test Microflow

This sub-section describes how to create a microflow test. In a real-life scenario, the steps below may be different, depending on the microflow that you want to test. If you need to adapt the microflow test to your requirements, bear in mind the following considerations:

* The test microflow name must start with *Test*, for example *Test_RegisterTrainee*.
* The microflow should have no input arguments.
* The result type must be set to one of the following types:
	* Boolean - For this result type, a *true* result means that the test succeeded, while a *false* result means that the test failed.
	* String - For this result type, any non-empty string indicates a failed test.

To create a sample test microflow, follow these steps:

1. In the left-side navigation pane, right-click on **MyFirstModule**, and then click **Add folder**. 
2. In the **Name** field, enter *UnitTests*.
3. Right-click on the **UnitTests** folder, and then click **Add folder**.
4. In the **Name** field, enter *Test_PromoteEmployeeToJunior*.
5. In the new microflow, add **Employee** as an input parameter.
6. Add a new **Create object** activity for the **Employee** entity. 
7. In the **Commit** section of the activity, select **Yes**.
8. Add a new **Member** with *John* set for **Name**:

	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/18580353.png" >}}

9. Now, you need to call the **Promote** microflow with the **Employee** object you just created. So, add a new activity of the **Microflow call** type, select the **Promote** microflow, and enter `$NewEmployee` for the argument:

	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/18580352.png" >}}

10. Now, the the employee needs to be promoted to the right level. Add a new activity of the **Microflow call** type and select the**UnitTesting.AssertTrue1** microflow.
11. Set the argument of **ValueToAssert** parameter to `$NewEmployee/Level = MyFirstModule.Level.Junior`:

	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/18580344.png" >}}

12. Right-click the **AssertTrue1** activity you just configured, select **Edit caption**, then enter *Promoted to Junior?* for the new caption.
13. For failed tests, the last step information can be very useful. You can provide this information in your microflow by calling the **ReportStep** sub-microflow. So, add a new activity of the **Microflow call** type between **Create Employee** and **Promote** and select the **UnitTesting.ReportStep** microflow.
14. Set the argument of parameter **Message** to `'Employee created'`.
15. Add a new activity of the **Microflow call** type between **Promote** and **Promoted to Junior?** and select the **UnitTesting.ReportStep** microflow .
16. Set the argument of parameter **Message** to `'Employee promoted'`.
17. Double-click the **End event**, select **Boolean** as the return **Type**, and enter `true` as the **Return value**.
18. The microflow should look like the model below:

	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/promotetojunior.jpg" >}}

19. Create three more test microflows as shown below:

	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/promotetomedior.jpg" >}}
	
	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/promotetosenior.jpg" >}}

	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/stillsenior.jpg" >}}	

20. Run the app locally and view it. 
21. Click **UnitTestOverview** in the navigation, and click **MyFirstModule** in the list of modules that contain one or more test cases:

	{{< figure src="/attachments/howto/testing/testing-microflows-using-the-unittesting-module/18580348.png" >}}

	This will display all the test cases for **MyFirstModule**.

22. Verify the **Rollback microflow tests after execution** box is checked.
23. Click **Run all module tests**. All the test cases should pass.

Congratulations! You created your first unit tests using the Unit Testing module.

{{% alert color="info" %}}
It is possible to create a "Setup" and "TearDown" microflow per module. The "Setup" microflow is invoked once before each test run, and the "TearDown" microflow is invoked once after each test run (regardless of whether the test run consists of one or multiple unit tests).
{{% /alert %}}

{{% alert color="warning" %}}
Do not test everything, focus on the most used and complex microflows!
{{% /alert %}}

## 5 Read More

* [How to Create Automated Tests with TestNG](/howto/testing/create-automated-tests-with-testng/)
