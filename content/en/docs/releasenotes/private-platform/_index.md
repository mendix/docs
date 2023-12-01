---
title: "Private Mendix Platform"
url: /releasenotes/private-platform/
description: "Release notes for updates to the Private Mendix Platform"
weight: 40
tags: ["Private Mendix Platform", "Private Platform"]
---

These release notes cover changes made to the [Private Mendix Platform](/private-mendix-platform/).

## 2023

### November 30, 2023

### Private Mendix Platform Enhancements

* We have added the ability to select a locale in the general settings of Private Mendix Platform. Changing the locale sets locale-dependent formats, such as date and time, to the preferred format of the selected locale.
* We have given administrators the option to provide their own, custom support instructions for users of the Platform.
* We have added the option for a deployment package to be put in an S3 bucket at the end of a CI/CD pipeline, instead of being deployed to the production environment. Designated approvers can then retrieve the package from the S3 bucket and manually deploy it to the target environment.

### November 15, 2023

### Private Mendix Platform Release

Private Mendix Platform provides an end-to-end Mendix developer experience to customers who need to enjoy it on their private infrastructure. It provides an environment where you can develop and deploy your applications within your own enterprise security boundary to ensure the highest levels of data security and compliance. You can integrate Private Mendix Platform with your existing IT infrastructure and adapt it to your specific business requirements. For more information, see [Private Mendix Platform](/private-mendix-platform/).

Private Mendix Platform has the following features.

{{% alert color="info" %}}
Exact feature support varies depending on chosen configuration. Please consult feature-specific documentation for more detailed information.
{{% /alert %}}

* Mendix Studio Pro integration and one-click app deployment even with no access to public internet
* Mendix developer experience hosted entirely within any virtual private cloud
* Support for SSO authentication for Private Mendix Platform and Studio Pro through your own identity provider (IdP)
* A private version of the Mendix Marketplace, with all contents hosted entirely within your Private Mendix Platform, accessible in-browser and directly from Studio Pro
* SCM repository support for Gitlab, GitHub, Bitbucket and Azure DevOps, to be used as source code repository for your projects
* CI/CD capabilities out-of-the-box, with additional support for integrations with Jenkins and Tekton; leverage our predefined templates or implement your own custom templates
* Operational capabilities such as basic log browsing and metrics through integrations with Loki and Grafana
* Governance features like application landscape management, marketplace administration, user group management, as well as various developer platform feature settings and action logs