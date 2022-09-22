---
title: "2.4"
url: /releasenotes/add-ons/ats-2.4/
weight: 96
---

## 2.4.1

**Release date: February 5th, 2018**

### Fixes

* It was not possible to import an item into a project when the parent folder of the item still existed in another project. This has been fixed.
* It was possible for an imported item to have a test step that referred to an item of another app. That is not possible anymore.
* During the import of some test data, the import failed due to an internal error. This has been fixed.

## 2.4.0

**Release date: January 24th, 2018**

### Improvements

* We've introduced categories for our built-in core actions. You will now find each in one of the following categories: **Widget/Set**, **Widget/Get**, **Widget/Assert**, **Widget/Find**, **Widget/Other**, **Mendix**, **Web**, **Mouse & Keyboard**, **Logic**, **Generators**. This change will help you to find the action that you need much faster.
* Based on the new core action categories, we've also redesigned the UI. Searching and selecting an action is now easier than ever before. Previously, we had a simple drop-down menu with an integrated search field. It was difficult if you didn't know what to search for. It was also not prepared to show a lot of results. Now, there is a full-height dialog box with lots of space. A nice tree structure shows all the data. Categories and sub-categories hold the core actions, and folders hold your custom actions. The dialog box also includes a lightning-fast search. If you know what you're looking for, start typing, and the tree filters with every key stroke. If you want to explore the full set of core actions, click the **Expand All** button and browse the full tree.
* We like consistency and ease of use. So, we decided to roll out the new **Search & Select** dialog box for other scenarios. Whether you want to add a test case to a test suite or connect a user story with a test case you'll see the same dialog.
* We've increased the number of execution logs that are shown in lists. We now show the first 50 instead of only the first 10. If you have a very large job, test case or test suite you no longer need t click the **Load more** button so many times.

### Fixes

* Test steps in actions or test cases didn't show conditional actions if they had no parameters. Only if the action had input parameters was it was shown in the test steps. This has been resolved.
* Recorded test steps are now saved back into the action or test case. In the recording screen, it was possible to click the save button twice. This resulted in disorganized steps in the originating action or test case.
* When editing the parameter values in a test step, it was possible to open a separate editing dialog box. This dialog box is supposed to be used only for constant values. However, that button was sometimes also shown for non-constants. This has been changed.
* Sometimes when jobs are not executed properly, they have no end date/time. As a result, they were stuck at the top of the list of jobs, which is sorted by end date. To work around this, these "broken" jobs now get a fixed end date after the application restart.
* When adding a test case to a story, it is also possible to create a new test case. You can then select another test case as a template and select **Create & Open**. However, this opened the template instead of the new test case. We've changed this so it opens the new test case instead.
* The scheduled deletion of jobs and logs resulted in many long-running server actions and slowed down the environment. The reason was the cascaded deletes in big jobs. We've improved this by deleting only small chunks. This doesn't impact server performance.
* The configuration for selenium hubs allows for the addition of custom capabilities. There was a bug that custom capabilities of the Boolean type could not have the value **false**. This has been fixed.
* In test cases and actions, you can extract multiple test steps into a new action. You define a name and description for the action, and a new step to call this action is automatically created. In the last step, we accidentally copied the description of the new action into the test step. We've removed this.
* When a test cases/suite was deleted, we did not properly update our stored statistics. As a consequence, the dashboard showed the wrong data for test suites.
* The **Click Widget** action didn't propagate failures properly. As a consequence, a test step that used this action was not marked as failed, even though the actual click was not successful. This has been fixed.
* The **Set Value** action could not be used to set an empty value. While the field was emptied in the UI, the actual value didn't change. We've fixed this.
* The **Get Validation Message** and **Assert Validation Message** actions were broken. They're now working again.

### Other Changes

* When you open ATS, you will now see a new screen that requests your approval to share your Mendix Profile information with the ATS application. Every user has to confirm this once per environment.

### Known Issues

* The grid that shows the jobs on the **Test Runs** page is refreshing every 3 seconds. This can result in a flickering on the highlighted row. If you try to click a button in the exact moment of the refresh, it won't work.
