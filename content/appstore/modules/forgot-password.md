---
title: "Forgot Password"
category: "Modules"
description: "Describes the configuration and usage of the Forgot Password module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "forgot password", "password", "login", "credentials", "platform support"]
draft: true
---

## 1 Introduction

The [Forgot Password](https://appstore.home.mendix.com/link/app/1296/) module works in conjunction with other modules and widgets to implement forgot-my-password functions. 

With this module, the end-user can enter their email address, and an email will be sent with a confirmation link. The end-user then opens the link and gets the option to reset their password. 

### 1.1 Dependencies {#dependencies}

* [Email with Templates](email-with-templates)
* [Deep Link](deep-link)
* [Encryption](encryption)
* [Model Reflection](model-reflection)

## 2 Configuration

Once you have downloaded the required modules listed in the [Dependencies](#dependencies) section above, you can reuse the snippets and microflows from the **Use Me** folder.

The configuration page allows you to create the email and deep link templates that are used by this module. You should NOT create your own templates through the configuration of the Email with Templates and Dep Link modules. By clicking **Create**, all the default settings will be there to allow you to reset the password. The only thing you need to do is configure or validate your SMTP settings. 

Signup and password reset are included into this module. To disable the signup functionality, remove the **Sign up** button from the login snippet and emtpy the content of the **CreateNewUserFromSignUp** microflow.

The **ForgotPasswordConfiguration** page should be accessible to the administrator only. This snippet allows for configuring the email template and deep link, and it shows all the open password reset requests

The **Nav_GuestHomePage** microflow is an example for a home page for an anonymous user. This microflow will either show the **LoginPage** or trigger the deep link process. If you choose to use a different home page or a different home-page microflow, you can set the **Step1_ShowForgotPasswordPage** microflow to be triggered by the anonymous user. This microflow starts the reset password function.
