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
* APM 1 and 2 can be installed side-by-side (to uninstall the APM 1 module, see the APM 1 documentation.

## 2 Installation

To install APM 2, follow these steps:

1. Arrange a license for the app to use APM.
2. Log in to the APM Manager at [https://apmmanager100.mendixcloud.com](http://apmmanager100.mendixcloud.com) using your Mendix account.
3. Select your app in the dashboard.
4. In the environments dashboard, select the **New Environment** tile. If you are a SCRUM Master of the Mendix app project, you can add test, acceptance, and production environments. If you are not an admin, you can only add Modeler environments.
5. Choose an environment name.
6. Click **Generate API key** and use this key as the value for the **APMAgent.APMAPIKey** constant.
7. Import the [Mendix Application Performance Monitor](https://appstore.home.mendix.com/link/app/6127/) module from the Mendix App Store.
8. Add the **USE_ME/AfterStartup** microflow to your app's **After startup** microflow.
9. Copy the widget from **CopyPasteAPMBrowserWidget** to the layout(s) of your app. Please note that it will only be loaded once, regardless of how many times the user opens a page containing the widget.
10. Verify that the `APMAgent.APMManagerURL` constant is set to `https://apmmanager100.mendixcloud.com`. Please note that after the beta release this constant will get a default value.
11. Before testing in the Mendix Modeler, use the **Clean deployment directory** option.
12. In Cloud v3, allow the request handler `/apm`.
