---
title: "Authentication"
category: "API Documentation"
#menu_order: Enter the position of the document in the category or under the parent; number by 10 (for first), 20, 30, etc. for easy ordering of other documents in the future if necessary; don't add brackets or quotation marks; if no number is added, the system will add an extremely high number to order the documents, which means that if you only want a document to appear at the top, you only have to add "10" to that specific document, you don't have to order all the other documents in the category/under the parent
description: "How to retrieve and use authentication keys for Mendix APIs"
tags: ["API", "API Key", "Authentication"]
---

## Introduction

Most Mendix Platform APIs require their users to authenticate themselves; this is done by using API keys.

## Obtaining API Keys

You can obtain a Mendix API key by following the steps below.

1.  Navigate to the [https://home.mendix.com](https://home.mendix.com).
2.  Open your profile. You can do this by clicking on your avatar in the top right corner of the screen and clicking **Account Settings**.
3.  Switch to the **API Keys** tab.
4.  Click on **Create new API key** and follow the instructions.

{{% alert type="warning" %}}
Make a note of the API key as it will only be shown once.
{{% /alert %}}

The obtained API key will allow apps that use it to act on behalf of the user. The app will, therefore, have the same privileges as the user who created the API key.

![](attachments/131088/425985.png)

## Using Authentication Headers

Any call to the Mendix Platform APIs should be authenticated using the following request headers:

*   _Mendix-Username_ : Login name of the requesting user with the required privileges in the Mendix Platform.
*   _Mendix-ApiKey_ : API key of this user.
