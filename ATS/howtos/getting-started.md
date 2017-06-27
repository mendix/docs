---
title: "Getting Started"
space: "ATS Add-On"
category: "How-To's"
---


---

### 1 Introduction

This how-to getting started describes the initial steps to get to automatically testing your applications, using the Application Test Suite \(ATS\). Links to how-to's or reference guide are included for more detailed information on steps and functions.

This Getting Started contains the following chapters:

**Chapter 2: Prerequisites**

**Chapter 3: How to create a new project**

**Chapter 4: How to configure your project**

**Chapter 5: Repository - How to create a test case, how to build a test script and how to create a test suite**

**Chapter 6: The run configuration**

**Chapter 7: The result**

### 2 Prerequisites

Before starting with this how-to make sure you have the following prerequisites in place:

* ATS account
* Your ATS instance
* An application under test \(AUT\)
* Selenium hub. For more information on the selenium options, see [ATS deployment](general/deployment)

## 3 How to create a new project

When you log in to the Application Test Suite \(ATS\) as a user you see the _My Projects_ page. A project is a folder in which all data related to a specific application will be saved and managed. Every user can create a new project and as it's owner manage other user's access to it. If there are no projects on your account yet, you are prompted to create a new Project.

![](/howtos/attachments/getting-started/my-projects.png)

Step 1. Click **Add project/Create new project**. The page _Create new project/library_ opens.

![](/howtos/attachments/getting-started/create-new-project.png)

Step 2. Enter the information about your project:

| Field | Description |
| --- | --- |
| **Project type** | Select 'Project'. |
| **Name** | Enter a name for your project. You can enter any name but we advice you to use the actual name of your application here. |
| **Mendix Project/App ID** | Enter the Mendix Project/App ID of the application you wantto test, NOT the project ID of ATS! This will give ATS access to your Sprintr and user stories. A project can be created without a Mendix Project/App ID but than you have no access to the Sprintr and user stories. |
| **Mendix API Key** | This is the API key you created in your Sprintr project for ATS. |
| **Project Users** | Enter the people that need access to this project. This project will then appear in their _My Projects_ menu. You can always edit this later. There are two different roles for a project user: **Tester** - can only test, create tests and monitor results. **Project Administrator** - has the same rights as the tester but has also editing rights to the configuration settings of a project. |
| **Action Libraries** | Make sure that the action libraries 'Core' and 'Mendix' are included.<br>**Note**: _without libraries it is not possible to select actions for the test script. More information on action libraries, see _[_standard actions reference_](refguide-ats-1/standard-actions-reference) |

Step 3. Click **Save & Open** at the bottom of the page to open the page _Project Dashboard_. For information on the page _Project Dashboard_, see [Project Dashboard](refguide-ats-1/project-dashboard)

![](/howtos/attachments/getting-started/project-dashboard-empty.png)

## 4 How to configure your project

**Note**: _Only a project administrator role has the rights to edit the settings in Configuration. The project user: Tester can only see these settings and not edit them._

Step 1. Click on **Configuration** in the navigation bar on the left to open the page _Configuration_. This page contains the tabs **Project**, **Selenium** and **Applications**. 

![](/howtos/attachments/getting-started/configuration-getting-started.png)

### 4.1 Project tab

On the **Project** tab page you can see the current project settings. You can change the settings and add users or libraries to your project by clicking **Edit Project Settings**. For information on project settings go to **3 How to create a project.**

### 4.2 Selenium tab

On the **Selenium** tab page you can see a list of the Selenium hubs configured for this project. Project users can run tests on the listed hubs. You can create, edit and delete selenium hubs by clicking the buttons in the top bar. To add a new Selenium hub:

Step 1. Click **New** in the top bar. The** Selenium hub** dialog box opens.

![](/howtos/attachments/getting-started/selenium-hub-dialog.png)

Step 2. Set the following parameters

Step 3. Click **Save** to save the settings.

| Field | Description |
| --- | --- |
| Name | The name of the Selenium hub.  If you have your own selenium access URL you can give it your name. |
| URL | Enter the URL of your selenium server. This depends on what type of selenium hub you are using. **Note: **_Browserstack has a different type of URL than a local selenium server. Most selenium hosts use a combination of username and an access key._ |
| Parallel Sessions | The number of test cases ATS can run parallel on the Selenium hub. |
| Proxy URL | The URL of an optional proxy server.<br> **Note:** No longer needed. |
| Custom Capabilities | Can be used to set the Selenium Desired Capabilities |

