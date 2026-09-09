---
title: "Security"
url: /appstore/creating-content/best-practices/security/
weight: 11
---

## Introduction

Security for components should be set up in a generic and granular way. When choosing your module roles, think about the most granular configuration which also allows end users maximum flexibility. 

## Module Security

The following recommendations apply to module security:

* Module roles should always be set up, even if there is limited or no UI to allow the user to extend your component without having to customize. 
* Use clear granular roles, in which the **Documentation** field clearly explains the purpose of each role.
* Keep security as simple as possible. Find a balance between granularity and simplicity. 
* Always keep configuration and data access separate.  
In most organizations, administrators should not have access to the data. If your organization is different, you can always combine module roles, but consumers cannot split them.
* Make sure to [implement best practices for app security](/howto/security/best-practices-security/).

See [Module Security](/refguide/module-security/) for more details.

## Entity Security

Think about how to apply access rules and read or write permissions to your domain model. For example, if you do not give any rights to objects, developers have to use a data transformation layer and create their own objects to build their pages, or enrich their own objects with results coming from the connector.

## Passwords and Other API keys

If you store a password or API keys for your endpoint, always encrypt them using the [Encryption](/appstore/modules/encryption/) module.

## Typical Security Schemes

There are several security schemes you might encounter when building a connector to an external application.

### Client Credentials

Security via client credentials is a very basic security method. Given that you use the login name and password, the only protection when sending it to the service you are integrating with is an encrypted connection over SSL. If that is unavailable, make sure to never use this type of encryption. 

### API Tokens

API tokens help when securing an API. However, an API payload sent in plain text could still be intercepted. Only use API tokens when you have at least an SSL connection. 

### OAuth

OAuth comes in two types:

* An Authorization Code flow – The user logs in to the service through OAuth authentication, thus giving access to their data on a per-user basis. 
* Client Credentials – Provide a public and private key with access tokens for server-to-server communication. 

OAuth is a secure schema because the secret key is never exchanged during API requests. As long as you store the secret key safely in your own app, and you use HTTPS, your credentials for the API provider cannot be hijacked.

### SAML

The [SAML](/appstore/modules/saml/) module, available on the Mendix Marketplace, can be used as a replacement or extension of your supported authentication methods.
