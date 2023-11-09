---
title: "Control Center"
url: /releasenotes/control-center/
description: "Release notes for Control Center"
tags: ["control center", "release notes"]
weight: 30
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

These release notes cover changes to the app management functionality and other features of the [Mendix Control Center](/control-center/).

To see the current status Control Center, see [Mendix Status](https://status.mendix.com/). Here you can also see planned maintenance and past incidents.

## 2023


### October 26, 2023

#### Improvements

* We added the ability to directly [remove app members](/control-center/#members) from Control Center.

#### Fixes 

* We fixed an issue where deactivation of some apps led to unexpected errors.
  {{% todo %}}Double-check{{% /todo %}}
  
### October 19, 2023

* We fixed an issue where the last Scrum Master could be removed from an app with API keys.
* We fixed an issue that allowed new members to accept an invitation to an app multiple times.
{{% todo %}}Double-check{{% /todo %}}

### October 12, 2023

#### New Features

* In Control Center, Mendix Admins can now [disable the digital signing](/control-center/#disable-enable-digital-signing-emails) of the content of emails from Mendix, if it interferes with other email safety measures.

### September 7, 2023

#### Deprecations

* We have removed the **Onboarding** page from Control Center.

### August 28, 2023

#### New Features

* We have released the beta version of the [Application Health Dashboard](/control-center/#application-health-dashboard), which provides an overview of the alert status of the whole application landscape in your company.

### August 17, 2023

#### Improvements

* In Control Center, on the [Members](/control-center/#members) page you can now sort members based on the number of apps to which they belong.
* In Control Center, we introduced an export feature to make it possible for you to export email domains on the [General Settings](/control-center/#company-general-settings) tab of the [Company Settings](/control-center/#company) page.

### August 10, 2023

#### Fixes

* We fixed an issue where under certain circumstances, it was possible to remove the last Scrum Master of an app.
{{% todo %}}Double-check{{% /todo %}}

### July 13, 2023

#### New Features 

* We added the **Member ID** column to the **Active Members** and **Deactivated Members** lists on the [Member](/control-center/#41-active-and-deactivated-members) page in Control Center. The column also appears in the Excel file, when you export the member information from these lists.
* We introduced **Member ID** search functionality on the **Member** page in Control Center.

#### Improvements

* We fixed column alignment issues and added responsive column resizing for member list columns to improve readability and visual aesthetics in Control Center.

### July 3, 2023

#### Deprecations

* We removed the **Marketplace Content** section of [Control Center](/control-center/), which had been deprecated since March, 2023.

### May 16, 2023

#### New Features

* You can now [set up an SSO (BYOIDP)](/control-center/set-up-sso-byoidp/) to allow Mendix users to sign in to Mendix Platform services, including Studio Pro, using identity federation between the Mendix Platform and your corporate IdP.

### March 16, 2023

#### Improvements

* In Control Center, we increased the limit of apps you can [activate or deactivate](/control-center/#active-deactivated) to 100.

### February 23, 2023

#### New Features

We have released a feature in Control Center where you can add and manage a [Security Contact](/control-center/#company-general-settings) for your company. A Security Contact is informed if there are critical security issues with the Mendix Platform and platform-supported Marketplace components.

With this feature, you can do the following:

* Add a new Security Contact to your company
* Remove an existing Security Contact and replace it with a newer one
* Adjust the Security Contact’s name 

For more information on security issues, see [Security Advisories](/releasenotes/security-advisories/).

## 2022

### December 21, 2022

#### Fixes

* We fixed an issue where some users were not able to open the **Sprint Status** page.

### December 13, 2022

#### New Features

We have released the beta version of [Product Insights](/developerportal/app-insights/mini-surveys/), which is a new way for you to proactively get feedback from your users. The functionality consists of a tool for setting up mini surveys in addition to the [Product Insights - Mini Surveys](/appstore/modules/mendix-mini-surveys/) Marketplace module, which you can add to your app to set up the exact targeting criteria for a survey.

A survey can have a maximum of three questions that appear in your app based on the implemented criteria. You can choose between four different question types (rating scale, multiple choice, open question, and NPS question), and you can place the survey toaster in any of corner of the page. You can also preview exactly what the survey will look like.

This feature is in beta, so we would very much appreciate your feedback. If you have any questions or suggestions for improvement, just reach out via the **Feedback** widget on the **Product Insights** page in the Developer Portal.

### November 10, 2022

#### Improvements

* We improved the way [Company Brand](/control-center/#company-brand) is stored and distributed. The company logo that is uploaded in Company Brand will be updated throughout the platform where it is used.
* We removed the Brand Colors feature for Company Brand.

### September 15, 2022

#### New Features

* We introduced the **Billing Accounts** page in Control Center where Mendix Admin can update the payment card information for their company at any time.


### August 25, 2022

#### Fixes

* We fixed an issue where Mendix Admins were not able to invite users to their company's apps. 
{{% todo %}}Double-check{{% /todo %}}

### August 11, 2022

#### New Features

* We have introduced the **Marketplace Content** page in Control Center, where Mendix Admins can manage the visibility of Marketplace Content in Studio.

### July 21, 2022

#### Improvements

* We removed **My Activity Overview** from the **Account Settings** page.
* We redesigned the **Pending App Invites** section and added it as a new menu item to the **Account Settings** page.
* We improved the warning messages when you leave or delete an app.
{{% todo %}}Double-check{{% /todo %}}

#### Fixes

* We fixed an issue where apps on the **Company Apps** page would not be displayed properly.
{{% todo %}}Double-check{{% /todo %}}

### June 9, 2022

#### New Features

* The free Mendix Cloud environment of an app can now be deleted from the [app details](/control-center/#app-details) page in Control Center.

#### Improvements

* The free and licensed Mendix Cloud environments of an app are now visualized on the [app details](/control-center/#app-details) page in Control Center.
* From now on, the free Mendix Cloud environment of an app will be deleted whenever the app is deactivated or deleted.
{{% todo %}}Double-check{{% /todo %}}

### April 21, 2022

#### Improvements

* We removed the old Stories UI in preparation for a brand new Mendix tool for Agile project management that will eventually replace **Stories** completely – stay tuned!
* We expanded the export-to-Excel functionality in [Control Center](/control-center/) for both the [Apps](/control-center/#apps) tab (which includes the **App ID**) and the [Cloud](/control-center/#cloud) tab (which includes the **App ID**, **Environment ID**, and **Environment URL**).

### December 15, 2021

#### Improvements

* We changed the minimum length of passwords from 8 to 12 characters.

### December 2, 2021

#### Fixes

* We fixed an error where it was not possible to edit a comment under a [Feedback](/developerportal/app-insights/feedback/) item. (Tickets 134179, 136172)

### November 18, 2021

#### Improvements

* The arrival of [Git support](/refguide9/branch-line-manager-dialog/#byo-server-app) means that a new version of the [Platform SDK](/apidocs-mxsdk/mxsdk/) is in order. We made some changes to the Developer Portal to accommodate this new version, which is currently being tested and will be published soon.
* We introduced a new version of the [Feedback API](/apidocs-mxsdk/apidocs/feedback-api/) that will be used by a new generation of [Feedback widgets](/appstore/modules/mendix-feedback/) coming to the Marketplace soon.
* Until now, you were not able to delete or deactivate an app if it was still deployed to an environment, regardless of whether it was a licensed environment or a sandbox for a Free App. We changed this behavior so that the only check is on whether the environment is licensed. A consequence of this change is that the cloud icon on the app tiles on the [My Apps](/developerportal/#my-apps) page is only displayed if your app is deployed to a licensed node.

### November 4, 2021

#### Improvements

* We redesigned the Stories archive page to allow you to more easily search through completed stories by ID, name, description, or Sprint.

### November 1, 2021

#### Update of *.mendixcloud.com SSL/TLS certificate

* We have renewed the SSL/TLS certificate for `\*.mendixcloud.com`. Browsers like Mozilla Firefox, Microsoft Edge, Google Chrome, and Internet Explorer automatically trust the new certificate. In that case, there is nothing you have to do. If you run services that connect to a `\*.mendixcloud.com` endpoint and use a static or outdated trust store, we advise you to update their certificates. The new SSL/TLS certificate can be downloaded [here](/attachments/releasenotes/developer-portal/mendixcloud.com-2021-10-29.crt.txt). This can be done from today, you do not have to wait for the old certificate to expire.
    * Current certificate details:
        * Subject: `*.mendixcloud.com`
        * Issuer: C = US, O = DigiCert Inc, OU = www.digicert.com, CN = RapidSSL TLS RSA CA G1
        * Validity: Sep 12 00:00:00 2019 GMT - Nov 10 12:00:00 2021 GMT
        * SHA-256 Fingerprint: `AE:55:1D:88:32:E1:7E:BF:AB:0D:F3:2F:57:57:C8:98:8D:87:3F:E8:F6:5F:A6:09:82:EA:37:F7:12:25:A5:D3`
        * SHA-1 Fingerprint: `5E:4D:05:9B:FE:54:3F:B6:D8:A4:D7:86:7F:3B:50:9A:EE:09:35:8F`
    * New certificate details:
        * Subject: `*.mendixcloud.com`
        * Issuer: C = GB, ST = Greater Manchester, L = Salford, O = Sectigo Limited, CN = Sectigo RSA Domain Validation Secure Server CA
        * Validity: Oct 29 00:00:00 2021 GMT - Oct 29 23:59:59 2022 GMT
        * SHA-256 Fingerprint: `BF:AE:01:9F:93:5A:D9:92:35:B5:BA:9F:E4:AE:56:99:21:17:44:51:56:17:A2:11:A1:FE:3B:42:9C:B4:B6:70`
                * SHA-1 Fingerprint: `0F:3B:31:9F:86:6E:65:2D:5F:7A:EF:35:64:04:45:67:58:E4:ED:11`

### October 21, 2021

#### Improvements

* The app [Team](/developerportal/general/team/#managing) overview now shows deactivated users. These users can no longer sign in to the Mendix Platform or contribute to the app, and they were until now hidden from view. By showing deactivated users, app administrators have the opportunity to remove them from the app team.
* During our continuous monitoring, we noticed that creating an app during peak hours caused performance issues and sometimes resulted in timeouts. We mitigated these problems by restructuring the app creation process.

#### Fixes

* We fixed an issue accidentally introduced in the [October 14th](#oct-fourteen) release where you were no longer able to post comments on a [feedback item's details page](/developerportal/app-insights/feedback/#feedback-details). (Tickets 132892, 132959, 132983, 133075)

### October 14, 2021 {#oct-fourteen}

#### Improvements

* We noticed our **API Keys** overview was not telling the exact truth and made some changes accordingly. Because API keys are cached by our user-provisioning system, when you revoke an API key, it takes a certain amount of time before this is reflected across the platform. A new confirmation message warns you of this.
* We added a [Team Server revision history](/developerportal/general/team-server/#revision-history) overview page for your Git-enabled apps. This allows you to have an overview of the last 40 commits made in your app. You can filter the overview per branch. When a revision is linked to a user story, the Team Server page can bring you to the story details page.

#### Fixes

* We fixed an issue where you could not see the story details if one of the tasks had a title that was longer than 200 characters.

### October 1, 2021 {#oct1}

#### New Features

* We have released the company **Onboarding** functionality in Control Center that enables setting up Mendix onboarding specifically for all new members of your company. You can set up an onboarding email that new users get as soon as they create their Mendix accounts and a company onboarding page that new users land on.

### September 23, 2021

#### Improvements

* We simplified the drag-and-drop behavior on the **Stories Overview** page (for both the new and old UI) to make it more stable.
* We added support for adding labels to stories on the **Stories Overview** page.
* It is now possible to add labels and tasks as well as assign a team member when you create a story.
* Thanks to a lot of feedback from the community, we have improved the new stories functionality to the point where we feel comfortable removing the old UI. Because of this, we will be deprecating the old UI on December 31st, 2021.
* We improved the look and feel of the story detail page, and we removed support for the old version of this page.
* We made further preparations for the support of Git-enabled apps.
* We finished a year-long project where we modernized the way the Developer Portal communicates internally. This meant we removed a long-running internal platform app, which had a great run, but now it is time to say goodbye. This app has been replaced with business events based on Kafka.

#### Fixes

* We fixed an issue where an error was shown when a Sprint was created from the **Stories** page.

### September 13, 2021

#### Improvements

* Your [Mendix Profile](/developerportal/community-tools/mendix-profile/) got a visual update.
* We removed the possibility to add a GitHub account to your profile.

### September 6, 2021

#### New Feature

* Mendix Admins can now configure their own [single sign-on](/control-center/set-up-sso-byoidp/) configuration from the [Security](/control-center/#security) tab of Control Center. 

### September 2, 2021

#### Improvements

* We removed the **Burndown Chart** and the **Release Plan** from **Stories**. We are working on reintroducing solutions for project analytics and release planning in the future.
* We implemented [context deep links](/developerportal/general/manage-deeplinks/) to all main app pages on the Developer Portal so you can easily share references.
* We increased the performance of opening the [My Apps page](/developerportal/#my-apps)

#### Fixes

* We fixed a bug where the pop-up window with pending invitations was shown twice.
* We also fixed a layout bug on the invitation pop-up window that we accidentally introduced during the last release.

### August 26, 2021

#### Improvements

* We added a new menu item for Mendix Admins to access [Catalog Administration](/control-center/#catalog) tasks in Control Center. For details, see [Catalog Administration](/control-center/catalog-admin/).

### August 19, 2021

#### Improvements

* We implemented the first batch of endpoints for mobile, in preparation for something cool coming your way.
* We improved the way the Developer Portal shares data across its several components.
* We made small improvements to the look and feel of the Developer Portal.

#### Fixes

* We fixed an issue with the app's [Team](/developerportal/general/team/) page where [Mendix Admins](/control-center/#company) could not add or remove team members.

### July 27, 2021

#### Improvements

* We improved the **External Members** overview on the Control Center [Dashboard](/control-center/#dashboard) so that a list of external members from a specific company appears when you click a part of the pie chart.

### June 1, 2021

#### Improvements

* We added a tab on the [Cloud](/control-center/#cloud) page in Control Center that displays details on **Free Environments**.

### May 7, 2021

#### Fixes

* We fixed an issue where some graphs in the Control Center [Dashboard](/control-center/#dashboard) were loading indefinitely. 

### April 26, 2021

#### New Features

* We released the Control Center [Dashboard](/control-center/#dashboard), which provides an overview of various activities for your company on the Mendix Platform. This feature is currently in [beta](/releasenotes/beta-features/), and you can provide feedback via the feedback button on the right of the page.

### March 9, 2021

#### Improvements

* In Control Center, Mendix Admins can now edit the name and description of an [App Access Group](/control-center/#groups) once it has been created.
* Mendix Admins can now [deactivate](/control-center/#members) Technical Contacts and the last Scrum Master in a team.

### March 4, 2021

#### Improvements

* We removed the old Company Admin pages. But you are already using the [Mendix Control Center](/control-center/) as a Mendix Admin, right?


### February 23, 2021

#### Improvements

* We have updated the [App Projects](/control-center/#apps) tab of Control Center, where you can now do the following:
    * Open the [Team](/developerportal/general/team/#managing) page from the project details page in order to manage team members and add yourself to a team (if you are a Mendix Admin)
    * Deactivate or delete an app or a team member


### February 5, 2021

#### Fixes

* We fixed an issue where new Mendix Admins did not get access to environment nodes. (Ticket 114913)
{{% todo %}}Double-check{{% /todo %}}

### February 4, 2021

#### New Features

* We released the Mendix [Control Center](/control-center/), which provides governance and control features for Mendix Admins (formerly known as Company Admins).

#### Improvements

* We moved the existing Company Admin features in the Developer Portal to Control Center.

### January 15, 2021

#### Improvements

* We redesigned the [My Apps](/developerportal/#my-apps) page.
* You will now see labels when you are editing a story using the new **Stories** UI. We will enable the editing of story labels and label colors in a future release.

#### Fixes

* We fixed an issue where newly-added Company Admins did not get access to edit [user groups](/appstore/general/app-store-overview/#content-groups) in the Marketplace.

## 2020

### December 23, 2020

#### Improvements

* We tweaked the styling of the **Stories** > **Project History** page.
* We made moving a story to another app more intuitive.
* We removed the Model page, which contained tips on how to get started creating your apps.

#### Fixes

* We fixed an issue where replies to Buzz notifications were not properly processed into comments on your [app Buzz](/developerportal/general/buzz/#app-buzz) page. (Ticket 111076)

### December 2, 2020

#### Improvements

* We changed the home page of the Developer Portal to [My Apps](/developerportal/#my-apps).

### November 4, 2020

#### Fixes

* We fixed a bug where a change of company name was not properly distributed along the platform.
* We fixed a bug where drop-down menus were cut off on the story details page.

### October 9, 2020

#### Fixes

* We fixed an issue where team members were not displayed in the [Team](/developerportal/general/team/) overview.

### October 4, 2020

#### Improvements

* We redesigned the story details page and made it available for beta usage. You can use the new design when the new story UI is enabled. Please note that it is currently not possible to add or manage labels with the new UI; this functionality will be released in the future.
* When you add a task to a commit of your app model, we now show the revision in the revision overview of the story details. Clicking the task will bring you to the story details page to which the task belongs.
* We simplified the **Company Settings** tab of the **Company** page by removing some barely used attributes.

#### Fixes

* We fixed an issue where the default avatar of a team member who committed a revision was not properly displayed in the revision overview of the story details.
* We fixed an issue where a Company Admin was no longer able to open the [General Settings](/developerportal/collaborate/general-settings/) of an app they for a team in which they were not a member.
* We repaired a dead link to the documentation on the [App User Management](/developerportal/collaborate/general-settings/#managing-app-users) page.

### August 25, 2020

#### Improvements

* We reintroduced the read-only authorization for the user story overview.

#### Fixes

* We fixed an issue where, under certain circumstances, email notifications were not sent on story comment updates.

### August 11, 2020

#### Improvements

* We made some small performance improvements.

#### Fixes

* We placed a deprecation warning in a file hosted by the Developer Portal that is used in old versions of the [Mendix Feedback](/appstore/modules/mendix-feedback/) widget. As of October 1, 2020, we will end support for Mendix Feedback widget version 5 or below. Please always keep your Feedback widget up-to-date to ensure the best experience for your users.
* We fixed an issue where you could move a user story to a different Sprint without specifying the target Sprint.

### July 28, 2020

#### Fixes

* We fixed an issue where email notifications on [feedback](/developerportal/app-insights/feedback/) items were not sent under certain circumstances.

### July 13, 2020

#### Improvements

* We increased the performance on opening the buzz page.
* We changed the default avatar of a user profile from the Mendix logo to an industry standard user-icon.

#### Fixes

* We fixed a bug where, under certain circumstances, the "View App" was disabled even though it should have been enabled.

### June 28, 2020

#### Improvements

* We implemented the second increment in renaming the default **End-user** team role to [Guest](/developerportal/general/app-roles/#team-roles).

#### Fixes

* We fixed an issue where it was possible to change the end date of a closed Sprint.

### June 15, 2020

#### Improvements

* The new Stories UI has been improved with various sections. The old Stories UI will be made unavailable soon. We encourage you to turn your tasks that are still available in the old Stories UI into new stories before the old UI is inaccessible.
* We improved performance on story-related actions such as drag-and-drop and status changes on large apps with many deleted items.
* We renamed the default **End-User** team role to [Guest](/developerportal/general/app-roles/#team-roles) to better distinguish team roles from app user roles.
* We removed the list appearance of the [My Company's Apps](/developerportal/#my-company-apps) page.

#### Fixes 

* We fixed a bug where the background did not display properly on mobile browsers.
* We fixed a bug where changes to a story title or description were saved when clicking **Cancel**.

### May 27, 2020

#### Improvements

* When you delete a story or task on the **Stories** page, it is now irreversibly removed from the system.
* We removed the ability to revert story-related changes in an app's history.
* We removed the ability to delete several stories at once on the **Stories** page.
* We simplified story maintenance by preventing nested tasks.
* We removed the read-only permission on the stories board to bring the Developer Portal in line with industry standards.
* We made small improvements in the look and feel of the Developer Portal.

#### Fixes

* We fixed a bug where the calendar icon on date/time input fields was not displayed properly.
* We fixed a bug where the star icon on your [favorite apps](/developerportal/#my-apps) was not displayed properly.

### May 22, 2020

#### Improvements

* The Stories template functionality has been replaced with the **Clone** functionality in the new UI option (beta).

### May 7, 2020

#### Improvements

* We added a new story action called **Clone** to the new beta UI. For more information, see the New UI Option (beta) section of *Stories*.

### February 21, 2020

#### Improvements

* We fixed an issue where [favorited apps](/developerportal/#my-apps) still showed up in the favorites view on the [My Apps](/developerportal/#my-apps) page after being deleted.
* We made performance improvements to the **My Apps** page.
* We fixed an issue where the description field did not expand properly when creating a new story.

### February 6, 2020

#### Improvements

* We implemented a new design for the [Create App](/developerportal/) flow.
* When creating a new app, you can now search through templates for feature demos, academy training apps, and ready-made apps.
* After selecting an app template, you can now choose a nice icon for your app.

## 2019

### December 23, 2019

#### Improvements

* We made minor improvements to the process of creating a new app.

#### Fixes

* We fixed an issue where you were redirected to the **Comments** page from the **Stories** page.

### December 18, 2019

#### Improvements

* We made some minor improvements to the style of the Stories beta version. This release fixes issues regarding batch actions.

### December 13, 2019 

#### Improvements

* We redesigned the **Stories** page with a brand new UI and improved stability. The new UI can be accessed by clicking **Enable new UI**. This is a [beta version](/releasenotes/beta-features/).

### December 5, 2019

#### Improvements

* We made some minor styling improvements on [Buzz](/developerportal/general/buzz/).

### November 21, 2019

#### Fixes

* We fixed an issue that prevented the **Edit in Studio Pro** functionality in the Developer Portal from opening Studio Pro.

### November 1, 2019

#### Improvements

* We introduced the ability to [favorite](/developerportal/#my-apps) apps from the **My Apps** page and to filter on favorite apps. This is helpful when you have a large number of Mendix apps.

### September 24, 2019

#### Improvements

* We fixed an issue that would prevent users from inviting email addresses that contain capital letters.
* We fixed an issue that occasionally triggered an error message during signup.
* We made various small performance improvements on the Developer Portal.

### September 19, 2019

#### Launchpad Removal and App User Management Update

* We removed the old launchpad page, as we have moved to a new SSO architecture. The old URL `launchpad.mendix.com` now links to your [My Apps](/developerportal/#my-apps) page.
* We moved the App User management functionality of the launchpad to the **General** app settings in the Developer Portal. For more information, see the [Managing App Users](/developerportal/collaborate/general-settings/#managing-app-users) section of *How to Manage General App Settings*.

### August 9, 2019

#### App User Management Improvements 

* We redesigned the UI for managing app users and improved the performance of loading manageable app environments and users.

### July 25, 2019

#### Fixes

* We fixed an issue where updates to decimal constants in the Developer Portal were limited to 2 decimal places. This has been increased to 8 decimal places. (Ticket 85507)

### May 10, 2019

#### Support Improvements

* We have changed the way you request a license for a new app. You can now request a license using the [Request New App Node](https://newnode.mendix.com/) app. Other requests should continue to be made through the [Support Portal](https://support.mendix.com).

### May 2, 2019

#### UI Improvements

* With the beta release of Mendix Studio and Mendix Studio Pro (Mendix 8), we have updated all mentions of *Web Modeler* to *Mendix Studio* and *Desktop Modeler* to *Mendix Studio Pro* across the Developer Portal.

### April 8, 2019

#### Webhooks Available

* We have added the ability to create webhooks for stories and Sprints for your apps. These webhooks can be configured to send information when Sprints change and/or stories change.

### April 5, 2019

#### Fixes

* We fixed an issue with the Developer Portal where the memory utilization was not optimized and could cause system instability. This change does not affect memory utilization by customer apps.

### March 15, 2019

#### Fixes

* We fixed an found issue where you were not able to change your password on the **Password Has Expired** page. (Tickets 80828, 80882, 80884, 80888, 80997, 81005)
* We fixed an issue with retrieving stories in the Desktop Modeler. (Tickets 80618, 80623, 80636, 80665, 80685, 80705, 80726, 80738, 80780, 80833, 80834, 80854, 80866, 80935, 81008)
* We fixed an error that occurred when importing stories from Excel in certain situations.
* We fixed an issue where you unable to invite referrals to the Mendix Platform.

### March 14, 2019

#### Fixes

* We fixed an issue that sometimes caused the Technical Contact information to be hidden on the app's *General* page in the Developer Portal. (Tickets 70285, 77387, 80269, 80929)

### March 7, 2019

#### Fix

* When building a mobile application package for a new project, the default for permissions is now *disabled*. These are the set of permissions that a mobile (Phonegap) app requires and, previously, all permissions were enabled for new projects by default. This caused Push Notifications to fail if no further configuration was provided.

### March 6, 2019

#### Feedback and Support

* We removed the [Mendix Feedback](/appstore/modules/mendix-feedback/) widget from the Developer Portal. If you want to report an issue or ask a question, please submit a ticket at [Mendix Support](https://support.mendix.com).

### January 3, 2019

#### Fixes

* We have updated the links to the tutorials in Mendix welcome email, so that new users of our platform can be guided better. (Ticket 77158)
* We have fixed integration issues that affected some Developer Portal users while managing application members. (Ticket 77386)

## 2018

### December 12, 2018

#### Improvements

* We improved the performance of the **My Apps** page for users who are a member of a large number of teams.
* We updated the look and feel of the **My Company's Apps** page to be more in line with the **My Apps** page.
* We improved the look and feel of the emails that are being sent by the Developer Portal.

#### Fixes

* We fixed the broken deep link to the **Stories** page of your apps.

### December 1, 2018

#### Fixes

* We fixed an issue that sometimes caused the team member with the Technical Contact role to be hidden on the **Node Permissions** tab of the **Security** pages. (Tickets 69085, 69150, 69419, 69440, 69458, 69585, 69592, 69783, 69884,70131,70228, 70285, 76152)

### November 14, 2018

#### Mendix Shop

* The [Mendix Shop](https://mendixshop.mendixcloud.com) is open for business! This is a web shop where you can spend the credits you have gained by completing various [challenges](/developerportal/community-tools/mendix-profile/#challenges). The shop has cool products like Mendix t-shirts, socks, and sweatbands, so be sure to check it out.

    {{< figure src="/attachments/releasenotes/developer-portal/shop.png"   width="300"  >}}

### November 1, 2018

#### Improvements

* We made improvements in the communication between the Web Modeler and the Developer Portal.

### October 17, 2018

#### Fixes

* We fixed a memory leak problem that caused Developer Portal to have longer response times.
* We addressed and fixed an issue that caused some Developer Portal users to see empty dialog boxes instead of error message content. (Tickets 67626, 69363)

### October 16, 2018

#### Fixes

* It is now possible to go to a Mendix community member's new [Mendix Profile](/developerportal/community-tools/mendix-profile/) directly from the [Buzz](/developerportal/general/buzz/) and [People](https://developer.mendixcloud.com/link/people) pages. (Ticket 69702)

### October 11, 2018

#### Improvements

* The Mendix Profile in the Developer Portal has been merged with the Community Profile. For more information, see [Mendix Profile](/developerportal/community-tools/mendix-profile/).
* Several UX updates were made to Developer Portal pages:
    * The [My Apps](https://sprintr.home.mendix.com/link/myapps) page has been redesigned, and you can now toggle your app list views.
    * The **App** > **General** page has been redesigned.
    * The [People](https://developer.mendixcloud.com/link/people) overview has been redesigned. The same view on Mendix community members is available in the [Connections tab](/developerportal/community-tools/mendix-profile/#connections) of your Mendix Profile.

### October 1, 2018

#### Web Modeler Improvements

The Web Modeler can now be enabled for all types of apps. You can do this on the **Settings** > **General** page of your app. If you have a licensed app, you will also need to choose your [deployment](/developerportal/deploy/) environment.

#### Fixes

* For a while, the **Show activity for** filter buttons on the company **Buzz** page were broken and displayed nothing. They now work again.

### September 10, 2018

#### Improvements

* An application created through our APIs now has the Web Modeler enabled if the template on which the app is based is suitable for use in the Web Modeler.

#### Fixes

* We have loosened an unnecessarily strict constraint on email domains during signup. You can now sign up with email domains with single-character sub-domains. (Tickets 68210 , 68386)

### June 26, 2018

#### Improvement

* We implemented the new Mendix header.

### May 23, 2018

#### Improvements

* Company Admins can now export three reports to Excel: active users, app permissions of active users, and apps. This enables managing users and their permissions at scale.

#### Fixes

* The **Revisions** tab on the **Story Details** page now shows the avatar of the committer instead of the app's avatar.

### May 8, 2018

#### Improvements

* You can now assign colors to your labels on the **Stories** page: Mendix Blue, Firetruck Red, Goldfish Orange, and Tulip Green.
* The **Story Details** page now has a new tab that shows the revisions related to the story.

#### Fixes

* On the **Feedback Details** page, the **Move to app** drop-down menu is visible again.
* Special characters like `&` are now displayed correctly in the subject of **Buzz** notification emails.
* The green call-to-action button in Buzz notification emails will now also work in Outlook for Windows. (Ticket 63452)
* If there is a lot of activity in a Buzz thread, each notification email now displays the correct thread history, instead of each email containing the same comments.
* We fixed two documentation links.

### April 9, 2018

#### Fixes

* It is now possible to assign an empty value for application constants that have string as the data type.
* The loading pop-up window text shown while retrieving branches is now fixed.
* The bug that prevented some users from viewing the list of running requests of their applications is now fixed.
* The bug that prevented users from deactivating their projects is now fixed.

### March 16, 2018

#### Improvements

* We changed the browser title from "Mendix App Platform" to **Mendix Platform** to be consistent with our messaging and documentation.
* Hybrid mobile improvements: you can now generate icons and splash screens, add custom loader and error images, and add custom HTML and CSS. We also added a new theming section for minor color tweaks.

#### Fixes

* The **Deploy** and **Operate** deep links were not available in the **Security** menu for user groups without monitoring access. This has been fixed.

### February 15, 2018

#### Improvements

* We introduced a beautiful new design for the notification emails you receive when someone replies to your **Buzz** posts.

#### Fixes

* We addressed an issue that prevented the **Daily Digest** email from being sent.

### January 25, 2018

#### Improvement

* It is now possible for you to change the Technical Contact of your applications by yourself.
