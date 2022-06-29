---
title: "Administration"
url: /appstore/modules/administration/
category: "Modules"
description: "Describes the configuration and usage of the Administration module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "any chart", "plotly.js", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Administration](https://marketplace.mendix.com/link/component/23513) module contains the administration functionality, which allows you to manage local accounts and to view app statistics, such as runtime information, sessions, and schedules events.

## 1.1 Features

- Support managing user accounts
- Provide a read-only overview to show the following information
  - all active sessions
  - all schedules events
  - all runtime instances
- Support viewing runtime statistics

## 1.3 Dependencies

- [Atlas UI Resources](https://marketplace.mendix.com/link/component/104730)
- [Mendix SSO](https://marketplace.mendix.com/link/component/111349)

## 2. Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](https://docs.mendix.com/appstore/general/app-store-content/) to import the Administrator module into your app.

## 3 Using Administration Module with Mendix SSO

To use the Administration module with Mendix SSO, perform the following steps:

1. Follow the instructions to import the [Mendix SSO](https://marketplace.mendix.com/link/component/111349) module into your app.

2. Make sure to either exclude or delete the microflows in the **MOVE_THIS** folder from the MendixSSO module.

3. Include the microflows with the prefix **MendixSSO_** in the **Mendix SSO** folder from the Administration module.

4. Configure the **MendixSSO_AfterStartup** microflow from the Administration module as the [after startup](/refguide/app-settings/#after-startup) microflow. If there is already an after startup microflow, do not replace it, but add the **MendixSSO_AfterStartup** microflow as a sub-microflow in the existing microflow.

{{% alert color="info" %}}If you previously used the Mendix SSO in your application, use the **MendixSSO_MigrateUsersToAccount** microflow to migrate users from the MendixSSOUser to the Administration.Account specialization. Before executing the migration, read the instructions in the microflow carefully.{{% /alert %}}