---
title: "Create a Personal Access Token with Warden"
url: /developerportal/community-tools/warden/
weight: 10
description: "Explains the concept of Personal Access Tokens (PATs) and how platform users can use these security tokens to give application access to Mendix Platform services on their behalf."
tags: ["Personal Access Token", "API", "PAT", "Warden", "Developer Portal"]
---

## 1 Introduction 

This document explains the concept of Personal Access Tokens (PATs), how platform users can obtain one using **Warden**, and how platform users can use these security tokens to give application access to Mendix Platform services on their behalf.

The following Mendix services support usage of PATs:

* [Data Hub Catalog API](/apidocs-mxsdk/apidocs/data-hub-apis/)
* [App Repository API](/apidocs-mxsdk/apidocs/app-repository-api/)
* [Projects API](/apidocs-mxsdk/apidocs/projects-api/)

## 2 What Is a Personal Access Token?

Personal access tokens (PATs) are an alternative to using passwords. They are designed to be used in cases where the client application needs to get access on behalf of a specific platform user but the user is not ‘present’ at the time of access and so the user cannot login via a browser (Web SSO). The client application can be any application; i.e. an application not built with mendix technology.

Platform users can create a PAT via the Mendix Warden app and are in control of what access is delegated via the PAT; the platform user selects the ‘scope’ while creating the PAT. The PAT itself is a ‘bearer’ token; anyone or anything that has access to the PAT can use it as if they were the associated platform user subject to the restrictions set up in the scope of the PAT.
PATs are security tokens that don’t expire but cannot be used if the associated user has been deactivated on the Mendix Platform or when the user has ‘deleted’ the PAT via the Warden app.

{{% alert color="info" %}}
From a governance aspect it is important for Mendix Administrators to deactivate ex-employees in the Mendix Platform; this will prevent those ‘leavers’ from logging into the platform but also blocks the delegated access via PATs. Note that this recommendation applies both when end-users use Mendix credentials and when end-users use SSO with authentication provided by their corporate IDP (BYOIDP).
{{% /alert %}}

## 3 How to Create a Personal Access Token

The Personal Access Tokens are managed using a separate app called **Warden**.

### 3.1 How to Open Warden

First step to create a PAT is to navigate to the separate [Warden](https://warden.mendix.com) application at https://warden.mendix.com.

For first-time users, the Warden application will look like this:

{{< figure src="/attachments/developerportal/community-tools/mendix-profile/warden/first-time-warden.png" >}}

### 3.2 Define a new Personal Access Token

Click **Add**

You now need to set the following characteristics of the PAT:

* a name for the PAT — You may want to give it a name that reflects where/why you intend to use the PAT
* the scopes (authorizations) that you want to delegate to your PAT

    {{< figure src="/attachments/developerportal/community-tools/mendix-profile/warden/create-pat.png" >}}

More details about the various scopes can be found in the documentation for the specific services.

### 3.3 Obtain the Personal Access Token

Click **Create**

A dialog is shown with your **Token secret**, which is the PAT. You can copy the secret by clicking the ‘copy’ button on the right.

{{% alert color="warning" %}}
You need to store this in a safe location as it will not be displayed again.
{{% /alert %}}

{{< figure src="/attachments/developerportal/community-tools/mendix-profile/warden/token-secret.png" >}}

## 4 Manage your Personal Access Tokens

If you have previously created PATs, the Warden application shows you a list of them.

You can delete a PAT. This will prevent anyone who may have obtained the Token secret of the PAT from successfully using it.

{{< figure src="/attachments/developerportal/community-tools/mendix-profile/warden/manage-pat.png" >}}

{{% alert color="warning" %}}
You cannot obtain the Token secrets of these PATs. You can only see that they exist. 
{{% /alert %}}

## 5 How to Use a Personal Access Token

Use of a PAT depends on the API you are accessing.

{{% alert color="warning" %}}
For security, Personal Access Tokens should not be included into your source code!
{{% /alert %}}

### 5.1 Use a Personal Access Token for DataHub Access

To use the Personal Access Token with the [Data Hub APIs](/apidocs-mxsdk/apidocs/data-hub-apis/) it must be passed as the authorization header on every request made to the Data Hub Catalog. The request will look like this:

```
GET /v1/register HTTP/1.1
Host: catalog.mendix.com
Authorization: mxtoken <your token>
```

If the Personal Access Token is not valid, the response will be an HTTP 403 Access Denied. 

```
403 Access Denied
Content-Type: application/json

{
    "error": ""
}
```

### 5.2 Use a PAT for the App Repository API

See [App Repository API](/apidocs-mxsdk/apidocs/app-repository-api/)

### 5.3 Use a PAT for the Project API

See [Projects API](/apidocs-mxsdk/apidocs/projects-api/)

