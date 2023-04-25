---
title: "Administration"
url: /appstore/modules/administration/
category: "Modules"
description: "Describes the configuration and usage of the Administration module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "administration", "user management", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Administration](https://marketplace.mendix.com/link/component/23513) module contains the administration functionality, which allows you to manage local accounts and to view app statistics, such as runtime information, sessions, and schedules events.

### 1.1 Features

* Support managing user accounts
* Provide a read-only overview to show the following information:
    * All active sessions
    * All schedules events
    * All runtime instances
* Support viewing runtime statistics

### 1.2 Dependencies

* [Atlas UI Resources](https://marketplace.mendix.com/link/component/104730)
* [Mendix SSO](https://marketplace.mendix.com/link/component/111349): required for the Administration module versions 1.3.X (for example 1.3.2) and 2.1.X (for example 2.1.2)

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](https://docs.mendix.com/appstore/general/app-store-content/) to import the Administration module into your app.

## 3 Using Supporting Microflows with Mendix SSO                                                               {#use-with-mendix-sso}

The [Administration](https://marketplace.mendix.com/link/component/23513) module versions 1.3.X (for example 1.3.2) and 2.1.X (for example 2.1.2) contain a set of microflows to configure Mendix SSO to use **Administration.Account** as the user entity. To use the supporting microflows with Mendix SSO, perform the following steps:

1. Make sure that your app contains the Mendix SSO module. If it does not, import the [Mendix SSO](https://marketplace.mendix.com/link/component/111349) module from the Marketplace.

2. Configure the **MendixSSO_AfterStartup** microflow from the Administration module as the [after startup](/refguide/app-settings/#after-startup) microflow. If there is already an after startup microflow, do not replace it, but add the **MendixSSO_AfterStartup** microflow as a sub-microflow in the existing microflow.

{{% alert color="info" %}}If you previously used the Mendix SSO in your application, use the **MendixSSO_MigrateUsersToAccount** microflow to migrate users from the `MendixSSOUser` to the `Administration.Account` specialization. Before executing the migration, carefully read the instructions in the microflow.{{% /alert %}}
