---
title: "Get Started"
url: /addons/ats-addon/ht-two-getting-started/
description: "Describes the initial steps for automatically testing your apps using ATS."
tags: ["ATS", "testing"]
---

## 1 Introduction

This how-to describes the initial steps for automatically testing your applications using the Application Test Suite (ATS). Links to other how-to's and the ATS reference guide are included for more detailed information on steps and functions.

This how-to will teach you how to do the following:

* Configure your App
* Create a test case
* Create a test suite

## 2 Prerequisites

Before starting with this how-to, make sure you have the following prerequisites in place:

* ATS account
* Your ATS instance
* An application under test (AUT)
* Selenium hub (for more information on the Selenium options, see [ATS Deployment](/addons/ats-addon/ov-deployment/))

{{% alert color="info" %}}

You add users to ATS by inviting them to your Mendix app. For more information on the user roles, see [Different User Roles](/addons/ats-addon/ov-introduction/#roles).
{{% /alert %}}

## 3 Configuring Your App

When you [log in to ATS](https://ats.mendix.com), you see the **My Apps** page. An app is a folder in which all the data related to a specific application is saved and managed. You must click your app to gain access to the **test settings**.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/my-apps-page.png" >}}

1.  Open your app inside ATS. This opens the **Dashboard** page.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/dashboard-page.png" >}}

2.  Open the profile menu and click **Show Test Settings**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/show-test-settings.png" >}}

You are now on the **Settings** page. Here you add environments and selenium hubs.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/settings-page.png" >}}

{{% alert color="info" %}}

Only the App admin and Scrum Master have the rights to edit the settings. You set the roles in the Developer Portal.

{{% /alert %}}

### 3.1 Environments

At **Environments** you see a list of test applications that have been configured for the current app. Users can run tests on the listed environments. You can edit, create, and delete applications by clicking the buttons in the top bar.

To add a new environment, follow these steps:

1.  Click **New** under **Environments**, which opens the **Environment** dialog box.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/new-environment.png" >}}

2.  Set the following parameters:

	| Field | Description |
| :--- | :--- |
| **Name** | The name of the application. Using the name of the application is advised. |
| **URL** | The URL of the actual Mendix application to test. |

3.  Click **Save** to save the settings.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/add-environment.png" >}}

### 3.2 Selenium hubs

At **Selenium hubs**, you see a list of the Selenium hubs configured for this app. Users can run tests on the listed hubs. You can create, edit, and delete Selenium hubs by clicking the buttons in the top bar.

To add a new Selenium hub, follow these steps:

1.  Click **New Selenium Hub** under **Selenium hubs**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/new-selenium-hub.png" >}}

	This opens the **Select Provider** dialog box. Here you select one of the three supported selenium providers or a custom selenium hub. ATS creates the URL needed to access your selenium provider when you select a supported selenium provider. When you select custom, you must provide the URL yourself. 

2. Click the provider you use.
3.  Set the following parameters:

	| Field | Description |
| :--- | :--- |
| **Name** | The name of the Selenium hub. You can give it any name. |
| **Username** | The username of your selenium provider account. This can be different from your login name. |
| **Access Key** | The access key for your selenium provider account. |
| **Custom Capabilities** | Can be used to set the Selenium desired capabilities. |

4.  Click **Save** to save the settings.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/browserstack-selenium-hub-wizard.png" >}}

For further documentation on how-to install the ATS Helper and the Recorder see [How-to configure a Selenium hub](/addons/ats-addon/ht-two-configure-a-selenium-hub/).

## 4 Test Cases

The **Test Cases** menu is where you access the repositoy, test data and user stories.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/test-cases-menu.png" >}}

The **Test Cases** menu has three tabs: 

| Tab | Description |
| --- | --- |
| **Repository** | Here you create and store all your test cases, test suites, and custom actions. It is the ATS filing system, the heart of ATS. |
| **Test Data** | Where you can create folders, actions, and enumerations.  |
| **Stories** | Where you can access the sprints of your app. |

In this how-to, only the **Repository** tab is described. 

### 4.1 Creating a Test Case

To create a test case, follow these steps:

1.  On the **Repository** tab, click **Actions** and click **New Test Case** in the drop-down. This opens the **Create new** dialog box.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/actions-new-test-case.png" >}}

2. Enter a name for your test case. Since you are likely to create multiple test cases and test suites, using a predefined naming structure is advised.
3. Enter a clear description for your test case. In case others may need to know what your test case does, use a template to make sure all aspects of the case are described clearly.
4.  Click **Create**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/create-new-test-case.png" >}}

5. When the **Test Case Details** page opens, you are now in the actual test case. In the top left corner of the page, you see the name and description of your test case. The **Test Case Details** page also displays the following buttons:

	* **Run** – brings you to the **Job Configuration** page
	* **Export** – exports the test case as a XML file (this file can be uploaded into another ATS environment) or exports a PDF report or your test case

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/test-case-details-page.png" >}}

### 4.2 Adding Test Steps

Now that you have created a test case, the next step is to configure your test case and start adding test steps. ATS provides two different tools to help add test steps: ATS Helper (Setup step manually) and ATS Recorder (Record step). We advise you to use the recorder as much as possible to add test steps. But, the ATS Recorder might not be able to record certain manual test steps. So, we advise to add steps in the following order:

* Record your manual test steps using the ATS Recorder
* Adding test steps using the ATS Helper, see [Finding the action you need](/addons/ats-addon/bp-two-finding-the-action-you-need/).
* Create a custom action, see [Create custom action](/addons/ats-addon/ht-two-create-custom-actions/).

Before you start adding test steps, add the ATS Helper and ATS Recorder tools:

1. Click the **I-icon** in the top right corner of the screen, which opens, the **ATS Information** dialog box.
2. Drag and drop the **ATS Helper** link to your bookmark bar.
3. To use the recorder function, you need to have the Google Chrome browser installed on your system and install the ATS Recorder Chrome plugin. The ATS Recorder only works in Chrome.
4.  Install the ATS Recorder extension in your Chrome browser.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/information-dialog.png" >}}

For further documentation on how-to install the ATS Helper and the Recorder see [How-to install the ATS Helper and Recorder](/addons/ats-addon/ht-two-install-ats-helper-recorder/).

#### 4.2.1 Record – Using the Recorder Function

With the ATS Recorder plugin installed, you can start a recording session at anytime.

To use the recorder function, follow these steps:

1.  Click **Record step** while inside a test case in ATS, which opens the **Recording Session** page. On this page you can manage your recording session.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/click-record.png" >}}

2. You can now open the Mendix application you want to test in another tab of the browser and start testing the application manually. The test steps you take are recorded in the recording session.
3.  Click **Save** to save your test steps.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/recording-session.png" >}}

	| Field | Description |
| :--- | :--- |
| **Recorded event** | All the registered clicks/entering text will show up here in the sequence where they were done. Select an event to open the **Action mapping** menu of that particular event. The ATS Recorder selects the actions for you. |
| **Action mapping** | This shows all the available actions for this event. Click **Select** if you want to choose a different action.|

All the test steps are numbered for easy identification. To change the sequence of the test steps click the left of the test step while dragging the test step up or down. You can **delete**, **copy** or **paste** a selected test step. With the **Extract action**, you can combine actions of multiple steps into one step. Select the steps you want to combine and click **Extract action**. For more information on extracting an action, see [Custom Actions](/addons/ats-addon/rg-one-custom-actions/).

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/recorded-test-case.png" >}}

For further documentation on how-to create a test case see [How-to create a test case](/addons/ats-addon/ht-two-create-a-test-case/).

#### 4.2.2 Test Data Tab

In this tab, you can connect your datasets to a test case. Use the arrow to select the dataset you need and click **Save**. A new menu will appear in which you can see the dataset fields that are available to select. You can also use this menu to check if you selected the correct dataset.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/test-data-tab.png" >}}

{{% alert color="info" %}}

If you do not use the dataset, make sure to disconnect it. ATS will remember where you selected the dataset fields as input, so if you reconnect the dataset, ATS will automatically set the correct input.

{{% /alert %}}

For further documentation on how-to create a datadriven test case see [How-to create a datadriven test case](/addons/ats-addon/ht-two-create-datadriven-test-case/).

#### 4.2.3 Show Usages Tab

This tab shows you the actions used in this test case and the test suites that are using this test case. Use this screen to verify that if you make a change to a custom action, it does not affect another test case or test suite.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/show-usages-tab.png" >}}

#### 4.2.4 Stories Tab

This tab displays the user stories that are connected to your test case, the test cases within that story, and the success rate of the user story.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/stories-tab.png" >}}

For further documentation on how-to link stories to test cases see [How-to link Test Cases/Test Suites to User Stories](/addons/ats-addon/ht-two-connect-stories-to-testcases/).

### 4.3 Creating a Test Suite

To create a test suite, follow these steps:

1.  On the **Repository** tab, click **Actions** and click **New Test Suite** in the drop-down. This opens the **Create new** dialog box.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/actions-new-test-suite.png" >}}

2. Enter a name for your test suite. Since you are likely to create multiple test cases and test suites, using a predefined naming structure is advised.
3. Enter a clear description for your test suite. In case others may need to know what your test suite does, use a template to make sure all aspects of the suite are described clearly.
4.  Click **Create**.

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/create-new-test-suite.png" >}}

5.  The **Test Suite** page looks similar to the **Test Case** page, but with fewer options. The **Test Suite** page also displays the following buttons:

	* **Parallel** - executes the test steps at same time, depending on your selenium settings.
	* **Sequential** - executes the test steps one at a time, like a test case.
	* **Run** – brings you to the **Job Configuration** page.
	* **Export** – exports the test suite as a XML file (this file can be uploaded into another ATS environment).

	{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/test-suite-details-page.png" >}}

#### 4.3.1 Test Steps Tab

Here you can see all the steps that are in your test suite. Each step is either a test suite or a test step.

You add a test case to your test suite by clicking the **Select and add test case/suite** button.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/add-test-case.png" >}}

For further documentation on how-to create a test suite see [How-to create a test suite](/addons/ats-addon/ht-two-create-a-test-suite/).

#### 4.3.2 Show Usages Tab

This tab shows you all the **Test Cases used by this Test Suite**, all the **Test Suites used by this Test Suite**, and the **Test Suites using this Test Suite**. Use this screen to make sure that if you make a change, it does not affect other test cases or test suites.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/show-usages-tab-test-suite.png" >}}

#### 4.3.3 Stories Tab

This tab displays the user stories that are connected to your test suite, the test cases within that story, and the success rate of the user story. You can **Open**, **Unlink**, or **Link** a user story to your test suite.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/stories-tab-test-suite.png" >}}

For further documentation on how-to link stories to test suites see [How-to link Test Cases/Test Suites to User Stories](/addons/ats-addon/ht-two-connect-stories-to-testcases/).

## 5 Run Configuration

When you click **Run** in the upper-right corner of your test case/suite, the **Job Configuration** page will open.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/job-configuration.png" >}}

Here, you can select your Environment and Selenium hub for ATS to use.

| Field | Description |
| --- | --- |
| **Environment** | Select the app you want to test. |
| **Selenium Hub** | Select the Selenium Hub you want to use to execute the test case. |
| **Browser** | Select the browser that the Selenium Hub uses to execute the test case. Please note that these are the supported browsers. |

When you select a supported selenium provider like Browserstack additional options appear, the **Platform Settings**.

| Field | Description |
| --- | --- |
| **Platform** | Select the plaform you want to test on. |
| **Resolution** | Select the resolution of the session screen. |

Now click **Run** again in the upper-right corner to execute the test case/suite against the provided parameters.

## 6 Result

When you click **Run**, the **Test Runs** page will open.

{{< figure src="/attachments/addons/ats-addon/ht/ht-two/ht-two-getting-started/test-runs-page.png" >}}

Once your test case/suite is executed, the result is shown here.

You have now finished the getting started guide for ATS. We advice to read next [How-to Install the ATS Helper and Recorder](/addons/ats-addon/ht-two-install-ats-helper-recorder/).

Good luck testing your Mendix app with ATS!

## 7 Next Up

You now learned a few basics of working with ATS. The next how-to is [How to Install the ATS Helper and ATS Recorder](/addons/ats-addon/ht-two-install-ats-helper-recorder/). You find an overview of all the how-tos and the structure on the [ATS 2 How-tos](/addons/ats-addon/ht-two/) page. We advise you to follow the predefined structure.
