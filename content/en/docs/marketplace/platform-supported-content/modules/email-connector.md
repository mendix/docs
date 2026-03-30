---
title: "Email Connector"
url: /appstore/modules/email-connector/
description: "Describes the configuration and usage of the Email Connector module, which is available in the Mendix Marketplace."
aliases:
    - /appstore/connectors/email-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#ki: DHC-2535
---

## Introduction

The [Email Connector](https://marketplace.mendix.com/link/component/120739) allows you to send and receive emails using your own email server. It supports features like template-based emails, digital signatures, and encrypted email sending.

The Email Connector is a toolkit providing reusable components (snippets, microflows, entities, and Java actions) for building custom email functionality. This documentation covers the setup and configuration of these components in your Mendix application.

{{% alert color="info" %}}

This document describes versions 6.3.1 and above of the Email Connector module.
{{% /alert %}}

### Key Features

The Email Connector includes the following capabilities:

* **Multiple email accounts** 
* **Authentication support**:

    * Basic Authentication (username/password)
    * OAuth 2.0 (Authorization Code Flow & Client Credentials Flow)
    * Microsoft Entra ID integration
 
* **Email protocols**:

    * POP3 and POP3S 
    * IMAP and IMAPS 
    * SMTP

* **Security features**:

    * Digital signatures (PKCS#12 certificates)
    * Email encryption with LDAP integration 
    * SSL/TLS encryption 
    * XSS attack prevention

* **Shared mailbox** support
* **Email Templates** with rich text editor and placeholder tokens 
* **Real-time email monitoring** and folder management 
* **Attachment support** (normal and inline)

### Prerequisites {#prerequisites}

Before using the Email Connector in your app, make sure to complete the following steps in the order described.

{{% alert color="warning" %}}
Missing a step, or changing the order can lead to errors.
{{% /alert %}}

1. Download and configure the latest version of the [Mx Model Reflection](/appstore/modules/model-reflection/) module.
2. Download and configure the latest version of the [Community Commons](/appstore/modules/community-commons-function-library/) module.
3. Download and configure the latest version of the [Encryption](/appstore/modules/encryption/) module. The `EncryptionKey` constant must be set up in your application settings. See the  [EncryptionKey Constant](/appstore/modules/encryption/#encryptionkey-constant) section of *Encryption*.
4. Uninstall any previously installed email modules, such as [IMAP/POP3](https://marketplace.mendix.com/link/component/1042/) and [Email Module with Templates](https://marketplace.mendix.com/link/component/259/).
5. Remove any JAR files still present in the userlib folder from older email modules which are now unused (for example, `javax.mail-1.6.2.jar`, `activation-1.1.jar`, and `commons-email.jar`).
6. [Clean the deployment directory](/refguide/app-menu/#clean-deployment-directory).
7. Add the **Email_Connector_Overview** page located in the **USE_ME > Pages** to your app navigation.

    The **Email_Connector_Overview** page launches the user interface which allows you to configure email accounts. This overview page provides access to configure and manage the following configurations and settings:

    * [**Send Email**](#send-email)
    * [**Receive Email**](#receive-email)
    * [**Templates**](#email-templates)
    * [**Configure OAuth**](#oauth-config-details)

### Migrating From Another Module

When migrating to the Email Connector from a different email module, it is recommended to test your configuration in a separate app before applying it to your main project.

Mendix recommends that you use the community-supported [Email Connector Migration Utility](https://marketplace.mendix.com/link/component/205008) module to migrate data from the [Email Module with Templates](https://marketplace.mendix.com/link/component/259/) service.

### Included Widgets {#included-widgets}

The module includes the following bundled widgets:

* [HTML Element](/appstore/widgets/htmlelement/)
* [Rich Text](/appstore/widgets/rich-text/)
* [Pop-Up Menu](/appstore/widgets/popup-menu/)
    
{{% alert color="info" %}}
If you already have these widgets in your app, and they are not up to date, you will get a "Some widgets cannot be read" error.
{{% /alert %}}

## Setting Up the Email Connector in Studio Pro {#setup}

### Configuring Roles

The module includes a default **EmailConnectorAdmin** role with preconfigured access rights for common use cases. Review and verify that the access rights align with your specific requirements and security policies before assigning this module role to user roles in [App Security](/refguide/app-security/). In addition, configure any required module roles for the prerequisite modules you are using.

### Building Email Functionality {#building-email-functionality}

The Email Connector provides building blocks you can assemble to create email functionality. 

#### Domain Model {#domain-model}

The domain model in Mendix is a data model that describes the information in your application domain in an abstract way. For more general information, see [Data in the Domain Model](/refguide/domain-model/). To learn more about entities and their associations in the domain model of the Email Connector, see the section below.

##### EmailAccount {#email-account}

The **EmailAccount** entity manages email account configurations, authentication methods, and security settings for both incoming and outgoing email operations.

| Attribute                    | Description                                                    |
|------------------------------|----------------------------------------------------------------|
| Username                     | Account login credentials for email server authentication      |
| MailAddress                  | Primary email address associated with the account              |
| Password                     | Authentication password (used when isOAuthUsed is false)       |
| Timeout                      | Server connection timeout in seconds                           |
| sanitizeEmailBodyForXSSSc... | Prevents XSS attacks by sanitizing email content               |
| isP12Configured              | Indicates P12 certificate configuration for digital signatures |
| isLDAPConfigured             | Indicates LDAP directory service integration status            |
| isIncomingEmailConfigure...  | Indicates if email account is configured for retrieve emails   |
| isOutgoingEmailConfigure...  | Indicates if email account is configured for send emails       |
| FromDisplayName              | Sender display name for outgoing emails                        |
| UseSSLCheckServerIdentity... | Enables SSL certificate verification for secure connections    |
| IsSharedMailbox              | Designates account as shared mailbox with delegated access     |
| isOAuthUsed                  | Indicates OAuth 2.0 authentication method is enabled           |
| isEmailConfigAutoDetect      | Enables automatic server configuration discovery               |

##### IncomingEmailConfiguration {#incoming-email-configuration}

The **IncomingEmailConfiguration** entity manages email retrieval settings, processing options, and server connection parameters for incoming messages.

| Attribute          | Description                                          |
|--------------------|------------------------------------------------------|
| IncomingProtocol   | Email retrieval protocol (IMAP/POP3)                 |
| Folder             | Server folder for email retrieval                    |
| UseBatchImport     | Enables batch processing for large email volumes     |
| BatchSize          | Number of emails processed per batch operation       |
| Handling           | Post-retrieval action (keep, move, delete emails)    |
| MoveFolder         | Destination folder for processed emails              |
| ProcessInlineImage | Whether to process embedded images in email content  |
| FetchStrategy      | Email retrieval method (Latest, Oldest)              |
| NotifyOnNewEmails  | Whether to trigger notifications for incoming emails |
| ServerHost         | Incoming mail server hostname or IP address          |
| ServerPort         | Incoming mail server port                            |

##### OutgoingEmailConfiguration {#outgoing-email-configuration}

The **OutgoingEmailConfiguration** entity manages Send Protocol settings, security protocols, and reliability options for sending emails.

| Attribute        | Description                                          |
|------------------|------------------------------------------------------|
| OutgoingProtocol | Email sending protocol (SMTP)                        |
| SSL              | Enables SSL encryption for secure email transmission |
| TLS              | Enables TLS encryption for enhanced security         |
| SendMaxAttempts  | Maximum retry attempts for failed email sends        |
| ServerHost       | Send email hostname or IP address                    |
| ServerPort       | Send email server port                               |

##### EmailMessage {#email-message}

The **EmailMessage** entity represent individual email messages with complete metadata, content, and processing status tracking. This entity is used for both sending and receiving emails.

| Attribute         | Description                                                       |
|-------------------|-------------------------------------------------------------------|
| Subject           | Email subject line text                                           |
| SentDate          | Original send timestamp from email headers                        |
| RetrieveDate      | Local retrieval timestamp                                         |
| From              | Sender's email address                                            |
| To                | Primary recipient email addresses (comma-separated)               |
| CC                | Carbon copy recipients (visible to all recipients)                |
| BCC               | Blind carbon copy recipients (hidden from other recipients)       |
| Content           | Rich HTML email body content                                      |
| UseOnlyPlainText  | Forces plain text format, disabling HTML                          |
| hasAttachments    | Indicates presence of file attachments                            |
| Size              | Total email size including attachments (bytes)                    |
| FromDisplayName   | Sender's friendly display name                                    |
| ReplyTo           | Alternative reply address if different from sender                |
| PlainBody         | Plain text version of email content                               |
| QueuedForSending  | Marks email for outbound processing queue                         |
| ResendAttempts    | Tracks retry attempts for failed sends                            |
| LastSendError     | Stores error message from last failed send attempt                |
| LastSendAttemptAt | Timestamp of most recent send attempt                             |
| Status            | Current processing status (Queued, Sent, Failed, Error, Received) |
| isSigned          | Enables digital signature for email                               |
| isEncrypted       | Enables encryption for email                                      |

##### EmailTemplate {#email-template}

The **EmailTemplate** enables reusable email designs with dynamic content placeholders for consistent and efficient messaging.

| Attribute        | Description                                   |
|------------------|-----------------------------------------------|
| TemplateName     | Unique template identifier for selection      |
| CreationDate     | Template creation timestamp                   |
| Subject          | Email subject line text                       |
| SentDate         | Last usage timestamp for template             |
| FromAddress      | Default sender email address for template     |
| To               | Primary recipient email addresses             |
| CC               | Default carbon copy recipients                |
| BCC              | Default blind carbon copy recipients          |
| Content          | HTML template with dynamic placeholder tokens |
| UseOnlyPlainText | Restricts template to plain text format       |
| hasAttachment    | Indicates presence of file attachments        |
| ReplyTo          | Default reply-to address for template emails  |
| PlainBody        | Plain text version of template content        |
| FromDisplayName  | Default sender display name                   |
| Signed           | Enables digital signature for email template  |
| Encrypted        | Enables encryption for email template         |

##### Attachment {#attachment}

Specialized file **Attachment** entity extend Mendix **System.FileDocument** to provide comprehensive file handling capabilities for email communications.

#### Snippets {#snippets}

Snippets allow you to make interface changes in one place that automatically apply to every page where the snippet is used, reducing maintenance effort and ensuring consistency. You can find the following snippets in the **USE_ME > Snippets** of the Email Connector module:

##### Authentication & Configuration

* **SNIP_Configure_OAuth** – Select OAuth provider from configured list when setting up email accounts
* **SNIP_Configure_PrimaryUser_Login** – Configure primary user login details for an email account
* **SNIP_Configure_Shared_Mailbox** – Option to set up shared mailbox access using primary account details
* **SNIP_OAuthProvider_CreateEdit** – Create or modify OAuth provider configuration

##### Account Management

* **SNIP_EmailAccount_SendAccountSettings** – Configure outgoing **EmailAccount** settings and preferences
* **SNIP_EmailAccount_ReceiveAccountSettings** – Configure incoming **EmailAccount** settings and preferences

##### Email Operations

* **SNIP_EmailTemplate_CreateEdit** – Create or edit email templates with rich text and placeholder tokens
* **SNIP_Incoming_Email_Config** – Manage incoming email settings including folders and processing options
* **SNIP_EmailLog_Overview** – View email sending and receiving activity logs

##### Protocol & Security

* **SNIP_Send_ProtocolDetails** – Configure outgoing/send email protocol (SMTP) details
* **SNIP_Receive_ProtocolDetails** – Configure incoming/receive email protocol details
* **SNIP_Send_EmailSecurity_Edit** – Manage email security features including digital signatures and encryption

#### Microflows {#microflows}

The Email Connector module contains a number of pre-written microflows you can use to carry out various email-related functions.

##### Core Microflows

* **SUB_SendEmail** – Send emails using selected **EmailAccount**
* **SUB_RetrieveEmails** – Fetch emails from selected **EmailAccount**
* **SUB_EmailAccount_CheckServerConnection** – Validate email server connectivity and account configuration

##### Sample Microflows

* **Sample_ASU_SubscribeForEmailNotification** – Set up email notification subscriptions 
* **SUB_GetSystemError** – Retrieve system error information

#### Java Actions{#java-actions}

The Email Connector module contains a number of Java actions which you can use to carry out various email-related functions.

* **SendEmail** – Accepts EmailMessage and EmailAccount objects to send an email
* **RetrieveEmailMessages** – Fetches emails from the server based on specified EmailAccount
* **GetAutoConfig** – Automatically discover email server settings for common providers 
* **GetFolderNames** – Retrieve available email folders from the server 
* **GetBaseDNList** – Get directory service base distinguished names for LDAP integration

## Send Email {#send-email}

1. Deploy your application to set up your **Send Email** accounts through the Email Connector user interface.
2. Navigate to the **Email Connector Overview** page.
3. Select the **Send Email** tab.
4. Click **Add New Configuration** or edit an existing one using the **Action**.

You can now set up your account for sending email by providing the following details:

### Authentication Methods

Configuration supports two authentication methods: 

* **Basic Authentication** 
* **OAuth 2.0**

You can set these up using the **Enable Microsoft Entra ID Authentication**:

* Select **Yes** to enable OAuth 2.0 authentication through Microsoft Entra ID – you will need to fill in the details described under  [OAuth Authentication](#send-oauth-authentication)
* Select **No** (*default*) to use  basic authentication with username and password – you will need to fill in the details described under [Basic Authentication](#send-basic-authentication)

### Basic Authentication {#send-basic-authentication}

#### Primary Account Details

* **Display Name** – The name shown to email recipients
* **Email or Username** – The email address or username for the sending account
* **Password** – The account password for basic authentication; the field is masked for security

#### Configure Shared Mailbox

This is an optional feature for setting up shared mailbox access. It requires using the primary account details for configuration. Enable this feature by clicking the checkbox **Shared mailbox**.

#### Email Protocol

**Email Protocol** currently supports SMTP for outbound email transmission.

**Server Configuration** 

* **Server Host** – The SMTP server hostname or IP address 
* **Server Port** – The port number for SMTP communication

**Security Options** 

* **SSL** – Enable Secure Sockets Layer encryption 
* **TLS** – Enable Transport Layer Security encryption

### OAuth Authentication {#send-oauth-authentication}

You can configure your account to authenticate with Microsoft Entra ID OAuth 2.0. Multiple OAuth 2.0 providers can be configured per app.

To manage configurations:

* Select the **Configure OAuth** tab to add, delete, and edit OAuth configurations
* If no OAuth configurations are configured, you can create a new configuration

For detailed steps and implementation guidance, see the [Configure OAuth](#oauth-config-details) section below.

### Additional Account Settings {#other-account-settings}

You can view and change the following settings by clicking **View Settings** as the **Action** of an existing account.

#### Email Settings Tab

##### Server Identity

* **Use SSL check server identity** – Select this to turn on the optional security feature to verify server identity during SSL connections and enhance connection security by validating server certificates
* **Connection Timeout (Milliseconds)** – Configure the maximum time to wait for server connections; default is 20000 milliseconds (20 seconds)

#### Outgoing Emails

* **Full Name** – The display name for outgoing emails; this name appears in the **From** field of sent messages
* **Max. send attempts** – Maximum number of retry attempts for failed email sends; default is 0 (no retry attempts)

#### Email Security Tab

##### Configure Digital Signature

* **Configure Digital Signature** – Check this option to digitally sign outgoing email messages during send email actions using the following settings; once configured,it provides message authentication and integrity verification
    * **Certificate (PKCS#12)** – Upload a PKCS#12 certificate file for digital signing; this supports standard PKCS#12 format certificates
    * **Passphrase** – Required to access the PKCS#12 certificate; this field is mandatory when using certificate-based digital signatures

##### Configure Email Encryption

* **Configure Email Encryption** – Check this option to encrypt outgoing email messages during send email actions using the following settings; it provides additional security for sensitive email communications
    * **LDAP Configuration**  
        * **LDAP Host** – LDAP server hostname for certificate lookup
        * **LDAP Port** – LDAP server port (default: 389)
    * **Authentication Method** – The system supports two authentication methods for LDAP access:
        * *No Authentication* – Connect to LDAP server without credentials
        * *Basic Authentication* – Use username and password for LDAP server access

#### Error Logs Tab

This tab displays a list of any log entries related to errors which occurred during a send email operation in the Email Connector module.

### Sending Email via Microflow

Use the **SUB_SendEmail** microflow for standardized, Mendix-compliant email delivery with proper error handling and configuration management. For this you will need to create your message as an object of type `Email_Connector.EmailMessage` and associate it with the `Email_Connector.EmailAccount` object containing the send mail account.

When sending an email, the **To**, **From** and **Content** fields are mandatory. When sending emails using templates, refer to the [Templates](#email-templates) section below.

### Sending Email via Java Action

When modeling your app in Studio Pro, use the **SendEmail** Java action to send emails. The input parameters are as follows:

* **EmailAccount** – The entity containing the configuration details for the outgoing email account
* **EmailMessage** – The entity instance containing the content and details of the email to be sent

The return type is a Boolean value. This Java action uses the provided details to connect to the email server and send an email. It returns True if successful and displays the error object and cause if it fails.

When sending an email, the **To**, **From** and **Content** fields are mandatory. In **To**,**CC**, and **BCC**, you can optionally specify multiple email addresses, each separated by a semicolon (;).

## Receive Email {#receive-email}

1. Deploy your application to set up your **Receive Email** accounts through the Email Connector user interface.
2. Navigate to the **Email Connector Overview** page.
3. Select the **Receive Email** tab.
4. Click **Add New Configuration** or edit an existing one using the **Action**.

You can now set up your account for receiving email by providing the following details:

### Authentication Methods 

Configuration supports two authentication methods:

* **Basic Authentication** 
* **OAuth 2.0**

You can set these up using the **Enable Microsoft Entra ID Authentication**:

* Select **Yes** to enable OAuth 2.0 authentication through Microsoft Entra ID – you will need to fill in the details described under [OAuth Authentication](#receive-oauth-authentication)
* Select **No** (*default*) to use  basic authentication with username and password – you will need to fill in the details described under [Basic Authentication](#receive-basic-authentication)

#### Basic Authentication {#receive-basic-authentication}

##### Primary Account Details

* **Display Name** – The name shown to email recipients
* **Email or Username** – The email address or username for the sending account
* **Password** – The account password for basic authentication; the field is masked for security

##### Configure Shared Mailbox

This is an optional feature for setting up shared mailbox access. It requires using the primary account details for configuration. Enable this feature by clicking the checkbox **Shared mailbox**.

##### Email Protocol

**Email Protocol** – Choose from available email protocols for receiving emails:

* **IMAP** – Internet Message Access Protocol for email retrieval and management
* **IMAPS** –  IMAP over SSL/TLS for secure email access
* **POP3** – Post Office Protocol for email downloading
* **POP3S** – POP3 over SSL/TLS for secure email downloading

**Server Configuration** 

* **Server Host** – The hostname or IP address of the incoming mail server
* **Server Port** – The port number for the email protocol – by convention these are usually the following:
    * **IMAP** – Port 143 (non-encrypted) or Port 993 (SSL/TLS)
    * **IMAPS** – Port 993 (SSL/TLS encrypted)
    * **POP3** – Port 110 (non-encrypted) or Port 995 (SSL/TLS)
    * **POP3S** – Port 995 (SSL/TLS encrypted)

{{% alert color="info" %}}
Mendix recommends that you use encrypted ports (993 for IMAPS, 995 for POP3S) for enhanced security and data protection.
{{% /alert %}}

### OAuth Authentication {#receive-oauth-authentication}

You can configure your account to authenticate with Microsoft Entra ID OAuth 2.0. Multiple OAuth 2.0 providers can be configured per app.

To manage configurations:

* Select the **Configure OAuth** tab to add, delete, and edit OAuth configurations
* If no email accounts are configured, you can create a new OAuth configuration

For detailed steps and implementation guidance, see the [Configure OAuth](#oauth-config-details) section below.

### Additional Account Settings{#retrieve-additional}

You can view and change the following settings by clicking **View Settings** as the **Action** of an existing account.

#### Email Settings Tab

##### Server Identity

* **Use SSL check server identity** – Optional security feature to verify server identity during SSL connections and enhance connection security by validating server certificates
* **Connection Timeout** – Maximum time to wait for server connections; default is 20000 milliseconds (20 seconds)

##### Incoming Emails

* **Folder to replicate E-mails from** – Specify the email folder to monitor for incoming messages; default is "INBOX" – click **Select…** to choose any existing email folder on the account
* **Subscribe to incoming emails** – Disabled by default. Enable this option if you want to receive notifications for new incoming emails. For modeling purposes, use the **SubscribeToIncomingEmail** Java action. This feature is supported only for **IMAP** protocols, and some mail servers may not support it.
* **Replicate everything in 'INBOX' folder** – Disabled by default. When off, retrieves only the specified number of emails based on the fetch strategy. When enabled, replicates all emails from the specified folder in batches (oldest to newest) using the configured batch size.
* **Number of emails to retrieve from server** – Set the maximum number of emails to fetch in a single operation; default is 50
* **Fetch strategy** – Controls the order in which emails are retrieved from the server 
    * *Latest* – Retrieves most recent emails first 
    * *Oldest* – Retrieves oldest emails first
* **Email handling on server after replication** – This setting determines what happens to emails on the server after they have been replicated to your Mendix application.
    * *None* *(default)* – does the following:
        * Leaves emails unchanged on the server after replication 
        * Suitable for read-only processing or multi-system access
    * *Remove original emails from server* – does the following:
        {{% alert color="warning" %}} Use this setting with caution, as this action is irreversible. {{% /alert %}}
        * Permanently deletes emails after replication 
        * Helps manage server storage space 
    * *Move emails on server to another (existing folder)* – does the following:
        * Transfers processed emails to a different folder 
        * Maintains email history while organizing processed messages 
        * Requires specifying an existing target folder
* **Inline image rendering (HTML emails will have images visible in browser)** – does the following:
    * Controls how HTML email images are displayed 
    * When enabled, images embedded in HTML emails are rendered in the browser 
    * Enhances readability but may have security implications
* **Sanitize email to prevent XSS attacks** – does the following:
    * Enables security filtering to prevent cross-site scripting attacks 
    * Removes potentially malicious scripts and content from email messages 

#### Error Logs Tab

This tab displays a list of any log entries related to errors which occurred during a receive email operation in the Email Connector module.

### Receiving Email

To receive emails in your Mendix app, use the **RetrieveEmailMessages** Java action. This action fetches emails asynchronously in batches using multiple threads and returns a list of **EmailMessage** objects. Email retrieval continues until the criteria specified in the email account settings are met (for example, fetching the latest 1,000 emails). For details, see [Additional Account Settings](#retrieve-additional).

The input parameters for receiving email are the following:

* **EmailAccount** – This is an email account containing the incoming email configuration.

* **onEmailFetchMicroflow** – This is a microflow that is triggered when a list of **EmailMessage** is fetched from the email server, as per the batch size specified in the email account settings. You can process the list according to your needs.

  {{% alert color="warning" %}}If duplicating the **onEmailFetchMicroflow** microflow, do not change the input parameter name or data type. To prevent errors, make sure you have **List of Email_Connector.EmailMessage** as a parameter to this microflow.{{% /alert %}}

* **onFetchCompleteMicroflow** – This is a microflow that is triggered when the email fetch action is successfully completed.

* **onFetchErrorMicroflow** – This is a microflow that is triggered if there are errors while fetching from the email server.

## Configure OAuth {#oauth-config-details}

1. Deploy your application to set up your **OAuth Configuration** through the Email Connector user interface.
2. Navigate to the **Email Connector Overview** page.
3. Select the **Configure OAuth** tab.
4. Click **Add New Configuration** or edit an existing one using the **Action**.

The Email Connector supports two sorts of OAuth authentication. Under **Choose Authentication** select one of the following:

* [*Auth code grant flow*](#auth-code-flow) – OAuth 2.0 Authorization Code Flow
* [*Client credential grant Flow*](#client-credentials-flow) – for Microsoft Entra ID (formerly Azure Active Directory) accounts

### Auth Code Grant Flow {#auth-code-flow}

To configure an OAuth provider for the *Auth code grant flow*, provide the following details:

* **OAuth Configuration Name** – A name to identify this configuration
* **Client ID** – Application identifier obtained from [Microsoft Entra ID](https://portal.azure.com/) after app registration
* **Client Secret** – Authentication key generated during Microsoft Entra ID app registration
* **Callback Path** – Custom string used to autogenerate the callback URL
* **Callback URL** – **Redirect URI** where the OAuth provider returns after authorization
* **Token endpoint URL** – Used by client to exchange an authorization grant or refresh token for an access token. https://login.microsoftonline.com/<issuer>/oauth2/v2.0/token

{{% alert color="info" %}}
When deploying [on premises](/developerportal/deploy/on-premises-design/) on [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/), add the following rule to the *web.config* file:

```
<rule name="mxecoh">
<match url="^(mxecoh/)(.*)" />
<action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
</rule>
```

For more information, see the [Reverse Proxy Inbound Rules](/developerportal/deploy/deploy-mendix-on-microsoft-windows/#reverse-proxy-rules) section of *Microsoft Windows*. 
{{% /alert %}}

#### Configuring Microsoft Entra ID

Follow Microsoft's tutorial [Register an app with Microsoft Entra ID](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/walkthrough-register-app-azure-active-directory) to register your app on the Microsoft Entra ID. As mentioned above, make sure to set the **Redirect URI** to the **Callback URL**.

This connector contains functionality for sending and receiving emails, so during the OAuth process, the connector will ask for permissions for sending and receiving emails.

##### API Permissions

On the [Microsoft Entra ID](https://portal.azure.com/), ensure you have the following permissions enabled under the **API permissions** tab on the sidebar.

Depending on your use case, modify the **azure_defaultConfig** constant to specify the required OAuth scopes for your application.

###### Send Emails 

| Permission Name | Description                                                               |
|-----------------|---------------------------------------------------------------------------|
| SMTP.Send       | Send emails from mailboxes using SMTP AUTH.                               |
| User.Read       | Sign in and read user profile (required for authentication).              |
| openid          | Sign users in (required for OAuth/OpenID Connect).                        |
| offline_access  | Maintain access to data you have given it access to (for refresh tokens). |
| profile         | View users' basic profile (often used during sign-in).                    |
| email           | View users' email address (optional but helpful).                         |

###### Receive Emails 

| Permission Name       | Description                                                               |
|-----------------------|---------------------------------------------------------------------------|
| IMAP.AccessAsUser.All | Read and write access to mailboxes via IMAP.                              |
| POP.AccessAsUser.All  | Read and write access to mailboxes via POP.                               |
| User.Read             | Sign in and read user profile (required for authentication).              |
| openid                | Sign users in (required for OAuth/OpenID Connect).                        |
| offline_access        | Maintain access to data you have given it access to (for refresh tokens). |
| profile               | View users' basic profile (often used during sign-in).                    |
| email                 | View users' email address (optional but helpful).                         |

### Client Credential Grant Flow{#client-credentials-flow}

To configure an OAuth provider for the **Client Credentials Flow**, provide the following details from Microsoft Entra ID after app registration:

* **OAuth Configuration Name** – A name to identify this configuration
* **Client ID** - Application identifier from your registered app
* **Client Secret** - Authentication key generated for your application
* **Tenant ID** - Directory identifier for your Microsoft Entra ID tenant
* **Token endpoint URL** – Used by client to exchange an authorization grant or refresh token for an access token. https://login.microsoftonline.com/<issuer>/oauth2/v2.0/token

With the Email Connector version 5.2.0 and above, you can send emails using the Client Credentials Flow.

Follow Microsoft's [Register an app with Microsoft Entra ID](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/walkthrough-register-app-azure-active-directory) to register your app in the Microsoft Entra ID portal.

This connector contains functionality for sending and receiving emails. APIs related to Office 365 Exchange Online need to be given permission along with admin consent.

#### API Permissions

On the [Microsoft Entra ID](https://portal.azure.com/), ensure you have the following permissions enabled under **API permissions** tab on the sidebar.

##### Send Emails (Application Permissions)

| Permission Name | Type        | Description                                     |
|-----------------|-------------|-------------------------------------------------|
| SMTP.SendAsApp  | Application | Sending email via SMTP AUTH.                    |

##### Receive Emails (Application Permissions)

| Permission Name  | Type        | Description                                      |
|------------------|-------------|--------------------------------------------------|
| IMAP.AccessAsApp | Application | Read and write access to all mailboxes via IMAP. |
| POP.AccessAsApp  | Application | Read and write access to all mailboxes via POP.  |

Admin status is given on the added API permissions. The tenant admin must register the Microsoft Entra ID application's service principal in Exchange via Exchange Online PowerShell, as described in [Register service principals in Exchange](https://learn.microsoft.com/en-us/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth#register-service-principals-in-exchange).

## Templates {#email-templates}

The **Templates** tab allows you to configure templates you can use to send your emails.

1. Deploy your application to set up your **Email Templates** through the Email Connector user interface.
2. Navigate to the **Email Connector Overview** page.
3. Select the **Templates** tab.
4. Click **Add New Template** or edit an existing one using the **Action**.

{{% alert color="info" %}} The [Mx Model Reflection](/appstore/modules/model-reflection/) must be installed and properly configured in your app prior to creating placeholder tokens and before exporting/importing email templates containing placeholder tokens.{{% /alert %}}

### Creating an Email Message from a Template

Use the **CreateEmailFromTemplate** Java action to generate a draft email message that can be previewed and customized. Once finalized, send it using the **Send email** action. The input parameters are as follows:

* **DataObject** – Entity object from which placeholder tokens are extracted. To retrieve data from multiple objects, create a [non-persistable entity](/refguide/persistability/#non-persistable). This is an optional parameter; it is required only if the template contains placeholder tokens.
* **EmailTemplate** – Email template used to construct and send an **EmailMessage** object.
* **Queued** – When enabled (**true**), the email message is stored in the **EmailMessage** entity with a **Queued** status. This configuration enables later transmission via [scheduled events](/refguide/scheduled-events/). 

You can leverage the **SE_SendQueuedEmails** microflow to set up the necessary scheduled events. You can also create a [task queue](/refguide/task-queue/) and run the microflow in that task queue to minimize system resource usage. With a task queue, you can set the number of threads, node or cluster-wide scope, time intervals, and other parameters.

Review the demonstration microflow **Sample_ACT_CreateEmailFromTemplateAndThenSend** as a reference. This microflow demonstrates how to implement the **CreateEmailFromTemplate** Java action while managing attachments for the **EmailMessage**, incorporating both existing **EmailTemplate** attachments and supplementary files.

### Sending an Email with a Template

Use the **SendEmailWithTemplate** Java action to send an email from a template. The input parameters are as follows:

* **Data Object** – Entity object from which placeholder tokens will be extracted. To retrieve data from multiple objects, create a [non-persistable](/refguide/persistability/#non-persistable) entity.
* **EmailAccount** – Email account with the necessary send email configuration details.
* **EmailTemplate** – Email template used to construct and send an **EmailMessage** object.
* **Queued** – When enabled (**true**), the email message is stored in the **EmailMessage** entity with a **Queued** status. This configuration enables later transmission via [scheduled events](/refguide/scheduled-events/). 

You can leverage the **SE_SendQueuedEmails** microflow to set up the necessary scheduled events. You can also create a [task queue](/refguide/task-queue/) and run the microflow in that task queue to minimize system resource usage. With a task queue, you can set the number of threads, node or cluster-wide scope, time intervals, and other parameters.

Review the demonstration microflow **Sample_ACT_SendEmailWithTemplate** as a reference. For dynamic configuration of **To**, **CC**, or **BCC** fields, update the EmailTemplate object with the required attribute values and provide this modified EmailTemplate object as input to the Java action.

### Export Email Template

You can export an email template using the Email Connector to streamline the process of template recreation across various environments including development, acceptance, and production. Follow the steps below:

1. Choose the email template you want to export.
2. Select **Export** from the **Pop-up Menu**. 

An XML file will be generated with a filename that combines the template name and current datetime, and will be saved directly to your default downloads folder. The following image illustrates the downloaded XML file after completing the email template export.

### Import Email Template

An exported email template can be imported into the current deployment environment or a different one. To import, follow these steps:

1. Click **Import Template**.
2. Select the template file (*.xml*) you want to import.
3. Click **Import Template**.

## Troubleshooting

### Sending or Receiving Email

If you have issues sending or receiving emails:

1. Check the **Error logs** in **Account Settings**.
2. Review the logs in Studio Pro. 

If an email does not appear in your app and there is nothing in the logs, the problem is not with the connector.

### Gmail Accounts {#gmail-accounts}

Gmail no longer supports basic authentication (usernames and password). However, you may still be able to set up an account in the Email Connector by doing the following:

1. Read [Less secure apps & your Google Account](https://support.google.com/accounts/answer/6010255) and turn off the **Less secure app access** setting in your Google account.
2. Set up an app password to sign in to the Email Connector. For more information, see [Sign in with app passwords](https://support.google.com/accounts/answer/185833).

### Deprecation of Basic authentication in Microsoft Exchange Online

As of October 1, 2022, Microsoft has deprecated Basic Authentication, and it is no longer supported in Exchange Online, promoting Modern Authentication (OAuth 2.0) for enhanced security. From that date, Microsoft started disabling Basic Authentication for the following protocols:
 
* Outlook
* EWS
* RPS
* POP
* IMAP
* EAS

### Deploying to On-Premises Cloud Environments

When deploying [on premises](/developerportal/deploy/on-premises-design/) on [Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/), you need to add the following rule to the *web.config* file:

```
<rule name="mxecoh">
   <match url="^(mxecoh/)(.*)" />
   <action type="Rewrite" url="http://localhost:8080/{R:1}{R:2}" />
</rule>
```

For more information, see the [Reverse Proxy Inbound Rules](/developerportal/deploy/deploy-mendix-on-microsoft-windows/#reverse-proxy-rules) section of *Microsoft Windows*.

### Configuring Local Email Clients

Configuring local clients, such as [Papercut](https://github.com/ChangemakerStudios/Papercut-SMTP), is supported. If you are using a tool like Papercut, do the following:

1. Deploy your application to set up your **Send Email** accounts through the Email Connector user interface.
2. Navigate to the **Email Connector Overview** page.
3. Select the **Send Email** tab.
4. Click **Add New Configuration** or edit an existing one using the **Action**.
5. Select **SMTP** for the **Protocol**, and enter *localhost* for the **Server host**. Enter the **Server port** number (for example, *25*).
  
Both email and password are not required.

### Adding Attachments

#### Normal Attachment

To add attachments to the email message, do the following:

1. Create an **Attachment** entity. The **Attachment** entity extends the **FileDocument** entity by making it usable in all the places where the **FileDocument** entity is required.

   {{% alert color="info" %}}If you have a custom entity, extend it with the **Attachment** entity instead of **FileDocument**, or use the community commons **DuplicateFileDocument** function to create an **Attachment** from your custom entity.{{% /alert %}}

2. Set the **Attachment_EmailMessage** association.

#### Inline Attachment

To add inline attachments to an email message, use the Rich text editor to insert images directly into the email body. Alternatively, you can insert inline attachments using a microflow by following these steps:

1. Create an EmailMessage with the `Content` property set as seen below:

    ```
    'before inline image<br><img src="cid:mxcid:test.png" width="530" height="110"><br>after inline image'
    ```
   
2. Specify the image's tag source using the **cid:mxcid** prefix before the source file to have the image added as inline image.
3. Create the attachment with the Position attribute set to **ENUM_AttachmentPosition.Inline**.
4. Associate the attachment with EmailMessage. You can then send the email using the **SUB_SendEmail** microflow.

### Page Styling

If the **Email Connector** page styling is affected as you select and view email messages, it is likely due to errors in the email message CSS. 

To resolve the errors, turn on **Sanitize email to prevent XSS attacks** in Account Settings.

### Importing Emails with Long Attachment Names

{{% alert color="info" %}} This issue is resolved in version 5.3.0 of the Email Connector. {{% /alert %}}

Some email clients (for example, Gmail) break down the name of attached files if it is longer than a specific value, and add the file name in the **Content Type** for an attachment. This can cause an error while fetching or importing emails with long attachment names. For example: *"ERROR - Email_Connector: Attribute 'Email_Connector.Attachment.attachmentContentType' has a maximum length of 200, tried setting a value of length xxx."*. 

## Known Issues

### Widgets

If you already have the [included widgets](#included-widgets) in your app, and they are not up to date, you may get a "Some widgets cannot be read" error when trying to run locally.

### Consistency Error

You may get a consistency error when importing the Email Connector module in Mendix 10.1 or above that states *"No argument has been selected for parameter "Token" and no default is available"*. This can be resolved by double-clicking the error, which takes you to the snippet **SNIP_EmailTemplate_NewEdit**. Double-click the **Edit [default]** button, then in the **Events** field under **Page settings**, click **Edit**. Once the **Page Settings** dialog box opens, click **OK**, as shown in the image below. The error should resolve.

{{< figure src="/attachments/appstore/platform-supported-content/modules/email-connector/consistency-error-token.png" class="no-border" >}}

### Duplicate Mx Model Reflection Objects in Email Template

{{% alert color="info" %}} It is recommended to try this microflow in a non-production environment and check if is working as expected after the cleanup. After the successful validations, run it in the production environment.{{% /alert %}}

The Email Template export/import functionality introduced in EC v5.8.0 had a bug, which was subsequently fixed in v5.9.0. If you exported and imported Email templates using EC v5.8.0, you may see duplicate records in the placeholder entity drop-down, as shown below.

{{< figure src="/attachments/appstore/platform-supported-content/modules/email-connector/duplicate-mx-reflection-objs.png" class="no-border" width="700" >}}

To clean up these duplicate Mx Reflection records, a microflow is delivered as part of EC v5.9.2. As the cleanup microflow (**DEL_DuplicateMxReflectionObjects**) deletes database records from certain tables, it is strongly advised to complete a full DB backup before proceeding with the steps below. At a minimum, the following 3 tables must be fully backed up before starting.

1. MxObjectMember
2. MxObjectReference
3. MxObjectType

To perform the cleanup, follow these steps:

1. Call the **DEL_DuplicateMxReflectionObjects** microflow from a page using the **Call microflow** button. This should preferably be executed by an Admin user as a one-time activity.

    This microflow identifies and removes duplicate records from the backend. Upon completion, a pop-up dialog confirms the process has finished. The Console log displays the number of records removed from each respective table.

   {{< figure src="/attachments/appstore/platform-supported-content/modules/email-connector/mx-reflection-objs-cleanup-logs.png" class="no-border" width="700" >}}

2. After completing the cleanup process, remove the **Call microflow** button from the page to prevent the microflow from being triggered again.
