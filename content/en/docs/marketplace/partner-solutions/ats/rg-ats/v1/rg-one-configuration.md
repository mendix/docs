---
title: "Configuration"
url: /appstore/partner-solutions/ats/rg-one-configuration/
---

## Introduction

On the configuration page under the **Project** tab you can see the current project settings. You can change the settings and add users or libraries to your project by clicking the **Edit Project Settings** button.

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/rg-one-configuration/21168209.png" alt="Configuration Page Project" class="no-border" >}}

## Configure the Selenium Hubs

On the **Selenium** tab, you can see a list of the Selenium hubs that are configured for this project. Project users can run tests on the listed hubs:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/rg-one-configuration/21168210.png" alt="Configuration Selenium Tab" class="no-border" >}}

To add a new Selenium hub, click the **New** in the top bar:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/rg-one-configuration/21168211.png" alt="Edit Selenium hub dialog" class="no-border" >}}

In the **Selenium hub** dialog box, you can set the following parameters:

Field | Description
--- | ---
Name | The name of the Selenium hub.
URL | The URL of the Selenium server.
Parallel Sessions | The number of tests that can run in parallel on the Selenium hub.
Proxy URL | The URL of an optional proxy server. Normally there should be no need to use a proxy server
Custom Capabilities | Set the Selenium DesiredCapabilities (for more information, see the Selenium documentation).

## Configure Test Applications {#configure-test-applications}

On the **Applications** tab, you can see a list of test applications that are configured for the current project:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/rg-one-configuration/21168212.png" alt="Configuration Applications tab" class="no-border" >}}

You can edit, create, and delete applications by pressing the buttons in the top bar:

{{< figure src="/attachments/appstore/partner-solutions/ats/rg-ats/v1/rg-one-configuration/21168213.png" alt="New Application Dialog" class="no-border" >}}

When creating a new application, you can set the following parameters:

Field | Description
--- | ---
Name | The name of the application.
URL | The URL under which the Mendix application to test is running.
Details | The description of the application.
Mendix Version | The Mendix version of the application.
Use Proxy | Check if a proxy should be used (should be off in most cases).
