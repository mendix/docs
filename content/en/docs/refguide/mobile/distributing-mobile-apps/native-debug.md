---
title: "Debugging Native Apps"
url: /refguide/mobile/distributing-mobile-apps/native-debug/
weight: 40
description: "A guide for debugging native mobile apps using the Make It Native app."
aliases:
    - /howto/mobile/native-debug/
---

## Introduction

When changing your native mobile app or designing a custom widget, you may need to debug your implementation. The Make It Native app exposes a developer mode which supports debugging native mobile apps for expert developers.

{{% alert color="warning" %}}
**Open DevTools** appears in the developer menu of the Make It Native app, but it does not open React Native DevTools. This is a known issue and a limitation of React Native, which does not include its debugger in release builds of an app. As the Make It Native app is distributed as a release build, you cannot use React Native DevTools with it.

To debug with React Native DevTools, use a custom developer app built with a debug configuration, for example the `devDebug` variant. For more information, see [Creating a Custom Developer App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/). To inspect your app in the Make It Native app, use [React Developer Tools](#rn-dev).
{{% /alert %}}

## Debugging Your Native App

To start a debugging session in a custom developer app built with a debug configuration, do the following:

1. Run your Mendix app locally on your desktop.
2. Start your custom developer app.
3. Select **Enable dev mode** on the initial screen of the app.
4. Start your app on your mobile device in Mendix Studio Pro by clicking **View App** > **View on your device**.
5. With your mobile device, tap **Scan QR code**, then scan the QR code on your desktop.

When the custom developer app finishes loading your app, do the following:

1. Open the developer menu by using a three-finger long press.
2. Tap **Open DevTools**.

React Native DevTools opens on your desktop and connects to your app. You can inspect your app and set breakpoints in its JavaScript files.

### Using React Developer Tools{#rn-dev}

React Developer Tools is [an app](https://github.com/facebook/react/tree/main/packages/react-devtools) which will allow you to investigate the way your native page is rendering, adjust things like spacing in a live editor, and inspect the state and props of your pluggable and native widgets. To proceed, you must also have [Node and NPM](https://nodejs.org/en/download/) installed.

You can consult the [React Native documentation](https://reactnative.dev/docs/debugging) for extra information, but this document teaches you the basics of using React Developer Tools. 

To install React Developer Tools, do the following:

1. Open your CLI and run NPX (an executable runner for NPM) with this code: `npx react-devtools`.

#### Debugging with iOS Simulator and Android Emulators

Open your native app in iOS Simulator or Android emulator and then do the following:

1. Select **Enable dev mode** on your native app.
2. Run `npx react-devtools`.
3. React Developer Tools will launch and connect to Simulator. You can now inspect and modify the React Native elements the same way you could modify HTML elements in Chrome:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-debug/simulator-rn-dev.png" alt="debug simulator"   width="350"  class="no-border" >}}

4. In the Make It Native App, use a three-finger tap to **Toggle Element Inspector** and enable enhanced inspection capabilities.

#### Debugging with the Make It Native App

To use the Make It Native app with React Developer Tools, do the following: 

1. Connect your mobile device to your laptop with a USB cord.
2. Run `adb devices` to ensure your device is listed.
3. Start your native app on your device with **Enable dev mode** selected.
4. Run `adb reverse tcp:8097 tcp:8097` to allow the applet to interact with your device.
5. Run `npx react-devtools`.
6. React Developer Tools will launch and connect to your device. You can now inspect and modify the React Native elements the same way you could modify HTML elements in Chrome:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-debug/min-app-rn-devtools.png" alt="debug min app"   width="350"  class="no-border" >}}

## Debugging Your Styling

{{% alert color="info" %}}
This section is optional for Studio Pro version 11.6 and above. React Native includes React Native DevTools, which is also bundled with Studio Pro. If you use the Make It Native app, you still need these steps, because **Open DevTools** does not open in that app, as described earlier on this page.
{{% /alert %}}

With the Make It Native app, you can examine your styling and the structure of your pages. This makes it easier to debug, test, and inspect styling. Inspect and debug your styling by doing the following:

1. Install the LTS of [Node.js](https://nodejs.org/en/).
2. Open your command-line interface (CLI).
3. Run `npm i -g react-devtools` to install the React developer tools.
4. Run `react-devtools`.

After running `react-devtools` you will see the React developer tools GUI. To use the tools to debug your styling, do the following:

1. Open your app in the Make It Native app with **Enable dev mode** selected.
2. When running your app, shake your device to open developer settings.
3. Tap **Toggle Element Inspector** to start inspecting. 
4. Tap any styled element in your app (like a text element) to see its style information on your device and inspect and debug it in your React developer tools GUI.
5. Shake your device and tap **Toggle Element Inspector** to turn off the inspector off.

## Debugging the OS Logs

When your Mendix app is crashing or the logging in Mendix Studio Pro is incomplete, you might want to dive into your operating system's log files for information. There are two options:

1. You could start the app in [Xcode or Android Studio](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/#building-app-project), either of which will give you more information and allow you to set breakpoint and inspect variable values. This approach is a bit more cumbersome. 
1. Get the log files directly from your device.

The first approach is self-explanatory. For information on getting log files directly from your device, however, see below.

### Using Android Logcat

The Android Debug Bridge (ADB) can get the log files via command line (specifically logcat) by following these steps:

1. Set up your phone:<br />
    1. If not already, enable **Developer Mode** by opening **Settings** > **System** and tap 7 times om the **Build Number**.<br />
    1. In **Settings** open the **Developer Options**.<br />
    1. Enable **USB Debugging**.
1. Download the [Latest Android Tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) for Windows.
1. Unzip the files in a working directory, for example **C:\adb**.
1. Open a command line tool the in the working directory.
1. Execute the command `adb start-server`.
1. Connect your phone via USB, then accept the **Allow USB debugging?** dialog box on your phone.
1. Execute the command `adb logcat > output.txt`. All output will be written in *output.txt*.
1. Open your Mendix app and implement the actions that you want to debug.
1. Stop the log capturing in your command line tool by pressing <kbd>Ctrl</kbd> + <kbd>C</kbd>.
1. Open *output.txt* in a text editor.
1. Search for your issue.

For more detailed steps how to set up ADB, see [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/). To learn more about ADB in general, see [Command ADB](https://developer.android.com/studio/command-line/adb).
