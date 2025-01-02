---
title: "Native Template 11"
url: /releasenotes/mobile/nt-11-rn/
weight: 5
description: "Native Template 11 release notes."
---

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
