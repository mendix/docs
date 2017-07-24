---
title: "Security"
category: "Modeler"
---


Security in Mendix has two sides: you want different people to see different parts of your application and you want to prevent unauthorized access. Both of these can be managed from the Modeler. Access to forms, data and microflows can be limited to authorized users.

## Security Levels

If you want full security, you need to explicitly give access to forms, entities and microflows before someone can access them. By default, no one can access anything. To make it easier to create prototypes and demos there are security levels that require less security settings than are needed for a production system.

See [Project Security](project-security) for a description of the security levels.

## Project versus Module Security

At the level of a project some global settings can be specified: the security level, the administrator account and whether or not to allow anonymous access.

See [Project Security](project-security).

Most of the security settings take place at the module level. This has the advantage that a module can specify its own security and can be distributed and reused in other projects. Access to forms, entities, microflows and data sets can be configured.

See [Module Security](module-security).

## User Roles Versus Module Roles

An end user in a Mendix application has one or more user roles. These roles can be assigned from within the client when creating or editing a user. User roles are at the level of a project and can be edited in the [Project Security](project-security) form.

See [User Roles](user-roles).

Each module defines its own set of module roles and you only have to specify security within a module in terms of those module roles. An e-mail module maybe has two module roles, one for normal user and one for an administrator; other modules may have just one or more than two module roles depending on the requirements for those modules.

See [Module Role](module-role).

A user role is a combination of module roles. A user that signs into the system gets the access rights of all of his or her user roles and indirectly to the module roles that are contained by those user roles.

Let us say you have project with two modules: System, ProjectManagement (PM). The PM module has three module roles: TeamMember, TeamLeader and Administrator. And let us say that in this case, we only need two user roles because we do not need the distinction between team leaders and administrators. You define those two user roles and assign module roles to them. The table below shows which module roles are contained within the user roles. Note: that you always need at least the User role in System.

<table><thead><tr><th class="confluenceTh">User Role 'TeamMember'</th><th class="confluenceTh">User Role 'TeamLeader'</th></tr></thead><tbody><tr><td class="confluenceTd">System.User</td><td class="confluenceTd">System.User</td></tr><tr><td class="confluenceTd">ProjectManagement.TeamMember</td><td class="confluenceTd">ProjectManagement.TeamLeader</td></tr><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">ProjectManagement.Administrator</td></tr></tbody></table>

## Entity Access Versus Form Access

Per entity you can specify who can read or write what members (attributes and associations) under what circumstances. Using XPath constraints you can express powerful security behavior; e.g. "an employee can only see orders created by the department he is a part of".

Per form you can specify who can open it from navigation. The menu bar is even optimized so that only those forms are visible that the user has access to.

A combination of entity access and form access is necessary because entities can also be accessed from microflows and custom widgets. Furthermore, you can express more advanced security through entity access.

See [Entity Access](module-security).
