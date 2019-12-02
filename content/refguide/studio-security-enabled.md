---
title: "Model Changes When Security Is Enabled in Studio"
parent: "security"
description: "Describes checks and changes in the project when security is enabled in Mendix Studio."
tags: ["studio pro", "security", "studio"]
---

## 1 Introduction 

This document describes the process of model changes that are applied automatically when security is enabled in Mendix Studio. For more information on security settings in Studio, see [Security, Roles & Permissions](/studio/settings-security) in the *Studio Guide*. 

Users can enable security from Studio. While the Studio user simply clicks the **Enable Security** button, as a result, security is set to **Production** for the project and a number of checks and changes (if necessary) are performed automatically. 

## 2 Process Overview

When security is enabled, a number of checks and changes are done at several levels.

1. Studio checks if security is enabled. If security is set to **Prototype/demo** or **Production**, the process stops. If security is off, steps described below are executed. 
2. The [MendixSSO](/developerportal/deploy/mendix-sso) module is set up if the project does not have it yet (for more information on this process, see the [Modules Set Up](#module-set-up) section). If the MendixSSO module has been already installed for this project, the process stops. 
3. Studio does checks and changes (if necessary) to [demo users](demo-users) , [module roles](module-security) , and [user roles](user-roles) (for more information on this process, see the [Module Roles and Demo Users Set Up](#module-roles-and-demo-users) section).
4. Studio sets access rules for entities (and their attributes and associations), if entities do not have access rules yet (for more information on this process, see the [Entity Access Set Up](#entity-access) section).
5. Studio checks if the *login.html* file exists, backs it up, and replaces it with a new version. Also, Studio checks if *index.html* exists, it searches for `document.cookie = "originURI=/login.html";` and replaces it with `document.cookie = "originURI=/openid/login";` (for more information on this process, see the [Files Set Up](#files-set-up) section).
6. Studio does checks and changes (if necessary) at the [Project Security](project-security) level (for more information on this process, see the [Project Security Level Set Up](#project-security-level) section).

{{% alert type="info" %}}

If security has already been set to **Prototype/demo** or **Production** in Studio Pro, these settings may be incompatible (too advanced) with Studio roles and permissions settings. In this case, you will not be able to edit roles and permissions in Studio. For more information on security settings in Studio, see [Security, Roles & Permissions](/studio/settings-security) in the *Studio Guide*. 

{{% /alert %}}

## 3 Modules Set Up {#module-set-up}

When security is enabled in Studio, the Mendix SSO module is set up. This module enables single sign-on and user management in your app.

To enable single sign-on the following checks and changes are performed:

1. The Mendix SSO startup microflow ( MendixSSO.MendixSSO_AfterStartup ) is created. For more information on possible outcomes of this process, see the [Project Security Level Set Up](#project-security-level) section.
2. *index.html* and *login.html* files are checked and changed if necessary. For more information, see the [Files Set Up](#files-set-up) section.

The Mendix SSO module also adds user management to your app. With user management you can manage app users.

{{% alert type="info" %}}If your project already has the Mendix SSO module installed, you will not be able to enable security from Studio. You can only set security manually in Studio Pro meeting the following requirements: 

* Security should be set to **Production** <br/>
* The Mendix SSO module should be set up to enable single sign on

{{% /alert %}}

## 4 Module Roles and Demo Users Set Up {#module-roles-and-demo-users}

After the **After startup** microflow is set up, Studio checks if the *Administrator* role, the *User* role, and *demo users* exist and creates them when necessary:

1.  Studio checks if the Administrator role and the User role exist at the **Project** level. If they do not exist, they will be created.

	![](attachments/studio-security-enabled/project-security-user-roles.png)

2.  After that, Studio checks if the Administrator and the User roles exist in each module of your project and if they are linked to the corresponding project roles. 

	![](attachments/studio-security-enabled/module-roles.png)

    Possible outcomes of this check are the following:<br/>
    a. If the model has two or more module roles in one module that are connected to the Administrator project role or the User project role, then it will be Studio incompatible. Studio will not change anything in these roles, but roles and permissions will not be editable in Studio.<br/>
    b. If the model has one module role connected to the Administrator project role or the User project role, Studio checks if the name of the module role is identical to the project role. If the names are different, Studio disconnects this module role from the project role, creates a new one with the name identical to the project role name, and links it to the project role.<br/>
    c. If the model has no module roles connected to the Administrator project role or the User project role, Studio creates these roles. <br/>
    d. If the module role exists, its name is identical to the project role, but it is not linked to this project role, Studio creates a new module role, names it *Administrator_1* or *User_1*, and links it to the corresponding project role.<br/>
  
    {{% alert type="info" %}}Studio links the Administrator role from the System module to the Administrator role on the project level. *Every other project role* created from Studio, including the original User project role, will be linked to the User module role for the System module.
    {{% /alert %}}

3. Studio links the Administrator role at the project level to MendixSSO.Administrator and Administration.Administrator (if they exist, if not, Studio will not do any linking). The User role at the project level is linked to MendixSSO.User, and Administration.User (if they exist, if not, Studio will not do any linking). All other AppStore modules will remain unchanged. 

    Every other user role created in Studio will be linked to the MendixSSO.User and the Administration.User in the MendixSSO and Administration modules correspondingly.

4. Studio checks if demo users named *demo_administrator* and *demo_user* exist, and if not, Studio creates them.

{{% alert type="warning" %}}

If Administrator and User roles already exist and are [compatible with Studio](#studio-compatible), they will get access to all microflows, nanoflows, pages, and entities (including entities' attributes and associations).

All newly created roles get access to all pages, microflows, nanoflows, and entities (including their attributes and associations) that are in Studio, except for App Store pages, microflows, and entities (with their attributes and associations).

Also, all new pages, microflows, and entities (with their attributes and associations) that are created in Studio will be accessible for all existing app roles by default.

{{% /alert %}}

## 5 Entity Access Set Up {#entity-access}

When you enable security, Studio creates access rules for all entities (and their attributes and associations) that do not have them. The following access rules settings are applied:

*   A description is added to **Documentation** of an **Access Rule** stating that it has been generated by Studio

	![](attachments/studio-security-enabled/start-up-microflow.png)

*  All roles in the current module, except anonymous roles, get *create* and *delete* rights for entities. The following rules are created for attributes and associations of these entities:

  *  All roles in the current module, except anonymous roles, have *read* and *write* access for attributes

     {{% alert type="info" %}}There are cases where entities inherit from System.Image or System.FileDocument. Some of those inherited attributes cannot be set to read/write, so they are set to read-only. 
     {{% /alert %}}
  
* All roles in the current module, except anonymous roles, have *read* and *write* access for associations if the entity is the association owner 

{{% alert type="info" %}}

The rules described above are created if you create an entity in Studio.

If you copy-paste an entity, the access rules of the original entity are copied as much as possible. However, if you have a generalization on an entity and you copy it to another project, the generalization is removed.

{{% /alert %}}

## 6 Files Set Up {#files-set-up}

As the last stage, Studio applies the following changes to *index.html* and *login.html* files in your project:

1. If the *login.html* file exist, Studio backs it up in the same folder under the name *login_backup_year-month-day_hour-minute.html*, indicating the date and time of the backup. Studio also creates a new file under the name *login.html* 

    If the *login.html* file does not exist, Studio creates it under the name *login.html* 

2. In the*index.html* file, Studio replaces `document.cookie = "originURI=/login.html";` with `document.cookie = "originURI=/openid/login";`.

This procedure enables single sign-on and allows existing users to automatically sign in to your app using their Mendix accounts. 

## 7 Project Security Level Set Up {#project-security-level}

On the **Project** level, Studio does the following:

1. The **Project Security** is set to **Production**. 

2.  Studio checks if the **After startup** microflow exists in **Project** > **Settings** > **Runtime**. 

    ![](attachments/studio-security-enabled/start-up-microflow.png)

    There are two possible outcomes of this check:<br/>
    a. If the model does not contain any **After startup** microflow, the *MendixSSO.MendixSSO_AfterStartup* microflow is used.<br/>
    b. If the model contains the **After startup** microflow, Studio creates *CallBothStartupMicroflows* microflow in the same place as the existing one. *CallBothStartupMicroflows* will call the *MendixSSO.MendixSSO_AfterStartup* microflow first, then it will call the microflow that already existed in the project.

## 8  Studio Compatibility {#studio-compatible}

Studio Pro security settings are compatible with Studio (that means that roles and permissions can be edited in Studio), when all of the following criteria are met:

* The MendixSSO module has been installed
* The security level has been be set to production
* Demo users have been enabled
* Demo users must have the correct name: identical to the project role name, but with the *demo_* prefix (for example, demo_user)
* Demo users must have exactly one user role connected to them
* User roles must have a demo user connected to them
* User roles must have exactly one module role per module connected to them (Studio does not check System or App Store modules)
* Module roles do not have more than one user role connected to them

## 9 Read More

* [Security, Roles & Permissions](/studio/settings-security) 
* [Project Security](project-security)
* [Module Security](module-security)
