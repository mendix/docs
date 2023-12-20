---
title: "Company Settings"
url: /control-center/company-settings/
category: "Control Center"
description: "Describes the Company Settings page in the Mendix Control Center."
tags: ["control center", "mendix admin", "company settings"]
weight: 30
no_list: list
aliases:

---

## 1 Introduction

The **Company Settings** page allows you to change company details, company email domains, and security contact. Moreoever, you can view and add Mendix Admins of your company.

## 2 General Settings {#company-general-settings}

On the **General Settings** tab of this page, you can edit your **Company Name** and **Description**.

You can request new **Company Email Domains** by clicking **Add Domain**, upon which a request is sent to [Mendix Support](/developerportal/support/). Once a domain is added, every user who signs up to Mendix with that email domain will be assigned to your company.

If you have [configured single sign-on using BYOIDP](/control-center/security/set-up-sso-byoidp/), BYOIDP will automatically adopt it, without further actions from the Mendix Admins.

To export all the email domains, use the **Export to Excel** button.

{{< figure src="/attachments/control-center/company-settings/company-email-domains.png" width="650px" >}}

You can also provide a specific **Security Contact** who is informed if there are critical security issues with the Mendix Platform and platform-supported Marketplace components. Mendix strongly recommends applying a team email address or a functional mailbox instead of a personal individual email address.

After you click **Add security contact** and add the required **Name** and **Email** address, a confirmation email is sent to the proposed contact. The recipient has seven days to click the link in the email and validate the Security Contact request. After seven days, the pending request is automatically removed. If the recipient has not received the confirmation email but is still within the seven-day validation timeframe, you can click **Resend confirmation email**.

For an existing **Security Contact**, there are two menu options available:

{{< figure src="/attachments/control-center/company-settings/security-contact.png" >}}

Click **Edit** to edit the Security Contact's **Name**.

Click **Delete** to delete the existing Security Contact. This is the first step in changing a validated Security Contact. After you make the deletion, you can add the new Security Contact.

For more information on security issues, see [Security Advisories](/releasenotes/security-advisories/).

## 3 Mendix Admins

The **Mendix Admins** tab lists all the current Mendix Admins in your company. A Mendix Admin will normally be someone in the IT department of your company, and they will have full access to Control Center to perform all available tasks. 

To add a new admin, click **Add Mendix Admin**. To remove an admin, hover over their name in the list and click **Remove**.

{{< figure src="/attachments/control-center/company-settings/admin.jpg" >}}

{{% alert color="info" %}}
It is not possible to remove yourself as a Mendix Admin.
{{% /alert %}}
