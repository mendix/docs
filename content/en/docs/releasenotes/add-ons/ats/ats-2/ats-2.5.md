---
title: "2.5"
url: /releasenotes/add-ons/ats-2.5/
weight: 95
---

## 2.5.0

**Release date: March 8th, 2018**

### Functions

Core actions lie at the heart of ATS. They enable testers to interact with Mendix widgets without having to worry about the internal structures and functions of the widgets. Naturally, we are constantly looking for ways to improve our core actions. In that regard, we are happy to announce that we designed and developed a completely new architecture for core actions. Because this new architecture is very different from the way actions were implemented in the past, we decided to rename core actions to **functions** to make the distinction clearer. The new function architecture will enable us to write functions that are smarter than their core action counterparts. This change is completely in the back end (meaning, "under the hood"), so you do not have to change anything in the way you are using ATS in order to benefit from the new architecture.

This opens up a lot exciting possibilities for us as ATS developers. For example, we were able to write *context-aware* Get/Set Value functions. Previously, the corresponding core actions could only handle a few widgets. The new functions, on the contrary, support much more widgets, such as the Boolean slider widget, Bootstrap WYSIWYG editor, CKEditor, input reference selector, date picker, and radio button list. Furthermore, with the new architecture, functions should be more stable and more reliable. For a detailed list of the updated functions make sure to check the [ATS Reference Guide](/addons/ats-addon/rg-two-ats/). In the future, we plan to utilize the new architecture to bring you even more improvements to the functions.

### Improvements

* We added support for Mendix 7.10. You can now test a Mendix application that you've created on Mendix 5.14.1 up to Mendix 7.10.

### Fixes

* When you had a data-driven test case, a bug was preventing the usage of dataset fields as input parameters of assert actions. This is now fixed.
* The PDF report still showed the result category **Unknown**, which was removed from the dashboard some time ago. To keep the reporting consistent between the dashboard and the PDF, we removed the category Unknown from the PDF report as well.
* Under rare circumstances, the test suite results progress bar (shown on the dashboard) turned green, even though the percentage of passed test cases was below 100%. This is now fixed, and the progress bar will only be green if the percentage of past cases is exactly 100%.
* When recording the **Click Widget button** action (which is used to click special list view, template grid, and data grid buttons such as search, clear, reset, etc.), the recorded action did not save the information about which button was clicked in the test step. This is now fixed.
* Moving items from one project to another was not possible if the items' parent folder(s) still existed in another app. This is now possible. Please note that although importing items that already exist in another app is not allowed, you can circumvent this by, for example, copying a test case from app A, exporting the copy from app A, deleting the copy from app A, then importing the copy into app B.
* In some rare circumstances, importing a complex test set failed due to an internal error. This is now fixed.
* Exporting items that contained empty test steps (for example, a test step was added but no action was selected for the test step) was not possible. Items with empty test steps can now be exported.
* A validation check was missing that allowed users to execute a test case with a dataset that has no records. This execution was followed by an error that did not provide much information to end-users. We added an extra validation check and improved the message that the user sees.
* While working on a test case, when you added a test step manually after a teardown step, it got the wrong step number and the wrong step type (by default, this should be teardown). This is now fixed.
* When you related a dataset to a test case that was previously related to a non-existing dataset, an error message was shown that falsely informed the user that "the old dataset could not be found." Closing and reopening the test case eliminated the error. We fixed this, so now you do not have to close and reopen the test case to get rid of the error message anymore.
* The application UI got generally slower if you used the app for longer periods of time without refreshing your browser tab. We made several improvements related to the performance of the application's UI to improve this.

### Other Changes

* When you open ATS, you will now see a new screen that requests your approval to share your Mendix Profile information with the ATS application. Every user has to confirm in order to continue using ATS. This needs to be done only once.
* On the dashboard report, we have changed the way the success rate is displayed. The success rate was previously displayed as percentages (from 0-100), but we replaced this with the exact numbers of **successfully executed test cases/total test cases**. For example, if a test suite has 10 test cases, of which 8 pass, previously this was displayed as "80 %", while now it is displayed as "8/10".

### Known Issues

* The grid that shows the jobs on the **Test Runs** page is refreshing every 3 seconds. This can result in flickering on the highlighted row . If you try to click a button in the exact moment of the refresh, it w will not work. The effect is more pronounced on slower computers that take longer to render the refreshed data.
