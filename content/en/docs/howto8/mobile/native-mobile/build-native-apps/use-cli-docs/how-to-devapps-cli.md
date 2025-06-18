---
title: "Create a Custom Developer App with the Native Builder CLI"
linktitle: "Custom Developer App with Native Builder CLI"
url: /howto8/mobile/how-to-devapps-cli/
weight: 30
description: A tutorial for creating custom developer apps.
---

## Introduction

As your Mendix app matures, you may want to expand its functionality (such as by introducing custom widgets or logic that will require new native dependencies). One such customization could be adding a near-field communication (NFC) module to your app. While the Make It Native app suffices for testing basic apps, as your app adds custom dependencies—like custom native widgets or fonts—you will need a more tailored developer app.

A custom developer app helps you by serving as a replacement for the Make It Native app, and should be used when you have custom widgets and logic which are not supported by the Make It Native app. Custom developer apps are apps you can generate yourself using your current project structure, your custom modules, and any other requirements to test your evolving app. Custom developer apps feature the same functionality as the Make It Native app but are tailored to your needs.

## Prerequisites

* Complete [How to Get Started with Native Mobile](/howto8/mobile/getting-started-with-native-mobile/)

## Build Your Developer App

1. Open a command line interface (CLI) such as Command Prompt.
2. Navigate to the directory of your Native Builder:

    ```powershell
    cd {path to Native Builder executable file}
    ```

3. Run the following command to build your project's custom developer app:

    ```powershell
    native-builder.exe build dev-app --project-name {your project's name}
    ```

    This command does the following: <br />
    1. Creates a branch named `developer` based on the committed changes to your `main`. <br />
    1. Starts a build using the developer app flavors for your project.
4. Wait until the Native Builder completes your builds.

As with a release build, when the Native Builder is done building you should have two archives for each build: an iOS and an Android build. These archives can be found under the build output path `{build output path}` with **Dev** prepended to their name. The default `{build output path}` is the `./builds` folder relative to your `native-builder.exe` location.

## Installing Your Custom Developer App

### Android

By default your custom developer app will be unsigned. To get a signed *IPA*, follow the steps in the [Signing Your Build](/howto8/mobile/deploying-native-app/#signing-a-build) section of *How to Build a Mendix Native App in the Cloud*. Your Custom developer app branch is named **developer**.

For Android the output of the build is an *APK* file. *APK* files can be directly installed on devices or emulators.

#### Installing on an Emulator

With your emulator running, install your app in your emulator by doing the following:

1. Drag the *APK* onto the emulator's window.
2. Wait for the installation to be done.
3. Open the app from the launcher.

#### Installing on a Device

There are various ways install an app on a device. Installing using a USB is detailed below, but you can use a different method if it suits you. Do the following to install your *APK* onto a device:

1. Connect your device to your machine via USB.
2. Enable file transfer on your device (differs per device).
3. Open **This PC** in File Explorer; your device should be listed as an external device.
4. Drag your *APK* onto your device.
5. Wait for it to finish transferring.
6. Open your device's file manager.
7. Navigate to the root of the file system.
8. Tap the *APK* to install.
9. Go through the installation steps.
10. Open the app from the launcher.

### iOS

By default your custom developer app will be unsigned. To get a signed *IPA*, follow the steps in the [Signing Your Build](/howto8/mobile/deploying-native-app/#signing-a-build) section of *How to Build a Mendix Native App in the Cloud*. Your custom developer app branch is named **developer**.

The unsigned output of an iOS build is an *XCArchive* file. *XCArchive* files require manual signing before they are ready to be installed on a device.

The signed output of iOS build is an *IPA* file. If correctly signed, *IPA* files can be installed on physical devices.

Before installing, make sure you have completed the following prerequisites:

* Have a Mac OSX machine
* Install LTS builds of Node.js and NPM (download [here](https://nodejs.org/en/))
* Install Cocoapods ([installation instructions](https://cocoapods.org/#install))
* Install the latest Xcode version

#### Installing on an Emulator

Builds with the Native Builder are stripped of simulator artifacts. Therefore, to run on Xcode's Simulator you will have to build the developer branch locally from source by completing these steps:

1. Navigate to your GitHub repo.
2. Switch to your **developer** branch:
   
    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-devapps-cli/github-branch-switching.png" alt="Switch branch on GitHub" class="no-border" >}}
   
3. Click **Clone or Download** and then click **Download ZIP**:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-devapps-cli/github-download-branch.png" alt="Download repository" class="no-border" >}}

4. Unzip the downloaded archive.
5. Open a terminal and change directory into the folder.
6. Run this command:

    ```shell
    npm i && cd ios && pod install
    ```

    This will install the node module dependencies and the iOS Dependencies
7. In the **ios** folder, open the **NativeTemplate.xcworkspace** file:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-devapps-cli/ios-folder.png" alt="iOS folder structure" class="no-border" >}}

8. In Xcode select the **Dev** target and the emulator you want to build your developer app for:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-devapps-cli/xcode-target-selection.png" alt="Dev target selection" class="no-border" >}}

9. Click **Run** ({{% icon name="controls-play" %}}).

#### Distributing the Custom Developer App

To run your custom developer app on a device which is not a test device, you will have to sign the developer app with your certificates. 

For local builds, follow the [Signing a Build](/howto8/mobile/deploying-native-app-cli/#signing-a-build) section of *How to Deploy Your First Mendix Native Mobile App with the Native Builder CLI* to sign the *.xarchive* file. 

If you want Native Builder to sign your custom developer app, follow the steps in the [Signing a Build](/howto8/mobile/deploying-native-app-cli/#signing-a-build) section of *How to Deploy Your First Mendix Native Mobile App with the Native Builder CLI*.

## Read More

* [How to Build a Mendix Native App in the Cloud](/howto8/mobile/deploying-native-app/)
* [How to Use Over the Air Updates](/howto8/mobile/how-to-ota/)
