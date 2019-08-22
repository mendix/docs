---
title: "Package Native Apps Using Native Builder"
parent: "native-mobile"
menu_order: 70
description: A how-to for packaging your iOS and Android apps.
tags: ["GitHub", "App Center", "Android", "native", "iOS", "Packaging", "Mobile"]
---

## 1 Introduction

The Native Builder takes your Mendix project containing a native profile and packages a native app for iOS and Android. 

## 2 Prerequisites

* The [Native Builder](https://www.dropbox.com/sh/hpw7sshut9bco68/AABackrr75rPSgW7u5LBMkMra?dl=0) executable (download to a folder of your preference and extract all contents)
* A [GitHub](https://github.com/) account
* A [Microsoft App Center](https://appcenter.ms/) account
* Java JDK 11 (if you have Studio Pro installed, you should already have JDK 11 in *C:\Program Files\AdoptOpenJDK*) which can be acquired [here](https://adoptopenjdk.net/) 

## 3 About the Native Builder

The Native Builder uses MxBuild, GitHub, and App Center to build your applications. The tool automates the configuration of these processes to streamline your app building experience. The Native builder allows you to create as many apps on GitHub as possible, as long as they are given unique app names using the `--app-name` parameter (for more information, see [Setting Up Your Parameters](#parameters) below). When run, the Native Builder packages your apps by doing the following:

1. Deploys your Mendix project locally.
2. Creates a new repository using the Mendix native template repository on GitHub named after the app name provided.
3. Creates a new branch in the new repository called **build/{build number provided to the tool}**.
4. Commits the required files and assets to the build branch in the new repository.
5. Configures your apps in App Center.
6. Starts a build for iOS and Android.
7. Provides progress information on the build.
8. Downloads the zipped app if the build succeeded, or the build log file if the build failed.

## 4 Getting Your Tokens

The sections below describe how to get tokens which allow Native Builder to authenticate with GitHub and App Center. If you already have tokens for your GitHub and App Center, you do not need to repeat these sections.

### 4.1 GitHub Token {#github-token}

1. Go to [GitHub](https://github.com/) and sign in.
2. Go to [Settings](https://github.com/settings/profile) by clicking on your profile picture in the top right.
3. Navigate to [Personal access tokens](https://github.com/settings/tokens) and then click **Generate new token** to create a new personal access token.
4. In the **Note** field, write *Native Builder.*
5. Under **Select scopes**, select **repo**.
6. Click the **Generate token** button.
7. Store your token in a secure place. You will not be able to see it again. If you lose it, you will have to create a new token and delete your old one.

### 4.2 App Center Token {#appcenter-token}

1. Go to [App Center](https://appcenter.ms/apps) and sign in.
3. Click your profile icon in the top right corner, then click **Settings**, and then **Account Settings**.
4. In the **API Tokens** tab, click the **New API token** button.
5. Add a description of your token, select **Full Access**, then click **Add new API token**, and then **New API Token**. Store this token in a secure place as well. You will not be able to see it again. If you lose it, you will have to create a new token and delete your old one.

## 5 Setting Up Your Parameters {#parameters}

### 5.1 Inputting Command-Line Arguments

Command-line arguments provide information to the Native Builder, such as where your Mendix project is located. You will now compose a command and parameters, which will start your Native Builder when executed.

1. Open your command line program as an administrator by right-clicking its icon or *.exe* file and selecting **Run as administrator**. 
2. Using the parameters in the parameters table below, build a command which features the parameters you need using command line. 

	Your finished product will look like this example (note the double quotes around paths which could contain spaces): 

	```
	native-builder.exe --java-home "C:\Program Files\Java\jdk-11.0.1" --project-path "C:\MyApp\MyApp.mpr" --mxbuild-path "C:\Program Files\Mendix\8.0.0\modeler\mxbuild.exe" --runtime-url https://myapp.mendixcloud.com --github-access-token c0e1dfasdfdsaf02c55ded223dbdebdbe5991095224 --appcenter-api-token 3e18912c2b43f4fe6c85f9asdfdfsbf60d3dae72f34 --app-name CoolApp  --app-identifier com.mendix.MyAwesomeApp --build-number 1 --app-version 1.2.3
	```

|   Parameter   |   Description   |   Example   |
| ---- | ---- | ---- |
|   `--java-home`   |   Absolute path to the directory where Java executable is located   |   `C:\Program Files\Java\jdk-11.0.1`   |
|   `--project-path`   |   Absolute path to the Mendix project file   | `C:\MyApp\MyApp.mpr`     |
|   `--mxbuild-path`   |   Absolute path to MxBuild executable   |   `C:\Program Files\Mendix\8.0.0\modeler\mxbuild.exe`   |
|   `--runtime-url`   |   URL of the Mendix runtime   |   `https://myapp.mendixcloud.com`   |
|   `--github-access-token`   |   GitHub access token   |   `c0e1dasf1e102c55ded223dbdebdbe59asf95224`   |
|   `--appcenter-api-token`   |   App Center API token   |   `3e18asdfb43f4fe6c85afsd0bf60dde72f134`   |
|   `--app-name`   |   Name of the app to build   |   `CoolApp`   |
|   `--app-version`   |   Version of the app   |  `1.2.3`   |
|   `--build-number`   |   Build number, an arbitrary unique integer value   |   `1`   |
|   `--app-identifier`   |   Unique app identifier   |   `com.mendix.MyAwesomeApp`   |
|   `--app-icon-path`   |   (Optional) Absolute path to the app icon   |   `C:\MyAppIcon.png`   |
|   `--app-round-icon-path`   |   (Optional) Absolute path to the app round icon, specific to android    |   `C:\MyAppRoundIcon.png`   |
|   `--app-splash-screen-path`   |   (Optional) Absolute path to the app splash screen image   |   `C:\MyAppSplash.png`   |
|   `--appcenter-organization`   |   (Optional) Organization name used in App Center   |   `my-company`   |
|   `--output-path`   |	  (Optional) Absolute path to the location where artifacts should be outputed   |   `C:\Downloads`   |

### 5.2 Advanced Parameter Explanation

#### 5.2.1 --runtime-url

This parameter should point to the runtime you want to run your app against. If testing against a locally deployed app, use your machine's IP address (for example, `http://192.168.1.12:8080`). If testing against a Mendix Cloud-deployed app, use the fully qualified runtime URL of your deployement server (for example, `https://myapp.mendixcloud.com`). The correct protocol needs to be appended, otherwise the URL will be prefixed by default with `http://`.

#### 5.2.2 --appcenter-organization

In App Center you can be a member of one or more organizations. If the app needs to be built as part of an organization, then provide the name of that organization to Native Builder using `--appcenter-organization`. If you leave the command-line argument out, the app will be part of your personal App Center account.

#### 5.2.3 --app-name

This parameter is the name of your app. You can see this name when users install your app on a device. It is also used as the app’s name in App Center.

#### 5.2.4 --app-version

This parameter specifies the version of the app you want to build. See [Semantic Versioning](https://semver.org/) for more information on how to select a proper version number.

#### 5.2.5 --app-identifier

This parameter serves as a unique identifier for your app. Once your app is uploaded to the Apple App Store or the Play Store, the app’s identifier can no longer be modified. If you do modify the identifier after an app is published, it will be treated as a different app by both stores. An app identifier is specified as reverse DNS notation, e.g. {com.mendix.MyAwesomeApp}.

#### 5.2.6 --app-icon-path

This parameter specifies an app icon file. The image must be a *.png* file, and have a resolution of 1024x1024. Mendix will do the resizing for you. If a file path is not provided, default app icons will be provided by branch **master**.

#### 5.2.7 --app-round-icon-path

This parameter specifies an app round icon file which is specific to Android. The image must be a *.png* file, and have a resolution of 1024x1024. Mendix will do the resizing for you. If a file path is not provided, default app icons will be provided by branch **master**.

#### 5.2.8 --app-splash-screen-path

This parameter specifies an app splash file. The image must be a *.png* file, and have a resolution of 1440x2560. Mendix will do the resizing for you. If a file path is not provided, default app splash images will be provided by branch **master**.

#### 5.2.9 --build-number

Every build that is scheduled for release should have a unique, incrementing number. This number will be used as the name of the branch in GitHub, such as `branch/120`. The highest integer Android will allow is 2,147,483,647. Consider starting with 1 and incrementing by one with each release. Alternatively, you can use dates in the “YYmmddHHmm” format, such as `2007310950` for a build run on July 31, 2020 at 09:50.

## 6 Completing Your Initial Run

Follow the steps below to run your Native Builder for the first time (it will fail this time):

1. Run the command.
2. On your first command execution, the Native Builder *will fail* in the setup repository step.
3.  To fix this, complete the following steps. You must repeat them for both your iOS and Android apps if you have one of each:<br /> 
	a. Navigate to App Center.<br />
	b. Select your newly created app.<br />
	c. Select build on the left panel.<br />
	d. You will be greeted with a screen that allows you to link your account with a repository service.<br />
	e. Choose GitHub.<br />
	f. If you are not logged in already you will be asked to log into your GitHub account.<br />
	g. Select approve in the permission request.<br />
	h. Select the repository you want to connect to.<br />
	i. You will be redirected back to your App Center account.<br />
	j. Your repository’s branches are now listed in the build page.

## 7 Completing Your Final Run

Now that your repository is connected, follow the steps below to run Native Builder to completion:

1. Run the command again.
2. Native Builder will take a few minutes to complete.
3. When the build succeeds your binaries should have been downloaded for you.

You can now use your binaries to run your app on testing devices. To publish your apps, though, you will need to get your apps signed. Consult [Enable Build Signing](#signing) below for more information on app signing.

{{% alert type="info" %}} In case of failure, the build logs will be downloaded for your convenience. Remember to provide them when filing a ticket with Mendix.{{% /alert %}}

## 8 Advanced Usage

### 8.1 Enable Build Signing {#signing}

If you haven’t provided your signature keys, App Center builds unsigned apps. To release your apps you have to sign your builds with your signature keys. Signature keys prove the authenticity of your app and prevent forgeries. 

First, follow [Managing App Signing Keys](https://docs.mendix.com/refguide/managing-app-signing-keys) to acquire the signing keys you need. Android and iOS apps require different types of keys as that document explains.

Next, use your keys to sign your app. To sign your app using App Center, do the following: 

1. Navigate to [App Center](https://appcenter.ms/apps).
2. Select the app you wish to configure.
3. Select **Build** on the left panel.
4. Select the branch you would like to configure from the list.
5. Select the **Wrench icon** in the top-right corner to open the **Build configuration** panel.

The next steps differ depending on the type of app you want to configure.

For an iOS app, do the following:

1. Turn the **Sign builds** toggle on.
2. Upload your mobile provisioning profile.
3. Upload your *.p12* certificate.
4. Provide the password you used when exporting the *.p12* certificate.
5. Click **Save**, or **Save and build** if you wish to build immediately.

For an Android app, do the following:

1. In the **Build Variant** drop-down menu, select **release**
2. Select **Sign builds**
3. Upload your keystore file.
4. Provide the password to your keystore.
5. Provide the name of your key's alias.
6. Provide the password of the key's alias.
7. Click **Save**, or **Save and build** if you wish to build immediately.

Finally, either start a build for this branch manually or run Native Builder again with the same build number as the branch you just configured (e.g. **build/1**) to let it handle the build process and download your signed artifacts.

### 8.2 Custom Native Code

If you have custom native dependencies or code, you can include them in your app by merging your changes to the **master** branch of the GitHub repository which Native Builder is making. Every build branches off from **master** and your changes will be included. Remember to sync your repository occasionally to get the latest changes from Mendix Native template. For more information on syncing your repository, see [When to Sync Your Native Template](#sync-your-repository) below.

### 8.3 Custom App Center Configuration

In App Center you can configure your builds at the branch level. If no configuration is available for branch **master**, Native Builder will create a default configuration. If a configuration is already present, it will not be modified by the tool. When a branch for a build is initialized, the configuration of **master** is copied over. Consecutive builds will not alter this branch's configuration. This is to avoid overriding your custom configuration.

### 8.4 Connecting to a Local Running Instance of Studio Pro

Advanced users might wish to connect to a local running instance of Studio Pro. Be aware that if you make the changes described in this section to your template, you must revert all those changes to use the Native Builder with your template.

While following the instructions below, be sure to replace any instance of `LOCAL_IP_ADDRESS` with *your* local IP address ({10.0.0.2} for example).

#### 8.4.1 Getting Started

1. Clone your repository locally from GitHub.
2. Switch to the latest branch created by Native Builder ({build/1} for example)
3. Follow this [guide](https://github.com/mendix/native-template#21-install-dependencies) to install your dependencies.

#### 8.4.2 iOS

For an iOS app, do the following:

1. Open **ios/NativeTemplate.xcworkspace** using **Xcode**.
2. Open **NativeTemplate/AppDelegate.swift**.
3. Replace this section of the code (on line **13**):

   ```swift
   let bundleUrl = Bundle.main.url(forResource: "index.ios", withExtension: "bundle", subdirectory: "Bundle")
   ```

   with the following code:

   ```swift
   let bundleUrl = AppUrl.forBundle(url: "http://LOCAL_IP_ADDRESS:8080", remoteDebuggingPackagerPort: 8083, isDebuggingRemotely: true)
   ```

4. Locate the **Info.plist** file and replace the value of `Runtime url` with `http://LOCAL_IP_ADDRESS:8080`.
5. Run the app by clicking the **Play** button.

#### 8.4.3 Android

{{% alert type="info" %}}Starting with Android 9 (API level 28), cleartext support is disabled by default. If you are debugging with a device using v28 or higher, you need to include the `android:usesCleartextTraffic="true"` property in the `application` tag in your **app/src/main/AndroidManifest.xml** file.{{% /alert %}}

For an Android app, do the following:

1. Open the `android` directory using Android Studio.
2. Open **app/src/main/java/com/mendix/nativetemplate/MainApplication.java**.
3. On line **35** replace `false` with `true`.
4. Open **app/src/main/res/raw/runtime_url**.
5. Replace the file's contents with `http://LOCAL_IP_ADDRESS:8080`.
6. Run the app by clicking the **Play** button.

## 9 When to Sync Your Native Template {#sync-your-repository}

When Mendix updates the Native template, Native Builder will not automatically sync your GitHub repository. You will have to manually sync it yourself. The Native Builder avoids automatic synchronization because of possible merge conflicts with customized apps.

The following error scenarios could indicate that your repository is out of sync with the latest native template:

* Your App Center build fails
* Your app crashes while you are testing it after adding a new pluggable widget or JavaScript action

If either of these things happen, make sure that you are using the latest Native template version by consulting the [native-template GitHub page](https://github.com/mendix/native-template).

If your Native template is not the latest version, synchronize your repository with the latest version of the Native template. For instructions on syncing a GitHub repository, see GitHub's [Syncing a fork](https://help.github.com/en/articles/syncing-a-fork).

## 10 Resolving Errors

### 10.1 GitHub Errors

**Invalid Access Token** — Your access token is invalid. Consult the [GitHub Token](#github-token) section above and provide the access token to Native Builder.

**Unable to Create the Repository: the Access Token Needs Access to the Repo Scope** — Your access token is valid, but has too few permissions for Native Builder to work. Native Builder clones a template GitHub repository, creates a branch, and commits files. Consult the [GitHub Token](#github-token) section above and provide the new access token to Native Builder.

**Unable to Delete Branch Build/{build number}** — Something went wrong while communicating with GitHub. Verify your connection, check that GitHub is available, and try running Native Builder again.

**Unable to Create Branch Build/{build number}** — Something went wrong while communicating with GitHub. Verify your connection, check that GitHub is available, and try running Native Builder again.

**Unable to Commit {build number}** — Something went wrong while communicating with GitHub. Verify your connection, check that GitHub is available, and try running Native Builder again.

### 10.2 App Center Errors

**Invalid API Token** — Your API token is invalid. Follow the [App Center Token](#appcenter-token) section above and provide the API token to Native Builder.

**Unable to Configure Build:{explanation}** — Something went wrong while communicating with App Center. Verify your connection, check that App Center is available, and try running Native Builder again.

**Build {build number} for App {app number} Has Failed** — The native build on App Center has failed. Read the log file that Native Builder has downloaded. The log file is named *{AppName}-{BuildNumber}.log* and is located in the same folder as your Native Builder executable.

**The build configuration is overridden with the default** — While Native Builder is checking to identify if the branch it is building has been manually configured, it may detect false positives. This could lead to your custom configuration getting overridden. If that happens, consider running the build directly using App Center and skip using the Native Builder for this branch.

**Unknown Error** — If you do not understand an error, you can sign in to App Center and delete the build configuration for the **master** branch. Then run Native Builder again. The tool will recreate the default build configuration for **master** and your branch.

## 11 Read More

* [Get Started with Native Mobile](getting-started-with-native-mobile)
* [Style Your Mendix Native App](how-to-use-native-styling)
