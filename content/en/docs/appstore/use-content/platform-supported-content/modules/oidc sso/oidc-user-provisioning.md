---
title: "OIDC SSO User Provisioning"
url: /appstore/modules/oidc/oidc-user-provisioning
description: "Describes the configuration of the user provisioning in the OIDC SSO module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# Linked from https://marketplace.mendix.com/link/component/120371
---

## Introduction

Initially, your app will not have any end-users. The OIDC module provides Just-In-Time (JIT) user provisioning. This means an end-user will be created in your app when they log in for the first time. If you do not want JIT user provisioning, it is possible to disable it as described in the section [Custom User Provisioning at Runtime](#custom-provisioning-rt).

By default, end-users are provisioned using the `Account` object in the Administration module. If you need to use a custom user entity you can do this via [User Provisioning at Runtime](#custom-provisioning-rt) or [User Provisioning at Deploy-time](#custom-provisioning-dep).

## Configuring User Provisioning for Version 3.0.0 and Above

### User Provisioning at Runtime{#custom-provisioning-rt}

You can set up user provisioning as follows:

1. Sign in to the running app with an administrator account.
2. Navigate to the `OIDC.OIDC_Client_Overview` page which is set up in the app navigation.
3. In the **IdPs for SSO and API security** tab, click **New** and access the **UserProvisioning** tab.
4. Set up the following fields:

    * **Custom user Entity (extension of System.User)** – the Mendix entity where you will store and look up the user account. If you are using the [Administration module](https://marketplace.mendix.com/link/component/23513), this would be `Administration.Account`.
    * **The attribute where the user principal is stored** – unique identifier associated with an authenticated user.
    * **Allow the module to create users** – this enables the module to create users based on configurations of user provisioning and attribute mapping. When disabled, it will still update existing users. However, for new users, it will display an exception message stating that the login action was successful but no user has been configured.
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

6. Optionally, you can select the microflow in the **Custom UserProvisioning** field to use custom logic for user provisioning. For more information, see the [Customizing User Provisioning Using a Microflow at Runtime](#microflow-at-runtime) section below.

    {{% alert color="info" %}}
If you are using module version 3.2.0 and below, you will need to refresh the module containing your microflow as described in the [Installing Mx Model Reflection](/appstore/modules/oidc/#mxmodelreflection) and select the microflow in the **Custom UserProvisioning** field.
    {{% /alert %}}

7. Click **Save** to save the configuration.

By default, users are provisioned by [Default User Provisioning Configuration](#default). Optionally, you can customize user provisioning by [Modifying default Attribute Mapping](#modify-default), [User Provisioning Using Your Custom User Entity](#custom_user_entity), or [User Provisioning Using a Microflow at Runtime](#microflow-at-runtime).

{{% alert color="info" %}}
If you connect multiple IdPs to your Mendix app, you can use separate custom user entities for each IdP, each with its own attribute mapping.
{{% /alert %}}

#### Default User Provisioning Configuration{#default}

The User Provisioning configuration fields are available in the **UserProvisioning** tab. In default configuration, the custom user entity is set as `Administration.Account`, the principal attribute is set as `Name`, and the default attribute mapping is provided.

{{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/default_provisioning.png" max-width=80% >}}

##### Modifying Default Attribute Mapping{#modify-default}

Optionally, you can change the default **IdP Attribute** or the **Configured Entity Attribute**, by editing the mapping in the **Attribute Mapping** section within the **UserProvisioning** tab.

#### User Provisioning Using Your Custom User Entity{#custom_user_entity}

If you want to use your custom user entity which is a specialization of the `System.User` entity to store user information, select it in the **Custom user Entity (extension of System.User)** field by replacing the `Administration.Account` entity.

#### User Provisioning Using a Microflow at Runtime{#microflow-at-runtime}

If you want to use a custom user entity that is not a specialization of the `System.User` entity, you can:

* Configure a subclass of `System.User` as the Just In Time Provisioning entity.
* Build a custom microflow (e.g., `UC_CustomProvisioning`) to create or handle your user provisioning logic based on your specific requirements.

Select it in the **Custom UserProvisioning** field. The custom microflow name must begin with the string `UC_CustomProvisioning` and requires the following parameters:

* **UserInfoParameter(UserCommons.UserInfoParam)**: A Mendix object containing user claims information through its associated objects. You can use this parameter to retrieve user provisioning configuration information.
* **User(System.User)**: A Mendix object representing the user to be provisioned. Ensure that the selected microflow matches this parameter signature.

The custom microflow will be executed after the user is created or updated. 

### User Provisioning at Deploy-time{#custom-provisioning-dep}

You can also set up custom user provisioning by setting constants when you deploy your app. This has the following limitations compared to setting up provisioning using a microflow or changing the settings at runtime:

* You need to restart your app to apply changes to the constants
* You cannot set custom mapping of IdP claims to attributes of your custom user entity

You can set up custom user provisioning by setting the following constants. You can set default values when you build your app but can override these in the app's environment.

| Constant | Use | Notes | Example |
| --- | --- | --- | --- |
| CustomUserEntity | a custom user entity | in the form `modulename.entityname` – a specialization of `System.User` | `Administration.Account` |
| PrincipalEntityAttribute | the attribute holding the unique identifier of an authenticated user | | `Name` |
| PrincipalIdPAttribute | the IdP claim which is the unique identifier of an authenticated user | | `sub` |
| AllowcreateUsers | allows to create users in the application | *optional* | `True` |
| Userrole | the role that will be assigned to newly created users | *optional* - Default Userrole is assigned only at user creation <br> - User updates do not change the default role <br> - No bulk update for existing users when the default userrole changes | `User` |
| UserType | assigns usertype to the created user | *optional* | `Internal` |
| CustomUserProvisioning | a custom microflow to use for user provisioning | *optional* – in the form `modulename.microflowname` – the microflow name must begin with the string `UC_CustomProvisioning` | `Mymodule.UC_CustomProvisioning` |

## Configuring User Provisioning for Version 2.4.0 and Below

The section below shows the methods to configure user provisioning when using OIDC module version 2.4.0 or below.

### Default User Provisioning

By default, the `CUSTOM_UserProvisioning` microflow in the **USE_ME** > **1. Configuration** folder of the OIDC module uses the `OIDC_CustomUserParsing_Standard` microflow. This applies to the following mapping:

| ID-token Provided by your IdP | Attribute of `Administration.Account` Object |
| ----------------------------- | ----------------------------- |
| sub                           | Name                          |
| name                          | Fullname                      |
| email                         | Email                         |

{{% alert color="warning" %}}
Do not change the `UserProvisioning_StandardOIDC` microflow. This may cause problems if you upgrade to a newer version of the OIDC SSO module. Apply customizations to the `CUSTOM_UserProvisioning` microflow only.
{{% /alert %}}

### User Provisioning Using a Microflow{#custom-provisioning-mf}

{{% alert color="warning" %}}
Since this feature is deprecated from version 3.0.0 of the module, you can do the custom user provisioning at runtime or deploy-time. For more information, see the [User Provisioning at Runtime](#custom-provisioning-rt) and [User Provisioning at Deploy-time](#custom-provisioning-dep) sections above.
{{% /alert %}}

Review the microflow `CUSTOM_UserProvisioning` in the **USE_ME** > **1. Configuration** folder of the OIDC module. This is where you can change the way that end-users are provisioned in your app. The OpenID token is passed to the microflow as a parameter. Use this object to find an existing, or create a new, `System.User` object for the end-user. This is set as the return value of the microflow. You can find examples included in the **USE_ME** > **1. Configuration** > **User Provisioning Examples** folder.

Make a single call from `CUSTOM_UserProvisioning` to your own module where you implement the provisioning flow you need. This way, it will be easy to install new versions of the OIDC SSO module over time without overwriting your custom provisioning.

The OIDC SSO module supports multiple IdPs. Since each provider can provide user data in a different format, you may want to use multiple provisioning flows. See the microflow `UserProvisioning_Sample` for an example and details on how to do this.

## Evaluating Multiple User Matches

Review the custom microflow `evaluateMultipleUserMatches` in the **USE_ME** folder. The module tries to find the user corresponding to the given username. This microflow is triggered when multiple matching `System.User` records are found.

You can customize this microflow to determine the correct user. The resulting user instance will be signed in to the application and passed on to any other microflow. However, Mendix recommends using the provided unique entity attribute only. For example, `System.User.Name`.

## User Identifiers in the OIDC and SCIM Protocols

This section provides an overview and general guidance on User Identifiers, essential for understanding how they function in the OIDC and SCIM protocols. It is particularly relevant for Entra ID customers to ensure proper implementation and alignment of User Identifiers.

### Overview of User Identifier

When using OIDC SSO with Entra ID, user identifiers need to be configured correctly to ensure forward compatibility, especially if you plan to introduce the SCIM module in your application. If you are using OIDC SSO with Entra ID, you can refer to the [Microsoft documentation on attribute mapping](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/customize-application-attributes).

Entra ID uses two immutable identifiers for a user:

* The user’s object ID: The user's object ID uniquely identifies a user, making it ideal for crosslinking users across different applications. For example, B2E applications used across the company can use the object ID as a unique identifier.
* The user’s pairwise unique identifier: It is also known as a locally unique identifier and is derived from the combination of the user's object ID and the application's identifier. This means it cannot be used to crosslink a user across different applications. For example, applications that need additional privacy can use locally unique identifiers to avoid cross-linking of users.

Role of user identifiers in OIDC and SCIM protocols:

* OIDC protocol can use both types of identifiers based on the use case:

    * The ID token contains a `sub` claim, which includes the pairwise unique identifier (locally unique identifier).
    * The ID token also contains an `oid` claim, which includes the user’s object ID.

* SCIM:

    * In the SCIM protocol, you typically want to use the object ID to identify a user. It is used as the value for the `externalID` claim in SCIM payloads by default.

### Guidance on User Identifier{#guidance-user-identifier}

The default behavior for the OIDC SSO module is to persist the value of the `sub` claim in the system.user.name attribute. This is not forward-compatible with the introduction of SCIM. Therefore, for B2E applications connected with Entra ID for SSO, Mendix recommends the following:

* For any new application, use the `oid` claim as a user identifier by modifying the user provisioning flow. This will allow you to introduce SCIM.
* For existing applications that do not persist user-specific application data (other than system.user or administration.account), modify the user provisioning flow to use the `oid` claim instead of the `sub` claim. Delete all system.user and administration.account records to remove old user data. This will re-provision the users, allowing you to introduce SCIM.
* For existing applications that do not need to use SCIM, you can continue to use the default `sub` claim value or any other claim such as `preferred_username`.
* For existing applications where you want to introduce SCIM, you need to define a migration strategy for the identifiers.

### Configuring `oid` Claim in the OIDC SSO

By default, the `WellKnownendpoint` (Automatic configuration URL) does not include the `oid` claim in its metadata. You will need to manually configure the `oid` claim in the **UserProvisioning** tab of the OIDC SSO configuration using the steps below:

1. Go to **Attribute Mapping** and click **New**.
2. Select **Search**  and click **New**.
3. Create `oid` claim and map it to the Entity Attribute.

## Read More

* [OIDC SSO](/appstore/modules/oidc/)
