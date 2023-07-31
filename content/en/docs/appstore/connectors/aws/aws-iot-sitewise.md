---
title: "AWS IoT SiteWise"
url: /appstore/connectors/aws/aws-iot-sitewise/
description: "Describes the configuration and usage of the AWS Iot SiteWise connector from the Mendix Marketplace. AWS Iot SiteWise is a managed service that simplifies collecting, organizing, and analyzing industrial equipment data."
weight: 20
tags: ["marketplace", "marketplace component", "amazon", "AWS IoT SiteWise", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [AWS IoT Sitewise](MARKETPLACE LINK TBD) connector provides a way for you to optimize the data collection and processing for your Mendix app by implementing [AWS IoT SiteWise](https://aws.amazon.com/iot-sitewise/).

### 1.1 Typical Use Cases

AWS IoT SiteWise is a managed service that simplifies collecting, organizing, and analyzing industrial equipment data. It enables you to collect, manage, and visualize data, identify and resolve issues through performance monitoring, and optimize processes with improved data insights.

### 1.2 Prerequisites {#prerequisites}

#### VARIANT 1 - IF THE CONNECTOR ONLY REQUIRES THE AWS AUTHENTICATION CONNECTOR

The AWS IoT SiteWise connector requires Mendix Studio Pro version 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS Authentication connector version {MINIMUM REQUIRED VERSION} or higher](https://marketplace.mendix.com/link/component/120333). It is crucial for the AWS IoT SiteWise connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

#### VARIANT 2 - IF THE CONNECTOR ALSO HAS OTHER DEPENDENCIES

The AWS IoT SiteWise connector requires Mendix Studio Pro version 9.18.0 or above.

To use the AWS IoT SiteWise connector, you must also install and configure the following modules:

* [AWS Authentication connector version {MINIMUM REQUIRED VERSION} or higher](https://marketplace.mendix.com/link/component/120333) - This connector is required to authenticate with Amazon Web Services (AWS). It is crucial for the AWS IoT SiteWise connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
* {OTHER MODULES AS REQUIRED, WITH A SHORT DESCRIPTION OF THEIR PURPOSE AND A LINK TO THEIR PAGES ON MARKETPLACE.}

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the AWS IoT SiteWise connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **{MODULENAME}** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to {AWS SERVICE NAME}. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

#### THIS SECTION HAS SCREENSHOTS FROM THE DYNAMODB CONNECTOR. REPLACE THEM WITH SIMILAR SCREENSHOTS FROM YOUR CONNECTOR.

In order to use the {AWS SERVICE NAME} service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.
    The AWS IoT SiteWise connector supports {SUPPORTED CONNECTION TYPES, USUALLY "both session and static credentials"}. By default, the connector is pre-configured to use {STATIC/SESSION, USUALLY "static"} credentials, but you may want to switch to {SESSION/STATIC, USUALLY "session"} credentials, for example, {IF SWITCHING TO SESSION, "to increase the security of your app"; IF SWITCHING TO STATIC, "to quickly test the authentication process"}. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
3. In the **App Explorer**, double-click the **Settings** for your app.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/appsettings.png" alt="The Settings option in the App Explorer">}}

4. In the **App Settings** dialog, in the **Configurations** tab, edit or create an authentication profile.
    If you have multiple sets of AWS credentials, or if you want to use both static and session credentials for different use cases, create separate authentication profiles for each set of credentials.
5. In the **Edit Configuration** dialog, in the **Constants** tab, click **New** to add the constants required for the configuration.
6. In the **Select Constants** dialog, find and expand the **{MODULENAME}** > **ConnectionDetails** section.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/credentials.png" alt="The SessionCredentials and StaticCredentials items in the ConnectionDetails section">}}

7. Depending on your selected authentication type, configure the required parameters for the **StaticCredentials** or **SessionCredentials**.

    | Credentials type | Parameter | Value |
    | --- | --- | --- |
    | Any | **UseStaticCredentials** | **true** if you want to use static credentials, or **false** for session credentials |
    | **StaticCredentials** | **AccessKey** | Access key ID [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites)  |
    | **StaticCredentials** | **SecretKey** | Secret key [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Role ARN** | [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS role that the connector should assume |
    | **SessionCredentials** | **Profile ARN** | ARN of the profile [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Trust Anchor ARN** | ARN of the trust anchor [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Client Certificate Identifier** | The **Client Certificate Pin** visible in the **Outgoing Certificates** section on the **Network** tab in the Mendix Cloud environment |
    | **SessionCredentials** | **Duration** | Duration for which the session token should be valid; after the duration passes, the validity of the session credentials expires |
    | **SessionCredentials** | **Session Name** | An identifier for the session |

### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for {AWS SERVICE NAME}, you can implement the functions of the connector by using the provided activities in microflows. For example, to {DESCRIBE A TASK}, implement the {ACTIVITY NAME, WITH LINK TO THE RELEVANT SECTION IN TECHNICAL REFERENCE BELOW} activity by doing the following steps:

{A DETAILED STEP-BY-STEP CONFIGURATION PROCEDURE, WITH SCREENSHOTS. SEE THE DYNAMODB CONNECTOR DOC FOR THE LEVEL OF DETAIL THAT'S REQUIRED.}

## 4 Technical Reference

To help you work with the AWS IoT SiteWise connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

NOT ALL ARE GENERALIZATIONS! -> The entities in the table below describe all generalizations. These are reused by the different models for the specific microflow activities or for storing connection details.

### 4.1.1 ListAssetModelsRequest {#listassetmodelsrequest}

| Attribute | Description |
| --- | --- |
| MaxResults | Describes the maximum number of asset models returned in the response. By default it is set to 50 and can return a maximum of 250 asset models. |
| NextToken | Describes to the Amazon IoT SiteWise service that the list is being continued on with a token |

### 4.1.2 ListAssetModelsResponse {#listassetmodelsresponse}

| Attribute | Description |
| --- | --- |
| NextToken | Describes whether there are more asset models in the region that can be listed. The next list requests to Amazon IoT SiteWise can be continued with this `NextToken` |

### 4.1.3  AssetModelSummary {#assetmodelsummary}

| Attribute | Description |
| --- | --- |
| ARN | The ARN (Amazon Resource Name)  of the asset model |
| CreationDate | The creation date of the asset model |
| Description | The description of the asset model |
| AssetModelID | The asset model ID of the asset model |
| LastUpdateDate | The last update date of the asset model |
| Name | The name of the asset model |

### 4.1.4 AssetModelStatus {#assetmodelstatus}

| Attribute | Description |
| --- | --- |
| N/A | The object does not contain any attributes, but it inherits from the `AbstractAssetModelStatus` entity |

### 4.1.5 AbstractAssetModelStatus {#abstractassetmodelstatus}

| Attribute | Description |
| --- | --- |
| State | The current status state of the asset model |

### 4.1.6 ErrorDetails {#errordetails}

| Attribute | Description |
| --- | --- |
| Code | The error code |
| Message | The error message |

### 4.1.7 DetailedError {#detailederror}

| Attribute | Description |
| --- | --- |
| Code | The error code |
| Message | The error message |

### 4.1.8 ListProjectsRequest {#listprojectsrequest}

| Attribute | Description |
| --- | --- |
| MaxResults | Describes the maximum number of projects returned in the response. By default it is set to 50 and can return a maximum of 250 asset models |
| NextToken | Describes to the Amazon IoT SiteWise service that the list is being continued on with a token |
| PortalID | Describes the portal ID from which the projects will be retrieved from |

### 4.1.9 ListProjectsResponse {#listprojectsresponse}

| Attribute | Description |
| --- | --- |
| NextToken | Describes whether there are more projects in the portal that can be listed. The next list requests to Amazon IoT SiteWise can be continued with this `NextToken` |

### 4.1.10 ProjectSummary {#projectsummary}

| Attribute | Description |
| --- | --- |
| N/A | The object does not contain any attributes, but it inherits from the `AbstractProjectSummary` entity |

### 4.1.11 AbstractProjectSummary {#abstractprojectsummary}

| Attribute | Description |
| --- | --- |
| CreationDate | The creation date of the project |
| Description | The description of the project |
| ProjectID | The asset model ID of the project |
| LastUpdateDate | The last update date of the project |
| Name | The name of the project |

### 4.1.12 ListPortalsRequest {#listportalsrequest}

| Attribute | Description |
| --- | --- |
| MaxResults | Describes the maximum number of portal summaries returned in the response. By default it is set to 50 and can return a maximum of 250 portals. |
| NextToken | Describes to the Amazon IoT SiteWise service that the list is being continued on with a token |

### 4.1.13 ListPortalsResponse {#listportalsresponse}

| Attribute | Description |
| --- | --- |
| NextToken | Describes whether there are more portals in the region that can be listed. The next list requests to Amazon IoT SiteWise can be continued with this `NextToken` |

### 4.1.14  PortalSummary {#portalsummary}

| Attribute | Description |
| --- | --- |
| CreationDate | The creation date of the portal |
| Description | The description of the portal |
| PortalID | The ID of the portal |
| LastUpdateDate | The last update date of the portal |
| Name | The name of the portal |
| RoleARN | The ARN (Amazon Resource Name) of the service role that allows the portal's users to access the AWS IoT SiteWise resources |
| StartURL | The URL for the AWS IoT SiteWise Monitor portal |

### 4.1.15 PortalStatus {#portalstatus}

| Attribute | Description |
| --- | --- |
| State | The current status state of the portal |

### 4.1.16 MonitorErrorDetails {#monitorerrordetails}

| Attribute | Description |
| --- | --- |
| Code | The error code |
| Message | The error message |

### 4.1. ENTITY_NAME {#entity_name}

| Attribute | Description |
| --- | --- |
| {Attribute NAME} | {Attribute DESCRIPTION} |

### 4.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the AWS IoT SiteWise connector, enumerations list values such as the list of available AWS regions, the asset model state, error details code and the detailed error codes.

#### 4.2.1 AWS_Region {#aws-region}

| Name | Caption | 
| --- | --- | 
| `us_east_2` | US East (Ohio) | 
| `us_east_1` | US East (N. Virginia) | 
| `us_west_1` | US West (N. California) | 
| `us_west_2` | US West (Oregon) | 
| `af_south_1` | Africa (Cape Town) | 
| `ap_east_1` | Asia Pacific (Hong Kong) | 
| `ap_southeast_3` | Asia Pacific (Jakarta) | 
| `ap_south_1` | Asia Pacific (Mumbai) | 
| `ap_northeast_3` | Asia Pacific (Osaka) | 
| `ap_northeast_2` | Asia Pacific (Seoul) | 
| `ap_southeast_1` | Asia Pacific (Singapore) | 
| `ap_southeast_2` | Asia Pacific (Sydney) | 
| `ap_northeast_1` | Asia Pacific (Tokyo) | 
| `ca_central_1` | Canada (Central) | 
| `eu_central_1` | Europe (Frankfurt) | 
| `eu_west_1` | Europe (Ireland) | 
| `eu_west_2` | Europe (London) | 
| `eu_south_1` | Europe (Milan) | 
| `eu_west_3` | Europe (Paris) | 
| `eu_north_1` | Europe (Stockholm) | 
| `me_south_1` | Middle East (Bahrain) | 
| `sa_east_1` | South America (São Paulo) |

#### 4.2.2 AssetModelStatus_State

 Name | Caption | Description |
| --- | --- | --- |
| CREATING | CREATING | The asset model is being created. |
| ACTIVE | ACTIVE | The asset model is active. |
| UPDATING  | UPDATING  | The asset model is being updated. |
| PROPAGATING | PROPAGATING | The asset model's changes are propagating to its assets. |
| DELETING | DELETING | The asset model is being deleted. |
| FAILED | FAILED | The asset model failed to validate during a create or update operation. |

#### 4.2.3 ErrorDetails_Code

| Name | Caption | Description |
| --- | --- | --- |
| VALIDATION_ERROR | VALIDATION_ERROR |  |
| INTERNAL_FAILURE | INTERNAL_FAILURE |  |

#### 4.2.4 DetailedError_Code

| Name | Caption | Description |
| --- | --- | --- |
| INCOMPATIBLE_COMPUTE_LOCATION | INCOMPATIBLE_COMPUTE_LOCATION |  |
| INCOMPATIBLE_FORWARDING_CONFIGURATION | INCOMPATIBLE_FORWARDING_CONFIGURATION |  |

#### 4.2.5 PortalStatus_State

 Name | Caption | Description |
| --- | --- | --- |
| CREATING | CREATING | The portal is being created. |
| UPDATING  | UPDATING  | The portal is being updated. |
| DELETING | DELETING | The portal is being deleted. |
| ACTIVE | ACTIVE | The portal is active. |
| FAILED | FAILED | The portal failed to validate during a create or update operation. |

#### 4.2.6 MonitorErrorDetails_Code

| Name | Caption | Description |
| --- | --- | --- |
| INTERNAL_FAILURE | INTERNAL_FAILURE |  |
| VALIDATION_ERROR | VALIDATION_ERROR |  |
| LIMIT_EXCEEDED | LIMIT_EXCEEDED |  |

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow.

#### 4.3.1 ListAssetModels {#list-asset-models}

The `ListAssetModels` Amazon Iot SiteWise activity allows you to retrieve a list of all asset model summaries for the given region. It requires a valid `AWS_Region` parameter and a `ListAssetModelsRequest` object and returns a `ListAssetModelsResponse` object, which can include a maximum of 250 results. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `ListAssetModelsRequest` | `ListAssetModelsResponse` |

The `ListAssetModels` method supports pagination. The MaxResults in the request can be set to specify the maximum number of results to be returned in the response object. If you do not set MaxResults, the response includes 50 results by default. If you set MaxResults and there are additional results to display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to the `ListAssetModels` method to receive the next page of results.

#### 4.3.2 ListProjects {#list-projects}

The `ListProjects` Amazon Iot SiteWise activity allows you to retrieve a list of all project summaries for an AWS IoT SiteWise Monitor portal. It requires a valid `AWS_Region` parameter and a `ListProjectsRequest` object with a valid PortalID and returns a `ListProjectsResponse` object, which can include a maximum of 250 results. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `ListProjectsRequest` | `ListProjectsResponse` |

The `ListProjects` method supports pagination. The MaxResults in the request can be set to specify the maximum number of results to be returned in the response object. If you do not set MaxResults, the response includes 50 results by default. If you set MaxResults and there are additional results to display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to the `ListProjects` method to receive the next page of results.

#### 4.3.3 ListPortals {#list-portals}

The `ListPortals` Amazon Iot SiteWise activity allows you to retrieve a list of all portal summaries for the given region. It requires a valid `AWS_Region` parameter and a `ListPortalsRequest` object and returns a `ListPortalsResponse` object, which can include a maximum of 250 results. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `ListPortalsRequest` | `ListPortalsResponse` |

The `ListPortals` method supports pagination. The MaxResults in the request can be set to specify the maximum number of results to be returned in the response object. If you do not set MaxResults, the response includes 50 results by default. If you set MaxResults and there are additional results to display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to the `ListAssetModels` method to receive the next page of results.

##### OPTIONAL, INCLUDE ONLY IF THE ACTIVITY RETURNS AN OUTPUT:

This activity returns a `{OUTPUT OBJECT}` object with objects from the following entities, as shown in the table below:

| Name |    Generalization |    Documentation |
| --- | --- | --- |
| `{ENTITY NAME}` | `{ENTITY GENERALIZATION}` | {ENTITY DESCRIPTION} |
