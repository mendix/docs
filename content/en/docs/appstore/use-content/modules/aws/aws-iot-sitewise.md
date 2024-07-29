---
title: "AWS IoT SiteWise"
url: /appstore/modules/aws/aws-iot-sitewise/
description: "Describes the configuration and usage of the AWS Iot SiteWise connector from the Mendix Marketplace. AWS Iot SiteWise is a managed service that simplifies collecting, organizing, and analyzing industrial equipment data."
weight: 20
aliases:
    - /appstore/connectors/aws/aws-iot-sitewise/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [AWS IoT Sitewise](https://marketplace.mendix.com/link/component/215633) connector provides a way for you to optimize the data collection and processing for your Mendix app by implementing [AWS IoT SiteWise](https://aws.amazon.com/iot-sitewise/).

### 1.1 Typical Use Cases

AWS IoT SiteWise is a managed service that simplifies collecting, organizing, and analyzing industrial equipment data. It enables you to collect, manage, and visualize data, identify and resolve issues through performance monitoring, and optimize processes with improved data insights.

### 1.2 Prerequisites {#prerequisites}

The AWS IoT SiteWise connector requires Mendix Studio Pro 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS Authentication connector version 2.3.0 or higher](https://marketplace.mendix.com/link/component/120333). If you are using the Amazon Iot SiteWise connector version 2.0 or higher, it requires the AWS Authentication connector version 3.0 or higher. It is crucial for the Amazon Iot SiteWise connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the AWS IoT SiteWise connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AWSIoTSiteWiseConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to AWS IoT SiteWise. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the Amazon IoT SiteWise service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).
   
### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for AWS IoT SiteWise, you can implement the functions of the connector by using the provided activities in microflows. For example, to retrieve a list of asset models, implement the [ListAssetModels](#list-assets) activity by doing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_ListAssetModels*, and then click **OK**.
3. In the **App Explorer**, in the **AWSIoTSiteWiseConnector** > **Operations** section, find the **ListAssetModels** activity.
4. In your **Toolbox**, find the **Create Object** activity and drag it onto the work area of your microflow.
5. In the **Entity** field, select **ListAssetModelsRequest**.
6. Double-click the **ListAssetModels** microflow activity to configure the required parameters.
7. In the **Edit parameters** section, edit the **ENUM_Region** parameter, and provide a value by using a variable or an expression.
8. Click **OK**.
9. In the **Toolbox** pane, search for the **Retrieve** activity and drag it onto the microflow area.
10. Position the **Retrieve** activity between the **ListAssetModels** activity and the microflow end event.
11. Double-click the **Retrieve** activity.
12. In the **Select Association** dialog box, in the **Association** section, click **Select**, and then select **ListAssetModels** as the association.
13. Click **OK**.
14. Configure a method for triggering the **ACT_ListAssetModels** microflow. For example, you can trigger a microflow by associating it with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).

## 4 Technical Reference

To help you work with the AWS IoT SiteWise connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

### 4.1.1 ListAssetModelsRequest {#listassetmodelsrequest}

| Attribute | Description |
| --- | --- |
| `MaxResults` | Describes the maximum number of asset models returned in the response. By default it is set to 50 and can return a maximum of 250 asset models. |
| `NextToken` | Describes to the Amazon IoT SiteWise service that the list is being continued on with a token. |

### 4.1.2 ListAssetModelsResponse {#listassetmodelsresponse}

| Attribute | Description |
| --- | --- |
| `NextToken` | Describes whether there are more asset models in the region that can be listed. The next list requests to Amazon IoT SiteWise can be continued with this `NextToken`. |

### 4.1.3  AssetModelSummary {#assetmodelsummary}

| Attribute | Description |
| --- | --- |
| `ARN` | The ARN (Amazon Resource Name)  of the asset model |
| `CreationDate` | The creation date of the asset model |
| `Description` | The description of the asset model |
| `AssetModelID` | The asset model ID of the asset model |
| `LastUpdateDate` | The last update date of the asset model |
| `Name` | The name of the asset model |

### 4.1.4 AssetModelStatus {#assetmodelstatus}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the `AbstractAssetModelStatus` entity. |

### 4.1.5 AbstractAssetModelStatus {#abstract-asset-model-status}

| Attribute | Description |
| --- | --- |
| `State` | The current status state of the asset model |

### 4.1.6 ErrorDetails {#error-details}

| Attribute | Description |
| --- | --- |
| `Code` | The error code |
| `Message` | The error message |

### 4.1.7 DetailedError {#detailed-error}

| Attribute | Description |
| --- | --- |
| `Code` | The error code |
| `Message` | The error message |

### 4.1.8 ListProjectsRequest {#list-projects-request}

| Attribute | Description |
| --- | --- |
| `MaxResults` | Describes the maximum number of projects returned in the response. By default it is set to 50 and can return a maximum of 250 asset models. |
| `NextToken` | Describes to the Amazon IoT SiteWise service that the list is being continued on with a token. |
| `PortalID` | Describes the portal ID from which the projects will be retrieved. |

### 4.1.9 ListProjectsResponse {#list-projects-response}

| Attribute | Description |
| --- | --- |
| `NextToken` | Describes whether there are more projects in the portal that can be listed. The next list requests to Amazon IoT SiteWise can be continued with this `NextToken`. |

### 4.1.10 ProjectSummary {#project-summary}

