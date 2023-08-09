---
title: "Email"
url: /appstore/connectors/email-connector/
category: "Connectors"
description: "Describes the configuration and usage of the Email Connector module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "imap", "pop3", "email", "platform support", "encryption", "templates"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Email](https://marketplace.mendix.com/link/component/120739) Connector allows you to send and receive emails on your own email server, and includes features like sending signed and encrypted emails.

### 1.1 Features

The Email Connector includes the following features:

* Configuration of multiple email accounts
    * Supports basic authentication and [creating an account with OAuth 2.0](#create-oauth) to configure Microsoft Azure AD accounts.
        * Supports Authorization Code Flow and Client Credentials Flow.
    * Supports shared mailboxes using basic and OAuth 2.0 authentication.
* Digital signatures and encryption
* Email templates

The Email Connector supports the following protocols:

* POP3 and POP3S
* IMAP and IMAPS
* SMTP 

### 1.2 Prerequisites

{{% alert color="warning" %}}
Ensure that you follow these prerequisites. Missing a step might lead to errors.
{{% /alert %}}

Before you use the Email Connector in your app, do the following:

1. Download and [configure](/appstore/modules/model-reflection/#configuration) the latest version of [Mx Model Reflection](https://marketplace.mendix.com/link/component/69) module. If you have the module already, ensure that it is up-to-date.
2. Download and [configure](/appstore/modules/encryption/#configuration) the latest version of the [Encryption](https://marketplace.mendix.com/link/component/1011) module. If you have the module already, ensure that it is up-to-date.
3. Remove any existing email modules ([IMAP/POP3](https://marketplace.mendix.com/link/component/1042/) or [Email Module with Templates](https://marketplace.mendix.com/link/component/259/)).
4. Check for and remove orphaned JAR files from any old email modules in the *userlib* subdirectory (including *javax.mail-1.6.2.jar*, *activation-1.1.jar*, and *commons-email.jar*).
5. [Clean the deployment directory](/refguide/app-menu/#clean-deployment-directory) before running the app.

### 1.2.1 Migrating from Another Module

If you are migrating to the Email Connector from another email module, we recommend that you test your settings in a new app first.

We recommend using the community-supported [Email Connector migration utility](https://marketplace.mendix.com/link/component/205008) to migrate data from the [Email Module with Templates](https://marketplace.mendix.com/link/component/259/).

### 1.3 Included Widgets {#included-widgets}

The following widgets are bundled in the module:

* [HTML Element](/appstore/widgets/htmlelement/)
* [Rich Text](/appstore/widgets/rich-text/)
* [FileDocumentViewer](https://github.com/mendixlabs/FileDocumentViewer)

If you already have these widgets in your app, and they are not up-to-date, you will get a `Some widgets can not be read` error. 

## 2 Setup in Studio Pro {#setup}

After you install the [Email Connector](https://marketplace.mendix.com/link/component/120739), configure the following in Studio Pro:

1. Provide a value for the **EncryptionKey** constant provided by the **Encryption** module.
2. Launch the UI by using the **ACT_EmailAccount_LaunchEmailConnectorOverview** microflow in the **USEME/Microflows** folder.

### 2.1 Module Security and Roles

The module comes with a default **EmailConnectorAdmin** module role. Access rights for this role have been set with wider use-cases in mind. Check that the access rights fit your use case and security requirements before linking the module role to User Roles in [App Security](/refguide/app-security/).

## 3 Email Account Configuration {#accountconfig}

Once you run your Studio Pro app, you can start configuring your email accounts in the Email Connector UI.

### 3.1 Adding Email Account {#adding-email-account}

When you run your app to use this module for the first time, and earlier data is not present, you will see a welcome screen with an account setup wizard. Click on **Get Started** button and follow the steps to add email accounts. The wizard takes you through 3 stages to configure either your primary email account or a shared mailbox.

1. Choose the authentication method that you want to use, either **Basic Credentials** or **Azure AD** (OAuth 2.0).
2. Choose if you want to either configure the **Primary** account or **Shared Mailbox**.
3. Choose the protocols for sending and receiving emails.

You can add and configure an email account in the Email Connector using basic authentication and OAuth 2.0 for Microsoft Azure AD accounts. You can also add and configure "Shared Mailbox" using Basic and OAuth 2.0 authentication, or using the Authorization Code Flow or the Client Credentials Flow.

To configure OAuth 2.0 accounts, see [Creating an Account Using Microsoft Azure OAuth 2.0](#create-oauth). The account configuration wizard supports automatic and manual configurations for Sending and Receiving emails.

{{% alert color="info" %}}
You can configure either your primary email account or shared mailbox in the wizard, but not both (primary and shared) at the same time. To add a primary and a shared mailbox, go through the wizard twice; first to configure your primary account, and then to configure the shared mailbox. You can choose to only configure a shared mailbox, although your primary email account is needed to configure it.
{{% /alert %}}

#### 3.1.1 Automatic Configuration

Based on the entered email address domain, the module will try to fetch send and receive email configuration details. This auto-discovery of configuration works for well-known email domains (including Gmail, Outlook, Yahoo, and Microsoft). If it fails to detect the email settings automatically, you will be asked to enter all the settings manually to add the email account.

{{% alert color="info" %}}
In Studio Pro, you can use the `GetAutoConfig` Java action to get the all supported email configurations for the provided username. It will return results as `Email_Connector.EmailProvider`. Process the `Email_Connector.EmailProvider` records and get the desired configuration and create the `Email_Connector.EmailAccount`.
{{% /alert %}}

#### 3.1.2 Manual Configuration

To manually configure the account, you have to enter **protocol**, **server host** and **server port** for send and receive email configuration. Refer email server documentation to get this information.

### 3.2 Additional Account Settings {#other-account-settings}

You can set up the following additional account settings:

* **Subscribe to incoming emails** – user can select this option to get a notification about the new incoming emails; for modeling use `SubscribeToIncomingEmail` Java action. Read more about this in the section below.

{{% alert color="warning" %}}
This is only supported for IMAP protocols, and some servers may not support it at all.
{{% /alert %}}

* **Sanitize email to prevent XSS attacks** – option to enable removal of malicious scripts to prevent XSS attacks. This option is unselected by default. 

{{% alert color="warning" %}}
We strongly recommend turning this **Sanitize email to prevent XSS attacks** setting on. To learn more about this option, see [Sanitize untrusted HTML (to prevent XSS)](https://jsoup.org/cookbook/cleaning-html/safelist-sanitizer).
{{% /alert %}}

* **Replicate everything in 'X' folder** – option to fetch emails
    * When this setting is not selected, the connector will fetch the number of emails mentioned in the **Number of emails to retrieve from server** configuration based on the selected **Fetch strategy**
    * When this setting is selected then module will fetch all the emails (in order of oldest to newest) from that folder in batch size as mentioned in **Email Batch Size** configuration
* **Timeout** – the connection timeout for send/receive emails operations. This can be set in the **Email Account** object.

## 4 Usage

Once you have set up an account, you can use it in microflow activities to send and/or receive emails. The information in the following sections includes usage instructions for Studio Pro, as well as when you run the connector in your app.

### 4.1 Sending Email

When the module is running, click **New Email** to compose and send new emails.

When modeling your app in Studio Pro, use the **SendEmail** Java action to send emails. The input parameters are as follows:

* **Email Account** Email account consisting of outgoing email configuration.
* **Email Message** Email Message object to be sent

The **Return type** is a boolean value. The Java action will connect to the email server using the provided details and send an email, and will return **True** if successful. If the action fails, the error object and cause will be displayed.

The **To**, **Subject**, and **Email Content** fields are mandatory. Multiple email addresses can be specified in **To**, **CC**, or **BCC** separated by a semicolon (**;**).

### 4.2 Receiving Email

Click **Fetch Emails** to receive emails. Emails will be fetched in the background and processed by server as configured in the email account.

When modeling your app in Studio Pro, use **RetrieveEmailMessages** Java action. Once this Java action is called in the background, emails will be fetched over multiple Java threads and would be returned back to user in async manner. Email fetching will continue till the conditions defined in the email account settings at the Mendix side are met (like fetch Latest 1000 emails etc)

The input parameters for receiving email are the following: 

* **EmailAccount** – email account consisting of incoming email configuration
* **onEmailFetchMicroflow** – a microflow that will be triggered when **List of EmailMessage** is fetched from the email server as per the batch size configured in the email account
    * You can process the list according to what you need. 
    * Make sure you have list of **Email_Connector.EmailMessage** as a parameter to this microflow. 
    * Refer to the sample microflow **OCH_Background_EmailFetchMicroflow**.

    {{% alert color="warning" %}}When duplicating this microflow, do not change input parameter names and data types.{{% /alert %}}

* **onFetchCompleteMicroflow** – a microflow that will be triggered when the fetch action is successfully completed.
* **onFetchErrorMicroflow** – a microflow that will be triggered if there are errors during the fetch from email server operation.

### 4.3 Using Email Templates

You can create and use templates for a specific email account.

#### 4.3.1 Creating an Email Template {#create-template}

You can create email templates in two ways:

1. During runtime, click on the **Email Templates** button in the upper right and follow the wizard.
2. During design time, developers can use the **SNIP_EmailTemplate_Overview** snippet located in **Private** > **Snippets**. Use the snippet on a page and save it on a button click.

#### 4.3.2 Creating an Email Message from a Template

When modeling your app in Studio Pro, use the  **CreateEmailFromTemplate** Java action to create a draft message that you can preview and modify. Once your message is ready, you can send it with the **SendEmail** action.

The input parameters are the following:

* **Data Object** – entity object from which you want to extract the placeholder tokens (if you want to retrieve from multiple objects, then create a [Non-Persistable Entity](/refguide/persistability/#non-persistable)
* **Email template** – email template from which email message object is created and sent
* **Queued** – when *true*, email message will be stored in the **EmailMessage** entity with status as **QUEUED** and you can send it later using a scheduled event. You can use microflow **SE_SendQueuedEmails** to create scheduled events. You can also create a [task queue](/refguide/task-queue/) and run this microflow in that task queue to minimize system resource usage. Using a task queue, you can set the number of threads, node or cluster-wide scope, time intervals, and other parameters.

Refer to sample microflow **Sample_ACT_CreateEmailFromTemplateAndThenSend**. This Microflow demonstrates how to use **CreateEmailFromTemplate** Java action and set attachments to EmailMessage in addition to attachments provided by EmailTemplate.

#### 4.3.3 Sending an Email with a Template

When modeling your app in Studio Pro, use the  **SendEmailWithTemplate** Java action to send an email from a template. The input parameters are the following:

* **Data Object** – entity object from which you want to extract the placeholder tokens (if you want to retrieve from multiple objects, then create a [Non-Persistable Entity](/refguide/persistability/#non-persistable)
* **Email account** – email account consisting of outgoing email configuration
* **Email template** – email template from which email message object is created and sent
* **Queued** – when *true*, email message will be stored in the **EmailMessage** entity with status as **QUEUED** and you can send it later using a  scheduled event. You can use microflow **SE_SendQueuedEmails** to create scheduled events. You can also create a [task queue](/refguide/task-queue/) and run this microflow in that task queue to minimize system resource usage. Using a task queue, you can set the number of threads, node or cluster-wide scope, time intervals, and other parameters.

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

### 4.5 Subscribing to Incoming Email {#subscribe-incoming-email}

When modeling your app in Studio Pro, call the **SubscribeToIncomingEmail** Java action to subscribe to incoming email from an account.

The input parameters are the following:

* **Email account** – email account consisting of incoming email configuration
* **onNewEmailReceivedMicroflow** – a microflow that will be triggered when new email (List) is received from the server. You can process the list per your need. Make sure you have list of **Email_Connector.EmailMessage** as a parameter to this microflow. Refer to the sample microflow **OCH_Background_EmailFetchMicroflow*.

{{% alert color="warning" %}}
When duplicating this microflow, do not change the input parameter name and data type.
{{% /alert %}}

* **onSubscriptionStateChangedMicroflow** – a microflow that will be triggered when subscription state is changed; state can be any of the following values:
    * `SUBSCRIPTIONFAILED`
    * `CONNECTIONTOSERVERLOST`
    * `CONNECTIONRETRYEXHAUSTED`

    Make sure that microflow is accepting the string parameter `State` and `Comment`. Refer to the sample microflow **OCH_Background_SubscriptionStateChanged**.

    {{% alert color="warning" %}}When duplicating this microflow, do not change input parameter name and data type.{{% /alert %}}
    
#### 4.5.1 Enabling Subscription in Email Settings

For some use cases, like triggering actions when a new email is received, you need to enable the subscription to new emails using in the Email Settings as well as in the subscription microflow documented in [Subscribing to Incoming Email](#subscribe-incoming-email).

#### 4.5.2 Additional Considerations 

* Before subscribing to incoming email, it is recommended to attempt to unsubscribe from incoming email so that application will not end up having duplicate subscription for a single email account. The complete flow of subscription is shown in the microflow **SUB_EmailAccount_SubscribeForEmailNotification**.

* The subscription to new emails will only work if email account is configured with IMAP/S protocol and if the email server supports notifications. The subscription will end if the app is stopped. To subscribe again in between app restarts, register the **Sample_ASU_SubscribeForEmailNotification** microflow in the **After Startup** option. 

### 4.6 Unsubscribing from Incoming Email

When modeling your app in Studio Pro, use the **UnsubscribeFromIncomingEmail** Java action. When used with account parameter, the user (for the provided account) will be unsubscribed from incoming email.

The input parameter includes the following:

* **Email account** – email account consisting of incoming email configuration

### 4.7 Configuring Azure OAuth 2.0 {#create-oauth}

You can configure your account to authenticate with Microsoft Azure AD OAuth 2.0. Multiple OAuth 2.0 providers can be configured per app.

If no email accounts are configured then you can create new OAuth configutation from **Add Email Account** wizard by selecting **Azure AD**, else click on **OAuth Configurations** button to add/delete/edit OAuth configuration(s). See [OAuth Provider Configuration Details](#oauth-config-details).  

#### 4.7.1 OAuth Provider Configuration Details {#oauth-config-details}

To configure OAuth provider for the Authentication Code Flow, the following details are required:

* **Client ID** – available on the [Azure portal](https://portal.azure.com/) once you have registered your app
* **Client Secret** – available on the [Azure portal](https://portal.azure.com/) once you have registered your app
* **Callback Path** – enter any string, based on which the callback URL will be auto-generated
* **Callback URL** – the URL where the OAuth provider will redirect with the authorization code, and configured on Azure portal as callback/redirect URI

To configure OAuth provider for Client Credential code grant flow, the following details are required:

* **Client ID** – available on the [Azure portal](https://portal.azure.com/) once you have registered your app
* **Client Secret** – available on the [Azure portal](https://portal.azure.com/) once you have registered your app
* **Tenant ID** – available on the [Azure portal](https://portal.azure.com/) once you have registered your app
 
#### 4.7.2 Settings in the Microsoft Azure Portal (Authentication Code Flow)

To register your app in the Azure Portal, follow Microsoft's Tutorial [Register an app with Azure Active Directory](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/walkthrough-register-app-azure-active-directory). While registering, set the redirect/callback URI as **Callback URL** mentioned while configuring [OAuth Provider Configuration Details](#oauth-config-details).

This connector contains functionality of sending and receiving emails, so during the OAuth process the connector will ask for permissions for sending and receiving email.

On the [Azure portal](https://portal.azure.com/), ensure that you have the following permissions enabled under **API permissions** tab on the sidebar:

{{< figure src="/attachments/appstore/connectors/email-connector/app-permissions.png" >}}

#### 4.7.3 Settings in the Microsoft Azure Portal (Client Credentials Flow)

To register your app in the Azure Portal, follow Microsoft's [Register an app with Azure Active Directory](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/walkthrough-register-app-azure-active-directory).

This connector contains functionality of sending and receiving emails, so Office 365 Exchange Online related APIs need to be given permission along with Admin consent.

* On the [Azure portal](https://portal.azure.com/), ensure that you have the following permissions enabled under **API permissions** tab on the sidebar:

{{< figure src="/attachments/appstore/connectors/email-connector/client-cred-api-permissions.png" >}}

* Admin status is given on the added API permissions.
* Tenant admin must register the Azure application's service principal in Exchange via Exchange Online PowerShell. Follow the steps in [Register service principals in Exchange](https://learn.microsoft.com/en-us/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth#register-service-principals-in-exchange).

### 4.8 Queuing Emails

Emails can be queued for sending at a later time. You can send the messages in the **Queued** folder at any time. If sending queued messages fails, the connector will automatically try resending it again until **Max. send attempts** is not reached. Any unsent message(s) after exhausing max attempts is moved from **Queued** tab to the **Failed** tab on the overview page.

## 5 Troubleshooting

### 5.1 Sending or Receiving Email

If you encounter any problems with sending or receiving emails, check the **Error logs** in the **Account Settings** and the logs in Studio Pro. If there is nothing in the log file, but you have sent an email and it does not appear in your app, then it is not an error on the connector side.

### 5.1.1 Gmail Accounts

Gmail no longer supports basic authentication (usernames and passwords), but you can still set up an account in the Email connector by doing the following:

1. Read [Less secure apps & your Google Account](https://support.google.com/accounts/answer/6010255) and change the setting in your Google account.
2. Set up an App Password to sign into the Email connector. See [Sign in with App Passwords](https://support.google.com/accounts/answer/185833).

### 5.2 Adding OAuth 2.0 Configuration to an App with Basic Authentication

If you already have an email account configured using basic authentication in your app, and want to use OAuth 2.0 authentication without removing that email account, do the following: 

1. On the overview page, click on **OAuth Configurations** button to add a new configuration. See [OAuth Provider Configuration Details](#oauth-config-details).  
2. For the desired email account, set the **isOAuthUsed** attribute from **EmailAccount** entity to **True**.
    * Associate the existing email account with newly created OAuth provider.
    * Navigate to the overview page and select the desired account from **Manage Accounts** and go to **Account Settings** and then **Server Settings** tab to Re-authenticate Access.

### 5.3 Deploying to On-Premises Cloud Environments

When deploying [on premises](/developerportal/deploy/on-premises-design/) running [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/), you need to add a rule for a URL redirect.

Add the following rule to the *web.config* file where the on-premise application was installed:

`<rule name="mxecoh">
   <match url="^(mxecoh/)(.*)" />
   <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
</rule>`

For more information, see the [Reverse Proxy Inbound Rules](/developerportal/deploy/deploy-mendix-on-microsoft-windows/#reverse-proxy-rules) section of *How to Deploy Mendix on Microsoft Windows*.

### 5.4 Configuring Local Email Clients

Configuring local clients, like [PaperCut](https://github.com/ChangemakerStudios/Papercut-SMTP), is supported. If using a tool like PaperCut, do the following:

1. Follow the steps for [adding an email account](#adding-email-account). 
2. Automatic configuration will not work for local clients, so continue with manual configuration in the wizard.
3. Select the **Send emails** checkbox.
4. Select **SMTP** for the **Protocol**, enter `localhost` for the **Server host**, and the **Server port** number (for example, `25`).
5. Enter a random email ID and password on the login screen, and it should be configured.

### 5.5 Adding Attachments

To add attachments to the email message, do the following:

1. Create an **Attachment** entity. The **Attachment** entity extends the **FileDocument** entity by making it usable in all the places where **FileDocument** entity is required. 

    If you have a custom entity, you can extend it with **Attachment** entity instead of **FileDocument**, or use the community commons **DuplicateFileDocument** function to create an **Attachment** from your custom entity.

2. Set the **Attachment_EmailMessage** association.

### 5.6 Page Styling

If the **Email Connector** page styling is affected as you select/view email messages, please turn on the **Sanitize email to prevent XSS attacks** option available in the [Account Settings](#other-account-settings). It is probably due to errors in the email message CSS, so this option should fix any issues. 

## 6 Known Errors

If you already have the [included widgets](#included-widgets) in your app, and they are not up-to-date, you may get a `Some widgets can not be read` error when trying to run locally.
