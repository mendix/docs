---
title: "Native Template 12"
url: /releasenotes/mobile/nt-12-rn/
weight: 5
description: "Native Template 12 release notes."
---

## 12.0.0 {#1000}

**Release date: January 28, 2025**

### Breaking Changes

#### Offline Database Backend Change - OP-Sqlite Support

* We have changed the Offline Database Backend to OP-SQLite.

#### Important Notes

* For projects upgrading to 10.19 and above, follow the [upgrade instructions](#upgrade-instructions) below to migrate your app.

### Upgrade Instructions {#upgrade-instructions}

If you are upgrading from Mendix versions below 10.18, please follow these steps to use the new React Native version:

1. Update required modules:
    1. Native Mobile Resources: update this module to the latest version available in the Mendix Marketplace.
    1. Nanoflow Commons: update this module to its latest version.
1. Update widgets in Studio Pro:
    1. After updating the Native Mobile Resources module, right-click the warning in Studio Pro and click **Update All Widgets** to complete the process.
1. Test your application:
    1. Thoroughly [test](/refguide/mobile/distributing-mobile-apps/) your application to ensure that all features work as expected after the updates.

For the most direct information on the Native Template, visit our [GitHub Releases page](https://github.com/mendix/native-template/releases/tag/v12.0.0).
