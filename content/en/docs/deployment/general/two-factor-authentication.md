---
title: "Two-Factor Authentication"
url: /developerportal/deploy/two-factor-authentication/
weight: 1
description: "Describes the purpose and functionality of 2FA in the Mendix Portal."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

Mendix Cloud provides two-factor authentication (2FA) to help secure your account. 2FA requires you to identify yourself using your password as well as a second authentication mechanism.

This extra layer of authentication is required when you perform sensitive activities on Mendix Cloud nodes, such as deploying packages and handling production data. Actions that require 2FA are indicated by a padlock ({{% icon name="lock" %}}) in [Apps](https://sprintr.home.mendix.com). For example, switching to the production environment requires 2FA.

{{< figure src="/attachments/deployment/general/two-factor-authentication/production.png" max-width=30% alt="" class="no-border" >}}

To use 2FA, you need to have access to your mobile phone and an active session in the Mendix Portal.

## Setting Up and Using 2FA

To set up 2FA, you first need to perform an action that requires 2FA. For example, on the [Environments](/developerportal/deploy/environments/) page of your app, you could click **Details** ({{% icon name="notes-paper-edit" %}}) on the production environment.

Then, choose one of the two authentication methods:

{{< figure src="/attachments/deployment/general/two-factor-authentication/authenticator-choice.png"  max-width=70% alt="" >}}

You can set up either [authentication via SMS](#sms-authentication) or [authentication via an authenticator app](#app-authentication). Instructions for both authentication methods are provided below.

Once 2FA is set up, whenever you perform an action that requires 2FA, you will receive an authentication code via the authentication method you have configured. You can then provide this code in the Mendix Portal to authenticate yourself.

Whenever you authenticate yourself using 2FA, your browser session will be authorized to complete sensitive operations for the next eight hours. You will need to reauthenticate after eight hours or if you start a new browser session. Logging out, switching browsers, or switching machines starts a new session.

### Authenticating with SMS{#sms-authentication}

For this 2FA method, you need a phone number connected to a mobile phone or other device that can receive SMS messages. 

#### SMS Setup

To set up 2FA with SMS, follow this process:

1. Click **Use SMS** in the dialog box that opens the first time you perform an action that requires 2FA.
2. Enter a phone number to which SMS messages can be sent. Click **Send text message**.

    {{< figure src="/attachments/deployment/general/two-factor-authentication/setup-sms.png" max-width=70% alt="" >}}

3. Check your text messages to retrieve the verification code. Enter the code and click **Activate**.

    {{< figure src="/attachments/deployment/general/two-factor-authentication/enter-sms-code.png" max-width=70% alt="" >}}

#### SMS Authentication

Once you have 2FA configured to use SMS, you can use it to complete sensitive operations in the Mendix Portal. When you perform an operation that requires 2FA, you can send an authentication code to your mobile phone.

{{< figure src="/attachments/deployment/general/two-factor-authentication/authentication-sms.png" max-width=70%  alt="" class="no-border" >}}

Then, authenticate yourself by entering the authentication code from the text message.

{{< figure src="/attachments/deployment/general/two-factor-authentication/please-authenticate.png" max-width=70% alt="" class="no-border" >}}

### Authenticating with an Authenticator App{#app-authentication}

{{% alert color="info" %}}For this 2FA method, you can use [Google Authenticator](https://support.google.com/accounts/answer/1066447), [Microsoft Authenticator](https://support.microsoft.com/en-us/account-billing/download-and-install-the-microsoft-authenticator-app-351498fc-850a-45da-b7b6-27e523b8702a), or any other authenticator app that generates time-based one-time passwords.{{% /alert %}}

#### Authenticator App Setup

To set up 2FA with an authenticator app, follow this process:

1. Click **Use Authenticator** in the dialog box that opens when you use 2FA for the first time.
2. Follow the setup steps outlined in the **Authenticator** dialog box:
    
    {{< figure src="/attachments/deployment/general/two-factor-authentication/authenticator-app-setup.png" max-width=70% alt="" >}}

    1. **Download a client** – Install and open an authenticator app on your mobile phone.
    2. **Set up your authenticator** – Add an account in your authenticator app, using the provided key or QR code.
    3. **Enter a code** – In the **Authenticator** dialog box, enter the code from your authenticator app.
    4. Click **Activate**.

Your account is now secured with 2FA and ready to use.

#### Authenticator App Authentication

Once you have 2FA configured to use an authenticator app, you can use it to complete sensitive operations in the Mendix Portal. When you perform operations that require 2FA, you can use your authenticator app to get a six-digit code that is valid for 60 seconds. You will need to enter that code in the Mendix Portal to authenticate yourself.

{{< figure src="/attachments/deployment/general/two-factor-authentication/enter-authenticator-code.png" max-width=70% alt="" >}}

## Changing Your Authentication Method{#change-2fa-method}

To change your 2FA method, phone number, or authenticator app, you need to deactivate your 2FA and then set it up again with your new details.

To deactivate your 2FA, go to **User Settings** > [Developer Settings](/community-tools/mendix-profile/user-settings/#dev-settings). Then, in the **Two-Factor Authentication (2FA)** section, click **Deactivate**.

{{< figure src="/attachments/deployment/general/two-factor-authentication/deactivate.png" alt="" >}}

In the dialog box that opens, confirm that you want to deactivate your 2FA. This sends a verification email to your registered email address; click the **Deactivate 2FA** link in the email to complete the deactivation process. The email link is valid for several minutes; if it expires before you use it, you can repeat this process to get a new link.

{{% alert color="info" %}}Your Company Security Contact (or Company Admin) will receive notification emails when you initiate and complete the deactivation process.{{% /alert %}}

Once your 2FA is deactivated, your Developer Settings will show the following message:

{{< figure src="/attachments/deployment/general/two-factor-authentication/not-configured.png" max-width=70% alt="" >}}

You can reactivate your 2FA by triggering any action that requires 2FA. Then, set up your new authentication method using the setup steps outlined on this page.

## Read More

* [Settings](/developerportal/settings/)
