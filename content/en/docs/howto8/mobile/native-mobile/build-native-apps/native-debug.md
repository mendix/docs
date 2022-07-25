---
title: "Debug Native Mobile Apps (Advanced)"
url: /howto8/mobile/native-debug/
weight: 40
description: A how-to for debugging native mobile apps using the Make It Native app.
tags: ["native", "mobile", "debug", "Make It Native"]
---

## 1 Introduction

When changing your native mobile app or designing a custom widget, you may need to debug your implementation. The Make It Native app exposes a developer mode which supports debugging native mobile apps for expert developers. Using Google Chrome is recommended for this, as it starts automatically during debugging.

## 2 Debugging Your Native App

To start a debugging session, do the following:

1. Run your Mendix app locally on your desktop.
2. Start the Make It Native app.
3. Select **Enable dev mode** in the Make It Native app.
4. Start your app on your mobile device in Mendix Studio Pro by clicking **View** > **View in the Mendix App**.
5. With your mobile device, tap **Scan QR code**, then scan the QR code on your desktop.

When the Make It Native app finishes loading your app, do the following:

1. Open the developer menu by using a three-finger long press.
2.  Tap **Enable Remote js Debugging**.

Your mobile app should start reloading, and a Chrome window should launch on your desktop pointing to a debugging address. Change the address in your browser's navigation bar to *localhost:8083/debugger-ui* manually and go to that page.

If Chrome launches but does not load your app, check that your app is running in Mendix Studio Pro. If it is, click the **Stop** button, then click **Run Locally** again to restart your app. 

You should see this page:

{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-debug/debug-waiting.png" alt="debug waiting" >}}

If the status remains at **Waiting**, use the reload command (pictured above) to refresh your app. The **Waiting** status should change and indicate an **active** session:

{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-debug/debug-active.png" alt="debug active" >}}

Your browser's debugging tools should be pointing to your app. Now, you can debug your app like you would any other web app. 

Other tools can help you debug Mendix apps, such as the [Using React Developer Tools](#rn-dev) section below. Regardless of which tool you use, remember that Mendix uses a different port (8083) than a default React Native installation would (8080).

### 2.1 Using React Developer Tools{#rn-dev}

React Developer Tools is [an app](https://github.com/facebook/react/tree/master/packages/react-devtools) which will allow you to see investigate the way your native page is rendering, adjust things like spacing in a live editor, and inspect the state and props of your pluggable and native widgets. To proceed, you must also have [Node and NPM](https://nodejs.org/en/download/) installed.

You can consult Facebook's [official documentation](https://reactnative.dev/docs/debugging) for extra information, but this document will teach you the basics of using React Developer Tools. 

To install React Developer Tools, do the following:

1. Open your CLI and run NPX (an executable runner for NPM) with this code: `npx react-devtools@^3`. The `@^3` ensures compatibility with Mendix's React Native version.

#### 2.1.1 Debugging with iOS Simulator and Android Emulators

Open your native app in iOS Simulator or Android emulator and then do the following:

1. Select **Enable dev mode** on your native app.
2. Run `npx react-devtools@^3`.
3.  React Developer Tools will launch and connect to Simulator. You can now inspect and modify the React Native elements the same way you could modify HTML elements in Chrome:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-debug/simulator-rn-dev.png" alt="debug simulator"   width="350"  >}}
	
4. In the Make It Native App, use a three-finger tap to **Toggle Element Inspector** and enable enhanced inspection capabilities.

#### 2.1.2 Debugging with the Make It Native App

To use the Make It Native app with React Developer Tools, do the following: 

1. Connect your mobile device to your laptop with a USB cord.
2. Run `adb devices` to ensure your device is listed.
3. Start your native app on your device with **Enable dev mode** selected.
4. Run `npx react-devtools@^3`.
5. Run `adb reverse tcp:8097 tcp:8097` to allow the applet to interact  with your device.
6. React Developer Tools will launch and connect to your device. You can now inspect and modify the React Native elements the same way you could modify HTML elements in Chrome:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-debug/min-app-rn-devtools.png" alt="debug min app"   width="350"  >}}

## 3 Debugging Your Styling

With the Make It Native app, you can examine your styling and the structure of your pages. This makes it easier to debug, test, and inspect styling. Inspect and debug your styling by doing the following:

1. Install the LTS of [node.js](https://nodejs.org/en/).
2. Open your command line interface (CLI).
3. Run `npm i -g react-devtools@3` to install the React developer tools.
4. Run `react-devtools`.

After running `react-devtools` you will see the React developer tools GUI. To use the tools to debug your styling, do the following:

1. Open your app in the Make It Native app with **Enable dev mode** selected.
2. When running your app, shake your device to open developer settings.
3. Tap **Toggle Element Inspector** to start inspecting. 
4. Tap any styled element in your app (like a text element) to see its style information on your device and inspect and debug it in your React developer tools GUI.
5. Shake your device and tap **Toggle Element Inspector** to turn off the inspector off.

## 4 Debugging the OS Logs

When your Mendix app is crashing or the logging in Mendix Studio Pro is incomplete, you might want to dive into your operating system's log files for information. There are 2 options:

1. You could start the app in [XCode or Android Studio](/howto8/mobile/native-build-locally/#building-app-project), either of which will give you more information and allow you to set breakpoint and inspect variable values. This approach is a bit more cumbersome. 
1. Get the log files directly from your device.

The first approach is self-explanatory. For information on getting log files directly from your device, however, see below.

### 4.1 Using Android Logcat

The Android Debug Bridge (ADB) can get the log files via command line (specifically logcat) by following these steps:

1.  Set up your phone:<br />
	a. If not already, enable **Developer Mode** by opening **Settings** > **System** and tap 7 times om the **Build Number**.<br />
	b. In **Settings** open the **Developer Options**.<br />
	c. Enable **USB Debugging**.
1. Download the [Latest Android Tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) for Windows.
1. Unzip the files in a working directory, for example **C:\adb**.
1. Open a command line tool the in the working directory.
1. Execute the command `adb.exe start`.
1. Connect your phone via USB, then accept the **Allow USB debugging?** dialog box on your phone.
1. Execute the command `adb logcat > output.txt`. All output will be written in *output.txt*.
1. Open your Mendix app and implement the actions that you want to debug.
1. Stop the log capturing in your command line tool by pressing <kbd>Ctrl</kbd> + <kbd>C</kbd>.
1. Open *output.txt* in a text editor.
1. Search for your issue.

For more detailed steps how to set up ADB, see [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/). To learn more about ADB in general, see [Command ADB](https://developer.android.com/studio/command-line/adb).

## 5 Read More

* [Get Started with Native Mobile](/howto8/mobile/getting-started-with-native-mobile/)
* [Debug a Hybrid Mobile App](/howto8/mobile/debug-a-mobile-app/)
* [Configure Parallels](/howto8/general/using-mendix-studio-pro-on-a-mac/)
