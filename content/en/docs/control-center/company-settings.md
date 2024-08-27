---
title: "Company Settings"
url: /control-center/company-settings/
description: "Describes the Company Settings page in the Mendix Control Center."
weight: 30
no_list: list
---

## Introduction

The **Company Settings** page allows you to change company details, company email domains, and security contact. Moreover, you can view and add Mendix Admins of your company.

## General Settings

On the **General Settings** tab of this page, you can manage your company details, company email domains, and security contact.

### Company Details

Under **Company Details**, you can edit your **Company Name** and **Description**.

### Company Email Domains {#company-email-domains}

{{% alert color="warning" %}}Once you add an email domain, it is permanently added to your company and cannot be removed anymore, as soon as a user creates a Mendix account with this email domain, whether this Mendix account is active or not.{{% /alert %}}

Under **Company Email Domains**, you can request new company email domains by clicking **Add Domain**, upon which a request is sent to [Mendix Support](/support/). Once a domain is added, every user who signs up to Mendix with that email domain will be assigned to your company, all existing users with this domain will be moved to your company, and their applications will also be moved to the new company.

If you have [configured single sign-on using BYOIDP](/control-center/security/set-up-sso-byoidp/), BYOIDP will automatically adopt it, without further actions from the Mendix Admins.

To export all the email domains, use the **Export to Excel** button.

{{< figure src="/attachments/control-center/company-settings/company-email-domains.png" width="650px" class="no-border" >}}

{{% alert color="info" %}}In certain scenarios, you want to ask Mendix to merge two companies into one company on the Mendix Platform, for example, after your company purchases another company which also uses the Mendix Platform. 

It is possible to merge two companies into one company. However, this action is irreversible. Before Mendix can do this action, [the single sign-on configurations](/control-center/security/set-up-sso-byoidp/) for these two companies must be deactivated if they are enabled. After the two companies are merged, all users from the two companies and their applications will be moved to the same company.{{% /alert %}}

### Security Contact {#security-contact}

Under **Security Contact**, you can provide a specific security contact who is informed if there are critical security issues with the Mendix Platform and platform-supported Marketplace components. Mendix strongly recommends applying a team email address or a functional mailbox instead of a personal individual email address.

After you click **Add security contact** and add the required **Name** and **Email** address, a confirmation email is sent to the proposed contact. The recipient has seven days to click the link in the email and validate the Security Contact request. After seven days, the pending request is automatically removed. If the recipient has not received the confirmation email but is still within the seven-day validation timeframe, you can click **Resend confirmation email**.

For an existing security contact, there are two menu options available:

{{< figure src="/attachments/control-center/company-settings/security-contact.png" class="no-border" >}}

Click **Edit** to edit the Security Contact's **Name**.

Click **Delete** to delete the existing Security Contact. This is the first step in changing a validated Security Contact. After you make the deletion, you can add the new Security Contact.

For more information on security issues, see [Security Advisories](/releasenotes/security-advisories/).

## Mendix Admins{#mendix-admins}

The **Mendix Admins** tab lists all the current Mendix Admins in your company. A Mendix Admin will normally be someone in the IT department of your company, and they will have full access to Control Center to perform all available tasks. 

To add a new admin, click **Add Mendix Admin**. To remove an admin, hover over their name in the list and click **Remove**.

{{< figure src="/attachments/control-center/company-settings/admin.jpg" class="no-border" >}}

{{% alert color="info" %}}
It is not possible to remove yourself as a Mendix Admin.
{{% /alert %}}
