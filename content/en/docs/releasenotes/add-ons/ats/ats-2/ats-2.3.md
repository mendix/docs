---
title: "2.3"
url: /releasenotes/add-ons/ats-2.3/
weight: 97
---

## 2.3.1

**Release date: December 5th, 2018**

### Improvements

* The support for Mendix 7.6 is no longer experimental. Furthermore, we added compatibility for Mendix 7.8. You can now test a Mendix application that you've created on Mendix 5.14.1 up to Mendix 7.8.
* ATS will now automatically detect and wait on many additional scenarios that are designated to block the execution of your tests:
  * The execution of asynchronous microflows with a non-blocking progress bar
  * The download of microflow result data (the objects returned from a microflow)
  * UI rendering changes (for example, with conditional visibility)

## 2.3.0

**Release date: November 29th, 2017**

### Improvements

* When editing a long action, test case, or test suite, the top-bar buttons were scrolled out of the screen. We've made the top-bar sticky so that it is always visible, even if you scroll down to your last test step. This makes editing a lot faster.
* We've added experimental support for apps that are running on Mendix 7.6. As there was a major change in the release of Mendix 7.6, we can not yet guarantee the same stability for your tests as on other Mendix versions. Thus, support for 7.6 is currently experimental.

### Fixes

* The test step type (setup/regular/teardown) was not refreshed when you dragged and dropped a test step. There is now a proper refresh after drag-and-drop if the type has changed.
* Adding a step in a test suite removed the order of all the steps. As a result, all the steps were randomly sorted. This is now fixed.
* Adding the first parameter or removing the last parameter of an action did not update the parameter section in the corresponding test steps. This is now fixed.
* When you cancelled a test suite job only the test suite itself was marked as cancelled. The content of the test suite was still marked as running. All test suites and test cases in the job are cancelled now, if they're still running or queued. Test cases/suites that had already finished before keep their result (passed or failed).
* The **Error log** tab was visible for failed test suites but never showed any logs. The tab is now invisible for test suites. Error logs can be found in the logs of test cases and actions only.
* The logic that checks for test suite loops sometimes returned true if though there was no loop. As a result, you couldn't execute some test suites. This is now fixed.
* The **Get Current DateTime String** action did not have proper documentation of the **Date Format** parameter. We've added the description to the parameter.
* Cancelling a job sometimes had the side-effect of manipulating the concurrent execution limit of a Selenium endpoint. As a consequence, ATS could attempt to run more concurrent tests than the endpoint actually supported. This side effect has been removed.
