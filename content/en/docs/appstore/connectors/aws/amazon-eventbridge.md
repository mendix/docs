title: "Amazon EventBridge"
url: /appstore/connectors/aws/amazon-eventbridge/
description: "Describes the configuration and usage of the Amazon EventBridge connector from the Mendix Marketplace. {AWS SERVICE NAME} is {AWS SERVICE DESCRIBED IN 1 SENTENCE; PER CONFIRMATION FROM AWS, WE CAN USE THE SERVICE DESCRIPTION FROM THE AWS WEBSITE}."
weight: 20
tags: ["marketplace", "marketplace component", "aws", "amazon", "eventbridge", "connector"]

## 1 Introduction

The [Amazon EventBridge](link to eventbridge in marketplace) connector enables you to connect your app to [Amazon EventBridge](https://aws.amazon.com/eventbridge/) and easily build event-driven applications.

### 1.1 Typical Use Cases

{DESCRIBE WHAT THE AWS SERVICE DOES. PER CONFIRMATION FROM AWS, WE CAN USE THE SERVICE DESCRIPTION FROM THE AWS WEBSITE.}
###1.2 Prerequisites {#prerequisites}
VARIANT 1 - IF THE CONNECTOR ONLY REQUIRES THE AWS AUTHENTICATION CONNECTOR
The Amazon EventBridge connector requires the [AWS authentication connector version 2.1 or higher](https://marketplace.mendix.com/link/component/120333) to authenticate with Amazon Web Services (AWS). It is crucial for the Amazon EventBridge connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon EventBridge connector into your app.

## 3 Configuration

After you install the connector, you can find it in the App Explorer, in the AmazonEventBridgeConnector section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon EventBridge. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the Amazon EventBridge service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.
1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.
The Amazon EventBridge connector supports both session and static credentials. By default, the connector is pre-configured to use static credentials, but you may want to switch to session credentials, for example, to increase the security of your app. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

3. In the App Explorer, double-click the Settings for your app.
{{< figure src="/attachments/appstore/connectors/aws-eventbridge/eventbridge_open_settings.png” alt="The Settings option in the App Explorer">}}

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
The entities in the table below describe all generalizations. These are reused by the different models for the specific microflow activities or for storing connection details.

#### 4.2.1 {ENTITY NAME}

| Attribute | Description | 
| --- | --- |
| {Attribute} | {Description}|

### 4.3 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the {CONNECTOR NAME} connector, enumerations list values such as {USUALLY "the list of available AWS regions", POSSIBLY ALSO OTHERS AS REQUIRED}.

#### 4.3.1 `AWS_Region` {#aws-region}

| Name | Caption | 
| --- | --- | 
| us_east_2 | US Easth (Ohio) | 
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

#### 4.3.2 {ENUMERATION NAME}

| Name | Caption | Description |
| --- | --- | --- |
| {ENUMERATION ELEMENT NAME}| {ENUMERATION ELEMENT VALUE} | {ENUMERATION ELEMENT DESCRIPTION} |

### 4.3 Activities {#activities} 

Activities define the actions that are executed in a microflow or a nanoflow. For the {CONNECTOR NAME} connector, they {PURPOSE OF THE ACTIVITIES}. 

#### 4.3.1 {ACTIVITY NAME} 

The `{ACTIVITYNAME}` {AWS SERVICE NAME} activity allows you to {ACTIVITY PURPOSE}. It requires {REQUIRED PARAMETERS}. {OPTIONAL, IF THE ACTIVITY HAS NO OUTPUT: "This activity has no return value. "} The input and output for this service are shown in the table below: 
| Input | Output | 
| --- | --- | 
| `{INPUT OBJECT}` | `{OUTPUT OBJECT}` |
 ##### OPTIONAL, INCLUDE ONLY IF THE ACTIVITY RETURNS AN OUTPUT: This activity returns a `{OUTPUT OBJECT}` object with objects from the following entities, as shown in the table below: 
| Name | Generalization | Documentation |
| --- | --- | --- | 
| `{ENTITY NAME}` | `{ENTITY GENERALIZATION}` | {ENTITY DESCRIPTION} |