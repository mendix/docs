---
title: "Permissions API"
category: "API Documentation"
---

## 1 Introduction

The Permissions API is an [App Service](/refguide/consumed-app-services) that enables retrieving the [user roles](/refguide/user-roles) a specific user has in your application. There are several ways in which the roles granted to a user in an application can be changed:

* A role configured for a user through the [Invite API](invite-api) can be edited via that API.
* A user may be granted roles through a group policy for a [security group](/developerportal/company-app-roles/users#security-groups) in which they are a member. Group policies define a specific set of user roles to be granted to members of the security group to which the policy applies for a specific environment. Security group membership can be changed by either the Company Admin or via the [User Management API](user-management-api) .

{{% alert type="info" %}}

The Permissions API will require the EnvironmentUUID and EnvironmentPassword parameters to authenticate and authorize requests; the values for these should come from constants from the AppCloudServices module with the same name. The Mendix Developer Portal will automatically set these constants; you do not need to set these yourself. For this reason, the Permissions API will however only function for applications which use the AppCloudServices module and are deployed through the Mendix Developer Portal.

{{% /alert %}}

The service is part of the [AppCloudServices module](https://appstore.home.mendix.com/link/app/934/Mendix/AppCloudServices), which is available from the App Store, and it's included in the default themes when creating a new application. Both of these options include a default implementation of the Permissions API.

## 2 API Calls

### 2.1 GetRolesForOpenID

#### 2.1.1 Description

Retrieves the user roles for a specific user, based on their OpenID; this will return a list of AppRole objects representing the user roles the user has.

{{% alert type="info" %}}

Note that a request will return a list of [non-persistable objects](/refguide/persistability). It's up to the implementer of the Permissions API to use these to create a database representation of the roles the user has in the application.

{{% /alert %}}

#### 2.1.2 Available In

API Version 1.

#### 2.1.3 Parameters

| Name | Parameter type | Required | Description |
| --- | --- | --- | --- |
| OpenID | String | Yes | OpenID of the user for which you are retrieving the roles. |
| EnvironmentUUID | String | Yes | UUID of the requesting environment. This should be the value of the AppCloudServices.EnvironmentUUID constant, which the Mendix Developer Portal will fill in automatically. |
| EnvironmentPassword | String | Yes | Password of the requesting environment. This should be the value of the AppCloudServices.EnvironmentUUID constant, which the Mendix Developer Portal will fill in automatically. |

#### 2.1.4 Return type

List of PermissionsAPI.AppRole objects.

![](attachments/18449570/18582265.png)

##### 2.1.4.1 AppRole

| Attribute | Type | Description |
| --- | --- | --- |
| UUID | String | UUID of the user role. Using, this the corresponding System.UserRole object can be retrieved as this UUID will match the UserRole's ModelGUID attribute. |
| DisplayName | String | Name of the user role |
