---
title: "Native Mobile Resources"
url: /appstore/modules/native-mobile-resources/
description: "Describes the configuration and usage of the Native Mobile Resources module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513/) module is a bundle of Mendix platform-supported widgets and nanoflow actions for building native mobile and hybrid applications. For more information on styling widgets, see the [Native Mobile Styling Reference Guide](/refguide/native-styling-refguide/).

For excellent deep-dive demonstrations of how to use these native mobile widgets, check out the videos below on the [Carousel](#carousel) and [Popup Menu](#popup-menu) widgets:

{{< vidyard "2Mzw7r4zLuyrvDcP1bhz4j" >}}

{{< vidyard "wBDgxvFKGwFYkyxKhpHVLT" >}}

{{% alert color="info" %}}
Native Mobile Resources v3.1.4 and above will indicate their version inside *themesource/nativemobileresources/.version* located in the app directory. Versions v3.1.3 and below included a constant in the module indicating version.
{{% /alert %}}

## Native Widgets

These are the native widgets included in these resources along with links to the GitHub repositories where they are stored (with further documentation as necessary):

| Widget | Description |
| --- | --- |
| [Accordion](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/accordion-native) | Allows users to toggle the display of groups of content. |
| [Activity Indicator](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/activity-indicator-native) | Displays a circular loading indicator. |
| [Animation](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/animation-native) | Provides default animations for contents and widgets. |
| [App Events](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/app-events-native) | Triggers actions based on load, network status, and timer events. |
| [Background Gradient](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/background-gradient-native) | Allows you to apply a background that transitions between multiple colors in a linear direction. |
| [Background Image](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/background-image-native) | Allows you to layer other widgets on top of an image. |
| [Badge](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/badge-native) | Displays text or a value as a badge. |
| [Bar Chart](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/bar-chart-native) | The bar chart widget renders a horizontal bar graph based on static and dynamic data sets. |
| [Barcode Scanner](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/barcode-scanner-native) | Scans barcode and QR code values. |
| [Bottom Sheet](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/bottom-sheet-native) | Creates a set of options while blocking interaction with the rest of the screen or a draggable surface anchored to the bottom of the screen. |
| <a id="carousel"></a>[Carousel](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/carousel-native) | Creates a carousel that can be swiped with free modeling. |
| [Color Picker](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/color-picker-native) | Allows the app end-user to select colors. |
| [ColumnChart](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/column-chart-native) | Renders a vertical bar graph based on static and dynamic data sets. |
| [Feedback](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/feedback-native) | Allows the app end-user to submit feedback directly into the app. |
| [Floating Action Button](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/floating-action-button-native) | Displays a circular floating icon button. |
| [Gallery](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/gallery-native) | A replacement for both the template grid and list view. |
| [GalleryTextFilter](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/gallery-text-filter-native) | A text filter for the gallery. |
| [Image](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/image-native) | Displays static or dynamic images. |
| [Intro Screen](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/intro-screen-native) | Shows swipeable containers to show contents as introductions. |
| [Line Chart](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/line-chart-native) | Renders a scalable line graph based on static and dynamic data sets. |
| [List View Swipe](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/listview-swipe-native) | Shows controls on swipe for an interactive list view. |
| [Maps](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/maps-native) | Shows locations on an interactive map. |
| [Notifications](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/notifications-native) | Triggers actions based on incoming notifications. |
| [Pie/Doughnut Chart](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/pie-doughnut-chart-native) | Renders a dataset as a pie or doughnut chart (depending on configuration) based on static data sets. |
| <a id="popup-menu"></a>[Popup Menu](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/popup-menu-native) | Displays a context menu exactly where the user taps. |
| [Progress Bar](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/progress-bar-native) | Displays progress in a horizontal bar. |
| [Progress Circle](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/progress-circle-native) | Displays progress in a circle with enclosed text. |
| [QR Code](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/qr-code-native) | Displays a QR code based on a value. |
| [Radio Buttons](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/radio-buttons-native) | Offers flexible, accessible radio button functionality. |
| [Range slider](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/range-slider-native) | Changes a range of values using a slider. |
| [Rating](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/rating-native) | Gives a rating by selecting stars. |
| [Repeater](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/repeater-native) | Iterates over a data source or nanoflow and repeats the content while changing the values assigned to it. |
| [Safe Area View](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/safe-area-view-native) | Prevents content from being rendered in unsafe areas (iOS only). |
| [Signature](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/signature-native) | Creates a canvas on which a user can draw. The drawing will be saved as a *base64* string. |
| [Slider](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/slider-native) | Changes a numeric value using a slider. |
| [Switch](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/switch-native) | Changes a Boolean value using a switch. |
| [Toggle Buttons](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/toggle-buttons-native) | Changes an enumeration value using a group of buttons. |
| [Video Player](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/video-player-native) | Plays a video loaded from a URL. |
| [Web View](https://github.com/mendix/native-widgets/tree/main/packages/pluggableWidgets/web-view-native) | Displays an external web page or loads custom HTML. |

## Nanoflow Actions

This section contains information about the nanoflow actions included in the Native Mobile Resources module. For more information, see the JavaScript nanoflow actions [source code](https://github.com/mendix/native-widgets/tree/main/packages/jsActions/nanoflow-actions-native/src) in GitHub.

### Client Activities Category

These are the nanoflow actions in the client activities category:

* **Download file** – lets the user save a file to the device or cloud storage, or let the user open it in another app

### Native Authentication Category

These are the nanoflow actions in the native authentication category:

* **Biometric authentication** – uses FaceId or the fingerprint scanner to verify that the device owner is using the app
* **Is biometric authentication supported** – checks if biometric authentication is supported

### Native Camera Category

These are the nanoflow actions in the native camera category:

* **Save to picture library** – offers the user to store a picture from the offline database in the device library
* **Take picture** – opens the camera and let the user take a picture
* **Take picture (advanced)** – opens the camera and let the user take a picture with advanced options

### Native Clipboard Category

These are the nanoflow actions in the native clipboard category:

* **Get clipboard content** – fetches the latest string from the device's copy and paste clipboard 
* **Set clipboard content** – sets a string to the device's copy and paste clipboard 

### Native Deep Link Category

These are the nanoflow actions in the native clipboard category:

* **Parse Url to object** – parses a URL string into a Mendix object with the following attributes:
    * protocol: "https:"
    * hash: "top"
    * query: "?tag=networking&order=newest"
    * pathname: "/forum/questions/"
    * auth: "john.doe"
    * host: "`www.example.com:123`"
    * port: "123"
    * hostname: "`www.example.com`"
    * password: "secret"
    * username: "john.doe"
    * origin: "`https://www.example.com:123`"
    * href: "`https://john.doe:secret@www.example.com:123/forum/questions/?tag=networking&order=newest#top`"

    Dynamically based on the number of slashes in the paths:
    * path0: "forum"
    * path1: "questions"

    Dynamically based on the number of query keys:
    * tag: "networking"
    * order: "newest" 
* **Register deep link** – registers a nanoflow to handle all deep link requests

### Native Network Category

These are the nanoflow actions in the native network category:

* **Is cellular connection** – checks if the device is connected to a cellular network
* **Is connected** – checks if the device is connected to a cellular network or a WiFi network
* **Is wifi connection** – checks if the device is connected to a Wifi network

{{% alert color="info" %}}
These methods only check if the device is connected, not if Internet access is provided. If you want to check if the device is connected to the Internet, please use the **IsConnectedToServer** JS action from the [Nanoflow Commons Module](https://marketplace.mendix.com/link/component/109515)
{{% /alert %}}

### Native Mobile Category{#native-mobile-category}

These are the nanoflow actions in the native mobile category:

* **Change status bar** – changes the styling of the device's status bar
* **Get device info** – gets information about the device as an object with the following attributes:
    * ApplicationName: the name of the app
    * BatteryLevel: the battery percentage (between 0 and 1)
    * Brand: the brand of the device (for example: Apple)
    * BuildNumber: the build number as set in Native Mobile Builder UI tool
    * BundleId: the application bundle identifier as set in Native Mobile Builder UI tool
    * Carrier: name of the network operator
    * DeviceCountry: the country of the device
    * DeviceId: an identifier for the device model (for example: iPhone7)
    * DeviceLocale: the locale of the device
    * FontScale: the device font scale (1 is normal)
    * FreeDiskStorage: the available storage size in bytes
    * Manufacturer: the device manufacturer (for example: Apple)
    * Model: the device model (due to reliability, Mendix recommends using DeviceId instead) 
    * ReadableVersion: the application version and build number
    * SystemName: the operating system name (iOS or Android)
    * SystemVersion: the operating system version
    * Timezone: the time zone of the device
    * TotalDiskCapacity: the total storage capacity of the device in bytes
    * TotalMemory: the total memory capacity of the device in bytes
    * UniqueId: a unique identifier for the device
    * UserAgent: the user agent of the device's web browser
    * Version: the application version as set in Native Mobile Builder UI tool
    * Is24Hour: checks if the device is using a 24h clock
    * IsEmulator: checks if the app is running on an emulator
    * IsTablet: checks if the app is running on a tablet
    * IsLandscape: checks if the device is currently in landscape mode
    * HasNotch: checks if the device has a notch

* **Hide keyboard** – hides the onscreen keyboard
* **Open in app browser** – opens a specific URL in an in app web browser
* **Play sound** – plays a sound from a file stored in the offline database
* **Check generic permission** – checks a current status of specific permission
* **Request generic permission** – requests a specific permission
* **Vibrate** – vibrates the device for a specific duration

### Native Notifications Category

These are the nanoflow actions in the native notifications category:

* **Cancel all scheduled notifications** – cancels all local notifications
* **Cancel scheduled notification** – cancels a local notification by id
* **Clear all delivered notifications** – clears all delivered push notifications
* **Display notification** – creates and displays a local notification immediately
* **Get push notification token** – creates and displays a local notification immediately
* **Has notification permission** – checks if the user has given permission to send notifications
* **Request notification permission** – requests permission to send notifications
* **Schedule notification** – creates and schedules a new local notification
* **Set badge number** – sets the number displayed in the application badge
