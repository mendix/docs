---
title: "Monitoring"
url: /appstore/partner-solutions/ats/rg-one-monitoring/
---

## Test Results

The link Monitoring/Results shows you pending and most recent tests to review the results of test case or test suite runs. You can switch between both views via tabs.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/rg-one-monitoring/21168217.png" class="no-border" >}}

Results allows to search previous test runs by

* Result
* Name
* Browser
* After date
* Before date
* Executed by

You can deep dive by each test run for further analysis by clicking on its name or *Rerun* the test case.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/rg-one-monitoring/21168218.png" alt="Result Log Page of a Test Suite" class="no-border" >}}

The *Result Log* provides you more details about the test case in Test Steps, Screenshots and Error log tabs.

In tab *Test Steps* you can deep dive by clicking the test step for each step in your test case.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/rg-one-monitoring/21168219.png" alt="Result Log Screenshots Tab" class="no-border" >}}

Error log:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/rg-one-monitoring/21168220.png" alt="Result Log Error Tab" class="no-border" >}}

## Running Tests

When building up or after finishing your test case, you want to run your test case in order to see if it works as intended.

The test case activities are completed based on the test step type. The test step type is used to control the execution flow of the activities execution. There are three types of test steps which are:

**Setup**

These are completed before starting the regular test run

**Regular**

Regular test steps

**Teardown**

Completed after the test run. If the test run fails because of an error these test steps are still completed.
