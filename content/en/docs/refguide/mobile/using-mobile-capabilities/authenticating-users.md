---
title: "Authenticating Users"
url: /refguide/mobile/using-mobile-capabilities/auth-users/
weight: 9
description: "This guide explains how to authenticate users in a mobile app."
---

## Introduction

Native mobile apps often need to authenticate users just like web applications. However, there are some differences between native and web when it comes to authenticating users in Mendix. In this guide, you will learn how to authenticate users in native mobile apps and what to look out for.

## Setting Up User Authentication

To enable user authentication in a native mobile app, you first need to enable [App Security](/refguide/app-security/) by setting the security level to **Prototype** or **Production**.

In a web-based app, you can rely on the provided `login.html` file to handle showing a sign-in form to your users. This is not possible in a native mobile app. Instead, you must model the login page using Mendix. This requires three steps: model the sign-in page, enable anonymous users, and set the role-based homepage for anonymous users to the sign-in page.

You can skip the first step if you are using the [Blank Native App](https://marketplace.mendix.com/link/component/109511) starter template, as the sign-in page has already been created.

### Model the Sign-In Page

To model your native sign-in page, do the following:

1. Create a new native page called *Login* that will be used to show the sign-in dialog box to your users. Use the **SignIn Phone** template under **Forms** to get started quickly:

    {{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/create-signin-page.png" alt="Create sign-in page" class="no-border" >}}

    The page already contains a sign-in form but is missing a data source to store the sign-in information. 

1. Before you will model the data source, make sure to change the new page's layout to **NativePhone_TopBarOnly** to remove the bottom navigation.
1. To model the data source that will store the sign-in form data, start by creating a non-persistent entity in the [Domain model](/refguide/domain-model/) called *Login*. 
1. Add three attributes of type String: **Username**, **Password**, and **ValidationMessage**:

    {{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/login-entity.png" alt="Login entity" class="no-border" >}}

1. Since anonymous users need to edit this entity, you must set the access rights for this entity accordingly. Allow read and write access for all attributes of this entity for anonymous users:

    {{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/entity-access.png" alt="Entity access" class="no-border" >}}

1. To use this custom entity in the sign-in page, you need to create a nanoflow that will serve as the data source. This nanoflow should create an empty **Login** object and return it. Name the *Nanoflow DSS_CreateLoginContext*:

    {{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/data-source-nanoflow.png" alt="Data source nanoflow" class="no-border" >}}

1. Connect the nanoflow to the page by setting the data source of the data view surrounding the sign-in form to it:

    {{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/form-data-source.png" alt="Connect the data source" class="no-border" >}}

Do not fill the contents of the form automatically. Instead connect the Email Address input field to the Username attribute and the Password input field to the Password attribute. Make sure that **Show as password** is set to **true** for the latter. Add a Text below the input fields to show the validation message.

{{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/login-form.png" alt="Finished sign-in form" class="no-border" >}}

1. You need to create second nanoflow to trigger the actual sign in. Change the **On click** action of the **Login** button to **Call a nanoflow** and create a new nanoflow called *ACT_SignInUser*. Make sure the parameter `Login` is passed to the nanoflow.
1. In the nanoflow, call the **Sign in** action (which is bundled inside the [Nanoflow Commons](/appstore/modules/nanoflow-commons/) module). Pass the attributes from the `Login` parameter to the action and store the response in a new variable.

    {{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/sign-in-action.png" alt="Sign-in action" class="no-border" >}}

    1. The response of the **Sign in** action reflects the **HTTP Status** code of the sign-in network request:
        1. If it is 200, then the sign-in was successful. In this case, your app will automatically restart and show the homepage of the user. 
        1. If the response is 401, then the sign in was unsuccessful because either the user is unknown or the password is wrong. 
        1. If the response is 0, then there was a network error.

1. Use the information on responses above to inform your user about the problem by filling the **ValidationMessage** attribute with a meaningful error message. The following shows an example of the finished nanoflow:

    {{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/login-nanoflow.png" alt="Finished sign-in nanoflow" class="no-border" >}}

### Enable Anonymous Users

The **Anonymous users** role allows users use your application without needing to authenticate first. This is needed to let users access the sign-in page before they can use it to authenticate.

Anonymous users are enabled in **App Security**. For more information, see [Anonymous Users](/refguide/anonymous-users/).

### Set Up Role-Based Homepages

Your final step is to set the sign-in page as the home page for anonymous users. This will ensure that if a user is not signed, then they will see the sign-in page instead of your application's other pages.

Role-based homepages are set up in **App Navigation**:

1. Open the **Native mobile** profile.
1. Click on **Edit** next to **Role-based home pages**.
1. Set the created sign-in page as the homepage for the user role **Anonymous**:

    {{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/role-based-homepage.png" alt="Role-based home page" class="no-border" >}}

For more information on role-based homepages, see [Setting a Role-Based Homepage](/refguide/setting-up-the-navigation-structure/#role-based-home-page).

## Read More

* [App Security](/refguide/app-security/)
* [Anonymous Users](/refguide/anonymous-users/)
* [Setting a Role-Based Homepage](/refguide/setting-up-the-navigation-structure/#role-based-home-page)
