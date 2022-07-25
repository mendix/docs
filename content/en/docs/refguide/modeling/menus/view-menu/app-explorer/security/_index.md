---
title: "Security"
url: /refguide/security/
weight: 30
tags: ["studio pro", "security"]
---

## 1 Introduction

Security in Mendix has two sides: you want different people to see different parts of your application and you want to prevent unauthorized access. Both of these can be managed from Studio Pro. Access to forms, data and microflows can be limited to authorized users.

{{% alert color="info" %}}
Security in Mendix does not include scanning files that end-users upload or download from your application for viruses and malware. For more information, see the [Scanning Uploaded Files for Malicious Content](/howto/security/best-practices-security/#scanning-for-malicious-content) section in *How to Implement Best Practices for App Security*. 
{{% /alert %}}

## 2 Security Levels

If you want full security, you need to explicitly give access to forms, entities, microflows, and workflows before someone can access them. By default, no one can access anything. To make it easier to create prototypes and demos there are security levels that require less security settings than are needed for a production system.

See [App Security](/refguide/app-security/) for a description of the security levels.

## 3 App vs. Module Security

At the level of an app some global settings can be specified: the security level, the administrator account and whether or not to allow anonymous access.

See [App Security](/refguide/app-security/).

Most of the security settings take place at the module level. This has the advantage that a module can specify its own security and can be distributed and reused in other apps. Access to forms, entities, microflows, workflows, and datasets can be configured.

See [Module Security](/refguide/module-security/).

## 4 User Roles vs. Module Roles {#user-role}

An end-user in a Mendix application has one or more user roles. These roles can be assigned from within the client when creating or editing a user. User roles are at the level of an app and can be edited in [App Security](/refguide/app-security/).

See [User Roles](/refguide/user-roles/).

Each module defines its own set of module roles and you only have to specify security within a module in terms of those module roles. An e-mail module maybe has two module roles, one for normal user and one for an administrator; other modules may have just one or more than two module roles depending on the requirements for those modules.

See [Module Role](/refguide/module-security/#module-role).

A user role is a combination of module roles. A user that signs into the system gets the access rights of all of his or her user roles and indirectly to the module roles that are contained by those user roles.

{{% alert color="info" %}}

Let us say you have an app with two modules: System and ProjectManagement (PM). The PM module has three module roles: TeamMember, TeamLeader and Administrator. And let us say that in this case, we only need two user roles because we do not need the distinction between team leaders and administrators. You define those two user roles and assign module roles to them. The table below shows which module roles are contained within the user roles. Note that you always need at least the User role in System.

| User Role 'TeamMember' | User Role 'TeamLeader' |
| --- | --- |
| System.User | System.User |
| ProjectManagement.TeamMember | ProjectManagement.TeamLeader |
|   | ProjectManagement.Administrator |

{{% /alert %}}

## 5 Entity Access vs. Page Access

Per entity you can specify who can read or write what members (attributes and associations) under what circumstances. Using XPath constraints you can express powerful security behavior; for example, "an employee can only see orders created by the department he is a part of".

Per page you can specify who can open it from navigation. The menu bar is optimized so that only pages that the user has access to are visible. 

A combination of entity access and a page access is necessary because entities can also be accessed from microflows and custom widgets. Furthermore, you can express more advanced security through entity access.

See [Entity Access](/refguide/module-security/).
