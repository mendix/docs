---
title: "Project Security"
parent: "project"
---
{{% alert type="warning" %}}

For more general information on security, see [Security](security).

{{% /alert %}}

In the project security dialog you can configure security settings related to the project, such as the security level, user roles, administrator access, and anonymous users.

## Security Level

### Security level

The security level defines how security is applied and which security settings need to be configured.

| Value | How security is applied | Which security settings need to be configured |
| --- | --- | --- |
| Off | No security is applied. Users do not have to sign in and can access everything. | (none) |
| Prototype / demo | Security is applied to signing in, forms, and microflows. Users can access all data. | Administrator and anonymous access, user roles, and security for forms and microflows. |
| Production | Full security is applied. | Administrator and anonymous access, user roles, and security for forms, microflows, entities, and reports. |

{{% alert type="warning" %}}

Security levels 'Off' and 'Prototype / demo' are only allowed in development and test; for acceptance and production you need to use the 'Production' security level and configure all security settings accordingly.

{{% /alert %}}{{% alert type="info" %}}

All other security settings are only visible if the security level is 'Prototype / demo' or 'Production'.

{{% /alert %}}

### Check security (only for security level Production)

If the security level is production, you can specify whether the consistency of security settings should be checked. For each user role the Modeler checks which forms are accessible, either directly in the menu bar or indirectly by following forms and microflows. For each of those forms, the Modeler checks whether referred attributes and associations are accessible for the current user role. If not, an error is added to the error list. These errors are only shown if there are no other errors.

### Project status

The project status indicates the security status for the current project security level.

| Value | Description |
| --- | --- |
| Complete | All security settings for the current security level have been configured. |
| Incomplete | Some security settings for the current security level need to be configured. See the module status for more information. |

## Module Status

The module status overview shows the security status for each module. It shows the total number of items for which security needs to be configured, as well as the number of items for which security has been configured already. At the 'Prototype / demo' security level, the status of form access and microflow access is shown. Additionally, at the 'Production' security level, the status of entity access and data set access (if applicable) is shown.

## User Roles

Here you can configure the user roles of the project.

See [user role](user-role).

## Administrator

### User Name

The user name of the administrator user that can be used to sign into the application.

_Default value_: MxAdmin

### Password

The password of the administrator user that can be used to sign into the application.

### User Role

The user role of the administrator user that can be used to sign into the application.

## Anonymous Users

### Allow anonymous users

Here you can configure whether anonymous users are allowed to access your application.

| Value | Description |
| --- | --- |
| Yes | Anonymous users are allowed. End-users do not have to sign in to access the application. If the user clicks a button of which the microflow requires a user role other than the anonymous user role, the user is presented with a sign in screen. |
| No | Anonymous users are not allowed. End-users have to sign in to access the application. |

### Anonymous user role

This is the user role that end-users of your application have when they are not signed in.

### Sign-in microflow

When anonymous users are allowed, here you can optionally configure a sign-in microflow. This microflow can be used to transfer data from the anonymous user to the signed-in user. In this microflow the current user is set to the signed-in user.

The sign-in microflow has two parameters.

| Name | Type | Description |
| --- | --- | --- |
| AnonymousUser | Object of entity 'System.User' | The 'User' object of the anonymous user. This object will be automatically deleted after the execution of the sign-in microflow. |
| SignedInUser | Object of entity 'System.User' | The 'User' object of the signed-in user. |

{{% alert type="warning" %}}

Clean up objects that were attached to the anonymous user and that you do _not_ transfer to the signed-in user. Since the anonymous user is deleted after running the sign-in microflow, you can use [delete behavior](associations) to automatically clean objects that were attached to the anonymous user.

{{% /alert %}}

The sign-in microflow is executed when an end-user:

1.  Uses your application without signing in (thus as an anonymous user), and then
2.  clicks a button for which she does not have access, which causes a sign-in screen to appear, and then
3.  signs in to your application.

{{% alert type="info" %}}

An anonymous user in a web shop adds some items to her shopping cart and then clicks the 'Check out' button. A sign-in screen appears, and the user signs in. The sign-in microflow is executed and transfers the shopping cart of the anonymous user to the signed-in user.

{{% /alert %}}

## Password policy

You can specify a number of requirements for passwords. These requirements will be enforced when creating new users or changing passwords of existing users.

### Minimum length

Specifies the minimum length of passwords.

### Require digit

Specifies whether at least one digit is required in passwords.

### Require mixed case

Specifies whether passwords should contain at least one lowercase character and one uppercase character.

### Require symbol

Specifies whether passwords should contain a special symbol, such as tilde (~) or plus.
