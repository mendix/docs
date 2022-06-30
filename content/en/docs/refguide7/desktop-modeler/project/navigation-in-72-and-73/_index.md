---
title: "Navigation in Mendix Versions 7.2 & 7.3"
url: /refguide7/navigation-in-72-and-73/
description: "Describes the concept of navigation in apps and the properties of a profile for Mendix versions 7.2 and 7.3."
---

## 1 Introduction

{{% alert color="warning" %}}

This document describes the concept of navigation in Mendix applications and the properties of a profile. This is applicable to Mendix versions 7.2 and 7.3. For details on how this works in Mendix versions 7.0 and 7.1, see [Navigation Before Mendix Version 7.2](/refguide7/navigation-before-72/). For Mendix version 7.4 and above, see [Navigation](/refguide7/navigation/).

{{% /alert %}}

{{% alert color="info" %}}

This document describes the concept of navigation in Mendix applications and the properties of a profile. In Mendix 7.2.0 and in Mendix 7.4.0, the profiles received updates. For details on how this works in Mendix versions 7.0 and 7.1, see [Navigation Before Mendix Version 7.2](/refguide7/navigation-before-72/). For 7.2 and 7.3 see [Navigation in 7.2 and 7.3](/refguide7/navigation-in-72-and-73/).

{{% /alert %}}

The **Navigation** document can be found by expanding the **Project** node in the Project Explorer. It defines the navigation structure of the application for users. It allows you to set the home page of your application and to define the menu structures that can be used in [menu widgets](/refguide7/menu-widgets/). A user's home page can vary based on their [user roles](/refguide7/user-roles/).

## 2 Profiles

At the heart of the navigation model in Mendix, there are five kinds of profiles: responsive, tablet (browser), phone (browser), hybrid app, and hybrid offline app. Users that access the app via a particular device type are automatically redirected to the homepage of the appropriate profile based on the profile kind (for details, see [3 Redirection to Profiles](#Redirection)).

{{% alert color="info" %}}

In Mendix 7.0.2, the offline device profile was replaced by the [hybrid phone profile](/refguide7/hybrid-phone-profile/). In addition to this, a new device profile was made available, which was called the [hybrid tablet profile](/refguide7/hybrid-tablet-profile/). All the settings from the offline device profile were automatically copied to the hybrid phone profile.

In Mendix 7.2.0, the hybrid tablet and hybrid phone profiles were converted to profiles of the hybrid app or hybrid offline app type, based on the offline enabled option.

{{% /alert %}}

The device type of the currently logged-in user is available in [microflows](/refguide7/microflows/) as the `$currentDeviceType` variable. The type of this variable is the [enumeration](/refguide7/enumerations/) `System.DeviceType`, which has the values `Phone`, `Tablet`, and `Desktop`. You can use the `$currentDeviceType` variable to perform different actions based on the device type. A typical example is to show different pages based on the device type.

### 2.1 Responsive

Every app always has one profile of a responsive type which cannot be deleted. This is the default profile used by a Mendix app.

### 2.2 Tablet (Browser)

All the users accessing a Mendix app from a browser on a tablet will automatically be redirected to a profile of the tablet type. If no profile exists of that type, the user will be redirected to the responsive profile. Only one profile of the tablet (browser) type may exist.

### 2.3 Phone (Browser)

All the users accessing a Mendix app from a browser on a phone will automatically be redirected to a profile of the phone type. If no profile exists of that type, the user will be redirected to the responsive profile. Only one profile of the phone (browser) type may exist.

### 2.4 Hybrid App

A Mendix app can be installed on a tablet or phone as an app by creating a PhoneGap hybrid package. Profiles of the hybrid app type can be accessed from such a PhoneGap app. Hybrid app profiles are requested by profile name. If no profile exists with the requested name, an error will be displayed in the app.

### 2.5 Hybrid Offline App

The Mendix app can be installed on a tablet or phone as an app by creating a PhoneGap hybrid package. Profiles of the Hybrid offline app type can be accessed from such a PhoneGap app. Hybrid offline app profiles are requested by profile name. If no profile exists with the requested name, an error will be displayed in the app.

Hybrid offline apps are designed to allow users to continue using their Mendix app even when they have no internet connection. However, certain restrictions apply. For an overview of the ramifications of running an offline device profile, see [Offline](/refguide7/offline/).

## 3 Redirection to Profiles<a name="Redirection"></a>

Mendix Runtime automatically redirects users to the home page of the appropriate device type based on the device they are using. This happens by examining the `User-Agent` string that is sent by the device's browser. Hybrid apps do not use this mechanism, as they are referred to by name. The default configuration for this redirection is as follows:

| User-Agent String Regular Expression | Device Type |
| --- | --- |
| Android.*Mobile&#124;iPhone&#124;iPod&#124;BlackBerry | Phone |
| Android&#124;iPad | Tablet |
| _(other)_ | Responsive |

To configure the regular expressions used to match phone or tablet users, see [Custom Settings](/refguide7/custom-settings/).

It is also possible to force the client to use a specific profile by adding a `profile` query string parameter to the URL when visiting a Mendix application. The possible values are the names of the profiles. For example:

```http
https://myapp.mendixcloud.com/index.html?profile=Responsive
```
