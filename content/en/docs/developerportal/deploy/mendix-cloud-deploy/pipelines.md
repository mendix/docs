---
title: "Pipelines"
url: /developerportal/deploy/pipelines/
weight: 33
description: "How to set up pipelines in the Developer Portal"
tags: ["Deploy","App","Developer Portal", "CI/CD"]
---

## 1 Introduction

From the **Pipelines** page, you can set up deployment pipelines for your app.

To access the **Pipelines** page, open your app in the Developer Portal. Then select **Pipelines** in the navigation pane.

{{% alert color="info" %}}
You must have **API Rights** permissions to view and edit pipelines. For details on configuring these permissions, see [Node Permissions](/developerportal/deploy/node-permissions/).
{{% /alert %}}

## 2 Navigation

The **Pipelines** page has four tabs: **Runs**, **Designs**, **Variables**, and **Settings**.

### 2.1 The Runs Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/runs-tab.png" alt="" >}}

There is a **Run Manual Pipeline** button and a **Design a Pipeline** button.

If you click **Run Manual Pipeline**, this launches a dialog box that lets you select a pipeline, a branch, variables, and value before running the specified pipeline. 

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/run-manual.png" alt="" width=60% >}}

Click a run (or its **Details** icon) to see the details of the run. Click the **Run** icon to run it again.

By adjusting the **View** settings, you can control which columns show up. This is the available information:

| Name          | Description |
| ------------- | ----------- |
| Status        |             |
| Run ID        |             |
| Branch        |             |
| Pipeline Name |             |
| Triggered by  |             |
| Last Run      |             |
| Duration      |             |
| Trigger       |             |
| Revision      |             |

There are also filter options: 

* Search by run ID, branch, or pipeline name
* Filter by trigger: All triggers, on commit, scheduled, manual
* Filter by who the run was triggered by
* Filter by status: All statuses, succeeded, in progress, or failed

### 2.2 The Designs Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/designs-tab.png" alt="" >}}

On the **Designs** tab, you can see all existing pipeline designs. You can also open the activity log, which matches the activity log shown on the **Environments** page.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/activity-log.png" alt="" width=60% >}}

By adjusting the **View** settings, you can control which columns show up. This is the available information:

| Name                    | Description |
| ----------------------- | ----------- |
| Pipeline Name           |             |
| Trigger                 |             |
| Branch                  |             |
| Last Modified by        |             |
| Last Modified Date/Time |             |
| Created by              |             |
| Created Date/Time       |             |
| Status                  |             |

Click a pipeline (or its **Details** icon) to see the details of the pipeline. You can also edit it, as described below.

#### 2.3.1 Pipeline Details

To design a pipeline, click **Design a Pipeline** from either the **Runs** or **Designs** tab. That brings up the **Design a Pipeline** dialog box. You can choose if you want to start from a pipeline template or an empty pipeline.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/design-pipeline.png" width=60% alt="" >}}

Give your pipeline a name, and then start customizing it. If you choose to work from an empty pipeline, you will start by adding steps. Or, if you work from the template, you will start with a pipeline that is pre-populated with the following basic steps:

1. Start Pipeline
1. Build
1. Publish
1. Stop Environment
1. Create Backup
1. Deploy

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/pipeline-design.png" alt="" >}}

You then have a variety of customization options:

* Click **More Options** ... to edit the pipeline name, duplicate it, or delete it.
* Expand a step to customize or delete it
* Use the six-dot drag handle to rearrange steps
* Add a step by clicking the **+** icon, which launches the **Pipeline Steps** dialog box:

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/pipeline-steps.png" alt="" >}}

When you are finished customizing your pipeline, click **Save**. Or, to immediately start using it, click **Save & Activate**.

### 2.3 The Variables Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/variables-tab.png" alt="" width=75% >}}

The **Variables** tab lets you create variables.

You can use the drop-down menu to filter to specific variable types.

Click **Create New Key** to create a new key, or double-click an existing key (or click **More Options** > **Edit**) to launch the **Edit Key** dialog box.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/edit-key.png" alt="" width=60% >}}

To use a variable in the pipeline design, type `$` and select your desired variable. Note that these are in addition to the built-in, Mendix-defined variables.

### 2.4 The Settings Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/settings-tab.png" alt="" >}}

The **Settings** tab lets you configure pipeline run users.

On a user, click the **Configure** (⛭) icon to launch the **Add New Run User** dialog box. You can choose **Another User** and specify that user's details, or you can choose **Me**. Click the **Delete** icon to remove a user.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/add-new-run-user.png" alt="" width=60% >}}

## 3 Limitations

## 4 Read More

* [Implement a Simple CI/CD Pipeline with Mendix APIs](/howto/integration/implement-cicd-pipeline/)
