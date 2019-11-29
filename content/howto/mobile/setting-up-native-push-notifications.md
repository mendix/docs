---
title: "Native builder push notification customization"
#category: "Native Mobile"
#parent: "native-mobile"
#menu_order: 11
#description: "Instructions on how to set up native push notifications with Native builder"
#tags: ["mobile", "push notification", "remote", "push", "notification"]
---

## 1 Introduction

{{% alert type="info" %}}
If you want to use local or remote push notifications with Make it Native app, only step you have to perform is [Firebase setup](#4-firebase-setup)
{{% /alert %}}

Setting up remote native push notifications occurs over four major steps:

1) Native app creation with Native Builder
2) Firebase setup
3) Native Builder app customization (We need the files from firebase setup) 

**This how-to will teach you how to do the following:**

Customize native template in order to work with push notifications.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* How to create native app via [Native Builder](https://docs.mendix.com/howto/mobile/native-builder#1-introduction) 
* How to work with GIT

## 3 Native Builder App Creation

Please follow [Deploy Your First Mendix Native App](deploying-native-app) all the way through section `4 Preparing Your Project`. Once you finish this, you will have a generated github repo with all the files needed. Clone the generated repository to your computer to enable customizations later which will be done in section [Setting up Native Builder Customizations](#setting-up-native-builder-customizations)

## 4 Firebase Setup

Please follow [Setting up google firebase cloud messaging server](setting-up-google-firebase-cloud-messaging-server). Add both ios and android apps. At the end you must end up with 3 files:

- `google-services.json`
- `GoogleService-Info.plist`
- `yourPrivateKey.json`

## 3 Setting up Native Builder Customizations

Out of the box, native builder will create ios and android part of the code. We will do different customizations for different platforms.

### 3.1 Customizing Android part

- Change `android/app/build.gradle`s with following additions

```diff
@@ -101,6 +101,10 @@ dependencies {
     implementation fileTree(dir: "libs", include: ["*.jar"])
     implementation "com.facebook.react:react-native:+"  // From node_modules
     implementation "org.webkit:android-jsc:r245459"
+    implementation "com.google.android.gms:play-services-base:16.1.0"
+    implementation "com.google.firebase:firebase-core:16.0.9"
+    implementation "com.google.firebase:firebase-messaging:18.0.0"
+    implementation 'me.leolin:ShortcutBadger:1.1.21@aar'
 }
```

- add downloaded `google-services.json` inside of `android/app` so it will look like  `android/app/google-services.json`

- Change `android/app/src/main/AndroidManifest.xml`
We will be testing our implementation against local mendix instance, that means we wont using `https` which means we have to add `android:usesCleartextTraffic="true"` please remove this change afterwards.

```diff
--- a/android/app/src/main/AndroidManifest.xml
+++ b/android/app/src/main/AndroidManifest.xml
@@ -2,9 +2,11 @@
   package="com.mendix.nativetemplate">

     <uses-permission android:name="android.permission.INTERNET" />
-
+    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
+    <uses-permission android:name="android.permission.VIBRATE" />
     <application
       android:name=".MainApplication"
+      android:usesCleartextTraffic="true"
       android:label="@string/app_name"
       android:icon="@mipmap/ic_launcher"
       android:roundIcon="@mipmap/ic_launcher_round"
@@ -13,6 +15,7 @@
       <activity
         android:name=".MainActivity"
         android:label="@string/app_name"
+        android:launchMode="singleTop"
         android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
         android:windowSoftInputMode="adjustResize">
         <intent-filter>
@@ -21,6 +24,20 @@
         </intent-filter>
       </activity>
       <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
+        <receiver android:name="io.invertase.firebase.notifications.RNFirebaseNotificationReceiver"/>
+        <receiver android:enabled="true" android:exported="true"  android:name="io.invertase.firebase.notification
+            <intent-filter>
+                <action android:name="android.intent.action.BOOT_COMPLETED"/>
+                <action android:name="android.intent.action.QUICKBOOT_POWERON"/>
+                <action android:name="com.htc.intent.action.QUICKBOOT_POWERON"/>
+                <category android:name="android.intent.category.DEFAULT" />
+            </intent-filter>
+        </receiver>
+        <service android:name="io.invertase.firebase.messaging.RNFirebaseMessagingService">
+            <intent-filter>
+                <action android:name="com.google.firebase.MESSAGING_EVENT" />
+            </intent-filter>
+        </service>
     </application>

 </manifest>
```

- Change `android/app/src/main/java/com/mendix/nativetemplate/MainApplication.java`
```diff
 import fr.greweb.reactnativeviewshot.RNViewShotPackage;
 import io.invertase.firebase.RNFirebasePackage;
+import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
+import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;

 public class MainApplication extends MendixReactApplication {
   @Override
   public boolean getUseDeveloperSupport() {
-    return false;
+    return true;
   }

   @Override
@@ -53,6 +55,8 @@ public class MainApplication extends MendixReactApplication {
             new ImagePickerPackage(),
             new RNGeocoderPackage(),
             new RNFirebasePackage(),
+            new RNFirebaseMessagingPackage(),
+            new RNFirebaseNotificationsPackage(),
             new RNDeviceInfo(),
             new RNCameraPackage(),
             new CalendarEventsPackage(),
```
- Change `android/build.gradle`
```diff
        }
     }
     dependencies {
-        classpath("com.android.tools.build:gradle:3.4.0")
+        classpath("com.android.tools.build:gradle:3.4.1")
+        classpath 'com.google.gms:google-services:4.2.0'
         // NOTE: Do not place your application dependencies here; they belong
         // in the individual module build.gradle files
     }
```

- Change the `android/app/src/main/res/raw/runtime_url`

Simply add your local ip


Commit and push changes to master. This will trigger an Appcenter build. Or you can run it locally.


### 3.2 Customizing IOS part

Please remember that remote notifications on Simulator wont work. Open `app/ios/yourProjectName.xcworkspace` in Xcode since we have to add files and change capabilities of the project.

- Add `GoogleService-Info.plist` to NativeTemplate folder, it should be at the same level as `Info.plist`

- Change `/ios/AppDelegate.swift`

Please note that we are adding our own local ip because we want to test against local mendix instance.

```diff
 import Foundation
 import UIKit
 import MendixNative
+import Firebase
+

 @UIApplicationMain
 class AppDelegate: UIResponder, UIApplicationDelegate {
@@ -10,11 +12,24 @@ class AppDelegate: UIResponder, UIApplicationDelegate {
     guard let url = Bundle.main.object(forInfoDictionaryKey: "Runtime url") as? String, let runTimeUrl = AppUrl.forRuntime(url: url) else {
       fatalError("Missing the 'Runtime url' configuration within the Info.plist file")
     }
-    guard let bundleUrl = ReactNative.instance.getJSBundleFile() else {
+    guard let bundleUrl = AppUrl.forBundle(url: "http://LOCALIP:8080", remoteDebuggingPackagerPort: 8083, isDebuggingRemotely: true, isDevModeEnabled: true) else {
       fatalError("Could not properly load JS bundle file")
     }
-
+    FirebaseApp.configure()
+    RNFirebaseNotifications.configure()
     ReactNative.instance.start(MendixApp(bundleUrl: bundleUrl, runtimeUrl: runTimeUrl, warningsFilter: WarningsFilter.none))
     return true
   }
+
+  func application(_ application: UIApplication, didReceive notification: UILocalNotification) {
+    RNFirebaseNotifications.instance().didReceive(notification)
+  }
+
+  func application(_ application: UIApplication, RemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
+    RNFirebaseNotifications.instance().didReceiveRemoteNotification(userInfo, fetchCompletionHandler: completionHandler)
+  }
+
+  func application(_ application: UIApplication, didRegister notificationSettings: UIUserNotificationSettings) {
+    RNFirebaseMessaging.instance().didRegister(notificationSettings)
+  }
 }
```

- Add `ios/Podfile` if the following lines exists, otherwise add:

```
  pod 'RNFirebase', :path => '../node_modules/react-native-firebase/ios'
  pod 'Firebase/Core' 
  pod 'Firebase/Messaging', '~> 5.15.0'
```

- Change `Info.plist` runtime Url to your local ip

- Add capabilities
![Capabilities](attachments/native-remote-push/iosCustomizations.png)

Congrulations you finished setting up customizations for your custom native app, please follow the links in read more to implement local and remote notifications.

## 7 Read More

* [Implement native remote push notifications](native-remote-notifications)
* [Implement native local push notifications](native-local-notifications)