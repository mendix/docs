---
title: "Navigation Profile"
space: "Mendix 7 Reference Guide"
parent: "navigation"
---

<div class="alert alert-info">{% markdown %}

For Mendix 7.0 and 7.1 see [Navigation](navigation-before-72).

{% endmarkdown %}</div>

## Profile Properties

### General

**Profile name**

Name to uniquely identify a profile. [Menu widgets](menu-widgets) using the menu of a profile refer to this name.

**Application Title**

Specify the application title. This title is shown in the title bar of the browser.

### Home Pages

**Default Home Page**

The default home page indicates which [page](page) or [microflow](microflow) is opened after a user has signs in. If role-based home pages (see below) are specified for one of the [user roles](user-roles) of the user, then that home page will be used instead.

**Role-based Home Pages**

By using role-based home pages you can show different home pages for different users. If a user logs in, the first role-based home page of which the user role matches a user role of the user is displayed. If no match is found, the default home page is used.

Per role-based home page you can specify the user role it applies to and the target (page or microflow) that will be opened.

### Authentication

If an [anonymous user](anonymous-users) tries to access a resource to which the user has no access, the configured [sign-in page](authentication-widgets) will be displayed, prompting the user to sign in.

If the sign-in page is set to none, a built-in pop-up window will appear instead. The page title may be overridden and is translatable.

### Menu

Each device type contains a default menu. You can use these menus in [menu widgets](menu-widgets). Defining the menu for a device type works in the same way as when editing a menu document.

See [Menu](menu).

<div class="alert alert-warning">{% markdown %}

If [security](project-security) is enabled, the menu will only show items that the user has access to.

{% endmarkdown %}</div>

## Profile Buttons

### Add

Allows adding new profiles. The profile name and profile kind can be provided. 

The checkbox "Copy settings from profile 'Profile'" allows creating a duplicate of the current profile. It copies over all settings except the profile name and profile kind.

### Change kind

Allows changing the [profile kind](navigation).

### Delete

Deletes the profile. If [menu widgets](menu-widgets) are still referring to the profile errors will appear. It is possible to undo the deletion of a profile.