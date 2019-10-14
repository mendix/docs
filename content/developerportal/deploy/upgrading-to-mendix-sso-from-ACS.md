---
title: "Upgrading to Mendix SSO from AppCloudServices"
parent: "mendix-sso"
menu_order: 20
description: "How to upgrade existing apps using AppCloudServices to use MendixSSO"
tags: ["SSO", "Single Sign On", "Upgrade", "AppCloudServices"]
#Ownership claimed by Identity Services Team.
---

## 1 Introduction

The [MendixSSO module](https://appstore.home.mendix.com/link/app/111349/) comes with a default implementation of user administration. This is described in [Mendix Single Sign-on](mendix-sso).

The default administration module is sufficient for most apps. However, you can create your own administration module if you want to do things in a different way.

This document also contains some more technical information about the Mendix SSO implementation to help you with modifying the administration module and debugging any issues with Mendix SSO.

## 2 Customizing Mendix SSO

There are two ways you can modify the MendixSSO module. You can use snippets from the App Store module MendixSSO in your pages, or you can modify the MendixSSO module in any way you like to support your user administration requirements.

These two ways are described below.

### 2.1 Using Snippets

### 2.2 Modifying Mendix SSO

{{% alert type="warning" %}}
We recommend that you do not modify the version of MendixSSO which is in the App Store modules section of your project. In future, you may wish to import a newer version of the module and this will overwrite any changes you make.
{{% /alert %}}

The MendixSSO module is written so that you can make a complete copy of the module and use this as the basis of a new administration module.

## 3 Tokens

Mendix SSO works by providing users with tokens when they are authenticated. If users are having issues with Mendix SSO it can be useful to see the tokens, either for your own debugging or to provide information to Mendix Support.

The 
