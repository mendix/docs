---
title: "Demo Users"
url: /refguide/demo-users/
weight: 30
tags: ["studio pro", "demo users", "demo-users", "app security"]
---

## 1 Introduction

Demo users are a demonstration of each [user role](/refguide/user-roles/) existing in your app. You can use demo users to test what your app looks like for each user role or to demonstrate your app to other people (for more information, see the [Testing Your App via Demo Users](#test-your-app) section . 

When the application is started for the first time, the specified demo users are created automatically.

The demo users are only created and shown when running your application locally on your development machine, or when running in a Free App environment.

To access demo users and their properties, open **App Security** > **Demo users**:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/app-explorer/security/app-security/demo-users/demo-users-tab.png" >}}

## 2 Enabling Demo Users

When security is enabled, demo users are enabled by default. You can disable or enable them back with **Enable demo users** setting that has the following options:

* **Yes** – demo users are enabled, you can create new demo users, edit or delete them
* **No** – demo users are disabled, you cannot add, edit, or delete demo users

{{% alert color="warning" %}}

After they are created automatically, demo users do not differ in any way from other local users that are defined in your application. This means that you can still manually sign in using their user name and password, even after disabling the demo users feature. Also, the demo users are never automatically removed from the database.

{{% /alert %}}

## 3 Demo User Properties

Double click the demo user to open its properties:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/app-explorer/security/app-security/demo-users/demo-user-properties.png" >}}

Demo user properties are described in the table below:

| Property   | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| User name  | The name of the demo user. This name must be unique, and cannot be the same as the name of the [administrator user](/refguide/administrator/). |
| Password   | The password of the demo user is created automatically when the demo user is created. It cannot be changed, but you can click **Copy password to clipboard**, for example, to share the credentials of a demo user with someone else. |
| Entity     | The entity of the demo user. This entity must be the System.User entity or a specialization of it. |
| User roles | A user role of the demo user. Each demo user must have one or more roles. |

## 4 Testing Your App via Demo Users {#test-your-app}

You can use demo user to test what your application looks like to different user roles. Do the following:

1. View you app.
2. Sign in it as the [Administrator](/refguide/administrator/).
3.  Click a user icon in the right side of the screen. The menu bar **Select user** will be displayed: 

	{{< figure src="/attachments/refguide/modeling/menus/view-menu/app-explorer/security/app-security/demo-users/demo-users-example.png" >}}
	
4. Selecting a user from the list to sign in to your application with the credentials of this user, thus allowing you to test or demo your application with the selected user role.

## 5 Read More

* [App Security](/refguide/app-security/)
* [User Roles](/refguide/user-roles/)
* [Administrator](/refguide/administrator/)
* [Anonymous Users](/refguide/anonymous-users/)
* [Password Policy](/refguide/password-policy/)
