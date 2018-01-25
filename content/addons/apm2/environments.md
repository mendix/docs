---
title: "Environments"
space: "Other Add-Ons"
category: "APM"
---

# Environment overview #

After selecting an app from the [apps overview](apps), an overview of available environments for that app is displayed. It is possible to select an existing environment or add a new environment.
![](attachments/environments.png)

When selecting an existing environment, the [dashboard](dashboard) of that environment will be shown.

When an environment is marked as red instead of green, it means the APM agent can't reach the APM Manager. This could be caused by:

- The environment is down or not connected to the internet
- The APM agent is not installed (yet)
- The APM agent is not properly configured

## Adding a new environment ##
In order to add a new environment, click on the *New environment* button in the Environment overview.
![](attachments/new_environment.png)

All environments initially start as a Modeler environment. A Modeler environment is only visible for the user that creates it in APM.
For project administrators (SCRUM Master in Sprintr) an extra "Modeler environment" switch is available to alter the type. After setting the switch to false, it is possible to change it to Production, Acceptance, or Test.

Each environment must have a name. The name of an environment is only for display purposes in APM, and does not have to match your hostname/servername.

Upon creating the environment, it is possible to generate an API key for the APM Agent configuration (it is possible to generate one at a later time in the environment settings). For more information about the API key and APM Agent installation, see the [installation guide](installation).
