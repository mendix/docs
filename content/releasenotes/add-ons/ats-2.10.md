---
title: "2.10"
parent: "2"
---

## 2.10

**Release date: May 18th 2019**

### Alerting

Probably the most requested feature for some time now has been the option to receive alerts when a scheduled test is done. Starting with this release users can opt in to receive emails for schedules either always or only when they do not pass. The emails include: the result of the scheduled run, flags if present, a breakdown of the number of passed, not executed and failed test cases and additional information. Everyone can individually choose per app if they want to receive these alerts or not.


For all the details make sure to check the [ATS 2 Reference guide on schedules](./../../ats/refguide/rg-version-2/schedule.md).

### Better integration with Browserstack

After the great reception of the recording tab in ATS we decided to invest more time on integrating Browserstack and ATS by adding the following features:

On the side of Browserstack:
1. Different apps in ATS show up as different *Projects* in Browserstack. This is useful, if you use the same Browserstack account to test multiple apps.
2. When multiple test cases are executed in ATS as part of a test suite they are now also grouped in Browserstack under a *Build*. The build name is a concatenation of the test suite/test case name followed by the ATS job guid between two colons.
3. Individual test case executions in Browserstack, i.e. *Sessions* now correctly display the test case name instead of the job name. For test cases with an attached dataset, the test case name is suffixed with the index of the dataset record.
4. Test case executions in Browserstack now show the result from ATS.


![Browserstack-ATS integration](../../../ats/refguide/rg-version-2/attachments/results/browserstack.png)

<!-- Please comment the next line when moving to Mendix Docs -->
![Browserstack-ATS integration](../../refguide/rg-version-2/attachments/results/browserstack.png)  

On the ATS side:

5. We added a link to the selenium session in Browserstack for each test case that was executed in Browserstack. You can use this in case the recording video does not load in ATS or if you want to see the Browserstack logs. You can find the link under the *Recording* tab.
6. To make it easier to navigate from Browserstack to ATS we added options to look up a) jobs by the job guid, and b) individual test case logs by the Browserstack session id. Both can be found on the *Test Runs* page under the *Jobs* tab.

![Browserstack-ATS integration](../../../ats/refguide/rg-version-2/attachments/results/lookup.gif)

<!-- Please comment the next line when moving to Mendix Docs -->
![Browserstack-ATS integration](../../refguide/rg-version-2/attachments/results/lookup.gif)

Nomenclature:

| ATS              | Browserstack |
| ---              | ---          |
| App              | Project      |
| Job              | Build        |
| Single test case | Session      |

### Improvements

* The custom search dialogs for creating schedules and job templates have been replaced with the standard ATS search dialog.

* With the growth in popularity of ATS we see that people are creating bigger and bigger test suites which was putting stress on the ATS backend. Therefore we are releasing several optimizations on processing the results from a test run. We expect this to improve the performance for all users, but especially for users with large test suites. 


### Fixes

* When rerunning a failed test suite the configuration would default to the latest used for that test suite instead of the configuration that was used in the original run of the test suite. This is now fixed.
