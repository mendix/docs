---
title: "Navigation Profile"
space: "Mendix 7 Reference Guide"
parent: "navigation"
description: "Describes the profile properties and profile buttons for Mendix version 7.2 and higher."
---

<div class="alert alert-info">{% markdown %}

For details on how this works in Mendix versions 7.0 and 7.1, see [Navigation Before Mendix Version 7.2](navigation-before-72).

{% endmarkdown %}</div>

## 1 Profile Properties

### 1.1 General

**Profile name**

The name to uniquely identify a profile. [Menu widgets](menu-widgets) using the menu of a profile refer to this name.

**Application Title**

Specifies the application title. This title is shown in the title bar of the browser.

### 1.2 Home Pages

**Default Home Page**

The default home page indicates which [page](page) or [microflow](microflow) is opened after a user signs in. If role-based home pages (see below) are specified for one of the [user roles](user-roles) of the user, then that home page will be used instead.

**Role-Based Home Pages**

By using role-based home pages, you can show different home pages for different users. If a user logs in, the first role-based home page of which the user role matches the user role of the user is displayed. If no match is found, the default home page is used.

For each role-based home page, you can specify the user role it applies to and the target (page or microflow) that will be opened.

### 1.3 Authentication

If an [anonymous user](anonymous-users) tries to access a resource to which the user has no access, the configured [sign-in page](authentication-widgets) will be displayed, prompting the user to sign in.

If the sign-in page is set to none, a built-in pop-up window will appear instead. The page title is translatable and may be overridden.

### 1.4 Menu

Each device type contains a default menu. You can use these menus in [menu widgets](menu-widgets). Defining the menu for a device type works the same as when editing a menu document. For more details, see [Menu](menu).

<div class="alert alert-warning">{% markdown %}

If [security](project-security) is enabled, the menu will only show the items to which the user has access.

{% endmarkdown %}</div>

## 2 Profile Buttons

### 2.1 Add

Allows for adding new profiles. The profile name and profile kind can be provided. 

The **Copy settings from profile 'Profile'** check box enables creating a duplicate of the current profile. It copies over all the settings except the profile name and profile kind.

### 2.2 Change Kind

Allows for changing the [profile kind](navigation).

### 2.3 Delete

Deletes the profile. If [menu widgets](menu-widgets) are still referring to the profile, errors will appear. It is possible to undo the deletion of a profile.
