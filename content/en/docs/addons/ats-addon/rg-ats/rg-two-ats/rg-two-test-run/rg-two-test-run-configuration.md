---
title: "Job Configuration"
url: /addons/ats-addon/rg-two-test-run-configuration/
---

## 1 Introduction

To run an existing test, you must open the test case or test suite by clicking its name in the repository, or click the play button displayed in the test case:

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-test-run/rg-two-test-run-configuration/play-button.png" >}}

The test case (or test suite) details page then opens. On this page, you can see all the test steps and, for the test suite, the containing test case of your test.

If you want to execute your test case, click **Run**:

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-test-run/rg-two-test-run-configuration/test-case-details-run.png" >}}

The **General Settings** job configuration page then opens. On this page, set the job configuration for the test case (or test suite) you want to execute. For every test run, a new job is created.

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-test-run/rg-two-test-run-configuration/runconfig.png" >}}

For explanations of the general settings sections, see [2 General Settings](#general).

If you selected a Selenium hub from a supported Selenium hub provider (SauceLabs, or Browserstack), you get access to the **Platform Settings** section for the selection of the operating system and screen resolution:

{{< figure src="/attachments/addons/ats-addon/rg-ats/rg-two-ats/rg-two-test-run/rg-two-test-run-configuration/runconfig-os.png" >}}

For explanations of the platform settings, see [3 Platform Settings](#platform).

## 2 General Settings {#general}

### 2.1 Environment

This is the environment on which ATS executes the test case.

### 2.2 Selenium Hub

This is the Selenium hub ATS uses to execute the test case.

### 2.3 Browser

This the browser in which ATS executes the test case. The browser version is set automatically by ATS. For supported Selenium hub providers, ATS sets the following browser versions:

* Firefox: version 58
* Chrome: version 64 (for Windows XP: version 49)

## 3 Platform Settings {#platform}

### 3.1 Platform

{{% alert color="info" %}}

This option is only available for supported Selenium hubs.

{{% /alert %}}

If you have selected a Selenium hub from a supported Selenium hub provider (SauceLabs, or Browserstack), you get access to the platform settings. Here you can set the operating system on which the test case is executed.

For more information on the different supported operating systems, see [Supported Selenium Hub Providers](/addons/ats-addon/rg-two-supported-selenium-hub-provider/).

### 3.2 Resolution

{{% alert color="info" %}}

This option is only available for supported Selenium hubs.

{{% /alert %}}

With this option, you specify the screen resolution for your test run. For a list of all the supported screen resolutions, see [Supported selenium hub provider section](/addons/ats-addon/rg-two-supported-selenium-hub-provider/).

After you set the run configuration, execute the test case by clicking **Run**, or schedule the test case by clicking **Schedule**. For details on scheduling test cases in ATS, see [Scheduling](/addons/ats-addon/rg-two-schedule/).
