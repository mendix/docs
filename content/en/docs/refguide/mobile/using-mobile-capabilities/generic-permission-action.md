---
title: "Use Generic Permission Javascript Action"
url: /refguide/mobile/using-mobile-capabilities/generic-permission-action/
parent: "implementation"
weight: 20
description: "This guide will teach you to use request generic permission actions for native mobile apps."
tags: ["permissions", "JavaScript", "native", "mobile"]
---

## 1 Introduction

Advanced features in mobile apps often require permission from users. Developers need to respect users' privacy, so it is common practice for an app to request the user's permission before storing media and data. To get permission, you can build a generic JavaScript action. This generic action will allow your app to ask for specific permission before accessing a mobile capability, such as the device camera or location.

## 2 Prerequisites

* Complete the [Prerequisites](/howto/mobile/deploying-native-app/#prerequisites) section of *How to Deploy Your First Mendix Native Mobile App*.
* Install Mendix Studio Pro v9.10.0 and above to use the Native Mobile App Builder and the latest Nanoflow commons module.
* Make sure your [Nanoflow Commons](/appstore/modules/nanoflow-commons/) module is up to date
* Make sure you are using [Make It Native 9 app](releasenotes/mobile/make-it-native-parent/), and it is up-to-date.

## 3 Using generic permission action

Generic permission action can be used inside nanoflows in an existing app or make a new app from scratch. You can find it in the toolbox for a nanoflow in the Nanoflow commons section.

### 3.1 Permission name

When using this action you need to choose the permission name you need. It should be one the available permissions in `NanoflowCommons.Enum_Permissions` enumeration.

{{% alert color="info" %}}
Keep in mind that the permission names are different for each platform, so for example if you need to request permission to access reading contacts, you will need to call the actions two times: one for iOS permission which is `CONTACTS_IOS` and another for the Android permission which is `READ_CONTACTS_ANDROID`.
{{% /alert %}}

### 3.2 Action return type

This action returns the status of the permission after the action and it is of type `NanoflowCommons.Enum_PermissionStatus`.
These statuses are:
|Permission status|Notes|
|-----------------|-----|
|`NanoflowCommons.Enum_PermissionStatus.granted`|The permission is granted after requesting it from the user or it was already granted previously|
|`NanoflowCommons.Enum_PermissionStatus.unavailable`|This feature is not available on this device|
|`NanoflowCommons.Enum_PermissionStatus.denied`|The permission is denied but still requestable|
|`NanoflowCommons.Enum_PermissionStatus.blocked`|The permission is blocked which means that the user has to open the app settings himself and grant the permission from there|
|`NanoflowCommons.Enum_PermissionStatus.limited`|The permission is granted but with limitations|

{{% alert color="info" %}}
When the permission is already blocked, and you try to request it, a popup will appear to the user asking him to open the settings and grant the permission, and you will get a `blocked` status.
{{% /alert %}}

{{% alert color="info" %}}
These permissions statuses match the statuses that are received from the action, so you shouldn't override them.
{{% /alert %}}

### 3.3 Usage example

This an example for requesting contact access permission for Android and iOS devices.

- You can get the running platform (Android or iOS) through using `Get device info` action from Native mobile section in the Toolbox.
- Then you can branch your logic based on the current platform.
- Then for Android branch, you can use Generic permission action with a permission name of e.g `READ_CONTACTS_ANDROID`.
- For iOS branch, you can also use a generic permission action with a permission name of e.g. `CONTACTS_IOS`.

  {{< figure src="/attachments/howto/mobile/native-mobile/implementation/generic-permission-action/fullExample" alt="use generic permission screenshoot"   width="400"  >}}
  {{< figure src="/attachments/howto/mobile/native-mobile/implementation/generic-permission-action/decision" alt="use generic permission screenshoot"   width="400"  >}}
  {{< figure src="/attachments/howto/mobile/native-mobile/implementation/generic-permission-action/android" alt="use generic permission screenshoot"   width="400"  >}}
  {{< figure src="/attachments/howto/mobile/native-mobile/implementation/generic-permission-action/ios" alt="use generic permission screenshoot"   width="400"  >}}

## 4 Building

### 4.1 Development
#### 4.1.1 iOS
The following permissions can be tested using iOS Make it native app:
- CAMERA
- FACE_ID
- LOCATION_WHEN_IN_USE
- MICROPHONE
- PHOTO_LIBRARY

To test the remaining permissions you can build [native app](https://docs.mendix.com/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/) and [update the native app](#update-ios-native-permissions) with the required permissions.

#### 4.1.2 ANDROID
The following permissions can be tested using Android Make it native app:
- ACCESS_FINE_LOCATION
- BLUETOOTH_CONNECT
- BLUETOOTH_SCAN
- CALL_PHONE
- RECORD_AUDIO
- CAMERA
- READ_EXTERNAL_STORAGE
- WRITE_EXTERNAL_STORAGE

To test the remaining permissions you can build [native app](https://docs.mendix.com/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/) and [update the native app](#update-android-native-permissions) with the required permissions.

### 4.2 Deployment
During deployment you must specify the permissions that your application has used to be able to request them from the user on production.
To do that you can navigate to App permissions while using Native Builder UI and add the permissions you are using in your application for iOS and Android.

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/generic-permission-action/deployment-android" alt="deploy app with generic permission screenshoot"   width="400"  >}}
{{< figure src="/attachments/howto/mobile/native-mobile/implementation/generic-permission-action/deployment-ios" alt="deploy app with generic permission screenshoot"   width="400"  >}}

{{% alert color="info" %}}
The permissions that you can't find using the Native builder UI, can be added manually referencing the following section.
{{% /alert %}}

## 5 Update native app permissions
### 5.1 iOS {#update-ios-native-permissions}
Update `ios/podfile` file with the needed permissions:

```
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
{{% alert color="info" %}}
For Siri permission you will need to enable siri capability in your app.
This can be done using `Xcode -> Signing & Capabilities -> + -> Siri`
<br>
Or
<br>
Update `/ios/{app name}/{app name}.entitlements` as follows:
```
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
{{% /alert %}}

### 5.2 Android {#update-android-native-permissions}
Update `android/app/src/main/AndroidManifest.xml` file with the needed permissions:
```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.myawesomeapp">

  <!-- 🚨 Keep only the permissions used in your app 🚨 -->

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

  <!-- … -->

</manifest>
```
