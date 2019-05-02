---
title: "Navigation in Mendix"
parent: "project"
description: "Describes the concept of navigation in apps and the properties of a profile."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This document describes the concept of navigation in Mendix applications and the properties of a profile. The **Navigation** document can be found by expanding the **Project** node in the **Project Explorer**. It defines the navigation structure of the application for users. It also allows you to set the home page of your application and to define the menu structures that can be used in [menu widgets](menu-widgets). A user's home page can vary based on their [user roles](user-roles).

## 2 Profiles {#profiles}

At the heart of the navigation model in Mendix, there are seven types of profiles:

* Responsive
* Hybrid tablet app online
* Hybrid tablet app offline
* Hybrid phone app online
* Hybrid phone app offline
* Tablet browser
* Phone browser
* Native phone

Users that access the app via a particular device type are automatically redirected to the homepage of the appropriate profile based on the profile type (for details, see the [Redirection to Profiles](#redirection) section below).

The device type of the currently logged-in user is available in [microflows](microflows) as the `$currentDeviceType` variable. The type of this variable is the [enumeration](enumerations) `System.DeviceType`, which has the values `Phone`, `Tablet`, and `Desktop`. You can use the `$currentDeviceType` variable to perform different actions based on the device type. A typical example is to show different pages based on the device type.

### 2.1 Responsive

Every app always has one profile of a Responsive type which cannot be deleted. This is the default profile used by a Mendix app.

### 2.2 Hybrid Profiles {#hybrid-profiles}

A Mendix app can be installed on a tablet or phone as an app by creating a PhoneGap hybrid package. Hybrid profiles can be accessed from such a PhoneGap app. Hybrid app profiles are determined by device type (phone or tablet) and by the offline accessability feature enabled (online or offline). If no profile exists with the requested combination, an error will be displayed in the app.

Hybrid offline apps are designed to allow users to continue using their Mendix app even when they have no internet connection. However, certain restrictions apply. For an overview of the ramifications of running an offline device profile, see [Offline first](offline-first).

Four different hybrid profiles are available:

* Hybrid tablet app online
* Hybrid tablet app offline
* Hybrid phone app online
* Hybrid phone app offline

### 2.3 Tablet Browser

All the users accessing a Mendix app from a browser on a tablet will automatically be redirected to a profile of the Tablet browser type. If no profile exists of that type, the user will be redirected to the Responsive profile.

### 2.4 Phone Browser

All the users accessing the Mendix app from a browser on a phone will automatically be redirected to a profile of the Phone browser type. If no profile exists of that type, the user will be redirected to the Responsive profile.

### 2.5 Native Phone

A Mendix app can be installed on a phone as a native application which has the benefit of a more responsive UI. The app will also be [offline first](offline-first): all data is stored on the phone and only synchronized with the server on request.

## 3 Redirection to Profiles {#redirection}

Mendix Runtime automatically redirects users to the home page of the appropriate device type based on the device they are using. This happens by examining the `User-Agent` string that is sent by the device. The default configuration for this redirection is as follows:

| User-Agent String Regular Expression | Device Type |
| --- | --- |
| Android.*Mobile&#124;iPhone&#124;iPod&#124;BlackBerry | Phone |
| Android&#124;iPad | Tablet |
| _(other)_ | Responsive |

To configure the regular expressions used to match phone or tablet users, see [Custom Settings](custom-settings).

It is also possible to force the client to use a specific profile by adding a `profile` query string parameter to the URL when visiting a Mendix application. The possible values are the names of the profiles, which are Responsive, Tablet, Phone, HybridTablet, and HybridPhone. For example:

`https://myapp.mendixcloud.com/index.html?profile=Responsive`
