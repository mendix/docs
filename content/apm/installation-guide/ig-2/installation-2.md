---
title: "APM 2 Installation Guide"
category: "Installation Guide"
menu_order: 2
---

{{% alert type="warning" %}}
The documentation in this section describes a product that is in closed beta, so it is subject to change before the final release. For more information, see [Beta Features](/releasenotes/beta-features/).
{{% /alert %}}

## 1 Introduction

This is the installation guide for Mansystems APM 2.

Note the following:

* Before using APM 2, create a database backup and have a backup deployment ready
* APM 1 and 2 can be installed side-by-side (to uninstall the APM 1 module, see [Uninstall Steps](../ig-1/uninstall-steps)

## 2 Installation

To install APM 2, follow these steps:

1. Arrange a license for the app to use APM.
2. In a browser, log in to the APM Manager at [https://apmmanager100.mendixcloud.com](https://apmmanager100.mendixcloud.com) using your Mendix account.
3. Select your app in the dashboard.
4. In the environments dashboard, select the **New Environment** tile. If you are a SCRUM Master of the Mendix app project, you can add test, acceptance, and production environments. If you are not, you can only add Modeler environments. For more detailed information, see the [Environments overview](../../reference-guide/rg-2/environments) documentation.
5. Choose an environment name.
6. Click **Save and generate API key**, then use this key as the value for the **APMAgent.APMAPIKey** constant in step 10.
7. In the Desktop Modeler with your app, import the [Mendix Application Performance Monitor](https://appstore.home.mendix.com/link/app/6127/) module from the Mendix App Store.
8. Add the **USE_ME/AfterStartup** microflow to your app's **After startup** microflow.
9. Copy the widget from **USE_ME/CopyPasteAPMBrowserWidget** to the layout(s) of your app. Please note that it will only be loaded once, regardless of how many times the user opens a page containing the widget.
10. Set the value of the **USE_ME/APMAgent.APMAPIKey** constant with the key you generated at step 6.

## 3 Upgrading

To upgrade an APM 2 agent follow these steps

1. In a modeler with your app import to replace the [Mendix Application Performance Monitor](https://appstore.home.mendix.com/link/app/6127/) module from the Mendix App Store.
2. Remove the old APM 2 agent jar from your userlib folder
3. Before testing in the Mendix Modeler, use the **Clean deployment directory** option.

## 4 Security

Please read the following steps and apply if needed.

1. In Cloud v3, allow the request handler `/apm`.
2. The agent initiates all communication to the [APM 2 manager](https://apmmanager100.mendixcloud.com) in HTTPS over port 80. So for some on premise installation a firewall might need to be opened.
