---
title: "Projects"
url: /developerportal/
description: "Describes the home page of Projects and links to more detailed documents in the guide."
weight: 30
no_list: false
description_list: true
cascade:
  - content_type: "Projects"
  - mendix_version: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## Introduction

[Projects](https://projects.home.mendix.com) is one of the key components of the Mendix Portal. In **Projects**, you can create and manage projects, and navigate to related app environments, as well as collaborate with others. **Projects** provides a summary of your current projects, your company projects, and your pending invites.

{{< figure src="/attachments/developerportal/apps-overview.png" alt="Apps Overview" >}}

## Creating an App {#create-app}

There are two ways to create apps:

* Using Maia to plan and build your app.
* Using a starter app template.

The following sections describe the process for each option.

### Creating an App with Maia

Follow the steps in [Maia Plan](/developerportal/maia-plan/) to enlist Maia's help in planning and creating an app.

### Creating an App from a Starter App Template

Follow these steps to use a starter app:

1. In **Projects**, click **Create App** in the upper right corner. 

2. Select **Use a Starter App**. A screen opens to guide you through the process.

3. Enter the following information for your app:

    * **App name** – Every app must have a name that abides by these requirements:

        * It cannot be longer than 200 characters, but Mendix recommends no more than 40 characters. 
        * It can contain letters, numbers, underscores (`_`), dashes (`-`), or white spaces ().
        * It must not start with a white space.

    * **App description (Optional)** – Give your app a short description. This is optional.
    
    * **App icon** – Mendix has generated an icon for your app. You can change the color of the icon if you like. You can upload a custom icon in the [App Settings](/developerportal/general-settings/#general) page once you have created the app.

4. Click **Next** to go to step 2.

5. Select a starter app template on which the app will be based. The most used starter app templates are displayed.    

    Some templates offer multiple versions for you to choose from, which are displayed as selectable options. By default, the stable version is pre-selected.    
    
    If you want to choose a different starter app template than the ones displayed, click the **discover community starter apps** link at the top. This takes you to the Marketplace, where you can browse through all available starter app templates and select one that suits your needs.
    
6. After selecting a starter app template, click **Create App**. Based on the starter app template you selected, it can take some time to set up the app, its repository, and access to the collaboration tools. After it is completed, the app is created.

## My Projects {#my-projects}

The **My Projects** tab displays all the projects for which you are a [Team](/developerportal/general/team/) member.

You can filter the overview to display only the projects that are marked for deletion. Read more about how we mark projects for deletion in the [Deletion of Unused Projects](/developerportal/deploy/mendix-cloud-deploy/#projects-deletion) section of *Mendix Cloud*.

Use the drop-down menu on the right side of the page to sort the projects by **Pinned**, **Recent Activity** or in alphabetical order of **Name**.

You can filter by the assigned **Project Categories** by clicking the **Filter** ({{% icon name="filter" %}}) button on the right side. The available categories are displayed in a side panel.     
Categories are maintained by the [Mendix Admins](/control-center/mendix-admins-page/) of your company, on the [Project Categories](/control-center/project-categories/) page in Control Center.     
If you have the **App Settings** permission, you can assign categories to a project on the project's [Settings](/developerportal/general-settings/) page, helping to improve classification and searchability.

{{< figure src="/attachments/developerportal/general/apps/myapps-filter.png" >}}

### Project Tiles {#project-tiles}

You can pin a project tile by clicking **Pin** ({{% icon name="pin" %}}). Pinned projects appear at the top of the list.

To stop watching a project and disable notifications for that project, click the {{% icon name="view" %}} icon so that you see the **You are not watching this project** tooltip. To return to watching that project, click the {{% icon name="view-off" %}} icon so that you see the **You are watching this project** tooltip.

By clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in the project tile, you can quickly perform the actions **Edit in Mendix Studio Pro** and **Leave Project**.

To go to the [licensed environments](/developerportal/deploy/environments/) of your deployed project, click **Environments** at the bottom of the project tile.

### Navigation Pane {#navigation-pane}

You can open a project in [Projects](https://projects.home.mendix.com/) by clicking the project tile. After a project is open, you can navigate between sections using the navigation pane on the left side of the screen. 

The navigation pane is divided into these main categories:

* [General](/developerportal/general/)
* [Project Management](/developerportal/project-management/)
* [App Insights](/developerportal/app-insights/)
* [Repository](/developerportal/repository/)
* [Deployment](/developerportal/deploy/general/)
* [Monitoring](/developerportal/monitoring/)

{{% alert color="info" %}}
The features in the navigation pane can also be accessed via APIs, enabling third-party developers to integrate their own widgets and plugins. For more information, see [API Documentation](/apidocs-mxsdk/apidocs/).
{{% /alert %}}

### Pending Invitations {#pending-invitations}

If you are invited to collaborate on a project, your invitation is displayed at the top of the **My Projects** page. You can accept or decline the invitation.

{{% alert color="info" %}}
You get an invitation only when someone invites you to a project from a different company. If someone invites you to a project from your company, you will be added automatically.
{{% /alert %}}

## Company Projects {#my-company-projects}

The **Company Projects** tab displays all the projects created by members of your [company](/control-center/company-settings/).

There are also details on the project's [Target Cloud](/deployment/), and the [Total Members](/control-center/members/) who can view or edit the project.

You can also sort the order of the projects here by **Recent Activity**, **Created Date**, **Name**.

## Guide Categories

The documentation of **Projects** is divided into the following categories:
