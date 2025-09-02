---
title: "Configure Amazon Cognito for the OIDC SSO Module"
linktitle: "Amazon Cognito"
url: /appstore/modules/aws/amazon-cognito/
description: "Describes the steps required to use Amazon Cognito with the OIDC SSO module."
weight: 20
---

## Introduction

[Amazon Cognito](https://aws.amazon.com/pm/cognito/) is a secure, scalable customer identity and access management platform. The [OpenID Connect (OIDC) SSO](/appstore/modules/oidc/) module allows end-users of your Mendix app to login via Single Sign-on (SSO) using the OIDC protocol.

This how-to describes the steps required to enable your app to use the OIDC SSO module with Amazon Cognito as the identity provider.

## Configuring Amazon Cognito {#cognito-provider}

To configure Amazon Cognito for the OIDC SSO module, follow these steps:

1. Optional: If you are using the AWS test environment with Amazon Cognito set as the user pool, you must verify the email addresses by doing the following steps:
    1. In Amazon SES, click **Configuration** > **Verified identities**.
    2. On the **Verified identities** page, in the **Identities** section, click **Create identity**.
    3. Verify the email address or addresses that you want to use for the user pool

        {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-cognito/verifyemail.png" alt="The Verified identities page in Amazon SES" class="no-border" >}}

2. Create a user pool for Amazon Cognito by doing the following steps:
    1. In the Amazon Console, open the Amazon Cognito service.
    2. Select the region where you want to create the user pool, and then click **Create user pool**.
    3. Follow the **Create user pool** wizard to configure the sign-in and sign-up, security requirements, and message delivery.
    4. In the **Integrate your app** step of the wizard, enter a name for your user pool and leave the other settings as default.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-cognito/userpoolname.png" alt="The Integrate your app step in the Create user pool wizard" class="no-border" >}}

    5. Review and create the user pool.

3. Add users to the user pool by doing the following steps:
    1. In Amazon Cognito, on the **User pools** page, find and open the user pool that you created.
    2. On the **Users** tab of the user pool, click **Create user**.
    3. Specify a verified email and a password.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-cognito/addusers.png" alt="The Users tab of a user pool" class="no-border" >}}

4. Configure the app integration by doing the following steps:
    1. Go to the **App integration** tab of the user pool that you created.
    2. In the **App clients and analytics** section, click **Create app client**.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-cognito/createappclient.png" alt="The Create app client button on the App integration page" class="no-border" >}}

    3. On the **Create app client** page, configure the following settings:
        * **App type** - **Public client**
        * **App client name** - Enter a descriptive app client name
        * **Client secret** - Select **Generate a client secret**
        * **Authentication flows** - Select **ALLOW_USER_PASSWORD_AUTH**
        * **Authentication flow session duration** - Enter a value from *3* to *15*
        * **Allowed callback URLs** - Enter a URL in the following format: `https://<your-app-url>/oauth/v2/callback`
        * **Allowed sign-out URLs** - This setting is optional, and you may leave it blank
        * **Identity providers** - Select **Cognito user pool**
        * **OAuth 2.0 grant types** - Select **Authorization code grant**
    4. Save your changes.
    5. Open the app client that you created.
    6. In the **App client information** section, copy the **Client ID** and the **Client secret**, and save them in a secure location.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-cognito/idsecret.png" alt="The Client ID and Client secret on the App client information page" class="no-border" >}}

    7. Go back to the user pool that you created.
    8. On the **App integration** tab, in the **Domain** section, copy the **Cognito domain** and save it in a secure location.

## Configuring the Required Settings in Your Mendix App {#cognito}

After you configure the necessary settings in Amazon Cognito, you must add the endpoint URLs to your Mendix app, and then add a button to sign in with Amazon Cognito.

1. In your Mendix app, configure a new OIDC client, as described in [OIDC SSO: Runtime Configuration of Your IdP at Your App](/appstore/modules/oidc/#runtime-idp-app). Make sure to configure the following settings:
    * **Alias** - Enter a descriptive name to identify your app
    * **Client ID** - Enter the app client ID that you obtained from the user pool in Amazon Cognito
    * **Client secret** - Enter the client secret that you obtained from the user pool in Amazon Cognito
    * **Client authentication method** - Select **client_secret_post**
    * **Automatic Configuration URL** - Enter a URL in the following format: `https://cognito-idp.{the region where you created the user pool}.amazonaws.com/{your user pool ID}/.well-known/openid-configuration`

    For more information, see [User pool OIDC and hosted UI API endpoints reference](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-userpools-server-contract-reference.html).

2. Click **Import Configuration** to automatically fill the other endpoints.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-cognito/filledendpoints.png" alt="Sample endpoint URLs" class="no-border" >}}

3. Click **Save**.
4. Add an Amazon Cognito sign in button to a page in your app.

    You can achieve this by adding the **ACT_StartWebSignIn_Default** nanoflow to the button. For more information about creating custom buttons, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-cognito/samplelogin.png" alt="Sample endpoint URLs" class="no-border" >}}

Users who are part of the user pool you created in Amazon Cognito can now log in with their Amazon Cognito user name and password.
