---
title: "Send Emails with Amazon SES and Mendix Email Connector"
linktitle: "Amazon SES"
url: /appstore/modules/aws/amazon-ses-email-connector/
description: "Describes the steps required to use Amazon Simple Email Service (SES) with the Mendix Email Connector."
weight: 20
aliases:
    - /appstore/connectors/aws/amazon-ses-email-connector/
---

## Introduction

[Amazon Simple Email Service (SES)](https://aws.amazon.com/ses/) is an email platform that provides an easy way to send and receive email using your own email addresses and domains. Amazon SES also provides SMTP details, which you can configure in the Mendix platform-supported [Email Connector](https://marketplace.mendix.com/link/component/120739) to send emails in your app.

## Configuring the Mendix Email Connector for Amazon SES

To configure your SES account in the Email Connector in Studio Pro, follow these steps: 

1. Get the following details from Amazon SES: 
    * SMTP hostname 
    * SMTP username 
    * SMTP password

    For more information, see [Obtaining Amazon SES SMTP credentials](https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html).

    {{% alert color="info" %}}Only email IDs and identities configured under Verified identities, and that are verified for Amazon SES accounts, can be used as sender and receiver.{{% /alert %}}

2. Download the Email Connector module and import it into your Studio Pro app. For more information, see [Email Connector](/appstore/modules/email-connector/).

    {{% alert color="warning" %}}Ensure that you follow the prerequisites listed in the [Email Connector documentation](/appstore/modules/email-connector/). Missing a step might lead to errors.{{% /alert %}}

3. Set up the Email Connector. For more information, see [Set Up in Studio Pro](/appstore/modules/email-connector/#setup) and [Email Account Configuration](/appstore/modules/email-connector/#accountconfig).  
4. On the **EmailConnector_Overview** page, click **Add email account**. 
5. Enter the following details: 
    * **Email** - SMTP username for Amazon SES 
    * **Password** -  SMTP password for Amazon SES 
6. Click **Next**.
7. Click **OK** to manually configure your email account. 
8. Select the **Send emails** checkbox, and then enter the following details: 
    * **Protocol** - SMTP 
    * **Server host** - enter SMTP hostname for Amazon SES 
    * **Server port** - any configured STARTTLS port for Amazon SES (for example, 25, 587, 2587, and so on) 
    * Select Use TLS / Use SSL accordingly 
9. Click **Finish**. 
