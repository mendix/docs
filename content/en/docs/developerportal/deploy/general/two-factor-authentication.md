---
title: "Two-Factor Authentication"
url: /developerportal/deploy/two-factor-authentication/
weight: 20
description: "Describes what two-factor authentication is. Also explains how to set it up and change it."
tags: ["Authenticator","Developer Portal","Cloud","Permissions", "Google", "Microsoft", "2FA", "SMS"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/two-factor-authentication.pdf).
{{% /alert %}}

## 1 Introduction

Two-factor authentication (2FA) is required for some operations when managing apps in the [Developer Portal](http://sprintr.home.mendix.com). Also, Technical Contacts must use 2FA with their Mendix account when accessing licensed cloud node details; specifically, Technical Contacts must use 2FA when transporting MDA files (deployment archives) to the production environment.

This document describes the purpose and functionality of 2FA in the Developer Portal.

## 2 The Purpose

Two-factor authentication requires you to identify yourself using your password as well as a second authentication mechanism. This extra layer of authentication is required when you perform sensitive activities on Mendix Cloud nodes, such as deploying packages and handling production data. To use 2FA, you need to have access to your mobile phone and an active session in the Mendix Developer Portal.

Actions that require 2FA are indicated by a padlock ({{% icon name="lock" %}}). For example, switching to the production environment requires 2FA.

{{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/production.png" width=25% >}}

## 3 How It Works

There are two methods for performing 2FA in the Developer Portal:

* Enter your phone number so that you can receive an SMS message containing an authentication code
* Enable an authenticator app, such as Google Authenticator or Microsoft Authenticator

Once 2FA is set up, you can use your chosen method to receive an authentication code. You need to provide this code to the Developer Portal in order to complete certain operations.

Whenever you successfully complete 2FA, your browser session will be authorized for the next eight hours.

{{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/information.png"   width=70%  >}}

To set up 2FA, you first need to perform an action that requires 2FA. For example, you could click **Transport to Production** on the **Environments** page of your app.

Then, choose one of the two authentication options.

{{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/sms-or-google.png" width=70% alt="" >}}

Instructions for both authentication options are provided below.

### 3.1 Authenticating with SMS

For SMS authentication, you need to have a phone number connected to a mobile phone or other device that can receive SMS messages. To set up 2FA with SMS, follow this process:

1. Click **Use SMS** in the dialog box that opens the first time you perform an action that requires 2FA.
2. Enter a phone number to which SMS messages can be sent. Click **Send text message**.

    {{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/setup-sms.png"   width=70% >}}

3. Enter the authentication code, which is sent as an SMS message to your device. Click **Activate**.

    {{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/enter-sms.png"   width=70% >}}

In the future, when you perform operations that require 2FA, you will need to authenticate by sending a text message to your phone.

{{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/authentication-sms.png"   width=70%  >}}

Then, you can enter the authentication code from the text message to unlock 2FA.

{{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/please-authenticate.png"   width=70% >}}

### 3.2 Authenticating with an Authenticator App

To set up 2FA with an authenticator app, follow this process:

1. Click **Use Authenticator App** in the dialog box that opens when you use 2FA for the first time.
2. Install and open an authenticator app on your smartphone. You can use [Google Authenticator](https://support.google.com/accounts/answer/1066447), [Microsoft Authenticator](https://support.microsoft.com/en-us/account-billing/download-and-install-the-microsoft-authenticator-app-351498fc-850a-45da-b7b6-27e523b8702a), or any other authenticator app that generates time-based one-time passwords.
3. Select **Set up account** on the main page.
4. Select **Scan a barcode** or **Enter provided key**.
5. Scan the barcode or enter the six-digit time-based code.
6. Once your authenticator app is set up, you will be asked to confirm by entering the code from your authenticator app.

    {{< figure src="/attachments/developerportal/deploy/general/two-factor-authentication/authenticator.png" width=70% alt="" class="image-border" >}}

Your account is now secured with 2FA and ready to use.

In the future, when you perform operations that require 2FA, you will get a six-digit number that is valid for 60 seconds. You will need to enter that number to validate your account.

## 4 Changing your Device or Phone Number

If you change your device or phone number, contact [Mendix Support](https://support.mendix.com/) to disable the authenticator on your Mendix account.

You can reactivate 2FA by triggering any action that requires 2FA.

## 5 Changing the Authentication Method

After you have set up your authentication method, you cannot change the authentication method yourself. Only [Mendix Support](https://support.mendix.com) can disable the current authentication method. After the authentication method has been disabled, it can be set to a different method.

For example, if you want to change your authentication method from **SMS Authentication** to **Authenticator App**, submit a [Mendix Support request](https://support.mendix.com//requests/new) and ask for your two-factor authentication to be reset.

## 7 Read More

* [Deploy and Manage](/developerportal/deploy/)
* [Settings](/developerportal/settings/)
