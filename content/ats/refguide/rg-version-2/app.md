---
title: "App"
parent: "rg-version-2"
---

## App

## Dashboard

The dashboard is where you find all information about the results of your tests. It is split into two parts: **Current Status and 7-Day History** infographics and the **Recent Tests** result tree. 

![Dashboard](attachments/project/dashboard.png)

### Infographics

The infographics are the first thing you see when you open your app in ATS. These charts show you the current status and the states of the past seven days of your tests. It includes the results of all your test cases. Datadriven tests are counted as a single test case. 

For the 7-days history, everyday at 23:59 UTC, a snapshot of the current test states is taken.

You generate a report of the status of your tests by pressing **Download Report**. The report is automatically downloaded as a PDF file.

### Recent Tests
Under **Recent Tests** you find detailed information about the status of all your test cases and test suites. You see the passed time since the latest run, its result and for test suites the success rate. The success rate is calculated using the results of all containing test cases. For data driven tests, the data set is displayed in the column **test data**.

The results of your tests are displayed as icons. The following table explaines the meanings of those icons:

| Icon | Meaning |
| ---- | ------- |
|![Passed](attachments/project/passed-icon.png)| Passed. The test was executed successfully |
|![Failed](attachments/project/failed-icon.png)| Failed. The test has failed |
|![Canceled](attachments/project/canceled-icon.png)| Canceled. The test was canceled by a user before finishing |
|![Skipped](attachments/project/skipped-icon.png)| Skipped. The execution of this test was skipped or it hasen't been run yet |

There are three icons for test cases, test suites and datadriven test cases.

| Icon                                     | Meaning    |
| ---------------------------------------- | ---------- |
| ![Test Case](attachments/project/test-case-icon.png) | Test Case  |
| ![Test Suite](attachments/project/test-suite-icon.png) | Test Suite |
| ![Datadriven Test Case](attachments/project/ddt-icon.png)| Datadriven Test Case|


You click **Show Log** to open the latest execution log. When you click thee **name of a test case/test suite** the edit page opens. 



## Permissions
There are two roles in ATS, which are assigned to the user by the system itself. 
* The role tester is assigned to a user, when he has at least one teamserver project licensed in ATS. A tester has access to all data or actions, which is neccessary to write and execute tests in ATS. 
* The app admin is assigned to a user, when he has the app settings permission of the teamserver project in Sprintr. The app settings permission is by default part of the SCRUM Master role in Sprintr. An app admin also has access to the test settings page described in the next section. 

## Settings
Settings is the central point to configure ATS. You can set the Mendix API Key, add your deployments and your selenium hubs. You also find an overview of all testers and administrators of your app. 

{{% alert type="info" %}}

Only app administrators can access the settings. Testers can only use the available deployments and selenium hubs.

![Settings](attachments/project/settings.png)

{{% /alert %}}


### Environments

Under **Environments** you add the different environment URL's that you use for the current app. The user selects one of these to use in their test case. ATS executes the test case/test suite against that environment.

You edit, create, and delete the applications by clicking the buttons in the top bar:

![New Application Dialog](attachments/project/deployments.png)

When you create a new application, you set the following parameters:

| Field | Description                              |
| ----- | ---------------------------------------- |
| Name  | The name of the application.             |
| URL   | The URL under which the Mendix application to test is running. |

### Selenium hubs

Under **Selenium Hubs** you add the different selenium hubs that you use for the current app. The users run the tests on the listed hubs. To add a new Selenium hub, click the **New** in the top bar:

![Edit Selenium hub dialog](attachments/project/selenium-hub.png)

In the "Edit Selenium Hub" dialog box, you set the following parameters:

| Field               | Description                              |
| ------------------- | ---------------------------------------- |
| Name                | The name of the Selenium hub.            |
| URL                 | The URL of the Selenium server.          |
| Custom Capabilities | Set the Selenium DesiredCapabilities (for more information, see the Selenium documentation). |

ATS automatically retrieves the parallel test session limit from the selenium hub. This limit is updated every 15 minutes. If ATS is not able to get the limit from the selenium hub, it is set to one single test execution at a time.  

### Execution log cleanup

ATS automatically deletes execution logs that are older than 90 days. Here you can change for how many days ATS keeps the execution logs. ATS keeps the execution logs at least for one day.

### Mendix API Key
The Mendix API Key is used to synchronize stories between sprintr and ATS.
You must set this key, otherwise you cannot use your user stories in ATS. Be aware, that after you have set the Mendix API Key, you won't be able to see it again. You can only set a new API key.

Visit [Authentication](../apidocs/authentication), for more information about where to find the API Keys of your Mendix app.

### CI/CD API key
The CI/CD API key is used to allow other systems or applications access to the ATS CI/CD API. Generating a new API key revokes access for any systems using the old API key. These systems are not able to access the ATS CI/CD API until they are updated with the new API key. Make sure to save the displayed API key in a secure place, as you cannot view it again in ATS. 

For more information about the CI/CD API visit the [CI/CD API section](cicd-api.md) of this documentation. 