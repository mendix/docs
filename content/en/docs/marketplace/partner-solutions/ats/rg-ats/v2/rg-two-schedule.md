---
title: "Schedule"
url: /appstore/partner-solutions/ats/rg-two-schedule/
---

## Schedule

Scheduling allows you to plan the execution of test cases and test suites at defined dates. You can also choose to send alerts when a scheduled run is done.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-schedule/schedules_tab_with_alerting.png" class="no-border" >}}

If you want to edit the schedule, click **Edit** ({{% icon name="pencil" %}}) to the right of the schedule. Clicking **Delete** ({{% icon name="remove" %}}) will delete the schedule. To activate/deactivate a schedule, click the box in front of the schedule.

## New/Edit Schedule

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
| Send alerts        | Set whether to send email alerts when a schedule run is done. Off by default. |
| Send alerts when passed | Set whether to send alerts when a schedule run is passed. Off by default. |

## Platform

{{% alert color="info" %}}
This option is only available for supported Selenium hubs.
{{% /alert %}}

If you have selected a Selenium hub from a supported Selenium hub provider (SauceLabs or BrowserStack), you will get access to the platform settings. Here you can set the operating system on which the test case will be run.

For more information on the different supported operating systems, see [Supported Selenium Hub Providers](/appstore/partner-solutions/ats/rg-two-supported-selenium-hub-provider/).

## Resolution

{{% alert color="info" %}}
This option is only available for supported Selenium hubs.
{{% /alert %}}

With this option, you can specify the screen resolution for your test run. A list of all the supported screen resolutions can be found in [Supported Selenium Hub Providers](/appstore/partner-solutions/ats/rg-two-supported-selenium-hub-provider/).

## Alerts

Alerts are sent only to users who have subscribed using the email from their Mendix account. Subscription is per app.

By default, alerts are disabled. If you enable alerts for a schedule, then by default an alert will only be sent if the scheduled run is not passed. You can change this behavior per schedule so that an alert is sent always, regardless of the result.

To subscribe to alerts, click the **Subscribe** link under the **Schedules** tab. You will receive an email with a one-time subscription link (make sure to check your spam folder if necessary). After clicking the link, you will be subscribed to receive alerts for the current app. 

To unsubscribe, click the **Unsubscribe** link under the **Schedules** tab. Alternatively, each alert email has an embedded unsubscribe link that you can also use.

In order to avoid spam, the maximum number of emails that can be sent per app per day is limited to **40**.
