---
title: "Populate User Types"
url: /developerportal/deploy/populate-user-type/
description: "Describes how to classify existing app end-users as either internal or external."
aliases:
    - /howto/monitoring-troubleshooting/populate-user-type/
---

## Introduction

In the Mendix Pricing Plan, a distinction is made between Internal and External Named Users of a Mendix app. As a customer, you purchase a license for a specific number of Internal users and, optionally, for External users (which are typically cheaper). For accurate user metering, External users must be correctly classified. If they are not, your company may exceed the licensed capacity for Internal users, and Mendix may require you to acquire additional Internal user licenses.

This document helps you set up your apps to ensure accurate metering for your External users. It describes different sample solutions that can help you in External User classification for existing users of your apps.

{{% alert color="info"  %}}
**Definitions** 

* *Named User* – an individual authorized by you to have access to your apps with unique login credentials, or an authorized external system that accesses or is accessed by your application.
* *Internal User* – a *Named User* who is an employee or contractor of your business.
* *External User* – a *Named User* who is not an employee or contractor of your business, and is designated as an External User in the Mendix Platform.

{{% /alert %}}

## Background

Every Mendix app has a system module containing an entity `UserReportInfo`. This entity has an attribute `UserType` that is used to classify end-users as `External` or `Internal` Users. Your application must set the attribute for all existing and new (external) end users. If it does not, Mendix will classify those users as Internal.

The metering relies on this attribute to ascertain the end-user type and report it back to us.

{{< figure src="/attachments/deployment/general/populate-user-type/user-type-enumeration.png" class="no-border" >}}

## Classification Options

There are several approaches to classify users as `Internal` or `External`, ranging from configuration-only to custom development. These options are listed below: 

### IdP-Based User Classification

The simplest method to set the `UserType` is by using the Identity and Access Management (IAM) modules, which require only configuration without the need to develop a microflow. This approach leverages a connection with an Identity Provider (IdP) to classify users. The primary benefit of IdP-based classification is its efficiency, as it typically only requires configuration within the existing IAM modules. Mendix offers you the following IAM modules:

