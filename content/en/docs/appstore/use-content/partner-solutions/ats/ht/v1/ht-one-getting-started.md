---
title: "Get Started"
url: /appstore/partner-solutions/ats/ht-one-getting-started/
weight: 1
description: "Describes the initial steps for automatically testing your apps using ATS."
---

## Introduction

This how-to describes the initial steps for automatically testing your applications using the Application Test Suite (ATS). Links to other how-tos and the ATS reference guide are included for more detailed information on steps and functions.

This how-to teaches you how to do the following:

* Create a new project
* Configure your project
* Create a test case
* Build a test script
* Create a test suite

## Prerequisites

Before starting with this how-to, make sure you have the following prerequisites in place:

* ATS account
* Your ATS instance
* An application under test (AUT)
* Selenium hub (for more information on the Selenium options, see [ATS Deployment](/appstore/partner-solutions/ats/ov-deployment/))

## Creating a New Project {#CreatingNewProject}

When you [log in to ATS](https://ats.mendix.com) as a user, you see the **My Projects** page. A project is a folder in which all the data related to a specific application will be saved and managed. Every user can create a new project, and, as its owner, manage other users' access to it. If there are no projects on your account yet, you are prompted to create a new project.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/my-projects.png" class="no-border" >}}

To create a new project, follow these steps:

1. Click **Add project/Create new project**, which opens the *Create new project/library* page:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/create-new-project.png" class="no-border" >}}

2. Enter the following information about your project:

      Field | Description
      --- | ---
      **Project type** | Select **Project**.
      **Name** | Enter a name for your project. You can enter any name, but using the actual name of your application here is advised.
      **Mendix Project/App ID** | Enter the Mendix project/app ID of the app you want to test, NOT the project ID of ATS! This will give ATS access to your Mendix Portal and user stories. A project can be created without a Mendix project/app ID, but than you have no access to the Mendix Portal and user stories.
      **Mendix API Key** | This is the API key you created in your Mendix Portal project for ATS.
      **Project Users** | Enter the people that need access to this project. This project will then appear in their **My Projects** menu. You can always edit this later. There are two different roles for a project user: a **Tester** can only test, create tests, and monitor results; a **Project Administrator** has the same rights as the tester but has also editing rights to the configuration settings of a project.
      **Action Libraries** | Make sure that the action libraries **Core** and **Mendix** are included. Please note that without libraries, it is not possible to select actions for the test script. For more information on action libraries, see [Standard Actions Reference](/appstore/partner-solutions/ats/rg-one-std-actions-ref/).

3. Click **Save & Open** at the bottom of the page to open the **Project Dashboard**.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/project-dashboard-empty.png" class="no-border" >}}

## Configuring Your Project

{{% alert color="info" %}}

Only the Project Administrator role has the rights to edit the settings in **Configuration**. For a project user, only the Tester can see these settings and not edit them.

{{% /alert %}}

To start configuring your project, click **Configuration** in the navigation bar on the left to open the **Configuration** page. This page contains the **Project**, **Selenium**, and **Applications** tabs.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/configuration-getting-started.png" class="no-border" >}}

### Project Tab

On the **Project** tab, you can see the current project settings. You can change the settings and add users or libraries to your project by clicking **Edit Project Settings**. For information on project settings, see [3 Creating a New Project](#CreatingNewProject).

### Selenium Tab

On the **Selenium** tab, you can see a list of the Selenium hubs configured for this project. Project users can run tests on the listed hubs. You can create, edit, and delete Selenium hubs by clicking the buttons in the top bar.

To add a new Selenium hub, follow these steps:

1. Click **New** in the top bar, which opens the **Selenium hub** dialog box:

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/selenium-hub-dialog.png" class="no-border" >}}

2. Set the following parameters:

      Field | Description
      --- | ---
      **Name** | The name of the Selenium hub.  If you have your own Selenium access URL you can give it your name.
      **URL** | The URL of your Selenium server. This depends on what type of Selenium hub you are using. Please note that BrowserStack has a different type of URL than a local Selenium server. Most Selenium hosts use a combination of username and an access key.
      **Parallel Sessions** | The number of test cases ATS that can run parallel on the Selenium hub.
      **Proxy URL** | The URL of an optional proxy server. Please note that this is no longer needed.
      **Custom Capabilities** | Can be used to set the Selenium desired capabilities.

3. Click **Save** to save the settings.

### Applications Tab

On the **Applications** tab, you can see a list of test applications that have been configured for the current project. You can edit, create, and delete applications by clicking the buttons in the top bar.

To add a new application, follow these steps:

1. Click **New** in the top bar, which opens the **Application** dialog box.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/application-dialog.png" class="no-border" >}}

2. Set the following parameters:

      Field | Description
      --- | ---
      **Name** | The name of the application. Using the name of the application is advised.
      **URL** | The URL of the actual Mendix application to test.
      **Details** | A short dscription of the application you are testing.
      **Mendix Version** | The Mendix version of the application. This is for information purposes only.
      **Use Proxy** | Leave to default if not needed.

3. Click **Save** to save the settings.

## Repository

The repository is where you create and store all your test cases, test suites, and custom actions. It is the ATS filing system, the heart of ATS.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/repository-empty.png" class="no-border" >}}

The repository has three tabs:

| Tab | Description |
| --- | --- |
| **Tests** | Where you can view all the test suites and test cases within a project and start creating a new test case or test suite. |
| **All objects** | Where you can create folders, actions, and enumerations.  |
| **Test data** | Where all your test data is saved and maintained. |

In this how-to, only the **Tests** tab is described.

### Creating a Test Case

To create a test case, follow these steps:

1. On the **Tests** tab, click **Add Test**, which opens the **Create new** dialog box.
2. Select **Test Case** in the drop-down menu and enter a name for your test case. Since you are likely to create multiple test cases and test suites, using a predefined naming structure is advised.
3. Enter a clear description for your test case. In case others may need to know what your test case does, use a template to make sure all aspects of the case are described clearly.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/create-new-test-case.png" class="no-border" >}}

4. Click **Create**.
5. When the **Test Case** page opens, you are now in the actual test case. In the top left corner of the page, you can see the name and description of your test case. The **Test Case** page also displays the following buttons:

    * **Run** – brings you to the **Run Configuration** screen
    * **Quickrun** – immediately executes a test case with the last set of run configurations (use this option to check your test case while building)
    * **Export** – exports the test case as a XML file (this file can be uploaded into another ATS environment)
    * **PDF** – extracts a PDF report of your test case

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/test-case-page.png" class="no-border" >}}

### Building a Test Script

Now that you have created a test case, the next step is to configure your test case and start building your test script. ATS provides two different tools to build test scripts: ATS Helper (Add) and ATS Recorder (Record). In this how-to, we only describe how to use the ATS Recorder.

Before you start building your test script, add the following tools:

1. Click **Information** ({{% icon name="info-circle" %}}) in the top right corner of the screen, which opens, the **ATS Information** dialog box.
2. Drag the **ATS Helper** link into your bookmark bar.
3. To use the recorder function, you need to have the Google Chrome browser installed on your system and install the ATS Recorder Chrome plugin. The ATS Recorder only works in Chrome.
4. Install the ATS Recorder extension in your Chrome browser.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/ats-information-dialog.png" class="no-border" >}}

#### Record – Using the Recorder Function

With the ATS Recorder plugin installed, you can start a recording session at anytime.

To use the recorder function, follow these steps:

1. Click **Record** while inside a test case in ATS, which opens the **Recording Session** page. On this page you can manage your recording sessions.
2. You can now open the Mendix application you want to test in another tab of the browser and start testing the application manually. The test steps you take will now be recorded and saved in the chosen test case.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/recording-session-cp.png" class="no-border" >}}

3. Click **Save** to save your actions for this event.

    Field | Description
    --- | ---
    **Recorded event** | All the registered clicks/entering text will show up here in the sequence where they were done. Select an event to open the **Action mapping** menu of that particular event. The ATS Recorder selects the actions for you.
    **Action mapping** | This shows all the available actions for this event. Click  **Select** if you want to choose a different action.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/recorded-test-steps.png" class="no-border" >}}

All the test steps are numbered for easy identification. The up and down arrows can be used to change the sequence of the test steps. You can **delete**, **copy** or **paste** a selected test step. With the **Extract action**, you can combine actions of multiple steps into one step. Select the steps you want to combine and click **Extract action**. For more information on extracting an action, see [Custom Action](/appstore/partner-solutions/ats/rg-one-custom-actions/).

#### Test Data Tab

In this tab, you can connect your datasets to a test case. Use the arrow to select the dataset you need and click **Save**. A new menu will appear in which you can see the dataset fields that are available to select. You can also use this menu to check if you selected the correct dataset.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/data-set-test-case.png" class="no-border" >}}

{{% alert color="info" %}}

If you do not use the dataset, make sure to disconnect it. ATS will remember where you selected the dataset fields as input, so if you reconnect the dataset, ATS will automatically set the correct input.

{{% /alert %}}

#### Show Usages Tab

This tab shows you the actions used in this test case and the test suites that are using this test case. Use this screen to verify that if you make a change to a custom action, it does not affect another test case or test suite.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/show-usages-test-case.png" class="no-border" >}}

#### Stories Tab

This tab displays the user stories that are connected to your test case, the test cases within that story, and the success rate of the user story.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/stories-test-case.png" class="no-border" >}}

### Creating a Test Suite

To create a test suite, follow these steps:

1. Click **Add Test** and select **Test Suite** in the drop-down menu. The page **Create new** will open.
2. Enter a name for your test suite. Since you are likely to create multiple test cases and test suites, using a predefined naming structure is advised.
3. Enter a clear description for your test suite. Others may need to know what your test suite does. It might be handy to use a template to make sure all aspects of the suite are present.

    {{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/create-new-test-suite.png" class="no-border" >}}

4. Click **Create**. 
5. The **Test Suite** page looks similar to the **Test Case** page, but with fewer options. The **Test Suite** page also displays the following buttons:

    * **Run** – takes you to the **Run configuration** screen
    * **Quickrun** – immediately executes a test suite with the last set of run configurations (use this option to check your test case while building)
    * **Export** – exports the test suite as a XML file (this file can be uploaded into another ATS environment)

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/test-suite-page.png" class="no-border" >}}

#### Test Cases/Suites Tab

Here you can see all the steps that are in your test suite. Each step is either a test suite or a test step.

Clicking **Add** adds a test case to your test suite. Enter a clear description for this step and **Search** for a test case you want to add to your test suite. You can **Create a new Test Case** if you want to add a complete new test case to your test suite.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/select-test.png" class="no-border" >}}

#### Show Usages Tab

This tab shows you all the **Test Cases used by this Test Suite**, all the **Test Suites used by this Test Suite**, and the **Test Suites using this Test Suite**. Use this screen to make sure that if you make a change, it does not affect other test cases or test suites.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/show-usages-test-suite.png" class="no-border" >}}

#### Stories Tab

This tab displays the user stories that are connected to your test suite, the test cases within that story, and the success rate of the user story. You can **Open**, **Unlink**, or **Link** a user story to your test suite.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/stories-test-suite.png" class="no-border" >}}

## Run Configuration

When you click **Run** in the upper-right corner of your test case, the **Select Run Configuration** page will open.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/run-configuration.png" class="no-border" >}}

Here, you can select your AUT and Selenium hub for ATS to use.

| Field | Description |
| --- | --- |
| **Application** | Select the app you want to test. |
| **Selenium Hub** | Select the Selenium hub you want to use to execute the test case. |
| **Browser** | Select the browser that the Selenium hub uses to execute the test case. Please note that these are the supported browsers. |

Now click **Run** again in the upper-right corner to execute the test case against the provided parameters. For more information on the run configuration, see [Run Configuration](/appstore/partner-solutions/ats/rg-one-test-run/).

## Result

When you click **Run**, the **Monitoring / Results** page will open.

{{< figure src="/attachments/appstore/partner-solutions/ats/ht/v1/ht-one-getting-started/monitoring-results-pending.png" class="no-border" >}}

Once your test case is run, the result is shown here. For more information on results, see [Monitoring](/appstore/partner-solutions/ats/rg-one-monitoring/).

You have now finished the getting started guide for ATS. Please check the [how-tos](/appstore/partner-solutions/ats/ht-one/) and [best practices](/appstore/partner-solutions/ats/bp-one/) for more information.

Good luck testing your Mendix app with ATS!

## Next Up

You have now learned a few basics of working with ATS, so the next how-to is [How to Install the ATS Helper and ATS Recorder](/appstore/partner-solutions/ats/ht-one-install-ats-helper-recorder/).

For an overview of all the how-tos and the structure, see [ATS 1 How-tos](/appstore/partner-solutions/ats/ht-one/). We advise following the how-tos in the order listed there.
