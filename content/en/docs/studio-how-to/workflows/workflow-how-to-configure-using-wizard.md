---
title: "Configure a Workflow Using the Wizard in Studio"
url: /studio-how-to/workflow-how-to-configure-using-wizard/
linktitle: "Configure a Workflow Using the Wizard"
category: "Workflows"
description: "Describes how to configure a workflow using the wizard in Mendix Studio."
weight: 10
tags: ["studio", "workflow", "how to", "task", "onboarding"]
---

## 1 Introduction 

{{% alert type="note" %}}
Workflows are available in Studio from **Mendix version 9.12.1**. If you have an app with workflows functionality below this version, this app is likely to be created in Studio Pro and requires a manual migration. For more information on how to migrate your app using Studio Pro, see [Migrate Workflow Apps](/refguide/workflow-beta-migration/). 
{{% /alert %}}

The workflow wizard helps you create the Approval Request workflow. If your workflow falls under the approval request use case, for example, approving vacation days for your employees, this is a good starting point that sets the whole app automatically for you – not only the workflow itself but also pages and navigation.

This how-to will teach you how to do the following:

* Enabling workflows
* Creating a workflow using the workflow wizard
* Testing the workflow

If your use case does not fall under an approval request, then you might want to set your workflow manually instead of using the wizard. For more information on configuring the workflow manually, see [How to Configure a Workflow Manually in Studio](/studio-how-to/workflow-how-to-configure/).

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with workflow terms. For more information, see [Workflows](/refguide/workflows/). 
* Make sure your app has Mendix version 9.12.1 (you can look up your app version by clicking **More options** (three dots) icon > **About Studio**)

## 3 Creating a Workflow Using the Wizard {#wizard}

To create the workflow for the travel approval request via the wizard, do the following:

1. First, you need to enable workflows for your app. Click the workflow icon in the left menu bar.

2. Before enabling workflows, you need to enable security. Click **Enable Security**:

    {{< figure src="/attachments/studio-how-to/workflows/workflow-how-to-configure-using-wizard/enable-security.png" alt="Enable Security" >}}

3. After security is enabled, click **Enable Workflows**.

4. In the **Workflows Enabled** pop-up menu, click **Create Workflow**:

    {{< figure src="/attachments/studio-how-to/workflows/workflow-how-to-configure-using-wizard/create-workflow.png" alt="Create Workflow" >}}

5. In the **Create Workflow** dialog box, set the **Title** to **Travel Approval** and click the **Start Wizard** button:

    {{< figure src="/attachments/studio-how-to/workflows/workflow-how-to-configure-using-wizard/start-wizard.png" alt="Creating a Workflow with the Wizard" >}}

6. In the **Create Request Form**, you can define input fields that will be used by a person submitting the request. An employee will fill in their name, date, destination, cost, and a travel document (an attached file). Do the following:

    1. Fill in *Name* in the **Label** option, leave the **Type** as string, and mark this field as required. On the right you can see the preview of the future form.

    2. Click the plus icon to add more fields. 

    3. Follow steps 4a and 4b to add the *Date* of type Date and Time, *Destination* of type String, *Cost* of type Decimal. 

    4. Follow step 4a to add the *Document* of type File (this type cannot be marked as **Required**).

        {{< figure src="/attachments/studio-how-to/workflows/workflow-how-to-configure-using-wizard/request-form-fields.png" alt="Filled-In Fields for the Request Form" >}}

    5. Click the **Create** button.

10. Based on this form the app is set up: labels that you filled in are turned into attributes of an entity used by the workflows, workflow and pages are created, security is set up. Click **Take the tour** to get more information about your app.

Congratulations! The app with the workflow is set up and fully functional. 

## 4 Testing the Workflow {#test-workflow-from-wizard}

Now you can test your workflow in the **Preview** from the perspective of different roles. 

For example, users who have tasks assigned to them (Approvers) will see their task inbox and dashboards pages where they can manage and monitor tasks assigned to them:

{{< figure src="/attachments/studio-how-to/workflows/workflow-how-to-configure-using-wizard/task-inbox.png" alt="Task Inbox" >}}

The Administrator role has access to the Workflow Dashboard and the Workflow Management and can monitor all workflows, can view the progress of workflows, and change the workflow settings.


To test your workflow, you need to switch between different user roles. Follow the steps below:

1. Click the **Preview** button. (For more information on how to preview your app, see [Previewing & Publishing Your App](/studio/publishing-app/).)

2. Click the user icon on the right and select a user role:

    {{< figure src="/attachments/studio-how-to/workflows/workflow-how-to-configure-using-wizard/user-roles.png" alt="Demo User Role"  width="350" >}}

3. You can switch between different demo user roles to test the use case. You can do the following:
    1. Select the demo_user user role and submit a travel approval request: fill in the request fields on the **Submit Travel Approval Request Overview** page and click **Submit**:
        {{< figure src="/attachments/studio-how-to/workflows/workflow-how-to-configure-using-wizard/submit-request.png" alt="Submit Travel Request" >}}
    2. Switch to the demo_approver role, make sure a new task is in the inbox, assign the task to you, open the task, and approve the request.
    3. Switch to the demo_administrator and open the Admin Center from the navigation bar. Then open the Workflow Dashboard to see information about all workflow instances.
    
    Great job! You have previewed your app locally and tested your workflow from the perspective of different users. You can share the app with other users to try it out in real life or extend functionality in your app. 

## 5 Read More

* [Workflows](/studio/workflows/)
* [How to Configure a Workflow in Studio Manually](/studio-how-to/workflow-how-to-configure/)
* [How to Configure a Navigation Bar](/studio-how-to/navigation-how-to-configure/) 
* [How to Set Fields as Read-Only or Required](/studio-how-to/pages-how-to-set-validation-and-editability/)
