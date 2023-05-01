---
title: "AWS IoT Twinmaker Connector"
url: /appstore/connectors/aws/aws-iot-twinmaker/
description: "Describes the configuration and usage of the AWS IoT Twinmaker connector from the Mendix Marketplace. IoT Twinmaker is a connector to read data from your digital twin stored in the AWS cloud."
weight: 20
tags: ["marketplace", "marketplace component", "amazon", "AWS IoT Twinmaker", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The AWS IoT Twinmaker connector allows you to read data from your digital twin.

### 1.1 Typical Use Cases

AWS IoT TwinMaker makes it easier for developers to create digital twins of real-world systems such as buildings, factories, industrial equipment, and production lines. AWS IoT TwinMaker provides the tools you need to build digital twins to help you optimize building operations, increase production output, and improve equipment performance. With the ability to use existing data from multiple sources, create virtual representations of any physical environment, and combine existing 3D models with real-world data, you can now harness digital twins to create a holistic view of your operations faster and with less effort.

### 1.2 Prerequisites {#prerequisites}

The AWS IoT Twinmaker connector requires Mendix Studio Pro version 9.18.3 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS Authentication connector version {MINIMUM REQUIRED VERSION} or higher](https://marketplace.mendix.com/link/component/120333). It is crucial for the {CONNECTOR NAME} connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the AWS IoT Twinmaker connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AWSTwinmakerConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to {AWS SERVICE NAME}. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the IoT Twinmaker service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.
    The AWS IoT Twinmaker connector supports both session and static credentials. By default, the connector is pre-configured to use static credentials, but you may want to switch to session credentials, for example, to increase the security of your app. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
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

After you configure the authentication profile for IoT Twinmaker, you can implement the functions of the connector by using the provided activities in microflows. For example, to list all workspaces, implement the ListWorkspace activity by doing the following steps:

Create a ListWorkspaceRequest entity, call the ListWorkspaceRequest microflow action with the created entity as an input. IoT Twinmaker will return all workspaces it finds (at most 250, by default 25).

## 4 Technical Reference

To help you work with the {CONNECTOR NAME} connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

| Name                                                   | Generalization                                        | Documentation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GetEntityRequest                                       |                                                       | Request entity to retrieve information about aTwinMaker-Entity.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetEntity.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetEntityRequest.html                                                                                                                                                                                                                                                                                                                     |
| GetEntityResponse                                      |                                                       | Entity with reponse of retrieving information about a TwinMaker-Entity.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetEntity.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetEntityResponse.html                                                                                                                                                                                                                                                                                                            |
| ComponentResponse                                      |                                                       | Enitity for the components in the entity.<br>Component name is used as unique key within this list.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ComponentResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ComponentResponse.html                                                                                                                                                                                                                                                                        |
| PropertyResponse                                       |                                                       | Entity containing information about a property response.<br>Property name is used as unique key<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyResponse.html                                                                                                                                                                                                                                                                              |
| PropertyResponsePropertyDefinitionResponse             | AWSTwinMakerConnector.PropertyDefinitionResponse      | Entity containing data of a property definition.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html                                                                                                                                                                                                                                                                                                         |
| ComponentPropertyGroupResponse                         | AWSTwinMakerConnector.PropertyGroupResponse           | PropertyGroupResponse associated with a ComponentType<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyGroupResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyGroupResponse.html                                                                                                                                                                                                                                                                                                              |
| PropertyName                                           |                                                       | The names of properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Status                                                 |                                                       | Entity that represents the status of an entity, component, component type, or workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html                                                                                                                                                                                                                                                                                                         |
| ErrorDetails                                           |                                                       | Details of the error message.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ErrorDetails.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ErrorDetails.html                                                                                                                                                                                                                                                                                                                                                        |
| GetPropertyValueHistoryRequest                         |                                                       | Request to retrieve information about the history of a time series property value for a component, component type, twinmaker entity, or workspace.<br><br>You must specify a value for workspaceId. For twinmaker entity-specific queries, specify values for componentName and entityId. For cross-entity quries, specify a value for componentTypeId.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValueHistory.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueHistoryRequest.html |
| InterpolationParameters                                |                                                       | Optional: Used to specify the interpolation type and the interval over which to interpolate data.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_InterpolationParameters.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/InterpolationParameters.html                                                                                                                                                                                                                                                              |
| PropertyFilter                                         |                                                       | Entity that filters items returned by a property request.<br><br>You can filter the request using various logical operators and a key-value format.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyFilter.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyFilter.html                                                                                                                                                                                                                              |
| GetPropertyValueRequestSelectedProperty                | AWSTwinMakerConnector.SelectedProperty                | Required: The twinmaker property to return values of.<br>In Twinmaker, this property must be marked as a time-series property.<br><br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html#API_GetPropertyValue_RequestBody and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueRequest.html#selectedProperties()                                                                                                                                                                              |
| PropertyFilterDataValue                                | AWSTwinMakerConnector.DataValueUsage                  | The value associated with this property filter.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html                                                                                                                                                                                                                                                                                                                                            |
| GetPropertyValueHistoryResponse                        |                                                       | Reponse of retrieving information about the history of a time series property value for a component, component type, entity, or workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValueHistory.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueHistoryResponse.html                                                                                                                                                                                                             |
| PropertyValueHistory                                   |                                                       | Contains the history of values for a time series property.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyValueHistory.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyValueHistory.html                                                                                                                                                                                                                                                                                                           |
| PropertyValue                                          | AWSTwinMakerConnector.DataValueUsage                  | Contains information about a value for a time series property.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyValue.html                                                                                                                                                                                                                                                                                                                     |
| EntityPropertyReference                                |                                                       | Entity that uniquely identifies an entity property.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntityPropertyReference.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntityPropertyReference.html                                                                                                                                                                                                                                                                                                            |
| ExternalPropertyID                                     |                                                       | A mapping of external IDs to property names. External IDs uniquely identify properties from external data stores.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntityPropertyReference.html#API_EntityPropertyReference_Contents and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntityPropertyReference.html#externalIdProperty()                                                                                                                                                                                    |
| GetPropertyValueRequest                                |                                                       | Entity for request to Get the property values for a component, component type, entity, or workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueRequest.html                                                                                                                                                                                                                                                                  |
| TabularConditions                                      |                                                       | Optional: The tabular conditions.<br><br>See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_TabularConditions.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/TabularConditions.html                                                                                                                                                                                                                                                                                                                                               |
| OrderBy                                                |                                                       | Filter criteria that orders the output. It can be sorted in ascending or descending order.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_OrderBy.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/OrderBy.html                                                                                                                                                                                                                                                                                                     |
| TabularConditionPropertyFilter                         | AWSTwinMakerConnector.PropertyFilter                  | Entity that filters items returned by a property request.<br><br>You can filter the request using various logical operators and a key-value format.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyFilter.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyFilter.html                                                                                                                                                                                                                              |
| EntityGetPropertyValueHistoryRequestPropertyFilter     | AWSTwinMakerConnector.PropertyFilter                  | Optonal: Entity that filters items returned by a property request.<br><br>You can filter the request using various logical operators and a key-value format.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyFilter.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyFilter.html                                                                                                                                                                                                                     |
| PropertyResponseDataValue                              | AWSTwinMakerConnector.DataValueUsage                  | The current value of the property.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html                                                                                                                                                                                                                                                                                                                                                         |
| GetEntityResponseStatus                                | AWSTwinMakerConnector.Status                          | The current status of the entity.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html                                                                                                                                                                                                                                                                                                                                                                |
| ComponentResponseStatus                                | AWSTwinMakerConnector.Status                          | The status of the component type.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html                                                                                                                                                                                                                                                                                                                                                                |
| GetPropertyValueResponse                               |                                                       | Response of getting the property values for a component, component type, entity, or workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueResponse.html                                                                                                                                                                                                                                                                       |
| PropertyValueLatest                                    |                                                       | This maps the property name as key to the latest property value and property information (definition).<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyLatestValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyLatestValue.html                                                                                                                                                                                                                                                                 |
| EntityPropertyReferencePropertyLatestValue             | AWSTwinMakerConnector.EntityPropertyReference         | This enity specifies information about a property.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntityPropertyReference.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntityPropertyReference.html                                                                                                                                                                                                                                                                                                             |
| GetPropertyValueHistoryResponseEntityPropertyReference | AWSTwinMakerConnector.EntityPropertyReference         | Unique identification of a twinmaker entity property.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntityPropertyReference.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntityPropertyReference.html                                                                                                                                                                                                                                                                                                          |
| DataValueUsagePropertyLatestValue                      | AWSTwinMakerConnector.DataValueUsage                  | The lastest value of the property.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html                                                                                                                                                                                                                                                                                                                                                         |
| Table                                                  |                                                       | A table of property values.<br><br>See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html#tm-GetPropertyValue-response-tabularPropertyValues and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueResponse.html#tabularPropertyValues()                                                                                                                                                                                                                                                                    |
| Row                                                    |                                                       | Row (array) inside a table of property values.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html#tm-GetPropertyValue-response-tabularPropertyValues and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueResponse.html#tabularPropertyValues()                                                                                                                                                                                                                                            |
| Column                                                 | AWSTwinMakerConnector.DataValueUsage                  | Column with the property value. Propertyname is used as key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ListEntitiesRequest                                    |                                                       | Entity as request for retrieving the list of all Twinmaker-Entities in a workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListEntities.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListEntitiesRequest.html                                                                                                                                                                                                                                                                                           |
| ListEntitiesResponse                                   |                                                       | Entity containing the list of all Twinmaker-Entities in a workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListEntities.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListEntitiesResponse.html                                                                                                                                                                                                                                                                                                         |
| EntitySummary                                          |                                                       | Entity containing information of a Twinmaker-Entity.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntitySummary.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntitySummary.html                                                                                                                                                                                                                                                                                                                               |
| EntityStatus                                           | AWSTwinMakerConnector.Status                          | The current status of the Twinmaker-Entity.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html                                                                                                                                                                                                                                                                                                                                                      |
| ListScenesRequest                                      |                                                       | Entity with request to get the list of available scenes in a workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListScenes.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListScenesRequest.html                                                                                                                                                                                                                                                                                                           |
| ListScenesResponse                                     |                                                       | Entity containing the list of scenes in a workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListScenes.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListScenesResponse.html                                                                                                                                                                                                                                                                                                                             |
| SceneSummary                                           |                                                       | Entity containing information about a scene.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_SceneSummary.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/SceneSummary.html                                                                                                                                                                                                                                                                                                                                         |
| GetSceneRequest                                        |                                                       | Entity containing the request to get a specific scene<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetSceneRequest.html                                                                                                                                                                                                                                                                                                                                 |
| GetSceneResponse                                       |                                                       | Entity containing the reponse of getting a specific scene.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetSceneResponse.html                                                                                                                                                                                                                                                                                                                           |
| Capability                                             |                                                       | A list of capabilities that the scene uses to render.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html#API_GetScene_ResponseElements and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetSceneResponse.html#capabilities()                                                                                                                                                                                                                                                                                   |
| CustomParentIDEntityFilter                             | AWSTwinMakerConnector.AbstractEntityFilter            | Filter to only retrieve Twinmaker-Entities which are a child of a specific Twinmaker-Entitiy parent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| RootEntityFilter                                       | AWSTwinMakerConnector.AbstractEntityFilter            | Filter to only retrieve root Twinmaker-Entities, so without a parent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| AbstractEntityFilter                                   |                                                       | Do not use this entity, instead use one of its specializations<br><br>An object that filters items in a list of Twinmaker-Entities.<br><br>See also https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListEntitiesFilter.html                                                                                                                                                                                                                                                                                                                                    |
| CustomExternalIDEntityFilter                           | AWSTwinMakerConnector.AbstractEntityFilter            | Filter to only retrieve Twinmaker-Entities with a given External Id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| CustomComponentTypeIDEntityFilter                      | AWSTwinMakerConnector.AbstractEntityFilter            | Filter to only retrieve Twinmaker-Entities of a specific component type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| AbstractDataValue                                      |                                                       | Abstract object that specifies a value, or values, for a property.<br><br>Do not use this Entity! - Use a specialization instead.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html                                                                                                                                                                                                                                                          |
| DataValueMap                                           | AWSTwinMakerConnector.AbstractDataValue               | Entity that represents a map (containing name-value pairs) as data value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| DataValueUsage                                         |                                                       | Entity that specifies a value, or values, for a property.<br><br>This enitty can be used as starting point for using a data value of a property.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html                                                                                                                                                                                                                                           |
| DataValueBoolean                                       | AWSTwinMakerConnector.AbstractDataValue               | DataValue of type Boolean.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| DataValueInt                                           | AWSTwinMakerConnector.AbstractDataValue               | DataValue of type Integer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| DataValueLong                                          | AWSTwinMakerConnector.AbstractDataValue               | DataValue of type Long                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| DataValueList                                          | AWSTwinMakerConnector.AbstractDataValue               | Entity that represents a list as data value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| DataValueRelationship                                  | AWSTwinMakerConnector.AbstractDataValue               | DataValue of type Relationship that associates a component and an entity.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_RelationshipValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/RelationshipValue.html                                                                                                                                                                                                                                                                                                  |
| DataValueString                                        | AWSTwinMakerConnector.AbstractDataValue               | DataValue of type String.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| DataValueUsageMapEntry                                 | AWSTwinMakerConnector.DataValueUsage                  | Entity representing one entry of a map, so one key-value pair.<br>It is a specialization of the DataValueUsage as the value can be of any data value type.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| DataValueDecimal                                       | AWSTwinMakerConnector.AbstractDataValue               | DataValue of type Decimal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| AbstractQuery                                          |                                                       | Optional.<br>Abstract Entity: Do not use this AbstractQuery!<br>A specialization Query must be used instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ListWorkspacesRequest                                  |                                                       | Entity as request to get the list of workspaces in the current account..<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListWorkspaces.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListWorkspacesRequest.html                                                                                                                                                                                                                                                                                                  |
| ListComponentTypeRequest                               |                                                       | Request entity to lists all component types in a workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypes.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesRequest.html                                                                                                                                                                                                                                                                                                       |
| EntitySpecificQuery                                    | AWSTwinMakerConnector.AbstractQuery                   | Optonal: To be used for twinmaker entity-specific queries.<br>So to retrieve information about the history of a time series property value for a specific twinmaker entity and component.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ListWorkspacesResponse                                 |                                                       | Entity with the list of workspaces in the current account..<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListWorkspaces.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListWorkspacesResponse.html                                                                                                                                                                                                                                                                                                              |
| AbstractListComponentTypeFilter                        |                                                       | Do not use this entity, instead use one of its specializations<br><br>An object that filters items in a list of component types<br><br>https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesFilter.html                                                                                                                                                                                                                                                                                                                                           |
| CrossEntityQuery                                       | AWSTwinMakerConnector.AbstractQuery                   | Optonal: To be used for twinmaker cross-entity queries.<br>So to retrieve information about the history of a time series property value for all components of a specific type within a workspace.<br>Filters can be applied to the limit the number of components or to target specfic components,                                                                                                                                                                                                                                                                                                          |
| WorkspaceSummary                                       |                                                       | Entity that contains information about a workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_WorkspaceSummary.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/WorkspaceSummary.html                                                                                                                                                                                                                                                                                                                          |
| ExtendsFromFilter                                      | AWSTwinMakerConnector.AbstractListComponentTypeFilter | Entity for filters containing the component type that the component types in the list extend.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypesFilter.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesFilter.html#extendsFrom()                                                                                                                                                                                                                                                  |
| SelectedProperty                                       |                                                       | Entity to represent a selected property, e.g. the properties whose values the operation returns.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| IsAbstractFilter                                       | AWSTwinMakerConnector.AbstractListComponentTypeFilter | Entity for filters containing a Boolean value that specifies whether the component types in the list are abstract.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypesFilter.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesFilter.html#isAbstract()                                                                                                                                                                                                                              |
| GetPropertyValueHistoryRequestSelectedProperty         | AWSTwinMakerConnector.SelectedProperty                | Required: The twinmaker property to return values of.<br>In Twinmaker, this property must be marked as a time-series property.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html#API_GetPropertyValue_RequestBody and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueRequest.html#selectedProperties()                                                                                                                                                                                  |
| NamespaceFilter                                        | AWSTwinMakerConnector.AbstractListComponentTypeFilter | Entity for filters containing the namespace to which the component types in the list belong.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypesFilter.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesFilter.html#namespace()                                                                                                                                                                                                                                                     |
| ListComponentTypeResponse                              |                                                       | Response entity containing the list all component types in a workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypes.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesResponse.html                                                                                                                                                                                                                                                                                          |
| ComponentTypeSummary                                   |                                                       | Contains the information for the retrieved ComponentTypes.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ComponentTypeSummary.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ComponentTypeSummary.html                                                                                                                                                                                                                                                                                                           |
| ListComponentTypeStatus                                | AWSTwinMakerConnector.Status                          | The current status of the component type.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html                                                                                                                                                                                                                                                                                                                                                        |
| GetComponentTypeRequest                                |                                                       | Entity containing request to retrieves information about a specific componentType.<br><br>Required: WorkspaceID and ComponentTypeID<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetComponentType.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetComponentTypeRequest.html                                                                                                                                                                                                                                   |
| DataValueUsageListEntry                                | AWSTwinMakerConnector.DataValueUsage                  | Entity representing one list entry.<br>It is a specialization of the DataValueUsage as the value can be of any data value type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| GetComponentTypeResponse                               |                                                       | Entity containing information on the requested ComponentType.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetComponentType.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetComponentTypeResponse.html                                                                                                                                                                                                                                                                                                        |
| GetWorkspaceRequest                                    |                                                       | Entity for requesting details of a workspace<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetWorkspace.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetWorkspaceRequest.html                                                                                                                                                                                                                                                                                                                                  |
| ExtendsFrom                                            |                                                       | The name of the parent component type that this component type extends                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| GetWorkspaceResponse                                   |                                                       | Enitty containing the details of a workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetWorkspace.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetWorkspaceResponse.html                                                                                                                                                                                                                                                                                                                                |
| FunctionResponse                                       |                                                       | Function response.<br><br>See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_FunctionResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/FunctionResponse.html                                                                                                                                                                                                                                                                                                                                                                |
| ComponentTypePropertyDefinitionResponse                | AWSTwinMakerConnector.PropertyDefinitionResponse      | Property definitions in the component type.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html                                                                                                                                                                                                                                                                                                              |
| ComponentTypeStatus                                    | AWSTwinMakerConnector.Status                          | The current status of the component type.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html                                                                                                                                                                                                                                                                                                                                                        |
| RequiredProperty                                       |                                                       | The required properties of the function.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| DataConnector                                          |                                                       | The data connector of the function.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataConnector.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataConnector.html                                                                                                                                                                                                                                                                                                                                                |
| LambdaFunction                                         |                                                       | The Lambda function associated with this data connector.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_LambdaFunction.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/LambdaFunction.html                                                                                                                                                                                                                                                                                                                         |
| PropertyDefinitionResponse                             |                                                       | An object that contains response data from a property definition request.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html                                                                                                                                                                                                                                                                                |
| Configuration                                          |                                                       | A mapping that specifies configuration information about the property with key-value pairs.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html#API_PropertyDefinitionResponse_Contents and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html#configuration()                                                                                                                                                                                                      |
| DataType                                               |                                                       | An object that contains information about the data type.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataType.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataType.html                                                                                                                                                                                                                                                                                                                                     |
| Relationship                                           |                                                       | An object that specifies a relationship with another component type.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Relationship.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Relationship.html                                                                                                                                                                                                                                                                                                                 |
| PropertyDefinitionResponseDataValue                    | AWSTwinMakerConnector.DataValueUsage                  | PropertyDefinitionResponseDataValueUsage contains the default value of a PropertyDefinitionResponse<br><br>See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html#API_PropertyDefinitionResponse_Contents, https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html#defaultValue() and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html                                                                                       |
| AllowedDataValue                                       | AWSTwinMakerConnector.DataValueUsage                  | The allowed values for this data type.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataType.html#API_DataType_Contents and https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html<br><br>And https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataType.html#allowedValues() and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html                                                                                                     |
| PropertyGroupResponse                                  |                                                       | PropertyGroupResponse.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyGroupResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyGroupResponse.html                                                                                                                                                                                                                                                                                                                                             |
| ComponentTypePropertyGroupResponse                     | AWSTwinMakerConnector.PropertyGroupResponse           | PropertyGroupResponse associated with a ComponentType<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyGroupResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyGroupResponse.html                                                                                                                                                                                                                                                                                                              |

Back to top
Entity 'GetEntityRequest'
Request entity to retrieve information about aTwinMaker-Entity.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetEntity.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetEntityRequest.html
Attributes

| Name        | Type               | Default value | Documentation                      |
| ----------- | ------------------ | ------------- | ---------------------------------- |
| EntityID    | String (unlimited) |               | Required: The ID of the entity.    |
| WorkspaceID | String (unlimited) |               | Required: The ID of the workspace. |

Associations
Entity 'GetEntityRequest' does not own any associations.
Back to top
Entity 'GetEntityResponse'
Entity with reponse of retrieving information about a TwinMaker-Entity.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetEntity.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetEntityResponse.html
Attributes

| Name             | Type               | Default value | Documentation                                                                    |
| ---------------- | ------------------ | ------------- | -------------------------------------------------------------------------------- |
| CreationDateTime | Date and time      |               | The date and time when the entity was created.                                   |
| Description      | String (unlimited) |               | The description of the entity.                                                   |
| EntityID         | String (unlimited) |               | The ID of the entity.                                                            |
| EntityName       | String (unlimited) |               | The name of the entity.                                                          |
| HasChildEntities | Boolean            | false         | A Boolean value that specifies whether the entity has associated child entities. |
| ParentEntityID   | String (unlimited) |               | The ID of the parent entity for this entity.                                     |
| SyncSource       | String (unlimited) |               | The syncSource of the sync job, if this entity was created by a sync job.        |
| UpdateDateTime   | Date and time      |               | The date and time when the entity was last updated.                              |
| WorkspaceID      | String (unlimited) |               | The ID of the workspace.                                                         |

Associations

| Name                                      | Connected to                                  | Multiplicity | Documentation |
| ----------------------------------------- | --------------------------------------------- | ------------ | ------------- |
| GetEntityResponse_GetEntityResponseStatus | AWSTwinMakerConnector.GetEntityResponseStatus | OneToMany    |               |
| GetEntityResponse_ComponentResponse       | AWSTwinMakerConnector.ComponentResponse       | ManyToMany   |               |

Back to top
Entity 'ComponentResponse'
Enitity for the components in the entity.
Component name is used as unique key within this list.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ComponentResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ComponentResponse.html
Attributes

| Name           | Type               | Default value | Documentation                                                                         |
| -------------- | ------------------ | ------------- | ------------------------------------------------------------------------------------- |
| Key            | String (unlimited) |               | Unique identieir, key within list of components.<br>Currently component name is used. |
| ComponentName  | String (unlimited) |               | The name of the component.                                                            |
| ComponenTypeID | String (unlimited) |               | The ID of the component type.                                                         |
| DefinentIn     | String (unlimited) |               | The name of the property definition set in the request.                               |
| Description    | String (unlimited) |               | The description of the component type.                                                |
| SyncSource     | String (unlimited) |               | The syncSource of the sync job, if this entity was created by a sync job.             |

Associations

| Name                                             | Connected to                                         | Multiplicity | Documentation |
| ------------------------------------------------ | ---------------------------------------------------- | ------------ | ------------- |
| ComponentResponse_ComponentPropertyGroupResponse | AWSTwinMakerConnector.ComponentPropertyGroupResponse | ManyToMany   |               |
| ComponentResponse_ComponentResponseStatus        | AWSTwinMakerConnector.ComponentResponseStatus        | OneToMany    |               |
| ComponentResponse_PropertyResponse               | AWSTwinMakerConnector.PropertyResponse               | ManyToMany   |               |

Back to top
Entity 'PropertyResponse'
Entity containing information about a property response.
Property name is used as unique key

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyResponse.html
Attributes

| Name | Type               | Default value | Documentation |
| ---- | ------------------ | ------------- | ------------- |
| Key  | String (unlimited) |               |               |

Associations

| Name                                                        | Connected to                                                     | Multiplicity | Documentation |
| ----------------------------------------------------------- | ---------------------------------------------------------------- | ------------ | ------------- |
| PropertyResponse_PropertyResponsePropertyDefinitionResponse | AWSTwinMakerConnector.PropertyResponsePropertyDefinitionResponse | OneToMany    |               |
| PropertyResponse_PropertyResponseDataValue                  | AWSTwinMakerConnector.PropertyResponseDataValue                  | OneToMany    |               |

Back to top
Entity 'PropertyResponsePropertyDefinitionResponse'
Entity containing data of a property definition.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html
Generalization
AWSTwinMakerConnector.PropertyDefinitionResponse
Attributes
Entity 'PropertyResponsePropertyDefinitionResponse' has no attributes.
Associations

| Name                                                           | Connected to                                              | Multiplicity | Documentation |
| -------------------------------------------------------------- | --------------------------------------------------------- | ------------ | ------------- |
| PropertyDefinitionResponse_Configuration                       | AWSTwinMakerConnector.Configuration                       | ManyToMany   |               |
| PropertyDefinitionResponse_DataType                            | AWSTwinMakerConnector.DataType                            | OneToMany    |               |
| PropertyDefinitionResponse_PropertyDefinitionResponseDataValue | AWSTwinMakerConnector.PropertyDefinitionResponseDataValue | OneToMany    |               |

Back to top
Entity 'ComponentPropertyGroupResponse'
PropertyGroupResponse associated with a ComponentType

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyGroupResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyGroupResponse.html
Generalization
AWSTwinMakerConnector.PropertyGroupResponse
Attributes
Entity 'ComponentPropertyGroupResponse' has no attributes.
Associations

| Name                               | Connected to                       | Multiplicity | Documentation |
| ---------------------------------- | ---------------------------------- | ------------ | ------------- |
| PropertyGroupResponse_PropertyName | AWSTwinMakerConnector.PropertyName | ManyToMany   |               |

Back to top
Entity 'PropertyName'
The names of properties.
Attributes

| Name         | Type               | Default value | Documentation    |
| ------------ | ------------------ | ------------- | ---------------- |
| PropertyName | String (unlimited) |               | Name of property |

Associations
Entity 'PropertyName' does not own any associations.
Back to top
Entity 'Status'
Entity that represents the status of an entity, component, component type, or workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html
Attributes

| Name  | Type                | Default value | Documentation                                                                                                                                                                                     |
| ----- | ------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| State | Enumeration 'State' |               | The current state of the entity, component, component type, or workspace.<br><br>See also https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/State.html |

Associations

| Name                | Connected to                       | Multiplicity | Documentation |
| ------------------- | ---------------------------------- | ------------ | ------------- |
| Status_ErrorDetails | AWSTwinMakerConnector.ErrorDetails | OneToMany    |               |

Back to top
Entity 'ErrorDetails'
Details of the error message.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ErrorDetails.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ErrorDetails.html
Attributes

| Name      | Type                    | Default value | Documentation                                                                                                                           |
| --------- | ----------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ErrorCode | Enumeration 'ErrorCode' |               | The error code.<br>See also https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ErrorCode.html |
| Message   | String (unlimited)      |               | The error message.                                                                                                                      |

Associations
Entity 'ErrorDetails' does not own any associations.
Back to top
Entity 'GetPropertyValueHistoryRequest'
Request to retrieve information about the history of a time series property value for a component, component type, twinmaker entity, or workspace.

You must specify a value for workspaceId. For twinmaker entity-specific queries, specify values for componentName and entityId. For cross-entity quries, specify a value for componentTypeId.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValueHistory.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueHistoryRequest.html
Attributes

| Name        | Type                      | Default value | Documentation                                                                                                                                                                                                                                                        |
| ----------- | ------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WorkspaceID | String (unlimited)        |               | Required: The ID of the workspace.                                                                                                                                                                                                                                   |
| OrderByTime | Enumeration 'OrderByTime' |               | Optional: The time direction to use in the result order.<br>When not set, there is no garantuee in which order the results are returned.                                                                                                                             |
| StartTime   | Date and time             |               | Optonal: The DateTime of the earliest property value to return.                                                                                                                                                                                                      |
| EndTime     | Date and time             |               | Optional: The DateTime of the latest property value to return.<br>When not set, the properties unitil now will be returned.                                                                                                                                          |
| NextToken   | String (unlimited)        |               | Optional: The string to request the next page of results.<br>Should be copied from the previous response containing the previous of page of results.<br>Do not set (leave empty) to retrieve first page of results.                                                  |
| MaxResults  | Integer                   |               | Optional: MaxResults.<br>If not set , a default value defined by AWS will be used.<br>For range and default value, see https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueHistoryRequest.html#maxResults() |

Associations

| Name                                                                              | Connected to                                                             | Multiplicity | Documentation |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------ | ------------- |
| GetPropertyValueHistoryRequest_InterpolationParameters                            | AWSTwinMakerConnector.InterpolationParameters                            | OneToMany    |               |
| GetPropertyValueHistoryRequest_EntityGetPropertyValueHistoryRequestPropertyFilter | AWSTwinMakerConnector.EntityGetPropertyValueHistoryRequestPropertyFilter | ManyToMany   |               |
| AbstractQuery_GetPropertyValueHistoryRequest                                      | AWSTwinMakerConnector.GetPropertyValueHistoryRequest                     | OneToOne     |               |
| GetPropertyValueHistoryRequest_GetPropertyValueHistoryRequestSelectedProperty     | AWSTwinMakerConnector.GetPropertyValueHistoryRequestSelectedProperty     | ManyToMany   |               |

Back to top
Entity 'InterpolationParameters'
Optional: Used to specify the interpolation type and the interval over which to interpolate data.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_InterpolationParameters.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/InterpolationParameters.html
Attributes

| Name              | Type                            | Default value | Documentation                                            |
| ----------------- | ------------------------------- | ------------- | -------------------------------------------------------- |
| InterpolationType | Enumeration 'InterpolationType' |               | The interpolation type to use when intepolating results. |
| IntervalInSeconds | Long                            |               | The interpolation time interval in seconds.              |

Associations
Entity 'InterpolationParameters' does not own any associations.
Back to top
Entity 'PropertyFilter'
Entity that filters items returned by a property request.

You can filter the request using various logical operators and a key-value format.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyFilter.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyFilter.html
Attributes

| Name         | Type               | Default value | Documentation                                           |
| ------------ | ------------------ | ------------- | ------------------------------------------------------- |
| Operator     | String (unlimited) |               | The operator associated with this property filter.      |
| PropertyName | String (unlimited) |               | The property name associated with this property filter. |

Associations

| Name                                   | Connected to                                  | Multiplicity | Documentation |
| -------------------------------------- | --------------------------------------------- | ------------ | ------------- |
| PropertyFilter_PropertyFilterDataValue | AWSTwinMakerConnector.PropertyFilterDataValue | OneToMany    |               |

Back to top
Entity 'GetPropertyValueRequestSelectedProperty'
Required: The twinmaker property to return values of.
In Twinmaker, this property must be marked as a time-series property.


See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html#API_GetPropertyValue_RequestBody and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueRequest.html#selectedProperties()
Generalization
AWSTwinMakerConnector.SelectedProperty
Attributes
Entity 'GetPropertyValueRequestSelectedProperty' has no attributes.
Associations
Entity 'GetPropertyValueRequestSelectedProperty' does not own any associations.
Back to top
Entity 'PropertyFilterDataValue'
The value associated with this property filter.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html
Generalization
AWSTwinMakerConnector.DataValueUsage
Attributes
Entity 'PropertyFilterDataValue' has no attributes.
Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'GetPropertyValueHistoryResponse'
Reponse of retrieving information about the history of a time series property value for a component, component type, entity, or workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValueHistory.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueHistoryResponse.html
Attributes

| Name      | Type               | Default value | Documentation                                                                                                                      |
| --------- | ------------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| NextToken | String (unlimited) |               | The string that specifies the next page of results.<br>Can be used to set on the next request to retieve the next page of results. |

Associations

| Name                                                 | Connected to                               | Multiplicity | Documentation |
| ---------------------------------------------------- | ------------------------------------------ | ------------ | ------------- |
| GetPropertyValueHistoryResponse_PropertyValueHistory | AWSTwinMakerConnector.PropertyValueHistory | ManyToMany   |               |

Back to top
Entity 'PropertyValueHistory'
Contains the history of values for a time series property.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyValueHistory.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyValueHistory.html
Attributes
Entity 'PropertyValueHistory' has no attributes.
Associations

| Name                                                                        | Connected to                                                                 | Multiplicity | Documentation |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------ | ------------- |
| PropertyValueHistory_PropertyValue                                          | AWSTwinMakerConnector.PropertyValue                                          | ManyToMany   |               |
| PropertyValueHistory_GetPropertyValueHistoryResponseEntityPropertyReference | AWSTwinMakerConnector.GetPropertyValueHistoryResponseEntityPropertyReference | OneToMany    |               |

Back to top
Entity 'PropertyValue'
Contains information about a value for a time series property.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyValue.html
Generalization
AWSTwinMakerConnector.DataValueUsage
Attributes

| Name | Type          | Default value | Documentation                                   |
| ---- | ------------- | ------------- | ----------------------------------------------- |
| time | Date and time |               | DateTime of a value for a time series property. |

Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'EntityPropertyReference'
Entity that uniquely identifies an entity property.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntityPropertyReference.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntityPropertyReference.html
Attributes

| Name          | Type               | Default value | Documentation              |
| ------------- | ------------------ | ------------- | -------------------------- |
| ComponentName | String (unlimited) |               | The name of the component. |
| EntityID      | String (unlimited) |               | The ID of the entity.      |
| PropertyName  | String (unlimited) |               | The name of the property.  |

Associations

| Name                                       | Connected to                             | Multiplicity | Documentation |
| ------------------------------------------ | ---------------------------------------- | ------------ | ------------- |
| EntityPropertyReference_ExternalPropertyID | AWSTwinMakerConnector.ExternalPropertyID | ManyToMany   |               |

Back to top
Entity 'ExternalPropertyID'
A mapping of external IDs to property names. External IDs uniquely identify properties from external data stores.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntityPropertyReference.html#API_EntityPropertyReference_Contents and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntityPropertyReference.html#externalIdProperty()
Attributes

| Name  | Type               | Default value | Documentation                                                                    |
| ----- | ------------------ | ------------- | -------------------------------------------------------------------------------- |
| Key   | String (unlimited) |               | External identifier (e.g. external system name)                                  |
| Value | String (unlimited) |               | External property name.<br>e.g The name of this property in the external system. |

Associations
Entity 'ExternalPropertyID' does not own any associations.
Back to top
Entity 'GetPropertyValueRequest'
Entity for request to Get the property values for a component, component type, entity, or workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueRequest.html
Attributes

| Name              | Type               | Default value | Documentation                                                                                                                                                                                                                             |
| ----------------- | ------------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ComponentName     | String (unlimited) |               | Optional: The name of the component whose property values the operation returns.                                                                                                                                                          |
| ComponentTypeID   | String (unlimited) |               | Optional: The ID of the component type whose property values the operation returns.                                                                                                                                                       |
| EntityID          | String (unlimited) |               | Optional: The ID of the Twinmaker-Entity whose property values the operation returns.                                                                                                                                                     |
| MaxResult         | Integer            |               | Optional: The maximum number of results to return at one time.<br>Beware there is a max value, see https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueRequest.html#maxResults() |
| NextToken         | String (unlimited) |               | Optional: The string that specifies the next page of results.                                                                                                                                                                             |
| PropertyGroupName | String (unlimited) |               | Optional: The property group name.                                                                                                                                                                                                        |
| WorkspaceID       | String (unlimited) |               | Required: The ID of the workspace whose values the operation returns.                                                                                                                                                                     |

Associations

| Name                                                            | Connected to                                                  | Multiplicity | Documentation |
| --------------------------------------------------------------- | ------------------------------------------------------------- | ------------ | ------------- |
| GetPropertyValueRequest_TabularConditions                       | AWSTwinMakerConnector.TabularConditions                       | OneToMany    |               |
| GetPropertyValueRequest_GetPropertyValueRequestSelectedProperty | AWSTwinMakerConnector.GetPropertyValueRequestSelectedProperty | ManyToMany   |               |

Back to top
Entity 'TabularConditions'
Optional: The tabular conditions.

See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_TabularConditions.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/TabularConditions.html
Attributes
Entity 'TabularConditions' has no attributes.
Associations

| Name                                             | Connected to                                         | Multiplicity | Documentation |
| ------------------------------------------------ | ---------------------------------------------------- | ------------ | ------------- |
| TabularConditions_OrderBy                        | AWSTwinMakerConnector.OrderBy                        | ManyToMany   |               |
| TabularConditions_TabularConditionPropertyFilter | AWSTwinMakerConnector.TabularConditionPropertyFilter | ManyToMany   |               |

Back to top
Entity 'OrderBy'
Filter criteria that orders the output. It can be sorted in ascending or descending order.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_OrderBy.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/OrderBy.html
Attributes

| Name         | Type                | Default value | Documentation             |
| ------------ | ------------------- | ------------- | ------------------------- |
| PropertyName | String (unlimited)  |               | The property to order on. |
| Order        | Enumeration 'Order' |               | Set order of results      |

Associations
Entity 'OrderBy' does not own any associations.
Back to top
Entity 'TabularConditionPropertyFilter'
Entity that filters items returned by a property request.

You can filter the request using various logical operators and a key-value format.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyFilter.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyFilter.html
Generalization
AWSTwinMakerConnector.PropertyFilter
Attributes
Entity 'TabularConditionPropertyFilter' has no attributes.
Associations

| Name                                   | Connected to                                  | Multiplicity | Documentation |
| -------------------------------------- | --------------------------------------------- | ------------ | ------------- |
| PropertyFilter_PropertyFilterDataValue | AWSTwinMakerConnector.PropertyFilterDataValue | OneToMany    |               |

Back to top
Entity 'EntityGetPropertyValueHistoryRequestPropertyFilter'
Optonal: Entity that filters items returned by a property request.

You can filter the request using various logical operators and a key-value format.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyFilter.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyFilter.html
Generalization
AWSTwinMakerConnector.PropertyFilter
Attributes
Entity 'EntityGetPropertyValueHistoryRequestPropertyFilter' has no attributes.
Associations

| Name                                   | Connected to                                  | Multiplicity | Documentation |
| -------------------------------------- | --------------------------------------------- | ------------ | ------------- |
| PropertyFilter_PropertyFilterDataValue | AWSTwinMakerConnector.PropertyFilterDataValue | OneToMany    |               |

Back to top
Entity 'PropertyResponseDataValue'
The current value of the property.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html
Generalization
AWSTwinMakerConnector.DataValueUsage
Attributes
Entity 'PropertyResponseDataValue' has no attributes.
Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'GetEntityResponseStatus'
The current status of the entity.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html
Generalization
AWSTwinMakerConnector.Status
Attributes
Entity 'GetEntityResponseStatus' has no attributes.
Associations

| Name                | Connected to                       | Multiplicity | Documentation |
| ------------------- | ---------------------------------- | ------------ | ------------- |
| Status_ErrorDetails | AWSTwinMakerConnector.ErrorDetails | OneToMany    |               |

Back to top
Entity 'ComponentResponseStatus'
The status of the component type.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html
Generalization
AWSTwinMakerConnector.Status
Attributes
Entity 'ComponentResponseStatus' has no attributes.
Associations

| Name                | Connected to                       | Multiplicity | Documentation |
| ------------------- | ---------------------------------- | ------------ | ------------- |
| Status_ErrorDetails | AWSTwinMakerConnector.ErrorDetails | OneToMany    |               |

Back to top
Entity 'GetPropertyValueResponse'
Response of getting the property values for a component, component type, entity, or workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueResponse.html
Attributes

| Name      | Type               | Default value | Documentation                                       |
| --------- | ------------------ | ------------- | --------------------------------------------------- |
| NextToken | String (unlimited) |               | The string that specifies the next page of results. |

Associations

| Name                                         | Connected to                              | Multiplicity | Documentation |
| -------------------------------------------- | ----------------------------------------- | ------------ | ------------- |
| GetPropertyValueResponse_PropertyValueLatest | AWSTwinMakerConnector.PropertyValueLatest | ManyToMany   |               |
| GetPropertyValueResponse_Table               | AWSTwinMakerConnector.Table               | ManyToMany   |               |

Back to top
Entity 'PropertyValueLatest'
This maps the property name as key to the latest property value and property information (definition).

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyLatestValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyLatestValue.html
Attributes

| Name | Type               | Default value | Documentation                     |
| ---- | ------------------ | ------------- | --------------------------------- |
| Key  | String (unlimited) |               | The property name is used as key. |

Associations

| Name                                                           | Connected to                                                     | Multiplicity | Documentation |
| -------------------------------------------------------------- | ---------------------------------------------------------------- | ------------ | ------------- |
| PropertyValueLatest_DataValueUsagePropertyLatestValue          | AWSTwinMakerConnector.DataValueUsagePropertyLatestValue          | OneToMany    |               |
| PropertyValueLatest_EntityPropertyReferencePropertyLatestValue | AWSTwinMakerConnector.EntityPropertyReferencePropertyLatestValue | OneToMany    |               |

Back to top
Entity 'EntityPropertyReferencePropertyLatestValue'
This enity specifies information about a property.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntityPropertyReference.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntityPropertyReference.html
Generalization
AWSTwinMakerConnector.EntityPropertyReference
Attributes
Entity 'EntityPropertyReferencePropertyLatestValue' has no attributes.
Associations

| Name                                       | Connected to                             | Multiplicity | Documentation |
| ------------------------------------------ | ---------------------------------------- | ------------ | ------------- |
| EntityPropertyReference_ExternalPropertyID | AWSTwinMakerConnector.ExternalPropertyID | ManyToMany   |               |

Back to top
Entity 'GetPropertyValueHistoryResponseEntityPropertyReference'
Unique identification of a twinmaker entity property.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntityPropertyReference.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntityPropertyReference.html
Generalization
AWSTwinMakerConnector.EntityPropertyReference
Attributes
Entity 'GetPropertyValueHistoryResponseEntityPropertyReference' has no attributes.
Associations

| Name                                       | Connected to                             | Multiplicity | Documentation |
| ------------------------------------------ | ---------------------------------------- | ------------ | ------------- |
| EntityPropertyReference_ExternalPropertyID | AWSTwinMakerConnector.ExternalPropertyID | ManyToMany   |               |

Back to top
Entity 'DataValueUsagePropertyLatestValue'
The lastest value of the property.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html
Generalization
AWSTwinMakerConnector.DataValueUsage
Attributes
Entity 'DataValueUsagePropertyLatestValue' has no attributes.
Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'Table'
A table of property values.

See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html#tm-GetPropertyValue-response-tabularPropertyValues and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueResponse.html#tabularPropertyValues()
Attributes
Entity 'Table' has no attributes.
Associations

| Name      | Connected to              | Multiplicity | Documentation |
| --------- | ------------------------- | ------------ | ------------- |
| Table_Row | AWSTwinMakerConnector.Row | ManyToMany   |               |

Back to top
Entity 'Row'
Row (array) inside a table of property values.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html#tm-GetPropertyValue-response-tabularPropertyValues and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueResponse.html#tabularPropertyValues()
Attributes
Entity 'Row' has no attributes.
Associations

| Name       | Connected to                 | Multiplicity | Documentation |
| ---------- | ---------------------------- | ------------ | ------------- |
| Row_Column | AWSTwinMakerConnector.Column | ManyToMany   |               |

Back to top
Entity 'Column'
Column with the property value. Propertyname is used as key.
Generalization
AWSTwinMakerConnector.DataValueUsage
Attributes

| Name | Type         | Default value | Documentation                     |
| ---- | ------------ | ------------- | --------------------------------- |
| Key  | String (200) |               | The property name is used as key. |

Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'ListEntitiesRequest'
Entity as request for retrieving the list of all Twinmaker-Entities in a workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListEntities.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListEntitiesRequest.html
Attributes

| Name        | Type               | Default value | Documentation                                                                                                                                                                                                                         |
| ----------- | ------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaxResults  | Integer            |               | Optional: The maximum number of results to return at one time.<br>Beware there is a max value, see https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListEntitiesRequest.html#maxResults() |
| NextToken   | String (unlimited) |               | Optional: The string that specifies the next page of results.                                                                                                                                                                         |
| WorkspaceID | String (unlimited) |               | Required: The ID of the workspace.                                                                                                                                                                                                    |

Associations

| Name                                     | Connected to                               | Multiplicity | Documentation |
| ---------------------------------------- | ------------------------------------------ | ------------ | ------------- |
| ListEntitiesRequest_AbstractEntityFilter | AWSTwinMakerConnector.AbstractEntityFilter | OneToMany    |               |

Back to top
Entity 'ListEntitiesResponse'
Entity containing the list of all Twinmaker-Entities in a workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListEntities.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListEntitiesResponse.html
Attributes

| Name      | Type               | Default value | Documentation                                       |
| --------- | ------------------ | ------------- | --------------------------------------------------- |
| NextToken | String (unlimited) |               | The string that specifies the next page of results. |

Associations

| Name                               | Connected to                        | Multiplicity | Documentation |
| ---------------------------------- | ----------------------------------- | ------------ | ------------- |
| ListEntitiesResponse_EntitySummary | AWSTwinMakerConnector.EntitySummary | ManyToMany   |               |

Back to top
Entity 'EntitySummary'
Entity containing information of a Twinmaker-Entity.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntitySummary.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntitySummary.html
Attributes

| Name             | Type               | Default value | Documentation                                                                          |
| ---------------- | ------------------ | ------------- | -------------------------------------------------------------------------------------- |
| CreationDateTime | Date and time      |               | The date and time when the Twinmaker-Entity was created.                               |
| Description      | String (unlimited) |               | The description of the Twinmaker-Entity.                                               |
| EntityID         | String (unlimited) |               | The ID of the Twinmaker-Entity.                                                        |
| EntityName       | String (unlimited) |               | The name of the Twinmaker-Entity.                                                      |
| HasChildEntities | Boolean            | false         | A Boolean value that specifies whether the Twinmaker-Entity has child entities or not. |
| ParentEntityID   | String (unlimited) |               | The ID of the parent Twinmaker-Entity.                                                 |
| UpdateDateTime   | Date and time      |               | The last date and time when the Twinmaker-Entity was updated.                          |

Associations

| Name                       | Connected to                       | Multiplicity | Documentation |
| -------------------------- | ---------------------------------- | ------------ | ------------- |
| EntitySummary_EntityStatus | AWSTwinMakerConnector.EntityStatus | OneToMany    |               |

Back to top
Entity 'EntityStatus'
The current status of the Twinmaker-Entity.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html
Generalization
AWSTwinMakerConnector.Status
Attributes
Entity 'EntityStatus' has no attributes.
Associations

| Name                | Connected to                       | Multiplicity | Documentation |
| ------------------- | ---------------------------------- | ------------ | ------------- |
| Status_ErrorDetails | AWSTwinMakerConnector.ErrorDetails | OneToMany    |               |

Back to top
Entity 'ListScenesRequest'
Entity with request to get the list of available scenes in a workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListScenes.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListScenesRequest.html
Attributes

| Name        | Type               | Default value | Documentation                                                                                                                                                                                                                       |
| ----------- | ------------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaxResults  | Integer            |               | Optional: Specifies the maximum number of results to retrieve.<br>Beware there is a max value, see https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListScenesRequest.html#maxResults() |
| NextToken   | String (unlimited) |               | Optional: The string that specifies the next page of results.                                                                                                                                                                       |
| WorkspaceID | String (unlimited) |               | Required: The ID of the workspace that contains the scenes.                                                                                                                                                                         |

Associations
Entity 'ListScenesRequest' does not own any associations.
Back to top
Entity 'ListScenesResponse'
Entity containing the list of scenes in a workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListScenes.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListScenesResponse.html
Attributes

| Name      | Type               | Default value | Documentation                                       |
| --------- | ------------------ | ------------- | --------------------------------------------------- |
| NextToken | String (unlimited) |               | The string that specifies the next page of results. |

Associations

| Name                            | Connected to                       | Multiplicity | Documentation |
| ------------------------------- | ---------------------------------- | ------------ | ------------- |
| ListScenesResponse_SceneSummary | AWSTwinMakerConnector.SceneSummary | ManyToMany   |               |

Back to top
Entity 'SceneSummary'
Entity containing information about a scene.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_SceneSummary.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/SceneSummary.html
Attributes

| Name             | Type               | Default value | Documentation                                                                 |
| ---------------- | ------------------ | ------------- | ----------------------------------------------------------------------------- |
| ARN              | String (unlimited) |               | The ARN of the scene.                                                         |
| ContentLocation  | String (unlimited) |               | The relative path that specifies the location of the content definition file. |
| CreationDateTime | Date and time      |               | The date and time when the scene was created.                                 |
| Description      | String (unlimited) |               | The scene description.                                                        |
| SceneID          | String (unlimited) |               | The ID of the scene.                                                          |
| UpdateDateTime   | Date and time      |               | The date and time when the scene was last updated.                            |

Associations
Entity 'SceneSummary' does not own any associations.
Back to top
Entity 'GetSceneRequest'
Entity containing the request to get a specific scene

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetSceneRequest.html
Attributes

| Name        | Type               | Default value | Documentation                                         |
| ----------- | ------------------ | ------------- | ----------------------------------------------------- |
| SceneID     | String (unlimited) |               | Required: ID of the scene to retrieve                 |
| WorkspaceID | String (unlimited) |               | Required: ID of the workspace to search for the scene |

Associations
Entity 'GetSceneRequest' does not own any associations.
Back to top
Entity 'GetSceneResponse'
Entity containing the reponse of getting a specific scene.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetSceneResponse.html
Attributes

| Name             | Type               | Default value | Documentation                                                                 |
| ---------------- | ------------------ | ------------- | ----------------------------------------------------------------------------- |
| ARN              | String (unlimited) |               | ARN of the scene                                                              |
| ContentLocation  | String (unlimited) |               | The relative path that specifies the location of the content definition file. |
| CreationDateTime | Date and time      |               | The date and time when the scene was created.                                 |
| Description      | String (unlimited) |               | The description of the scene.                                                 |
| SceneID          | String (unlimited) |               | The ID of the scene.                                                          |
| UpdateDateTime   | Date and time      |               | The date and time when the scene was last updated                             |
| WorkspaceID      | String (unlimited) |               | The ID of the workspace that contains the scene.                              |

Associations

| Name                        | Connected to                     | Multiplicity | Documentation |
| --------------------------- | -------------------------------- | ------------ | ------------- |
| GetSceneResponse_Capability | AWSTwinMakerConnector.Capability | ManyToMany   |               |

Back to top
Entity 'Capability'
A list of capabilities that the scene uses to render.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html#API_GetScene_ResponseElements and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetSceneResponse.html#capabilities()
Attributes

| Name       | Type               | Default value | Documentation  |
| ---------- | ------------------ | ------------- | -------------- |
| Capability | String (unlimited) |               | The capability |

Associations
Entity 'Capability' does not own any associations.
Back to top
Entity 'CustomParentIDEntityFilter'
Filter to only retrieve Twinmaker-Entities which are a child of a specific Twinmaker-Entitiy parent.
Generalization
AWSTwinMakerConnector.AbstractEntityFilter
Attributes

| Name        | Type               | Default value | Documentation                                                   |
| ----------- | ------------------ | ------------- | --------------------------------------------------------------- |
| FilterValue | String (unlimited) |               | Value for the Parent id of the Twinmaker-Entities to filter on. |

Associations
Entity 'CustomParentIDEntityFilter' does not own any associations.
Back to top
Entity 'RootEntityFilter'
Filter to only retrieve root Twinmaker-Entities, so without a parent.
Generalization
AWSTwinMakerConnector.AbstractEntityFilter
Attributes
Entity 'RootEntityFilter' has no attributes.
Associations
Entity 'RootEntityFilter' does not own any associations.
Back to top
Entity 'AbstractEntityFilter'
Do not use this entity, instead use one of its specializations

An object that filters items in a list of Twinmaker-Entities.

See also https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListEntitiesFilter.html
Attributes
Entity 'AbstractEntityFilter' has no attributes.
Associations
Entity 'AbstractEntityFilter' does not own any associations.
Back to top
Entity 'CustomExternalIDEntityFilter'
Filter to only retrieve Twinmaker-Entities with a given External Id.
Generalization
AWSTwinMakerConnector.AbstractEntityFilter
Attributes

| Name        | Type               | Default value | Documentation                                                 |
| ----------- | ------------------ | ------------- | ------------------------------------------------------------- |
| FilterValue | String (unlimited) |               | Value for the External Id of Twinmaker-Entities to filter on. |

Associations
Entity 'CustomExternalIDEntityFilter' does not own any associations.
Back to top
Entity 'CustomComponentTypeIDEntityFilter'
Filter to only retrieve Twinmaker-Entities of a specific component type.
Generalization
AWSTwinMakerConnector.AbstractEntityFilter
Attributes

| Name        | Type               | Default value | Documentation                                                           |
| ----------- | ------------------ | ------------- | ----------------------------------------------------------------------- |
| FilterValue | String (unlimited) |               | Value for the CompontentType id of the Twinmaker-Entities to filter on. |

Associations
Entity 'CustomComponentTypeIDEntityFilter' does not own any associations.
Back to top
Entity 'AbstractDataValue'
Abstract object that specifies a value, or values, for a property.

Do not use this Entity! - Use a specialization instead.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html
Attributes
Entity 'AbstractDataValue' has no attributes.
Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'DataValueMap'
Entity that represents a map (containing name-value pairs) as data value.
Generalization
AWSTwinMakerConnector.AbstractDataValue
Attributes
Entity 'DataValueMap' has no attributes.
Associations

| Name                                | Connected to                                 | Multiplicity | Documentation |
| ----------------------------------- | -------------------------------------------- | ------------ | ------------- |
| DataValueMap_DataValueUsageMapEntry | AWSTwinMakerConnector.DataValueUsageMapEntry | ManyToMany   |               |
| AbstractDataValue_DataValueUsage    | AWSTwinMakerConnector.DataValueUsage         | OneToOne     |               |

Back to top
Entity 'DataValueUsage'
Entity that specifies a value, or values, for a property.

This enitty can be used as starting point for using a data value of a property.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html
Attributes
Entity 'DataValueUsage' has no attributes.
Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'DataValueBoolean'
DataValue of type Boolean.
Generalization
AWSTwinMakerConnector.AbstractDataValue
Attributes

| Name  | Type    | Default value | Documentation |
| ----- | ------- | ------------- | ------------- |
| Value | Boolean | false         |               |

Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'DataValueInt'
DataValue of type Integer.
Generalization
AWSTwinMakerConnector.AbstractDataValue
Attributes

| Name  | Type    | Default value | Documentation |
| ----- | ------- | ------------- | ------------- |
| Value | Integer |               |               |

Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'DataValueLong'
DataValue of type Long
Generalization
AWSTwinMakerConnector.AbstractDataValue
Attributes

| Name  | Type | Default value | Documentation |
| ----- | ---- | ------------- | ------------- |
| Value | Long |               |               |

Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'DataValueList'
Entity that represents a list as data value.
Generalization
AWSTwinMakerConnector.AbstractDataValue
Attributes
Entity 'DataValueList' has no attributes.
Associations

| Name                                  | Connected to                                  | Multiplicity | Documentation |
| ------------------------------------- | --------------------------------------------- | ------------ | ------------- |
| DataValueList_DataValueUsageListEntry | AWSTwinMakerConnector.DataValueUsageListEntry | ManyToMany   |               |
| AbstractDataValue_DataValueUsage      | AWSTwinMakerConnector.DataValueUsage          | OneToOne     |               |

Back to top
Entity 'DataValueRelationship'
DataValue of type Relationship that associates a component and an entity.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_RelationshipValue.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/RelationshipValue.html
Generalization
AWSTwinMakerConnector.AbstractDataValue
Attributes

| Name                | Type               | Default value | Documentation                                                            |
| ------------------- | ------------------ | ------------- | ------------------------------------------------------------------------ |
| TargetComponentName | String (unlimited) |               | The name of the target component associated with the relationship value. |
| TargetEntityID      | String (unlimited) |               | The ID of the target entity associated with this relationship value.     |

Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'DataValueString'
DataValue of type String.
Generalization
AWSTwinMakerConnector.AbstractDataValue
Attributes

| Name  | Type               | Default value | Documentation |
| ----- | ------------------ | ------------- | ------------- |
| Value | String (unlimited) |               |               |

Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'DataValueUsageMapEntry'
Entity representing one entry of a map, so one key-value pair.
It is a specialization of the DataValueUsage as the value can be of any data value type.
Generalization
AWSTwinMakerConnector.DataValueUsage
Attributes

| Name | Type               | Default value | Documentation                         |
| ---- | ------------------ | ------------- | ------------------------------------- |
| Key  | String (unlimited) |               | Name of key (used in key-value pairs) |

Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'DataValueDecimal'
DataValue of type Decimal.
Generalization
AWSTwinMakerConnector.AbstractDataValue
Attributes

| Name  | Type    | Default value | Documentation             |
| ----- | ------- | ------------- | ------------------------- |
| Value | Decimal |               | Contains the double value |

Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'AbstractQuery'
Optional.
Abstract Entity: Do not use this AbstractQuery!
A specialization Query must be used instead.
Attributes
Entity 'AbstractQuery' has no attributes.
Associations

| Name                                         | Connected to                                         | Multiplicity | Documentation |
| -------------------------------------------- | ---------------------------------------------------- | ------------ | ------------- |
| AbstractQuery_GetPropertyValueHistoryRequest | AWSTwinMakerConnector.GetPropertyValueHistoryRequest | OneToOne     |               |

Back to top
Entity 'ListWorkspacesRequest'
Entity as request to get the list of workspaces in the current account..

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListWorkspaces.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListWorkspacesRequest.html
Attributes

| Name       | Type               | Default value | Documentation                                                                                                                                                                                                                           |
| ---------- | ------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaxResults | Integer            |               | Optional: The maximum number of results to return at one time.<br>Beware there is a max value, see https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListWorkspacesRequest.html#maxResults() |
| NextToken  | String (unlimited) |               | Optional: The string that specifies the next page of results.                                                                                                                                                                           |

Associations
Entity 'ListWorkspacesRequest' does not own any associations.
Back to top
Entity 'ListComponentTypeRequest'
Request entity to lists all component types in a workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypes.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesRequest.html
Attributes

| Name        | Type               | Default value | Documentation                                                                                                                                                                                                                                   |
| ----------- | ------------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaxResults  | Integer            |               | Optional: The maximum number of results to return at one time.<br><br>Beware there is a max value, see https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesRequest.html#maxResults() |
| NextToken   | String (unlimited) |               | Optional: The string that specifies the next page of results.                                                                                                                                                                                   |
| WorkspaceID | String (unlimited) |               | Required: The ID of the workspace.                                                                                                                                                                                                              |

Associations

| Name                                                     | Connected to                                          | Multiplicity | Documentation                                                                                                                                                                           |
| -------------------------------------------------------- | ----------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ListComponentTypeRequest_AbstractListComponentTypeFilter | AWSTwinMakerConnector.AbstractListComponentTypeFilter | ManyToMany   | A list of objects that filter the request.<br><br>https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesRequest.html#filters() |

Back to top
Entity 'EntitySpecificQuery'
Optonal: To be used for twinmaker entity-specific queries.
So to retrieve information about the history of a time series property value for a specific twinmaker entity and component.
Generalization
AWSTwinMakerConnector.AbstractQuery
Attributes

| Name          | Type               | Default value | Documentation                    |
| ------------- | ------------------ | ------------- | -------------------------------- |
| EntityID      | String (unlimited) |               | Required: id of twinmaker entity |
| ComponentName | String (unlimited) |               | Identification name of component |

Associations

| Name                                         | Connected to                                         | Multiplicity | Documentation |
| -------------------------------------------- | ---------------------------------------------------- | ------------ | ------------- |
| AbstractQuery_GetPropertyValueHistoryRequest | AWSTwinMakerConnector.GetPropertyValueHistoryRequest | OneToOne     |               |

Back to top
Entity 'ListWorkspacesResponse'
Entity with the list of workspaces in the current account..

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListWorkspaces.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListWorkspacesResponse.html
Attributes

| Name      | Type               | Default value | Documentation |
| --------- | ------------------ | ------------- | ------------- |
| NextToken | String (unlimited) |               |               |

Associations

| Name                                    | Connected to                           | Multiplicity | Documentation |
| --------------------------------------- | -------------------------------------- | ------------ | ------------- |
| ListWorkspacesResponse_WorkspaceSummary | AWSTwinMakerConnector.WorkspaceSummary | ManyToMany   |               |

Back to top
Entity 'AbstractListComponentTypeFilter'
Do not use this entity, instead use one of its specializations

An object that filters items in a list of component types

https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesFilter.html
Attributes
Entity 'AbstractListComponentTypeFilter' has no attributes.
Associations
Entity 'AbstractListComponentTypeFilter' does not own any associations.
Back to top
Entity 'CrossEntityQuery'
Optonal: To be used for twinmaker cross-entity queries.
So to retrieve information about the history of a time series property value for all components of a specific type within a workspace.
Filters can be applied to the limit the number of components or to target specfic components,
Generalization
AWSTwinMakerConnector.AbstractQuery
Attributes

| Name           | Type               | Default value | Documentation                 |
| -------------- | ------------------ | ------------- | ----------------------------- |
| ComponenTypeID | String (unlimited) |               | The id of the component type. |

Associations

| Name                                         | Connected to                                         | Multiplicity | Documentation |
| -------------------------------------------- | ---------------------------------------------------- | ------------ | ------------- |
| AbstractQuery_GetPropertyValueHistoryRequest | AWSTwinMakerConnector.GetPropertyValueHistoryRequest | OneToOne     |               |

Back to top
Entity 'WorkspaceSummary'
Entity that contains information about a workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_WorkspaceSummary.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/WorkspaceSummary.html
Attributes

| Name             | Type               | Default value | Documentation                                          |
| ---------------- | ------------------ | ------------- | ------------------------------------------------------ |
| ARN              | String (unlimited) |               | The ARN of the workspace.                              |
| CreationDateTime | Date and time      |               | The date and time when the workspace was created.      |
| Description      | String (unlimited) |               | The description of the workspace.                      |
| UpdateDateTime   | Date and time      |               | The date and time when the workspace was last updated. |
| WorkspaceID      | String (unlimited) |               | The ID of the workspace.                               |

Associations
Entity 'WorkspaceSummary' does not own any associations.
Back to top
Entity 'ExtendsFromFilter'
Entity for filters containing the component type that the component types in the list extend.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypesFilter.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesFilter.html#extendsFrom()
Generalization
AWSTwinMakerConnector.AbstractListComponentTypeFilter
Attributes

| Name        | Type               | Default value | Documentation                                                                        |
| ----------- | ------------------ | ------------- | ------------------------------------------------------------------------------------ |
| ExtendsFrom | String (unlimited) |               | The component type that the component types in the list extend (so the parent type). |

Associations
Entity 'ExtendsFromFilter' does not own any associations.
Back to top
Entity 'SelectedProperty'
Entity to represent a selected property, e.g. the properties whose values the operation returns.
Attributes

| Name     | Type               | Default value | Documentation    |
| -------- | ------------------ | ------------- | ---------------- |
| Property | String (unlimited) |               | Name of property |

Associations
Entity 'SelectedProperty' does not own any associations.
Back to top
Entity 'IsAbstractFilter'
Entity for filters containing a Boolean value that specifies whether the component types in the list are abstract.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypesFilter.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesFilter.html#isAbstract()
Generalization
AWSTwinMakerConnector.AbstractListComponentTypeFilter
Attributes

| Name       | Type    | Default value | Documentation                                                                        |
| ---------- | ------- | ------------- | ------------------------------------------------------------------------------------ |
| IsAbstract | Boolean | false         | A Boolean value that specifies whether the component types in the list are abstract. |

Associations
Entity 'IsAbstractFilter' does not own any associations.
Back to top
Entity 'GetPropertyValueHistoryRequestSelectedProperty'
Required: The twinmaker property to return values of.
In Twinmaker, this property must be marked as a time-series property.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html#API_GetPropertyValue_RequestBody and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueRequest.html#selectedProperties()
Generalization
AWSTwinMakerConnector.SelectedProperty
Attributes
Entity 'GetPropertyValueHistoryRequestSelectedProperty' has no attributes.
Associations
Entity 'GetPropertyValueHistoryRequestSelectedProperty' does not own any associations.
Back to top
Entity 'NamespaceFilter'
Entity for filters containing the namespace to which the component types in the list belong.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypesFilter.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesFilter.html#namespace()
Generalization
AWSTwinMakerConnector.AbstractListComponentTypeFilter
Attributes

| Name      | Type               | Default value | Documentation                                                  |
| --------- | ------------------ | ------------- | -------------------------------------------------------------- |
| Namespace | String (unlimited) |               | The namespace to which the component types in the list belong. |

Associations
Entity 'NamespaceFilter' does not own any associations.
Back to top
Entity 'ListComponentTypeResponse'
Response entity containing the list all component types in a workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypes.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesResponse.html
Attributes

| Name        | Type               | Default value | Documentation                                       |
| ----------- | ------------------ | ------------- | --------------------------------------------------- |
| MaxResults  | Integer            |               | Specifies the maximum number of results to display. |
| WorkspaceID | String (unlimited) |               | The ID of the workspace.                            |
| NextToken   | String (unlimited) |               | The string that specifies the next page of results. |

Associations

| Name                                           | Connected to                               | Multiplicity | Documentation |
| ---------------------------------------------- | ------------------------------------------ | ------------ | ------------- |
| ListComponentTypeResponse_ComponentTypeSummary | AWSTwinMakerConnector.ComponentTypeSummary | ManyToMany   |               |

Back to top
Entity 'ComponentTypeSummary'
Contains the information for the retrieved ComponentTypes.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ComponentTypeSummary.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ComponentTypeSummary.html
Attributes

| Name              | Type               | Default value | Documentation                                               |
| ----------------- | ------------------ | ------------- | ----------------------------------------------------------- |
| ARN               | String (unlimited) |               | The ARN of the component type.                              |
| ComponentTypeID   | String (unlimited) |               | The ID of the component type.                               |
| ComponentTypeName | String (unlimited) |               | The component type name.                                    |
| CreationDateTime  | Date and time      |               | The date and time when the component type was created       |
| Description       | String (unlimited) |               | The description of the component type.                      |
| UpdateDateTime    | Date and time      |               | The date and time when the component type was last updated. |

Associations

| Name                                         | Connected to                                  | Multiplicity | Documentation |
| -------------------------------------------- | --------------------------------------------- | ------------ | ------------- |
| ComponentTypeSummary_ListComponentTypeStatus | AWSTwinMakerConnector.ListComponentTypeStatus | OneToMany    |               |

Back to top
Entity 'ListComponentTypeStatus'
The current status of the component type.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html
Generalization
AWSTwinMakerConnector.Status
Attributes
Entity 'ListComponentTypeStatus' has no attributes.
Associations

| Name                | Connected to                       | Multiplicity | Documentation |
| ------------------- | ---------------------------------- | ------------ | ------------- |
| Status_ErrorDetails | AWSTwinMakerConnector.ErrorDetails | OneToMany    |               |

Back to top
Entity 'GetComponentTypeRequest'
Entity containing request to retrieves information about a specific componentType.

Required: WorkspaceID and ComponentTypeID

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetComponentType.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetComponentTypeRequest.html
Attributes

| Name            | Type               | Default value | Documentation                          |
| --------------- | ------------------ | ------------- | -------------------------------------- |
| ComponentTypeID | String (unlimited) |               | Required: The ID of the componentType. |
| WorkspaceID     | String (unlimited) |               | Required: The ID of the workspace.     |

Associations
Entity 'GetComponentTypeRequest' does not own any associations.
Back to top
Entity 'DataValueUsageListEntry'
Entity representing one list entry.
It is a specialization of the DataValueUsage as the value can be of any data value type.
Generalization
AWSTwinMakerConnector.DataValueUsage
Attributes
Entity 'DataValueUsageListEntry' has no attributes.
Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'GetComponentTypeResponse'
Entity containing information on the requested ComponentType.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetComponentType.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetComponentTypeResponse.html
Attributes

| Name                | Type               | Default value | Documentation                                                                                                             |
| ------------------- | ------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ARN                 | String (unlimited) |               | The ARN of the component type.                                                                                            |
| ComponentTypeID     | String (unlimited) |               | The ID of the component type.                                                                                             |
| ComponentTypeName   | String (unlimited) |               | The component type name.                                                                                                  |
| CreationDateTime    | Date and time      |               | The date and time when the component type was created.                                                                    |
| Description         | String (unlimited) |               | The description of the component type.                                                                                    |
| IsAbstract          | Boolean            | false         | A Boolean value that specifies whether the component type is abstract.                                                    |
| IsSchemaInitialized | Boolean            | false         | Boolean value that specifies whether the component type has a schema initializer and that the schema initializer has run. |
| IsSingleton         | Boolean            | false         | A Boolean value that specifies whether an entity can have more than one component of this type.                           |
| SyncSource          | String (unlimited) |               | The syncSource of the SyncJob, if this entity was created by a SyncJob.                                                   |
| UpdateDateTime      | Date and time      |               | The date and time when the component was last updated.                                                                    |
| WorkspaceID         | String (unlimited) |               | The ID of the workspace that contains the component type.                                                                 |

Associations

| Name                                                             | Connected to                                                  | Multiplicity | Documentation |
| ---------------------------------------------------------------- | ------------------------------------------------------------- | ------------ | ------------- |
| GetComponentTypeResponse_ExtendsFrom                             | AWSTwinMakerConnector.ExtendsFrom                             | ManyToMany   |               |
| GetComponentTypeResponse_FunctionResponse                        | AWSTwinMakerConnector.FunctionResponse                        | ManyToMany   |               |
| GetComponentTypeResponse_ComponentTypePropertyDefinitionResponse | AWSTwinMakerConnector.ComponentTypePropertyDefinitionResponse | ManyToMany   |               |
| GetComponentTypeResponse_ComponentTypeStatus                     | AWSTwinMakerConnector.ComponentTypeStatus                     | OneToMany    |               |
| GetComponentTypeResponse_ComponentTypePropertyGroupResponse      | AWSTwinMakerConnector.ComponentTypePropertyGroupResponse      | ManyToMany   |               |

Back to top
Entity 'GetWorkspaceRequest'
Entity for requesting details of a workspace

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetWorkspace.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetWorkspaceRequest.html
Attributes

| Name        | Type               | Default value | Documentation                 |
| ----------- | ------------------ | ------------- | ----------------------------- |
| WorkspaceID | String (unlimited) |               | Required: ID of the workspace |

Associations
Entity 'GetWorkspaceRequest' does not own any associations.
Back to top
Entity 'ExtendsFrom'
The name of the parent component type that this component type extends
Attributes

| Name        | Type               | Default value | Documentation |
| ----------- | ------------------ | ------------- | ------------- |
| ExtendsFrom | String (unlimited) |               |               |

Associations
Entity 'ExtendsFrom' does not own any associations.
Back to top
Entity 'GetWorkspaceResponse'
Enitty containing the details of a workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetWorkspace.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetWorkspaceResponse.html
Attributes

| Name             | Type               | Default value | Documentation                                                                      |
| ---------------- | ------------------ | ------------- | ---------------------------------------------------------------------------------- |
| ARN              | String (unlimited) |               | The ARN of the workspace.                                                          |
| CreationDateTime | Date and time      |               | The date and time when the workspace was created.                                  |
| Description      | String (unlimited) |               | The description of the workspace.                                                  |
| Role             | String (unlimited) |               | The ARN of the execution role associated with the workspace.                       |
| S3Location       | String (unlimited) |               | The ARN of the S3 bucket where resources associated with the workspace are stored. |
| UpdateDateTime   | Date and time      |               | The date and time when the workspace was last updated.                             |
| WorkspaceID      | String (unlimited) |               | The ID of the workspace.                                                           |

Associations
Entity 'GetWorkspaceResponse' does not own any associations.
Back to top
Entity 'FunctionResponse'
Function response.

See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_FunctionResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/FunctionResponse.html
Attributes

| Name        | Type                | Default value | Documentation                                 |
| ----------- | ------------------- | ------------- | --------------------------------------------- |
| Key         | String (unlimited)  |               | Functionname                                  |
| IsInherited | Boolean             | false         | Indicates whether this function is inherited. |
| Scope       | Enumeration 'Scope' |               | The scope of the function.                    |

Associations

| Name                              | Connected to                           | Multiplicity | Documentation |
| --------------------------------- | -------------------------------------- | ------------ | ------------- |
| FunctionResponse_RequiredProperty | AWSTwinMakerConnector.RequiredProperty | ManyToMany   |               |
| FunctionResponse_DataConnector    | AWSTwinMakerConnector.DataConnector    | OneToMany    |               |

Back to top
Entity 'ComponentTypePropertyDefinitionResponse'
Property definitions in the component type.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html
Generalization
AWSTwinMakerConnector.PropertyDefinitionResponse
Attributes

| Name | Type               | Default value | Documentation |
| ---- | ------------------ | ------------- | ------------- |
| Key  | String (unlimited) |               |               |

Associations

| Name                                                           | Connected to                                              | Multiplicity | Documentation |
| -------------------------------------------------------------- | --------------------------------------------------------- | ------------ | ------------- |
| PropertyDefinitionResponse_Configuration                       | AWSTwinMakerConnector.Configuration                       | ManyToMany   |               |
| PropertyDefinitionResponse_DataType                            | AWSTwinMakerConnector.DataType                            | OneToMany    |               |
| PropertyDefinitionResponse_PropertyDefinitionResponseDataValue | AWSTwinMakerConnector.PropertyDefinitionResponseDataValue | OneToMany    |               |

Back to top
Entity 'ComponentTypeStatus'
The current status of the component type.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html
Generalization
AWSTwinMakerConnector.Status
Attributes
Entity 'ComponentTypeStatus' has no attributes.
Associations

| Name                | Connected to                       | Multiplicity | Documentation |
| ------------------- | ---------------------------------- | ------------ | ------------- |
| Status_ErrorDetails | AWSTwinMakerConnector.ErrorDetails | OneToMany    |               |

Back to top
Entity 'RequiredProperty'
The required properties of the function.
Attributes

| Name             | Type         | Default value | Documentation |
| ---------------- | ------------ | ------------- | ------------- |
| RequiredProperty | String (200) |               |               |

Associations
Entity 'RequiredProperty' does not own any associations.
Back to top
Entity 'DataConnector'
The data connector of the function.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataConnector.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataConnector.html
Attributes

| Name     | Type    | Default value | Documentation                                                                         |
| -------- | ------- | ------------- | ------------------------------------------------------------------------------------- |
| IsNative | Boolean | false         | A Boolean value that specifies whether the data connector is native to IoT TwinMaker. |

Associations

| Name                         | Connected to                         | Multiplicity | Documentation |
| ---------------------------- | ------------------------------------ | ------------ | ------------- |
| DataConnector_LambdaFunction | AWSTwinMakerConnector.LambdaFunction | OneToMany    |               |

Back to top
Entity 'LambdaFunction'
The Lambda function associated with this data connector.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_LambdaFunction.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/LambdaFunction.html
Attributes

| Name | Type               | Default value | Documentation                   |
| ---- | ------------------ | ------------- | ------------------------------- |
| ARN  | String (unlimited) |               | The ARN of the Lambda function. |

Associations
Entity 'LambdaFunction' does not own any associations.
Back to top
Entity 'PropertyDefinitionResponse'
An object that contains response data from a property definition request.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html
Attributes

| Name               | Type               | Default value | Documentation                                                                                           |
| ------------------ | ------------------ | ------------- | ------------------------------------------------------------------------------------------------------- |
| DisplayName        | String (unlimited) |               | A friendly name for the property.                                                                       |
| IsExternalID       | Boolean            | false         | A Boolean value that specifies whether the property ID comes from an external data store.               |
| IsFinal            | Boolean            | false         | A Boolean value that specifies whether the property definition can be updated.                          |
| IsImported         | Boolean            | false         | A Boolean value that specifies whether the property definition is imported from an external data store. |
| IsInherited        | Boolean            | false         | A Boolean value that specifies whether the property definition is inherited from a parent entity.       |
| IsRequiredInEntity | Boolean            | false         | A Boolean value that specifies whether the property is required in an entity.                           |
| IsStoredExternally | Boolean            | false         | A Boolean value that specifies whether the property is stored externally.                               |
| IsTimeSeries       | Boolean            | false         | A Boolean value that specifies whether the property consists of time series data.                       |

Associations

| Name                                                           | Connected to                                              | Multiplicity | Documentation |
| -------------------------------------------------------------- | --------------------------------------------------------- | ------------ | ------------- |
| PropertyDefinitionResponse_Configuration                       | AWSTwinMakerConnector.Configuration                       | ManyToMany   |               |
| PropertyDefinitionResponse_DataType                            | AWSTwinMakerConnector.DataType                            | OneToMany    |               |
| PropertyDefinitionResponse_PropertyDefinitionResponseDataValue | AWSTwinMakerConnector.PropertyDefinitionResponseDataValue | OneToMany    |               |

Back to top
Entity 'Configuration'
A mapping that specifies configuration information about the property with key-value pairs.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html#API_PropertyDefinitionResponse_Contents and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html#configuration()
Attributes

| Name  | Type               | Default value | Documentation          |
| ----- | ------------------ | ------------- | ---------------------- |
| Key   | String (unlimited) |               | Name of key/attribute  |
| Value | String (unlimited) |               | Value of key/attribute |

Associations
Entity 'Configuration' does not own any associations.
Back to top
Entity 'DataType'
An object that contains information about the data type.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataType.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataType.html
Attributes

| Name          | Type                | Default value | Documentation                                                                                                                                                                                                                                                      |
| ------------- | ------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _Type         | Enumeration '_Type' |               | The underlying type of the data type.<br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataType.html#API_DataType_Contents and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Type.html |
| UnitOfMeasure | String (unlimited)  |               | The unit of measure used in this data type.                                                                                                                                                                                                                        |

Associations

| Name                      | Connected to                           | Multiplicity | Documentation |
| ------------------------- | -------------------------------------- | ------------ | ------------- |
| DataType_Relationship     | AWSTwinMakerConnector.Relationship     | OneToMany    |               |
| DataType_DataType_Nested  | AWSTwinMakerConnector.DataType         | OneToMany    |               |
| DataType_AllowedDataValue | AWSTwinMakerConnector.AllowedDataValue | ManyToMany   |               |

Back to top
Entity 'Relationship'
An object that specifies a relationship with another component type.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Relationship.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Relationship.html
Attributes

| Name                  | Type               | Default value | Documentation                                                          |
| --------------------- | ------------------ | ------------- | ---------------------------------------------------------------------- |
| RelationshipType      | String (unlimited) |               | The type of the relationship, descripton of relationship.              |
| TargetComponentTypeID | String (unlimited) |               | The ID of the target component type associated with this relationship. |

Associations
Entity 'Relationship' does not own any associations.
Back to top
Entity 'PropertyDefinitionResponseDataValue'
PropertyDefinitionResponseDataValueUsage contains the default value of a PropertyDefinitionResponse

See https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html#API_PropertyDefinitionResponse_Contents, https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html#defaultValue() and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html
Generalization
AWSTwinMakerConnector.DataValueUsage
Attributes
Entity 'PropertyDefinitionResponseDataValue' has no attributes.
Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'AllowedDataValue'
The allowed values for this data type.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataType.html#API_DataType_Contents and https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html

And https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataType.html#allowedValues() and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html
Generalization
AWSTwinMakerConnector.DataValueUsage
Attributes
Entity 'AllowedDataValue' has no attributes.
Associations

| Name                             | Connected to                         | Multiplicity | Documentation |
| -------------------------------- | ------------------------------------ | ------------ | ------------- |
| AbstractDataValue_DataValueUsage | AWSTwinMakerConnector.DataValueUsage | OneToOne     |               |

Back to top
Entity 'PropertyGroupResponse'
PropertyGroupResponse.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyGroupResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyGroupResponse.html
Attributes

| Name        | Type                    | Default value | Documentation                                                                               |
| ----------- | ----------------------- | ------------- | ------------------------------------------------------------------------------------------- |
| Key         | String (unlimited)      |               | Name of the property group, used as key, identifier.                                        |
| GroupType   | Enumeration 'GroupType' |               | The group type.                                                                             |
| IsInherited | Boolean                 | false         | A Boolean value that specifies whether the property group is inherited from a parent entity |

Associations

| Name                               | Connected to                       | Multiplicity | Documentation |
| ---------------------------------- | ---------------------------------- | ------------ | ------------- |
| PropertyGroupResponse_PropertyName | AWSTwinMakerConnector.PropertyName | ManyToMany   |               |

Back to top
Entity 'ComponentTypePropertyGroupResponse'
PropertyGroupResponse associated with a ComponentType

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyGroupResponse.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyGroupResponse.html
Generalization
AWSTwinMakerConnector.PropertyGroupResponse
Attributes
Entity 'ComponentTypePropertyGroupResponse' has no attributes.
Associations

| Name                               | Connected to                       | Multiplicity | Documentation |
| ---------------------------------- | ---------------------------------- | ------------ | ------------- |
| PropertyGroupResponse_PropertyName | AWSTwinMakerConnector.PropertyName | ManyToMany   |               |

Back to top

### 4.2 Enumerations {#enumerations}
An enumeration is a predefined list of values that can be used as an attribute type. For the AWS IoT Twinmaker connector, enumerations list values such as the list of available AWS regions.

Enumerations

| Name                 | Documentation                                                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Scope                |                                                                                                                                   |
| ListEntityFilterType |                                                                                                                                   |
| OrderByTime          | The time direction to use in the result order.                                                                                    |
| InterpolationType    | The avaliable interpolation types for interpolating results.<br>For now, only one is supported, the LINEAR in time interpolation. |
| State                |                                                                                                                                   |
| AWS_Region           |                                                                                                                                   |
| GroupType            |                                                                                                                                   |
| _Type                |                                                                                                                                   |
| ErrorCode            |                                                                                                                                   |
| Order                |                                                                                                                                   |

Back to top
Enumeration 'Scope'
Values

| Name                   | Caption                |
| ---------------------- | ---------------------- |
| ENTITY                 | ENTITY                 |
| WORKSPACE              | WORKSPACE              |
| UNKNOWN_TO_SDK_VERSION | UNKNOWN_TO_SDK_VERSION |

Back to top
Enumeration 'ListEntityFilterType'
Values

| Name              | Caption           |
| ----------------- | ----------------- |
| COMPONENT_TYPE_ID | COMPONENT_TYPE_ID |
| EXTERNAL_ID       | EXTERNAL_ID       |
| PARENT_ENTITY_ID  | PARENT_ENTITY_ID  |

Back to top
Enumeration 'OrderByTime'
The time direction to use in the result order.
Values

| Name       | Caption    |
| ---------- | ---------- |
| ASCENDING  | ASCENDING  |
| DESCENDING | DESCENDING |

Back to top
Enumeration 'InterpolationType'
The avaliable interpolation types for interpolating results.
For now, only one is supported, the LINEAR in time interpolation.
Values

| Name   | Caption |
| ------ | ------- |
| LINEAR | LINEAR  |

Back to top
Enumeration 'State'
Values

| Name                   | Caption                |
| ---------------------- | ---------------------- |
| ACTIVE                 | ACTIVE                 |
| CREATING               | CREATING               |
| DELETING               | DELETING               |
| ERROR                  | ERROR                  |
| UPDATING               | UPDATING               |
| UNKNOWN_TO_SDK_VERSION | UNKNOWN_TO_SDK_VERSION |

Back to top
Enumeration 'AWS_Region'
Values

| Name           | Caption                   |
| -------------- | ------------------------- |
| us_east_2      | US Easth (Ohio)           |
| us_east_1      | US East (N. Virginia)     |
| us_west_1      | US West (N. California)   |
| us_west_2      | US West (Oregon)          |
| af_south_1     | Africa (Cape Town)        |
| ap_east_1      | Asia Pacific (Hong Kong)  |
| ap_southeast_3 | Asia Pacific (Jakarta)    |
| ap_south_1     | Asia Pacific (Mumbai)     |
| ap_northeast_3 | Asia Pacific (Osaka)      |
| ap_northeast_2 | Asia Pacific (Seoul)      |
| ap_southeast_1 | Asia Pacific (Singapore)  |
| ap_southeast_2 | Asia Pacific (Sydney)     |
| ap_northeast_1 | Asia Pacific (Tokyo)      |
| ca_central_1   | Canada (Central)          |
| eu_central_1   | Europe (Frankfurt)        |
| eu_west_1      | Europe (Ireland)          |
| eu_west_2      | Europe (London)           |
| eu_south_1     | Europe (Milan)            |
| eu_west_3      | Europe (Paris)            |
| eu_north_1     | Europe (Stockholm)        |
| me_south_1     | Middle East (Bahrain)     |
| sa_east_1      | South America (São Paulo) |

Back to top
Enumeration 'GroupType'
Values

| Name                   | Caption                |
| ---------------------- | ---------------------- |
| TABULAR                | TABULAR                |
| UNKNOWN_TO_SDK_VERSION | UNKNOWN_TO_SDK_VERSION |

Back to top
Enumeration '_Type'
Values

| Name                   | Caption                |
| ---------------------- | ---------------------- |
| _BOOLEAN               | BOOLEAN                |
| _DOUBLE                | DOUBLE                 |
| INTEGER                | INTEGER                |
| LIST                   | LIST                   |
| _LONG                  | LONG                   |
| MAP                    | MAP                    |
| RELATIONSHIP           | RELATIONSHIP           |
| UNKNOWN_TO_SDK_VERSION | UNKNOWN_TO_SDK_VERSION |
| _STRING                | STRING                 |

Back to top
Enumeration 'ErrorCode'
Values

| Name                    | Caption                 |
| ----------------------- | ----------------------- |
| INTERNAL_FAILURE        | INTERNAL_FAILURE        |
| SYNC_CREATING_ERROR     | SYNC_CREATING_ERROR     |
| SYNC_INITIALIZING_ERROR | SYNC_INITIALIZING_ERROR |
| SYNC_PROCESSING_ERROR   | SYNC_PROCESSING_ERROR   |
| UNKNOWN_TO_SDK_VERSION  | UNKNOWN_TO_SDK_VERSION  |
| VALIDATION_ERROR        | VALIDATION_ERROR        |

Back to top
Enumeration 'Order'
Values

| Name                   | Caption                |
| ---------------------- | ---------------------- |
| ASCENDING              | ASCENDING              |
| DESCENDING             | DESCENDING             |
| UNKNOWN_TO_SDK_VERSION | UNKNOWN_TO_SDK_VERSION |


### 4.3 Activities {#activities}

| Name                    | Return type                                           | Documentation                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ListEntities            | AWSTwinMakerConnector.ListEntitiesResponse            | Retrieves the list of all Twinmaker-Entities in a workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListEntities.html                                                                                                                                                                                                                                                                                            |
| GetWorkspace            | AWSTwinMakerConnector.GetWorkspaceResponse            | Retrieves details of a workspace<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetWorkspace.html                                                                                                                                                                                                                                                                                                                        |
| GetEntity               | AWSTwinMakerConnector.GetEntityResponse               | Retrieve information about a TwinMaker-Entity.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetEntity.html                                                                                                                                                                                                                                                                                                             |
| GetPropertyValue        | AWSTwinMakerConnector.GetPropertyValueResponse        | Get the property values for a component, component type, entity, or workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html                                                                                                                                                                                                                                                                      |
| GetComponentType        | AWSTwinMakerConnector.GetComponentTypeResponse        | Retrieves information about a specific component type.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetComponentType.html                                                                                                                                                                                                                                                                                              |
| GetPropertyValueHistory | AWSTwinMakerConnector.GetPropertyValueHistoryResponse | Retrieve information about the history of a time series property value for a component, component type, twinmaker entity, or workspace.<br><br>You must specify a value for workspaceId. For twinmaker entity-specific queries, specify values for componentName and entityId. For cross-entity quries, specify a value for componentTypeId.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValueHistory.html |
| ListWorkspaces          | AWSTwinMakerConnector.ListWorkspacesResponse          | Retrieves the list of workspaces in the current account..<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListWorkspaces.html                                                                                                                                                                                                                                                                                             |
| ListComponentTypes      | AWSTwinMakerConnector.ListComponentTypeResponse       | Lists all component types in a workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypes.html                                                                                                                                                                                                                                                                                                         |
| GetScene                | AWSTwinMakerConnector.GetSceneResponse                | Get information about a specific scene<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html                                                                                                                                                                                                                                                                                                                      |
| ListScenes              | AWSTwinMakerConnector.ListScenesResponse              | Retrieves the list of scenes in a workspace.<br><br>See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListScenes.html                                                                                                                                                                                                                                                                                                              |
| GetAWSRegion            | String                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| GetCredentials          | AWSAuthentication.Credentials                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

Back to top
Microflow 'ListEntities'
Retrieves the list of all Twinmaker-Entities in a workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListEntities.html
Parameters

| Name              | Type                                         | Documentation |
| ----------------- | -------------------------------------------- | ------------- |
| ListEntityRequest | AWSTwinMakerConnector.ListEntitiesRequest    |               |
| AWS_Region        | Enumeration AWSTwinMakerConnector.AWS_Region |               |

Return type
AWSTwinMakerConnector.ListEntitiesResponse
Back to top
Microflow 'GetWorkspace'
Retrieves details of a workspace

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetWorkspace.html
Parameters

| Name                | Type                                         | Documentation |
| ------------------- | -------------------------------------------- | ------------- |
| GetWorkspaceRequest | AWSTwinMakerConnector.GetWorkspaceRequest    |               |
| AWS_Region          | Enumeration AWSTwinMakerConnector.AWS_Region |               |

Return type
AWSTwinMakerConnector.GetWorkspaceResponse
Back to top
Microflow 'GetEntity'
Retrieve information about a TwinMaker-Entity.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetEntity.html
Parameters

| Name             | Type                                         | Documentation |
| ---------------- | -------------------------------------------- | ------------- |
| GetEntityRequest | AWSTwinMakerConnector.GetEntityRequest       |               |
| AWS_Region       | Enumeration AWSTwinMakerConnector.AWS_Region |               |

Return type
AWSTwinMakerConnector.GetEntityResponse
Back to top
Microflow 'GetPropertyValue'
Get the property values for a component, component type, entity, or workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html
Parameters

| Name                    | Type                                          | Documentation |
| ----------------------- | --------------------------------------------- | ------------- |
| GetPropertyValueRequest | AWSTwinMakerConnector.GetPropertyValueRequest |               |
| AWS_Region              | Enumeration AWSTwinMakerConnector.AWS_Region  |               |

Return type
AWSTwinMakerConnector.GetPropertyValueResponse
Back to top
Microflow 'GetComponentType'
Retrieves information about a specific component type.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetComponentType.html
Parameters

| Name                    | Type                                          | Documentation |
| ----------------------- | --------------------------------------------- | ------------- |
| GetComponentTypeRequest | AWSTwinMakerConnector.GetComponentTypeRequest |               |
| AWS_Region              | Enumeration AWSTwinMakerConnector.AWS_Region  |               |

Return type
AWSTwinMakerConnector.GetComponentTypeResponse
Back to top
Microflow 'GetPropertyValueHistory'
Retrieve information about the history of a time series property value for a component, component type, twinmaker entity, or workspace.

You must specify a value for workspaceId. For twinmaker entity-specific queries, specify values for componentName and entityId. For cross-entity quries, specify a value for componentTypeId.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValueHistory.html
Parameters

| Name                           | Type                                                 | Documentation |
| ------------------------------ | ---------------------------------------------------- | ------------- |
| GetPropertyValueHistoryRequest | AWSTwinMakerConnector.GetPropertyValueHistoryRequest |               |
| AWS_Region                     | Enumeration AWSTwinMakerConnector.AWS_Region         |               |

Return type
AWSTwinMakerConnector.GetPropertyValueHistoryResponse
Back to top
Microflow 'ListWorkspaces'
Retrieves the list of workspaces in the current account..

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListWorkspaces.html
Parameters

| Name                  | Type                                         | Documentation |
| --------------------- | -------------------------------------------- | ------------- |
| ListWorkspacesRequest | AWSTwinMakerConnector.ListWorkspacesRequest  |               |
| AWS_Region            | Enumeration AWSTwinMakerConnector.AWS_Region |               |

Return type
AWSTwinMakerConnector.ListWorkspacesResponse
Back to top
Microflow 'ListComponentTypes'
Lists all component types in a workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypes.html
Parameters

| Name                     | Type                                           | Documentation |
| ------------------------ | ---------------------------------------------- | ------------- |
| ListComponentTypeRequest | AWSTwinMakerConnector.ListComponentTypeRequest |               |
| AWS_Region               | Enumeration AWSTwinMakerConnector.AWS_Region   |               |

Return type
AWSTwinMakerConnector.ListComponentTypeResponse
Back to top
Microflow 'GetScene'
Get information about a specific scene

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html
Parameters

| Name            | Type                                         | Documentation |
| --------------- | -------------------------------------------- | ------------- |
| GetSceneRequest | AWSTwinMakerConnector.GetSceneRequest        |               |
| AWS_Region      | Enumeration AWSTwinMakerConnector.AWS_Region |               |

Return type
AWSTwinMakerConnector.GetSceneResponse
Back to top
Microflow 'ListScenes'
Retrieves the list of scenes in a workspace.

See also https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListScenes.html
Parameters

| Name             | Type                                         | Documentation |
| ---------------- | -------------------------------------------- | ------------- |
| ListSceneRequest | AWSTwinMakerConnector.ListScenesRequest      |               |
| AWS_Region       | Enumeration AWSTwinMakerConnector.AWS_Region |               |

Return type
AWSTwinMakerConnector.ListScenesResponse

