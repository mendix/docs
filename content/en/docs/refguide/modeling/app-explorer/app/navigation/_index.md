---
title: "Navigation"
url: /refguide/navigation/
weight: 20
description: "Describes the concept of navigation in apps and the properties of a profile."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This document describes the concept of navigation in Mendix applications and the properties of a profile. The **Navigation** document can be found by expanding the **App** node in the **App Explorer**. It defines the navigation structure of the application for users. It also allows you to set the home page of your application and to define the menu structures that can be used in [Menus and Navigation](/refguide/menu-widgets/). 

{{< figure src="/attachments/refguide/modeling/app-explorer/app/navigation/navigation-profile-properties.png" class="no-border" >}}

A user's home page can vary based on their [user roles](/refguide/user-roles/).

## Profiles {#profiles}

The core of Mendix's navigation model is founded on the following profiles:

* Responsive web
    * Responsive web offline
* Tablet web
    * Tablet web offline
* Phone web
    * Phone web offline
* Native mobile (tablet & phone)

Users that access the app via a particular device type are automatically redirected to the homepage of the appropriate profile based on the profile type (for details, see the [Redirection to Profiles](#redirection) section below).

The device type of the currently logged-in user is available in [microflows](/refguide/microflows/) as the `$currentDeviceType` variable. The type of this variable is the [enumeration](/refguide/enumerations/) `System.DeviceType`, which has the values `Phone`, `Tablet`, and `Desktop`. You can use `$currentDeviceType` to perform different actions based on the device type. A typical example is to show different pages based on the device type.

### Responsive web

Every app always has one profile of a Responsive type which cannot be deleted. This is the default profile used by a Mendix app. This profile can be used to make web applications. This profile also has an offline version.

### Tablet Web

All the users accessing a Mendix app from a browser on a tablet will automatically be redirected to a profile of the Tablet web type. If no profile exists of that type, the user will be redirected to the Responsive profile. This profile can be used to make web applications. This profile also has an offline version.

### Phone Web

All the users accessing the Mendix app from a browser on a phone will automatically be redirected to a profile of the Phone web type. If no profile exists of that type, the user will be redirected to the Responsive profile. This profile can be used to make web applications. This profile also has an offline version.

### Native Mobile {#native-phone}

A Mendix app can be installed on a phone as a native application which offers several advantages:

* **Enhanced Performance** — Native apps are optimized for the specific platform, resulting in faster load times and smoother user interactions.
* **Access to Device Features** — Native apps can harness the full potential of a phone's hardware features, such as GPS, camera, and push notifications, enhancing the user experience.
* **Offline Functionality** — Native apps store data locally on the phone, ensuring that users can access content even without an internet connection. 

The Mendix app will run in [offline-first](/refguide/offline-first/) mode. This means that all the data is stored on the phone and only synchronized with the server on request.

{{% alert color="info" %}}
You are required to enable anonymous users in your app's security settings and include anonymous user roles on native login pages. This is because there is no built-in login screen in the native profile; login pages are modeled as regular native pages. 
{{% /alert %}}

## Redirection to Profiles {#redirection}

Mendix Runtime automatically redirects users to the home page of the appropriate device type based on the device they are using. This happens by examining the `User-Agent` string that is sent by the device. The default configuration for this redirection is as follows:

| User-Agent String Regular Expression | Device Type |
| --- | --- |
| Android.*Mobile&#124;iPhone&#124;iPod&#124;BlackBerry | Phone |
| Android&#124;iPad | Tablet |
| *(other)* | Responsive |

To configure the regular expressions used to match phone or tablet users, see [Runtime Customization](/refguide/custom-settings/).

It is also possible to force the client to use a specific profile by adding a `profile` query string parameter to the URL when visiting a Mendix application. The possible values are the names of the profiles, which are Responsive, Tablet, and Phone. For example:

`https://myapp.mendixcloud.com/index.html?profile=Responsive`

## Navigation Profile Properties {#properties}

A profile can be added with the **Add navigation profile** button. Only one profile per type is allowed. While adding the profile, it is possible to copy the settings from an existing profile.

{{< figure src="/attachments/refguide/modeling/app-explorer/app/navigation/add-navigation-profile.png" class="no-border" >}}

### General

#### Application Title

This specifies the application title. This title is shown in the title bar of the browser.

#### Application Icon

This specifies the application icon. This icon is shown as favicon in the title bar and bookmarks of the browser. It can only be set in the Responsive profile, but will also be used by the other browser profiles.

### Home Pages

#### Default Home Page {#default-home-page}

The default home page indicates which [page](/refguide/page/) or [microflow](/refguide/microflow/) is opened after a user signs in. If role-based home pages (see below) are specified for one of the [user roles](/refguide/user-roles/) of the user, then that home page will be used instead.

{{% alert color="info" %}}
The default home page is visible to all unauthenticated users.
{{% /alert %}}

#### Role-Based Home Pages{#role-based}

By using role-based home pages, you can show different home pages for different users. If a user logs in, the first role-based home page of which the user role matches the user role of the user is displayed. If no match is found, the default home page is used.

For each role-based home page, you can specify the user role it applies to and the target (page or microflow) that will be opened.

### Authentication {#authentication}

If an [anonymous user](/refguide/anonymous-users/) tries to access a resource to which the user has no access, the configured [sign-in page](/refguide/authentication-widgets/) will be displayed, prompting the user to sign in.

If the sign-in page is set to none, a built-in pop-up window will appear instead. The page title is translatable and may be overridden.

### Menu

Each device type contains a default menu. You can use these menus in [Menus and Navigation](/refguide/menu-widgets/). Defining the menu for a device type works the same as when editing a menu document. For more details, see [Menu](/refguide/menu/).

{{% alert color="warning" %}}
If [security](/refguide/app-security/) is enabled, the menu will only show the items to which the user has access.
{{% /alert %}}

### Profile Buttons

#### Change Profile Type

Allows for changing the [profile type](/refguide/navigation/).

#### Delete

This deletes the profile. If [Menus and Navigation](/refguide/menu-widgets/) are still referring to the profile, errors will appear. It is possible to undo the deletion of a profile.

#### Synchronization Configuration {#customize}

Only available on profiles supporting offline synchronization.

This opens the **Customize offline synchronization** dialog box that is used for overriding offline synchronization settings for specific entities. For each entity the download setting is shown. A default is automatically determined by analyzing the model, but can be overridden in which case the setting will appear in boldface. For more details on the settings and when to use them, see the [Offline-First Reference Guide](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/#customizable-synchronization).

{{< figure src="/attachments/refguide/modeling/app-explorer/app/navigation/customize-offline-synchronization.png" class="no-border" >}}

## Read More

* [App Explorer](/refguide/app-explorer/)
* [Navigation Tree](/refguide/navigation-tree/)
