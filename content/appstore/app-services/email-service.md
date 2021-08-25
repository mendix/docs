---
title: "Email Service"
category: "App Services"
description: " "
tags: ["marketplace", "marketplace component", "app service", "email"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

This app service enables including an email component in your Mendix application. Just add the minimum required configuration and you are good to go.

The app service works with [Mendix SSO](/appstore/modules/mendix-sso), so no additional authentication changes are required.

## 2 Installation

The *.mpk* package available in the Marketplace can be imported into Mendix Studio Pro or Studio. Once imported, the app service is visible in **App Explorer** and in the **Toolbox** pane of a microflow.

## 3 Configuration

The app service can be used into a microflow. This example microflow shows an entity model with the required attributes, a step for sending mail that will internally call the Java action, and a placeholder to capture the return code of the send mail action:

{{% todo %}}[**NEED BETTER SCREENSHOT**]{{% /todo %}}

![](attachments/email-service/microflow.png)

When configuring the Java action in the microflow, specify the **Required Fields** (**From name** and **To**) as well as desired **Optional Fields** using expression syntax.

{{% todo %}}[**IS THIS EMAIL API AVAILABLE AS PART OF THE APP SERVICE PACKAGE? NEED CROSS-REFERENCE?**]{{% /todo %}}

The email API supports plain text and HTML formats. Attachments are not supported as of now. 

## 4 Usage

You can choose to create a form where the end-user specifies **To**, **CC**, **BCC**, and the email body content. Clicking **Send Email** will asynchronously send out the message to intended recipients.

{{% todo %}}[**WHAT DOES THIS MEAN: "upstream action"? WHERE DOES THE USER DO THIS? IS THIS A KIND OF EMAIL TEMPLATE? NEEDS CLARIFICATION.**]{{% /todo %}}

You can also populate the  **To**, **CC**, **BCC**, **Subject**, and tHe email body content non-interactively as part of an upstream action before this microflow is invoked.

When sending an email, **To** and **From Name** are required attributes:

![](attachments/email-service/attributes.png)

The email is sent out to intended participants. Each individual email ID to whom this message is sent is counted as utilization towards the allocated app service quota. Incorrect email addresses will result in the email bouncing.
