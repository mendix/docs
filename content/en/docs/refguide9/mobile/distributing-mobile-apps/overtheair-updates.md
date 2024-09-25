---
title: "Updating Native Apps"
url: /refguide9/mobile/distributing-mobile-apps/overtheair-updates/
weight: 30
description: "Describes enabling over the air updates using built-in functionality."
aliases:
    - /howto9/mobile/how-to-ota/
    - /howto9/mobile/how-to-ota-appcenter/
---
## Introduction

Native apps can be updated by building and releasing an updated version to the appropriate app stores. The app-users are then asked to update their app and once they choose so the updated app is installed.

Using Mendix Studio Pro 9.7 and above, you can also update your Mendix native apps over-the-air (OTA). OTA updates are a fast and painless way of updating elements like layouts, pages, assets, or even your app's business logic (such as nanoflows and JavaScript actions) without going through the entire release process.

Native apps are separated into two parts: a wrapper that functions as a native iOS or Android app, and a bundle loaded dynamically by the wrapper. Elements like your business logic and static assets are part of this dynamically-loaded bundle. 

With OTA updates support via the Mendix runtime, you can simply deploy a new version of your app to the cloud. Then, the changed apps will be updated automatically at the next restart as long as devices can access the runtime. This way the model, runtime, and apps can be kept seamlessly in sync.

{{% alert color="info" %}}
Currently OTA does not update your app while the app is open or minimized.
{{% /alert %}}

{{% alert color="info" %}}
Mendix OTA updates are the replacement for the deprecated [Release Over the Air Updates with App Center's CodePush (Deprecated)](/howto8/mobile/how-to-ota/). When opting in for OTA updates via the Mendix Runtime, CodePush OTA updates will be disabled. 
{{% /alert %}}

This guide teaches you how to do the following:

* Understand the rational behind Mendix's OTA solution
* Enable OTA updates in your Native Mobile Profile
* Build your app 
* Preserve your model's integrity

## Why You Should Use Mendix's OTA Update Solution

Third-party OTA update solutions present the following shortcomings: 

* **Third-party service requirements** – The third-party service requirement adds extra procurement steps; sometimes the companies behind the functionality might be blocked in certain regions. This adds unneeded overhead and costs time.
* **Complex release cycle** – Complex release cycles can slow your app updates. In general, changes need to be deployed to your Mendix server and then an extra step is required to release the new OTA updates for your apps. That costs time, requires careful decision making, and can incur errors. 
* **No single point of truth** – No single point of truth means it is impossible to tell when and how the app should be updated or the new changes should be synchronized. Mendix removes a lot of complexity from thinking about things like synchronization or offline data. To do so, some premises have to be true. With third party solutions that is impossible to do accurately.
* **Lack of extensibility** – Lack of extensibility, is more technical and affects mostly us. Third-party solutions are too generic and meant to work for everyone, meaning that you sacrifice performance and extensibility. Using our own solution we can tailor it specifically to your requirements. 

With these shortcomings in mind, we developed a Mendix OTA update mechanism which solves these issues. Your Mendix server is the single source of truth, as OTA updates are served from the same endpoint. In addition, instead of thinking of OTA packages and deployments, we merged both actions into one. Instead of deploying a new application to your server, the native apps can simply be updated the next time they are restarted and the devices are updated. As your Mendix server is the one providing the OTA bundles, no third-party service is required. Finally, by developing an in-house solution we can continuously improve it based on your feedback.

## Prerequisites {#prerequisites}

Before starting this guide, make sure you have completed the following prerequisites:

* Use Mendix Studio Pro 9.7 and above.
* Deploy your app by completing [Build a Mendix Native App Locally](/refguide9/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/).
* Install your app on a test device or emulator.
* Read the [Offline-First](/refguide9/offline-first/) guide. Understand this document before issuing OTA updates or releasing new versions.

## When to Use OTA Updates

### Use Cases for OTA Updates {#safeToUpdate}

OTA updates are useful in the following app development cases:

* Style changes
* Static image, text, or other static asset changes
* Layout changes
* Nanoflow changes
* JavaScript action changes
* Widgets added or removed
* A new custom JavaScript-only widget or module added
* Non-destructive model changes (for more information, see [Offline-First](/refguide9/offline-first/))

### When a Full Release Is Required

If you have made any changes directly to your iOS or Android app, you will have to fully redeploy your app to the app stores for the changes to take effect. OTA updates do not suffice and a full release is required in the following cases:

* The initial release of your app
* A Studio Pro version upgrade that requires a new [Native Template](/refguide9/native-template/) version
* You fundamentally changed your app's functionality (this is an Apple App Store limitation, and will require a re-release and re-review of your app by Apple—your app might be removed if you do not comply)
* A new native module has been added (such as the [Native Mobile AR](https://marketplace.mendix.com/link/component/117209) module — for more information see [Modules](/refguide9/modules/))
* The app has been renamed
* The app's launcher icons have been changed
* The splash screen has been changed

## Enabling and Building an App with Mendix OTA Updates Enabled {#build-with-ota-support}

By default OTA updates are disabled for your Native Mobile Profile. To enable them, do the following: 

1. Open your app in Studio Pro 9.7 or above.
1. Navigate to the Native Mobile Profile.
1. Select **Enable over-the-air updates**: 

    {{< figure src="/attachments/howto9/mobile/native-mobile/distribution/how-to-ota/ota-profile-screen.png" alt="Startup option ota checkbox"   width="400"  class="no-border" >}}

1. Deploy your app to the cloud.

Next you must build new binaries with this capability toggled on, and then release the apps to their respective app stores (only users with the new apps will be able to receive OTA updates). To do these things, follow these steps:

1. Click **App** > **Build Native Mobile App**.
1. Build an app for distribution.

To make the OTA update functionality available to your users, release the new binaries via the appropriate app stores. If you are testing the functionality you can now install the apps on your test devices.

## Deploying an OTA Update

OTA updates let you correct mistakes in your published apps without issuing a new release. For example, imagine you issued a new release and later found a spelling mistake on your welcome screen:

{{< figure src="/attachments/howto9/mobile/native-mobile/distribution/how-to-ota-appcenter/phone-error-text.png" alt="Typo in welcome screen"   width="300"  class="no-border" >}}

Before OTA updates, you would have to make a new release and configure it in the app stores. But OTA updates make fixing such a mistake easy.

To release a new version OTA, follow these steps:

1. Correct the message to *Welcome to your new native mobile app. Thank you for using this app!*
1. Save your changes.
1. Deploy your new app to the cloud

On the next restart of the application, the new OTA update will be downloaded and used. 
