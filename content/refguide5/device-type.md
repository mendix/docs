---
title: "Device Type"
parent: "navigation"
---


[Navigation](navigation) in Mendix application is split into three device types: Desktop, Tablet and Phone. Each of these device types has the following properties.

## General

### Enabled (only Tablet and Phone)

Specifies whether the device type is enabled. If a device type is enabled, it can be used for determining the home page when a user logs into the application. If it is disabled, it will have no effect on the application whatsoever.

{{% alert type="info" %}}

The Desktop device type is always enabled.

{{% /alert %}}

### Application title

Here you can specify the application title. This title is shown in the title bar of the browser.

## Home Pages

### Default home page

The default home page indicates which [page](page) or [microflow](microflow) is opened when a user has just signed in. If role-based home pages (see below) are specified for one of the [user roles](user-roles) of the user, then that home page will be used instead.

## Role-based home pages

By using role-based home pages you can show different home pages for different users. If an end user logs in, the first role-based home page of which the user role matches a user role of the user is displayed. If no match is found, the default home page is used.

Per role-based home page you can specify the user role it applies to and the target (page or microflow) that will be opened.

## Menu

Each device type contains a default menu. You can use these menus in [menu widgets](menu-widgets). Defining the menu for a device type works in the same way as when editing a menu document.

See [Menu](menu).

{{% alert type="warning" %}}

If [security](project-security) is enabled, the menu will only show items that the user has access to.

{{% /alert %}}
