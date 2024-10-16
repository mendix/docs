---
title: "LDAP"
url: /appstore/modules/ldap/
description: "Describes the configuration and usage of the LDAP module, which is available in the Mendix Marketplace."
##If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the marketplace.
---

## Introduction

The [LDAP](https://marketplace.mendix.com/link/component/210270) module is a client-side implementation of the Lightweight Directory Access Protocol (LDAP) to allow your app to communicate with an LDAP server. It can be used in a Mendix app to synchronize end-users, their group memberships, and their status from an LDAP server such as Microsoft AD.

You can also use the LDAP module to validate usernames and passwords for authentication purposes. However, the recommended option for end-user authentication is to use the [OIDC SSO](https://marketplace.mendix.com/link/component/120371/Mendix/OIDC-SSO) or [SAML](https://marketplace.mendix.com/link/component/1174/Mendix/SAML) module. Your app could, for example, use LDAP for user synchronization in combination the SAML module to authenticate your app’s end-users.

This document doesn’t explain LDAP in detail. We assume that, if you want to use LDAP, you have a basic understanding of LDAP concepts and how end-users are organized in your LDAP server.

### Typical Usage Scenarios

You will typically use the LDAP module when you are building Mendix apps that you want to deploy on-premises rather than in the cloud. In the on-premises scenario, the end-users for your app may be stored in an on-prem Microsoft Active Directory or another user store that supports the LDAP protocol. This makes the LDAP module interesting for Mendix customers that are using [On-Premises](/developerportal/deploy/on-premises-design/) or [Mendix for Private Cloud](/developerportal/deploy/private-cloud/) deployment models.

#### Synchronize End-Users of a Mendix App with LDAP

You may want to synchronize the end-users stored in your Mendix app with those on an LDAP server for the following reasons:

* Syncing the end-user’s status. If the end-user is deactivated in the LDAP server, you may want the same end-user to be deactivated in your app as well, preventing the end-user from signing into the app (using whichever authentication method you choose). Having fewer active end-users in your app may also reduce the licensing cost of your Mendix app.

* Provisioning (new) end-users in your app before their first sign in. This could allow your app’s logic to assign tasks to end-users who have not yet signed in, or otherwise make use of data about them.
    With the OIDC SSO or SAML module alone, end-users are not provisioned in your app until their first sign in as it uses Just In Time (JIT) user provisioning.

#### Authentication of End-Users

When using LDAP to control authorization, in other words assigning an end-user of your app a specific user role depending on the membership of a group in your LDAP directory, you do not have to use it for authentication as well.

If you are building a Mendix app for use by employees, you may want to use LDAP to authenticate the app’s end-users with your on-premises Microsoft Active Directory.

For Web SSO, Mendix recommends using the OIDC SSO and SAML modules as the most up-to-date mechanism which include, for example, two-factor authentication (2FA). If, however, your Identity Provider (IDP) doesn’t support the OpenId Connect or SAML protocols, you may need to use the LDAP protocol instead. While LDAP provides basic checking of a username/password combination using a back-end API call, it doesn’t allow for 2FA or provide options to delegate authentication.

Another alternative is to use local authentication, storing the username and password within your app.

### Features

The LDAP module has the following features for end-user synchronization:

* Import end-users into your app from the LDAP server
* Import groups from the LDAP server, which can be mapped to user roles in your Mendix app
* Deactivate end-user accounts in your application if they are removed from the LDAP server
* Import end-users from multiple LDAP servers
* Supports LDAPS (LDAP over SSL)

The LDAP module also has the following features if SSO via SAML or OIDC is not possible.

* Authenticate end-users against the LDAP server
* Provision end-users into your app when they sign in for the first time (JIT user provisioning) if you are not using the user-synchronization features
* Preventing end-users from signing in with local accounts by enabling LDAP authentication (except for end-users with the **Administrator** role or a role specified in **User roles WITHOUT LDAP authentication**)

### Dependencies

This module is dependent on the following additional modules – make sure they are also present in your app and configured properly:

* [Community Commons Functions Library](/appstore/modules/community-commons-function-library/)
* [Encryption](/appstore/modules/encryption/)
* [Administration](/appstore/modules/administration/)

### Limitations

The LDAP module has the following limitations:

* Updating data on the LDAP-server through a Mendix app is not supported. The module is designed so that the LDAP server is leading, so no changes are submitted to the LDAP server.
* It does not support ‘Delta syncs’ which only apply changes. For example, it doesn’t include logic for using the `When Changed` attribute of Microsoft Active Directory (AD) to do a partial sync. The LDAP module does full syncs to ensure proper deactivation of end-users in your Mendix App.
* Occasionally, new end-users will not sync successfully the first time they are included in the synchronization process. They will be synced successfully in subsequent (scheduled) syncs.
* In rare cases and with specific Active Directory structure, the LDAP synchronization fails with LDAP error 12.

## Installation

The following instructions assume that you want the Administrator role in your app to be the administrator of the LDAP functionality. You can choose a different role if you wish to separate this role from other administration roles.

1. [Add the](/appstore/use-content/) [LDAP](/appstore/use-content/) [module to your app.](/appstore/use-content/)
1. Add the necessary dependencies (as listed in the previous section) from the Marketplace, if they are not already included in your app.
1. Select the **Ldap.ASu_StartLdap** microflow as your **After startup** microflow. If there is already an after startup microflow, do not replace it, but add the **Ldap.ASu_StartLdap** microflow as a sub-microflow in the existing microflow.
1. Add the **Ldap.OpenLdapServersOverview** microflow to your app's navigation. Only give access to administrators.
1. Add the **Ldap.LdapAdmin** module role to your **Administrator** user role. This will grant end-users with the Administrator role access to the LDAP admin functionality.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/ldap/ldap-admin-user-role.png" width="33%" class="no-border" >}}

1. Set the constant **EncryptionKey** in the **Encryption** module to a 32-character string. This key is used when encrypting and decrypting communication with the LDAP server.
1. Your application is now ready to deploy. Follow the [configuration](#configuration) instructions, below, to configure LDAP further.

## Configuration{#configuration}

### Regular Synchronization

If you want to set up regular synchronization between your app and an LDAP server, edit the **Ldap.LdapSync** scheduled event to suit your needs. For example, you can set this event to sync the user base on a nightly basis.

You can also perform a manual synchronization at any time using the **Sync Users** or **Sync users for all servers** buttons.

### Basic Configuration

After enabling LDAP in your app, you need configure it to work with your LDAP server. This is done using various pages within the app to fill in the required information.

Configure your app by doing the following:

1. Run the app.
1. Sign in as an LDAP administrator and open your LDAP servers overview.
1. Click **New** to configure a new LDAP connection. This adds a new server configuration. If you have an existing configuration, you can select it and click **Edit**. It’s also possible to **Delete** a configuration.
1. Fill in the fields on the tabs in the configuration screen. You will need to perform a [Server Configuration](#server-configuration) for each LDAP connection. You then need to perform the following steps to add further information to configure an LDAP connection depending on its type (note that not all steps will be applicable in every configuration):

    1. Fill out the server configuration as described in the next section.
    1. Do one of the following:

        * Fill in the fields on the **User import mapping** tab, then click **Refresh** and create an attribute mapping
        * Fill in the fields on the **Authentication configuration** tab
        * Fill in the fields on the **User authentication mapping** tab

    1. Go to the **LDAP group mapping** tab, click **Refresh**, and specify the group mappings.
    1. Save the configuration.
    1. Execute a full synchronization by clicking **Sync users for all servers** to run the LDAP synchronization using all configurations that are enabled. A scheduled event, **Ldap.LdapSync** is available to perform this automatically.

If you have an existing configuration, you can click **Reload configuration** which will validate the configuration against each LDAP server configuration and remove user credentials for any inactive end-user sessions.

#### Server Configuration {#server-configuration}

Once you have the LDAP configuration form, fill in the following properties to match the setup of your LDAP server:

* **Description** – This is a descriptive name for the LDAP connection so you can identify the different connections you have set up.
* **Server address** – This is the address at which the LDAP server (domain controller) is located. Either an IP address or fully qualified host name may be used (you cannot just use the LDAP server domain name). The format of the address is
    * `ldap://<LDAP server>` for default LDAP.
    * `ldaps://<LDAP server>:636` for LDAPS. In addition, the path to the CA certificate of the LDAP server must be added to the [CA Certificates](/refguide/custom-settings/#CACertificates) in *Runtime Customization*.
* **LDAP root directory** – This is the root of the LDAP directory that will be read. You can select any branch which is set up on your LDAP server to be the root directory for synchronization. Your server will usually provide this in the form `DC=``<organization>,DC=<location>`, where `<organization>` is the LDAP/AD domain name, and `<location>` is something like `local` or `org`.
* **Is AD server** – Turn this on if you are authenticating against a Microsoft AD server. Microsoft AD servers run an implementation of LDAP.
* **Is paged search allowed** – Paged search is useful when retrieving large data sets from LDAP, but some LDAP servers have paged search disabled. Leave this enabled unless you run into problems related to paging.
* **Username** – This is the user name that is used to read the LDAP server information. You should use a service account on the LDAP server for this. This account needs read access to all the user information you need from the LDAP server.
* **Password** – This is the password for the *Username* specified in the previous field.
* **Enable LDAP authentication** – This turns on LDAP authentication for this connection, which means the configuration will be taken into account when synchronizing and authenticating end-users. After turning on LDAP user authentication for at least one configuration, end-users cannot sign in to the system with the credentials stored in the application unless they have a user role which has been excluded from LDAP user authentication, such as Administrator.

If LDAP is enabled for this connection (**LDAP enabled** is checked), you must fill in the following properties:

* **Paths where to find users** – Here, you can select one or more directories from which end-users will be imported. Clicking **Browse LDAP**  shows you the LDAP root directory. You can browse for the directory where the users are located. When you find a directory that lists the users you want to import as a sub-directory, click **Use this directory as import location**. If you cannot browse the LDAP, click **Manual add** to specify a path from which to import users.
* **LDAP type** – Set the type of action that should be done for this LDAP connection. Depending on this type, you will need to add further information as described in [LDAP Type Configurations](#ldap-type-configurations), below. The LDAP type can be one of the following:

    * **Import users** – Import and synchronize the end-users specified the configuration. This will make the end-user information available in your Mendix app.
    * **Only authenticate users** – This will only authenticate existing Mendix end-users against the LDAP server, but it will not synchronize any information. If an end-user is not known in Mendix, they cannot sign in.
    * **Authenticate and create** – This will not synchronize end-users. However, if an end-user that is unknown in Mendix signs in using valid LDAP authentication, a Mendix end-user will be created, and the end-user info will be copied from the LDAP server at that moment.

* **Map users to** – This specifies which entity type objects should be created when creating new end-users. You can choose from all the specializations of **System.User**. For example, you may want to use the `Administration.Account` entity if you are using the Administration module.
* **Domain suffix** – This is a concatenation of the LDAP root directory fields. It is used to authenticate users and will be concatenated to the Mendix user name to form the LDAP user name. For example, the domain suffix at Mendix is `@mendixdomain.local`.
* **User roles WITHOUT LDAP authentication** – This property identifies which user roles are not authenticated against LDAP. End-users that have at least one of these roles will not be authenticated against LDAP, but will instead use their Mendix app password to sign in. Note that end-users with the **Administrator** user role will never be authenticated against LDAP.

#### LDAP Type Configurations{#ldap-type-configurations}

Depending on the **LDAP Type** you have selected, you must add further information on one of the following tabs.

##### User Import Mapping

If the LDAP type is set to **Import users**, you need to configure the data mapping using the **User import mapping** tab.

The following settings are available:

* **Search filter** – This is the LDAP search filter used to locate users. The default is `(Objectclass=user)`.

    When using Microsoft AD you may want to consider using the following filter `(&(objectClass=user)(objectCategory=person)(!(useraccountcontrol:1.2.840.113556.1.4.803:=2)))` to get only active users from AD.

* **Login name field** – This is the LDAP attribute that will be used as a user login name. This must be an attribute that has a unique value for every end-user. For AD, this will often be `sAMAccountName`.
* **Available attributes** – These are the LDAP attributes that are available to map to user attributes. Click **Refresh** to load this list from the LDAP server.
* **Custom attribute mapping** – You can define the mappings for other attributes of the **User** entity, or a specialization of the **User** entity, that need to be imported from the LDAP server. For each mapping, you can specify an LDAP attribute, and the attribute in which its value will be stored. Note that you can only map to attributes of the User entity which are of type string. This mapping is the same as set up in **User Authentication Mapping**.

When using the LDAP module for user synchronization in combination with a separate method of authentication (for example, the SAML module), you typically want to persist a user identifier in your Mendix app (using **Custom attribute mapping**) and use that to identify the end-user that is signed in when receiving the SAML response (the Identifying Assertion). This needs alignment between the LDAP module configuration and the [SAML module configuration](/appstore/modules/saml/#user-provisioning). One option might be to use the user’s email address, but Mendix recommends using an immutable "technical" user identifier. This may be a user attribute different from the username that the user would be entering in a login screen at the IdP which supports SAML.

##### Authentication Configuration

If the **LDAP type** is set to *Only authenticate users*, you must add further information on the **Authentication configuration** tab.

The following settings are available:

* **Ignore for user types** – This property identifies which user types are not authenticated against LDAP. End-users that are of a sub-type listed here will not be authenticated against LDAP, but will instead use their Mendix app password to sign in. This enables you to create specific entities which are specializations of **system.user** and allow users to use these to bypass LDAP authentication (for example but adding them to the **administration.account** entity in the **administration** module).
* **Ignore for user roles** – This property identifies which user roles are not authenticated against LDAP. End-users that have at least one of these roles will not be authenticated against LDAP, but will instead use their Mendix app password to sign in. This is the same property as **User roles WITHOUT LDAP authentication** which can be set up on the basic configuration page.

End-users with the Administrator user role (which can be found under **Project** > **Security** > **Administrator** > **User role**) will never be authenticated against LDAP, regardless of the defined exceptions.

##### User Authentication Mapping{#authentication-mapping}

If the **LDAP type** is set to **Authenticate and create**, you must add further information on the **User authentication mapping** tab.

The following settings are available:

* **Search filter** – This is the filter that will be used to search for an entered end-user name on the LDAP server. You must always include the `[%Username%]` token in this string, which will be replaced with the end-user name that was used for the login attempt. For an AD environment, this will usually be `(&(objectclass=user)(sAMAccountName="[%Username%]"))`.
* **How to handle multiple matches** – This specifies what must be done when multiple objects are found for the credentials search: the options are **validate all** (and all must match) or **throw an error**.
* **Login name field** – This LDAP attribute will be used as the end-user login name. This should be an attribute that has a unique value for every user. For AD, this will often be `sAMAccountName`.
* **Available attributes** – This is a read-only reference list of all the LDAP attributes available on the LDAP server which you can map to end-user attributes. Click **Refresh** to update this list from the LDAP server. It is useful as a reference when choosing the **Login name field** and **Custom attribute mapping**.
* **Credentials validation frequency** – This determines when and how often the user information should be validated against the LDAP server. There are three possible values:

    * on every login – the LDAP module does not cache information and so authenticates using username/password at the LDAP server whenever the module is asked to confirm the end-user credentials
    * only once – the LDAP module creates a local cache record whenever an end-user successfully signs in for first time. After that, the module never authenticates the end-user at the LDAP server again
    * on every login but store during session – the LDAP module creates a local cache record that is valid as long as the end-user has a session. While the session is active, the module does not authenticate the end-user at the LDAP server again. This is useful if your end-users may re-authenticate during a session When the end-user session ends, the cache record is removed so the end-user has to sign in again

* **Custom attribute mapping** – You can define the mappings for other attributes of the User entity that need to be imported from the LDAP server. For each mapping, you can specify an LDAP attribute, and the attribute in which its value will be stored. Note that you can only map to attributes of the User entity which are of type string. This mapping is the same as set up in **User Import Mapping**.

### Additional Configuration

There are three further tabs which you can use with all LDAP connections. They are described below.

#### LDAP Group Mapping

The **Group mapping** tab allows you to map LDAP group memberships to Mendix user roles. Click **Refresh** to load all available LDAP groups from the server. In the editor for a group, you can select one or more roles that will be assigned to each end-user that is a member of that group. When an end-user is removed from an LDAP group, the corresponding roles will be removed from the end-user on the synchronization.

#### Cached Authentication

The **Cached authentication** tab contains an overview of cached information for the current LDAP server. This will only be populated for those connections where the **Credentials** **validation frequency** set on the **Authentication configuration** tab specifies that end-user authentication information will be cached.

#### Testing & Gathering Data from AD

The **Testing & Gathering Data from AD** tab allows you to import and inspect the data your Mendix app will receive from the LDAP server. This can be used for testing purposes as the data is not persisted. You can use this tab to ensure the server is correctly configured, as described in [Server Configuration](#server-configuration), above.

## Testing Your LDAP Connection

Once you have filled in all the required properties in, click **Test connection** to test whether this connection can reach the LDAP server. The message **Connection established** will tell you that you can connect to the server and the end-user name and password have been accepted.

## Common Errors

### My End-users Are Not Authenticated against LDAP

To resolve this error, follow these steps:

1. Check your app's after-startup action (**Project** > **Settings** > **Server** > **After Startup**). It should include the **Ldap.ASu_StartLdap** microflow.
1. Make sure at least one LDAP server connection which is configured for authentication against the LDAP server exists and the **Enable LDAP authentication** box is checked.
1. Make sure the end-user has no Administrator role or any other role that is defined as an exception in one of your active LDAP server connections.

### The User Entity Drop-Down Menu in the Server Configuration Form Is Empty

Ensure you are viewing the **Ldap.LdapServers_Overview** page using the **Ldap.OpenLdapServersOverview** microflow in your navigation. This microflow analyzes the domain model before opening the page.

### Unknown Host Exceptions

If you get an exception such as `java.net.UnknownHostException`, you have probably specified an incorrect LDAP root directory

### List of Active End-users Is Not as Expected

One of the objectives of using user sync is to get the right set of active end-users in your Mendix app. You may find that the actual set of active end-users doesn’t match your expectations. Please check the following configurations:

* The LDAP root directory – selecting the wrong root directory might leave out end-users from the sync, see [Server Configuration](#server-configuration), above
* The search filter – the search filter selects which end-users are synced to your app. See [User Authentication Mapping](#authentication-mapping). The following should be taken into account when reviewing the search filter:

    * Users that are not selected for synchronization are considered deleted and the end-users in your Mendix app are set to deactivated.
    * Users that are selected for synchronization are considered active, although they have inactive status in the LDAP server. The sync with the LDAP server does not include the end-user’s status.
    
* LDAP Group Mapping – if LDAP group mapping is set up and an end-user is not a member of a group for which a user role is mapped, the LDAP module marks the end-user as inactive

#### Invalid LDAP Credentials

Every error which occurs in the LDAP module will display “Invalid LDAP credentials” to the end-user. You can view the underlying error in the app log on log node `Ldap`. If you need more information, you can set this node to TRACE level.
