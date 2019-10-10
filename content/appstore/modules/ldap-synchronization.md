---
title: "LDAP Synchronization"
category: "Modules"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [LDAP Synchronization](https://appstore.home.mendix.com/link/app/24/) module can be used to synchronize users (or other objects) using the Lightweight Directory Access Protocol (LDAP) protocol. 

### 1.1 Typical Usage Scenarios

* Authenticate and synchronize your app's end-users
* Retrieve other objects from the Active Directory

### 1.2 Features

* Imports users from the LDAP server
* Only authenticate users against the LDAP server
* Creates a user the first time they log in after authenticating against the LDAP server
* The LDAP server is leading, so no changes are submitted to the LDAP server
* If users are removed from the LDAP server, their accounts are deactivated in your application
* If LDAP authentication is enabled, users cannot log in with local accounts (except for users with certain specified roles)

### 1.3 Dependencies

This module is dependent on the following additional modules – make sure they are also present in your app project and configured properly:

* [Community Commons Functions Library](https://appstore.home.mendix.com/link/app/170/)
* [Encryption](https://appstore.home.mendix.com/link/app/1011/)

## 2 Installation

1. Select the **Ldap.ASu_StartLdap** microflow as your **After startup** microflow.
2. Add the **Ldap.OpenLdapServersOverview** microflow to your app project's navigation.
3. Add the **Ldap.LdapAdmin** module role to your **Administrator** user role.
4. Optionally, edit the **Ldap.LdapSync** scheduled event to suit your needs. This event can, for example, sync the user base on a nightly basis.
5. Your application is now ready to deploy. Follow the [configuration](#configuration) instructions to configure LDAP further.

{{% alert type="warning" %}}
Newer versions of the module can introduce configuration changes. If you have already configured LDAP authentication, you need to review all the options upon updating in order to confirm that everything still behaves as expected.
{{% /alert %}}

## 3 Configuration {#configuration}

### 3.1 Basic Configuration

After enabling LDAP in your app project, run the app, log in as *MxAdministrator*, and open your LDAP servers overview. To configure an LDAP connection, click **New** to add a new server configuration. To completely configure a LDAP server, fill in the fields on the tabs in the configuration screen.

Follow these steps to configure an LDAP connection (note that not all steps will be applicable in every configuration):

1. Fill out the server configuration.
2. Do one of the following:
	* Fill in the fields on the **User import mapping** tab, then click **Refresh** and create an attribute mapping
	* Fill in the fields on the **Authentication configuration** tab
	* Fill in the fields on the **User authentication mapping** tab
3. Go to the **LDAP group mapping** tab, click **Refresh**, and specify the group mappings.
4. Save the configuration.
5. Execute a full synchronization.

When your configuration is complete, click **Sync users for all servers** to run the LDAP synchronization using all configurations that are enabled. A scheduled event is available to perform this automatically.

### 3.2 Server Configuration

Clicking **New** or **Edit** in the LDAP servers overview form brings up the LDAP configuration form. From top, to bottom, the following fields have to be filled in:

* **Description** – This is a descriptive name for the LDAP connection.
* **Server address** – This is the address at which the Active Directory domain controller server is located. Either an IP address or host name may be used. The address must begin with `ldap://`.
* **LDAP root directory** – This is the root of the LDAP directory that will be read. This usually takes on the form of `DC=<organization>,DC=<location>`, where `<organization>` is the LDAP/ActiveDirectory domain name, and `<location>` is something like "local" or "org". At Mendix, it is "DC=MENDIXDOMAIN,DC=local".
* **Is AD server** – Turn this on if you are authenticating against a Microsoft ActiveDirectory (which is an implementation of LDAP). This enabled some AD specific internal functionality.
* **Is paged search allowed** – Paged search is useful when retrieving large data sets from LDAP, but some LDAP servers have paged search disabled. Leave this enabled until you run into problems related to paging.
* **Username** – This is the username that we will use to read the LDAP server information. You can/should use a service account on the LDAP server for this.
* **Password** – The password matching the username specified in the previous field.
* **LDAP enabled** – Turns on LDAP authentication for this configuration. This means the configuration will be taken into account when synchronizing and authenticating users. After turning on Use Ldap User authentication for at least one configuration, users cannot login on the system with the credentials stored in the application, except when they have the user role MxAdministrator.

At this point, you can use the ‘Test connection’ button to test connectivity to the LDAP server. This will also tell you if the username/password you entered are accepted by the server.

Paths where to find users
	

In this grid you can select the directory from where the users will be imported. Pressing the Browse LDAP button brings up a form which displays the LDAP Root Directory. You can browse for the directory where the users are located now (You may have to click through a number of directories until you find it). If you find a directory which lists the users you want to import as subdirectory, press the Use this directory as import location. It is possible to specify multiple import locations.

If browsing the LDAP somehow doesn’t work, you can use the Manual add button to specify a DN to import users from.

LDAP type
	

Set the type of synchronization that should be done. Depending on this, other relevant configuration options will appear or disappear. The options are:

Import users: Import and synchronize all users based on the configuration. This will make user info available in Mendix

Only authenticate users: This will only authenticate existing Mendix users against the LDAP server, but will not synchronize any information. If a user is not known in Mendix, he cannot login.

Authenticate and create: This will not synchronize users, but if a user that is unknown in Mendix logs in using a valid LDAP authentication, a Mendix user will be created and the user info will be requested from LDAP at that moment.

Map users to
	

This field specifies which objects should be instantiated when creating new users. All descendants of System.User are listed in the dropdown.

Domain suffix
	

This should be the same as the LDAP root directory fields, only concatenated. It is used to authenticate users and will be concatenated with the mendix username to form the LDAP username. At Mendix, this results in "@mendixdomain.local.

User roles WITHOUT LDAP authentication
	

This property identifies which userroles are not authenticated against ldap. Users that have at least one of these roles will not be authenticated against LDAP, but will instead use their Mendix app password to login.

Users with the Administrator userrole (Which can be found under Project > Security > Administrator > User role) will never be authenticated against LDAP, regardless of the defined exceptions.

 

User import mapping

The user import mapping tab contains some advanced configuration functionality to create a more specialized mapping. This tab is only used when the LDAP type is set to “import users”. The following settings are available:

Search filter
	

This is the LDAP search filter used to locate users. You won’t usually need to change this.

Login name field
	

The LDAP attribute that will be used as a user login name. This should be an attribute that has a unique value for every user. For AD, this will often be “sAMAccountName”.

Available attributes
	

The LDAP attributes that are available to map to user attributes. Click ‘refresh’ to load this list from the LDAP server.

Custom attribute mapping
	

You can define mappings for other attributes of the user entity which need to be imported from the LDAP server. For each mapping you can specify an LDAP attribute, and a User attribute in which the value will be stored. Note that only attributes of type String can be used as User attribute.

Authentication Configuration

On the authentication configuration tab you will find settings that are used when users must be authenticated in the LDAP server. This tab is only used when the LDAP type is set to “only authenticate users”. The following settings are available:

Credentials validation frequency
	

When and how often the user information should be validated against the LDAP server.

Credentials search filter
	

The filter that will be used to search for an entered username in the LDAP server. You must always include the “[%Username%]” token in this string, which will be replaced with the username that was used for the login attempt. For an AD environment, this will usually be: “(&(objectclass=user)(sAMAccountName="[%Username%]"))”

How to handle multiple matches
	

Specify what must be done when multiple objects are found for the credentials search. Either validate them all (and all must match), or throw an error.

Login name field
	

The LDAP attribute that will be used as a user login name. This should be an attribute that has a unique value for every user. For AD, this will often be “sAMAccountName”.

Available attributes
	

The LDAP attributes that are available to map to user attributes. Included here as a reference for the “login name field” setting. Click ‘refresh’ to load this list from the LDAP server.

Ignore for user types
	

This property identifies which user types are not authenticated against ldap. Users that are of a subtype listed here will not be authenticated against LDAP, but will instead use their Mendix app password to login.

Ignore for user roles
	

This property identifies which userroles are not authenticated against ldap. Users that have at least one of these roles will not be authenticated against LDAP, but will instead use their Mendix app password to login.

Users with the Administrator userrole (Which can be found under Project > Security > Administrator > User role) will never be authenticated against LDAP, regardless of the defined exceptions.

User authentication mapping

On the user authentication mapping tab you will find settings that are used when users must be authenticated and subsequently created from the LDAP server. This tab is only used when the LDAP type is set to “authenticate and create users”. The following settings are available:

Search filter
	

The filter that will be used to search for an entered username in the LDAP server. You must always include the “[%Username%]” token in this string, which will be replaced with the username that was used for the login attempt. For an AD environment, this will usually be: “(&(objectclass=user)(sAMAccountName="[%Username%]"))”

How to handle multiple matches
	

Specify what must be done when multiple objects are found for the credentials search. Either validate them all (and all must match), or throw an error.

Login name field
	

The LDAP attribute that will be used as a user login name. This should be an attribute that has a unique value for every user. For AD, this will often be “sAMAccountName”.

Available attributes
	

The LDAP attributes that are available to map to user attributes. Included here as a reference for the “login name field” setting. Click ‘refresh’ to load this list from the LDAP server.

Credentials validation frequency
	

When and how often the user information should be validated against the LDAP server.

Custom attribute mapping
	

You can define mappings for other attributes of the user entity which need to be imported from the LDAP server. For each mapping you can specify an LDAP attribute, and a User attribute in which the value will be stored. Note that only attributes of type String can be used as User attribute.

LDAP group mapping

The group mapping tab allows you to map LDAP group memberships to Mendix userroles. Click ‘refresh’ to load all available LDAP groups from the server. In the edit screen for a group, you can select one or more roles that will be assigned to each user that is a member of that group. When a user is removed from an LDAP group, the corresponding roles will be removed from the user on the next synchronization.

Cached authentication

For some configuration settings, depending on the validation frequency, user authentication information will be cached. This tab contains an overview of cached information for the current LDAP server.

Test, gather data from AD

This tab allows you to import and inspect data from the LDAP server for testing purposes. This allows you to see how Mendix will receive data and can help you in properly configuring the server configuration.

 

Common Errors

 

My users are not authenticated against LDAP 

1. Check your projects after startup action (Project > Settings > Server > After Startup). It should point (indirectly) to Ldap.ASu_StartLdap.

2. Make sure at least one server configuration exists, and it has a check in the 'LDAP enabled' box.

3. Make sure the user has no Administrator role, or any role which is defined as exception in one of your server configurations.

 

The 'user entity' dropdown in the server configuration form is empty. 

Probably you were navigation to the Ldap.LdapServers_Overview form directly instead of using the  Ldap.OpenLdapServersOverview microflow in your navigation. This microflow makes sure the domain model is analyzed before opening the appropriate forms.

 

Spring LDAP exceptions 

com.mendix.core.CoreException: com.mendix.core.CoreException: com.mendix.core.CoreException: org.springframework.ldap.PartialResultException: [LDAP: error code 10 - 0000202B: RefErr: DSID-031006E0, data 0, 1 access points
    ref 1: 'com.mendix.exchange'

You probably specified an incorrect LDAP Root directory