| Attribute | Description |
| --- | --- |
| `CreationDate` | The creation date of the project |
| `Description` | The description of the project |
| `ProjectID` | The asset model ID of the project |
| `LastUpdateDate` | The last update date of the project |
| `Name` | The name of the project |

### 4.1.11 DescribeProjectRequest {#describe-project-request}

| Attribute | Description |
| --- | --- |
| `PortalID` | The ID of the portal the project is in |
| `ProjectARN` | The Amazon Resource Name (ARN) of the project |
| `CreationDate` | The creation date of the project |
| `Description` | The description of the project |
| `ProjectID` | The asset model ID of the project |
| `LastUpdateDate` | The last update date of the project |
| `Name` | The name of the project |

### 4.1.12 DescribeProjectResponse {#describe-project-response}

| Attribute | Description |
| --- | --- |
| `ProjectID` | Describes the project ID. |

### 4.1.13 ListPortalsRequest {#list-portals-request}

| Attribute | Description |
| --- | --- |
| `MaxResults` | Describes the maximum number of portal summaries returned in the response. By default it is set to 50 and can return a maximum of 250 portals. |
| `NextToken` | Describes to the Amazon IoT SiteWise service that the list is being continued on with a token. |

### 4.1.14 ListPortalsResponse {#list-portals-response}

| Attribute | Description |
| --- | --- |
| `NextToken` | Describes whether there are more portals in the region that can be listed. The next list requests to Amazon IoT SiteWise can be continued with this `NextToken`. |

### 4.1.15  PortalSummary {#portal-summary}

| Attribute | Description |
| --- | --- |
| `CreationDate` | The creation date of the portal |
| `Description` | The description of the portal |
| `PortalID` | The ID of the portal |
| `LastUpdateDate` | The last update date of the portal |
| `Name` | The name of the portal |
| `RoleARN` | The ARN (Amazon Resource Name) of the service role that allows the portal's users to access the AWS IoT SiteWise resources |
| `StartURL` | The URL for the AWS IoT SiteWise Monitor portal |

### 4.1.16 PortalStatus {#portal-status}

| Attribute | Description |
| --- | --- |
| `State` | The current status state of the portal |

### 4.1.17 MonitorErrorDetails {#monitor-error-details}

| Attribute | Description |
| --- | --- |
| `Code` | The error code |
| `Message` | The error message |

### 4.1.18 ListAssetsRequest {#list-assets-request}

| Attribute | Description |
| --- | --- |
| `NextToken` | Describes the token to be used for the next set of paginated results. |
| `MaxResults` | Describes the maximum number of results to return for each request. The default value is 50. |
| `AssetModelID` | Describes the ID of the asset model by which to filter the list of assets. This attribute is required if you choose `ALL`or `(empty)` for Filter attribute. |
| `Filter` | The Filter attribute describes the filter for the requested list of assets. Choose one of the following options: **ALL** – The list includes all assets for a given asset model ID. The `assetModelID` attribute is required if you filter by ALL. **TOP_LEVEL** – The list includes only top-level assets in the asset hierarchy tree.<p>The default value for this attribute is ALL, not selecting either option will result in the ALL filter to be applied to your request. |

### 4.1.19 ListAssetsResponse {#list-assets-response}

| Attribute | Description |
| --- | --- |
| `NextToken` | Describes the token for the next set of results, or `(empty)` if there are no additional results. |

### 4.1.20 AssetSummary {#asset-summary}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the `AbstractAssetSummary` entity. |

### 4.1.21  AbstractAssetSummary {#abstract-asset-summary}

| Attribute | Description |
| --- | --- |
| `ARN` | The ARN of the asset |
| `AssetModelID` | The ID of the asset model used to create this asset |
| `CreationDate` | The creation date of the asset |
| `Description` | The description of the asset |
| `_ID` | The ID of the asset |
| `LastUpdateDate` | The last update date of the asset |
| `Name` | The name of the asset |

### 4.1.22 DescribeAssetModelRequest {#describe-asset-model-request}

| Attribute | Description |
| --- | --- |
| `AssetModelID` | Describes the ID of the asset model and is a required parameter. |

### 4.1.23 DescribeAssetModelResponse {#describe-asset-model-response}

| Attribute | Description |
| --- | --- |
| `AssetModelArn` | Describes the Amazon Resource Name (ARN) of the asset model. |
| `AssetModelCreationDate` | Describes the date that the asset model resource was created. |
| `AssetModelDescription` | Describes the asset model's description. |
| `AssetModelID` | Describes the ID of the asset model. |
| `AssetModelLastUpdateDate` | Describes the date the asset model was last updated. |
| `AssetModelName` | Describes the name of the asset model. |

### 4.1.24 _Type {#type}

| Attribute | Description |
| --- | --- |
| N/A | The generalized entity does not contain any attributes, it is a wrapper entity holding references to property entities (Measurement, Transform, Attribute and Metric). |

### 4.1.25 ProcessingConfig {#processing-config}

| Attribute | Description |
| --- | --- |
| N/A | The generalized entity does not contain any attributes, it is a configuration profile for where information is processed and forwarded. |

### 4.1.26 Variable {#variable}

| Attribute | Description |
| --- | --- |
| `Name` | Describes the friendly name of the variable to be used in the expression. |

### 4.1.27 AbstractAssetStatus {#abstract-asset-status}

| Attribute | Description |
| --- | --- |
| `State` | The current status state of the asset. |

### 4.1.28 ListProjectAssetsRequest {#list-project-assets-request}

