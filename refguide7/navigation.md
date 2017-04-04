---
title: "Navigation"
space: "Mendix 7 Reference Guide"
parent: "project"
---


<div class="alert alert-info">{% markdown %}

This document describes the concept of navigation in Mendix applications and the properties of a profile.

In Mendix 7.2.0 the profiles have received an update. Documentation for Mendix 7.0 and 7.1 is [here](navigation-before-72).

{% endmarkdown %}</div>

The Navigation document can be found by expanding the Project node in the Project Explorer. It defines the navigation structure of the application for users. It allows you to set the home page of your application as well as define menu structures that can be used in [menu widgets](menu-widgets). A user's home page can vary based on their [roles](user-roles).

## Profiles

At the heart of the navigation model in Mendix there are five different kinds of profiles: Responsive, Tablet (browser), Phone (browser), Hybrid app and Hybrid offline app. Users that access the app via a particular device type are automatically redirected to the homepage of the appropriate profile based on the profile kind (see Redirection to profiles below).

<div class="alert alert-info">{% markdown %}

In Mendix 7.0.2 the Offline device profile is replaced by the [Hybrid Phone profile](hybrid-phone-profile). In addition to this, a new device profile is now available, called the [Hybrid Tablet profile](hybrid-tablet-profile). All settings from the Offline device profile are automatically copied to the Hybrid Phone profile.

In Mendix 7.2.0 the Hybrid Tablet and Hybrid Phone profiles are converted to profiles of kind Hybrid app or Hybrid offline app, based on the offline enabled option.

{% endmarkdown %}</div>

The device type of the currently logged-in user is available in [microflows](microflows) as the variable `$currentDeviceType`. The type of this variable is [enumeration](enumerations) 'System.DeviceType', which has the values Phone, Tablet, and Desktop. You can use the `$currentDeviceType` variable to perform different actions based on the device type. A typical example is to show different pages based on the device type.

### Responsive

Every app always has one profile of kind Responsive which cannot be deleted. It is the default profile used by a Mendix app.

### Tablet (browser)

All users accessing the Mendix app from a browser on a tablet will automatically be redirected to a profile of kind Tablet. If no profile exists of that kind, the user will be redirected to the Responsive profile. Only one profile of kind Tablet (browser) may exist.

### Phone (browser)

All users accessing the Mendix app from a browser on a phone will automatically be redirected to a profile of kind Tablet. If no profile exists of that kind, the user will be redirected to the Responsive profile. Only one profile of kind Phone (browser) may exist.

### Hybrid app

The Mendix app can be installed on a tablet or phone as an app by creating a PhoneGap hybrid package. Profiles of the kind Hybrid app can be accessed from such a PhoneGap app. Hybrid app profiles are requested by profile name. If no profile exists with the requested name, an error will be displayed in the app.

### Hybrid offline app

The Mendix app can be installed on a tablet or phone as an app by creating a PhoneGap hybrid package. Profiles of the kind Hybrid offline app can be accessed from such a PhoneGap app. Hybrid offline app profiles are requested by profile name. If no profile exists with the requested name, an error will be displayed in the app.

Hybrid offline apps are designed to allow users to continue using their Mendix app even when they have no internet connection, though certain restrictions apply. An overview of the ramifications of running an offline device profile can be found on the [Offline](offline) page.

## Redirection to Profiles

The Mendix Runtime automatically redirects users to the home page of the appropriate device type based on the device they are using. This happens by examining the User-Agent string that is sent by the device's browser. Hybrid apps do not use this mechanism, but are referred to by name. The default configuration for this redirection is as follows:

| User-Agent String Regular Expression | Device Type |
| --- | --- |
| Android.*Mobile&#124;iPhone&#124;iPod&#124;BlackBerry | Phone |
| Android&#124;iPad | Tablet |
| _(other)_ | Responsive |

To configure the regular expressions used to match phone or tablet users, see [Custom Settings](custom-settings).

It is also possible to force the client to use a specific profile by adding a *profile* query string parameter to the URL when visiting a Mendix application. The possible values are the names of the profiles. For example:

```html
https://myapp.mendixcloud.com/index.html?profile=Responsive

```
