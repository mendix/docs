---
title: "Navigation in Mendix 7.4 & Above"
url: /refguide7/navigation/
description: "Describes the concept of navigation in apps and the properties of a profile for Mendix version 7.4 and above."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

{{% alert color="info" %}}

This document describes the concept of navigation in Mendix applications and the properties of a profile. It is applicable to Mendix versions 7.4 and above. For details on how this works in Mendix versions 7.0 and 7.1, see [Navigation Before Mendix Version 7.2](/refguide7/navigation-before-72/). For 7.2 and 7.3, see [Navigation in Mendix Versions 7.2 and 7.3](/refguide7/navigation-in-72-and-73/).

{{% /alert %}}

The **Navigation** document can be found by expanding the **Project** node in the **Project Explorer**. It defines the navigation structure of the application for users. It also allows you to set the home page of your application and to define the menu structures that can be used in [menu widgets](/refguide7/menu-widgets/). A user's home page can vary based on their [user roles](/refguide7/user-roles/).

## 2 Profiles {#profiles}

At the heart of the navigation model in Mendix, there are seven types of profiles: Responsive, Tablet browser, Phone browser, Hybrid tablet online app, Hybrid tablet onffine app, Hybrid phone online app, and Hybrid tablet offline app. Users that access the app via a particular device type are automatically redirected to the homepage of the appropriate profile based on the profile type (for details, see [3 Redirection to Profiles](#Redirection)).

{{% alert color="info" %}}

In Mendix 7.4.0, separation for **Tablet** and **Phone** has been introduced for both **Hybrid Online** and **Hybrid Offline** apps.

In Mendix 7.2.0, the **Hybrid Tablet** and **Hybrid Phone** profiles were converted to profiles of the **Hybrid App** or **Hybrid Offline App** type, based on the offline enabled option.

In Mendix 7.0.2, the **Offline** device profile was replaced by the [Hybrid Phone profile](/refguide7/hybrid-phone-profile/). In addition to this, a new device profile was made available, which was called the [Hybrid Tablet profile](/refguide7/hybrid-tablet-profile/). All the settings from the Offline device profile were automatically copied to the Hybrid Phone profile.

{{% /alert %}}

{{% alert color="warning" %}}

In case of trouble when converting profiles from Mendix 7.2 and 7.3 to Mendix 7.4, see [Solving Issues with Navigation Profile Conversion to 7.4](/refguide7/navigation-conversion-to-74/).

{{% /alert %}}

The device type of the currently logged-in user is available in [microflows](/refguide7/microflows/) as the `$currentDeviceType` variable. The type of this variable is the [enumeration](/refguide7/enumerations/) `System.DeviceType`, which has the values `Phone`, `Tablet`, and `Desktop`. You can use the `$currentDeviceType` variable to perform different actions based on the device type. A typical example is to show different pages based on the device type.

### 2.1 Responsive

Every app always has one profile of a Responsive type which cannot be deleted. This is the default profile used by a Mendix app.

### 2.2 Tablet Browser

All the users accessing a Mendix app from a browser on a tablet will automatically be redirected to a profile of the Tablet browser type. If no profile exists of that type, the user will be redirected to the Responsive profile.

### 2.3 Phone Browser

All the users accessing the Mendix app from a browser on a phone will automatically be redirected to a profile of the Phone browser type. If no profile exists of that type, the user will be redirected to the Responsive profile.

### 2.4 Hybrid Profiles

A Mendix app can be installed on a tablet or phone as an app by creating a PhoneGap hybrid package. Hybrid profiles can be accessed from such a PhoneGap app. Hybrid app profiles are determined by device type (phone or tablet) and by the offline accessability feature enabled (online or offline). If no profile exists with the requested combination, an error will be displayed in the app.

Hybrid offline apps are designed to allow users to continue using their Mendix app even when they have no internet connection. However, certain restrictions apply. For an overview of the ramifications of running an offline device profile, see [Offline](/refguide7/offline/).

Four different hybrid profiles are available:

* Hybrid tablet app online
* Hybrid tablet app offline
* Hybrid phone app online
* Hybrid phone app offline

## 3 Redirection to Profiles<a name="Redirection"></a>

Mendix Runtime automatically redirects users to the home page of the appropriate device type based on the device they are using. This happens by examining the `User-Agent` string that is sent by the device. The default configuration for this redirection is as follows:

| User-Agent String Regular Expression | Device Type |
| --- | --- |
| Android.*Mobile&#124;iPhone&#124;iPod&#124;BlackBerry | Phone |
| Android&#124;iPad | Tablet |
| _(other)_ | Responsive |

To configure the regular expressions used to match phone or tablet users, see [Custom Settings](/refguide7/custom-settings/).

It is also possible to force the client to use a specific profile by adding a `profile` query string parameter to the URL when visiting a Mendix application. The possible values are the names of the profiles, which are Responsive, Tablet, Phone, HybridTablet, and HybridPhone. For example:

`https://myapp.mendixcloud.com/index.html?profile=Responsive`