| Attribute | Description |
| --- | --- |
| `MaxResults` | Describes the maximum number of project assets returned in the response. By default it is set to 50 and can return a maximum of 250 asset models. |
| `NextToken` | Describes to the Amazon IoT SiteWise service that the list is being continued on with a token. |
| `ProjectID` | Describes the project ID from which the assets will be retrieved. |

### 4.1.29 ListProjectAssetsResponse {#list-project-assets-response}

| Attribute | Description |
| --- | --- |
| `NextToken` | Describes whether there are more assets in the project that can be listed. The next list requests to Amazon IoT SiteWise can be continued with this `NextToken`. |

### 4.1.30 AssetID {#asset-id}

| Attribute | Description |
| --- | --- |
| `AssetID` | Describes the ID of the asset. |

### 4.1.31 DescribeAssetRequest {#describe-asset-request}

| Attribute | Description |
| --- | --- |
| `AssetID` | Describes the ID of the asset and is a required parameter. |

### 4.1.32 DescribeAssetResponse {#describe-asset-response}

| Attribute | Description |
| --- | --- |
| `AssetARN` | Describes the Amazon Resource Name (ARN) of the asset. |
| `AssetCreationDate` | Describes the date the asset was created. |
| `AssetDescription` | Describes a description for the asset. |
| `AssetID` | Describes the ID of the asset. |
| `AssetLastUpdateDate` | Describes the date the asset was last updated. |
| `AssetModelID` | Describes the ID of the asset model that was used to create the asset. |
| `AssetName` | Describes the name of the asset. |

### 4.1.33 AssetProperty {#asset-property}

| Attribute | Description |
| --- | --- |
| `DataType` | Describes the data type of the asset property. |
| `_ID` | Describes the ID of the asset property. |
| `Name` | Describes the name of the property. |
| `Alias` | Describes the alias that identifies the property, such as an OPC-UA server data stream path, for example, `/company/windfarm/3/turbine/7/temperature`. |
| `DataTypeSpec` | Describes the data type of the structure for this property. This parameter exists on properties that have the STRUCT data type. |
| `Unit` | Describes the unit (such as Newtons or RPM) of the asset property. |

### 4.1.34 ListAssetRelationshipsRequest {#list-asset-relationships-request}

| Attribute | Description |
| --- | --- |
| `AssetID` | Describes the asset ID from whose relationships will be received. |
| `MaxResults` | Describes the maximum number of project assets returned in the response. By default it is set to 50 and can return a maximum of 250 asset models. |
| `NextToken` | Describes to the Amazon IoT SiteWise service that the list is being continued on with a token. |

### 4.1.35 ListAssetRelationshipsResponse {#list-asset-relationships-response}

| Attribute | Description |
| --- | --- |
| `NextToken` | Describes whether there are more assets in the project that can be listed. The next list requests to Amazon IoT SiteWise can be continued with this `NextToken`. |

### 4.1.36 AssetRelationshipSummary {#asset-relationship-summary}

| Attribute | Description |
| --- | --- |
| `RelationshipType` | Describes the relationship type of the assets in this relationship. |

### 4.1.37 AssetHierarchyInfo {#asset-hierarchy-info}

| Attribute | Description |
| --- | --- |
| `ChildAssetID` | Describes the ID of the child asset in this asset relationship. |
| `ParentAssetID` | Describes the ID of the parent asset in this asset relationship. |

### 4.1.38 ListAssociatedAssetsRequest {#list-associated-assets-request}

| Attribute | Description |
| --- | --- |
| `AssetID` | Describes the ID of the asset. |
| `HierarchyID` | Describes the ID of the hierarchy by which child assets are associated to the asset. |
| `NextToken` | Describes the token to be used for the next set of paginated results. |
| `MaxResults` | Describes the maximum number of results to return for each request. The default value is 50. |
| `TraversalDirection` | Describes the direction to list associated assets. Choose one of the following options: **CHILD** – The list includes all child assets associated to the asset. The `HierarchyId` parameter is required if you choose CHILD. **PARENT** – The list includes the asset's parent asset.<p>The default value for this attribute is CHILD, not selecting either option will result in the CHILD traversal direction to be applied to your request. |

### 4.1.39 ListAssociatedAssetsResponse {#list-associated-assets-response}

| Attribute | Description |
| --- | --- |
| `NextToken` | Describes the token for the next set of results, or `(empty)` if there are no additional results. |

### 4.1.40 AssociatedAssetsSummary {#associated-assets-summary}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the `AbstractAssetSummary` entity. |

### 4.1.41 DescribeAssetPropertyRequest {#describe-asset-property-request}

| Attribute | Description |
| --- | --- |
| `AssetID` | Describes the ID of the asset and is a required parameter. |
| `PropertyID` | Describes the ID of the asset property and is a required parameter. |

### 4.1.42 DescribeAssetPropertyResponse {#describe-asset-property-response}

| Attribute | Description |
| --- | --- |
| `AssetID` | Describes the ID of the asset. |
| `AssetModelID` | Describes the ID of the asset model. |
| `AssetName` | Describes the name of the asset. |

### 4.1.43 GetAssetPropertyValueRequest {#get-asset-property-value-request}

| Attribute | Description |
| --- | --- |
| `AssetID` | Describes the ID of the asset |
| `PropertyAlias` | Describes alias that identifies the property |
| `PropertyID` | Describes ID of the asset property |

### 4.1.44 GetAssetPropertyValueResponse {#get-asset-property-value-response}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes |

### 4.1.45 PropertyValue {#property-value}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the `AbstractAssetPropertyValue` entity |

