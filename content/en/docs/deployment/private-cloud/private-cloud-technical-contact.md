---
title: "Technical Contact Role and Permissions"
linktitle: "Technical Contact"
url: /developerportal/deploy/private-cloud/private-cloud-technical-contact/
description: "Describes the Technical Contact role for Mendix on Kubernetes and Mendix on Azure applications, the permissions it grants, and how to assign and review it."
weight: 55
---

## Introduction

The *Technical Contact* is the designated operational owner of a Mendix application deployed on a Mendix on Kubernetes or Mendix on Azure cluster. This role is assigned at the application level and automatically grants namespace Administrator permissions across all namespaces where the application is deployed.

Key characteristics:

* One Technical Contact per application
* Automatically assigned Administrator role on all deployment namespaces
* Receives operational notifications about the application
* Primary point of contact for application-level issues

## Permissions Granted

When you assign a Technical Contact, that user receives full Administrator permissions on every namespace where the application deploys. Administrator permissions include:

### Application Control

* Start, stop, restart, and roll back application versions
* Deploy new packages and manage deployment settings
* Delete environments

### Data and Backups

* Create, restore, and delete backups (Mendix on Azure clusters)
* Access application constant values (which may include credentials)

### Configuration

* Modify environment variables and constants
* Manage scheduled events
* Configure custom settings

### Access and Monitoring

* View application logs and metrics (Mendix on Azure clusters)
* Manage SSL certificates and custom domains
* Invite and remove users within the namespace
* Change permissions for other users in the namespace

{{% alert color="info" %}}
While assigning Technical Contact grants Administrator permissions at the namespace level, users also need appropriate permissions at the application (project) level to effectively access and manage application environments. Namespace permissions and application permissions work together – having one without the other may limit what operations a user can perform.
{{% /alert %}}

## How is Technical Contact Assigned?

### Automatic Assignment

When you create a new application, the application creator is automatically assigned as the Technical Contact.

### Manual Assignment

On Mendix on Kubernetes and Mendix on Azure, only the current Technical Contact can transfer the role to another application team member. Cluster managers, namespace administrators, and other users cannot reassign the Technical Contact on these platforms – the transfer can only be completed by the person who currently holds the role, through the Mendix Platform Portal.

If you are the current Technical Contact, you can transfer the role by performing the following steps:

1. Navigate to your application's project page on the Mendix Platform Portal.
2. Navigate to the **Environments** page for your application.
3. Go to the **Application Settings** tab.
4. Click the **Edit** button next to the Technical Contact field.
5. A modal dialog opens with a warning message about Administrator permissions.
6. Search for and select a new user from the application members list.
7. Confirm your selection.
8. A success message confirms the Technical Contact has been updated.

{{% alert color="warning" %}}
If the current Technical Contact is unavailable or unreachable, contact Mendix Support to have the role reassigned. On Mendix on Kubernetes and Mendix on Azure there is no cluster-manager, namespace-administrator, or Deploy API route to change the Technical Contact. Mendix Support is the only path in this situation.
{{% /alert %}}

{{% alert color="info" %}}
Changing the Technical Contact immediately grants Administrator permissions to the new user and does not remove permissions from the previous Technical Contact unless explicitly revoked.
{{% /alert %}}

## Who Should Be the Technical Contact?

The Technical Contact should be:

* Actively involved in the application's operation
* Familiar with deployment and troubleshooting procedures
* Available to respond to operational issues
* Authorized by your organization to have full administrative access

We do not recommend assigning the role to:

* Users who have left the team or organization
* Users who only need view-only access
* External contractors without proper authorization

## How to Review Your Technical Contact Assignments

We recommend revieweing your technical contact assignments at a quarterly frequency, or whenever team membership changes.

1. Navigate to the Mendix Platform Portal and sign in.
2. For each application you manage, navigate to the application's project page.
3. Go to the **Environments** page.
4. Click the **Application Settings** tab.
5. Review the current Technical Contact assignment.
6. Verify that the assigned user is:
    * Still an active member of your team
    * Involved in the application's operation
    * Authorized for full Administrator access
7. If the assignment is incorrect and you are the current Technical Contact, click **Edit** and follow the transfer process described above. If you are not the current Technical Contact, only that person can transfer the role – if they are unavailable or unreachable, contact Mendix Support.
8. If the previous Technical Contact should no longer have Administrator access, manually revoke their permissions through namespace user management.

## Frequently Asked Questions

This section answers common questions about Technical Contact assignments.

### What is a Technical Contact?

The designated operational owner of your application. This user automatically receives Administrator permissions on all deployment namespaces.

### What permissions does the Technical Contact have?

Full Administrator permissions including: deploy/start/stop applications, manage backups, access credentials stored as constants, modify configurations, manage users, and delete environments.

### Who should I assign as Technical Contact?

Choose an active team member who is familiar with the application's operation and authorized for full administrative access. Avoid assigning users who have left the team or only need view-only access.

### How do I change the Technical Contact?

On Mendix on Kubernetes and Mendix on Azure, only the current Technical Contact can transfer the role. If you are the current Technical Contact, to transfer the role, perform the following steps:

1. Navigate to **Environments > Application Settings**. 
2. Click **Edit** next to **Technical Contact**.
3. Select the new user and click **Confirm**.

The new user immediately receives Administrator permissions on all deployment namespaces. If the current Technical Contact is unavailable or unreachable, contact Mendix Support. No cluster manager or namespace administrator can make this change on these platforms.

### Can I have multiple Technical Contacts?

No. You can have only one Technical Contact per application. For additional administrators, use the namespace user management interface to grant permissions separately.

### What happens to the previous Technical Contact's permissions?

Permissions are not automatically removed when you change the Technical Contact. If the previous user should no longer have Administrator access, you must manually revoke their permissions in each namespace.

### How often should I review Technical Contact assignments?

As a best practice, review the assignments quarterly and whenever the team membership changes (for example due to new hires, departures, or role changes).

### Does the Technical Contact need to accept an invitation?

No. The permissions are automatically granted when the Technical Contact is assigned. No invitation or acceptance step is required.

### Can I assign a Technical Contact who i snot already a member of the application?

No. The Technical Contact must be selected from existing application members. Add the user to the application first, and then assign them as Technical Contact.
