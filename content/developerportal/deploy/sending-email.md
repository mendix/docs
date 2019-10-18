---
title: "Sending Email"
parent: "mendix-cloud-deploy"
menu_order: 40
description: "How to use external email providers in Mendix, and how to configure Mendix mail on Cloud v3"
tags: ["email", "smtp", "sending policy framework", "Cloud v3", "SPF"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

You may want to send email from your apps running in the Mendix Cloud via, for instance, the [Email Module](https://appstore.home.mendix.com/link/app/259/Mendix/E-mail-module-with-templates). After you have installed this you will need to configure an SMTP server in your application. There are several options:

| Service | Mendix Cloud v3 | Mendix Cloud v4 | Free App environment |
| --- | --- | --- | --- |
| **Amazon Simple Email Service** | &#x2713; | &#x2713;	| &#x2713; |
| **Gmail** | &#x2713; | &#x2713; | &#x2713; |
| **MailGun** | &#x2713; | &#x2713;	| &#x2713; |
| **SendGrid** | &#x2713; | &#x2713; | &#x2713;	|
| **Other SMTP-compatible services** | &#x2713;	| &#x2713; | &#x2713; |
| **Mendix Mail Servers** | &#x2713; | &#x2717; | &#x2717; |

In Mendix Cloud v3 we include a local mail server for convenience and backwards compatibility. For new applications, or applications that send large amounts of e-mail we recommend using an external e-mail service.

## 2 External Email Providers

In general we recommend external services as these offer specialized tools for sending e-mail, working with spam filters, keeping track of sent e-mail and giving insights into your target reach via analytics tools.

The [Email Module](https://appstore.home.mendix.com/link/app/259/Mendix/E-mail-module-with-templates) from the AppStore is compatible with all providers that offer an SMTP interface. You can also use other ways of sending e-mail using an external service, such as REST APIs or creating your own Java actions to send e-mail.

To use an external provider, you will need to sign up for an account with them and use their SMTP settings which include:

*   Host
*   Port
*   SSL/TLS
*   Username
*   Password

Frequently used providers (A-Z) are:

*   [Amazon Simple Email Service](https://aws.amazon.com/ses/) [[settings](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-connect.html)]
*   [Gmail](https://mail.google.com/) [[settings](https://support.google.com/a/answer/176600?hl=en) - [common configuration problem](http://stackoverflow.com/questions/20337040/gmail-smtp-debug-error-please-log-in-via-your-web-browser)]
*   [MailGun](https://mailgun.com/) [[settings](https://documentation.mailgun.com/quickstart-sending.html#send-via-smtp)]
*   [Mandrill](https://www.mandrill.com/) [[settings](http://help.mandrill.com/categories/20090941-SMTP-Integration)]
*   [SendGrid](https://sendgrid.com/) [[settings](https://support.sendgrid.com/hc/en-us/articles/200328026-Recommended-SMTP-settings)]


Many users of *Free Apps* use the settings of their own GMail account for convenience. There are many more email providers, most of which have SMTP compatibility.

{{% alert type="info" %}}

Please note that you cannot send email from Mendix Cloud v4 over port 25. Although this port is open, it is heavily rate-limited by the infrastructure provider, so you will experience issues. This configuration cannot be changed.

Your SMTP provider needs to expose a secure port like 587, which is a best practice that most modern providers offer out of the box.

{{% /alert %}}

## 3 Mendix Mail Servers

### 3.1 Mendix Mail Server Details

The Mendix mail servers are only available in **Mendix Cloud v3**. If you are using Mendix Cloud v3 and are sending more than 1000 messages per day we recommend you use an external mail service as described above.

The settings for the Mendix mail servers are as follows:

* Servername: localhost
* Port: 25

No authentication information is needed. You can use this same SMTP server from the [Email Module](https://appstore.home.mendix.com/link/app/259/Mendix/E-mail-module-with-templates) from the AppStore or custom Java actions.

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

*   [Trends in Mendix Cloud v3](/developerportal/operate/trends)
*   [Mendix Cloud: Deploy](mendix-cloud-deploy)
*   [Azure: Deploy](azure-deploy)
