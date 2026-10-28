---
title: "Repacking Your Database in Mendix Cloud"
linktitle: "Repacking the Database"
url: /developerportal/deploy/repack-database/
weight: 80
description: "Describes how to reclaim database disk space in Mendix Cloud by repacking the database."
---

## Introduction

PostgreSQL keeps old versions of updated and deleted rows to support concurrent reads. Over time, these dead rows can accumulate and cause table bloat, which increases disk usage and can reduce query performance. Mendix Cloud runs autovacuum on all PostgreSQL databases, which is sufficient for most apps. For apps with a high number of transactions that create, update, and delete large amounts of data, autovacuum can fail to keep up.

Repack reclaims the disk space used by bloat. It uses the PostgreSQL extension `pg_repack` to rebuild tables and indexes without holding exclusive locks, so your app stays running during the process. After the repack, the database disk usage reflects only live data.

## Prerequisites {#prerequisites}

Before repacking the database, verify the following:

* You are the [Technical Contact](/developerportal/general/app-roles/#technical-contact) for the app.
* The database has enough free disk space. The repack temporarily requires free database disk space approximately equal to the size of the largest table. Compare the [Largest Table Size](/developerportal/operate/metrics/#Trends-dblargesttablesize) and [Database Disk Usage](/developerportal/operate/metrics/#Trends-dbdfabs) graphs to verify this.

To decide whether a repack is needed, use the [Average Database Bloat Ratio](/developerportal/operate/metrics/#Trends-dbavgbloatratio) and [Maximum Table Bloat Ratio](/developerportal/operate/metrics/#Trends-dbmaxtablebloatratio) graphs.

## Repacking the Database {#repacking}

To repack the database, follow these steps:

1. Go to [Projects](https://projects.home.mendix.com/).
2. Click **Environments** on your app.
3. On the **Environments** page, click the **Overview** tab to view your environments.
4. Find your target environment.
5. Click **Details** ({{% icon name="notes-paper-edit" %}}) next to the environment you want to view.
6. In the **Plan Details** section of the [Environment Details](/developerportal/deploy/environments-details/#plan-details) page, click **Repack**.
7. In the dialog box that appears, select **Execute now** to run the repack immediately, or select **Schedule for later** to run it at a later time. The expected impact on the running app is minimal, but scheduling lets you choose when the repack happens.

    If you select **Schedule for later**, choose a date. The repack is scheduled for the first available maintenance window after that date.
8. Click **Submit**.
9. Click **Proceed** to confirm the database repack request.

{{% alert color="info" %}}
Only one repack request can exist for an environment at a time.
{{% /alert %}}

## Tracking a Repack Request {#tracking}

You can track and manage your database repack requests on the [Change Requests](/developerportal/deploy/environments/#change-requests) tab of the app's **Environments** page. Repack requests appear with **Database Repack** as the request type. This tab is visible only to the Technical Contact.

### Repack Request Details {#request-details}

Click **Details** on a database repack request to view the name of the requester and other request details, including:

* Status of the request
* Reason of repack
* Date of request creation
* Date the request was scheduled
* Request ID
* Request type
* App name
* Environment

### Repack Request Status {#repack-status}

A repack request can have the following statuses:

* **Pending Schedule** – The repack is awaiting scheduling.
* **Scheduled** – The repack is scheduled for the next maintenance window.
* **In Progress** – The repack is actively being applied to the environment. The environment is in a maintenance state, but the app keeps running.
* **Completed** – The repack was successfully applied to the environment.
* **Failed** – The repack did not complete successfully, for example because of an execution error.
* **Canceled** – The Technical Contact canceled the request. You can cancel a request until it is **In Progress**, including after it is scheduled. You cannot cancel a request that is **In Progress** or **Completed**.

### Available Actions by Status {#available-actions}

In the **Request Details** dialog box, depending on the request's [status](#repack-status), the Technical Contact can perform the following actions:

* **Pending Schedule** – Click **Cancel Request** to cancel the request, or click **Schedule Change** to set when the repack is applied.
* **Scheduled** – Click **Cancel Request** to cancel the request, or click **Execute Now** to run the repack immediately.

{{% alert color="warning" %}}
If the Technical Contact cancels a request, its status changes to **Canceled** and the repack is canceled entirely. You cannot reschedule a repack. To repack the database or change the scheduled date, submit a new request.
{{% /alert %}}

## Scheduling a Repack {#scheduling-a-repack}

If the status of your request is **Pending Schedule**, follow these steps:

1. On the **Change Requests** tab, click **Details** on the request.
2. In the **Request Details** dialog box, click **Schedule Change**.
3. Select **Execute Now** to run the repack immediately, or select **Schedule for later** and choose a date, as described in [Repacking the Database](#repacking).

After scheduling, the status changes to **Scheduled**. You can still click **Execute Now** at any time before the scheduled maintenance window to run the repack immediately instead. When the repack starts, the status changes to **In Progress**, and then to **Completed** or **Failed**.
