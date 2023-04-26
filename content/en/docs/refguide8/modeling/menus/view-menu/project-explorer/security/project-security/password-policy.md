---
title: "Password Policy"
url: /refguide8/password-policy/
weight: 50
tags: ["studio pro", "password policy", "project security", "security"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/password-policy.pdf).
{{% /alert %}}

## 1 Introduction

You can specify a number of requirements for passwords. These requirements will be applied when creating new users or changing passwords of existing users.

## 2 Password Policy Properties

To set password policy properties, open **Project Security** > the **Password policy** tab:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/project-explorer/security/project-security/password-policy/password-policy-tab.png" >}}

Password policy properties are described in the table below:

| Property           | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| Minimum length     | Specifies the minimum length of a password.                  |
| Require digit      | Specifies whether at least one digit is required in a password. |
| Require mixed case | Specifies whether a password must contain at least one lowercase character and one uppercase character. |
| Require symbol     | Specifies whether passwords must contain at least one special symbol. The following characters are considered symbols: <br /> <code> ` ~ ! @ # $ % ^ & * ( ) - _ = + [ { ] } \ </code> |

## 3 Read More

* [Project Security](/refguide8/project-security/)
* [User Roles](/refguide8/user-roles/)
* [Administrator](/refguide8/administrator/)
* [Demo Users](/refguide8/demo-users/)
* [Anonymous Users](/refguide8/anonymous-users/)
