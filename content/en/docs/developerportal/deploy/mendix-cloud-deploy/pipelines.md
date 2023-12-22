---
title: "Pipelines (Beta)"
url: /developerportal/deploy/pipelines/
weight: 33
description: "Describes how to set up pipelines in the Developer Portal"
tags: ["Deploy","App","Developer Portal", "CI/CD"]
status: "Public Beta"
temp notes: "add tooltips and icons, more context around Variables, confirm name for the pipeline's Details page"
---

{{% alert color="warning" %}}The Pipelines Portal is currently in beta. This means it should not be used for production applications, it is not covered by any SLA, it may introduce breaking changes, and it is subject to change in future releases. For more information, see [Beta and Preview Releases](/releasenotes/beta-features/).{{% /alert %}}

## 1 Introduction

From the **Pipelines** page, you can set up automated deployment pipelines for your app. Once you have designed and activated a pipeline, you can use it for automated, zero-click deployments that run according to the trigger that you have associated with it.

To access the **Pipelines** page, open your app in the Developer Portal. Then select **Pipelines** in the navigation pane.

{{% alert color="info" %}}
You must have **(---)** permissions to view and edit pipelines. For details on configuring these permissions, see [Node Permissions](/developerportal/deploy/node-permissions/).
{{% /alert %}}

## 2 Navigation

The **Pipelines** page has four tabs: **Runs**, **Designs**, **Variables**, and **Settings**.

### 2.1 The Runs Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/runs-tab.png" alt="" >}}

By adjusting the **View** ({{% icon name="view" %}}) settings, you can display or hide the following columns:

* Status
* Run ID
* Branch
* Pipeline Name
* Triggered by
* Last Run
* Duration
* Trigger
* Revision

The search and filter options allow you to review specific run types. You can do the following:

* Search by run ID, branch, or pipeline name
* Filter by trigger: All triggers, on commit, scheduled, manual
* Filter by who the run was triggered by
* Filter by status: All statuses, succeeded, in progress, or failed

There is also a **Run Manual Pipeline** button and a **Design a Pipeline** button.

If you click **Run Manual Pipeline**, this launches a dialog box that lets you select a pipeline, a branch, variables, and value before running the specified pipeline. 

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/run-manual.png" alt="" width=60% >}}

For information about the **Design a Pipeline** button, see [Designing or Editing a Pipeline](#design-edit-pipeline), below.

Click a run (or its **Details** icon ({{% icon name="paper-clipboard" %}})) to see the details of the run. Click **Run** ({{% icon name="pipeline-run" %}}) to run it again.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/run-details.png" alt="" >}}

### 2.2 The Designs Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/designs-tab.png" alt="" >}}

On the **Designs** tab, you can see all existing pipeline designs.

By adjusting the **View** ({{% icon name="view" %}}) settings, you can display or hide the following columns:

* Pipeline Name
* Trigger
* Branch
* Last Modified by
* Last Modified Date/Time
* Created by
* Created Date/Time
* Status

Click a pipeline (or its **Details** icon ({{% icon name="paper-clipboard" %}})) to see the pipeline's **Details** page. You can also edit the pipeline details, as described in [Designing or Editing a Pipeline](#design-edit-pipeline), below.

Click **Delete** ({{% icon name="trash-can" %}}) to delete a pipeline design.

Click **Activity Log** to open the activity log, which matches the activity log shown on the **Environments** page.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/activity-log.png" alt="" width=60% >}}

### 2.3 The Variables Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/variables-tab.png" alt="" width=75% >}}

The **Variables** tab lets you create variables.

You can use the drop-down menu to filter to specific variable types.

Click **Create New Key** to create a new key, or double-click an existing key (or click **More Options** ({{% icon name="three-dots-menu-horizontal-small" %}}) > **Edit**) to launch the **Edit Key** dialog box.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/edit-key.png" alt="" width=60% >}}

To use a variable in the pipeline design, type `$` and select your desired variable. Note that these are in addition to the built-in, Mendix-defined variables.

### 2.4 The Settings Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/settings-tab.png" alt="" >}}

The **Settings** tab lets you configure pipeline run users.

On a user, click **Configure** ({{% icon name="cog" %}}) to launch the **Add New Run User** dialog box. You can choose **Another User** and specify that user's details, or you can choose **Me**. Click **Delete** ({{% icon name="trash-can" %}}) to remove a user.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/add-new-run-user.png" alt="" width=60% >}}

## 3 Designing or Editing a Pipeline{#design-edit-pipeline}

To design a new pipeline, click **Design a Pipeline** from either the **Runs** or **Designs** tab. That launches the **Design a Pipeline** dialog box. You can choose if you want to start from a pipeline template or an empty pipeline.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/design-pipeline.png" width=60% alt="" >}}

Give your pipeline a name, and click **Next** to go to your new pipeline's **Details** page.

From there, you can customize your pipeline. If you choose to work from an empty pipeline, you will start by adding steps. Or, if you work from the template, you will start with a pipeline that is pre-populated with the following basic steps:

1. Start Pipeline
1. Build
1. Publish
1. Stop Environment
1. Create Backup
1. Deploy

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/pipeline-design.png" alt="" >}}

You then have a variety of customization options:

* Click **More Options** ({{% icon name="paper-clipboard" %}}) to edit the pipeline name, duplicate it, or delete it.
* Expand a step to customize or delete it
* Use the drag handle, which appears when you hover over a step, to rearrange steps
* Add a step by clicking **Add** ({{% icon name="add" %}}), which launches the **Pipeline Steps** dialog box:

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/pipeline-steps.png" alt="" >}}

The steps are sorted into categories based on their function:

* Build
* Release
* Code quality
* Security
* Communication
* Developer tools
* Marketplace

You can also search for a step by name, and filter to see only platform-supported, community-supported, or partner-supported steps.

When you are finished customizing your pipeline, click **Save**. Or, to immediately start using it, click **Save & Activate**.

The first time you activate a pipeline, you will be prompted to set up a personal access token (PAT) in the **Settings** tab if yo have not already set one up. This is required for a successful pipeline run.

## 4 Limitations

(ANY WORTH NOTING?)

## 5 Read More

* [Implement a Simple CI/CD Pipeline with Mendix APIs](/howto/integration/implement-cicd-pipeline/)
