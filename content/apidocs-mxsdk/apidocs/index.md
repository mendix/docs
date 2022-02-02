---
title: "API Documentation"
description: "The Mendix Platform API documentation is divided into sections such as Runtime, Client, Feedback, and Deploy."
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The API documentation is divided into the sections described below.

## 2 Authentication

Most Mendix Platform APIs require their users to authenticate themselves. This is done by using API keys.

Continue reading in [Authentication](authentication).

## 3 Build API {#build-api}

To create and manage deployment packages using the Mendix build server, you will need information from the [Team Server API](#team-server-api) as input for these API calls.

For details, see [Build API](build-api).

## 4 Client API

Enrich the user interface of your applications by building on top of the Mendix web Client APIs.

Continue on to the [Client API](client-api).

## 5 Data Hub API

Use these APIs for registering data sources from other business applications.

For details, see [Data Hub API](data-hub-apis).

## 6 Deploy APIs {#deploy-api}

With these APIs, you can manage application environments in the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy), retrieve statuses, start and stop applications, and deploy or transport new model versions to application environments. You will also have to use the [Build API](#build-api) to create and manage deployment packages.

For details, see [Deploy API](deploy-api) and [Deploy API - Version 2](/apidocs-mxsdk/apidocs/deploy-api-2).

## 7 Design Properties API

Learn how design properties work in Atlas UI and beyond with this API. Then, make your own custom design properties.

For details, see [Design Properties API](design-properties).

## 8 Feedback API

Use this API to build on top of the [feedback management](/developerportal/collaborate/feedback) functionality of the Mendix Platform and connect your own feedback gathering tool.

For details, see [Feedback API](feedback-api).

## 9 Model SDK & Platform SDK

Use these SDKs to gain access to the inner-workings of a Mendix app.

For details, see [Model SDK & Platform SDK](model-platform-sdk).

## 10 Permissions API

With this API, you can retrieve the [user roles](/refguide/user-roles) of your application users so you can grant them specific access levels to the application.

For details, see [Permissions API](permissions-api).

## 11 Pluggable Widgets API

This API helps you to understand pluggable widgets, how they extend app functionality, and how they can be built to interact with Mendix's APIs.

For details, see [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets).

## 12 Projects API

This API allows you to programmatically create an app in your company space and move working copies between the [Team Server](/developerportal/collaborate/team-server) and the Model Server.

For details, see [Project API](projects-api).

## 13 Runtime API {#runtime}

All the functionality and information from both the application model and [Mendix Runtime](/refguide/runtime) is accessible via this API.

Continue on to the [Runtime API](runtime-api).

## 14 Stories API

Use this API to extend the [requirements and project management](/developerportal/collaborate/stories) capabilities of the Mendix Platform, or connect third-party service management and project management tools.

For details, see [Stories API](stories-api).

## 14 App Repository API

This API enables retrieving information (branches, commits) of application models stored in our team server.

For details, see [App Repository API](app-repository-api).

## 16 Team Server API {#team-server-api}

This API enables retrieving information (branches, revisions) about application models stored in Team Server. You always access an application model via the context of an application (for more information about retrieving apps and app identities, see [Deploy API](#deploy-api)).

For details, see [Team Server API](team-server-api).

## 17 User Management API

Use this API to integrate your company's user management systems with the Mendix Platform. You can then create and manage user accounts and groups as well as define group policies for your applications.

For details, see [User Management API](user-management-api).

## 18 Webhooks

Webhooks allow you to build or set up Mendix Platform connectors that subscribe to certain events on the [Developer Portal](/developerportal/).

Continue reading in [Webhooks](webhooks-sprints).
