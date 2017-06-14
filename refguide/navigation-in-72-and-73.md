---
title: "Navigation In Mendix Versions 7.2 and 7.3"
space: "Mendix 7 Reference Guide"
parent: "project"
description: "Describes the concept of navigation in apps and the properties of a profile for Mendix versions 7.2 and 7.3."
---

## 1 Introduction

<div class="alert alert-warning">{% markdown %}

This document describes the concept of navigation in Mendix applications and the properties of a profile. Applicable for Mendix versions 7.2 and 7.3. For details on how this works in Mendix versions 7.0 and 7.1, see [Navigation Before Mendix Version 7.2](navigation-before-72). For Mendix version 7.4 and higher, see [Navigation](navigation).

{% endmarkdown %}</div>

<div class="alert alert-info">{% markdown %}

This document describes the concept of navigation in Mendix applications and the properties of a profile. In Mendix 7.2.0, and in Mendix 7.4.0 the profiles have received an updates. For details on how this works in Mendix versions 7.0 and 7.1, see [Navigation Before Mendix Version 7.2](navigation-before-72). For 7.2 and 7.3 see [Navigation In 7.2 and 7.3](navigation-in-72-and-73)

{% endmarkdown %}</div>

The Navigation document can be found by expanding the Project node in the Project Explorer. It defines the navigation structure of the application for users. It allows you to set the home page of your application and to define the menu structures that can be used in [menu widgets](menu-widgets). A user's home page can vary based on their [user roles](user-roles).

## 2 Profiles

At the heart of the navigation model in Mendix, there are five kinds of profiles: Responsive, Tablet (browser), Phone (browser), Hybrid app, and Hybrid offline app. Users that access the app via a particular device type are automatically redirected to the homepage of the appropriate profile based on the profile kind (for details, see [3 Redirection to Profiles](#Redirection)).

<div class="alert alert-info">{% markdown %}

As of Mendix 7.0.2, the Offline device profile is replaced by the [Hybrid Phone profile](hybrid-phone-profile). In addition to this, a new device profile is now available, which is called the [Hybrid Tablet profile](hybrid-tablet-profile). All the settings from the Offline device profile are automatically copied to the Hybrid Phone profile.

In Mendix 7.2.0, the Hybrid Tablet and Hybrid Phone profiles are converted to profiles of the Hybrid app or Hybrid offline app type, based on the offline enabled option.

{% endmarkdown %}</div>

The device type of the currently logged-in user is available in [microflows](microflows) as the `$currentDeviceType` variable. The type of this variable is the [enumeration](enumerations) `System.DeviceType`, which has the values `Phone`, `Tablet`, and `Desktop`. You can use the `$currentDeviceType` variable to perform different actions based on the device type. A typical example is to show different pages based on the device type.

### 2.1 Responsive

Every app always has one profile of a Responsive type which cannot be deleted. This is the default profile used by a Mendix app.

### 2.2 Tablet (Browser)

All the users accessing the Mendix app from a browser on a tablet will automatically be redirected to a profile of the Tablet type. If no profile exists of that type, the user will be redirected to the Responsive profile. Only one profile of the Tablet (browser) type may exist.

### 2.3 Phone (Browser)

All the users accessing the Mendix app from a browser on a phone will automatically be redirected to a profile of the Phone type. If no profile exists of that type, the user will be redirected to the Responsive profile. Only one profile of the Phone (browser) type may exist.

### 2.4 Hybrid App

A Mendix app can be installed on a tablet or phone as an app by creating a PhoneGap hybrid package. Profiles of the Hybrid app type can be accessed from such a PhoneGap app. Hybrid app profiles are requested by profile name. If no profile exists with the requested name, an error will be displayed in the app.

### 2.5 Hybrid Offline App

The Mendix app can be installed on a tablet or phone as an app by creating a PhoneGap hybrid package. Profiles of the Hybrid offline app type can be accessed from such a PhoneGap app. Hybrid offline app profiles are requested by profile name. If no profile exists with the requested name, an error will be displayed in the app.

Hybrid offline apps are designed to allow users to continue using their Mendix app even when they have no internet connection. However, certain restrictions apply. For an overview of the ramifications of running an offline device profile, see [Offline](offline).

## 3 Redirection to Profiles<a name="Redirection"></a>

Mendix Runtime automatically redirects users to the home page of the appropriate device type based on the device they are using. This happens by examining the `User-Agent` string that is sent by the device's browser. Hybrid apps do not use this mechanism, as they are referred to by name. The default configuration for this redirection is as follows:

| User-Agent String Regular Expression | Device Type |
| --- | --- |
| Android.*Mobile&#124;iPhone&#124;iPod&#124;BlackBerry | Phone |
| Android&#124;iPad | Tablet |
| _(other)_ | Responsive |

To configure the regular expressions used to match phone or tablet users, see [Custom Settings](custom-settings).

It is also possible to force the client to use a specific profile by adding a `profile` query string parameter to the URL when visiting a Mendix application. The possible values are the names of the profiles. For example:

```html
https://myapp.mendixcloud.com/index.html?profile=Responsive

```
