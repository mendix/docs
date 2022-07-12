---
title: "Email with Templates"
url: /appstore/modules/email-with-templates/
category: "Modules"
description: "Describes the configuration and usage of the Email with Templates module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "email with templates", "token", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Email with Templates](https://marketplace.mendix.com/link/component/259/) module lets you send emails with templates. Email templates can be managed with the possibility of using tokens. With the tokens available in the email template, the attributes and references of an object are filled in automatically and correctly.

For a deep-dive look into using this module, check out this video:

{{< vidyard "GwE17mzGma5NAvDnXrVdFA" >}}

{{% alert color="info" %}}
This module will be deprecated in the coming months. Check out the [Email Connector](/appstore/connectors/email-connector/) module for an alternative.
{{% /alert %}}

### 1.1 Typical Use Cases

The typical usage scenario is sending emails with a template system and using tokens to handle all of your outgoing standard emails.

### 1.2 Dependencies

#### 1.2.1 Mendix Modules

* [Mx Model Reflection](/appstore/modules/model-reflection/)
* [Encryption](/appstore/modules/encryption/)

#### 1.2.2 Java Libraries

* *commons-codec-1.14.jar*
* *commons-email-1.4.0.jar*
* *javax.mail-1.6.0.jar*

## 2 Configuration

To configure this module, follow these steps:

1. Download the [Mx Model Reflection](/appstore/modules/model-reflection/) module from the Mendix Marketplace.
2. Download and configure the [Encryption](/appstore/modules/encryption/) module from the Mendix Marketplace.
3. Add the **Administration** snippet to a custom page in a different module.
4. View the example in the **USE_ME** > **Examples** folder.
5. Create a duplicate of this example in your own module and customize it to make it fit your needs:
	* `Sub_CreateAndQueueEmail` – This is preferred for normal environments and will send the email in the background using a scheduled event.
	* `Sub_CreateAndSendEmail`  – This is preferred for [Free App](/developerportal/deploy/mendix-cloud-deploy/) environments and sends an email directly. This approach will block the user's flow and does not include a retry when the sending fails.
	* `Post-deployment` – After deploying, you have to set up your email settings and insert your own email templates using the newly created navigation items under **Administrator**.
6. Go to `MxObjects_Overview` and synchronize the objects. Make sure you do this every time you have added new objects.

### 2.1 Security

For security reasons, it is highly recommended for the **Server configuration** to set the **Use SSL** option in combination with **Use SSL check server identity**:

*  If you incorporate the **Administration** snippet, make the configuration on the **Configuration** tab:

    {{< figure src="/attachments/appstore/modules/email-with-templates/administration-snippet.png" >}}

*  If you set up the module using the wizard, make the configuration in the wizard:

    {{< figure src="/attachments/appstore/modules/email-with-templates/module-setup-step1.png" >}}

## 3 Read More

* [Sending Email](/developerportal/deploy/sending-email/)
