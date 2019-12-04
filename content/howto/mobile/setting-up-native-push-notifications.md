---
title: "Use Remote Notifications"
#category: "Native Mobile"
#parent: "native-mobile"
#menu_order: 11
#description: "Learn how to set up remote push notifications for native apps."
#tags: ["mobile", "push notification", "remote", "push", "notification"]
---

## 1 Introduction

todo: delete alert at top, flesh out intro

{{% alert type="info" %}}
If you want to use local or remote push notifications with Make it Native app, the only step you have to perform is [Firebase setup](#4-firebase-setup)
{{% /alert %}}

Setting up remote native push notifications occurs over four major steps:

1) Native app creation with Native Builder
2) Firebase setup
3) Native Builder app customization (We need the files from firebase setup) 

todo: where is the fourth step?

**This how-to will teach you how to do the following:**

* Customize your native template so it can use remote push notifications

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Create a native app by completing [How to Deploy Your First Mendix Native App](deploying-native-app) 
* Learn the basics of [Git](https://www.atlassian.com/git)

## 3 Creating a Native Builder App

To make a native app for this how to, do the following:

1. Complete [How to Deploy Your First Mendix Native App](deploying-native-app) through the end of the *Preparing Your Project* section. Once you finish this, you will have a generated a GitHub repository with all the files you will need. 

2. Clone the generated repository to your computer. This will enable customizations later.

## 4 Setting up Firebase Cloud Messaging Service

todo: remote notifications require firebase because xyz.

To set up the Firebase cloud messaging server, complete [Setting up Google Firebase Cloud Messaging Server](setting-up-google-firebase-cloud-messaging-server), and be sure to make both an iOS and an Android app. At the end you will end up with three files:

* *google-services.json*
* *GoogleService-Info.plist*
* *yourPrivateKey.json*

todo: These files are your xyz

## 5 Setting up Native Builder Customizations

Out of the box, the Native Builder will create iOS and Android part of the code. Continue to implement customizations for different platforms.

todo: change "part of the code" to something more specific."
todo: which platforms?

### 5.1 Customizing Android todo: android what? Android app?

todo: intro text here. Why are we customizing? What business use case might the reader be able to apply here?

1. Add the following code to *android/app/build.gradle*:

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

2. Add [todo: add should be move?]the *google-services.json* file you downloaded inside *android/app* so it [todo: what's it? the code? the folder?] will look like *android/app/google-services.json*.

3. Change *android/app/src/main/AndroidManifest.xml*
We will be testing our implementation against local mendix instance, that means we wont using `https` which means we have to add `android:usesCleartextTraffic="true"` please remove this change afterwards. [todo: clarify this info, give a clear instruction]

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

4. Change *android/app/src/main/java/com/mendix/nativetemplate/MainApplication.java*:

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

5. Change *android/build.gradle*:

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

6. Open *android/app/src/main/res/raw/runtime_url* and add your local IP address. [todo: where?]
7. Commit and push your changes to master. This will either trigger an App Center build, or you can run it locally.

### 5.2 Customizing iOS [todo: customize what?]

todo: intro text needed

{{% alert type="info" %}}

Remote notifications will not work with an iOS simulator [todo: emulator?]

{{% /alert %}}

To change the capabilities of your app, open *app/ios/yourProjectName.xcworkspace* in Xcode:

1. Add *GoogleService-Info.plist* to your *NativeTemplate* folder (it should be at the same level as *Info.plist*).

2. Change */ios/AppDelegate.swift* (here you add your local IP to test against a local Mendix instance):

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

3. Make sure *ios/Podfile* contains the following lines:

```
  pod 'RNFirebase', :path => '../node_modules/react-native-firebase/ios'
  pod 'Firebase/Core' 
  pod 'Firebase/Messaging', '~> 5.15.0'
```

4. Change the *Info.plist* runtime URL to your local IP.

5. Add capabilities: [todo: add more here when validating]

     ![Capabilities](attachments/native-remote-push/iosCustomizations.png)

Congrulations, you finished setting up customizations for your custom native app!

## 6 Read More

* [Implement native remote push notifications](native-remote-notifications)
* [Implement native local push notifications](native-local-notifications)
