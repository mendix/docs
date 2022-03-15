---
title: "Anonymous Users"
url: /refguide8/anonymous-users/
parent: "project-security"
menu_order: 40
tags: ["studio pro", "anonymous users", "project security", "security"]
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/anonymous-users.pdf).
{{% /alert %}}

## 1 Introduction

You can use anonymous users to allow end-users access your application without having to sign in. You can restrict the data that anonymous users can view and access by assigning a specific user role to them. 

## 2 Anonymous Users Properties

Open **Project Security** > the **Anonymous users** tab to access the properties:

![](attachments/anonymous-users/anonymous-users-tab.png)

The properties of anonymous users are described in the table below:

| Property              | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| Allow anonymous users | When **Yes** is selected, anonymous users are allowed. End-users do not have to sign in to access the application. <br />When **No** is selected, anonymous users are not allowed. End-users have to sign in to access the application. |
| Anonymous user role   | The user role that end-users of your application have when they are not signed in. This tells the application which role should be automatically applied to anonymous users who access the app. The **Allow anonymous users** property should be set to **Yes** to select an anonymous user role. |

## 3 Read More

* [Project Security](project-security)
* [User Roles](user-roles)
* [Administrator](administrator)
* [Demo Users](demo-users)
* [Password Policy](password-policy)




