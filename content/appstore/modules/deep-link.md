---
title: "Deep Link"
category: "Modules"
description: "Describes the configuration and usage of the Deep Link module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "deep link", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Deep Link](https://marketplace.mendix.com/link/component/43/) module allows you to configure a mapping between a request handler and microflows. In this way, you can create additional entry points to access specific parts of your application. The Deep Link module is design- and runtime-configurable, it respects security, and it supports links for both logged-in and anonymous users.

If you need to access pages or set up a published REST service, the Deep Link module may not be the best solution – there are also other approaches available. For the differences between these approaches, see the table below:

| Solution  | Description | Advantage                                                 | Disadvantage                                                 |
| ---------------- | ---- | --------------------------------------------------------- | ------------------------------------------------------------ |
| URL property of a page | You can access a page by specifying the [URL property of the page]( /refguide/page-properties#2-3-6-url). This is an out-of-the-box feature of Mendix Studio Pro. | Mapping is clearly configured in the application model. | <ul><li>The object ID of the data is owned by Mendix runtime, so when the object ID changes for whatever reason, the link will be broken</li><li>You can only use this solution to access pages</li></ul> |
| Published Deeplink API REST service | The published REST service basically has the same concept as the Deep Link module, that is, a request handler is mapped to microflow actions. <br/>For an example for how to set up a published REST service, see the [REST DeepLink module](https://marketplace.mendix.com/link/component/116642). | <ul><li>The mapping is clearly configured in the application model</li><li>Concepts on which the implementation is based such as session handling and security are available in the Mendix Studio Pro and runtime</li></ul> |The redirect logic is executed before the Mendix Client is loaded. Therefore, after processing the request, you need to forward it to a page that contains a persistent object.|
| Deep Link module | The Deep Link module processes the request and creates a reference object which is being stored with the user session. After this, the user is forwarded to a location which takes care of loading the Mendix Client. This is by default the `index.html` page. When the Mendix Client is loaded, the **Home** microflow (configured in the model) is executed and the microflow which is configured to handle the deep link request is being executed. |  ||

### 1.1 Typical Use Cases

The typical usage scenario is configuring a link to trigger a microflow, for example: 

* `http://myapp.com/link/user/Michel`
* `http://myapp.com/link/product/22`
* `https://myapp.com/link/resetpassword/DF6345SDF`
* `https://myapp.com/link/allusers`

### 1.2 Features

* Create persistent links to view only pages, which you can use in emails or on your website
* Provide a colleague with a link to a certain object instead of describing the necessary navigation steps
* Generate confirmation links that can be emailed to users

## 2. Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content) to import the Deep Link module into your app.

## 3. Configuration

After importing the Deep Link module into your app, you need to configure it.

### 3.1 Initializing the Deep Link Module on App Startup

You need to add the `/link/` path as a request handler in your app. To achieve this, add the **DeepLink.Startdeeplink** microflow to the startup microflow of your app.

* If your app does not have an after-startup microflow, perform the following steps:
  1. In the **App Explorer**, go to **Settings** to open the [App Settings](/refguide/project-settings) dialog box.
  2. Go to the **Runtime** tab.
  2. For **After startup**, **Select** the **DeepLink.StartDeeplink** microflow.
* If your app has an after-startup microflow, extend it with a [sub-microflow activity](/howto/logic-business-rules/extract-and-use-sub-microflows) that calls the **DeepLink.StartDeeplink** microflow.

### 3.2 Configuring the Microflow for the Default Home Page

When a user accesses the Mendix app, the app needs to check if a deep link request is associated to the user session. To achieve this, add the **DeepLink.DeeplinkHome** microflow to a microflow that is configured for the [default home page](/refguide/navigation#default-home-page)(via **App** > **Navigation** > **Home pages** > **Default home page**). For an example of this configuration, see the **DeepLink.Home_ResponsiveProfile** microflow.

### 3.3 Configuring Security Settings

Make sure that all roles—including your guest roles—which need to access your app via a deep link have the **DeepLink.User** user role. Otherwise, they will not be able to use any link, because access to objects owned by the Deep Link module will be denied.

Make sure that the roles that need to change the configuration of the Deep Link module at runtime have the **DeepLink.Admin** user role (via **App** > **Security** > **User roles**).

### 3.3 Configuring the Custom Admin Page

To configure and manage deep links at runtime, add the **DeepLink.DeeplinkConfigurationOverview** snippet to a custom admin page, and make sure that all the users who operate the app can access this page. You need to add the **DeepLink.Admin** module role to their user roles.

### 3.4 Optional Configuration

The configuration in this section is optional. Use it if it helps with your implementation.

#### 3.4.1 Configuring Deep Links in After Startup Microflow

If you configure deep links in the after-startup microflow, then the configuration is consistent for all the environments where the application is deployed.

To configure deep links while being in design time, use the following Java actions :

* **SetObjectParameterDeeplink** – a deep link that looks up an object based on an input parameter value and passes it to the configured handler microflow
* **SetStringParameterDeeplink** – a deep link that passes input parameter values as string arguments to the configured handler microflow

#### 3.4.2  Adding the Example Snippet to a Page

To view all the configured deep links and example URLs, add the **DeepLink.DeeplinkExampleOverview** snippet to a custom page.

### 3.5 Configuring Constants

* **IndexPage** – In special cases—for example, when you want to load a specific theme or bypass a certain single sign-on page—you can modify this constant to redirect to another index page like `index3.html` or `index-mytheme.html`.
* **LoginLocation** – When authentication is required but the session is not of an authenticated user, the user will be redirected to this location.
  * When the value is left empty, the default location `login.html` in the theme folder is used
  * When the login location ends with `= ` (for example, in the case of Mendix SSO: `https://login.mendix.com/oidp/login?ret=`), the original deep link location will be appended to the login location
  * When using the module with a MindSphere app, use `/mindspherelogin.html?redirect_uri=` as a login location (MindSphere SSO V2.0 and above is required).
  * When using XSUAA, set the value to `/xsauaalogin/`   


* **SSOHandlerLocation** – When a deep link is configured to support anonymous users, the SSO handler is requested before redirecting users to the destination
  * The SSO Handler will only be requested when the user session is an anonymous user session (this is useful in situations where the SSO handler does not ask users for authentication to support anonymous users)
  * The original deeplink location will be appended to the login location when the login location ends with `=` (for example, in the case of Mendix SSO: `https://login.mendix.com/oidp/login?ret=`)

{{% alert type="warning" %}}When using the Deep Link module together with the [SAML](saml) module for SSO in Mendix 9 and above, you might get stuck in an endless redirect loop. This is because the default value for SameSite cookies is `"Strict"`, and the session cookies cannot be forwarded. To avoid this issue, make sure your IdP (identity provider) and your app are in the same domain, and thus on the same site. For example, if your app is on `app.domain.com` and you open the deep link `app.domain.com/link/test`, then you are redirected to your IdP to sign in on `idp.domain.com/SSO`. After you sign in successfully, you are sent back to `app.domain.com/SSO/assertion`. Finally, you are forwarded to `app.domain.com/link/test`. Since your requests always stay on the same site, the cookie can be forwarded each time. If it is not an option to have the IdP and the app in the same domain, set the value for the SameSite cookies to `"None"` or`"Lax"` to solve the problem. See also [Runtime Customization](/refguide/custom-settings).{{% /alert %}}
