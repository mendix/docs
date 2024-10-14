---
title: "Use Snowflake SSO for Role-Based Access Control"
url: /appstore/modules/snowflake/snowflake-sso/
description: "Describes how to use the Snowflake SSO to enable automatic role-based access control in a Mendix application."
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

You can use Snowflake's [SSO capabilities](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-overview) to enable your Mendix app to use role-based access control (RBAC) automatically. 

The following diagram is a visual representation of how the Snowflake SSO can be used with a Mendix application with the help of the an external OAUTH provider. 

 {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/RBAC-SSO-explanations.png" >}}

You can integrate between Snowflake and Mendix applications by using OAUTH providers such as Azure Entra ID, Amazon Cognito, OKTA, and others. The following sections describe an example of how you can use Azure Entra ID to enable automatic role-based access control (RBAC) in a Mendix application. In the context of integration between Snowflake and Mendix, RBAC helps ensure that the data being exposed to a certain user or role within Snowflake is the same as the data presented to the same user in a Mendix app.

### Prerequisites

To enable SSO-based RBAC for your Mendix app, you must first install and configure the [OIDC SSO module](/appstore/modules/oidc/).

## Configuring Azure Entra ID

Firstly, create a resource application in Azure Entra ID. The resource application must contain the application ID URI and the scope.

1. Add a new user in Azure Entra ID. For more information, see [How to create, invite, and delete users](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-create-delete-users) in Microsoft Entra documentation.
2. Create an enterprise application. For more information, see [Configure Microsoft Azure AD for External OAuth](https://docs.snowflake.com/en/user-guide/oauth-azure) in Snowflake documentation.
3. In Azure Entra ID, create a new resource application by clicking **App registration** > **New registration**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/app-registration.png" >}}

4. Enter a descriptive name for the app, for example, *Snowflake OAUTH Resource*.
5. Select the one tenant application, and then click **Register**.
6. Click **Add an Application ID URI**, and then click **Add**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/app-id-uri.png" >}}

7. On the **Expose an API** page, in the **Scopes defined by this API** section, click **Add a scope**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/app-add-scope.png" >}}

8. In the **Scope name** field, enter *session:scope:AnyRole*.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/azure-entra-id-scope.png" >}}

9. Fill out the other mandatory fields, and then click **Add scope**.

## Creating a Client Application

After creating the resource application, create a client application. The client application must give API permissions to the resource app.

1. Create a new application by following steps 3-5 from the previous section. 
2. In the **API Permissions** page, add a new permission.
3. In the **APIs my organization uses** tab, double-click the resource app that you created in the previous section.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/api-permissions.png" >}}

4. Select **Delegated permissions**, and then click **Permission options** > **Add permission**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/request-api-permissions.png" >}}

5. Click **Grant admin consent**.
6. In the left navigation menu, click **Certificates & secrets**.
7. Add a new client secret.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/add-secret.png" >}}

    Make sure that you copy the value of the secret and store it safely. The value is only shown after you first create the secret.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/secret-value.png" >}}    

8. Register the callback URI for your Mendix app by performing the following steps:

    1. In the left navigation menu, click **Authentication**.
    2. Click **Add platform** > **Web**.
    3. In the **Redirect URI** and **Logout URL** fields, enter `https://<your application URI>/auth/v2/callback`
    4. Select **Access tokens** and **ID tokens** as the tokens that you would like to issue.
    5. Select **Accounts in this organization directory only** to give access only for the account of the organization.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/callback-urls.png" >}}

9. Add the user to the app by performing the following steps:

    1. In the left navigation menu, click **Enterprise applications**.
    2. Select your client app, and then click **Assign users and groups**.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/assign-user-group.png" >}}

    3. Click **Add user/group**.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/add-user-group.png" >}}

    4. Add the user that you previously created.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/add-user.png" >}}   

## Configuring Snowflake Security Integration

To configure Snowflake SSO for your app, perform the following steps:

1. Log in to Snowflake with Account Administrator privileges.
2. Create a user with the same user name and password as the one in Azure. If required, you can use the following command to set the login name to the same value as in Azure:

    `alter user <current user name> set login_name = "<User name as used in Azure>"`
 
3. Use the following code to create the security integration 

    ```text
    create security integration external_oauth_azure
        type = external_oauth
        enabled = true
        external_oauth_type = azure
        external_oauth_issuer = 'https://sts.windows.net/TenantID/'
        external_oauth_jws_keys_url = 'https://login.microsoftonline.com/TenantID/discovery/v2.0/keys'
        external_oauth_audience_list = ('Application ID URI')
        external_oauth_token_user_mapping_claim = 'upn'
        external_oauth_snowflake_user_mapping_attribute = 'login_name';
    desc security integration external_oauth_azure;
    ALTER USER TestUser1 SET DEFAULT_ROLE = ROLETESTA;
    ```

## Configuring Your Mendix App

To configure your Mendix application, perform the following steps:

1. Ensure that you have installed and configured the [OIDC SSO module](/appstore/modules/oidc/).
2. Log in to your Mendix app as administrator. 
3. To add a new OpenID provider for Azure, access the OpenID setup page, add a new client configuration, and give it an **Alias** so you can identify it if you have more than one client configuration.
4. Add the **Client ID**. You can find it in Azure as the **Application (Client) ID**:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/azure-client-id.png" >}}

5. Select the **Client_secret_basic** as the **Client authentication method** and add the secret value.
6. Enter `https://login.microsoftonline.com/<yourTenantID>/v2.0/.well-known/openid-configuration` as the **Automatic Configuration URL**.
7. Click **Import configuration**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/import-config.png" >}}

8. Save the configuration.
9. For the **scope**, select **openid**, **profile**, **email**, **offline_access**, and scope that you defined in Azure Entra ID.  

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/scope.png" >}}

10. For **UserParsing**, select the default method.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/parsing.png" >}}

11. Configure the **UserProvisioning** tab as shown in the following figure:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-sso/provisioning.png" >}}

12. Run the application and log in with the user that you use in Snowflake and Azure.
