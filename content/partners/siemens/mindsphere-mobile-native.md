---
title: "MindSphere Mobile Native"
parent: "mindsphere"
menu_order: 200
description: "Explain how to create your own Native Mobile application for MindSphere and what needs to be considered for development"
tags: ["MindSphere", "Credentials", "Multi-Tenant", "Environment Variables", "Local", "Styling", "UI", "Icons", "Limitations", "Licensing", "Validation", "Mobile Native"]
---

# MindSphere Mobile Native

## 1 Introduction

This documentation describes the adoptions needed to develop native mobile apps for MindSphere with Mendix. Native mobile apps do not render inside a web view - they use native UI elements. This enables fast performance, smooth animations and allow access to all native device capabilities.
Details about native mobile app development with Mendix can be found [here.](https://docs.mendix.com/howto/mobile/native-mobile)

The **Siemens MindSphere Mobile Starter Application** is an app template which is based on the **Native Mobile Quickstart** from Mendix and includes all you need to start developing a native mobile app for your MindSphere tenant.

On a phone there is no MindSphere launchpad - therefore the app as to implement the login the MindSphere itself. The template contains a login page which is shown at startup to the user.
The login itself to MindSphere on your device is done outside of our native application in a browser and your app is started after successful login via a "Deep Link". Details about this process can be found [here](https://developer.mindsphere.io/howto/howto-develop-mobile-app-with-mdsp.html) - but do not worry - the implementation is already part of the app template - just use it.
To support Deep Links with your app, you have to create your own [Custom Development App](https://docs.mendix.com/howto/mobile/how-to-devapps) and register a DeepLink corresponding to your app registration.

We recommend to do the [build a native mobile inspection-app](https://academy.mendix.com/link/path/66/Build-a-Native-Mobile-Inspection-App) tutorial from the academy to get yourself familiar with mobile app development.

This documentation is structured in two main parts:

* Setup development environment - explains everything to get you started
* Module Details - describes the solution and what should be considered during development

## 2 Setup development environment

The setup of your development environment contains the following steps:

* Registration of a new mobile app in Developer Cockpit
* Create project based on "Siemens MindSphere Mobile Starter Application"
* Build your own development app
* .well-known files
* Try it out

### 2.1 Registration of your mobile app in Developer Cockpit

The Siemens MindSphere Mobile Starter Application provides functionality that a user can sign in to MindSphere from within the mobile application. To get the mobile authentication running it is necessary that the application itself is registered within MindSphere. This registration can be done within the MindSphere Developer Cockpit in some easy steps.

1. Open the *Developer Cockpit* via the Launchpad of your *Developer Tenant*.

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DeveloperCockpit_Launchpad.png)

1. Hit **Add application** and fill in the following:

    * ```Type = Mobile```
    * ```Infrastructure = none```
    * ```Display Name``` give your app nice display Name. Currently this name is only used in Developer Cockpit
    * ```Internal Name``` give an internal name. We need this name later and will call this name **internal_name**
    * ```Version = 1.0.0```

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DC_CreateApp.png)

1. Hit **Save** to save your new app.

You have to map Mendix user roles with MindSphere user roles (see more detailed discussion of MindSphere and Mendix roles and scopes in the [Roles & Scopes](mindsphere-module-details) section of *MindSphere Module Details*). The standard template will be delivered with the roles **Admin** and **User** therefore we will create corresponding MindSphere scopes as well. If this is not matching your application please adapt accordingly.

{{% alert type="info" %}}

The standard template also includes the role **Anonymous** which will be used for the authentication process. Please do not register this role in the Developer Cockpit.

{{% /alert %}}

1. Hit **Configure** to open the **Roles and Scopes Management**.

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DC_Configure.png)

1. Extend the **Application Scopes** section and hit the **Create Scope** button.

1. Add as scope name **admin** and assign it the role **admin**.

1. Hit the **Create Scope** button again and enter **user** as scope name and assign it to the **admin** and **user** role.

1. The final result should looks like

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DC_ScopesRoles.png)

1. Hit **Back to App** and **Register** to finalize the registration at MindSphere

     ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DC_Register.png)

1. You will see the following popup after registration:

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DC_AppCred.png)

    We will need the **Client ID** and the **Client Secret** later - so copy them somewhere - we will call these constants **client_id** and **client_secret**.

1. Last step is to grant yourself the *user* or *admin* role in the **Settings** app.

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/Settings_AppRole.png)

