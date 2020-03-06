---
title: "SSO Using AppCloudServices"
parent: "mendix-sso"
menu_order: 99
description: "Use the AppCloudServices module to add Single Sign-on to your app using the user's Mendix credentials"
tags: ["AppCloudServices", "SSO", "Single Sign-on", "Mendix credentials"]
#Ownership claimed by Identity Services Team.
#Needs to be rewritten to remove AppCloud references and just concentrate on SSO. Also needs to be tested.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

{{% alert type="warning" %}}
The AppCloudServices module has been deprecated. Enabling single sign-on with your Mendix account is now managed by the MendixSSO module. Please see [Mendix Single Sign-On](mendix-sso) for more information.

This documentation is only meant for users with legacy applications which still use AppCloudServices.
{{% /alert %}}

The [AppCloudServices module](https://appstore.home.mendix.com/link/app/934/) module allows you to integrate your app with the Mendix Cloud, including the single sign-on (SSO) feature.

Want to know more about all the possibilities this opens up? Take a look at the blog post titled [New Mendix AppCloud Ignites Application Innovation by Connecting All Custom Apps, Developers, Data, and Users in One Enterprise Cloud Ecosystem](http://www.mendix.com/press/new-mendix-appcloud/).

## 2 Steps & Example

{{% alert type="warning" %}}
These steps use the [Company Expenses](https://appstore.home.mendix.com/link/app/240/) (CE) app as an example.

This app is no longer available in the App Store but the same principles apply to other apps. There are no plans to update this document to use a different example app as the AppCloudServices module has been deprecated.
{{% /alert %}}


To incorporate the AppCloudServices module into an existing app, follow these steps:

1. Open your app project in Mendix Studio Pro.
2. Open the **App Store** inside Studio Pro.
3. Search for "AppCloudServices," then open and download the Mendix **AppCloudServices** module.
4.  Select **Add as a new module** and click **Import**. The module should now be visible in the **Project Explorer**:

	![](attachments/integrate-with-mendix-sso/18581209.png)

	Once the module has been imported, you can make use of the Mendix AppCloud Navigation widget. In order to do this, make sure all the starting pages in your app use **AppCloudMasterLayout** as their master layout. If necessary, you can manually add the Mendix AppCloud Navigation widget to the starting pages:

	![](attachments/integrate-with-mendix-sso/18581216.png)

	In the CE app, you need to apply the master layout to **Sidebar_Right**. Also, do not forget pages that can be opened through microflows and deeplinks.

5.  Move and rename the (excluded) microflow **Example_OnFirstLoginAppCloudUser** (which is located in **AppCloudServices** > **Single Sign On** > **API**) to an appropriate module and include it. In the CE app, moving it to the **Expenses** module and renaming it to *OnFirstLoginAppCloudUser* is a logical choice.

	![](attachments/integrate-with-mendix-sso/18581211.png)

	Any changes made to the AppCloudServices module in your app will be overwritten when you upgrade to a newer version of the AppCloudServices module.

6.  Open the **InvokeOnFirstLoginAppCloudUser** microflow from the **Single Sign On** > **Implementation** folder. There you will find an action called **Call OnFirstLoginAppCloudUser** . You need to change this action so it will call the microflow created in the previous step.

	![](attachments/integrate-with-mendix-sso/18581215.png)

7.  Add the Boolean attribute **IsLocalUser** (with default **true** ) to your App User entity. This is the entity that represents your user accounts and extends the **System.User** entity. The Boolean attribute allows you to differentiate between Mendix accounts and local accounts. For the CE app, this entity is called **Expenses.Employee**.

	![](attachments/integrate-with-mendix-sso/18581214.png)

	It is a good idea to give the administrator role(s) (or equivalent) read access to the **IsLocalUser** attribute with an access rule.

8. Open the microflow you copied in step 5.
9.  Open the **Create** action and select your App User entity as the object type to be created (instead of the preselected **UserManagement.Account**). You will need to reset the two members in this action afterwards. In the CE app, you want to change the **Entity** to **Expenses.Employee**, and then change the first member to **FullName** and the second to **IsLocalUser**.

	![](attachments/integrate-with-mendix-sso/18581213.png)

10. Now you want to make sure the **StartAppCloudServices** microflow is called during startup, so open the project **Settings**.
11. Go to the **Runtime** tab and set **AppCloudServices.StartAppCloudServices** as the **After startup** microflow:

	![](attachments/integrate-with-mendix-sso/18581212.png)

	{{% alert type="info" %}}If this microflow is not called during startup, your users will encounter **404 Not Found** errors when trying to navigate to your app.{{% /alert %}}

Congratulations! Your app now makes use of the AppCloudServices.

## 3 Managing User Logins with Mendix AppCloudServices SSO{#managing-mendix-sso}

After adding the AppCloudServices module to your app, users can sign in automatically with their Mendix account. When a user opens your app, they are sent to the OpenId auto-login URL (for example, `https://yourapp.mendixcloud.com/openid/login`), and then they are redirected to the (role-based) home page that is configured in the app model.

While this is enough for many users, in some cases, you also want to be able to use the root app UL (`https://yourapp.mendixcloud.com/`). However, when users go to that URL, they will be presented with the default Mendix login page, which does not provide them the option to sign in with their Mendix account. To create a more fluent experience, you should consider two things: 

* Whether you need to support non-Mendix account (local) users
* Whether you need to support anonymous users in your app

This leads to four scenarios, for which different solutions should be implemented:

|   | Local users disabled | Local users enabled |
| --- | --- | --- |
| Anonymous users disabled | (1) Automatically sign in users with their Mendix account | (2) Allow users the option to login with a local account or with a Mendix account |
| Anonymous users enabled | (3) Allow users to login with a Mendix account from an anonymous session | (4) Users can login with a Mendix or local account from an anonymous session |

Based on your need to support local users and/or anonymous users, implement the solution mentioned in the table. The final four sections of this How To each describe one of the solutions.

### 3.1 Automatically Log Users in with their Mendix Account

When only users with a Mendix Account are supported in your app, it makes sense to just log users in automatically. This means that they should be redirected to `/openid/login` when they reach the app, as in, when they open `/index.html`. Add the four lines marked with a pound sign (`#`) to your custom index.html file in the theme directory in the project root (do not copy the pound signs):

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Mendix 5</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes">

        <!-- Mendix Stylesheets-->
        <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="mxclientsystem/mxui/ui/mxui.css">

        <!-- Custom Stylesheet -->
        <link rel="stylesheet" href="css/theme.css">

    </head>
    <body class="" dir="ltr">

        <!-- Page Area Mendix Modeler -->
        <div id="content"></div>

        <!-- Mendix Client JS -->
        <script>
            dojoConfig = {
                isDebug: false,
                rtlRedirect: "index-rtl.html",
                baseUrl: "mxclientsystem/dojo/"
            };
        </script>
#       <script>
#           if (!document.cookie || !document.cookie.match(/(^|;)originURI=/gi))
#               document.cookie = "originURI=/openid/login";
#       </script>
        <script src="mxclientsystem/mxui/mxui.js"></script>
    </body>
</html>

```

If you do not have a custom index.html yet, you can take the one that is generated on deployment by Studio Pro, and customize it. Find that file and copy it to the theme/ directory:

1.  From the menu bar, choose Project → Deploy for Eclipse
2.  Then choose Project → Show Project Directory in Explorer
3.  Open the folder `deployment`, and then the folder `web`.
4.  Copy the `index.html` file to the `/theme/` folder in the root of your project (two folders up), and update it with the change mentioned above.

Once this is done, after deploying your app in the Mendix Cloud, you can test the implementation by pointing your browser to `https://yourapp.mendixcloud.com/`, after which you should be automatically redirected to the Mendix Account login page, and then redirected and logged in to your app.

### 3.2 Users Can Sign in with a Mendix or Local Account

When users should be able to sign in with either a Mendix account or with a local account, the default login page is not sufficient: it only allows users to login with a local account. To solve this, you should create a custom login page, which also allows users to login with their Mendix account. As an example, you could create this page:

![](attachments/integrate-with-mendix-sso/18581287.png)

Additionally, you want users to automatically be redirected to this page when they reach the app. To implement this, you need to do two things.

1.  You need to automatically redirect users from `/index.html` to `/login.html` (in a similar manner as in the previous scenario).
2.  You need to implement a custom `/login.html` page with two login options, a local account-based login and a Mendix account-based login.

Similar to the previous scenario, change your `index.html` file in the `/theme` directory to redirect users, but now to `/login.html`:

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Mendix 5</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes">

        <!-- Mendix Stylesheets-->
        <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="mxclientsystem/mxui/ui/mxui.css">

        <!-- Custom Stylesheet -->
        <link rel="stylesheet" href="css/theme.css">

    </head>
    <body class="" dir="ltr">

        <!-- Page Area Mendix Modeler -->
        <div id="content"></div>

        <!-- Mendix Client JS -->
        <script>
            dojoConfig = {
                isDebug: false,
                rtlRedirect: "index-rtl.html",
                baseUrl: "mxclientsystem/dojo/"
            };
        </script>
#       <script>
#           if (!document.cookie || !document.cookie.match(/(^|;)originURI=/gi))
#               document.cookie = "originURI=/login.html";
#       </script>
        <script src="mxclientsystem/mxui/mxui.js"></script>
    </body>
</html>

```

To implement the previously shown reference login page, you need a `login.html` page, and an accompanying `login.css` stylesheet. Place the files in the theme directory, next to the `index.html`:

`login.html`

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Mendix 5 - Login</title>
        <meta name="viewport" content="width=device-width, user-scalable=no,
              initial-scale=1, maximum-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="/login.css">
    </head>
    <body>
        <div class="login-container">
            <form id="loginForm" class="login-form">
                <div class="login-logo"></div>
                <a id="ssoButton" href="/openid/login" class="login-sso-button btn btn-primary">
                    Sign in with your Mendix account
                </a>

                <label class="login-or-label">&ndash; or &ndash; </label>

                <div class="login-form-inputs well">
                    <label class="login-local-label">Sign in with a local account</label>
                    <div id="loginMessage" class="alert alert-danger login-message"></div>

                    <div class="form-group">
                        <label id="usernameLabel" for="usernameInput">User name</label>
                        <input id="usernameInput" class="form-control" type="text"
                               placeholder="User name" autocorrect="off" autocapitalize="none">
                    </div>
                    <div class="form-group">
                        <label id="passwordLabel" for="passwordInput">Password</label>
                        <input id="passwordInput" class="form-control" type="password"
                               placeholder="Password" autocorrect="off" autocapitalize="none">
                    </div>
                    <button id="loginButton" type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>

        <script src="js/login_i18n.js"></script>
        <script src="js/login.js"></script>
    </body>
</html>

```

`login.css`

```css
html, body {    height: 100%;
}o
.login-cntainer {
    display: table;
    width: 90%;
    max-width: 300px;
    min-width: 180px;
    height: 80%;
    margin: auto;
    text-align: center;
}
.login-form {
    display: table-cell;
    padding: 30px 10px 10px;
    vertical-align: middle;
    text-align: center;
}
.login-logo {
    height: 40px;
    margin-bottom: 50px;
    background: url(images/mendix-logo.png) no-repeat center;
}
.login-message {
    display: none;
}
label {
    font-weight: bold;
}
.login-form input {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width: 100%;
    height: 30px;
}
.login-sso-button {
    display: block;
    margin: auto;
}
.login-or-label {
    display: block;
    width: 80%;
    margin: 20px auto;
    text-align: center;
    font-weight: normal;
}
.login-form-inputs .login-local-label {
    font-weight: bold;
}
.login-form-inputs {
    text-align: left;
}
.login-form-inputs label {
    font-weight: normal;
}

```

To test your implementation, deploy to the Mendix Cloud, and browse to your app, e.g. `https://yourapp.mendixcloud.com/`. You should be redirected to the new login page. Try to login with a local user (e.g. the administrator, if you set it up), sign out, and try to sign in with a Mendix account by using the link.

### 3.3 Users Can Sign in with a Mendix Account from an Anonymous Session

When part of your app targets anonymous users, there are anonymous pages in your app. You need to support the case where users login to your app with their Mendix account from an anonymous page.

To solve this problem, add somewhere in the anonymously accessible part of your app a link to `/openid/login`. Use the [HTML/JavaScript Snippet](https://appstore.home.mendix.com/link/app/56/) widget from the App Store to create a link. Set the content of the snippet to: `<a href="/openid/login">Sign in with your Mendix account</a>`

To try out your implementation, deploy your app to the Mendix Cloud, and go to your app, e.g., `https://yourapp.mendixcloud.com/`. Go to the page where you inserted the link, and click it. You should be redirected to the Mendix Account login page, and then back to your app, to the (role-based) homepage of the user with which you logged in.

### 3.4 Users Can Sign in with a Mendix or Local Account from an Anonymous Session

This scenario is similar to the previous one, except now users need to be able to either login to your app with a Mendix account, or a local account. This can be implemented by adding a link to a custom login page, similar to the one in scenario 2.

To implement this, add a link to the custom login page in the anonymous part with your app. Similar to in the previous scenario, this can be implemented with the HTML/JS snippet custom widget from the App Store. Set the content of the snippet to: `<a href="/login.html">Log in</a>`.

The custom login page can be created in a similar manner as in scenario 2, with the same `login.html` and `login.css` files.

You can view the implementation by deploying your app to the Mendix Cloud and going to your app, e.g. `https://yourapp.mendixcloud.com/`, and going to the page where you inserted the link. Click on the link, and you should see the custom login page. Test the local account login, and logout. Then test the Mendix account login.

## 4 Troubleshooting Common AppCloudServices SSO Errors

There are a couple of common problems you may encounter when developing an AppCloud-enabled app.

### 4.1 "404 Not Found" Errors When Navigating to `/openid/login`

A frequent cause of "404 not found" errors when navigating to `/openid/login` is that the OpenID request handler is not enabled. It should be enabled on startup.

To fix this, make sure the **AppCloudServices.StartAppCloudServices** microflow is executed during the startup of your application. You can do this by setting it as the app's after-startup microflow or by having the application's existing after-startup microflow trigger it.

### 4.2 Realm Verification Errors

These are commonly caused by compatibility issues with JAR files in the `<projectpath>/userlib` directory of your project. For details on the most common compatibility issues, refer to [Troubleshooting](/refguide/troubleshooting) in the *Studio Pro Guide*.

## 5 Read More

* [Mendix Cloud: Deploy](mendix-cloud-deploy)
