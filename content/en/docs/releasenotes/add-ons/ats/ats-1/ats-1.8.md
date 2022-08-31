---
title: "1.8"
url: /releasenotes/add-ons/ats-1.8/
weight: 98
---

## 1.8.8

**Release date: December 14th, 2017**

### Fixes

* We fixed a bug that sometimes caused an error when opening the test error logs. More specifically, if the error log contained HTML characters it caused issues with Mendix. HTML characters in the error messages are now correctly escaped and rendered as a string.
* We fixed an issue where some images were not displayed in cloud version v4.

## 1.8.7

**Release date: July 3rd, 2017**

### Fixes

* We fixed a bug where Mendix actions were not shown in the search results if there were more than 25 results.
* We fixed a bug where the error log was lost due to being too long. 
* We fixed a bug where the action **Set Value** could set a value on a read only widget.
* We fixed a bug where the statistics of **Passed** test cases was reported differently on the **Dashboard** as compared to the **My projects** page.

## 1.8.6

**Release date: June 2nd, 2017**

### New Action: Hover

* We added a new action, which will simulate the mouse hovering over a given web element. 

### ATS Helper

* ATS Helper now also works in Internet Explorer.
* ATS Helper will now show the Mendix name of more widgets, like the navigation list item and the search input field.

### Improvements

* We improved the login action so that it is more stable.
* We improved the **Find/Assert DataGrid Row** action. You can now search in three columns at once instead of just one.
* We improved the **Open** application action. It will now wait for sleeping sandbox apps to resume.
* Notifications and other pop-up messages are now disabled in Google Chrome, which has lead to ATS not finding covert elements.

### Fixes

* We fixed the bug for sandbox apps where the execution of a test case failed with the error "MTF not defined."
* We fixed the test result calculation on the dashboard where data-driven tests were not taken into account.
* We fixed the bug on the import of a test case where the parameter of a conditional action was mistakenly added to the regular action if the conditional action had a dataset field as the input parameter value. 
* We fixed the selection of applications and Selenium hubs for scheduled tests where it was possible to select an application or Selenium hub from another project.  

## 1.8.5

**Release date: February 24th, 2017**

### Compatibiliy with Mendix 7

ATS now supports testing the recently released Mendix 7.

### Improvements

* We improved the performance of the project dashboard. The loading time should now be much faster.
* We removed the log depth setting for schedules to avoid log flooding. The setting is still available for manual test runs.

### Fixes

* The error logs now show correct timestamps with the "UTC" suffix.
* We fixed two scenarios in which the results of data-driven test cases were not counted correctly on the dashboard and in the report.
* We fixed a bug on the project dashboard where the **Show log** button would not show the correct execution log for a data-driven test case.
* We fixed a bug on the project dashboard where the **Show log** button would not show the execution log for test suites.
* We fixed the PDF report generation on the project dashboard, which crashed when the descriptions in test cases/suites were too long.
* We fixed the bug in the repository where it wasn't possible to add multiple items one after another because the "add item" function would work only once.
* We added a validation for test cases to prevent empty names.
* We added a validation to schedules so that you can't save a schedule without selecting your Selenium server.
* We removed the naming restriction on projects so that projects in different tenants can have the same name.

## 1.8.4

**Release date: February 1st, 2017**

### New Action

* We added a new action to click an x-y coordinate within the browser window or a certain UI element. For more details, see [Click Coordinates](/addons/ats-addon/rg-one-click-coordinates/) in the ATS Reference Guide 1.

### Improvements

* We improved the sorting of scheduler items. The items are now shown in order of next execution time. The top item is the one that is executed next.
* We added a new warning icon on the **Monitoring/Results** page that indicates a failure in the tear down procedure of a test.

### Fixes

* We fixed a bug where the dialog box to link a story to a test case was not closed properly.
* If you configured a dataset with more than 30 fields for your test case, only the first 30 fields could be used due to a UI bug. This has been fixed.
* A change of the project name now also updates the root folder in the repository.
* We fixed the bug where users were able to select Selenium configurations and applications from other projects in the test run configuration.
* We fixed the bug where the chart on the project selection page did not show the same results as the chart on the project dashboard.     
* The **Show Log** link on the project dashboard is now hidden for tests that have never been executed.
* We fixed the bug where test cases were added in the wrong order to an empty test suite.

## 1.8.3

**Release date: December 19th, 2016**

### Improvements

* Added a function for the System Administrator role to delete old execution logs from the database.

## 1.8.2

**Release date: December 13th, 2016**

### Fixes

* Fixed a bug where a data-driven test case within a test suite was not executed and prevented the test suite from finishing.

## 1.8.1

**Release date: November 7th, 2016**

### Fixes

* Fixed the bug where the **View Project** button on the dashboard returned an error message.

## 1.8.0

**Release date: November 6th, 2016**

### Supporting Mendix Marketplace Widgets

Everybody uses widgets from the Mendix Marketplace in their applications. And of course you want them to be tested like all other parts of your application. Now they can be tested.

We've selected the top widgets from the Marketplace and added support for testing with ATS.

These are the new widgets now supported by ATS:

* [Dropdown Div Converter](https://marketplace.mendix.com/link/component/2089/Mendix/DropdownDivConverter)
* [OnChange Inputbox/Textarea](https://marketplace.mendix.com/link/component/89/Mendix/OnChange-Inputbox)
* [Boolean Slider](https://marketplace.mendix.com/link/component/1798/Mendix/Boolean-Slider)
* [Simple Checkbox Set Selector](https://marketplace.mendix.com/link/component/2349/Mendix/Simple-Checkbox-Set-Selector)
* [Checkbox Set Selector](/appstore/widgets/check-box-set-selector/)
* [Grid Selector](https://marketplace.mendix.com/link/component/266)
* [Input Reference Selector](https://marketplace.mendix.com/link/component/99/Mendix/Input-Reference-Selector) (not supported in recording yet)
* [CKEditor](https://marketplace.mendix.com/link/component/1715/Mendix/CKEditor-For-Mendix) (not supported in recording yet)
* [Bootstrap Wysiwyg Editor](https://marketplace.mendix.com/link/component/902/Mendix/Bootstrap-Wysiwyg-Editor) (not supported in recording yet)

The [Action Reference Guide](/addons/ats-addon/rg-one-std-actions-ref/) lists the new actions.

### Action Reference Guide and Tutorial

If you use a widget that is not supported by ATS, you can help yourself and create your own actions. To help you with this, we now provide a Tutorial that explains how to create an action based on the example of the Boolean Slider widget.

We've also documented all our actions in a [Reference Guide](/addons/ats-addon/rg-one-std-actions-ref/). It describes all the actions that you can use in your test cases. In addition to that, it also references the internal actions that are very helpful if you want to create your own actions.

### Improved Recording

We've improved the recording functionality to get rid of some unwanted recordings. Previously the recorder would also record a test step when you clicked elements like a table or a dataview. With this release, this does not happen anymore.

### Known Issue

Unfortunately recording for the Input Reference Selector, CKEditor, and Bootstrap Wysiwyg Editor is not possible yet. However, the widgets can still be tested by manually inserting the actions into your test case.