Very good, you know have successfully registered your application within the Developer Cockpit.

Note: With the **MindSphere Mobile Starter Application** you can build applications for native mobile apps as well as for 'normal' Web applications. Right now Developer Cockpit supports either the registration of a mobile or a Web app but not for both together. But don't worry, this can be achieved. You only have to setup another registration in the Developer Cockpit for your Web application. With this application you also will achieve to get your application on the MindSphere Launchpad. If you have a Web part than do this registration as described in [Setting up MindSphere Launchpad](/developerportal/deploy/deploying-to-mindsphere), otherwise you can skip this.

### 2.2 Start developing your app with Mendix Studio Pro HEIKO

First you have to create a new Mendix Team server project based on the **Siemens MindSphere Mobile Starter Application** template.

There are some configurations need to be done in the project itself.
In the project explorer open the configuration of the app store module **MindsphereSingleSignOn**

![Studio SSO configuration](./attachments/mindsphere-mobile-native/StudioPro_SSO_configuration.png)

You have to adopt these constants:

* **HostTenant** = name of your tenant

optional, in case you are not working on *eu1.mindsphere.io*

* **MindSphereGatewayURL**

* **PublicKeyURL**

and in the NativeMobile folder

* **ClientID** = **client_id** from app registration in developer cockpit

* **ClientSecret** = **client_secret** from app registration in developer cockpit

### 2.3 Build your own development app

In this chapter you will create your own custom develpoment app and register a deep link.

