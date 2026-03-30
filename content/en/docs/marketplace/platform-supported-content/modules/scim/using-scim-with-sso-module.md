---
title: "Preventing Duplicate Users When Enabling SCIM with the SSO Module"
url: /appstore/modules/scim/with-oidc/
linktitle: "Using SCIM with SSO Module"

description: "Describes use cases for preventing duplicate users when enabling SCIM with the SSO module."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Consider a scenario where the customer is already using OIDC or SAML for single sign-on (SSO) and plans to enable the SCIM module for automated user provisioning. In this scenario, existing users must be updated rather than duplicated when they are provisioned through SCIM. To ensure this behavior, the Identity Provider’s (IdP) unique identifier (claim) used by the OIDC or SAML module is mapped to a specific attribute in the Mendix user entity. When configuring the SCIM module, the same unique identifier must be mapped to the same Mendix entity attribute. This ensures that OIDC/SAML and SCIM all reference the same Mendix user record, allowing SCIM to update existing users instead of creating new ones.
The following decision flow diagram shows how to choose the correct identifier-mapping strategy when enabling SCIM for an existing OIDC-enabled Mendix application.

{{< figure src="/attachments/appstore/platform-supported-content/modules/scim/using-with-oidc/overview.png" >}}

## Scenarios

### Scenario 1: Mapping the Unique IdP Identifier for SSO and SCIM

This scenario applies when users have already authenticated to the Mendix application using SSO, for example, OIDC and the customer subsequently enables SCIM for user provisioning. When a user first logs in via OIDC, the Identity Provider (IdP) provides a unique identifier, such as the `sub` claim (for example, `00u12abcD3XYZpqRs5d6`).

The typical example of this scenario includes Okta as an IdP and using `sub` as a unique identifier. In the OIDC **Attribute Mapping** configuration, the unique IdP claim `sub` is stored in the `System.User.Name` attribute of the Mendix user entity, and the `Name` attribute is configured as the OIDC principal attribute. This establishes the `sub` value as the authoritative identifier for the user in Mendix.

{{% alert color="info" %}}
This scenario also applies if you are using Entra ID as IdP and you have mapped the unique IdP claim `oid` to `System.User.Name` attribute of the Mendix user entity. The `Name` attribute is configured as the OIDC principal attribute. By mapping the SCIM `externalId` to the `System.User.Name` attribute and configuring `Name` as the SCIM principal attribute enable Mendix to correctly correlate existing users.
{{% /alert %}}

To ensure that SCIM provisions and updates the same user rather than creating a duplicate record, the SCIM configuration must reference the same identifier. In IdPs such as Okta, the SCIM `externalId` attribute contains the same value as the OIDC `sub` claim.

In the **Attribute Mapping** of Entra Id portal, set the **Source attribute** of `externalID` to `objectId`.  In the case of Okta, `sub` is the default for `externalID`.

By mapping the SCIM `externalId` to the `System.User.Name` attribute and configuring `Name` as the SCIM principal attribute enable Mendix to correctly correlate SCIM provisioning requests with existing users. With this configuration in place, when users are provisioned or updated via SCIM, Mendix identifies the matching user record based on the shared identifier and updates the existing user instead of creating a new one.

| Protocol | Identifier | Value | Principal attribute |
| --- | --- | --- | --- |
| OIDC | sub | 00u12abcD3XYZpqRs5d6 | Name |
| SCIM | externalId | 00u12abcD3XYZpqRs5d6 | Name |

{{< figure src="/attachments/appstore/platform-supported-content/modules/scim/using-with-oidc/scim-principal-attribute.png" >}}

### Scenario 2: SSO Unique Identifier Not Supported by the SCIM — Using an Alternative Stable Attribute {#alternative-stable-attribute}

This scenario applies when a Mendix application has already provisioned users through the OIDC SSO module, but the principal IdP attribute (for example, `sub`) in the OIDC used for authentication is not available in the SCIM provisioning payload.

