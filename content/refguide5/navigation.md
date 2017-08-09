---
title: "Navigation"
parent: "project"
---


{{% alert type="info" %}}

This document describes the general concept of navigation in Mendix applications and the properties of a device type.

{{% /alert %}}

## Table of Contents



The Navigation document defines the navigation structure of the application for end-users. It allows you to set the home page of your application as well as define menu structures for use in [menu widgets](menu-widgets). The home page can vary based on the [roles](user-roles) the user has.

## Device Types

At the heart of the navigation model in Mendix are three device types: Desktop, Tablet, and Phone. You can define separate home pages and menus for each of these three devices. The Desktop device type is always enabled, while Tablet and Phone can be disabled if you do not want to use them. When a user visits a Mendix application, she is automatically redirected to the home page of the appropriate device type (see 'Redirection to Device Types' below).

The device type of the currently logged in user is available in [microflows](microflows) as the variable `$currentDeviceType`. The type of this variable is [enumeration](enumerations) 'System.DeviceType', which has values 'Phone', 'Tablet' and 'Desktop'. You can use the `$currentDeviceType` variable to perform different actions based on the device type. Typical usage is to show different pages based on the device type.

## Redirection to Device Types

The Mendix Runtime automatically redirects users to the home page of the appropriate device type based on the device they are using. This happens by examining the User-Agent string that is sent by the device's browser. The default configuration for this redirection is as follows.

<table><thead><tr><th class="confluenceTh">User-Agent string regular expression</th><th class="confluenceTh">Device type</th></tr></thead><tbody><tr><td class="confluenceTd">Android.*Mobile|iPhone|iPod|BlackBerry</td><td class="confluenceTd">Phone</td></tr><tr><td class="confluenceTd">Android|iPad</td><td class="confluenceTd">Tablet</td></tr><tr><td class="confluenceTd"><em>(other)</em></td><td class="confluenceTd">Desktop</td></tr></tbody></table>

To configure the regular expressions used to match phone or tablet user, see [custom settings](custom-settings).

If a device type is not enabled, it falls back to another device type as shown in the following table.

<table><thead><tr><th class="confluenceTh">Device type</th><th class="confluenceTh">Fallback</th></tr></thead><tbody><tr><td class="confluenceTd">Phone</td><td class="confluenceTd">Tablet, Desktop</td></tr><tr><td class="confluenceTd">Tablet</td><td class="confluenceTd">Phone, Desktop</td></tr><tr><td class="confluenceTd">Desktop</td><td class="confluenceTd"><em>(none, Desktop is always enabled)</em></td></tr></tbody></table>

It is also possible to force the client to use a specific device type by adding a 'profile' query string parameter to the URL when visiting a Mendix application. The possible values are 'Desktop', 'Tablet', and 'Phone'. An example:

`https://myapp.mendixcloud.com/index.html?profile=Phone`

## Device Type

[Navigation](navigation) in Mendix application is split into three device types: Desktop, Tablet and Phone. Each of these device types has the following properties.

### General

**Enabled (only Tablet and Phone)**

Specifies whether the device type is enabled. If a device type is enabled, it can be used for determining the home page when a user logs into the application. If it is disabled, it will have no effect on the application whatsoever.

{{% alert type="info" %}}

The Desktop device type is always enabled.

{{% /alert %}}

**Application title**

Here you can specify the application title. This title is shown in the title bar of the browser.

### Home Pages

**Default home page**

The default home page indicates which [page](page) or [microflow](microflow) is opened when a user has just signed in. If role-based home pages (see below) are specified for one of the [user roles](user-roles) of the user, then that home page will be used instead.

### Role-based home pages

By using role-based home pages you can show different home pages for different users. If an end user logs in, the first role-based home page of which the user role matches a user role of the user is displayed. If no match is found, the default home page is used.

Per role-based home page you can specify the user role it applies to and the target (page or microflow) that will be opened.

### Menu

Each device type contains a default menu. You can use these menus in [menu widgets](menu-widgets). Defining the menu for a device type works in the same way as when editing a menu document.

See [Menu](menu).

{{% alert type="warning" %}}

If [security](project-security) is enabled, the menu will only show items that the user has access to.

{{% /alert %}}
