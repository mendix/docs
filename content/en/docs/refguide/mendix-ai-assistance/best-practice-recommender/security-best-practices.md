---
title: "Security Recommendations"
url: /refguide/security-best-practices/
description: "Describes the security best practices from Best Practice Recommender, including the best practices for anonymous users."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchors <mxs001-mxsnnn> below are all mapped, so they should not be removed or changed.
---

## Introduction

This document outlines the security best practices provided by [Best Practice Recommender](/refguide/best-practice-recommender/) in Studio Pro.

## Anonymous User Best Practices {#anonymous-users}

This section outlines security issues and Mendix best practices for [anonymous users](/refguide/anonymous-users/). Anonymous users can access an app without signing in, which means that every access right held by the anonymous user role is available to anyone who can reach the URL of the app.

Best Practice Recommender checks the best practices in this section when both of the following conditions are met:

* The [security level](/refguide/app-security/#security-level) of the app is not **Off**.
* **Allow anonymous users** is set to **Yes** in **App Security** > the **Anonymous users** tab.

### Disable Anonymous Users [MXS003] {#mxs003}

Anonymous users are enabled in [App Security](/refguide/app-security/).

Enabling anonymous users removes the ability to attribute actions to an identifiable user, and expands the attack surface to anyone who can reach the URL of the app, without signing in. This may result in unauthorized access to the app and its data.

#### Steps to Fix

To fix the issue, set **Allow anonymous users** to **No** in **App Security** > the **Anonymous users** tab.

This recommendation can be fixed automatically. In the recommendation, click **Fix** to disable anonymous users.

{{% alert color="info" %}}
If anonymous access is a deliberate part of the design of your app, you can suppress this recommendation from the **Best Practice Recommender** pane and use the other best practices in this section to limit what anonymous users can reach.
{{% /alert %}}

### Avoid Granting Anonymous Users Access to Sensitive Entities [MXS004] {#mxs004}

The anonymous user role has read or write access to an entity outside the System module that inherits from a System module entity.

System entities carry identity data, such as user names, email addresses, and role assignments, or arbitrary file content. Unlike ordinary business data, they cannot be safely scoped to an anonymous session with an [XPath constraint](/refguide/xpath-constraints/), because anonymous users have no stable current user to constrain on. Even a constrained access rule risks exposing or substituting the wrong record across sessions, so access should be denied outright rather than constrained.

#### Steps to Fix

To fix the issue, remove the [access rule](/refguide/access-rules/) that grants the anonymous user role access to this entity.

### Do Not Use the Administrator User Role for Anonymous Access [MXS005] {#mxs005}

The user role configured for anonymous access is the same as the user role configured for the [administrator](/refguide/app-security/#administrator).

Anonymous access and administrator access resolving to the same user role is very likely a configuration error that grants anyone who can reach the URL of the app the full access of an administrator, without signing in. This may result in unauthorized access to the app and its data.

#### Steps to Fix

To fix the issue, assign anonymous access to a dedicated [user role](/refguide/user-roles/) that is not the administrator user role.

This recommendation can be fixed automatically. In the recommendation, click **Fix** to create a dedicated **Anonymous** user role and assign anonymous access to it.

{{% alert color="info" %}}
The automatic fix is not applied when a user role named **Anonymous** already exists. In that case, assign anonymous access to a user role that is not the administrator user role yourself.
{{% /alert %}}

### Avoid Granting Anonymous Users Write Access to Persistable Entities [MXS006] {#mxs006}

The anonymous user role has create, update, or delete access to an attribute or association of a [persistable entity](/refguide/persistability/).

Anonymous sessions have no durable, verifiable identity behind them. Any write capability lets an unauthenticated actor create, corrupt, or delete persisted data with no accountability trail.

#### Steps to Fix

To fix the issue, remove the create, update, and delete access that the [access rule](/refguide/access-rules/) grants the anonymous user role.

If anonymous users need to submit one-off input, route it through a non-persistable entity or page variables and validate it server-side, instead of granting direct write access.

### Do Not Let Anonymous Users Manage User Roles [MXS007] {#mxs007}

The user role configured for anonymous access has one or more entries selected under [user management](/refguide/user-roles/#user-management).

User management lets a user role create and manage users for the user roles that it manages. When the anonymous user role manages one or more user roles, an unauthenticated visitor can create accounts for those roles and escalate privileges for themselves or others.

#### Steps to Fix

To fix the issue, remove all entries under user management for the user role that is configured for anonymous access.

This recommendation can be fixed automatically. In the recommendation, click **Fix** to remove all entries under user management for that user role.

### Do Not Share Module Roles Between Anonymous and Other User Roles [MXS008] {#mxs008}

A [module role](/refguide/module-security/) that does not come from the System module is mapped to the anonymous user role and to one or more other user roles.

Reusing access rights for anonymous users that are also used for signed-in users is a high risk and often leads to misconfigured security. Every access rule, page, and microflow that is opened up for the shared module role is silently opened up for unauthenticated visitors as well. As a result, access that is granted to signed-in users later on leaks to anonymous users without anyone revisiting the anonymous access rules.

#### Steps to Fix

To fix the issue, do the following:

1. Remove the mapping, so that the module role is no longer mapped to the anonymous user role.
2. Map the anonymous user role to module roles that are used exclusively for anonymous access. This way, its access rights can be reviewed and changed independently of those of other user roles.

This recommendation can be fixed automatically. In the recommendation, click **Fix** to remove the shared module roles from the anonymous user role.

### Do Not Map Administration Module Roles to the Anonymous User Role [MXS009] {#mxs009}

The anonymous user role is mapped to a module role of the [Administration](/appstore/modules/administration/) module from the Marketplace, such as **Administration.User** or **Administration.Administrator**.

The module roles of the Administration module grant access to sensitive entities, such as **Account**, which holds the credentials and role assignments of the users of the app. The **Administration.Administrator** module role additionally grants the full administrative capability of managing accounts and their user roles. Granting any of this to the anonymous user role exposes it to anyone who can reach the URL of the app, without signing in.

#### Steps to Fix

To fix the issue, remove the mappings to Administration module roles from the anonymous user role.

This recommendation can be fixed automatically. In the recommendation, click **Fix** to remove the Administration module roles from the anonymous user role.

### Constrain the Read Access of Anonymous Users [MXS010] {#mxs010}

The anonymous user role has read access to a [persistable entity](/refguide/persistability/) through an [access rule](/refguide/access-rules/) that has no [XPath constraint](/refguide/xpath-constraints/).

Without an XPath constraint, the access rule returns every object of the entity to every anonymous session. Data that was only ever meant to be visible to the visitor who submitted it, such as problem reports or form submissions, then becomes readable by all unauthenticated visitors. This is the most common way in which anonymous access leaks the data of unrelated users.

#### Steps to Fix

To fix the issue, add an XPath constraint to the access rule, so that it only returns the objects that the current anonymous session is allowed to see, for example by constraining on the owner of the object. If the objects cannot be narrowed down to the current session, remove the read access instead.

{{% alert color="info" %}}
This best practice is not reported for an access rule that also grants access to other user roles, because an XPath constraint applies to every module role of the access rule. Such an access rule is reported under [Do Not Share Module Roles Between Anonymous and Other User Roles](#mxs008) instead.
{{% /alert %}}

## Read More

* [Best Practice Recommender](/refguide/best-practice-recommender/)
* [Performance Recommendations](/refguide/performance-best-practices/)
* [Anonymous Users](/refguide/anonymous-users/)
* [App Security](/refguide/app-security/)
* [Mendix Best Practices for Development](/refguide/dev-best-practices/)