1. Follow the description on how to create a [Custom Development App](https://docs.mendix.com/howto/mobile/how-to-devapps) and install it on your device or emulator as described there.

1. Configure the DeepLink.

    The configuration of the deep links has to be done (at the moment) on the native part for Android and iOS separately. Currently the "Native Builder App" has limited configuration possibilities for deep links so we will enable them manually.

If not already done in step 2 clone your github repo locally in order to make the needed changes.

#### Android

##### AndroidMainfest.xml

Open the file `./android/app/src/main/AndroidManifest.xml` with an editor of your choice e.g. [Visual Studio Code](https://code.visualstudio.com/)

Set the `android:launchMode` in the main activity to `singleTask`

```xml
<activity
    ...
    android:launchMode="singleTask">
```

Add the following `<intent-filter>` to the main activity:

```xml
<intent-filter android:label="@string/app_name">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="https" android:host="TENANT-INTERNAL_NAME-TENANT.eu1.mindsphere.io" />
</intent-filter>
```
Replace the placeholders `TENANT` and `INTERNAL_NAME` in the `android:host` attribute with your tenant name (2x) and the **internal_name** of your application registration. Example given:

```xml
    <data android:scheme="https" android:host="demo-mmna-demo.eu1.mindsphere.io" />
```

##### MainActivity.java

Open the file `./android/app/src/dev/java/com/mendix/nativetemplate/MainActivity.java`

Add the following import:

```java
import android.net.Uri;
```

Add the following method to the class `MainActivity`

```java
@Override
protected void onNewIntent (Intent intent){
    setIntent(intent);
}
```

Replace the existing method `private void launchApp(String url)` in "MainActivity" with the following code:

```java
private void launchApp(String url) {
    disableUIInteraction(true);
    isPackagerRunning(url, (res) -> {
        if (!res) {
            disableUIInteraction(false);
            return;
        }

        boolean clearData = clearDataCheckBox.isChecked();
        Intent intent = new Intent(this, MendixReactActivity.class);
        boolean devModeEnabled = devModeCheckBox.isChecked();
        MxConfiguration.WarningsFilter warningsFilter = devModeEnabled ?
            MxConfiguration.WarningsFilter.partial : MxConfiguration.WarningsFilter.none;
        MendixApp mendixApp = new MendixApp(AppUrl.forRuntime(url), warningsFilter, devModeEnabled);
        // MindSphere enhancement
        // Copy current intent data if available
        Intent appLinkIntent = getIntent();
        String appLinkAction = appLinkIntent.getAction();
        Uri appLinkData = appLinkIntent.getData();
        if (appLinkAction != null) {
            intent.setAction(appLinkAction);
        }
        if (appLinkData != null) {
            intent.setData(appLinkData);
        }
        // end MindSphere enhancement
        intent.putExtra(MendixReactActivity.MENDIX_APP_INTENT_KEY, mendixApp);
        intent.putExtra(MendixReactActivity.CLEAR_DATA, clearData);
        startActivity(intent);
        disableUIInteraction(false);
    });
}
```

That's it - commit the two changed files to your github repo and build your developer app again. You can do this with the "Build Native App" application from Mendix Studio Pro - or build it [locally](https://docs.mendix.com/howto/mobile/native-build-locally#5-1-building-an-android-app-with-android-studio) with [Android Studio](https://developer.android.com/studio)


#### iOS

We recommend to make the required changes with the help of Xcode and build your developer app locally. Details about this process can be found [here](https://docs.mendix.com/howto/mobile/native-build-locally#5-2-building-an-ios-app-with-xcode)

Do the following:

* Open a terminal at the project root directory (the folder where you have cloned the github repo) and run

    ```bash
    npm install
    ```

    in the project root to install the required dependencies.

* Change directory by running `cd ios` and run

    ```bash
    pod install
    ```

    to install the iOS dependencies. The iOS project is using CocoaPods for its dependency management. For more information on installing the CocoaPods dependency manager on your machine see CocoaPods documentation.

* Open the .xcodeworkspace in the ios folder using Xcode.

    Navigate to Signing and Capabilities, select as target `dev` and choose your Team from the drop-down menu:

    ![Xcode Team](./attachments/mindsphere-mobile-native/Xcode_Team.png)

    As with the Android Build Variants the iOS app makes use of Build Targets to switch between building a custom developer app (target *dev*) or a release app (target *nativeTemplate*).

    Adopt also the `Bundle Identifier` as it has to be unique.

    Click on `Capability` and add `Associated Domains`

    ![Associated Domain](./attachments/mindsphere-mobile-native/Xcode_enable_associated_domain.png)

    Add the following domain:

    ```bash
    applinks:TENANT-INTERNAL_NAME-TENANT.eu1.mindsphere.io
    ```

    Replace the placeholders `TENANT` and `INTERNAL_NAME` with your tenant name (2x) and with the internal name of your application registration in the developer cockpit e.g.

    ```bash
    applinks:demo-mmna-demo.eu1.mindsphere.io
    ```

    ![Associated Domain](./attachments/mindsphere-mobile-native/Xcode_associated_domain.png)

* In the `project navigator` open the file `nativeTemplate/NativeTemplate/AppDelegate.m`

    Add the following import:

    ```objc
    #import "React/RCTLinkingManager.h"
    ```

    and the method `continueUserActivity":

    ```objc
    - (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity
        restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler
    {
        return [RCTLinkingManager application:application
            continueUserActivity:userActivity
            restorationHandler:restorationHandler];
    }
    ```

* From the drop-down menu choose `dev` and the device you would like to run the app on, then click the play button to
    start a build for your app:

    ![Build ios dev app](./attachments/mindsphere-mobile-native/Xcode_build_ios_dev_app.png)

    After the build succeeds the app should be starting on the selected device.

### 2.4 Well Known Files

for iOS:

* **AppleAppSiteAssociation** =

    ```json
    {
        "applinks": {
            "apps": [],
            "details": [
                {
                    "appID": "TEAM_ID.BUNDLE_IDENTIFIER",
                    "paths": ["/login"]
                }
            ]
        }
    }
    ```

    replace the appID with your **TEAM_ID** and your **BUNDLE_IDENTIFIER**.

    Hint: You can find the **TEAM_ID** in the [Apple developer center](https://developer.apple.com/membercenter). Log into the web site, click on Membership, then look for Team ID in the Membership Information section.

    Attention: You have to remove all `/r/n` from the json object before saving the constant in Mendix Studio Pro. This could be done for example here: http://jsoneditoronline.org/


for Android:

* **AssetLinks**

    TODO

TODO: Deploy your app once to Mendix Cloud --> to serve the .wellknown files and register the .well-known files in the developer cockpit.

### 2.5 Try out your application

Well done, you should now be ready to start your application for the very first time on your mobile phone. For this press the **Run Locally** button so that your own native application can connect to your Mendix Studio Pro.
If your application is up you should see the login page of the Anonymous user role.

![Mobile](./attachments/mindsphere-mobile-native/MobileLoginPage.png)

Please provide your developer tenant name and hit the **Login** button.
The default browser of your phone will open and show you the MindSphere credential page where you can sign in with your MindSphere credentials.

![Mobile](./attachments/mindsphere-mobile-native/MobileCredentialPage.png)

After a successful login, your app will be started again and create your session. At the end your native home page comes up.

## 3 Module Details

The **Siemens MindSphere SSO** module provides a couple of nanoflows which should be used to achieve a seamless integration into MindSphere. This nanoflows can be found in the folder **_Use me/NativeMobile** of the SSO module. The **Siemens MindSphere Mobile Starter Application** contains the SSO module and is using the provided nanoflows. The starter template just needs to be configured to get an application running. Nevertheless we like to explain some details here.

### 3.1 Authentication

The authentication is based on the usage of **Anonymous** users and is enabled in the project securities.

![StudioPro](./attachments/mindsphere-mobile-native/StudioPro_Security_Anonymous.png)

When the application starts it will provide the **Login** page from the **Login** folder where the user can provide the tenant name he likes to authenticate against. To get this work, the **Login** page is registered as default homepage for the Anonymous role.

![StudioPro](./attachments/mindsphere-mobile-native/StudioPro_Navigation_Anonymous_HomePage.png)

When the **Sign in** button will be clicked, the nanoflow **ACT_Login** will be called which will open the browser so that the user can provide his credentials.
After a successful login, the Deep Link handler of the SSO module will fetch the MindSphere Mobile Token and will start the user session accordingly.
At the end of the authentication process the app will be restarted and provide the home page of the corresponding user role.

If something gets wrong during the authentication the corresponding error code will be visualized via the Login page.

### 3.2 MindSphere APIs and Token Handling

When you have already developed a Web application for MindSphere you are aware that you need the **Access Token** node included and used with your REST calls. The very good news for native mobile is, that this doesn't need to change. You can use the very same microflows for Web apps and native apps to fetch MindSphere APIs.

If you are new to MindSphere app development please checkout [MindSphere Development Considerations](mindsphere-development-considerations) to learn more about this topic.

To support mobile native applications, MindSphere provides a special mobile token, which is called MindSphere Mobile Token. As a Mendix developer you luckily don't have to take care much on this token as this has been done in the MindSphere Mobile Starter Application, but it is maybe worth to have some details to understand the impact on your application better.

Actually the Mobile Token is not only one token. It contains two tokens

* the **Access Token** which you need to fetch the MindSphere APIs which has an expiration time of half a hour and
* the **Refresh Token** which will be used to refresh the Access Token when this expires. The refresh token itself is also only valid for 12hours, latest after this tme the user has to sign in again into the application to acquire a new token.

As tokens can expires, there are some events on the lifecycle of a mobile app which needs to be considered. At each event the tokens has to be checked and the result  will be one of the following three:

1. The token is still valid and nothing has to be done.
2. The access token which is only valid for half an hour is no longer valid but the refresh token is still valid. In this case just the access token has to be refreshed.
3. Both the access token as well as the refresh token has become invalid. In this case the user will be logged out and has to be sign in again.

As you need a valid MindSphere token do call MindSphere APIs it is very important that this checks are done before you call a flow to access a MindSphere API. The Siemens MindSphere Mobile Starter Application helps you to ensure this by taking care of the following events:

* Application startup: The standard mobile homepage of the Native Mobile Application already has a Data view calling the nanoflow **OnSessionStartup**. OnSessionStartup will take care of the checks mention above.

    ![StarterMobile](./attachments/mindsphere-mobile-native/StarterMobile_OnSessionStartup.png)

* Application resume: Within the provided Data view also an **App events** element is placed where the **On resume** event will call the nanoflow **MindSphereSingleSignOn.OnResume**.

    ![StarterMobile](./attachments/mindsphere-mobile-native/StarterMobile_OnResume.png)

* Application gets online: Same as on application resume but now the **On online** event of the App events will call the OnResume nanoflow.

* Periodically your token needs to be checked when your app is running. Therefore the **MindSphereSingleSignOn.OnRefresh** nanoflow is configured to be called every minute.

    ![StarterMobile](./attachments/mindsphere-mobile-native/StarterMobile_OnRefresh.png)

For sure you will like to change the provided home page fitting to the rest of your home page. Please do this, but always make sure not to delete the initial provided Data view and App events.

### 3.3 Additional user role home pages

If you like to create new home pages for different user roles, please assure that it includes the Data view with the **OnSessionStartup** nanoflow and the **AppEvents** as provided via the default mobile home page as well. This ensures that the MindSphere token handling working properly for this user roles as well.
