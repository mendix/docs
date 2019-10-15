---
title: "Upgrading to Mendix SSO from AppCloudServices"
parent: "mendix-sso"
menu_order: 20
description: "How to upgrade existing apps using AppCloudServices to use MendixSSO"
tags: ["SSO", "Single Sign On", "Upgrade", "AppCloudServices"]
#Ownership claimed by Identity Services Team.
---

## 1 Introduction

The AppCloudServices implementation of single sign on (SSO) for Mendix has been deprecated. The [MendixSSO module](https://appstore.home.mendix.com/link/app/111349/) can replace this implementation completely. It comes with a default implementation of user administration which gives you all the tools you need to manage SSO as described in [Mendix Single Sign-on](mendix-sso).

MendixSSO has been designed to easily replace the AppCloudServices SSO. How to do this depends on how AppCloudServices was implemented in your app. There are two different situations:

* AppCloudServices was implemented with no additional customization
* The AppCloudServices domain model has been enhanced with additional attributes and/or associations

Dealing with these to situations is described in the two sections below.

## 2 Replacing a Standard Implementation of AppCloudServices with Mendix SSO

## 3 Replacing a Customized Implementation of AppCloudServices with Mendix SSO

