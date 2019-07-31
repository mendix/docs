---
title: "Package Native Apps Using Native Builder"
parent: "native-mobile"
menu_order: 40
description: A how-to for packaging your iOS and Android apps.
tags: ["GitHub", "App Center", "Android", "native", "iOS", "Packaging"]
---

## 1 Introduction

The Native Builder takes your Mendix project containing a native profile and packages a native app for iOS and Android. To download the Native Builder executable, [click here](https://www.dropbox.com/sh/hpw7sshut9bco68/AABackrr75rPSgW7u5LBMkMra?dl=0). You can download the *.zip* file to a folder of your preference, and then you must extract all of the files in order for the Native Builder to work. 

## 2 Prerequisites

* The [Native Builder](#) executable
* A [GitHub](https://github.com/) account
* A [Microsoft App Center](https://appcenter.ms/) account
* Java JDK 11 (if you have Studio Pro installed, you should already have JDK 11 in *C:\Program Files\AdoptOpenJDK*) which can be acquired [here](https://adoptopenjdk.net/) 

## 3 Explaining the Native Builder

When run, the Native Builder packages your apps by doing the following:

1. Deploys your Mendix project locally.
2. Forks a Mendix template repository on GitHub.
3. Creates a new branch in the forked repository called **build/{build number provided to the tool}**. 
4. Commits the required files and assets to the build branch in the forked repository.
5. Verifies that there is a build configuration for branch **master** on App Center. If there is not, one is provided.
6. Copies the build configuration for branch **master** to that of branch **build/{build number}**.
7. Starts a build for iOS and Android.
8. Provides progress information on the build.
9. Downloads the zipped app if the build succeeded, or the build log file if the build failed.

## 4 Getting Your Tokens

### 4.1 GitHub Token {#github-token}

1. Create an account, then sign in.
2. Go to [Settings](https://github.com/settings/profile) by clicking on your profile picture in the top right.
3. Navigate to [Personal access tokens](https://github.com/settings/tokens) and then click **Generate new token** to create a new personal access token.
4. In the **Note** field, write *Native Builder.*
5. Under **Select scopes**, select **repo**.
6. Click the **Generate token** button.
7. Store your token in a secure place. You will not be able to see it again. If you lose it, you will have to create a new token and delete your old one.

### 4.2 App Center Token {#appcenter-token}

1. Go to [App Center](https://appcenter.ms/apps)
2. Create an account and sign in, or sign in with your GitHub account credentials.
3. Click your profile icon in the top right corner, then click **Settings**.
4. In the **API Tokens** tab, click the **New API token** button.
5. Add a description of your token, select **Full Access**, then click **Add new API token**. Store this token in a secure place as well. You will not be able to see it again. If you lose it, you will have to create a new token and delete your old one.

## 5 Setting Up Your Parameters

### 5.1 Inputting Command-Line Arguments

Command-line arguments provide information to the Native Builder, such as where your Mendix project is located. You will now compose a command and parameters, which will start your Native Builder when executed.

1. Open your command line program as an administrator by right-clicking its icon or *.exe* file and selecting **Run as administrator**. 
2. Using the parameters in the [Parameter Table](#parameter-table) below, build a command which features them all using command line. 

	Your finished product will look like this example (note the double quotes around paths which could contain spaces): 

	```
	native-builder.exe --java-home "C:\Program Files\Java\jdk-12.0.1" --project-path "C:\MyApp\MyApp.mpr" --mxbuild-path "C:\Program Files\Mendix\8.0.0\modeler\mxbuild.exe" --runtime-url myapp.mendixcloud.com --github-access-token c0e1dfasdfdsaf02c55ded223dbdebdbe5991095224 --appcenter-api-token 3e18912c2b43f4fe6c85f9asdfdfsbf60d3dae72f34 --app-name CoolApp --app-version 1.2.3 --app-identifier com.mendix.MyAwesomeApp
	```

### 5.2 Parameter Table {#parameter-table}

|   Parameter   |   Description   |   Example   |
| ---- | ---- | ---- |
|   `--java-home`   |   Absolute path to the directory where Java executable is located   |   `"C:\Program Files\Java\jdk-12.0.1"`   |
|   `--project-path`   |   Absolute path to the Mendix project file   | `"C:\MyApp\MyApp.mpr"`     |
|   `--mxbuild-path`   |   Absolute path to mxbuild executable   |   `"C:\Program Files\Mendix\8.0.0\modeler\mxbuild.exe"`   |
|   `--runtime-url`   |   URL of the Mendix runtime   |   `myapp.mendixcloud.com`   |
|   `--github-access-token`   |   GitHub access token   |   `c0e1dasf1e102c55ded223dbdebdbe59asf95224`   |
|   `--appcenter-api-token`   |   App Center API token   |   `3e18asdfb43f4fe6c85afsd0bf60dde72f134`   |
|   `--appcenter-organization`   |   (Optional) Organization name used in App Center   |   `my-company`   |
|   `--app-name`   |   Name of the app to build   |   `CoolApp`   |
|   `--app-version`   |   Version of the app   |  `1.2.3`   |
|   `--app-identifier`   |   Unique app identifier   |   `com.mendix.MyAwesomeApp`   |
|   `--app-icon-path`   |   (Optional) Absolute path to the app icon   |   `"C:\MyAppIcon.png"`   |
|   `--build-number`   |   (Optional) Build number   |   `1`   |

## 6 Explaining Advanced Parameters

### 6.1 --appcenter-organization

In App Center you can be a member of one or more organizations. If the app needs to be built as part of an organization, then provide the name of that organization to Native Builder using `--appcenter-organization`. If you leave the command-line argument out, the app will be part of your personal App Center account.

### 6.2 --app-name

This parameter is the name of your app. You can see this name when users install your app on a device. It is also used as the app’s name in App Center.

### 6.3 --app-version

This parameter specifies the version of the app you want to build. See [semantic versioning](https://semver.org/) for more information on how to select a proper version number.

### 6.4 --app-identifier

This parameter serves as a unique identifier for your app. Once your app is uploaded to the Apple App Store or the Play Store, the app’s identifier can no longer be modified. If you do modify the identifier after an app is published, it will be treated as a different app by both stores. An app identifier is specified as reverse DNS notation, e.g. {com.mendix.MyAwesomeApp}.

### 6.5 --app-icon-path

This parameter specifies an app icon file. The image must be a *.png* file, and have a resolution of 1024x1024. We'll do the resizing for you. If a file path is not provided, the app icons on branch **master** are used.

### 6.6 --build-number

This parameter is optional. Every build should have a unique, incrementing number. This number will be used as the name of the branch in GitHub, such as `branch/120` if you provide `--build-number 1`. Alternatively, you can use dates in the “YYYYmmddHHmm” format, such as `202012311010` for a build run on December 31, 2020 at 10:10.

## 7 Completing Your Initial Run

Follow the steps below to run your Native Builder for the first time (it will fail this time):

1. Run the command.
2. On your first command execution, the Native Builder *will fail* in the setup repository step.
3.  To fix this, repeat the following steps. You must repeat them for both your iOS and Android apps if you have one of each:<br /> 
	a. Navigate to App Center.<br />
	b. Select your newly created app.<br />
	c. Select build on the left panel.<br />
	d. You will be greeted with a screen that allows you to link your account with a repository service.<br />
	e. Choose GitHub.<br />
	f. If you are not logged in already you will be asked to log into your Github account.<br />
	g. Select approve in the permission request.<br />
	h. Select the repository you want to connect to.<br />
	i. You will be redirected back to your App Center account.<br />
	j. Your repository’s branches are now listed in the build page.

## 8 Completing Your Final Run

Now that your repository is connected, follow the steps below to run Native Builder to completion:

1. Run the command again.
2. Native Builder will take a few minutes to complete.
3. When the build succeeds your binaries should have been downloaded for you.

{{% alert type="info" %}} In case of failure, the build logs will be downloaded for your convenience. Remember to provide them when filing a ticket with Mendix.{{% /alert %}}

## 10 Advanced Usage

### 10.1 Enable Build Signing

If you haven’t provided your signature keys, App Center builds by default debug artifacts. To release your apps you have to sign your builds with your signature keys. Signature keys prove the authenticity of your app and prevent forgeries. 

Native Builder automatically detects changes to the master branch build configuration and uses them for consecutive builds. By following [Managing App Signing Keys](https://docs.mendix.com/refguide/managing-app-signing-keys), you can make sure that your apps are signed and ready for release.

### 10.2 Custom Native Code

If you have custom native dependencies or code, you can include them in your app by merging your changes to the **master** branch of the GitHub fork which Native Builder is making. Every build branches off from **master** and your changes will be included. Remember to rebase your forked repository occasionally to get the latest changes from upstream.

### 10.3 Custom App Center Configuration

In App Center you can configure your builds at the branch level. If no configuration is available for branch **master**, Native Builder will create a default configuration. If a configuration is already present, it will not be modified by the tool. The configuration of **master** is copied to the build branch (e.g. `build/1`), so any changes made to the **master** configuration will be kept.

## 11 When to Sync Your Native Template Fork

When Mendix updates the Native template, Native Builder will not automatically sync your GitHub fork. You will have to manually sync it yourself. The Native Builder avoids automatic synchronization because of possible merge conflicts with customized apps. 

The following error scenarios could indicate that your fork is out of step with the latest native template:

* Your App Center build fails
* Your app crashes while you are testing it

If either of these things happen, make sure that you are using the latest Native template version by consulting the [native-template GitHub page](https://github.com/mendix/native-template). 

If your Native template is not the latest version, synchronize your fork with the latest version of the Native template. For instructions on syncing a GitHub fork, see GitHub's [Syncin a fork](https://help.github.com/en/articles/syncing-a-fork).

## 12 Resolving Errors

### 12.1 GitHub Errors

**Invalid Access Token** — Your access token is invalid. Consult the [GitHub Token](#github-token) section above and provide the access token to Native Builder.

**Unable to Create the Fork: the Access Token Needs Access to the Repo Scope** — Your access token is valid, but has too few permissions for Native Builder to work. Native Builder forks a GitHub repository, creates a branch, and commits files. Consult the [GitHub Token](#github-token) section above and provide the new access token to Native Builder.

**Unable to Delete Branch Build/{build number}** — Something went wrong while communicating with GitHub. Verify your connection, check that GitHub is available, and try running Native Builder again.

**Unable to Create Branch Build/{build number}** — Something went wrong while communicating with GitHub. Verify your connection, check that GitHub is available, and try running Native Builder again.

**Unable to Commit {build number}** — Something went wrong while communicating with GitHub. Verify your connection, check that GitHub is available, and try running Native Builder again.

### 12.2 App Center Errors

**Invalid API Token** — Your API token is invalid. Follow the [App Center Token](#appcenter-token) section above and provide the API token to Native Builder.

**Unable to Configure Build:{explanation}** — Something went wrong while communicating with App Center. Verify your connection, check that App Center is available, and try running Native Builder again.

**Build {build number} for App {app number} Has Failed** — The native build on App Center has failed. Read the log file that Native Builder has downloaded. The log file is named *{AppName}-{BuildNumber}.log* and is located in the same folder as your Native Builder executable.

**Unknown Error** — If you do not understand an error, you can sign in to App Center and delete the build configuration for the **master** branch. Then run Native Builder again. The tool will recreate the default build configuration for **master** and your branch.

## 13 Read More

* [Get Started with Native Mobile](getting-started-with-native-mobile)
* [Style Your Mendix Native App](how-to-use-native-styling)
