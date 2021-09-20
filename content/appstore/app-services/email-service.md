---
title: "Email Service"
category: "App Services"
description: " "
tags: ["marketplace", "marketplace component", "app service", "email"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

{{% todo %}}[**Verify Marketplace Documentation tab**]{{% /todo %}}

The [Email Service](https://marketplace.mendix.com/link/component/118393) app service enables including an email component in your Mendix application. Just add the minimum required configuration and you are good to go.

The app service works with [Mendix SSO](/appstore/modules/mendix-sso), so no additional authentication changes are required.

### 1.1 Typical Use Cases

* The app service supports sending HTML and plain-text messages
* You can add recipients in the "To", "CC" and, "BCC" lists to send emails to multiple recipients
* You can use this app service to send emails with or without attachments

### 1.2 Features

This app service enables doing the following:

* Send HTML and plain text messages to multiple recipients
* Send attachment(s) with a message

### 1.3 Limitations

*  The number of recipients (To + CC + BCC) cannot exceed 50
*  The cumulative size of the attachment(s) cannot exceed 10 MB
*  Certain files, for example, executables, scripts, and macros, are not supported as attachments. For an exhaustive list of unsupported file types, see [Unsupported File Types](#unsupported-file-types)

### 1.4 Prerequisites

This app service can only be used with Studio Pro 9 versions starting with [9.4](/releasenotes/studio-pro/9.4).

## 2 Installation

1. Go to the Marketplace and download the *SendEmailModule.mpk* file for the [Email Service](https://marketplace.mendix.com/link/component/118393).

2. To add the email service to your app in Mendix Studio Pro, follow these steps:

   1. In the **App Explorer**, right-click the app, click **Import module package**, and then select the *SendEmailModule.mpk*. 
   
      ![pop-up-menu-in-app-explorer](attachments/email-service/import-module-in-app-explorer.png)
   
      In the **Import Module** dialog box, **Add as a new module** is the default option when the module is being downloaded for the first time, which means that new entities will be created in your app.
	
      {{% alert type="warning" %}}
      If you have made any edits or customization to a module that you have already downloaded, be aware of the **Replace existing module** option. This will override all of your changes with the standard App Store content, which will result in the creation of new entities and attributes, the deletion of renamed entities and attributes, and the deletion of their respective tables and columns represented in the database. Therefore, unless you understand the implications of your changes and you will not update your content in the future, making edits to the downloaded modules is not recommended.
      {{% /alert %}}
   
   2. In the **Import Module** dialog box, click **Import**. 
   
   3. Wait until a pop-up window states that the module was successfully imported. Click **OK**.
   
   4. Open the **App Explorer** to view the **SendEmailModule** module.

Once imported, the app service is visible in **App Explorer** and in the **Toolbox** pane of a microflow.

## 3 Configuration

Email Service is a premium Mendix product that is subject to a purchase and subscription fee. To successfully deploy an app that uses Email Service, you need to get a valid combination of **userName** and **secretKey** and configure them as an environment variable in the deployment setting.

### 3.1  Subscribing to Get a userName and secretKey {#obtain}

1. On the [Email Service](https://marketplace.mendix.com/link/component/118393) page, click **Subscribe** to go to the subscription order page.

2. Fill in **Technical Contact** information (**First Name**, **Last Name**, **Email Address**), the subscription number, billing account information, and other required information. After the order is created successfully, the app's [Technical Contact](/developerportal/collaborate/app-roles#technical-contact) receives an order confirmation email.

3. In the order confirmation email, click the link to the Marketplace [Subscriptions](/appstore/general/app-store-overview#subscriptions) page and log in there.

4. In the list of your organization's subscriptions, click the **Email Service** subscription link to open the subscription details page.

5. Click **Create Binding Keys**.

6. Enter a meaningful name for the binding keys. Make sure that the name includes the name of the app which uses Email Service.

7. Click **Create Keys** to generate the **userName** and **secretKey**. 
   
   The system generates **userName** and **secretKey** and also returns **MailFromDomain**, **SPF Record Settings**, and **MX Record Settings**. For more details on MX and SPF configuration, see the section [MX and SPF Records](#mx-and-spf-records).
   
   ![](attachments/email-service/binding-key-generation.png)

8. Copy and save the **userName** and **secretKey**. You will use them later in your app.

9. When the order was created successfully, the app's Technical Contact will also receive an email for the confirmation of the email address. Follow the instructions in the email to confirm the email address. Once this email address is confirmed, this email address is used as the sender's email address when the app sends an email.

### 3.2 Configuring userName and secretKey for App Deployment

1. In the **App Explorer**, go to **SendEmailModule** > **Configurations**. You can see **userName** and **secretKey** are defined as constants. 

3. Double-click **userName** and enter the **userName** that you got.

3. Click **OK** to save the settings.

   ![](attachments/email-service/configure-username-secretkey.png)

4. Double-click **secretKey** and enter the **secretKey** that you got.

5. Click **OK** to save the settings.

6. After you finish building the app, click **Run** to deploy your app to the cloud.


## 4 Usage

### 4.1 Sending Messages to Recipients 

You can use the Email Service in a microflow to send HTML or plain text messages. Email Service comes bundled with predefined entities **EmailAttr** and **SendEmailResponse**.

![](attachments/email-service/inbuilt-domain-entities.png)

You can create a list using the **EmailAttr** entity to specify **To**, **CC**, **BCC** recipients. For more information, see [Working with Lists in a Microflow](/howto/logic-business-rules/working-with-lists-in-a-microflow).

{{% alert type="info" %}}
Every email address to whom this message is sent is counted as utilization towards the allocated app service quota. Incorrect email addresses will result in the email bouncing.
{{ /alert }}

This representative microflow contains an entity with the required attributes, an action to send an email that internally calls the Java action, and a placeholder to capture the return code of the sending email action.

![](attachments/email-service/email-text-microflow.png)

To configure the **Send email** activity, double-click the activity and use expression syntax to specify the following settings in the **Send Email** dialog box:

![](attachments/email-service/send-email-dialog-box.png)

* **Required Fields**

  * **From name** – Defines the sender of the email
  * **To**  – Defines the recipients of the email
  * **Subject**  – Defines the subject of the email

* **Optional Fields**

  {{ alert type = "warning" }}
  For all **Optional Fields**, you must either define a value or select **empty** for the field. Otherwise, you will get an "missing value" error.
  {{ /alert}} 

  * **Cc** – Defines the recipients on the CC list of the email

  * **Bcc** – Defines the recipients on the BCC list of the email

  * **Content type** – Defines whether the email is a **Text** or **HTML** message

  * **Body** – Defines the body of the email

    {{ alert type = "info" }}
    If you want to send an HTML message, you can use **Mendix Template** and inject contents into the template to generate the HTML string and  then include the generated HTML string in the **Body**.
    {{ /alert}} 
    
  * **Attachment** (optional) – Defines the attachment to the email

After the **Send Email** activity is configured, once a microflow that uses this activity is triggered, the app asynchronously sends out the message to the recipients.

### 4.2 Sending message along with attachment(s) to recipients

This is a representative microflow that sends email with file attachments.
	
![](attachments/email-service/microflow.png)
	
The **Attachment** attribute accepts a list of **FileDocumentObject**. You can either use **System.FileDocument** or use [File Dropper](https://marketplace.mendix.com/link/component/111497) to create a list of **FileDocumentObject** that will be sent as attachment with this email.

![](attachments/email-service/system-filedocument-model.png)

{{ alert type = "info" }}
The size of the attached file(s) multiplied by the total number of recipients in the "To", "CC", and "BCC" lists is counted against the Data transfer utilization.
{{ /alert }}

### 4.3 Unsupported File Types for Attachments  {#unsupported-file-types}

The following executables, scripts, and macros, are not supported as attachments: *.ade*, *.adp*, *.app*, *.asp*, *.bas*, *.bat*, *.cer*, *.chm*, *.cmd*, *.com*, *.cpl*, *.crt*, *.csh*, *.der*, *.exe*, *.fxp*, *.gadget*, *.hlp*, *.hta*, *.inf*, *.ins*, *.isp*, *.its*, *.js*, *.jse*, *.ksh*, *.lib*, *.lnk*, *.mad*, *.maf*, *.mag*, *.mam*, *.maq*, *.mar*, *.mas*, *.mat*, *.mau*, *.mav*, *.maw*, *.mda*, *.mdb*, *.mde*, *.mdt*, *.mdw*, *.mdz*, *.msc*, *.msh*, *.msh1*, *.msh2*, *.mshxml*, *.msh1xml*, *.msh2xml*, *.msi*, *.msp*, *.mst*, *.ops*, *.pcd*, *.pif*, *.plg*, *.prf*, *.prg*, *.reg*, *.scf*, *.scr*, *.sct*, *.shb*, *.shs*, *.sys*, *.ps1*, *.ps1xml*, *.ps2* *.ps2xml*, *.psc1*, *.psc2*, *.tmp*, *.url*, *.vb*, *.vbe*, *.vbs*, *.vps*, *.vsmacros*, *.vss*, *.vst*, *.vsw*, *.vxd*, *.ws*, *.wsc*, *.wsf*, *.wsh*, .xnk.

### 4.4 Usage Dashboard

Usage Dashboard will be providing real-time statistics about your subscription's usage. For email-service, the usage is basically number of emails sent and data transfer usage. You can navigate to the Usage Dashboard by first logging into the Marketplace. Once on the Marketplace page, it will show you the list of your organization's subscriptions. The subscriptions will be a clickable link. Click the **Email Service** subscription link to open a new page. This page will have multiple tabs; the subscription Overview tab will show the usage dahboard for the given subscription. It will have 3 options to view Usage viz "Current Month", "Last Month", and "Till date".

* "Current Month" - Will show statistics for current month usage.
* "Last Month" - will show usage statistics for last month.
* "Till date" - will show usage statistics from the start of the subscription date to Today.

Navigation - Marketplace >> Subscription >> Details Page >> Overview tab >> Usage Dashboard.

## 5 Mail From Domain Setting

When an email is sent, it has two addresses that indicate its source: a **“From”** address provided by the email header, and a **MAIL FROM** address (sometimes called the envelope sender) that the sending mail server specifies indicating the source of the message. When recipients view an email in their inbox, they see the email’s “From” address. In contrast, the MAIL FROM address, which is used by mail servers to return bounce messages and other error notifications.

By default, messages that you send through a email-service provider, uses a subdomain of the service provider as the MAIL FROM domain. While this may be sufficient for many senders, other senders prefer to set the MAIL FROM domain to a domain that they own & control. By setting up a custom **MAIL FROM** domain, your emails can comply with Domain-based Message Authentication, Reporting and Conformance **(DMARC)**.

The DMARC validation can be achieved through Sender Policy Framework **(SPF)**. The only way to comply with DMARC through SPF is to use a custom MAIL FROM domain, because SPF validation requires the domain in the From address to match the MAIL FROM domain.

Even though this is a small change from your recipient's perspective, this change has a huge positive impact on your reputation as a sender and your email deliverability. Email service providers distrust messages that don't have domain authentication set up because they cannot be sure that the message comes from you. Explicitly stating that it comes from you increases your reputation with email service providers which makes it much less likely that they will filter your mail and not allow it get through to your recipient's inbox, which increases your deliverability. You are also explicitly showing your recipients that this email comes from you, so they are less likely to mark your mail as spam.

### 5.1 MX and SPF Records {#mx-and-spf-records}

Sender Policy Framework (SPF) is an email authentication method designed to detect forging sender addresses during the delivery of the email. SPF allows the receiving mail server to check during mail delivery that a mail claiming to come from a specific domain is submitted by an IP address authorized by that domain's administrators. The list of authorized sending hosts and IP addresses for a domain is published in the DNS records for that domain. 

A mail exchanger record (MX record) specifies the mail server responsible for accepting email messages on behalf of a domain name. It is a resource record in the Domain Name System (DNS)

You should work with your IT administrators to add the MX and SPF records, received during keys generation, into the DNS configuration of your domain. These records use the formats shown in the following table:

| Name | Format | Value |
| --- | --- | --- |
| notification.domain.com | MX | 10 feedback-smtp.eu-central-1.amazonses.com |
| notification.domain.com | TXT | "v=spf1 include:amazonses.com ~all" |
