---
title: "Job Configuration"
url: /appstore/partner-solutions/ats/rg-two-test-run-configuration/
---

## Introduction

To run an existing test, you must open the test case or test suite by clicking its name in the repository, or click the play button displayed in the test case:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-run/rg-two-test-run-configuration/play-button.png" class="no-border" >}}

The test case (or test suite) details page then opens. On this page, you can see all the test steps and, for the test suite, the containing test case of your test.

If you want to execute your test case, click **Run**:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-run/rg-two-test-run-configuration/test-case-details-run.png" class="no-border" >}}

The **General Settings** job configuration page then opens. On this page, set the job configuration for the test case (or test suite) you want to execute. For every test run, a new job is created.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-run/rg-two-test-run-configuration/runconfig.png" class="no-border" >}}

For explanations of the general settings sections, see [2 General Settings](#general).

If you selected a Selenium hub from a supported Selenium hub provider (SauceLabs, or BrowserStack), you get access to the **Platform Settings** section for the selection of the operating system and screen resolution:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v2/rg-two-test-run/rg-two-test-run-configuration/runconfig-os.png" class="no-border" >}}

For explanations of the platform settings, see [3 Platform Settings](#platform).

## General Settings {#general}

### Environment

This is the environment on which ATS executes the test case.

### Selenium Hub

This is the Selenium hub ATS uses to execute the test case.

### Browser

This the browser in which ATS executes the test case. The browser version is set automatically by ATS. For supported Selenium hub providers, ATS sets the following browser versions:

* Firefox: version 58
* Chrome: version 64 (for Windows XP: version 49)

## Platform Settings {#platform}

### Platform

{{% alert color="info" %}}

This option is only available for supported Selenium hubs.

{{% /alert %}}

If you have selected a Selenium hub from a supported Selenium hub provider (SauceLabs, or BrowserStack), you get access to the platform settings. Here you can set the operating system on which the test case is executed.

For more information on the different supported operating systems, see [Supported Selenium Hub Providers](/appstore/partner-solutions/ats/rg-two-supported-selenium-hub-provider/).

### Resolution

{{% alert color="info" %}}

This option is only available for supported Selenium hubs.

{{% /alert %}}

With this option, you specify the screen resolution for your test run. For a list of all the supported screen resolutions, see [Supported Selenium hub provider section](/appstore/partner-solutions/ats/rg-two-supported-selenium-hub-provider/).

After you set the run configuration, execute the test case by clicking **Run**, or schedule the test case by clicking **Schedule**. For details on scheduling test cases in ATS, see [Scheduling](/appstore/partner-solutions/ats/rg-two-schedule/).
