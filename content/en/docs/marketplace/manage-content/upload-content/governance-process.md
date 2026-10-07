---
title: "Governance Process"
url: /appstore/submit-content/governance-process/
weight: 4
description: "Describes the Mendix processes for approving and reviewing Marketplace content."
---

## Approval Process

All components that are to be listed in the [Public Marketplace](/appstore/submit-content/#support-licensing) are subject to an approval process to ensure the quality and accuracy of the listing and that the component meets the expectations of users. Component submissions are processed in a queue and reviewed on a first-come, first-served basis within five working days after submission.

{{% alert color="warning" %}}
Mendix strongly recommends performing the following checks before you submit your component for approval. This also speeds up the approval process.
{{% /alert %}}

### Checks

Mendix checks the following:

* The licenses used in the uploaded *.mpk* files, using [QSM](/appstore/partner-solutions/qsm/).   
  There should be no use of GPL, LGPL, or MPL licenses.    
  For more details, refer to [Open-Source Software Licenses](/appstore/submit-content/#license).
* Any third-party vulnerabilities, using QSM.         
    Every new public component and every new version of a component packaged as an MPK file is automatically scanned by QSM.     
    If no vulnerabilities are detected, the component is uploaded automatically.    
    If vulnerabilities are identified, the upload is rejected, and the component remains in **My Drafts** with a **Declined** status. Developers can open the context menu for the declined component and navigate to the **Scan Overview** page to review the detected vulnerabilities.

It may sometimes take a few iterations for a component to be approved, depending on the issues identified. To avoid a high number of necessary iterations, make sure you have followed the [Guidelines for Content Creators](/appstore/guidelines-content-creators/) and have performed the checks above before you submit a component for approval.

{{% alert color="info" %}}
Components with the `.mxmodule` extension are not scanned by QSM, but are approved manually.

All subsequently uploaded versions of a public component must be scanned and approved by Mendix.

Private Marketplace content does not require any review or approval.
{{% /alert %}}

## Reviewing Outdated Components

As the Mendix Marketplace grows, it is important for users to be able to find up-to-date and relevant components. In order to reduce the likelihood that users find outdated or obsolete components, we review Marketplace content and evaluate for the following points:

* Whether the component supports the versions of Studio Pro that Mendix supports. This includes the current major version plus the two previous major versions.    
  For more information, see [LTS, MTS, and Monthly Releases](/releasenotes/studio-pro/lts-mts/)).
* Whether the component has been updated recently.
* Whether the component is being actively used, or if it has limited usage or very few downloads, reviews, or ratings.

This is the review and remediation process for outdated components: 

1. Mendix sends a notification to the owner of the outdated component and to the [Mendix Admin](/control-center/company-settings/). One of them then has to submit an update within 30 days in order for the component to remain active on the Marketplace. This update needs to be based on support for an active version of Studio Pro.
2. Mendix sends two reminders during these 30 days: the first on the 15th day, and the second on the 25th day.
3. If the component owner or Mendix Admin is unable to make the required update within the stipulated timeframe, Mendix unpublishes the component from the Marketplace. Unpublishing means the component is not listed on the Marketplace, but a copy of the component remains in the database.
4. If the owner or Mendix Admin wants to restore their unpublished component on the Marketplace, they make the required update and create a [Mendix Support](/support/submit-support-request/) request.
