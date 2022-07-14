---
title: "APD 3 Installation Guide"
url: /addons/apd-addon/ig-three/
weight: 1
---

## 1 Introduction

This is the installation guide for CLEVR APD 3, the successor to [APM 2](/addons/apd-addon/ig-two/).

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites::

* Before using APD 3, create a database backup and have a backup deployment ready
* If APM 2 was installed, do the following: 
	* Write down the current values for the constant **APMAgent2.APMAPIKey** (and, if set, **APMAgent2.APMAdvancedSettings**),
	* Use the values for **APDAgent.APIKey** and, if applicable, **APDAgent.AdvancedSettings**
* Remove APM 1 and/or APM 2 if they are installed (for details, see [Uninstall Steps APM 1](/addons/apd-addon/ig-one-uninstall-steps/))

## 3 Installation

To install APD 3, follow these steps:

1. Arrange a license for the app to use APD 3.
2. In a browser, log in using your Mendix account to the [APD Manager](https://apd.mendix.com/). (For backward compatibility with APM 1, APM 2 you are forwarded to [https://apmmanager100.mendixcloud.com](https://apmmanager100.mendixcloud.com)).
3. Select your app in the dashboard.
4. In the **Environments** dashboard, select the **New Environment** tile. If you are a [Scrum Master](/developerportal/collaborate/app-roles/) of the Mendix app, you can add test, acceptance, and production environments. If you are not, you can only add Mendix Studio Pro environments. For more details, see [Environments](/addons/apd-addon/rg-three-environments/).
5. Choose an environment name.
6. Click **Save and generate API key**, then use this key as the value for the **APDAgent.APIKey** constant in step 10 below.
7. In Studio Pro with your app, import the [Mendix Application Performance Monitor](https://marketplace.mendix.com/link/component/6127/) module from the Mendix Marketplace.
8. Add the **USE_ME/APDAfterStartup** microflow to your app's **After startup** microflow.
9. Use the snippet **USE_ME/APDBrowserAgentWidget** in the layout(s) of your app. Please note that it will only be loaded once, regardless of how many times the user opens a page containing the widget.
10. Set the value of the **USE_ME/APDAgent.APIKey** constant with the key you generated at step 6 above.

## 4 Upgrading

To upgrade an APD 3 agent, follow these steps:

1. In Mendix Studio Pro, import to replace the [Mendix Application Performance Monitor](https://marketplace.mendix.com/link/component/6127/) module from the Mendix Marketplace.
2. Remove the old APD 3 agent *.jar* (*apdagent_obfuscated_merged_{version}.jar*) from your **userlib** folder.
3. Before testing in Mendix Studio Pro, use the **Clean deployment directory** option.
4. Remove the old *Mansystems.APMBrowserAgent.mpk* from your widgets folder.

## 5 Security

Apply these steps if needed:

1. In Cloud v3, allow the request handler `/apm`.
2. The agent initiates all communication to the [APD 3 manager](https://apmmanager100.mendixcloud.com) in HTTPS over port 443. So, for some on-premises installations, a firewall might need to be opened.
