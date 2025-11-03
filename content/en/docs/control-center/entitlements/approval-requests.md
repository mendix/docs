---
title: "Approval Requests"
url: /control-center/approval-requests/
description: "Describes the Approval Requests page in the Mendix Control Center."
weight: 30
no_list: false 
beta: true
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, see [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

The **Approval Requests** page allows you to manage all approval requests created for your company. 

## Request Details

These are the details shown for each request:

* **Submitted On** – The date when the request was submitted.
* **App Name** – The name of the app for which the request is submitted.
* **Environment** – The app environment for which the request is submitted.
* **Request Type** – The type of request being submitted.    
    The only available option is **Plan Upgrade**.
* **Production** – This column displays a green checkmark if the environment for which the request is submitted is production.
* **Current Plan** – The plan that the environment is currently on.
* **Requested Plan** – The plan that the environment should be moved to.
* **Status** – The current status of the request, which can be one of the following:

    * **Pending Approval**
    * **Approved**
    * **Canceled**
    * **Rejected**
    * **Expired**
* **Action** – Click the **Details** button next to the request to access further details, such as the cost of the plan change and the reason for the request.

You can filter requests by status and type.

## Approving a Request

Follow these steps to approve a request:

1. Click **Approve** in the request details window.
2. Click **Approve** again in the confirmation window that opens.

Once a request is approved, its status changes to **Approved**.

## Rejecting a Request

Follow these steps to reject a request:

1. Click **Reject** in the request details window.
2. Provide a reason for the rejection in the confirmation window that opens.
3. Click **Reject** again.

Once a request is rejected, its status changes to **Rejected**.    
