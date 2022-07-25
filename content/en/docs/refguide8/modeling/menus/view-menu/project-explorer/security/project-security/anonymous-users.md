---
title: "Anonymous Users"
url: /refguide8/anonymous-users/
weight: 40
tags: ["studio pro", "anonymous users", "project security", "security"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/anonymous-users.pdf).
{{% /alert %}}

## 1 Introduction

You can use anonymous users to allow end-users access your application without having to sign in. You can restrict the data that anonymous users can view and access by assigning a specific user role to them. 

## 2 Anonymous Users Properties

Open **Project Security** > the **Anonymous users** tab to access the properties:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/project-explorer/security/project-security/anonymous-users/anonymous-users-tab.png" >}}

The properties of anonymous users are described in the table below:

| Property              | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| Allow anonymous users | When **Yes** is selected, anonymous users are allowed. End-users do not have to sign in to access the application. <br />When **No** is selected, anonymous users are not allowed. End-users have to sign in to access the application. |
| Anonymous user role   | The user role that end-users of your application have when they are not signed in. This tells the application which role should be automatically applied to anonymous users who access the app. The **Allow anonymous users** property should be set to **Yes** to select an anonymous user role. |

## 3 Read More

* [Project Security](/refguide8/project-security/)
* [User Roles](/refguide8/user-roles/)
* [Administrator](/refguide8/administrator/)
* [Demo Users](/refguide8/demo-users/)
* [Password Policy](/refguide8/password-policy/)




