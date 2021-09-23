---
title: "Deep Link"
category: "Modules"
description: "Describes the configuration and usage of the Deep Link module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "deep link", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Use the [Deep Link](https://marketplace.mendix.com/link/component/43/) to add request handlers to your app that will trigger microflows.

### 1.1 Typical Use Cases

The typical usage scenario is configuring a link to trigger a microflow, for example: 

* `http://myapp.com/link/user/Michel`
* `http://myapp.com/link/product/22`
* `https://myapp.com/link/resetpassword/DF6345SDF`
* `https://myapp.com/link/allusers`

The module is design- and runtime-configurable, it respects security, and it supports links for both logged-in and anonymous users.

### 1.2 Features

* Create persistent links to view only pages, which you can use in emails or on your website
* Provide a colleague a link to a certain object instead of describing the necessary navigation steps
* Generate confirmation links that can be emailed to the user

## 2 Configuration

After importing the module into your application you need to configure it.

### 2.1 Initializing the Deep Link Module on App Startup

To automatically start this  module, the **DeepLink.Startdeeplink** microflow needs to be set as the startup microflow (via **App** > **Settings** > **Server** > **After startup**). 

If you already have a startup microflow configured in your app, you need to extend it with a [sub-microflow activity](/howto/logic-business-rules/extract-and-use-sub-microflows) that calls the **DeepLink.Startdeeplink** microflow.

The `/link/` path needs to be added as a request handler in your application. This will be covered when you add the **DeepLink.Startdeeplink** microflow to the startup microflow of your app.

### 2.2 Security

All roles that need to be able to change the configuration of the deeplink module (at runtime) require the **DeepLink.Admin** user role (via **App** > **Security** > **User roles**).

All other roles—including your guest roles—should have the **DeepLink.User** user role. Otherwise they will not be able to use any link.

### 2.3 Navigation {#navigation}

All the roles that need to be able to change the configuration of this module (at runtime) should be able to reach a page that includes the `DeepLink.DeepLinkConfigurationOverview` snippet.

### 2.4 Adding Deep Link Entries

The available deep links can be configured at design time and/or runtime. In general, it is easier to manage deep links at runtime. In runtime, you are provided with suggestions for the parameters that need to be configured for a deep link entry.

#### 2.4.1 Design Time

You need a custom microflow with [microflow call](/refguide/microflow-call) activities that call the **DeepLink.CreateDeeplinkConfig** microflow. You need a microflow call for every deep link entry you want to configure.

#### 2.4.2 Runtime

Start the application and sign in as a user who has the **Deeplink.Admin** module role associated to one of their user roles. Then, open the page that includes the `DeepLink.DeepLinkConfigurationOverview` snippet (for more information, see [Navigation](#navigation) above). You can manage all the deep link configuration entries on this page.

### 2.5 Setting the Microflow Parameters

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

### 2.6 Handling Deep Link Requests

After handling a request, this module will redirect to the homepage of your application. The homepage is configured in the app's [Navigation](/refguide/navigation).

To open another page, the module needs to figure out what microflow is associated with the requested deep link. For this, you need to change the default homepage in your navigation to a custom microflow. If the default homepage is already a microflow, you need to modify it.

Follow these steps to update this homepage microflow:

1. Make the first activity in this custom microflow a [microflow call](/refguide/microflow-call) activity that calls `Deeplink.DeeplinkHome`.
2. Configure the microflow to return a Boolean value that indicates if the module will start triggering a microflow.
3. Add an exclusive split that handles the result of `Deeplink.DeeplinkHome`:
	* When the result of `Deeplink.DeeplinkHome` is true, the custom microflow should end, and the module will then call the correct microflow
	* When the result is false, the microflow should continue with a [show page](/refguide/show-page) activity that opens the page or microflow that is your default home page (as in, the original intended behavior)

### 2.7 Constants (Optional)

* **IndexPage** – In special cases—for example, when you want to load a specific theme or bypass a certain single sign-on page—you can modify this constant to redirect to another index page like `index3.html` or `index-mytheme.html`.
* **LoginLocation** – If user credentials are required but are not present in the session, the user will get redirected to this location. This constant's value can either be fully qualified (for example, `https://myapp.xyz.com/mylogin.html`) or relative to the site (for example, `/mylogin.html`). If the constant value is empty, the default built-in Mendix login page is used.
	* To make sure the end-user gets sent back to original deep link URL after having logged in, append `&f=true&cont=` to the constant (for example, `/mylogin.html&f=true&cont=`)
	* When the app is using SAML for SSO and the end-user should be redirected to the deep link again, use either `https://myapp.xyz.com/SSO/login?a=MyApp&f=true&cont=` or `/SSO/login?f=true&cont=` — *note that this construction does not work for other SSO modules, such as XSUAA*
	* When the app is using MendixSSO for SSO and the end-user should be redirected to the deep link again, use `/openid/login?f=true&cont=`
	* Use `/mindspherelogin.html?redirect_uri=` as login location when using the module with a MindSphere app. (Requires MindSphere SSO >= V2.0).
  * When using XSUAA, this constant should be set to `/xsauaalogin/`
