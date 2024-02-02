---
title: "Pipelines (Beta)"
url: /developerportal/deploy/pipelines/
weight: 33
description: "Describes how to set up pipelines in the Developer Portal"
tags: ["Deploy","App","Developer Portal", "CI/CD"]
status: "Public Beta"
---

{{% alert color="warning" %}}The Pipelines feature is in [Public Beta](/releasenotes/beta-features/). It is currently available for unlimited use with all licensed Mendix Cloud apps. Limitations may be put on use in the future.{{% /alert %}}

## 1 Introduction

From the **Pipelines** page, you can set up automated deployment pipelines for your app. Once you have designed and activated a pipeline, you can use it for automated, zero-click deployments that run according to the trigger that you have associated with it.

To access the **Pipelines** page, open your app in the Developer Portal. Then select **Pipelines** in the navigation pane.

{{% alert color="info" %}}
To view the **Pipelines** page, you must have a role with cloud access. For details on configuring roles, see [Team](/developerportal/general/team/).
{{% /alert %}}

## 2 Designing or Editing a Pipeline{#design-edit-pipeline}

To design a new pipeline, click **Design a Pipeline**. That launches the **Design a Pipeline** dialog box. You can choose if you want to start from a pipeline template or an empty pipeline.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/design-pipeline.png" width=60% alt="" >}}

Give your pipeline a name, and click **Next** to go to your new pipeline's **Results** page.

From there, you can customize your pipeline. If you choose to work from an empty pipeline, you will start by adding steps. Or, if you work from the template, you will start with a pipeline that is pre-populated with the following basic steps:

1. Start Pipeline —  This is a mandatory step for each pipeline. In this step, you define the conditions on which the pipeline should start; you can set the pipeline to run on commit or according to a weekly schedule.
1. Checkout — This is a mandatory step for each pipeline. In this step, you select a branch to check out.
1. Build — Build a deployment package
1. Publish — Publish generated deployment package to a repository
1. Stop Environment — Stop a selected environment
1. Create Backup — Create and store a backup of an existing environment before deploying a new deployment package
1. Deploy — Deploy to selected target environment

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/pipeline-design.png" alt="" >}}

You then have a variety of customization options:

* Click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) to edit the pipeline name, duplicate the pipeline, or delete it.
* Expand a step to configure or delete the step.
* Add a step by clicking **Add** ({{% icon name="add" %}}), which launches the **Pipeline Steps** dialog box:

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/pipeline-steps.png" alt="" class="image-border" >}}

The steps are sorted into categories based on their function:

* Build
* Release

Note that some steps depend on the outputs of other steps. Therefore, you must add Start Pipeline before Checkout, Checkout before Publish, Publish before Deploy, and Deploy before Build.

When you are finished customizing your pipeline, click **Save**. Or, to immediately start using it, click **Save & Activate**.

The first time you activate a pipeline, you will be prompted to set up a personal access token and API key in the **Settings** tab if you have not already set these up. This is required for a successful pipeline run.

## 3 Navigation

The **Pipelines** page has three tabs: **Runs**, **Designs**, and **Settings**. You can see all three tabs as soon as you design and save your first pipeline.

### 3.1 The Runs Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/runs-tab.png" alt="" class="image-border" >}}

For each run, you can view the following information:

* Status
* Run ID
* Branch
* Pipeline Name
* Triggered by
* Last Run
* Duration
* Trigger

The search and filter options allow you to review specific run types. You can do the following:

* Search by run ID, branch, or pipeline name
* Filter by trigger: All triggers, on commit, scheduled, manual
* Filter by status: All statuses, succeeded, in progress, or failed

To see the details of particular run, click **Results** ({{% icon name="paper-clipboard" %}}).

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/run-details.png" alt="" >}}

From this page, you can view an overview of the run and expand each executed step to see its log. You can also download the logs.

### 3.2 The Designs Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/designs-tab.png" alt="" class="image-border" >}}

On the **Designs** tab, you can see all existing pipeline designs.

For each design, you can view the following information:

* Pipeline Name
* Trigger
* Branch
* Last Modified by
* Last Modified Date/Time
* Status

Click **Details** ({{% icon name="paper-clipboard" %}}) on a pipeline to go to its **Details** page. From there, you can view and edit the pipeline details, as described in [Designing or Editing a Pipeline](#design-edit-pipeline), above.

Click **Delete** ({{% icon name="trash-can" %}}) to delete a pipeline design.

### 3.3 The Settings Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/settings-tab.png" alt="" class="image-border" >}}

The **Settings** tab lets you configure pipeline run users.

Click **Setup** to launch the **Setup** dialog box. Then, enter your email, personal access token, and API key. You must set this up before you can run your first pipeline, but the settings configured here will apply to all future pipeline runs.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/user-setup.png" alt="" width=60% class="image-border" >}}

## 4 Limitations

(ANY WORTH NOTING?)

## 5 Read More

* [Implement a Simple CI/CD Pipeline with Mendix APIs](/howto/integration/implement-cicd-pipeline/)
