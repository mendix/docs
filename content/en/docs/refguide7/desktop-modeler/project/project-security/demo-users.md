---
title: "Demo Users"
url: /refguide7/demo-users/
---

## 1 Introduction

In this section of the [project security](/refguide7/project-security/) settings, you can define demo users that may be used during the development phase of your application for testing purposes, or to show the application to other people.

Each demo user can be assigned an entity and one or more user roles that apply when you sign in to your application with that user. When the application is started for the first time, the specified demo users are created automatically.

After signing in to your application with the [administrator user](/refguide7/administrator/), a small tab called the 'user switcher' is presented at the right side of your application. Expanding this tab shows a list with all the demo users that are defined in the project security settings. Selecting a user from this list will sign in to your application using the credentials of this user, thus allowing you to test or demo your application with the user's role(s). This allows for rapid testing of your application with different user roles.

{{< figure src="/attachments/refguide7/desktop-modeler/project/project-security/demo-users/16844040.png" >}}

The user switcher is only shown and the demo users are only created when running your application locally on your development machine, or when running in a sandbox.

{{% alert color="warning" %}}

After they are created automatically, demo users do not differ in any way from other local users that are defined in your application. This means that you can still use them to manually sign in using their user name and password, even after disabling the demo users feature again. Also, the demo users are never automatically removed from the database.

{{% /alert %}}

## 2 Enabling Demo Users

Here you can configure whether the specified demo users are created and accessible in the user switcher.

| Value | Description |
| --- | --- |
| Yes | Demo users are enabled. A user switcher is shown in the right margin of your application. |
| No | Demo users are disabled. The user switcher is not shown in the application. |

## 3 Demo User Properties

### 3.1 Username

The name of the demo user. This name must be unique, and cannot be the same as the name of the [administrator user](/refguide7/administrator/).

### 3.2 Password

The password of the demo user is created automatically when the demo user is created. It cannot be changed, but it's possible to put a copy of this password on the system clipboard. This makes it possible, for example, to share the credentials of a demo user with someone else.

### 3.3 Entity

The entity of the demo user. This must be the System.User entity, or a specialization thereof.

### 3.4 User Roles

Here you can select the user roles of the demo user. Each demo user must have one or more roles.
