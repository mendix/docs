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

* The service supports sending HTML and plain-text messages.
* You can add recipients in the "To", "CC" and "BCC" buckets to send emails to multiple recipients. 
* You can use this email service to send emails with or without attachments. 

### 1.2 Features

This app service enables doing the following:

* Send HTML and plain-text messages to multiple recipients
* Send attachment(s) with a message

### 1.3 Limitations
The email service has following limitations:

*  The number of recipients (To + CC + BCC) cannot exceed 50.
*  The cumulative size of the attachment(s) cannot exceed 10 MB
*  Certain files (executables/scripts/macro) are not supported as attachments. For an exhaustive list of unsupported file types, see [Unsupported File Types](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html)

### 1.4 Prerequisites
This app service can only be used with Studio Pro 8 versions starting with [8.18.5](/releasenotes/studio-pro/8.18#8185).

## 2 Installation

First, download the *SendEmailModule.mpk* file for the [Email Service](https://marketplace.mendix.com/link/component/118393) from the Marketplace. When you want to add the app service to your app in Mendix Studio Pro, follow these steps:

1. Right-click the project in the **Project Explorer**, click **Import module package**, and select the *SendEmailModule.mpk*. 
	In the **Import Module** dialog box, **Add as a new module** is the default option when the module is being downloaded for the first time, which means that new entities will be created in your project.
	
	{{% alert type="warning" %}}
	If you have made any edits or customization to a module that you have already downloaded, be aware of the **Replace existing module** option. This will override all of your changes with the standard Marketplace content, which will result in the creation of new entities and attributes, the deletion of renamed entities and attributes, and the deletion of their respective tables and columns represented in the database. Therefore, unless you understand the implications of your changes and you will not update your content in the future, making edits to the downloaded modules is not recommended.
	{{% /alert %}}

3. In the **Import Module** dialog box, click **Import**. A pop-up stating that “The app was successfully imported into the project” will appear. Click **OK**.
4. Open the **Project Explorer** to view the SendEmailModule.

Now you have successfully added the Email Service resrouces to your app.

The *SendEmailModule.mpk* package available in the Marketplace can be imported into Studio Pro. Once imported, the app service is visible in **App Explorer** and in the **Toolbox** pane of a microflow.

## 3 Obtaining a userName & secretKey {#obtain}

Email Service is a premium Mendix product that is subject to a purchase and subscription fee. To successfully deploy an app that uses Email Service, you need to provide a valid combination of **userName and secretKey** as an environment variable in the deployment setting.

### 3.1  Subscribing to Get a userName & secretKey

On the [Email Service](https://marketplace.mendix.com/link/component/118393) page, click **Subscribe** to go to the subscription order page and follow these steps:

1. Fill in **Technical Contact** information (**First Name**, **Last Name**, **Email Address**), the subscription amount, billing account information, and other required information. After the order is created successfully, the app's [Technical Contact](/developerportal/collaborate/app-roles#technical-contact) receives an order confirmation email.

2. In the order confirmation email, click the link to the Marketplace [Subscriptions](/appstore/general/app-store-overview#subscriptions) page and log in there.

3. In the list of your organization's subscriptions, click the **Email Service** subscription link to open the subscription details page.

4. Click **Create Binding Keys**.

5. Give the key a meaningful name. Make sure that the name includes the name of the app that uses Email Service, and then click **Create Keys**.

6. When the **userName and secretKey** are generated, copy and save it for later use in your app.

   Along with **userName** and **secretKey**, **MailFromDomain** and **SPF Record Settings** & **MX Record Settings** records are returned during the binding key generation. For further details on MX & SPF configuration, see the section [MX & SPF Records](#mx-spf-records).

7. After the order is created successfully, the app's Technical Contact also receives an email asking to verify the email address. Follow the steps in that email to verify the "From Email".

### 3.2 Configuring userName & secretKey for App Deployment

In Mendix Studio Pro, follow the below steps:

1. Expand **SendEmailModule**.
2. Go to the **Configurations** tab. You can see **userName and secretKey** defined as Constants. 
3. Click the **uerName** Constant and fill in the value of **userName** generated during the binding key generation.
4. Click the **secretKey** Constant and fill in the value of **secretKey** generated during the binding key generation.
5. Click **OK** to confirm the settings.
6. When you finish building the app, click **Run** to deploy your app to the cloud.


## 4 Usage

### 4.1 Sending text message to recipients 

The Email Service can be used in a microflow. The Email Service supports sending messages in plain text or HTML format. This representative microflow shows an entity model with the required attributes, a step for sending an email that internally calls the Java action, and a placeholder to capture the return code of the sending email action.

![](attachments/email-service/email-text-microflow.png)

Email Service comes bundled with predefined Domain entities **EmailAttr** and **SendEmailResponse**. You can create a list using **EmailAttr** entity to specify  **To**, **CC**, **BCC** recipients. For more information, see [Working with Lists in microflow](howto/logic-business-rules/working-with-lists-in-a-microflow).

![](attachments/email-service/inbuilt-domain-entities.png)

When configuring the **Send email** activity in the microflow, specify the **Required Fields** (**From name**, **To**, and **Subject**) as well as desired **Optional Fields** using expression syntax:

![](attachments/email-service/attributes.png)

For optional fields or the ones which need not be populated, select **Empty** from the drop-down list in that field.

Choose the **Content Type** and specify if you want to send **Text** or **HTML** message. When the **Content Type** is set to **Text**, the you can define the email **Body** content by choosing **Edit** option..

![](attachments/email-service/content-type-text.png)

Clicking **Send Email** asynchronously sends out the message to intended recipients.

{{% alert type="warning" %}}
Each individual email ID to whom this message is sent is counted as utilization towards the allocated app service quota. Incorrect email addresses will result in the email bouncing.
{{ /alert }}

### 4.2 Sending HTML message to recipients

Choosing the **ContentType** as **HTML** enables sending HTML messages to recipients.
The HTML string can be generated using **Mendix Template** and injecting contents into the template. The generated HTML string can be then included in the **Body** attribute.

### 4.3 Sending message along with attachment(s) to recipients

This representative microflow shows sending email with file attachments.
	
![](attachments/email-service/microflow.png)
	
For sending messages with attachments, you need to first create Domain Model **System.FileDocument**. The **Attachment** attribute accepts a list of **FileDocumentObject**. 

{{% todo %}}  screenshot needed - domain model for attachment {{/% todo %}}

To create a list of File Objects using File Dropper, see [Working with File Dropper](https://marketplace.mendix.com/link/component/111497)

The size of the attached file(s) multiplied by number of recipients (**TO** + **CC** + **BCC**) is counted against the Data transfer utilization.

### 4.4 Usage Dashboard


## 5 MAIL FROM Domain Setting

### 5.1 MX & SPF Records {#mx-spf-records}

The MX and SPF records that are generated should be added into your domain's DNS configuration. These records use the formats shown in the following table:

| Name | Tyoe | Value |
| --- | --- | --- |
| notification.domain.com | MX | 10 feedback-smtp.eu-central-1.amazonses.com |
| notification.domain.com | TXT | "v=spf1 include:amazonses.com ~all" |

### 5.2 DKIM & DMARC Compliance
Coming in future release.
