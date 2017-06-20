---
title: "API Documentation"
space: "API & SDK"
description: "The Mendix platform API documentation is divided into sections such as Runtime, Client, Feedback, and Deploy."
---

The API documentation is divided into the sections described below.

## Runtime API

Extend your application model using Java. All functionality and information from both the application model and Mendix Runtime is accessible via these APIs.

*   [Mendix 7 Server Runtime](https://apidocs.mendix.com/7/runtime/)
*   [Mendix 6 Server Runtime](https://apidocs.mendix.com/6/runtime/)
*   [Mendix 5 Server Runtime](https://apidocs.mendix.com/5/runtime/)
*   [Mendix 4 Server Runtime](https://apidocs.mendix.com/4/runtime/)
*   [Mendix 3 Server Runtime](https://apidocs.mendix.com/3/runtime/)

## Client API

Enrich the user interface of your applications by building on top of our web client APIs. Use standard web technology in combination with our powerful APIs to build any widget you want.

*   [Client API Mendix 7](https://apidocs.mendix.com/7/client/)
*   [Client API Mendix 6](https://apidocs.mendix.com/6/client/)
*   [Client API Mendix 5](https://apidocs.mendix.com/5/client/)
*   [Client API Mendix 4](https://apidocs.mendix.com/4/client/)
*   [Client API Mendix 3](https://apidocs.mendix.com/3/client/)

## Stories API

Extend the requirements and project management capabilities of Mendix, or connect 3rd party service management and project management tools.

*   [Stories API](stories-api)

## Feedback API

Build on top of the feedback management functionality of the Mendix App Platform, or connect your own feedback gathering tool.

*   [Feedback API](feedback-api)

## Projects API

The Projects API allows you to programmatically create a project in your company space and move working copies between the Team Server and the Model Server.
*   [Project API](projects-api)

## User Management API

Integrate your company's user management systems with the Mendix App Platform. Create and manage user accounts and security groups, and then define group policies for your applications.

*   [User Management API](user-management-api)

## Single Sign-On API

The Mendix Single Sign-On system is based on OpenID. Learn how to connect your (non-Mendix) app to the Mendix Identity Provider.

*   [SSO API](single-sign-on-api)

## Build API

Create and manage deployment packages using our build server. You will need information from the Team Server API as input for these API calls.

*   [Build API](build-api)

## Deploy API

Manage application environments in our public cloud. Retrieve status, start, and stop applications, or deploy and transport new model versions to application environments. Use the Build API to create and manage deployment packages.

*   [Deploy API](deploy-api)

## Team Server API

Retrieve information (branches, revisions) about application models stored in Team Server. You always access an application model via the context of an application (see the Deploy API for more information about retrieving applications and application identities).

*   [Team Server API](team-server-api)

## Profile Service API

Retrieve the profile information of your applications' users from the Mendix platform, so they do not have to fill in their profile for every new app.

Part of the AppCloudServices module.

*   [Profile Service API](profile-api)

## Invite API

Invite new users directly from your applications, or allow your existing users to do so themselves.

Part of the AppCloudServices module.

*   [Invite API](invite-api)

## Permissions API

Retrieve the user roles of your applications' users, so you can grant them the intended access level to the application.

Part of the AppCloudServices module.

*   [Permissions API](permissions-api)

## Platform SDK

The Platform SDK is an open source TypeScript-based and JavaScript-based SDK that, through the Model API, provides access to the inner workings of your Mendix apps.

*   [Platform SDK](https://apidocs.mendix.com/platformsdk/latest/index.html)

## Model SDK

The Model SDK enables you to modify your Mendix app, and is used as part of the Platform SDK.

*   [Model SDK](https://apidocs.mendix.com/modelsdk/latest/index.html)

## Sprintr deeplinks

If you want to provide links directly to a specific page on Sprintr the following deeplinks can be used:

Specific app: https://sprintr.home.mendix.com/link/project/<appID>
Stories overview for app: https://sprintr.home.mendix.com/link/capture/<appID>
Specific story ID: https://sprintr.home.mendix.com/link/story/<storyID>
Feedback for app: https://sprintr.home.mendix.com/link/feedback/<appID>
Specific feedback item: https://sprintr.home.mendix.com/link/showfeedback/<feedbackItemNr>
Environments for app: https://cloud.home.mendix.com/link/deploy/<appID>
Metrics for app: https://cloud.home.mendix.com/link/metrics/<appID>
Alerts for app: https://cloud.home.mendix.com/link/monitor/<appID>
Logs for app: https://cloud.home.mendix.com/link/logs/<appID>
