---
title: "Pipelines"
url: /developerportal/deploy/pipelines/
weight: 33
description: "How to set up pipelines in the Developer Portal"
tags: ["Deploy","App","Developer Portal"]
---

## 1 Introduction

1. Go to the Developer Portal and open your app.
1. Click **Pipelines** in the navigation pane.

## 2 Navigation

The **Pipelines** page has four tabs: **Runs**, **Designs**, **Variables**, and **Settings**.

### 2.1 The Runs Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/runs-tab.png" alt="" >}}

There is a **Run Manual Pipeline** button and a **Design a Pipeline** button.

Click a run (or its **Details** icon) to see details. Click the **Run** icon to run it again.

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

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/activity-log.png" alt="" width=50% >}}

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

Click a run (or its **Details** icon) to see details.

#### 2.3.1 Pipeline Details

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/pipeline-design.png" alt="" >}}

To design a pipeline, 

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/pipeline-steps.png" alt="" >}}


### 2.3 The Variables Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/variables-tab.png" alt="" width=75% >}}

The **Variables** tab lets you create variables.

You can user the drop-down menu to filter to specific variable types.

Click **Create New Key** to create a new key, or double-click an existing key (or click **More Options** > **Edit**) to launch the **Edit Key** dialog box.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/edit-key.png" alt="" width=50% >}}

To use a variable in the pipeline design, type `$` and select your desired variable. Note that these are in addition to the built-in, Mendix-defined variables.

### 2.4 The Settings Tab

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/settings-tab.png" alt="" >}}

The **Settings** tab lets you configure pipeline run users.

On a user, click the **Configure** (⛭) icon to launch the **Add New Run User** dialog box. You can choose **Me** or **Another User**. Click the **Delete** (<i class="fa-regular fa-trash-can"></i>) icon to remove a user.

Click **Settings** (<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>) next.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/pipelines/add-new-run-user.png" alt="" width=30% >}}
