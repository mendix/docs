---
title: "Create a Personal Access Token with Warden"
category: "Collaboration"
menu_order: 80
description: "Explains the concept of Personal Access Tokens (PATs) and how platform users can use these security tokens to give application access to Mendix platform services on their behalf."
tags: ["Personal Access Token", "API", "PAT", Warden", "Developer Portal"]
---

# How to use Personal Access Tokens 

| This is a draft version of documentation that will be published on docs.mendix.com. |

This document explains the concept of Personal Access Tokens (PATs) and how platform users can use these security tokens to give application access to Mendix platform services on their behalf.
Currently the following Mendix services support usage of PATs: DataHub catalogue API, the Git Model Repository and Projects API.

# Introduction on Personal Access Tokens

Personal access tokens (PATs) are an alternative to using passwords. They are designed to be used in cases where the client application needs to get access on behalf of a specific platform user but the user is not ‘present’ at the time of access and so the user cannot login via a browser (Web SSO).  The client application can be any application; i.e. an application not built with mendix technology.

Platform users can create a PAT via the Mendix Warden app and are in control of what access is delegated via the PAT; the platform user selects the ‘scope’ while creating the PAT. The PAT itself is a ‘bearer’ token; anyone or anything that has access to the PAT can use it as if they were the associated platform user subject to the restrictions set up in the scope of the PAT.
PATs are security tokens that don’t expire but cannot be used if the associated user has been deactivated on the Mendix platform or when the user has ‘deleted’ the PAT via the Warden app.


> From a governance aspect it is important for Mendix Administrators to deactivate ex-employees in the Mendix platform; this will prevent those ‘leavers’ from logging into the platform but also blocks the delegated access via PATs. Note that this recommendation applies both when end-users use Mendix credentials and when end-users use SSO with authentication provided by their corporate IDP (BYOIDP).


# Create a Personal Access Token

Navigation
First step to create a PAT is to navigate to the ‘Warden’ application via https://warden.mendix.com. The Warden application is not yet fully integrated in the platform..

For 1st time users, the Warden application will look like this:

![](https://paper-attachments.dropbox.com/s_C02EA6FA34B65F39AD5F42555220D3A6F79779559F288D4ED4DE58BF17DBB423_1600976577826_file.png)


Define  the new PAT
After clicking the “Add button”, the user needs to set the following characteristics of the PAT:

- A name for the PAT. You may want to give it a name that reflects where/why you intend to use the PAT.
- Select the scopes (authorisations) that you want to delegate to your PAT.
![](https://paper-attachments.dropbox.com/s_691121B036D3B91C010B9206256B0D3EEE175BAA9162DBA13EF5A87D7BF0B101_1642416644958_image.png)


More details about the various scopes can be found in the documentation for the specific services.

Obtain the PAT
Click Create
When clicking the ‘Create’ button a dialogue is shown with your ‘token secret’, which os your actual PAT. You can copy the secret by clicking the ‘copy’ button on the right.
Next you need to store it in a safe location, it will not be displayed again.

![](https://paper-attachments.dropbox.com/s_C02EA6FA34B65F39AD5F42555220D3A6F79779559F288D4ED4DE58BF17DBB423_1600976857368_image.png)

# Manage your PATs

Subsequently, the Warden application shows you a list of the PATs you have created.
In this overview you can choose to delete a PAT, which will prevent anyone who may have obtained the PAT (the secret token) from successfully using it.

![](https://paper-attachments.dropbox.com/s_691121B036D3B91C010B9206256B0D3EEE175BAA9162DBA13EF5A87D7BF0B101_1642416938288_image.png)



# How to use a PAT

How to use a PAT depends on the API. As a general guideline, Personal Access Token should not be included into your source code!

## Use the PAT for DataHub access

To use the Personal Access Token on the [Data Hub APIs](https://docs.mendix.com/apidocs-mxsdk/apidocs/data-hub-apis) it must be passed as authorization header every request made to DataHub Catalog. The request will look like this


    GET /v1/register HTTP/1.1
    Host: catalog.mendix.com
    Authorization: mxtoken <your token>

In case the Personal Access Token is not valid, the response will be a HTTP 403 Access Denied. 

    403 Access Denied
    Content-Type: application/json
    
    {
      "error": ""
    }


## Use the PAT for Model API (Teamserver:Git)

See https://apidocs.rnd.mendix.com/platformsdk/latest/index.html

## Use the PAT for the Project API

See https://docs.mendix.com/apidocs-mxsdk/apidocs/projects-api

