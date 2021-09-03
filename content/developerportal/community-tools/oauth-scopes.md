---
title: "OAuth & Scopes"
category: "Community Tools"
menu_order: 7
tags: ["oath", "profile", "login", "Developer Portal", "scopes"]  
description: "Describes OAuth, authorizations, and scopes as used by Mendix."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
aliases:
    - /developerportal/mendix-profile/oauth-scopes
---

## 1 Introduction

The sections below provide introductory information on how OAuth and scopes work as well as details on scopes generated in the Developer Portal.

## 2 OAuth

OAuth is a standard for access delegation. It is commonly used as a way for users to grant websites or applications limited access (scopes) to their data without providing their credentials. Mendix uses [OAuth 2.0](https://oauth.net/2/).

In other words, OAuth allows a user with an account from one website/application to use those credentials to connect to another website/application. The process generally looks like this:

1. The user goes to the login page of website/application A and clicks the button for signing in with credentials from website/application B.
2. The user is asked to authenticate themselves on website/application B.
3. Website/application B confirms the identity of the user to website/application A.

## 3 Scopes

Once the user is authenticated by website/application B, website/application A has a guarantee of their real identity. In addition, OAuth provides more complex functionality. For example, website/application B can communicate a set of information (for example, the email address or profile picture) and a set of rights to website/application A. This can only happen if the user grants certain rights.

For example, if the user grants website/application A permission to send their profile picture and last name to website/application B (through a specific authorization page), then website/application B can display that information on their website. The scopes are the access rights to that information granted manually by the user during the authentication process.

Here is an example page where a user is asked to accept scopes on their Mendix account so that Wikipedia can access their profile information and display their name:

![Authorize Page](attachments/authorize_page.png) 

## 4 Generated Scopes

The scopes below provide access to data with user consent. They are generated automatically within the Developer Portal.

This information is provided so that you can make an informed decision on whether you want to authorize or cancel the request for access to your personal information or app.

### 4.1 Profile Scope {#profile}

With this scope, a website or application can access the user's basic [profile](index) information as recorded in Mendix. This scope contains the following user data:

* Full name
* Username
* Avatar
* URL of the user's personal website or blog

### 4.2 Email Scope {#email}

With this scope, a website or application has access to the user's email address.

### 4.3 OpenID Scope {#openid}

This is one of the most common scopes. With this scope, website A (for example, Mendix) is informed that website B (for example, Wikipedia) wants to authenticate the user. Website B then receives the user's unique identifier.

### 4.4 Mendix Profile Scope {#mx:user:profile:v1:read}

This scope is an extension of the [profile scope](#profile). With this scope, a website can access the user's Mendix profile for the following user data:

* OpenID2 identifier
* Username
* Display name
* Avatar
* Biography
* Phone number
* Job title
* Name of the company the user belongs to
* Mendix internal identifier of their company
* Department (in their company)
* Location (via their company)
* URL of the user's personal website or blog
* LinkedIn profile
* Twitter account

### 4.5 Create a Mendix Application Scope {#mx:app:create}

This is a Mendix-specific scope that is used by internal Mendix applications as well as by SAP and IBM (as strategic Mendix partners). This scope allows a website/application or partner to create a Mendix application on behalf of the user.

### 4.6 Change the Deployment Cloud Target of a Mendix Application Scope {#mx:app:cloudswitch}

This is a Mendix-specific scope that is used by internal Mendix applications as well as by SAP and IBM (as strategic Mendix partners). This scope allows a website/application to change the platform to which an app will be deployed.
