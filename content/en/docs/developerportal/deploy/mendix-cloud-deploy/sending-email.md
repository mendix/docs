---
title: "Sending Email"
url: /developerportal/deploy/sending-email/
weight: 40
description: "How to use external email providers in Mendix, and how to configure Mendix mail on Cloud v3"
tags: ["email", "smtp", "sending policy framework", "Cloud v3", "SPF"]
aliases:
    - /deployment/mendixcloud/sending-email.html
    - /deployment/mendixcloud/sending-email
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
Our Mendix Cloud V3 is deprecated, currently in a grace period, and will be retired at the beginning of Q3 2021. To continue running your licensed Mendix application on the Mendix Cloud, you need to migrate your app to Mendix Cloud V4. To learn more about Mendix Cloud V4 and how to migrate from Mendix Cloud V3, please visit the following page: [Migrate to Mendix Cloud V4](/developerportal/deploy/migrating-to-v4/). 
{{% /alert %}}

## 1 Introduction

You may want to send email from your apps running in the Mendix Cloud via, for instance, the [Email with Templates](/appstore/modules/email-with-templates/) module. After you have installed this you will need to configure an SMTP server in your application. There are several options:

| Service | Mendix Cloud v3 | Mendix Cloud v4 | Free App environment |
| --- | --- | --- | --- |
| **Amazon Simple Email Service** | &#x2713; | &#x2713;	| &#x2713; |
| **Gmail** | &#x2713; | &#x2713; | &#x2713; |
| **MailGun** | &#x2713; | &#x2713;	| &#x2713; |
| **SendGrid** | &#x2713; | &#x2713; | &#x2713;	|
| **Other SMTP-compatible services** | &#x2713;	| &#x2713; | &#x2713; |
| **Mendix Mail Servers** | &#x2713; | &#x2717; | &#x2717; |

For apps deployed to Mendix Cloud v4 you must setup a third-party mail provider to send emails from your app.

In Mendix Cloud v3 we include a local mail server for convenience and backwards compatibility. Although it is convenient, you can encounter problems when using it. See [Mendix Mail Servers](#mendix-mail-servers), below, for more information.

However, for new applications or applications that send large amounts of e-mail running on Mendix Cloud v3, we strongly recommend using an external e-mail service.

## 2 External Email Providers

In general we recommend external services as these offer specialized tools for sending e-mail, working with spam filters, keeping track of sent e-mail and giving insights into your target reach via analytics tools.

The [Email with Templates](/appstore/modules/email-with-templates/) module from the Marketplace is compatible with all providers that offer an SMTP interface. You can also use other ways of sending e-mail using an external service, such as REST APIs or creating your own Java actions to send e-mail.

To use an external provider, you will need to sign up for an account with them and use their SMTP settings which include:

*   Host
*   Port
*   SSL/TLS
*   Username
*   Password

Frequently used providers (A-Z) are:

*   [Amazon Simple Email Service](https://aws.amazon.com/ses/) [[settings](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-connect.html)]
*   [Gmail](https://mail.google.com/) [[settings](https://support.google.com/a/answer/176600?hl=en) - [common configuration problem](http://stackoverflow.com/questions/20337040/gmail-smtp-debug-error-please-log-in-via-your-web-browser)]
*   [Mailchimp Transactional Emails](https://mailchimp.com/features/transactional-email/) [[settings](https://mailchimp.com/developer/transactional/docs/fundamentals/)]
*   [MailGun](https://mailgun.com/) [[settings](https://documentation.mailgun.com/en/latest/quickstart-sending.html#send-with-smtp-or-api)]
*   [SendGrid](https://sendgrid.com/) [[settings](https://sendgrid.com/docs/ui/account-and-settings/mail/)]


Many users of *Free Apps* use the settings of their own GMail account for convenience. There are many more email providers, most of which have SMTP compatibility.

{{% alert color="info" %}}

Please note that you cannot send email from Mendix Cloud v4 over port 25. Although this port is open, it is heavily rate-limited by the infrastructure provider, so you will experience issues. This configuration cannot be changed.

Your SMTP provider needs to expose a secure port like 587, which is a best practice that most modern providers offer out of the box.

{{% /alert %}}

## 3 Mendix Mail Servers{#mendix-mail-servers}

The Mendix mail servers are only available in **Mendix Cloud v3**. If you are using Mendix Cloud v3 and are sending more than 1000 messages per day we recommend you use an external mail service as described above.

Because multiple apps might be using the same Mendix mail server, there is a possibility that the Mendix IP is blocked by spamhaus.org. To work around this issue, we suggest that you follow the steps mentioned in the question [How do I hide the originating IP address of a sender in Postfix?](https://serverfault.com/questions/660129/how-do-i-hide-the-originating-ip-address-of-a-sender-in-postfix) on the *serverfault* website.

We also recommend that you implement the suggestions described in the blog post [8 Best Practices To Improve Your Email Deliverability](https://sendgrid.com/blog/8-best-practices-to-improve-your-email-deliverability/) on the *Sendgrid* website. While these cannot guarantee that the Mendix mail server IP address will not get blacklisted, it reduces the chance that this will happen. These measures include:

* Using double opt-in – sending an email with a link to confirm the address and subscription
* Ensuring that email lists are kept up-to-date with customers' wishes and that addresses which 'bounce' emails back are removed

### 3.1 Mendix Mail Server Details

The settings for the Mendix mail servers are as follows:

* Servername: localhost
* Port: 25

No authentication information is needed. You can use this same SMTP server from the [Email with Templates](/appstore/modules/email-with-templates/) module from the Marketplace or custom Java actions.

### 3.2 Using Sender Policy Framework (SPF) While Sending Outgoing Mail from Mendix

When using Mendix mail servers and a sender address in a domain that has a restrictive SPF policy configured, you may encounter email delivery issues. This happens when the outgoing email servers from Mendix are not listed in the SPF record of that domain name.

*   You can include the required information about Mendix mail servers that deliver outgoing mail traffic to the internet by including `include:_spf.mendix.com` into the policy rule for the SPF settings for the domain of the sender address. By using this technique, your SPF configuration will always be kept up to date automatically.

*   Do **not** use hard coded low level infrastructure details like IP addresses of mail servers. These addresses are subject to change whenever Mendix is doing upgrades and maintenance.

## 4 Sender and Recipient Address Requirements

*   Always use a sender address which is an *existing address on which you are able to receive mail*. If you use a non-existent address as the sender address, you will not get (bounce) error messages which might be generated when mail delivery fails half way.

*   Do not invent your own non-existing domain or local part

*   Do not use noreply@ addresses unless that noreply@ address is a real email box from which you can read and process delivery errors.

*   Sender or recipient addresses which contain a domain name that does not exist on the internet may be rejected by the outgoing mail server.

*   Sender or recipient addresses which do not contain a domain name at all will be rejected by the outgoing mail server.

*   Do not invent your own email addresses for testing purposes. Domain names like 'domain.com', 'email.com', 'test.com' are actually real domain names. Likely there's someone reading the mailbox for 'test@domain.com', who will receive email you send from your test environment if you send it there.

## 5 Read More

*   [Trends in Mendix Cloud v3](/developerportal/operate/trends/)
*   [Mendix Cloud: Deploy](/developerportal/deploy/mendix-cloud-deploy/)
