---
title: "Authentication"
url: /apidocs-mxsdk/apidocs/authentication/
category: "API Documentation"
description: "Describes how to retrieve and use authentication keys for Mendix APIs."
weight: 5
tags: ["API", "API Key", "Authentication"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Most Mendix Platform APIs require their users to authenticate themselves. This is done by using API keys.

## 2 Obtaining API Keys

To obtain a Mendix API key, follow the instructions in the [API Keys](/developerportal/community-tools/mendix-profile/#profile-api-keys) section of *Mendix Profile*.

## 3 Using Authentication Headers

Any call to the Mendix Platform APIs should be authenticated using the following request headers:

* `Mendix-Username` – the login name of the requesting user with the required privileges in the Mendix Platform
* `Mendix-ApiKey` – the API key of this user
