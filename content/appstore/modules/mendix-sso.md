---
title: "Mendix SSO"
url: /appstore/modules/mendix-sso/
category: "Modules"
description: "Describes the configuration and usage of the Mendix SSO module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "sso", "single sign on", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

With the [Mendix SSO](https://marketplace.mendix.com/link/component/111349/) module, you can utilize single sign-on functionality by directly integrating with the Mendix identity provider and leveraging the [OpenID Connect](https://openid.net/connect/) framework.

This module allows end-users to log in with their Mendix account with the click of a button, instead of requiring their local user credentials. This avoids having to deal with local user management or password reset flows, and improves governance capabilities over your app landscape.

### 1.1 Typical Usage Scenario

You can use this module when you want your application's end-users to sign in with their Mendix account. That means you will not have to manage user credentials locally.

### 1.2 Features

* Simple steps for adding the module to your app, no more configuration required
* Single sign-on with your Mendix account for any application that implements this module
* App end-user access management that is handled in the [Mendix Developer Portal](/developerportal/)

{{% alert type="info" %}}
[Mendix Admins](/developerportal/control-center/#company) can manage [groups](/developerportal/control-center/#groups) that grant app permissions to groups of users.
{{% /alert %}}

### 1.3 Limitations

* Due to the large number of app creations, synchronizing newly created apps might take some time. When an app is not yet synchronized, the deployment will not work when you attempt to deploy your app to the Mendix Developer Portal, as it will not recognize your app. In these cases, please be patient and try again later or contact [Mendix Support](https://support.mendix.com/hc/en-us) if the problem persists. Mendix is working on resolving the volume throughput issues.
* This module does not work for [native mobile](/refguide/native-mobile) apps.
* The default app `Logout` action resolves to the origin location found in a session cookie, which (re)triggers the `/openid/login/` endpoint, which logs the end-user in again. 

### 1.4 Dependencies

Your app has to be deployed on the Mendix Cloud in order to use this module.

## 2 Installation & Configuration

For instructions, see [Mendix Single Sign-On](/developerportal/deploy/mendix-sso) in the *Developer Portal Guide*.

## 3 Read More

* [Mendix Single Sign-On](/developerportal/deploy/mendix-sso)

