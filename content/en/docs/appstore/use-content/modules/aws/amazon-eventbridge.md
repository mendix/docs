---
title: "Amazon EventBridge"
url: /appstore/modules/aws/amazon-eventbridge/
description: "Describes the configuration and usage of the Amazon EventBridge connector from the Mendix Marketplace. Amazon EventBridge is a serverless service that uses events to connect application components together."
weight: 20
aliases:
    - /appstore/connectors/aws/amazon-eventbridge/
---

## 1 Introduction

The [Amazon EventBridge](https://marketplace.mendix.com/link/component/208548) connector enables you to connect your app to [Amazon EventBridge](https://aws.amazon.com/eventbridge/) and easily build event-driven applications.

### 1.1 Typical Use Cases

Amazon EventBridge is a serverless service that uses events to connect application components together, making it easier for you to build scalable event-driven applications. Use it to route events from sources such as home-grown applications, AWS services, and third-party software to consumer applications across your organization. Amazon EventBridge provides a simple and consistent way to ingest, filter, transform, and deliver events so you can build new applications quickly. Some typical use cases of Amazon EventBridge are:

* Application integration - Amazon EventBridge can be used to integrate multiple applications and services in a serverless architecture. You can use it to trigger other Amazon services (such as AWS Lambda functions, Amazon EC2 instances, Amazon SNS topics based on events), or send the events to a different application.
* Monitoring and auditing - Amazon EventBridge provides a centralized event hub that can be used to monitor and audit events across your AWS accounts and SaaS applications. You can use EventBridge to receive notifications and take actions based on specific events.
* Building event-driven workflows - Amazon EventBridge can be used to build event-driven workflows where you can orchestrate multiple AWS services and SaaS applications using events.
* Integrating third-party services - Amazon EventBridge enables you to integrate with third-party SaaS applications and services. You can use Amazon EventBridge to receive events from these services and take actions based on them.

### 1.2 Prerequisites {#prerequisites}

The Amazon EventBridge connector requires Mendix Studio Pro 9.18.0 or above.

To use the Amazon EventBridge connector, you must also install and configure the following modules:

* [AWS Authentication connector version 3.0.0 or higher](https://marketplace.mendix.com/link/component/120333) - This connector is required to authenticate with Amazon Web Services (AWS). It is crucial for the Amazon EventBridge connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).
* [Community Commons module](https://marketplace.mendix.com/link/component/170) - This module is a required dependency for the Amazon EventBridge connector.

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the Amazon EventBridge connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonEventBridgeConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon EventBridge. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication {#authentication}

In order to use the Amazon EventBridge service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon EventBridge, you can implement the functions of the connector by using the provided activities in microflows.
 
#### 3.2.1 Sending Events to an Event Bus

To send events to an event bus in your AWS environment, implement the [PutEvents](#put-events) activity by performing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.

    {{< figure src="/attachments/appstore/use-content/modules/aws-eventbridge/eventbridge_create_microflow.png" class="no-border" >}}

2. Enter a name for your microflow, for example, *ACT_PutEvents*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonEventBridgeConnector** section, find the **PutEvents** activity.
4. Drag the **PutEvents** activity onto the microflow you are working on.
5. Double-click the **PutEvents** activity to configure the required parameters.

    For the **PutEvents** activity, you must specify the AWS Region, and add the `Credentials` and `PutEventsRequest` objects. The `PutEventsRequest` object requires at least one `RequestEntry` object associated with it, which defines the event that you want to send. To get your `Credentials` object, add either the **GetStaticCredentials** or the **GetTemporaryCredentials** microflow in front of your **PutEvents** activity, so that you can pass the `Credentials` object as input parameter of the activity.

    {{< figure src="/attachments/appstore/use-content/modules/aws-eventbridge/eventbridge_put_events_actions.png" class="no-border" >}}

6. In the **Edit parameters** section, edit the **ENUM_Region** parameter and change **Type** to **Expression**. 
7. In the expression builder, type *ENUM_Region*, and then press **Ctrl+Space** to open the autocomplete dialog. 
8. From the autocomplete dialog, select **AWSAuthentication.ENUM_Region**, and then type “**.**” to get the enumeration values and select your AWS region from the list.

    {{< figure src="/attachments/appstore/use-content/modules/aws-eventbridge/eventbridge_put_events_choose_aws_region.png" class="no-border" >}}

9. Click **OK**.
10. Configure the **GetStaticCredentials** or **GetTemporaryCredentials** microflow.
11. Open a page that contains a data view to show all the parameters of the `PutEventsResponse` object and its associated `ResponseEntry` objects, which is the response of the **PutEvents** activity.
12. Configure a method to trigger the *ACT_ PutEvents* microflow. 
    For example, you can associate the activity with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).
 
#### 3.2.2 Receiving Events in your Mendix App

To be able to receive events to your Mendix app, you first need to add your Mendix app as an API destination in your AWS console. To create an API destination, you need a connection in your AWS console that defines the authorization type and credentials to use for authorization with the HTTP endpoint of your API destination. With the Amazon Eventbridge Connector, you can use the **RegisterMyMendixApp** microflow to create or update a connection or an API destination through your application's URL.

To configure your Mendix app to receive events, perform the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.

    {{< figure src="/attachments/appstore/use-content/modules/aws-eventbridge/eventbridge_create_microflow.png" class="no-border" >}}

2. Enter a name for your microflow, for example *ASU_System*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonEventBridgeConnector** section, find the **RegisterMyMendixApp** microflow.
4. Drag the **RegisterMyMendixApp** microflow onto the microflow you are working on.

    {{< figure src="/attachments/appstore/use-content/modules/aws-eventbridge/register_app.png" class="no-border" >}}

5. In the **App Explorer**, in the **AmazonEventBridgeConnector** section, find the **APIKey** constant and define the API key that will be used for the authentication of your connection.

    {{< figure src="/attachments/appstore/use-content/modules/aws-eventbridge/eventbridge_register_apikey.png" class="no-border" >}}

6. In the microflow that you created, double-click the **RegisterMyMendixApp** microflow to configure the required parameters.
    
    For the **RegisterMyMendixApp** microflow, you must specify the AWS Region, add your `Credentials`, and add a `Name` and `Description` parameter. The `Name` parameter is used to check if a connection with the given name exists. If the name does not exist, a new connection with the given `Name` and `Description` parameters and API authentication method with the **APIKey** constant is created. If the connection already exists, it is updated with the given parameters. The `Name` parameter is then used to check if an API destination with the given name exists. If the destination does not exist, a new API destination is created with the given `Name` and `Description` parameters, the previously created connection, and the `{ApplicationURL}/rest/EventBridge/v1/event` invocation endpoint. If an API destination with the given name exists, it is updated with the parameters. 
    To get your `Credentials` object, add either the **GetStaticCredentials** or the **GetTemporaryCredentials** microflow in front of the **RegisterMyMendixApp** microflow, so that you can pass the `Credentials` object as input parameter.

    {{< figure src="/attachments/appstore/use-content/modules/aws-eventbridge/eventbridge_register_credentials.png" class="no-border" >}}

7. In the **Edit parameters** section, edit the **ENUM_Region** parameter and change **Type** to **Expression**. 
8. In the expression builder, type *ENUM_Region* and then press **Ctrl+Space** to open the autocomplete dialog. 
9. From this autocomplete dialog, select **AWSAuthentication.ENUM_Region**, and then type “**.**” to get the enumeration values and select your AWS region from the list.

    {{< figure src="/attachments/appstore/use-content/modules/aws-eventbridge/eventbridge_register_choose_aws_region.png" class="no-border" >}}

10. Click **OK**.
11. Configure the **GetStaticCredentials** or **GetTemporaryCredentials** microflow.
12. Configure a method to trigger the *ASU_System* microflow. As a best practice, consider adding the microflow to the **Runtime settings** of your app and add this as the *After startup** microflow. For an example of how a different trigger method can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).

    {{< figure src="/attachments/appstore/use-content/modules/aws-eventbridge/eventbridge_register_configure_asu.png" class="no-border" >}}

    Your connection and API destination will be updated in the AWS console every time your app is restarted. Messages can now be sent to your Mendix app using the specified API destination. 
13. To define what should happen when you receive events with different Event Types, create EventRoutingConfiguration settings by doing the following steps:
 
    1. In the **App Explorer**, in the **AmazonEventBridgeConnector** section, find the **CreateConfiguration** Java action.
    2. Drag as many **CreateConfiguration** Java actions as different types of events you might receive onto the microflow you are working on.

        {{< figure src="/attachments/appstore/use-content/modules/aws-eventbridge/add_config.png" class="no-border" >}}

    3. Double-click the **CreateConfiguration** Java actions to configure the required parameters.

        For the **CreateConfiguration** Java action, you must specify the `EventType` and `CallbackMicroflow` parameters. The `EventType` parameter must be the event type of one of the events your app will receive, and the `CallbackMicroflow` parameter must be a callback microflow with an `HttpRequest` object as its input parameter. The microflow will be called when an event with the given event type has been received.

        {{< figure src="/attachments/appstore/use-content/modules/aws-eventbridge/edit_config.png" class="no-border" >}}

14. Ensure that the Event Bus which you are using contains a Rule that propagates an event to your Mendix app's API destination. You can configure the relevant settings in the settings of your Event Bus in the AWS console.

## 4 Technical Reference

To help you work with the Amazon EventBridge connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Constants {#constants}

Constants are used to define configuration values. All activities are exported as microflow activities that can directly be added to a microflow. Make sure the constants are configured correctly as shown in the table below, so the connector can authenticate the request with AWS. For more information, see [Configuring AWS Authentication](#authentication).

| Name | Description | 
| --- | --- |
| `AmazonEventBridgeConnector.APIKey` | API key that will be used for the authentication of your connection. |

### 4.2 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

#### 4.2.1 UpdateConnection

##### 4.2.1.1 UpdateConnectionRequest

This entity holds information about the connection that is to be updated.

| Attribute | Description | 
| --- | --- |
| `Name` | Name of the connection|
| `Description` | Description of the connection|

The entity should also should contain one associated `UpdateBasisAuthParameters` object or one associated `UpdateApiKeyAuthParameters` object according to the authorization type.

##### 4.2.1.2 AbstractUpdateAuthParameters

This entity holds information about the authorization for the connection that is to be updated. It is inherited by `UpdateBasicAuthParameters` and `UpdateApiKeyAuthParameters`. Only one authorization object must be associated with the `UpdateConnectionRequest` object and the specialization of the `AbstractUpdateAuthParameters` can be used to determine the authorization type.

##### 4.2.1.3 UpdateBasicAuthParameters

| Attribute | Description | 
| --- | --- |
| `Username` | Username for the Basic authorization|
| `Password` | Password for the Basic authorization|

##### 4.2.1.4 UpdateApiKeyAuthParameters

| Attribute | Description | 
| --- | --- |
| `ApiKeyName` | Name of the API key for the API authorization|
| `ApiKeyValue` | Value of the API key for the API authorization|

##### 4.2.1.5 UpdateConnectionResponse

| Attribute | Description | 
| --- | --- |
| `ConnectionARN` | The ARN (Amazon Resource Name) of the updated connection |
| `ConnectionState` | The state of the updated connection |
| `CreationTime` |  Time stamp indicating the time when the connection was created |
| `LastAuthorizedTime` | Time stamp indicating the time when the connection was last authorized |
| `LastModifiedTime` |  Time stamp indicating the time when the connection was last modified |

#### 4.2.2 PutEvents

##### 4.2.2.1 PutEventsRequest

| Attribute | Description | 
| --- | --- |
| `EndpointId` | The URL subdomain of the endpoint |

The entity should contain at least one `RequestEntry` object, with a maximum of ten `RequestEntry` objects.

##### 4.2.2.2 RequestEntry

| Attribute | Description | 
| --- | --- |
| `Detail` | JSON object of the event | 
| `DetailType` | Free-form string used to decide what fields to expect in the event body | 
| `EventBusName` | Name or ARN of the event bus that receives the event (default bus used if omitted) | 
| `Source` | Source of the event | 
| `Time` | Time stamp of the event | 
| `TraceHeader` | AWS X-Ray trace header, which is an http header (`X-Amzn-Trace-Id`) that contains the `trace-id` associated with the event. |

Additionally, the entity contains a list of `Resource` objects.

##### 4.2.2.3 Resource

| Attribute | Description | 
| --- | --- |
| `ResourceName` | ARN of the AWS resource | 

#### 4.2.3 CreateConnection

##### 4.2.3.1 CreateConnectionRequest

This entity holds information about the connection that is to be created.

| Attribute | Description | 
| --- | --- |
| `Name` | Name of the connection|
| `Description` | Description of the connection|

Additionally, it should contain one associated `CreateBasicAuthParameters` object or one associated `CreateApiKeyAuthParameters` object according to the authorization type.

##### 4.2.3.2 AbstractCreateAuthParameters

This entity holds information about the authorization for the connection that is to be created. It is inherited by `CreateBasicAuthParameters` and `CreateApiKeyAuthParameters`. Only one authorization object must be associated with the `CreateConnectionRequest` object and the specialization of the `AbstractCreateAuthParameters` can be used to determine the authorization type.

##### 4.2.3.3 CreateBasicAuthParameters

| Attribute | Description | 
| --- | --- |
| `Username` | Username for the Basic authorization |
| `Password` | Password for the Basic authorization |

##### 4.2.3.4 CreateApiKeyAuthParameters

| Attribute | Description | 
| --- | --- |
| `ApiKeyName` | Name of the API key for the API authorization |
| `ApiKeyValue` | Value of the API key for the API authorization |

##### 4.2.3.5 CreateConnectionResponse

| Attribute | Description | 
| --- | --- |
| `ConnectionARN` | The ARN (Amazon Resource Name) of the created connection |
| `ConnectionState` | The state of the created connection |
| `CreationTime` |  Time stamp indicating the time that the connection was created |
| `LastModifiedTime` |  Time stamp indicating the time that the connection was last modified |

#### 4.2.4 CreateApiDestination {#CreateApiDestination}

##### 4.2.4.1 CreateApiDestinationRequest

| Attribute | Description | 
| --- | --- |
| `ConnectionArn` | ARN (Amazon Resource Name) of the connection to use for the API destination | 
| `Description` | Description of the API destination | 
| `HttpMethod` | The method to use for the request to the HTTP invocation endpoint | 
| `InvocationEndpoint` | The URL to the HTTP invocation endpoint  | 
| `InvocationRateLimitPerSecond` | The maximum number of requests per second to send to the HTTP invocation endpoint | 
| `Name` | Name for the API destination | 
| `Wildcard` | Whether the `CreateApiDestination` should add a wildcard token to the invocation endpoint. If set to true, the invocation endpoint will be suffixed by `/*` (false by default) | 

##### 4.2.4.2 CreateApiDestinationResponse

| Attribute | Description | 
| --- | --- |
| `ApiDestinationArn` | ARN (Amazon Resource Name) of the API destination | 
| `ApiDestinationState` | State of the API destination | 
| `CreationTime` | Time stamp indicating the time when the API destination was created | 
| `LastModifiedTime` | Time stamp indicating the time when the API destination was last modified | 

#### 4.2.5 DescribeConnection

##### 4.2.5.1 DescribeConnectionRequest

| Attribute | Description | 
| --- | --- |
| `Name` | Name of the connection |

##### 4.2.5.2 DescribeConnectionResponse

| Attribute | Description | 
| --- | --- |
| `ConnectionARN` | The ARN (Amazon Resource Name) of the updated connection |
| `CreationDateTime` |  Time stamp indicating the time that the connection was created |
| `Description` | Description of the connection | 
| `LastAuthorizedTime` | Time stamp indicating the time that the connection was last authorized |
| `LastModifiedTime` |  Time stamp indicating the time that the connection was last modified |
| `Name` | Name of the connection|
| `SecretArn` | The ARN of the secret of the connection|
| `StateReason` | The reason that the connection is in the current connection state |
| `ConnectionState` | The state of the updated connection |

It is associated with a `AbstractConnectionAuthResponseParameters` object.

##### 4.2.5.3 AbstractConnectionAuthResponseParameters

This entity holds information about the authorization of the connection. It is inherited by `ConnectionBasicAuthResponseParameters`, `ConnectionApiKeyAuthResponseParameters` and `ConnectionOAuthResponseParameters`. Only one authorization object is associated with the `DescribeConnectionResponse` object and the specialization of the `AbstractConnectionAuthResponseParameters` can be used to determine the authorization type.

It is associated with a `ConnectionAuthResponseConnectionHttpParameters` object.

##### 4.2.5.4 ConnectionAuthResponseConnectionHttpParameters

This entity contains additional parameters for the connection that are passed through with every invocation to the HTTP endpoint. It inherits from the [ConnectionHttpParametersUsage](#connectionhttpparametersusage) entity.

##### 4.2.5.5 ConnectionBasicAuthResponseParameters

| Attribute | Description | 
| --- | --- |
| `Username` | Username for the Basic authorization |

##### 4.2.5.6 ConnectionApiKeyAuthResponseParameters

| Attribute | Description | 
| --- | --- |
| `ApiKeyName` | Name of the API key for the API authorization |

##### 4.2.5.7 ConnectionOAuthResponseParameters

| Attribute | Description | 
| --- | --- |
| `AuthorizationEndpoint` | The URL of the HTTP endpoint that authorized the request | 
| `ConnectionOAuthHttpMethod` | The method to use for the request to the HTTP invocation endpoint |

It is associated with an `OauthConnectionHttpParameter` object and a `ConnectionOAuthClientResponseParameters` object.

##### 4.2.5.8 OauthConnectionHttpParameter

This entity has the additional HTTP parameters that are used for the OAuth authorization request. It inherits from the [ConnectionHttpParametersUsage](#connectionhttpparametersusage) entity.

##### 4.2.5.9 ConnectionOAuthClientResponseParameters

| Attribute | Description | 
| --- | --- |
| `ClientID` | Client ID associated with the response to the connection request | 

##### 4.2.5.10 ConnectionHttpParametersUsage {#connectionhttpparametersusage}

This entity contains additional parameters of the connection. It is associated with `ConnectionBodyParameter` objects, `ConnectionHeaderParameter` objects and `ConnectionQueryStringParameter` objects.

##### 4.2.5.11 ConnectionBodyParameter 

| Attribute | Description | 
| --- | --- |
| `Key` | The key for the parameter | 
| `IsSecretValue` | Specifies whether the value is secret | 
| `Value` | The value associated with the key | 

##### 4.2.5.12 ConnectionHeaderParameter 

| Attribute | Description | 
| --- | --- |
| `Key` | The key for the parameter | 
| `IsSecretValue` | Specifies whether the value is secret | 
| `Value` | The value associated with the key |

##### 4.2.5.13 ConnectionHeaderParameter 

| Attribute | Description | 
| --- | --- |
| `Key` | The key for the parameter | 
| `IsSecretValue` | Specifies whether the value is secret | 
| `Value` | The value associated with the key |

#### 4.4.6 DescribeApiDestination {#describe-api-destination}

##### 4.2.6.1 DescribeApiDestinationRequest

| Attribute | Description | 
| --- | --- |
| `Name` | Name of the API destination |

##### 4.2.6.2 DescribeApiDestinationResponse

| Attribute | Description | 
| --- | --- |
| `ApiDestinationArn` | ARN (Amazon Resource Name) of the API destination | 
| `ApiDestinationState` | State of the API destination | 
| `ConnectionArn` | ARN (Amazon Resource Name) of the connection of the API destination | 
| `CreationTime` | Time stamp indicating the time that the API destination was created | 
| `Description` | Description of the API destination | 
| `HttpMethod` | The method used for the request to the HTTP invocation endpoint | 
| `InvocationEndpoint` | The URL to the HTTP invocation endpoint  | 
| `InvocationRateLimitPerSecond` | The maximum number of requests per second to send to the HTTP invocation endpoint | 
| `LastModifiedTime` | Time stamp indicating the time that the API destination was last modified | 
| `Name` | Name of the API destination | 

#### 4.4.7 [UpdateApiDestination](#update-api-destination)

##### 4.2.7.1 UpdateApiDestinationRequest

| Attribute | Description | 
| --- | --- |
| `ConnectionArn` | ARN (Amazon Resource Name) of the connection to use for the API destination | 
| `Description` | Description of the API destination | 
| `HttpMethod` | The method to use for the request to the HTTP invocation endpoint | 
| `InvocationEndpoint` | The URL to the HTTP invocation endpoint  | 
| `InvocationRateLimitPerSecond` | The maximum number of requests per second to send to the HTTP invocation endpoint | 
| `Name` | Name of the API destination | 

##### 4.2.7.2 UpdateApiDestinationResponse

| Attribute | Description | 
| --- | --- |
| `ApiDestinationArn` | ARN (Amazon Resource Name) of the API destination | 
| `ApiDestinationState` | State of the API destination | 
| `CreationTime` | Time stamp indicating the time that the API destination was created | 
| `LastModifiedTime` | Time stamp indicating the time that the API destination was last modified | 

### 4.3 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the Amazon EventBridge connector, enumerations list values such as the list of available AWS regions, the API destination state, the connection state, and others.

#### 4.3.1 ApiDestinationState

| Name | Caption | 
| --- | --- | 
| ACTIVE | ACTIVE | 
| INACTIVE | INACTIVE | 
| UNKNOWN | UNKNOWN | 

#### 4.3.2 ConnectionOAuthHttpMethod

| Name | Caption | 
| --- | --- | 
| GET | GET | 
| POST | POST | 
| PUT | PUT | 
| UNKNOWN_TO_SDK_VERSION | UNKNOWN_TO_SDK_VERSION | 

#### 4.3.3 ConnectionState

| Name | Caption | 
| --- | --- | 
| AUTHORIZED | AUTHORIZED | 
| AUTHORIZING | AUTHORIZING | 
| CREATING | CREATING | 
| DEAUTHORIZED | DEAUTHORIZED | 
| DEAUTHORIZING | DEAUTHORIZING | 
| DELETING | DELETING |  
| UNKNOWN_TO_SDK_VERSION | UNKNOWN_TO_SDK_VERSION | 
| UPDATING | UPDATING |

#### 4.3.4 HttpMethod

| Name | Caption | 
| --- | --- | 
| POST | POST | 
| GET | GET | 
| HEAD | HEAD | 
| OPTIONS | OPTIONS | 
| PUT | PUT | 
| PATCH | PATCH | 
| DELETE | DELETE | 

### 4.4 Activities {#activities} 

Activities define the actions that are executed in a microflow or a nanoflow.

#### 4.4.1 UpdateConnection {#update-connection}

The `UpdateConnection` Amazon EventBridge action allows you to update connections in your AWS console from your Mendix app. It requires a valid `ENUM_Region` parameter and an `UpdateConnectionRequest` object and returns an `UpdateConnectionResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `UpdateConnectionRequest` | `UpdateConnectionResponse` |

The authorization types BASIC and API_KEY are available, but the OATH authentication method is currently not supported through our `UpdateConnection` action. Only one authorization method can used during the update of a connection; depending on the selected authorization type, you must associate either one `UpdateBasisAuthParameters` object or one `UpdateApiKeyAuthParameters` object with the `UpdateConnectionRequest` object. 

#### 4.4.2 PutEvents {#put-events}

The `PutEvents` Amazon EventBridge actions allows you to send custom events to Amazon EventBridge so that they can be matched to rules. It requires a valid `ENUM_Region` and `PutEventsRequest` object. It returns an PutEventsResponse object, which contains a list of ResponseEntry objects. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `PutEventsRequest` | `PutEventsResponse` |

#### 4.4.3 CreateConnection {#create-connection}

The `CreateConnection` Amazon EventBridge action allows you to create new connections in your AWS console from your Mendix app. It requires a valid `ENUM_Region` parameter and a `CreateConnectionRequest` object and returns a `CreateConnectionResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `CreateConnectionRequest` | `CreateConnectionResponse` |

The authorization types BASIC and API_KEY are available, but the OATH authentication method is currently not supported through our `CreateConnection` action. Only one authorization method can be set up during the creation of a connection; depending on the selected authorization type, you must associate either one `CreateBasisAuthParameters` object or one `CreateApiKeyAuthParameters` object with the `CreateConnectionRequest` object. 

#### 4.4.4 CreateApiDestination {#create-api-destination}

The `CreateApiDestination` Amazon EventBridge action allows you to create a custom API destination in your AWS console inside the Amazon EventBridge service so that events can be routed to the provided endpoint. It requires a valid `AWS region` and `CreateApiDestinationRequest` object. It returns a `CreateApiDestinationResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `CreateApiDestinationRequest` | `CreateApiDestinationResponse` |

#### 4.4.4.1 Endpoint parametrization {#endpoint-parametrization}

This subsection extends upon the [CreateApiDestination](#CreateApiDestination) section. In the `CreateApiDestination` request, you can configure the boolean attribute Wildcard. Upon setting this attribute to true, the API endpoint resource in Amazon EventBridge will have the wildcard `*` suffixed to configured invocation endpoint. This wildcard token acts as a placeholder to be replaced by a value that resides within the event body. An example of this would be a REST API for an order service where an order ID is passed as a path parameter: `http://myhosturl.com/rest/orderservice/v1/{orderID}`.

To replace the wildcard token in the `ApiDestination` resource in Amazon EventBridge, configure that inside of a Rule resource. When creating a Rule with an `ApiDestination` resource with a wildcard token in it, path parameters can be additionally passed. You must specify the name of the key that holds the information to replace the wildcard token, for example, `source`. For more information on Rules, see [Amazon EventBridge rules](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rules.html).

#### 4.4.5 DescribeConnection {#describe-connection}

The `DescribeConnection` Amazon EventBridge action allows you to get details on a specific connection that exists within EventBridge. It requires a valid `ENUM_Region` parameter and a `describeConnectionRequest` object and returns a `DescribeConnectionResponse` object. If the user enters a connection that does not exist, the `DescribeConnectionResponse` object will be empty. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `DescribeConnectionRequest` | `DescribeConnectionResponse` |

#### 4.4.6 DescribeApiDestination {#describe-api-destination}

The `DescribeApiDestination` Amazon EventBridge action allows you to get details on a specific API destination that exists within EventBridge. It requires a valid `ENUM_Region` parameter and a `DescribeApiDestinationRequest` object and returns a `DescribeApiDestinationResponse` object. If the user enters an API destination that does not exist, the returned `DescribeApiDestinationResponse` object will be empty. The input and output for this service are shown in the table below:

| Input | Output | 
| --- | --- | 
| `DescribeApiDestinationRequest` | `DescribeApiDestinationResponse` |

#### 4.4.7 UpdateApiDestination {#update-api-destination}

The `UpdateApiDestination` Amazon EventBridge action allows you to update a specific API destination that exists within EventBridge. It requires a valid `ENUM_Region` parameter and an `UpdateApiDestinationRequest` object and returns an `UpdateApiDestinationResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `UpdateApiDestinationRequest` | `UpdateApiDestinationResponse` |

#### 4.4.8 RegisterMyMendixApp {#register-my-mendix-app}

This custom microflow registers your Mendix application into the Amazon EventBridge service in the specified region. To use this microflow, add this microflow to an after start-up microflow and configure this in your runtime settings. Upon restarting your Mendix application, this microflow will expose your Mendix application as an custom endpoint in Amazon EventBridge.

This microflow requires the `APIKey` constant to be set, otherwise an error will be thrown.

This microflow uses actions to create the necessary Connection (`CreateConnection`) and ApiDestination (`CreateApiDestination`) resources. Additionally, the microflow validates whether the API endpoint (`DescribeApiDestination`) remains the same, and when it is invalidated, the value is updated accordingly (`UpdateApiDestination`). The Connection resource is always updated (`UpdateConnection`) as long as it exists. Because of this, the microflow supports changing the location of the Mendix application and rotating API keys. 

The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `Credentials` | `Boolean` |
| `Description` | |
| `Name` | |

#### 4.4.9 CreateConfiguration {#create-configuration}

The `CreateConfiguration` Java action allows you to create an `EventRoutingConfiguration` object for each event that you would want to be able to call. It takes an `EventType` and a `CallbackMicroflow` as parameters. The `CallbackMicroflow` is required to have an `HttpRequest` object as an input parameter. If the parameter is not provided, an `IllegalArgumentException` will be thrown.

If an `EventRoutingConfiguration` object with the same `EventType` already exists, the object will be updated with a new `CallbackMicroflow` value. The input and output for this service are shown in the table below:

| Input | Output | 
| --- | --- | 
| `EventType` | |
| `Callback` | |
