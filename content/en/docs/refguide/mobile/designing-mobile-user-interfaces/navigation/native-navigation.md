---
title: "Enabling Native Navigation"
linktitle: "Enable Native Navigation"
url: /howto/mobile/native-navigation/
weight: 71
description: This guide contains the information you need to know before enabling native navigation.
---

## Introduction

With the release of Studio Pro 11, we are excited to introduce a completely revamped native navigation system for all apps. This fundamental change moves navigation from a JavaScript-based implementation to the underlying native platform APIs, delivering significant improvements in performance, user experience, and memory management.

## Key Improvements

By switching to native navigation, your app will immediately benefit from the following:

* **Smoother, Truly Native Animations**: Transitions and gestures are no longer managed on the JS thread. Instead, they use the native `UINavigationController` on iOS and `Fragment` APIs on Android for completely fluid, stutter-free animations.
* **Lower Memory Usage**: Screens are now mounted and unmounted by the native OS, which is more efficient and lightens the load on the JavaScript thread, resulting in a more responsive app.
* **Authentic Platform UX**: Get the user experience your users expect right out of the box. This includes default gestures like the back-swipe on iOS, large header titles, and native Android transition animations without any extra configuration.
* **Optimized View Hierarchy**: The new navigation system reduces the complexity and depth of the view hierarchy. This not only improves performance but also enhances compatibility with automation tools like Appium that can have restrictions on view depth.

## Breaking Changes and Customization Limits

To achieve these native performance gains, we can no longer support certain JavaScript-based customizations. The following `stack.Navigator` properties have been deprecated and will not work with the new native navigation system.

* `headerMode`: This property, used to make headers float across screens on iOS, is no longer supported. The native stack handles header rendering on a per-screen basis according to platform conventions.
* `headerStyleInterpolator`: Custom JavaScript animations for the header during screen transitions are not available. The new system relies exclusively on native platform animations.
* `headerTitleContainerStyle`: Styling the container of the header title is no longer possible. This change simplifies the API and ensures headers adhere more closely to native design guidelines.
* `headerBackAllowFontScaling`: This option to control font scaling for the back button's title is not supported.
* `headerBackImage`: Providing a custom component for the back button *image* is deprecated. To customize the entire back button (including its icon and label), use the `headerBack` prop instead.

## Known Issues

Please be aware of a known issue where the top **10-15 pixels** of the screen content directly below the header may be unresponsive to touch events:
* Cause: This occurs because the native header has a higher view hierarchy (z-index) than the JavaScript-based UI elements rendered below it.
* Workaround: Most apps already include top padding on their pages, which avoids this issue. We recommend ensuring your page content has adequate padding below the header.
* Planned solution: We are developing a native button widget that will resolve this edge case. These will be released in a future update.