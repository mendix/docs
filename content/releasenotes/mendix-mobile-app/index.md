---
title: "Mendix Mobile App"
description: "These are the release notes for the Mendix mobile app."
toc-level: 1
---

{{% alert type="info" %}}
To download the **Mendix** mobile app, select one of the download links below:

* [Download for iOS](https://itunes.apple.com/app/mendix/id458058946?mt=8)
* [Download for Android](https://play.google.com/store/apps/details?id=com.mendix.SprintrMobile)
{{% /alert %}}

## 4.7.1

**Release date: March 26th, 2018**

### Fixes

* We fixed an issue where hybrid apps were stuck in either offline or online mode.

## 4.7.0

**Release date: March 23rd, 2018**

### New Functionality

* We added support for opening offline-capable hybrid apps. To open an offline-capable app through the QR scanner, enable the `offline` toggle in the Modeler's `View App` dialog. To open an offline-capable app by entering a URL manually, enable the `offline` toggle within the app.

### Improvements

* Hybrid apps now use the newly styled loading screen, login screen, and error screen.

### Fixes

* Deep links (for example, links to your Mendix app) opened using the Mendix mobile app are now properly sanitized.

### Known Issues

* The Mendix feedback widget does not always load properly on iOS.
* Mendix hybrid apps (loaded using, for example, the QR scanner or the manual app loading screen) are not able to use the barcode scanning widget. Using the barcode scanning functionality from within an app-specific hybrid app (meaning, one built using the mobile app flow from the Mendix Developer Portal) should not pose any problems.

## 4.6.0

**Release date: November 30th, 2017**

### New Functionality

* We added support for the new iPhone X (form factor, notch).

### Known Issue

* Mendix hybrid apps (loaded using, for example, the QR scanner or the manual app loading screen) are not able to use the barcode scanning widget. Using the barcode scanning functionality from within an app-specific hybrid app (meaning, one built using the mobile app flow from the Mendix Developer Portal) should not pose any problems.

## 4.5.0

**Release date: October 24th, 2017**

### New Functionality

* You can now automatically open `mxapps.io` and `mendixcloud.com` URLs with the app
* You can share your Mendix app via email, WhatsApp, etc.
* You can post new message directly to an app's Buzz
* You can start creating your Mendix account from the app

### Deprecations and Removals

* We removed support for custom profiles (which were deprecated with Mendix [7.4](../desktop-modeler/7.4)).

### Known Issue

* Mendix hybrid apps (loaded using, for example, the QR scanner or the manual app loading screen) are not able to use the barcode scanning widget. Using the barcode scanning functionality from within an app-specific hybrid app (meaning, one built using the mobile app flow from the Mendix Developer Portal) should not pose any problems.

## 4.4.1 (iOS only)<a name="RN441"></a>

**Release date: October 2nd, 2017**

### Bug Fixes

* We fixed support for iOS 11: loading a Mendix hybrid app (for example, by using the QR scanner or from the **Apps** page) caused the Mendix mobile app to crash. This issue has been resolved.

### Known Issue

* Mendix hybrid apps (loaded using, for example, the QR scanner or the manual app loading screen) are not able to use the barcode scanning widget. Using the barcode scanning functionality from within an app-specific hybrid app (meaning, one built using the mobile app flow from the Mendix Developer Portal) should not pose any problems.

## 4.4.0

**Release date: July 21st, 2017**

### New Functionality

* You'll now see a few introductory slides when you use the app for the first time.
* The **Apps** page now contains an overview of recently opened hybrid apps.

### Improvements

* The sidebar closes automatically when you press one of the menu items.
* We've increased the touch area of back buttons so that they're easier to press.

### Bug Fixes

* Web URLs in hybrid apps now work as expected.

### Known Issue

* On iOS 11, loading one of the sample apps or loading an app using the QR scanner will crash the application. 
    * Fixed in [4.4.1](#RN441).

## 4.3.0

**Release date: July 10th, 2017**

### New Functionality

We have added two new features to accelerate your app delivery projects:

* Easily test your hybrid mobile Mendix apps on your phone by scanning the QR code shown in the Mendix Modeler from the convenience of the Mendix mobile app.
* Review the capabilities of Atlas UI and the Mendix Platform through the showcases accessible through the Mendix mobile app. The above features are available without logging in. However, you still need to log in if you want to use **Buzz**.

## 4.1.0

**Release date: April 7th, 2017**

With this release, we greatly improved the user experience of the Mendix mobile app.

### New Functionality

* The **Buzz** can be read without an internet connection.
* We greatly improved the overall performance of app and the app startup time.
* We added a pull-down to refresh to the **Buzz** and **Post Details**.
* We added a progress indicator when loading new messages.
* We added infinite scrolling to the **Buzz**.
* Recent messages are now cached on the device.
* We added a new message notification to the **Buzz**.
* We added the option to edit messages which failed to send.
