---
title: "2.9"
url: /releasenotes/add-ons/ats-2.9/
weight: 91
---

## 2.9.5 

**Release date: February 12th, 2019**

### Support for Mendix 7.22.2

Mendix applications that are based on [Mendix version 7.22.2](/releasenotes/studio-pro/7.22/) can now be recorded and tested with ATS.

### Improvements

* We added support for [authentication widgets](/refguide7/authentication-widgets/). Login pages built with authentication widgets can now be recorded and tested with ATS.
* We added support for clicking on [static images](/refguide7/static-image-document-template/). Clicks on images can now be recorded and tested with ATS.

### Fixes

* We fixed an issue where a click was not be recorded on some buttons in Mendix versions 7.18+.
* In rare cases under a very high testing load, jobs got stuck in the queued status. We have added additional checks to prevent this from happening.
* In some scenarios, the **Recordings** tab was not available in ATS. We addressed this issue by changing the way recordings are retrieved.
* We fixed a UI issue where double-clicking on an item in an ATS repository showed a generic error message.

## 2.9.4

**Release date: December 4th, 2018**

### Improvements

* We have added the option to refresh the app roles from the App Settings page. After clicking the refresh button, the app roles for all users currently in the current app will be queried from the Mendix Developer Portal and updated in ATS, according to the standard rules for updating roles in ATS. Users who no longer have access to the corresponding project in the Developer Portal will be removed from the app. New members of an app in the Developer Portal have to log in to ATS and accept the terms and conditions before they can become members of an app in ATS.
* We have continued optimize how tests results are processed in ATS. We expect that this will reduce the delay in seeing the results for a test.

### (Potentially) Breaking change

Due to complaints about flaky tests that were caused by long on-change change microflows (>500 ms), we have decided to change the behavior of the **Set Value** function. 

In previous versions, the Set Value function typed in a value in an input field and kept the focus on the field. Therefore, the on-change and on-leave microflows were not triggered until a later test step, where another element on the page was focused (for example, via a click). This was done deliberately, as we felt that it was natural user behavior (as in, keeping the focus until an interaction occurs with another element on the page).

Since ATS version 2.9.4, the Set Value function unfocuses the widget after setting the value and waits for the on-change and on-leave microflows to finish before proceeding with the next steps in a test case. We hope that this makes tests more stable when on-change microflows are used, since the wait ensures that such microflows have finished executing before proceeding with the test.

We do not expect this change to cause any issues with existing tests. However, if you notice strage behavior related to the Set Value function after the update, please inform us by submiting a Support ticket.

## 2.9.3

**Release date: October 15th, 2018**

### Improvements

* We have optimized the way dataset records are stored for executed data-driven test cases. We expect this will improve the performance of processing the results for data-driven test cases.
* We have refactored the code for fetching video recordings, making the recordings available sooner in ATS.

### Fixes

* Due to a bug, it was possible to change the name of an item (meaning, an action, test case, or test suite) to be not-unique. This resulted in a generic error message and a partially changed name in the UI. This is now fixed and a proper validation message is shown when changing the name. As a consequence, it is no longer possible to edit the name of an item inline. Instead, this is done in a dialog box with the standard save and cancel options.
* The formatting of the job duration was incorrect when the duration was larger than one hour. This is now fixed.
* Due to a bug, it was not possible to extract an action if the a multiple output parameters from previous steps were used in the extracted action. This is now fixed.
* We discovered unexpected behavior in the function **Find/assert data grid row** where the function still returned a result even if a required parameter (meaning, a column name or value) was left. Changing the behavior of the function would potentially break many test cases. Instead, we changed the description of the function to match this behavior. In addition, all the column name and value parameters for this function have been made optional. If no column name/value pair is specified, then the first row is returned. To sum up, functionally nothing has been changed, only the description has been updated.

## 2.9.2

**Release date: August 21st, 2018**

### Mendix 7.17

Mendix applications that are based on Mendix version 7.17 can now be tested and recorded with ATS.

### Fixes

* We fixed an issue where it was possible to create two keywords with the same name within the same folder. This occurred when using the extract action. This is now fixed, so attempting to save a keyword with a name that already exists triggers a proper validation.
* When generating a PDF report for a set of selected items, some nested test cases were not correctly added to the report, resulting in incorrect values for the doughnut chart. This is now fixed.
* When running a test suite that contains other nested test suites, the result for the corresponding job on the **Test runs** page showed no result, even when the job had finished. This also caused the CI/CD to return incorrect values for such jobs. This is now fixed. 
* We fixed an issue where changing the name of an output parameter for a custom action cleared references to that output parameter in test cases where it was used.
* When jobs that were initiated via the API were canceled, the job result was set as passed. This is now fixed, and canceled jobs always return failed as result. 

## 2.9.1

**Release date: August 9th, 2018**

### Fixes

* We fixed an issue where new projects from the Mendix Developer Portal were not synched to ATS.

## 2.9.0

**Release date: July 10th, 2018**

### Improvements

#### No Access App Role

It is now possible to specify that certain members of a project in the Developer Portal do not get any access to a project in ATS. This can be configured by app administrators from the **App settings**. Members of an app that have the **No access** role will not see this app in their **My apps** page and will not be able to view, edit, and run test cases from this app. 

{{% alert color="info" %}}

Scrum Masters in the Developer Portal always keep the administrator role in ATS.

{{% /alert %}}  

#### Default App Role

We have implemented a functionality to set a default role per app. This role will be applied to the new members of an app. The default role can be changed by app administrators in **App settings**. 

{{% alert color="info" %}}

Scrum Masters in the Developer Portal get an administrator role in ATS even if the default role is set to **No access** or **Tester**.

{{% /alert %}}  

### On-Premises

We are reintroducing **On-Premises** as a deployment option for ATS. At this point we have introduced a new user role **Tenant administrator** which will only be used in on-premises instances of ATS. The tenant administrator will be able to create and edit accounts and apps. 

For more details on tenant administration, see [Administration](/addons/ats-addon/rg-two-administration/) in *ATS 2 Reference Guide*.

### Mendix 7.16

Mendix applications based on Mendix version 7.16 can now be tested and recorded with ATS.

### Fixes

* We fixed the issue where it was not possible to export documentation for test cases/suites with a description longer than 200 characters
* We fixed the issue that occurred in version 2.8, where clicking a button that triggered an asynchronous microflows after a confirmation dialog would cause a _Timeout exception while waiting the application to be idle_ 

### Limitations

* For Mendix versions 7.13 and above it is likely that test will not properly wait for the execution of asynchronous microflows. As a temporary workaround please manually add the **Sleep** step with a proper duration after triggering asynchronous microflows.
* We did not explicitly test the impact of nanoflows on ATS, but we have not yet received any issue reports related to them
