---
title: "On-Premises Customers: Prepare Your Project for the New Support Portal"
category: "Mendix Support"
#parent: ""
#description: ""
#tags: []
---

## 1 Introduction
In July 2016 Mendix released a new Support Portal. Using the Support Portal customers can select an affected app for a submitted request. The apps that can be selected will be based on the project authorization of that user (regardless of their organization). All users that have a role that has the authorization *Edit permissions on Deploy or Capture* will be able to submit and view tickets for the app that is connected to that project.

The Support Portal needs to know the project identification for on-premises apps so it can show the correct apps. Therefore, we are asking all on-premises customers to provide us with the ProjectID of their projects. Please invite all team members that you want to be able to submit tickets and provide them with the specified role, then email the project information to Mendix Support.

The steps in this how-to should be done for every new app that is created if you want to be able to submit ticket requests in the Support Portal. We recommend setting this up as a standard process when creating a new application.

**This how-to will teach you how to do the following:**

*   How to configure project authorization to select affected application(s) in new Customer Support tool

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

*   Have a Mendix project ready

## 3 Give Team Members Access To Submit Tickets
There are two ways to give team members access to submit tickets: by assigning the correct role to a user when adding them as team members to a project or by changing the role of existing project members.

### 3.1 Give New Project Members Access
To add users to the project and give them access to submit tickets for a specific app, follow these steps:

1.  Go to the **Overview** screen of your app.
2.  Invite the users that should be able to submit/view tickets concerning this project to the project.
3.  Assign one of the following roles to users you want to give access to creating tickets for the app:
    * Business Engineer
    * Product Owner
    * SCRUM Master

    > Team members who can access the Develop or Capture tabs can submit tickets for the app.

4.  To finalize the setup send an email to [support@mendix.com](http://support.mendix.com/) with the Project Name, ProjectID and the name of the applicable app.

        > The ProjectID can be found on the General Settings tab in the Project Settings.

### 3.2 Give Existing Project Members Access
To give existing project members access to submit tickets, follow these steps:

1.  Open your app in the **Developer Portal**.
2.  Go to **Settings**.
3.  Go to the **Project Security** tab.
4.  Change the role for the user that needs access to submit tickets to on of the following:
    * Business Engineer
    * Product Owner
    * SCRUM Master

    > You can customize and create your own roles on the *Role settings* page.

5.  To finalize the setup send an email to [support@mendix.com](http://support.mendix.com/) with the Project Name, ProjectID and the name of the applicable app.

## 4 Related Content

*   [How to Change the Affected Apps for Which You Can Submit Requests](how-to-change-the-affected-apps-for-which-you-can-submit-requests)
