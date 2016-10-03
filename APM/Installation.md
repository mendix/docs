---
title: "Installation"
category: "APM"
---
This document describes the installation and uninstallation of the APM tool. The intended audience are Mendix advanced application developers who work with the Mendix Modeler and develop, install and support Mendix applications.

Read all the details here:

*   [Pre-requisites](Pre+requisites)
*   [Installation steps](Installation+steps)
*   [Upgrade steps](Upgrade+steps)
*   [Uninstall steps](Uninstall+steps)

## Installation for the experienced user

For the experienced user quick outline of the installation:

*   Backup (commit in Modeler, backup database, copy project folder?)
*   Import APM Agent module
*   Copy language if other than English US is used
*   Configure to use USE_ME/AfterStartup and USE_ME/BeforeShutdown
*   Add permission(s) to your Administrator role
*   Add USE_ME/IVK_OpenConsole microflow to navigation
*   Start App
*   Navigate to APM Tool, an installer page opens
*   In installer page mail license request
*   On receiving a mail with license enter license
*   Choose production or non-production settings
*   Save

## Upgrade for the experienced user

And for an upgrade of 1.5.4 and above

*   Import module
*   Remove old jar for userlib
*   Start and all the needed data changes are automatically performed
*   From before to after 1.7.0 a new license needs to be requested, because the license is now per App