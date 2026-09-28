---
title: "PWA Wrapper: Push Notification Setup"
linktitle: "PWA Wrapper Push Setup"
url: /refguide/mobile/using-mobile-capabilities/push-notifications/notif-pwa-wrapper/
weight: 75
description: "How to configure push notification prerequisites when your progressive web app is packaged with PWA Wrapper."
---

## Introduction

This guide explains how to set up push notifications for a Mendix PWA packaged with PWA Wrapper. Unlike standard PWAs, wrapped PWAs behave like native applications, which changes how you integrate push notifications.

In a wrapped PWA, push notifications are handled natively through the device's operating system (Android or iOS) rather than through the browser. This guide takes you through Firebase configuration, PWA Wrapper integration, Push Notifications Connector setup, and app-level implementation.

## Prerequisites

Before starting this guide, make sure you have completed the following:

* [Install PWA Wrapper](/refguide/mobile/distributing-mobile-apps/pwa-wrapper/install-pwa-wrapper/)
* Have a Firebase account (https://firebase.google.com)

## Setting Up Firebase and PWA Wrapper

Follow these steps to configure Firebase and integrate it with PWA Wrapper:

### Step 1: Create and Configure Firebase Project

1. Follow the steps in [Setting Up the Google Firebase Cloud Messaging Server](/refguide/mobile/using-mobile-capabilities/push-notifications/setting-up-google-firebase-cloud-messaging-server/) to create a Firebase project and set up a service account.
2. In Firebase, add your Android and iOS apps to the project by following the same guide.
3. Download and securely store the configuration files:
   * For Android: `google-services.json`
   * For iOS: `GoogleService-Info.plist`

### Step 2: Configure PWA Wrapper for Push Notifications

When building your wrapped app with PWA Wrapper, enable push notification infrastructure:

1. Open the PWA Wrapper builder and select **Build** for your target platform (Android or iOS).
1. Navigate to the **App Packing** section.
1. Enable **Enable push notification infrastructure**.
1. Upload the appropriate Firebase configuration file:
   * For Android: select and upload `google-services.json`
   * For iOS: select and upload `GoogleService-Info.plist`
1. Complete the remaining builder steps as described in [Build PWA Wrapper Apps](/refguide/mobile/distributing-mobile-apps/pwa-wrapper/build-pwa-wrapper-apps/).

This configures the native layer to receive push notifications from Firebase Cloud Messaging (FCM).
{{% alert color="warning" %}}
Push notifications only work on physical devices. Emulators and simulators do not have the necessary Firebase Cloud Messaging infrastructure to receive push notifications. Always test push notifications on real Android and iOS devices.
{{% /alert %}}

## Installing Push Notifications Connector

Add the Push Notifications Connector module to your app:

1. In Mendix Studio Pro, download the [Push Notifications Connector](https://marketplace.mendix.com/link/component/3003) from the Marketplace.
1. Add it to your app following the standard module import process.
1. Complete the steps in [Adding Module Dependencies](/refguide/mobile/using-mobile-capabilities/push-notifications/notif-add-module-depends/) and [Implementing the Push Notifications Module](/refguide/mobile/using-mobile-capabilities/push-notifications/notif-implement-module/).

## Implementing Push Notification Registration

In your wrapped PWA application, create a nanoflow to handle device registration for push notifications. This nanoflow uses AppBuilderClient JavaScript actions to request permissions and retrieve device information.

### Creating the Registration Nanoflow

Create a new nanoflow in your app (for example, `ACT_RequestPushNotifications`) and add the following steps:

#### Step 1: Request Permission

1. Add a **Call JavaScript Action** activity.
1. Select the **RequestPermission** action from **AppBuilderClient**.
1. Set the parameter:
   * **Permission**: `notifications`
1. Assign the return value to a variable (for example, `$PermissionState`).

#### Step 2: Check Permission Status

1. Add a **Decision** activity to check if permission was granted.
1. Verify: `$PermissionState = 'granted'`
1. If the condition is false (permission denied), end the flow and optionally show a message to the user.

#### Step 3: Retrieve Device Information

Add three **Call JavaScript Action** activities to retrieve device details:

1. **GetDeviceInfo** from **AppBuilderClient**
   * Assign return value to `$DeviceInfo`

2. **GetPushToken** from **AppBuilderClient**
   * Assign return value to `$PushToken`

3. **GetOperatingSystem** from **AppBuilderClient**
   * Assign return value to `$OperatingSystem`

#### Step 4: Create Device Registration Object

1. Add a **Create Object** activity to create a new `PushNotifications.DeviceRegistration` object.
2. Assign the following attributes:
   * **DeviceType**: Use a decision based on the operating system:

     ```
     if $OperatingSystem = getKey(PushNotifications.DeviceSystemType.Android) then
         PushNotifications.DeviceType.Android
     else if $OperatingSystem = getKey(PushNotifications.DeviceSystemType.iOS) then
         PushNotifications.DeviceType.iOS
     else if $OperatingSystem = getKey(PushNotifications.DeviceSystemType.iPadOS) then
         PushNotifications.DeviceType.iOS
     else
         empty
     ```

   * **RegistrationID**: `$PushToken`
   * **DeviceId**: `$DeviceInfo/UniqueId`

3. Assign the created object to a variable (for example, `$NewDeviceRegistration`).

#### Step 5: Synchronize Device Registration

1. Add a **Synchronize** activity to commit the device registration object to the database.
1. Select `$NewDeviceRegistration` as the object to synchronize.

The complete nanoflow flow is shown below:

{{< figure src="/attachments/refguide/mobile/push-notifications/notif-pwa-wrapper/pwa-wrapper-push-nanoflow.png" alt="Push notification registration nanoflow for PWA Wrapper" max-width="80%" >}}

{{% alert color="info" %}}
The nanoflow requests the `notifications` permission, retrieves the device token and unique ID, and registers the device in the Push Notifications Connector database. This allows the runtime to send push notifications to this device.
{{% /alert %}}

### Calling the Registration Nanoflow

The registration nanoflow should run automatically each time the app opens—both on first launch and when the user returns to the app from the background. This ensures the FCM token stays current. The next section explains how to implement this using app lifecycle events.

## Running Push Notification Registration on App Lifecycle Events

To keep device registration up to date, run the registration nanoflow automatically whenever the app becomes active. Use the [Events](https://marketplace.mendix.com/link/component/224259) module from the Mendix Marketplace together with a custom JavaScript action that listens for app lifecycle changes.

### Step 1: Install the Events Module

Download and install the [Events](https://marketplace.mendix.com/link/component/224259) module from the Mendix Marketplace.

### Step 2: Create the ListenToAppLifecycle JavaScript Action

Create a new JavaScript action named `ListenToAppLifecycle` in your app with the following configuration:

* Add one parameter of type **Nanoflow**:
    * `onResume`

Use the following as the action's implementation:

```js
// BEGIN EXTRA CODE
let appLifecycleListenerInitialized = false;
// END EXTRA CODE

export async function ListenToAppLifecycle(onResume) {
    // BEGIN USER CODE

    if (appLifecycleListenerInitialized) {
        return;
    }

    appLifecycleListenerInitialized = true;

    const handleVisibilityChange = async () => {
        try {
            if (document.visibilityState === "visible") {
                if (onResume) {
                    await onResume();
                }
            }
        } catch (error) {
            console.error("Failed to handle app lifecycle event:", error);
        }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (document.visibilityState === "visible" && onResume) {
        await onResume();
    }

    // END USER CODE
}
```

The `appLifecycleListenerInitialized` guard prevents duplicate event listeners from being registered if the action is called more than once.

### Step 3: Create the Lifecycle Nanoflow

Create a new nanoflow (for example, `ACT_InitAppLifecycle`) and add the following:

1. Add a **Call JavaScript Action** activity.
1. Select the **ListenToAppLifecycle** action you created.
1. Set the parameters:
   * **onResume**: select the `ACT_RequestPushNotifications` nanoflow you created earlier

### Step 4: Add the Events Widget to the Home Page

1. Open your app's default home page in Studio Pro.
1. Add the **Events** widget from the installed Events module to the page.
1. In the widget properties, locate the **Component Load** event.
1. Set the action to **Call a nanoflow**.
1. Select the `ACT_InitAppLifecycle` nanoflow.

This ensures that every time the page loads—which happens when the app opens—the lifecycle listener is registered and the push notification registration nanoflow runs immediately. If the FCM token has changed since the last session, the updated token is saved automatically.

## Sending Push Notifications

After you have built and deployed your wrapped app with device registrations in place, use the standard Push Notifications Connector workflow to send notifications:

1. Follow [Configuring Push Notifications](/refguide/mobile/using-mobile-capabilities/push-notifications/notif-config-push/) to configure Firebase credentials in your app's administration page.
2. Use [Sending Your First Test Push Notification](/refguide/mobile/using-mobile-capabilities/push-notifications/notif-send-test/) to test sending a notification to a registered device.

When testing, verify behavior on physical Android and iOS devices to ensure notifications are received correctly.

## Read More

* [Push Notifications](/refguide/mobile/using-mobile-capabilities/push-notifications/)
* [PWA Wrapper](/refguide/mobile/distributing-mobile-apps/pwa-wrapper/)
* [PWA Wrapper Capabilities](/refguide/mobile/distributing-mobile-apps/pwa-wrapper/pwa-wrapper-capabilities/)
* [PWA Wrapper Limitations](/refguide/mobile/distributing-mobile-apps/pwa-wrapper/pwa-wrapper-limitations/)
* [PWA Wrapper Deep Linking](/refguide/mobile/distributing-mobile-apps/pwa-wrapper/pwa-wrapper-deep-linking/)
