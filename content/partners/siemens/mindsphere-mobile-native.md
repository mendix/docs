---
title: "MindSphere Mobile Native"
parent: "mindsphere"
menu_order: 200
description: "Explain how to create your own Native Mobile application for MindSphere and what needs to be considered for development"
tags: ["MindSphere", "Credentials", "Multi-Tenant", "Environment Variables", "Local", "Styling", "UI", "Icons", "Limitations", "Licensing", "Validation", "Mobile Native"]
---

# MindSphere Mobile Native

## 1 Introduction

This documentation describes the adaptations needed to develop Mendix native mobile apps for MindSphere. Native mobile apps do not render inside a web view - they use native UI elements. This enables fast performance, smooth animations, and allows access to all native device capabilities.
Details about building native mobile apps with Mendix can be found [here](https://docs.mendix.com/howto/mobile/native-mobile).

The **Siemens MindSphere Mobile Starter Application** is an app template which is based on the **Native Mobile Quickstart** from Mendix and includes all you need to start developing a native mobile app for your MindSphere tenant.

On a phone there is no MindSphere launchpad - therefore the app has to implement the login to MindSphere itself. The template contains a login page which is shown to the user at startup.
The end-user signs in to MindSphere outside the native application, in a browser, and your app is started after a successful login via a "Deep Link". Details about this process can be found [here](https://developer.mindsphere.io/howto/howto-develop-mobile-app-with-mdsp.html). But do not worry - the implementation is already part of the app template - just use it.
To support deep links in your app, you have to create your own [Custom Development App](https://docs.mendix.com/howto/mobile/how-to-devapps) and register a deep link corresponding to your app registration.

As a prerequisite, we recommend that you follow the [build a native mobile inspection-app](https://academy.mendix.com/link/path/66/Build-a-Native-Mobile-Inspection-App) tutorial from the Mendix Academy to get yourself familiar with mobile app development. You should also be familiar with the basics of the source code management system [git](https://git-scm.com/) as you will have to update the standard [Custom Development App](https://docs.mendix.com/howto/mobile/how-to-devapps).

This documentation is structured into two main parts:

* [Setup Development Environment](#setupdevenv) - explains everything to get you started
* [Module Details](#moduledetails) - describes the solution and what should be considered during development

## 2 Setup Development Environment{#setupdevenv}

The setup of your development environment consists of the following steps:

1. Register a new mobile app in Developer Cockpit
2. Create a project based on "Siemens MindSphere Mobile Starter Application"
3. Build your own development app
4. Configure `.well-known` files
5. Try it out

### 2.1 Registration of your mobile app in Developer Cockpit

The **Siemens MindSphere Mobile Starter Application** template provides the ability for a user to sign in to MindSphere from within a mobile application. To get the mobile authentication running it is necessary that the application itself is registered within MindSphere. This registration can be done with the MindSphere Developer Cockpit by following the steps below.

1. Open the *Developer Cockpit* via the Launchpad of your *Developer Tenant*.

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DeveloperCockpit_Launchpad.png)

1. Click **Add application** and fill in the following:

    * ```Type = Mobile```
    * ```Infrastructure = none```
    * ```Display Name``` give your app a nice display Name. Currently this name is only used in Developer Cockpit
    * ```Internal Name``` give an internal name. We need this name later and will call this name **internal_name**
    * ```Version = 1.0.0```

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DC_CreateApp.png)

1. Click **Save** to save your new app.

    You have to map Mendix user roles to MindSphere user roles (see a more detailed discussion of MindSphere and Mendix roles and scopes in the [Roles & Scopes](https://docs.mendix.com/partners/siemens/mindsphere-module-details#rolesscopes) section of *MindSphere Module Details*). The standard template will be delivered with the roles **Admin** and **User** therefore we will create the corresponding MindSphere scopes. If this does not match the roles in your application, please adapt these instructions accordingly.

    {{% alert type="info" %}}The standard template also includes the role **Anonymous** which will be used for the authentication process. You should not register this role in the Developer Cockpit.{{% /alert %}}

1. Click **Configure** to open the **Roles and Scopes Management**.

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DC_Configure.png)

1. Extend the **Application Scopes** section and click the **Create Scope** button.

1. Add a scope with name **admin** and assign it the role **admin**.

1. Click the **Create Scope** button again and enter **user** as the scope name and assign it to the **admin** and **user** role.

1. The final result should look similar to:

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DC_ScopesRoles.png)

1. Click **Back to App** and **Register** to finalize the registration at MindSphere:

     ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DC_Register.png)

1. You will see the following popup after registration:

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DC_AppCred.png)

    We will need the **Client ID** and the **Client Secret** later - so copy them somewhere - we will call these constants **client_id** and **client_secret**.

1. The last step is to grant yourself the *user* or *admin* role in the app **Settings**.

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/Settings_AppRole.png)

You now have successfully registered your application within the Developer Cockpit.

{{% alert type="info" %}}
The **MindSphere Mobile Starter Application** can be used to build applications for both native mobile apps and 'normal' web applications.

Currently you can register either a mobile app or a web app in the MindSphere Developer Cockpit but both together. If you need access in a web browser, set up another registration in the Developer Cockpit for your web application as described in [Setting up MindSphere Launchpad](https://docs.mendix.com/developerportal/deploy/deploying-to-mindsphere#launchpad). This app can then be added to the MindSphere Launchpad.
{{% /alert %}}

### 2.2 Start Developing your App with Mendix Studio Pro

Firstly, you have to create a new Mendix Team Server project based on the **Siemens MindSphere Mobile Starter Application** template.

Now, you need to make some configuration changes in the app itself.

In the project explorer open the configuration of the app store module **MindsphereSingleSignOn**:

![Studio SSO configuration](./attachments/mindsphere-mobile-native/StudioPro_SSO_configuration.png)

Change these constants:

* **HostTenant** = name of your tenant

    if you are not working on *eu1.mindsphere.io*:

* **MindSphereGatewayURL**

* **PublicKeyURL**

    in the **NativeMobile** folder:

* **ClientID** = **client_id** from app registration in developer cockpit

* **ClientSecret** = **client_secret** from app registration in developer cockpit

Later on, in the section [Well Known Files / Associate Website](#wellknownfiles), you will also provide some values for the **AppleAppSiteAssociation** and **AssetLinks** constants.

### 2.3 Build your Own Development App{#buildcustomapp}

In this section you will create your own custom development app and register a deep link.

1. Follow the description on how to create a [Custom Development App](/howto/mobile/how-to-devapps), and install it on your device or emulator as described there.

1. Configure the DeepLink.

    Currently, the configuration of the deep links has to be done separately for Android and iOS. The "Native Builder App" has limited configuration possibilities for deep links so we will create them manually.

If not already done in step 2 clone your github repo locally in order to make the needed changes and checkout the **developer** branch.

#### 2.3.1 Android

On the the **developer** branch two files needs to be modified:

##### AndroidManifest.xml

Open the file `./android/app/src/main/AndroidManifest.xml` with an editor of your choice, for example [Visual Studio Code](https://code.visualstudio.com/).

Set the `android:launchMode` in the main activity to `singleTask`

```xml
<activity
    ...
    android:launchMode="singleTask">
```

Add the following `<activity>` to the `<application>` tag:

```xml
...
<activity android:name="com.mendix.mendixnative.activity.MendixReactActivity">
    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data
            android:scheme="https"
            android:host="TENANT-INTERNAL_NAME-TENANT.eu1.mindsphere.io"
            android:path="/login" />
    </intent-filter>
</activity>
```

Replace the placeholders `TENANT` and `INTERNAL_NAME` in the `android:host` attribute with your tenant name (twice!) and the **internal_name** of your application registration. For example, for tenant `demo` and internal_name `mmna`:

```xml
    <data android:scheme="https" android:host="demo-mmna-demo.eu1.mindsphere.io" />
```

Commit the changed file to your developer branch, push the change to the github repo, and build your developer app again. You can do this with the "Build Native App" application from Mendix Studio Pro, or build it [locally](/howto/mobile/native-build-locally#5-1-building-an-android-app-with-android-studio) with [Android Studio](https://developer.android.com/studio).

#### 2.3.2 iOS

We recommend you to make the required changes with the help of Xcode and build your developer app locally. Details about this process can be found [here](/howto/mobile/native-build-locally#5-2-building-an-ios-app-with-xcode).

Ensure that you have cloned the github repo locally and have checked out the **developer** branch.

* Open a terminal in the project root directory (the folder where you have cloned the github repo) and run the following:

    ```bash
    npm install
    ```

    this installs the required dependencies.

* Change to the ios directory by running `cd ios`

* Install the iOS dependencies by running the following:

    ```bash
    pod install
    ```

    The iOS project uses CocoaPods for its dependency management. For more information on installing the CocoaPods dependency manager on your machine see CocoaPods documentation.

* Open the .xcodeworkspace in the ios folder using Xcode.

    Navigate to **Signing and Capabilities**, select the target `dev`, and choose your **Team** from the drop-down menu:

    ![Xcode Team](attachments/mindsphere-mobile-native/Xcode_Team.png)

    As with the Android Build Variants, the iOS app makes use of Build Targets to switch between building a custom developer app (target *dev*) or a release app (target *nativeTemplate*).

    Change the `Bundle Identifier` to something unique.

    Click *Capability* and select **Associated Domains**.

    ![Associated Domain](attachments/mindsphere-mobile-native/Xcode_enable_associated_domain.png)

    Add the following domain:

    ```bash
    applinks:TENANT-INTERNAL_NAME-TENANT.eu1.mindsphere.io
    ```

    Replace the placeholders `TENANT` and `INTERNAL_NAME` with your tenant name (twice!) and with the **internal_name** of your application registration in the developer cockpit. For example:

    ```bash
    applinks:demo-mmna-demo.eu1.mindsphere.io
    ```

    ![Associated Domain](./attachments/mindsphere-mobile-native/Xcode_associated_domain.png)

* In the `project navigator` open the file `nativeTemplate/NativeTemplate/AppDelegate.m`

  Add the following import instruction:

  ```objc
  #import "React/RCTLinkingManager.h"
  ```

  and the method `continueUserActivity` with the following definition:

  ```objc
  - (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity
      restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler
  {
      return [RCTLinkingManager application:application
          continueUserActivity:userActivity
          restorationHandler:restorationHandler];
  }
  ```

* From the drop-down menu choose `dev` and the device you would like to run the app on, then click the play button (►) to
    start a build for your app:

    ![Build ios dev app](./attachments/mindsphere-mobile-native/Xcode_build_ios_dev_app.png)

    After the build succeeds the app should be starting on the selected device.

### 2.4 Well Known Files / Associate website{#wellknownfiles}

The configuration of the .well-known files is a prerequisite (for ios) to work.
On Android this is optional. If provided the phone will not ask which app should be opened for the deep link.

#### For iOS

In Mendix Studio Pro open the *NativeMobile* folder in the **MindSphereSSO** module and adopt the constant
**AppleAppSiteAssociation**  with

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

replace the value of the **appID** property with your **TEAM_ID** and your **BUNDLE_IDENTIFIER**.
Do not remove the "." between the two parts.

Info: You can find the **TEAM_ID** in the [Apple developer center](https://developer.apple.com/membercenter). Log into the web site, click on Membership, then look for Team ID in the Membership Information section.

Attention: You have to remove all `/r/n` from the json object before saving the constant in Mendix Studio Pro. This could be done for example [here](http://jsoneditoronline.org/)

#### For Android

To generate the needed file you have to use Android Studio. In the chapter [build your own development app](./mindsphere-mobile-native#buildcustomapp) you have already cloned your github repo locally. Use the developer branch.

1. Open the **root** folder of this repo in a terminal and if not already done run `npm install`.

    Note: during our tests we faced issues when one of the patches should be applied

    ![build your own development app](./attachments/mindsphere-mobile-native/Problem_npm_install.png)

    This can be fixed by changing the line feed from the file **patches/react-native-image-picker+2.3.4.patch** from **CR LF** to **LF**. This can be done with editors like Visual Studio Code easily.

1. Start Android Studio and open the **android** folder as a new project. Android Studio automatically starts some build process, for the next step you have to wait till these are done.

1. Ensure to use the build variant **devDebug**

1. Open the **File** menu and hit the **Sync Project with Gradle Files**.

   ![SyncGradleBuild](./attachments/mindsphere-mobile-native/AndroidStudio_SyncGradle.png)

1. Wait till the Gradle sync is ready and Android Studio is activating the **App Links Assistant** in the **Tools** menu.

1. Open the **App Links Assistant** from the **Tools** menu.

   ![AndroidStudioAppLinks](./attachments/mindsphere-mobile-native/AndroidStudio_AppLinks.png)

1. To generate your **assetlinks.json** file, hit the **Generate Digital Asset Links file** button at step 3 in the **App Links Assistant**.

   ![AndroidStudioGenerateAssetLinks](./attachments/mindsphere-mobile-native/AndroidStudio_GenerateAssetLinks.png)

1. Copy the content from the preview window and use it as the value for the constant **AssetLinks**.
   You find this constant in Mendix Studio Pro in the **MindSphereSSO** module.

   Attention: You have to remove all `/r/n` from the json object before saving the constant in Mendix Studio Pro. This could be done for example [here](http://jsoneditoronline.org/)

#### Make your .well-known files public available

The **Siemens MindSphere Mobile Starter Application** implements a rest endpoint which serves the .well-known files for you. Press the **Run** button to deploy your app to the Mendix cloud.

Once it is deployed adopt the app registration in the developer cockpit for the .well-known files.

* Open your app in the developer cockpit and press **Deregister**.

* Click on the tab **Configuration** and fill in the values for android and ios:

    * android = `https://SANDBOXURL/.well-known/assetlinks.json`
    * ios = `https://SANDBOXURL/.well-known/apple-app-site-association`

* Replace **SANDBOXURL** with your deployment URL.

* Click on **Register** again to save the changes to MindSphere.

* Try out if the files are served correctly by open a browser at the following URL:

    ``` bash
    https://TENANT-INTERNAL_NAME-TENANT.eu1.mindsphere.io/.well-known/assetlinks.json
    ```

    and

    ``` bash
    https://TENANT-INTERNAL_NAME-TENANT.eu1.mindsphere.io/.well-known/apple-app-site-association
    ```

    Replace **TENANT** (2x) and **INTERNAL_NAME** with your values.

### 2.5 Try out your application

Well done, you should now be ready to start your application for the very first time on your mobile phone. For this press the **Run Locally** button so that your own native application can connect to your Mendix Studio Pro.
If your application is up you should see the login page of the Anonymous user role.

![Mobile](./attachments/mindsphere-mobile-native/MobileLoginPage.png)

Please provide your developer tenant name and hit the **Login** button.
The default browser of your phone will open and show you the MindSphere credential page where you can sign in with your MindSphere credentials.

![Mobile](./attachments/mindsphere-mobile-native/MobileCredentialPage.png)

After a successful login, your app will be started again and create your session. At the end your native home page comes up.

Note: if you ever have trouble by signing in to your application it is a good idea to clear the cookies of your mobile browser. Please see documentation of your browser for further information.

### 2.6 Next steps

You now have a blank application which is supporting the authentication for your specific MindSphere application, which is an excellent starting point for your further app development. We recommend also to visit the basic tutorial for MindSphere web applications [Build a MindSphere app with Mendix](https://gettingstarted.mendixcloud.com/link/path/80/Build-a-MindSphere-app-with-Mendix) to learn more about MindSphere application development in general.

Most important will be to enhance your application with MindSphere API calls to use the IoT capabilities of MindSphere. For this you have to consider the following two steps:

* Authorize your MindSphere API calls.
* Add MindSphere API roles to your existing MindSphere gateway registration.

#### 2.6.1 Authorize your MindSphere API calls

With each MindSphere API call you have to assure that the corresponding user token is part of the request. Do this by adding the **MindSphere Access Token** node before your REST calls and set the **Authorization** header accordingly.

![Mobile](attachments/mindsphere-development-considerations/delete-mindspheretoken.png)

#### 2.6.2 Extend your application registration with MindSphere API roles

As of now your application has the user roles **admin** and **user**, but none of those roles has the rights to access MindSphere APIs. Do the following steps to achieve this.

1. Open the *Developer Cockpit* via the Launchpad of your *Developer Tenant*.

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DeveloperCockpit_Launchpad.png)

1. Select your application.

1. Click the **Configure** button to open the roles tab.

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DC_Configure.png)

1. Open the **MindSphere API Roles section** and press the **Add MindSphere API Role** button.

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DC_AddAPIRole.png)

1. Select the corresponding role you need for your particular API call and assign it to your user roles e.g.

    ![DeveloperCockpit](./attachments/mindsphere-mobile-native/DC_ChooseAPIRole.png)

Note: your application has now been updated to be allowed for the API calls, to get this active for your local test session you have to enforce a logout of the user. For this please press the logout button within your mobile application and clear the cookies within your mobile browser. Afterwards sign in again. The provided token includes the added API roles now.

## 3 Module Details{#moduledetails}

The **Siemens MindSphere SSO** module provides a couple of nanoflows which should be used to achieve a seamless integration into MindSphere. This nanoflows can be found in the folder **_Use me/NativeMobile** of the SSO module. The **Siemens MindSphere Mobile Starter Application** contains the SSO module and is using the provided nanoflows. The starter template just needs to be configured to get an application running. Nevertheless we like to explain some details here.

### 3.1 Authentication

The authentication is based on the usage of **Anonymous** users and is enabled in the project securities.

![StudioPro](./attachments/mindsphere-mobile-native/StudioPro_Security_Anonymous.png)

When the application starts it will provide the **Login** page from the **Login** folder where the user can provide the tenant name he likes to authenticate against. To get this work, the **Login** page is registered as default homepage for the Anonymous role.

![StudioPro](./attachments/mindsphere-mobile-native/StudioPro_Navigation_Anonymous_HomePage.png)

A click on the **Sign in** button calls the nanoflow **ACT_Login** which will open the browser so that the user can provide his credentials.
After a successful login, the deep link handler of the SSO module will fetch the MindSphere Mobile Token and will start the user session accordingly.
At the end of the authentication process the app will be restarted and provide the home page of the corresponding user role.

If something went wrong during the authentication process, the corresponding error code will be visualized via the Login page.

### 3.2 MindSphere APIs and Token Handling

When you have already developed a Web application for MindSphere you are aware that you need the **Access Token** node included and used with your REST calls.

![StarterMobile](./attachments/mindsphere-mobile-native/StarterMobileAccessToken.png)

 The very good news for native mobile is, this do not change. You can use the very same microflows for Web apps and native apps to fetch MindSphere APIs.

If you are new to MindSphere app development please checkout [MindSphere Development Considerations](https://docs.mendix.com/partners/siemens/mindsphere-development-considerations) to learn more about this topic.

To support mobile native applications, MindSphere provides a special mobile token, which is called MindSphere Mobile Token. As a Mendix developer you luckily don't have to take care much on this token as this has been done in the **Siemens MindSphere Mobile Starter Application**, but it is maybe worth to have some details to understand the impact on your application better.

Actually the Mobile Token is not only one token. It contains two tokens

* the **Access Token** which you need to fetch the MindSphere APIs which has an expiration time of half a hour and
* the **Refresh Token** which will be used to refresh the Access Token when this expires. The refresh token itself is valid for 12hours, latest after this time the user has to sign in again into the application to acquire a new token.

As tokens can expire, there are some events on the lifecycle of a mobile app which needs to be considered. At each event the tokens has to be checked and the result will be one of the following three:

1. The token is still valid and nothing has to be done.
2. The access token which is only valid for half an hour is no longer valid but the refresh token is still valid. In this case refreshing your access token is sufficient.
3. Both the access token as well as the refresh token has expired. In this case the user will be logged out and has to sign in again.

As you need a valid MindSphere token to call MindSphere APIs it is very important that this checks are done before you call a flow to access a MindSphere API. The **Siemens MindSphere Mobile Starter Application** helps you to ensure this by taking care of the following events:

* Application startup: The standard mobile homepage of the Native Mobile Application already has a Data view calling the nanoflow **OnSessionStartup**. OnSessionStartup will take care of the checks mentioned above.

    ![StarterMobile](./attachments/mindsphere-mobile-native/StarterMobile_OnSessionStartup.png)

* Application resume: Within the provided Data view also an **App events** element is placed where the **On resume** event will call the nanoflow **MindSphereSingleSignOn.OnResume** which do the checks mentioned above.

    ![StarterMobile](./attachments/mindsphere-mobile-native/StarterMobile_OnResume.png)

* Application gets online: Same as on application resume but now the **On online** event of the App events will call the OnResume nanoflow.

* Periodically your token needs to be checked when your app is running. Therefore the **MindSphereSingleSignOn.OnRefresh** nanoflow is configured to be called every minute.

    ![StarterMobile](./attachments/mindsphere-mobile-native/StarterMobile_OnRefresh.png)

For sure you will like to change the provided home page fitting to the rest of your home page. Please do this, but always make sure not to delete the initial provided Data view and App events.

### 3.3 Additional user role home pages

If you like to create new home pages for different user roles, please ensure that it includes the Data view with the **OnSessionStartup** nanoflow and the **AppEvents** as provided via the default mobile home page as well. This ensures that the MindSphere token handling working properly for this user roles as well.
