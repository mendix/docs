---
title: "Send Email"
url: /refguide/send-email-action/
weight: 20
description: "Describes how to use the Send Email microflow activity to send emails directly from a microflow in Studio Pro."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The **Send Email** activity allows you to send an email directly from a microflow. Within a single activity, you configure the following:

* Email server connection
* Authentication method
* Sender and recipients
* Message content
* Attachments

You can also test the connection and send a test email from Studio Pro while your app is running without having to trigger the microflow.

Each **Send Email** activity holds its own connection and message configuration. Connection settings are not shared automatically between activities. To reuse the same server settings across multiple activities, store them in [Constants](/refguide/constants/) and reference those constants from each activity. See the [Connection](#connection) section below for more information.

{{% alert color="warning" %}}
Before sending emails from a production app, review the [Before Going to Production](#production) section below for guidance on authentication, credential storage, and email deliverability (SPF, DKIM, and DMARC).
{{% /alert %}}

## Properties

Double-click the **Send Email** activity to open its dialog box. The dialog box is organized into the following tabs:

* [General](#general) – configure the sender, the security method, and the server connection
* [Message](#message) – configure the recipients, custom headers, message body, and attachment
* [Test Email](#test-email) – send a test email to verify your configuration

## General Tab {#general}

The **General** tab configures how Studio Pro connects and authenticates to the email (SMTP) server, and which address the email is sent from.

### Sender's Details {#senders-details}

#### Email ID (From)

The **From** address is the email address the email is sent from. You can type a value directly, or click **Edit** to define the value using a [microflow expression](/refguide/expressions/).

{{% alert color="info" %}}
The **From** address must be an address the configured email server is allowed to send on behalf of. Many providers reject messages, or mark them as spam, when the **From** address does not match an authenticated, verified sender. This field is labeled **Email ID (From)** in the dialog box. It is the sender ("From") address, not a message identifier.
{{% /alert %}}

### Security Method {#security-method}

The **Security method** section determines how the connection authenticates to the email server. The connection uses basic authentication. 

{{% alert color="warning" %}}
Basic authentication (username and password) is deprecated or disabled by default on several major email providers, including Google Workspace and Microsoft 365, unless the tenant administrator has explicitly re-enabled it. To send emails through these providers, you can:

* Re-enable SMTP basic authentication for the account (where your administrator's policy allows it), or
* Use a provider that supports basic SMTP authentication.
{{% /alert %}}

#### Username

The **Username** property is the username used to authenticate to the email server.

#### Password

The **Password** property is the password used to authenticate to the email server. 

{{% alert color="warning" %}}
Avoid hard-coding a password as a literal value in the microflow because it would then be stored in the app model. Instead, provide the credential through a mechanism that keeps it out of the model (for example, a constant whose value is set per environment). Never commit real credentials to version control.
{{% /alert %}}

### Connection {#connection}

The **Connection** field configures how Studio Pro reaches the email server.

{{% alert color="info" %}}
Connection details such as the **Server Host**, **Server Port**, and the **Email ID (From)** are commonly stored as [Constants](/refguide/constants/) so they can differ per environment instead of being hard-coded in the microflow. Referencing the same constants from multiple **Send Email** activities also lets you update the server settings in one place instead of editing each activity individually.
{{% /alert %}}

#### Email Protocol 

The **Email Protocol** property is the protocol used to send email. This property is read-only. 

Default value: *SMTP*

#### Security Type 

The **Security Type** property is the transport security used for the connection: **None**, **SSL**, or **TLS**. 
 
Default value: *TLS*

#### Check Server Identity

The **Check Server Identity** option defines whether to verify the server's identity (certificate). This option is only enabled when **Security Type** is set to **SSL**.

Default value: *No*

#### Timeout (ms)

The connection timeout (in milliseconds).   

Default value: *20000*

#### Server Host

The **Server Host** property is the address of the email (SMTP) server.

#### Server Port

The **Server Port** property is the port of the email (SMTP) server.

### Test Connection {#test-connection}

Click **Test Connection** to verify the configured connection and authentication settings are valid.

{{% alert color="info" %}}
**Test Connection** is only enabled when your app is running and the required connection fields (**Server Host** and **Server Port**) are provided as literal or constant values. A message indicates whether the connection was successful.
{{% /alert %}}

## Message Tab {#message}

The **Message** tab configures the recipients, custom headers, message content, and attachment.

### Receiver's Details {#receivers-details}

Configure the recipients in the table by selecting a row and clicking **Edit** (or double-clicking the row). Each value is defined using a microflow expression.

#### To

The **To** field is the primary recipient (or recipients) of the email.  

#### Cc

The **Cc** field is the carbon-copy recipient (or recipients) of the email.  

#### Bcc

The **Bcc** field is the blind carbon-copy recipient (or recipients) of the email. 

### Custom Headers {#custom-headers}

The **Custom headers** section allows you to add custom email headers. Use the toolbar to manage headers:

* **Add** – add a new custom header
* **Edit** – edit the selected custom header
* **Delete** – remove the selected custom header

#### Name

The **Name** property is the name of the header. This can only contain letters, digits, and hyphens, and cannot be empty.

#### Value

The **Value** property is the value of the header. It cannot be empty or contain line breaks.  

### Message Body {#message-body}

The following fields can be defined either as plain text or as a string template. A string template is fixed text with `{1}`, `{2}`, … placeholders whose values are of type microflow expression and come from parameter expressions evaluated against the surrounding microflow. For example:

```text
Subject: "Order {1} confirmed"
  {1} → $Order/OrderNumber

Body:    "Hi {1}, your order ships on {2}."
  {1} → $Order/Customer/FirstName
  {2} → formatDateTime($Order/ShipDate, 'yyyy-MM-dd')
```

{{% alert color="info" %}}
Consider the following about templates:

* The subject, the plain-text body, and the HTML body each have their own template. For a given field, use either the plain value or its template consistently.
* Keep placeholder numbering contiguous (`{1}`, `{2}`, …), and make sure every placeholder has a corresponding parameter expression.
* Only reference variables that exist in the microflow's scope at the activity's position. If the data is not yet available, retrieve it earlier in the flow.
* The HTML and plain-text bodies are independent. Populate only the one (or ones) you need.
{{% /alert %}}

#### Subject

The **Subject** property is the subject line of the email.   

#### Message Body (Plain Text)

The **Message Body (Plain Text)** property is the plain-text version of the email body.

#### Message Body (HTML) 

The **Message Body (HTML)** property is the HTML version of the email body. 

### Attachment {#attachment}

In the **Attachment** section, select a microflow variable to attach to the email.

#### Variable

Only variables of type `System.FileDocument`, List of `System.FileDocument`, or their specializations can be attached. The variable must exist in the microflow's scope before the **Send Email** activity (the file must already have been retrieved or created earlier in the flow).

{{% alert color="info" %}}
The **Send Email** activity does not impose its own attachment size limit. The maximum message and attachment size is determined by the receiving email server or provider, which rejects messages that exceed its limit. Check your provider's documentation for the applicable maximum.
{{% /alert %}}

## Test Email Tab {#test-email}

The **Test Email** tab allows you to send a test email to verify your configuration from Studio Pro without triggering the microflow.

### Test Email Details {#test-email-details}

#### Use Template for Test Email

When **Use Template for Test Email** is selected, the subject and body fields use the string templates configured on the [Message](#message) tab. Because template placeholders reference microflow variables that are not available while testing, click the Edit icon next to each field to provide test values for the template parameters.

When not selected, you can enter the subject and body directly.

#### To

The **To** property is the recipient of the test email.

#### Subject

The **Subject** property is the subject line of the test email.   

#### Message Body (Plain Text)

The **Message Body (Plain Text)** property is the plain-text version of the test email body.

#### Message Body (HTML) 

The **Message Body (HTML)** property is the HTML version of the test email body. 

### Send Test Email {#send-test-email}

Click **Send Test Email** to send the test email using the current configuration. A message indicates whether the test email was sent successfully.

{{% alert color="info" %}}
**Send Test Email** is only enabled when your app is running and the **To** field is provided.
{{% /alert %}}

## Error Handling {#error-handling}

Sending emails can fail at runtime for reasons outside your app's control, such as:

* The email server is unreachable
* The connection times out
* Authentication is rejected
* A recipient address is invalid

When this happens, the **Send Email** activity raises and logs an error.

Handle these failures by configuring an [error handler](/refguide/error-handling-in-microflows/) on the activity. This lets you, for example, log the failure, notify the user, or retry through an alternative path instead of letting the whole microflow fail. Because email delivery depends on external systems, wrapping the **Send Email** activity in error handling is strongly recommended for production apps.

## Before Going to Production {#production}

Review the following before you deploy to a production app.

### Authentication and Credentials

* This version of the activity supports [basic authentication](#security-method) (username and password) only. Confirm your email provider permits SMTP basic authentication (**Google Workspace** and **Microsoft 365** disable it by default) or use a provider that does.
* Do not hard-code credentials in the microflow model. Supply them through per-environment constants so secrets (the password in particular) are not stored in the app model or version control.

### Email Deliverability (SPF, DKIM, and DMARC)

The sending domain must be configured correctly at the DNS level for your emails to be accepted and not marked as spam.

* **SPF** – authorizes which servers may send emails for your domain
* **DKIM** – cryptographically signs your messages so recipients can verify they were not altered
* **DMARC** – tells receiving servers how to handle messages that fail SPF or DKIM checks

If these records are missing or misconfigured, receiving servers may reject your messages or route them to spam, even when the activity reports that the email was sent successfully. Set these up with your email provider and domain administrator before going live.

{{% alert color="info" %}}
When deploying to Mendix Cloud, refer to [Sending Email](/developerportal/deploy/sending-email/) for supported providers and SMTP configuration guidance.
{{% /alert %}}

## Read More

* [Sending Email](/developerportal/deploy/sending-email/) – external email providers and SMTP configuration for Mendix Cloud
* [Error Handling in Microflows](/refguide/error-handling-in-microflows/)
* [Constants](/refguide/constants/)
* [Microflow Expressions](/refguide/expressions/)
