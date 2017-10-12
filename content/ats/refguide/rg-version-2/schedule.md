---
title: "Schedule"
parent: "rg-version-2"
---

## Schedule

Scheduling allows to plan the execution of test cases and test suites at defined dates. You add test cases and test suites by clicking the respective button.

![Scheduler page](attachments/schedule/test-runs-schedules.png)

If you want to edit the schedule, click the **pencil** on the right side of the schedule. Clicking the **cross** will delete the schedule. To activate/deactivate a schedule, press the **box** in front of the schedule.

## New Schedule

The following schedule settings are available:

| Field              | Description                              |
| ------------------ | ---------------------------------------- |
| Active             | Activate/Deactivate the schedule         |
| Repeat             | Check to repeat the schedule after a set amount of time |
| After              | Set time when the schedule should be executed |
| Every              | Set the interval for the schedule repetition |
| Environment        | Set the environment on which the test should run |
| Selenium Hub       | Set the Selenium hub on which the test is executed |
| Browser            | Set the browser in which the test is run (Chrome or Firefox) |

## Platform

{{% alert type="info" %}}

This option is only available for supported Selenium hubs.

{{% /alert %}}

If you have selected a selenium hub from a supported selenium hub provider (TestingBot, SauceLabs or Browserstack), you will get access to the platform settings. Here you can set the operating system, on which the test case will be run on.

If you want to read more about the different supported operating system, read the [Supported selenium hub provider section](supported-selenium-hub-provider) of this documentation.

## Resolution

{{% alert type="info" %}}

This option is only available for supported Selenium hubs.

{{% /alert %}}

With this option, you can specify the screen resolution for your test run. A list of all supported screen resolutions can be found in the [Supported selenium hub provider section](supported-selenium-hub-provider) of this documentation.