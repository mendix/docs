---
title: "APM 1 Installation Guide"
url: /addons/apd-addon/ig-one/
weight: 2
---

## 1 Introduction

This document describes the installation and uninstallation of the APM tool. The intended audience is Mendix advanced application developers who work with the Mendix Modeler and develop, install, and support Mendix applications.

Read all the details here:

*   [Prerequisites](/addons/apd-addon/ig-one-prerequisites/)
*   [Installation Steps](/addons/apd-addon/ig-one-installation-steps/)
*   [Upgrade Steps](/addons/apd-addon/ig-one-upgrade-steps/)
*   [Uninstall Steps](/addons/apd-addon/ig-one-uninstall-steps/)

## 2 Installation for the Experienced User

For the experienced user, this is quick outline of the installation:

1. Back up (commit in the Modeler, backup database, copy project folder).
2. Import the APM Agent module.
3. Copy the language if one other than English US is used.
4. Configure to use `USE_ME/AfterStartup` and `USE_ME/BeforeShutdown`.
5. Add permission(s) to your Administrator role.
6. Add the USE_ME/IVK_OpenConsole microflow to the navigation.
7. Set the `APMAgent.CompanyName` and `APMAgent.AppName` constants.
8. Optionally configure the `APMAgent.NotifyMicroflowName` constant to call a microflow that sends mail.
9. Start the app.
10. Navigate to the APM tool, where an installer page will open.
11. On the installer page, mail the license request. In APM 1.10, you can use a license request code to automatically obtain a license key.
12. On receiving the mail with the license key, enter the key.
13. Choose production or non-production settings.
14. Save.

## 3 Upgrading for the Experienced User

For an upgrade from APM 1.5.4 and above to the latest version, follow these steps:

1. Import the module.
2. Remove the old jar for `userlib`.
3. Start, and all the needed data changes will be automatically performed.
4. From below to above version 1.7.0, a new license needs to be requested, because the license is now per app.
5. From below to above version 1.10.0, a new constant `AppName` has been introduced and needs to be set.
