---
title: "Test Run"
url: /addons/ats-addon/rg-two-test-run/
---

## 1 Introduction

There are multiple ways to run an existing test:

* Click the play icon on the right side of the test item in the repository
* Click the **Run** button on the test edit form
* Click the play icon on the right side of the test result under **Results**
* Click the **Run** button after opening the result log

Before a test is run, the **Job Configuration** page opens. For every test run, a new job is created. For details on the different options you can set for running a test, see [Job Configuration](/addons/ats-addon/rg-two-test-run-configuration/).

You can also cancel a running job by pressing **Cancel** in the corresponding line on the test run page. This immediately cancels the job and interrupts all the running test steps.

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-test-run/job-cancel.png" >}}

## 2 Special Behavior 

This section presents descriptions of special situations for test case runs and the outcoming results of them.

### 2.1 Setting an Integer as Input for a Text Box

Inputs for text boxes are always interpreted as text. This means that the integer is converted into a string.

### 2.2 Trying to Run a Test Case with an Empty Step

In the current version of ATS, test steps without an action lead to failing test results.

### 2.3 Running an Empty Test Case or Test Suite

Empty test cases run and lead to a successfull test results.

Empty test suites run and are shown in the pending tests overview, but the result is not saved.

### 2.4 Running a Test Case Including an Action Without Required Input Parameters

The test case runs until the action with the missing input parameter is executed. ATS searches for the input parameter and will not find it. This results in the following error:

*Cannot resolve value for required parameter {parameter name}. Value wasn't found on stack.*

The final result of the test case is `failed`.