### 4.1.46 AbstractAssetPropertyValue {#abstract-asset-property-value}

| Attribute | Description |
| --- | --- |
| `Quality` | Describes the quality of the asset property value |

### 4.1.47 AbstractTimeInNanos {#abstract-time-in-nanos}

| Attribute | Description |
| --- | --- |
| `TimeInSeconds` | Describes the timestamp date, in seconds, in the Unix epoch format |
| `OffsetInNanos` | Describes the nanosecond offset from `TimeInSeconds` |

### 4.1.48 Variant {#variant}

| Attribute | Description |
| --- | --- |
| `hasBooleanValue` | Describes if the asset property has a BooleanValue  |
| `BooleanValue` | Describes asset property data of type Boolean (true or false) |
| `DoubleValue` | Describes asset property data of type double (floating point number) |
| `IntegerValue` | Describes asset property data of type integer (whole number) |
| `StringValue` | Describes asset property data of type string (sequence of characters). |

### 4.1.49 GetAssetPropertyValueHistoryRequest {#get-asset-property-value-history-request}

| Attribute | Description |
| --- | --- |
| `AssetID` | Describes the ID of the asset and is a required parameter coupled with PropertyID. Alternatively, the `PropertyAlias` attribute can be used instead. |
| `EndDate` | Describes the inclusive end of the range from which to query historical data. |
| `MaxResults` | Describes the maximum number of results to return for each paginated request. |
| `NextToken` | Describes the token to be used for the next set of paginated results. |
| `PropertyAlias` | Describes the alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`) and is a required parameter when `AssetID` and `PropertyID` are not specified. |
| `PropertyID` | Describes the ID of the asset property and is a required parameter coupled with `AssetID`. Alternatively, the `PropertyAlias` attribute can be used instead. |
| `Quality` | Describes the quality by which to filter asset data. |
| `StartDatev | Describes the exclusive start of the range from which to query historical data. |
| `TimeOrdering` | Describes the chronological sorting order of the requested information. |

### 4.1.50 GetAssetPropertyValueHistoryResponse {#get-asset-property-value-history-response}

| Attribute | Description |
| --- | --- |
| `NextToken` | Describes the token for the next set of results, or null if there are no additional results. |

### 4.1.51 GetAssetPropertyAggregatesRequest {#get-asset-property-aggregates-request}

| Attribute | Description |
| --- | --- |
| `AggregateType` | Describes the data aggregating function and is a required parameter. |
| `AssetID` | Describes the ID of the asset. |
| `EndDate` | Describes the inclusive end of the range from which to query historical data and is a required parameter. |
| `MaxResults` | Describes the maximum number of results to return for each paginated request. |
| `NextToken` | Describes the token to be used for the next set of paginated results. |
| `PropertyAlias` | Describes the alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). |
| `PropertyID` | Describes the ID of the asset property. |
| `Quality` | Describes the quality by which to filter asset data. |
| `Resolution` | Describes the time interval over which to aggregate data and is a required parameter. |
| `StartDate` | Describes the exclusive start of the range from which to query historical data and is a required parameter. |
| `TimeOrdering` | Describes the chronological sorting order of the requested information. |

### 4.1.52 GetAssetPropertyAggregatesResponse {#get-asset-property-aggregates-response}

| Attribute | Description |
| --- | --- |
| `NextToken` | Describes the token for the next set of results, or null if there are no additional results. |

### 4.1.53 AggregatedValue {#aggregated-value}

| Attribute | Description |
| --- | --- |
| `Quality` | Describes the quality of the aggregated data. |
| `Timestamp` | Describes the date the aggregating computations occurred. |

### 4.1.54 AbstractEntry {#abstract-entry}

| Attribute | Description |
| --- | --- |
| `AssetID` | Describes the ID of the asset in which the asset property was created. |
| `EntryID` | Describes the ID of the entry and is a required parameter. |
| `PropertyAlias` | Describes the alias that identifies the property, such as an OPC-UA server data stream path (for example, /company/windfarm/3/turbine/7/temperature). |
| `PropertyID` | Describes the ID of the asset property. |

### 4.1.55 AbstractErrorEntry {#abstract-error-entry}

| Attribute | Description |
| --- | --- |
| `EntryID` | Describes the ID of the entry. |
| `ErrorCode` | Describes the error code. |
| `ErrorMessage` | Describes the associated error message. |

### 4.1.56 AbstractSkippedEntry {#abstract-skipped-entry}

| Attribute | Description |
| --- | --- |
| `CompletionStatus` | Describes the completion status of each entry that is associated with a batch retrieval API. |
| `EntryID` | Describes the ID of the entry. |

### 4.1.57 AbstractSuccessEntry {#abstract-success-entry}

| Attribute | Description |
| --- | --- |
| `EntryID` | Describes the ID of the entry. |

### 4.1.58 ErrorInfo {#error-info}

| Attribute | Description |
| --- | --- |
| `ErrorCode` | Describes the error code. |
| `ErrorTimestamp` | Describes the date the error occurred. |

### 4.1.59 BatchGetAssetPropertyValueRequest {#batch-get-asset-property-value-request}

| Attribute | Description |
| --- | --- |
| `NextToken` | Describes the token to be used for the next set of paginated results. |

### 4.1.60 BatchGetAssetPropertyValueResponse {#batch-get-asset-property-value-response}

| Attribute | Description |
| --- | --- |
| `NextToken` | Describes the token for the next set of results, or null if there are no additional results. |

