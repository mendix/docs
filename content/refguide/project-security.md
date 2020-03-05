---
title: "Project Security"
parent: "security"
menu_order: 10
tags: ["studio pro", "security", "project security"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor password-policy below is mapped, so it should not be removed or changed
---

## 1 Introduction

In the **Project Security**, you can switch security on or off for the whole project. You can also configure security settings related to the project, such as user roles, administrator credentials, demo users, anonymous users, and password policy. To be able to configure, for example, [security per module](module-security) or [access rule for entities](access-rules), you need to switch the project security on first. 

To configure the project security, open **Project Explorer** > **Project** >**Security**, and the dialog box will open:

![](attachments/project-security/project-security-dialog.png)

{{% alert type="info" %}}
For more general information on security, see [Security](security).
{{% /alert %}}

## 2 Security Level {#security-level}

The security level defines if security is switched off or on for the project and which security settings need to be configured.

| Security level | The way security is applied | Security settings to be configured |
| --- | --- | --- |
| Off | No security is applied. Users do not have to sign in and can access everything. | None |
| Prototype/demo | Security is applied to signing in, forms, and microflows. Users can access all data. | Administrator and anonymous access, user roles, security for forms and microflows. |
| Production | Full security is applied. | Administrator and anonymous access, user roles, security for forms, microflows, entities, and reports. |

{{% alert type="warning" %}}
For all licensed Mendix Cloud nodes, you need to use the **Production** security level and configure all security settings accordingly. Security levels **Off** and **Prototype/demo** are only allowed when testing locally, when deploying a Free App, and in cloud environments outside the Mendix Cloud which are specifically set up with **Development mode**. 
{{% /alert %}}

### 2.1 Settings Availability for Different Security Levels

For different security levels different settings are available. Find the list of all security settings and their availability per security level in the table below: 

| Setting Name                        | Security Off | Prototype/Demo Security                                      | Production Security                                          |
| ----------------------------------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Check security](#check-security)   | N/A          | N/A                                                          | Available, see the [Check Security](#check-security) section. |
| [Project status](#project-status)   | N/A          | Available, see the [Project Status](#project-status) section. | Available, see the [Project Status](#project-status) section. |
| [Module status](#module-status)     | N/A          | Available, see the [Module Status](#module-status) section.  | Available, see the [Module Status](#module-status) section.  |
| [User roles](#user-roles)           | N/A          | Available, see the [User roles](#user-roles) section.        | Available, see the [User roles](#user-roles) section.        |
| [Administrator](#administrator)     | N/A          | Available, see the [Administrator](#administrator) section.  | Available, see the [Administrator](#administrator) section.  |
| [Demo users](#demo-users)           | N/A          | Available, see the [Demo users](#demo-users) section.        | Available, see the [Demo users](#demo-users) section.        |
| [Anonymous users](#anonymous-users) | N/A          | Available, see the [Anonymous users](#anonymous-users) section. | Available, see the [Anonymous users](#anonymous-users) section. |
| [Password policy](#password-policy) | N/A          | Available, see the [Password policy](#password-policy) section. | Available, see the [Password policy](#password-policy) section. |

### 2.2 Check Security {#check-security}

If the security level is set to **Production**, you can specify whether the consistency of security settings should be checked. 

When **Check Security** is enabled, for each user role Studio Pro checks which forms are accessible, either directly in the menu bar or indirectly by following forms and microflows. For each of those forms, Studio Pro checks whether referred attributes and associations are accessible for the current user role. If not, an error is added to the error list. These errors are only shown if there are no other consistency errors.

### 2.3 Project Status {#project-status}

The project status indicates the security status for the current project security level.

| Project status | Description |
| --- | --- |
| Complete | All security settings for the current security level have been configured. |
| Incomplete | Some security settings for the current security level need to be configured. For more information, see the [Module Status](#module-status) section. |

## 3 Module Status {#module-status}

The **Module Status** tab shows the security status for each module. It shows the total number of items for which security needs to be configured, as well as the number of items for which security has been configured already. 

At the **Prototype/demo** security level, the status of page access and microflow access is shown.

Additionally, at the **Production** security level, the status of entity access and dataset access (if applicable) is shown.

## 4 User Roles {#user-roles}

A user role aggregates a number of access rights on data, pages, and microflows. An end-user of the application is assigned one or more user roles by an administrator, and gets all access rights that these user roles represent. For more information, see [User Roles](user-roles).

## 5 Administrator {#administrator}

In the **Administrator** tab of **Project Security**, you can change the default credentials and a user role for the Administrator user. For more information, see [Administrator](administrator). 

## 6 Demo Users {#demo-users}

Demo users are a demonstration of each [user role](user-roles) existing in your app. You can use demo users to test what your app looks like for each user role or to demonstrate your app to other people. For more information, see [Demo Users](demo-users). 

## 7 Anonymous Users {#anonymous-users}

Anonymous users allow end-users access your application without having to sign in. You can restrict the data that anonymous users can access by assigning a specific user role to them. For more information, see [Anonymous Users](anonymous-users).

## 8 Password Policy {#password-policy}

Specify the password requirements when users create their accounts and set passwords for them. For example, you can set the minimum length of the password, if it must contain digits or an upper case characters. For more information, see [Password Policy](password-policy). 

## 9 Read More

* [Security](security)
* [Module Security](module-security)