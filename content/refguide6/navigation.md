---
title: "Navigation"
parent: "project"
---


{{% alert type="info" %}}

This document describes the general concept of navigation in Mendix applications and the properties of a profile.

{{% /alert %}}

The Navigation document defines the navigation structure of the application for end-users. It allows you to set the home page of your application as well as define menu structures for use in [menu widgets](menu-widgets). The home page can vary based on the [roles](user-roles) the user has.

## Profiles

At the heart of the navigation model in Mendix are four navigation profiles: Desktop, Tablet, Phone and Offline device. You can define separate home pages and menus for each of these profiles. The Desktop profile is always enabled, while Tablet, Phone, and Offline device can be disabled if you do not want to use them. Users that access the application via a particular device type are automatically redirected to the home page of the appropriate profile (see 'Redirection to profiles' below).

{{% alert type="info" %}}

In Mendix 6.10.4 the Offline device profile is replaced by the [Hybrid Phone profile](hybrid-phone-profile). A new device profile is now available, called the [Hybrid Tablet profile](hybrid-tablet-profile). All settings from the Offline device profile are automatically copied to the Hybrid Phone profile.

{{% /alert %}}

The device type of the currently logged-in user is available in [microflows](microflows) as the variable `$currentDeviceType`. The type of this variable is [enumeration](enumerations) 'System.DeviceType', which has the values 'Phone', 'Tablet' and 'Desktop'. You can use the `$currentDeviceType` variable to perform different actions based on the device type. Typical usage is to show different pages based on the device type.

## Offline Device and Hybrid Profiles

{{% alert type="warning" %}}

The documentation in this section describes a new feature that is still in beta, and is subject to change before the final release.

{{% /alert %}} 

The Offline device, Hybrid Tablet, and Hybrid Phone profiles are different from the other profiles in that they do more than simply redirect users based on the their device type. These profiles are designed to allow users to continue using their Mendix application even in the absence of an internet connection, though certain restrictions apply. An overview of the ramifications of running an offline device profile can be found on the [Offline](offline) page.

## Redirection to Profiles

The Mendix Runtime automatically redirects users to the home page of the appropriate device type based on the device they are using. This happens by examining the User-Agent string that is sent by the device's browser. The default configuration for this redirection is as follows:

| User-Agent String Regular Expression | Device Type |
| --- | --- |
| Android.*Mobile|iPhone|iPod|BlackBerry | Phone |
| Android|iPad | Tablet |
| _(other)_ | Desktop |

To configure the regular expressions used to match phone or tablet users, see [Custom Settings](custom-settings).

If a profile is not enabled, it falls back to another device type as shown in the following table:

| Device Type | Fallback |
| --- | --- |
| Phone | Tablet, Desktop |
| Tablet | Phone, Desktop |
| Desktop | _(none, Desktop is always enabled)_ |

It is also possible to force the client to use a specific profile by adding a 'profile' query string parameter to the URL when visiting a Mendix application. The possible values are 'Desktop', 'Tablet', and 'Phone'. For example:

```html
https://myapp.mendixcloud.com/index.html?profile=Phone

```
