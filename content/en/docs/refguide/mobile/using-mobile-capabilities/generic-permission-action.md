---
title: "App Permissions"
url: /refguide/mobile/using-mobile-capabilities/generic-permission-action/
weight: 85
description: "This guide teaches you how to use request generic permission actions for native mobile apps."
---

## Introduction

Advanced features in mobile apps often require permission from users. Apps need to respect the user's privacy, so it is common practice for an app to request the user's permission before storing media and data. To get permission, you can build a generic JavaScript action. This generic action will allow your app to ask for specific permissions before accessing a mobile capability, such as the device camera or location.

## Prerequisites

* Complete the [Prerequisites](/refguide/mobile/distributing-mobile-apps/building-native-apps/deploying-native-app/#prerequisites) section of *Build a Mendix Native App in the Cloud*.
* Install Mendix Studio Pro to use the Native Mobile App Builder and the latest Nanoflow Commons module.
* Confirm your [Native Mobile Resources](/appstore/modules/native-mobile-resources/) module is up to date.
* Confirm you are using the latest version of the [Make It Native 10 app](/releasenotes/mobile/make-it-native-parent/).

## Using a Generic Permission Action

A generic permission action can be used inside nanoflows in an existing app or in a new app. With a nanoflow open, you can find it in the Toolbox under the **Native Mobile** section.

### Naming the Permission

When using the generic permission action you must choose the permission name you need. It should be one of the available permissions in `NanoflowCommons.Enum_Permissions` enumeration.

{{% alert color="info" %}}
Keep in mind that the permission names are different for each platform. For example, if you need to request permission to access reading contacts you will need to call the actions twice: one for iOS permission (`CONTACTS_IOS`) and one for Android permission (`READ_CONTACTS_ANDROID`).
{{% /alert %}}

### Action Return Type Statuses

This action returns the status of the permission after the action, and it is of type `NanoflowCommons.Enum_PermissionStatus`. The statuses are as follows:

|Permission status|Notes|
|-----------------|-----|
|`NanoflowCommons.Enum_PermissionStatus.granted`| The permission is granted after requesting it from the user, or it was already granted previously. |
|`NanoflowCommons.Enum_PermissionStatus.unavailable`| This feature is not available on this device. |
|`NanoflowCommons.Enum_PermissionStatus.denied`| The permission is denied but can still be requested. |
|`NanoflowCommons.Enum_PermissionStatus.blocked`| The permission is blocked. The user must open the app settings themselves and grant permission from there. |
|`NanoflowCommons.Enum_PermissionStatus.limited`| The permission is granted but with limitations. |

{{% alert color="info" %}}
When the permission is blocked, if a user requests it a pop-up window will ask them to open their settings to grant the permission. Furthermore, the Mendix developer will receive a **blocked** status.
{{% /alert %}}

{{% alert color="info" %}}
These permissions statuses match the statuses that are received from the action, so you should not override them.
{{% /alert %}}

### Permission Usage Example

This an example for requesting contact access permission for Android and iOS devices:

1. Determine the user's running platform (Android or iOS) by using the **Get device info** action (in the Toolbox's **Native mobile** section).
1. Branch your logic based on the current platform:
    1. For the Android branch, use a **Generic permission** action with a permission name like {READ_CONTACTS_ANDROID}.
    1. For the iOS branch, use a **Generic permission** action with a permission name like {CONTACTS_IOS}:

        {{< figure src="/attachments/refguide/mobile/native-mobile/generic-permission-action/fullExample.png" alt="use generic permission"   width="400"  class="no-border" >}}
      
        {{< figure src="/attachments/refguide/mobile/native-mobile/generic-permission-action/decision.png" alt="decision"   width="400"  class="no-border" >}}
      
        {{< figure src="/attachments/refguide/mobile/native-mobile/generic-permission-action/android.png" alt="android permission"   width="400"  class="no-border" >}}
      
        {{< figure src="/attachments/refguide/mobile/native-mobile/generic-permission-action/ios.png" alt="ios permission"   width="400"  class="no-border" >}}

## Building

### Development

#### iOS

The following permissions can be tested using the iOS Make It Native app:

* CAMERA
* FACE_ID
* LOCATION_WHEN_IN_USE
* MICROPHONE
* PHOTO_LIBRARY

