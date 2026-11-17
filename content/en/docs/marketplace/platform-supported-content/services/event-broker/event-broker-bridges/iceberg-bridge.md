---
title: "Configure a Bridge with Iceberg"
url: /appstore/services/event-broker-bridges/iceberg-bridge/
linktitle: "Iceberg Bridge"
description: "Describes how to configure an Iceberg bridge that delivers CDC events from the Mendix Event Broker to Iceberg tables in AWS S3 or Azure Blob Storage."
---

## Introduction

An Iceberg Bridge is a one-way bridge that delivers [Change Data Capture (CDC)](/refguide/change-data-capture/) events to Iceberg tables stored in AWS S3 or Azure Blob Storage.

## Configure Service

Configure the service by filling out the following:

* **Event Broker Space** – the space where the bridge operates
* **Name** – a name for the bridge
* **Choose a data lake** – the data lake that Iceberg uses to store your data
    * **Azure Blob Storage**
        * **Storage Account** – the storage account to access
        * **Storage SAS Token** – the SAS token used to access the storage account
        * **Container** – the container where the data is stored
    * **AWS S3**
        * **Bucket** – the bucket where the data is stored
        * **AWS Region for Bucket** – the AWS region where the bucket is located
        * **AWS Role (to Assume)** – the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that the bridge assumes to write to your S3 bucket
{{% alert color="info" %}}For instructions on creating the IAM role and getting its ARN, see the [Create an IAM Role for AWS S3](#create-iam-role) section.{{% /alert %}}

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/iceberg/ebb_iceberg_configure.png" alt="" width="400" >}}

### Create an IAM Role for AWS S3 {#create-iam-role}

If you store your data in AWS S3, create an IAM role in your AWS account that the bridge can assume to write Iceberg tables to your bucket. The role needs a trust policy that allows the Mendix Tableflow agent role to assume it, and a permissions policy that grants access to the bucket.

#### Prerequisites

* Access to your AWS account with permissions to create and manage IAM roles and policies
* The S3 bucket where the Iceberg tables are stored
* The ARN of the Mendix Tableflow agent role

#### Create the Role with a Trust Policy

The trust policy defines who can assume the role.

1. In the AWS Management Console, go to **IAM** > **Roles**.
2. Click **Create role**.
3. Select **Custom trust policy** as the trusted entity type.
4. Enter the following trust policy:

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AllowMendixTableflowAgent",
                "Effect": "Allow",
                "Principal": {
                    "AWS": "MENDIX_TABLEFLOW_AGENT_ROLE_ARN"
                },
                "Action": "sts:AssumeRole"
            }
        ]
    }
    ```

5. Replace *`MENDIX_TABLEFLOW_AGENT_ROLE_ARN`* with the ARN of the Mendix Tableflow agent role.
6. Click **Next**.

#### Attach a Permissions Policy

The permissions policy defines what the bridge can do after it assumes the role.

1. On the **Add permissions** page, click **Create policy**. The policy editor opens in a new browser tab.
2. Select **JSON** and enter the following policy to grant the required S3 permissions:

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AllowListBucket",
                "Effect": "Allow",
                "Action": "s3:ListBucket",
                "Resource": "arn:aws:s3:::BUCKET_NAME"
            },
            {
                "Sid": "AllowReadWriteObjects",
                "Effect": "Allow",
                "Action": [
                    "s3:GetObject",
                    "s3:PutObject",
                    "s3:DeleteObject"
                ],
                "Resource": "arn:aws:s3:::BUCKET_NAME/*"
            }
        ]
    }
    ```

3. If your bucket is encrypted with an AWS Key Management Service (KMS) key, add the following statement to the `Statement` array, separated from the previous statement by a comma:

    ```json
    {
        "Sid": "AllowKmsForBucketEncryption",
        "Effect": "Allow",
        "Action": [
            "kms:Decrypt",
            "kms:GenerateDataKey"
        ],
        "Resource": "KMS_KEY_ARN"
    }
    ```

