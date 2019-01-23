---
title: "Set Up the Apple Push Notification Server"
parent: "push-notifications"
menu_order: 30
tags: ["mobile", "push notification", "apple", "server"]
---
In order to proceed you need an Apple developer license and a device running Mac OS X.

We assume that you already have the app signing key with provisioning profile and can freely build and install your mobile app (if not, please refer to [this how-to](publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores)). Take into account that your App ID should use `Explicit App ID` and have `Push Notifications` turned on so you can receive push notifications with your app.

![](attachments/19955752/20217895.png)

If this is not the case, you need to create new App ID with `Explicit App ID` and `Push Notifications` turned on. After following the steps below, you'll need to generate and download a new provisioning profile for this App ID and use it to rebuild the mobile app.

If everything is set up and you can build and deploy your application, you can proceed with setting up the push notifications server. To establish connectivity between your notification server and the Apple Push Notification service you will need either:

- an Apple Push Notification service key; or
- an Apple Push Notification service SSL certificate in `.p12` format.

### Option A: Using a key

Follow these steps to obtain and set up an Apple Push Notifications key from Apple:

#### Step 1 - Log in to Apple Developer center

Log in to Apple Developer and navigate to [https://developer.apple.com/account/ios/authkey/](https://developer.apple.com/account/ios/authkey/).

#### Step 2 - Create a key

Click on the + icon in the top right. This will present you with a new form. Enter a descriptive name for this key, and tick the Push Notifications service checkbox, and press Continue. On the next page, press Confirm.

#### Step 3 - Download the key

Press the download button and store the key in a secure place. Also, copy the Key ID for use in the next step.

#### Step 4 - Configure APNs in your application

For the last step you need to configure APNs within your application. This can be done by logging into your application as a user with Administrator role and navigating to the `PushNotifications_Administration` page that was set up in [step 7](implementation-guide) of the Implementation Guide.

For this purpose you need to

*   Create a new APNs configuration
*	Choose a name for the new configuration
*   Choose a topic for the new configuration; you can freely choose one
*	Set the Authentication Type to Token
*   Add your Apple Push Notification service key
*	Enter your team ID as shown on the Apple developer website
*	Enter the key ID as copied during the previous step

### Option B: Using an SSL certificate

Follow these steps to obtain and set up an Apple Push Notifications service SSL certificate from Apple:

#### Step 1 - Log in to Apple Developer center

Log in to Apple Developer and select your app on [https://developer.apple.com/account/ios/identifier/bundle](https://developer.apple.com/account/ios/identifier/bundle).

#### Step 2 - Choose certificate's type

Click on Edit, scroll to the Push Notifications section, and choose to configure either a Development certificate or a Production certificate. Development certificate can only be used with iOS apps built and run in development mode; production certificates can only be used with apps built and run in production mode.

#### Step 3 - CSR file

The wizard now explains how to create a Certificate Signing Request (CSR). Please read this description and press Continue. During the next step you should be asked for your CSR file (Certificate Signing Request). You may use the same CSR that you used to create the app signing certificate. If you don't have one, please follow the instructions as shown below.

![](attachments/19955752/20217898.png)

#### Step 4 - Download the certificate

Download your Apple Push Notification service SSL certificate and add it to your Keychain.

This certificate needs to be converted into the `.p12` format. If you don’t know how to do this, please refer to [this page](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html).

#### Step 5 - Configure APNs in your application

For the last step you need to configure APNs within your application. This can be done by logging into your application as a user with Administrator role and navigating to the `PushNotifications_Administration` page that was set up in [step 7](implementation-guide) of the Implementation Guide. Then configure APNs as follows:

*   Create a new APNs configuration
*	Choose a name for the new configuration
*   Choose a topic for the new configuration; you can freely choose one
*	Set the Authentication Type to Certificate
*	Choose the Stage that corresponds to the type of certificate you have created
*   Add your Apple Push Notification service SSL certificate in `.p12` format
*	Enter the password that you used during creation of the certificate
