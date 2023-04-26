---
title: "Mendix Single Sign-On"
url: /developerportal/deploy/mendix-sso/
weight: 70
description: "Use the Mendix SSO module to add Single Sign-on to your app using the user's Mendix credentials"
tags: ["SSO", "Single Sign-on", "Mendix credentials", "Mendix SSO"]
#draft: true
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#Ownership claimed by Identity Services Team.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Mendix SSO module](/appstore/modules/mendix-sso/) enables your app end-users to sign in with their Mendix account when your app is deployed to the Mendix Cloud.

{{% alert color="warning" %}}
Because your app end-users are signing in with a Mendix account, they will all need to [signup for a Mendix account](https://signup.mendix.com/) before they can sign in to your app.

Mendix Single Sign-On is only activated when your app is deployed to the Mendix Cloud. When you run your app locally, or on another cloud, you will need to use local credentials.

Mendix SSO is not recommended for Production deployments as the Mendix SSO sign in screens are Mendix branded.
{{% /alert %}}

Using Mendix accounts while developing has the following benefits:

* You do not need a special authorization module to support resetting and changing passwords
* It is easy to develop and test multiple applications which all use the same sign-on mechanism

For information on installing and configuring the Mendix SSO module, see [Mendix SSO](/appstore/modules/mendix-sso/)

## 2 Using Mendix SSO

{{% alert color="warning" %}}
Mendix Single Sign-On is only activated when your app is deployed to the Mendix Cloud. When you run your app locally, or on another cloud, you will need to use local credentials.
{{% /alert %}}

### 2.1 Signing On as an End-User

When you open an app as an end-user, and this is the first time visiting the app environment *or* you have not opened the app recently, you will see the Mendix SSO sign-on screen. You can still choose to sign-on with local user credentials, but to use your Mendix Account with Mendix SSO, click  the **Mendix Account** button.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/mendix-sso/sso-sign-on.png" alt="Mendix SSO sign-on screen" >}}

Every app implementing Mendix SSO needs some of your profile information (like your account identifier and your display name) to work. So for each environment (for example, myapp running in acceptance), the first time you sign in as an end-user using Mendix SSO the app will ask you to authorize access. This means that the app can access certain information held in your Mendix profile as specified on the authorization page.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/mendix-sso/authorize-access.png" alt="Authorization screen" >}}

Click **Authorize** to continue using Mendix SSO with this app. After authorizing the app you are automatically signed in to the app.

### 2.2 Assigning End-User Roles

Give end-users access to your app through the [Manage App Users](/developerportal/collaborate/general-settings/#managing-app-users) page of the Developer Portal. You can get to this page in the Developer Portal from the **General Settings** page of your app.

{{% alert color="warning" %}}
Do not attempt to add or delete Mendix SSO users using administration functions within the app. If user access is not modified through the Developer Portal, then user access to your app will not be changed.
{{% /alert %}}