4. Replace *`BUCKET_NAME`* with the name of your S3 bucket and, if applicable, *`KMS_KEY_ARN`* with the ARN of the KMS key that encrypts the bucket.
5. Name the policy (for example, `MendixIcebergBridgeS3Policy`) and create it.
6. Return to the browser tab where you are creating the role, refresh the list of policies, and select the policy you created.
7. Click **Next**.

{{% alert color="info" %}}
The bridge does not need AWS Glue permissions.
{{% /alert %}}

#### Complete the Role Creation

1. Enter a name for the role (for example, `MendixIcebergBridgeRole`).
2. Review the role configuration and click **Create role**.
3. Open the role and copy its ARN. The ARN has the format `arn:aws:iam::ACCOUNT_ID:role/MendixIcebergBridgeRole`, where *`ACCOUNT_ID`* is your AWS account ID.
4. When you configure the bridge, enter the role ARN in the **AWS Role (to Assume)** field.

### Bridge Statuses

Check the **Bridge Status** on the **Overview** page to verify that it is ready and operating as expected. The following list describes the possible bridge statuses.

* **Halted** – The bridge has stopped because an internal component failed. Data is not being delivered.
* **Provisioning** – The bridge is being created or initialized and is not yet ready to deliver data.
* **Delivering** – The bridge is healthy, fully configured, and actively delivering data to the destination.
* **Misconfigured** – The bridge is running, but its data flow is not healthy or cannot be fully verified. Check the bridge configuration and data flow.
* **Reconfiguring** – The bridge is applying configuration changes. Data delivery may be temporarily interrupted until the new configuration is synchronized.
* **Awaiting Data** – The bridge is running and ready, but no source data is currently flowing. Data delivery will begin when data becomes available.

## Connect Events

Select the CDC events that you want to deliver from the Event Broker to Iceberg:

1. Click **Add CDC Events** to open a dialog box displaying the available CDC events managed by the Event Broker. Only events that can be subscribed to are shown because the bridge delivers events in one direction, from the Event Broker to Iceberg.

   {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/iceberg/ebb_iceberg_connect_events.png" alt="" width="400" >}}

2. Select one or more CDC events to integrate. The Iceberg connection configuration is automatically generated based on the selected events.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/iceberg/ebb_iceberg_choose_cdc_events.png" alt="" width="400" >}}

3. Click **Next** to review and confirm the bridge configuration.

## Editing Bridges

You can edit an Iceberg bridge to modify the configuration as your integration requirements evolve, without needing to recreate it. For an Iceberg bridge, you can add or remove CDC events.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/ebb_iceberg_edit_mode.png" class="no-border" >}}

{{% alert color="info" %}}You can edit Iceberg bridges only when the status is **Delivering**. {{% /alert %}}

To edit a bridge:

1. On the [Event Broker Manager](https://broker.mendix.com/) page, navigate to the **Event Broker Bridges** tab.
2. Click the bridge you want to modify.
3. Click **Edit** to enter editing mode. In editing mode, you can perform the following actions:

      * **Add CDC Events** (Iceberg):

          1. Click **Add CDC Events** to open a dialog box that displays available CDC events.
          2. Select the CDC events you want to add and click **Select**. Added events display an **Added** badge and can be removed before applying changes.

      * **Remove CDC Events** (Iceberg):

          1. Navigate to the CDC event you want to remove and click **Remove**. Removed events display a **Removed** badge, and their name and metadata appear grayed out.
          2. To re-add a removed CDC event, click **Add** before applying changes.

4. Once you have made your changes, you can:
    * Click **Apply** to save and apply the changes. A confirmation message will indicate if the changes were successful. Changes to the event configuration take effect when applied. After applying changes, the bridge status will change to **Reconfiguring** and will return to **Running** once the reconfiguration is complete.
   * Click **Cancel** to exit editing mode without saving any changes.

{{% alert color="info" %}}
The **Apply** button is only enabled when changes have been made to the bridge configuration.
{{% /alert %}}

{{% alert color="warning" %}}
If an error occurs during the editing process, the bridge will automatically roll back to its previous running state to ensure continuity of service.
{{% /alert %}}
