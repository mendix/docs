---
title: "2.20"
url: /releasenotes/add-ons/ats-2.20/
weight: 80
---

## 2.20.1

**Release date: August 24th, 2020**

### Fixes

* We fixed a bug where running a test case for the first time showed a message to select a Selenium hub instead of pre-selecting the default Selenium hub.
* Due to a bug, if an error occurred while starting a job, a generic error was thrown instead of collecting the error as part of the job log. This is now fixed.

## 2.20.0

**Release date: August 17th, 2020**

### Built-in Selenium (Preview)

One of the biggest hurdles when starting with ATS is setting up a Selenium instance. Finally, we are now offering this out-of the box. Every enteprise licensed app will include a pre-configured Selenium hub for free that can run up to three parallel sesions (one session for single-app licenses). Please note that this is a preview feature, and the main goal is to gather feedback before it is officially released and is subject to change without notice.

### Live View (Preview)

When using the built-in Selenium, we now provide a live view of the running Selenium sessions in ATS. Use this to monitor how your test is progressing in real time.

### Start Testing Faster

The main goal of ATS is to test your Mendix application. Therefore, with this release, we tried to reduce any the extra configuration around running tests.

#### Fetch Environment Information from the Developer Portal

ATS now fetches information such as the name and URL of existing app environments for an app from the [Developer Portal](/developerportal/).

To distinguish these environments from ones that are manually managed, the name is suffixed with `(Sprintr)` and an additional flag is added.

These environments are not editable and will be updated daily.

We hope this makes it easier to start using ATS on new apps.

{{% alert color="info" %}}
This feature is only available for licensed Mendix apps and only if the user **smartdigitalfactory@clevr.nl** is invited to the app.
{{% /alert %}}

#### Configure a Default Selenium Hub & Environment

When starting a new test case/suite, it was always required to select an environment and a Selenium hub for that execution. 

To speed this up, we added the option to choose a default hub and environment. They can be configured from the app settings page. The built-in Selenium will be set as a default.

#### Run with Default Settings

Related to the above point, if both a default Selenium hub and environment are configured, then a test case can be started without having to select anything.

To make this process even faster and skip one click, we added the option to run tests directly without going through the configuration screen.

### Results Page Improvements

* When starting a test, the view no longer goes to the **Test Runs** page but to the **Results** page for that specific test instead.
* The **Results** page received a new progress indicator that shows how many of the tests are passed, failed, or not executed.

### Other Changes

* We upgraded to the latest [Mendix SSO](/appstore/modules/mendix-sso/) version, which includes some security patches.