### 4.3 Applications tab

On the **Applications** tab page you can see a list of test applications that have been configured for the current project. You can edit, create and delete applications by clicking the buttons in the top bar. To add a new application:

Step 1. Click **New** in the top bar. The** Application** dialog box opens.

![](/howtos/attachments/getting-started/application-dialog.png)

Step 2. Set the following parameters.

Step 3. Click **Save** to save the settings.

| Field | Description |
| --- | --- |
| Name | The name of the application. We advice to use the name of the application. |
| URL | Enter the URL to the actual Mendix application to test. |
| Details | Enter a small description of the application you are testing. |
| Mendix Version | Enter the Mendix version of the application. This is for information purposes only. |
| Use Proxy | Leave to default if not needed |

## 5. Repository

The repository is the place where you create and store all your test cases, test suites and custom actions. It is the ATS filing system, the heart of ATS.

![](/howtos/attachments/getting-started/repository-empty.png)

The repository has three tabs:

| Tab | Description |
| --- | --- |
| Tests | In this tab you can view all the test suites and test cases within a project and start creating a new test case or test suite. |
| All objects | In this tab you can create folders, actions and enumerations.  |
| Test data | In this tab all your test data is being saved and maintained. |

In this Getting Started manual we only describe the tab **Tests**.

### 5.1 How to create a test case

#### **Tests Tab**

Step 1. Click **Add Test**. The dialog box _Create new_ opens.

Step 2. Select Test Case in the dropdown menu and enter a name for your test case. Since you are likely to create multiple test cases and test suites, we advice you use a predefined naming structure.

Step 3. Enter a clear description for your test case. In case others may need to know what your test case does, use a template to make sure all aspects of the case are described clearly.

![](/howtos/attachments/getting-started/create-new-test-case.png)

Step 4. Click **Create**.

Step 5. The _Test case_ page opens and you are now in the actual test case. In the top left corner of the page you can see the name and description of your test case. The page _Test Case_ also displays the following buttons:

   _**Run**_ - click this button to go to the _Run configuration_ screen.

   _**Quickrun**_ - to immediately execute a test case with the last set of run configurations. Use this option to check your test case while building.

   _**Export**_ - exports the test case as a XML file. This file can be uploaded into another ATS environment.

   _**PDF**_ - to extract a pdf report of your test case.

![](/howtos/attachments/getting-started/test-case-page.png)

### 5.2 How to build a test script

Now that you have created a test case, the next step is to configure your test case and start building your test script. ATS provides two different tools to build test scripts: ATS helper \(Add\) and ATS recorder \(Record\). In this Getting Started we only describe how to use the ATS recorder. 

Before you start building your test script add the following tools:

Step 1. Click the **I-icon** in the top right corner of the screen. The dialog box _ATS Information_ opens.

Step 2. Drag and drop the _ATS helper_ link to your bookmark bar.

Step 3. To use the recorder function you need to have the Google Chrome browser installed on your system and install the ATS Recorder Chrome plugin.The ATS recorder only works in Chrome.

Step 4. Install the ATS recorder extension in your Chrome browser.

![](/howtos/attachments/getting-started/ats-information-dialog.png)

#### _**Record **_- use the recorder function

With the ATS Recorder plugin installed, you can start a recording session at anytime.

Step 1. Click **Record** while inside a test case in ATS.

Step 2. The page _Recording Session_ opens. On this page you can manage your recording sessions.

Step 3. You can now open the Mendix application you want to test in another tab of the browser and start testing the application manually. The test steps you take will now be recorded and saved in the chosen test case.

![](/howtos/attachments/getting-started/recording-session-cp.png)

Step 4. Click **Save** to save your actions for this event.

| Field | Description |
| --- | --- |
| Recorded event | all registered clicks/entering text will show up here in the sequence they were done. Select an event to open the _Action mapping_ menu of that particular event. The ATS recorder selects the actions for you. |
| Action mapping | shows all available actions for this event. Click  **Select** if you want to choose a different action. |

![](/howtos/attachments/getting-started/recorded-test-steps.png)

