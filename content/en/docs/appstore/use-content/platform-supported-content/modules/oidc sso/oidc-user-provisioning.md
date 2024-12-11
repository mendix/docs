---
title: "OIDC SSO User Provisioning"
url: /appstore/modules/oidc/oidc-user-provisioning
description: "Describes the configuration of the user provisioning in the OIDC SSO module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# Linked from https://marketplace.mendix.com/link/component/120371
---

## Introduction

Initially your app will not have any end-users. The OIDC module provides so-called Just-In-Time (JIT) user provisioning. This means that an end-user will be created in your app when they log in for the first time. If you do not want JIT user provisioning, it is possible to disable it as described in the section [Custom User Provisioning at Runtime](#custom-provisioning-rt).

By default, end-users are provisioned using the `Account` object in the Administration module. If you need to use a custom user entity you can do this via [Custom User Provisioning Using a Microflow](#custom-provisioning-mf) or (in version 3.0.0 and above) [Deploy-time User Provisioning Configuration](#custom-provisioning-dep) or [Custom User Provisioning at Runtime](#custom-provisioning-rt).

## Configuring User Provisioning for Version 2.4.0 and Below

### Default User Provisioning

By default, the `CUSTOM_UserProvisioning` microflow in the **USE_ME** > **1. Configuration** folder of the OIDC module uses the `OIDC_CustomUserParsing_Standard` microflow. This applies the following mapping:

| ID-token Provided by your IdP | Attribute of `Administration.Account` Object |
| ----------------------------- | ----------------------------- |
| sub                           | Name                          |
| name                          | Fullname                      |
| email                         | Email                         |

{{% alert color="warning" %}}
Do not change the `OIDC_CustomUserParsing_Standard` microflow. This may give problems if you upgrade to a newer version of the OIDC SSO module. Apply customizations to the `CUSTOM_UserProvisioning` microflow only.
{{% /alert %}}

### Custom User Provisioning{#custom-provisioning}

If you create custom user entities as specializations of the `System.User` entity, you can store user information that is more extensive than is possible with the `System.User` or `Administration.Account` entities. You can use these specializations as target entities for end-user provisioning using one of the methods described below.

If you connect multiple IdPs to your Mendix app, you can use separate custom user entities for each IdP, each with its own attribute mapping.

### Custom User Provisioning Using a Microflow{#custom-provisioning-mf}

{{% alert color="warning" %}}
Since this feature is deprecated from the version 3.0.0 of the module, you can do the custom user provisioning at runtime or deploy-time. For more information, see the [Custom User Provisioning at Deploy-time](/appstore/modules/oidc/oidc-user-provisioning/#custom-provisioning-dep) and [Custom User Provisioning at Runtime](/appstore/modules/oidc/oidc-user-provisioning/#custom-provisioning-rt) sections below.
{{% /alert %}}

Review the microflow `CUSTOM_UserProvisioning` in the **USE_ME** > **1. Configuration** folder of the OIDC module. This is where you can change the way that end-users are provisioned in your app. The OpenID token is passed to the microflow as a parameter. Use this object to find an existing, or create a new, `System.User` object for the end-user. This is set as the return value of the microflow. You can find examples included in the **USE_ME** > **1. Configuration** > **User Provisioning Examples** folder.

Make a single call from `CUSTOM_UserProvisioning` to your own module where you implement the provisioning flow you need. This way, it will be easy to install new versions of the OIDC SSO module over time without overwriting your custom provisioning.

The OIDC SSO module supports multiple IdPs. Since each provider can provide user data in a different format, you may want to use multiple provisioning flows. The microflow should contain the prefix `OIDC_CustomUserParsing`. See the microflow `UserProvisioning_Sample` for an example and details on how to do this.

## Configuring User Provisioning for Version 3.0.0 and Above

### Custom User Provisioning at Runtime{#custom-provisioning-rt}

{{% alert color="info" %}}
This feature is available in version 3.0.0 and above
{{% /alert %}}

You can set up custom user provisioning once your app is running using the `OIDC.OIDC_Client_Overview` page that you set up for the administrator for the app in [Configuring Navigation](#configure-nav). You can set up custom user provisioning as follows:

1. Sign in to the running app with an administrator account.
2. Navigate to the `OIDC.OIDC_Client_Overview` page set up in the app navigation.
3. Select the **Provisioning** tab.
4. Set up the following information:

    * **Custom user Entity (extension of System.User)** – the Mendix entity in which you will store and look up the user account. If you are using the [Administration module](https://marketplace.mendix.com/link/component/23513), this would be `Administration.Account`.
    * **The attribute where the user principal is stored** – unique identifier associated with an authenticated user.
    * **Allow the module to create users** – this enables the module to create users based on user provisioning and attribute mapping configurations. When disabled, it will still update existing users. However, for new users, it will display an exception message stating that the login action was successful but no user has been configured.
        * By default, the value is set to ***Yes***.
    * **User role** – the role which will be assigned to newly created users. You can select one default user role. If you need additional user roles, use Access Token Parsing microflow to assign multiple roles.
    * **User Type** – this allows you to configure end-users of your application as internal or external.
        * By default, the value is set to ***Internal***.

5. Under **Attribute Mapping**, for each piece of information you want to add to your custom user entity, select an **IdP Attribute** (claim) and specify the **Configured Entity Attribute** where you want to store the information.

    Note the following:

    * You cannot use the IdP claim which is the primary attribute identifying the user and you cannot use the attribute you set in **The attribute where the user principal is stored**.
    * You can map multiple **IdP Attribute** (claims) to a **Configured Entity Attribute** but you cannot map a new **IdP Attribute** to a **Configured Entity Attribute** if it is already mapped.
    * The **IdP Attribute** is one of the fixed claims supported by the OIDC SSO module.
    * IdP Attributes(Claims) cannot be of type enum, autonumber, or an association.
    * The image below shows you the default attribute mapping for the configuration.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/default_mapping.png" max-width=80% >}}

6. Optionally, you can use the custom logic in the **User Provisioning**. In the **Custom UserProvisioning** field, select a microflow you want to run for custom user provisioning. The custom microflow name must begin with the string `UC_CustomProvisioning` and requires the following parameters:

    1. **UserInfoParameter(UserCommons.UserInfoParam)**: A Mendix object containing user claims information through its associated objects. You can use this  parameter to retrieve user provisioning configuration information.
    2. **User(System.User)**: A Mendix object representing the user to be provisioned. Ensure that the selected microflow matches this parameter signature.

    The microflow must return a **System.User** object to ensure proper user provisioning and updates. It will be executed after user creation or update of user. If you have added a new microflow, you will need to refresh the module containing your microflow as described in the [Installing Mx Model Reflection](#mxmodelreflection). This selection can be blank if you do not want to add custom logic.

7. Click **Save** to save the configuration.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/user commons.png" max-width=80% >}}

### Custom User Provisioning at Deploy-time{#custom-provisioning-dep}

{{% alert color="info" %}}
This feature is available in version 3.0.0 and above
{{% /alert %}}

You can set up custom user provisioning by setting constants when you deploy your app. This has the following limitations compared to setting up provisioning using a microflow or changing the settings at runtime:

* You need to restart your app to apply changes to the constants
* You cannot set custom mapping of IdP claims to attributes of your custom user entity

You can set up custom user provisioning by setting the following constants. You can set default values when you build your app, but can override these in the app's environment.

| Constant | Use | Notes | Example |
| --- | --- | --- | --- |
| CustomUserEntity | a custom user entity | in the form `modulename.entityname` – a specialization of `System.User` | `Administration.Account` |
| PrincipalEntityAttribute | the attribute holding the unique identifier of an authenticated user | | `Name` |
| PrincipalIdPAttribute | the IdP claim which is the unique identifier of an authenticated user | | `sub` |
| AllowcreateUsers | allow to create users in the application | *optional* | `True` |
| Userrole | the role which will be assigned to newly created users | *optional* - Default Userrole is assigned only at user creation <br> - User updates do not change the default role <br> - No bulk update for existing users when the default userrole changes | `User` |
| UserType | assign usertype to the created users | *optional* | `Internal` |
| CustomUserProvisioning | a custom microflow to use for user provisioning | *optional* – in the form `modulename.microflowname` – the microflow name must begin with the string `UC_CustomProvisioning` | `Mymodule.UC_CustomProvisioning` |

## Custom Behavior

### Evaluating Multiple User Matches

Review the custom microflow `evaluateMultipleUserMatches` in the **USE_ME** folder. The module tries to find the user corresponding to the given username. This microflow is triggered when multiple matching `System.User` records are found.

You can customize this microflow to determine the correct user. The resulted user instance will be signed in to the application and passed on to any other microflow. However, Mendix recommends using provided unique entity attribute only. For example, `System.User.Name`.

## User Identifiers in the OIDC and SCIM Protocols

This section provides an overview and general guidance on User Identifiers, essential for understanding how they function in the OIDC and SCIM protocols. It is particularly relevant for Entra ID customers to ensure proper implementation and alignment of User Identifiers.

### Overview of User Identifier

When using OIDC SSO with Entra ID, user identifiers need to be configured correctly to ensure forward compatibility, especially if you plan to introduce the SCIM module in your application. If you are using OIDC SSO with Entra ID, you can refer to the [Microsoft documentation on attribute mapping](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/customize-application-attributes).

Entra ID uses two immutable identifiers for a user:

* The user’s object ID: The user's object ID uniquely identifies a user, making it ideal for crosslinking users across different applications. For example, B2E application used across the company can use the object ID as a unique identifier.
* The user’s pairwise unique identifier: It is also known as a locally unique identifier and is derived from the combination of the user's object ID and the application's identifier. This means it cannot be used to crosslink a user across different applications. For example, applications that need additional privacy can use locally unique identifiers to avoid cross linking of users.

Role of user identifiers in OIDC and SCIM protocols:

* OIDC protocol can use both types of identifiers based on use case:

    * The ID token contains a `sub` claim, which includes the pairwise unique identifier (locally unique identifier).
    * The ID-token also contains an `oid` claim, which includes the user’s object ID.

* SCIM:

    * In the SCIM protocol, you typically want to use the object ID to identify a user. It is used as the value for the `externalID` claim in SCIM payloads by default.

### Guidance on User Identifier{#guidance-user-identifier}

The default behavior for the OIDC SSO module is to persist the value of the `sub` claim in the system.user.name attribute. This is not forward compatible with the introduction of SCIM. Therefore, for B2E applications connected with Entra ID for SSO, Mendix recommends the following:

* For any new application, use the `oid` claim as user identifier by modifying the user provisioning flow. This will allow you to introduce SCIM.
* For existing applications that do not persist user-specific application data (other than system.user or administration.account), modify the user provisioning flow to use the `oid` claim instead of the `sub` claim. Delete all system.user and administration.account records to remove old user data. This will re-provision the users, allowing you to introduce SCIM.
* For existing applications that do not need to use SCIM, you can continue to use default `sub` claim value or any other claim such as `preferred_username`.
* For existing applications where you want to introduce SCIM, you will need to define a migration strategy for the identifiers.

### Configuring `oid` Claim in the OIDC SSO

By default, the `WellKnownendpoint` (Automatic configuration URL) does not include the `oid` claim in its metadata. You will need to manually configure the `oid` claim in the **UserProvisioning** tab of the OIDC SSO configuration using the steps below:

1. Go to **Attribute Mapping** and click **New**.
2. Select **Search**  and click **New**.
3. Create `oid` claim and map it to the Entity Attribute.
