---
title: "Governance Process"
url: /appstore/sharing-content/governance-process/
description: "Describes the Mendix processes for approving and reviewing Marketplace content."
---

## Approval Process

All components that are to be listed in the [Public Marketplace](/appstore/sharing-content/#public) are subject to an approval process to ensure the quality and accuracy of the listing and that the component meets the expectations of users. Component submissions are processed in a queue and reviewed on a first-come, first-served basis within five working days after submission.

{{% alert color="warning" %}}
Mendix strongly recommends performing the checks below before you submit your component for approval. This will also speed up the approval process.
{{% /alert %}}

### Checks

Mendix checks the following:

* The licenses used in the uploaded *.mpk* files using the [Fossology](https://fossology.osuosl.org/repo/) tool
    * There should be no use of GPL, LGPL, or MPL licenses
    * For more details, see the [Providing License Details](/appstore/sharing-content/#license) section above
* For malware in the *.mpk* files using the [VirusTotal](https://www.virustotal.com/gui/home/upload) tool
* For third-party vulnerabilities using the [Snyk](https://snyk.io/) tool
* That the component can be used without errors in a specific Studio Pro version (if the component is a widget, module, connector, or an industry template)
* That the documentation mentions all the details per the template (for example, dependencies, configuration, and how to use the component)
* That the grammar, alignment, and spelling for the component's description and documentation is correct
* That the logo is related to the component's functionality
* That the screenshots are related to the configuration required to use the component in the end-user's app

It may sometimes take a few iterations for a component to be approved, depending on the issues identified. To avoid a high number of necessary iterations, make sure you have followed the [content development guidelines](/appstore/sharing-content/#guidelines) and have performed the checks above before you submit a component for approval.

{{% alert color="info" %}}
Review and approval by Mendix is required only for the first version of a publicly-listed component. Subsequent versions of a public component do not need review or approval by Mendix.
{{% /alert %}}

{{% alert color="info" %}}
[Private Marketplace](/appstore/sharing-content/#private) content does not require any review or approval.
{{% /alert %}}

## Reviewing Outdated Components

As the Mendix Marketplace grows, it is important for users to be able to find up-to-date and relevant components. In order to reduce the likelihood that users find outdated or obsolete components, we review Marketplace content and evaluate for the following points:

* Whether the component supports the versions of Studio Pro that Mendix supports (meaning, the current major version plus the two previous major versions – for more information, see [LTS, MTS, and Monthly Releases](/releasenotes/studio-pro/lts-mts/))
* Whether the component has been updated recently (for example, a component was published in 2016 and has not been updated since)
* Whether the component is being actively used, or if it has limited usage or very few downloads, reviews, or ratings

For a component that is outdated based on the above points, this is the review and remediation process: 

1. Mendix sends a notification to the owner of the outdated component and the [Mendix Admin](/control-center/company-settings/), who then has to submit an update within 30 days in order for their component to remain active on the Marketplace. This update needs to be based on support for an active version of Studio Pro.
2. Mendix sends two reminders during these 30 days (the first on the 15th day, and the second on the 25th day).
3. If the component owner or Mendix Admin is unable to make the required update within the stipulated timeframe, Mendix unpublishes their component from the Marketplace. Unpublishing means the component is not listed on the Marketplace, but a copy of the component remains in the database.
4. If the owner or Mendix Admin wants to restore their unpublished component on the Marketplace, they make the required update and create a [Mendix Support](/support/submit-support-request/) request.
