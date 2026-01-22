---
title: "Connecting to External Resources"
url: /developerportal/deploy/connecting-to-external-resource/
weight: 80
description: "How to connect to external resource using private connectivity"
beta: true

#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, see [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

[Mendix Cloud Private Connectivity](/control-center/private-connectivity/) enables your Mendix applications to securely and privately connect to internal resources, whether they are on-premises or in the cloud. This ensures that connection bypasses the public internet and instead goes through a private tunnel, improving security and compliance.

This page describes how Technical Contacts can request and manage connections to external resources using Mendix Cloud Private Connectivity.

## Prerequisites {#prerequisites}

Before requesting a connection, the following conditions must be met:

* You are the [Technical Contact](/developerportal/general/app-roles/#technical-contact) for the Mendix application.
* A Mendix Admin has created and configured the necessary private network in the [Control Center](/control-center/configure-private-connectivity/). This includes installing agents and exposing the specific external resource you want to access.

## Connections {#connections}

Mendix Cloud Connect Connections allow applications on Mendix Cloud to connect to Mendix Cloud Connect Resources over Mendix Cloud Connect Networks. Each connection request must be initiated by a Technical Contact and approved by a Mendix Admin before the application on Mendix Cloud can connect to the resource.

An application on Mendix Cloud can establish multiple connections to various resources. You can view and manage all connections and their statuses on the [Connectivity](/developerportal/deploy/environments-details/#connections) or [Change Requests](/developerportal/deploy/connecting-to-external-resource/#view-connection-details) tab.

{{% alert color="info" %}} An application environment can only connect to a single private network at a time. This means that all external resources you connect to from an application environment must be on the same private network.{{% /alert %}}

### Requesting a New Connection {#connection-request}

As a Technical Contact, follow these steps to request a new connection from your application environment to an approved external resource:

1. From [Apps](https://sprintr.home.mendix.com), go to the app's **Environments** page.
2. Click **Details** ({{% icon name="notes-paper-edit" %}}) on the preferred environment.
3. Go to the **Connectivity** tab.
4. In the **Connections** section, click **Add** to initiate a new connection request.
{{% alert color="info" %}}
Contact your Mendix Admin if the resource you want is not on the list.
{{% /alert %}}
5. In the **Add Connection** dialog, select an available network. This action displays the resources exposed on that network.
    {{% alert color="info" %}} **Network Selection Behavior**

* If your application environment already has an active connection, the network associated with that connection will be automatically selected and cannot be changed unless all existing connections are deleted.
* If only one private network is available for your application, it will be automatically selected.
  {{% /alert %}}

1. Select the specific resource you want your application environment to connect to.
1. Click **Save** to submit your connection request for approval. All submitted connection requests appear in the [Control Center](/control-center/configure-private-connectivity/) for the Mendix Admin review.
1. [Track and manage](#manage-connection-requests) your connection requests.
{{% alert color="info" %}}
If this is the first connection approved for an application environment, you must redeploy that environment for the connection to become active and usable.
{{% /alert %}}

### Connection Request Status

This diagram shows the progress of the request status from when the connection request is submitted to when it is completed (approved or rejected):

{{< figure src="/attachments/deployment/mendix-cloud-deploy/connecting-to-external-services/connection-request-status-flow.png" alt="Flowchart illustrating the lifecycle of a Mendix Cloud Private Connectivity request, showing stages like 'Pending Approval', 'Mendix Admin Review', 'Approved', and 'Rejected'." >}}

Once a Technical Contact submits a connection request, it enters a **Pending Approval** status. The request is then sent to a Mendix Admin for review:

* If the Mendix Admin rejects the request, its status becomes **Rejected**.
* If the Mendix Admin approves the request, the connection status will reflect as follows:
    * In the **Change Requests** tab of the Environments page, the private connectivity request status updates to **Completed**
    * In the **Connections** section of the **Connectivity** tab, the status shows as **Approved**.

A Mendix Admin can also revoke an already approved connection, which will change its status back to **Rejected**.

## Managing Connections {#manage-connection-requests}

For detailed information about your private connectivity requests, access the **Change Requests** tab:

### Viewing Connection Request Details {#view-connection-details}

1. Go to [Apps](https://sprintr.home.mendix.com/).
2. Click **Environments** on your app.
3. Open the **Change Requests** tab.
4. Look for requests with **Private Connectivity** as the **Request Type**. For more information on the **Change Requests** tab, refer to the [Change Requests](/developerportal/deploy/environments/#change-requests) section in *Environments and Deployment*.

Click **Details** on any Private Connectivity request to view the following request information:

* Requester and reviewer names
* Status of the request
* Request ID
* Date of request creation
* App name
* Environment
* Network ID and name
* Resource ID and name
* Agent ID and name

{{% alert color="info" %}}
The **Change Requests** tab provides a historical view of all connectivity requests, while the **Connections** section shows the current state of active connections.
{{% /alert %}}

### Managing Active Connections

The [Connections](/developerportal/deploy/environments-details/#connections) section on the application's **Connectivity** tab allows Technical Contacts to view all active connections for the environment. Depending on the connection's status, you can perform the following actions:

### Cancelling a Connection Request {#cancel-connection}

As a Technical Contact, you can cancel a connection request if its status is **Pending Approval**.
To cancel a pending connection request:

1. In the [Connections](/developerportal/deploy/environments-details/#connections) section of the **Connectivity** tab, locate the connection request with the status **Pending Approval**.
2. Click **Cancel Request** next to that connection.

### Deleting an Established Connection

After a connection request is approved, you can delete the connection at any time by following these steps:

1. In the [Connections](/developerportal/deploy/environments-details/#connections) section of the **Connectivity** tab, locate the approved connection you want to remove.
2. Click **Delete** next to that connection.

{{% alert color="info" %}}
Deleting a connection immediately breaks the connection between your application environment and the resource.
{{% /alert %}}
