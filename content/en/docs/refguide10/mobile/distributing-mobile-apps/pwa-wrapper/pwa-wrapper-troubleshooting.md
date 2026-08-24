---
title: "Troubleshoot PWA Wrapper"
url: /refguide10/mobile/distributing-mobile-apps/pwa-wrapper/pwa-wrapper-troubleshooting/
weight: 60
description: "This guide lists known issues for PWA Wrapper, and how to solve them."
aliases:
    - /refguide10/mobile/pwa-wrapper/pwa-wrapper-troubleshooting/
---

## Introduction

This page describes known issues you may encounter when building or testing PWA Wrapper apps, along with the steps to resolve them.

## Android

### App Cannot Connect to localhost on a Physical Device{#android-localhost}

* Symptom — When you set the runtime URL to a localhost address (for example, `http://localhost:8080`) and install the app on a physical Android device, the app fails to load and shows the following error:

    ```
    Page Load Error
    net::ERR_CACHE_MISS
    ```

    {{< figure src="/attachments/refguide10/mobile/pwa-wrapper/localhost-cache-miss-error.png" alt="Page Load Error showing net::ERR_CACHE_MISS on Android" max-width="400px" >}}

* Cause — Two things are required for a physical Android device to reach a localhost server on your machine:

    * The app must have the `INTERNET` permission. Without it, the Android OS blocks all outbound network traffic.
    * The device must have a port forwarding rule from its own localhost to your machine's localhost. Android devices do not forward ports automatically.

* Solution — To solve this issue, do the following:

1. In the PWA Wrapper builder, go to the **Permissions** step and enable the **INTERNET** permission (for general guidance on permissions, see [Build PWA Wrapper Apps](/refguide10/mobile/distributing-mobile-apps/pwa-wrapper/build-pwa-wrapper-apps/)).
1. Connect the Android device to your machine via USB and make sure [USB debugging](https://developer.android.com/studio/debug/dev-options) is enabled on the device.
1. Run the following ADB command to forward port 8080 from the device to your machine:

    ```shell
    adb reverse tcp:8080 tcp:8080
    ```

    If your Mendix runtime uses a different port, replace `8080` with the correct port number on both sides.

1. Rebuild and reinstall the app with the **localhost** runtime URL.

The app can now reach the Mendix runtime running on your development machine.

{{% alert color="info" %}}
The `adb reverse` rule applies only to the current USB session. You must re-run the command each time you reconnect the device or restart ADB.
{{% /alert %}}
