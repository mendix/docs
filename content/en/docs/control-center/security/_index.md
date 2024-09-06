---
title: "Security Settings in Control Center"
linktitle: "Security"
url: /control-center/security/
description: "Describes the Security page in the Mendix Control Center."
weight: 40
no_list: false
description_list: true
---

{{% alert color="info" %}}
A member in Control Center means a user of the Mendix platform who participates in the development process. It does not mean an end-user of an app built in the Mendix Platform.
{{% /alert %}}

## Introduction 

The **Security** page allows you to configure the security settings, manage the single sign-on configurations, and view the security history of your company.

## Security Settings

### Password Policy

With the **Password Policy** setting, you can set the password expiration policy for all company members. If you do not want the passwords to expire, toggle **Passwords of company members never expire** to **On**.

### Email Signing {#disable-enable-digital-signing-emails}

The Mendix Platform digitally signs the content of emails from senders [no-reply@notifications.mendix.com](mailto:no-reply@notifications.mendix.com) and [no-reply@platform-mail.mendix.com](mailto:no-reply@platform-mail.mendix.com). By digitally signing the content of an email, Mendix provides assurance to the recipient of the email that the content of an email has not been altered in transit. For reasons of security, this feature is enabled by default. However, in case digitally signing the content of an email interferes with the delivery of that email to the recipient, a Mendix Admin can disable this feature for emails sent to receivers in the company domains. For more information, see the [Why Do You Want to Disable the Digital Signing of Email Content?](#why-disable-email-signing) section below.

To disable the digital signing of emails, turn off the toggle. To enable the digital signing of emails, turn on the toggle. This setting has an effect on the emails sent to all the [email domains claimed by your company](/control-center/company-settings/#company-email-domains).

#### Why Do You Want to Disable the Digital Signing of Email Content? {#why-disable-email-signing}

Digital signing of email content contributes to security, but why do you want to disable the digital signing of email content sometimes? Digital signing might interfere with other email safety measures like “External Email Warning”. This feature might add a customized HTML warning to the email. Since Mendix emails cannot be altered, some email servers will wrap the original message in a blank email and add the original email as an attachment. This is not beneficial for the experience of the user and will make the emails look suspicious, impacting user engagement. Also, it makes searching for emails with specific text content more difficult for users.

## Single Sign-On

On the **Single Sign-On** tab, you can set up an identity federation between the Mendix Platform and your corporate identity provider. We call this feature *Bring Your Own Identity Provider (BYOIDP)* and you can find more information in [How to Set Up an SSO (BYOIDP)](/control-center/security/set-up-sso-byoidp/).

## Security History

On the **Security History** tab, you can click **Show Security History** to open a page (in a new browser tab) that presents an audit trail of security-related changes in **App History** and **Member History**. You can search through and view details on these changes as well as export the audit trail to a CSV file.

{{< figure src="/attachments/control-center/security/security.jpg" class="no-border" >}}

## Documents in This Category
