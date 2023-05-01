---
title: "Navigation Profile"
url: /refguide7/navigation-profile/
description: "Describes the profile properties and profile buttons for Mendix version 7.4 and above."
---

{{% alert color="info" %}}

For details on how this works in Mendix versions 7.0 and 7.1, see [Navigation Before Mendix Version 7.2](/refguide7/navigation-before-72/). For 7.2 and 7.3, see [Navigation in Mendix Versions 7.2 and 7.3](/refguide7/navigation-in-72-and-73/)

{{% /alert %}}

## 1 Overview

Management of profiles is available from the **Navigation** section of a project.

{{< figure src="/attachments/refguide7/desktop-modeler/project/navigation/navigation-profile/2018-03-01_17-29-32.png" >}}

A profile can be added with the **Add navigation profile** button. Only one profile per type is allowed. While adding the profile, it is possible to copy the settings from an existing profile.

{{< figure src="/attachments/refguide7/desktop-modeler/project/navigation/navigation-profile/2018-03-01_17-31-42.png" >}}

## 2 Profile Properties

### 2.1 General

#### 2.1.1 Application Title

This specifies the application title. This title is shown in the title bar of the browser.

### 2.2 Home Pages

#### 2.2.1 Default Home Page

The default home page indicates which [page](/refguide7/page/) or [microflow](/refguide7/microflow/) is opened after a user signs in. If role-based home pages (see below) are specified for one of the [user roles](/refguide7/user-roles/) of the user, then that home page will be used instead.

#### 2.2.2 Role-Based Home Pages

By using role-based home pages, you can show different home pages for different users. If a user logs in, the first role-based home page of which the user role matches the user role of the user is displayed. If no match is found, the default home page is used.

For each role-based home page, you can specify the user role it applies to and the target (page or microflow) that will be opened.

### 2.3 Authentication

If an [anonymous user](/refguide7/anonymous-users/) tries to access a resource to which the user has no access, the configured [sign-in page](/refguide7/authentication-widgets/) will be displayed, prompting the user to sign in.

If the sign-in page is set to none, a built-in pop-up window will appear instead. The page title is translatable and may be overridden.

### 2.4 Menu

Each device type contains a default menu. You can use these menus in [menu widgets](/refguide7/menu-widgets/). Defining the menu for a device type works the same as when editing a menu document. For more details, see [Menu](/refguide7/menu/).

{{% alert color="warning" %}}

If [security](/refguide7/project-security/) is enabled, the menu will only show the items to which the user has access.

{{% /alert %}}

## 3 Profile Buttons

### 3.2 Change Profile Type

Allows for changing the [profile type](/refguide7/navigation/).

### 3.3 Delete

This deletes the profile. If [menu widgets](/refguide7/menu-widgets/) are still referring to the profile, errors will appear. It is possible to undo the deletion of a profile.
