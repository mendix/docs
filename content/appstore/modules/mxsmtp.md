---
title: "MxSMTP"
category: "Modules"
description: "Describes the configuration and usage of the MxSMTP module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "mxsmtp", "platform support"]
draft: true
---

## 1 Introduction

The [MxSMTP](https://appstore.home.mendix.com/link/app/256/) module enables your application to run a mail server. It will process any messages it receives and stores these in your application.

{{% alert type="info" %}}
This is an advanced module and will require specific server and DNS adjustments in order to work.
{{% /alert %}}

{{% alert type="info" %}}
This module is not supported in the Mendix Cloud.
{{% /alert %}}

### 1.1 Typical Usage Scenarios

* Receiving emails into your application
* Letting users reply to emails sent by the application

### 1.2  Dependencies

* [Community Commons Function Library](community-commons-function-library)
* *javax.mail.jar*
* *jtnef-1.8.0.jar*
* *subethasmtp-3.1.7.jar*
* *activation.jar*

## 2 Configuration

The three microflows used to handle the emails that are received are described below. These all receive the input they need and should return Booleans to signify if the email should be processed or rejected. 

* **CheckMessageSender** – This microflow is used to check the **From** address for this message. This is run once for each message.
* **CheckMessageRecipient** –  This microflow calls a sub-microflow that receives the **To** and the **From** addressess. This is run for each of the recipients that are set in the **To** and **CC**. Here you could, for example, retrieve and check objects based on the input arguments (for example, `@myapplication.com`, where you can then retrieve an object for the hash to confirm something or further hook it up in your system) or use some other type of matching with your system. Note that **From** addressess can be easily faked, so make sure you keep this in mind when checking these. 
* **ProcessMessage** – If the message passed the first two checks, it ends up in this microflow for any final checks. You have the entire **SMTPMessage** object here, so you can check for anything that the previous two checks might have missed or perform further actions with the message.

## 3 Settings

These are the main module settings:

* **Port** – the port on which to listen
* **Max message size** – the maximum message size in bytes
* **Host name** – the host name on which the server will receive messages
* **Double-bounce address** – some email relays use a test connection before actually delivering the email, so specify their **From** address here
* **Delete after process** – the Boolean to delete the email after it has been processed; this can also be done manually using the **Purge old mails** tab
* **Apply XSS filter to incoming mails** – enable or disable XSS filtering
* **XSS filter level** – the XSS filter to use

After configuring these settings, you need to make sure the emails reach your new server. There are two important situations:

* **Deploying on a local host** – You can easily test the module by downloading the newest [SMTP Email](https://appstore.home.mendix.com/link/app/2461/) module. Set it up according to the email module's documentation, and for the SMTP settings, use the same ones that your MxSMTP server is running (default: local host on port 25000). Any emails you send using the email module will then end up in the same application's MxSMTP module. This way, you can test to/from addresses (which you can set in the email module) and possible content (plain or HTML) and attachments.
* **Deploying on a server** – Deploying on a real server is more difficult, as you will need to edit your DNS settings. For example, if your application wants to receive all the emails that are sent to `@myapplication.com`, you will need to edit the DNS that handles all the incoming traffic on `myapplication.com` to forward any emails it gets to your application at the location you have set (for example, `email.myapplication.com:25000`). This will make sure your app receives them, and from there, you can either process them or send them somewhere else. If you already have a mail server listening to `@myapplication.com`, you will need to configure it so it sends all the emails you want in your app to it. Setting these DNS forwarding options require advanced access and knowledge of the server in question. Make sure you check and test this with the server administrators.
