---
title: "Authenticating Users"
url: /refguide/mobile/using-mobile-capabilities/auth-users/
weight: 10
description: "This guide explains how to authenticate users in a mobile app."
tags: ["authentication", "mobile"]
---

## 1 Introduction

Native mobile apps often need to authenticate users just like web applications. However, there are some differences when it comes to authenticating users in a native mobile app compared to a web-based app in Mendix. In this guide, you will learn how to authenticate users in native mobile apps and what to look out for.

## 2 Setting Up User Authentication

To enable user authentication in a native mobile app, you first need to enable [App Security](/refguide/app-security/) by setting the security level to Prototype or Production.

In a web-based app, you can rely on the provided `login.html` file to handle showing a sign-in form to your users. This is not possible in a native mobile app. Instead, you must model the login page using Mendix. This requires three steps: Model the sign-in page, enable anonymous users, and set the role-based homepage for anonymous users to the sign-in page.

You can skip the first step if you are using the Blank Native App starter template, as the sign-in page has already been created.

### 2.1 Model the Sign-In Page

Start by creating a new native page called Login that will be used to show the sign in dialog to your users. Use the SignIn Phone template under Forms to get started quickly.

{{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/create-signin-page.png" alt="Create sign-in page" >}}

The page already contains a sign-in form but is missing a data source to store the sign-in information. Before we will model that make sure to change the layout of the newly created page to NativePhone_TopBarOnly to remove the bottom navigation.

To model the data source that will store the sign-in form data, start by creating a non-persistent entity in the [Domain model](/refguide/domain-model/) called Login. Add three attributes of type String: Username, Password, and ValidationMessage.

{{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/login-entity.png" alt="Login entity" >}}

Since anonymous users need to edit this entity, your need to set the access rights for this entity appropriately. Allow read and write access for all attributes of this entity for anonymous users.

{{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/entity-access.png" alt="Entity access" >}}

To use this custom entity in the sign-in page, you need to create a Nanoflow that will serve as the data source. This Nanoflow should create an empty Login object and return it. Call the Nanoflow DSS_CreateLoginContext.

{{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/data-source-nanoflow.png" alt="Data source nanoflow" >}}

Connect the Nanoflow to the page by setting the data source of the Data view surrounding the sign-in form to it.

{{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/form-data-source.png" alt="Connect the data source" >}}

Do not fill the contents of the form automatically. Instead connect the Email Address input field to the Username attribute and the Password input field to the Password attribute. Make sure that Show as password is set to true for the latter. Add a Text below the input fields to show the validation message.

{{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/login-form.png" alt="Finished sign-in form" >}}

You need to create second nanoflow to trigger the actual sign in. Change the On click action of the Login button to Call a nanoflow and create a new nanoflow called ACT_SignInUser. Make sure the parameter Login is passed to the Nanoflow.

In the Nanoflow call the Sign in action, which is part of [Nanoflow Commons](/appstore/modules/nanoflow-commons/). Pass the attributes from the Login parameter to the action and store the response in a new variable.

{{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/sign-in-action.png" alt="Sign-in action" >}}

The response of the Sign in action reflects the HTTP Status code of the sign-in network request. If it is 200 the sign in was successful. In this case, your app will automatically restart and show the homepage of the user. If the response is 401 the sign in was unsuccessful because either the user is unknown or the password is wrong. If the repsonse is 0 there was a network error.

Use this information to inform your user about the problem by filling the ValidationMessage attribute with a meaningful error message. The following shows an example of the finished Nanoflow.

{{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/login-nanoflow.png" alt="Finished sign-in nanoflow" >}}

### 2.2 Enable Anonymous Users

Anonymous users let users use your application without needing to authenticate first. This is needed to let users access the sign-in page before they can use it to authenticate.

Anonymous users are enabled in the App Security. Find out more [here](/refguide/anonymous-users/).

### 2.3 Set Up Role-Based Homepages

The final step is to set the sign-in page as the home page for anonymous users. This will ensure that if a user is not signed in that they will see the sign-in page instead of your application's other pages.

Role-based homepages are set up in the App Navigation. Open the Native mobile profile, click on Edit next to Role-based home pages and then set the created sign-in page as the homepage for the user role Anonymous.

{{< figure src="/attachments/refguide/mobile/native-mobile/authenticating-users/role-based-homepage.png" alt="Role-based home page" >}}

You can read more about role-based homepages [here](/refguide/setting-up-the-navigation-structure/#role-based-home-page).
