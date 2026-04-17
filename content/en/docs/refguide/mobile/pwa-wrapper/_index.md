---
title: "PWA Wrapper"
url: /refguide/mobile/pwa-wrapper/
weight: 45
description: "Package Mendix PWAs as native Android and iOS apps and use wrapper capabilities."
cascade:
    beta: true
---

{{% alert color="info" %}}
This feature is currently in beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

PWA Wrapper lets you package a Mendix progressive web app (PWA) as a native mobile app for Android and iOS. This is useful when you want to keep a web-based application architecture while distributing the app through app stores, installing it on managed devices, or adding a small set of commonly used hardware capabilities.

PWA Wrapper is a Mendix Studio Pro extension that configures the wrapper, generates native packages, and provides a set of JavaScript actions for using a small set of commonly used hardware capabilities in your Mendix app.

PWA Wrapper does not replace Mendix native mobile development. It is intended for PWA-based mobile apps that need native packaging together with commonly used mobile capabilities, including barcode and QR scanning, biometric authentication, media upload, geolocation, and local notifications.

In summary:

* If you need a fully native user interface based on React Native or broader native-device integration, see [Native Mobile](/refguide/mobile/introduction-to-mobile-technologies/native-mobile/).
* If you want to keep a PWA architecture and add native packaging together with common mobile capabilities, PWA Wrapper is the better fit.

## Documentation Overview

This PWA Wrapper documentation section includes the following topics:

* Overview: this page explains what PWA Wrapper is and when to use it
* Installation guide: [Install PWA Wrapper](/refguide/mobile/pwa-wrapper/install-pwa-wrapper/)
* Build guide: [Build PWA Wrapper Apps](/refguide/mobile/pwa-wrapper/build-pwa-wrapper-apps/)
* Signing reference: [Sign PWA Wrapper Apps](/refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/) explains the signing step in the build flow
* Capabilities guide: [PWA Wrapper Capabilities](/refguide/mobile/pwa-wrapper/pwa-wrapper-capabilities/)
* Limitations: [PWA Wrapper Limitations](/refguide/mobile/pwa-wrapper/pwa-wrapper-limitations/)

## Typical Use Cases

Use PWA Wrapper in the following situations:

* You have a Mendix PWA and want to distribute it as an Android or iOS app
* You want to keep a single web-based codebase while packaging it in a native shell
* You want to keep a Mendix PWA architecture while still supporting common mobile capabilities such as biometric authentication, barcode and QR scanning, media upload, geolocation, or local notifications, together with related integrations such as sharing, file download, printing, permissions, network information, or URL opening
* You want to install a packaged app on managed devices instead of exposing only a browser URL

## Workflow Overview

The standard workflow is as follows:

1. Build your Mendix app as a web or PWA experience.
2. Install the PWA Wrapper from the Mendix marketplace.
3. Open the builder and configure app metadata, permissions, and signing.
4. Generate an Android APK or iOS package and distribute it through your standard mobile deployment process.

## Limitations

Keep the following beta limitations in mind:

* Some capabilities depend on physical device hardware and cannot be validated reliably on simulators or emulators
* Platform support varies for individual capabilities, so not every capability behaves the same way on Android and iOS
* Some integrations use standard Web APIs, which means behavior can vary between devices, operating system versions, and embedded browser engines

For build-specific constraints, see [Build PWA Wrapper Apps](/refguide/mobile/pwa-wrapper/build-pwa-wrapper-apps/). For capability-specific constraints, see [PWA Wrapper Capabilities](/refguide/mobile/pwa-wrapper/pwa-wrapper-capabilities/).

## Read More

* [Install PWA Wrapper](/refguide/mobile/pwa-wrapper/install-pwa-wrapper/)
* [Build PWA Wrapper Apps](/refguide/mobile/pwa-wrapper/build-pwa-wrapper-apps/)
* [Sign PWA Wrapper Apps](/refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/)
* [PWA Wrapper Capabilities](/refguide/mobile/pwa-wrapper/pwa-wrapper-capabilities/)
* [PWA Wrapper Limitations](/refguide/mobile/pwa-wrapper/pwa-wrapper-limitations/)
