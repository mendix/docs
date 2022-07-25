---
title: "2.6"
url: /releasenotes/add-ons/ats-2.6/
weight: 94
---

## 2.6.1

**Release date: April 5th, 2018**

### Fixes

* Due to a bug, it was not possible to create parameters of the type "Drop-Down" for custom actions anymore. This is now fixed.

## 2.6.0

**Release date: March 27th, 2018**

### Selective Reporting

We know that the ability to generate reports is important in order to get an overview of software quality. This is why we are always looking for ways to improve the reporting capabilities of ATS. Starting with this release, it is now possible to configure a custom report that only contains the test cases and/or test suites that you want to be part of the report. This functionality is available through the dashboard, by clicking **Download report**, which opens a dialog box with two options for reporting: **All** and **Selected**. If you select **All**, the PDF report will contain all the test cases and suites in the project (this is the same as the default behavior until now). If you select **Selected**, then you can customize the report by specifying which test cases, test suites, and folders should be included in the report. 

### Upgraded Selenium Version and Support for Newer Browser Versions

In order to add support for newer browser version, we upgraded the ATS selenium drivers from version 2.53.0 to version 3.8.1. For the supported providers (Browserstack, Saucelabs, and Testingbot), we set 3.8.1 as the Selenium version. However, if you have an on-premises Selenium grid, we advise you to update it to Selenium version 3.8.1. We also upgraded ATS with support for Chrome version 64 and Firefox version 58, which are now the officially supported browser versions. For more information on supported provider, platform, and browser combinations, see [Compatibility Table](/addons/ats-addon/rg-two-provider_platform_browser_compatiblitiy_table/) in the ATS Reference Guide.

### Internet Explorer 11

You can now run ATS tests against Internet Explorer 11. We are happy to announce that, because Internet Explorer is still one of the most used browsers and is even more important when looking at enterprise businesses. Internet Explorer 11 is supported for Windows 7, Windows 8.1, and Windows 10.

### Mendix 7.11 & 7.12

Mendix applications built on Mendix versions 7.11 or 7.12 can now be tested and recorded with ATS. We have not explicitly tested the impact of nanoflows (the newest feature added in Mendix 7.12) on ATS, but we do not expect any significant problems here.

### Improvements

* You can now see the description of a parameter when hovering over the parameter name in an action or function call.
* We added support for the Radiobutton List widget and for the Input Reference Set Selector widget. They can be recorded as well as tested with the standard ATS function.
* We now support the newest macOS version: macOS High Sierra.
* You can now select multiple items in the search dialog box by holding down <kbd>Ctrl</kbd> while clicking the items. This is possible when you are adding a test case/suite to a test suite, adding test cases/suites to a story, and adding stories to a test case/suite.
* A parameter of the text type now also shows the edit icon when it is empty.

### Fixes

* The icons of a test case and a test suite were interchanged at the schedules overview. This is fixed now.
* We fixed the issue where the execution type (serial/parallel) of a test suite was always set to serial during the import.
* The drop-down values of a parameter of a custom action were not being created during import when not a single drop-down value was in use. This has been fixed.
* The color of test case that was not executed was different in the PDF report and on the project dashboard. This has been fixed.
* ATS will now wait for the login process to be finished (on dynamic login pages as well) before continuing with the next step.
* We fixed the **Unfocus Web Element** function.
* We removed the second set value action from the search dialog box when you are adding a new test step to a test case or action.
* We fixed the issue that sometimes set the selected values in a function/action call to empty when adding a new step to the test case or action.
* Data-driven test cases can now also be executed also when the dataset contains an empty number. This previously worked only for empty text fields.
* Custom actions did not work when used as a pre-condition for a test step. This has been fixed.
* A recorded login action was not working when executed because of an incorrect password. We fixed that.
* Recording the login step did not capture the password properly, so it had to be set again after recording. Also, the login via Mendix SSO (MxID) was not recorded. Both issues have been been fixed.
* The **Find Element by ID** function did not work in ATS 2.5. This has been fixed.

### Limitations

* When you click **Download** on the newly added **Download report** dialog box before the doughnut chart has finished rendering, the chart will not be shown in the PDF. 
