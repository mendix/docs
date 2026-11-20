---
title: "Company Administrator Settings - Platform"
linktitle: "Platform"
url: /private-mendix-platform/admin-company/platform/
description: "Provides details on the Platform configuration settings that are available to company administrators."
weight: 50
---

## Introduction

In the **Platform** section, administrators can view and manage statistics, activity logs, webhooks, and licenses.

## Platform Statistics

In the **Platform Statistics** section, you can access statistics such as the number of users and apps, daily user login times and numbers, or most active users.

## Activity Logs

For auditing purposes, you can view a log of the most recent actions taken by users of the platform.

Private Mendix Platform activity logs track actions that impact the state or configuration of the platform and its managed resources. This includes the following activities:

* Creation – When a new resource or configuration is initiated.
* Update or modification – When an existing resource or configuration is changed.
* Deletion – When a resource or configuration is removed.
* State Changes – Significant transitions in the lifecycle of a resource (for example, publishing, retiring, archiving).
* Authentication – User login attempts.

### Recent Actions

The **Recent Actions** tab contains a list of the recent actions, logged for the time period specified in the **Log Settings** tab. It serves as a real-time monitoring tool for administrators to quickly view detailed information about each log entry, including the action performed, the user who performed it, the timestamp, and affected resources. 

The following actions are logged:

* User management – Activities related to user accounts and their access within Private Mendix Platform:

    * User creation – New user accounts created
    * User deletion – User accounts removed
    * User profile updates – Changes to user details (for example, name, contact information)
    * User role settings updates – Modifications to a user's assigned roles and permissions
    * User login – Successful and failed login attempts

* Role management – Activities related to the definition and modification of access roles:

    * Role creation – New custom roles defined
    * Role deletion – Existing custom roles removed
    * Role permissions updates – Changes to the permissions granted by a role across various scopes (Platform, group, project, environment, cluster, build, deploy, Marketplace contents)

* Group management – Activities related to user groups and their association with resources:

    * Group creation – New user groups created
    * Group deletion – Existing user groups removed
    * Group settings updates – Modifications to group associations and permissions within projects, environments, clusters, build and deploy processes, and Marketplace contents

* Project management – Activities related to the lifecycle and configuration of projects:

    * Project creation – New projects initiated
    * Project archival and unarchival – Projects moved to or from an archived state
    * Project deletion – Projects permanently removed
    * Project settings updates – Changes to project configurations, owner, team members, or sharing settings
    * Build and Deploy actions – Initiating builds or deployments of project applications

* App package management – Activities related to app packages within projects:

    * App package build – Initiation and completion of application package builds
    * App package lock or unlock – Changing the lock status of an app package.
    * App package deletion – Removal of application packages

* Environment management – Activities concerning the creation and configuration of deployment environments:

    * Environment creation – New deployment environments provisioned
    * Environment deletion – Existing deployment environments removed
    * Environment settings and configuration updates – Modifications to environment-specific settings (for example, variables, scaling, network configurations)

* Marketplace management – Activities related to content within the Private Mendix Platform Marketplace:

    * Marketplace content creation – New Marketplace items (such as templates or components) added.
    * Marketplace content deletion – Existing Marketplace items removed
    * Marketplace version creation – New versions of Marketplace content published
    * Marketplace content updates – Changes to content details, owner, group, or sharing settings
    * Content state changes – Approval, decline, publishing, retiring, or unretiring of Marketplace content

* Cluster management – Activities related to Kubernetes clusters and their configurations:

    * Cluster creation – New Kubernetes clusters provisioned
    * Cluster deletion – Existing Kubernetes clusters decommissioned
    * Namespace creation and deletion – Management of namespaces within clusters
    * Plan creation and deletion – Management of cluster plans
    * Updates to cluster, namespace, and plan settings and configuration – Modifications to cluster, namespace, or plan-specific settings

* Pipeline management – Activities related to Continuous Integration/Continuous Delivery (CI/CD) pipelines:

    * Build pipeline template creation and deletion – Management of Build pipeline templates
    * Deploy pipeline template creation and deletion – Management of Deployment pipeline templates.
    * Pipeline step settings and configuration updates – Modifications to individual steps or configurations within Build and Deploy pipelines

