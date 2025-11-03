---
title: "APM 2 Installation Guide"
url: /appstore/partner-solutions/apd/ig-two/
weight: 1
aliases:
    - /apm/installation-guide.html
    - /apm/installation-guide/
---

## Introduction

This is the installation guide for CLEVR APM 2.

Note the following:

* Before using APM 2, create a database backup and have a backup deployment ready
* APM 1 and 2 can be installed side-by-side (to uninstall the APM 1 module, see [Uninstall Steps](/appstore/partner-solutions/apd/ig-one-uninstall-steps/)

## Installation

To install APM 2, follow these steps:

1. Arrange a license for the app to use APM.
2. In a browser, log in to the APM Manager at [https://apmmanager100.mendixcloud.com](https://apmmanager100.mendixcloud.com) using your Mendix account.
3. Select your app in the dashboard.
4. In the environments dashboard, select the **New Environment** tile. If you are a Scrum Master of the Mendix app, you can add test, acceptance, and production environments. If you are not, you can only add Mendix Studio Pro environments. For more detailed information, see the [Environments overview](/appstore/partner-solutions/apd/rg-two-environments/) documentation.
5. Choose an environment name.
6. Click **Save and generate API key**, then use this key as the value for the **APMAgent.APMAPIKey** constant in step 10.
7. In Studio Pro with your app, import the [Mendix Application Performance Monitor](https://marketplace.mendix.com/link/component/6127/) module from the Mendix Marketplace.
8. Add the **USE_ME/AfterStartup** microflow to your app's **After startup** microflow.
9. Copy the widget from **USE_ME/CopyPasteAPMBrowserWidget** to the layout (or layouts) of your app. Please note that it will only be loaded once, regardless of how many times the user opens a page containing the widget.
10. Set the value of the **USE_ME/APMAgent.APMAPIKey** constant with the key you generated at step 6.

## Upgrading

To upgrade an APM 2 agent follow these steps

1. In Mendix Studio Pro with your app import to replace the [Mendix Application Performance Monitor](https://marketplace.mendix.com/link/component/6127/) module from the Mendix Marketplace.
2. Remove the old APM 2 agent *.jar* (*apmagent_obfuscated_merged_{version}.jar*) from your **userlib** folder.
3. Before testing in Mendix Studio Pro, use the **Clean deployment directory** option.

## Security

The agent initiates all communication to the [APM 2 manager](https://apmmanager100.mendixcloud.com) in HTTPS over port 443. So for some on premise installation a firewall might need to be opened.
