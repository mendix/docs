---
title: "Authentication (Beta)"
url: /refguide/authentication/
weight: 6
description: "Describes how to use an authentication document to define authentication once and reuse it in your app."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

An authentication document defines how your app authenticates with an external service. You configure the authentication method and its credentials once in the document, and then reuse the document wherever your app needs to authenticate. Activities that use the document only reference it, and the document manages obtaining the credentials.

An authentication document supports the following authentication methods:

* **Basic** – authenticates with a username and a password
* **OAuth 2.0 / Entra ID** – authenticates with the OAuth 2.0 Client Credentials grant, for example with Microsoft Entra ID

Each document uses exactly one authentication method.

## Adding an Authentication Document

An authentication document is a type of document you can add to modules in your app. Each document contains a single authentication configuration.

To add an authentication document, do the following:

1. Right-click your module or a folder within a module.
2. Select **Add other** > **Authentication (Beta)**.
3. Give your authentication document a name and click **OK**.

The name of the document is the name of the authentication configuration.

Default: *Authentication*

## Defining an Authentication Document {#authentication-document}

To define an authentication document, open it. The authentication is defined in the **Authentication** tab.

### General {#general}

#### Authentication Method

The **Authentication method** determines how your app authenticates with the external service. The following methods are available:

| Authentication method | Description |
| --- | --- |
| (none) *(default)* | No authentication method is selected. |
| Basic | Authenticates with a username and a password. For more information, see [Basic](#basic). |
| OAuth 2.0 / Entra ID | Authenticates with the OAuth 2.0 Client Credentials grant. For more information, see [OAuth 2.0 / Entra ID](#oauth). |

When you change the authentication method, the values of the previous method are discarded and the properties of the new method are empty.

### Credentials Stored in Constants {#constants}

Sensitive values are not entered directly in an authentication document. Instead, each sensitive property refers to a [constant](/refguide/constants/) that holds the value. This way, you can set a different value for each environment, and you do not need to store secrets in your app model.

For each sensitive property, do the following:

1. Create a constant of type **String**. Mendix recommends not exposing the constant to the client.
2. In the authentication document, click the selector next to the property and select the constant.
3. Set the value of the constant. For example, set its [Default Value](/refguide/constants/#default-value) for local development, and set a different value for each environment in the Mendix Portal.

For more information on setting constant values per environment, see the [Constants](/developerportal/deploy/environments-details/#constants) section in *Environment Details*.

A property that does not refer to a constant shows **(none)**.

### Basic {#basic}

When you select the **Basic** authentication method, the **Credentials** section is shown. It has the following properties:

| Property | Description |
| --- | --- |
| Username | The constant that holds the username. |
| Password | The constant that holds the password. |

### OAuth 2.0 / Entra ID {#oauth}

When you select the **OAuth 2.0 / Entra ID** authentication method, the **OAuth Configuration** section is shown. It has the following properties:

| Property | Description | Stored in a constant? | Required? |
| --- | --- | :---: | :---: |
| Grant Type | The OAuth 2.0 grant type that is used to obtain the access token. Currently, only **Client Credentials** is supported. | - | - |
| Access Token URL | The URL of the token endpoint of the identity provider. | Yes | Yes |
| Client Id | The ID of the client application that is registered with the identity provider. | Yes | Yes |
| Client Secret | The secret of the client application that is registered with the identity provider. | Yes | Yes |
| Tenant Id | The ID of the tenant of the identity provider, for example, your Microsoft Entra ID tenant. | Yes | Yes |
| Scope | The scopes that are requested for the access token. Use comma-separated values, for example, *email, profile*. | No | No |
| Audience | The intended recipient of the access token, for example, `api://my-api`. | No | No |

If a required property does not refer to a constant, Studio Pro shows a [consistency error](/refguide/consistency-errors/).

#### Check Connection {#check-connection}

Click **Check Connection** to verify that your app can obtain an access token with the configured settings. To check the connection, do the following:

1. Set the values of the constants that the document refers to.
2. Run your app locally.
3. Click **Check Connection**.

{{% alert color="info" %}}
**Check Connection** is only available for the **OAuth 2.0 / Entra ID** authentication method. For the **Basic** method, the credentials are only validated by the external service when a request is made.
{{% /alert %}}

## Using an Authentication Document {#using}

You can use an authentication document in the following places:

* The [Authentication](/refguide/authentication-action/) microflow activity – runs the authentication that is configured in the document, and returns the result as a `System.Credentials` object that you can use in the rest of the microflow
* The [Send Email](/refguide/send-email-action/) microflow activity – uses the document to authenticate with the email server when you select **Use Authentication Document**

## Read More

* [Authentication Activity](/refguide/authentication-action/)
* [Integration Activities](/refguide/integration-activities/)
* [Constants](/refguide/constants/)