All test steps are numbered for easy identification. The up and down arrows can be used to change the sequence of the test steps. You can **delete**, **copy** or **paste** a selected test step. With **Extract action **you can combine actions of multiple steps into one step.  Select the steps you want to combine and click **Extract action**. For more information on extracting an action, see [Extract Action](refguide-ats-1/custom-actions)

#### **Test Data tab**

In this tab you can connect your data sets to a test case. Use the arrow to select the data set you need and click **Save**. A new menu will appear in which you can see the data set fields that are available to select. You can also use this menu to check if you selected the correct data set.

![](/howtos/attachments/getting-started/data-set-test-case.png)

**Note**_: If you do not use the data set, make sure to disconnect it. ATS will remember where you selected the data set fields as input, so if you reconnect the data set, ATS will automatically set the correct input. _

#### **Show usages tab**

This tab shows you the actions used in this test case and the test suites that are using this test case. Use this screen to  that if you make a change to a custom action, it does not affect another test case or test suite.

![](/howtos/attachments/getting-started/show-usages-test-case.png)

#### **Stories tab**

This tab displays the user stories that are connected to your test case, the test cases within that story and the success rate of the user story.

![](/howtos/attachments/getting-started/stories-test-case.png)

For more information on test cases, see [Test Case](refguide-ats-1/test-case)

### 5.3 How to create a test suite

Step 1. Click **Add Test** and select Test Suite in the dropdown menu. The page _Create new_ opens.
Step 2. Enter a name for your test suite. Since you are likely to create multiple test cases and test suites, we advice you use a predefined naming structure.
Step 3. Enter a clear description for your test suite. Others may need to know what your test suite does. It might be handy to use a template to make sure all aspects of the suite are present.

![](/howtos/attachments/getting-started/create-new-test-suite.png)

Step 4. Click **Create**. 
Step 5. The page _Test Suite_ looks similar to the page _Test Case_ but with fewer options. The page _Test Suite_ also displays the following buttons:

_**Run**_ - click this button to go to the run configuration screen.

_**Quickrun**_ - to immediately execute a test suite with the last set of run configurations. Use this option to check your test case while building.

_**Export**_ - exports the test suite as a XML file. This file can be uploaded into another ATS environment.

![](/howtos/attachments/getting-started/test-suite-page.png)

#### Test Cases/Suites tab

You can see all the steps that are in your test suite. Each step is either a test suite or a test step.

**Add - **Add a test case to your test suite. Enter a clear description for this step and **Search** for a test case you want to add to your test suite or **Create a new Test Case** if you want to add a complete new test case to your test suite.

![](/howtos/attachments/getting-started/select-test.png)

#### **Show Usages tab**

This tab shows you all _Test Cases used by this Test Suite_, all _Test Suites used by this Test Suite_ and _Test Suites using this Test Suite_. Use this screen to make sure that if you make a change it does not affect other test cases or test suites.

![](/howtos/attachments/getting-started/show-usages-test-suite.png)

#### **Stories tab**

This tab displays the user stories that are connected to your test suite, the test cases within that story and the success rate of the user story. You can _Open_, _Unlink_ or _Link_ a user story to your test suite.

![](/howtos/attachments/getting-started/stories-test-suite.png)

For more information on test suites go to [Test Suite](refguide-ats-1/test-suite).

## 6. **Run Configuration**

Once you click **Run** in the upper right corner of your test case, the run configuration page will open.

![](/howtos/attachments/getting-started/run-configuration.png)
Here you can select your AUT and selenium hub for ATS to use.

| Field | Description |
| --- | --- |
| Application | Select the App you want to test. |
| Selenium Hub | Select the Selenium Hub you want to use to execute the test case. |
| Browser | Select the Browser the Selenium Hub uses to execute the test case.<br> **Note**: These are the supported browsers. | 

Now click **Run** again in the upper right corner to execute the test case against the provided parameters. For more information on the run configuration, see [Run Configuration](refguide-ats-1/test-run).

## 7. **Result**
After you clicked **Run** the monitoring/results page will open.

![](/howtos/attachments/getting-started/monitoring-results-pending.png)

Once your test case is executed the result is shown here. For more information on results, see [Monitoring](refguide-ats-1/monitoring).

Now you finished the getting started guide for ATS. Please check our [How To](howtos) and [Best Practice](bestpractices) sections for more information.<br> 

Good luck testing your Mendix App with ATS!


