---
title: "Mendix Single Sign-On"
url: /developerportal/deploy/mendix-sso/
weight: 90
description: "Use the Mendix SSO module to add Single Sign-on to your app using the user's Mendix credentials"
#draft: true
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#Ownership claimed by Identity Services Team.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Mendix SSO](/appstore/modules/mendix-sso/) module enables your app end-users to sign in with their Mendix account when your app is deployed to Mendix Cloud.

{{% alert color="warning" %}}
Because your app end-users are signing in with a Mendix account, they will all need to [sign up for a Mendix account](https://signup.mendix.com/) before they can sign in to your app.

Mendix Single Sign-On (SSO) is only activated when your app is deployed to Mendix Cloud. When you run your app locally or on another cloud, you need to use local credentials.

Mendix SSO is not recommended for Production deployments because the Mendix SSO screens are Mendix branded.
{{% /alert %}}

Using Mendix accounts during development has the following benefits:

* You do not need a special authorization module to support resetting and changing passwords
* It is easy to develop and test multiple applications that all use the same sign-on mechanism

For information on installing and configuring the Mendix SSO module, see [Mendix SSO](/appstore/modules/mendix-sso/).

## Using Mendix SSO

{{% alert color="warning" %}}
Mendix Single Sign-On is only activated when your app is deployed to Mendix Cloud. When you run your app locally or on another cloud, you need to use local credentials.
{{% /alert %}}

### Signing On as an End-User

As an end-user, you will see the Mendix SSO screen when you open an app if this is your first time visiting the app environment or if you have not opened the app recently. From this screen, you can choose to sign in with local user credentials, or you can click **Mendix Account** to use your Mendix account with Mendix SSO.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/mendix-sso/sso-sign-on.png" alt="Mendix SSO sign-on screen" class="no-border" >}}

Apps implementing Mendix SSO require access to some of your profile information, such as your account identifier and your display name.

So, the first time you sign in to an environment (for example, myapp running in acceptance) as an end-user using Mendix SSO, the app will ask you to authorize access. Authorizing access allows the app to access certain information from your Mendix profile, as specified on the authorization page.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/mendix-sso/authorize-access.png" alt="Authorization screen" width=50% class="no-border" >}}

Click **Authorize** to continue using Mendix SSO with the app. Authorizing the app automatically signs you in to the app.

### Assigning End-User Roles

To give end-users access to your app, use the [Access Management](/developerportal/collaborate/general-settings/#managing-app-users) tab on the **Settings** page after opening your app in **Apps**.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/mendix-sso/access-management-tab.png" alt="" >}}

{{% alert color="warning" %}}
Do not attempt to add or delete Mendix SSO users using administration functions within the app. User access to your app can only be changed through the Mendix Portal.
{{% /alert %}}