* [OIDC](https://docs.mendix.com/appstore/modules/oidc/)
* [SCIM](https://docs.mendix.com/appstore/modules/scim/)
* [SAML](https://docs.mendix.com/appstore/modules/saml/)

Alternatively, you can build a custom microflow as described in the [Populating UserType for Existing Users of an App](#using-microflow) section below.

When connecting your app with an IdP, set up the `UserType` through the capabilities of the OIDC SSO, SCIM, or SAML module. The `UserType` is now configured in the User Provisioning, which is integrated into the OIDC SSO, SCIM, and SAML modules. This means you can directly configure end-users of your application as `Internal` or `External` in the **UserProvisioning** tab of your app. Based on this configuration, users are updated each time they log in. These modules allow you to set the `UserType` per IdP as the source of your end-users, assuming that separate IdPs are used for `internal` and `external` users.

For more information, refer to the User Provisioning section of the following modules:

* [OIDC SSO](/appstore/modules/oidc/#custom-provisioning-rt)
* [SCIM](/appstore/modules/scim/#user-provisioning)
* [SAML](/appstore/modules/saml/#custom-provisioning-rt)

#### Prerequisites for IdP-Based User Classification

1. Mendix and module versions: 
    * Mx9
        * OIDC SSO: v3.0.0 or above
        * SCIM: v1.0.0 or above
    * Mx10
        * OIDC SSO: v4.0.0 or above
        * SAML: v4.0.0 or above
        * SCIM: v2.0.0 or above
    * Mx11    
        * OIDC SSO: v4.0.0 or above
        * SAML: v4.0.0 or above
        * SCIM: v2.0.0 or above
        
2. IdP Setup: Use separate IdPs for `Internal` and `External` users.

    {{% alert color="info" %}}It may be possible to enhance configurations in your IdP by settting-up two separate connections between your app and your IdP. In this scenario, the IdP sees your app as two distinct clients/services. The Mendix app sees them as two distinct IdPs, each with its own provisioning configuration. This allows assigning different `UserType` values per IdP connection. Configurations in your IdP have to ensure that each client only addresses internal or external users.
    {{% /alert %}}

3. Classification on login: Classification of users happens when they log in. If your application has limited user buckets (for example, license restrictions for internal/external users), and timely classification is critical, ensure all (external) users log in before your limit on internal users is reached, as external users have not been classified as `External` users yet.

### User Role-Based User Classification

Role-based classification relies on the distinct user roles defined within the application itself. This method is particularly effective for scenarios where an application needs to differentiate between user types, such as internal employees versus external users, by assigning them specific roles. Mendix offers the [User Classification](https://marketplace.mendix.com/link/component/245015) module, which aims to streamline the implementation of user role-based classification, thereby minimizing the development effort required within the application.

Instead of writing microflows, you can classify users as `Internal` or `External` using roles in the User Classification module. To do this:

1. Define roles like `ExternalRole` or other custom roles.
2. Use the [User Classification](/appstore/modules/user-classification/) module to map these roles to the `UserType` field in the `UserReportInfo`.
3. When a role is assigned to a user in your Mendix app, the User Classification module automatically updates the `UserType` field in the `UserReportInfo` entity for that user.

This approach is simpler, more consistent, and easier to maintain than attribute-based logic.

For more information, see the [Role-based Classification](/appstore/modules/user-classification/#role-based-classification) section of *User Classification*.

#### Prerequisites for Role-Based Classification

1. Your app model uses distinct user roles for external and internal users.
2. Include the User Classification module in your app model. To use it, your app must be running on one of the following Mendix versions:

    * Mx9 LTS
    * Mx10 LTS
    * Mx11 and above

### Custom Classification

When the logic of your application does not allow for IdP-based or user role-based user classification, you need to build your own custom user classification logic in your app. It lets you create specific rules tailored to the unique needs of your application.

#### Custom Classification Using the User Classification Module

This option lets you build custom logic while still using the framework from the [User Classification](/appstore/modules/user-classification/) module. It reduces development effort by giving you a structured way to add custom classification rules.

You can classify users as `Internal` or `External` using your own business rules instead of only user roles or IAM settings. With the User Classification module and a microflow, you can evaluate conditions, for example, email domain of end-users. The User Classification module makes it easy for you to implement custom logic to classify existing users as well as new users. This gives maximum flexibility to handle complex or unique scenarios and ensures accurate Mendix user metering. For more information, see the [Custom Classification](/appstore/modules/user-classification/#custom-classification) section of *User Classification*.

#### Custom Classification Using Your Own Microflow

For maximum control, developers can create user classification entirely from scratch using custom microflows. This gives full flexibility to define any classification rules and processes, making it the most customized approach.

{{% alert color="info" %}}
This approach is for end-users who are already set up in your app. For new end-users who onboard into your app, you can implement a similar logic to set the `UserType` attribute during initial end-user creation.
{{% /alert %}}

Outlined below is an example of a module that can be used to update the `UserType` attribute. You will need to adapt the module logic for classifying your own internal and external end-users. 

##### Domain Model

In the example below, our aim is to update the `UserType` attribute of the `UserReportInfo` entity. However, the entity `UserReportInfo` is protected in the System module and has no access rules. As a result, it cannot be exposed directly in the UI pages. 
Therefore, the approach we take is to create a new non-persistable entity, `UserTypeReport`, which we will populate based on the values of `UserReportInfo` to show in the UI.

{{< figure src="/attachments/deployment/general/populate-user-type/usertypereport.png" class="no-border" >}}

{{< figure src="/attachments/deployment/general/populate-user-type/usertypereport-properties.png" class="no-border" >}}

##### Populating `UserType` for Existing Users of an App {#using-microflow}

1. Create a microflow `User_RetrieveOrCreateUserReportInfo` which will ensure that a `UserReportInfo` object exists for a given `User`.

    {{< figure src="/attachments/deployment/general/populate-user-type/retrieve-userreportinfo.png" alt="Microflow: User_RetrieveOrCreateUserReportInfo" class="no-border" >}}

2. Create a microflow `User_EvaluateAndSetUserType` which will populate the `UserType` attribute on the `UserReportInfo` entity for a given `User`. 

    In this example, we decide whether a user is `Internal` or `External` based on the email address of the user. To do that, we need to retrieve the email address of each user from the database. Note that the `System.User` entity itself does not have the email address. The email address is stored in the specializations of `System.User`.

    Here, we show how to do it for two specializations of the `System.User` entity, namely `Administration.Account` and `MendixSSO.MendixSSOUser`. In the `Administration.Account` entity, the email is in an attribute named `Email`. And in the `MendixSSO.MendixSSOUser` entity, it’s in an attribute named `EmailAddress`. Hence, we need to use an [Object Type Decision](/refguide/object-type-decision/) activity to split the `System.User` into `Administration.Account` and `MendixSSO.MendixSSOUser` and then fetch the email address according to the name of the attribute.

    {{< figure src="/attachments/deployment/general/populate-user-type/set-user-type.png" alt="Microflow: User_EvaluateAndSetUserType" class="no-border" >}}

    * The logic to determine whether the end-user is internal or external is up to the developer. The example below returns `true`, to indicate that the user is internal, if the user has no email address, or if the domain for their email address is `mendix.com` or `myorg.com`.

        {{< figure src="/attachments/deployment/general/populate-user-type/user-type-split.png" alt="Split: Decide if user is internal" class="no-border" >}}

3. Create a new microflow `User_Correct_UserType` which will use the microflows `User_RetrieveOrCreateUserReportInfo`  and `User_EvaluateAndSetUserType` created above. In this microflow, we create and populate the `UserTypeReport` entity and return a list of these entities at the end of the microflow.

    {{< figure src="/attachments/deployment/general/populate-user-type/correct-user-type.png" alt="Microflow: User_Correct_UserType" class="no-border" >}}

4. Create a page `UserTypeReport` with a DataGrid which uses the microflow `User_Correct_UserType` as its source.

    {{< figure src="/attachments/deployment/general/populate-user-type/grid-general.png" class="no-border" >}}

    {{< figure src="/attachments/deployment/general/populate-user-type/grid-data-source.png" class="no-border" >}}

5. Add the page to the **Navigation**.
6. When you go to that page, it will set the `UserType` as per your logic and show you the user type report.

    {{< figure src="/attachments/deployment/general/populate-user-type/user-type-report.png" class="no-border" >}}

7. The report can be exported into an Excel file.

## Read More

* [User Classification Module](/appstore/modules/user-classification/)
