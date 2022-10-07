---
title: "Email Connector"
url: /appstore/connectors/email-connector/
category: "Connectors"
description: "Describes the configuration and usage of the Email Connector module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "imap", "pop3", "email", "encryption", "platform support", "encryption", "templates"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Email](https://marketplace.mendix.com/link/component/120739) connector allows you to send and receive emails on your own email server, and adds new features like sending signed and encrypted emails.

### 1.1 Features

The Email connector includes the following features:

* Configuration of multiple accounts
    * Supports basic authentication
    * Supports [creating an account with OAuth 2.0](#create-oauth) to configure Microsoft Azure AD accounts
* Send emails with digital signatures and encryption
* Set up email templates

The Email connectors supports the following protocols:
* POP3 and POP3S
* IMAP and IMAPS
* SMTP 

### 1.2 Prerequisites

Before you use the Email Connector, do the following:

1. Download and [configure](/appstore/modules/model-reflection/#configuration) the [Mx Model Reflection](https://marketplace.mendix.com/link/component/69) module.
2. Download and [configure](/appstore/modules/encryption/#configuration) the [Encryption](https://marketplace.mendix.com/link/component/1011) module.
3. Remove any existing email modules ([IMAP/POP3](/appstore/modules/imap/) or [Email Module with Templates](/appstore/modules/email-with-templates/)).

{{% alert color="warning" %}}
Certain functionalities of the Email Connector will not work correctly if the **Mx Model Reflection** module is not configured, or if you have not removed older email modules.
{{% /alert %}}

### 1.3 Included Widgets {#included-widgets}

The following widgets are bundled in the module:

* [HTML/JavaScript Snippet](/appstore/widgets/html-javascript-snippet/)
* [Format String](/appstore/widgets/format-string/)
* [Rich Text](/appstore/widgets/rich-text/)
* [FileDocumentViewer](https://github.com/mendixlabs/FileDocumentViewer)

{{% alert color="warning" %}}
If you already have these widgets in your app, and they are not up-to-date, you may get a `Some widgets can not be read` error. 
{{% /alert %}}

## 2 Setup in Studio Pro {#setup}

After you install the [Email Connector](https://marketplace.mendix.com/link/component/120739), configure the following in Studio Pro:

1. Provide a value for the **EncryptionKey** constant provided by the **Encryption** module.
2. Launch the UI by using the **EmailConnector_OverviewPage** in the **USE_ME** folder.
3. Link [User Roles](/refguide/user-roles/) in app **Security** to ensure that the configuration page displays when you locally run the app.

## 3 Email Account Configuration {#accountconfig}

Once you run your Studio Pro app, you can start configuring your email accounts in the Email Connector UI.

### 3.1 Adding Email Account
When you run your app to use this module for the first time, and earlier data is not present, you will see a welcome screen with an account setup wizard. Click on `Get Started` button and follow the steps to add email account. 

On the Email Connector dashboard, click on `Add Email Account` and follow the wizard.

You can add and configure an email account in the Email Connector using basic authentication and OAuth 2.0 for Microsoft Azure AD accounts. To configure OAuth 2.0 accounts, see [Creating an Account Using Microsoft Azure OAuth 2.0](#create-oauth). The account configuration wizard supports automatic and manual configurations.

#### 3.1.1 Automatic Configuration

Based on the entered email address domain, the module will try to fetch send and receive email configuration details. This auto-discovery of configuration works for well-known email domains (including Gmail, Outlook, Yahoo, and Microsoft). If it fails to detect the email settings automatically, you will be asked to enter all the settings manually to add the email account.

{{% alert color="info" %}}
In Studio Pro, you can use the `GetAutoConfig` Java action to get the all supported email configurations for the provided username. It will return results as `Email_Connector.EmailProvider`. Process the `Email_Connector.EmailProvider` records and get the desired configuration and create the `Email_Connector.EmailAccount`.
{{% /alert %}}

#### 3.1.2 Manual Configuration

To manually configure the account, you have to enter **protocol**, **server host** and **server port** for send and receive email configuration. Refer email server documentation to get this information.

### 3.2 Additional Account Settings {#other-account-settings}

You can set up the following additional account settings:

* **Subscribe to incoming emails** – user can select this option to get notified about the new incoming emails for modeling use `SubscribeToIncomingEmail` Java action. Read more about this in the section below.

{{% alert color="warning" %}}
This is only supported for IMAP protocols, and some servers may not support it at all.
{{% /alert %}}

* **Sanitize email to prevent XSS attacks** – option to enable the removal of malicious scripts to prevent XSS attacks. This option is unselected by default. To learn more about this option, see [Sanitize untrusted HTML (to prevent XSS)](https://jsoup.org/cookbook/cleaning-html/safelist-sanitizer).
* **Replicate everything in 'X' folder** – option to fetch emails
    * When this setting is not selected, the connector will fetch the number of emails mentioned in the **Number of emails to retrieve from server** configuration based on the selected **Fetch strategy**
    * When this setting is selected, checked then module will fetch all the emails (in order of oldest to newest) from that folder in batch size as mentioned in **Email Batch Size** configuration
* **Timeout** – the connection timeout for send email/receive emails operations. This can be set in the **Email Account** object.

## 4 Usage

Once you have set up an account, you can use it in microflow activities to send and/or receive emails. The information in the following sections includes usage instructions for in Studio Pro, as well as when you run the connector in your app.

### 4.1 Sending Email

When the module is running, click **New** to compose and send new emails.

When modeling your app in Studio Pro, use the **SendEmail** Java action to send emails. The input parameters are the following:

* **Email Account** Email account consisting of outgoing email configuration.
* **Email Message** Email Message object to be sent

The **Return type** is a boolean value. The Java action will connect to the email server using the provided details and send an email, and will return **True** if successful. If the action fails, the error object and cause will display.

The **To**, **Subject**, and **Email Content** fields are mandatory. Multiple email addresses can be specified in **To**, **CC**, or **BCC** separated by a semicolon (**;**).

### 4.2 Receiving Email

Click **Refresh** to receive emails. Emails will be fetched and processed by server as configured in the email account.

When modeling your app in Studio Pro, use **RetrieveEmailMessages** Java action. Once this Java action is called at background emails will be fetched over multiple Java threads and would be returned back to user in async manner. Email fetching will continue till the conditions defined in the email account settings at the Mendix side (like fetch Latest 1000 emails etc)

The input parameters for receiving email are the following: 

* **EmailAccount** – email account consisting of incoming email configuration
* **onEmailFetchMicroflow** – a microflow that will be triggered when **List of EmailMessage** is fetched from the email server per the batch size configured in the email account
    * You can process the list according to what you need. 
    * Make sure you have list of **Email_Connector.EmailMessage** as a parameter to this microflow. 
    * Refer to the sample microflow **OCH_EmailFetchMicroflow**.

{{% alert color="warning" %}}
When duplicating this microflow, do not change input parameters’ name and data type.
{{% /alert %}}

* **onFetchCompleteMicroflow** – a microflow that will be triggered when the fetch is complete and there are no more emails for the particular Java action call
* **onFetchErrorMicroflow** – a microflow that will be triggered if there are errors during the fetch from email server operation

### 4.3 Using Email Templates

When the module is running, you can create templates to use for a specific email account.

In Studio Pro, you can configure this with the **SNIP_EmailTemplate_Overview** use this snippet to configure this functionality.

#### 4.3.1 Sending an Email with a Template

When modeling your app in Studio Pro, use the  **SendEmailWithTemplate** Java action. The input parameters are the following:

* **Data Object** – entity object from which you want to extract the placeholder tokens (if you want to retrieve from multiple objects, then create a [Non-Persistable Entity](/refguide/persistability/#non-persistable)
* **Email account** – email account consisting of outgoing email configuration
* **Email template** – email template from which email message object is created and sent
* **Queued** – when *true*, email message will be stored in the **EmailMessage** entity with status as **QUEUED** queued and user can sent it later using scheduled event or future. You can use microflow **SE_SendQueuedEmails** to create scheduled events.

Refer to sample microflow **Sample_ACT_SendEmailWithTemplate**. To use **To**, **CC**, or **BCC** during runtime, change the **EmailTemplate** object and set the desired values for the attributes, then pass the same **EmailTemplate** object as a parameter to the Java action.

### 4.4 Signed and Encrypted Emails

You can choose to configure a digital signature and email encryption when the module is running. Digital signatures help the receiver verify that you are the sender. Encryption scrambles the message and can only be deciphered with the correct key.  

#### 4.4.1 Digital Signing

Digitally signed emails support only PKCS#12 certificates.

#### 4.4.2 Email Encryption

Encryption for emails using the Email Connector module includes the following:

* Supports LDAP servers for sending encrypted emails
* Supports **Simple** and **No** (anonymous) authentication method
* Supports SSL/TLS and non-SSL connection types
* While encrypting email, the recipient's public certificate will be searched for on the Base DN

### 4.5 Subscribing to Incoming Email

When modeling your app in Studio Pro, call the **SubscribeToIncomingEmail** Java action to subscribe to incoming email from an account.

The input parameters are the following:

* **Email account** – email account consisting of incoming email configuration
* **onNewEmailReceivedMicroflow** – a microflow that will be triggered when new email (List) is received from the server. You can process the list per your need. Make sure you have list of **Email_Connector.EmailMessage** as a parameter to this microflow. Refer to the sample microflow **OCH_EmailFetchMicroflow*.

{{% alert color="warning" %}}
When duplicating this microflow, do not change the input parameter name and data type.
{{% /alert %}}

* **onSubscriptionStateChangedMicroflow** – a microflow that will be triggered when subscription state is changed state can any of the following:
    * `SUBSCRIPTIONFAILED`
    * `CONNECTIONTOSERVERLOST`
    * `CONNECTIONRETRYEXHAUSTED`

    Make sure that microflow is accepting the string parameters `State` and `Comment`. Refer to the sample microflow **OCH_SubscriptionStateChanged**.

    {{% alert color="warning" %}}When duplicating this microflow, do not change input parameters’ name and data type.{{% /alert %}}

{{% alert color="info" %}}
Before subscribing to incoming email, it is recommended to attempt to unsubscribe from incoming email so that application will not end up having duplicate subscription for a single email account. The complete flow of subscription is shown in the microflow **ACT_SubscribeForEmailNotification**.
{{% /alert %}}

{{% alert color="info" %}}
The subscription to new emails will only work if email account is configured with IMAP/S protocol and if the email server supports notifications. The subscription will end if the app is stopped. To subscribe again in between app restarts, register the **Sample_ASU_SubscribeForEmailNotification** microflow in the **After Startup** option. 
{{% /alert %}}

### 4.6 Unsubscribing from Incoming Email

When modeling your app in Studio Pro, use the **UnsubscribeFromIncomingEmail** Java action. When used with account parameter, the user (for the provided account) will be unsubscribed from incoming email.

The input parameter includes the following:

* **Email account** – email account consisting of incoming email configuration

### 4.7 Creating an Account Using Microsoft Azure OAuth 2.0 {#create-oauth}

You can configure your account to authenticate with Microsoft Azure AD OAuth 2.0. Multiple OAuth 2.0 providers can be configured per app.

Click **Add Account** button to add a new account, and select the option **Use Microsoft Azure AD**. See [OAuth Provider Configuration Details](#oauth-config-details).  

#### 4.7.1 OAuth Provider Configuration Details {#oauth-config-details}

To configure OAuth provider, the following details are required:

* **Client ID** – available on the [Azure portal](https://portal.azure.com/) once you have registered your app
* **Client Secret** – available on the [Azure portal](https://portal.azure.com/) once you have registered your app
* **Callback operation path** – enter any string, based on which the callback URL will be auto-generated
* **Callback URL** – the URL where the OAuth provider will redirect with the authorization code, and configured on Azure portal as callback/redirect URI

#### 4.7.2 Settings in the Microsoft Azure Portal

To register your app in the Azure Portal, follow Microsoft's [Tutorial: Register an app with Azure Active Directory](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/walkthrough-register-app-azure-active-directory) While registering, set the redirect/callback URI as **Callback URL** mentioned while configuring [OAuth Provider Configuration Details](#oauth-config-details).

This connector contains functionality of sending and receiving emails, so during the OAuth process the connector will ask for permissions for sending and receiving email.

On the [Azure portal](https://portal.azure.com/), ensure that you have the following permissions enabled under **API permissions** tab on the sidebar:

{{< figure src="/attachments/appstore/connectors/email-connector/app_permissions.png" >}}

### 4.8 Queuing Emails

Emails can be queued for sending at a later time. You can send the messages in the **Queued** folder at any time. If sending queued messages fails, the connector will automatically try resending. On the third attempt, any messages that are still failing will move from the **Queued** folder to the **Failed** folder.

## 5 FAQs

### 5.1 How do I add OAuth 2.0 authentication to an app that is configured with basic authentication?

If you already have an email account configured using basic authentication in your app, and want to use OAuth 2.0 authentication without removing that email account, do the following: 
     1. On the **EmailConnector_Overview** page, click **Add Account** and select the option **Use Microsoft Azure AD**. See [OAuth Provider Configuration Details](#oauth-config-details).  
     2. For the desired email account, set the **isOAuthUsed** attribute from **EmailAccount** entity to **True**.
          * Associate the existing email account with newly created OAuth provider.
          * Navigate to the **EmailConnector_Overview** page and handle the warning messages visible for desired email account.

### 5.2 How do I add attachments?

To add attachments to the email message, do the following:

1. Create an **Attachment** entity. The **Attachment** entity extends the **FileDocument** entity by making it usable to the places where the **FileDocument** entity is required. 
     If you have a custom entity, you can extend it with **Attachment** entity instead of **FileDocument**, or use the community commons **DuplicateFileDocument** function to create an **Attachment** from your custom entity. 
2. Set the **Attachment_EmailMessage** association.

## 6 Troubleshooting

### 6.1 Sending or Receiving Email
* If you encounter any problems with sending or receiving emails, check the **Show error logs** in the **Account Settings** and the debug logs in Studio Pro. If there is nothing in the log file, but you have sent an email and it does not appear in your app, then it is not an error on the connector side.

### 6.2 Page Styling
* If the **Email Connector** page styling is affected as you select/view email messages, please turn on the **Sanitize email to prevent XSS attacks** option available in the [Account Settings](#other-account-settings). It is probably due to errors in the email message CSS, so this option should fix any issues. 

### 6.3 Known Errors
* If you already have the [included widgets](#included-widgets) in your app, and they are not up-to-date, you may get a `Some widgets can not be read` error when trying to run locally.
