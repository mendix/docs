---
title: "Email Connector"
url: /appstore/connectors/email-connector/
category: "Connectors"
description: "Describes the configuration and usage of the Email Connector module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "imap", "pop3", "email", "encryption", "platform support", "encryption", "templates"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The Email Connector combines the functionalities of the [IMAP/POP3](/appstore/modules/imap/) module and [Email with Templates](/appstore/modules/email-with-templates/) module. It is available for Studio Pro 9.11 and above.

### 1.1 Features

The Email Connector includes the following features:

* Configuration of multiple accounts
* Send emails with digital signatures and encryption
* Set up email templates
* Actions that can be performed after receiving emails:
    * Delete from server
     * Move to a folder (for example, an archive)
* Subscribe to incoming email
     * Supports the IMAP and IMAPS protocol only
     * A microflow can be configured to execute for new incoming email
* Unsubscribe from incoming email
     * Removes the subscription (if it exists)
* Supported protocols:
     * POP3 and POP3S
     * IMAP and IMAPS

### 1.2 Prerequisites

Before you use the Email Connector, do the following:

1. Add the following widgets to your app:
     * HTMLSnippet
     * FileDocumentViewer
     * FormatString
     * RichText
2. Download and configure the [Mx Model Reflection](https://marketplace.mendix.com/link/component/69) module from the Mendix Marketplace.
3. Following the steps in the [Configuration](/appstore/modules/model-reflection/#configuration) section of the *Mx Model Reflection* page.

{{% alert color="warning" %}}
The Email Connector will not work correctly if the **Mx Model Reflection** module is not configured.
{{% /alert %}}

## 2 Setup in Studio Pro

After you install the module, configure the following in Studio Pro:

1. Provide a value for the **EncryptionKey** constant available under **USE_ME** folder. 
2. Launch the UI by referring to the Snippet in the **USE_ME** folder, or use the **EmailConnector_OverviewPage** microflow from the same folder.

## 3 Configure Email Accounts

Once you run your Studio Pro app, you can start configuring your email accounts.

### 3.1 Adding Email Account

You can add and configure an email account in the Email Connector either automatically or manually.

#### 3.1.1 Automatic Configuration

When you run your app to use this module for the first time, and earlier data is not present, you will see a welcome screen with an account setup wizard. Click on `Get Started` button and follow the steps to add email account. 

On the Email Connector dashboard, click on `Add Email Account` and follow the wizard.

#### 3.1.2 Manual Configuration

If you follow the wizard and it fails to detect the email settings automatically, you will be asked to enter all the settings manually to add the email account.

In Studio Pro, you can use the `GetAutoConfig` Java action to get the all supported email configurations for the provided username. It will return results as `Email_Connector.EmailProvider`. Process the `Email_Connector.EmailProvider` records and get the desired configuration and create the `Email_Connector.EmailAccount`.

### 3.2 Other Account Settings

You can set up the following additional account settings:

{{< figure src="/attachments/appstore/connectors/email-connector/other-account-settings.png" >}}

* Subscribe to incoming emails – user can select this option to get notified about the new incoming emails for modeling use `SubscribeToIncomingEmail` Java action. Read more about this in the section below.

{{% alert color="warning" %}}
This is only supported for IMAP protocols, and some servers may not support it at all.
{{% /alert %}}

* **Sanitize email to prevent XSS attacks** – option to enable the removal of malicious scripts to prevent XSS attacks. This option is unselected by default. To learn more about this option, see [Sanitize untrusted HTML (to prevent XSS)](https://jsoup.org/cookbook/cleaning-html/safelist-sanitizer).
* **Replicate everything in 'X' folder** – 
     * When this setting is not selected, the connector will fetch the number of emails mentioned in `Number of emails to retrieve from server` configuration based on the selected `Fetch strategy`
     * When this setting is selected, checked then module will fetch all the emails (in order of oldest to newest) from that folder in batch size as mentioned in `Email Batch Size` configuration
* **Timeout** – the connection timeout for send email/receive emails operations. This can be set in the `Email Account` object.

## 4 Usage

Once you have set up an account, you can use it in microflow activities to send and/or receive emails. The information in the following sections includes usage instructions for in Studio Pro, as well as when you run the connector in your app.

### 4.1 Sending Email

When the module is running, click **New** to compose and send new emails.

When modeling your app in Studio Pro, use the **SendEmail** java action to send emails. The input parameters are the following:

* **Email Account** Email account consisting of incoming email configuration and/or outgoing email configuration.
* **Email Message** Email Message object to be sent

The **Return type** is a boolean value. The Java action would connect to email server using the provided details and send an email, and would return **True** if successful.

The **To**, **Subject**, and **Email Content** fields are mandatory.

### 4.2 Receiving Email

Click **Refresh** to receive emails. Emails will be fetched and processed by server as configured in the email account.

When modeling your app in Studio Pro, use **RetrieveEmailMessages** java action. Once this java action is called at background emails will be fetched over multiple java threads and would be returned back to user in async manner. Email fetching will continue till the conditions defined in the email account settings at the Mendix side (like fetch Latest 1000 emails etc)

* Parameter
    1. **EmailAccount** * Email account consisting of incoming email configuration and/or outgoing email configuration.
    2. **onEmailFetchMicroflow** * a Microflow that will be triggered when **List of EmailMessage**  is fetched successfully from the email server. You can process the list per your need. Make sure you have list of **Email_Connector.EmailMessage** as a parameter to this microflow. Refer sample microflow **Sample_OCH_EmailFetchMicroflow**, while duplicating this microflow do not change input parameters’ name and data type. 
    3. **onFetchCompleteMicroflow** * a Microflow that will be triggered when the fetch is complete and there are no more emails for the particular java action call
    4. **onFetchErrorMicroflow** * a Microflow that will be triggered in case of any error during the fetch from email server operation

### 4.3 Using Email Templates

When the module is running, you can create templates to use for a specific email account.

In Studio Pro, you can configure this with the **SNIP_EmailTemplate_Overview** use this snippet to configure this functionality.

#### 4.3.1 Sending an email with a template

When modeling your app in Studio Pro, use the  **SendEmailWithTemplate** java action.

* Parameter
    * **Data Object** * Entity object from which you want to extract the placeholder tokens
    * **Email account** * Email account consisting of incoming email configuration and/or outgoing email configuration.
    * **Email template** * Email Message object to be sent
    * **Queued** * If true email message will be stored in the **EmailMessage** entity with status as **QUEUED** queued and user can sent it later using scheduled event or future.  


### 4.4 Signed and Encrypted Emails

You can choose to configure a digital signature and email encryption when the module is running.

In Studio Pro, these settings are found in the domain model of the Email Connector:

{{< figure src="/attachments/appstore/connectors/email-connector/sign-encrypt-domain-model.png" >}}

#### 4.4.1 Digital Signing

Digitally signed emails support only PKCS#12 certificates.

{{< figure src="/attachments/appstore/connectors/email-connector/digital-signature.png" >}}

#### 4.4.2 Email Encryption

Encryption for emails using the Email Connector module includes the following:

    * Supports LDAP servers for sending encrypted emails
    * Supports `Simple` and `No` (annonymous) authentication method
    * Supports SSL/TLS and non-SSL connection type
    * While encrypting email recipients certificate will be searched on `Base DN` 

{{< figure src="/attachments/appstore/connectors/email-connector/email-encryption.png" >}}

### 4.5 Subscribing to Incoming Email

To subscribe to incoming email from an account, call the **SubscribeToIncomingEmail** Java action.

* Parameter
    1. `account` * Email account consisting of incoming email configuration and/or outgoing email configuration.
    2. `onNewEmailReceivedMicroflow` * a Microflow that will be triggered when new email (List) is received from the server, You can process the list per your need. Make sure you have list of `Email_Connector.EmailMessage` as a parameter to this microflow. Refer sample microflow `Sample_OCH_EmailFetchMicroflow`, while duplicating this microflow do not change input parameters’ name and data type.
    3. `onSubscriptionStateChangedMicroflow` * a Microflow that will be triggered when subscription state is changed state can any of the following:
        * SUBSCRIPTIONFAILED
        * CONNECTIONTOSERVERLOST
        * CONNECTIONRETRYEXHAUSTED
        Make sure that microflow is accepting the string parameters `State` and `Comment`. Refer sample microflow `Sample_OCH_SubscriptionStateChanged`, while duplicating this microflow do not change input parameters’ name and data type.
* Return type
    `Nothing`

Note: It is recommended that, before subscribing to incoming email one should attempt for unsubscribe from incoming email so that application will not end up having duplicate subscription for a single email account. The complete flow of subscription is shown in the microflow `ACT_SubscribeForEmailNotification` 

### 4.6 Unsubscribing from Incoming Email

java action to `UnsubscribeFromIncomingEmail` when used with account parameter user(for the provided account) will be unsubscribed from incoming email subscription.

* Parameter
    `account` * Email account consisting of incoming email configuration and/or outgoing email configuration.


## 5 Key Microflows

* Sample_ACT_SendEmailWithTemplate

This microflow will help you to set up send email using the template

* EmailConnector_OverviewPage

In case of protected add-on module due to limitations we are not able to `Set export level to Usable` to circumvent this limitation we have used microflow to open the page and have set export level to usable.
