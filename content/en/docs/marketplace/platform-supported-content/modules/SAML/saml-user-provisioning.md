---
title: "Just-In-Time User Provisioning via SAML"
url: /appstore/modules/saml/user-provisioning/
linktitle: "User Provisioning via SAML"
weight: 30
description: "Describes the configuration of the user provisioning in the SAML module."
---

## User Provisioning{#user-provisioning}

Initially, your app will not have any end-users. The SAML module provides so-called Just-In-Time (JIT) user provisioning. This means that an end-user will be created in your app when they log in for the first time. If you do not want JIT user provisioning, it is possible to disable it as described in the section [Custom User Provisioning at Runtime](#custom-provisioning-rt) below.

By default, end-users are provisioned using the Account object in the Administration module. If you need to use a custom user entity, you can do this via [Custom User Provisioning at Runtime](#custom-provisioning-rt).

### Default User Provisioning

If the standard configuration meets your needs and your application does not have special user management requirements, you can use the default User Provisioning.

In the default configuration, the custom user entity is set as `Administration.Account`, the principal attribute is set as `Name`, and the default attribute mapping is provided.

| IdP Attribute | Configured Entity Attribute |
| --- | --- |
| NameID | Name |

### Custom User Provisioning{#custom-provisioning}

If you create custom user entities as specializations of the `System.User` entity, you can store user information that is more extensive than is possible with the `System.User` or `Administration.Account` entities. You can use these specializations as target entities for end-user provisioning using one of the methods described below.

If you connect multiple IdPs to your Mendix app, you can use separate custom user entities for each IdP, each with its own attribute mapping.

### Disable MxAdmin at Deploy Time

You may have a requirement that users log in to your application only via SSO. However, when you deploy your app on the Mendix Cloud, the platform may still create an MxAdmin user with a local password. From version 2.1.0 of the UserCommons module, if the flag for the `DisableMxAdmin` constant is set to `True`, the MxAdmin user will be deactivated via the startup microflow `ASU_UserCommons_StartUp`.

### Custom User Provisioning at Runtime{#custom-provisioning-rt}

{{% alert color="info" %}} This feature is available in version 4.0.0 and above. {{% /alert %}}

You can set up custom user provisioning by selecting the **IdP Configuration** tab of the SAML module. Select a configuration, and you can see the **User Provisioning** tab.

1. Set up the following information in the **User Provisioning** tab:

    * **Custom user Entity (extension of System.User)** – the Mendix entity in which you will store and look up the user account. If you are using the [Administration module](https://marketplace.mendix.com/link/component/23513), this would be `Administration.Account`.
    * **The attribute where the user principal is stored** – a unique identifier associated with an authenticated user. 
        * By default, the value is set to *Name*.
    * **Allow the module to create users** – This enables the module to create users based on user provisioning and attribute mapping configurations. When disabled, it will still update existing users. However, for new users, it will display an exception message stating that the login action was successful, but no user has been configured.
        * By default, the value is set to *Yes*.
    * **Default User Role** – the role assigned to newly created users and remains unchanged even when the user's details are updated. You can select one default user role. To assign additional roles, use the Access Token Parsing Microflow. If the Access Token Processing Microflow is selected, OIDC verifies the updated default role configuration and applies any changes to the user's role. Note that bulk updates for existing users are not automated when the default role configuration is changed.
    * **User Type** – this allows you to configure end-users of your application as internal or external. It is created upon the creation of the user and updated each time the user logs in. For more information, refer to [Implementing User Metering](/developerportal/deploy/implementing-user-metering/).
        * By default, the value is set to *Internal*. 

2. Under **Attribute Mapping**, for each piece of information you want to add to your custom user entity, select an **IdP Attribute** (claim) and specify the **Configured Entity Attribute** where you want to store the information.

    Note the following:

    * You cannot use the IdP claim, which is the primary attribute identifying the user, and you cannot use the attribute you set in **The attribute where the user principal is stored**.
    * You can map multiple **IdP Attribute** (claims) to a **Configured Entity Attribute**, but you cannot map a new **IdP Attribute** to a **Configured Entity Attribute** if it is already mapped.
    * The IdP Attribute is one of the fixed claims supported by the [OIDC SSO](/appstore/modules/oidc/) module.
    * **IdP Attributes**(Claims) cannot be of type enum, autonumber, or an association.

3. Optionally, you can use the custom logic in the **User Provisioning**. In the **Custom UserProvisioning** field, select a microflow you want to run for custom user provisioning. The custom microflow name must begin with the string `UC_CustomProvisioning`. Starting from version 4.0.3 and 4.1.2 of the module, you can find a reference microflow (`SAML.UC_CustomProvisioning`) in the **MOVE ME** folder. To show custom user-facing error messages, call `SAML20.ThrowSAMLFeedbackException` from a custom microflow (`UC_CustomProvisioning`). The custom microflow requires the following parameters:

    1. **UserInfoParameter(UserCommons.UserInfoParam)**: A Mendix object containing user claims information through its associated objects. You can use this parameter to retrieve user provisioning configuration information.
    2. **User(System.User)**: A Mendix object representing the user to be provisioned. Ensure that the selected microflow matches this parameter signature.

    The microflow must return a **System.User** object to ensure proper user provisioning and updates. It will be executed after user creation or update of user. However, starting from version 2.0.0 of the UserCommons module, this is no longer mandatory. If you have added a new microflow, you will need to refresh the module containing your microflow as described in the [Mx Model Reflection](/appstore/modules/model-reflection/). This selection can be blank if you do not want to add custom logic.

4. To facilitate upcoming enhancements to the platform, you need to perform some configuration so that Mendix can correctly identify end users. Correct identification is crucial for ensuring consistent and accurate end user metering and deduplication of end users across multiple applications in your landscape. For this reason, the UserCommons module features the **User Metering Named Identifier** entity in version 2.2.0 and above. If you have a multi-app internal user license or an external user license, you must persist the same value for the same end user across different apps, regardless of which modules you use. In most cases, the end user's email address is a good choice. Currently, Mendix uses the `system.user.name` to identify users; it will use the **User Metering Named Identifier** instead, unless it is not populated. For accurate user metering, you do not need to change what value is persisted in the `system.user.name`. You can continue to persist whatever value you are using there today. The `system.user.name` is often used for technical user identifiers. Both `system.user.name` and `userCommons.NamedUserIdentifier.value` have a uniqueness constraint for the named user identifier. This means an app cannot have two users who share the same identifier value. Also, both fields are case sensitive. For more information on case sensitivity, refer to [Best Practices for Choosing and Implementing a Cross-App User Identifier](/developerportal/deploy/implementing-user-metering/#guidelines-for-unique-user-identification-deduplication).

    * If you want to use a user attribute other than email address for the **User Metering Named Identifier**, you can configure it on the **UserProvisioning** tab:

    * Select the identifier in the **User Metering Named Identifier** field to be used for metering.

5. Click **Save** to save the configuration.

### Custom Behavior

This section describes the microflows that you may want to customize if needed.

#### evaluateMultipleUserMatches

{{% alert color="info" %}}
Starting from version 4.0.0. of the SAML module, `evaluateMultipleUserMatches` microflow is moved to the UserCommons.{{% /alert %}}

The module tries to look up the user that matches the provided user name. When multiple `System.User` records are found, and this microflow is always executed.

It is possible to customize this microflow to determine the correct user. Whichever user instance is returned will be signed in to the application (and passed on to any other microflow).

#### CustomUserProvisioning {#customuserprovisioning}

{{% alert color="info" %}}
Starting from version 4.0.0 of the SAML module, the `CustomUserProvisioning` microflow is deprecated. Custom user provisioning is supported through the **Custom UserProvisioning** field in the **User Provisioning** tab. For more details, refer to the [Custom User Provisioning at Runtime](#custom-provisioning-rt) section above. As of version 4.2.0, the `CustomUserProvisioning` microflow has been removed and is no longer supported.
{{% /alert %}}

When selecting in the SSO configuration to run the `customUserProvisioning` action (previously known as `CustomLoginLogic`), you can update the new or retrieved user with additional information from the assertion. All the assertions are passed into the microflow in the parameter `AssertionAttributeList`, and these can be transformed and stored in the user record. Also, additional roles can be granted to the users based on the assertion attributes.

#### CustomAfterSigninLogic

After a new session is created for the user, this microflow can be called to copy any data from the previous session to the new session. This microflow behaves similarly to the platform after the sign-in microflow. Using this microflow, it is possible to copy records from the anonymous user to the newly signed-in user.
