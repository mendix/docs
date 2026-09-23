---
title: "Activity Logs"
url: /developerportal/deploy/mendix-on-azure/activity-logs/
description: "Describes how to view and filter activity logs for cluster operations in Mendix on Azure."
weight: 9
---

## Introduction

The **Activity Logs** page in Mendix on Azure provides a comprehensive audit trail of all cluster operations and management activities. This allows you to track changes, troubleshoot issues, and maintain visibility into cluster lifecycle events.

## Accessing Activity Logs

To access the Activity Logs page:

1. Navigate to the **Cluster Overview** page in the Mendix on Azure Portal.
2. Click **Activity** in the top navigation bar.

{{< figure src="/attachments/deployment/mx-azure/cluster-activity-logs.png" alt="Cluster Overview page with Activity button" max-width="100%" >}}

The Activity Log dialog opens, displaying recent cluster activities.

{{< figure src="/attachments/deployment/mx-azure/activity-logs-detail.png" alt="Activity Log showing cluster operations" max-width="100%" >}}

## Activity Log Information

Each activity log entry displays the following information:

* **Activity** – Description of the operation or event that occurred
* **Date** – Timestamp of when the activity took place (including timezone)

## Types of Activities

The Activity Log tracks various cluster operations, including:

* **Cluster Initialization** – Records when clusters are successfully initialized
* **Cluster Updates** – Logs updates to Azure environment configurations
* **Initialization Failures** – Captures failed initialization attempts for troubleshooting
* **Role Assignments** – Tracks Cluster Manager role additions and removals
* **Permission Changes** – Records changes to user permissions and access control

## Filtering Activity Logs

You can filter activity logs to find specific events:

1. Use the **Activity** filter field to search by keyword (for example, "private cloud").
2. Use the **Date** filter to narrow results by date range.
3. Click the sort icons in the column headers to sort by activity or date.

## Pagination

Activity logs are paginated for easy navigation. Use the pagination controls at the bottom of the page to:

* Navigate between pages using the arrow buttons
* View the current page and total number of entries (for example, "1 to 6 of 6")
* Jump to the first or last page using the double-arrow buttons

## Use Cases

Activity logs are useful for:

* **Troubleshooting** – Identifying when and why initialization failures occurred
* **Audit and Compliance** – Tracking who made changes and when
* **Monitoring** – Reviewing recent cluster operations and updates
* **Security** – Monitoring permission changes and role assignments

## Read More

* [Cluster Visibility and Permissions](/developerportal/deploy/mendix-on-azure/cluster-visibility/) – How cluster visibility works based on user roles
* [Support for Mendix on Azure](/developerportal/deploy/mendix-on-azure/support/) – Getting support for cluster issues
