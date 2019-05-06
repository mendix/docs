---
title: "Navigation Profile"
parent: "navigation"
description: "Describes the Mendix profile properties and profile buttons."
---

## 1 Overview

Management of profiles is available from the **Navigation** section of a project.

![](attachments/core/2018-03-01_17-29-32.png)

A profile can be added with the **Add navigation profile** button. Only one profile per type is allowed. While adding the profile, it is possible to copy the settings from an existing profile.

![](attachments/core/2018-03-01_17-31-42.png)

## 2 Profile Properties

### 2.1 General

#### 2.1.1 Application Title

This specifies the application title. This title is shown in the title bar of the browser.

### 2.2 Home Pages

#### 2.2.1 Default Home Page

The default home page indicates which [page](page) or [microflow](microflow) is opened after a user signs in. If role-based home pages (see below) are specified for one of the [user roles](user-roles) of the user, then that home page will be used instead.

#### 2.2.2 Role-Based Home Pages

By using role-based home pages, you can show different home pages for different users. If a user logs in, the first role-based home page of which the user role matches the user role of the user is displayed. If no match is found, the default home page is used.

For each role-based home page, you can specify the user role it applies to and the target (page or microflow) that will be opened.

### 2.3 Authentication {#authentication}

If an [anonymous user](anonymous-users) tries to access a resource to which the user has no access, the configured [sign-in page](authentication-widgets) will be displayed, prompting the user to sign in.

If the sign-in page is set to none, a built-in pop-up window will appear instead. The page title is translatable and may be overridden.

### 2.4 Menu

Each device type contains a default menu. You can use these menus in [menu widgets](menu-widgets). Defining the menu for a device type works the same as when editing a menu document. For more details, see [Menu](menu).

{{% alert type="warning" %}}

If [security](project-security) is enabled, the menu will only show the items to which the user has access.

{{% /alert %}}

## 3 Profile Buttons

### 3.2 Change Profile Type

Allows for changing the [profile type](navigation).

### 3.3 Delete

This deletes the profile. If [menu widgets](menu-widgets) are still referring to the profile, errors will appear. It is possible to undo the deletion of a profile.

### 3.4 Sync configuration

Only available on profiles supporting offline synchronization.

This opens the **Customize offline synchronziation** dialog which is used for overriding offline synchronization settings for specific entities. For each entity the download setting is shown. A default is automatically determined by analyzing the model, but can be overridden in which case the setting will appear in boldface. The download settings are one of the following:

| Download setting | Description |
----------------------------------
| All objects | Download all objects of this entity type |
| By XPath    | Download only those objects matching the specified [XPath constraint](xpath-constraints) |
| Nothing     | Don't download any objects of this entity type |

![](attachments/core/customize-offline-synchronization.png)
