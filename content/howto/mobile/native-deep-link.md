---
title: "How to Setup Deep Link in Native App"
parent: "native-mobile"
menu_order: 72
description: "Connect URLs to your native app by add a deep link".
tags: ["deeplink", "deep link", "url","native", "mobile", "developer", "native-builder", "developer app", "make it native"]
---

## 1. Introduction

URLs are used to open a web site, but they can also be used to open an installed app on your mobile divice. With this tutorial you will learn how to connect the URL `app://myapp` to your Mendix Native App that is installed on your Android or iOS device. It is also possible to pass additional data via path, query parameters and hashes, for example `app://myapp/task/123?action=close#info`

A URL is constructed of various parts, as pictured below.

```txt
        username       host      port
        ┌──┴───┐ ┌──────┴──────┐ ┌┴┐
https://john.doe@www.example.com:123/forum/questions/?tag=networking&order=newest#top
└─┬─┘   └───────────┬──────────────┘└───────┬───────┘ └───────────┬─────────────┘ └┬┘
scheme          authority                  path                 query           hash
```

If you want to register the handling of normal weblink starting `http(s)://` is possible too, however this requires some more work for iOS, and is not covered in this tutorial. In that case you could check https://www.raywenderlich.com/6080-universal-links-make-the-connection

During installation of the application it registers the `schema` and optional the `host`, so the operating system will know what application should be opened when the URL is clicked. The application could either be closed or running in the background.

### 1.1 Testing fast and easy.

