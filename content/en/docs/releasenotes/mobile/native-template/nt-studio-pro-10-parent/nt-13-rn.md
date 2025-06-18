---
title: "Native Template 13"
url: /releasenotes/mobile/nt-13-rn/
weight: 30
description: "Native Template 13 release notes."
---

## 13.0.0 {#1300}

**Release date: March 21, 2025**

### Improvements

We have added the option to optionally enable or disable cookie encryption for Android devices. This option was introduced in Studio Pro 9.8 and was enabled by default until Studio Pro Version 10.21.

You can find this option in the Navigation Tab of the **Mobile** profile in Studio Pro.

For more information on cookie encryption, see [Encrypting Session Cookies](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/local-data-security/#encrypting-session-cookies) in *Offline Data Security*. 

#### Important Notes

* For projects upgrading to 10.21 and above, follow the [upgrade instructions](#upgrade-instructions) below to migrate your app.

#### Library Updates and Improvements

* **@react-native-async-storage/async-storage:** 2.0.0  
* **react-native-reanimated:** 3.16.1
* **react-native-screens:** 4.4.0
* **react-native-image-picker:** 7.2.3
* **@react-native-community/netinfo:** 11.4.1

* We changed the bottom sheet library to **@gorhom/bottom-sheet**

### Upgrade Instructions {#upgrade-instructions}

If you are upgrading from Mendix versions below 10.18, please follow these steps to use the new React Native version:

1. Update required modules:
    1. Native Mobile Resources: update this module to the latest version available in the Mendix Marketplace.
    1. Nanoflow Commons: update this module to its latest version.
1. Update widgets in Studio Pro:
    1. After updating the Native Mobile Resources module, right-click the warning in Studio Pro and click **Update All Widgets** to complete the process.
1. Test your application:
    1. Thoroughly [test](/refguide/mobile/distributing-mobile-apps/) your application to ensure that all features work as expected after the updates.

For the most direct information on the Native Template, visit our [GitHub Releases page](https://github.com/mendix/native-template/releases/tag/v13.0.0).
