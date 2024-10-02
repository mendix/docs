---
title: "Build JavaScript Actions for Native Mobile"
url: /howto/extensibility/create-native-javascript-action/
weight: 30
description: "This how-to teaches you how to build a JavaScript action for native mobile apps."
---

## Introduction

Native mobile applications have faster performance and give you the ability to use device hardware features. This tutorial teaches you how to build your own JavaScript actions, specifically ones that harness your native mobile device's hardware to read Near Field Communication (NFC) tags. If you would like to use third-party modules other than an NFC scanner, refer to this tutorial as a general overview.

This how-to teaches you how to do the following:

* Build a JavaScript action for a native mobile app
* Add a dependency to the native JavaScript action
* Implement an NFC scanner in a JavaScript action

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install the latest version of Mendix Studio Pro from the [Marketplace](https://marketplace.mendix.com/link/studiopro/)
* Install npm's [Node.js](https://nodejs.org)
* Have a fiscal [NFC NDEF](https://www.dummies.com/consumer-electronics/nfc-data-exchange-format-ndef/) tag for testing
* Own a mobile device with NFC capabilities

## Building NFC JavaScript Actions

To build NFC JavaScript actions, you will do the following:

1. Create a Mendix app.
1. Install a dependency in your app.
1. Add a native dependency.
1. Make two NFC JavaScript actions.
1. Implement the NFC Scanner in your app.
1. Build a native mobile app.

{{% alert color="info" %}}
This tutorial's commands assume your software is installed in the following places:

* Studio Pro: *C:\Program Files\Mendix\9.11.0.39533*
* Mendix app: *C:\MendixApps*
{{% /alert %}}

### Creating a Mendix App {#test-project}

Follow these instructions to set up your NFC app:

1. Open Mendix Studio Pro.
1. Select **File** > **New App**.
1. Select the **Blank Native Mobile App** (also available online [here](https://marketplace.mendix.com/link/component/109511/)).
1. Click **Use this starting point**.
1. Name your app *NativeNFC* and click **Create App** to close the dialog box.
1. Rename module **NativeMobile** to *NativeNFC*. You will add your implementation in this module.
1. Right-click the module and select **Add other** > **JavaScript action**. Name the new JavaScript action *HasNFCSupport*. You will create the implementation later.
1. Open the **Home_Native** page and add some welcome text for you test app.
1. Add an action button with caption *Read NFC Tag* on your home page:
    1. Right-click your home page and click **Add widget**.
    1. Select **Call nanoflow button**.
    1. Click **new**.
    1. Set the **Name** to *ACT_ReadNFCTag*.
    1. Change the button's caption to *Read NFC Tag*.
    1. Save the page.
    1. Open **ACT_ReadNFCTag**.
    1. Drag the **HasNFCSupport** JavaScript action onto this nanoflow.
    1. Save your nanoflow.
1. Click **Publish** to deploy to the Free App environment. 

Your Mendix app should looks something like this:

{{< figure src="/attachments/howto/extensibility/build-javascript-actions/create-native-javascript-action/native-nfc-app-home-studio-pro.png" alt="native nfc app home"   width="550"  class="no-border" >}}

### Creating NFC JavaScript Actions {#nfc-ja-action}

JavaScript actions for web and native platforms are similar. However, they have their own set of dependencies which they can build on.

Build an action to check if a device supports NFC:

1. Open the **HasNFCSupport** JavaScript action. 
1. Change the **Return type** to **Boolean**. 
1. Add this import above the `EXTRA CODE` block: 

    ``` javascript
    import { Big } from "big.js";
    import { NativeModules } from "react-native";
    import NfcManager from "react-native-nfc-manager";
    ``` 

1. Replace the content of the `USER CODE` block with the following: 

    ``` javascript
    if (!NativeModules.NfcManager) {
    throw new Error("The NfcManager module is not available in your app.");
    }
    return NfcManager.isSupported();
    ``` 

    Explaining the code: 
    * The `NativeModules` contains all loaded modules. This allows you to check if the app has the module installed. This will throw an error when the action is used in the **Make it Native** app. 
    * The NfcManager is imported from your newly added module. The `isSupported` functions check if NFC is supported by the hardware. They return a Promise that will resolved to a Boolean value to indicate if NFC is supported. 
    When finished, your code will look like this: 
    {{< figure src="/attachments/howto/extensibility/build-javascript-actions/create-native-javascript-action/action-has-nfc-support-code.png" alt="has NFC support action code" class="no-border" >}}

1. Optionally, click the **Expose as nanoflow action** tab, select **Expose as nanoflow action**, and **Select** an icon for your JavaScript action. 

Now make a JavaScript action to read the NFC tag information:

1. Create a JavaScript action named *ReadNFCTag*.
1. Select **Return type** > **String**.
1. Click the **Code** tab, and add the import above the `EXTRA CODE` block:

    ``` javascript
    import NfcManager, { Ndef } from "react-native-nfc-manager";
    ```

1. Add the following code to the USER CODE block:

    ``` javascript
    return new Promise(resolve => {
        NfcManager.registerTagEvent(tag => {
            NfcManager.unregisterTagEvent();
            const text = Ndef.text.decodePayload(tag.ndefMessage[0].payload);
            resolve(text);
        });
    });
    ```

    Explaining the code: 
    * Here you return a promise that resolves a string value. The nanoflow will wait until the resolve function is called. The registration listens for tags that are picked up by the reader. When the callback function is executed as a tag is found, un-register the listener to stop listening for other tags. The payload is decoded from a byte array into text. When the resolve function is called with the text parameter, that nanoflow will receive this value as the return parameter. 
    * When finished, your code will look like this:
    {{< figure src="/attachments/howto/extensibility/build-javascript-actions/create-native-javascript-action/action-read-nfc-tag-code.png" alt="Read NFC tag action code" class="no-border" >}}

1. Optionally, click the **Expose as nanoflow action** tab, select **Expose as nanoflow action**, and **Select** an icon for your JavaScript action.

### Installing a Dependency in Your App {#install-dependency-project}

The dependency is split into two parts: the native device part, and the client JavaScript part. In this section we will add the dependency JavaScript for the client bundle. For the bundling we need to add the dependency builder, so that we can add the `react-native-nfc-manager` JavaScript code.

1. In your CLI, open the module folder which contains your JavaScript action:

    ```powershell
    cd C:\MendixApps\NativeNFC\javascriptsource\nativenfc\actions
    ```

1. Make sure *HasNFCSupport.js* is in this folder so you know you are in the right place.
1. Install the dependency with the command `npm install react-native-nfc-manager@1.2.2`.

{{% alert type="info" %}}
This will create a **node_module** folder inside your **actions** folder. There is a known issue that when you try to commit the *node_modules* folder using Apache Subversion, there could be problems if your commit contains a large number of files. To solve this, try removing unnecessary files before committing.
{{% /alert %}}

#### Declaring Native Dependencies

To make Mendix install and link native dependencies automatically while creating production-like builds of a native app, create JSON files next to your JavaScript actions: *HasNFCSupport.json* and *ReadNFCTag.json*. Define the same native dependencies in each of them:

```json
{
    "nativeDependencies": {
        "react-native-nfc-manager": "1.2.2"
    }
}
```

For more information see [Declaring Native Dependencies](/apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies/).

### Using NFC JavaScript Actions {#use-nfc-action}

Make a nanoflow to use your new actions:

{{< figure src="/attachments/howto/extensibility/build-javascript-actions/create-native-javascript-action/scan-tag-nanoflow.png" alt="Scan tag nanoflow" class="no-border" >}}

To make the nanoflow shown above, do the following:

1. Open **ATC_ReadNFCTag**.
1. Double-click the **Has NFC Support** action, set the **Variable name** as *HasNFCSupport*, and click **OK**.
1. Right-click the **Has NFC Support** action, select **Set error handling**, and set the type to **Custom without rollback**.
1. Create a **Show message** action, set the type as **Error**, and set the template as: *Error occurred while checking NFC support: {1}*. Add a parameter containing *$latestError*.
1. Connect the **Has NFC Support** activity to the **Show message** activity. Right-click the connection to the **Show message** action and select **Set as error handler**.
1. Add an end event under your error message, then connect the message to the end event. 
1. Add a **Decision** action. In its **Expression** check for the return variable with the expression *$HasNFCSupport*, write *Has NFC support?* in **Caption**, then click **OK**. Add an end event under this show message activity.
1. If a device is not supported, show a message of type warning. Create a **Show message** action with template text *Sorry, your device does not support NFC.* and then connect this error message to the decision.
1. If a device is supported, add the **Read NFC Tag** action and store the response in the variable *TagValue*.
1. Set the sequence flows from the decision to **True** (going left) and **False** (going down).
1. Right-click the **Read NFC Tag** action and select **Set error handling**. Set the type to **Custom without rollback**.
1. Create a **Show message** action, set the type as error, and set the template text to *Error occurred while reading an NFC tag: {1}*. Use *$latestError* as the single parameter.
1. Connect the **Read NFC Tag** activity with a **Show message** activity. Right-click the connection to the **Show message** action and select **Set as error handler**.
1. Connect this **Show message** action to an end point. Set the type as information, and set the template as *Your NFC tags says: {1}*. Use *$TagValue* as a parameter.
1. Optionally you can add **Show progress** and **Hide progress** activities to give your user more information while using the NFC reader. This action can be found in the **Nanoflow Commons** module.
1. Deploy your app to the sandbox.

### Writing an NFC Tag {#write-nfc-tag}

Now you have a way to read NFC *NDEF* tags. Next you will write some text for your tag. You can create a JavaScript action for this yourself or use an existing tool. If you use an existing tool, Mendix recommends [NFC Tools Android](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc) or [NFC Tools iOS](https://apps.apple.com/us/app/nfc-tools/id1252962749).

To write your own NFC tag, do the following:

1. Install the NFC Tools app on your device.
1. Open the NFC Tools app.
1. Scan your tag. The **Technologies available** section should state it supports *Ndef*. The **Writeable** section should show **Yes**.
1. Tap **WRITE**, tap **Add a record**, and tap **Text**.
1. Enter the text *Hello Mendix Developer!* and tap **OK**.
1. Tap **Write / 30 Bytes**.
1. Scan your tag. You will see a **Write complete** dialog box:
    {{< figure src="/attachments/howto/extensibility/build-javascript-actions/create-native-javascript-action/nfc-tools-write-tag.png" alt="write nfc tag"   width="250"  class="no-border" >}}

{{% alert color="info" %}}
This dialog box is your phone's operating system recognizing the NFC tag. On Android devices, you will see a success message anytime you touch an NFC tag to your device. What you truly need to test is your app's NFC scanning after tapping its button. You will be able to do this on all platforms: on iOS things work as expected, and on Android an app scanning NFC takes priority over the operating systems' scanning.
{{% /alert %}}

### Building a Native Custom Developer App {#custom-developer-app}

When developing a native mobile app, you can use the [Make it Native](/refguide/getting-the-make-it-native-app/) app to quickly get started. However, this app is bundled with a limited number of functionalities. This tutorial's app requires an NFC module in order to access the native NFC capabilities. This can only be achieved by building a custom developer app. To build and install a custom developer app, follow the steps in [Create a Custom Developer App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/).

### Testing the NFC Custom Developer App

After you have finished the steps outlined in [Create a Custom Developer App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/), try it out.

1. Open the app
1. Tap **Scan tag**
1. Scan your NFC tag. You should see a dialog box with the text you assigned to your tag:
    {{< figure src="/attachments/howto/extensibility/build-javascript-actions/create-native-javascript-action/native-nfc-app-success-android.png" alt="read NFC successfully"   width="250"  class="no-border" >}}

Congratulations for completing this NFC tutorial! To go beyond the lessons you have learned, see the sections below. 

### Hardening the Code {#hardening-nfc-action-code}

Now you have a working NFC scanner. However, you can improve it for both Android and iOS.

**On Android** — NFC scanning can be switched off. Also, scanning should be canceled if the back button is clicked.

**On iOS** — Scanning can be canceled when the **Ready to Scan** dialog box is up. 

To implement these capabilities, replace all the **USER CODE** in the **ReadNFCTag** JavaScript action with the following code, then repeat the steps in the [Building a Native Custom Developer App](#custom-developer-app) section above to build and install the updated app on your device:

``` js
// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the app.
import { Big } from "big.js";
import { BackHandler, NativeModules, Platform } from "react-native";
import NfcManager, { Ndef } from "react-native-nfc-manager";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<string>}
 */
export async function ReadNFCTag() {
    // BEGIN USER CODE
    if (!NativeModules.NfcManager) {
        throw new Error("The NfcManager module is not available in your app.");
    }
    if (Platform.OS === "android") {
        const enabled = await NfcManager.isEnabled();
        if (!enabled) {
            throw new Error("NFC is not enabled");
        }
    }

    return new Promise(async(resolve, reject) => {
        let success = false;
        await NfcManager.start({
            onSessionClosedIOS: () => {
                if (!success) {
                    reject(new Error("NFC session closed"));
                }
            }
        });
        if (Platform.OS === "android") {
            BackHandler.addEventListener("hardwareBackPress", async () => {
                await NfcManager.unregisterTagEvent();
                await NfcManager.stop();
                return reject(new Error("NFC was canceled by the user"));
            });
            NfcManager.onStateChanged(
                async event => {
                    if (event.state === "off" || event.state === "turning_off") {
                        await NfcManager.unregisterTagEvent();
                        await NfcManager.stop();
                        return reject(new Error("NFC was disabled by the user"));
                    }
                }
            )
        }
        NfcManager.registerTagEvent(async tag => {
            success = true;
            await NfcManager.unregisterTagEvent();
            await NfcManager.stop();
            const text = Ndef.text.decodePayload(tag.ndefMessage[0].payload);
            resolve(text);
        }, "Read NFC");
    });
    // END USER CODE
}
```

Explaining the code:

At the beginning of the action on Android, the code checks if the NFC tag reader is switched off and throws an error if so. It creates a Promise with `resolve` and `reject` parameters. Note the `async` keyword before the function. This allows `await` to be used with an asynchronous function and lets them execute together while respecting their order in the code. The `start` will initialize the module and register a callback for iOS. This callback will be called when the **NFC NDEF reader session** becomes invalid, either because of the OS or because the **Cancel** button was tapped.  

For Android, a listener for the **hardware back** button is included. When you tap it, you will stop listening for tags, and cancel the execution by calling the `reject` function. This way the nanoflow will receive an error that is caught by the error handler. 

When the app is listening for a tag, you can switch off the NFC function in Android. This causes a *state change* that you will catch, and causes a rejection to the promise.

The second parameter of the `registerTagEvent` function is the instruction text which appears in the iOS **Ready to Scan** dialog box. After the tag is found by the reader, you have to `stop` the NFC manager. This way you stop listening for state changes on Android, and you stop listening for the session to close in iOS.

Congratulations on making your own native JavaScript action! Please use your own creativity to extend the NFC functionality or implement other modules with the lessons you have learned.

## Building for Release

Until this section, you have used a custom developer app to validate your application. When you want to distribute your app in the Google Play Store or Apple App Store, you have to make a build that includes the bundled Mendix app.

For the full explanation on how to build, sign, and distribute your app to an app store see [Build a Mendix Native App in the Cloud](/refguide/mobile/distributing-mobile-apps/building-native-apps/deploying-native-app/), as well as the tutorial's subsequent sections.

## Read More

* [How to Build a Mendix Native App in the Cloud](/refguide/mobile/distributing-mobile-apps/building-native-apps/deploying-native-app/)
* [JavaScript Actions Reference Guide](/refguide/javascript-actions/)
* [How To Build JavaScript actions](/howto/extensibility/build-javascript-actions/)
* [Declaring Native Dependencies](/apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies/)
* GitHub's [NFC React Native Library](https://github.com/whitedogg13/react-native-nfc-manager)
