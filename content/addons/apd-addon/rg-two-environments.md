---
title: "Environments"
parent: "rg-two-apm"
---

## 1 Environments Overview

After selecting an app from the [Apps overview](rg-two-apps), an overview of available environments for that app is displayed. It is possible to select an existing environment or add a new environment.

![](attachments/rg-two/environments.png)

When selecting an existing environment, the [Dashboard](rg-two-dashboard) of that environment will be shown.

When an environment is marked as red instead of green, that means the APM agent cannot reach the APM Manager. This could be caused by one of the following reasons:

* The environment is down or not connected to the internet
* The APM agent is not (yet) installed
* The APM agent is not properly configured

## 2 Adding a New Environment

In order to add a new environment, click **New environment** in the **Environments** overview.

![](attachments/rg-two/new_environment.png)

All the environments initially start as a Mendix Studio Pro environment. A Mendix Studio Pro environment is only visible for the user that creates it in APM.

For project administrators (with SCRUM Master role), an extra **Modeler environment** switch (for Mendix Studio Pro) is available to alter the type. After setting the switch to **No**, it is possible to change it to production, acceptance, or test.

Each environment must have a name. The name of an environment is only for display purposes in APM, and it does not have to match your hostname/servername.
For a description of the other settings, see the [APM settings](rg-two-settings).

Upon creating the environment, an API key for the APM Agent configuration will be generated (it is possible to generate a new one at a later time in the environment settings). For more information about the API key and APM Agent installation, see the [APM 2 Installation Guide](ig-two).
