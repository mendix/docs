---
title: "Authentication"
category: "API Documentation"
---


### API Keys

Most Mendix platform APIs require their users to authenticate themselves; this is done by using API keys. You can obtain a Mendix API key as follows:

1.  Navigate to the [https://home.mendix.com](https://home.mendix.com).
2.  Open your profile. You can do this by clicking on your avatar in the top right corner of the screen and clicking **Show Profile**.
3.  Switch to the **API Keys** tab.
4.  Click on **Create new API key** and follow the instructions. Note that the API key will only be shown once.

The obtained API key will allow apps that use it to act on behalf of the user. This implies that the app will have the same privileges as the user who created the API key.

![](attachments/131088/425985.png)

### Authentication headers

Any call to the Mendix platform APIs should be authenticated using the following request headers:

*   _Mendix-Username_ : Login name of the requesting user with the required privileges in the Mendix platform.
*   _Mendix-ApiKey_ : API key of this user.
