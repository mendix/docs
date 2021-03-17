---
title: "Release OTA update with App Center's CodePush"
parent: "native-mobile"
menu_order: 8
description: Tutorial for releasing an OTA update with App Center's CodePush
tags: ["mobile", "native", "react", "ios", "android", "ota", "appcenter"]
---

## 1 Introduction

Mendix Native apps support OTA using App Center's CodePush. Mendix Native Mobile Builder can assist with the process of building your app
with support for OTA using App Center's CodePush and also push your OTA updates. 

## 2 Prerequisites {#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Mendix Studio Pro v8.15 and above installed using the online installer. The offline installer does not include the Mendix Native Mobile Builder dependency.
* [Having configured and deployed your app](deploying-native-app)
* Having App Center service configured for Mendix Native Mobile Builder

## 3 Build an OTA update capable app {#build-with-ota-support}

For OTA update via App Center's CodePush to be available to your app's users, you will have to toggle the **App Center OTA Support** capability on, build new binaries with the new capability and release them to the respective app stores. Only users with the new apps will be able to receive OTA updates.

1. Click Project > Build Native Mobile App
2. Navigate to Capabilities: 
{{% image_container width="350" %}}![Start Mendix Native Mobile Builder](attachments/nbui/advanced-capabilities.png){{% /image_container %}}
3. Toggle App Center's CodePush OTA Support on: 
{{% image_container width="350" %}}![OTA capability enabled](attachments/nbui/advanced-capabilities-ota.png){{% /image_container %}}
4. Click Save
5. Now build an application for distribution and make a note of the version number used: 
{{% image_container width="350" %}}![Build release app page](attachments/nbui/build-release-app-for-ota.png){{% /image_container %}}
6. If the OTA update functionality is to be made available to your users, please release a new update via the respective stores. 

## 4 Release an OTA update for your app {#release-ota-update} 

Given you have released an OTA capable app, to release a new OTA update follow these steps:

1. Select to deploy an OTA update via CodePush
{{% image_container width="350" %}}![Menu entry Deploy OTA update via CodePush](attachments/nbui/advanced-ota-menu.png){{% /image_container %}}
2. Type the target app version, to release the OTA update for. This need to match exactly the app version used for building the app binaries in the previous step or the one released on the app stores.
{{% image_container width="350" %}}![OTA configuration screen](attachments/nbui/advanced-ota-configuration.png){{% /image_container %}}
3. Press **Release an OTA update via CodePush**
4. The Mendix Native Mobile Builder will compile your project and resources and released the OTA updates. 
{{% image_container width="350" %}}![OTA build step](attachments/nbui/advanced-ota-building.png){{% /image_container %}}
5. On complition you get links to the CodePush OTA update administration pages for your android and iOS apps.
{{% image_container width="350" %}}![OTA build step success](attachments/nbui/advanced-ota-success.png){{% /image_container %}}
{{% image_container width="350" %}}![OTA App Center page](attachments/nbui/advanced-ota-appcenter-page.png){{% /image_container %}}

## 4 How to transfer a CLI OTA compatible app to Mendix Native Mobile Builder {#from-cli-to-ui}

The transition from the CLI to Mendix Native Mobile Builder for OTA supporting apps, requires a few manual steps to avoid having to release your apps to the app stores again. 

### 4.1 Gather the required information 

1. Navigate to App Center: https://appcenter.ms
1. Find the Android and iOS apps used for building your project
1. Check the URL and note down the application id as seen in the URL. 
    For example: 
    `https://appcenter.ms/users/user.name/apps/App-Android/distribute/code-push` 
    
    **App-Android** is the id of the Android app. 

### 4.2 Move your project to Mendix Native Mobile Builder

1. Launch Mendix Native Mobile Builder for your project.
1. If you have not yet completed the setup wizard please complete it now.
1. Quit the tool completely. 
1. Navigate to your project's directory and find the nativemobile folder. e.g. `C:\Users\user\Documents\Mendix\App\nativemobile`
1. Enable *Hidden items* in Explorer to be able to see the `.config` file if it is not visible. 
1. Open the .config file using Notepad and look for a key named App Center. If it is there it might contain some app names already: 
    ```  
    "appcenter": {
        "iosAppName": "App-iOS",
        "androidAppName": "App-Android"
    },
    ```
    If it does not exist add it manually. Either way, make sure to change the names to reflect the IDs of your App Center apps. 
    Make sure the newly changed file is still valid JSON.
1. Restart Mendix Native Mobile Builder for your project. 
    If the tool does not start, verify once more that the *.config* file is valid JSON.

Try to push an OTA update for an unreleased version of your app, e.g. 0.1.0. If the OTA update shows up on your App Center app's CodePush administration page, you successfully transfered your project over to Mendix Native Mobile Builder.


## 5 Read More

* [How To Get Started with Native Mobile](/howto/mobile/getting-started-with-native-mobile)
