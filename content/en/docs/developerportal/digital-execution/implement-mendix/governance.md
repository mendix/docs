---
title: "Setting Up Governance and Control in Mendix"
linktitle: "Setting Up Governance and Control in Mendix"
url: /developerportal/digital-execution/governance-control/
weight: 85
description: "Find out how to incorporate governance in your process."
aliases:
    - /governance-control/
---

## Introduction

This section provides information on the features we offer to incorporate governance in your process.    
By the end of this section, you will be able to:

* Recognize the options Mendix offers to tailor the platform to your specific governance needs. 
* Identify the required steps to configure the platform in Control Center.

### Introduction to Governance in Mendix

Low-code governance is about having oversight and maintaining control over both a landscape of apps, and individual app development. It provides guardrails for your development process and brings resources together to achieve enterprise objectives.

{{< figure src="/attachments/quickstarts/leading-mendix-implementation/governance-capability-highlights.png"  >}}

At the beginning, the governance responsibility will likely be in the hands of your Mendix Admin. However, as your Mendix landscape grows, you may want to define a Center of Excellence. Admins can use [Control Center](/control-center/), which gives you an overview of various company activities on the Mendix platform, to manage many of the aspects of landscape governance. 

There are several advanced capabilities in the Control Center to help you manage your app landscape as it grows.

* [Dashboard](/control-center/dashboard/) provides insight into some KPIs of how your company is advancing.
* [Apps](/control-center/apps/) provides easy visibility into all apps, environments, their deployment status, technical contact, version, and more.
* [Health dashboard](/control-center/application-health-dashboard/) provides an insight into the running status of your app landscape.
* [Entitlements](/control-center/entitlements/) shows the resources you’ve bought and used.
* You can add, resize or remove environments in the [Deployed apps](/control-center/deployed-apps/) view.
* Additional curation settings are available for [Marketplace](/control-center/company-approved/), [Portfolios](/control-center/portfolios/), and [Data Catalog](/control-center/catalog-admin/), which apply to all your developers.

If you would like to learn more about our governance features, you can check out the [Control Center Guide](/control-center/) and the [Control Center Learning Path](https://academy.mendix.com/link/paths/116/Govern-and-Scale-your-App-Landscape-with-Mendix-Control-Center). 

### Configuring the Platform in Control Center

The Mendix platform has a few options to tailor the platform to your specific governance needs. 

#### Claiming Additional Email Domains

If your company has more than one email domain, all your email domains should be claimed. An example of this is MyCompany.com, MyCompany.nl, MyCompany-SpecialUnit.com, etc. This is to ensure all users that sign up with an email address on any of these domains end up in the same company on the Mendix platform. If you don’t do this from the start, your users may create projects in different companies or tenants on the Mendix platform, which is hard to govern and may require cumbersome merging activities later.

For more information, refer to [Company Email Domains](/control-center/company-settings/#company-email-domains) in *Company Settings*.

#### Assigning a Security Contact

Provide a specific Security Contact who is informed if there are critical security issues with the Mendix platform and platform-supported Marketplace components. Mendix strongly recommends applying a team email address or a functional mailbox instead of a personal individual email address.

Your security contact person may want to subscribe to the [Mendix Security Advisories](/releasenotes/security-advisories/)
to get familiar with the process around security fixes.

For more information, refer to [Security Contact](/control-center/company-settings/#security-contact) in *Company Settings*.

#### Defining the Company Brand and Description

On the **Customize Your Brand** page, you can upload, edit, or remove a company logo. The company logo uploaded here is displayed across the platform where it is used. For instance, it will be displayed on your published Marketplace content.

For more information, refer to [Company Brand](/control-center/company-brand/).

#### Improving the Onboarding Experience for New Team Members

On the **Company Onboarding** page, you can customize the landing page which new team members will see when they are onboarded and the email that new team members will receive.

For more information, refer to [Company Onboarding](/control-center/company-onboarding/).

#### Setting Up IDP or SSO

It is recommended that you [set up SSO](/control-center/security/set-up-sso-byoidp/) between the Mendix platform and your corporate IDP, such as Microsoft Entra ID or Okta.  This puts your IDP in control of how users are authenticated before they can access your content on the Mendix platform. Former employees will not be able to login, and your platform users get the convenience of Single Sign-On. 

You can find out more from the [BYOIDP blog post](https://www.mendix.com/blog/introducing-byoidp-bring-your-own-identity-provider/).

Optionally, you may set up access rules in your IDP to control which of your employees can and cannot work on the Mendix platform. As we encourage collaboration in multi-disciplined teams, be careful not to be too restrictive or not apply any restriction at all. For example, potential end-users of Mendix apps may want to contribute to development teams. In a later stage you can set up restrictive access rules as you start putting more business-critical IPs in the logic of your Mendix apps.

#### Setting Up Password Policy

If you do not enable SSO, Mendix recommends specifying if user passwords expire or not. If you do not want the passwords to expire, toggle **Passwords of company members never expire** to **On**.  

For more information, refer to [Security Settings in Control Center](/control-center/security-settings/).
