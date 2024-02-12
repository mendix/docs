---
title: "Pipelines (Beta)"
url: /developerportal/deploy/pipelines/
weight: 33
description: "Describes how to set up pipelines in the Developer Portal"
tags: ["Deploy","App","Developer Portal", "CI/CD"]
status: "Public Beta"
---

{{% alert color="warning" %}}The Pipelines feature is in [public beta](/releasenotes/beta-features/). It is currently available for unlimited use with all licensed Mendix Cloud apps. Limitations may be put on its use in the future.{{% /alert %}}

## 1 Introduction

From the **Pipelines** page, you can set up automated build and deployment pipelines for your app. Once you have designed and activated a pipeline, you can use it for automated, zero-click builds and deployments. Each pipeline runs automatically according to the trigger conditions defined in your [Start Pipeline step](#pipeline-steps).

To access the **Pipelines** page, open your app in the Developer Portal. Then select **Pipelines** in the navigation pane.

{{% alert color="info" %}}
To view the **Pipelines** page, you must have a role with cloud access. For details on configuring roles, see [Team](/developerportal/general/team/).
{{% /alert %}}

## 2 Designing or Editing a Pipeline{#design-edit-pipeline}

### 2.1 Getting Started

To design a new pipeline, click **Design a Pipeline**. That launches the **Design a Pipeline** dialog box. You can choose to start from a template pipeline or an empty pipeline.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/design-pipeline.png" width=60% alt="" >}}


The template pipeline is pre-populated with the following basic steps:

1. Start Pipeline
1. Checkout
1. Build
1. Publish
1. Deploy

{{% alert color="info" %}}
If you start from the template, you can still add, remove, and configure steps to match your needs; it is just intended to help you get started quickly.
{{% /alert %}}

Give your pipeline a name, and click **Next** to go to your new pipeline's **Details** page.

### 2.2 Customizing Your Pipeline

From your pipeline's **Details** page, you can add, remove, and configure the steps in your pipeline.

#### 2.2.1 Pipeline Steps{#pipeline-steps}

Your pipeline can include the following steps:

* Start Pipeline – This is a mandatory step for each pipeline; you cannot delete this step. This step defines the conditions that will automatically trigger the pipeline to run. To configure this step, define the conditions on which the pipeline should start; you can set the pipeline to run in response to Teamserver pushes or according to a recurring weekly schedule (in UTC).
* Checkout – Check out a branch.
* Build – Build a deployment package based on the latest major, minor, or patch version of the branch you checked out. The highest version is incremented based on the increment settings specified in this step.
* Publish – Publish the newly built deployment package to a repository.
* Stop Environment – Stop a selected environment.
* Create Backup – Create and store a backup of an existing environment before deploying a new deployment package.
* Deploy – Deploy to a selected environment.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/pipeline-design.png" alt="" >}}

#### 2.2.2 Pipeline Customization

Once you have added some steps, you have several customization options:

* Click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) to edit the pipeline name, duplicate the pipeline, or delete it.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/more-options.png" alt="" class="image-border" max-width=70% >}}

* Expand a step to configure it, delete it, or view its outputs.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/expanded-build.png" alt="" class="image-border" max-width=70% >}}

* Add another step by clicking **Add Step** ({{% icon name="add" %}}), which launches the **Pipeline Steps** dialog box.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/pipeline-steps.png" alt="" class="image-border" >}}

The steps are sorted into categories based on their function:

* Build
* Release

{{% alert color="info" %}}
Some steps depend on the outputs of other steps. Therefore, you must add Start Pipeline before Checkout, Checkout before Publish, Publish before Deploy, and Deploy before Build. These pipeline steps use Mendix-defined variables to reference the outputs of previous steps. These variables are indicated with a `$` sign and generally use the format `$StepName.OutputName`. For example, Publish uses the output of Build as `$Build.DeploymentPackage`. Similarly, Deploy uses `$Publish.DeploymentPackage` to deploy to the selected environment.
{{% /alert %}}

### 2.3 Saving Your Pipeline

