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
* You can use this email-service to send emails with or without attachments. 

### 1.2 Features

This app service enables doing the following:

* Sending HTML and plain-text messages to multiple recipients
* Sending attachment(s) with message.

### 1.3 Limitations
The email-service has folowing limitations:

*  The number of recipients (To + cc + bcc) cannot exceed 50.
*  The size of the attachment(s) cannot exceed 10MB 

### 1.4 Prerequisites
This app service can only be used with Studio Pro 8 versions starting with [8.18.5](../../releasenotes/studio-pro/8.18#8185).

## 2 Installation

First, download the *SendEmailModule.mpk* file for the [Email Service](https://marketplace.mendix.com/link/component/118393) from the Marketplace. When you want to add the email-service to your app in Mendix Studio Pro, follow these steps:

1. Right-click the project in the **Project Explorer**, click **Import module package**, and select the *SendEmailModule.mpk*. 
2.  In the **Import Module** dialog box, **Add as a new module** is the default option when the module is being downloaded for the first time, which means that new entities will be created in your project.
	
	{{% alert type="warning" %}}If you have made any edits or customization to a module that you have already downloaded, be aware of the **Replace existing module** option. This will override all of your changes with the standard App Store content, which will result in the creation of new entities and attributes, the deletion of renamed entities and attributes, and the deletion of their respective tables and columns represented in the database. Therefore, unless you understand the implications of your changes and you will not update your content in the future, making edits to the downloaded modules is not recommended.{{% /alert %}}

3. Click **Import** on the **Import Module** dialog box, and a pop-up stating that “The app was successfully imported into the project” will appear. Click **OK**.
4. Open the **Project Explorer** to view the SendEmailModule module.

The *SendEmailModule.mpk* package available in the Marketplace can be imported into Mendix Studio Pro. Once imported, the app service is visible in **App Explorer** and in the **Toolbox** pane of a microflow.

## 3 Configuration

### 3.1 Keys Generation {#keys}

### 3.2 Constants {#constants}


Setting keys in the environment variables. (username & secret)

The app service can be used into a microflow. This example microflow shows an entity model with the required attributes, a step for sending mail that will internally call the Java action, and a placeholder to capture the return code of the send mail action:

![](attachments/email-service/microflow.png)

When configuring the Java action in the microflow, specify the **Required Fields** (**From name**, **To**, and **Subject**) as well as desired **Optional Fields** using expression syntax:

![](attachments/email-service/java-action.png)

This Email Service app service supports messages in plain text or HTML formats. You can also send one or more attachments by providing a list of attachment objects.

## 4 Usage

### 4.1 Sending text/html message to recipients 

You can choose to create a form where the end-user specifies **To**, **CC**, **BCC**, and the email body content. When sending an email, the **To** and **From name** attributes are required:

![](attachments/email-service/attributes.png)

Clicking **Send Email** will asynchronously send out the message to intended recipients.

Each individual email ID to whom this message is sent is counted as utilization towards the allocated app service quota. Incorrect email addresses will result in the email bouncing.

### 4.2 Sending text/html message along with attachment(s) to recipients

### 4.3 Usage Dashboard

{{% alert type="info" %}}
The maximum size of the list of recipients in the **To** list is 50.

Sending attachments will use some of your data transfer limit. Your data transfer limit will depend on which plan you have subscribed to.
{{% /alert %}}
