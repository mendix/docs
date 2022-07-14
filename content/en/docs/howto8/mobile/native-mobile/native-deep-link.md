---
title: "Set Up Deep Links in Native Mobile Apps"
url: /howto8/mobile/native-deep-link/
weight: 75
description: "Connect URLs to your native mobile app by adding a deep link."
tags: ["deep link", "url", "native", "mobile", "developer app", "make it native"]
---

## 1. Introduction

While URLs typically open websites, they can also open an installed app on your mobile device. With this tutorial you will learn how to connect the URL `app://myapp` to your Mendix native app installed on your Android or iOS device. It is also possible to pass additional data using paths, query parameters, and hashes. Passing additional data could look like this: `app://myapp/task/123?action=close#info`.

A URL is constructed of these parts (everything after **path** is defined as a detail):

{{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/url-parts.png" alt="url details" >}}

You can also register the handling of a normal weblink beginning with `http://` or `https://`. However this requires some more work for iOS, and is not covered in this tutorial. For iOS see [Universal Links: Make the Connection](https://www.raywenderlich.com/6080-universal-links-make-the-connection) by Owen L. Brown. Android does allow for both types of weblink handling out of the box, as shown in the [For Android Apps](#for-android) section below. 

When an app is installed it registers the `schema` and optionally the `host` so its operating system knows which application should be opened when the URL is clicked. If you tap the link, the application will be opened whether it is running, running in the background, or closed.

### 1.1 Testing With the Make It Native App

For this tutorial we recommend running your app from source against a local instance of Mendix Studio Pro. This will save you time when rebuilding and redeploying your app. To do this, follow the steps in [How to Get Started with Native Mobile](/howto8/mobile/getting-started-with-native-mobile/) to make an app and link it to the Make It Native mobile testing app.

Please note that the Make It Native app has already the registered schema `makeitnative://` and can be used out of the box. To use the Make It Native app with that schema, see the [Using Deep Linking in Your App](#using-deep-linking) section below. If you want to change this schema, see [How to Create a Custom Developer App](/howto8/mobile/how-to-devapps/) to build your own custom developer app and then use the [Setting up App Deep Linking](#set-up) section below to change its schema.

## 2. Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Complete the [Prerequisites](/howto8/mobile/deploying-native-app/#prerequisites) section of *How to Deploy Your First Mendix Native Mobile App*
* Make sure your [Native Mobile Resources](/appstore/modules/native-mobile-resources/) module is up to date
* Install git [command line](https://git-scm.com/downloads) tool for working with the Native Mobile App Builder CLI
* Install Mendix Studio Pro v 8.15.0 or above in order to use the Native Mobile App Builder

## 3. Setting up App Deep Linking {#set-up}

If you do not already have a native template for your app, you can create one by following the sections below.

### 3.1 Using the Native Mobile App Builder

Set up a native template with the **Native Mobile App Builder** by following these instructions:

1. Launch the Native Mobile App Builder from the **Project** menu. Walk through the wizard and configure the project's details and tokens (for more information, see [How to Deploy Your First Mendix Native Mobile App](/howto8/mobile/deploying-native-app/)):

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/launch-native-mobile-app-builder.png" alt="launch native mobile builder"   width="400"  >}}

2. Once done with the wizard you will enable deep linking capabilities. First, select the **Capabilities** menu item:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/capability-menu-option.png" alt="capability menu option"   width="400"  >}}
    
3. Enter the `schema` name without the appending `://`:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/deep-link-input-field.png" alt="deep link input field"   width="400"  >}}
    
4. Click the **Save** button. 

5. Navigate to the build page and click **Build**.

{{% alert color="info" %}}
When running locally from source, on iOS you have to run `pod install` once more
{{% /alert %}}

### 3.2 Using the Native Mobile App Builder CLI

1. Create a shell app with Native Builder using the `prepare` command as shown in [How to Deploy Your First Mendix Native Mobile App](/howto8/mobile/deploying-native-app/). When you do this, replace the parameters in this example command with your own project's parameters, local paths, and tokens:

    ``` shell
    native-builder.exe prepare --project-name "Native Deep Link" --app-name "Native Deep Link" --java-home "C:\Program Files\AdoptOpenJDK\jdk-11.0.3.7-hotspot" --mxbuild-path "C:\Program Files\Mendix\8.6.0.715\modeler\mxbuild.exe" --project-path "C:\mendix-projects\NativeDeepLink\NativeDeepLink.mpr" --github-access-token "c3f322c471623" --appcenter-api-token "2d5b570693d34"  --app-identifier "com.mendix.native.deeplink" --runtime-url "https://nativedeeplink-sandbox.mxapps.io/" --mendix-version "8.6.0"
    ```
    
1. Open your command line interface (CLI) of choice and change directory to the folder where you want to edit the build template:

    ```shell
    cd c:/github
    ```
    
1. Use git to clone your Native Builder template from GitHub: 

    ```shell
    git clone https://github.com/your-account/native-deeplink-app
    ```

#### 3.2.1 For Android Apps {#for-android}

The manifest file registers the schema and host on your Android device that will be associated with your Mendix app. Put simply, the manifest file controls the permissions, `activity` code, and more. So to enable deep linking, you will need to configure your *AndroidManifest.xml* file:

1. Open the folder that you cloned your template into: `c:/github/native-deeplink-app`.
1. Open *android/app/src/main/AndroidManifest.xml*.
1. In `activity`, add the attribute `android:launchMode="singleTask"`. For more information on Launch Mode, see this [Android documentation](https://developer.android.com/guide/topics/manifest/activity-element#lmode).
1. Add an `intent-filter` in the `activity`:

    ```xml
    <intent-filter android:label="@string/app_name">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="app" android:host="myapp" />
    </intent-filter>
    ```
    
    For more information on linking in Android, see this [Android documentation](https://developer.android.com/training/app-links/deep-linking#adding-filters).

#### 3.2.2 For iOS Apps

The *info.plist* file registers the schema and host so that they will be associated with your app in iOS. This *plist* file controls permissions, app information, and more. So to enable deep linking, you will need to configure your *info.plist* file:

1. Open the folder that you cloned your template into: `c:/github/native-deeplink-app`.
1. In Xcode (available on Apple Mac only) open *ios/NativeTemplate.xcworkspace*.
1. Open *ios/NativeTemplate/Info.plist*
1. Add `URL types`, then add `URL Schemes` and `URL identifier`:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/ios-info-plist.png" alt="ios info plist" >}}
   
    When viewing *Info.plist* as a text file, you would see that a section is added:
   
    ```xml
    <key>CFBundleURLTypes</key>
    <array>
        <dict>
            <key>CFBundleURLSchemes</key>
            <array>
                <string>app</string>
            </array>
            <key>CFBundleURLName</key>
            <string>myapp</string>
        </dict>
    </array>
    ```

1. Open *ios/AppDelegate.m* 
1. Add this import to the existing imports: `#import "React/RCTLinkingManager.h"`.
1. Change the `openURL` method from this:

    ```objc
    - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
      [MendixAppDelegate application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
      return YES;
    }
    ```

    to this:

    ```objc
    - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
      [RCTLinkingManager application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
      [MendixAppDelegate application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
      return YES;
    }
    ```
   
    This method will register the opened URL so it can be used in the **Native Deep Link** nanoflow actions. 

#### 3.2.3 Rebuilding Your Native Mobile App

When running locally from source you have to launch your app again:

1. With your CLI, open the folder that you cloned your template into: `cd c:/github/native-deeplink-app`.
1. Add, commit, and push all changes from steps above:

    ```shell
    git add .
    git commit -m "Add deeplink handling"
    git push
    ```

1. Now rebuild and install your native mobile app to add your new capabilities:

    ``` shell
    native-builder.exe build --project-name "Native Deep Link" --app-version "1.0.0" --build-number 1
    ```

## 4 Using Deep Linking in Your App {#using-deep-linking}

Now your app is ready to use links, so you will set up the additional path and query data handling. If you skip this section, the links to your app will just open the app. Nothing will be done with the additional data available in your URL.

### 4.1 Native Deep Link Nanoflow Actions 

Now you have to handle the incoming URL in your Mendix application. To do this, you will use the Nanoflow Actions **Register Deep Link** and **Parse Url To Object** found in the [Native Mobile Resources](/appstore/modules/native-mobile-resources/) module. This module is automatically included in your app if it began as an up-to-date Starter App. If you do not see these actions available in your app, please update the module through the Marketplace.

#### 4.1.1 Registering Deep Link

The Register Deep Link nanoflow action registers a callback nanoflow, which is called each time the app is opened using a URL. This **URL Handler** nanoflow will receive the URL, of type string, as an input parameter. 

{{% alert color="info" %}}
The name of the input parameter is case sensitive and can not be changed.
{{% /alert %}}
        
#### 4.1.2 Parsing a URL To a Mendix Object

The Register Deep Link nanoflow action will create a new Mendix object, split a URL, and set all the object attributes with their values. For example, the URL https://john.doe:secret@www.example.com:123/forum/questions/?tag=networking&order=newest#top has the following attributes and values:

| Attribute                                                   | Value                                                                                        |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| href                                                        | https://john.doe:secret@www.example.com:123/forum/questions/?tag=networking&order=newest#top |
| protocol                                                    | https:                                                                                       |
| hash                                                        | top                                                                                          |
| query                                                       | ?tag=networking&order=newest                                                                 |
| pathname                                                    | /forum/questions/                                                                            |
| auth                                                        | john.doe                                                                                     |
| host                                                        | www.example.com:123                                                                          |
| port                                                        | 123                                                                                          |
| hostname                                                    | www.example.com                                                                              |
| password                                                    | secret                                                                                       |
| username                                                    | john.doe                                                                                     |
| origin                                                      | https://www.example.com:123                                                                  |
| **Dynamically based on the number of slashes in the paths** |
| path0                                                       | forum                                                                                        |
| path1                                                       | questions                                                                                    |
| **Dynamically based on the number of query keys**           |
| tag                                                         | networking                                                                                   |
| order                                                       | newest                                                                                       |

### 4.2 Using Utilities in Your App

Now that the **Native Deep Link** nanoflow actions are available in Studio Pro, you have the utilities to register and process an URL. You will now  use them in your application:

1. In your app add the **App events** widget, which is also part of the Native Mobile Resource module, on your home page.
1. Double-click the **App events** widget. In **App events** tab, select **Page load** > **On load** > **Call a nanoflow**, and create a new nanoflow named *OL_RegisterDeepLink*:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/app-events-register-deep-link.png" alt="app event register deeplink" >}}

    This nanoflow will be called only once when the app is started.

1. In the **OL_RegisterDeepLink** nanoflow, add the action **Register DeepLink**, and in that action's **Url handler** create an nanoflow named *DL_ShowUrlDetails*:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/nanoflow-register-deep-link.png" alt="nanoflow register deeplink" >}}
   
    This nanoflow will be called every time the app is opened using a URL.

1. To parse the URL into an object, you will use a non-persistable entity named **DeepLinkParameter** from the **NativeMobileResources** module in the next step. For now, go to **NativeMobileResources** > **Domain Model** and examine this entity. If you use query strings or more, you can copy this entity to your own module. The attributes are all optional and you should only add the attributes your implementation requires. Besides the standard list of possible URL parts, you can also add the query string's keys (for example `?name=Jhon&title=sir`). The attributes are not case sensitive. You can add attributes for path segments of the URL which will be split into `Path0` , `Path1`, and more:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/entity-parameter.png" alt="parameter entity" >}}

Next you will implement the deep link handler nanoflow **DL_ShowUrlDetails** so that it can pass URL data:

1. In **DL_ShowUrlDetails** drag and drop a parameter into your nanoflow's white space.
1. Double-click the parameter, give it the name *URL* (which is case sensitive) and the type **String**.
1. Add a **Parse URL to Object** activity to your nanoflow. Double-click it and configure it like this:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/parse-url.png" alt="parse url" >}}
   
1. Add a **Show message** activity to the right of your **Parse URL to Object** activity.
1. Double-click the **Show message** activity.
1. In **Template** write *Your deep link callback URL {1} host = {2}*.
1. Click **Parameters** > **New**, write *$Parameter/Href*, and click **OK**.
1. Click **Parameters** > **New**, write *$Parameter/Host*, and click **OK**.
1. Right-click your **Parse URL to Object** activity, click **Set error handling**, and click **Custom without rollback**.
1. Drop an **End event** below your **Parse URL to Object** activity. Drag a line from **Parse URL to Object** down to the end event, right click it, and click **Set as error handler**.
1. Add a **Show message** activity to this line. Set it as type **Error**, and into template type *Failed to parse deep link data.*. Your finished nanoflow will look like this:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-deep-link/deep-link-nano-full.png" alt="full nanoflow" >}}

### 4.3 Testing Deep Linking

Add a few test link buttons, for example {app://myapp/task/123} or {makeitnative://task/123}, to your web page, then re-run your project. Open the your app in your device's browser by typing *{your local IP address}:8080* into the browser. With the app loaded, tap the links to test. You should be brought out of your browser and into your app's page!

{{% alert color="info" %}}
Please note that if you are not running the app from a local source, you must build your app again with the Native Builder before testing. Do this by using the `build` command: `build --project-name “Native Deep Link” --app-version “1.0.0" --build-number 2`.
{{% /alert %}}

## 5. Read more

*   [Native Builder Reference Guide](/refguide8/native-builder/)
*   [How to Deploy Your First Mendix Native Mobile App](/howto8/mobile/deploying-native-app/)
*   [React Native Linking](https://facebook.github.io/react-native/docs/linking)
*   [Deep Linking Android](https://developer.android.com/training/app-links/deep-linking)
*   [Deep Linking iOS](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app)
*   [Universal Linking iOS](https://developer.apple.com/ios/universal-links/)
*   [URL Schema vs Universal Link](https://medium.com/wolox-driving-innovation/ios-deep-linking-url-scheme-vs-universal-links-50abd3802f97)
