---
title: "User Settings"
url: /community-tools/mendix-profile/user-settings/
weight: 2
description: "Describes the user settings for the Mendix Portal."
---

## Introduction {#settings}

On the [User Settings](https://user-settings.mendix.com/link/profile) page, you can edit your [Mendix Profile](/community-tools/mendix-profile/).

## Profile {#profile}

On the [Profile](https://user-settings.mendix.com/link/profile) page, you can upload your profile image and fill in your personal and work details

You can tell the Mendix community about yourself and your work experience. Let everyone know your area of expertise by filling in your **Industry** and **Skills**.  

You can also connect your social accounts via **Twitter URL** and **LinkedIn URL**.

You can also choose to make your profile public (which will allow the Mendix community to view your profile) by clicking **Make Profile Public**. Be sure to do the following to make your profile public:

* Add an avatar
* Enter a **Job Title**, **Department**, and **Country of Residence**
* Add some details **About You**
* Add at least one **Skill**
* Add at least one **Industry Experience** item

{{% alert color="info" %}}
To make your public profile private again, click **Make Profile Private**. 
{{% /alert %}}

You can also add a **Recover Email** address, which is useful if you lose access to your account or Mendix Profile. You can provide a non-business email address for this.

### Merging Profiles {#merging-profiles}

If you own two (or more) user accounts, Mendix recommends merging the profiles of these user accounts with each other. This saves you from having to maintain multiple profiles, and your community contributions will be stored with the one profile you actively use. As a result, you will have a stronger single Mendix Profile, and you will not have to keep track of your progress scattered in multiple profiles in the platform.

The **Merge Profile** process merges the information associated with the merged profiles, resulting in a single Mendix Profile with two (or more) user accounts related to it. For details on what information ends up in the resulting merged profile, see the [Results of Merge Process](#merge-profile-result) section below.

These are the prerequisites for the profile merge actions:

* Own two (or more) user accounts
* Have platform access with at least one of these user accounts
* Be able to receive emails for the user profiles that will be merged (this can be your email address used to log in or a profile email address)

{{% alert color="warning" %}}
You should also prepare for the merge by adding your new account to the relevant apps of your old account. Mendix recommends doing this so that you do not lose access to the apps of your old account, and also so you do not need a new invitation to those apps to gain access.
{{% /alert %}}

Before you start with a new profile merge action, it is important to understand what scenarios are possible and what it means for the profile merge process. The following starting scenarios are possible:

* **All user accounts give you access to the Mendix Platform** – If you have access to the platform with all your user accounts, you are able to initiate a merge after signing in with any of the accounts. For the other profile, a confirmation email message is sent that enables starting the merge action.
* **One of the user accounts gives you access to the Mendix Platform** – If you have access to only one of your user accounts, the profile merge process can only be initiated from that account. Furthermore, the user account you signed in with determines what profile information ends up in the resulting merged profile in the case of properties where the system cannot determine the information that should be kept. For the other profile, a confirmation email message is sent that enables starting the merge action. 
* **None of the user accounts gives you access to the Mendix Platform** – You should own at least one user account that provides access to the Mendix Platform.

{{% alert color="warning" %}}
If you do not have access to any of the email addresses linked to the user accounts/profiles that you want to merge and you cannot log in with the Mendix Profile you want to merge, click **Create Support Request** to go to Mendix Support. Mendix Support will contact you to change the profile **Recovery** email. Once this is done, you will be able to follow the steps below. 
{{% /alert %}}

{{% alert color="warning" %}}
When merging user profiles, a merge confirmation is needed for the user account you are not signed in with. The verification code that you need to confirm the merge operation will arrive by email. Therefore, you must be able to receive the verification email in an email inbox that is associated with the user account or the associated profile.  
{{% /alert %}}

### Merge Process {#merge-process}

Follow these steps to merge your profiles:

1. Click **Merge Profile**.
2. In the dialog box that appears, enter the email address of one of the accounts linked to the profile you want to transfer information from. Then click **Next**.
3. You will be asked to choose an email address to receive a verification code, so choose an email address you have access to. This step is needed to verify that you are the owner of the Mendix Profile you are trying to merge.
4. Enter the verification code you received via the selected email address.
5. After clicking **Verify**, you will see an overview of the profile information that will be deleted and the information that will be kept. This includes earned points, achievements, certifications, and Academy progress that will be merged to your target profile. Note that credits cannot be merged; they remain on the accounts where they were earned.
6. To proceed with the merge, click **Merge**. You will be notified once the merge is completed.

{{% alert color="info" %}} 
With the merge, the accounts of both profiles are kept. None of the accounts will be deactivated from the Mendix Platform. That should be done by a [Mendix Admin](/control-center/members/).
{{% /alert %}}

### Merge Result {#merge-profile-result}

The result of the profile merge process is that the information of the profiles is merged into one profile. The information that can be added to the profile will be associated with the resulting Mendix Profile. However, in a situation where there is conflicting data for the two profiles to be merged, the system uses the profile data of the user account you are signed in with. 

The following details may have conflicts, but these can easily be updated after the merge process: 

* Avatar image
* **Name**
* **Job Title**
* **Country of Residence**
* **About You**
* **Twitter URL**
* **LinkedIn URL**

{{% alert color="warning" %}}
It is not possible to separate profiles after they have been merged. Double-check that the information from all of your profiles is valid.
{{% /alert %}}

## Accounts

The [Accounts](https://user-settings.mendix.com/link/account) page is an overview of all the accounts you own and that are linked to your Mendix Profile. You can see which account you are logged in with, the company associated with each user account, if single sign-on is enabled, and the status of each user account (**Active** or **Deactivated**).

### Managing Account Passwords

If you are using [BYOIDP](/control-center/security/set-up-sso-byoidp/) to set up identity federation between your corporate IdP and Mendix, you will manage account credentials through the corporate IdP.

If you are using the Mendix platform to manage credentials then your password has the following characteristics:

* By default, you are requested to change your password every 90 days. A Mendix Admin can change this password policy setting in [Control Center](/control-center/security/).

    You can update the password of your logged-in account via the [Change Password](https://login.mendix.com/mxid3/request-password-reset) button that is available by clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) on the logged-in account. You can also reach this screen using the **Forgot password?** link on the login screen.

* Passwords on the Mendix platform must fulfill the following criteria:

    * The password must contain 
        * at least one special character from `` `~!@#$%^&*()-_+=[]{};:'"\|,.<>/? ``
        * at least one digit
        * at least one uppercase letter
        * at least one lowercase letter
    * and it must be between 12 and 200 characters in length.

### Deleting an Account

If you do not want to use an account anymore, you can remove it from this page. Click **More Options** for the logged-in account and select **Delete this account**. All of the account information is then removed and deleted from Mendix's servers. All the personal and identifiable information of your profile is deleted when you delete all of your accounts. 

You can only remove the account with which you are logged in. If you do not have access to your account anymore, please reach out to [Mendix Support](https://support.mendix.com/hc/en-us) to delete your account.

### Creating an Account

If you already have a profile and want to add a new account to this profile, you can create the new account on your profile's **Accounts** overview. This action combines signing up for a new Mendix Platform account and [merging your profiles](#merging-profiles). After successfully completing the flow, the new account appears in the **Accounts** overview.

Follow these steps to add a new account to your Mendix Profile:

1. Click **Create Account**.
2. In the dialog box that appears, enter the email address of the account you want to create, then click **Next**.
3. In the next dialog box, enter a secure **Password** and indicate whether you want to receive Marketing communications from Mendix on this account. Then click **Next**.
4. Enter the verification code you receive via the selected email address.
5. Click **Verify**. You will see a loader while your account is created in the background.
6. If all went well, the new account is visible in the list of accounts that are part of your Mendix Profile!

{{% alert color="warning" %}}
This feature is not available if your company has enabled single sign-on. If this is the case, you have to follow the regular sign up process and then [merge the new account to your profile](#merging-profiles) when the sign-up is completed.
{{% /alert %}}

## Notification Settings {#notifications}

On the [Notification Settings](https://user-settings.mendix.com/link/notifications) page, you can configure how you want to be notified of Mendix Platform activity.

When you click **Configure Watched Apps** at the bottom of the page, you can choose to **Stop Watching** an app. To watch an app again, return to [My Apps](/developerportal/#my-apps).

You can also configure your **Buzz Notifications**:

* **Receive daily digest** – disabled by default
* **Receive updates for Buzz threads in which I am active** – enabled by default

## Developer Settings {#dev-settings}

On the [Developer Settings](https://user-settings.mendix.com/link/developersettings) page, you can manage your two-factor authentication, API keys, and personal access tokens (PAT).

### Two-Factor Authentication{#profile-2fa}

In this section, you can view the status of your two-factor authentication (2FA). You can see if your 2FA is configured with SMS or an authenticator app, and you can also deactivate your 2FA.

{{< figure src="/attachments/community-tools/mendix-profile/2fa.png" max-width=80%  >}}

For more information, see [Two-Factor Authentication](/developerportal/deploy/two-factor-authentication/).

### API Keys {#profile-api-keys}

In the [API Keys](https://sprintr.home.mendix.com/link/personalapikeys) section, you can create and view the API keys that external applications can use to connect via the [Mendix Platform APIs](/apidocs-mxsdk/apidocs/) on behalf of your user account. An API key created here allows the apps using it to act on behalf of the user who created the key. This means the apps will have the same privileges as the user who created the key. An API key allows you to execute operations that need authentication without a password. For example, you can use an API key to perform scripted operations on your application model with the SDK. 

To get a Mendix API key, click **Configure API Keys** > **Create New API Key** and follow the instructions.

{{% alert color="warning" %}}
Make a note of the API key, as it will only be shown once. 
{{% /alert %}}

{{< figure src="/attachments/community-tools/mendix-profile/api-key.png" class="no-border" >}}

{{% alert color="info" %}}
We may cache your API key. This means that when you revoke an API key, it may take some time before the change takes effect.
{{% /alert %}}

For more information, see the following:

* [Authentication](/apidocs-mxsdk/apidocs/authentication/)
* [APIs](/apidocs-mxsdk/apidocs/)
* [Mendix Platform SDK](/apidocs-mxsdk/mxsdk/)
* [How to Manage App API Keys](/developerportal/settings/api-key/)

### Personal Access Tokens {#pat}

On the **Personal Access Tokens** section of the [Developer Settings](https://user-settings.mendix.com/link/developersettings) page, you can view, create, and manage your PATs.

Some platform APIs use personal access tokens (PATs) rather than API keys. This section explains the concept of PATs, how you can obtain one, and how you can use this security token to give an application access to Mendix Platform services on your behalf.

PATs are used as alternatives to passwords. They are designed to be used when the client application needs to get access on behalf of a specific platform user, but the user is not "present" at the time of access, so the user cannot login via a browser (web SSO). The client application can be any application (meaning, even an app not built with Mendix).

You can create a PAT and remain in control of what access is delegated via the PAT by selecting the scopes. The PAT itself is a "bearer" token, which means that anyone or anything that has access to the PAT can use it as if they were the associated platform user subject to the restrictions set up in the scope of the PAT.

PATs are security tokens that do not expire, but they cannot be used if the associated user has been deactivated on the Mendix Platform or when the user has deleted the PAT.

{{% alert color="info" %}}
From a governance aspect, it is important for Mendix Admins to deactivate ex-employees in the Mendix Platform. This will prevent those leavers from logging into the platform, and it also blocks the delegated access via PATs. This recommendation applies both when users use Mendix credentials, and when users use SSO with authentication provided by their corporate IDP (BYOIDP).
{{% /alert %}}

The following Mendix services support usage of PATs:

* [Catalog API](/apidocs-mxsdk/apidocs/catalog-apis/)
* [App Repository API](/apidocs-mxsdk/apidocs/app-repository-api/)
* [Projects API](/apidocs-mxsdk/apidocs/projects-api/)

#### Creating a PAT {#create-pat}

In the **Personal Access Tokens** section, you can create a new PAT. To do so, click **New Token**, and set the following characteristics of the PAT:

* **Name** – give the PAT a name that reflects where or why you intend to use it
* **Defined Scopes** – the scopes (authorizations) that you want to delegate to your PAT

{{< figure src="/attachments/community-tools/mendix-profile/create-pat.png" width="500px" alt="Dialog box for defining the PAT scopes" class="no-border" >}}

Details about the scopes can be found in the documentation for specific services.

After you click **Create**, a pop-up window shows your secret token, which is the PAT. You must copy the secret token via **Copy Token**.

{{< figure src="/attachments/community-tools/mendix-profile/token-secret.png" width="500px" alt="Created PAT in pop-up window" class="no-border" >}}

{{% alert color="warning" %}}
Store the secret token in a safe location, because it will not be displayed again!
{{% /alert %}}

#### Managing a PAT

To see the scopes of a PAT you have created, click **View Details**.

{{< figure src="/attachments/community-tools/mendix-profile/manage-pat.png" class="no-border" >}}

{{% alert color="info" %}}
You cannot see the secret token of a PAT here. You can only see that the PAT exists along with its scopes. 
{{% /alert %}}

You can delete a PAT you have created via **Delete**. This will prevent anyone who has obtained the PAT's secret token from successfully using it.

#### Using a PAT

Use of a PAT depends on the API you are accessing.

{{% alert color="warning" %}}
For security reasons, you should not include PATs into your source code.
{{% /alert %}}

To use a PAT with the [Catalog APIs](/apidocs-mxsdk/apidocs/catalog-apis/), it must be passed as the authorization header on every request made to the Catalog. The request will look like this:

```http
GET /v1/register HTTP/1.1
Host: catalog.mendix.com
Authorization: mxtoken <your personal access token>
```

If the PAT is not valid, the response will be `HTTP 403 Access Denied`:

```http
403 Access Denied
Content-Type: application/json

{
    "error": ""
}
```

For information on other PAT usages, see the [App Repository API](/apidocs-mxsdk/apidocs/app-repository-api/) and [Projects API](/apidocs-mxsdk/apidocs/projects-api/).

## Personal Data

On the [Personal Data](https://user-settings.mendix.com/link/notifications) page, you can view and download your personal data. The Mendix Platform stores certain personal information about you. You can view this information on the page or download it by clicking  **Download Personal Data**.

{{% alert color="info" %}}
Mendix has been tracking these data changes since November 2018.
{{% /alert %}}
