---
title: "FDS Gateway Login Connector"
url: /appstore/modules/fds/
description: ""
##If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the marketplace.
---

## Introduction

The [FDS Gateway Login Connector](placeholder) enables Single Sign-On (SSO) for Siemens products by integrating Mendix applications with Siemens Foundational Services (FDS).

Instead of authenticating users directly, the connector delegates authentication to the FDS Gateway, the shared identity platform for Siemens Xcelerator products. Depending on the customer's FDS configuration, users can sign in using either their Siemens ID or their organization's workforce identity provider, such as Microsoft Entra ID. This provides a consistent and secure authentication experience while allowing organizations to continue using their existing identity and access management (IAM) infrastructure.

The connector supports federated authentication by relying on the identity relationships configured in FDS. This enables Mendix applications to integrate seamlessly with the Siemens Xcelerator ecosystem while centralizing authentication and identity federation in the FDS platform.

### Typical Usage Scenarios

* Build an Xcelerator product part of the product with Mendix. End-users of the product can sign in at Siemens FDS IAM. Recommended approach is to let the FDS Gateway interact with FDS IAM and provide tokens to your product application for authentication.
* You can build single-tenant products for contracted customers or multi-tenant products for prospective customers to evaluate your products before purchase. 

### Features and Limitations

#### Features

* Login session initiation: After the FDS gateway authenticates the end user through FDS IAM, the FDS Gateway Login Connector initiates a local session in the Mendix application. The application does not display its own login page as FDS handles authentication providing seamless Single Sign-On experience for end users.

* Just-in-time user provisioning: When a user sign infor the first time, the connector atomatically creates a corresponding user account in the Mendix application based on the JWT claims received. You can use the default provisioning logic or implement custom provisioning. For recurring uses, the connector can also update user information using provisioning logic during sign-in. 

* Role-based access control in FDS applications: Assign user roles dynamically based on claims in the JWT-tokens received from FDS. This allows centralized authorization managementwith role based access control. 

* Tenancy support: The connector supports multi-tenant by making a tenant indicator (identifier) available when a user logs in. Your application can use this identifier to ensure users can access only the data for their own tenant. the connector provides the tenant information, while you must develop tenancy structure. 

#### Limitations

* No synchronized session management: Authentication is delegated to the FDS Gateway, but session management is handled independently by the Mendix application. Changes to a user's login state in FDS, such as logging out or session expiration, are not synchronized with active Mendix sessions. Similarly, logging out from FDS does not automatically log the user out of the Mendix application.

## Dependencies

* [Encryption module](https://marketplace.mendix.com/link/component/1011)
* [Community Commons module](https://marketplace.mendix.com/link/component/170)

## Installation

### Prerequisites

Before configuring the FDS Gateway Login Connector, the application must be onboarded to Siemens Foundational Services (FDS). To onboard an application and publish services within the Siemens FDS ecosystem, follow [Launch a XaaS offering: end-to-end journey](https://developer.internal.siemens.com/fds/fds_getting_started/recipes/Web-Application/index.html).

For onboarding support or questions regarding FDS services, contact [FDSOne Help Portal](https://fdsone.atlassian.net/servicedesk/customer/user/login?destination=portals).
