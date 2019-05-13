---
title: "2.10"
parent: "2"
---

## 2.10

**Release date: May 14th 2019**

### Alerting

The option to receive alerts when a scheduled test is done has been a much requested feature for some time now. With this release, you can opt to receive emails for schedules either always or only when they do not pass. The emails include: the result of the scheduled run; flags (if present); a breakdown of the number of passed tests as well as not-executed and failed test cases; and additional information. You can individually choose per app if you want to receive these alerts.

For more details, see [Schedule](/ats/refguide/rg-version-2/schedule) in the *ATS 2 Reference Guide*.

### Better Integration with Browserstack

After the great reception of the **Recording** tab in ATS, we decided to invest more time into integrating Browserstack and ATS by adding the features described below.

On the Browserstack side, we added the following features:

* Different apps in ATS show up as different **Projects** in Browserstack. This is useful if you are using the same Browserstack account to test multiple apps.
* When multiple test cases are executed in ATS as part of a test suite, they are now also grouped in Browserstack under a *Build*. The build name is a concatenation of the test suite/test case name followed by the ATS job GUID between two colons.
* For individual test case executions in Browserstack, **Sessions** now correctly displays the test case name instead of the job name. For test cases with an attached dataset, the test case name is suffixed with the index of the dataset record.
* Test case executions in Browserstack now show the result from ATS.

![Browserstack-ATS integration](attachments/results/browserstack.png)

On the ATS side, we added the following features:

* A link now exists to the Selenium session in Browserstack for each test case that was executed in Browserstack. You can use this in case the recording video does not load in ATS, or if you want to see the Browserstack logs. You can find the link under the **Recording** tab.
* To make it easier to navigate from Browserstack to ATS, we added options to look up jobs by the job GUID and by the individual test case logs via the Browserstack session ID. Both options can be found on the **Test Runs** page under the **Jobs** tab.

![Browserstack-ATS integration](attachments/results/lookup.gif)

Nomenclature:

| ATS              | Browserstack |
| ---              | ---          |
| App              | Project      |
| Job              | Build        |
| Single test case | Session      |

### Improvements

* The custom search dialog boxes for creating schedules and job templates have been replaced with the standard ATS search dialog box.
* With the growth in popularity of ATS, we see that people are creating larger test suites, which was putting stress on the ATS back-end. Therefore, we are releasing several optimizations for processing the results from a test run. We expect this to improve the performance for all users, especially for users with large test suites. 

### Fixes

* When re-running a failed test suite, the configuration defaulted to the latest used for that test suite, instead of to the configuration that was used in the original run of the test suite. This is now fixed.
