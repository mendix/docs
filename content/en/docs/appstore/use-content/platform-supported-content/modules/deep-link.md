---
title: "Deep Link"
deprecated: true
url: /appstore/modules/deep-link/
description: "Describes the configuration and usage of the Deep Link module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This module is deprecated from Studio Pro 10.6.0. It is replaced by [page URLs](/refguide/page-properties/#url) and [microflow URLs](/refguide/microflow/#url). For instructions on migrating to page and microflow URLs, see the [Migrating to Page and Microflow URLs](#migrate-page-micro) section below.<br>We will continue to actively support this module for Mendix 9.
{{% /alert %}}

## Introduction

The [Deep Link](https://marketplace.mendix.com/link/component/43/) module allows you to configure a mapping between a request handler and microflows. In this way, you can create additional entry points to access specific parts of your application. The Deep Link module is design- and runtime-configurable, it respects security, and it supports links for both logged-in and anonymous users.

{{% alert color="info" %}}
If you are using Mendix version 9.20 or higher, you need to use version 9.0.8 or higher of the Deep Link module.
{{% /alert %}}

If you need to access pages or set up a published REST service, the Deep Link module may not be the best solution – there are also other approaches available. For the differences between these approaches, see the table below:

| Solution  | Description | Advantage                                                 | Disadvantage                                                 |
| ---------------- | ---- | --------------------------------------------------------- | ------------------------------------------------------------ |
| URL property | This property is available both for [pages](/refguide/page-properties/#url) and [microflows](/refguide/microflow/#url). This is an out-of-the-box feature introduced in Mendix Studio Pro 10.6.0 and, since that version, the recommended approach for most users. | Mapping is clearly configured in the application model. No setup is required. | |
| Deep Link module | The Deep Link module processes the request and creates a reference object which is being stored with the user session. After this, the user is forwarded to a location which takes care of loading the Mendix Client. This is by default the `index.html` page. When the Mendix Client is loaded, the **Home** microflow (configured in the model) is executed and the microflow which is configured to handle the deep link request is being executed. | It is possible to set up non-persistable entities which can be passed as a parameter to a page. |The model consistency check is not sufficient in certain scenarios. When a microflow which is configured with a deep link at runtime and afterwards deleted at design time, Mendix consistency checking mechanism cannot catch it.|

{{% alert color="info" %}}
There can be other approaches which are implemented by community-supported Marketplace modules, but these are not listed in this table.
{{% /alert %}}

### Typical Use Cases

The typical usage scenario is configuring a link to trigger a microflow, for example: 

* `http://myapp.com/link/user/Michel`
* `http://myapp.com/link/product/22`
* `https://myapp.com/link/resetpassword/DF6345SDF`
* `https://myapp.com/link/allusers`

### Features

* Create persistent links to view only pages, which you can use in emails or on your website
* Provide a colleague with a link to a certain object instead of describing the necessary navigation steps
* Generate confirmation links that can be emailed to users

### Dependencies

* [Data Widgets](https://marketplace.mendix.com/link/component/116540): required for the Deep Link module in Studio Pro 10.0.6 and higher.

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Deep Link module into your app.

{{% alert color="info" %}}After you install the Deep Link module and set up deep links, these links will not break if you upgrade from Mendix Studio Pro 9 to 10.{{% /alert %}}

## Configuration

After importing the Deep Link module into your app, you need to configure it.

### Initializing the Deep Link Module on App Startup

You need to add the `/link/` path as a request handler in your app. To achieve this, add the **DeepLink.Startdeeplink** microflow to the startup microflow of your app.

* If your app does not have an after-startup microflow, perform the following steps:
    1. In the **App Explorer**, go to **Settings** to open the [App Settings](/refguide/app-settings/) dialog box.
    2. Go to the **Runtime** tab.
    3. For **After startup**, **Select** the **DeepLink.StartDeeplink** microflow.
* If your app has an after-startup microflow, extend it with a [sub-microflow activity](/refguide/extracting-and-using-sub-microflows/) that calls the **DeepLink.StartDeeplink** microflow

### Configuring the Microflow for the Default Home Page

When a user accesses the Mendix app, the app needs to check if a deep link request is associated to the user session. To achieve this, add the **DeepLink.DeeplinkHome** microflow to a microflow that is configured for the [default home page](/refguide/navigation/#default-home-page) (via **App** > **Navigation** > **Home pages** > **Default home page**). For an example of this configuration, see the **DeepLink.Home_ResponsiveProfile** microflow.

### Configuring Security Settings

Make sure that all roles—including your guest roles—which need to access your app via a deep link have the **DeepLink.User** user role. Otherwise, they will not be able to use any link, because access to objects owned by the Deep Link module will be denied.

Make sure that the roles that need to change the configuration of the Deep Link module at runtime have the **DeepLink.Admin** user role (via **App** > **Security** > **User roles**).

### Adding the Configuration Overview Snippet to the Custom Admin Page

To configure and manage deep links at runtime, add the **DeepLink.DeeplinkConfigurationOverview** snippet to a custom admin page, and make sure that all the users who operate the app can access this page. You need to add the **DeepLink.Admin** module role to their user roles.

The description of the **DeepLink.DeeplinkConfigurationOverview** snippet is as follows:

On the **Configuration** tab, there are these settings:

* **Name** – This is the name used for constructing the URL. For example, if you enter *product* here, the URL will be `http://my.app/link/product`. 

* **Description** – This is the description of the deep link.

* **Deeplink Handler Microflow** – The selected microflow will be executed when the deep link URL is requested.

  {{% alert color="info" %}}If the deep link handler microflow was changed to accept a different entity, then you have to re-select it from the microflows list.{{% /alert %}}

* **The attribute of which the value will be used for looking up the requested object** – The value of the selected attribute will be used for looking up the requested object.

* **Example** – This shows an example of the deep link URL.

On the **Advanced** tab, there are these settings:

* **Do not force a login action** – If selected, anonymous users will be able to access the deep link. If unselected, anonymous user sessions will be redirected to the location specified in the **LoginLocation** constant.
* **Language** – The selected language will be associated to the anonymous user session.
* **Keep the deep link the entire session** – If selected, the deep link will be the home page for the session. For example, when the user goes to `/link/article/1`, the deep link handler microflow is executed and the user is navigated to the page specified in handler microflow. This handler microflow now will be executed every time user reloads the Mendix app or calls the **DeepLink.DeepLinkHome** microflow. Ending current session will stop this behavior until this deep link is called again.
* **Process an argument as an Object** – ⚠ This is deprecated.
* **Process an argument as a String** – ⚠ This is deprecated.
* **Alternative Index Page** – If selected, the default index location (`index.html`) and the **DeepLink.IndexPage** constant will be overridden by this value. This is useful for theme-related use cases, for example, `index-dark.html`.
* **Track hit count** - If selected, Deeplink will track the number of hits on this link in the `HitCount` attribute. This tracking can be disabled if performance issues occur. This option is only available in Deep Link module version 9 or higher.

### Optional Configuration

The configuration in this section is optional. Use it if it helps with your implementation.

#### Configuring Deep Links in After Startup Microflow

If you configure deep links in the after-startup microflow, then the configuration is consistent for all the environments where the application is deployed.

To configure deep links while being in design time, use the following Java actions :

* **SetObjectParameterDeeplink** – a deep link that looks up an object based on an input parameter value and passes it to the configured handler microflow
* **SetStringParameterDeeplink** – a deep link that passes input parameter values as string arguments to the configured handler microflow

It is also possible to implement the example microflow **DeepLink.SetupExampleDeeplinks** in the after-startup action. This will generate example deep links in your app.

#### Adding the Example Snippet to a Page

To view all the available deep link configurations and example URLs, add the **DeepLink.DeeplinkExampleOverview** snippet to a custom page.

### Configuring Constants

* **IndexPage** – In special cases—for example, when you want to load a specific theme or bypass a certain single sign-on page—you can modify this constant to redirect to another index page like `index3.html` or `index-mytheme.html`
* **LoginLocation** – This value is used for redirecting the user to a login page in case the user does not have the required user role to access the app. A user will be redirected to this location when the user visits a deep link while having an anonymous user session and the app is [configured to not allow anonymous users](/refguide/anonymous-users/#properties).

    For the **LoginLocation** constant, it is IMPORTANT to note the following:

    * When the value is left empty, the default location is `login.html` (this file should be available in the theme folder).
    * When the login location ends with `=` (for example, in the case of Mendix SSO: `/openid/login?continuation=`), the original deep link location will be appended to the login location.
    * When using the module with a MindSphere app, use `/mindspherelogin.html?redirect_uri=` as a login location (MindSphere SSO v2.0 and higher is required).
    * When using the [XSUAA](/appstore/modules/sap/sap-xsuaa-connector/) module, set the value to `/xsauaalogin/login?ret=`.
    * When using the [OIDC](/appstore/modules/oidc/) module, set the value to `/oauth/v2/login?cont=`. The DeepLink module does not have full support for multiple IdPs, so it can only trigger logins at one IdP. You can specify which IdP should be used by adding the alias (MyIdPAlias) to the LoginLocation: `/oauth/v2/login?idp={MyIdpAlias}&cont=`.
    * When using the [SAML](/appstore/modules/saml/) module, set the value to `/SSO/login?f=true&cont=` to redirect the user to the original deep link location after a successful login.
        * When using version 6.1.0 or higher of the Deep Link module, you should also set the **EnableLeadingSlash** constant to `false` to prevent the users from being redirected to an invalid deep link location.

* **SSOHandlerLocation** – This value is used when the app needs to determine whether the user has a valid session with the Identity Provider. When both the application and a deep link are configured to support anonymous users, the location value in this constant is requested before a user is directed to the destination deep link.

    * The SSO handler will only be requested when the user session is an anonymous user session (this is useful in situations where the SSO handler is not expected to provide users with a login page, but is supposed to redirect the anonymous user to the target location, while still having an anonymous user session).
    * When the SSO handler location ends with `=` (for example, in the case of Mendix SSO: `/openid/login?continuation=`), the original deep link location will be appended to the SSO handler location.

## Troubleshooting

### Endless Redirect Loop (Mendix 9 and Higher) 

When using the Deep Link module in Mendix 9 and higher, you might get stuck in an endless redirect loop.

This is because for Mendix 9, the [default value for SameSite cookies](/developerportal/deploy/environments-details/#samesite) has been changed to `"Strict"` meaning that session cookies cannot be forwarded.

To avoid this issue, make sure your IdP (identity provider) and your app are in the same domain, and thus on the same site. For example, if your app is on `app.domain.com` and you open the deep link `app.domain.com/link/test`, then you are redirected to your IdP to sign in on `idp.domain.com/SSO`. After you sign in successfully, you are sent back to `app.domain.com/SSO/assertion`. Finally, you are forwarded to `app.domain.com/link/test`. Since your requests always stay on the same site, the cookie can be forwarded each time. If it is not an option to have the IdP and the app in the same domain, set the value for the SameSite cookies to `"None"` or`"Lax"` to solve the problem. See also [Runtime Customization](/refguide/custom-settings/).

Additionally, there is an incompatibility between Mendix version 9.20 and higher and earlier versions of the Deep Link module which could cause this. If you are using Mendix version 9.20 or higher, you need to use version 9.0.8 or higher of the Deep Link module.

### Deep Link Redirect Fails After Login {#deep-link-redirect-fails}

If you try to visit a deep link in your browser and find out you need to log in first, it may occur that after you log in, you are redirected to the home page instead of the deep link that you hoped to visit. This happens if the app uses the default login page with the Deep Link module from version 6.0.0 to version 9.0.4. 

To solve this problem, you can use one of the following solutions:

* This problem is fixed in other versions of the module: you can upgrade your Deep Link module to version 9.0.5 or higher, and also upgrade your Studio Pro to version [9.12.6](/releasenotes/studio-pro/9.12/#9126) or higher.

* As an alternative to upgrading the module and Studio Pro, you can use a custom login page instead of the default login page. To do so, perform the steps as follows:

  1. Set the **LoginLocation** constant to `../..?cont=`. This directs the user to the custom login page. If you use a page URL for the login page, then adjust the constant accordingly, for example, to `../../p/login?cont=`.

  2. Add the following JavaScript using the [HTML/JavaScript Snippet](/appstore/widgets/html-javascript-snippet/) widget from the Marketplace to your custom login page:

     ```javascript
     window.mx.afterLoginAction = () => {
       if ( window.location.search.startsWith('?cont=') ) {
          window.location = window.mx.homeUrl+decodeURIComponent(window.location.search.substring(6))
       } else {
          window.mx.redirect(window.mx.homeUrl);
       }
     }
     ```

## Migrating to Page and Microflow URLs {#migrate-page-micro}

The functionality of the Deep Link module has been replaced by various built-in features of the Mendix Platform:

* **Page URLs** – For links to pages that have either no parameters or only parameters that are persistable entities, you should use [page URLs](/refguide/page-properties/#url). Using page URLs instead of microflow URLs increases performance speed because no microflow has to be executed. Furthermore, the URL will always be used for the page (even when opening it from a different source then the deep link). To keep the same URL as before, put the `name` of the deep link in the URL field, followed by the name of the attribute that was configured in the deep link. For example, use `product/{PageParameterName/AttributeName}` for a deep link with `name` `product` and `attribute` `AttributeName`.
    * Within the runtime setting of your application you can configure the page URL prefix. Change this from the default `p` to `link` to keep your existing URLs working. Note that after this you have to completely remove the Deep Link module from your app, or else your app will fail to start. 

* **Microflow URLs** – For cases not entirely covered by the page URL functionality, use [microflow URLs](/refguide/microflow/#url). Specifically, add a URL to the microflows you were using with the Deep Link module.
  
    {{% alert color="info" %}}If your Studio Pro version is below 10.9, then the microflow URLs do not support query parameters (for example `?param1=foo&param2=bar`), and therefore, you can end up with a different URL than before. To avoid this issue, make sure that you use Studio Pro version 10.9 or higher.{{% /alert %}}

* **Miscellaneous** – Other features of the deep link module can be replaced by their dedicated built-in features:
    * `Do not force a login action` is replaced by the [built-in security features](/howto/security/set-up-anonymous-user-security/) for [anonymous users](/refguide/anonymous-users/). 
    * `Alternative Index Page` is replaced by using distinct [theming options](/howto/front-end/configuring-your-theme/) depending on use case. If you specifically want to set up a dark mode page, see this [Mendix blog](https://www.mendix.com/blog/how-to-implement-dark-mode-in-your-apps/).  
    * `Track hit count` is replaced by [application access logs and metrics](/developerportal/operate/logs/) which allow you to track your app's traffic. 
    * `Keep the deep link the entire session` is no longer relevant, as page URLs give you finer-grained control over the URL the user sees in the browser.