### 4.1.61 BatchGetAssetPropertyValueHistoryRequest {#batch-get-asset-property-value-history-request}

| Attribute | Description |
| --- | --- |
| `MaxResults` | The maximum number of results to return for each paginated request. The maximum value of MaxResults can be set to 20000.|
| `NextToken` | Describes the token to be used for the next set of paginated results. |

### 4.1.62 BatchGetAssetPropertyValueHistoryResponse {#batch-get-asset-property-value-history-response}

| Attribute | Description |
| --- | --- |
| `NextToken` | Describes the token for the next set of results, or null if there are no additional results. |

### 4.1.63 BatchPutAssetPropertyValueRequest {#batch-put-asset-property-value-request}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes. |

### 4.1.64 PutAssetPropertyValueEntry {#put-asset-property-value-entry}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes since it inherits from the `AbstractEntry` entity. |

### 4.1.65 PutAssetPropertyValue {#put-asset-property-value}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes since it inherits from the `AbstractAssetPropertyValue` entity.|

### 4.1.66 TimeInNanos_Response {#time-in-nanos-response}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes since it inherits from the `AbstractTimeInNanos` entity. |

### 4.1.67 TimeInNanos {#time-in-nanos}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes since it inherits from the `AbstractTimeInNanos` entity. |

### 4.1.68 BatchPutAssetPropertyValueResponse {#batch-put-asset-property-value-response}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes. |

### 4.1.69 BatchPutAssetPropertyErrorEntry {#batch-put-asset-property-error-entry}

| Attribute | Description |
| --- | --- |
| `EntrID` | The user specified ID for the entry. You can use this ID to identify which entries failed. |

### 4.1.70 BatchPutAssetPropertyError {#batch-put-asset-property-error}

| Attribute | Description |
| --- | --- |
| `ErrorCode` | Holds the returned error code. |
| `ErrorMessage` | The associated error message. |

### 4.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the AWS IoT SiteWise connector, enumerations list values such as the list of available AWS regions, the asset model state, error details code and the detailed error codes.

#### 4.2.1 ENUM_AssetModelStatus_State

 Name | Caption | Description |
| --- | --- | --- |
| `CREATING` | CREATING | The asset model is being created. |
| `ACTIVE` | ACTIVE | The asset model is active. |
| `UPDATING`  | UPDATING  | The asset model is being updated. |
| `PROPAGATING` | PROPAGATING | The asset model's changes are propagating to its assets. |
| `DELETING` | DELETING | The asset model is being deleted. |
| `FAILED` | FAILED | The asset model failed to validate during a create or update operation. |

#### 4.2.2 ENUM_ErrorDetails_Code

| Name | Caption | Description |
| --- | --- | --- |
| `VALIDATION_ERROR` | VALIDATION_ERROR |  |
| `INTERNAL_FAILURE` | INTERNAL_FAILURE |  |

#### 4.2.3 ENUM_DetailedError_Code

| Name | Caption | Description |
| --- | --- | --- |
| `INCOMPATIBLE_COMPUTE_LOCATION` | The provided compute location is incompatible. |  |
| `INCOMPATIBLE_FORWARDING_CONFIGURATION` | The provided forwarding configuration is incompatible. |  |

#### 4.2.4 ENUM_PortalStatus_State

 Name | Caption | Description |
| --- | --- | --- |
| `CREATING` | CREATING | The portal is being created. |
| `UPDATING`  | UPDATING  | The portal is being updated. |
| `DELETING` | DELETING | The portal is being deleted. |
| `ACTIVE` | ACTIVE | The portal is active. |
| `FAILED` | FAILED | The portal failed to validate during a create or update operation. |

#### 4.2.5 ENUM_MonitorErrorDetails_Code

| Name | Caption | Description |
| --- | --- | --- |
| `INTERNAL_FAILURE` | An internal error has occurred. |  |
| `VALIDATION_ERROR` | A validation error was returned. |  |
| `LIMIT_EXCEEDED` | The monitoring limit has been exceeded. |  |

#### 4.2.6 ENUM_AssetModelCompositeModelType

| Name | Caption | Description |
| --- | --- | --- |
| `AWS` | INTERNAL_FAILURE | The type of the composite model. |
| `ALARM` | VALIDATION_ERROR | The type of the composite model. |

#### 4.2.7 ENUM_ComputeLocation

| Name | Caption | Description |
| --- | --- | --- |
| `EDGE` | EDGE | The variable is being computed on the Edge device. |
| `CLOUD` | CLOUD | The variable is being computed in the cloud. |

#### 4.2.8 ENUM_DataType

| Name | Caption | Description |
| --- | --- | --- |
| `_STRING` | STRING | The variable is of type string. |
| `INTEGER` | INTEGER | The variable is of type integer. |
| `_DOUBLE` | DOUBLE | The variable is of type double. |
| `_BOOLEAN` | BOOLEAN | The variable is of type Boolean. |
| `STRUCT` | STRUCT | The variable is of type struct. |

#### 4.2.9 ENUM_ForwardingConfigState

| Name | Caption | Description |
| --- | --- | --- |
| `DISABLED` | DISABLED | The forwarding config state is disabled. |
| `ENABLED` | ENABLED | The forwarding config state is enabled. |

#### 4.2.10 ENUM_ListAssetsFilter

| Name | Caption | Description |
| --- | --- | --- |
| `ALL` | ALL | The filter to retrieve all assets associated with a specified asset model. |
| `TOP_LEVEL` | TOP_LEVEL | The filter to retrieve only top-level assets. |

