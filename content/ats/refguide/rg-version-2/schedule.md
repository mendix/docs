---
title: "Schedule"
parent: "rg-version-2"
---

## 1 Schedule

Scheduling allows you to plan the execution of test cases and test suites at defined dates. You add test cases and test suites by clicking the respective button.

![](attachments/schedule/test-runs-schedules.png)

If you want to edit the schedule, click the pencil icon to the right of the schedule. Clicking the "X" icon will delete the schedule. To activate/deactivate a schedule, click the box in front of the schedule.

## 2 New Schedule

The following schedule settings are available:

| Field              | Description                              |
| ------------------ | ---------------------------------------- |
| Active             | Activate/deactivate the schedule.         |
| Repeat             | Check to repeat the schedule after a set amount of time. |
| After              | Set the time when the schedule should be executed. |
| Every              | Set the interval for the schedule repetition. |
| Environment        | Set the environment on which the test should run. |
| Selenium Hub       | Set the Selenium hub on which the test is executed. |
| Browser            | Set the browser in which the test is run (Chrome or Mozilla Firefox). |

## 3 Platform

{{% alert type="info" %}}

This option is only available for supported Selenium hubs.

{{% /alert %}}

If you have selected a Selenium hub from a supported Selenium hub provider (SauceLabs, or Browserstack), you will get access to the platform settings. Here you can set the operating system on which the test case will be run.

For more information on the different supported operating systems, see [Supported Selenium Hub Providers](supported-selenium-hub-provider).

## 4 Resolution

{{% alert type="info" %}}

This option is only available for supported Selenium hubs.

{{% /alert %}}

With this option, you can specify the screen resolution for your test run. A list of all the supported screen resolutions can be found in [Supported Selenium Hub Providers](supported-selenium-hub-provider).
