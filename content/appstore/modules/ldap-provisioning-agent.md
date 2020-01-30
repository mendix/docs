---
title: "LDAP Provisioning Agent"
category: "Modules"
description: " "
tags: [ ]
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

To successfully connect this application to your Directory Service, configuration is required on both a Connection instance level (per LDAP server you want to manage) and application level (to set up this app itself).

Connection
When starting a new connection a Configuration Wizard pops-up. This wizard will guide you through the process of configuring the connection. The wizard consists of 6 steps which are preceded by a prerequisites step.

Prerequisites
Before getting started with the wizard it is advised to have the following information ready beforehand:

- Directory Service service account, please create a separate service account to connect this application to the Directory Service. We advise you to not use a user account for this as this application will be dependent on the availability of this account.

- Mendix API Key, the Mendix API Key and Mendix User combination will be used when performing REST API calls to Mendix User Management.

1. LDAP Connection
This step directs you to a successful connection with your Directory Service and requires the following input:

- Description:  Description for your own convenience.
- Administrator email address: Error notifications will be send to this address.
- Server address: The address at which the LDAP (Active Directory Domain Controller) server is located. Either an IP address or hostname may be used.
- Username: (Service) Account to connect to the Directory Service.
- Password: Password associated with the user specified in the Username input field.
After filling in the correct credentials you can try them with the ‘Test connection’ button. This should result in a ‘Connection succeeded’ message after which you are able to proceed to the next step.

2. Mendix API Key
The Mendix API key is used when performing REST API calls to the Mendix User Management API. 

To verify if a REST API call is valid, the combination of the API Key and user owning the API key is checked. Every user registered in the Mendix Platform Portal is allowed to create API keys. It’s advised to create a separate Mendix user account for this task. This account needs to have a valid e-mail address in order to receive the confirmation e-mail.

The conditions for the Mendix API key and username combination to qualify to be used with this application, depends on the following set of criteria:
- The role ‘member manager’ must be assigned.
-
  Email domain of the user account should be equal to the email domain of the users to be imported from the Directory Service.

3. LDAP User directories
This step is to define from which LDAP directories users and groups should be read. The LDAP Root directory is required and used as a starting point to browse through the directory structure.

It’s also possible to enter an LDAP directory manually if it’s already known.
When you experience issues retrieving directories extra checkboxes will appear. You can disable the option stating you are authenticating against an Active Directory. Additionally you can disable if page search is allowed for the Active Directory you are connecting to.

4. Schedule Synchronization Runs
To have a certain connection instance scheduled, you can choose for an hourly, daily or weekly interval. Additionally you can choose at what hour the run should be executed.

5. Edit email templates
Two email templates are associated when you create a new LDAP connection:

- Created Mendix account
An email based on this template will be send when a new user account is created. This email contains a single-use password.

- Error notification
When an unexpected exception occurs, a notification e-mail based on this template will be send to the specified administration e-mail address.

In this wizard step you are able to modify the text as you require. The templates contain a set of tokens. These tokens start with a ‘{%’ and end with a ‘%}’.
When a connection instance is successfully created, you can always change the configuration at a later stage by clicking the instance located in the left-menu.

Application
On application level it is required to configure settings in your cloud slot dashboard(or in you Mendix Business Server when on premise). You can configure these settings when starting your application from the cloud dashboard.

Scheduled events
In order to activate scheduled synchronization of your Directory Service with Mendix User Management you need to enable scheduled event ‘Hourly_event’.

Constants
All constants will be set correctly by default, but there are certain constants you should modify and some you might want to change.

The constant we strongly advice to modify are:
Encryption.EncryptionKey – this constant is default in this application. So it’s very easy for anyone to decrypt passwords using this default key, when the database for some reason is compromised. 

Constant values which might be interesting to modify:
RunningInCloud - Boolean value indicating if the application should act as being in run in Cloud (or on-premise otherwise)
EmailTemplate.CleanupPeriodEmail – Cleans logged sent emails which are older than the value specified (in days)
EmailTemplate.CleanupPeriodEmailLog – Cleans logged exceptions which are older than the value specified (in days)
Synchronization.AdminEmailsEnabled – Set to true if email notifications should be send to the specified administrator emailaddress
Synchronization.EmailFromAddress – Email address which will be used as from address for emails sent by this application.

Synchronization
Synchronization runs are executed from a scheduled event which you can specify in the configuration of a LDAP Connection instance.

You can also choose to start a synchronization with the ‘Synchronize now’ button. Note that synchronizations can only start when the instance is ‘active’. You can activate an instance by clicking the activate button. Click deactivate to disable the instance.

Testing
For the LDAP side, you can get a test LDAP server or use a limited data set from your production LDAP as this app only reads from it.

For the calls to the Mendix Platform, we advise you to create a new test company. This company will need a different email domain in order to register it was a new company, so you will need access to a different domain (@test.mendix.com for example) and a working mailbox to one of these email addresses, in order to do the sign-up. Remember to make create an API key for the correct user and make sure that account is Member Manager.

Troubleshooting
Any change log items causing errors while synchronizing will be skipped. A new synchronization cannot start until all issues of the previous synchronization run are successfully executed.

You can view the details for a failed run, where you can use the resend change log button to retry the change request.