When you are finished customizing your pipeline, click **Save**. Or, to immediately start using it, click **Save & Activate**.

{{% alert color="info" %}}
The first time you activate a pipeline, you will be prompted to add a personal access token and API key in the [**Settings** tab](#settings-tab) if you have not already set these up. This is required for a successful pipeline run.
{{% /alert %}}

### 2.4 Running Your Pipeline

Once activated, your pipeline will automatically run according to the trigger defined in the [Start Pipeline step](#pipeline-steps).

Before you run your first pipeline, configure your user settings by adding your API key and PAT in the [**Settings** tab](#settings-tab). This allows your existing permissions to be used to run the pipeline.

{{% alert color="warning" %}}
Your pipeline runs will fail if you do not have these user settings configured.
{{% /alert %}}

For example, if the trigger in your Start Pipeline step is set to **Teamserver push (Git)**, then the pipeline will run whenever someone pushes to the specified branch. However, if that user has not configured their user settings yet, then the pipeline run will fail. Or, if the user has configured their user settings but does not have sufficient [permissions](/developerportal/deploy/node-permissions/) for all the steps in the pipeline, then the pipeline will stop running once it reaches the step where the permissions are lacking.

If the pipeline fails, the user who triggered the pipeline is notified via email or the **Notifications** ({{% icon name="alarm-bell" %}}) menu in the Developer Portal, as configured in the user's [notification settings](/community-tools/mendix-profile/#notifications).

{{% alert color="warning" %}}
Pipeline failure notifications are only sent if the user who triggered the pipeline has previously saved a pipeline or added their API key and PAT in the **Settings** tab.
{{% /alert %}}

## 3 Navigation

The **Pipelines** page has three tabs: **Runs**, **Designs**, and **Settings**. You can see all three tabs as soon as your app has its first pipeline saved.

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

To see the results of a particular run, click **Results** ({{% icon name="paper-clipboard" %}}).

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/run-details.png" alt="" >}}

From this page, you can view an overview of the run and expand each executed step to see its log. You can also download the logs.

If the pipeline failed, you will see that status indicated alongside the reason for failure.

There are two types of errors:

* Step-level errors occur when a step in the pipeline fails, either because the step itself failed or because the user had insufficient rights to run a step. For example, if you have the [permissions](/developerportal/deploy/node-permissions/) to back up a production environment but not to deploy to production, then the pipeline will run until it reaches the step where your permissions are insufficient.
* System-level errors occur when the pipeline does not run. This happens if there are internal system errors or if user settings have not been configured. 

You can click **See more details** to view more information about a run failure. 

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

Click **Details** ({{% icon name="paper-clipboard" %}}) on a pipeline design to go to its **Details** page. From there, you can view and edit the pipeline details, as described in [Designing or Editing a Pipeline](#design-edit-pipeline), above.

Click **Delete** ({{% icon name="trash-can" %}}) to delete a pipeline design.

### 3.3 The Settings Tab{#settings-tab}

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/settings-tab.png" alt="" class="image-border" >}}

The **Settings** tab lets you configure pipeline run users.

Click **Setup** to launch the **Setup** dialog box. Then, enter your email, personal access token (PAT), and API key. You must set this up before you can run your first pipeline, but the settings configured here will apply to all future pipeline runs across all of your apps.

The PAT scope is `mx:modelrepository:write`, `mx:webhook:read`, `mx:webhook:write`, and `mx:deployment:write`. Without the right scope, the pipeline runs may fail.

For security reasons, the API key and PAT values are not displayed once they are saved; if you click **Configure** ({{% icon name="cog" %}}) on the **Settings** tab, you will see empty **API Key** and **Personal Access Token** fields. Any new values you save into these fields will override the existing values.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/user-setup.png" alt="" width=60% class="image-border" >}}

## 4 Read More

* [Implement a Simple CI/CD Pipeline with Mendix APIs](/howto/integration/implement-cicd-pipeline/)
* [Developer Settings](/community-tools/mendix-profile/#dev-settings)
