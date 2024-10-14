---
title: "Email"
url: /appstore/modules/email-connector/
description: "Describes the configuration and usage of the Email Connector module, which is available in the Mendix Marketplace."
aliases:
    - /appstore/connectors/email-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Email Connector](https://marketplace.mendix.com/link/component/120739) allows you to send and receive emails on your own email server. It includes features such as sending emails using a template, or sending signed and encrypted emails.

### Features

The Email connector includes the following features:

* Configuration of multiple email accounts
    * Supports basic authentication and creating an account with OAuth 2.0 (via authorization code flow or client credentials flow) to configure Microsoft Entra ID (formerly known as Azure Active Directory) accounts
    * Supports shared mailboxes using basic and OAuth 2.0 authentication
* Digital signatures and encryption
* Email templates
* Sending and receiving emails with OAuth 2.0 Auth code grant or client credentials flow.

The Email connector supports the following protocols:

* POP3 and POP3S
* IMAP and IMAPS
* SMTP

### Prerequisites {#prerequisites}

{{% alert color="warning" %}}
Follow these prerequisites carefully. Missing a step can lead to errors.
{{% /alert %}}

Before you use the Email connector in your app, do the following:

* Download and configure the latest version of the [Mx Model Reflection](/appstore/modules/model-reflection/) module. If you have the module already, ensure that it is up to date.
* Download and configure the latest version of the [Encryption](/appstore/modules/encryption/) module. If you have the module already, ensure that it is up to date.
* Remove any existing email modules (such as [IMAP/POP3](https://marketplace.mendix.com/link/component/1042/) and [Email Module with Templates](https://marketplace.mendix.com/link/component/259/)).
* Remove any orphaned JAR files (including *javax.mail-1.6.2.jar*, *activation-1.1.jar*, and *commons-email.jar*) from any old email modules in the *userlib* subdirectory.
* [Clean the deployment directory](/refguide/app-menu/#clean-deployment-directory).

### Migrating from Another Module

If you are migrating to the Email connector from another email module, consider testing your settings in a new app first.

It is recommended to use the community-supported [Email Connector Migration Utility](https://marketplace.mendix.com/link/component/205008) module to migrate data from the [Email Module with Templates](https://marketplace.mendix.com/link/component/259/) service.

### Included Widgets {#included-widgets}

The following widgets are bundled in the module:

* [HTML Element](/appstore/widgets/htmlelement/)
* [Rich Text](/appstore/widgets/rich-text/)

{{% alert color="info" %}}If you already have these widgets in your app and they are not up to date, you will get a "Some widgets can not be read" error.{{% /alert %}}

## Setup in Studio Pro {#setup}

After you install the [Email](https://marketplace.mendix.com/link/component/120739) connector, configure the following in Studio Pro:

1. Provide a value for the **EncryptionKey** constant provided by the **Encryption** module, if you did not complete this step in [Prerequisites](#prerequisites).
2. Launch the user interface by using the **ACT_EmailAccount_LaunchEmailConnectorOverview** microflow in the **USEME** > **Microflows** folder.

### Module Security and Roles

The module comes with a default **EmailConnectorAdmin** module role. Access rights for this role have been set with wide use cases in mind. Confirm that the access rights fit your use case and security requirements before linking the module role to user roles in [App Security](/refguide/app-security/).

## Email Account Configuration {#accountconfig}

Once you run your Studio Pro app, you can start configuring your email accounts in the Email connector UI.

### Adding Email Account {#adding-email-account}

When you run your app to use the Email connector module for the first time (and if no earlier data is present), you will see a welcome screen with an account setup wizard. Click **Get Started** and follow the steps to add email accounts. The wizard takes you through three steps to configure either your primary email account or a shared mailbox:

1. Select the authentication method that you want to use. You can choose either **Use Basic Credentials** or **Use Microsoft Entra ID** (OAuth 2.0).
2. Select if you want to configure a primary mailbox or a shared mailbox.
3. Select your desired protocols for sending and receiving emails.

You can add and configure primary and shared mailboxes in the Email Connector using basic authentication or OAuth 2.0 for Microsoft Entra ID accounts. For OAuth authentication, you can use the authorization code flow or the client credentials flow.

For details on how to configure OAuth 2.0 accounts, see [Creating an Account Using Microsoft Azure OAuth 2.0](#create-oauth). The account configuration wizard supports automatic and manual configurations for sending and receiving emails.

{{% alert color="info" %}}
The wizard will not allow you to configure both your primary email account and shared mailbox at the same time. To add both a primary and a shared mailbox, go through the wizard twice; first configure your primary account, then configure the shared mailbox. You can also choose to only configure a shared mailbox, but you will need your primary email account to configure it.
{{% /alert %}}

#### Automatic Configuration

Based on the entered email address domain, the module will try to fetch configuration details for sending and receiving email. This auto-discovery of configuration works for well-known email domains (including Gmail, Outlook, Yahoo, and Microsoft). If the module fails to detect the email settings automatically, it will prompt you to enter them manually to add the email account.

{{% alert color="warning" %}}
You may need to adjust your Gmail settings before you can add a Gmail account. For more information, see [Gmail Accounts](#gmail-accounts).
{{% /alert %}}

In Studio Pro, it is also possible to use the **GetAutoConfig** Java action to get all supported email configurations for the provided user name. This action returns results as **Email_Connector.EmailProvider**. Process the **Email_Connector.EmailProvider** records to get the desired configuration and create the **Email_Connector.EmailAccount**.

#### Manual Configuration

To manually configure the account for sending and receiving emails, enter the protocol, server host, and server port. Refer to the email server documentation to get this information.

{{% alert color="info" %}}
Even if you do not select **Use SSL** or **Use TLS** when you configure the **Email Protocol**, as long as your mail server allows secure connections, a secure connection is initialized regardless your configuration. This means a higher priority is given to a secure connection than an unsecured one, if the underlying Email server infra supports secure connection.
{{% /alert %}}

### Additional Account Settings {#other-account-settings}

You can choose to adjust the following account settings:

* **Subscribe to incoming emails** – By default, this is turned off. Turn it on if you want to get notifications about new incoming emails. For modeling, use the **SubscribeToIncomingEmail** Java action. Note that this setting is only supported for IMAP protocols, and some servers may not support it at all. For more information, see the [Subscribing to Incoming Email](#subscribe-incoming-email) section below.
* **Sanitize email to prevent XSS attacks** – By default, this is turned off, but it is strongly recommended to turn it on. Turn it on if you want the connector to remove malicious scripts to prevent XSS attacks. To learn more about this option, see [Sanitize Untrusted HTML (To Prevent XSS)](https://jsoup.org/cookbook/cleaning-html/safelist-sanitizer).
* **Replicate everything in 'Inbox' folder** – By default, this is turned off. When it is off, the connector will fetch the number of emails mentioned in the **Number of emails to retrieve from server** field, based on the selected **Fetch strategy**. Turn this setting on if you want the connector to fetch all the emails from the inbox (or another folder that you specify), in the batch size specified in the **Email batch size** field. The emails will be ordered from oldest to newest.
* **Connection Timeout (milliseconds)** – By default, this is set to **20000**. If you want to adjust the connection timeout duration for sending and receiving emails, you can change this value in the account settings or the **EmailAccount** object.

## Usage

Once you have set up an account, you can use it in microflow activities to send and receive emails. The information in the following sections includes usage instructions for Studio Pro, as well as for when you run the connector in your app.

### Sending Email

When the module is running, click **New Email** to compose and send new emails.

When modeling your app in Studio Pro, use the **SendEmail** Java action to send emails. The input parameters are as follows:

* **EmailAccount** – email account consisting of the outgoing email configuration
* **EmailMessage** – the **EmailMessage** object to be sent

The return type is a Boolean value. This Java action uses the provided details to connect to the email server and send an email. It returns `True` if successful and displays the error object and cause if it fails.

When sending an email, the **To** and **Content** fields are mandatory. In **To**, **CC**, and **BCC**, you can optionally specify multiple email addresses, each separated by a semicolon (`;`).

### Receiving Email

Click **Fetch Emails** to receive emails. Emails are fetched in the background and processed by the server, as configured in the email account.

When modeling your app in Studio Pro, use the **RetrieveEmailMessages** Java action. Once this Java action is called in the background, emails are fetched over multiple Java threads and returned asynchronously. Email fetching continues until the conditions defined in the email account settings are met. For example, you could set the app to fetch the latest 1,000 emails. For more information, see [Additional Account Settings](#other-account-settings).

The input parameters for receiving email are the following:

* **EmailAccount** – This is an email account consisting of the incoming email configuration.
* **onEmailFetchMicroflow** – This is a microflow that is triggered when **List of EmailMessage** is fetched from the email server, as per the batch size specified in the email account settings. You can process the list according to your needs.

    {{% alert color="warning" %}}If duplicating the **onEmailFetchMicroflow** microflow, do not change the input parameter name or data type. To prevent errors, make sure you have **List of Email_Connector.EmailMessage** as a parameter to this microflow.{{% /alert %}}

* **onFetchCompleteMicroflow** – This is a microflow that is triggered when the fetch action is successfully completed.
* **onFetchErrorMicroflow** – This is a microflow that is triggered if there are errors while fetching from the email server.

### Using Email Templates

You can create and use templates for a specific email account.

#### Creating an Email Template{#create-template}

You can create email templates in two ways:

* While running the app, click the **Email Templates** button and follow the wizard.
* While modeling the app in Studio Pro, use the **SNIP_EmailTemplate_Overview** snippet located in **Private** > **Snippets**. Use the snippet on a page and save it on a button click.

#### Creating an Email Message from a Template

When modeling your app in Studio Pro, use the **CreateEmailFromTemplate** Java action to create a draft message that you can preview and modify. Once your message is ready, you can send it with the **SendEmail** action.

The input parameters are the following:

* **DataObject** – This is an entity object from which you want to extract the placeholder tokens. If you want to retrieve from multiple objects, create a [non-persistable entity](/refguide/persistability/#non-persistable).
  {{% alert color="info" %}} [Mx Model Reflection](/appstore/modules/model-reflection/) module needs to be added and configured in your app before creating placeholder tokens.{{% /alert %}}
* **EmailTemplate** – This is an email template from which an **EmailMessage** object is created and sent.
* **Queued** – When **true**, the email message is stored in the **EmailMessage** entity with its status as **Queued**. In this case, you can send it later using a scheduled event. You can use the microflow **SE_SendQueuedEmails** to create scheduled events. You can also create a [task queue](/refguide/task-queue/) and run this microflow in that task queue to minimize system resource usage. Using a task queue, you can set the number of threads, node or cluster-wide scope, time intervals, and other parameters.

Refer to the sample microflow **Sample_ACT_CreateEmailFromTemplateAndThenSend**. This microflow demonstrates how to use the **CreateEmailFromTemplate** Java action and set attachments to **EmailMessage** in addition to attachments provided by **EmailTemplate**.

#### Sending an Email with a Template

When modeling your app in Studio Pro, use the **SendEmailWithTemplate** Java action to send an email from a template. The input parameters are the following:

* **Data Object** – This is an entity object from which you want to extract the placeholder tokens. If you want to retrieve from multiple objects, create a [non-persistable entity](/refguide/persistability/#non-persistable).
* **EmailAccount** – This is an email account consisting of the outgoing email configuration.
* **EmailTemplate** – This is an email template from which an **EmailMessage** object is created and sent.
* **Queued** – When **true**, the email message is stored in the **EmailMessage** entity with its status as **Queued**. In this case, you can send it later using a scheduled event. You can use the **SE_SendQueuedEmails** microflow to create scheduled events. You can also create a [task queue](/refguide/task-queue/) and run the microflow in that task queue to minimize system resource usage. Using a task queue, you can set the number of threads, node or cluster-wide scope, time intervals, and other parameters.

Refer to the sample microflow **Sample_ACT_SendEmailWithTemplate**. To use **To**, **CC**, or **BCC** during runtime, change the **EmailTemplate** object and set the desired values for the attributes, then pass the same **EmailTemplate** object as a parameter to the Java action.

#### Exporting Email Template

{{% alert color="info" %}}[Mx Model Reflection](/appstore/modules/model-reflection/) module needs to be added and configured in your app before exporting and importing email templates containing placeholder tokens.{{% /alert %}}

Email connector now supports the export and import of email templates. This feature reduces the manual work required to recreate templates in various development, acceptance, and/or production environments.

Select the email template that you want to export and click **Export**. The exported XML file is named with the email template name and a datetime stamp and is downloaded directly to your default download folder. The image below shows the downloaded XML file after the email template export.

{{< figure src="/attachments/appstore/platform-supported-content/modules/email-connector/export-email-template.png" class="no-border" >}}

#### Importing Email Template

You can import the exported email template into the same or a different deployment environment. Click **Import** to start importing the email template. A pop-up window will appear, allowing you to browse for the template file (.xml) to import. Click **Import Template** to complete the email template import process. After successfully importing the email template, you will receive a status message notification.

{{< figure src="/attachments/appstore/platform-supported-content/modules/email-connector/import-email-template.png" class="no-border" >}}

### Signed and Encrypted Emails

You can choose to configure a digital signature and email encryption when the module is running. Digital signatures help the receiver verify that you are the sender. Encryption scrambles the message and can only be deciphered with the correct key.  

#### Digital Signing

Digitally signed emails support only PKCS#12 certificates.

#### Email Encryption

Encryption for emails using the Email connector includes the following:

* Support for LDAP servers for sending encrypted emails
* Two options for authentication methods: **Simple** and **No** (anonymous)
* Support for SSL/TLS and non-SSL connection types
* While encrypting email, the recipient's public certificate will be searched for on the base DN

### Subscribing to Incoming Email {#subscribe-incoming-email}

When modeling your app in Studio Pro, call the **SubscribeToIncomingEmail** Java action to subscribe to incoming email from an account.

The input parameters are the following:

* **EmailAccount** – This is an email account consisting of the incoming email configuration.
* **onNewEmailReceivedMicroflow** – This is a microflow that is triggered when new email is received from the server. You can process the list of emails according to your needs.

    {{% alert color="warning" %}}If duplicating the **onNewEmailReceivedMicroflow** microflow, do not change the input parameter name or data type. To prevent errors, make sure you have **List of Email_Connector.EmailMessage** as a parameter to this microflow.{{% /alert %}}

* **onSubscriptionStateChangedMicroflow** – This is a microflow that is triggered when the subscription state is changed. The state can be any of the following values:
    * `SUBSCRIPTIONFAILED`
    * `CONNECTIONTOSERVERLOST`
    * `CONNECTIONRETRYEXHAUSTED`

    {{% alert color="warning" %}}If duplicating the **onSubscriptionStateChangedMicroflow** microflow, do not change the input parameter names or data types. To prevent errors, the microflow must accept the string parameters **State** and **Comment**.{{% /alert %}}
    
#### Enabling Subscription in Email Settings

For some use cases, like triggering actions when a new email is received, you need to enable the subscription to new emails in the email settings as well as in the subscription microflow documented in [Subscribing to Incoming Email](#subscribe-incoming-email).

#### Additional Considerations

When subscribing to incoming email, keep the following additional considerations in mind:

* It is recommended to unsubscribe from any incoming email before subscribing to incoming email. This helps prevent the application from having duplicate subscriptions for a single email account. The complete subscription flow is shown in the **SUB_EmailAccount_SubscribeForEmailNotification** microflow.

* The subscription to new emails works only if the email account is configured with IMAP/S protocol and if the email server supports notifications. The subscription will end if the app is stopped. To subscribe again between app restarts, register the **Sample_ASU_SubscribeForEmailNotification** microflow in the **After Startup** option.

### Unsubscribing from Incoming Email

When modeling your app in Studio Pro, use the **UnsubscribeFromIncomingEmail** Java action. When used with account parameters, the provided account will be unsubscribed from incoming email.

There is one input parameter:

* **EmailAccount** – email account consisting of the incoming email configuration

### Configuring Azure OAuth 2.0 {#create-oauth}

You can configure your account to authenticate with Microsoft Entra ID OAuth 2.0. Multiple OAuth 2.0 providers can be configured per app.

If no email accounts are configured, you can create a new OAuth configuration from the **Add Email Account** wizard by selecting **Use Microsoft Entra ID**. Otherwise, select **OAuth Configurations** to add, delete, and edit OAuth configurations, as described in the next section.

#### OAuth Provider Configuration Details {#oauth-config-details}

To configure an OAuth provider for the authentication code flow, provide the following details:

* **Client ID** – available on the [Azure portal](https://portal.azure.com/) once you have registered your app
* **Client Secret** – available on the Azure portal once you have registered your app
* **Callback Path** – enter any string, and the callback URL will be autogenerated based on this string
* **Callback URL** – available on the Azure portal as the **Redirect URI**, which is the URL where the OAuth provider will redirect with the authorization code

To configure an OAuth provider for the client credentials grant flow, provide the following details, which are available on the Azure portal once you have registered your app:

* **Client ID**
* **Client Secret**
* **Tenant ID**

With Email Connector version 5.2.0 and newer, you can send emails using a client credentials flow.

#### Settings in the Microsoft Azure Portal (Authentication Code Flow)

To register your app on the Azure portal, follow Microsoft's tutorial [Register an app with Microsoft Entra ID](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/walkthrough-register-app-azure-active-directory). As mentioned above in [OAuth Provider Configuration Details](#oauth-config-details), make sure to set the **Redirect URI** as the **Callback URL**.

This connector contains functionality for sending and receiving emails, so during the OAuth process, the connector will ask for permissions for sending and receiving emails.

On the [Azure portal](https://portal.azure.com/), ensure you have the following permissions enabled under the **API permissions** tab on the sidebar:

{{< figure src="/attachments/appstore/platform-supported-content/modules/email-connector/app-permissions.png" alt="API permissions for authentication code flow" class="no-border" >}}

#### Settings in the Microsoft Azure Portal (Client Credentials Flow)

To register your app in the Azure portal, follow Microsoft's [Register an app with Microsoft Entra ID](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/walkthrough-register-app-azure-active-directory).

This connector contains functionality for sending and receiving emails, so APIs related to Office 365 Exchange Online need to be given permission along with admin consent.

On the [Azure portal](https://portal.azure.com/), ensure you have the following permissions enabled under **API permissions** tab on the sidebar:

{{< figure src="/attachments/appstore/platform-supported-content/modules/email-connector/client-cred-api-permissions.png" alt="API permissions for client credentials flow" class="no-border" >}}

Admin status is given on the added API permissions. The tenant admin must register the Azure application's service principal in Exchange via Exchange Online PowerShell, as described in [Register service principals in Exchange](https://learn.microsoft.com/en-us/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth#register-service-principals-in-exchange).

### Queuing Emails

Emails can be queued to be sent later. You can send the messages in the **Queued** folder at any time. If sending queued messages fails, the connector automatically tries resending it again until **Max. send attempts** is reached. After this limit is reached, any unsent messages are moved from the **Queued** tab to the **Failed** tab on the overview page.

## Troubleshooting

### Sending or Receiving Email

If you encounter any problems with sending or receiving emails, check the **Error logs** in the **Account Settings** and the logs in Studio Pro. If you have sent an email and it does not appear in your app, but there is nothing in the log file, then the error is not on the connector side.

### Gmail Accounts {#gmail-accounts}

Gmail no longer supports basic authentication (user names and passwords), but you may still be able to set up an account in the Email connector by doing the following:

1. Read [Less secure apps & your Google Account](https://support.google.com/accounts/answer/6010255) and turn off the **Less secure app access** setting in your Google account.
2. Set up an app password to sign in to the Email connector. For more information, see [Sign in with app passwords](https://support.google.com/accounts/answer/185833).

### Adding OAuth 2.0 Configuration to an App with Basic Authentication

If you already have an email account configured using basic authentication in your app, and you want to use OAuth 2.0 authentication without removing that email account, do the following:

1. On the overview page, click **OAuth Configurations** and add a new configuration. For more information, see [OAuth Provider Configuration Details](#oauth-config-details).
2. For the desired email account, set the **isOAuthUsed** attribute of the **EmailAccount** entity to **True**.
3. Associate the email account with your newly created OAuth provider.
4. Navigate to the overview page, click **Manage Accounts**, and select the account.
5. Go to the **Server Settings** tab in **Account Settings** and select **Re-authenticate Access**.

### Deploying to On-Premises Cloud Environments

When deploying [on premises](/developerportal/deploy/on-premises-design/) running [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/), you need to add a rule for a URL redirect. Add the following rule to the *web.config* file where the on-premises application is installed:

```
<rule name="mxecoh">
   <match url="^(mxecoh/)(.*)" />
   <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
</rule>
```

For more information, see the [Reverse Proxy Inbound Rules](/developerportal/deploy/deploy-mendix-on-microsoft-windows/#reverse-proxy-rules) section of *How to Deploy Mendix on Microsoft Windows*.

### Configuring Local Email Clients

Configuring local clients, such as [Papercut](https://github.com/ChangemakerStudios/Papercut-SMTP), is supported. If you are using a tool like Papercut, do the following:

1. Follow the steps for [adding an email account](#adding-email-account). 
2. Continue with manual configuration in the wizard. (Automatic configuration does not work for local clients.)
3. Select the **Send emails** checkbox.
4. Select **SMTP** for the **Protocol**, and enter *localhost* for the **Server host**. Enter the **Server port** number (for example, *25*).
5. Enter a random email ID and password on the login screen, and it will be configured.

### Adding Attachments

To add attachments to the email message, do the following:

1. Create an **Attachment** entity. The **Attachment** entity extends the **FileDocument** entity by making it usable in all the places where the **FileDocument** entity is required.

    {{% alert color="info" %}}If you have a custom entity, you can extend it with the **Attachment** entity instead of **FileDocument**, or use the community commons **DuplicateFileDocument** function to create an **Attachment** from your custom entity.{{% /alert %}}

2. Set the **Attachment_EmailMessage** association.

### Page Styling

If the **Email connector** page styling is affected as you select and view email messages, it likely due to errors in the email message CSS. To resolve the errors, turn on **Sanitize email to prevent XSS attacks** in [Account Settings](#other-account-settings).

### Importing Emails with Long Attachment Names

Some email clients (for example, Gmail) break down the name of attached files if it is longer than a specific value, and add the file name in the **Content Type** for an attachment. This can cause an error while fetching or importing emails with long attachment names. For example: *"ERROR - Email_Connector: Attribute 'Email_Connector.Attachment.attachmentContentType' has a maximum length of 200, tried setting a value of length xxx."*. This issue is resolved in version 5.3.0 of the Email Connector.

## Known Issues

### Widgets

If you already have the [included widgets](#included-widgets) in your app and they are not up to date, you may get a "Some widgets cannot be read" error when trying to run locally.

### Consistency Error

You may get a consistency error when importing the Email Connector module in Mendix 10.1 or above that states *"No argument has been selected for parameter "Token" and no default is available"*. This can be resolved by double-clicking the error, which takes you to the snippet **SNIP_EmailTemplate_NewEdit**. Double-click the **Edit [default]** button, then in the **Events** field under **Page settings**, click **Edit**. Once the **Page Settings** dialog box opens, click **OK**, as shown in the image below. The error should resolve. 

{{< figure src="/attachments/appstore/platform-supported-content/modules/email-connector/consistency-error-token.png" class="no-border" >}}
