---
title: "Native Mobile Resources"
category: "Modules"
description: "Describes the configuration and usage of the Native Mobile Resources module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "native mobile resources", "native widget", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513/) module is a bundle of Mendix Platform-supported widgets and nanoflow actions for building native mobile and hybrid applications. For more information on styling widgets, see the [Native Mobile Styling Reference Guide](/refguide/native-styling-refguide).

For excellent deep-dive demonstrations of how to use these native mobile widgets, check out the videos below on the [Carousel](#carousel) and [Popup Menu](#popup-menu) widgets:

<img
  style="width: 100%; margin: auto; display: block;"
  class="vidyard-player-embed"
  src="https://play.vidyard.com/2Mzw7r4zLuyrvDcP1bhz4j.jpg"
  data-uuid="2Mzw7r4zLuyrvDcP1bhz4j"
  data-v="4"
  data-type="inline"
/>

<img
  style="width: 100%; margin: auto; display: block;"
  class="vidyard-player-embed"
  src="https://play.vidyard.com/wBDgxvFKGwFYkyxKhpHVLT.jpg"
  data-uuid="wBDgxvFKGwFYkyxKhpHVLT"
  data-v="4"
  data-type="inline"
/>

{{% alert type="info" %}}
Native Mobile Resources v3.1.4 and above will indicate their version inside *themesource/nativemobileresources/.version* located in the project directory. Versions v3.1.3 and below included a constant in the module indicating version.
{{% /alert %}}

## 2 Native Widgets

These are the native widgets included in these resources along with links to the GitHub repositories where they are stored (with further documentation as necessary):

| Widget | Description |
| --- | --- |
| [Activity Indicator](https://github.com/mendix/widgets-resources/tree/master/packages/pluggableWidgets/activity-indicator-native) | Displays a circular loading indicator. |
| [Animation](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/animation-native) | Provides default animations for contents and widgets. |
| [App Events](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/app-events-native) | Triggers actions based on load, network status, and timer events. |
| [Background Image](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/background-image-native) | Allows to layer other widgets on top of an image. |
| [Badge](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/badge-native) | Displays text or a value as a badge. |
| [Bar Chart (Beta)](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/bar-chart-native) | The bar chart widget renders a horizontal bar graph based on static and dynamic data sets. |
| [Barcode Scanner](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/barcode-scanner-native) | Scans barcode and QR code values. |
| [Bottom Sheet](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/bottom-sheet-native) | Creates a set of options while blocking interaction with the rest of the screen or a draggable surface anchored to the bottom of the screen. |
| <a name="carousel"></a>[Carousel](https://github.com/mendix/widgets-resources/tree/master/packages/pluggableWidgets/carousel-native) | Creates a carousel that can be swiped with free modeling. |
| [Color Picker](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/color-picker-native) | Allows the app end-user to select colors. |
| [Feedback](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/feedback-native) | Allows the app end-user to submit feedback directly into the app. |
| [Floating Action Button](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/floating-action-button-native) | Displays a circular floating icon button. |
| [Intro Screen](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/intro-screen-native) | Shows swipeable containers to show contents as introductions. |
| [Line Chart (Beta)](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/line-chart-native) | Renders a scalable line graph based on static and dynamic data sets. |
| [List View Swipe](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/listview-swipe-native) | Shows controls on swipe for an interactive list view. |
| [Maps](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/maps-native) | Shows locations on an interactive map. |
| [Notifications](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/notifications-native) | Triggers actions based on incoming notifications. |
| [Pie/Doughnut Chart](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/pie-doughnut-chart-native) | Renders a dataset as a pie or doughnut chart (depending on configuration) based on static data sets. |
| <a name="popup-menu"></a>[Popup Menu](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/popup-menu-native) | Displays a context menu exactly where the user taps. |
| [Progress Bar](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/progress-bar-native) | Displays progress in a horizontal bar. |
| [Progress Circle](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/progress-circle-native) | Displays progress in a circle with enclosed text. |
| [QR Code](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/qr-code-native) | Displays a QR code based on a value. |
| [Range slider](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/range-slider-native) | Changes a range of values using a slider. |
| [Rating](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/rating-native) | Gives a rating by selecting stars. |
| [Repeater](https://github.com/mendix/widgets-resources/tree/master/packages/pluggableWidgets/repeater-native) | Iterates over a data source or nanoflow and repeats the content while changing the values assigned to it. |
| [Safe Area View](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/safe-area-view-native) | Prevents content from being rendered in unsafe areas (iOS only). |
| [Slider](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/slider-native) | Changes a numeric value using a slider. |
| [Switch](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/switch-native) | Changes a boolean value using a switch. |
| [Toggle Buttons](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/toggle-buttons-native) | Changes an enumeration value using a group of buttons. |
| [Video Player](https://github.com/mendix/widgets-resources/blob/master/packages/pluggableWidgets/video-player-native) | Plays a video loaded from a URL. |
| [Web View](https://github.com/mendix/widgets-resources/tree/master/packages/pluggableWidgets/web-view-native) | Displays an external web page or loads custom HTML. |
| [Radio Buttons](https://github.com/mendix/widgets-resources/tree/nc/radio-buttons/packages/pluggableWidgets/radio-buttons-native) | Adds flexible, accessible radio button functionality. |
