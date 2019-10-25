---
title: "Audit Trail"
category: "Modules"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Forgot Password](https://appstore.home.mendix.com/link/app/1296/) module works in conjunction with other modules and widgets to implement forgot-my-password functions. 

With this module, the end-user can enter their email address, and an email will be sent with a confirmation link. The end-user then opens the link and gets the option to reset their password. 

### 1.1 Dependencies

* [Email with Templates](email-with-templates) module
* [Deep Link](deep-link) module
* [Encryption](encryption) module
* [Model Reflection](model-reflection) module

## 2 Configuration

Once you have downloaded all required modules from the App Store, you can reuse the snippets and microflows from the _Use Me folder.

The page ForgotPasswordConfiguration should be accessible to the administrator only, this snippet allows for configuring the email template, deeplink and shows all open reset password requests.

The configuration page allows you to create the email and deeplink templates that are used by this module. You should NOT create your own templates through the configuration of those modules. By pressing the create button, all default settings will be there to allow you to reset the password. The only thing you still need to do is configure or validate your SMTP settings. 

Sign up and passwordreset are now included into this module.

To disable sign-up remove the sign-up button from the login snippet and emtpy the content of the microflow CreateNewUserFromSignUp.

The microflow: Nav_GuestHomePage is an example for a home page for the anonymous user, this will either show the page:  LoginPage,  or will trigger the deeplink process.

If you choose to use a different homepage or a different homepage microflow you can use the Step1_ShowForgotPasswordPage microflow to be triggered by the anonymous user. This microflow start the reset password function.

This module has also been reviewed by Expert services to prevent any potential vulnerabilities. 