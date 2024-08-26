---
title: "Security"
url: /refguide/security/
weight: 49
---

## Introduction

Security in Mendix has several aspects which are all covered on this page.

Firstly, you may be working as a team to create the app. You will want to control who is on the team and what each member can do. This is managed in [Apps](https://sprintr.home.mendix.com/). For more information, see [Building an App as a Team](#team) section below. 

Secondly, you will want to control who can access your app once it is running. You will want to prevent unauthorized access to your running application. You may also want different end-users to see different parts of the app, so access to individual pages, data, and microflows can be limited to specific end-users. This is managed from within Studio Pro. For more information, see [App Security Set Up in Studio Pro](#security-in-studio-pro) section below.

There are different ways in which you can set up app authentication, including local authentication and using a federated IdP to provide single sign-on (SSO). For more information, see the [App Authentication](#authentication) section below. 

{{% alert color="info" %}}
Security in Mendix apps does not include scanning files that end-users upload or download from your application for viruses and malware. For more information, see the [Scanning Uploaded Files for Malicious Content](/howto/security/best-practices-security/#scanning-for-malicious-content) section in *How to Implement Best Practices for App Security*. 
{{% /alert %}}

## App Security Set Up in Studio Pro {#security-in-studio-pro}

### Security Levels

If you want your app to be fully secure, you need to explicitly give access to forms, entities, microflows, and workflows before end-users can access them. When you turn production security on, the default is that no one can access anything. To make it easier to create prototypes and demos there are security levels that require less security than are needed for a production system.

For a description of the security levels, see [App Security](/refguide/app-security/).

### App vs. Module Security

At the level of an app some global settings can be specified: the security level, the administrator account, and whether or not to allow anonymous access. For more information, see [App Security](/refguide/app-security/).

Most of the security settings take place at the module level. This has the advantage that a module can specify its own security and can be distributed and reused in other apps. Access to forms, entities, microflows, workflows, and datasets can be configured. For more information, see [Module Security](/refguide/module-security/).

### User Roles vs. Module Roles {#user-role}

An end-user in a Mendix application has one or more user roles. These roles can be assigned from within the client when creating or editing an end-user. User roles are at the level of an app and can be edited in [App Security](/refguide/app-security/). For more information, see [User Roles](/refguide/user-roles/).

Next to this, each module defines its own set of module roles and you only have to specify security within a module in terms of those module roles. An email module maybe has two module roles, one for normal user and one for an administrator; other modules may have just one or more than two module roles depending on the requirements for those modules. For more information, see [Module Role](/refguide/module-security/#module-role).

A user role is a combination of module roles. An end-user that signs into the system gets the access rights of all of their user roles and indirectly to the module roles that are configured for those user roles.

Say, for example, you have an app with two modules: ProjectManagement and System. The ProjectManagement module has two module roles: TeamLeader, TeamMember; and the System module contains User and Administrator module roles. In this case, you would like to define two app user roles, the team leaders and team members so you only need two user roles. You define those two user roles at app level and assign module roles to them. The table below shows which module roles are contained within the user roles. Note that you always need at least the User role in the System module.

| Module Roles for User Role 'TeamMember' | Module Roles for User Role 'TeamLeader' |
| --------------------------------------- | --------------------------------------- |
| ProjectManagement.TeamMember            | ProjectManagement.TeamMember            |
|                                         | ProjectManagement.TeamLeader            |
| System.User                             | System.User                             |
|                                         | System.Administrator                    |

### Entity Access vs. Document Access {#entity-vs-page-access}

You can specify for each entity who can read or write which members (attributes and associations) under what circumstances. Using XPath constraints you can express powerful security behavior (for example, "an employee can only see orders created by the department they are a part of"). Furthermore, you can express more advanced security through [entity access](/refguide/module-security/#entity-access).

You can also configure additional access rules per document (such as a page, microflow, OData), for example, you can specify who can access it. 

## App Authentication {#authentication}

The Mendix platform provides you with three approaches to the authentication of end-users of your app. Depending on your preference you can include modules in your app from the Mendix Marketplace for each of these approaches.

### "Local" Authentication 

The first approach is to have "local" authentication in your app. With this approach, the end-users of your app are managed by your app. End-users are authenticated against their password that is also stored within the app. In this approach the app is self-supporting and independent of any existing IAM (Identity and Access Management) infrastructure. 

The [Administration module](https://marketplace.mendix.com/link/component/23513), which is by default included in Mendix starter apps, contains the management of local users. The Mendix Marketplace also provides modules to also add multi-factor authentication (MFA) to the local login process.

### Authentication via the Mendix Identity Provider

A second approach is to have end-users authenticate via the Mendix Identity Provider through single sign on ([SSO](/appstore/modules/mendix-sso/)) using their Mendix credentials. This is the default option for developers who deploy their application to the Mendix Cloud.

### Authentication via a Third-Party Identity Provider

The third approach is to integrate your app with a third-party Identity Provider (IdP) external to your app.

Customers with an on-premises Active Directory can use Microsoft’s Active Directory Federation Services (ADFS) to get SSO in their Mendix app. If you have this, you can include the platform-supported the [SAML](/appstore/modules/saml/) module in your app. The SAML module can be used with any IdP that supports the SAML 2.0 protocol. 

Mendix also supports the OAuth protocol with the platform-supported [OIDC SSO](/appstore/modules/oidc/) module. It can be used to authenticate to APIs, including APIs from Mendix "back-end" apps which provide services to other apps. And, if your corporate IdP supports OIDC, you can use it to authenticate your employees and automatically grant them roles in your apps.

Mendix applications that are deployed to SAP BTP can have SSO with SAP's IdP. Mendix provides a platform supported [XSUAA connector](/appstore/modules/sap/sap-xsuaa-connector/) to implement this federation in your Mendix app. 

## Building an App as a Team {#team}

If you want to invite your colleagues to build your app, you can manage the **Team** in [Apps](https://sprintr.home.mendix.com/). Only team members who are invited to your app can access it (as a project to collaborate on). You can assign app roles to them. These team member roles define what they can access and change in the app in the backend while developing the app and are different from end-user roles which define what users can access in a running app. For more information, see [Team](/developerportal/general/team/) in the documentation of **Apps**.
