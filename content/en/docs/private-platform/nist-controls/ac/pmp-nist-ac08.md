---
title: "AC-08 Access Banner"
linktitle: "AC-08"
url: /private-mendix-platform/nist-controls/ac-08/
description: "Documents the Private Mendix Platform's compliance with the AC-08 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-08 control.

| Control ID | AC-08 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The information system: 

* Before granting users access to the system, displays a notification message or banner that provides privacy and security notices consistent with applicable federal laws, Executive Orders, directives, policies, regulations, standards, and guidance and states. 
* Retains the notification message or banner on the screen until users acknowledge the usage conditions and take explicit actions to log on to or further access the information system. 

## Responsibility

### Mendix Responsibility

Private Mendix Platform provides the capability to configure and display banners，ensuring the configured banner is reliably delivered and rendered to the end user at login.

### Customer Responsibility

The customer's administrator uses the Private Mendix Platform interface to actively create,  enable, disable, and manage the banner settings. The customer is solely responsible for the banner's content, ensuring it is legally sound, accurate, and meets their compliance obligations.

## Guidance

### Mendix Responsibility

Private Mendix Platform provides an interface under **Admin > Settings > General > Branding > Access banner** that allows authorized Customer Admins to fully manage the access banner. Private Mendix Platform then displays mandatory notices to users during or after the login process.

The interface includes the following: 

* A toggle to enable or disable the entire feature.
* A banner display dropdown with two options that control the banner's placement in the user journey.
* Dedicated fields for the image, header, and body text to structure the banner content.

### Customer Responsibility

The customer is solely responsible for the legal sufficiency of the banner's content and for making the active, informed configuration choices within the provided Private Mendix Platform interface.

## Proof and Remarks

Private Mendix Platform provides an interface under **Admin > Settings > General > Branding > Access banner**:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-08-1.png" class="no-border" >}}

Private Mendix Platform displays an access banner on the login page:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-08-2.png" class="no-border" >}}

Private Mendix Platform displays a banner after login:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-08-3.png" class="no-border" >}}
