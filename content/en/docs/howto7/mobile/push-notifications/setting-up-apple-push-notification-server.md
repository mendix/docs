---
title: "Set Up the Apple Push Notification Server"
url: /howto7/mobile/setting-up-apple-push-notification-server/
weight: 30
tags: ["mobile", "push notification", "apple", "server"]
---

## 1 Introduction

In order to proceed you need an Apple developer license and a device running Mac OS X.

We assume that you already have the app signing key with provisioning profile and can freely build and install your mobile app (if not, please refer to [this how-to](/howto7/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)). Take into account that your App ID should use `Explicit App ID` and have `Push Notifications` turned on so you can receive push notifications with your app.

{{< figure src="/attachments/howto7/mobile/push-notifications/setting-up-apple-push-notification-server/20217895.png" >}}

If this is not the case, you need to create new App ID with `Explicit App ID` and `Push Notifications` turned on. After following the steps below, you'll need to generate and download a new provisioning profile for this App ID and use it to rebuild the mobile app.

If everything is set up and you can build and deploy your application, you can proceed with setting up the push notifications server. To establish connectivity between your notification server and the Apple Push Notification service you will need either:

* An Apple Push Notification service key, or
* An Apple Push Notification service SSL certificate in the *.p12* format

## 2 Option A: Using a key

Follow the steps below to obtain and set up an Apple Push Notifications key from Apple.

### 2.1 Logging In to the Apple Developer Center

Log in to Apple Developer and navigate to [https://developer.apple.com/account/ios/authkey/](https://developer.apple.com/account/ios/authkey/).

### 2.2 Creating a Key

Click on the **+** icon on the upper-right side of the screen. This will present you with a new form. Enter a descriptive name for this key, select the **Push Notifications service** check box, and then press **Contine**. On the next page, press **Confirm**.

### 2.3 Downloading the Key

Press the download button and store the key in a secure place. Also, copy the **Key ID** for use in the next step.

### 2.4 Configuring APNs in Your Application

For the last step, you need to configure APNs within your application. This can be done by logging into your application as a user with the Administrator role and navigating to the **PushNotifications_Administration** page that was set up in [step 7](/howto7/mobile/implementation-guide/#setting) of *How to Implement Push Notifications*.

For this purpose, do the following:

* Create a new APNs configuration, and choose a name for the new configuration
* Choose a topic for the new configuration (you can freely choose one)
  *	Set the **Authentication Type** to **Token**
  * If you receive a "topic disallowed" error message, leave the topic field empty
* Add your Apple Push Notification service key
  *	Enter your team ID as shown on the Apple developer website
  *	Enter the key ID as copied during the previous step

## 3 Option B: Using an SSL certificate

Follow the stepsbelow to obtain and set up an Apple Push Notifications service SSL certificate from Apple.

### 3.1 Logging in to the Apple Developer Center

Log in to Apple Developer and select your app on [https://developer.apple.com/account/ios/identifier/bundle](https://developer.apple.com/account/ios/identifier/bundle).

### 3.2 Choosing the Certificate Type

Click **Edit**, scroll to the **Push Notifications** section, and choose to configure either a **Development** certificate or a **Production** certificate. A Development certificate can only be used with iOS apps built and run in development mode. Production certificates can only be used with apps built and run in production mode.

### 3.3 Creating the CSR File

The wizard now explains how to create a Certificate Signing Request (CSR). Read this description and press **Continue**. During the next step, you should be asked for your CSR file. You may use the same CSR you used to create the app signing certificate. If you do not have one, please follow the instructions as shown below.

{{< figure src="/attachments/howto7/mobile/push-notifications/setting-up-apple-push-notification-server/20217898.png" >}}

### 3.4 Downloading the Certificate

Download your Apple Push Notification service SSL certificate and add it to your Keychain.

This certificate needs to be converted into the *.p12* format. If you do not know how to do this, refer to [What is app signing?](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html).

### 3.5 Configuring APNs in Your Application

For the last step, you need to configure APNs within your application. This can be done by logging into your application as a user with Administrator role and navigating to the **PushNotifications_Administration** page that was set up in [step 7](/howto7/mobile/implementation-guide/#setting) of *How to Implement Push Notifications*.

For this purpose, do the following:

* Create a new APNs configuration, and choose a name for the new configuration
* Choose a topic for the new configuration (you can freely choose one)
  *	Set the **Authentication Type** to **Certificate**
  *	Choose the **Stage** that corresponds to the type of certificate you have created
* Add your Apple Push Notification service SSL certificate in the *.p12* format
  *	Enter the password that you used during creation of the certificate
