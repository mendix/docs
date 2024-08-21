---
title: "Navigation"
url: /refguide9/navigation/
weight: 20
description: "Describes the concept of navigation in apps and the properties of a profile."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This document describes the concept of navigation in Mendix applications and the properties of a profile. The **Navigation** document can be found by expanding the **App** node in the **App Explorer**. It defines the navigation structure of the application for users. It also allows you to set the home page of your application and to define the menu structures that can be used in [Menus and Navigation](/refguide9/menu-widgets/). 

{{< figure src="/attachments/refguide9/modeling/app-explorer/app/navigation/navigation-profile-properties.png" class="no-border" >}}

A user's home page can vary based on their [user roles](/refguide9/user-roles/).

## Profiles {#profiles}

At the heart of the navigation model in Mendix, these are the available profiles:

* Responsive
* Hybrid tablet app online
* Hybrid tablet app offline
* Hybrid phone
* Hybrid phone app offline
* Tablet web
* Phone web
* Native phone

Users that access the app via a particular device type are automatically redirected to the home page of the appropriate profile based on the profile type (for details, see the [Redirection to Profiles](#redirection) section below).

The device type of the currently logged-in user is available in [microflows](/refguide9/microflows/) as the `$currentDeviceType` variable. The type of this variable is the [enumeration](/refguide9/enumerations/) `System.DeviceType`, which has the values `Phone`, `Tablet`, and `Desktop`. You can use `$currentDeviceType` to perform different actions based on the device type. A typical example is to show different pages based on the device type.

### Responsive

Every app always has one profile of a Responsive type which cannot be deleted. This is the default profile used by a Mendix app. This profile can be used to make web applications.

### Hybrid Profiles {#hybrid-profiles}

A Mendix app can be installed on a tablet or phone as an app by creating a [local build](/howto8/mobile/build-hybrid-locally/) hybrid package. Hybrid profiles can be accessed from such a locally built app. Hybrid app profiles are determined by device type (phone or tablet) and by the offline accessibility feature enabled (online or offline). If no profile exists with the requested combination, an error will be displayed in the app.

Hybrid offline apps are designed to allow users to continue using their Mendix app even when they have no internet connection. However, certain restrictions apply. For an overview of the ramifications of running an offline device profile, see [Offline First](/refguide9/offline-first/).

Four different hybrid profiles are available:

* Hybrid tablet app online
* Hybrid tablet app offline
* Hybrid phone
* Hybrid phone app offline

### Tablet Web

All the users accessing a Mendix app from a browser on a tablet will automatically be redirected to a profile of the Tablet web type. If no profile exists of that type, the user will be redirected to the Responsive profile. This profile can be used to make web applications.

### Phone Web

All the users accessing the Mendix app from a browser on a phone will automatically be redirected to a profile of the Phone web type. If no profile exists of that type, the user will be redirected to the Responsive profile. This profile can be used to make web applications.

### Native Phone {#native-phone}

A Mendix app can be installed on a phone as a native application which has the benefit of a more responsive UI. The app will also be [offline-first](/refguide9/offline-first/), which means all the data is stored on the phone and only synchronized with the server on request.

You are required to enable anonymous users in your app's security settings and include anonymous user roles on native login pages. This is because there is no built-in login screen in the native profile; login pages are modeled as regular native pages. 

## Redirection to Profiles {#redirection}

Mendix Runtime automatically redirects users to the home page of the appropriate device type based on the device they are using. This happens by examining the `User-Agent` string that is sent by the device. The default configuration for this redirection is as follows:

| User-Agent String Regular Expression | Device Type |
| --- | --- |
| Android.*Mobile&#124;iPhone&#124;iPod&#124;BlackBerry | Phone |
| Android&#124;iPad | Tablet |
| *(other)* | Responsive |

To configure the regular expressions used to match phone or tablet users, see [Runtime Customization](/refguide9/custom-settings/).

It is also possible to force the client to use a specific profile by adding a `profile` query string parameter to the URL when visiting a Mendix application. The possible values are the names of the profiles, which are Responsive, Tablet, Phone, HybridTablet, and HybridPhone. For example:

`https://myapp.mendixcloud.com/index.html?profile=Responsive`

## Navigation Profile Properties {#properties}

A profile can be added with the **Add navigation profile** button. Only one profile per type is allowed. While adding the profile, it is possible to copy the settings from an existing profile.

{{< figure src="/attachments/refguide9/modeling/app-explorer/app/navigation/add-navigation-profile.png" class="no-border" >}}

### General

#### Application Title

This specifies the application title. This title is shown in the title bar of the browser.

#### Application Icon

This specifies the application icon. This icon is shown as favicon in the title bar and bookmarks of the browser. It can only be set in the Responsive profile, but will also be used by the other browser profiles.

### Home Pages

#### Default Home Page {#default-home-page}

The default home page indicates which [page](/refguide9/page/) or [microflow](/refguide9/microflow/) is opened after a user signs in. If role-based home pages (see below) are specified for one of the [user roles](/refguide9/user-roles/) of the user, then that home page will be used instead.

{{% alert color="info" %}}
The default home page is visible to all unauthenticated users.
{{% /alert %}}

#### Role-Based Home Pages{#role-based}

By using role-based home pages, you can show different home pages for different users. If a user logs in, the first role-based home page of which the user role matches the user role of the user is displayed. If no match is found, the default home page is used.

For each role-based home page, you can specify the user role it applies to and the target (page or microflow) that will be opened.

### Authentication {#authentication}

If an [anonymous user](/refguide9/anonymous-users/) tries to access a resource to which the user has no access, the configured [sign-in page](/refguide9/authentication-widgets/) will be displayed, prompting the user to sign in.

If the sign-in page is set to none, a built-in pop-up window will appear instead. The page title is translatable and may be overridden.

### Menu

Each device type contains a default menu. You can use these menus in [Menus and Navigation](/refguide9/menu-widgets/). Defining the menu for a device type works the same as when editing a menu document. For more details, see [Menu](/refguide9/menu/).

{{% alert color="warning" %}}
If [security](/refguide9/app-security/) is enabled, the menu will only show the items to which the user has access.
{{% /alert %}}

### Profile Buttons

#### Change Profile Type

Allows for changing the [profile type](/refguide9/navigation/).

#### Delete

This deletes the profile. If [Menus and Navigation](/refguide9/menu-widgets/) are still referring to the profile, errors will appear. It is possible to undo the deletion of a profile.

#### Synchronization Configuration {#customize}

Only available on profiles supporting offline synchronization.

This opens the **Customize offline synchronization** dialog box that is used for overriding offline synchronization settings for specific entities. For each entity the download setting is shown. A default is automatically determined by analyzing the model, but can be overridden in which case the setting will appear in boldface. For more details on the settings and when to use them, see the [Offline-First Reference Guide](/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/#customizable-synchronization).

{{< figure src="/attachments/refguide9/modeling/app-explorer/app/navigation/customize-offline-synchronization.png" class="no-border" >}}

## Read More

* [App Explorer](/refguide9/app-explorer/)
* [Navigation Tree](/refguide9/navigation-tree/)
