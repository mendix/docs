---
title: "Private Mendix Platform Functionalities - Manage My Account"
linktitle: "Manage My Account"
url: /private-mendix-platform/reference-guide/common/account/
description: "Provides details on the features and functionality of the Manage My Account menu of Private Mendix Platform."
weight: 90
---

## Introduction

The **Manage My Account** menu contains the options that you need to make or manage your account. It consists of the following sections:

### Profile

Use the **Profile** page to add a profile picture, as well as view and edit your profile information. Some fields are fixed or only editable by an admin.

{{< figure src="/attachments/private-platform/pmp-manage-profile.png" class="no-border" >}}

### Change Password

Use the **Change Password** page to reset your password by doing the following steps:

1. Enter your current password.
2. Enter the new password.
3. Confirm the new password.
4. Click **Update**.

### Personal Access Tokens

A Personal Access Token (PAT) is used to identify the user account and its corresponding privileges/permissions when interacting with PMP over API's and other non-GUI interactions. For example, when setting up automated API calls between an external service and PMP. For more information, see [APIs for Private Mendix Platform](/apidocs-mxsdk/apidocs/private-platform/).

{{< figure src="/attachments/private-platform/pmp-manage-pat.png" class="no-border" >}}

The **Personal Access Tokens** page shows a list of previously created Personal Access Tokens along with the following information:

* **Name**
* **Scope**
* **Expiry date**
* **Actions**
    * **View details** - Explains the token scope.
    * **Copy PAT** - Copies the token to clipboard.
    * **Delete** - Deletes the token.
* **New Token** - Creates a new token with the following information:
    * **Input Name** – Enter a meaningful name for the token.
    * **Expiry Date** – Specify the expiry date of the token according to your company restrictions. As a best practice, never set the expiration time for the token to be more than one year.
    * **Project scopes** – Specify the scopes that are needed for this token. To reduce risk and impact, follow the least-privilege principle for token scope and use different tokens for different purposes instead of creating one token with a large scope.

### Service Credentials

Service credentials are used to establish the user account's identity with external services that Private Mendix Platform is integrated with, such as the version control server. Depending on settings configured by the admin, they can automatically provisioned through the integrations or manually configured for the user account.

{{< figure src="/attachments/private-platform/pmp-manage-credentials.png" class="no-border" >}}

The **Service Credentials** page shows a card for each previously created set of credentials. You can edit, delete, or create new credentials on this page.

### Notifications {#manage-notifications}

The preferences displayed on the **Notifications** page cannot be changed in the current version of Private Mendix Platform and are offered for information only. In a future release, preferences for additional notification channels such as email and push notifications will be configurable on this page.
