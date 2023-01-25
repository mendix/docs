---
title: "Sending Email"
url: /developerportal/deploy/sending-email/
weight: 40
description: "How to use external email providers in Mendix"
tags: ["email", "smtp", "sending policy framework", "SPF"]
aliases:
    - /deployment/mendixcloud/sending-email.html
    - /deployment/mendixcloud/sending-email
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

You may want to send email from your apps running in the Mendix Cloud via, for instance, the [Email](/appstore/connectors/email-connector/) connector. After you have installed this you will need to configure an SMTP server in your application. There are several options:

| Service | Mendix Cloud | Free App environment |
| --- | --- | --- |
| **Amazon Simple Email Service** | &#x2713;    | &#x2713; |
| **Gmail** | &#x2713; | &#x2713; |
| **MailGun** | &#x2713; | &#x2713; |
| **SendGrid** | &#x2713; | &#x2713;    |
| **Other SMTP-compatible services** | &#x2713; | &#x2713; |
| **Mendix Mail Servers** | &#x2717; | &#x2717; |

For apps deployed to Mendix Cloud you must setup a third-party mail provider to send emails from your app.

## 2 External Email Providers

In general we recommend external services as these offer specialized tools for sending e-mail, working with spam filters, keeping track of sent e-mail and giving insights into your target reach via analytics tools.

The [Email](/appstore/connectors/email-connector/) connector from the Marketplace is compatible with all providers that offer an SMTP interface. You can also use other ways of sending e-mail using an external service, such as REST APIs or creating your own Java actions to send e-mail.

To use an external provider, you will need to sign up for an account with them and use their SMTP settings which include:

* Host
* Port
* SSL/TLS
* Username
* Password

Frequently used providers (A-Z) are:

* [Amazon Simple Email Service](https://aws.amazon.com/ses/) [[settings](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-connect.html)]
* [Gmail](https://mail.google.com/) [[settings](https://support.google.com/a/answer/176600?hl=en) - [common configuration problem](http://stackoverflow.com/questions/20337040/gmail-smtp-debug-error-please-log-in-via-your-web-browser)]
* [Mailchimp Transactional Emails](https://mailchimp.com/features/transactional-email/) [[settings](https://mailchimp.com/developer/transactional/docs/fundamentals/)]
* [MailGun](https://mailgun.com/) [[settings](https://documentation.mailgun.com/en/latest/quickstart-sending.html#send-with-smtp-or-api)]
* [SendGrid](https://sendgrid.com/) [[settings](https://sendgrid.com/docs/ui/account-and-settings/mail/)]
* [Microsoft 365](https://www.office.com/) [[settings](https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365)]

Many users of *Free Apps* use the settings of their own GMail account for convenience. There are many more email providers, most of which have SMTP compatibility.

{{% alert color="info" %}}

Please note that you cannot send email from Mendix Cloud over port 25. Although this port is open, it is heavily rate-limited by the infrastructure provider, so you will experience issues. This configuration cannot be changed.

Your SMTP provider needs to expose a secure port like 587, which is a best practice that most modern providers offer out of the box.

{{% /alert %}}

## 3 Sender and Recipient Address Requirements

* Always use a sender address which is an *existing address on which you are able to receive mail*. If you use a non-existent address as the sender address, you will not get (bounce) error messages which might be generated when mail delivery fails half way.

* Do not invent your own non-existing domain or local part

* Do not use noreply@ addresses unless that noreply@ address is a real email box from which you can read and process delivery errors.

* Sender or recipient addresses which contain a domain name that does not exist on the internet may be rejected by the outgoing mail server.

* Sender or recipient addresses which do not contain a domain name at all will be rejected by the outgoing mail server.

* Do not invent your own email addresses for testing purposes. Domain names like 'domain.com', 'email.com', 'test.com' are actually real domain names. Likely there's someone reading the mailbox for 'test@domain.com', who will receive email you send from your test environment if you send it there.

## 4 Read More

* [Mendix Cloud: Deploy](/developerportal/deploy/mendix-cloud-deploy/)
