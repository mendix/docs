---
title: "Invite API"
category: "API Documentation"
---


# Introduction

The Invite API is an [App Service](/refguide6/consumed-app-services) that enables invitation of new users to your AppCloud application directly from the application. You can use it to allow your users to invite others to the application.

{{% alert type="info" %}}

The Invite API will require the EnvironmentUUID and EnvironmentPassword parameters to authenticate and authorize requests; the values for these should come from constants from the AppCloudServices module with the same name. The Mendix Cloud Portal will automatically set these constants; you do not need to set these yourself. For this reason, the Invite API will however only function for applications which use the AppCloudServices module and are deployed through the Mendix Cloud Portal.

{{% /alert %}}

The service is part of the [AppCloudServices module](https://appstore.home.mendix.com/link/app/934/Mendix/AppCloudServices), which is available from the App Store, and it's included in the default themes when creating a new application. Both of these options include a default implementation of the Invite API.

# API Calls

## SendInvite

### Description

Invites someone to start using the application. This person will receive an invitation email with confirmation link; after following the confirmation link the user will gain access to the application. Note that if the invitee has no Mendix account yet, a signup for this will have to be completed as part of accepting the invitation.

### Available in

API Version 1

### Parameters

| Name | Parameter type | Required | Description |
| --- | --- | --- | --- |
| EnvironmentUUID | String | Yes | UUID of the requesting environment. This should be the value of the AppCloudServices.EnvironmentUUID constant, which the Mendix Cloud Portal will fill in automatically. |
| EnvironmentPassword | String | Yes | Password of the requesting environment. This should be the value of the AppCloudServices.EnvironmentUUID constant, which the Mendix Cloud Portal will fill in automatically. |
| InviteeEmailAddress | String | Yes | Email address of the to be invited user |
| InviterEmailAddress | String | Yes | Email address of the user inviting the new user. Based on this address, the Mendix platform will include the name of this user in the invitation email sent to the invitee. Note: The email address of the inviting user must correspond with a user who has access to the application. |
| RoleUUID | String | Yes | UUID of the user role which the invitee should receive on accepting the invitation. This should be the ModelGUID attribute of the corresponding System.UserRole object. |

### Return type

None
