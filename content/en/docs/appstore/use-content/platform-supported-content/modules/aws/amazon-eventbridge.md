---
title: "Amazon EventBridge"
url: /appstore/modules/aws/amazon-eventbridge/
description: "Describes the configuration and usage of the Amazon EventBridge connector from the Mendix Marketplace. Amazon EventBridge is a serverless service that uses events to connect application components together."
weight: 20
aliases:
    - /appstore/connectors/aws/amazon-eventbridge/
---

## Introduction

The [Amazon EventBridge](https://marketplace.mendix.com/link/component/208548) connector enables you to connect your app to [Amazon EventBridge](https://aws.amazon.com/eventbridge/) and easily build event-driven applications.

### Typical Use Cases

Amazon EventBridge is a serverless service that uses events to connect application components together, making it easier for you to build scalable event-driven applications. Use it to route events from sources such as home-grown applications, AWS services, and third-party software to consumer applications across your organization. Amazon EventBridge provides a simple and consistent way to ingest, filter, transform, and deliver events so you can build new applications quickly. Some typical use cases of Amazon EventBridge are:

* Application integration - Amazon EventBridge can be used to integrate multiple applications and services in a serverless architecture. You can use it to trigger other Amazon services (such as AWS Lambda functions, Amazon EC2 instances, Amazon SNS topics based on events), or send the events to a different application.
* Monitoring and auditing - Amazon EventBridge provides a centralized event hub that can be used to monitor and audit events across your AWS accounts and SaaS applications. You can use EventBridge to receive notifications and take actions based on specific events.
* Building event-driven workflows - Amazon EventBridge can be used to build event-driven workflows where you can orchestrate multiple AWS services and SaaS applications using events.
* Integrating third-party services - Amazon EventBridge enables you to integrate with third-party SaaS applications and services. You can use Amazon EventBridge to receive events from these services and take actions based on them.

### Prerequisites {#prerequisites}

The Amazon EventBridge connector requires Mendix Studio Pro 9.18.0 or above.

To use the Amazon EventBridge connector, you must also install and configure the following modules:

* [AWS Authentication connector version 3.0.0 or higher](https://marketplace.mendix.com/link/component/120333) - This connector is required to authenticate with Amazon Web Services (AWS). It is crucial for the Amazon EventBridge connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).
* [Community Commons module](https://marketplace.mendix.com/link/component/170) - This module is a required dependency for the Amazon EventBridge connector.

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Amazon EventBridge connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonEventBridgeConnector** section. The connector provides a [domain model and several activities](#technical-reference) that you can use to connect your app to Amazon EventBridge. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### Configuring AWS Authentication {#authentication}

In order to use the Amazon EventBridge service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon EventBridge, you can implement the functions of the connector by using the provided activities in microflows.
 
#### Sending Events to an Event Bus

To send events to an event bus in your AWS environment, implement the **PutEvents** activity by performing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-eventbridge/eventbridge_create_microflow.png" class="no-border" >}}

2. Enter a name for your microflow, for example, *ACT_PutEvents*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonEventBridgeConnector** section, find the **PutEvents** activity.
4. Drag the **PutEvents** activity onto the microflow you are working on.
5. Double-click the **PutEvents** activity to configure the required parameters.

    For the **PutEvents** activity, you must specify the AWS Region, and add the `Credentials` and `PutEventsRequest` objects. The `PutEventsRequest` object requires at least one `RequestEntry` object associated with it, which defines the event that you want to send. To get your `Credentials` object, add either the **GetStaticCredentials** or the **GetTemporaryCredentials** microflow in front of your **PutEvents** activity, so that you can pass the `Credentials` object as input parameter of the activity.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-eventbridge/eventbridge_put_events_actions.png" class="no-border" >}}

6. In the **Edit parameters** section, edit the **ENUM_Region** parameter and change **Type** to **Expression**. 
7. In the expression builder, type *ENUM_Region*, and then press <kbd>Ctrl</kbd> + <kbd>Space</kbd> to open the autocomplete dialog. 
8. From the autocomplete dialog, select **AWSAuthentication.ENUM_Region**, and then type “**.**” to get the enumeration values and select your AWS region from the list.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-eventbridge/eventbridge_put_events_choose_aws_region.png" class="no-border" >}}

9. Click **OK**.
10. Configure the **GetStaticCredentials** or **GetTemporaryCredentials** microflow.
11. Open a page that contains a data view to show all the parameters of the `PutEventsResponse` object and its associated `ResponseEntry` objects, which is the response of the **PutEvents** activity.
12. Configure a method to trigger the *ACT_ PutEvents* microflow. 
    For example, you can associate the activity with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).
 
#### Receiving Events in your Mendix App

To be able to receive events to your Mendix app, you first need to add your Mendix app as an API destination in your AWS console. To create an API destination, you need a connection in your AWS console that defines the authorization type and credentials to use for authorization with the HTTP endpoint of your API destination. With the Amazon Eventbridge Connector, you can use the **RegisterMyMendixApp** microflow to create or update a connection or an API destination through your application's URL.

To configure your Mendix app to receive events, perform the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-eventbridge/eventbridge_create_microflow.png" class="no-border" >}}

2. Enter a name for your microflow, for example *ASU_System*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonEventBridgeConnector** section, find the **RegisterMyMendixApp** microflow.
4. Drag the **RegisterMyMendixApp** microflow onto the microflow you are working on.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-eventbridge/register_app.png" class="no-border" >}}

5. In the **App Explorer**, in the **AmazonEventBridgeConnector** section, find the **APIKey** constant and define the API key that will be used for the authentication of your connection.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-eventbridge/eventbridge_register_apikey.png" class="no-border" >}}

6. In the microflow that you created, double-click the **RegisterMyMendixApp** microflow to configure the required parameters.
    
    For the **RegisterMyMendixApp** microflow, you must specify the AWS Region, add your `Credentials`, and add a `Name` and `Description` parameter. The `Name` parameter is used to check if a connection with the given name exists. If the name does not exist, a new connection with the given `Name` and `Description` parameters and API authentication method with the **APIKey** constant is created. If the connection already exists, it is updated with the given parameters. The `Name` parameter is then used to check if an API destination with the given name exists. If the destination does not exist, a new API destination is created with the given `Name` and `Description` parameters, the previously created connection, and the `{ApplicationURL}/rest/EventBridge/v1/event` invocation endpoint. If an API destination with the given name exists, it is updated with the parameters. 
    To get your `Credentials` object, add either the **GetStaticCredentials** or the **GetTemporaryCredentials** microflow in front of the **RegisterMyMendixApp** microflow, so that you can pass the `Credentials` object as input parameter.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-eventbridge/eventbridge_register_credentials.png" class="no-border" >}}

7. In the **Edit parameters** section, edit the **ENUM_Region** parameter and change **Type** to **Expression**. 
8. In the expression builder, type *ENUM_Region* and then press <kbd>Ctrl</kbd> + <kbd>Space</kbd> to open the autocomplete dialog. 
9. From this autocomplete dialog, select **AWSAuthentication.ENUM_Region**, and then type “**.**” to get the enumeration values and select your AWS region from the list.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-eventbridge/eventbridge_register_choose_aws_region.png" class="no-border" >}}

10. Click **OK**.
11. Configure the **GetStaticCredentials** or **GetTemporaryCredentials** microflow.
12. Configure a method to trigger the *ASU_System* microflow. As a best practice, consider adding the microflow to the **Runtime settings** of your app and add this as the *After startup** microflow. For an example of how a different trigger method can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-eventbridge/eventbridge_register_configure_asu.png" class="no-border" >}}

    Your connection and API destination will be updated in the AWS console every time your app is restarted. Messages can now be sent to your Mendix app using the specified API destination. 
13. To define what should happen when you receive events with different Event Types, create EventRoutingConfiguration settings by doing the following steps:
 
    1. In the **App Explorer**, in the **AmazonEventBridgeConnector** section, find the **CreateConfiguration** Java action.
    2. Drag as many **CreateConfiguration** Java actions as different types of events you might receive onto the microflow you are working on.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-eventbridge/add_config.png" class="no-border" >}}

    3. Double-click the **CreateConfiguration** Java actions to configure the required parameters.

        For the **CreateConfiguration** Java action, you must specify the `EventType` and `CallbackMicroflow` parameters. The `EventType` parameter must be the event type of one of the events your app will receive, and the `CallbackMicroflow` parameter must be a callback microflow with an `HttpRequest` object as its input parameter. The microflow will be called when an event with the given event type has been received.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-eventbridge/edit_config.png" class="no-border" >}}

14. Ensure that the Event Bus which you are using contains a Rule that propagates an event to your Mendix app's API destination. You can configure the relevant settings in the settings of your Event Bus in the AWS console.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
