---
title: "2.1"
url: /releasenotes/add-ons/ats-2.1/
weight: 99
---

## 2.1.0

**Release date: October 27th, 2017**

### Performance

We saw decreasing performance in some parts of the UI when you had a lot of data, so we took immediate action. We've analyzed and significantly improved performance on the following screens:

* **Test case edit**
* **Action edit**
* **Repository**

### Improvements

* Helping new users to get on board is important. We've added instructions on some screens to help you onboard your app in ATS.
* There is a very powerful search function in the repository. Yet, it was not possible to use the standard copy, cut, or delete buttons on the search results. These buttons are now available.
* Configuring a Selenium provider is one of the few things you need to do before getting started. To make this step smoother, we've introduced different screens for each provider type. Whether it's Browserstack, Sauce Labs, or Testingbot, we'll explain what information is needed and where to find it.

### Fixes

* Due to the speed of the new test runner, we faced some race conditions in the execution of test cases. The result was test cases that failed when they should have passed. We've improved the test runner to make tests more reliable.
* A **Go back** button was missing on some screens. It's no longer missing.
* It was not possible to open a job that had no log because it was never executed. This is now possible.
* We've removed the **Apps** link in the breadcrumb, as it is no longer required.
* When you used the **Extract Action** twice in a row, the extracted actions got mixed up. We've fixed this. Extracting actions is safe again.
* The validations for new datasets were not good enough. It was possible to not set a name and leave out the template file. There's now proper validation on this dialog.
* The import functionality suffered from a timeout when there was a lot of data to process. This is now fixed, and you can also import also large sets of data.
* Jobs that were triggered by the scheduler or via API had no proper status while being in the queue. This is now fixed.
* The search results in the repository sometimes disappeared after a second. This no longer happens.
* When adding a precondition to a test step, the description of the step was emptied. This has been fixed.
* When adding a test case or test suite from a story, it was not possible to set a description. It is now possible to edit the description field.
* When a user ran a test case with a reference to a deleted dataset, an incorrect error message was returned. The new error message will tell the user what actually happened.
* The dashboard statistics of imported test cases and test suites was not correct. As a result, the dashboard may have shown the wrong data. This has been fixed.