Please note that the Make it native app has already a registered schema `makeitnative://` and can be used out of the box. If want to use the Make it native with that schema then jump to [chapter 4](##-4-Use-deep-linking-in-your-app) for more information how to use it. If you want to change this schema you can build your own [custom developer app](/howto/mobile/how-to-devapps) and use this tutorial to change the schema too.

For development and this tutorial it is recommend to run the app from source against the local running Mendix Studio Pro. This will save you a lot of time re-building and re-deploying the app. Please follow the steps from [Connecting to a Local Running Instance of Studio Pro](/refguide/native-builder#4-3-connecting-to-a-local-running-instance-of-studio-pro).

## 2. Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

-   Complete the [prequisite for Native Builder](/howto/mobile/deploying-native-app#2-prerequisites)
-   Installed git [command line](https://git-scm.com/downloads) tool
-   Installed [Mendix 8.6](https://appstore.home.mendix.com/link/modelers/)

## 3. Setting up App Deep Linking

If you do not already have a native template for your app, you can create one.

1. Create a shell app with Native Builder, with the `prepare` command. Using the how to [Deploy Your First Mendix Native App](/howto/mobile/deploying-native-app).  
Example command, replace the parameters with your project parametrs, local paths and tokens:
    ``` shell
    native-builder.exe prepare --project-name "Native Deep Link" --app-name "Native Deep Link" --java-home "C:\Program Files\AdoptOpenJDK\jdk-11.0.3.7-hotspot" --mxbuild-path "C:\Program Files\Mendix\8.6.0.715\modeler\mxbuild.exe" --project-path "C:\mendix-projects\NativeDeepLink\NativeDeepLink.mpr" --github-access-token "c3f322c471623" --appcenter-api-token "2d5b570693d34"  --app-identifier "com.mendix.native.deeplink" --runtime-url "https://nativedeeplink-sandbox.mxapps.io/" --mendix-version "8.6.0"
    ```
1. Open your command line tool and navigater or create a folder on your file system where you like to edit the build template:
    ```shell
    cd c:/github
    ```
1. Use git to clone your native builder template from GitHub:
    ```shell
    git clone https://github.com/your-account/native-deepling-app
    ```

### 3.1 For Android Apps

The manifest file registers the schema and host on your Android device that will be associated with your Mendix app.

1. Open the folder where you cloned your template into. In our case `c:/github/native-deepling-app`.
1. Open file `android/app/src/main/AndroidManifest.xml`.
1. Add in `activity` the attribute `android:launchMode="singleTask"`.  
   [More information on lauch mode](https://developer.android.com/guide/topics/manifest/activity-element#lmode)
1. Add an `intent-filter` in the `activity`:
    ```xml
    <intent-filter android:label="@string/app_name">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="app" android:host="myapp" />
    </intent-filter>
    ```
    [More information on linking in Android](https://developer.android.com/training/app-links/deep-linking#adding-filters).

### 3.2 For iOS Apps

The **plist** registers the schema and host, so that they will be associated with your app in iOS.

1. Open the folder where you cloned your template into. In our case `c:/github/native-deepling-app`.
1. Open in Xcode (available on Apple Mac only) `ios/NativeTemplate.xcworkspace`
1. Open the file `ios/NativeTemplate/Info.plist` file, and add `URL types` therein add `URL Schemes` and `URL identifier`, as shown in the picture below.
   ![ios info plist](attachments/native-deep-link/ios-info-plist.png)
   When viewing the **Info.plist** as a text file you would see that a section is added:
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

1. Open the `ios/AppDelegate.m` file and add before `@end` a new method:
    ```objc
    - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
        return [RCTLinkingManager application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
    }
    ```
    This method will register the opened URL so it can used in the Deep Link Nanoflow actions.

### 3.3 Rebuilding Your Native App

When running locally from source you have launch your app again, or us the Native builder to build a new app.

1. Open in a command line tool the folder where you edited template into:
    ```shell
    cd c:/github/native-deepling-app
    ```
1. Add, commit and push all changes from steps above:
    ```shell
    git add .
    git commit -m "Add deeplink handling"
    git push
    ```
1. Now rebuild and install your native app, to add our new capabilities. Use the how to for [template](/howto/mobile/deploying-native-app) or [dev app](/howto/mobile/how-to-devapps) to rebuild the app.
    ``` shell
    native-builder.exe build --project-name "Native Deep Link" --app-version "1.0.0" --build-number 1
    ```

## 4 Using Deep Linking in Your App

Now your app is ready to use links, so we can now setup the how to handle the additional path, query data. If you skip this section the links to your app will just open the app, but nothing is done with additional data available in URL.

### 4.1 Deeplinking Nanoflow Actions

Now we have to handle the incoming URL in our Mendix application. We can make use of the Nanoflow Actions **Register Deep Link** and **Parse Url To Object** that are part of the [Native Mobile Resource](https://appstore.home.mendix.com/link/app/109513/) module. This module can also be found in your app when you created it with an up-to-date Starter App. If you can don not have the actions availes, please update the module trough the App Store.

#### 4.1.1 Registering Deep Link

This nanoflow actions registers a callback nanoflow, which is called very time the app is opened via an URL. This "Callback URL Handler" nanoflow will receive the URL, of type string, as input parameter. Please note that the name of the input parameter is case sensitive and can not be changed.

#### 4.1.2 Parsing a URL To Object

This nanoflow action will create a new Mendix object, and split a URL, and set all the oject attributes with their values. For example the URL: https://john.doe:secret@www.example.com:123/forum/questions/?tag=networking&order=newest#top

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

### 4.2 Using Utilities in Your App [todo: check utilities]

Now we have the utilities to register and process an URL, we can use them in our application.

1. In your app add the **App events** widget, which is also par of the Native Mobile Resource module, on your home page.
1. Select open the widget and in the tab `App events` section `Page load` select a `On load` action `Call nanoflow`, and create a new nanoflow named **OL_RegisterDeepLink**.
   ![app event register deeplink](attachments/native-deep-link/app-events-register-deep-link.png)
   This nanoflow will be called only once when the app is started.

1. Implement the **OL_RegisterDeepLink** nanoflow, add the action **Register DeepLink**, in the **Url handler**, create an nanoflow name **DL_ShowUrlDetails**.
   ![nanoflow register deeplink](attachments/native-deep-link/nanoflow-register-deep-link.png)
   This nanoflow will be called everytime the app is opened via a URL.

1. To parse the URL into we can use a non persistent entity named **DeepLinkParameter** from the Native Mobile Resource module. If you use query strings or more with you can copy this entity to your own module. The attributes are all optional and you should only add the attributes that are need for you implementation. Beside the standard list of possible URL parts, you can also add the keys of the query string. (For example `?name=Jhon&title=sir`) The attributes are not case sensitive. You can add attributes for path segments of the URL, they will be split into `Path0` , `Path1` etc.
    ![parameter entity](attachments/native-deep-link/entity-parameter.png)

1. Implement the Deep link handler nanoflow **DL_ShowUrlDetails**, like the image below. The nanoflow has one input parameter named **URL** and is of type `string` which is case sensitive. Use the `ParseI Url to Object` nanoflow action, and provide the URL and the entity of the parameter object. The Show message action will display a message with the details of the URL.
   ![nanoflow handle deep link](attachments/native-deep-link/nanoflow-handle-deep-link.png)

### 4.3 Testing Deeplinking

Go add some test links, for example `mayapp://app/task/123` and or `makeitnative://task/123` on your Mendix responsive or mobile page, restart the modeler, and open the page in your browser of your device. Tap the links to test:

![studio pro test page](attachments/native-deep-link/page-test-deep-link.png)

Please note that if you running the app not from a local source, you have to rebuild your app with the Native builder before testing.

## 5. Read more

*   [Native Builder](/refguide/native-builder)
*   [Deploying Native App](/howto/mobile/deploying-native-app)
*   [React Native Linking](https://facebook.github.io/react-native/docs/linking)
*   [Deep Linking Android](https://developer.android.com/training/app-links/deep-linking)
*   [Deep Linking iOS](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app)
*   [Universal Linking iOS](https://developer.apple.com/ios/universal-links/)
*   [URL Schema vs Universal Link](https://medium.com/wolox-driving-innovation/ios-deep-linking-url-scheme-vs-universal-links-50abd3802f97)
