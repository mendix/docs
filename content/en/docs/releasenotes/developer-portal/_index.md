---
title: "Apps Release Notes"
linktitle: "Apps"
url: /releasenotes/developer-portal/
description: "Release notes for app management and other parts of Apps"
weight: 20
cascade:
    - numberless_headings: true
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

These release notes cover changes to the app management functionality and other features of the [Apps](/developerportal/).

{{% alert color="info" %}}
For release notes on Mendix Cloud and deployment options, see [Deployment](/releasenotes/developer-portal/deployment/).
{{% /alert %}}

To see the current status of the Mendix Portal, see [Mendix Status](https://status.mendix.com/). Here you can also see planned maintenance and past incidents.

## 2024

### August 25, 2024

#### Improvements

* We took the first step towards a complete overhaul of the [App Buzz](/developerportal/general/buzz/) page and added some basic information to the top of the page. This information gives you a quick and clear overview of the app's features, functionality, and the latest updates on the Team Server.

#### Fixes

* We fixed a bug where the commit dates for git-enabled apps on the [Team Server](/developerportal/general/team-server/#revision-history) page were not localized.

### August 22, 2024

#### New features

* In [Portfolio Management](/developerportal/portfolio-management/initiatives-overview/), you can now enter a value in the **Percentage Completed** field to indicate the progress made on any ongoing initiative. This field provides a clear way to track how much work has been completed. The **Percentage Completed** is visible in both the [list view](/developerportal/portfolio-management/initiatives-overview/#list-view) and the [planning view](/developerportal/portfolio-management/initiatives-overview/#planning-view), giving you an easy overview of your progress at a glance.

### August 1, 2024

#### New features

* In Portfolio Management, now you can drag and drop initiative cards in [Kanban view](/developerportal/portfolio-management/initiatives-overview/#kanban-view). This allows you to drag initiatives to a different stage or change their sequence within the same stage.

#### Improvements

* In Portfolio Management, when a Portfolio Manager approves the [access request](/developerportal/portfolio-management/access-management/#access-requests) of a user, now they can assign an access role different than the one the user requested.

### July 31, 2024

#### Fixes

* We fixed a bug that caused story points in your [Epics](/developerportal/project-management/epics/board/) to reset to zero when you changed the status of the story in the [Stories Pane](/refguide/stories-pane/).

### July 28, 2024

#### Improvements

* We have greatly simplified the process of [creating an app](/developerportal/#create-app) from Apps, making it easier and quicker to start working on your new app.
* When you are invited to collaborate on an app by someone from outside your own company, the pending invitation will be visible on the top of the [My Apps](/developerportal/#my-apps) page.

### June 30, 2024

#### New features

* We have added a new endpoint to our public [Projects API](/apidocs-mxsdk/apidocs/projects-api/). This enables you to automate changing existing team member's role assignment or update your pinned apps overview.

### June 27, 2024

#### New Feature

* We added the [Insights](/developerportal/portfolio-management/insights/) page in the Portfolio Management app. It is a dashboard that provides critical data and visualizations to help you gain insights into the portfolio.

### June 14, 2024

#### New Features

* We have launched the beta version of Software Composition, which provides visibility into component dependencies for every Mendix application environment. You can access the feature in [Control Center](/control-center/software-composition/) and [Apps navigation pane](/developerportal/deploy/software-composition/). This feature is available for select Studio Pro versions for free and licensed applications deployed on Mendix Public Cloud and Mendix for Private Cloud.

#### Improvements

* To provide a consistent user experience, we updated UI text and stopped using the term "Developer Portal". From now on, we use the term "Mendix Portal", which includes [Apps](/developerportal/), [Control Center](/control-center/), [Community](/community-tools/), [Marketplace](/appstore/), [Catalog](/catalog/), and [Mendix Support](/support/).

### June 9, 2024

#### Improvements

* When you open the Developer Portal, you can now see these tabs: **My Apps**, **Company Apps**, and **Pending Invites**. For details, see [Developer Portal](/developerportal/).
* On the top bar of some pages in the Developer Portal, you now see **Apps** instead of **Developer Portal**. This way the presentation of our information architecture is more consistent. 

### May 16, 2024

#### Improvements

* In Portfolio Management, you can now see the prioritization score instead of the department name on an initiative card in the [Kanban view](/developerportal/portfolio-management/initiatives-overview/#kanban-view).

### May 5, 2024

#### New features

* We have released a public beta version of a brand new [Projects API](/apidocs-mxsdk/apidocs/projects-api/). This API will help you automate managing your projects on the platform. Some of its key features are as follows: creating and deleting projects, and managing your project's team. We will add more features in the coming months. This is an important self-service feature. All feedback is welcome!

#### Fixes

* We fixed an issue where app team members were unable to download [documents](/developerportal/general/documents/) uploaded to the Developer Portal.
* We fixed an issue where the app administrator was not able to change the [logo of an app](/developerportal/collaborate/general-settings/#general).
* We fixed an issue where under certain circumstances the [Technical Contact](/developerportal/general/app-roles/#technical-contact) of an app was not displayed correctly.

### May 1, 2024

#### New Features

* The [Jira connector](/developerportal/project-management/jira-connector/) is now released for GA.

### April 25, 2024

#### Improvements

* The [Feedback API](/apidocs-mxsdk/apidocs/feedback-api-v2/) now returns the list of tags linked to a feedback.
* It is now possible to retrieve all feedback through the Feedback API for a certain email address.
* [Feedback](/developerportal/app-insights/feedback/) is now exported in a CSV file format.

### April 4, 2024

#### New Features

* In Feedback, everyone from the app team now can manage their own feedback notifications preferences by [turning on or off the notifications](/developerportal/app-insights/feedback/#notifications) for all incoming feedback. You can also choose to [watch or unwatch one specific feedback item](/developerportal/app-insights/feedback/#notifications-individual-feedback), if you do not want to be notified for all incoming feedback.

#### Improvements

* In Feedback, we have fixed an issue where the reporter's name appeared empty on the **Contact Reporter** tab. Now if there is no reporter's name available, their email address will be shown instead.
* We released the following improvements for [Mini survey](/developerportal/app-insights/mini-surveys/):
    * We improved your experience of copying the generated API key by implementing a new widget on the [Settings](/developerportal/app-insights/mini-surveys/#settings) tab of the **Survey Overview** page.
    * We improved our error messages by providing more details.

### March 28, 2024

#### New Features

* We made the following improvements to [Portfolio Management](/developerportal/portfolio-management/):
    * On the **Archive** page, you can now filter and export the archived initiatives.
    * We have extended the existing filters for initiatives.
    * We added a new field **Location** to initiatives, which shows where the department of the requester is located. Now you can also see this field in the Excel file when you export initiatives.

### March 21, 2024

#### Fixes

* We have fixed a bug in [Epics](/developerportal/project-management/epics/) that caused the cursor in text editors to jump to a different place unexpectedly. This problem happened in text editors for story descriptions, epic descriptions, and comments.

  There is a small trade-off though, since we replaced the text editor widget completely, it will not be possible to link stories using a # anymore. Your existing links will become plain text that still contain story ID and title. Copying and pasting the link to the story can be used as a workaround in the meantime.

### March 16, 2024

#### Improvements

* We added the **Contributor** access role in [Portfolio Management](/developerportal/portfolio-management/access-management/), and we renamed the **User** access role to **Viewer**.

### March 6, 2024

#### Deprecations

* Feedback API v1 is deprecated, and it will be turned off completely on September 30, 2024. To ensure a seamless transition, Mendix strongly recommends migrating to [Feedback API v2](/apidocs-mxsdk/apidocs/feedback-api-v2/) for all your feedback-related operations, including retrieval, creation, and updates.

### February 29, 2024

#### Improvements

* The Feedback API has been improved. We are happy to release our new REST Feedback API. The new API will replace the existing SOAP API, but it also comes with extra functionality like being able to retrieve the screenshot for a feedback item. Check out the [docs](/apidocs-mxsdk/apidocs/feedback-api-v2/) for more information. The following changes have been made:
    * We now send information on the priority status of a feedback item through various calls.
    * We have optimized the GET call.
    * We have better error logs for various calls.

#### Fixes

* We fixed a bug where the sidepanel would flicker upon loading either [Mini survey](/developerportal/app-insights/mini-surveys/) or [Feedback](/developerportal/app-insights/feedback/).
* In Feedback, creating, archiving, and deleting feedback items should now show the correct pages.

### February 8, 2024

#### New Features

* In [Portfolio Management](/developerportal/portfolio-management/), you can now assign a status to your initiatives.

### February 1, 2024

#### New Features

* In Feedback, you can now message the reporter on the **Contact Reporter** tab on the [side panel](/developerportal/app-insights/feedback/#feedback-details) after you open a feedback item.

#### Improvements

* Errors are now gracefully handled when a [mini survey](/developerportal/app-insights/mini-surveys/) submission is sent outside the boundaries of the survey runtime window.
* We fixed an issue where some users were unable to close feedback items.
* We fixed an issue where some users were encountering an error when navigating back to the Feedback home page.

### January 25, 2024

#### New Features

* Besides the already existing private and restricted portfolios, we now introduced open portfolios. An open portfolio is discoverable within your [company portfolios](/developerportal/portfolio-management/#my-porfolios-vs-company-portfolios) and accessible for all company members.

#### Fixes

* We fixed an issue where under certain circumstances the **Manage Users** overview of the app [access management](/developerportal/collaborate/general-settings/#managing-app-users) would not show.

### January 18, 2024

#### Improvements

* We released a few improvements for [Feedback](/developerportal/app-insights/feedback/):
    * We converted **Inbox** and **Archive** pages into two tabs on the homepage.
    * We introduced a bulk action bar where you can link, move, archive, and delete items as well as assign item status and create stories in bulk.
    * We now save your filters on **Inbox** and **Archive** tabs until the page is refreshed.

### January 11, 2024

#### New Features

* We added the following new features in [Portfolio Management](/developerportal/portfolio-management/):

    * You can now check initiatives in the [planning view](/developerportal/portfolio-management/initiatives-overview/#planning-view). In this view, the initiatives are shown on one timeline, with each timeline bar presenting an initiative.

    * You can now link multiple apps to an initiative. It is also possible to link epics from different apps to an initiative.

#### Improvements

* [Epics](/developerportal/project-management/epics/), our new agile planning tool has [replaced Mendix Stories](#stories-deprecation). We have added the option to export data from the [Story Archive](/developerportal/collaborate/general-settings/#story-archive) in batches, for those of you who had a lot of stories to export.

  You will need to export everything you want to keep before 1 October, 2024. After that, old data will be deleted.

## 2023

### December 14, 2023

#### New Features

* We added the following new features in [Feedback](/developerportal/app-insights/feedback/):

    * App team members now can assign priority to feedback items and filter feedback items by their priority.

    * It is now possible for the reporter of the feedback item and the assigned team member to upload images when they send each other messages.

#### Improvements

* We display a warning sign on the [Settings](/developerportal/collaborate/general-settings/) page in the Developer Portal if an app has no Scrum Master or if a licensed app has no Technical Contact. This can happen if a person with those roles submits a "forget me" request with us.
* We merged the **History** tab on the [Teams](/developerportal/general/team/) page and the [History](/developerportal/collaborate/general-settings/#history) tab on the **Settings** page into one and we made sure you can download the history log. This is to prepare for the implementation of an audit trail retention policy sometime soon.
* If you have [connected your project to a Jira](/developerportal/project-management/jira-connector/) board, you can now alter the settings without having to deactivate the connection first.
* We have stopped support for IBM as a cloud target. All projects currently deployed to the IBM cloud have been enabled for the [Mendix Cloud](/deployment/#mendix-cloud).

#### Fixes

* We fixed an issue where the [invitation](/developerportal/general/team/#inviting) wizard would not give the inviter feedback that the invitee was invited already (and has not accepted yet).

### December 7, 2023

#### Improvements

We have made the following improvements to the **Access Management** page in Portfolio Management:

* On the [Members](/developerportal/portfolio-management/access-management/#members) tab, the **Status** column in the list now shows whether a user is active or deactivated. Moreover, you can remove all the deactivated users from a portfolio in one go.
* All the pending invites now appear on the [Pending Invites](/developerportal/portfolio-management/access-management/#pending-invites) tab.

### November 23, 2023

#### New Features

* In [Portfolio Management](/developerportal/portfolio-management/), you can now [link epics to an initiative](/developerportal/portfolio-management/initiatives-overview/#link-epics).

### November 17, 2023

#### Improvements

* In Epics, we added a filter on the [Epics](/developerportal/project-management/epics/epics/) page, allowing you to sort and view epics based on their status. We also add a mini survey on the filtering experience – tell us what you think!
* In Epics, on the [Board](/developerportal/project-management/epics/board/) page you can now see the total number of stories in each swimlane – it is displayed right next to the name of the swimlane.

#### Fixes

* We fixed a bunch of bugs in Epics, mostly related to the dark mode.

### November 16, 2023

#### Improvements

* We made some minor adjustments to the [Jira Connector](/developerportal/project-management/jira-connector/) based on your feedback. The list of Jira issues in Studio Pro is now ordered by the story key, instead of the Jira rank attribute. We also made the configuration pop-up window that appears when setting up your Jira connection more clear.

#### Deprecations

* We removed **Company Buzz**.

### November 9, 2023

#### New Features

* In [Feedback](/developerportal/app-insights/feedback/), we implemented a rich text editor in the text box of **Team Comments** and the text box where the feedback reporter and team members send messages to each other.
* In [Mini Surveys](/developerportal/app-insights/mini-surveys/), if you now click an individual response in the list at the bottom of the **Responses** tab, you can see the details of the response on a side panel.

#### Fixes

* We fixed an issue in Feedback where tags could be incorrectly duplicated.
* We fixed an issue in Feedback where deleting tags or statuses caused errors.

### November 2, 2023

#### Improvements

* When your company has connected its own [Identity Provider](/control-center/security/set-up-sso-byoidp/) to the Developer Portal, you should be using [personal access tokens](/community-tools/mendix-profile/user-settings/#pat) to connect to the Team Server. To reflect this, we show a different URL on the [Team Server](/developerportal/general/team-server/) page.

#### Fixes

* We fixed an issue where under certain circumstances some attributes were not exposed in the [Feedback API](/apidocs-mxsdk/apidocs/feedback-api/).

### October 26, 2023

#### New Features

* We released a feature in Feedback to allow you [manage tags](/developerportal/app-insights/feedback/#manage-tags) there. You can now create, delete, and rename a tag, and change the color of a tag.

#### Improvements

* We have improved the formatting on all [Feedback](/developerportal/app-insights/feedback/) notifications.

#### Fixes

* We fixed a bug in Feedback where a small number of users were experiencing an error when converting a feedback item to a story.
* We fixed an issue where deactivation of some apps led to unexpected errors.

### October 19, 2023

#### New Features

* We added the following features to [Epics](/developerportal/project-management/epics/):
    * We added the new section **Audit Trail** to the [story details](/developerportal/project-management/epics/board/#story-details) page to log the information on all the updates related to the story, including who updated the information and when.
    * We enabled filtering both on the [Board](/developerportal/project-management/epics/board/) page and the [Planning](/developerportal/project-management/epics/planning/) page. You can filter stories by story title, story ID, epic name, or assignee. You can also filter by any tag and combine the results.

#### Improvements

* We improved the Sprint filter in [Story Archive](/developerportal/collaborate/general-settings/#story-archive) so that you can now type the Sprint name in a text box.

#### Fixes

* In [Epics](/developerportal/project-management/epics/), we fixed the following issues:
    * We fixed an issue that stories were not getting removed from the board after a Sprint is completed.
    * We fixed an issue regarding dark mode where the screen would flicker.
* We fixed an issue where the last Scrum Master could be removed from an app with API keys.
* We fixed an issue that allowed new members to accept an invitation to an app multiple times.

### October 12, 2023

#### New Features

* In [Portfolio Management](/developerportal/portfolio-management/), you can now [export and import initiatives](/developerportal/portfolio-management/export-import-initiatives/) using an Excel file.

### October 1, 2023

#### Improvements

* We improved the migration flow to make it as easy as possible for you to move your data from Stories to Epics.

#### Deprecations{#stories-deprecation}

* Stories is officially retired and Epics is the only official Mendix agile planning tool now. You can still migrate all your data from Stories to Epics.

### September 28, 2023

#### Fixes

* We fixed an issue in [Feedback](/developerportal/app-insights/feedback/) where a feedback item with other feedback Items linked to it could not move between inbox and archive.
* We fixed an issue for the legacy Feedback widget in Feedback, where it would error if you had too many user roles.
* We fixed an issue in Feedback where the Feedback widget could not send items due to the incorrect pre-populated app ID value.

### September 21, 2023

#### New Features

* We released a few new features for [Epics](/developerportal/project-management/epics/):
    * We have added a new section named **Revisions** in the [story details](/developerportal/project-management/epics/board/#story-details) dialog box, which shows the revision history of a story. This feature is only available for apps that use Git for version control.
    * On the **Planning** page, you can now [export stories](/developerportal/project-management/epics/planning/#export-stories) to an Excel file.
    * If you [export archived stories](/developerportal/project-management/epics/archive/#export-archived-stories) on the **Archive** page, you can find two new columns in the Excel file: **Assigned to** and **Archived by**.
    * On the [Planning](/developerportal/project-management/epics/planning/) page, you can now type *bug* or *feature* in the search bar to filter on the story type so that it only shows bugs or features. More ways to filter out stories are coming soon.

#### Deprecations

* We have done all the preparation work for retiring Stories (remember it will happen on October 1, 2023). After that date, you will still be able to go into Epics and migrate all your stories, comments, attachments, and more, but Stories will not be available for any app anymore.

### September 7, 2023

#### Fixes

* We fixed feedback items not being sent from Native Templates to [Feedback](/developerportal/app-insights/feedback/) in [App Insights](/developerportal/app-insights/).
* We fixed an issue where trying to close a feedback item threw an error.

#### Deprecations

* We deprecated the numerical 1-10 rating question option in [Mini Surveys](/developerportal/app-insights/mini-surveys/) in App Insights.

### August 24, 2023

#### New Features

* We added the following features to [Feedback](/developerportal/app-insights/feedback/) and [Mini Surveys](/developerportal/app-insights/mini-surveys/) in App Insights:

    * In Feedback, we added a new filter called "status" on the **Inbox** page and the **Archive** page.
    * In Feedback, we introduced a tag called “Handled” for migrated feedback items that were already handled. You can search for feedback items using this tag on the Inbox page.
    * We added documentation links on the home page of **Feedback** and [Mini Surveys](/developerportal/app-insights/mini-surveys/).

#### Improvements

* We improved the Feedback in App Insights as follows:

    * When you manually create feedback items, you can now leave your email address.
    * You can now archive multiple feedback items in one go.
    * You can now download the attachments of feedback items that reporters have uploaded.
    * If you have the right permission, you can now delete comments on the side panel of a feedback item.

* We fine-tuned our [Jira integration](/developerportal/project-management/jira-connector/) support for Scrum boards. The [Stories pane](/refguide/stories-pane/) in Studio Pro now shows all stories belonging to the active Sprints of your board (this used to be all open Sprints with a limitation of 50 stories)

#### Fixes

* We fixed an issue where new users who were trying to access Feedback for the first time via a URL would be presented with an error.
* We fixed an issue where special characters in the email address of a feedback submitter would not be properly supported.
* We fixed an issue where users would get an error when using the URL provided by the **Share Link** button on the [survey details page](/developerportal/app-insights/mini-surveys/#survey-details).
* We fixed an issue where users would not be brought to the Developer Portal home Page when clicking **Developer Portal** within the MxDock.

### August 12, 2023

#### New Features

* We released [App Insights](/developerportal/app-insights/) for GA as a brand new suite that enables you to collect, analyze, and act on the input of your users while innovating faster. App Insights includes two tools: [Feedback](/developerportal/app-insights/feedback/) and [Mini Surveys](/developerportal/app-insights/mini-surveys/).

* The new feedback management tool **Feedback** does the following:

    * Allows you to add tags to feedback items so you can see patterns more easily
    * Enables you to define custom statuses for feedback items – you can create your workflow, your way
    * Supports identifying which environment the feedback item comes from (for example, production or test environment)
    * Search more easily – you can now filter on environment, submission dates, and assignees
    * Supports linking feedback items together, so that if multiple users report the same bug, you can treat and update all their feedback as one
    * Enables submitters to see and update their feedback items in the Developer Portal
    * Supports linking feedback items with Jira – for all of you who make use of our new Jira connector

  You can find all your existing feedback data already in the new Feedback tool. If you have set up Epics or Jira as your project management tool, Feedback is already linked to your tool. In other words, you do not need to do anything, just try it out and tell us what you think.

* Complementing Feedback, **Mini Surveys** helps you to set short, effective surveys to gather diverse feedback, and enables data-driven decision-making to improve app and features. Mini Surveys does the following:

    * Enables easy configuration of a survey questionnaire with up to three questions in any desired format
    * Allows you to tailor the survey setup to specify its display location, trigger timing, and target user group
    * Supports defining the duration of the survey
    * Offers the toaster feature for you to designate the survey's on-screen placement
    * Allows you to select your preferred survey format from options including rating scales, multiple choices, open questions, and net promoter score (NPS)
    * Supports recording all survey responses, even if a customer does not complete the entire survey
    * Offers the test mode functionality for you to experiment prior to deploying the survey to a broader audience
    * Provides a comprehensive view of responses for in-depth analysis

### August 10, 2023

#### Fixes

* We fixed an issue with Jira connector where sub-tasks in Kanban boards in Jira would cause duplicate entries in the **Stories** pane in Studio Pro, causing it to throw an error.
* We fixed an issue where under certain circumstances, it was possible to remove the last Scrum Master of an app.

### August 8, 2023

#### Improvements

* We released the [Webhooks API](/apidocs-mxsdk/apidocs/webhooks-api/) for general use. This API allows you to manage webhooks for actions which are performed on your Mendix apps.

### July 27, 2023

#### Improvements

* In Mendix 10, we have combined the strength of Mendix Studio and Studio Pro – they are not separate anymore, so we have removed the last links from the Developer Portal to Studio.
* We have improved the information regarding the sunsetting of Mendix Stories (remember, that will be October 1!).
* We are preparing the platform for the [big upgrade of the Feedback management experience](https://www.mendix.com/blog/mendix-release-10-0-a-new-era/#app-insights). The new Feedback management and Mini Surveys are a part of our brand new product suite called App Insights. The date for upgrading Feedback management is August 12. If you are using the current Feedback management tool, you will have received more detailed information in an email sent on Monday, July 24 (subject line: "Upgrade to new Feedback Management").
* You asked, we listened: In Epics, you can now see who created a story on the story details page.

### July 13, 2023

#### Improvements

* We have improved your ability to create stories within Epics. You can now add a new story directly from any [swimlane](/developerportal/project-management/epics/board/#swimlane).
* To streamline your app editing process, we have added a new **Edit in Studio Pro** button in Epics. With a single click, you can open your app directly in Studio Pro, similar to the rest of the platform.
* In Epics, you now have the ability to sort your [story](/developerportal/project-management/epics/board/#story-details) and [epic](/developerportal/project-management/epics/epics/#epic-details) comments based on their time of submission, either showing the newest or the oldest on top.

#### Fixes

* We fixed a bug where we accidentally tried to migrate stories that were marked for deletion from Mendix Stories to Epics. (They were not actually migrated, but they ended up as errors in the migration log.)

### June 29, 2023

#### New Features

* With both Epics and Jira connector as new options to plan your work, we are getting ready to say goodbye to Mendix Stories on October 1, 2023. As of today, once you switch to [Epics](/developerportal/project-management/epics/) or [Jira](/developerportal/project-management/jira-connector/), we will [archive all your work in Mendix Stories](/developerportal/collaborate/general-settings/#story-archive) and you will not be able to switch back to Mendix Stories anymore. The Scrum Master of your team can choose the right project management tool for you on the [Project Management](/developerportal/collaborate/general-settings/#project-management) tab on the **General Settings** page.
* To highlight the story tool you choose for your app, we gave it its own section in the navigation, called [Project Management](/developerportal/project-management/).
* With these changes, navigation in Epics works a bit differently than before: the navigation items are on a pane on the left now instead of at the top, so it is easier for you to get from one part of the Developer Portal to another. (If you need more space on the screen, you can always collapse the navigation pane.)
* Speaking of Epics, we have released the new public API. You can find all the information in our [documentation](/apidocs-mxsdk/apidocs/epics-api/).

### June 22, 2023

#### New Features

* Jira is here! You can now assign your Studio Pro commits to user stories in your Jira board. We offer this functionality as a beta version and welcome your feedback. Read all about the features and how to set it up in [Jira connector](/developerportal/project-management/jira-connector/).

#### Improvements

* Our [Portfolio Management](/developerportal/portfolio-management/) tool is now released for GA. At the same time, we also made a few improvements to the tool:
    * We renamed **Projects** to **Initiatives**.
    * You can now request access to restricted portfolios in your company.
    * Filters in the **Initiatives Overview** are now preserved when switching views.
* We simplified the [app invitation flow](/developerportal/general/team/#inviting). If someone from your own company invites you to an app that also belongs to your company, you will no longer have to accept the pending invitation. Instead, you will be immediately added to the team.
* You can now see everyone who was invited to the app and by whom. You will find this information on the [History](/developerportal/collaborate/general-settings/#history) tab of the **General Settings** page.
* We had a close look at the messages we post on the [History](/developerportal/general/team/) tab of the **Team** page and revised some of them to make them more readable.
* You can now see all pending invitations to your app on the [Team](/developerportal/general/team/) page.
* We fixed an issue where, under certain circumstances, the app logo was not updated in Studio Pro after you changed it in the [General Settings](/developerportal/collaborate/general-settings/) page.

### June 15, 2023

#### New Features

* We have released [Webhooks API](/apidocs-mxsdk/apidocs/webhooks-api/) for beta usage.

### June 1, 2023

#### Improvements

* We improved the user experience of the Git migration. In case of any issues, we now provide information about why your project could not be successfully migrated from Subversion to Git and which specific branches might be the reason.

### May 18, 2023

#### Improvements

* We changed the default app logo.

### May 16, 2023 {#byoidp}

#### New Features

* You can now use a [Personal Access Token](/community-tools/mendix-profile/user-settings/#pat) to access SVN repositories in [Team Server](/developerportal/general/team-server/) without using your personal Mendix credentials.

### May 4, 2023

#### New Features

* In [Epics](/developerportal/project-management/epics/), you can now select multiple stories on the [Planning](/developerportal/project-management/epics/planning/) page, and then move them to a different category, archive them, or delete them in one go.
* In [Epics](/developerportal/project-management/epics/), you can now use [keyboard shortcuts](/developerportal/project-management/epics/planning/#keyboard-shortcuts) to select stories on the **Planning** page.

#### Fixes

* We fixed an issue where under certain circumstances you were not able to retry to [migrate your repository to Git](/developerportal/general/migrate-to-git/) if the first try resulted in errors.
* We fixed an issue where a redirect to a user story that is linked to a feedback item would result in an error if this story is hosted by [Epics](/developerportal/project-management/epics/).

### April 20, 2023

#### Improvements

* We added a pre-condition check to the [Git migration](/developerportal/general/migrate-to-git/) process. We will inform you of any errors in the check, so that you can resolve them before proceeding with the migration.
* If your app is between versions 9.0 and 9.11, we now alert you to upgrade and become eligible to migrate. You see, we really want you to migrate to Git!

#### Fixes

* We fixed an issue where authors of a [feedback](/developerportal/app-insights/feedback/) item would receive notifications on that item even though they specifically set the system not to send any notifications.

### April 13, 2023

#### Improvements

* We added the following features to [Epics](/developerportal/project-management/epics/):
    * You can now add, rename, and delete tags, as well as change tag colors (21 colors to choose from!).
    * You can now create, link, or remove stories directly from an epic.
    * The address bar in your browser now shows the link to the exact board, story, and epic, so you can bookmark individual pages and easily come back to them.
    * If you use Scrum, you can now see a summary of your completed Sprint on the [archived Sprint details](/developerportal/project-management/epics/archive/#archived-sprint-details) page. You can see how many stories were completed and uncompleted, as well as the breakdown of completed points in the Sprint.
    * You can now [import](/developerportal/project-management/epics/planning/#import-stories) and [export](/developerportal/project-management/epics/archive/#export-archived-stories) stories using Excel files.

#### Fixes

* We fixed an issue that prevented some apps from being migrated to Git.
* We fixed an issue that incorrectly removed Team Server access for some app team members when changing the permissions of an app role.

### April 4, 2023

#### Improvements

* We have made the option to migrate your app to Git more prominent. The banner is now displayed on all pages within the **Collaborate** section of the Developer Portal. Read more information on how to migrate and if you are eligible to migrate [here](/developerportal/general/migrate-to-git/).
* Have you tried [Epics](/developerportal/project-management/epics/) yet? You should! It is awesome if we do say ourselves. We are also working in the background to make it possible to connect your Mendix apps to your Jira boards – stay tuned!

### March 23, 2023

#### Improvements

* In preparation for the [merging of Studio and Studio Pro](https://www.mendix.com/blog/coming-in-2023-the-merging-of-studio-and-studio-pro/), we removed the **Edit in Studio** button. You can still open your app in Studio via the **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) button in the [app tile](/developerportal/#my-apps) on the **My Apps** page.
* After the big overhaul we released on [February 13th](#feb-13-23), our logging showed a decrease in the overall performance of Stories. We took some counter-measures and made performance improvements.
* We made some minor improvements to the flow for [inviting app team members](/developerportal/general/team/#inviting). For example, when you invite someone new to your app, the default role will be **Business Engineer** (as long as this role exists in your app).
* We made some improvements to the layout of the [App Buzz](/developerportal/general/buzz/) page so that it displays better on small screen resolutions.
* The navigation pane is now collapsible, which makes for a far better experience on small screen resolutions.
* We are preparing the Developer Portal for a brand new feedback experience. Please stay tuned!

### March 16, 2023

#### Deprecations

* We have deprecated **General Settings** > **Webhooks** for stories and Sprints. You can now set webhooks for building and deploying your app. These are described in [Webhooks](/developerportal/deploy/webhooks/).

### March 9, 2023

#### Improvements

* As of now, only Scrum Masters can [manage the app team](/developerportal/general/team/#managing).

#### Fixes

* We fixed an issue where the users you administered for your app's [environment](/developerportal/collaborate/general-settings/#manage-users) were not displayed in the correct order.

### February 23, 2023

#### Fixes

* We fixed a performance issue that occurred when opening an [App Buzz](/developerportal/general/buzz/) page for an app with a large team. We now show no more than 25 team members in the team list in the right corner at a time.

### February 16, 2023

#### Improvements

* We enabled more options for search in [Epics](/developerportal/project-management/epics/). On the [Board](/developerportal/project-management/epics/board/) page, you can now search stories based on tags, epic name, assignee (and unassigned stories), story title, and story ID. On the [Planning](/developerportal/project-management/epics/planning/) page, you can search stories based on tags, epic name, assignee (and unassigned stories), status name (only in the Scrum workflow), story title, and story ID.
* The Epics listed on the [Epics](/developerportal/project-management/epics/epics/) overview page now have visible tags.

#### Fixes

* We fixed an issue in **Epics** where the unsaved changes pop-up window did not take you to the correct story after clicking **Leave**.
* We updated the text in the [notifications](/developerportal/global-navigation/#notifications) when a story is assigned to you in **Epics**.

### February 13, 2023 {#feb-13-23}

#### Improvements

* We overhauled the entire [Project Management](/developerportal/collaborate/general-settings/#project-management) to a completely new design. This design brings the benefit of using the full body width of your screen, scales much better across several devices and screen resolutions, and is dark-mode ready.
* Have you lost track of where your apps live? We now display the cloud plan on the app tile in [My Apps](/developerportal/#my-apps).
* We simplified the [team member invitation](/developerportal/general/team/#inviting) flow from a multi-step wizard to a single page.
* We moved the **Pending Invites** to a tab on the [My Apps](/developerportal/#my-apps) page. You will find both the pending invitations to apps that you have received (which you can **Accept** or **Decline**) in addition to the invitations you have sent.

#### Fixes

* We fixed a performance issue on the [Team](/developerportal/general/team/) page.

### January 26, 2023

#### Improvements

* We fixed an issue where the story description did not appear in Studio Pro.
* [Epics](/developerportal/project-management/epics/) now have different colors so that you can distinguish between them more easily. The color is currently assigned randomly (as is done with story labels), but we may add management functionality at a later point.
* If you practice Scrum, you can now see the status of the stories in your active Sprint on the [Planning](/developerportal/project-management/epics/planning/) page.
* Sprint details are now editable, so you can change the date, name, and goal of your Sprint after you start it. Use this power wisely, as committing to a Sprint goal is important, so only change the goal if there really is no other option.
* We have implemented the new [Mendix Feedback](/appstore/modules/mendix-feedback/) module, so now you have much better screenshot functionality. Do send us feedback, we love hearing what you think. And also try out the new Mendix Feedback module in your own apps, it's awesome!

## 2022

### December 21, 2022

#### Fixes

* We fixed an issue where some users were not able to open the **Sprint Status** page.

### December 13, 2022

#### New Features

* We have released the beta version of [Product Insights](/developerportal/app-insights/mini-surveys/), which is a new way for you to proactively get feedback from your users. The functionality consists of a tool for setting up mini surveys in addition to the [Product Insights - Mini Surveys](/appstore/modules/mendix-mini-surveys/) Marketplace module, which you can add to your app to set up the exact targeting criteria for a survey.

  A survey can have a maximum of three questions that appear in your app based on the implemented criteria. You can choose between four different question types (rating scale, multiple choice, open question, and NPS question), and you can place the survey toaster in any of corner of the page. You can also preview exactly what the survey will look like.

  This feature is in beta, so we would very much appreciate your feedback. If you have any questions or suggestions for improvement, just reach out via the **Feedback** widget on the **Product Insights** page in the Developer Portal.

### December 1, 2022

#### Improvements

* We released a new version of [Epics](/developerportal/project-management/epics/), our brand new Agile planning tool, for general availability! We made the following improvements:

    * It is possible to migrate all your data from Stories into Epics. For details, see the Data Migration section of *Epics*.
    * You can link a feedback item to a story in Epics. If you accept feedback, the story with the feedback ID and the link to the original issue will show up in your backlog.
    * If you type *#* and then start typing a story name, you can link a story in the description of another story. This is handy for showing dependencies or other relationships between stories.
    * Mentioning app team members with *@* is available in story and epic descriptions as well as in comments. If someone *@* mentions you, it triggers a notification on the Mendix Platform and/or an email, depending on your notification settings.
    * We have added emoji reactions to comments, for those times when there is no need to bother typing a message because a simple thumbs-up says it all.

  From this point on, Epics is the default project management tool for all new apps.

### November 30, 2022

#### New Features

* The new [Portfolio Management](/developerportal/portfolio-management/) tool allows portfolio managers, business stakeholders, and developers to stay informed about projects and manage them in the different development stages. By providing everything you need to collaborate effectively in one place, it is now easier than ever to bring project ideas to the Mendix Platform.

  In Portfolio Management, you can do the following:

    * Control and manage digital project initiatives in one overview (via Kanban and list views)
    * Prioritize project initiatives by industry standard prioritization methods:

        * Weighted shortest jobs first (WSJF)
        * Reach, impact, confidence, and effort (RICE)

    * Sort, filter, and search project initiatives on fields such as **Tags**, **Owners**, **Departments**, and **Dates**
    * Add attachments, link Mendix apps, and assign owners to a project initiative
    * Archive and restore project initiatives
    * Invite users to dedicated portfolio boards (both internal to your organization and external)
    * Easily manage portfolio users via **Access Management**
    * Get notified when you get assigned to a project initiative or someone commented on a project initiative you own

### November 21, 2022

#### New Features

* We introduced a self-service option for Team Server SVN that allows Scrum Masters to permanently migrate eligible apps to Git. For more information on what apps are eligible for migration and on the migration process, see [Migrate to Git](/developerportal/general/migrate-to-git/). For more information on steps after the migration and process differences between Git and SVN, see [Migrating from SVN to Git: Steps After Migration and Process Differences](/refguide9/svn-git-differences/).

### October 20, 2022

#### Fixes

* We fixed an issue where the story name in the revision history was not visible when you link a commit to a story in Epics or Jira (beta).

### October 6, 2022

#### Improvements

* You can now see your app history under the [General Settings](/developerportal/collaborate/general-settings/#history) page. Previously this was located under the **Stories** page.

#### Fixes

* We fixed an issue which could occur when you try to accept feedback items with a long description.
* We fixed an issue where the feedback description was not always scrollable.

#### Deprecations

* All [Mendix Feedback](/appstore/modules/mendix-feedback/) widgets with versions lower than 8.4.0 are disabled. The feedback provided via a widget version lower than 8.4.0 is no longer sent to the [Feedback](/developerportal/app-insights/feedback/) section of the Developer Portal, but your app will keep working as usual. Please download and replace your current Mendix Feedback widget with version 8.4.0 or higher. If you are using the [Native Mobile Resources](/appstore/modules/native-mobile-resources/) module (which also includes a version of the Mendix Feedback widget), please upgrade to version 3.5.1 or higher of that module.

### September 28, 2022

#### New Features

* We replaced the widget used in story description in [Epics](/developerportal/project-management/epics/) with a new one, which fixes the bug you might have been experiencing. This replacement also comes with the following changes:
    * You can use @ to mention someone in the text of story description or epic objective. The mentioned person will get a notification once the text is saved.
    * You can copy the link to a story or an epic on the upper-right corner of the [story details](/developerportal/project-management/epics/board/#story-details) dialog box or the [epic details](/developerportal/project-management/epics/epics/#epic-details) dialog box.
    * Story and epic details now appear in a dialog box instead of a side pane.
    * The widget styling is now slightly different.
* We added a **Project Buzz** button on the [Board](/developerportal/project-management/epics/board/) page. Clicking the button brings you to the [Buzz](/developerportal/general/buzz/) page of the specific app in the Developer Portal.
* We added an error page in case you access Epics with no apps enabled.
* We made it possible for you to link commits from Studio Pro to stories in Epics.

#### Improvements

* We improved some empty states in the story details dialog box, epics details dialog box, archived Sprint details dialog box, and archived story details dialog box in Epics.

### September 15, 2022

#### New Features

* We added the option to watch and unwatch an app. You can find this option on the [General Settings](/developerportal/collaborate/general-settings/) page for an app as well as when you click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in an app tile on the [My Apps](/developerportal/#my-apps) page. Watching an app means that you will receive feedback notifications for this app, while unwatching an app turns off the notifications.

#### Fixes

* We fixed an issue where users were not able to delete an app, if other users were still members of this app.
* We fixed a navigation issue that would occur when users click **Go to Environments** in [Cloud Settings](/developerportal/collaborate/general-settings/#cloud-settings).

### August 25, 2022

#### Fixes

* We fixed a pagination issue on the [user management overview](/developerportal/collaborate/general-settings/#manage-users) in your **Access Management** settings.

### August 22, 2022

#### New Features

* We introduced a separate session duration of one hour for users logging into the platform using SSO with their companies BYOIDP, so session management can be better controlled by their IDP.

### August 11, 2022

#### New Features

* We simplified the process of [inviting other users](/developerportal/general/team/#inviting) to your projects. Now you do not need to add a personal message to the invitation anymore and the whole process can be completed on a single page.
* We added a banner about [Epics](/developerportal/project-management/epics/), our new tool for Agile planning, on the **Stories** page. This banner provides more information about Epics and makes it easier for Scrum Masters to enable it for their projects.

### July 21, 2022

#### Improvements

* We removed **My Activity Overview** from the **Account Settings** page.
* We redesigned the **Pending App Invites** section and added it as a new menu item to the **Account Settings** page.
* We improved the warning messages when you leave or delete an app.

#### Fixes

* We fixed an issue where apps on the **Company Apps** page would not be displayed properly.
* We fixed an issue that would cause an error when you edit a very long app name or description on the **General Settings** page.

### July 14, 2022

#### Improvements

* We made some small improvements to the **General Settings** page.

### July 7, 2022

#### New Features

* We released [Epics](/developerportal/project-management/epics/), our brand new tool for Agile planning, for beta usage. Epics has many features. For example, you can:

    * Map your exact development process with fully customizable swimlanes
    * Use Scrum or Kanban – we support both!
    * Set Sprint goals and see all the basic Sprint information on the board – if you are using Scrum
    * Drag and drop stories on our brand new project board
    * Format stories in any way you want – for example, adding headers, links, and code blocks, linking specific stories, and using @ to mention people (notifications for this coming soon!)
    * Clone stories
    * Create and track the progress of epics
    * Archive single stories or whole swimlanes
    * Easily search through your completed stories and get an overview of completed Sprints in the archive

  You can try it out for any Mendix app. Your Scrum Master just needs to enable Epics in the [General Settings](/developerportal/collaborate/general-settings/#project-management). Please note it is not yet possible to migrate the data from Stories into Epics, so Mendix recommends using it for new projects or iterations first – in this way you do not have to worry about the stories in your current backlog.

### June 30, 2022

#### Fixes

* We introduced improvements in the performance of the [Feedback API](/apidocs-mxsdk/apidocs/feedback-api/).

#### New Features

* We redesigned the [General Settings](/developerportal/collaborate/general-settings/) section to make it more intuitive and user-friendly.
* We prepared the integration of Studio Pro with our new project management tool, Epics (coming soon!).

### June 16, 2022

#### Fixes

* We fixed an issue where users could have a duplicated project membership, resulting in two identical projects in the Developer Portal.

### June 9, 2022

#### Improvements

* From now on, the free Mendix Cloud environment of an app will be deleted whenever the app is deactivated or deleted.

### May 19, 2022

#### Fixes

* We fixed an issue where replies on [Feedback](/developerportal/app-insights/feedback/) emails were not correctly processed into comments.

#### Improvements

* We added a download button for Feedback images, so that you can see them in full size more easily.

### May 5, 2022 {#may-fifth}

#### Fixes

* We fixed a [known issue](#april-ki) where not all app images were displayed correctly on the [My Apps](/developerportal/#my-apps) page. (Ticket 148379)

### April 21, 2022

#### Improvements

* We removed the old Stories UI in preparation for a brand new Mendix tool for Agile project management that will eventually replace **Stories** completely – stay tuned!

#### Known Issues {#april-ki}

* Under certain circumstances, the app image is not displayed properly on the [My Apps](/developerportal/#my-apps) page.
    * Fixed on [May 5, 2022](#may-fifth).

### March 24, 2022

#### Improvements

* As of today, we send all app invites, [Buzz](/developerportal/general/buzz/) notifications, and the Daily Digest from a no-reply email address. You can still reply to Buzz notifications, by the way.
* We have started sending the Daily Digest in a slightly different markup.

#### Fixes

* We fixed an issue where the submitter of a [feedback item](/developerportal/app-insights/feedback/) was no longer able to comment on that issue after they left the app.

### March 10, 2022

#### Fixes

* We fixed a bug where screenshots posted through the [Mendix Feedback](/appstore/modules/mendix-feedback/) widget could be viewed in thumbnail size only. It ain't much, but it's honest work. (Tickets 143368, 143399, 143435, 143505, 143526, 143602, 143657, 143681, 143782, 143818, 143838, 143919, 143924, 143965)

#### Improvements

* The apps displayed on the **My Apps** tab that appears when starting Studio Pro are pulled from the [My Apps](/developerportal/#my-apps) page in Developer Portal. In Studio Pro versions below [9.6.0](/releasenotes/studio-pro/9.6/), the **My Apps** tab will no longer display [Git for version control](/refguide9/branch-line-manager-dialog/#byo-server-app) apps, as Git integration is not supported. In Studio Pro 9.6.0 and above, both Git-enabled and SVN-enabled apps are displayed.

### February 10, 2022

#### Improvements

* In our continuous effort to change the Developer Portal from a monolith into microservices, we have taken a big step in giving company data its own service. This paves the way for an updated password maintenance experience, which we will release soon.

#### Fixes

* We fixed a bug where editing a new task while creating a story threw an error.

### January 18, 2022

#### Improvements

* We improved the platform navigation. The [Switch to](/developerportal/global-navigation/) menu on the left side of the top bar now also provides access to your recently used apps.

## 2021

### December 23, 2021

#### Improvements

* During the last release, we introduced an issue where the Developer Portal exposed apps without a repository to Studio Pro. We patched this issue on December 17, 2021 with a band-aid. This release sees a more permanent solution.

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

#### Update of \*.mendixcloud.com SSL/TLS certificate

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
        * SHA-256 Fingerprint: `BF:AE:01:9F:93:5A:D9:92:35:B5:BA:9F:E4:AE:56:99:21:17:44:51:56:17:A2:11:A1:FE:3B:42:9C:B4:B6:70` \* SHA-1 Fingerprint: `0F:3B:31:9F:86:6E:65:2D:5F:7A:EF:35:64:04:45:67:58:E4:ED:11`

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

### September 2, 2021

#### Improvements

* We removed the **Burndown Chart** and the **Release Plan** from **Stories**. We are working on reintroducing solutions for project analytics and release planning in the future.
* We implemented context deep links to all main app pages on the Developer Portal so you can easily share references.
* We increased the performance of opening the [My Apps page](/developerportal/#my-apps)

#### Fixes

* We fixed a bug where the pop-up window with pending invitations shown twice.
* We also fixed a layout bug on the invitation pop-up window that we accidentally introduced during the last release.

### August 19, 2021

#### Improvements

* We implemented the first batch of endpoints for mobile, in preparation for something cool coming your way.
* We improved the way the Developer Portal shares data across its several components.
* We made small improvements to the look and feel of the Developer Portal.

#### Fixes

* We fixed an issue with the app's [Team](/developerportal/general/team/) page where [Mendix Admins](/control-center/company-settings/) could not add or remove team members.

### July 14, 2021

#### Improvements

* We updated the look and feel of the [Documents](/developerportal/general/documents/) page.

### June 30, 2021

#### Improvements

* You can now assign team members to a user story.
* We moved the old version of the Stories UI. You can now access it via the **More** button on the **Stories** page.
* We removed the **Team** read-only overview page and send you straight to the [Manage Team](/developerportal/general/team/#managing) page.
* We moved the **API Keys** page to the [General Settings](/developerportal/collaborate/general-settings/#general-settings-api-keys) page.
* We implemented a new responsive search panel.
* We will remove the **Burndown Chart** and **Release Plan** tabs from the Developer Portal on August 31, 2021.

### June 15, 2021

#### Improvements

* Git is coming: we have prepared the Developer Portal for the handling of Git-supported apps.
* We added a button to the Stories overview that allows you to create a new label.
* We made some minor changes to the look and feel across the Developer Portal.

#### Fixes

* We fixed a broken link to the documentation on the [Team Server](/developerportal/general/team-server/) page.

### June 1, 2021

#### Improvements

* We are deprecating part of the options to create an app based on an app template. As of June 20, 2021, you can no longer create apps through the [Projects API](/apidocs-mxsdk/apidocs/projects-api/) or the Developer Portal using app templates created in Desktop Modeler version 7.23.14 or below. Please update your templates to 7.23.15 or above before creating apps based on those templates.

### May 17, 2021

#### Improvements

* We made some minor changes to the look and feel over several pages, buttons, and UI components in line with the recent redesign of Mendix Developer Portal.

#### Fixes

* We fixed an issue where you could not always see the avatars of other users in the same app.
* We fixed an issue where there were styling glitches visible when adding a description to a newly created story.

### May 7, 2021

#### New Features

* It is now possible to create a new app with the [workflows](/refguide9/workflows/) functionality more deeply integrated in the creation flow.

#### Fixes

* We fixed the page title of the Mendix Studio landing page.
* Page links now open in the correct tab.

### March 30, 2021

#### Improvements

* We have released our new [platform navigation](/developerportal/) solution with these main features:
    * The **Switch to** menu on the left side of the top bar provides access to different parts of the Mendix Platform.
    * The top bar contains sub-navigation items (for example, **Company Buzz**).
    * Clicking the **+** button on the right side of the top bar will create a new app from anywhere in the platform.
    * Under your avatar on the right side of the top bar, there is an option to switch off the new navigation, which will be available for a limited amount of time.
* We improved the search experience and added a full page of search results that can be accessed by clicking **View Search Results Page** at the bottom of the search drop-down menu or by pressing <kbd>Enter</kbd> after typing a search query
* We changed the [My Apps](/developerportal/#my-apps) page and moved your favorite apps to the **Pinned** tab. This will become the default tab on this page, making it easy to quickly access the apps you care about the most.
* You asked and we listened: We added new label colors for labels in Stories. There are now 15 different colors to choose from, specifically selected with accessibility in mind.
* We made some big changes to the look and feel of our Developer Portal:
    * We reshuffled the navigation items in the [App Buzz](/developerportal/general/buzz/) to a more logical order, based on our research insights. Now, there are two main sections: **Collaborate** and **Deploy**.
    * We updated the look of various navigation items (**Feedback**, **Planning**, **Team Server**, **General**) to our new design.
    * We removed the grey background with white card content in all pages.
    * We replaced the breadcrumbs in the top left corner of the project navigation with the app name and icon.

#### Fixes

* We fixed an issue where sending feedback from Studio Pro resulted in an error. (Tickets 113634, 115031)

### March 26, 2021

#### Improvements

* We made some small improvements to the **App Templates** page.

### March 15, 2021

#### Fixes

* We fixed a bug where it was not possible to open a version 6 Desktop Modeler from the Developer Portal.

### March 10, 2021

#### Fixes

* We fixed a bug where selecting an IBM or SAP template in the **Create App** flow did not direct you to the right page.

### March 4, 2021

#### Improvements

* We made some minor changes to the look and feel over several pages, most notably the [General Settings](/developerportal/collaborate/general-settings/) page.
* We made some preparations for Git support.
* We improved the sharing of data across the Developer Portal so that it is more stable and secure.

#### Fixes

* We fixed an issue where the **Add image** icon was missing when posting a comment on the [Buzz](/developerportal/general/buzz/). (Ticket 109481)
* We fixed an issue where creating API keys appeared in the audit trail. (Ticket 116182)

### February 25, 2021

#### Improvements

* We optimized the **App Templates** page for a better experience. We also improved the search function on this page.
* There is now better performance for building your app after you select a template.

### February 9, 2021

#### Improvements

* We improved the speed of the **App Templates** page. After you click **Create App**, the templates appear instantly now.

### February 5, 2021

#### Improvements

* It is now possible to add or remove labels in the Story Details page.
* We added a link to your app's [environments](/developerportal/deploy/environments/) in the app tile on [My Apps](/developerportal/#my-apps).

#### Fixes

* We fixed an issue where new Mendix Admins did not get access to environment nodes. (Ticket 114913)

### February 4, 2021

#### New Features

* We released the Mendix [Control Center](/control-center/), which provides governance and control features for Mendix Admins (formerly known as Company Admins).

#### Improvements

* We moved the existing Company Admin features in the Developer Portal to Control Center.

### January 24, 2021

#### Improvements

* You can no longer create new polls on the company or app [Buzz](/developerportal/general/buzz/) page. Existing polls can still be answered.

#### Fixes

* We fixed several minor issues with the [My Apps](/developerportal/#my-apps) page.

### January 15, 2021

#### Improvements

* We redesigned the [My Apps](/developerportal/#my-apps) page.
* You will now see labels when you are editing a story using the new **Stories** UI. We will enable the editing of story labels and label colors in a future release.

#### Fixes

* We fixed an issue where newly-added Company Admins did not get access to edit [user groups](/appstore/overview/#content-groups) in the Marketplace.

## 2020

### December 23, 2020

#### Improvements

* We tweaked the styling of the **Stories** > **Project History** page.
* We made moving a story to another app more intuitive.
* We removed the Model page, which contained tips on how to get started creating your apps.

#### Fixes

* We fixed an issue where replies to Buzz notifications were not properly processed into comments on your [app Buzz](/developerportal/general/buzz/) page. (Ticket 111076)

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

* We fixed a bug where the calendar icon ({{% icon name="calendar" %}}) on date/time input fields was not displayed properly.
* We fixed a bug where the star icon ({{% icon name="star" %}}) on your [favorite apps](/developerportal/#my-apps) was not displayed properly.

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

### November 1, 2018

#### Improvements

* We made improvements in the communication between the Web Modeler and the Developer Portal.

### October 17, 2018

#### Fixes

* We fixed a memory leak problem that caused Developer Portal to have longer response times.
* We addressed and fixed an issue that caused some Developer Portal users to see empty dialog boxes instead of error message content. (Tickets 67626, 69363)

### October 16, 2018

#### Fixes

* It is now possible to go to a Mendix community member's new [Mendix Profile](/community-tools/mendix-profile/) directly from the [Buzz](/developerportal/general/buzz/) and **People** pages. (Ticket 69702)

### October 11, 2018

#### Improvements

* Several UX updates were made to Developer Portal pages:
    * The [My Apps](https://sprintr.home.mendix.com/link/myapps) page has been redesigned, and you can now toggle your app list views.
    * The **App** > **General** page has been redesigned.

### October 1, 2018

#### Web Modeler Improvements

The Web Modeler can now be enabled for all types of apps. You can do this on the **Settings** > **General** page of your app. If you have a licensed app, you will also need to choose your [deployment](/deployment/) environment.

#### Fixes

* For a while, the **Show activity for** filter buttons on the company **Buzz** page were broken and displayed nothing. They now work again.

### September 10, 2018

#### Improvements

* An application created through our APIs now has the Web Modeler enabled if the template on which the app is based is suitable for use in the Web Modeler.

#### Fixes

* We have loosened an unnecessarily strict constraint on email domains during signup. You can now sign up with email domains with single-character sub-domains. (Tickets 68210, 68386)

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
