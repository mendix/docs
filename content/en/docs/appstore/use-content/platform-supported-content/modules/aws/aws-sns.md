---
title: "Amazon SNS"
url: /appstore/modules/aws/amazon-sns/
description: "Describes the configuration and usage of the Amazon SNS connector from the Mendix Marketplace. Amazon Simple Notification Service (Amazon SNS) is a managed service that provides message delivery from publishers to subscribers (also known as producers and consumers)."
weight: 20
aliases:
    - /appstore/connectors/amazon-sns/
    - /appstore/connectors/aws/amazon-sns/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---
 
## Introduction
 
The [Amazon SNS connector](https://marketplace.mendix.com/link/component/204715) provides a way for you to enrich your Mendix app with app-to-app and app-to-person notifications by implementing [Amazon Simple Notification Service (SNS)](https://aws.amazon.com/sns/).
 
### Typical Use Cases
 
Amazon Simple Notification Service (SNS) can send app-to-app (A2A) and app-to-person (A2P) notifications. The A2A functionality provides high-throughput, push-based, many-to-many messaging between distributed systems, microservices, and event-driven serverless applications. These applications include Amazon Simple Queue Service (SQS), Amazon Kinesis Data Firehose, AWS Lambda, and other HTTPS endpoints. The A2P functionality lets you send messages to your customers with SMS, push notifications, and email.
 
### Prerequisites {#prerequisites}
 
The Amazon SNS connector requires Mendix Studio Pro 9.18.0 or above.
 
To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333). The Amazon SNS Connector version 3.0.0 and newer require at least version 3.0 of the AWS Authentication Connector. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).
 
{{% alert color="info" %}}
Ensure that the AWS user account used for authentication has the appropriate permissions to access the SNS service in AWS.
{{% /alert %}}

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation
 
Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Amazon SNS connector into your app.
 
## Configuration
 
After you install the connector, you can find it in the **App Explorer**, in the **AmazonSNSConnector** section. The connector provides a [domain model and several activities](#technical-reference) that you can use to connect your app to Amazon SNS. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.
 
### Configuring AWS Authentication
 
In order to use the Amazon SNS service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).
 
### Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon SNS, you can implement the functions of the connector by using the provided activities in microflows.

#### Subscribing to a Topic

To subscribe to a topic in your AWS environment and receive email notifications from it, implement the **Subscribe** activity by performing the following steps:

1. In the **App Explorer**, right-click the name of your module, and then click **Add microflow**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sns/sns_create_microflow.png" alt="Adding a microflow" class="no-border" >}}

2. Enter a name for your microflow, for example, *ACT_Subscribe_Email*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonSNSConnector** section, find the **Subscribe** activity.
4. Drag the **Subscribe** activity onto the microflow you are working on.
5. Double-click the **Subscribe** activity and configure the **AWS_Region** parameter by doing the following steps:

    1. Click **Edit parameter value**, edit the **ENUM_Region** parameter, and change **Type** to **Expression**.
    2. In the expression builder, type `ENUM_Region`, and then press **Ctrl** + **Space**.
    3. In the autocomplete dialog, select **AWSAuthentication.ENUM_Region**, then type *.* and select your AWS region from the list.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sns/sns_subscribe_aws_region.png" alt="Selecting the AWS region" class="no-border" >}}

6. In the **App Explorer**, in the **AWSAuthentication** > **Operations** section, find the **GetStaticCredentials** and **GetTemporaryCredentials** actions.
7. Drag the one you would like to use onto the microflow you are working on, and position it between the microflow start event and the **Subscribe** activity.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sns/sns_subscribe_actions.png" alt="Configuring the Subscribe activity" class="no-border" >}}

8. Double-click the microflow action and then configure the required **ENUM_Region** parameter in the same way as described in step 5.
9. Double-click the **Subscribe** activity and configure the **Credentials** parameter by doing the following steps:
    1. Click **Edit parameter value**.
    2. Edit the **Credentials** parameter and let it auto-fill.
10. From the Toolbox, drag a **CreateObject** activity to the microflow and position it before the **Subscribe** activity.
11. Select **SubscribeRequest** as the object to create.
12. Set the **TopicARN** attribute to the ARN of a SNS Topic to subscribe to.
13. Drag another **CreateObject** activity next to the **SubscribeRequest** object and configure it to create an object of type **EmailEndpoint**.
14. Set the **EmailAddress** attribute to a valid Email address that should receive messages.
15. Set the **SubscribeRequest_AbstractEndpoint** association to the **SubscribeRequest** object you created in step 11.
16. Double-click the **Subscribe** activity and configure the **SubscribeRequest** parameter by doing the following steps:
    1. Click **Edit parameter value**.
    2. Edit the **SubscribeRequest** parameter and let it auto-fill.
17. Open a page that contains a data view to show all the parameters of the `SubscribeResponse`, which is the response of the **Subscribe** activity.
18. Configure a method to trigger the *ACT_Subscribe_Email* microflow. For example, you can associate the activity with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).
 
#### Sending Messages to a Topic

To be able to send a message to a topic so that all endpoints subscribed to that topic will receive the message, implement the **PublishBatch** activity by performing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sns/sns_create_microflow.png" alt="Creating a microflow" class="no-border" >}}

2. Enter a name for your microflow, for example, *ACT_PublishBatch*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonSNSConnector** section, find the **PublishBatch** activity.
4. Drag the **PublishBatch** activity onto the microflow you are working on.
5. Double-click the **PublishBatch** activity y and configure the **ENUM_Region** parameter by doing the following steps:

    1. Click **Edit parameter value**, edit the **ENUM_Region** parameter, and change **Type** to **Expression**.
    2. In the expression builder, type `ENUM_Region`, and then press **Ctrl** + **Space**.
    3. In the autocomplete dialog, select **AWSAuthentication.ENUM_Region**, then type *.* and select your AWS region from the list.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sns/sns_publishbatch_aws_region.png" alt="Selecting the AWS region" class="no-border" >}}

6. In the **App Explorer**, in the **AWSAuthentication** > **Operations** section, find the **GetStaticCredentials** and **GetTemporaryCredentials** actions.
7. Drag the one you would like to use onto the microflow you are working on, and position it between the microflow start event and the **PublishBatch** activity.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-sns/sns_publishbatch_actions.png" alt="Adding the PublishBatch activity" class="no-border" >}}

8. Double-click the microflow action and then configure the required **ENUM_Region** parameter in the same way as described in step 5.
9. Double-click the **PublishBatch** activity and configure the **Credentials** parameter by doing the following steps:
    1. Click **Edit parameter value**.
    2. Edit the **Credentials** parameter and let it auto-fill.
10. In the **Toolbox** pane, search for the **Create Object** activity, drag it onto the microflow area, and position it between the **GetStaticCredentials** or **GetTemporaryCredentials** and the **PublishBatch** activity.
11. Double-click the **CreateObject** activity and select **PublishBatchRequest** as the entity to create.
12. Add another **CreateObject** activity before the **PublishBatchRequest** object and select **PublishBatchTopic** as the entity to create.
13. Provide values for the **ARN** and **Name** attributes of the **PublishBatchTopic** object.
14. Add another **CreateObject** activity after the **PublishBatchTopic** object and select **PublishBatchMessage** as the entity to create.
15. Provide values for the **Subject**, **Body** and **_Id** attributes of the **PublishBatchMessage** object.
16. Set the **PublishBatchMessage_PublishBatchTopic** association to the **PublishBatchTopic** object created in step 12.
17. Double-click the **PublishBatchRequest** and set the **PublishBatchRequest_PublishBatchTopic** association also to the **PublishBatchTopic** object created in step 12.
18. Double-click the **PublishBatch** activity and configure the **PublishBatchRequest** parameter by doing the following steps:
    1. Click **Edit parameter value**.
    2. Edit the **PublishBatchRequest** parameter and let it auto-fill.
19. Open a page that contains a data view to show all the parameters of the `PublishBatchResponse`, which is the response of the **PublishBatch** activity.
20. Configure a method to trigger the *ACT_PublishBatch* microflow. For example, you can associate the activity with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).
 
## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
