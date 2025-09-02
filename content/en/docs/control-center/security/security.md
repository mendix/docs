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

The **Settings** page in the **Security** category in Control Center allows you to configure security settings, manage single sign-on configurations, and view the security history of your company.

## Security Settings Tab

### Password Policy

With the **Password Policy** setting, you can set the password expiration policy for all company members. If you do not want the passwords to expire, toggle **Passwords of company members never expire** to **On**.

### Email Signing {#disable-enable-digital-signing-emails}

The Mendix Platform digitally signs the content of emails from senders [no-reply@notifications.mendix.com](mailto:no-reply@notifications.mendix.com) and [no-reply@platform-mail.mendix.com](mailto:no-reply@platform-mail.mendix.com). By digitally signing the content of an email, Mendix provides assurance to the recipient of the email that the content of an email has not been altered in transit. For reasons of security, this feature is enabled by default. However, if digitally signing the content of an email interferes with the delivery of that email to the recipient, a Mendix Admin can disable this feature for emails sent to receivers in the company domains. For more information, see the [Why Would You Want to Disable the Digital Signing of Email Content?](#why-disable-email-signing) section below.

To disable the digital signing of emails, turn off the toggle. To enable the digital signing of emails, turn on the toggle. This setting has an effect on the emails sent to all the [email domains claimed by your company](/control-center/company-settings/#company-email-domains).

#### Disabling the Digital Signing of Email Content {#why-disable-email-signing}

While digital signing of email content contributes to security, there are cases where it should be disabled.

Digital signing might interfere with other email safety measures like “External Email Warning”. This feature might add a customized HTML warning to the email. Since Mendix emails cannot be altered, some email servers will wrap the original message in a blank email and add the original email as an attachment. This is not beneficial for the experience of the user and will make the emails look suspicious, impacting user engagement. Also, it makes searching for emails with specific text content more difficult for users.

### Allowing External User Invites to Projects {#allow-external-users}

By default, members outside your organization can be invited to collaborate on projects.

However, if your IT policy requires that only individuals with a [company email](/control-center/company-settings/#company-email-domains) address, meaning an email address that matches your company domains, work on projects, you can disable this option.

{{% alert color="info" %}}
If you disable this option, all invitations to email addresses outside of your company domains will be blocked. Any attempt to invite such users will result in an error.
{{% /alert %}}

Existing external collaborators are not affected by this change. You can manually remove them at any time from the [External Members](/control-center/members/#external-members) page.

If you need to make an exception and temporarily invite an external member:

1. Re-enable external invitations.
2. Add the external member.
3. Disable the setting again to reinstate the restriction.

### Application Data Replication {#application-data-replication}

{{% alert color="info" %}}
The application data replication setting only affects apps and environments that have not been provisioned yet.

This feature is only available to [premium customers](/developerportal/deploy/mendix-cloud-deploy/#additional-resources).
{{% /alert %}}

By default, Mendix provides premium customers with an SLA which includes high-availability and disaster recovery measures. This means that your application data (file storage and database backups) is replicated to other availability zones within the region and also to a secondary region so that you can still access your data in case of an outage in the primary region.

Secondary regions are, wherever possible, in the same political region as the primary region. However this is not always possible.You can find which secondary regions are used for each primary region in the [Data Location](/developerportal/operate/backups/#data-location) section of *Backups*.

If you want your data to remain in the primary region and not be replicated to a secondary region, click **Deactivate** to deactivate application data replication. You will have to confirm that you accept the impact this has on the service level agreement you have with Mendix regarding disaster recovery and SOC2 compliance. Once you have made this change, all new environments which are provisioned will not replicate data to other regions.

You can turn application data replication back on by clicking **Activate**. 

## Identity Provider (IdP) Integration

### Single Sign-On Tab

On the **Single Sign-On** tab, you can set up an identity federation between the Mendix Platform and your corporate identity provider. This feature is called [Bring Your Own Identity Provider (BYOIDP)](/control-center/security/set-up-sso-byoidp/).

### IdP-managed Mendix Admins

Once you have set up Single Sign-On (SSO) for the Mendix platform, you can extend this Identity Provider (IdP) integration to control who is granted the Mendix Admin role. From an access management perspective, central management of privileged roles, such as the Mendix Admin, is a recognized best practice. This approach mitigates the risk of privilege creep, where existing Mendix Admins can freely give admin rights to others without proper control.

{{% alert color="info" %}}
If you want to automate the process of assigning project-level roles to project members, you can integrate the [Mendix Projects API](/apidocs-mxsdk/apidocs/projects-api/) into your IAM infrastructure.
{{% /alert %}}

You can use your IT processes and IT systems to request and approve the Mendix Admin role for certain employees, and include the entitled employees in a user group in your IdP. The Mendix platform assigns or removes the Mendix Admin role from a user at login time, based on a group membership. When using IdP-managed admins, Mendix Admins can no longer be manually assigned through the Control Center.

{{% alert color="info" %}}
The IdP-managed Mendix Admin feature is currently in [Limited Availability](/releasenotes/release-status/#limited-availability) due to the lack of self-service configuration in the Control Center. As a result, it requires Mendix-assisted onboarding. To arrange onboarding, contact `jaap.francke@mendix.com`.
{{% /alert %}}

Note that enabling this feature on the Mendix platform may affect your existing set of Mendix Admins. The changes will take place at login:

* If a user logs in and is not a member of the Mendix-admin group in your IdP, Mendix will revoke their Mendix Admin role.
* If a user logs in and is a member of the Mendix-admin group in your IdP, Mendix will either assign the Mendix Admin role or retain the existing assignment.

As a result, the overview of [Mendix Admins](/control-center/company-settings/#mendix-admins) will gradually synchronize with the Mendix-admin group in your IdP.

#### Onboarding Prerequisites

Before you request to be onboarded to the IdP-managed Mendix Admins feature, please ensure the following prerequisites are met:

1. You have a Premium platform license to use this feature.
2. You have set up an active SSO or BYO-IdP configuration, as described in [Set Up an SSO (BYOIDP)](/control-center/security/set-up-sso-byoidp/).
3. You have a user group in your IdP that includes your current Mendix Admins. Typically, your IT department should manage this group, possibly with a request/approval process.
4. The ID token sent by your IdP to the Mendix platform during SSO must include a claim that indicates whether a user is a member of the Mendix Admin group. For configuration, Mendix needs to know the name of the claim and the expected value. When using Entra ID, a typical setup should have the following claim in the ID token:

    ```text
    “roles” : “Mendix-admin”
    ```

The Mendix platform has the flexibility of using any claim name and value.

## Security History Tab

On the **Security History** tab, you can view a detailed history of changes to application data replication settings, including when the changes were made and by whom.
