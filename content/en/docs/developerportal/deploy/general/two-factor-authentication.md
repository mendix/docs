---
title: "Two-Factor Authentication"
url: /developerportal/deploy/two-factor-authentication/
weight: 20
description: "Describes the purpose and functionality of 2FA in the Developer Portal."
tags: ["Authenticator","Developer Portal","Cloud","Permissions", "Google", "Microsoft", "2FA", "SMS"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Mendix Cloud provides two-factor authentication (2FA) to help secure your account. 2FA requires you to identify yourself using your password as well as a second authentication mechanism.

This extra layer of authentication is required when you perform sensitive activities on Mendix Cloud nodes, such as deploying packages and handling production data. Actions that require 2FA are indicated by a padlock ({{% icon name="lock" %}}) in the [Developer Portal](http://sprintr.home.mendix.com). For example, switching to the production environment requires 2FA.

{{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/production.png" max-width=30% alt="" >}}

To use 2FA, you need to have access to your mobile phone and an active session in the Mendix Developer Portal.

## 2 Setting Up and Using 2FA

To set up 2FA, you first need to perform an action that requires 2FA. For example, on the [Environments](/developerportal/deploy/environments/) page of your app, you could click **Details** ({{% icon name="notes-paper-edit" %}}) on the production environment.

Then, choose one of the two authentication methods:

{{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/authenticator-choice.png"  class="image-border" max-width=70% alt="" >}}

You can set up either [authentication via SMS](#sms-authentication) or [authentication via an authenticator app](#app-authentication). Instructions for both authentication methods are provided below.

Once 2FA is set up, whenever you perform an action that requires 2FA, you will receive an authentication code via the authentication method you have configured. You can then provide this code in the Developer Portal to authenticate yourself.

Whenever you authenticate yourself using 2FA, your browser session will be authorized to complete sensitive operations for the next eight hours.

### 2.1 Authenticating with SMS{#sms-authentication}

For this 2FA method, you need a phone number connected to a mobile phone or other device that can receive SMS messages. 

#### 2.1.1 SMS Setup

To set up 2FA with SMS, follow this process:

1. Click **Use SMS** in the dialog box that opens the first time you perform an action that requires 2FA.
2. Enter a phone number to which SMS messages can be sent. Click **Send text message**.

    {{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/setup-sms.png" class="image-border" max-width=70% alt="" >}}

3. Check your text messages to retrieve the verification code. Enter the code and click **Activate**.

    {{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/enter-sms-code.png" class="image-border" max-width=70% alt="" >}}

#### 2.1.2 SMS Authentication

Once you have 2FA configured to use SMS, you can use it to complete sensitive operations in the Developer Portal. When you perform an operation that requires 2FA, you can send an authentication code to your mobile phone.

{{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/authentication-sms.png" max-width=70%  alt="" >}}

Then, authenticate yourself by entering the authentication code from the text message.

{{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/please-authenticate.png" max-width=70% alt="" >}}

### 2.2 Authenticating with an Authenticator App{#app-authentication}

{{% alert color="info" %}}For this 2FA method, you can use [Google Authenticator](https://support.google.com/accounts/answer/1066447), [Microsoft Authenticator](https://support.microsoft.com/en-us/account-billing/download-and-install-the-microsoft-authenticator-app-351498fc-850a-45da-b7b6-27e523b8702a), or any other authenticator app that generates time-based one-time passwords.{{% /alert %}}

#### 2.2.1 Authenticator App Setup

To set up 2FA with an authenticator app, follow this process:

1. Click **Use Authenticator** in the dialog box that opens when you use 2FA for the first time.
2. Follow the setup steps outlined in the **Authenticator** dialog box:
    
    {{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/authenticator-app-setup.png" max-width=70% alt="" class="image-border" alt="" >}}

    1. **Download a client** – Install and open an authenticator app on your mobile phone.
    2. **Set up your authenticator** – Add an account in your authenticator app, using the provided key or QR code.
    3. **Enter a code** – In the **Authenticator** dialog box, enter the code from your authenticator app.
    4. Click **Activate**.

Your account is now secured with 2FA and ready to use.

#### 2.2.2 Authenticator App Authentication

Once you have 2FA configured to use an authenticator app, you can use it to complete sensitive operations in the Developer Portal. When you perform operations that require 2FA, you can use your authenticator app to get a six-digit code that is valid for 60 seconds. You will need to enter that code in the Developer Portal to authenticate yourself.

{{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/enter-authenticator-code.png" max-width=70% alt="" class="image-border" alt="" >}}

## 3 Changing Your Authentication Method or Phone Number

After you have set up your 2FA, you cannot change the authentication method yourself. Only [Mendix Support](https://support.mendix.com) can deactivate the current authentication method. After Support has deactivated your authentication method, you can then set up a different authentication method.

This also applies if you want to change your phone number or authenticator app.

For example, if you want to change your authentication method from SMS to an authenticator app, submit a [Mendix Support request](https://support.mendix.com//requests/new) and ask for your two-factor authentication to be reset.

Once your 2FA is deactivated, you can reactivate it by triggering any action that requires 2FA. Then, set up your new authentication method using the setup steps outlined on this page.

## 4 Read More

* [Deploy](/developerportal/deploy/)
* [Settings](/developerportal/settings/)
