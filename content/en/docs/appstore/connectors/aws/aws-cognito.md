---
title: "Use the OIDC SSO Module with the Amazon Cognito Service"
linktitle: "Amazon Cognito"
url: /appstore/connectors/aws/oidc-sso-for-amazon-cognito/
description: "Describes the configuration required to use the Mendix OIDC SSO module with the Amazon Cognito service."
weight: 25
tags: ["connectors", "Amazon Cognito", "AWS", "Amazon", "OIDC SSO"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

[Amazon Cognito](https://aws.amazon.com/cognito/) helps you implement customer identity and access management (CIAM) into your web and mobile applications. As a widely used SSO solution, Amazon Cognito is fully compatible with the Mendix platform-supported [OIDC SSO module](https://marketplace.mendix.com/link/component/120371). This article describes how you can configure the OIDC SSO module to work with the Amazon Cognito service.

### 1.1 Prerequisites {#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Create and publish your Mendix app
* Download and install the following modules from the Mendix Marketplace:
    * [OIDC SSO](https://marketplace.mendix.com/link/component/120371)
    * [Encryption](https://marketplace.mendix.com/link/component/1011)
    * [Community Commons](https://marketplace.mendix.com/link/component/170)
    * [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)
    * [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513)
    * [Mx Model reflection](https://marketplace.mendix.com/link/component/69)

## 2 Configuring the OIDC SSO Module for Amazon Cognito

To configure OIDC for Amazon Cognito, follow these steps:

1. Verify the email addresses.
2. Create a user pool.
3. Add users to the user pool.
4. Integrate your app with Amazon Cognito.
5. Configure the Mendix interface.
    1. Configure the endpoint URLs.
    2. Add a button to sign in with Cognito.