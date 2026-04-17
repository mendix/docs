---
title: "Install PWA Wrapper"
url: /refguide/mobile/pwa-wrapper/install-pwa-wrapper/
weight: 10
description: "Install and enable PWA Wrapper in Mendix Studio Pro."
---

{{% alert color="info" %}}
This feature is currently in beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

This page explains how to install and enable PWA Wrapper. After installation, you can open the builder and package your Mendix app as an Android or iOS app.

You can start using PWA Wrapper while your Mendix app is still in development. This means you can validate packaging, permissions, device behavior, and capability integrations early, before the app is finalized as a web app or PWA.

## Prerequisites

Before installing [PWA Wrapper](https://marketplace.mendix.com/link/component/259272), make sure the following prerequisites are met:

* You are using Mendix Studio Pro 10.24 or later

Platform-specific build and testing requirements such as Xcode or Xcode Command Line Tools, optional Android emulators or iOS simulators, and Apple signing assets are described in [Build PWA Wrapper Apps](/refguide/mobile/pwa-wrapper/build-pwa-wrapper-apps/).

## Install PWA Wrapper

Install PWA Wrapper from the Marketplace:

1. Open your app in Mendix Studio Pro.
2. Open the **Marketplace**.
3. Search for and install [PWA Wrapper](https://marketplace.mendix.com/link/component/259272).

The installed module includes both parts of the feature:

* **App Builder** adds the Studio Pro extension used to configure and build the wrapper
* **PWA Wrapper Actions** adds the JavaScript actions you can use in nanoflows to access the available capabilities

After installing the module, Mendix Studio Pro prompts you to enable the extension. Allow that prompt to proceed so you can use PWA Wrapper.

## Open the Builder{#openbuilder}

After installation, open the builder from the **Extensions** menu in Mendix Studio Pro by selecting **Open App Builder**.

{{< figure src="/attachments/refguide/mobile/pwa-wrapper/launch-app-builder-extension.png" alt="Open App Builder from the Extensions menu in Mendix Studio Pro" width="350" class="no-border" >}}

## Use the Bundled JavaScript Actions

PWA Wrapper includes JavaScript actions that you can use in your nanoflows. These actions support PWA-based mobile apps that need common mobile capabilities, such as biometric authentication, barcode and QR scanning, uploading pictures and video from the camera or gallery, geolocation, and local notifications, together with related integrations such as network information, file download using the Share API, URL opening, printing file documents, sharing, and permission requests.

Only request the permissions your app actually uses. This keeps the generated wrapper configuration smaller and reduces app store review friction.

## Read More

* [Build PWA Wrapper Apps](/refguide/mobile/pwa-wrapper/build-pwa-wrapper-apps/)
* [PWA Wrapper Capabilities](/refguide/mobile/pwa-wrapper/pwa-wrapper-capabilities/)