To test the remaining permissions you can build [native app](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/) and [update the native app](#update-ios-native-permissions) with the required permissions.

#### Android

The following permissions can be tested using the Android Make It Native app:

* ACCESS_FINE_LOCATION
* BLUETOOTH_CONNECT
* BLUETOOTH_SCAN
* CALL_PHONE
* RECORD_AUDIO
* CAMERA
* READ_EXTERNAL_STORAGE
* WRITE_EXTERNAL_STORAGE
* SCHEDULE_EXACT_ALARM

To test the remaining permissions you can build a [native app](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/) and [update the native app](#update-android-native-permissions) with the required permissions.

### Deployment

During deployment you must specify the permissions that your application has used to be able to request them from the user on production. To do that you can navigate to **App permissions** while using Native Builder UI and add the permissions you are using in your application for iOS and Android.

{{% alert color="info" %}}
The permissions that you cannot find using the Native Builder UI can be added manually per the [Update Native App Permissions](#update-native-permissions) section below.
{{% /alert %}}

## Updating Native App Permissions {#update-native-permissions}

### iOS {#update-ios-native-permissions}

Update your *ios/podfile* file with the required permissions:

```xml
# ⬇️ uncomment the permissions you need
setup_permissions([
  # 'AppTrackingTransparency',
  # 'Bluetooth',
  # 'Calendars',
  # 'CalendarsWriteOnly',
  # 'Camera',
  # 'Contacts',
  # 'FaceID',
  # 'LocationAccuracy',
  # 'LocationAlways',
  # 'LocationWhenInUse',
  # 'MediaLibrary',
  # 'Microphone',
  # 'Motion',
  # 'Notifications',
  # 'PhotoLibrary',
  # 'PhotoLibraryAddOnly',
  # 'Reminders',
  # 'Siri',
  # 'SpeechRecognition',
  # 'StoreKit',
])
```

To allow a Siri permission you will need to enable Siri capability in your app. This can be done one of two ways:

* The first way is by navigating to **Xcode** > **Signing & Capabilities** > **+** > **Siri** and then enabling the capability
* The second way is by updating the */ios/{app name}/{app name}.entitlements* file as follows:

    ```xml
	<?xml version="1.0" encoding="UTF-8"?>
	<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
	<plist version="1.0">
	<dict>
		<!-- … -->
		<key>com.apple.developer.siri</key>
		<true/>
	</dict>
	</plist>
    ```

#### Run Pod Install in your iOS directory

Run `pod install` in your iOS app's directory to install and update the necessary dependencies, including the permission-related configurations you just added.

#### Add Permissions Usage Descriptions 

Add the corresponding permissions usage descriptions to your *Info.plist*:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <!-- 🚨 Keep only the permissions specified in setup_permissions 🚨 -->
  <key>NSAppleMusicUsageDescription</key>
  <string>[REASON]</string>
  <key>NSBluetoothAlwaysUsageDescription</key>
  <string>[REASON]</string>
  <key>NSBluetoothPeripheralUsageDescription</key>
  <string>[REASON]</string>
  <key>NSCalendarsFullAccessUsageDescription</key>
  <string>[REASON]</string>
  <key>NSCalendarsWriteOnlyAccessUsageDescription</key>
  <string>[REASON]</string>
  <key>NSCameraUsageDescription</key>
  <string>[REASON]</string>
  <key>NSContactsUsageDescription</key>
  <string>[REASON]</string>
  <key>NSFaceIDUsageDescription</key>
  <string>[REASON]</string>
  <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
  <string>[REASON]</string>
  <key>NSLocationTemporaryUsageDescriptionDictionary</key>
  <dict>
    <key>YOUR-PURPOSE-KEY</key>
    <string>[REASON]</string>
  </dict>
  <key>NSLocationWhenInUseUsageDescription</key>
  <string>[REASON]</string>
  <key>NSMicrophoneUsageDescription</key>
  <string>[REASON]</string>
  <key>NSMotionUsageDescription</key>
  <string>[REASON]</string>
  <key>NSPhotoLibraryUsageDescription</key>
  <string>[REASON]</string>
  <key>NSPhotoLibraryAddUsageDescription</key>
  <string>[REASON]</string>
  <key>NSRemindersFullAccessUsageDescription</key>
  <string>[REASON]</string>
  <key>NSSpeechRecognitionUsageDescription</key>
  <string>[REASON]</string>
  <key>NSSiriUsageDescription</key>
  <string>[REASON]</string>
  <key>NSUserTrackingUsageDescription</key>
  <string>[REASON]</string>
</dict>
</plist>
```

### Android {#update-android-native-permissions}

Update the *android/app/src/main/AndroidManifest.xml* file with the permissions requried by your app's use case. Make sure to keep only the permissions that are actually used in your app:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.myawesomeapp">

  <!-- Keep only the permissions used in your app -->

  <uses-permission android:name="android.permission.ACCEPT_HANDOVER" />
  <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_MEDIA_LOCATION" />
  <uses-permission android:name="android.permission.ACTIVITY_RECOGNITION" />
  <uses-permission android:name="com.android.voicemail.permission.ADD_VOICEMAIL" />
  <uses-permission android:name="android.permission.ANSWER_PHONE_CALLS" />
  <uses-permission android:name="android.permission.BLUETOOTH_ADVERTISE" />
  <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
  <uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
  <uses-permission android:name="android.permission.BODY_SENSORS" />
  <uses-permission android:name="android.permission.BODY_SENSORS_BACKGROUND" />
  <uses-permission android:name="android.permission.CALL_PHONE" />
  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.GET_ACCOUNTS" />
  <uses-permission android:name="android.permission.NEARBY_WIFI_DEVICES" />
  <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
  <uses-permission android:name="android.permission.PROCESS_OUTGOING_CALLS" />
  <uses-permission android:name="android.permission.READ_CALENDAR" />
  <uses-permission android:name="android.permission.READ_CALL_LOG" />
  <uses-permission android:name="android.permission.READ_CONTACTS" />
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.READ_MEDIA_AUDIO" />
  <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
  <uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
  <uses-permission android:name="android.permission.READ_MEDIA_VISUAL_USER_SELECTED" />
  <uses-permission android:name="android.permission.READ_PHONE_NUMBERS" />
  <uses-permission android:name="android.permission.READ_PHONE_STATE" />
  <uses-permission android:name="android.permission.READ_SMS" />
  <uses-permission android:name="android.permission.RECEIVE_MMS" />
  <uses-permission android:name="android.permission.RECEIVE_SMS" />
  <uses-permission android:name="android.permission.RECEIVE_WAP_PUSH" />
  <uses-permission android:name="android.permission.RECORD_AUDIO" />
  <uses-permission android:name="android.permission.SEND_SMS" />
  <uses-permission android:name="android.permission.USE_SIP" />
  <uses-permission android:name="android.permission.UWB_RANGING" />
  <uses-permission android:name="android.permission.WRITE_CALENDAR" />
  <uses-permission android:name="android.permission.WRITE_CALL_LOG" />
  <uses-permission android:name="android.permission.WRITE_CONTACTS" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />

  <!-- … -->

</manifest>
```