* General platform settings – Activities related to overarching platform capabilities and features:

    * Platform settings updates – Modifications to core platform capabilities and integrations
    * Feature flag management – Toggling platform features **on** or **off**.

You can use the **Search** field to search for a specific action by name.

#### Generating Reports

Private Mendix Platform administrators can generate time-bounded audit reports in multiple formats for review, submission to auditors, or integration with external SIEM systems.

{{< figure src="/attachments/private-platform/pmp-manage-recent-logs.png" >}}

To generate the report, perform the following steps:

1. Click **Create Custom Report**.
2. In the **Create Custom Report** dialog, specify the following parameters:

    * **User action log level** – Select **Event**, **Summary**, or **Complete**
    * **User action archive file type** – Select **PDF**, **Doc2007**, **JSON**, or **XML**.
    * **Start date** and **End date** for the report.

### Archived Actions

To manage the volume of activity data, Private Mendix Platform automatically archives older logs. The **Archived Actions** tab allows users to access and download these historical records.

Logs are archived at a period specified in the **Log Settings** tab. Users can download archived logs for offline review, auditing, or long-term storage. This ensures that a comprehensive historical record is always available.

### Log Settings {#log-settings}

The **Log Settings** tab provides granular control over how activity logs are managed and stored within Private Mendix Platform. Administrators can configure the following parameters to suit their organizational needs and compliance requirements:

* **Number of days to retain user action logs backups** – Defines the duration (in days) for which user action log backups are retained within the system before being permanently deleted or moved to long-term storage. For example, a setting of 30 days means that backups are kept for one month.
* **Expose database entries from the logs as MXApp Log Nodes** – A toggle to determine whether raw database entries from the activity logs should be exposed or made available as MXApp Log Nodes, potentially for integration with Mendix application logging or advanced debugging.
* **User log timestamp output in preferred time zone** – Allows administrators to select the time zone for timestamps displayed in the user activity logs, ensuring that logs are presented in a locally relevant or standardized time zone.
* **User action log time unit** – Specifies the precision of the timestamps recorded for user actions.
* **User action log level** – Controls the verbosity or completeness of the information captured in the user action logs.
* **User action archive file type** – Defines the format in which archived user action logs are saved.
* **External backup target** – Allows administrators to configure an external system or location where activity log backups can be sent for additional redundancy or compliance. The following options are available:

    * **S3** – You must specify the endpoint, region, bucket, access key ID, and secret access key.
    * **Azure Blob Storage** – Supports authentication with Azure Blob Managed Identity (AZWI), or with static credentials.

* **External database target** – Provides an option to configure an external database where activity log data can be replicated or stored, potentially for advanced analytics or long-term data warehousing.
* **Send email when any audit logging fail** – A toggle to enable email notifications to administrators if there are any failures in the audit logging process, ensuring immediate awareness of potential data loss or compliance issues.

#### External Backup Target Configuration for Azure Blob (AZWI)

With Azure Blob (AZWI), Private Mendix Platform writes the logs to an external backup target with the managed identity of the Private Mendix Platform pod. The Mendix Operator creates this identity. Do not create another identity for this option.

Before you save the Azure Blob (AZWI) settings, assign the following role:

| Property | Value |
| --- | --- |
| Role | Storage Blob Data Contributor |
| Principal | Managed identity of the Private Mendix Platform pod |
| Scope | The container selected for Azure Blob (AZWI) |
| Granted by | Your infrastructure team |

To find the Managed identity of the Private Mendix Platform pod, perform the following steps:

1. Read the client ID from the platform ServiceAccount. The default name is `mxplatform`. If you set a different AppName during installation, use that name.

    ```text
    kubectl -n <pmp-namespace> get serviceaccount mxplatform -o jsonpath='{.metadata.annotations.azure\.workload\.identity/client-id}'
    ```

2. In the Azure portal, open the storage account, and then the container.
3. Go to **Access Control (IAM) > Add role assignment**.
4. Select **Storage Blob Data Contributor**, assign it to the managed identity with that client ID, and set the scope to this container.

## Webhooks {#webhooks}

