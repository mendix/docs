---
title: "Configure a Workflow in Studio Using the Wizard"
url: /studio-how-to/workflow-how-to-configure-using-wizard/
category: "Workflows"
description: "Describes how to configure a workflow using the wizard in Mendix Studio."
weight: 10
tags: ["studio", "workflow", "how to", "task", "onboarding"]
---

## 1 Introduction 

Workflow is a visual language in Mendix Studio and Mendix Studio Pro that allows you to build extendable processes. It is fully integrated with other visual languages, such as microflow editor and page editor. 

{{% alert type="note" %}}
Workflows are available in Studio from **Mendix version 9.12.1**. If you have an app with workflows functionality below this version, this app is likely to be created in Studio Pro and requires a manual migration. For more information on how to migrate your app using Studio Pro, see [Migrate Workflow Apps](/refguide/workflow-beta-migration/). 
{{% /alert %}}

The workflow wizard helps you create the Approval Request workflow. If your workflow falls under the approval request use case, for example, approving vacation days for your employees, this is a good starting point that sets the whole app automatically for you – not only the workflow itself but also pages and navigation.

If your use case does not fall under an approval request, then you might want to set your workflow manually instead of using the wizard. For more information on configuring the workflow manually, see [How to Configure a Workflow Manually in Studio]()

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Familiarize yourself with workflow terms. For more information, see [Workflows](/refguide/workflows/). 
* Make sure your app has Mendix version 9.12.1
* Make sure your app is based on the Blank app template 

## 3 Enabling Workflows {#enable-workflows}

First, you need to enable workflows for your app. Do the following:

1. Click the workflow icon in the left menu bar.

2. Before enabling workflows, you need to enable security. Click **Enable Security**:

    {{< figure src="/attachments/studio-how-to/workflow-how-to-configure/enable-security.png" alt="Enable Security" >}}

3. After security is enabled, click **Enable Workflows**.

4. In the **Workflows Enabled** pop-up menu, click **Create Workflow**:

    {{< figure src="/attachments/studio-how-to/workflow-how-to-configure/create-workflow.png" alt="Create Workflow" >}}

5. In the **Create Workflow** dialog box, set the **Title** to **Employee_Onboarding** and click the **Start Wizard** button:

    {{< figure src="/attachments/studio-how-to/workflow-how-to-configure/set-up-manually.jpg" alt="Set Up Workflow Manually" >}}

## 4 Creating a Workflow Using the Wizard {#wizard}

To create the workflow for the travel approval request via the wizard, do the following:

1. Click the workflow icon in the left menu bar.

2. Select the module you would like to add a new workflow to and click the plus icon next to this module:

    {{< figure src="/attachments/studio/workflows/new-workflow.jpg" alt="New Workflow" >}}
    
    For more information on what modules are, see [Domain Model](/studio/domain-models/).
    
3. In the **Create Workflow** dialog box, set the workflow title to **Travel approoval** and click **Start Wizard**.

4. In the **Create Request Form**, you can define input fields that will be used by a person submitting the request. For example, an employee will fill in their name, Date, Destination, Cost, and a Document as attached file. Do the following:
    1. Fill in *Employee name* in the **Label** option, leave the **Type** as string, and mark this field as required. On the right you can see the preview of the future form.
    
        {{< figure src="/attachments/studio/workflows/create-request-form.jpg" alt="Create Request Form Example" >}}
    
    2. Click the plus icon to add more fields. 
    
    3. Follow steps 4a and 4b to add the *Date* of type Date and Time, *Destination* of type String, *Cost* of type Decimal and *Document* as type File.
    
    4. Click the **Create** button.
    
5. Based on this form the app is set up: labels that you filled in are turned into attributes of an entity used by the workflows, workflow and pages are created, security is set up. Click **Take the tour** to get more information about your app.

The app with the workflow is set up an fully functional. 

## 5 Testing the Workflow {#test-workflow-from-wizard}

Now you can test your workflow in the Preview from the perspective of different user roles. 

For example, users who have tasks assigned to them (Approver) will see their task inbox and dashboards pages where they can manage and monitor tasks assigned to them:

{{< figure src="/attachments/studio-how-to/workflow-how-to-configure/task-inbox.png" alt="Task Inbox" >}}

The Administrator role has access to the Workflow Admin Center and can monitor all workflows, can view the progress of workflows, and change the workflow settings.


To test your workflow, you need to switch between different user roles. Follow the steps below:

1. Click  the **Preview** button. (For more information on how to preview your app, see [Previewing & Publishing Your App](/studio/publishing-app/).)

2. Click the user icon on the right and select a user role:

    {{< figure src="/attachments/studio-how-to/workflow-how-to-configure/user-roles.png" alt="Demo User Role" >}}

3. You can switch between different demo user roles to test the use case. Do can do the following:
    1. Select the demo_user user role and submit a travel approval request: fill in the request fields on the **Submit Travel approval request** page, and then click **Submit**:
        {{< figure src="/attachments/studio-how-to/workflow-how-to-configure/demo_hr.png" alt="Start Onboarding Button" >}}
    2. Switch to the Approver user role, see a new task in the inbox, assign the task to you, open the task, and approve the request.
    3. Switch to the Administrator user role and open the Admin center option from the navigation bar. Open the Workflow Dashboard to see information about all workflow instances.

## 6 Read More

* [Workflows](/studio/workflows/)
* [How to Configure a Navigation Bar](/studio-how-to/navigation-how-to-configure/) 
* [How to Set Fields as Read-Only or Required](/studio-how-to/pages-how-to-set-validation-and-editability/)
