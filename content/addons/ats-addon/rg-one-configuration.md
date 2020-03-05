---
title: "Configuration"
parent: "rg-one-ats"
---

## 1 Introduction

On the configuration page under the **Project** tab you can see the current project settings. You can change the settings and add users or libraries to your project by clicking the **Edit Project Settings** button.

![Configuration Page Project](attachments/rg-one-configuration/21168209.png)

## 2 Configure the Selenium Hubs

On the **Selenium** tab, you can see a list of the Selenium hubs that are configured for this project. Project users can run tests on the listed hubs:

![Configuration Selenium Tab](attachments/rg-one-configuration/21168210.png)

To add a new Selenium hub, click the **New** in the top bar:

![Edit Selenium hub dialog](attachments/rg-one-configuration/21168211.png)

In the **Selenium hub** dialog box, you can set the following parameters:

Field | Description
--- | ---
Name | The name of the Selenium hub.
URL | The URL of the Selenium server.
Parallel Sessions | The number of tests that can run in parallel on the Selenium hub.
Proxy URL | The URL of an optional proxy server. Normally there should be no need to use a proxy server
Custom Capabilities | Set the Selenium DesiredCapabilities (for more information, see the Selenium documentation).

## 3 Configure Test Applications {#configure-test-applications}

On the **Applications** tab, you can see a list of test applications that are configured for the current project:

![Configuration Applications tab](attachments/rg-one-configuration/21168212.png)

You can edit, create, and delete applications by pressing the buttons in the top bar:

![New Application Dialog](attachments/rg-one-configuration/21168213.png)

When creating a new application, you can set the following parameters:

Field | Description
--- | ---
Name | The name of the application.
URL | The URL under which the Mendix application to test is running.
Details | The description of the application.
Mendix Version | The Mendix version of the application.
Use Proxy | Check if a proxy should be used (should be off in most cases).
