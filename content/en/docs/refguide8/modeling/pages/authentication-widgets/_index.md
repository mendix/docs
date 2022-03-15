---
title: "Authentication Widgets"
url: /refguide8/authentication-widgets/
parent: "pages"
menu_order: 55
tags: ["authentication", "widgets", "studio pro", "login", "password"]
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/authentication-widgets.pdf).
{{% /alert %}}

## 1 Introduction

Authentication widgets are used to sign users in and log them out. 

Use a [navigation profile setting](/refguide8/navigation/#authentication) to direct users to the correct authentication page.

The **Authentication widgets** category contains the following widgets:

* [Login ID text box](/refguide8/login-id-text-box/) – allows users to provide a login id for authentication

    ![Login ID Text Box Example](/attachments/refguide8/modeling/pages/authentication-widgets/logid-id-example.png)

* [Password text box](/refguide8/password-text-box/) – allows users to provide a password for authentication

    ![Password Text Box Example](/attachments/refguide8/modeling/pages/authentication-widgets/password-text-box-example.png)

* [Sign-in button](/refguide8/sign-in-button/) – sends a user’s login id and password to the server for authentication
    ![Sign-In Button Example](/attachments/refguide8/modeling/pages/authentication-widgets/sign-in-button-example.png)

* **Sign-out button** – signs the currently signed-in user out. The sign-out button is a button with an on-click event set to **Sign out**. For more information on on-click events, see the [On Click Event & Events Section](/refguide8/on-click-event/). For details on button properties. see [Button Properties](/refguide8/button-properties/).

* [Validation message](/refguide8/validation-message/) – informs a user about authentication failures if any

    ![Validation Message Example](/attachments/refguide8/modeling/pages/authentication-widgets/validation-message-example.png)

## 2 Performing Basic Functions

{{% snippet file="refguide8/performing-basic-functions-widgets.md" %}}

## 3 Read More

* [Page](/refguide8/page/)
* [Pages](/refguide8/pages/)