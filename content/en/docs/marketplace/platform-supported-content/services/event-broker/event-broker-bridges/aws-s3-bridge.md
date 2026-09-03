---
title: "Configure a Bridge with AWS S3"
url: /appstore/services/event-broker-bridges/aws-s3-bridge/
linktitle: "AWS S3 Bridge"
---

## Introduction

An AWS S3 Bridge is a one-way bridge that receives events via AWS object storage.

## Creating a Bridge

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Event Broker Bridges** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create.png" class="no-border" >}}

1. Click **Create a Bridge** to create a new bridge.
2. Select **AWS S3**.
3. Create and configure your bridge by following the steps in [Configure Service](#configure-http-bridge) below.
4. After configuring the service and connecting events (as described below), click **Start** on the confirmation screen to deploy the bridge.

Once the bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-s3/ebb_aws_s3_overview.png" class="no-border" >}}

## Configure Service

1. Configure the service by filling out the following:

    * **Event Broker Space** – the space where the bridge will operate
    * **Name** – the name you want to call the bridge
    * **Bucket** – the path of the container where the messages will be stored
    * **AWS Region for Bucket** – the AWS region where your S3 bucket is located
    * **AWS Role (to Assume)** – the Amazon Resource Name (ARN) of the IAM role that the Event Broker Bridge will assume to access your S3 bucket; this role must be configured with appropriate permissions and a trust policy allowing the Event Broker to assume it
    * **AWS Role's External Id** – a unique identifier that provides additional security when the Event Broker assumes your AWS role; this shared secret ensures that only authorized Mendix Event Broker instances can assume the role

        {{% alert color="info" %}}For detailed instructions on how to create the IAM role and obtain these values, see [Configure AWS Authentication for S3 Bridge](#configure-aws-s3-authentication).{{% /alert %}}

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-s3/ebb_aws_s3_configure.png"  >}}

2. Click **Next** to connect events to your bridge.

## Connect Events

Select the business events to integrate with AWS S3:

1. Click **Add Business Events** to open a dialog displaying all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events. Only events capable of publishing are shown, as this bridge operates in one direction.
2. Select the event(s) to integrate and specify the prefix path for event storage.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-s3/ebb_aws_s3_connect_events.png" >}}

3. Click **Next** to proceed to the confirmation screen.

## Configure AWS Authentication {#configure-aws-s3-authentication}

The Mendix Event Broker runs in AWS and uses cross-account authentication to securely access your S3 bucket. This authentication mechanism leverages AWS IAM roles with trust policies and external IDs to ensure secure, controlled access.

### Prerequisites

* Access to your AWS account with permissions to create and manage IAM roles
* An S3 bucket where business events will be stored
* The Mendix Event Broker AWS account ID: `044806572671`

### Create an IAM Role with a Trust Policy

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

### Attach Permissions Policy to the Role

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

### Complete Role Creation

1. Provide a name for your role (for example, `EventBrokerS3AccessRole`).
2. Review the role configuration and click **Create role**.
3. Once created, open the role and copy the **Role ARN** (it will look like this: `arn:aws:iam::YOUR_ACCOUNT_ID:role/EventBrokerS3AccessRole`).

### Configure the Bridge

Use the Role ARN and External ID when configuring your AWS S3 bridge in the Event Broker Manager.