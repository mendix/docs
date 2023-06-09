---
title: "Project Management"
url: /developerportal/project-management/
category: "Project Management"
weight: 7
description: "Describes the Project Management section of the Developer Portal."
tags: ["Epics", "Sprint", "Stories", "Project Management", "Developer Portal"]

---

{{% todo %}}Make sure the URL is logic, and the redirect works if the URL needs to be changed.{{% /todo %}}

## 1 Introduction

The Epics tool enables your team members to collaborate efficiently during the app development process. It supports the Scrum workflow and Kanban workflow. 

{{% alert color="warning" %}}As of the GA release on December 1st, 2022, Epics is the default project management tool for all new apps. </br>You can still use [Stories](/developerportal/collaborate/stories/) in addition to Epics. However, Mendix recommends only using one tool at a time in an app, as using both will make data migration more difficult later.{{% /alert %}}

### 1.1 Getting Your Team Access to an App in Epics

Only a Scrum Master can give the team access to an app in Epics. To do so, the Scrum Master must open the app in the [Developer Portal](https://sprintr.home.mendix.com/link/myapps), go to the [Project Management](/developerportal/collaborate/general-settings/#project-management) tab on the **General Settings** page, and click **Switch to Epics**:

{{< figure src="/attachments/developerportal/collaborate/epics/project-management.png" width="600px" >}}

This gives everyone in the team access to this app in Epics. To give the team access to another app in Epics, the Scrum Master must repeat this procedure.

### 1.2 Opening an App in Epics

Once you have access to an app in Epics, open it in the [Developer Portal](https://sprintr.home.mendix.com/link/myapps) and then go to the [Stories](/developerportal/collaborate/stories/) page. There is a notification at the top of the page where you can click **Check it Out** to open the app in Epics:

{{< figure src="/attachments/developerportal/collaborate/epics/epics-check-it-out.png" >}}

After you open the app in Epics, you can easily switch to other apps that you have access to. To do so, click the name of the current app on the upper-left corner, and then select a different app from the drop-down list.

### 1.3 Pages in Epics

Epics has the following pages: **Board**, **Planning**, **Epics**, and **Archive**. The **Board** page and **Planning** page look different, depending on if you are working in the Scrum workflow or Kanban workflow. All the pages are described in the sections below.