#### 4.2.11 ENUM_PropertyNotificationState

| Name | Caption | Description |
| --- | --- | --- |
| `ENABLED` | ENABLED | Describes a property's notification state. |
| `DISABLED` | DISABLED | Describes a property's notification state. |

#### 4.2.12 ENUM_AssociatedAsset_TraversalDirection

| Name | Caption | Description |
| --- | --- | --- |
| `CHILD` | CHILD | Lists all child assets associated to the asset. |
| `PARENT` | PARENT | The list includes the asset's parent asset. |

#### 4.2.13 ENUM_AssetPropertyValue_Quality

| Name | Caption | Description |
| --- | --- | --- |
| `GOOD` | GOOD | The data isn't affected by any issues. |
| `BAD` | BAD | The data is affected by an issue such as sensor failure. |
| `UNCERTAIN` | UNCERTAIN | The data is affected by an issue such as sensor inaccuracy. |

#### 4.2.14 ENUM_TimeOrdering

| Name | Caption | Description |
| --- | --- | --- |
| `ASCENDING` | ASCENDING | Chronological sorting order of the requested information is ascending. |
| `DESCENDING` | DESCENDING | Chronological sorting order of the requested information is descending. |

#### 4.2.15 ENUM_Resolution

| Name | Caption | Description |
| --- | --- | --- |
| `_1m` | 1m | Time interval of one minute over which data is aggregated. |
| `_15m` | 15m | Time interval of fifteen minutes over which data is aggregated. |
| `_1h` | 1h | Time interval of one hour over which data is aggregated. |
| `_1d` | 1d | Time interval of one day over which data is aggregated. |

#### 4.2.16 ENUM_AggregateType

| Name | Caption | Description |
| --- | --- | --- |
| `AVERAGE` | AVERAGE | Data aggregating function being the mean value in the specified period. |
| `COUNT` | COUNT | Data aggregating function being the count of data points. |
| `MAXIMUM` | MAXIMUM | Data aggregating function being the maximum value in the specified period. |
| `MINIMUM` | MINIMUM | Data aggregating function being the minimum value in the specified period. |
| `SUM` | SUM | Data aggregating function being the summed up value in the specified period. |
| `STANDARD_DEVIATION` | STANDARD_DEVIATION | Data aggregating function being the standard deviation in the specified period. |

#### 4.2.17 ENUM_ErrorCode

| Name | Caption | Description |
| --- | --- | --- |
| `ResourceNotFoundException` | ResourceNotFoundException | Retrieving the property value returned an error because the resource was not found. |
| `InvalidRequestException` | InvalidRequestException | Retrieving the property value returned an error because the request was invalid. |
| `AccessDeniedException` | AccessDeniedException | Retrieving the property value returned and error because access was denied. |

#### 4.2.18 ENUM_CompletionStatus

| Name | Caption | Description |
| --- | --- | --- |
| `SUCCESS` | SUCCESS | The entry was skipped because it was included in a prior batch retrieval call. |
| `ERROR` | ERROR | The entry was skipped because it returned an error. |

#### 4.2.19 ENUM_BatchPutAssetPropertyError_ErrorCode

| Name | Caption | Description |
| --- | --- | --- |
| `ACCESS_DENIED_EXCEPTION` | ACCESS_DENIED_EXCEPTION | The property value returned and error because access was denied. |
| `CONFLICTING_OPERATION_EXCEPTION` | CONFLICTING_OPERATION_EXCEPTION | Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time. |
| `INTERNAL_FAILURE_EXCEPTION` | INTERNAL_FAILURE_EXCEPTION | AWS IoT SiteWise cannot process your request right now. Try again later. |
| `INVALID_REQUEST_EXCEPTION` | INVALID_REQUEST_EXCEPTION | The property value returned an error because the request was invalid. |
| `LIMIT_EXCEEDED_EXCEPTION` | LIMIT_EXCEEDED_EXCEPTION | You have reached the limit for a resource. For example, this can occur if you are trying to associate more than the allowed number of child properties for an asset.|
| `RESOURCE_NOT_FOUND_EXCEPTION` | RESOURCE_NOT_FOUND_EXCEPTION | The property value you are trying to change was not found. |
| `SERVICE_UNAVAILABLE_EXCEPTION` | SERVICE_UNAVAILABLE_EXCEPTION | The requested service is unavailable. |
| `THROTTLING_EXCEPTION` | THROTTLING_EXCEPTION | Your request exceeded a rate limit. For example, you might have exceeded the number of AWS IoT SiteWise assets that can be created per second. |
| `TIMESTAMP_OUT_OF_RANGE_EXCEPTION` | TIMESTAMP_OUT_OF_RANGE_EXCEPTION | You entered a faulty timestamp. |
| `UNKNOWN_TO_SDK_VERSION` | UNKNOWN_TO_SDK_VERSION | Returned when the enumeration value is unknown in the SDK. |

#### 4.2.20 ENUM_FindNearestSecond_Type {#find-nearest-second}

| Name | Caption | Description |
| --- | --- | --- |
| `ROUND` | ROUND | To round to the nearest unit. |
| `CEILING` | CEILING | To round up to the nearest second. |
| `TRUNCATE` | TRUNCATE | To round down to the nearest second. |

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow.

#### 4.3.1 ListAssetModels {#list-asset-models}

