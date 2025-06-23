---
title: "APD 3 Installation Guide"
url: /appstore/partner-solutions/apd/ig-three/
weight: 1
---

## Introduction

This is the installation guide for CLEVR APD 3, the successor to [APM 2](/appstore/partner-solutions/apd/ig-two/).

## Prerequisites {#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Before using APD 3, create a database backup and have a backup deployment ready
* If APM 2 was installed, do the following: 
    * Write down the current values for the constant **APMAgent2.APMAPIKey** (and, if set, **APMAgent2.APMAdvancedSettings**),
    * Use the values for **APDAgent.APIKey** and, if applicable, **APDAgent.AdvancedSettings**
* Remove APM 1 and/or APM 2 if they are installed (for details, see [Uninstall Steps APM 1](/appstore/partner-solutions/apd/ig-one-uninstall-steps/))
* Create a [Mendix Personal Access Token](/community-tools/mendix-profile/user-settings/#pat) to retrieve your apps in APD:
    * Go to the [Developer Settings](https://user-settings.mendix.com/link/developersettings) page of your Mendix Developer Profile.
    * Click **New Token**.
    * Specify a token name, for example *APD Sync apps*.
    * Select option *mx:app:metadata:read* under **Project API**.
    * Click **Create**. A pop-up window shows your secret token, which is the PAT. 
    * Click **Copy Token** to copy the PAT and make sure that you store it in a safe location, because the generated token will not be displayed again.

## Installation

To install APD 3, follow these steps:

1. Arrange a license for the app to use APD 3.
2. In a browser, log in using your Mendix account to the [APD Manager](https://apd.mendix.com/). (For backward compatibility with APM 1, APM 2 you are forwarded to [https://apmmanager100.mendixcloud.com](https://apmmanager100.mendixcloud.com)).
3. If it is your first time opening [APD Manager](https://apd.mendix.com/), make sure that you confirm signing up as follows:
    1. In the **Mendix PAT** field, enter the Mendix Personal Access Token that you created in the [Prerequisites](#prerequisites) section.
    2. Click **Confirm signup**. 
4. Select your app in the dashboard.
5. In the **Environments** dashboard, select the **New Environment** tile. If you are a [Scrum Master](/developerportal/general/app-roles/) of the Mendix app, you can add test, acceptance, and production environments. If you are not, you can only add Mendix Studio Pro environments. For more details, see [Environments](/appstore/partner-solutions/apd/rg-three-environments/).
6. Choose an environment name.
7. Click **Save and generate API key**. This key will be used as the value for the **APDAgent.APIKey** constant in step 11 below.
8. In Studio Pro with your app, import the [Mendix Application Performance Monitor](https://marketplace.mendix.com/link/component/6127/) module from the Mendix Marketplace.
9. Add the **USE_ME/APDAfterStartup** microflow to your app's **After startup** microflow.
10. Use the snippet **USE_ME/APDBrowserAgentWidget** in the layout (or layouts) of your app. Note that it will only be loaded once, regardless of how many times the user opens a page containing the widget.
11. Set the value of the **USE_ME/APDAgent.APIKey** constant with the key you generated in step 7 above.

## Upgrading

To upgrade an APD 3 agent, follow these steps:

1. In Mendix Studio Pro, import to replace the [Mendix Application Performance Monitor](https://marketplace.mendix.com/link/component/6127/) module from the Mendix Marketplace.
2. Remove the old APD 3 agent *.jar* (*apdagent_obfuscated_merged_{version}.jar*) from your **userlib** folder.
3. Before testing in Mendix Studio Pro, use the **Clean deployment directory** option.
4. Remove the old *Mansystems.APMBrowserAgent.mpk* from your widgets folder.

## Security

The agent initiates all communication to the [APD 3 manager](https://apmmanager100.mendixcloud.com) in HTTPS over port 443. For on-premises installations a firewall might need to be opened.
