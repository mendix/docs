---
title: "Sending Email"
url: /developerportal/deploy/sending-email/
weight: 90
description: "How to use external email providers in Mendix"
aliases:
    - /deployment/mendixcloud/sending-email.html
    - /deployment/mendixcloud/sending-email
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

You may want to send email from your apps running in Mendix Cloud via, for example, the [Email](/appstore/modules/email-connector/) connector. After you have installed this, you will need to configure an SMTP server in your application. There are several options:

| Service                        | Mendix Cloud                                              | Free App environment |
| ------------------------------ | --------------------------------------------------------- | -------------------- |
| Amazon Simple Email Service    | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Gmail                          | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Mailgun                        | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| SendGrid                       | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Other SMTP-compatible services | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Mendix Mail Servers            | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}}      |

For apps deployed to Mendix Cloud, you must set up a third-party mail provider to send emails from your app.

## External Email Providers

In general, Mendix recommends external services because these offer specialized tools for sending emails, working with spam filters, keeping track of sent emails, and gaining insights into your target reach via analytics tools.

The [Email](/appstore/modules/email-connector/) connector from the Marketplace is compatible with all providers that offer an SMTP interface. You can also use other ways of sending email using an external service, such as REST APIs or creating your own Java actions to send email.

To use an external provider, you will need to sign up for an account with the provider and use their SMTP settings. These include the following:

* Host
* Port
* SSL/TLS
* Username
* Password

Here are some frequently used providers:

|Provider|Settings|
|---|---|
|[Amazon Simple Email Service](https://aws.amazon.com/ses/)|[Settings](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-connect.html)|
|[Gmail](https://mail.google.com/)|[Settings](https://support.google.com/a/answer/176600?hl=en), [common configuration problem](https://stackoverflow.com/questions/20337040/gmail-smtp-debug-error-please-log-in-via-your-web-browser)|
|[Mailchimp Transactional Emails](https://mailchimp.com/features/transactional-email/)|[Settings](https://mailchimp.com/developer/transactional/docs/fundamentals/)|
|[Mailgun](https://mailgun.com/)|[Settings](https://documentation.mailgun.com/en/latest/quickstart-sending.html#send-with-smtp-or-api)|
|[SendGrid](https://sendgrid.com/)|[Settings](https://sendgrid.com/docs/ui/account-and-settings/mail/)|
|[Microsoft 365](https://www.office.com/)|[Settings](https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365)|

Many users of free apps use the settings of their own Gmail account for convenience. There are many more email providers, most of which have SMTP compatibility.

{{% alert color="info" %}}

Note that you cannot send email from Mendix Cloud over port 25. Although this port is open, it is heavily rate-limited by the infrastructure provider, so you will experience issues. This configuration cannot be changed.

Your SMTP provider needs to expose a secure port like 587, which is a best practice that most modern providers offer out of the box.

{{% /alert %}}

## Sender and Recipient Address Requirements

Keep the following requirements in mind:

* Always use a sender address that is an existing address on which you are able to receive mail. If you use a nonexistent address as the sender address, you will not get (bounce) error messages which might be generated when mail delivery fails halfway.
* Do not invent your own nonexistent domain or local part.
* Do not use `noreply@` addresses unless that `noreply@` address is a real mailbox from which you can read and process delivery errors.
* Sender or recipient addresses that contain a domain name that does not exist on the internet may be rejected by the outgoing mail server.
* Sender or recipient addresses that do not contain any domain name will be rejected by the outgoing mail server.
* Do not invent your own email addresses for testing purposes. Domain names like `domain.com`, `email.com`, and `test.com` are real domain names. Likely, there is someone reading the mailbox for `test@domain.com`, and they will receive emails you send from your test environment if you send them there.

## Read More

* [Mendix Cloud: Deploy](/developerportal/deploy/mendix-cloud-deploy/)
