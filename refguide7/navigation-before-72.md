---
title: "Navigation before 7.2"
space: "Mendix 7 Reference Guide"
parent: "project"
---


<div class="alert alert-info">{% markdown %}

This document describes the concept of navigation in Mendix applications and the properties of a profile. For Mendix 7.2 or higher,
see [Navigation](navigation).

{% endmarkdown %}</div>

The Navigation document defines the navigation structure of the application for users. It allows you to set the home page of your application as well as define menu structures that can be used in [menu widgets](menu-widgets). A user's home page can vary based on their [roles](user-roles).

## Profiles

At the heart of the navigation model in Mendix are four navigation profiles: Desktop, Tablet, Phone and Offline device. You can define separate home pages and menus for each of these profiles. The Desktop profile is always enabled, while Tablet, Phone, and Offline device can be disabled if you do not want to use them. Users that access the application via a particular device type are automatically redirected to the home page of the appropriate profile (see Redirection to profiles below).

<div class="alert alert-info">{% markdown %}

In Mendix 7.0.2 the Offline device profile is replaced by the [Hybrid Phone profile](hybrid-phone-profile). In addition to this, a new device profile is now available, called the [Hybrid Tablet profile](hybrid-tablet-profile). All settings from the Offline device profile are automatically copied to the Hybrid Phone profile.

{% endmarkdown %}</div>

The device type of the currently logged-in user is available in [microflows](microflows) as the variable `$currentDeviceType`. The type of this variable is [enumeration](enumerations) 'System.DeviceType', which has the values Phone, Tablet, and Desktop. You can use the `$currentDeviceType` variable to perform different actions based on the device type. A typical example is to show different pages based on the device type.

## Hybrid Profiles

The Hybrid Tablet and Hybrid Phone profiles are different from the other profiles in that they do more than simply redirect users based on the their device type. These profiles are designed to allow users to continue using their Mendix application even when they have no Internet connection, though certain restrictions apply. An overview of the ramifications of running an offline device profile can be found on the [Offline](offline) page. 

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
| Desktop | None, Desktop is always enabled |

It is also possible to force the client to use a specific profile by adding a *profile* query string parameter to the URL when visiting a Mendix application. The possible values are Desktop, Tablet, and Phone. For example:

```html
https://myapp.mendixcloud.com/index.html?profile=Phone

```
