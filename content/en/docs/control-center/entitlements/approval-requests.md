---
title: "Approval Requests"
url: /control-center/approval-requests/
description: "Describes the Approval Requests page in the Mendix Control Center."
weight: 30
no_list: false 
beta: true
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

The **Approval Requests** page allows you to manage all approval requests created for your company.     
It is made up of the **Active Requests** and **Resolved Requests** tabs.

## Active Requests

This tab displays all requests that have not yet been acted upon, with the following details for each request:

* **Request ID** – The unique identification code of the request.
* **Request Type** – The type of request being submitted. 
* **Requester** – The name of the person who made the request.
* **Requested Date** – The date when the request was submitted.
* **Actions** – Allows you to **Reject** or **Approve** the request.    
    Click the **Details** button next to the request to access further details.

## Resolved Requests

This tab displays all requests that have been acted upon, with the following details for each request:

* **Request ID** – The unique identification code of the request.
* **Request Type** – The type of request being submitted.
* **Requester** – The name of the person who made the request.
* **Requested Date** – The date when the request was submitted.
* **Status** – The status of the request, which can be one of the following:

    * **Approved**
    * **Canceled**
    * **Rejected**
    * **Expired**

* **Reviewer** – The name of the person who reviewed and approved, canceled, or rejected the request.
* **Resolved Date** – The date when the request was acted upon, and its status was changed.
* **Action** – Click the **Details** button next to the request to access further details.

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
