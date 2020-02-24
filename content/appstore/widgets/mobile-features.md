---
title: "Mobile Features"
category: "Widgets"
description: "Describes the configuration and usage of the Mobile Features widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "mobile feature", "spinner", "transitions", "status bar", "platform support"]
draft: true
---

## 1 Introduction

The [Mobile Features](https://appstore.home.mendix.com/link/app/48902/) widget can be placed in a page layout and used in [hybrid mobile](/refguide/hybrid-mobile) applications.

### 1.1 Typical Usage Scenarios

The widget is designed to be dropped on your master mobile page template. It overrides functions in the Mendix UI code to hook into Cordova plugins. The features below (with the exception of custom body classes) can be switched on and off.

### 1.2 Features

This widget includes the following features that can be used in a Mendix hybrid mobile application:

* Transitions – transition between pages using transitions
* Numeric input – set an input field to numeric, which triggers the numeric keyboard on mobile devices
* Dialog  boxes – info, warning, and error messages are shown using native dialog boxes
* Spinner  – instead of the Mendix default loading dots, use the native loading spinners for your device
* Status bar  – set the text color and background of the status bar
* Custom body classes:
  * Online/offline  – when the app goes offline, a configurable class is added to the body of the page
  * Android & iOS – depending on the platform, a configurable class is added to the body of the page (used for styling per platform)

### 1.3 Dependencies

Be sure that the Cordova plugins below are included in your PhoneGap *config.xml* file, because without them, some features will not work.

#### 1.3.1 Spinner

```
<gap:plugin name="cordova-plugin-spinner" source="npm" />
```

#### 1.3.2 Dialog

```
<gap:plugin name="cordova-plugin-dialogs" source="npm" version="1.2.1" />
```

#### 1.3.3 Transitions

```
<gap:plugin name="com.telerik.plugins.nativepagetransitions" source="npm" />
<!-- This needs to be added to make sure the cordova-plugin-crosswalk-webview animates correctly -->
<preference name="CrosswalkAnimatable" value="true" />
```

#### 1.3.4 Status Bar

```
<gap:plugin name="cordova-plugin-statusbar" source="npm" version="2.1.3" />
```

## 2 Configuration

### 2.1 Spinner Tab

This feature can override the normal Mendix spinner (with the loading dots) with a native mobile one.

### 2.2 Dialog Tab

This feature can override the normal Mendix dialog box with a native mobile one.

### 2.3 Advanced Tab

* **List view lazy load** – When this feature is turned on, the list view will render the items after the page is loaded, which can greatly increase the user experience.
* **Group box lazy load** – When this feature is turned on, the group box will render the items after the page is loaded, which can greatly increase the user experience. You can add the lazy class to the group box to remove the spacing and borders.
* **Set transition** – The transitions used in the **Transition classes** tab are usually set to **On navigation**, which works fine in an online app. In offline mode, the transition should be set **On view change**. Set it to this option if you experience problems with the transitions (for example, titles showing up before the transition).
* **On pause timeout** – Only change this setting when needed. When pausing the app (suspending, without quitting), transitions should be canceled, in order to prevent unwanted behavior in older Android versions. Set a timeout (in ms) to cancel the transition after the app is paused.
* **Disable on logout** – This widget might run into problems with the spinner when the login page does not have a layout with the Mobile Features widget. This option makes sure the widget is completely disabled on logout. If you do use this widget in the layout that is part of the login page, you can switch this off.
