---
title: "Test Microflows Using the UnitTesting Module"
url: /howto7/testing/testing-microflows-using-the-unittesting-module/
category: "Testing"
menu_order: 10
tags: ["test", "testing", "microflow", "unittesting"]
---

To smarten up your app with business logic you can use microflows. To verify that your microflow works as expected you can create unit tests using the UnitTesting module. The UnitTesting module provides an easy to use interface to manage and run unit tests. The module supports unit tests that are created using microflows and unit tests that are created using JUnit.

**After completing this how-to you will know:**

*   How to set up the UnitTesting module.
*   How to create a microflow unit test.

## 1 Preparation

Before you can start with this how-to, make sure you have completed the following prerequisites:

* Download the [Mendix Desktop Modeler](https://marketplace.mendix.com/link/studiopro/)
* Review the software used in this how-to:

    | Software | Version Used in This How-to |
    | --- | --- |
    | Mendix Desktop Modeler | 5.18.0 |
    | UnitTesting module | 4.2 |
    | Community Commons Function Library module | 5.4 |
    | ObjectHandling module | 1.0 |

{{% alert color="warning" %}}
All images, names and steps in this how-to are based on these versions. When using other versions the images and/or names on your screen may be different than the images or names used in this how-to.
{{% /alert %}}

## 2 The UnitTesting Module

In this chapter you will set up the unit testing module and run the example tests.

1.  Create a new project.
2.  Download the [Unit Testing](/appstore/modules/unit-testing/) module.
3.  Download the [Community Commons Function Library](/appstore/modules/community-commons-function-library/).
4.  Download the [Object Handling](/appstore/modules/object-handling/) module.
5.  Open the **Settings** of the project.

    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580371.png" >}}

6.  Click the **Runtime** tab.
7.  Click the **Select** button to select an after startup microflow.

    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580370.png" >}}

8.  Select the microflow **Startup** which can be found in the _USE ME folder of the UnitTesting module_.

    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580369.png" >}}

9.  Click **OK**.
10.  Open the **Navigation** of the project.
11.  Click **New item** to add a new item to the menu.
12.  Enter _UnitTestOverview_ in the **Caption** field.
13. Select **Call a microflow** for the **On click** action, and then select the **UnitTestOverview** microflow:

    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580363.png" >}}

14. Click **OK**.

    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580362.png" >}}

15.  Run the project locally.
16.  Go to `http://localhost:8080/index.html`.
17. Click on **UnitTestOverview** in the navigation.

    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580341.png" >}}
    
    At the left side 2 buttons are shown. When you click the Run all button, all unit tests will be executed. When you click the Reset button, the status of all tests will change to not executed (question mark icon). Beneath the buttons all modules which contains unit tests are shown. In this case UnitTesting is the only module which contains unit tests. When you click UnitTesting, all unit tests of this module are shown.
    If you want to save all changes made in the microflow to the database, you need to uncheck the checkbox 'Rollback microflow tests after execution'. Keep the checkbox checked if you want to rollback all changes.
    At the right side the unit tests of the selected module are shown. In this example five unit tests are shown. When you click the Run all button, all unit tests of the selected module will be executed. When you click the play button next to a unit test, only that unit test will be executed.
18. Click on the play button of **UnitTesting.Test_ValidUnitTest**.
  
    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580359.png" >}}
    
    The color of the testcase will change to green if it passed.
    
    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580358.png" >}}
    
    And to red if the test case fails.
    
    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580357.png" >}}

19. Double click **UnitTesting.TestValidUnitTest**.
  
    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580340.png" >}}
    
    In this overview you will see the date and time of the last run, the result (success or failed), the latest, reported step and the result message.

## 3 Creating a Microflow Test

In this chapter you will learn how to create a microflow test. To create a new microflow test in a module, you need to add a microflow with a name that starts with "Test". A test microflow should have no input arguments and a boolean or string as result type. In case of a boolean, true means success, false means the test failed. In case of a string, any non empty string indicates a failed test.

### 3.1 Creating a Microflow

1.  Create a new enumeration **Level** with three enumeration values; **Junior**, **Medior** and **Senior**.
  
    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580356.png" >}}

2.  Open the Domain Model of **MyFirstModule**.
3.  Create an entity **Employee** with two attributes, **Name** (String(200)) and **Level** (Enumeration 'Level').

    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580355.png" >}}

4.  Create a microflow called **Promote** that looks like this:

	{{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/promote.jpg" >}}

### 3.2 Creating a Unit Test

1. Add a **new folder** to MyFirstModule and name it _UnitTests_.
2. Add a new microflow to the folder **UnitTests** and enter *Test_PromoteEmployeeToJunior* for its name.
3. The microflow has one input parameter: **Employee**. So create the **Employee** object.
4. Add a new activity of action type **Create object**.

5. Select entity **Employee**.

6. Set **Commit** to **Yes**.

7. Enter *John* for the **Value** of **Name**.

    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580353.png" >}}

8. Click **OK**.

9. Now you need to call the **Promote** microflow with the **Employee** object you just created. So, add a new activity of action type **Microflow call**.

10. Select the **Promote** microflow.

    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580352.png" >}}

11. Click **OK**.

12. The next step is to check if the employee is promoted to the right level. Add a new activity of action type **Microflow call**.

13. Select the**UnitTesting.AssertTrue1** microflow.

14. Set the argument of parameter **ValueToAssert** to `$NewEmployee/Level = MyFirstModule.Level.Junior`.

    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580344.png" >}}

15. Click **OK**.

16. Right-click the **AssertTrue** activity you just configured, select **Edit caption**, then enter *Promoted to Junior?* for the new caption.

17. For failed tests, the last step information can be very useful. You can provide this information in your microflow by calling the **ReportStep** sub-microflow. So, add a new activity of action type **Microflow call** between **Create Employee** and **Promote**.

18. Select microflow **UnitTesting.ReportStep**.

19. Set the argument of parameter **Message** to _'Employee created'_.

20. Click **OK**.

21. Add a new activity of action type **Microflow call** between **Promote** and **Promoted to Junior?**.

22. Select the **UnitTesting.ReportStep** microflow .

23. Set the argument of parameter **Message** to _'Employee promoted'_.

24. Click **OK**.

25. Double-click the **End event**.

26. Select **Boolean** as return type.

27. Enter **true** as return value.

28. Click **OK**.

29. The microflow should look like the model below:

	{{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/promotetojunior.jpg" >}}

30. Create three more test microflows as shown below:

	{{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/promotetomedior.jpg" >}}
	
	{{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/promotetosenior.jpg" >}}
	
	{{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/stillsenior.jpg" >}}	

31. Run the project locally.

32. Go to `http://localhost:8080/index.html`.

33. Click on **UnitTestOverview** in the navigation. **MyFirstModule** will be shown in the list with modules that contain one or more testcases.

    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580348.png" >}}

34. Click on **MyFirstModule**. All testcases of module MyFirstModule will be shown.

    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580347.png" >}}

35. Check the checkbox **Rollback microflow tests after execution**.

36. Click on **Run all**. All test cases should pass.

    {{< figure src="/attachments/howto7/testing/testing-microflows-using-the-unittesting-module/18580346.png" >}}

Congratulations! You created your first unit tests using the UnitTesting module.

{{% alert color="info" %}}

It is possible to create a Setup and TearDown microflow per module. The Setup microflow is invoked once before each test run and the TearDown microflow is invoked once after each test run (regardless whether the test run consists of one or multiple unit tests).

{{% /alert %}}

Do not test everything, focus on the most used and complex microflows.

## 4 Read More

*   [How to Create Automated Tests with TestNG](/howto7/testing/create-automated-tests-with-testng/)
