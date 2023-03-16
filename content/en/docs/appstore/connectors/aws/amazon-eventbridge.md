---
title: "Amazon EventBridge"
url: /appstore/connectors/aws/amazon-eventbridge/
description: "Describes the configuration and usage of the Amazon EventBridge connector from the Mendix Marketplace. Amazon EventBridge is a serverless service that uses events to connect application components together."
weight: 20
tags: ["marketplace", "marketplace component", "aws", "amazon", "eventbridge", "connector"]
---

## 1 Introduction

The [Amazon EventBridge](https://marketplace.mendix.com/link/component/208548) connector enables you to connect your app to [Amazon EventBridge](https://aws.amazon.com/eventbridge/) and easily build event-driven applications.

### 1.1 Typical Use Cases

Amazon EventBridge is a serverless service that uses events to connect application components together, making it easier for you to build scalable event-driven applications. Use it to route events from sources such as home-grown applications, AWS services, and third- party software to consumer applications across your organization. EventBridge provides a simple and consistent way to ingest, filter, transform, and deliver events so you can build new applications quickly. Some typical use cases of Amazon EventBridge are:

* Application Integration: EventBridge can be used to integrate multiple applications and services in a serverless architecture. You can use it to trigger other Amazon services such as AWS Lambda functions, Amazon EC2 instances, Amazon SNS topics based on events or send the events to different application.
* Monitoring and auditing: EventBridge provides a centralized event hub that can be used to monitor and audit events across your AWS accounts and SaaS applications. You can use EventBridge to receive notifications and take actions based on specific events.
* Building event-driven workflows: EventBridge can be used to build event-driven workflows where you can orchestrate multiple AWS services and SaaS applications using events.
* Integrating third-party services: EventBridge enables you to integrate with third-party SaaS applications and services. You can use EventBridge to receive events from these services and take actions based on them.

### 1.2 Prerequisites {#prerequisites}

The Amazon EventBridge connector requires the [AWS authentication connector version 2.1 or higher](https://marketplace.mendix.com/link/component/120333) to authenticate with Amazon Web Services (AWS). It is crucial for the Amazon EventBridge connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon EventBridge connector into your app.

## 3 Configuration

Once the installation is complete, the connector will be available as an Add-on at the App Explorer, with the name AmazonEventBridgeConnector section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon EventBridge. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication {#authentication}

In order to use the Amazon EventBridge service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.
The Amazon EventBridge connector supports both session and static credentials. By default, the connector is pre-configured to use static credentials, but you may want to switch to session credentials, for example, to increase the security of your app. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
3. In the App Explorer, double-click the Settings for your app.

    {{< figure src="/attachments/appstore/connectors/aws-eventbridge/eventbridge_open_settings.png" alt="The Settings option in the App Explorer">}}

4. In the App Settings dialog, in the Configurations tab, edit or create an authentication profile.

    If you have multiple sets of AWS credentials, or if you want to use both static and session credentials for different use cases, create separate authentication profiles for each set of credentials.

5. In the Edit Configuration dialog, in the Constants tab, click New to add the constants required for the configuration.
6. In the Select Constants dialog, find and expand the AmazonEventBridgeConnector > ConnectionDetails section.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/eventbridge_edit_configuration.png" alt="The SessionCredentials and StaticCredentials items in the ConnectionDetails section">}}

7. Depending on your selected authentication type, configure the required parameters for the StaticCredentials or SessionCredentials.
   
| Credentials type | Parameter | Value | 
| --- | --- | --- | 
| Any | UseStaticCredentials | true if you want to use static credentials, or false for session credentials | 
| StaticCredentials | AccessKey | Access key ID [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites) | 
| StaticCredentials | SecretKey | Secret key [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites) | 
| SessionCredentials | Role ARN | [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS role that the connector should assume | 
| SessionCredentials | Profile ARN | ARN of the profile [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) | 
| SessionCredentials | Trust Anchor ARN | ARN of the trust anchor [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) | 
| SessionCredentials | Client Certificate Identifier | The Client Certificate Pin visible in the Outgoing Certificates section on the Network tab in the Mendix Cloud environment | 
| SessionCredentials | Duration | Duration for which the session token should be valid; after the duration passes, the validity of the session credentials expires | 
| SessionCredentials | Session Name | An identifier for the session |

### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon EventBridge, you can implement the functions of the connector by using the provided activities in microflows. For example, to get information about aa API destination that exists in your AWS console, implement the [DescribeApiDestination](#describe-api-destination) activity by performing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_DescribeApiDestination*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonEventBridgeConnector** section, find the **DescribeApiDestination** activity.
4. Drag the **DescribeApiDestination** activity onto the microflow you are working on.
5. Double-click the **DescribeApiDestination** activity to configure the required parameters. 
    
    For the `DescribeApiDestination` activity, you must specify the AWS Region and add your `Credentials` and `DescribeApiDestinationRequest` object. The `DescribeApiDestinationRequest` object requires the `Name` parameter, which is the name of the API destination you want to get the information of.  To get your `Credentials` object, add the **Credentials_GenerateFromConstants** microflow in front of your `DescribeApiDestination` activity so that you can pass the `Credentials` object as input parameter of the `DescribeApiDestination` activity.
    
1. In the **Edit parameters** section, edit the **AWS_Region** parameter, and provide a value by using a variable or an expression. For a list of available AWS regions, see [AWS_Region](#aws-region).
6. Click **OK**.
7. Open a page that contains a data view to show all the parameters of the  `DescribeApiDestinationResponse` object, which is the response of the `DescribeApiDestination` activity.
8.  Configure a method to trigger the `ACT_DescribeApiDestination` microflow. 
    For example, you can associate the activity with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).

## 4 Technical Reference

To help you work with the Amazon EventBridge connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Constants {#constants}

Constants are used to define configuration values. All activities are exported as microflow activities that can directly be added to a microflow. Make sure the constants are configured correctly as shown in the table below, so the connector can authenticate the request with AWS. For more information, see [Configuring AWS Authentication](#authentication).

| Name | Description | 
| --- | --- |
| `AmazonEventBridgeConnector.AWS_ClientCertificateID` | The ID for the `ClientCertificate` used to sign the authentication requests. | 
|`AmazonEventBridgeConnector.ProfileARN` | The `ProfileARN` for the [IAM Roles Anywhere](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html) profile that has access to the Amazon Polly service | 
|`AmazonEventBridgeConnector.Region` | The region in which both the IAM Roles Anywhere and the Polly service are located | 
|`AmazonEventBridgeConnector.RoleARN` | The `RoleARN` of the IAM Role that has access to the Polly service. | 
|`AmazonEventBridgeConnector.AWS_TrustAnchorARN` | The `TrustAnchorARN` of the TrustAnchor configured in IAM Roles Anywhere that is used for the configured role | 
|`AmazonEventBridgeConnector.UseStaticCredentials` | The `UseStaticCredentials` Boolean value defines if the connector uses the provided static credentials (`AccessKey` and `SecretKey`) over the session-based credentials | 
|`AmazonEventBridgeConnector.AccessKey` | The `AccessKey` from an AWS account able to use this service | 
|`AmazonEventBridgeConnector.SecretKey` | The `SecretKey` from an AWS Account able to use this service |

### 4.2 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

#### 4.2.1 [UpdateConnection](#update-connection)

##### 4.2.1.1 UpdateConnectionRequest

| Attribute | Description | 
| --- | --- |
| Name | Name of the connection|
| Description | Description of the connection|
Additionally, it should contain one associated `UpdateBasisAuthParameters` object or one associated `UpdateApiKeyAuthParameters` object according to the authorization type.
##### 4.2.1.2 AbstractUpdateAuthParameters
This entity holds information about the authorization for the connection that is to be updated. It is inherited by `UpdateBasicAuthParameters` and `UpdateApiKeyAuthParameters`. Only one authorization object must be associated with the `UpdateConnectionRequest` object and the specialization of the `AbstractUpdateAuthParameters` can be used to determine the authorization type.
##### 4.2.1.3 UpdateBasicAuthParameters
| Attribute | Description | 
| --- | --- |
| Username | Username for the Basic authorization|
| Password | Password for the Basic authorization|
##### 4.2.1.4 UpdateApiKeyAuthParameters
| Attribute | Description | 
| --- | --- |
| ApiKeyName | Name of the API key for the API authorization|
| ApiKeyValue | Value of the API key for the API authorization|
##### 4.2.1.5 UpdateConnectionResponse
| Attribute | Description | 
| --- | --- |
| ConnectionARN | The ARN (Amazon Resource Name) of the updated connection |
| ConnectionState | The state of the updated connection |
| CreationTime |  Time stamp indicating the time that the connection was created |
| LastAuthorizedTime | Time stamp indicating the time that the connection was last authorized |
| LastModifiedTime |  Time stamp indicating the time that the connection was last modified |
#### 4.2.2 [PutEvents](#put-events)

##### 4.2.2.1 PutEventsRequest

| Attribute | Description | 
| --- | --- |
| EndpointId | The URL subdomain of the endpoint |
It should contain at least one RequestEntry object, with a maximum of ten RequestEntry objects.

##### 4.2.2.2 RequestEntry

| Attribute | Description | 
| --- | --- |
| Detail | JSON object of the event | 
| DetailType | Free-form string used to decide what fields to expect in the event body | 
| EventBusName | Name or ARN of the event bus that receives the event (default bus used if omitted) | 
| Source | Source of the event | 
| Time | Time stamp of the event | 
| TraceHeader | AWS X-Ray trace header, which is an http header (X-Amzn-Trace-Id) that contains the trace-id associated with the event. |
Additionally, it contains a list of Resource objects.

##### 4.2.2.3 Resource

| Attribute | Description | 
| --- | --- |
| ResourceName | ARN of the AWS resource | 
#### 4.2.3 [CreateConnection](#create-connection)

##### 4.2.3.1 CreateConnectionRequest

| Attribute | Description | 
| --- | --- |
| Name | Name of the connection|
| Description | Description of the connection|
Additionally, it should contain one associated `CreateBasicAuthParameters` object or one associated `CreateApiKeyAuthParameters` object according to the authorization type.

##### 4.2.3.2 AbstractCreateAuthParameters

This entity holds information about the authorization for the connection that is to be updated. It is inherited by `CreateBasicAuthParameters` and `CreateApiKeyAuthParameters`. Only one authorization object must be associated with the `CreateConnectionRequest` object and the specialization of the `AbstractCreateAuthParameters` can be used to determine the authorization type.

##### 4.2.3.3 CreateBasicAuthParameters

| Attribute | Description | 
| --- | --- |
| Username | Username for the Basic authorization |
| Password | Password for the Basic authorization |

##### 4.2.3.4 CreateApiKeyAuthParameters

| Attribute | Description | 
| --- | --- |
| ApiKeyName | Name of the API key for the API authorization |
| ApiKeyValue | Value of the API key for the API authorization |

##### 4.2.3.5 CreateConnectionResponse

| Attribute | Description | 
| --- | --- |
| ConnectionARN | The ARN (Amazon Resource Name) of the created connection |
| ConnectionState | The state of the created connection |
| CreationTime |  Time stamp indicating the time that the connection was created |
| LastModifiedTime |  Time stamp indicating the time that the connection was last modified |

#### 4.2.4 [CreateApiDestination](#create-api-destination)

##### 4.2.4.1 CreateApiDestinationRequest

| Attribute | Description | 
| --- | --- |
| ConnectionArn | ARN (Amazon Resource Name) of the connection to use for the API destination | 
| Description | Description of the API destination | 
| HttpMethod | The method to use for the request to the HTTP invocation endpoint | 
| InvocationEndpoint | The URL to the HTTP invocation endpoint  | 
| InvocationRateLimitPerSecond | The maximum number of requests per second to send to the HTTP invocation endpoint | 
| Name | Name for the API destination | 
| Wildcard | Whether the CreateApiDestination should add a wildcard token to the invocation endpoint. If it's set to true, the invocation endpoint will be suffixed by "/*" (false by default) | 

##### 4.2.4.2 CreateApiDestinationResponse

| Attribute | Description | 
| --- | --- |
| ApiDestinationArn | ARN (Amazon Resource Name) of the API destination | 
| ApiDestinationState | State of the API destination | 
| CreationTime | Time stamp indicating the time that the API destination was created | 
| LastModifiedTime | Time stamp indicating the time that the API destination was last modified | 

#### 4.2.5 [DescribeConnection](#describe-connection)

##### 4.2.5.1 DescribeConnectionRequest

| Attribute | Description | 
| --- | --- |
| Name | Name of the connection |

##### 4.2.5.2 DescribeConnectionResponse

| Attribute | Description | 
| --- | --- |
| ConnectionARN | The ARN (Amazon Resource Name) of the updated connection |
| CreationDateTime |  Time stamp indicating the time that the connection was created |
| Description | Description of the connection | 
| LastAuthorizedTime | Time stamp indicating the time that the connection was last authorized |
| LastModifiedTime |  Time stamp indicating the time that the connection was last modified |
| Name | Name of the connection|
| SecretArn | The ARN of the secret of the connection|
| StateReason | The reason that the connection is in the current connection state |
| ConnectionState | The state of the updated connection |

It is associated with a `AbstractConnectionAuthResponseParameters` object.

##### 4.2.5.3 AbstractConnectionAuthResponseParameters

This entity holds information about the authorization of the connection. It is inherited by `ConnectionBasicAuthResponseParameters`, `ConnectionApiKeyAuthResponseParameters` and `ConnectionOAuthResponseParameters`. Only one authorization object is associated with the `DescribeConnectionResponse` object and the specialization of the `AbstractConnectionAuthResponseParameters` can be used to determine the authorization type.

It is associated with a `ConnectionAuthResponseConnectionHttpParameters` object.

##### 4.2.5.4 ConnectionAuthResponseConnectionHttpParameters

This entity contains additional parameters for the connection that are passed through with every invocation to the HTTP endpoint. It inherits from the [`ConnectionHttpParametersUsage`](#connectionhttpparametersusage) entity.

##### 4.2.5.5 ConnectionBasicAuthResponseParameters

| Attribute | Description | 
| --- | --- |
| Username | Username of the Basic authorization |

##### 4.2.5.6 ConnectionApiKeyAuthResponseParameters

| Attribute | Description | 
| --- | --- |
| ApiKeyName | Name of the API key of the API authorization |

##### 4.2.5.7 ConnectionOAuthResponseParameters

| Attribute | Description | 
| --- | --- |
| AutherizationEndpoint | The URL to the HTTP endpoint that authorized the request | 
| ConnectionOAuthHttpMethod | The method to use for the request to the HTTP invocation endpoint | 
It is associated with an `OauthConnectionHttpParameter` object and a `ConnectionOAuthClientResponseParameters` object.

##### 4.2.5.8 OauthConnectionHttpParameter

This entity has the additional HTTP parameters that are used for the OAuth authorization request. It inherits from the [`ConnectionHttpParametersUsage`](#connectionhttpparametersusage) entity.

##### 4.2.5.9 ConnectionOAuthClientResponseParameters

| Attribute | Description | 
| --- | --- |
| ClientID | Client ID associated with the response to the connection request | 

##### 4.2.5.10 ConnectionHttpParametersUsage {#connectionhttpparametersusage}

This entity contains additional parameters of the connection. It is associated with `ConnectionBodyParameter` objects, `ConnectionHeaderParameter` objects and `ConnectionQueryStringParameter` objects.

##### 4.2.5.11 ConnectionBodyParameter 

| Attribute | Description | 
| --- | --- |
| Key   | The key for the parameter | 
| IsSecretValue | Specifies whether the value is secret | 
| Value | The value associated with the key | 

##### 4.2.5.12 ConnectionHeaderParameter 

| Attribute | Description | 
| --- | --- |
| Key   | The key for the parameter | 
| IsSecretValue | Specifies whether the value is secret | 
| Value | The value associated with the key |

##### 4.2.5.13 ConnectionHeaderParameter 

| Attribute | Description | 
| --- | --- |
| Key   | The key for the parameter | 
| IsSecretValue | Specifies whether the value is secret | 
| Value | The value associated with the key |

#### 4.4.6 [DescribeApiDestination](#describe-api-destination)

##### 4.2.6.1 DescribeApiDestinationRequest

| Attribute | Description | 
| --- | --- |
| Name | Name of the API destination |

##### 4.2.6.2 DescribeApiDestinationResponse

| Attribute | Description | 
| --- | --- |
| ApiDestinationArn | ARN (Amazon Resource Name) of the API destination | 
| ApiDestinationState | State of the API destination | 
| ConnectionArn | ARN (Amazon Resource Name) of the connection of the API destination | 
| CreationTime | Time stamp indicating the time that the API destination was created | 
| Description | Description of the API destination | 
| HttpMethod | The method used for the request to the HTTP invocation endpoint | 
| InvocationEndpoint | The URL to the HTTP invocation endpoint  | 
| InvocationRateLimitPerSecond | The maximum number of requests per second to send to the HTTP invocation endpoint | 
| LastModifiedTime | Time stamp indicating the time that the API destination was last modified | 
| Name | Name for the API destination | 

#### 4.4.7 [UpdateApiDestination](#update-api-destination)

##### 4.2.7.1 UpdateApiDestinationRequest

| Attribute | Description | 
| --- | --- |
| ConnectionArn | ARN (Amazon Resource Name) of the connection to use for the API destination | 
| Description | Description of the API destination | 
| HttpMethod | The method to use for the request to the HTTP invocation endpoint | 
| InvocationEndpoint | The URL to the HTTP invocation endpoint  | 
| InvocationRateLimitPerSecond | The maximum number of requests per second to send to the HTTP invocation endpoint | 
| Name | Name of the API destination | 

##### 4.2.7.2 UpdateApiDestinationResponse

| Attribute | Description | 
| --- | --- |
| ApiDestinationArn | ARN (Amazon Resource Name) of the API destination | 
| ApiDestinationState | State of the API destination | 
| CreationTime | Time stamp indicating the time that the API destination was created | 
| LastModifiedTime | Time stamp indicating the time that the API destination was last modified | 

### 4.3 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the Amazon EventBridge connector, enumerations list values such as the list of available AWS regions.

#### 4.3.1 AWS_Region {#aws-region}

| Name | Caption | 
| --- | --- | 
| us_east_2 | US East (Ohio) | 
| us_east_1 | US East (N. Virginia) | 
| us_west_1 | US West (N. California) | 
| us_west_2 | US West (Oregon) | 
| af_south_1 | Africa (Cape Town) | 
| ap_east_1 | Asia Pacific (Hong Kong) | 
| ap_southeast_3 | Asia Pacific (Jakarta) | 
| ap_south_1 | Asia Pacific (Mumbai) | 
| ap_northeast_3 | Asia Pacific (Osaka) | 
| ap_northeast_2 | Asia Pacific (Seoul) | 
| ap_southeast_1 | Asia Pacific (Singapore) | 
| ap_southeast_2 | Asia Pacific (Sydney) | 
| ap_northeast_1 | Asia Pacific (Tokyo) | 
| ca_central_1 | Canada (Central) | 
| eu_central_1 | Europe (Frankfurt) | 
| eu_west_1 | Europe (Ireland) | 
| eu_west_2 | Europe (London) | 
| eu_south_1 | Europe (Milan) | 
| eu_west_3 | Europe (Paris) | 
| eu_north_1 | Europe (Stockholm) | 
| me_south_1 | Middle East (Bahrain) | 
| sa_east_1 | South America (São Paulo) |

#### 4.3.2 ApiDestinationState

| Name | Caption | 
| --- | --- | 
| ACTIVE | ACTIVE | 
| INACTIVE | INACTIVE | 
| UNKNOWN | UNKNOWN | 

#### 4.3.3 ConnectionOAuthHttpMethod

| Name | Caption | 
| --- | --- | 
| GET | GET | 
| POST | POST | 
| PUT | PUT | 
| UNKNOWN_TO_SDK_VERSION | UNKNOWN_TO_SDK_VERSION | 

#### 4.3.4 ConnectionState

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

#### 4.3.5 HttpMethod

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

The `UpdateConnection` Amazon EventBridge action allows you to update connections in your AWS console from your Mendix app. It requires a valid `AWS_Region` parameter and an `UpdateConnectionRequest` object and returns an `UpdateConnectionResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `UpdateConnectionRequest` | `UpdateConnectionResponse` |
The authorization types BASIC and API_KEY are available, however the OATH authentication method is currently not supported through our `UpdateConnection` action. Only one authorization method can used during the update of a connection so either one `UpdateBasisAuthParameters` object or one `UpdateApiKeyAuthParameters` object should be associated with the `UpdateConnectionRequest` object according to the chosen authorization type. 

#### 4.4.2 PutEvents {#put-events}

The `PutEvents` Amazon EventBridge actions allows you to send custom events to Amazon EventBridge so that they can be matched to rules. It requires a valid `AWS_Region` and `PutEventsRequest` object. It returns an PutEventsResponse object, which contains a list of ResponseEntry objects. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `PutEventsRequest` | `PutEventsResponse` |

#### 4.4.3 CreateConnection {#create-connection}

The `CreateConnection` Amazon EventBridge action allows you to create new connections in your AWS console from your Mendix app. It requires a valid `AWS_Region` parameter and a `CreateConnectionRequest` object and returns a `CreateConnectionResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `CreateConnectionRequest` | `CreateConnectionResponse` |

The authorization types BASIC and API_KEY are available, however the OATH authentication method is currently not supported through our `CreateConnection` action. Only one authorization method can be set up during the creation of a connection so either one `CreateBasisAuthParameters` object or one `CreateApiKeyAuthParameters` object should be associated with the `CreateConnectionRequest` object according to the chosen authorization type. 

#### 4.4.4 CreateApiDestination {#create-api-destination}

The `CreateApiDestination` Amazon EventBridge action allows you to create a custom API destination in your AWS console inside the Amazon EventBridge service so that events can be routed to the provided endpoint. It requires a valid `AWS region` and `CreateApiDestinationRequest` object. It returns a `CreateApiDestinationResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `CreateApiDestinationRequest` | `CreateApiDestinationResponse` |

#### 4.4.4.1 Endpoint parametrization {#endpoint-parametrization}

This subsection extends upon the #CreateApiDestination section. In the CreateApiDestination request, one can configure the boolean attribute Wildcard. Upon setting this attribute to true, the API endpoint resource in Amazon EventBridge will have the wildcard `*` suffixed to configured invocation endpoint. This wildcard token acts as a placeholder to be replaced by a value that resides within the event body. An example of this would be a REST API for an order service where an order ID is passed as a path parameter; `http://myhosturl.com/rest/orderservice/v1/{orderID}`.

To replace the wildcard token in the ApiDestination resource in Amazon EventBridge, one configures that inside of a Rule resource. When creating a Rule with an ApiDestination resource with a wildcard token in it, path parameters can be additionally passed. One needs to specify the name of the key that holds the information to replace the wildcard token, e.g., `source`. For more information on Rules, please visit [AWS](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rules.html).

#### 4.4.5 DescribeConnection {#describe-connection}

The `DescribeConnection` Amazon EventBridge action allows you to get details on a specific connection that exists within EventBridge. It requires a valid `AWS_Region` parameter and a `describeConnectionRequest` object and returns a `DescribeConnectionResponse` object. If the user enters a connection that does not exist, the `DescribeConnectionResponse` object will be empty. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `DescribeConnectionRequest` | `DescribeConnectionResponse` |

#### 4.4.6 DescribeApiDestination {#describe-api-destination}

The `DescribeApiDestination` Amazon EventBridge action allows you to get details on a specific API destination that exists within EventBridge. It requires a valid `AWS_Region` parameter and a `DescribeApiDestinationRequest` object and returns a `DescribeApiDestinationResponse` object. If the user enters an API destination that does not exist, the returned `DescribeApiDestinationResponse` object will be empty. he input and output for this service are shown in the table below:

| Input | Output | 
| --- | --- | 
| `DescribeApiDestinationRequest` | `DescribeApiDestinationResponse` |

#### 4.4.7 UpdateApiDestination {#update-api-destination}

The `UpdateApiDestination` Amazon EventBridge action allows you to update a specific API destination that exists within EventBridge. It requires a valid `AWS_Region` parameter and an `UpdateApiDestinationRequest` object and returns an `UpdateApiDestinationResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `UpdateApiDestinationRequest` | `UpdateApiDestinationResponse` |