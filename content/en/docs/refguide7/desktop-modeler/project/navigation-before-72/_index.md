---
title: "Navigation Before Mendix Version 7.2"
url: /refguide7/navigation-before-72/
description: "Describes the concept of navigation in apps and the properties of a profile for Mendix versions 7.0 and 7.1."
---

## 1 Introduction

{{% alert color="warning" %}}

This document describes the concept of navigation in Mendix applications and the properties of a profile. Applicable for Mendix versions 7.0 and 7.1. For details on how this works in Mendix versions 7.2 and 7.3, see [Navigation in 7.2 and 7.3](/refguide7/navigation-in-72-and-73/). For Mendix version 7.4 and above, see [Navigation](/refguide7/navigation/).

{{% /alert %}}

The **Navigation** document defines the navigation structure of the application for users. It allows you to set the home page of your application as well as to define menu structures that can be used in [menu widgets](/refguide7/menu-widgets/). A user's home page can vary based on their [roles](/refguide7/user-roles/).

## 2 Profiles

At the heart of the navigation model in Mendix are four navigation profiles: desktop, tablet, phone, and offline device. You can define separate home pages and menus for each of these profiles. The desktop profile is always enabled, while tablet, phone, and offline device can be disabled if you do not want to use them. Users that access the application via a particular device type are automatically redirected to the home page of the appropriate profile (for details, see [4 Redirection to Profiles](#Redirection)).

{{% alert color="info" %}}

In Mendix 7.0.2, the Offline device profile is replaced by the [hybrid phone profile](/refguide7/hybrid-phone-profile/). In addition to this, a new device profile is now available, called the [hybrid tablet profile](/refguide7/hybrid-tablet-profile/). All settings from the Offline device profile are automatically copied to the hybrid phone profile.

{{% /alert %}}

The device type of a currently logged-in user is available in [microflows](/refguide7/microflows/) as the `$currentDeviceType` variable. The type of this variable is the [enumeration](/refguide7/enumerations/) `System.DeviceType`, which has the values `Phone`, `Tablet`, and `Desktop`. You can use the `$currentDeviceType` variable to perform different actions based on the device type. A typical example is to show different pages based on the device type.

## 3 Hybrid Profiles

The hybrid tablet and hybrid phone profiles are different from the other profiles in that they do more than simply redirect users based on their device type. These profiles are designed to allow users to continue using their Mendix application even when they have no internet connection, though certain restrictions apply. For an overview of the ramifications of running an offline device profile, see [Offline](/refguide7/offline/).

## 4 Redirection to Profiles<a name="Redirection"></a>

Mendix Runtime automatically redirects users to the home page of the appropriate device type based on the device they are using. This happens by examining the User-Agent string that is sent by the device's browser. The default configuration for this redirection is as follows:

| User-Agent String Regular Expression | Device Type |
| --- | --- |
| Android.*Mobile&#124;iPhone&#124;iPod&#124;BlackBerry | Phone |
| Android&#124;iPad | Tablet |
| _(other)_ | Desktop |

To configure the regular expressions used to match phone or tablet users, see [Custom Settings](/refguide7/custom-settings/).

If a profile is not enabled, it falls back to another device type as shown in this table:

| Device Type | Fallback |
| --- | --- |
| Phone | Tablet, Desktop |
| Tablet | Phone, Desktop |
| Desktop | None, Desktop is always enabled |

It is also possible to force the client to use a specific profile by adding a `profile` query string parameter to the URL when visiting a Mendix application. The possible values are `Desktop`, `Tablet`, and `Phone`. For example:

```http
https://myapp.mendixcloud.com/index.html?profile=Phone

```
