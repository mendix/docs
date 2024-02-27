---
title: "Configure the Authentication Settings for Private Mendix Platform"
linktitle: "Configure the Authentication Settings"
url: /private-mendix-platform-configuration/authentication/
description: "Documents the authentication configuration for the Private Mendix Platform."
weight: 50
tags: ["private mendix platform",  "private platform", "authentication"]
---

## 1 Introduction

In this section, you can configure SSO authentication for your users logging in to Private Mendix Platform. OIDC and SAML are supported as protocols.

## 2 IdP Integration (OIDC)

You can configure SSO authentication with the OIDC protocol. For more information, see [OIDC Client Configuration](/appstore/modules/oidc/#client-configuration).

## 3 IdP Integration (SAML)

To configure SSO authentication with the SAML protocol, first [configure the service provider](/appstore/modules/saml/#configure-sp) in the **SP Configuration** tab, and then [create the IdP-specific settings](/appstore/modules/saml/#idp-specific-settings) in the **IdP Configuration** tab.

To [debug the configuration](/appstore/modules/saml/#6-debugging-the-configuration), you can view the log files in the **Log** tab.

## 4 OIDC Provider

The settings under this tab control the connection between Studio Pro and the platform. They should not be changed without advanced knowledge of the platform. Stop and restart the Private Platform portal if you are having trouble logging in with Studio Pro.

## 5 Studio Pro Login

If you have configured more than one authentication method (for example, SSO and local user), you can specify which method is used as the default one for the Studio Pro login.