In the **Webhooks** tab, you can view and manage your webhooks.

Webhooks allow you to send information about your licensed Mendix app deployed to Private Mendix Platform to an external app or workflow. You can use them to trigger a step in an automated [Build](/private-mendix-platform/reference-guide/admin/system/#build-steps) or [Deployment](/private-mendix-platform/reference-guide/admin/system/#deploy-steps) pipeline.

Mendix provides webhooks to send project information about the following events:

* App events:

    * App archived
    * App created
    * App deleted
    * App info edited
    * App logo edited
    * App member added
    * App member removed
    * App owner edited
    * App shared
    * App unarchived

* CI/CD events:

    * Package built
    * Package deleted
    * Package deployed
    * Environment created

* Marketplace events:

    * Item approved
    * Item created
    * Item declined
    * Item edited
    * Item imported
    * Item owner edited
    * Item shared
    * Item version added
    * Item version edited

* User events:

    * Group admin updated
    * Group created
    * Group info edited
    * Group member added
    * Group member removed
    * User blocked
    * User created
    * User info edited
    * User unblocked

The webhooks contain a retry mechanism if an error response is received from the endpoint. This helps ensure that the trigger reaches the endpoint.

### Creating a New Webhook {#setting-up}

To set up a webhook, do the following:

1. In the **Platform Webhooks** tab of the **Webhooks** page, click **New Webhook**.
2. Enter the following information:

    * **Webhook Name** – This is a name which you can use to identify the webhook.
    * **URL** – This is the endpoint that will receive the payload when one of the event types selected in **Available Events** occurs.
    * **Validation Secret** – This is a secret that is shared with the endpoint to verify that it has been triggered by this webhook. If you leave this blank, a secret is generated automatically. You can see the generated value any time you return to edit the webhook.
    * **Available Events** – This is the event (or events) that triggers the webhook to send information to the endpoint. You can activate or deactivate specific event types in the **Event Management** tab of the **Webhooks** page.
    * **Custom Headers** – This is a key-value pair that is sent as an HTTP header to the endpoint. You can configure a predefined custom header in the **Preset Headers** tab of the **Webhooks** page.

You can edit or delete an existing webhook by clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in the **Action** column for the webhook you want to change, and then selecting **Edit** or **Delete**.

### Webhook Headers

Every `POST` payload contains the following delivery information as part of the header:

* **connection** – `close`, indicating that there is no further information for the HTTP request
* **content-length** – the size of the HTTP request in bytes (for example, `475`)
* **webhook-signature** – the signature of the webhook in the format `<version>,<signature>` (for example, `v1,Ay2spGBdE7i6OzNkFgTDnGfqgZT0WonCFoBMt8V3YiQ=`)
* **webhook-id** – a unique identifier for this webhook trigger (for example, `msg_2M605iBQRge9hTgpYg7fKXQubaw`)
* **user-agent** – the user agent used to process this trigger
* **webhook-timestamp** – the time the webhook was triggered (for example, `1677072542`)
* **content-type** – `application/json`
* **accept** – `*/*`
* **host** – the host part of the endpoint URL (for example, `gitlab.com`)

You can also add your own custom headers. For more information, see [Configuring a Webhook](#setting-up).

{{% alert color="info" %}}
The order of these headers is not guaranteed.
{{% /alert %}}

## Licensing

On this page, you can view the status of your Private Mendix Platform license, and upload a new license bundle if necessary.

[Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/) must be used to manage the Private Mendix Platform license. It can also be used to manage and provision your own app licenses.

Private Mendix Platform licenses are either **valid** or **not found**; when not found, the Platform operates in developer mode, where access to some features and capabilities is restricted.

{{< figure src="/attachments/private-platform/pmp-wizard2.png" class="no-border" >}}

When valid, licenses can have the following statuses:

* Active (shown in green)
* About to expire (shown in yellow)
* Expired (shown in red)

## Maia

On this page, you can connect Mendix AI Assistance (Maia) to your own Large Language Model (LLM). It enables Maia to use your custom LLM for processing and generating responses. For more information, see [Maia in Private Mendix Platform](/private-mendix-platform/maia/).
