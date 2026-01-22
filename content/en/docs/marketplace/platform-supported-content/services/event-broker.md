---
title: "Mendix Event Broker"
url: /appstore/services/event-broker/
linktitle: "Event Broker"
description: "Mendix Event Broker"
aliases:
---

## Introduction

Based on [Apache Kafka](https://kafka.apache.org/), the Mendix Event Broker is single-tenant and can only be used by apps running on nodes provisioned for your company.

Events are published to a Kafka topic. Apps are subscribed to a Kafka topic to receive events, and messages use standard [CloudEvents payload format](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md).

There is a single Kafka broker for Free Apps that your company Free Apps can connect to. All Free Apps in your company publish and consume from the same Kafka broker. Events are published to one shared Kafka topic, and any Free App in your company can receive these events.

## Mendix Event Broker License {#event-broker-license}

Purchase a license to the Mendix Event Broker to deploy unlimited apps on production environments in Mendix Cloud. Ask your Customer Success Manager or Account Manager to reach out to purchase a license. See the [Mendix Event Broker](https://marketplace.mendix.com/link/component/202907) platform service page for more details.

A license for the Mendix Event Broker is available for any Mendix region, but once selected, you can only run on a single region (no multi-region support). This license is available for all customers. You can also run business events on [your own Kafka cluster](/appstore/services/business-events/#byok).

### Enabling the Mendix Event Broker Service {#enable-mx-event-broker}

Once a license is purchased, a Technical Contact must enable the Event Broker Service on the [Mendix Portal](/developerportal/) for the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) in the following places:

1. On the app level under **Environments**, navigate to **Cloud Settings** ({{< icon name="settings-slider-1" >}}) and click [Services](/developerportal/deploy/environments/#services)
2. On the [Environment Details](/developerportal/deploy/environments-details/#services) page for each environment

The Event Broker must be enabled on both the app and specific environment levels in order to use the Event Broker services.

### Managing the Mendix Event Broker {#manage-mx-broker}

Technical Contacts with a license for the Mendix Event Broker can manage its features on the [Event Broker Manager](https://broker.mendix.com/) page.

#### Users for Event Broker Manager 

Users within the company's email domain that have a Mendix login can participate in the administration of the Mendix Event Broker as either a View or Admin user. They can also be blocked from participation. 

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_internal_user.png" >}}

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_internal_user_2.png" width="300" >}}

Users that are not part of the customer organization (not within the email domain of the customer) can be invited with the same levels of access. Such users still require a standard Mendix login.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_external_user.png" width="300" >}}

#### Spaces and Environments{#spaces}

Spaces define which applications can exchange events with each other. When Business Events is enabled for an environment, it is placed in an Event Broker space based on the environment name. This enables apps deployed under the same space to publish and consume events. For example, apps in acceptance environment can only exchange events with other apps' acceptance environments. You can check the space of an app's environment on the [Event Broker Manager](https://broker.mendix.com/) page.

Spaces are created and assigned based on the app environment name and allow isolation of your business events. The default behavior can be changed if needed. Contact [Mendix Support](https://support.mendix.com/) if you would like to change the space of a specific app environment.

See the [Enabling the Mendix Event Broker Service](#enable-mx-event-broker) section above for more information.

#### Topics and Channels {#topics-channels}

Events are placed in channels, sometimes called topics. Apps subscribed to a channel will receive events published to this channel.

Events published by Free Apps are published to one shared company channel on a multitenant free Event Broker. Events published by apps running on licensed nodes are published to their own channels on the company Event Broker. These channels, implemented as topics on Kafka, are automatically created upon deployment of the app publishing the events.

#### Event Access Control {#access-control}

The Mendix Event Broker allows access control to be applied down to the event level. Each application can be granted or denied access to events using the [Event Broker Manager](https://broker.mendix.com/).

##### Types of Access

The overview page contains a list of applications by environment within the organization's event landscape. The table contains columns that provide cases with exceptions:

* **Implemented but no access** – an application has implemented an event that it is not allowed to access, guaranteeing a failure to subscribe to and/or publish the event
* **Has access but not implemented** – an application has been provided with more access than is required and you could make it more secure.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_overview.png" >}}

Selecting the specific application provides an overview of the application's implemented events with their associated access.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_overview_2.png" >}}

From this view, access to the individual events can be configured. Changes take effect immediately when **Apply Changes** is clicked.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_overview_3.png" width="300" >}}

##### Default Behavior

From the main overview page, an administrator can assign the default application behavior when they deploy to an environment for the first time by changing the configuration in the **Manage Default Access** dialog box.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_defaults.png" width="300" >}}

From here, you can manage the default access settings:

* **An app can access events defined in it** – enabling this setting allows newly-deployed applications to always have access to any events defined within that application (see [Creating a New Business Event Service](/appstore/services/business-events/#two-way-be-create) for more information)
* **For other events, in all environments, the app can:**

    * **Publish events it implements**
    * **Subscribe to events it implements**

## Mendix Event Broker Bridges {#manage-mx-broker-bridge}

{{% alert color="warning" %}}
This feature is currently in [Private Beta](/releasenotes/release-status/). Contact your Customer Success Manager or Account Manager for further assistance.
{{% /alert %}}

Mendix Event Broker Bridges facilitate integration between the Mendix Event Broker and external technologies, such as AWS SQS, HTTP, Azure Blob Storage, and AWS S3. These bridges enable the exchange of events between your Mendix Cloud environment and external systems, ensuring efficient communication across diverse technological landscapes.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges.png" class="no-border"  >}}

### Standard Message Format

Every event must carry four mandatory CloudEvents core attributes, each prefixed with `ce_`:

* `ce_id` as id
* `ce_source` as source
* `ce_specversion` as specversion
* `ce_type` as type

See [CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md#required-attributes) for more information on required attributes.

#### HTTP Bridge Headers

For HTTP Bridges, specific headers are required for authentication.

##### Required Header

* **Authorization** – must be set as a Bearer token using the Personal Access Token (PAT) generated during bridge configuration; for example: `Authorization: Bearer <your-personal-access-token>`
  
  For details on how to obtain your Bearer token, see [Using the HTTP Bridge](#using-the-http-bridge).

##### Optional Headers

You can include additional HTTP headers in your request to provide event metadata, such as:

* `ce_time` – sets the published time of the event; for example: `2025-06-13T15:36:52.148542+02:00`

All custom HTTP headers will be forwarded as Kafka headers by default.

### Creating a Bridge

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Event Broker Bridges** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create.png" class="no-border" >}}

1. Click **Create a Bridge** to create a new bridge.

2. Select one of the following bridge types:

    * **AWS SQS** – bidirectional bridge using the [Amazon Simple Queue Service](https://aws.amazon.com/sqs/) to send and receive events
    * **HTTP** – one-way bridge that uses HTTP requests to send events from external systems to the Mendix Event Broker
    * **Azure Blob Storage** – one-way bridge that receives events via Azure object storage
    * **AWS S3** – one-way bridge that receives events via AWS object storage

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/ebb_general_bridge_create.png" class="no-border" >}}

1. Click **Next** to continue creating your bridge.

    * For instructions on configuring AWS SQS, see [Configuring a Bridge with AWS SQS](#bridge-with-aws-sqs).
    * For instructions on configuring HTTP, see [Configuring a Bridge with HTTP](#bridge-with-http).
    * For instructions on configuring Azure Blob Storage, see [Configuring a Bridge with Azure Blob Storage](#bridge-with-azure-blob-storage).
    * For instructions on configuring AWS S3, see [Configuring a Bridge with AWS S3](#bridge-with-aws-s3).

2. After configuring the service and connecting events (as described in the bridge-specific sections above), click **Start** on the confirmation screen to deploy the bridge.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/ebb_general_bridge_start.png" class="no-border" >}}

Once the bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

### Configuring a Bridge with AWS SQS {#bridge-with-aws-sqs}

The creation process for AWS SQS bridges includes two additional steps on the Mendix side and policies that need to be implemented on the AWS side.

#### Configure Service

1. Configure the service by filling out the following:

* **Event Broker Space** – the space where the bridge will operate
* **Name** – the name you want to call the bridge
* **AWS region** – the AWS region where your bridge operates

  {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_configure.png" class="no-border" width="400" >}}

2. Click **Next** to continue the configuration.

#### Connect Events

Select the business events to integrate with AWS SQS:

1. Click **Add Business Events** to open a dialog displaying all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events. 
2. Select the checkbox for the event(s) you want to add, then click **Select**.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_choose_events.png" class="no-border" width="400" >}}

3. Configure each event with its own SQS URL for each direction the event will be integrated.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_connect_events.png" class="no-border" width="400" >}}

4. Click **Next** to continue.

5. Confirm the configuration with the AWS Access Policy.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_approve_policy.png" class="no-border" width="400" >}}

6. After all events have been configured, click **Start** to start the Mendix Event Broker Bridge. This process will take several minutes to complete.

#### Overview of AWS SQS Bridge

Once the Mendix Event Broker Bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_overview.png" class="no-border" width="400" >}}

#### Configure AWS Access Policy

You need to configure AWS access policies for both sending and receiving messages.

##### Sending Messages to Mendix

Add the object below to the Access Policy of your AWS SQS queue if it is sending messages to Mendix.

```
{
  "Sid": "__sender_statement",
  "Effect": "Allow",
  "Principal": {
    "AWS": [
      "arn:aws:iam::044806572671:role/mendix-event-broker-bridge"
    ]
  },
  "Action": [
    "SQS:SendMessage"
  ],
  "Resource": "<Tenant SQS ARN>"
}
```

##### Receiving Messages from Mendix

Add the object below to your Access Policy of the AWS SQS queue if it is receiving messages from Mendix.

```
{
  "Sid": "__receiver_statement",
  "Effect": "Allow",
  "Principal": {
    "AWS": [
      "arn:aws:iam::044806572671:role/mendix-event-broker-bridge"
    ]
  },
  "Action": [
    "SQS:ChangeMessageVisibility",
    "SQS:DeleteMessage",
    "SQS:ReceiveMessage"
  ],
  "Resource": "<Tenant SQS ARN>"
}
```

### Configuring a Bridge with HTTP {#bridge-with-http}

#### Configure Service

1. Configure the service by filling out the following:

* **Event Broker Space** – the space where the bridge will operate
* **Name** – the name you want to call the bridge
* **AWS region** – the AWS region where your bridge operates

  {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/ebb_http_configure.png" class="no-border" width="400" >}}

2. Click **Next** to connect events to your bridge.

#### Connect Events

Select the business events to integrate with the HTTP Bridge:

1. Click **Add Business Events** to open a dialog displaying all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events. Only events capable of subscribing are shown, as this bridge operates in one direction.
2. Select the event(s) to integrate. Once selected, the URL for the HTTP connection is automatically generated.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/ebb_http_connect_events.png" class="no-border" width="400" >}}

3. Click **Next** to proceed to the confirmation screen.

#### Overview of HTTP Bridge

Once the Mendix Event Broker Bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/ebb_http_overview.png" class="no-border" width="400" >}}

#### Using the HTTP Bridge {#using-the-http-bridge}

To run the HTTP bridge from your client, include a Bearer token in the request header.

1. Open the HTTP bridge details using the **Options** ({{% icon name="three-dots-menu-horizontal" %}}) menu on the **Overview** page.
2. Add the **Bearer token**.

### Configuring a Bridge with Azure Blob Storage {#bridge-with-azure-blob-storage}

#### Configure Service

1. Configure the service by filling out the following:

* **Event Broker Space** – the space where the bridge will operate
* **Name** – the name you want to call the bridge
* **Storage Account** – the storage account to access
* **Storage SAS Token** – the storage SAS Token
* **Container Path** – the path of the container where the messages will be stored

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/azure-blob-storage/ebb_azure_blob_configure.png" class="no-border" >}}

2. Click **Next** to connect events to your bridge.

#### Connect Events

Select the business events to integrate with Azure Blob Storage:

1. Click **Add Business Events** to open a dialog displaying all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events. Only events capable of publishing are shown, as this bridge operates in one direction.
2. Select the event(s) to integrate and specify the prefix path for event storage.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/azure-blob-storage/ebb_azure_blob_connect_events.png" class="no-border" >}}

3. Click **Next** to proceed to the confirmation screen.

#### Overview of Azure Blob Storage Bridge

Once the Mendix Event Broker Bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/azure-blob-storage/ebb_azure_blob_overview.png" class="no-border" >}}


### Configuring a Bridge with AWS S3 {#bridge-with-aws-s3}

#### Configure Service

1. Configure the service by filling out the following:

* **Event Broker Space** – the space where the bridge will operate
* **Name** – the name you want to call the bridge
* **Bucket** – the path of the container where the messages will be stored
* **AWS Region for Bucket** – the AWS region where your S3 bucket is located
* **AWS Role (to Assume)** – the Amazon Resource Name (ARN) of the IAM role that the Event Broker Bridge will assume to access your S3 bucket; this role must be configured with appropriate permissions and a trust policy allowing the Event Broker to assume it
* **AWS Role's External Id** – a unique identifier that provides additional security when the Event Broker assumes your AWS role; this shared secret ensures that only authorized Mendix Event Broker instances can assume the role

{{% alert color="info" %}}
For detailed instructions on how to create the IAM role and obtain these values, see [Configure AWS Authentication for S3 Bridge](#configure-aws-s3-authentication).
{{% /alert %}}

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-s3/ebb_aws_s3_configure.png" class="no-border" >}}

2. Click **Next** to connect events to your bridge.

#### Connect Events

Select the business events to integrate with AWS S3:

1. Click **Add Business Events** to open a dialog displaying all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events. Only events capable of publishing are shown, as this bridge operates in one direction.
2. Select the event(s) to integrate and specify the prefix path for event storage.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-s3/ebb_aws_s3_connect_events.png" class="no-border" >}}

3. Click **Next** to proceed to the confirmation screen.

#### Overview of AWS S3 Bridge

Once the Mendix Event Broker Bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-s3/ebb_aws_s3_overview.png" class="no-border" >}}


#### Configure AWS Authentication for S3 Bridge {#configure-aws-s3-authentication}

The Mendix Event Broker runs in AWS and uses cross-account authentication to securely access your S3 bucket. This authentication mechanism leverages AWS IAM roles with trust policies and external IDs to ensure secure, controlled access.

##### Prerequisites

* Access to your AWS account with permissions to create and manage IAM roles
* An S3 bucket where business events will be stored
* The Mendix Event Broker AWS account ID: `044806572671`

##### Create an IAM Role with a Trust Policy

The trust policy defines which AWS accounts can assume the role.

1. Navigate to **IAM** > **Roles** in your AWS Console.
2. Click **Create role**.
3. Select **AWS account** as the trusted entity type.
4. Choose **Another AWS account**.
5. Enter the Mendix Event Broker AWS account ID: `044806572671`
6. Select **Require external ID** and enter a unique external ID of your choice. This external ID will be required when configuring the bridge in the Event Broker Manager.
7. Click **Next**.

{{% alert color="info" %}}
The external ID acts as a shared secret between Mendix and your AWS account. This prevents the confused deputy problem and ensures that only authorized Event Broker instances can assume your role.
{{% /alert %}}

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-s3/ebb_aws_s3_create_a_cross_account_role_in_aws.png" class="no-border" width="400" >}}

##### Attach Permissions Policy to the Role

The permissions policy defines what actions the Event Broker can perform once the role is assumed.

1. Click **Create policy** to create a new policy, or select an existing policy.
2. If creating a new policy, use the following JSON template to grant the necessary S3 permissions:

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AllowWriteObjects",
                "Effect": "Allow",
                "Action": [
                    "s3:PutObject",
                    "s3:PutObjectAcl",
                    "s3:DeleteObject"
                ],
                "Resource": "arn:aws:s3:::BUCKET_NAME/*"
            },
            {
                "Sid": "AllowListBucket",
                "Effect": "Allow",
                "Action": "s3:ListBucket",
                "Resource": "arn:aws:s3:::BUCKET_NAME"
            }
        ]
    }
    ```

3. Replace `BUCKET_NAME` with your actual S3 bucket name.
4. Name your policy (for example, `EventBrokerS3WritePolicy`) and create it.
5. Attach the policy to your IAM role.
6. Click **Next**.

{{% alert color="info" %}}
The policy above grants the minimum required permissions for the Event Broker to write business events to your S3 bucket. Adjust the permissions as needed based on your security requirements.
{{% /alert %}}

##### Complete Role Creation

1. Provide a name for your role (for example, `EventBrokerS3AccessRole`).
2. Review the role configuration and click **Create role**.
3. Once created, open the role and copy the **Role ARN** (it will look like this: `arn:aws:iam::YOUR_ACCOUNT_ID:role/EventBrokerS3AccessRole`).

##### Configure the Bridge

Use the Role ARN and External ID when configuring your AWS S3 bridge in the Event Broker Manager.


### Managing Bridges

After creating a bridge, you can modify and manage its configuration through the Event Broker Manager.

#### Editing Bridges

You can edit HTTP, Azure Blob Storage, and AWS S3 bridges to modify their configuration as your integration requirements evolve, without needing to recreate the bridge.

{{% alert color="info" %}}You can only edit a bridge when its status is **Running**.{{% /alert %}}

You can edit:

* **HTTP Bridge** – add or remove business events
* **Azure Blob Storage Bridge** – add or remove business events, update Storage Account, Storage SAS Token, Container Path, or Prefix Path
* **AWS S3 Bridge** – add or remove business events, update Bucket, AWS Region for Bucket, or Prefix Path

To edit a bridge:

1. On the [Event Broker Manager](https://broker.mendix.com/) page, navigate to the **Event Broker Bridges** tab.
2. Click the bridge you want to modify.
3. Click **Edit** to enter editing mode.

    In editing mode, you can perform the following actions:

      * **Add Business Events**:

          1. Click **Add Business Events** to open a dialog that displays available events.
          2. Select the events you want to add and click **Select**. Added events will display an **Added** badge and can be removed before applying changes.

      * **Remove Business Events**:

          1. Navigate to the event you want to remove and click **Remove**. Removed events will display a **Removed** badge, and their name and metadata will appear grayed out.
          2. Re-add a removed event by clicking **Add** before applying changes.

           {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/ebb_http_edit_mode.png" class="no-border" >}}
      
      * **Update Service Configuration** (Azure Blob Storage and AWS S3 only):
      
          * **Azure Blob Storage** – update the Storage Account, Storage SAS Token, Container Path, or Prefix Path as needed
          * **AWS S3** – update the Bucket, AWS Region for Bucket, or Prefix Path as needed

**HTTP** 
    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/ebb_http_edit_mode.png" class="no-border" >}}

**Azure Blob Storage** 
    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/ebb_azure_blob_edit_mode.png" class="no-border" >}}

**AWS S3** 
    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/ebb_aws_s3_edit_mode.png" class="no-border" >}}


4. Once you have made your changes, you can:
   * Click **Apply** to save and apply the changes. A confirmation message will indicate if the changes were successful. Changes to the event configuration take effect when applied. After applying changes, the bridge status will change to **Reconfiguring** and will return to **Running** once the reconfiguration is complete.
   * Click **Cancel** to exit editing mode without saving any changes.

{{% alert color="info" %}}
The **Apply** button is only enabled when changes have been made to the bridge configuration.
{{% /alert %}}

{{% alert color="warning" %}}
If an error occurs during the editing process, the bridge will automatically roll back to its previous running state to ensure continuity of service.
{{% /alert %}}

## Externally Defined Events {#externally-defined-events}

Externally defined events refer to events that are defined outside the Mendix application, specifically outside Studio Pro.

The Mendix Event Broker allows users to upload an AsyncAPI document for these external events. Once uploaded, users can download a new AsyncAPI document compatible with [Mendix Business Events](/appstore/services/business-events/), which can then be imported into Studio Pro to share the events across Mendix applications or use them in a new [Bridge](#manage-mx-broker-bridge).

### Upload Events

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Uploaded Events** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

To begin, click **Get Started** or **Upload AsyncAPI Document**.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_get_started.png" >}}

#### Upload an AsyncAPI File

Upload an AsyncAPI contract based on the [AsyncAPI format](#asyncapi-format). If there are any errors with the content or file format, an error box will display a list of the issues found.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_create_1.png" >}}

#### Verify File Information

The details of the uploaded file are extracted in the **Verify** section. This allows you to confirm that all information is accurate and meets the required expectations.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_create_2.png" >}}

#### Choose Spaces

Select the spaces where the events will be used. When at least one space is selected, the **Create Service** button will be enabled. Click **Create Service** to create the service.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_create_3.png" >}}

#### Successful Page

You will get a confirmation that the externally defined events have been successfully uploaded and are now ready to be used in Bridges or applications.

Click **Close** to continue.

For more information on how to use an event, see [Usages](#event-usages).

### Overview Page

After a service is uploaded, it can be viewed on the Overview page. This page presents a list of uploaded events, along with their corresponding services and the spaces selected for the AsyncAPI.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_overview.png" >}}

### Events and Services Details

From the Overview page, users can access the Event and Service details by clicking on the event or service name in the table. Each page includes a drop-down selection for a space, which allows you to manage services and events specific to that space.

#### Event Details

This page provides information about the uploaded event, including the event name, PUB/SUB details, attributes, and [usages](#event-usages).

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_event_page.png" >}}

#### Service Details {#service-details}

The services details page includes information about the uploaded services, including the service name, description, and associated events. You can also delete a service within the selected space (subject to [deletion conditions](#delete-service)) and download the AsyncAPI contract to import into an existing Mendix application (for more information, see [Application Usages](#usages-app)).

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_service_page.png" >}}

### Event Usages {#event-usages}

Once an AsyncAPI contract is successfully uploaded, it can be used through Bridges or applications.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_event_usages.png" >}}

#### Bridges

To use an uploaded event in a Bridge, you must configure a [Bridge with AWS SQS](#bridge-with-aws-sqs). During the step **Choose business events to connect**, the newly uploaded events in the selected space from the previous step will be visible.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_add_bridge.png" >}}

#### Applications {#usages-app}

To use an uploaded event in an application, download the AsyncAPI contract for Studio Pro and import it as a new business event in your Mendix application. The download button is available on the [Service Details](#service-details) page.

Use the **Use an existing business event service** option to import the file as a new business event.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_import_file.png" >}}

Click **OK**. This creates the new business event that is ready to be used with the same features as any other imported event.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_imported_file.png" >}}

### Delete Service {#delete-service}

You can delete a service on the Service Details page. Deletion is only possible if the service is not being used in the selected space. This action is irreversible. If you want to re-upload the service to the space, you will need to upload the file again.

{{% alert color="info" %}}

Deleting a service only removes it from the selected space. The service will remain available in other spaces, if applicable.

{{% /alert %}}

### AsyncAPI Format {#asyncapi-format}

Externally defined events are provided to the Event Broker via an AsyncAPI document, which must include the service information and event definitions. Any other content within the AsyncAPI document, if provided, will be ignored.

The mandatory information required in the file includes:

* **Title** – the service name
* **Message** – represents the business events
* **Payload** – the attributes that form the message

{{% alert color="info" %}}

Message names must be unique. Duplicate events cannot be uploaded if it is deployed anywhere in the Mendix space or uploaded before.

{{% /alert %}}

The supported version of AsyncAPI is 2.0.0, in accordance with [AsyncAPI documentation](https://v2.asyncapi.com/docs/reference/specification/v2.2.0).

The file requirements are listed below:

* Size: maximum file size is 1MB.
* Supported files: *.yml*, *.yaml*, *.json*
