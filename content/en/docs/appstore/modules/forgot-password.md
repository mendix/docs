---
title: "Forgot Password"
url: /appstore/modules/forgot-password/
category: "Modules"
description: "Describes the configuration and usage of the Forgot Password module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "forgot password", "password", "login", "credentials", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Forgot Password](https://marketplace.mendix.com/link/component/1296/) module enables the users to sign up and also to reset their password.
With this module, the end-user can enter their email address, and an email will be sent with a confirmation link. The end-user then opens the link and gets the option to reset their password in both scenarios(Sign up and Forgot password).

There are three versions of the Forgot Password module, depending on whether you are using Mendix Studio Pro version 7, 8, or 9. These all work in the same way, and require the same dependencies specified below.

### 1.1 Dependencies {#dependencies}

* [Email with Templates](/appstore/modules/email-with-templates/)
* [Deep Link](/appstore/modules/deep-link/)
* [Encryption](/appstore/modules/encryption/)
* [Model Reflection](/appstore/modules/model-reflection/)

## 2 Installation

* Import ‘ForgotPassword’ module into your app
* Add dependencies as listed in previous section from the Marketplace
* Configurations need to done in settings tab 
    * Add 32 length character value for Encryption.EncryptionKey constant
        {{< figure src="/attachments/appstore/modules/forgot-password/encryption-key.png" >}}
    * Add startup microflow(“Deeplink.StartDeeplink”) on Runtime tab of settings as shown below 
        {{< figure src="/attachments/appstore/modules/forgot-password/after-startup.png" >}}
* Configurations in App security tab 
    * Create a ‘Guest’ role in ‘MyFirstModule’  
        {{< figure src="/attachments/appstore/modules/forgot-password/guest-role.png" >}}
    * Provide the permissions for the user roles by referring to the image 
        {{< figure src="/attachments/appstore/modules/forgot-password/user-role-permissions.png" >}}    
    * Allow Anonymous user
        {{< figure src="/attachments/appstore/modules/forgot-password/allow-anonymous.png" >}}    
* Set the target of User role ‘Guest’ to ‘Nav_GuestHomePage’ microflow of ForgotPassword module which either show the **LoginPage** or trigger the deep link process on Role based home pages tab in Navigation
    {{< figure src="/attachments/appstore/modules/forgot-password/role-based-home.png" >}}
* Configure the menu as shown below in Navigation tab 
        {{< figure src="/attachments/appstore/modules/forgot-password/navigation-tab.png" >}}
* Run the application and you will be able to see login page. Login as ‘demo_administrator’ from demo_users to configure ForgotPassword on UI 
* Make sure to configure or validate SMTP settings
* Click on ‘Create email template’ on ‘Reset Password Email’ tab and provide the details and do the same for ‘Signup Email’ 
        {{< figure src="/attachments/appstore/modules/forgot-password/email-template.png" >}}
* Click on ‘Create deeplink’ so that deep link will be created on ‘Deeplink’ tab 
        {{< figure src="/attachments/appstore/modules/forgot-password/create-deeplink.png" >}}
        {{< figure src="/attachments/appstore/modules/forgot-password/configure-deeplink.png" >}}
* Logout and go back to login page and click on ‘Signup’ button. Enter your name and mail ID and click on send button. You will get an e-mail with a link and get a popup page on UI  
        {{< figure src="/attachments/appstore/modules/forgot-password/test-signup.png" >}}
        {{< figure src="/attachments/appstore/modules/forgot-password/email-example.png" >}}
* When you open the link in the browser, a pop up page opens and you can reset your password. 
        {{< figure src="/attachments/appstore/modules/forgot-password/reset-password-page.png" >}}

## 3 Upgrading from Mendix Version 8 to Mendix Version 9

To convert from Mendix 8.18.x to Mendix 9.12.5 or above, follow the steps below from within Studio Pro: 

*Note: When you were using Forgot Password in Mx8, the dependencies of Forgot Password module should be of the latest versions compatible with Mx8 version*

1. Open your app in Mendix 9.12.5 or above and allow it to be upgraded
2. Import the ‘Forgot Password’ module of Mx9 version
3. You can see 4 errors in the Errors tab
    {{< figure src="/attachments/appstore/modules/forgot-password/upgrade-errors.png" alt="Four CE1613 errors in the error tab" >}}
4. Open the page of one of the errors and now change the (master) layout to Atlas_TopBar(Atlas_UI_Resources)
    {{< figure src="/attachments/appstore/modules/forgot-password/change-layout.png" >}}
5. Now 2 errors will be resolved and you are left with 2 errors. Open the page of error and again change (master) layout to Atlas_TopBar(Atlas_UI_Resources) 
 