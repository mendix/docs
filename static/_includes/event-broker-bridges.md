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

**Required Header:**

* **Authorization** – Must be set as a Bearer token using the Personal Access Token (PAT) generated during bridge configuration.
  
  Example: `Authorization: Bearer <your-personal-access-token>`
  
  For details on how to obtain your Bearer token, see [Using the HTTP Bridge](#using-the-http-bridge).

**Optional Headers:**

You can include additional HTTP headers in your request to provide event metadata, such as:

* `ce_time` – Sets the published time of the event (example: `2025-06-13T15:36:52.148542+02:00`)

All custom HTTP headers will be forwarded as Kafka headers by default.

### Creating a Bridge

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Event Broker Bridges** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create.png" class="no-border" >}}

1. Click **Create a Bridge** to create a new bridge.

2. Select one of the following bridge types:

    * **AWS SQS** – Bidirectional bridge using the [Amazon Simple Queue Service](https://aws.amazon.com/sqs/) to send and receive events.
    * **HTTP** – One-way bridge that uses HTTP requests to send events from external systems to the Mendix Event Broker.
    * **Azure Blob Storage** – One-way bridge that receives events via Azure object storage.
    * **AWS S3** – One-way bridge that receives events via AWS object storage.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/ebb_general_bridge_create.png" class="no-border" >}}

3. Click **Next** to continue with creating your bridge.

    * For instructions on configuring AWS SQS, see [Configuring a Bridge with AWS SQS](#bridge-with-aws-sqs).
    * For instructions on configuring HTTP, see [Configuring a Bridge with HTTP](#bridge-with-http).
    * For instructions on configuring Azure Blob Storage, see [Configuring a Bridge with Azure Blob Storage](#bridge-with-azure-blob-storage).
    * For instructions on configuring AWS S3, see [Configuring a Bridge with AWS S3](#bridge-with-aws-s3).

4. After configuring the service and connecting events (as described in the bridge-specific sections above), click **Start** on the confirmation screen to deploy the bridge.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/ebb_general_bridge_start.png" class="no-border" >}}

Once the bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

### Configuring a Bridge with AWS SQS {#bridge-with-aws-sqs}

The creation process for AWS SQS bridges includes two further steps on the Mendix side and policies that need to be implemented on the AWS side.

#### Configure Service

Configure the service by filling out the following:

* **Event Broker Space** – the space where the bridge will operate
* **Bridge Name** – the name you want to call the bridge
* **AWS Region** – the AWS region where your bridge operates

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_configure.png" class="no-border" width="400" >}}

Click **Next** to continue the configuration.

#### Connect Events

Select the business events to integrate with AWS SQS:

1. Click **Add Business Events** to open a dialog displaying all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events. 
2. Select the checkbox for the event(s) you want to add, then click **Select**.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_choose_events.png" class="no-border" width="400" >}}

3. Configure each event with its own SQS URL for each direction the event will be integrated.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_connect_events.png" class="no-border" width="400" >}}

4. Click **Next** to continue.

5. Confirm the configuration with the AWS Access Policy.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/ebb_aws_sqs_approve_policy.png" class="no-border" width="400" >}}

6. After all events have been configured, click **Start** to start the Mendix Event Broker Bridge. This process will take several minutes to complete.

#### Overview of AWS SQS Bridge

Once the Mendix Event Broker Bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_overview.png" class="no-border" width="400" >}}

#### Configure AWS Access Policy

You need to configure AWS access policies for both sending and receiving messages.

##### Sending Messages to Mendix

Add this object to the Access Policy of your AWS SQS queue if it is sending messages to Mendix.

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

Add this object to your Access Policy of the AWS SQS queue if it is receiving messages from Mendix.

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

Configure the service by filling out the following:

* **Event Broker Space** – the space where the bridge will operate
* **Bridge Name** – the name you want to call the bridge
* **AWS Region** – the AWS region where your bridge operates

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/ebb_http_configure.png" class="no-border" width="400" >}}

Click **Next** to connect events to your bridge.

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

1. Open the HTTP bridge details using **Options** ({{% icon name="three-dots-menu-horizontal" %}}) menu on the Overview page.
2. Add the **Bearer token**.

### Configuring a Bridge with Azure Blob Storage {#bridge-with-azure-blob-storage}

#### Configure Service

Configure the service by filling out the following:

* **Event Broker Space** – the space where the bridge will operate
* **Bridge Name** – the name you want to call the bridge
* **Storage Account** – the storage account to access
* **Storage SAS Token** – the storage SAS Token
* **Container Path** – the path of the container where the messages will be stored

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/azure-blob-storage/ebb_azure_blob_configure.png" class="no-border" >}}

Click **Next** to connect events to your bridge.

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

Configure the service by filling out the following:

* **Event Broker Space** – the space where the bridge will operate
* **Bridge Name** – the name you want to call the bridge
* **Bucket** – the path of the container where the messages will be stored
* **AWS Region for Bucket** – the AWS region where your S3 bucket is located
* **AWS Role to Assume** – the Amazon Resource Name (ARN) of the IAM role that the Event Broker Bridge will assume to access your S3 bucket. This role must be configured with appropriate permissions and a trust policy allowing the Event Broker to assume it.
* **AWS Role's External ID** – a unique identifier that provides additional security when the Event Broker assumes your AWS role. This shared secret ensures that only authorized Mendix Event Broker instances can assume the role.

{{% alert color="info" %}}
For detailed instructions on how to create the IAM role and obtain these values, see [Configure AWS Authentication for S3 Bridge](#configure-aws-s3-authentication).
{{% /alert %}}

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-s3/ebb_aws_s3_configure.png" class="no-border" >}}

Click **Next** to connect events to your bridge.

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

##### Step 1: Create an IAM Role with a Trust Policy

The trust policy defines which AWS accounts can assume the role.

1. Navigate to **IAM** > **Roles** in your AWS Console.
2. Click **Create role**.
3. Select **AWS account** as the trusted entity type.
4. Choose **Another AWS account**.
5. Enter the Mendix Event Broker AWS account ID: `044806572671`
6. Select **Require external ID** and enter a unique external ID of your choice. This external ID will be required when configuring the bridge in the Event Broker Manager.
7. Click **Next**.

{{% alert color="info" %}}
The external ID acts as a shared secret between Mendix and your AWS account, preventing the confused deputy problem and ensuring that only authorized Event Broker instances can assume your role.
{{% /alert %}}


  {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-s3/create-a-cross-account-role-in-AWS.png" class="no-border" width="400" >}}

##### Step 2: Attach Permissions Policy to the Role

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

##### Step 3: Complete Role Creation

1. Provide a name for your role (for example, `EventBrokerS3AccessRole`).
2. Review the role configuration and click **Create role**.
3. Once created, open the role and copy the **Role ARN** (it will look like `arn:aws:iam::YOUR_ACCOUNT_ID:role/EventBrokerS3AccessRole`).

##### Step 4: Configure the Bridge

Use the Role ARN and External ID when configuring your AWS S3 bridge in the Event Broker Manager:


### Managing Bridges

After creating a bridge, you can modify and manage its configuration through the Event Broker Manager.

#### Editing Bridges

You can edit HTTP, Azure Blob Storage, and AWS S3 bridges to modify their configuration as your integration requirements evolve, without needing to recreate the bridge.

{{% alert color="info" %}}You can only edit a bridge when its status is **Running**.{{% /alert %}}

**What You Can Edit:**

* **HTTP Bridge** – Add or remove business events
* **Azure Blob Storage Bridge** – Add or remove business events, update Storage Account, Storage SAS Token, Container Path, or Prefix Path
* **AWS S3 Bridge** – Add or remove business events, update Bucket, AWS Region for Bucket, or Prefix Path

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

        {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/http_edit_mode.png" class="no-border" >}}
      
      * **Update Service Configuration** (Azure Blob Storage and AWS S3 only):
      
          * **Azure Blob Storage** – Update the Storage Account, Storage SAS Token, Container Path, or Prefix Path as needed.
          * **AWS S3** – Update the Bucket, AWS Region for Bucket, or Prefix Path as needed.

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