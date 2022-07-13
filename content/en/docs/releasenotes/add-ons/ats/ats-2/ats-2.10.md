---
title: "2.10"
url: /releasenotes/add-ons/ats-2.10/
weight: 90
---

## 2.10.0

**Release date: May 18th 2019**

### Alerting Improvements

The option to receive alerts when a scheduled test is done is a feature that received a lot of requests. Starting with this release, you can opt in to receive emails for schedules either always or only when they do not pass. The emails include the result of the scheduled run; flags (if present); a breakdown of the number of passed, not-executed, and failed test cases; and additional information. You can individually choose per app if you want to receive these alerts or not.

For more details, see [Schedules](/addons/ats-addon/rg-two-schedule/) in the *ATS 2 Reference Guide*.


### Better Integration with Browserstack

After the great reception of the **Recording** tab in ATS, we decided to invest more time into integrating Browserstack and ATS by adding the features described below.

These are the new features on Browserstack side:

* Different apps in ATS show up as different **Projects** in Browserstack. This is useful, if you use the same Browserstack account to test multiple apps.
* When multiple test cases are executed in ATS as part of a test suite, they are now also grouped in Browserstack under a **Build**. The build name is a concatenation of the test suite/test case name followed by the ATS job GUID between two colons.
* Individual test case executions in Browserstack (meaning, **Sessions**) now correctly display the test case name instead of the job name. For test cases with an attached dataset, the test case name is suffixed with the index of the dataset record.
* Test case executions in Browserstack now show the result from ATS.

  {{< figure src="/attachments/releasenotes/add-ons/ats/ats-2/ats-2.10/browserstack.png" alt="Browserstack-ATS integration" >}}

These are the new features on the ATS side:

* We added a link to the Selenium session in Browserstack for each test case that was executed in Browserstack. You can use this in case the recording video does not load in ATS or if you want to see the Browserstack logs. You can find the link under the **Recording** tab.
* To make it easier to navigate from Browserstack to ATS, we added options to look up jobs by the job GUID as well as individual test case logs by the Browserstack session ID. Both can be found on the **Test Runs** page under the **Jobs** tab.

{{< figure src="/attachments/releasenotes/add-ons/ats/ats-2/ats-2.10/lookup.gif" alt="Browserstack-ATS integration" >}}

This table compares the nomenclature:


| ATS              | Browserstack |
| ---              | ---          |
| App              | Project      |
| Job              | Build        |
| Single test case | Session      |

### Other Improvements

* The custom search dialog boxes for creating schedules and job templates have been replaced with the standard ATS search dialog box.
* With the growth in popularity of ATS, we see that users are creating bigger test suites, which was putting stress on the ATS back end. Therefore, we are releasing several optimizations for processing the results from a test run. We expect this to improve performance for all users, but especially for users with large test suites. 

### Fixes

* When re-running a failed test suite, the configuration would default to the latest used for that test suite, instead of to the configuration that was used in the original run of the test suite. This is now fixed.
