---
title: "API Documentation"
url: /apidocs-mxsdk/apidocs/
description: "Presents an overview of the Mendix Platform API documentation, such as Mendix Runtime, Client, Feedback, and Deploy."
weight: 10
no_list: false 
description_list: true
aliases:
    - /apidocs/
    - /apidocs-mxsdk/apidocs/authentication/
    - /apidocs/index.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The API documentation is divided into the sections described below.

For more information, see [API (Application Programming Interface)](https://www.mendix.com/glossary/api/) in the *Technology Glossary*.

## Authentication

Mendix APIs are secured by either API keys or personal access tokens (PATs). Both mechanisms allow clients such as a CI/CD pipeline to consume the platform APIs on behalf of the platform user who created the token. In the document for each API, you can find information about which authentication mechanism that API uses.

The benefit of a PAT compared to an API key is that the platform user can restrict the scope of delegated access to specific APIs by selecting those scopes during PAT generation.

{{% alert color="info" %}}
The same privilege restrictions apply as for the user who created an API key or PAT. If the user has been deactivated, then the API keys and PATs that they created can no longer be used.
{{% /alert %}}

## Documents in this Category
