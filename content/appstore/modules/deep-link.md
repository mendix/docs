---
title: "Deep Link"
category: "Modules"
description: "Describes the configuration and usage of the Deep Link module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "deep link", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Deep Link](https://marketplace.mendix.com/link/component/43/) module allows for configuring a mapping between a request handler and Microflows. 
In other words: you can create additional entry points to specificic parts of your application.

The Deep Link module might not be the best solution for the challenge that you try to solve so please read into the following approaches first:

### Page property: URL
Mendix does provide functionality to access specific parts in your application out of the box: You can achieve this by specifying the [`URL` property of a page](https://docs.mendix.com/refguide/page-properties#2-3-6-url). 
Advantages of this approach:
- the mapping is explicitly configured in the application model.
Disadvantage of this approach:
- this method of deep linking can only be applied to pages.
- the object id of the data is owned by Mendix runtime and when this for whatever reason changes, the link will be broken.

### Published REST Service
A published REST Service is basically the same concept as how the Deep Link module has bee set up: A request handler is mapped to microflow actions.
Advantages of this approach: 
- the mapping is explicitly configured in the application model
- your implementation is based on concepts directly available in the Mendix IDE (Studio Pro) and runtime. For example session handling and security.

Disadvantage of this approach:
- The redirect logic is executed before the Mendix client is loaded. This means that after processing the request you need to forward it to a page that contains a persistent object.
A template with an example on how to set up such a Published REST Service can be found [here](https://marketplace.mendix.com/link/component/116642) 

So what does differentiate the Deep Link module from the previously mentioned approaches?
The deep link module processes the request and creates a reference object which is being stored with the user session. When this is done the user is forwarded to a location which takes care of loading the Mendix client. This is by default the `index.html` page. When the Mendix client is loaded the `Home` microflow (configured in the model) is executed and the microflow which is configured to handle the deep link request is being executed.

### 1.1 Typical Use Cases
The typical use case for adding a deep link scenario to your app is to offer an additional entry point in your application.
For example:
* View the details of a user `http://myapp.com/link/user/Michel`
* View the details of a product `http://myapp.com/link/product/22`
* Handle a request coming from an email such as verifying the receival of a unique URL `https://myapp.com/link/resetpassword/DF6345SDF`

The module is design- and runtime-configurable, it respects security, and it supports links for both logged-in and anonymous users.


## 2 Configuration

After importing the module into your application you need to configure it. Do so by following the steps below as described in the module itself too.

### Step 1. Initializing the Deep Link Module on App Startup

To automatically start this  module, the **DeepLink.Startdeeplink** microflow needs to be set as the startup microflow (via **App** > **Settings** > **Server** > **After startup**). 

If you already have a startup microflow configured in your app, you need to extend it with a [sub-microflow activity](/howto/logic-business-rules/extract-and-use-sub-microflows) that calls the **DeepLink.Startdeeplink** microflow.

### Step 2. Add a microflow as Default home page.
When the Mendix application is accessed the application needs to check whether a deep link request is associated to the user session. To achieve this the `DeeplinkHome` microflow needs to be added to a microflow that is configured for `Project->Navigation->Home Pages->Default Home page`.
You can find an example of how this should look in the `DeepLink.HomeResponsiveProfile` microflow.

All roles—including your guest roles— that are expected to access your application via a deep link should have the **DeepLink.User** user role. Otherwise access to objects owned by the deep link module will be denied.

All roles that need to be able to change the configuration of the deeplink module (at runtime) require the **DeepLink.Admin** user role (via **App** > **Security** > **User roles**).

### Step 3. Add Snippet to Custom Admin Page
In order to configure and manage deep links at runtime it is helpful to include the `DeepLink.DeeplinkConfigurationOverview` to a custom page accessible to users operating the app.
It's required to add the `DeepLink.Admin` module role to the userrole having access to the custom page.

### Step 4. Optional configuration
The steps described here are not mandatory but possibly support the implementation of the Deep Link module.

#### Step 4.A Deeplink configuration in After Startup microflow.
The advantage of ensuring the deeplink configuration from the After Startup flow is that the configuration consistent for every environment the application is deployed to.
To configure deeplinks while being in design time you can utilize the following Java actions:
* SetObjectParameterDeeplink - a deeplink that looks up an object based on an input parameter value and passes it to the configured handler microflow.
* SetStringParameterDeeplink - a deeplink that passes input parameter values as string arguments to the configured handler microflow.

### Step 4.B Add example snippet to a page
In order to quicly check what deeplink configurations have been created and have a list of example URL's at hand you can add the `DeepLink.DeeplinkExampleOverview` to a custom page.

### Step 4 - Configure Constants

* **IndexPage** – In special cases—for example, when you want to load a specific theme or bypass a certain single sign-on page—you can modify this constant to redirect to another index page like `index3.html` or `index-mytheme.html`.

* **LoginLocation** – When authentication is required but the session is not of an authenticated user, the user will be redirected to this location. When the value is left empty, the default location in the theme folder is used: login.html

The orginial deeplink location will be appended to the login location when the login location ends with a '='.

For example, in case of Mendix SSO:
'https://login.mendix.com/oidp/login?ret='

Use `/mindspherelogin.html?redirect_uri=` as login location when using the module with a MindSphere app (requires MindSphere SSO >= V2.0)
When using XSUAA, this constant should be set to `/xsauaalogin/`   

* ** SSOHandlerLocation - When a deeplink is configured to allow anonymous users the SSO Handler is requested before redirecting the user to its destination.
The SSO Handler will only be requested when the user session is an anonymous user session. This is useful in situations where the SSO handler does not prompt users for authentication, allowing anonymous users.

The orginial deeplink location will be appended to the login location when the login location ends with a '='.

Example, in case of MendixSSO: '/openid/login?continuation='


      {{% alert type="warning" %}}When using the Deep Link module together with the [SAML](saml) module for SSO in Mendix 9 and above, you might get stuck in an endless redirect loop. This is because the default value for SameSite cookies is `"Strict"`, and the session cookies cannot be forwarded. To avoid this issue, make sure your IdP (identity provider) and your app are in the same domain, and thus on the same site. For example, if your app is on `app.domain.com` and you open the deep link `app.domain.com/link/test`, then you are redirected to your IdP to sign in on `idp.domain.com/SSO`. After you sign in successfully, you are sent back to `app.domain.com/SSO/assertion`. Finally, you are forwarded to `app.domain.com/link/test`. Since your requests always stay on the same site, the cookie can be forwarded each time. If it is not an option to have the IdP and the app in the same domain, set the value for the SameSite cookies to `"None"` or`"Lax"` to solve the problem. See also [Runtime Customization](/refguide/custom-settings).{{% /alert %}}
   

