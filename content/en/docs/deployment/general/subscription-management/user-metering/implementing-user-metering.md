---
title: "Implementing User Metering"
url: /developerportal/deploy/implementing-user-metering/
weight: 30
description: "This document describes how to implement user metering."
---

## Introduction

This document provides you with an overview of the user metering implementation, including guidelines for unique user identification, how users are classified, and the process for deactivating users. <!-- User metering provides complete visibility into the number and types of users accessing the application, ensuring compliance with the subscription agreement. You can see this data in the Usage Report of Control Center on the Mendix platform. --> 
For accurate user metering, user classification is a crucial first step. For more information, refer to [How User Metering Works](/developerportal/deploy/user-metering/#how-user-metering-works). To do this, you must consider the following aspects, if applicable:

* [Unique user identification](/developerportal/deploy/implementing-user-metering/#guidelines-for-unique-user-identification-deduplication)
* [User classification](/developerportal/deploy/implementing-user-metering/#user-classification)
* [User deactivation](/developerportal/deploy/implementing-user-metering/#deactivation-of-users)

## Guidelines for Unique User Identification (Deduplication)

Mendix offers two variants of Multi-App User Subscriptions, namely the Multi-App Internal User and External User (multi-app) subscription. These subscriptions allow a single user to access multiple applications while being counted only once for metering purposes. This applies to both internal and external users. Accurate user metering and correct multi-app user deduplication depend critically on consistent user identification across all your applications.

To ensure unique multi-app users are correctly identified and metered, you must maintain a consistent user identifier across all relevant applications.

The Mendix metering mechanism uses the `UserCommons.namedUserIdentifier.value` attribute as the primary user identifier. If this attribute is not available or populated, it falls back to `system.user.name`. For a detailed overview of relevant entities and attributes, refer to the [Domain Model Entities](#domain-model-entities) section below.

### Key Requirements for Multi-App User Identification:

Consistent Identifier Value: The same value for a given multi-app user must be stored in the chosen identifier attribute (`UserCommons.namedUserIdentifier.value` or `system.user.name`) across all applications that the user accesses. Inconsistent values will result in the user being counted as multiple distinct users.

### Best Practices for Choosing and Implementing a Cross-App User Identifier:

User identification strategies can vary across application portfolios, particularly when applications were developed independently or use different provisioning methods. Consider the following guidelines to establish a robust and consistent identification strategy:

1. Prioritize `UserCommons.namedUserIdentifier.value`: Always aim to use and populate `UserCommons.namedUserIdentifier.value` for user identification. This provides a dedicated field for metering purposes and offers flexibility regardless of the `system.user.name` value.

2. Use a stable, globally unique identifier: Select an identifier that is stable and consistently unique across your entire user base and application portfolio.

    * Recommended Identifier: User's Email Address – Mendix strongly recommends storing the user's email address in `UserCommons.namedUserIdentifier.value`. This is typically a stable and globally unique identifier that users are familiar with. An email address is personal information. The Mendix platform, therefore, collects hashed values of the user identifier to enhance privacy. If you have specific privacy concerns, consult the [data processing agreement](https://www.siemens.com/en-us/company/compliance/data-privacy/data-privacy-terms/) you have with Siemens.

    * Alternative Identifiers: If using email addresses is not feasible or desired for your organization, you must establish a clear guideline on what user identifier your company will consistently use for cross-app user identification.

    * Handling Case Sensitivity: When using email addresses or other text-based identifiers, always store these values in lowercase to prevent metering issues caused by case sensitivity. The `system.user.name` attribute is case-sensitive by design. Mendix's standard SAML, OIDC SSO, and SCIM modules already apply this for email claims received from Identity Providers (IdPs).

3. Address pairwise identifiers (for example, OIDC `sub` claim): Some identity providers, such as Microsoft Entra ID, generate pairwise identifiers (for example, Entra ID's `sub` claim). These identifiers are unique for each application for the same user. This is designed to prevent correlation across different service providers. However, you are using this technical identifier as the global unique identifier for user metering, it can lead to incorrect multi-app metering within your portfolio. When using the OIDC SSO module with Microsoft Entra ID, you can use the `oid` claim instead of the `sub` claim as the global unique identifier. The `oid` claim contains the Entra ID user object ID and remains consistent for the same user across all applications. Alternatively, if you follow the recommended approach of using the user’s email address as the global unique identifier for user metering, pairwise identifiers will not impact your metering accuracy.

4. Integrating with existing application logic: If your current applications use varying `system.user.name` values or different provisioning methods, you can implement `UserCommons.namedUserIdentifier.value` without altering existing logic. Continue using your existing application logic for `system.user.name` if necessary, but additionally implement logic to populate `UserCommons.namedUserIdentifier.value` with your chosen consistent cross-app identifier (for example, email address or `oid` claim). This ensures the metering mechanism has a reliable, consistent identifier to use. If your applications are already consistently storing the same identifier for a multi-app user in `system.user.name`, you do not have to use the `UserCommons.namedUserIdentifier.value`.

For more information on user types and definitions, refer to the [User Types and Definitions](/developerportal/deploy/licensing-apps-outside-mxcloud/#user-types-and-definitions) section of *Licensing Apps*.

## User Classification

In the Mendix pricing plan, a distinction is made between internal and external named users of a Mendix application. As a customer, you purchase a subscription for a specific number of internal users and, optionally, for external users (which are typically cheaper). For accurate user metering, external users must be correctly classified. If they are not, your company may exceed the subscription capacity for internal users, and Mendix may require you to acquire additional internal user subscriptions.

To ensure accurate user metering, external users must be explicitly marked as `External`. If they are not marked accordingly, they will be counted as `Internal` users.

There are several approaches to classify users as `Internal` or `External`, ranging from configuration-only to custom development. These options are:

### IdP-Based User Classification

This method requires one of the following identity modules to be enabled: OIDC SSO, SCIM, or SAML. A key advantage of this approach is that it does not require any modifications to your existing app. Classification can begin immediately by setting a constant. However, because users are only classified when they log in, it may take some time before all end-users are classified.

### Userrole-Based User Classification

The user-role-based User Classification module classifies users by using the roles already defined in your app. It can update all existing users in one run and works well if you already have separate roles for internal and external users. However, using this module requires upgrading your application to include the User Classification module. Userrole-based user classification is the recommended approach. It encourages and leverages application design with distinct userrole definitions for external and internal users.

### Custom User Classification

This method can be implemented either by using the [User Classification](/appstore/modules/user-classification/) module or by creating fully custom microflows. The main advantage of this approach is the flexibility it provides. You can apply any classification logic you choose while still relying on the User Classification module as the base. However, this method requires developing custom logic and involves upgrading your application to a new version of your application to include the [User Classification](https://marketplace.mendix.com/link/component/245015) module.

{{% alert color="info" %}}
In situations where there is ambiguity about the user classification, Mendix considers users as internal users. Ambiguity may happen in the following situations:

* A multi-app user is marked as `External` in one application and `Internal` in another application.
* When applying userrole-based classification, and a user has both an `Internal` and an `External` userrole.
{{% /alert %}}

Classification by the platform is not supported by using your email domains, nor any other logic. Your application logic is responsible for classification.

#### Custom Classification Using Your Own Microflow

If you prefer not to use the custom User Classification module, you can instead create the user classification logic entirely from scratch using custom microflows. This approach provides maximum control and flexibility, allowing you to define any classification rules and processes according to your specific requirements. 

{{% alert color="info" %}}
This approach is for end-users who are already set up in your app. For new end-users onboarding into your app, you can implement a similar logic to set the `UserType` attribute during initial end-user creation.
{{% /alert %}}

To update the `UserType` attribute of the `UserReportInfo` entity, refer to the [Domain Model Entities](#domain-model-entities) section for more details.

## (De)Activation of Users

The `system.user.active` attribute controls active or inactive users in your application. Users with an ‘active’ state can log in to your application and are counted for user metering purposes, while non-active users cannot login are not counted for user metering.

You can provision the user records (for example, created, updated, or deleted) using proprietary logic or via one of the following platforms supported modules: 

* SAML and OIDC SSO modules can create users with active state. By nature of the SSO protocols, these modules do not deactivate or delete any user records in your application.
* The SCIM module allows your application to be integrated with your IdP to create, update, or delete user records. Depending on the (configured) business logic in your IdP, users may be created, deactivated, or deleted

    * as a result of the Joiner, Mover, or Leaver processes.
    * as a result of subscription optimization, users who have not logged in to a certain application for a certain period may be removed from the access group in the IdP, and therefore, the IdP may deactivate or remove users from your SCIM-enabled application.

* The LDAP module allows you to synchronize users and their status (active=false/true) from your on-premises Active Directory to your application. This is a similar module to SCIM, but using a different protocol.

If you are considering deactivating or removing user records for optimization of user cost, you are advised to consider the following:  

* Users cannot log in when in the deactivated (active=false) state. The primary purpose of the active state is to control which users can log in. When SSO is used, the user may be successfully logged in at the IdP; however, the Mendix application fails to grant access if the active state is not updated.
* Actual logins, frequency of login, or `system.user.lastlogin` is also not relevant for metering. A user is counted as an active user if the state was active on any day of the calendar month.
* If you choose to remove user records, associated data may be deleted depending on your domain model.
* The SAML and OIDC SSO modules are capable of creating or recreating any user that was deleted. This can be described as just-in-time user provisioning, also known as on-the-fly user onboarding or real-time user creation.

## Versioning Information

The improved user metering capabilities are introduced in Mendix 11. These capabilities in the platform apply to apps using any Mendix version. Mendix offers the following guidance on versioning.

| Classification Menthod | Mendix 9 LTS | Mendix 10 LTS, Mendix 11 |
| --- | --- | --- |
| IdP-based user classification | SAML 3.6.21 and above <br> OIDC 3.0.0 and above | SAML 4.0.0 and above <br> OIDC SSO v4.0.0 and above |
| Userrole-based or custom user classification | User Classification v1.0.1 and above | User Classification v2.0.0 and above |
| Multi-app user identification | `system.user.name` | `system.user.name` or `NamedUserIdentifier` in User Commons v2.2.0 and above |
| SCIM-based user deactivation | SCIM v3.0.0 and above | SCIM v4.0.0 and above |

If you have extended support on Mendix 8, contact your CSM for guidance on user metering if needed.

## Domain Model Entities {#domain-model-entities}

This section explains the entities and their attributes in your application domain model that are relevant for user metering.

The following are entities and their attributes:

1. `User`: Every Mendix application has a system module containing an entity `User`.

    * `system.user.name`: This field is used to identify users, unless a `UserCommons.namedUserIdentifier.value` is available for the same user.
    * `system.User.Active`: A Boolean attribute, `Active`, is used to select the active user account for user metering. A user record that has `Active=true` during the metering period is counted as an active user during the billing period and reconciliated against one of the allocated user subscriptions.

2. `UserReportInfo`: The system module also features the `UserReportInfo`.

    * `system.UserReportInfo.UserType`: `UserType` is used to classify end-users as `External` or `Internal` Users. Your application must set the attribute for all existing and new (external) end-users. If it does not, Mendix will classify those users as `Internal`.

    {{< figure src="/attachments/deployment/general/implementing-user-metering/user-type-enumeration.png" class="no-border" >}}

3. `namedUserIdentifier`(optional): Recent versions of the [UserCommons](https://marketplace.mendix.com/link/component/223053) module include a `namedUserIdentifier` entity.

    * `UserCommons.namedUserIdentifier.value`: User commons modules in your application model assign the values to the `namedUserIdentifier.value` attribute to identify a user instead of `system.user.name`. The `namedUserIdentifier` overrides `user.name`.

Note that one application may use `system.user.name` and not `userCommons.namedUserIdentifier.value`, or may exclude the UserCommons module, while another application may use `userCommons.namedUserIdentifier.value` instead. If the values in these different fields are the same for a multi-app user, the Mendix user metering mechanism correctly identifies the user as a single multi-app user (deduplication).

It is not possible to map multiple values of `system.user.name` to a single value of `UserCommons.namedUserIdentifier.value` within an app.
