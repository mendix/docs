---
title: "API Documentation"
description: "The Mendix Platform API documentation is divided into sections such as Runtime, Client, Feedback, and Deploy."
frontpage_featured: true
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The API documentation is divided into the sections described below.

## 2 Authentication

Most Mendix Platform APIs require their users to authenticate themselves. This is done by using API keys.

* [Authentication](authentication)

## 3 Build API

Create and manage deployment packages using our build server. You will need information from the Team Server API as input for these API calls.

* [Build API](build-api)

## 4 Client API

Enrich the user interface of your applications by building on top of our web client APIs.

* [Client API](client-api)

## 5 Deploy API

Manage application environments in our public cloud. Retrieve status, start, and stop applications, or deploy and transport new model versions to application environments. Use the Build API to create and manage deployment packages.

* [Deploy API](deploy-api)

## 6 Feedback API

Build on top of the feedback management functionality of the Mendix App Platform, or connect your own feedback gathering tool.

* [Feedback API](feedback-api)

## 7 Invite API

Invite new users directly from your applications, or allow your existing users to do so themselves.

Part of the AppCloudServices module.

* [Invite API](invite-api)

## 8 Permissions API

Retrieve the user roles of your applications' users, so you can grant them the intended access level to the application.

Part of the AppCloudServices module.

* [Permissions API](permissions-api)

## 9 Pluggable Widgets API

Understand pluggable widgets, how they extend app functionality, and how they can be built to interact with Mendix's APIs:

* [Pluggable Widgets API](pluggable-widgets)

## 10 Profile API

Retrieve the profile information of your applications' users from the Mendix Platform, so they do not have to fill in their profile for every new app.

Part of the AppCloudServices module.

* [Profile API](profile-api)

## 11 Projects API

The Projects API allows you to programmatically create a project in your company space and move working copies between the Team Server and the Model Server.

* [Project API](projects-api)

## 12 Runtime API {#runtime}

All functionality and information from both the application model and Mendix Runtime is accessible via the Runtime API.

* [Runtime API](runtime-api)

## 13 Single Sign-On API

The Mendix Single Sign-On system is based on OpenID. Learn how to connect your (non-Mendix) app to the Mendix Identity Provider.

* [SSO API](single-sign-on-api)

## 14 Stories API

Extend the requirements and project management capabilities of Mendix, or connect third-party service management and project management tools.

* [Stories API](stories-api)

## 15 Team Server API

Retrieve information (branches, revisions) about application models stored in Team Server. You always access an application model via the context of an application (see the Deploy API for more information about retrieving applications and application identities).

* [Team Server API](team-server-api)

## 16 User Management API

Integrate your company's user management systems with the Mendix App Platform. Create and manage user accounts and security groups, and then define group policies for your applications.

* [User Management API](user-management-api)

## 17 Webhooks

Webhooks allow you to build or set up Mendix Platform connectors that subscribe to certain events on the Developer Portal. 

* [Webhooks](webhooks-sprints)
