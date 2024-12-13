---
title: "Native Template 10"
url: /releasenotes/mobile/nt-10-rn/
weight: 6
description: "Native Template 10 release notes."
---

## 10.0.0 {#1000}

**Release date: November 27, 2024**

### Improvements

* We upgraded our React Native version to 0.75.4. This significant update improves performance and increases compatibility with React Native's latest features.

#### Important Notes

* Projects created in Studio Pro 10.17 and above will automatically use the latest React Native version without additional configuration.
* For projects upgrading from Mendix versions below 10.17 to 10.17 and above, follow the steps in [Upgrade Instructions](#upgrade-instructions) below to migrate your project.

### Breaking Changes

#### Library Migration

* `@react-native-community/async-storage` has been replaced by `@react-native-async-storage/async-storage`. Ensure your imports and project dependencies reflect this change.
* `@react-native-community/masked-view` has been replaced by `@react-native-masked-view/masked-view`. Update your references accordingly.

{{% alert color="info" %}}
These library changes will only affect projects using custom modules that explicitly depend on the affected packages. If your project does not use custom modules or does not include these specific dependencies, no action is required.
{{% /alert %}}

#### PopupMenu Component

* The PopupMenu component in the updated Native Mobile Resources module includes a breaking change.
* This issue only affects projects doing both of the following at the same time:
    * Upgrading from Mendix versions below 10.17 to 10.17 or above
    * Updating the Native Mobile Resources module to its latest version

To fix the issue, do the following. After updating the Native Mobile Resources module, you will encounter the following warning in Studio Pro:

`The definition of this widget has changed. Update this widget by right-clicking it and selecting 'Update widget,' or select 'Update all widgets' to update all widgets in the app.`

After reading this, do the following:

1. Right-click the warning in Studio Pro.
1. Click **Update All Widgets** to apply the necessary updates.

### Upgrade Instructions {#upgrade-instructions}

If you are upgrading from Mendix versions below 10.17, please follow these steps to use the new React Native version:

1. Update required modules:
    1. Native Mobile Resources: ensure you update this module to the latest version available in the Mendix Marketplace.
    1. Nanoflow Commons: update this module to its latest version.
1. Update widgets in Studio Pro:
    1. After updating the Native Mobile Resources module, right-click the warning in Studio Pro and click **Update All Widgets** to complete the process.
1. Test your application:
    1. Thoroughly test your application to ensure that all features work as expected after the updates.

For the most direct information on the Native Template, visit our [GitHub Releases page](https://github.com/mendix/native-template/releases/tag/v10.0.0).
