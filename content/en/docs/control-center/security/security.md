---
title: "Security Settings in Control Center"
linktitle: "Settings"
url: /control-center/security-settings/
description: "Describes the Settings page in the Security category in Control Center."
weight: 10
no_list: false
---

{{% alert color="info" %}}
A member in Control Center means a user of the Mendix platform who participates in the development process. It does not mean an end-user of an app built in the Mendix Platform.
{{% /alert %}}

## Introduction 

The **Settings** page in the **Security** category in Control Center allows you to configure the security settings, manage the single sign-on configurations, and view the security history of your company.

## Security Settings Tab

### Password Policy

With the **Password Policy** setting, you can set the password expiration policy for all company members. If you do not want the passwords to expire, toggle **Passwords of company members never expire** to **On**.

### Email Signing {#disable-enable-digital-signing-emails}

The Mendix Platform digitally signs the content of emails from senders [no-reply@notifications.mendix.com](mailto:no-reply@notifications.mendix.com) and [no-reply@platform-mail.mendix.com](mailto:no-reply@platform-mail.mendix.com). By digitally signing the content of an email, Mendix provides assurance to the recipient of the email that the content of an email has not been altered in transit. For reasons of security, this feature is enabled by default. However, if digitally signing the content of an email interferes with the delivery of that email to the recipient, a Mendix Admin can disable this feature for emails sent to receivers in the company domains. For more information, see the [Why Would You Want to Disable the Digital Signing of Email Content?](#why-disable-email-signing) section below.

To disable the digital signing of emails, turn off the toggle. To enable the digital signing of emails, turn on the toggle. This setting has an effect on the emails sent to all the [email domains claimed by your company](/control-center/company-settings/#company-email-domains).

#### Why Would You Want to Disable the Digital Signing of Email Content? {#why-disable-email-signing}

Digital signing of email content contributes to security, so why would you want to disable the digital signing of email content sometimes?

Digital signing might interfere with other email safety measures like “External Email Warning”. This feature might add a customized HTML warning to the email. Since Mendix emails cannot be altered, some email servers will wrap the original message in a blank email and add the original email as an attachment. This is not beneficial for the experience of the user and will make the emails look suspicious, impacting user engagement. Also, it makes searching for emails with specific text content more difficult for users.

### Application Data Replication {#application-data-replication}

{{% alert color="info" %}}
The application data replication setting only affects apps and environments that have not been provisioned yet.

This feature is only available to [premium customers](/developerportal/deploy/mendix-cloud-deploy/#additional-resources).
{{% /alert %}}

By default, Mendix provides premium customers with an SLA which includes high-availability and disaster recovery measures. This means that your application data (file storage and database backups) is replicated to other availability zones within the region and also to a secondary region so that you can still access your data in case of an outage in the primary region.

Secondary regions are, wherever possible, in the same political region as the primary region. However this is not always possible.You can find which secondary regions are used for each primary region in the [Data Location](/developerportal/operate/backups/#data-location) section of *Backups*.

If you want your data to remain in the primary region and not be replicated to a secondary region, click **Deactivate** to deactivate application data replication. You will have to confirm that you accept the impact this has on the service level agreement you have with Mendix regarding disaster recovery and SOC2 compliance. Once you have made this change, all new environments which are provisioned will not replicate data to other regions.

You can turn application data replication back on by clicking **Activate**. 

## Single Sign-On Tab

On the **Single Sign-On** tab, you can set up an identity federation between the Mendix Platform and your corporate identity provider. We call this feature *Bring Your Own Identity Provider (BYOIDP)* and you can find more information in [How to Set Up an SSO (BYOIDP)](/control-center/security/set-up-sso-byoidp/).

## Security History Tab

On the **Security History** tab, you can view a detailed history of changes to application data replication settings, including when the changes were made and by whom.