The `ListAssetModels` Amazon Iot SiteWise activity allows you to retrieve a list of all asset model summaries for the given region. It requires a valid `ENUM_Region` parameter and a `ListAssetModelsRequest` object and returns a `ListAssetModelsResponse` object, which can include a maximum of 250 results. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `ListAssetModelsRequest` | `ListAssetModelsResponse` |

The `ListAssetModels` method supports pagination. The `MaxResults` in the request can be set to specify the maximum number of results to be returned in the response object. If you do not set `MaxResults`, the response includes 50 results by default. If you set `MaxResults` and there are additional results to display, the response includes a value for NextToken. Use `NextToken` as a parameter in your next request to the `ListAssetModels` method to receive the next page of results.

#### 4.3.2 DescribeAssetModel {#describe-asset-model}

The `DescribeAssetModel` Amazon Iot SiteWise activity allows you to retrieve information about an asset model. It requires a valid `ENUM_Region` parameter and a `DescribeAssetModelRequest` object and returns a `DescribeAssetModelResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `DescribeAssetModelRequest` | `DescribeAssetModelResponse` |

#### 4.3.3 ListProjects {#list-projects}

The `ListProjects` Amazon Iot SiteWise activity allows you to retrieve a list of all project summaries for an AWS IoT SiteWise Monitor portal. It requires a valid `ENUM_Region` parameter and a `ListProjectsRequest` object with a valid `PortalID` and returns a `ListProjectsResponse` object, which can include a maximum of 250 results. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `ListProjectsRequest` | `ListProjectsResponse` |

The `ListProjects` method supports pagination. The `MaxResults` in the request can be set to specify the maximum number of results to be returned in the response object. If you do not set MaxResults, the response includes 50 results by default. If you set `MaxResults` and there are additional results to display, the response includes a value for `NextToken`. Use `NextToken` as a parameter in your next request to the `ListProjects` method to receive the next page of results.

#### 4.3.4 DescribeProject {#describe-project}

The `DescribeProject` Amazon Iot SiteWise activity allows you to get details on a specific project that exists within your AWS environment. It requires a valid `ENUM_Region` parameter and a `DescribeProjectRequest` object with a valid `ProjectID` and returns a `DescribeProjectResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `DescribeProjectRequest` | `DescribeProjectResponse` |

#### 4.3.5 ListPortals {#list-portals}

The `ListPortals` Amazon Iot SiteWise activity allows you to retrieve a list of all portal summaries for the given region. It requires a valid `ENUM_Region` parameter and a `ListPortalsRequest` object and returns a `ListPortalsResponse` object, which can include a maximum of 250 results. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `ListPortalsRequest` | `ListPortalsResponse` |

The `ListPortals` method supports pagination. The MaxResults in the request can be set to specify the maximum number of results to be returned in the response object. If you do not set MaxResults, the response includes 50 results by default. If you set `MaxResults` and there are additional results to display, the response includes a value for NextToken. Use `NextToken` as a parameter in your next request to the `ListPortals` method to receive the next page of results.

#### 4.3.6 ListAssets {#list-assets}

The `ListAssets` Amazon Iot SiteWise activity allows you to retrieve a list of all asset summaries for the given region. It requires a valid `ENUM_Region` parameter and a `ListAssetsRequest` object and returns a `ListAssetsResponse` object, which can include a maximum of 250 results. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `ListAssetsRequest` | `ListAssetsResponse` |

The `ListAssets` method supports pagination. The MaxResults in the request can be set to specify the maximum number of results to be returned in the response object. If you do not set MaxResults, the response includes 50 results by default. If you set MaxResults and there are additional results to display, the response includes a value for `NextToken`. Use `NextToken` as a parameter in your next request to the `ListAssets` method to receive the next page of results.

#### 4.3.7 ListProjectAssets {#list-project-assets}

The `ListProjectAssets` Amazon Iot SiteWise activity allows you to retrieve a list of assets belonging to a project. It requires a valid `ENUM_Region` parameter and a `ListProjectAssetsRequest` object with a valid `ProjectID` and returns a `ListProjectAssetsResponse` object, which can include a maximum of 250 results. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `ListProjectAssetsRequest` | `ListProjectAssetsResponse` |

The `ListProjectAssets` method supports pagination. The `MaxResults` in the request can be set to specify the maximum number of results to be returned in the response object. If you do not set `MaxResults`, the response includes 50 results by default. If you set `MaxResults` and there are additional results to display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to the `ListProjectAssets` method to receive the next page of results.

#### 4.3.8 DescribeAsset {#describe-asset}

