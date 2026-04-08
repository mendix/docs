---
title: "Upgrading Teamcenter Connector 2506.0.0 to 2512.0.0"
url: /appstore/modules/siemens-plm/upgrade-teamcenter-connector-2506-to-2512/
weight: 4
description: "Describes the steps to upgrade Teamcenter Connector 2506.0.0 to 2512.0.0 and discusses how breaking changes can be resolved."
---

## Introduction

This document guides you through the process of upgrading the Teamcenter Connector from version 2506.0.0 to version  2512.0.0.    
In version 2512.0.0 of the Teamcenter Connector, the Single Sign-On (SSO) option is implemented differently, so the OIDC module is no longer in use.    
To see all the changes in this release, refer to the [Teamcenter Connector](https://marketplace.mendix.com/link/component/111627) release notes.

## Upgrading the Teamcenter Connector

1. Download the latest versions of the Teamcenter Connector and of the Teamcenter Extension:

    * Download the latest 2512.x version of the [Teamcenter Connector](https://marketplace.mendix.com/link/component/111627).
    * Download the latest 4.x version of the [Teamcenter Extension](https://marketplace.mendix.com/link/component/225544).

2. Resolve the breaking changes mentioned in the [release notes](https://marketplace.mendix.com/link/component/111627):

    * Replace `UserLogin` with `NAV_UserLogin`.
    * Replace `ShowLoginPage` with `NAV_UserLogin`.
    * Replace `LoginToMultipleTeamcenters` with `NAV_UserLoginMultipleActive`.
    * Replace `AdminHomePage` with `NAV_AdminHomePage`.
    * Remove `SSO_RegisterRequestHandlers` after startup microflow.

    The following fundamental changes have been made:

    * The `Admin` user role used to have login options through the `AdminLogin` microflow. In version 2512.0.0, login functionalities have been removed for the `Admin` user role. If the `Admin` role of your app requires the option to log in to Teamcenter, assign it the TcConnector `User` module role.
    * The `TeamcenterConfiguration` event handlers have been removed. If you have custom logic for `TeamcenterConfiguration` objects, confirm it includes the correct validations.
    * Multiple microflows and pages have been moved from the `Public` to the `Private` folder. Make sure that these are no longer directly referenced.

3. Update entity access.     
    To resolve the `Entity access is out of date` error, go to the domain model, and click the **Update security** button on the top bar.    
    Once updated, there might be some entities that return the following error: `Non-persistable entity (entityName) contains access rules restricting members to have no access rights, which is not allowed.` This is happening because new attribute names and relations have been introduced. Open the entity in question and assign read-only access to all attributes with no rights.

4. Remove Marketplace modules.     
    The following Marketplace modules are no longer used, and can be removed if they are not used by any other logic in your app:

    * OIDC SSO module
    * UserCommons module
    * MxModelReflection module

5. Use React client (optional).     
    Teamcenter Connector 2512 is compatible with React Client. To enable this, go to **Settings**, then to **Runtime**, then select **Yes** for **Use React client**.     
    For details on React Client, refer to its [documentation page](/refguide/mendix-client/react/).

6. Set Up the Teamcenter Configuration.    
    Due to the SSO setup, you need to set up the Teamcenter configuration again when you deploy a new app with Teamcenter Connector 2512.0.0. For details on how to do that, follow the steps in [Configuring the Connection to Teamcenter with Teamcenter Connector 2512.0.0 and Above](/appstore/modules/siemens-plm/configuring-connection-2512/).
    