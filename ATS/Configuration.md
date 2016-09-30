---
title: "Configuration"
space: "ATS (Application Test Suite)"
---
<div class="alert alert-info">

Only a user with the Project Administrator role in the current project can access the configuration page.

</div>

On the configuration page under the **Project** tab you can see the current project settings. You can change the settings and add users or libraries to your project by clicking the **Edit Project Settings** button.

![Configuration Page Project Tab](attachments/20644064/21168209.png)

## Configure the Selenium Hubs

On the **Selenium** tab, you can see a list of the Selenium hubs that are configured for this project. Project users can run tests on the listed hubs:

![Configuration Selenium Tab ](attachments/20644064/21168210.png)

To add a new Selenium hub, click the **New** in the top bar:

![Edit Selenium hub dialog](attachments/20644064/21168211.png)

In the **Selenium hub** dialog box, you can set the following parameters:

Field | Description
--- | ---
Name | The name of the Selenium hub.
URL | The URL of the Selenium server.
Parallel Sessions | The number of tests that can run in parallel on the Selenium hub.
Proxy URL | The URL of an optional proxy server. Normally there should be no need to use a proxy server
Custom Capabilities | Set the Selenium DesiredCapabilities (for more information, see the Selenium documentation).

## Configure Test Applications <a name="Applications"></a>

On the **Applications** tab, you can see a list of test applications that are configured for the current project:

![Configuration Applications tab](attachments/20644064/21168212.png)

You can edit, create, and delete applications by pressing the buttons in the top bar:

![New Application Dialog](attachments/20644064/21168213.png)

When creating a new application, you can set the following parameters:

Field | Description
--- | ---
Name | The name of the application.
URL | The URL under which the Mendix application to test is running.
Details | The description of the application.
Mendix Version | The Mendix version of the application.
Use Proxy | Check if a proxy should be used (should be off in most cases).
