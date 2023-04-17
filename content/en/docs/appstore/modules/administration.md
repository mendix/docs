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

## 1.1 Features

* Support managing user accounts
* Provide a read-only overview to show the following information
    * all active sessions
    * all schedules events
    * all runtime instances
* Support viewing runtime statistics

## 1.2 Dependencies

* [Atlas UI Resources](https://marketplace.mendix.com/link/component/104730)
* [Mendix SSO](https://marketplace.mendix.com/link/component/111349): for version 2.X.X (for example version 2.0.0), and version 1.3.2 and below

## 2. Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](https://docs.mendix.com/appstore/general/app-store-content/) to import the Administration module into your app.

## 3 Using the Administration Module with Mendix SSO {#use-with-mendix-sso}

You can use the following versions of the Administration module with Mendix SSO:

* Version 2.X.X, for example, 2.0.0
* Version 1.3.2 and below

To use the Administration module with Mendix SSO, perform the following steps:

1. Make sure that your app contains the Mendix SSO module. If it does not, import the [Mendix SSO](https://marketplace.mendix.com/link/component/111349) module from the Marketplace.

2. Configure the **MendixSSO_AfterStartup** microflow from the Administration module as the [after startup](/refguide/app-settings/#after-startup) microflow. If there is already an after startup microflow, do not replace it, but add the **MendixSSO_AfterStartup** microflow as a sub-microflow in the existing microflow.

{{% alert color="info" %}}If you previously used the Mendix SSO in your application, use the **MendixSSO_MigrateUsersToAccount** microflow to migrate users from the `MendixSSOUser` to the `Administration.Account` specialization. Before executing the migration, carefully read the instructions in the microflow.{{% /alert %}}
