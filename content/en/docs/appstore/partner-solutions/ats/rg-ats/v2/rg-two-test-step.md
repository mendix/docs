---
title: "Test Step"
url: /appstore/partner-solutions/ats/rg-two-test-step/
---

## Introduction

Test steps are the heart and soul of a test case. They describe a sequence of [actions](/appstore/partner-solutions/ats/rg-two-action/) that ATS performs during the execution of a test case.

When you create a new test case, it is empty by default. You must add test steps to it. For more information on how to add a test step to a test case, see [Test Case](/appstore/partner-solutions/ats/rg-two-test-case/).

To see the details of a test step, click the name of the test step. The details will open below the test step.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-step/test-step-details.png" class="no-border" >}}

## Description

Every test step has a description box, where you give your test step a clear description.

By default, the name of the test step is the name of the action used in it. But if you set a description, it replaces the test step name. With this, you describe your test scenario step by step. Now you don't have to write an extra description.

If you record your test steps, ATS enters a description automatically. For more information about recording test steps, see [Recorder](/appstore/partner-solutions/ats/rg-two-recorder/).

## Call Types

Call types define the order of the test step and how they affect the final result.

In ATS, there are three different call types, which are described below.

### Setup

ATS moves the test steps with the Setup call type to the start of the test case automatically. ATS uses the Setup steps to get to the actual test scenario. For example: **Open application > Login as user**.

Only set a test step to Setup if it is not part of your actual test scenario.

If a Setup test step fails, the test stops and the result is set to **not executed**.

### Regular

Regular test steps are the flesh and bone of your test case. They cover the main functionality of the test scenario. If a Regular test step fails, the test stops immediately and the result is set to **failed**.

### Teardown

Teardown test steps are automatically moved to the end of a test. They must be used to undo the changes your test case made in the application. Failing Teardown test steps do not affect the result of a test case.

## Action Parameter {#action-parameter}

Action parameters are the input parameters of the selected test step action. ATS marks the required input parameter with an asterisk and writes them in bold.

You set the value for the parameter by typing the name of a variable or constant in the parameter input box.

ATS provides you with suggestions for the parameter value.

For primitive parameter types like Text or Number, you set the input value by typing the desired value in the input box.

{{% alert color="info" %}}
Parameters of the Number type only allow digits as inputs.
{{% /alert %}}

Another way of setting the parameter value is to use the **Edit Input Value** dialog box. To open the dialog box, click the ({{% icon name="search" %}}) icon.

This dialog box shows you all the available input values for the parameter.

## Precondition

When you check the precondition box, you select an action that counts as a precondition for that test step.

According to the result of the precondition action, ATS skips or executes the test step. In other words, if the precondition action fails, ATS does not execute the test step. If the precondition action passes, ATS executes the test step.

The result of a precondition action will not affect the end result of a test case. It is only used to determine if ATS must execute a test step.
