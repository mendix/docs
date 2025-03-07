---
title: "Native Template 11"
url: /releasenotes/mobile/nt-11-rn/
weight: 5
description: "Native Template 11 release notes."
---

## 11.0.4 {#1003}

**Release date: January 15, 2025**

* We resolved an issue with the bundle identifier in Xcode's **Dev** scheme.

## 11.0.2 {#1002}

**Release date: January 13, 2025**

### Fixes

* We resolved an issue where remote JavaScript debugging failed in a custom-built Mendix Native Developer App, leading to crashes when enabling “Remote JS Debugging.” The problem was caused by Firebase services not being initialized properly during the build process. Firebase dependencies are now only included when explicitly required by the application.

## 11.0.1 {#1001}

**Release date: January 7, 2025**

### Fixes

* We updated App Center's Xcode version to 15.4.
* We added a parameter to Xcode configs to fix Bundle Identifier issues.

## 11.0.0 {#1000}

**Release date: December 17, 2024**

### Breaking Changes

#### JSC and Hermes Support {#jsc-hermes}

* We disabled JavaScriptCore(JSC) entirely and now only support Hermes.

#### Important Notes

* Apps created in Studio Pro 10.18 and above will automatically use Hermes without any additional configuration.
* For projects upgrading to 10.18 and above, follow the steps in [Upgrade Instructions](#upgrade-instructions) to migrate your app.
* Even if your project is already using Hermes, the update is still required.

### Upgrade Instructions {#upgrade-instructions}

If you are upgrading from Mendix versions below 10.17, please follow these steps to use the new React Native version:

1. Update required modules:
    1. Native Mobile Resources: ensure you update this module to the latest version available in the Mendix Marketplace.
    1. Nanoflow Commons: update this module to its latest version.
1. Update widgets in Studio Pro:
    1. After updating the Native Mobile Resources module, right-click the warning in Studio Pro and click **Update All Widgets** to complete the process.
1. Test your application:
    1. Thoroughly test your application to ensure that all features work as expected after the updates.

For the most direct information on the Native Template, visit our [GitHub Releases page](https://github.com/mendix/native-template/releases/tag/v11.0.0).