A typical example of this scenario is Entra ID as IdP,  where the OIDC `sub` claim is used as the primary unique identifier, and a second, stable identifier is mapped as a secondary identifier through OIDC attribute mapping. If the stable secondary identifier is not already mapped, refer to the [Scenario 3: No Existing Shared Identifier — Introducing a New Stable Attribute](#new-stable-attribute) section below.

In the existing setup, users authenticate via OIDC using a unique IdP claim such as `sub` (for example, `00u12abcD3XYZpqRs5d6`). This claim is mapped to `System.User.Name` and configured as the OIDC principal attribute. Additionally, a stable secondary identifier such as `preferred_username` is already mapped and stored for example, in the `customuserentity.FullName` attribute (for example, `johndoe@company.com`).

In Identity Providers such as Microsoft Entra ID, the SCIM provisioning flow does not include the OIDC `sub` claim. As a result, SCIM cannot use the original OIDC principal identifier to match existing users. However, the Mendix database already contains another stable identifier—`preferred_username`—that can be used for user correlation. In Entra ID, the SCIM `userName` attribute carries the same value as the OIDC `preferred_username`.

To allow SCIM to correctly identify and update existing users, configure the SCIM configuration as follows:

* In Attribute Mapping, map the `userName` claim to the `FullName` of the Mendix custom entity attribute and map the `externalID` claim to the `System.User.Name`. 
* Set `customuserentity.FullName` as the Principal attribute.

With this configuration, Mendix matches SCIM users to existing OIDC-provisioned users using the shared `preferred_username` value and updates the existing user records instead of creating duplicates.

{{% alert color="info" %}}
Note the following:

* Only map IdP claims to the `System.User.Name` in SCIM when it is used as the principal attribute for user matching; otherwise, duplicates may be created.
* To prevent duplicate users, map identifiers to an attribute that does not change over time, such as `objectId`. For more information, see [Configuring oid Claim in the OIDC SSO](/appstore/modules/oidc/#configuring-oid-claim-in-the-oidc-sso).

{{% /alert %}}

| Protocol | Identifier | Value | Principal attribute | Explaination |
| --- | --- | --- | --- | --- |
| OIDC | `sub` (primary), `preferred_username` (secondary) | `sub`: `00u12abcD3XYZpqRs5d6`, `preferred_username`: `johndoe@company.com` | `System.User.Name` | `sub` is the primary authentication identifier. `preferred_username` is stored in the `customuserentity.FullName` for SCIM correlation. |
| SCIM | userName (same as OIDC `preferred_username`) | johndoe@company.com | `customuserentity.FullName` (because in the OIDC, it is stored in this attribute) | `sub` is not available in the SCIM payload; SCIM uses `userName` to match existing users. |

#### Transitioning to a Long-Term Standard Identifier (`oid`)

If the organization decides to standardize on `oid` as the long-term unique identifier across both OIDC and SCIM, both configurations must be updated to use this identifier consistently. This is applicable when you use Entra ID as an identity provider. To implement this change, follow scenario 2 and do the following:

1. OIDC configuration

    * Add `oid` as a custom claim in the attribute mapping.
    * Update the OIDC attribute mapping from `sub` to `oid`, changing `System.User.Name` to map from `oid` instead of `sub`.

    If you are using `sub` already and have never used `oid` before, it can be mapped to `System.User.Name`. Otherwise, ensure that existing users are aligned with the `oid` value to avoid duplicate user creation.

2. SCIM configuration

    * Change the SCIM principal attribute from `customuserentity.FullName` to `Name`.
    * Ensure SCIM provisioning uses the `externalId` mapped to the `System.User.Name` (containing the `oid` value).

This alignment ensures that both authentication (OIDC) and provisioning (SCIM) consistently reference the same Mendix user based on a single, stable identifier.

### Scenario 3: No Existing Shared Identifier — Introducing a New Stable Attribute {#new-stable-attribute}
    
This scenario applies when a Mendix application has already provisioned users through the OIDC SSO module, but no identifier suitable for SCIM correlation exists in the Mendix user data.

In the existing configuration, users authenticate via OIDC, and the `sub` claim (for example, `00u12abcD3XYZpqRs5d6`) is mapped to `System.User.Name` and configured as the OIDC principal attribute. No secondary identifiers—such as `preferred_username` or `email` were mapped during the OIDC login process. As a result, the Mendix database contains only the `sub` value as the user identifier.

Because SCIM provisioning does not support the OIDC `sub` claim, SCIM cannot use this identifier to locate existing users. To enable consistent user matching across OIDC and SCIM, a new stable identifier must be introduced and stored in the Mendix user entity. To resolve this limitation, OIDC must be updated to send an additional unique attribute, such as `preferred_username`, which can be shared with SCIM and used for user correlation. This new identifier must be mapped to a Mendix user attribute (for example, `customuserentity.FullName`). Existing users must then log in at least once after the mapping change to ensure the new identifier is populated in the Mendix database.

To implement this scenario, do the following:

1. Update OIDC attribute mapping:
Map a stable, unique claim from the IdP, for example, map `preferred_username`  to the `customuserentity.FullName` (custom Entity attribute).

2. Propagate the new identifier:
Require existing users to log in via OIDC after the mapping is applied, so the new attribute is stored in Mendix.

3. Align SCIM configuration:
Configure SCIM to use the newly populated attribute for user matching and follow the same SCIM principal attribute and mapping approach described in the [SSO Unique Identifier Not Supported by the SCIM — Using an Alternative Stable Attribute](#alternative-stable-attribute) section above.

By introducing a shared, stable identifier and ensuring it is populated for all existing users, Mendix can reliably correlate SCIM provisioning requests with OIDC-authenticated users and update existing records instead of creating duplicates.

## Read More

* [SCIM](/appstore/modules/scim/)
* [OIDC SSO](/appstore/modules/oidc/)
