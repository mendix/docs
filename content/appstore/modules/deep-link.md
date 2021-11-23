---
title: "Deep Link"
category: "Modules"
description: "Describes the configuration and usage of the Deep Link module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "deep link", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Deep Link](https://marketplace.mendix.com/link/component/43/) module allows you to configure a mapping between a request handler and microflows. In this way, you can create additional entry points to access specific parts of your application.

### 1.1 Typical Use Cases

The Deep Link module is design- and runtime-configurable, it respects security, and it supports links for both logged-in and anonymous users. 

The typical usage scenario is configuring a link to trigger a microflow, for example: 

* `http://myapp.com/link/user/Michel`
* `http://myapp.com/link/product/22`
* `https://myapp.com/link/resetpassword/DF6345SDF`
* `https://myapp.com/link/allusers`

{{% alert type="info" %}}If you need to access your page or set up a published REST service, the Deep Link module may not be the best solution. For more information, see the table below.
{{% /alert %}}

| Solution  | Description | Advantage                                                 | Disadvantage                                                 |
| ---------------- | ---- | --------------------------------------------------------- | ------------------------------------------------------------ |
| URL property of a page | You can access a page by specifying the [URL property of the page]( /refguide/page-properties#2-3-6-url). This is an out-of-the-box feature of Mendix Studio Pro. | Mapping is clearly configured in the application model. | <ul><li>You can only use this solution to access pages</li><li>The object ID of the data is owned by Mendix runtime. Therefore, when the object ID changes for whatever reason, the link will be broken</li></ul> |
| Published Deeplink API REST service | The published REST service basically has the same concept as the Deep Link module, that is, a request handler is mapped to microflow actions. <br/>For an example for how to set up such a published REST service, see the [REST DeepLink module](https://marketplace.mendix.com/link/component/116642). | <ul><li>The mapping is clearly configured in the application model</li><li>The implementation is based on concepts available in the Mendix Studio Pro and runtime, for example, session handling and security</li></ul> |The redirect logic is executed before the Mendix client is loaded. Therefore, after processing the request, you need to forward it to a page that contains a persistent object.|
| Deep Link module | The Deep Link module processes the request and creates a reference object which is being stored with the user session. When this is done, the user is forwarded to a location which takes care of loading the Mendix client. This is by default the `index.html` page. When the Mendix client is loaded, the **Home** microflow (configured in the model) is executed and the microflow which is configured to handle the deep link request is being executed. |  ||

### 1.2 Features

* Create persistent links to view only pages, which you can use in emails or on your website
* Provide a colleague with a link to a certain object instead of describing the necessary navigation steps
* Generate confirmation links that can be emailed to the user

## 2. Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content) to import it into your app.

## 3. Configuration

After importing the module into your app, you need to configure it.

### 3.1 Initializing the Deep Link Module on App Startup

You need to add `/link/` path as a request handler in your application. To achieve this, add the **DeepLink.Startdeeplink** microflow to the startup microflow of your app.

* If your app does not have an after-startup microflow, perform the following steps:
  1. In the **App Explorer**, go to **Settings** to open the [App Settings](/refguide/project-settings) dialog box.
  2. Go to the **Runtime** tab.
  2. For **After startup**, **Select** the **DeepLink.StartDeeplink** microflow.
* If your app has an after-startup microflow, extend it with a [sub-microflow activity](/howto/logic-business-rules/extract-and-use-sub-microflows) that calls the **DeepLink.StartDeeplink** microflow.

### 3.2 Configuring the Microflow for the Default Home Page

When a user accesses the Mendix app, the app needs to check if a deep link request is associated to the user session. To achieve this, add the **DeeplinkHome** microflow to a microflow that is configured for the [default home page](/refguide/navigation#default-home-page). For an example of this configuration, see the **DeepLink.Home_ResponsiveProfile** microflow.

### 3.3 Configuring Security

Make sure that all roles—including your guest roles—that are expected to access your app via a deep link have the **DeepLink.User** user role. Otherwise, they will not be able to use any link, because access to objects owned by the Deep Link module will be denied.

Make sure that the roles that need to change the configuration of the Deep Link module at runtime have the **DeepLink.Admin** user role (via **App** > **Security** > **User roles**).

### 3.3 Configuring Navigation

To configure and manage deep links at runtime, add the **DeepLink.DeeplinkConfigurationOverview** snippet to a custom page, and make sure that users who operate the app can access this custom page. It is required to add the **DeepLink.Admin** module role to the user roles that have access to the custom page.

### 3.4 Optional Configuration

The configuration in this section is optional. Use it when it helps with your implementation.

#### 3.4.1 Deep Link Configuration in After Startup Microflow

If you configure deep links in the after-startup microflow, then the configuration is consistent for all the environments where the application is deployed.

To configure deep links while being in design time, use the following Java actions :

* **SetObjectParameterDeeplink** – a deep link that looks up an object based on an input parameter value and passes it to the configured handler microflow
* **SetStringParameterDeeplink** – a deep link that passes input parameter values as string arguments to the configured handler microflow

#### 3.4.2 Checking the Deep Link Configurations and Example URLs

To view all the configured deep links and example URLs, add the **DeepLink.DeeplinkExampleOverview** snippet to a custom page.

## 4. Usage

### 4.1 Adding Deep Link Entries

The available deep links can be configured at design time and/or runtime. In general, it is easier to manage deep links at runtime. In runtime, you are provided with suggestions for the parameters that need to be configured for a deep link entry.

#### 4.1.1 Design Time

You need a custom microflow with [microflow call](/refguide/microflow-call) activities that call the **DeepLink.CreateDeeplinkConfig** microflow. You need a microflow call for every deep link entry you want to configure.

#### 4.1.2 Runtime

Start the application and sign in as a user who has the **Deeplink.Admin** module role associated to one of their user roles. Then, open the page that includes the `DeepLink.DeepLinkConfigurationOverview` snippet (for more information, see [Navigation](#navigation) above). You can manage all the deep link configuration entries on this page.

### 4.2 Setting the Microflow Parameters

The **Deeplink.CreateDeeplinkConfig** microflow requires the following parameters to be set carefully:

* **Name** – This parameter is the name of the link as seen by the user of your app. For example, if the name is set to `product`, the generated deep link will result in ` http://yourhost/link/product/17`.
* **Microflow** – This parameter is the fully qualified name of the microflow that will be invoked by this deep link (for example, `MyFirstModule.ShowProduct`).
* **Use string argument** – If the selected microflow has a single string argument, the remainder of the invoking URL will be passed as an argument to the microflow. This way, it is possible to invoke microflows without having a corresponding object in the database. This property cannot be used in combination with the object type and object attribute properties.
* **Include GET parameters** – If you are using a string argument, the `GET` parameters following the URL will also be included in the string passed to the microflow. For example, with the `http://appname/link/mfname/stringtext?param=value` URL, previously only the string `stringtext` was passed to the microflow. When this option is enabled, the `GET` parameters will be added. The string passed to the microflow will now be `stringtext?param=value`. Of course, multiple `GET` parameters (using`&`) also work. This property cannot be used in combination with the object type and object attribute properties.
* **Separate GET parameters** – If `GET` parameters are included, they are separated into multiple string parameters for the microflow that will be called. For example, with the `http://appname/link/mfname/stringtext?param=value&other=test` URL, the microflow that is called can receive two string parameters named `param` and `other`, which are filled with the values `value` and `test`, respectively. When creating a deep link in the GUI, an example URL will be shown for the selected microflow. This property cannot be used in combination with the object type and object attribute properties.
* **Object Type** – This parameter is the fully qualified type of the object that needs to be passed to the microflow. If empty, no arguments are passed to the microflow. An example is `MyFirstModule.Product`.
* **Object Attribute** – This parameter specifies the attribute used by the deep link to uniquely identify the object that needs to be passed. In the case of this value being configured as empty, GUIDs will be used. For example, when the object type is set to the entity `User` and the object attribute to `Name`, you can use links such as `http://yourhost/link/showuser/[randomUserName]`, where `randomUsername` is the value of the `Name` attribute of the `User` entity.
* **Allow guests** – This parameter allow anonymous users to use this deep link.
* **Use as Home** – This parameter allows a deep link to reused when the user reloads the application after requesting the deep link. This way, an alternative dashboard can be presented when the user enters the application by requesting a deep link. Defaults to `false`.
* **Alternative index page** – This causes a deep link to not use the default index page. With this property, alternative themes can be applied when requesting certain deep links (for example, `index-dark.html`).

### 4.3 Handling Deep Link Requests

After handling a request, this module will redirect to the homepage of your application. The homepage is configured in the app's [Navigation](/refguide/navigation).

To open another page, the module needs to figure out what microflow is associated with the requested deep link. For this, you need to change the default homepage in your navigation to a custom microflow. If the default homepage is already a microflow, you need to modify it.

Follow these steps to update this homepage microflow:

1. Make the first activity in this custom microflow a [microflow call](/refguide/microflow-call) activity that calls `Deeplink.DeeplinkHome`.
2. Configure the microflow to return a Boolean value that indicates if the module will start triggering a microflow.
3. Add an exclusive split that handles the result of `Deeplink.DeeplinkHome`:
	* When the result of `Deeplink.DeeplinkHome` is true, the custom microflow should end, and the module then calls the correct microflow
	* When the result is false, the microflow should continue with a [show page](/refguide/show-page) activity that opens the page or microflow that is your default home page (as in, the original intended behavior)

### 4.4 Constants (Optional)

* **IndexPage** – In special cases—for example, when you want to load a specific theme or bypass a certain single sign-on page—you can modify this constant to redirect to another index page like `index3.html` or `index-mytheme.html`.
* **LoginLocation** – When authentication is required but the session is not of an authenticated user, the user will be redirected to this location.
  * When the value is left empty, the default location in the theme folder is used: `login.html`
  * The original deep link location will be appended to the login location when the login location ends with `=`. (for example, in case of Mendix SSO: `https://login.mendix.com/oidp/login?ret=`)
  * Use `/mindspherelogin.html?redirect_uri=` as a login location when using the module with a MindSphere app  (MindSphere SSO V2.0 and above is required).
  * When using XSUAA, this constant should be set to `/xsauaalogin/`   


* **SSOHandlerLocation** – When a deep link is configured to allow anonymous users the SSO Handler is requested before redirecting the user to its destination
  * The SSO Handler will only be requested when the user session is an anonymous user session. This is useful in situations where the SSO handler does not prompt users for authentication, allowing anonymous users.
  * The original deeplink location will be appended to the login location when the login location ends with `=`. For example, in case of MendixSSO: `'/openid/login?continuation='`

{{% alert type="warning" %}}When using the Deep Link module together with the [SAML](saml) module for SSO in Mendix 9 and above, you might get stuck in an endless redirect loop. This is because the default value for SameSite cookies is `"Strict"`, and the session cookies cannot be forwarded. To avoid this issue, make sure your IdP (identity provider) and your app are in the same domain, and thus on the same site. For example, if your app is on `app.domain.com` and you open the deep link `app.domain.com/link/test`, then you are redirected to your IdP to sign in on `idp.domain.com/SSO`. After you sign in successfully, you are sent back to `app.domain.com/SSO/assertion`. Finally, you are forwarded to `app.domain.com/link/test`. Since your requests always stay on the same site, the cookie can be forwarded each time. If it is not an option to have the IdP and the app in the same domain, set the value for the SameSite cookies to `"None"` or`"Lax"` to solve the problem. See also [Runtime Customization](/refguide/custom-settings).{{% /alert %}}
