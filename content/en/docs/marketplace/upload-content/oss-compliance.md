---
title: "OSS Compliance for External Developers"
url: /appstore/submit-content/oss-compliance/
weight: 6
description: "Describes the criteria that must be met to ensure that Marketplace content is OSS-compliant."
---

## Introduction

External developers play a key role in building a strong ecosystem of reusable, innovative modules for the Mendix platform.    
Many contributions rely on open-source software (OSS), which is a powerful enabler of collaboration and rapid development. To ensure legal clarity, transparency, and security, contributors must ensure that their use of OSS is fully compliant with the open-source licensing requirements.

## The Importance of OSS Compliance

OSS delivers a series of key benefits, including: 

* Accelerated development with reusable components
* Community support and collaborative improvement
* Transparency and security through peer-reviewed code
* Ability to customize for diverse business needs

However, improper use of OSS, especially without proper attribution or in violation of license terms, can lead to legal, operational, or reputational risks for Mendix.

## OSS Compliance Requirements

To ensure your Marketplace contribution is OSS-compliant, you must include the following:

* A `README.md` file — This should include the following overview and usage information:

    * What the project does
    * Installation and usage instructions
    * Configuration requirements, if applicable
    * Contribution or support details, if applicable
    * Licensing summary

* A `LICENSE` file — This should include a legal declaration that clearly states the open-source license for the project:
    
    * Choose a standard license, such as MIT, Apache 2.0, or BSD-3-Clause.
    * Include the full, unmodified license text.
    * Ensure compatibility with any third-party code included.

* Third-party notices — If your module includes other OSS libraries:

    * Include a `NOTICE` or `third-party-licenses.txt` file.
    * List each OSS component, its license, and any required attributions.
    * Follow all license conditions around modification or redistribution.
    
## Prohibited or High-Risk OSS Licenses

Certain OSS licenses impose strong copyleft obligations that may conflict with how Mendix modules are distributed or used in customer environments.

You must not include code licensed under the following, unless explicitly disclosed and justified in your submission: 

* GNU General Public License (GPL, any version) 
* GNU Affero General Public License (AGPL)
* GNU Lesser General Public License (LGPL)
* Mozilla Public License (MPL)
* Eclipse Public License (EPL)
* Any custom or uncommon license with strong sharing or network usage requirements

If your component includes or links to any of the aforementioned licenses, you must clearly disclose: 

* The exact license and affected components
* How and where the component is used
* Why it is necessary to include the component
* The implications for end-users

## Best Practices

These practices are not mandatory, but highly recommended: 

* Semantic Versioning (SemVer) — Communicate changes and updates.
* Security Notes — Mention known vulnerabilities or risks.
* Metadata — Include the contributor, the repository URL, and the license type in your component descriptor.

## Submission Checklist

Before submitting content to the Marketplace, make sure the following conditions are met:

* You have included a complete `README.md` file.
* You have included a valid, clear `LICENSE` file.
* All third-party OSS components are listed and attributed.
* You hold the legal rights to publish all included code.
* Prohibited licenses are not included, or are fully disclosed.

## Help

If you are unsure about OSS usage or license compatibility, you can use these resources:

* Read the documentation of any third-party packages.
* Consult a legal advisor for complex licensing scenarios.
* Reach out to your Mendix contact person.

## Conclusion

By submitting a component to the Mendix Marketplace, you confirm that your submission meets all open-source licensing requirements, and that you have disclosed any use of restrictive licenses.

{{% alert color="warning" %}}
The responsibility for ensuring compliance with all applicable software license terms rests solely with the external developer or vendor, as the party providing or deploying the software.
{{% /alert %}}

We appreciate your efforts to contributing responsibly and securely to the Mendix ecosystem.
