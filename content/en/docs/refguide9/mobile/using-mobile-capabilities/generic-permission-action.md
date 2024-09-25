---
title: "App Permissions"
url: /refguide9/mobile/using-mobile-capabilities/generic-permission-action/
weight: 85
description: "This guide teaches you how to use request generic permission actions for native mobile apps."
---

## Introduction

Advanced features in mobile apps often require permission from users. Apps need to respect the user's privacy, so it is common practice for an app to request the user's permission before storing media and data. To get permission, you can build a generic JavaScript action. This generic action will allow your app to ask for specific permissions before accessing a mobile capability, such as the device camera or location.

## Prerequisites

* Complete the [Prerequisites](/refguide9/mobile/distributing-mobile-apps/building-native-apps/deploying-native-app/#prerequisites) section of *Deploy Your First Mendix Native Mobile App*.
* Install Mendix Studio Pro 9.10.0 and above to use the Native Mobile App Builder and the latest Nanoflow Commons module.
* Make sure your [Native Mobile Resources](/appstore/modules/native-mobile-resources/) module is up to date.
* Make sure you are using [Make It Native 9 app](/releasenotes/mobile/make-it-native-parent/), and it is up-to-date.

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

        {{< figure src="/attachments/refguide9/mobile/native-mobile/generic-permission-action/fullExample.png" alt="use generic permission"   width="400"  class="no-border" >}}
      
        {{< figure src="/attachments/refguide9/mobile/native-mobile/generic-permission-action/decision.png" alt="decision"   width="400"  class="no-border" >}}
      
        {{< figure src="/attachments/refguide9/mobile/native-mobile/generic-permission-action/android.png" alt="android permission"   width="400"  class="no-border" >}}
      
        {{< figure src="/attachments/refguide9/mobile/native-mobile/generic-permission-action/ios.png" alt="ios permission"   width="400"  class="no-border" >}}

## Building

### Development

#### IOS

The following permissions can be tested using the iOS Make It Native app:

* CAMERA
* FACE_ID
* LOCATION_WHEN_IN_USE
* MICROPHONE
* PHOTO_LIBRARY

To test the remaining permissions you can build [native app](/refguide9/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/) and [update the native app](#update-ios-native-permissions) with the required permissions.

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

To test the remaining permissions you can build a [native app](/refguide9/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/) and [update the native app](#update-android-native-permissions) with the required permissions.

### Deployment

During deployment you must specify the permissions that your application has used to be able to request them from the user on production. To do that you can navigate to **App permissions** while using Native Builder UI and add the permissions you are using in your application for iOS and Android.

{{% alert color="info" %}}
The permissions that you cannot find using the Native Builder UI can be added manually per the [Update Native App Permissions](#update-native-permissions) section below.
{{% /alert %}}

## Updating Native App Permissions {#update-native-permissions}

### iOS {#update-ios-native-permissions}

Update your *ios/podfile* file with the needed permissions:

```xml
target 'YourAwesomeProject' do

  # …

  permissions_path = '../node_modules/react-native-permissions/ios'

  pod 'Permission-AppTrackingTransparency', :path => "#{permissions_path}/AppTrackingTransparency"
  pod 'Permission-BluetoothPeripheral', :path => "#{permissions_path}/BluetoothPeripheral"
  pod 'Permission-Calendars', :path => "#{permissions_path}/Calendars"
  pod 'Permission-Camera', :path => "#{permissions_path}/Camera"
  pod 'Permission-Contacts', :path => "#{permissions_path}/Contacts"
  pod 'Permission-FaceID', :path => "#{permissions_path}/FaceID"
  pod 'Permission-LocationAccuracy', :path => "#{permissions_path}/LocationAccuracy"
  pod 'Permission-LocationAlways', :path => "#{permissions_path}/LocationAlways"
  pod 'Permission-LocationWhenInUse', :path => "#{permissions_path}/LocationWhenInUse"
  pod 'Permission-MediaLibrary', :path => "#{permissions_path}/MediaLibrary"
  pod 'Permission-Microphone', :path => "#{permissions_path}/Microphone"
  pod 'Permission-Motion', :path => "#{permissions_path}/Motion"
  pod 'Permission-Notifications', :path => "#{permissions_path}/Notifications"
  pod 'Permission-PhotoLibrary', :path => "#{permissions_path}/PhotoLibrary"
  pod 'Permission-PhotoLibraryAddOnly', :path => "#{permissions_path}/PhotoLibraryAddOnly"
  pod 'Permission-Reminders', :path => "#{permissions_path}/Reminders"
  pod 'Permission-Siri', :path => "#{permissions_path}/Siri"
  pod 'Permission-SpeechRecognition', :path => "#{permissions_path}/SpeechRecognition"
  pod 'Permission-StoreKit', :path => "#{permissions_path}/StoreKit"
end
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

### Android {#update-android-native-permissions}

Update the *android/app/src/main/AndroidManifest.xml* file with the needed permissions:

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
