---
title: "LDAP Provisioning Agent"
category: "Modules"
description: "Describes the configuration and usage of the LDAP Provisioning Agent module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "ldap", "ldap provisioning agent", "platform support"]
draft: true
---

## 1 Introduction

The [LDAP Provisioning Agent](https://appstore.home.mendix.com/link/app/1218/) module is used to synchronize users available in your directory server to the Mendix Platform using the Lightweight Directory Access Protocol (LDAP) and the [Mendix Platform APIs](/apidocs-mxsdk/apidocs/). 

### 1.1 Typical Usage Scenario

Registering and off-boarding users on the Mendix Platform manually requires time and effort. This application takes care of these tasks automatically based on your directory service (for example, Active Directory) or other identity providers providing an LDAP interface.

### 1.2 Requirements

* A free Mendix Cloud slot (or an on-premises equivalent)
* Possibility to connect to the Directory Service using the LDAP

## 2 Configuration

To successfully connect this application to your Directory Service, configuration is required on both a [connection](#connection) instance level (per LDAP server you want to manage) and an [application](#application) level (to set up this app itself).

### 2.1 Connection {#connection}

When starting a new connection, a **Configuration** wizard appears. This wizard will guide you through the process of configuring the connection. 

Before getting started with the wizard, it is advised to have the following information ready:

* A Directory Service service account – you should create a separate service account to connect this application to the Directory Service
	* You should not use a user account for this, as this application will be dependent on the availability of this account
* A Mendix API Key – this key and the Mendix user combination will be used when performing REST API calls to Mendix user management

#### 2.1.1 LDAP Connection {#ldap-connection}

This step directs you to a successful connection with your Directory Service and requires the following input:

* **Description** – a convenient description of your connection 
* **Administrator email address** – error notifications will be sent to this address
* **Server address** – the address at which the LDAP (active directory domain controller) server is located; either an IP address or host name can be used
* **Username** – the (service) account to connect to the Directory Service
* **Password** – the password associated with the user specified in the **Username** input field

After filling in the correct credentials, try them by clicking **Test connection**. This should result in a **Connection succeeded** message, after which you are able to proceed to the next step.

#### 2.1.2 Mendix API Key

The Mendix API key is used when performing REST API calls to the Mendix [User Management API](/apidocs-mxsdk/apidocs/user-management-api). 

To verify if a REST API call is valid, the combination of the API Key and the user owning the API key is checked. Every registered Mendix user is allowed to create API keys (for more information, see [How to Manage API Keys](/developerportal/settings/api-key)). Creating a separate Mendix user account for this task is recommended (this account needs to have a valid email address in order to receive the account confirmation email).

To qualify for use with this application, the Mendix API key and user name combination must meet these conditions:

* The **Member manager** role must be assigned
* The email domain of the user account should be equal to the email domain of the users to be imported from the Directory Service

#### 2.1.3 LDAP User Directories

This step defines from which LDAP directories users and groups should be read. The LDAP root directory is required and used as a starting point to browse through the directory structure. It is also possible to enter an LDAP directory manually if it is already known.

If you experience issues retrieving directories, extra check boxes will appear. You can also disable the option stating you are authenticating against an Active Directory. Additionally, you can disable page search from being allowed for the Active Directory to which you are connecting.

#### 2.1.4 Scheduling Synchronization Runs

To have a certain connection instance scheduled, you can select an hourly, daily, or weekly interval. Additionally, you can choose at what hour the run should be executed.

#### 2.1.5 Editing Email Templates

Two email templates are associated when you create a new LDAP connection:

* Created Mendix account – an email based on this template will be sent when a new user account is created; this email contains a single-use password
* Error notification – when an unexpected exception occurs, a notification email based on this template will be sent to the specified administration email address

In this wizard step, you are able to modify the text as you require. The templates contain a set of tokens. These tokens start with `{%’ and end with a ‘%}`.

When a connection instance is successfully created, you can change the configuration at a later stage by clicking the instance located in the menu on the left.

### 2.2 Application {#application}

On the application level, it is necessary to configure settings in your Mendix Cloud slot dashboard (or in your Mendix Runtime when on-premises). You can configure these settings when starting your application from the cloud dashboard.

#### 2.2.1 Scheduled Events

In order to activate the scheduled synchronization of your Directory Service with Mendix user management, you need to enable the **Hourly_event** scheduled event.

#### 2.2.2 Constants

All constants will be set correctly by default, but there are certain constants you should modify and some you might want to change.

You are strongly advised to modify the following constant:

* **Encryption.EncryptionKey** – this constant is a default in this application, so it is very easy for anyone to decrypt passwords using this key if the database is compromised

You can consider modifying the following constants:

* **RunningInCloud** – this Boolean value indicates if the application should act as if it is being in run in the Mendix Cloud (otherwise, on-premises)
* **EmailTemplate.CleanupPeriodEmail** – this cleans the logged sent emails which are older than the value specified (in days)
* **EmailTemplate.CleanupPeriodEmailLog** – Cleans logged exceptions which are older than the specified value (in days)
* **Synchronization.AdminEmailsEnabled** – set this to true if email notifications should be sent to a specified administrator email address
* **Synchronization.EmailFromAddress** – this email address will be used as the "from" address for emails sent by this application

## 3 Synchronization

Synchronization runs are executed from a scheduled event that you can specify in the configuration of a [LDAP connection](#ldap-connection) instance.

You can also choose to start a synchronization with the **Synchronize now** button. Note that synchronizations can only start when the instance is "active." You can activate an instance by clicking **Activate**. Click **Deactivate** to disable the instance.

## 4 Testing

For the LDAP side, you can get a test LDAP server or use a limited dataset from your production LDAP, as this app only reads from it.

For calls to the Mendix Platform, creating a new test company is recommended. This company will need a different email domain in order to register it was a new company, so you will need access to a different domain (for example, @test.mendix.com) and a working mailbox to one of these email addresses in order to sign up. Remember to create an API key for the correct user and make sure that account has the **Member manager** role.

## 5 Troubleshooting

Any change log items causing errors while synchronizing will be skipped. A new synchronization cannot start until all issues of the previous synchronizations run are successfully executed.

You can view the details for a failed run and click **Resend change log** to retry the change request.
