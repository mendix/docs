---
title: "Control Center Release Notes"
linktitle: "Control Center"
url: /releasenotes/control-center/
description: "Release notes for Control Center"
weight: 30
numberless_headings: true
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

These release notes cover changes to the app management functionality and other features of the [Mendix Control Center](/control-center/).

To see the current status of the Mendix Control Center, see [Mendix Status](https://status.mendix.com/). Here you can also see planned maintenance and past incidents.

## 2024

### September 5, 2024

#### New Features

* Deep links have been added to the [Software Composition](/control-center/software-composition/) page to enable unique identification and easy shareability.

### September 3, 2024

#### Improvements

* Recently, performance issues were identified in the Software Bill of Materials (SBOM) generation process, which occurs during deployment package creation. Mendix has resolved these issues, ensuring that SBOM generation and the associated Software Composition capabilities are now fully compatible with the following versions of Studio Pro: 9.24.26 and above, 10.6.12 and above, 10.12.3 and above, and 10.14.0 and above. 

    Previously supported Studio Pro versions (9.24.22 to 9.24.25, 10.6.9 to 10.6.11, 10.10.0 to 10.12.2, and 10.13) will no longer result in SBOM generation and visibility in [Software Composition](/control-center/software-composition/). Make sure you upgrade to a compatible Studio Pro version to continue to use Software Composition. Any historical data within Software Composition remains accessible regardless of the upgrade.

### July 29, 2024

#### New Features

* We introduced the [Apps with License Keys](/control-center/deployed-apps/#apps-license-keys) tab on the **Deployed Apps** page, which provides a comprehensive overview and management capabilities for all apps with issued license keys. This new feature allows you to view apps with active license keys across all environments, resend or download licenses, and update Technical Contacts as needed.

### June 14, 2024

#### New Features

* We have launched the beta version of Software Composition, which provides visibility into component dependencies for every Mendix application environment. You can access the feature in [Control Center](/control-center/software-composition/) and [Apps navigation pane](/developerportal/deploy/software-composition/). This feature is available for select Studio Pro versions for free and licensed applications deployed on Mendix Public Cloud and Mendix for Private Cloud.

### May 16, 2024

#### New Features

* We have added a new tab to the **Apps** page: the [Private Cloud](/control-center/apps/#pc-connected) tab. Here you get an overview of all the apps deployed on Mendix Private Cloud Connected.

### April 4, 2024

#### New Features

* We have introduced a [Marketplace content curation feature](/control-center/marketplace-curation/) for public Marketplace components. If your organization has established governance policies and guidelines for using Marketplace components, you can now translate them to curation settings.  Components that meet these requirements will get a <text class="badge badge-pill badge-recommended" style="margin-left:0px">RECOMMENDED</text> label.

#### Improvements

* We have improved the [Apps](/control-center/apps/) page as follows:
    * We have implemented column-based filters that empower you to do complex filtering operations.
    * We have made it easier for you to copy the application name, the app id, and the environment name.

### February 8, 2024

#### Improvements

* We added the [Roles & Permissions](/control-center/roles-and-permissions/) page to Control Center.

#### Deprecations

* We removed the **Default App Roles** tab in the [Apps](/control-center/apps/) page in Control Center.

### January 22, 2024

#### New Features

* We introduced the [Private Marketplace](/control-center/private-marketplace/) page in Control Center, which allows Mendix Admins to approve or decline requests for publishing content to your organization's private Marketplace.

## 2023

### December 14, 2023

#### New Features

We upgraded the [Apps](/control-center/apps/) page as follows:

* You can now see the information of your apps combined with the information of their environments. (Currently only licensed and free apps deployed on the Mendix Public Cloud have distinct tabs, but eventually all deployment options will be supported.)
* You can use different kinds of filters and sorting options to analyze your application landscape more closely.
* You can check the Mendix version deployed in your repository to check whether your Mendix version is up to date.
* You can now update Technical Contact on the **Apps** page.
* You can deactivate multiple free apps in one go.
* You can [export the information of apps to an Excel file](/control-center/apps/#export-to-excel).

### December 7, 2023

#### Improvements

We made the following improvements to the [access management](/control-center/portfolios/#access-management) on the **Portfolios** page:

* On the [Members](/control-center/portfolios/#members) tab, the **Status** column in the list now shows whether a user is active or deactivated. Moreover, you can remove all the deactivated users from a portfolio in one go.
* All the pending invites now appear on the [Pending Invites](/control-center/portfolios/#pending-invites) tab.

### October 26, 2023

#### Improvements

* We added the ability to directly [remove app members](/control-center/members/) on the **Members** page.

#### Fixes 

* We fixed an issue where deactivation of some apps led to unexpected errors.
  
### October 12, 2023

#### New Features

* On the **Security** page, Mendix Admins can now [disable the digital signing](/control-center/security/#disable-enable-digital-signing-emails) of the content of emails from Mendix, if it interferes with other email safety measures.

### September 7, 2023

#### Deprecations

* We have removed the **Onboarding** page.

### August 28, 2023

#### New Features

* We have released the beta version of the [Application Health Dashboard](/control-center/application-health-dashboard/), which provides an overview of the alert status of the whole application landscape in your company.

### August 17, 2023

#### Improvements

* On the [Members](/control-center/members/) page you can now sort members based on the number of apps to which they belong.
* We introduced an export feature to make it possible for you to export email domains on the [General Settings](/control-center/company-settings/#company-email-domains) tab of the [Company Settings](/control-center/company-settings/) page.

### July 13, 2023

#### New Features 

* We added the **Member ID** column to the **Active Members** and **Deactivated Members** lists on the [Members](/control-center/members/#active-deactive-members) page. The column also appears in the Excel file, when you export the member information from these lists.
* We introduced **Member ID** search functionality on the **Member** page.

#### Improvements

* We fixed column alignment issues and added responsive column resizing for member list columns to improve readability and visual aesthetics.

### July 3, 2023

#### Deprecations

* We removed the **Marketplace Content** section, which had been deprecated since March, 2023.

### May 17, 2023

#### New Features

* We have upgraded our [Portfolio Management](/developerportal/portfolio-management/) tool with new features:
    * You can now have multiple portfolios at the same time!
    * You can now create portfolios with different levels of visibility to people in your company: private or restricted.
* We have added the [Portfolios](/control-center/portfolios/) page to Control Center, which provides Mendix Admins with governance features for portfolio management in your company.

### May 16, 2023

#### New Features

* You can now [set up an SSO (BYOIDP)](/control-center/security/set-up-sso-byoidp/) to allow Mendix users to sign in to Mendix Platform services, including Studio Pro, using identity federation between the Mendix Platform and your corporate IdP.

### March 16, 2023

#### Improvements

* On the **Apps** page, we increased the limit of apps you can activate or deactivate to 100.

### February 23, 2023

#### New Features

* We have released a feature where you can add and manage a [Security Contact](/control-center/company-settings/#security-contact) for your company. A Security Contact is informed if there are critical security issues with the Mendix Platform and platform-supported Marketplace components.

  With this feature, you can do the following:

    * Add a new Security Contact to your company

    * Remove an existing Security Contact and replace it with a newer one

    * Adjust the Security Contact’s name 

  For more information on security issues, see [Security Advisories](/releasenotes/security-advisories/).

## 2022

### November 10, 2022

#### Improvements

* We improved the way [Company Brand](/control-center/company-brand/) is stored and distributed. The company logo that is uploaded in Company Brand will be updated throughout the platform where it is used.
* We removed the Brand Colors feature for Company Brand.

### September 15, 2022

#### New Features

* We introduced the **Billing Accounts** page where Mendix Admin can update the payment card information for their company at any time.

### August 25, 2022

#### Fixes

* We fixed an issue where Mendix Admins were not able to invite users to their company's apps. 

### August 11, 2022

#### New Features

* We have introduced the **Marketplace Content** page, where Mendix Admins can manage the visibility of Marketplace Content in Studio.

### June 9, 2022

#### New Features

* The free Mendix Cloud environment of an app can now be deleted from the [app details](/control-center/apps/#app-details) page.

#### Improvements

* The free and licensed Mendix Cloud environments of an app are now visualized on the [app details](/control-center/apps/#app-details) page.

### April 21, 2022

#### Improvements

* We expanded the export-to-Excel functionality for both the [Apps](/control-center/apps/) page (which includes the **App ID**) and the [Cloud](/control-center/cloud/) page (which includes the **App ID**, **Environment ID**, and **Environment URL**).

## 2021

### October 1, 2021 {#oct1}

#### New Features

* We have released the company **Onboarding** functionality that enables setting up Mendix onboarding specifically for all new members of your company. You can set up an onboarding email that new users get as soon as they create their Mendix accounts and a company onboarding page that new users land on.

### September 6, 2021

#### New Feature

* Mendix Admins can now configure their own [single sign-on](/control-center/security/set-up-sso-byoidp/) configuration from the [Security](/control-center/security/) page. 

### August 26, 2021

#### Improvements

* We added a new menu item for Mendix Admins to access [Catalog Administration](/control-center/catalog-admin/) tasks. For details, see [Catalog Administration](/control-center/catalog-admin/).

### August 19, 2021

#### Fixes

* We fixed an issue with the app's [Team](/developerportal/general/team/) page where [Mendix Admins](/control-center/company-settings/) could not add or remove team members.

### July 27, 2021

#### Improvements

* We improved the **External Members** overview on the Control Center [Dashboard](/control-center/dashboard/) so that a list of external members from a specific company appears when you click a part of the pie chart.

### June 1, 2021

#### Improvements

* We added a tab on the [Cloud](/control-center/cloud/) page that displays details on **Free Environments**.

### May 7, 2021

#### Fixes

* We fixed an issue where some graphs in the Control Center [Dashboard](/control-center/dashboard/) were loading indefinitely. 

### April 26, 2021

#### New Features

* We released the Control Center [Dashboard](/control-center/dashboard/), which provides an overview of various activities for your company on the Mendix Platform. This feature is currently in [beta](/releasenotes/beta-features/), and you can provide feedback via the feedback button on the right of the page.

### March 9, 2021

#### Improvements

* Mendix Admins can now edit the name and description of an [App Access Group](/control-center/groups/) once it has been created.
* On the [Members](/control-center/members/) page, Mendix Admins can now deactivate Technical Contacts and the last Scrum Master in a team.

### March 4, 2021

#### Improvements

* We removed the old Company Admin pages. But you are already using the [Mendix Control Center](/control-center/) as a Mendix Admin, right?

### February 23, 2021

#### Improvements

* We have updated the [App Projects](/control-center/apps/) page, where you can now do the following:
    * Open the [Team](/developerportal/general/team/#managing) page from the project details page in order to manage team members and add yourself to a team (if you are a Mendix Admin)
    * Deactivate or delete an app or a team member

### February 5, 2021

#### Fixes

* We fixed an issue where new Mendix Admins did not get access to environment nodes. (Ticket 114913)

### February 4, 2021

#### New Features

* We released the Mendix [Control Center](/control-center/), which provides governance and control features for Mendix Admins (formerly known as Company Admins).

#### Improvements

* We moved the existing Company Admin features in the Developer Portal to Control Center.