The `DescribeAsset` Amazon Iot SiteWise activity allows you to retrieve information for a given asset. It requires a valid `ENUM_Region` parameter and a `DescribeAssetRequest` object with a valid `AssetID` and returns a `DescribeAssetResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `DescribeAssetRequest` | `DescribeAssetResponse` |

#### 4.3.9 ListAssociatedAssets {#list-associated-assets}

The `ListAssociatedAssets` Amazon Iot SiteWise activity allows you to retrieve a list of all associated assets for the given asset. It requires a valid `ENUM_Region` parameter and a `ListAssociatedAssetsRequest` object wit a valid AssetID and returns a `ListAssociatedAssetsResponse` object, which can include a maximum of 250 results. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `ListAssociatedAssetsRequest` | `ListAssociatedAssetsResponse` |

The `ListAssociatedAssets` method supports pagination. The `MaxResults` in the request can be set to specify the maximum number of results to be returned in the response object. If you do not set MaxResults, the response includes 50 results by default. If you set `MaxResults` and there are additional results to display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to the `ListAssociatedAssets` method to receive the next page of results.

#### 4.3.10 ListAssetRelationships {#list-asset-relationships}

The `ListAssetRelationships` Amazon Iot SiteWise activity allows you to retrieve a list of asset relationships for an asset. It requires a valid `ENUM_Region` parameter and a `ListAssetRelationshipsRequest` object with a valid AssetID and returns a `ListAssetRelationshipsResponse` object, which can include a maximum of 250 results. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `ListAssetRelationshipsRequest` | `ListAssetRelationshipsResponse` |

The `ListAssetRelationships` method supports pagination. The `MaxResults` in the request can be set to specify the maximum number of results to be returned in the response object. If you do not set MaxResults, the response includes 50 results by default. If you set MaxResults and there are additional results to display, the response includes a value for `NextToken`. Use NextToken as a parameter in your next request to the `ListAssetRelationships` method to receive the next page of results.

#### 4.3.11 DescribeAssetProperty {#describe-asset-property}

The `DescribeAssetProperty` Amazon Iot SiteWise activity allows you to retrieve information about an asset property. It requires a valid `ENUM_Region` parameter and a `DescribeAssetPropertyRequest` object with a valid AssetID & PropertyID, and returns a `DescribeAssetPropertyResponse` object.

| Input | Output | 
| --- | --- | 
| `DescribeAssetPropertyRequest` | `DescribeAssetPropertyResponse` |

#### 4.3.12 GetAssetPropertyValue {#get-asset-property-value}

The `GetAssetPropertyValue` Amazon Iot SiteWise activity allows you to retrieve an asset property's current value. It requires a valid `ENUM_Region` parameter and a `GetAssetPropertyValueRequest` object and returns a `GetAssetPropertyValueResponse` object.

| Input | Output | 
| --- | --- | 
| `GetAssetPropertyValueRequest` | `GetAssetPropertyValueResponse` |

#### 4.3.13 GetAssetPropertyValueHistory {#get-asset-property-value-history}

The `GetAssetPropertyValueHistory` Amazon Iot SiteWise activity allows you to retrieve a set of an asset property's historic values. It requires a valid `ENUM_Region` parameter and a `GetAssetPropertyValueHistoryRequest` object and returns a `GetAssetPropertyValueHistoryResponse` object.

| Input | Output | 
| --- | --- | 
| `GetAssetPropertyValueHistoryRequest` | `GetAssetPropertyValueHistoryResponse` |

#### 4.3.14 GetAssetPropertyAggregates {#get-asset-property-aggregates}

The `GetAssetPropertyAggregates` Amazon Iot SiteWise activity allows you to retrieve aggregated values for an asset property. It requires a valid `ENUM_Region` parameter and a `GetAssetPropertyAggregatesRequest` object and returns a `GetAssetPropertyAggregatesResponse` object.

| Input | Output | 
| --- | --- | 
| `GetAssetPropertyAggregatesRequest` | `GetAssetPropertyAggregatesResponse` |

#### 4.3.15 BatchGetAssetPropertyValue {#batch-get-asset-property-value}

The `BatchGetAssetPropertyValue` Amazon Iot SiteWise activity allows you to get the current value for one or more asset properties. It requires a valid `ENUM_Region` parameter and a `BatchGetAssetPropertyValueRequest` object and returns a `BatchGetAssetPropertyValueResponse` object.

| Input | Output | 
| --- | --- | 
| `BatchGetAssetPropertyValueRequest` | `BatchGetAssetPropertyValueResponse` |

#### 4.3.16 BatchGetAssetPropertyValueHistory {#batch-get-asset-property-value-history}

The `BatchGetAssetPropertyValueHistory` Amazon Iot SiteWise activity allows you to get the historical values for one or more asset properties. It requires a valid `ENUM_Region` parameter and a `BatchGetAssetPropertyValueHistoryRequest` object and returns a `BatchGetAssetPropertyValueHistoryResponse` object.

| Input | Output | 
| --- | --- | 
| `BatchGetAssetPropertyValueHistoryRequest` | `BatchGetAssetPropertyValueHistoryResponse` |

#### 4.3.17 BatchPutAssetPropertyValue {#batch-put-asset-property-value}

The `BatchPutAssetPropertyValue` Amazon Iot SiteWise activity allows you to put values for one or more asset properties. It requires a valid `ENUM_Region` parameter and a `BatchPutAssetPropertyValueRequest` object and returns a `BatchPutAssetPropertyValueResponse` object.

| Input | Output | 
| --- | --- | 
| `BatchPutAssetPropertyValueRequest` | `BatchPutAssetPropertyValueResponse` |

#### 4.3.18 JA_FindNearestSecond {#find-nearest-second}

The [GetAssetPropertyValueHistory](#get-asset-property-value-history), [GetAssetPropertyAggregates](#get-asset-property-aggregates) and [BatchGetAssetPropertyValueHistory](#get-asset-property-value-history) Amazon Iot SiteWise activities have two attributes call `StartDate` and `EndDate` that can be given to describe the range from which to query historical data. The date and time variable given to these two attributes must be expressed in seconds (millisecond must be 000). For our users to be able to find the nearest second to their chosen time if need be, we have created the `JA_FindNearestSecond` Java action with three different enum variables for the `FindType` parameter. It requires a date and time `DateTime` parameter and a [`FindType`](#find-nearest-second) enum parameter and returns a date and time value.

| Input | Output | 
| --- | --- | 
| `DateTime` , `FindType` | Date and time value |
