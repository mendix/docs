---
title: "Navigation"
url: /refguide/navigation/
weight: 20
description: "Describes the concept of navigation in apps and the properties of a profile."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This page describes the concept of navigation in Mendix applications and the properties of a profile. The **Navigation** document can be found by expanding the **App** node in the **App Explorer**. It defines the navigation structure of the application for end-users. It also lets you set the home page of your application and to define the menu structures that can be used in [Menus and Navigation](/refguide/menu-widgets/). 

{{< figure src="/attachments/refguide/modeling/app-explorer/app/navigation/navigation-profile-properties.png" alt="Navigation document showing Responsive web profile with General settings, Home pages, and Menu configuration" >}}

An end-user's home page can vary based on their [user roles](/refguide/user-roles/).

## Profiles {#profiles}

The core of Mendix's navigation model is founded on the following profiles:

* [Responsive web](#responsive-web)
    * Responsive web offline
* [Tablet web](#tablet-web)
    * Tablet web offline
* [Phone web](#phone-web)
    * Phone web offline
* [Native mobile (tablet & phone)](#native-phone)
* [Embedded](#embedded) (Beta - introduced in Mendix 11.12.0)

End-users that access the app via a particular device type are automatically redirected to the homepage of the appropriate browser or mobile profile based on the profile type (for details see [Redirection to Profiles](#redirection), below). This does not apply to the Embedded profile which is used when a host application loads the embedded client. 

The device type of the currently logged-in end-user is available in [microflows](/refguide/microflows/) as the `$currentDeviceType` variable. The type of this variable is the [enumeration](/refguide/enumerations/) `System.DeviceType`, which has the values `Phone`, `Tablet`, and `Desktop`. You can use `$currentDeviceType` to perform different actions based on the device type. A typical example is to show different pages based on the device type.

### Responsive Web{#responsive-web}

Every app always has one profile of a Responsive type which cannot be deleted. This is the default profile used by a Mendix app. This profile can be used to make web applications. This profile also has an offline version.

### Tablet Web{#tablet-web}

All the end-users accessing a Mendix app from a browser on a tablet will automatically be redirected to a profile of the Tablet web type. If no profile exists of that type, the end-user will be redirected to the Responsive profile. This profile can be used to make web applications. This profile also has an offline version.

### Phone Web{#phone-web}

All the end-users accessing the Mendix app from a browser on a phone will automatically be redirected to a profile of the Phone web type. If no profile exists of that type, the end-user will be redirected to the Responsive profile. This profile can be used to make web applications. This profile also has an offline version.

### Native Mobile{#native-phone}

A Mendix app can be installed on a phone as a native application which offers several advantages:

* **Enhanced Performance** – Native apps are optimized for the specific platform, resulting in faster load times and smoother user interactions.
* **Access to Device Features** – Native apps can harness the full potential of a phone's hardware features, such as GPS, camera, and push notifications, enhancing the user experience.
* **Offline Functionality** – Native apps store data locally on the phone, ensuring that end-users can access content even without an internet connection. 

The Mendix app will run in [offline-first](/refguide/offline-first/) mode. This means that all the data is stored on the phone and only synchronized with the server on request.

{{% alert color="info" %}}
You must enable anonymous users in your app's security settings and include anonymous user roles on native login pages. This is because there is no built-in login screen in the native profile; login pages are modeled as regular native pages. 
{{% /alert %}}

### Embedded{#embedded}

{{% alert color="info" %}}
Embedded profiles were introduced in Mendix version 11.12.0.
{{% /alert %}}

The Embedded profile lets you use a Mendix web app as a component inside another non-Mendix web application. The host application loads the embedded client and owns browser-level navigation, while the Mendix app renders and navigates inside its mounted region.

The Embedded profile defines a default home page and can also define a fallback page. When the configured home page expects page parameters, the host application can pass them through the `parameters` object in `render(…)`. For more information, see [Embedding the Client](/refguide/mendix-client/embedding-the-client/).

## Redirection to Profiles {#redirection}

Mendix Runtime automatically redirects end-users to the home page of the appropriate device type based on the device they are using. This happens by examining the `User-Agent` string that is sent by the device. The default configuration for this redirection is as follows:

| User-Agent String Regular Expression | Device Type |
| --- | --- |
| Android.*Mobile&#124;iPhone&#124;iPod&#124;BlackBerry | Phone |
| Android&#124;iPad | Tablet |
| *(other)* | Responsive |

To configure the regular expressions used to match phone or tablet end-users, see [Runtime Customization](/refguide/custom-settings/).

You can also force the client to use a specific profile by adding a `profile` query string parameter to the URL when visiting a Mendix application. The possible values are the names of the profiles, which are `Responsive`, `Tablet`, and `Phone`. For example:

`https://myapp.mendixcloud.com/index.html?profile=Responsive`

## Navigation Profile Properties {#properties}

A profile can be added with the **Add navigation profile** button. Only one profile per type is allowed. You can copy the settings from an existing profile when adding the new profile.

{{< figure src="/attachments/refguide/modeling/app-explorer/app/navigation/add-navigation-profile.png" class="no-border" width="600" alt="Add Navigation Profile dialog with Native mobile (tablet & phone) profile type selected" >}}

### General

#### Application Title

This specifies the application title. This title is shown in the title bar of the browser.

#### Application Icon

This specifies the application icon. This icon is shown as favicon in the title bar and bookmarks of the browser. It can only be set in the Responsive profile, but will also be used by the other browser profiles.

### Home Pages

#### Default Home Page {#default-home-page}

The default home page indicates which [page](/refguide/page/) or [microflow](/refguide/microflow/) is opened after an end-user signs in. If role-based home pages (see below) are specified for one of the [user roles](/refguide/user-roles/) of the end-user, then that home page will be used instead.

{{% alert color="info" %}}
The default home page is visible to all unauthenticated end-users.
{{% /alert %}}

For the Embedded profile, the default home page is the first page shown when the host application calls `render(…)`.

#### Role-Based Home Pages{#role-based}

Role-based home pages can show different home pages for different end-users. If an end-user signs in, the first role-based home page where the user role matches the user role of the end-user is displayed. If no match is found, the default home page is used.

For each role-based home page, you can specify the user role it applies to and the target (page or microflow) that will be opened.

#### Fallback Page

The fallback page is a page or microflow to be used when trying to access a [microflow](/refguide/microflow/#url) or [page](/refguide/page-properties/#url) URL that does not exist. For more information, see [Setting a Fallback Page](/refguide/setting-up-the-navigation-structure/#fallback) in *Setting Up Navigation*.

For Embedded profiles, you can configure a fallback page as well. This page is shown when the embedded app cannot open the configured home page during startup or navigation. This could happen if page parameter values passed through `render(…)` do not match the expected parameter types, or if a configured home page is not accessible for the signed-in end-user, among other reasons. For more information, see [Embedding the Client](/refguide/mendix-client/embedding-the-client/).

### Authentication {#authentication}

If an end-user, [anonymous](/refguide/anonymous-users/) or authenticated, tries to access a resource to which they have no access, the configured [sign-in page](/refguide/authentication-widgets/) is displayed, prompting the end-user to sign in.

If the sign-in page is set to `none`, a built-in pop-up window will appear instead. The page title is translatable and may be overridden.

### Menu

Each device type contains a default menu. You can use these menus in [Menus and Navigation](/refguide/menu-widgets/). Defining the menu for a device type works the same as when editing a menu document. For more details, see [Menu](/refguide/menu/).

{{% alert color="warning" %}}
If [security](/refguide/app-security/) is enabled, the menu will only show the items to which the end-user has access.
{{% /alert %}}

### Profile Buttons

#### Change Profile Type

Allows you to change the [profile type](/refguide/navigation/).

#### Delete

This deletes the profile. If [Menus and Navigation](/refguide/menu-widgets/) are still referring to the profile, errors will appear. You can undo the deletion of a profile.

#### Synchronization Configuration {#customize}

{{% alert color="info" %}}
Only available on profiles supporting offline synchronization.
{{% /alert %}}

This opens the **Customize offline synchronization** dialog box that is used to override offline synchronization settings for specific entities. For each entity the download setting is shown. A default is automatically determined by analyzing the model, but can be overridden by the developer in which case the setting will appear in boldface. 

For more details on the settings and when to use them, see the [Offline-First Reference Guide](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/#customizable-synchronization).

{{< figure src="/attachments/refguide/modeling/app-explorer/app/navigation/customize-offline-synchronization.png" class="no-border" alt="Customize offline synchronization dialog showing entity download settings and XPath constraints" >}}

## Read More

* [App Explorer](/refguide/app-explorer/)
* [Embedding the Client](/refguide/mendix-client/embedding-the-client/)
* [Navigation Tree](/refguide/navigation-tree/)
