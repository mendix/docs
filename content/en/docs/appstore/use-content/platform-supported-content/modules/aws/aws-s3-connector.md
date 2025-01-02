---
title: "Amazon S3"
url: /appstore/modules/aws/amazon-s3/
description: "Describes the configuration and usage of the Amazon S3 connector from the Mendix Marketplace. Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance."
weight: 20
aliases:
    - /appstore/connectors/aws/aws-s3-connector/
    - /appstore/connectors/aws/amazon-s3/
---

## Introduction

The [Amazon S3 connector](https://marketplace.mendix.com/link/component/120340) enables you to connect your app to [Amazon S3](https://aws.amazon.com/s3/) and easily store objects.

### Typical Use Cases

Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can store and protect any amount of data for virtually any use case, such as data lakes, cloud-native applications, and mobile apps. With cost-effective storage classes and easy-to-use management features, you can optimize costs, organize data, and configure fine-tuned access controls to meet specific business, organizational, and compliance requirements. Some typical use cases of Amazon S3 are:

* Build a data lake - Run big data analytics, artificial intelligence (AI), machine learning (ML), and high performance computing (HPC) applications to unlock data insights.
* Back up and restore critical data - Meet Recovery Time Objectives (RTO), Recovery Point Objectives (RPO), and compliance requirements with S3's robust replication features.
* Archive data at the lowest cost - Move data archives to the Amazon S3 Glacier storage classes to lower costs, eliminate operational complexities, and gain new insights.
* Run cloud-native applications - Build fast, powerful mobile and web-based cloud-native apps that scale automatically in a highly available configuration.

### Prerequisites {#prerequisites}

The Amazon S3 connector requires the [AWS Authentication connector version 2.1 or higher](https://marketplace.mendix.com/link/component/120333) to authenticate with Amazon Web Services (AWS). If you are using the Amazon S3 connector version 3.0 or higher, it requires the AWS Authentication connector version 3.0 or higher. It is crucial for the Amazon S3 connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Amazon S3 connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonS3Connector** section. The connector provides a [domain model and several activities](#technical-reference) that you can use to connect your app to Amazon S3. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### Configuring AWS Authentication

In order to use the Amazon S3 service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon S3, you can implement the functions of the connector by using the provided activities in microflows. For example, to create a bucket in S3, perform the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *DS_CreateBucket*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonS3Connector** > **Operations** section, find the **CreateBucket** activity.
4. Drag the **CreateBucket** activity onto the microflow you are working on.
5. Double-click the **CreateBucket** activity and configure the **AWS_Region** parameter by doing the following steps:
    1. Click **Edit parameter value**, edit the **ENUM_Region** parameter, and change **Type** to **Expression**.
    2. In the expression builder, type `ENUM_Region`, and then press <kbd>Ctrl</kbd> + <kbd>Space</kbd>.
    3. In the autocomplete dialog, select **AWSAuthentication.ENUM_Region**, then type *.* and select your AWS region from the list.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-s3-connector/awsregions.png" alt="The list of AWS regions" class="no-border" >}}
    
6. In the **App Explorer**, in the **AWSAuthentication** > **Operations** section, find the **GetStaticCredentials** and **GetTemporaryCredentials** actions.
7. Drag the one you would like to use onto the microflow you are working on, and position it between the microflow start event and the **CreateBucket** activity.
8. Double-click the microflow action and then configure the required **Region** parameter in the same way as described in step 5.
9. Double-click the **CreateBucket** activity and configure the **Credentials** parameter by doing the following steps:
    1. Click **Edit parameter value**.
    2. Edit the **Credentials** parameter and let it auto-fill.
10. In the **Toolbox** pane, search for the **Create Object** activity, drag it onto the microflow area, and position it between the **GetStaticCredentials** or **GetTemporaryCredentials** and the **CreateBucket** activity.
11. Double-click the **Create Object** activity, and then select **AmazonS3Connector.CreateBucketRequest** as the entity.
12. In the **Member** section, click **New**, and then select **BucketName** as the member.
13. Configure an expression to generate the names of the buckets created in Amazon S3 by the microflow.
{{% alert color="warning" %}}
The name generated by the expression must be all lower-case. If the bucket name is not lower-case, the Amazon S3 service will return an error.
{{% /alert %}}

14. Click **OK**, and then click **OK** again.
15. Double-click the **CreateBucket** activity and configure the **CreateBucketRequest** parameter by doing the following steps:
    1. Click **Edit parameter value**.
    2. Edit the **CreateBucketRequest** parameter and let it auto-fill.

 {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-s3-connector/microflow.png" alt="Configured microflow" class="no-border" >}}

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
