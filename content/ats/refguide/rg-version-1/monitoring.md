---
title: "Monitoring"
parent: "rg-version-1"
---

## Test Results

The link Monitoring/Results shows you pending and most recent tests to review the results of test case or test suite runs. You can switch between both views via tabs.

![](attachments/monitoring/21168217.png)

Results allows to search previous test runs by

*   Result
*   Name
*   Browser
*   After date
*   Before date
*   Executed by

You can deep dive by each test run for further analysis by clicking on its name or _Rerun_ the test case.

![Result Log Page of a Test Suite](attachments/monitoring/21168218.png)

The _Result Log_ provides you more details about the test case in Test Steps, Screenshots and Error log tabs.

In tab _Test Steps_ you can deep dive by clicking the test step for each step in your test case.

![Result Log Screenshots Tab](attachments/monitoring/21168219.png)

Error log:

![Result Log Error Tab](attachments/monitoring/21168220.png)

## Running Tests

When building up or after finishing your test case, you want to run your test case in order to see if it works as intended.

The test case activities are executed based on the test step type. The test step type is used to control the execution flow of the activities execution. There are three types of test steps which are:

**Setup**

These are executed before starting the regular test run

**Regular**

Regular test steps

**Teardown**

Executed after the test run. If the test run fails because of an error these test steps are still executed.
