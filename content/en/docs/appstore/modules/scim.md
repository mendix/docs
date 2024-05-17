---
title: "SCIM"
url: /appstore/modules/scim/

description: "Describes the configuration and usage of the SCIM module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "scim", "IdP", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [SCIM](add marketplace link here) module facilitates integration with Microsoft Entra ID (formerly known as Azure AD) to create (pre-provision) selected users in your application as soon as they are created in Entra ID, and deactivate them when removed from Entra ID or deactivated in Entra ID. 

SCIM is an abbreviation for System for Cross-domain Identity Management; a protocol that is supported by most major IdP technologies, such as Entra ID, Okta, Auth0, etc. For more information, see the [SCIM protocol](https://scim.cloud/). 

The SCIM module allows you to integrate your app with the Joiner, Mover, Leaver (JML) process in your organization. It enables the assignment of tasks to users before their first login to the app. Additionally, based on the information in Entra ID, the SCIM module automatically deactivates users in your app. This functionality helps you to control Mendix user licensing cost.

{{% alert color="info" %}}
Before you include the SCIM module in your app, you need to check if your IdP supports SCIM protocol. If you want to integrate with an on-premises AD or similar, you may need to use the [LDAP module](https://docs.mendix.com/appstore/modules/ldap/) instead.
{{% /alert %}}

### 1.1 Typical Use Cases

* Seamless integration into the JML process: Organizations need to handle employee access rights efficiently, when employees join, switch roles, or leave the organization. The Joiner, Mover, Leaver (JML) process is crucial for this, and the SCIM module helps your app integrate smoothly into these processes. 

* User onboarding before first login: The SCIM module can be used when you want to create users in your Mendix app before their first login. For example, if your app has workflow logic, you can assign tasks to users even before their first login.

* Use user groups to control access to your app: Entra ID helps you organize various groups based on their jobs and roles. To manage apps access based on these groups, you can use the SCIM module. If someone changes their job or role and is no longer part of a group that allows access to the app, the SCIM module automatically deactivates the user in the app. Even if the user still has an active Entra ID account, it becomes inactive in your app. This way, you can also save on licensing costs.

* Update local user profile: Changes in personal details of your employees, such as email address or username modifications due to life events like marriage, are synchronized between the local user profile and Entra ID through the SCIM module.

* B2E vs. B2C apps: Many organizations use a common Identity Provider, such as Entra ID in Microsoft’s office 365 suit, to centralize employee accounts. If you are building apps for employees (Business-to-Employee or B2E), connecting them with Entra ID is a common and easy choice. As an app developer, you can use OIDC SSO or SAML for Single Sign-On and the SCIM module for managing users. For apps designed for customers (Business-to-Customer or B2C), the use of the SCIM module may not be as obvious. If your organization uses a third-party solution, such as Entra ID to handle customer accounts, you can also use the SCIM module for that.

### 1.2 Features

Your IdP can perform create, read, update and delete (CRUD) operations on the users in your app when it includes the SCIM module. It has the following features:

* Create users: users who are in Entra ID and assigned to the Mendix SCIM application in Azure are automatically created in the Mendix application.

* Remove users: deactivates users in the Mendix app when they are deleted from Entra ID or removed from the group of users assigned to use your app.

* The following user attributes are supported during the creation or updating of users: first name, last name, and email address.

* Update users: synchronizes changes in the user's profile in your IdP with your Mendix app, such as a change in the user’s name. 

* Disable (Deactivate) / Enable (activate) users: deactivates or activates users in your Mendix app when you disable or enable them in the Entra ID.

The SCIM module also has the following features:

* It has been tested with Entra ID and Okta.

* Your IdP allows the selection of users that sync with your Mendix app, meaning your IdP controls which users are created and active in your app.

* Each application within your organization using the SCIM module must undergo separate configuration. This allows the selection of the right target group of users for each app.

* Users can be synchronized from multiple SCIM clients.

### 1.3 Limitations

The SCIM module has the following limitations:

* The SCIM module does not syncing of groups (or group memberships) to your app. This means you cannot use the SCIM module to assign user roles to your app’s users. Instead, you can assign user roles using the features offered by [SAML SSO](https://docs.mendix.com/appstore/modules/saml/) or [OIDC SSO](https://docs.mendix.com/appstore/modules/oidc/) modules.

* If you want to do **Provision on demand** from Entra ID to test the SCIM integration of your app you cannot trigger a partial sync based on a group. This will trigger Entra ID to invoke a /groups endpoint, which is not yet supported.

* The module does not support the development of a SCIM client application.

### 1.4 SCIM Protocol Adherence

This section provides clarity on the extent to which the SCIM module supports the SCIM protocol. It is targeted at readers who are familiar with the SCIM protocol.

* The SCIM module is based on version 2.0 of the SCIM protocol, as specified in [RFC 7642](https://datatracker.ietf.org/doc/html/rfc7642), [7643](https://datatracker.ietf.org/doc/html/rfc7643), and [7644](https://datatracker.ietf.org/doc/html/rfc7644).

* The SCIM module is a server-side implementation of the SCIM protocol; external systems act as a SCIM clients when interacting with your app.

* The supported features align with the requirements for integration with Entra ID.

Currently, the SCIM module does not support the following features of the SCIM protocol:

* Sync password.

* Enhanced group push.

* Import groups.

* User attributes other than a basic user profile. Mendix currently supports a limited set of user attributes from the SCIM user schema, including UserName, Email, FamilyName, GivenName, and Active status.

* Multi-valued attributes.

* User schema extensions.

* /Me endpoint.

* Bulk operations.

* Multi-tenancy.

### 1.5 Prerequisites

1. An IdP such as Microsoft Entra ID

2. A user account in the IdP with permissions to configure provisioning (for example, application administrator, cloud application administrator, application owner, or global administrator)

### 1.6 Dependencies

It is necessary to include the following Marketplace modules in your app:

* [Encryption](https://docs.mendix.com/appstore/modules/encryption/) module – this is required to encrypt the **API key** (Token)

* [Community Commons](https://marketplace.mendix.com/link/component/170) – see [Community Commons](https://docs.mendix.com/appstore/modules/community-commons-function-library/) documentation

* [User Commons](https://marketplace.mendix.com/link/component/223053) module - Install and configure the User Commons module to support user provisioning and deactivation of user

* [Mx Model Reflection](https://marketplace.mendix.com/link/component/69) module - Install and configure the [Mx Model Reflection](https://docs.mendix.com/appstore/modules/model-reflection/) module