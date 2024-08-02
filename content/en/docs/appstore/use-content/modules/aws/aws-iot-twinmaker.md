---
title: "AWS IoT TwinMaker"
url: /appstore/modules/aws/aws-iot-twinmaker/
description: "Describes the configuration and usage of the AWS IoT TwinMaker connector from the Mendix Marketplace. AWS IoT TwinMaker is a connector to read data from your digital twin stored in the AWS cloud."
weight: 20
aliases:
    - /appstore/connectors/aws/aws-iot-twinmaker/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [AWS IoT TwinMaker](https://marketplace.mendix.com/link/component/209624) connector allows you to connect your Mendix app to [AWS IoT TwinMaker](https://aws.amazon.com/iot-twinmaker/) and read data from the digital twin of your system.

### 1.1 Typical Use Cases

AWS IoT TwinMaker makes it easier for developers to create digital twins of real-world systems such as buildings, factories, industrial equipment, and production lines. AWS IoT TwinMaker provides the tools you need to build digital twins to help you optimize building operations, increase production output, and improve equipment performance. With the ability to use existing data from multiple sources, create virtual representations of any physical environment, and combine existing 3D models with real-world data, you can now harness digital twins to create a holistic view of your operations faster and with less effort. When used with your Mendix app, the AWS IoT TwinMaker connector enables you to build actionable dashboards on top of AWS IoT Twinmaker, and build applications on top of the service with little coding experience required.

### 1.2 Prerequisites {#prerequisites}

The AWS IoT TwinMaker connector requires Mendix Studio Pro version 9.18.3 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector version 2.1 or higher](https://marketplace.mendix.com/link/component/120333). If you are using the AWS IoT TwinMaker connector version 3.0.0 or higher, it requires the AWS Authentication connector version 3.0.0 or higher. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the AWS IoT TwinMaker connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AWSTwinMakerConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to AWS IoT TwinMaker. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the AWS IoT TwinMaker service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for AWS IoT TwinMaker, you can implement the functions of the connector by using the provided activities in microflows. For example, to list all workspaces, implement the [ListWorkspace](#list-workspace) activity by doing the following steps:

1. In the **App Explorer**, find and open the domain model for your app.
2. Right-click on the working area of the domain model, and then click **Add entity**.

    {{< figure src="/attachments/appstore/use-content/modules/aws-iot-twinmaker/addentity.png" alt="Adding a new entity to the domain model" class="no-border" >}}

3. Open the new entity by double-clicking on it.
4. Name the entity **MyWorkspace**.
5. In the **Attributes** section, click **New**, and then add a String-type attribute named *WorkspaceID*.

6. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
    
    {{< figure src="/attachments/appstore/use-content/modules/aws-iot-twinmaker/addmicroflow.png" alt="Adding a microflow" class="no-border" >}}

7. Enter a name for your microflow, for example, *DS_ListWorkspaces*, and then click **OK**.
8. In the **App Explorer**, in the **AWSTwinMakerConnector** > **Microflows** section, find the **ListWorkspaces** activity.
9. Drag the **ListWorkspaces** activity onto the work area of your microflow.
10. In the **Properties** pane for the microflow, in the **Security** section, select a user role that should be allowed to run the microflow.
11. Double-click the **ListWorkspaces** activity to configure the required parameters.
  
    For the `ListWorkspaces` activity, you must make a **ListWorkspaceRequest**, as well as specify the region for which you want to retrieve the tables. Other activities may have different required parameters.
12. Click **Edit parameter value**, edit the **AWS_Region** parameter, and change **Type** to **Expression**.
13. In the expression builder, type `ENUM_Region`, and then press **Ctrl+Space**.
14. In the autocomplete dialog, select **AWSAuthentication.ENUM_Region**, then type *.* and select your AWS region from the list.

    {{< figure src="/attachments/appstore/use-content/modules/aws-iot-twinmaker/awsregions.png" alt="The list of AWS regions" class="no-border" >}}
    
15. Click **OK**, and then click **OK** again.
16. In the **Toolbox** pane, search for the **Create Object** activity, drag it onto the microflow area, and position it between the microflow start event and the **ListWorkspaces** activity.
17. Double-click the **Create Object** activity, and then select **AWSTwinMakerConnector.ListWorkspacesRequest** as the entity.
18. Double-click the **ListWorkspaces** activity.
19. Click **Edit parameter value**, edit the **ListWorkspacesRequest** parameter, and let it auto-fill.
20. In the **Object name** field, enter *ListWorkspacesResponse*, and then click **OK**.
21. In the **Toolbox** pane, search for the **Retrieve** activity and drag it onto the microflow area.
22. Position the **Retrieve** activity between the **ListWorkspaces** activity and the microflow end event.

    {{< figure src="/attachments/appstore/use-content/modules/aws-iot-twinmaker/microflow.png" alt="The microflow with the Retrieve activity added" class="no-border" >}}

23. Double-click the **Retrieve** activity.
24. In the **Association** section, click **Select**, and then select **ListWorkspacesResponse_WorkspaceSummary** as the association.

    {{< figure src="/attachments/appstore/use-content/modules/aws-iot-twinmaker/selectassociation.png" alt="Selecting the association" class="no-border" >}}

25. In the **List name** field, enter *WorkspaceSummaryList*, and then click **OK**.
26. In the **Toolbox** pane, search for the **Create List** activity, drag it onto the microflow area, and then position it after the **Retrieve** activity.
27. Double-click the **Create List** activity.
28. In the **Action** section, click **Select**, and then select **{module name}.MyWorkspace** as the action.
29. In the **List name** field, enter *MyWorkspaceList*, and then click **OK**.
30. In the **Toolbox** pane, search for the **Loop** activity, drag it onto the microflow area, and then position it before the microflow end event.
31. Double-click the **Loop** activity.
32. In the **Iterate over** list, select **WorkspaceSummaryList**.
33. In the **Loop object name** field, enter *IteratorWorkspaceSummary*.
34. In the **Toolbox** pane, search for the **Create Object** activity and drag it inside the loop area.
35. Double-click the **Create Object** activity.
36. In the **Entity** section, click **Select**, and then select **{module name}.MyWorkspace** as the entity.
37. In the list of parameters, click **New**.
38. Configure the parameter in the following way:
    1. In the **Member** field, select **WorkspaceID**.
    2. In the **Value** field, enter *$IteratorWorkspaceSummary/WorkspaceID*.
    3. Click **OK**.
39. In the **Object name** field, enter *NewMyWorkspace*, and then click **OK**.
40. In the **Toolbox** pane, search for the **Change List** activity and drag it inside the loop area, to the right of the **Create Object** activity.
41. Connect the **Create Object** activity to the **Change List** activity.
42. Double-click the **Change List** activity, and then set the following values:
    * **List** - **MyWorkspaceList**
    * **Type** - **Add**
    * **Value** - *$NewMyWorkspace*
43. Double-click the end event of your microflow, and then set the following values:
    * **Type** - **List**
    * **Entity** - **{module name}.MyWorkspace**
    * **Return value** - *$MyWorkspaceList*

    {{< figure src="/attachments/appstore/use-content/modules/aws-iot-twinmaker/fullmicroflow.png" alt="The complete microflow" class="no-border" >}}

44. Provide a way for users of your app to trigger the microflow by doing the following steps:
    1. In the **App Explorer**, right-click on the name of your module, and then click **Add page**.
    2. In the **Lists** category, select the **List** template for the page.
    3. Enter a name for your page, for example, *Workspaces_Overview*, and then click **OK**.
    4. On the page, double-click the **List view** widget.
    5. In the **Select Data Source** dialog, set the **Type** to **Microflow**.
    6. In the **Microflow** field, select the **DS_ListWorkspaces** microflow.
    7. Click **OK**, and then click **Yes**.
    8. In the **Properties** pane for the page, in the **Navigation** > **Visible for** section, select a user role that should be allowed to run the microflow.
    9. In the **App Explorer**, double-click the **Navigation** for your app.
    10. In the **Menu** section, click **New Item**.
    11. In the **New Menu Item** dialog, configure the following settings:
        * **Caption** - A caption for the navigation item, for example, *Workspace*
        * **Icon** - An icon that will be displayed for this page in the navigation for your app
        * **On click** - **Show a page**
        * **Page** - Your **Table_Overview** page
    12. Click **OK**.
45. Click **Run Locally** ({{% icon name="controls-play" %}}) to preview your app and validate your results. AWS IoT TwinMaker will return the workspaces it finds (by default 25, but you can increase it up to 250 workspaces by using the `MaxResults` attribute). For more information, see [Studio Pro Overview: Run and View App](/refguide/studio-pro-overview/#menus).

## 4 Technical Reference

To help you work with the AWS IoT TwinMaker connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

#### 4.1.1 GetEntityRequest

The `GetEntityRequest` entity retrieves information about an entity in AWS IoT TwinMaker. For more information, see [GetEntity](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetEntity.html) and [GetEntityRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetEntityRequest.html).

##### 4.1.1.1 Attributes

| Name | Type | Description |
| --- | --- | --- |
| `EntityID` | String (unlimited) | Required. The ID of the entity. |
| `WorkspaceID` | String (unlimited) | Required. The ID of the workspace. |

##### 4.1.1.2 Associations

The `GetEntityRequest` entity does not have any associations.

#### 4.1.2 GetEntityResponse

The `GetEntityResponse` entity is the response for retrieving information about an entity in AWS IoT TwinMaker. For more information, see [GetEntity](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetEntity.html) and [GetEntityRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetEntityResponse.html).

##### 4.1.2.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `CreationDateTime` | Date and time | | The date and time when the entity was created. |
| `Description` | String (unlimited) | | The description of the entity. |
| `EntityID` | String (unlimited) | | The ID of the entity. |
| `EntityName` | String (unlimited) | | The name of the entity. |
| `HasChildEntities` | Boolean | *false* | A Boolean value that specifies whether the entity has associated child entities. |
| `ParentEntityID` | String (unlimited) | | The ID of the parent entity for this entity. |
| `SyncSource` | String (unlimited) | | The `syncSource` of the sync job, if this entity was created by a sync job. |
| `UpdateDateTime` | Date and time | | The date and time when the entity was last updated. |
| `WorkspaceID` | String (unlimited) | | The ID of the workspace. |

##### 4.1.2.2 Associations

| Name | Connected to | Multiplicity |
| --- | --- | --- |
| `GetEntityResponse_GetEntityResponseStatus` | `AWSTwinMakerConnector.GetEntityResponseStatus` | OneToMany |
| `GetEntityResponse_ComponentResponse` | `AWSTwinMakerConnector.ComponentResponse` | ManyToMany |

#### 4.1.3 ComponentResponse

The `ComponentResponse` entity contains information about the components in the entity. The component name is used as a unique key within this list. For more information, see [ComponentResponse](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ComponentResponse.html) and [Class ComponentResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ComponentResponse.html).

##### 4.1.3.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Key | String (unlimited) | | A unique identifier or key within the list of components. Currently, the component name is used as the key. |
| `ComponentName` | String (unlimited) | | The name of the component. |
| `ComponenTypeID` | String (unlimited) | | The ID of the component type. |
| `DefinentIn` | String (unlimited) | | The name of the property definition set in the request. |
| `Description` | String (unlimited) | | The description of the component type. |
| `SyncSource` | String (unlimited) | | The `syncSource` of the sync job, if this entity was created by a sync job. |

##### 4.1.3.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `ComponentResponse_ComponentPropertyGroupResponse` | `AWSTwinMakerConnector.ComponentPropertyGroupResponse` | ManyToMany | |
| `ComponentResponse_ComponentResponseStatus` | `AWSTwinMakerConnector.ComponentResponseStatus` | OneToMany | |
| `ComponentResponse_PropertyResponse` | `AWSTwinMakerConnector.PropertyResponse` | ManyToMany | |

#### 4.1.4 PropertyResponse

The `PropertyResponse` entity is a response entity with information about a property. The property name is used as a unique key. For more information, see [PropertyResponse](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyResponse.html) and [Class PropertyResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyResponse.html).

##### 4.1.4.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Key` | String (unlimited) | | |

##### 4.1.4.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `PropertyResponse_PropertyResponsePropertyDefinitionResponse` | `AWSTwinMakerConnector.PropertyResponsePropertyDefinitionResponse` | OneToMany | |
| `PropertyResponse_PropertyResponseDataValue` | `AWSTwinMakerConnector.PropertyResponseDataValue` | OneToMany | |

#### 4.1.5 PropertyResponsePropertyDefinitionResponse

The `PropertyResponsePropertyDefinitionResponse` entity contains data about a property definition. For more information, see [PropertyResponsePropertyDefinitionResponse](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html) and [Class PropertyResponsePropertyDefinitionResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html).

#### 4.1.5.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.PropertyDefinitionResponse`.

##### 4.1.5.2 Attributes

The `PropertyResponsePropertyDefinitionResponse` entity does not have any attributes.

##### 4.1.5.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `PropertyDefinitionResponse_Configuration` | `AWSTwinMakerConnector.Configuration` | ManyToMany | |
| `PropertyDefinitionResponse_DataType` | `AWSTwinMakerConnector.DataType` | OneToMany | |
| `PropertyDefinitionResponse_PropertyDefinitionResponseDataValue` | `AWSTwinMakerConnector.PropertyDefinitionResponseDataValue` | OneToMany | |

#### 4.1.6 ComponentPropertyGroupResponse

The `ComponentPropertyGroupResponse` entity contains data about the `PropertyGroupResponse` associated with a `ComponentType`. For more information, see [PropertyGroupResponse](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyGroupResponse.html) and [Class PropertyGroupResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyGroupResponse.html).

#### 4.1.6.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.PropertyGroupResponse`.

##### 4.1.6.2 Attributes

The `ComponentPropertyGroupResponse` entity does not have any attributes.

##### 4.1.6.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `PropertyGroupResponse_PropertyName` | `AWSTwinMakerConnector.PropertyName` | ManyToMany | |

#### 4.1.7 Entity PropertyName

The `PropertyName` entity contains data about the names of properties.

##### 4.1.7.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `PropertyName` | String (unlimited) | | The name of the property |

##### 4.1.7.2 Associations

The `PropertyName` entity does not have any associations.

#### 4.1.8 Status

The `Status` entity represents the status of an entity, component, component type, or workspace. For more information, see [Status](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html) and [Class Status](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html).

##### 4.1.8.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `State` | Enumeration `State` | | The current state of the entity, component, component type, or workspace. For more information, see [Enum State](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/State.html). |

##### 4.1.8.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `Status_ErrorDetails` | `AWSTwinMakerConnector.ErrorDetails` | OneToMany | |

#### 4.1.9 ErrorDetails

The `ErrorDetails` entity contains the details of an error message. For more information, see [ErrorDetails](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ErrorDetails.html) and [Class ErrorDetails](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ErrorDetails.html).

##### 4.1.9.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ErrorCode` | Enumeration `ErrorCode` | | The error code. For more information, see [Enum ErrorCode](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ErrorCode.html). |
| `Message` | String (unlimited) | | The error message. |

##### 4.1.9.2 Associations

The `ErrorDetails` entity does not have any associations.

#### 4.1.10 Entity GetPropertyValueHistoryRequest

The `GetPropertyValueHistoryRequest` contains the request to retrieve information about the history of a time series property value for a component, component type, TwinMaker entity, or workspace.

You must specify a value for workspaceId. For TwinMaker entity-specific queries, specify the values for `componentName` and `entityId`. For cross-entity queries, specify a value for `componentTypeId`.

For more information, see [GetPropertyValueHistory](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValueHistory.html) and [Class GetPropertyValueHistoryRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueHistoryRequest.html).

##### 4.1.10.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `WorkspaceID` | String (unlimited) | | Required. The ID of the workspace. |
| `OrderByTime` | Enumeration `OrderByTime` | | Optional. The time direction to use in the result order. If not set, the results can be returned in a random order. |
| `StartTime` | Date and time | | Optional. The `DateTime` of the earliest property value to return. |
| `EndTime` | Date and time | | Optional. The `DateTime` of the latest property value to return. If not set, the properties earlier than the current date will be returned. |
| `NextToken` | String (unlimited) | | Optional. The string to request the next page of results. This value should be copied from the previous response containing the previous of page of results. To retrieve first page of results, leave this property blank. |
| `MaxResults` | Integer | | Optional. MaxResults. If not set, a default value defined by AWS will be used. For range and default value, see [maxResults](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueHistoryRequest.html#maxResults()). |

##### 4.1.10.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `GetPropertyValueHistoryRequest_InterpolationParameters` | `AWSTwinMakerConnector.InterpolationParameters` | OneToMany | |
| `GetPropertyValueHistoryRequest_EntityGetPropertyValueHistoryRequestPropertyFilter` |`AWSTwinMakerConnector.EntityGetPropertyValueHistoryRequestPropertyFilter` | ManyToMany | |
| `AbstractQuery_GetPropertyValueHistoryRequest` | `AWSTwinMakerConnector.GetPropertyValueHistoryRequest` | OneToOne | |
| `GetPropertyValueHistoryRequest_GetPropertyValueHistoryRequestSelectedProperty` | `AWSTwinMakerConnector.GetPropertyValueHistoryRequestSelectedProperty` | ManyToMany | |

#### 4.1.11 InterpolationParameters

Optional. The `InterpolationParameters` entity is used to specify the interpolation type and the interval over which to interpolate data.

For more information, see [InterpolationParameters](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_InterpolationParameters.html) and [Class InterpolationParameters](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/InterpolationParameters.html).

##### 4.1.11.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `InterpolationType` | Enumeration `InterpolationType` | | The interpolation type to use when interpolating results. |
| `IntervalInSeconds` | Long | | The interpolation time interval in seconds. |

##### 4.1.11.2 Associations

The `InterpolationParameters` entity does not have any associations.

#### 4.1.12 PropertyFilter

The `PropertyFilter` entity filters items returned by a property request. You can filter the request by using various logical operators and a key-value format.

For more information, see [PropertyFilter](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyFilter.html) and [Class PropertyFilter](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyFilter.html).

##### 4.1.12.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Operator` | String (unlimited) | | The operator associated with this property filter. |
| `PropertyName` | String (unlimited) | | The property name associated with this property filter. |

##### 4.1.12.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `PropertyFilter_PropertyFilterDataValue` | `AWSTwinMakerConnector.PropertyFilterDataValue` | OneToMany | |

#### 4.1.13 GetPropertyValueRequestSelectedProperty

Required. The `GetPropertyValueRequestSelectedProperty` entity indicates the TwinMaker property whose values you want to return. In AWS IoT TwinMaker, this property must be marked as a time-series property.

For more information, see [Request Body](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html#API_GetPropertyValue_RequestBody) and [selectedProperties](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueRequest.html#selectedProperties()).

##### 4.1.13.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.SelectedProperty`.

##### 4.1.13.2 Attributes

The `GetPropertyValueRequestSelectedProperty` entity does not have any attributes.

##### 4.1.13.3 Associations

The `GetPropertyValueRequestSelectedProperty` entity does not have any associations.

#### 4.1.14 PropertyFilterDataValue

The `PropertyFilterDataValue` entity represents the value associated with this property filter.

For more information, see [DataValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html) and [Class DataValue](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html).

##### 4.1.14.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.DataValueUsage`.

##### 4.1.14.2 Attributes

The `PropertyFilterDataValue` entity does not have any attributes.

##### 4.1.14.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.15 GetPropertyValueHistoryResponse

The `GetPropertyValueHistoryResponse` entity contains the response for retrieving information about the history of a time series property value for a component, component type, entity, or workspace.

For more information, see [GetPropertyValueHistory](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValueHistory.html) and [Class GetPropertyValueHistory](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueHistoryResponse.html).

##### 4.1.15.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `NextToken` | String (unlimited) | | The string that specifies the next page of results. Can be used to set on the next request to retrieve the next page of results. |

##### 4.1.15.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `GetPropertyValueHistoryResponse_PropertyValueHistory` | `AWSTwinMakerConnector.PropertyValueHistory` | ManyToMany | |

#### 4.1.16 PropertyValueHistory

The `PropertyValueHistory` contains the history of values for a time series property.

For more information, see [PropertyValueHistory](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyValueHistory.html) and [Class PropertyValueHistory](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyValueHistory.html).

##### 4.1.16.1 Attributes

The `PropertyValueHistory` entity does not have any attributes.

##### 4.1.16.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `PropertyValueHistory_PropertyValue` | `AWSTwinMakerConnector.PropertyValue` | ManyToMany | |
 `PropertyValueHistory_GetPropertyValueHistoryResponseEntityPropertyReference` | `AWSTwinMakerConnector.GetPropertyValueHistoryResponseEntityPropertyReference` | OneToMany | |

#### 4.1.17 PropertyValue

The `PropertyValue` contains information about a value for a time series property.

For more information, see [PropertyValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyValue.html) and [Class PropertyValue](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyValue.html).

##### 4.1.17.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.DataValueUsage`.

##### 4.1.17.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `time` | Date and time | | Date and time of a value for a time series property. |

##### 4.1.17.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.18 EntityPropertyReference

The `EntityPropertyReference` entity uniquely identifies an entity property.

For more information, see [EntityPropertyReference](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntityPropertyReference.html) and [Class EntityPropertyReference](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntityPropertyReference.html).

##### 4.1.18.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ComponentName` | String (unlimited) | | The name of the component. |
| `EntityID` | String (unlimited) | | The ID of the entity. |
| `PropertyName` | String (unlimited) | | The name of the property. |

##### 4.1.18.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `EntityPropertyReference_ExternalPropertyID` | `AWSTwinMakerConnector.ExternalPropertyID` | ManyToMany | |

#### 4.1.19 ExternalPropertyID

The `ExternalPropertyID` entity contains the mapping of external IDs to property names. External IDs uniquely identify properties from external data stores.

For more information, see [EntityPropertyReference](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntityPropertyReference.html#API_EntityPropertyReference_Contents) and [externalIdProperty](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntityPropertyReference.html#externalIdProperty()).

##### 4.1.19.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Key` | String (unlimited) | | External identifier (for example, the external system name) |
| `Value` | String (unlimited) | | External property name, for example, the name of this property in the external system. |

##### 4.1.19.2 Associations

Entity `ExternalPropertyID` does not have any associations.

#### 4.1.20 GetPropertyValueRequest

The `GetPropertyValueRequest` entity contains the request to get the property values for a component, component type, entity, or workspace.

For more information, see [GetPropertyValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html) and [Class GetPropertyValueRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueRequest.html).

##### 4.1.20.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ComponentName` | String (unlimited) | | Optional. The name of the component whose property values the operation returns. |
| `ComponentTypeID` | String (unlimited) | | Optional. The ID of the component type whose property values the operation returns. |
| `EntityID` | String (unlimited) | | Optional. The ID of the TwinMaker entity whose property values the operation returns. |
| `MaxResult` | Integer | | Optional. The maximum number of results to return at one time. For more information about the maximum value allowed, see [maxResults](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueRequest.html#maxResults()). |
| `NextToken` | String (unlimited) | | Optional. The string that specifies the next page of results. |
| `PropertyGroupName` | String (unlimited) | | Optional. The property group name. |
| `WorkspaceID` | String (unlimited) | | Required. The ID of the workspace whose values the operation returns. |

##### 4.1.20.2 Associations

| Name | Connected to| Multiplicity | Description |
| --- | --- | --- | --- |
| `GetPropertyValueRequest_TabularConditions` | `AWSTwinMakerConnector.TabularConditions` | OneToMany | |
| `GetPropertyValueRequest_GetPropertyValueRequestSelectedProperty` | `AWSTwinMakerConnector.GetPropertyValueRequestSelectedProperty` | ManyToMany | |

#### 4.1.21 TabularConditions

Optional. The `TabularConditions` describes the tabular conditions. For more information, see [TabularConditions](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_TabularConditions.html) and [Class TabularConditions](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/TabularConditions.html).

##### 4.1.21.1 Attributes

The `TabularConditions` entity does not have any attributes.

##### 4.1.21.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `TabularConditions_OrderBy` | `AWSTwinMakerConnector.OrderBy` | ManyToMany | |
| `TabularConditions_TabularConditionPropertyFilter` | `AWSTwinMakerConnector.TabularConditionPropertyFilter` | ManyToMany | |

#### 4.1.22 OrderBy

The `OrderBy` entity contains the filter criteria that orders the output. It can be sorted in ascending or descending order.

For more information, see [OrderBy](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_OrderBy.html) and [Class OrderBy](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/OrderBy.html).

##### 4.1.22.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `PropertyName` | String (unlimited) | | The property to order on |
| `Order` | Enumeration `Order` | | Set order of results |

##### 4.1.22.2 Associations

The `OrderBy`entity does not have any associations.

#### 4.1.23 TabularConditionPropertyFilter

The `TabularConditionPropertyFilter` entity filters the items returned by a property request. You can filter the request by using various logical operators and a key-value format.

For more information, see [PropertyFilter](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyFilter.html) and [Class PropertyFilter](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyFilter.html).

##### 4.1.23.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.PropertyFilter`.

##### 4.1.23.2 Attributes

The `TabularConditionPropertyFilter` entity does not have any attributes.

##### 4.1.23.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `PropertyFilter_PropertyFilterDataValue` | `AWSTwinMakerConnector.PropertyFilterDataValue` | OneToMany | |

#### 4.1.24 EntityGetPropertyValueHistoryRequestPropertyFilter

Optional. The `EntityGetPropertyValueHistoryRequestPropertyFilter` entity filters the items returned by a property request. You can filter the request by using various logical operators and a key-value format.

For more information, see [PropertyFilter](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyFilter.html) and [Class PropertyFilter](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyFilter.html).

##### 4.1.24.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.PropertyFilter`.

##### 4.1.24.2 Attributes

Entity `EntityGetPropertyValueHistoryRequestPropertyFilter` does not have any attributes.

##### 4.1.24.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `PropertyFilter_PropertyFilterDataValue` | `AWSTwinMakerConnector.PropertyFilterDataValue` | OneToMany | |

#### 4.1.25 PropertyResponseDataValue

The `PropertyResponseDataValue` entity represents the current value of the property.

For more information, see [DataValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html) and [Class DataValue](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html).

##### 4.1.25.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.DataValueUsage`.

##### 4.1.25.2 Attributes

The `PropertyResponseDataValue` entity does not have any attributes.

##### 4.1.25.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.26 GetEntityResponseStatus

The `GetEntityResponseStatus` entity represents the current status of the entity.

For more information, see [Status](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html) and [Class Status](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html).

##### 4.1.26.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.Status`.

##### 4.1.26.2 Attributes

The `GetEntityResponseStatus` entity does not have any attributes.

##### 4.1.26.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `Status_ErrorDetails` | `AWSTwinMakerConnector.ErrorDetails` | OneToMany | |

#### 4.1.27 ComponentResponseStatus

The `ComponentResponseStatus` entity represents the status of the component type.

For more information, see [Status](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html) and [Class Status](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html).

##### 4.1.27.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.Status`.

##### 4.1.27.2 Attributes

The `ComponentResponseStatus` entity does not have any attributes.

##### 4.1.27.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `Status_ErrorDetails` | `AWSTwinMakerConnector.ErrorDetails` | OneToMany | |

#### 4.1.28 GetPropertyValueResponse

Response of getting the property values for a component, component type, entity, or workspace.

For more information, see [GetPropertyValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html) and [Class GetPropertyValueResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueResponse.html).

##### 4.1.28.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `NextToken` | String (unlimited) | | The string that specifies the next page of results. |

##### 4.1.28.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `GetPropertyValueResponse_PropertyValueLatest` | `AWSTwinMakerConnector.PropertyValueLatest` | ManyToMany | |
| `GetPropertyValueResponse_Table` | `AWSTwinMakerConnector.Table` | ManyToMany | |

#### 4.1.29 PropertyValueLatest

The `PropertyValueLatest` entity maps the property name as key to the latest property value and property information (definition).

For more information, see [PropertyLatestValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyLatestValue.html) and [Class PropertyLatestValue](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyLatestValue.html).

##### 4.1.29.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Key` | String (unlimited) | | The property name is used as key. |

##### 4.1.29.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `PropertyValueLatest_DataValueUsagePropertyLatestValue` | `AWSTwinMakerConnector.DataValueUsagePropertyLatestValue` | OneToMany | |
| `PropertyValueLatest_EntityPropertyReferencePropertyLatestValue` | `AWSTwinMakerConnector.EntityPropertyReferencePropertyLatestValue` | OneToMany | |

#### 4.1.30 EntityPropertyReferencePropertyLatestValue

The `EntityPropertyReferencePropertyLatestValue` entity specifies information about a property.

For more information, see [EntityPropertyReference](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntityPropertyReference.html) and [Class EntityPropertyReference](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntityPropertyReference.html).

##### 4.1.30.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.EntityPropertyReference`.

##### 4.1.30.2 Attributes

The `EntityPropertyReferencePropertyLatestValue` entity does not have any attributes.

##### 4.1.30.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `EntityPropertyReference_ExternalPropertyID` | `AWSTwinMakerConnector.ExternalPropertyID` | ManyToMany | |

#### 4.1.31 GetPropertyValueHistoryResponseEntityPropertyReference

The `GetPropertyValueHistoryResponseEntityPropertyReference` entity represents a unique identification of a TwinMaker entity property.

For more information, see [EntityPropertyReference](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntityPropertyReference.html) and [Class EntityPropertyReference](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntityPropertyReference.html).

##### 4.1.31.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.EntityPropertyReference`.

##### 4.1.31.2 Attributes

The `GetPropertyValueHistoryResponseEntityPropertyReference` entity does not have any attributes.

##### 4.1.31.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `EntityPropertyReference_ExternalPropertyID` | `AWSTwinMakerConnector.ExternalPropertyID` | ManyToMany | |

#### 4.1.32 DataValueUsagePropertyLatestValue

The `DataValueUsagePropertyLatestValue` entity represents the latest value of a property.

For more information, see [DataValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html) and [Class DataValue](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html).

##### 4.1.32.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.DataValueUsage`.

##### 4.1.32.2 Attributes

The `DataValueUsagePropertyLatestValue` entity does not have any attributes.

##### 4.1.32.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.33 Table

The `Table` entity represents a table of property values.

For more information, see [tabularPropertyValues (1)](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html#tm-GetPropertyValue-response-tabularPropertyValues) and [tabularPropertyValues (2)](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueResponse.html#tabularPropertyValues()).

##### 4.1.33.1 Attributes

The `Table` entity does not have any attributes.

##### 4.1.33.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `Table_Row` | `AWSTwinMakerConnector.Row` | ManyToMany | |

#### 4.1.34 Row

The `Row` entity represents a row (array) inside a table of property values.

For more information, see [tabularPropertyValues (1)](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html#tm-GetPropertyValue-response-tabularPropertyValues) and [tabularPropertyValues (2)](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueResponse.html#tabularPropertyValues()).

##### 4.1.34.1 Attributes

The `Row` entity does not have any attributes.

##### 4.1.34.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `Row_Column` | `AWSTwinMakerConnector.Column` | ManyToMany | |

#### 4.1.35 Column

The `Column` entity represents a column with the property value. The property name is used as key.

##### 4.1.35.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.DataValueUsage`.

##### 4.1.35.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Key` | String (200) | | The property name is used as key. |

##### 4.1.35.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.36 ListEntitiesRequest

The `ListEntitiesRequest` entity represents a request for retrieving the list of all TwinMaker entities in a workspace.

For more information, see [ListEntities](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListEntities.html) and [Class ListEntitiesRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListEntitiesRequest.html).

##### 4.1.36.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `MaxResults` | Integer | | Optional. The maximum number of results to return at one time. For more information, about the maximum value that you can set, see [ListEntitiesRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListEntitiesRequest.html#maxResults()). |
| `NextToken` | String (unlimited) | | Optional. The string that specifies the next page of results. |
| `WorkspaceID` | String (unlimited) | | Required. The ID of the workspace. |

##### 4.1.36.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `ListEntitiesRequest_AbstractEntityFilter` | `AWSTwinMakerConnector.AbstractEntityFilter` | OneToMany | |

#### 4.1.37 ListEntitiesResponse

The `ListEntitiesResponse` entity contains the list of all TwinMaker entities in a workspace.

For more information, see [ListEntities](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListEntities.html) and [ListEntitiesResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListEntitiesResponse.html).

##### 4.1.37.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `NextToken` | String (unlimited) | | The string that specifies the next page of results. |

##### 4.1.37.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `ListEntitiesResponse_EntitySummary` | `AWSTwinMakerConnector.EntitySummary` | ManyToMany | |

#### 4.1.38 EntitySummary

The `EntitySummary` entity contains information about a TwinMaker entity.

For more information, see [EntitySummary](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_EntitySummary.html) and [Class EntitySummary](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/EntitySummary.html).

##### 4.1.38.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `CreationDateTime` | Date and time | | The date and time when the TwinMaker entity was created. |
| `Description` | String (unlimited) | | The description of the TwinMaker entity. |
| `EntityID` | String (unlimited) | | The ID of the TwinMaker entity. |
| `EntityName` | String (unlimited) | | The name of the TwinMaker entity. |
| `HasChildEntities` | Boolean | false | A Boolean value that specifies whether the TwinMaker entity has child entities or not. |
| `ParentEntityID` | String (unlimited) | | The ID of the parent TwinMaker entity. |
| `UpdateDateTime` | Date and time | | The last date and time when the TwinMaker entity was updated. |

##### 4.1.38.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `EntitySummary_EntityStatu`s | `AWSTwinMakerConnector.EntityStatus` | OneToMany | |

#### 4.1.39 EntityStatus

The `EntityStatus` entity contains the current status of the TwinMaker entity.

For more information, see [Status](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html) and [Class Status](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html).

##### 4.1.39.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.Status`.

##### 4.1.39.2 Attributes

The `EntityStatus` entity does not have any attributes.

##### 4.1.39.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `Status_ErrorDetails` | `AWSTwinMakerConnector.ErrorDetails` | OneToMany | |

#### 4.1.40 ListScenesRequest

The `ListScenesRequest` entity represents the request to get the list of available scenes in a workspace.

For more information, see [ListScenes](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListScenes.html) and [ListScenesRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListScenesRequest.html).

##### 4.1.40.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `MaxResults` | Integer | | Optional. Specifies the maximum number of results to retrieve. For more information about the maximum value that you can set, see [maxResults](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListScenesRequest.html#maxResults()). |
| `NextToken` | String (unlimited) | | Optional. The string that specifies the next page of results. |
| `WorkspaceID` | String (unlimited) | | Required. The ID of the workspace that contains the scenes. |

##### 4.1.40.2 Associations

The `ListScenesRequest` entity does not have any associations.

#### 4.1.41 ListScenesResponse

The `ListScenesResponse` entity contains the list of scenes in a workspace.

For more information, see [ListScenes](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListScenes.html) and [ListScenesResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListScenesResponse.html).

##### 4.1.41.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `NextToken` | String (unlimited) | | The string that specifies the next page of results. |

##### 4.1.41.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `ListScenesResponse_SceneSummary` | AWSTwinMakerConnector.SceneSummary | ManyToMany | |

#### 4.1.42 SceneSummary

The `SceneSummary` entity contains information about a scene.

For more information, see [SceneSummary](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_SceneSummary.html) and [Class SceneSummary](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/SceneSummary.html).

##### 4.1.42.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ARN` | String (unlimited) | | The ARN of the scene. |
| `ContentLocation` | String (unlimited) | | The relative path that specifies the location of the content definition file. |
| `CreationDateTime` | Date and time | | The date and time when the scene was created. |
| `Description` | String (unlimited) | | The scene description. |
| `SceneID` | String (unlimited) | | The ID of the scene. |
| `UpdateDateTime` | Date and time | | The date and time when the scene was last updated. |

##### 4.1.42.2 Associations

The `SceneSummary` entity does not have any associations.

#### 4.1.43 GetSceneRequest

The `GetSceneRequest` entity contains the request to get a specific scene.

For more information, see [GetScene](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html) and [GetSceneRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetSceneRequest.html).

##### 4.1.43.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `SceneID` | String (unlimited) | | Required. The ID of the scene to retrieve. |
| `WorkspaceID` | String (unlimited) | | Required. The ID of the workspace to search for the scene. |

##### 4.1.43.2 Associations

The `GetSceneRequest` entity does not have any associations.

#### 4.1.44 GetSceneResponse

The `GetSceneResponse` entity contains the response of getting a specific scene.

For more information, see [GetScene](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html) and [GetSceneResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetSceneResponse.html).

##### 4.1.44.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ARN` | String (unlimited) | | ARN of the scene |
| `ContentLocation` | String (unlimited) | | The relative path that specifies the location of the content definition file. |
| `CreationDateTime` | Date and time | | The date and time when the scene was created. |
| `Description` | String (unlimited) | | The description of the scene. |
| `SceneID` | String (unlimited) | | The ID of the scene. |
| `UpdateDateTime` | Date and time | | The date and time when the scene was last updated. |
| `WorkspaceID` | String (unlimited) | | The ID of the workspace that contains the scene. |

##### 4.1.44.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `GetSceneResponse_Capability` | `AWSTwinMakerConnector.Capability` | ManyToMany | |

#### 4.1.45 Capability

The `Capability` entity represents the list of capabilities that the scene uses to render.

For more information, see [Response Elements](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html#API_GetScene_ResponseElements) and [capabilities](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetSceneResponse.html#capabilities()).

##### 4.1.45.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Capability` | String (unlimited) | | The capability |

##### 4.1.45.2 Associations

The `Capability` entity does not have any associations.

#### 4.1.46 CustomParentIDEntityFilter

The `CustomParentIDEntityFilter` entity provides a filter to only retrieve TwinMaker entities which are children of a specific TwinMaker entity parent.

##### 4.1.46.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractEntityFilter`.

##### 4.1.46.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `FilterValue` | String (unlimited) | | Value for the Parent id of the TwinMaker entities to filter on. |

##### 4.1.46.3 Associations

The `CustomParentIDEntityFilter` entity does not have any associations.

#### 4.1.47 RootEntityFilter

The `RootEntityFilter` entity provides a filter to only retrieve root TwinMaker entities (that is, entities without a parent).

##### 4.1.47.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractEntityFilter`.

##### 4.1.47.2 Attributes

The `RootEntityFilter` does not have any attributes.

##### 4.1.47.3 Associations

Entity `RootEntityFilter` entity does not have any associations.

#### 4.1.48 AbstractEntityFilter

{{% alert color="warning" %}}
Do not use this entity directly. Instead, use one of its specializations.
{{% /alert %}}

The `AbstractEntityFilter` entity represents an object that filters items in a list of TwinMaker entities.

For more information, see [ListEntitiesFilter](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListEntitiesFilter.html).

##### 4.1.48.1 Attributes

The `AbstractEntityFilter` entity does not have any attributes.

##### 4.1.48.2 Associations

The `AbstractEntityFilter` entity does not have any associations.

#### 4.1.49 CustomExternalIDEntityFilter

The `CustomExternalIDEntityFilter` entity provides a filter to only retrieve TwinMaker entities with a given External Id.

##### 4.1.49.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractEntityFilter`.

##### 4.1.49.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `FilterValue` | String (unlimited) | | Value for the External Id of TwinMaker entities to filter on. |

##### 4.1.49.3 Associations

The `CustomExternalIDEntityFilter` entity does not have any associations.

#### 4.1.50 CustomComponentTypeIDEntityFilter

The `CustomComponentTypeIDEntityFilter` entity provides a filter to only retrieve TwinMaker entities of a specific component type.

##### 4.1.50.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractEntityFilter`.

##### 4.1.50.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `FilterValue` | String (unlimited) | | Value for the ComponentType ID of the TwinMaker entities to filter on. |

##### 4.1.50.3 Associations

The `CustomComponentTypeIDEntityFilter` entity does not have any associations.

#### 4.1.51 AbstractDataValue

The `AbstractDataValue` entity is an abstract object that specifies a value, or values, for a property.

{{% alert color="warning" %}}
Do not use this entity directly. Instead, use one of its specializations.
{{% /alert %}}

For more information, see [DataValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html) and [Class DataValue](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html).

##### 4.1.51.1 Attributes

The `AbstractDataValue` entity does not have any attributes.

##### 4.1.51.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.52 DataValueMap

The `DataValueMap` entity that represents a map of name-value pairs as a data value.

##### 4.1.52.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractDataValue`.

##### 4.1.52.2 Attributes

The `DataValueMap` entity does not have any attributes.

##### 4.1.52.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `DataValueMap_DataValueUsageMapEntry` | `AWSTwinMakerConnector.DataValueUsageMapEntry` | ManyToMany | |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.53 DataValueUsage

The `DataValueUsage` entity specifies a value, or values, for a property. This entity can be used as the starting point for using a data value of a property.

For more information, see [DataValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html) and [Class DataValue](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html).

##### 4.1.53.1 Attributes

The `DataValueUsage` entity does not have any attributes.

##### 4.1.53.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.54 DataValueBoolean

The `DataValueBoolean` entity represents a DataValue of the type Boolean.

##### 4.1.54.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractDataValue`.

##### 4.1.54.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Value` | Boolean | false | |

##### 4.1.54.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.55 DataValueInt

The `DataValueInt` entity represents a DataValue of the type Integer.

##### 4.1.55.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractDataValue`.

##### 4.1.55.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Value` | Integer | | |

##### 4.1.55.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.56 DataValueLong

The `DataValueLong` entity represents a DataValue of the type Long.

##### 4.1.56.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractDataValue`.

##### 4.1.56.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Value` | Long | | |

##### 4.1.56.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.57 DataValueList

The `DataValueList` entity represents a list as a data value.

##### 4.1.57.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractDataValue`.

##### 4.1.57.2 Attributes

The `DataValueList` entity does not have any attributes.

##### 4.1.57.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `DataValueList_DataValueUsageListEntry` | `AWSTwinMakerConnector.DataValueUsageListEntry` | ManyToMany | |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.58 DataValueRelationship

The `DataValueRelationship` entity represents a DataValue of the type Relationship that associates a component and an entity.

For more information, see [RelationshipValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_RelationshipValue.html) and [Class RelationshipValue](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/RelationshipValue.html).

##### 4.1.58.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractDataValue`.

##### 4.1.58.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `TargetComponentName` | String (unlimited) | | The name of the target component associated with the relationship value. |
| `TargetEntityID` | String (unlimited) | | The ID of the target entity associated with this relationship value. |

##### 4.1.58.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.59 DataValueString

he `DataValueString` entity represents a DataValue of the type String.

##### 4.1.59.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractDataValue`.

##### 4.1.59.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Value` | String (unlimited) | | |

##### 4.1.59.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.60 DataValueUsageMapEntry

The `DataValueUsageMapEntry` entity represents one entry of a map, that is, a key-value pair. The entity is a specialization of the `DataValueUsage` entity, as the value can be of any data value type.

##### 4.1.60.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.DataValueUsage`.

##### 4.1.60.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Key` | String (unlimited) | | Name of key (used in key-value pairs) |

##### 4.1.60.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.61 DataValueDecimal

The `DataValueDecimal` entity represents a DataValue of the type Decimal.

##### 4.1.61.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractDataValue`.

##### 4.1.61.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Value` | Decimal | | Contains the double value |

##### 4.1.61.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.62 AbstractQuery

{{% alert color="warning" %}}
The `AbstractQuery` entity is an abstract entity. Do not use this entity directly. Instead, use a specialization query.
{{% /alert %}}

##### 4.1.62.1 Attributes

The `AbstractQuery` entity does not have any attributes.

##### 4.1.62.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractQuery_GetPropertyValueHistoryRequest` | `AWSTwinMakerConnector.GetPropertyValueHistoryRequest` | OneToOne | |

#### 4.1.63 ListWorkspacesRequest

The `ListWorkspacesRequest` entity represents a request to get the list of workspaces in the current account.

For more information, see [ListWorkspaces](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListWorkspaces.html) and [ListWorkspacesRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListWorkspacesRequest.html).

##### 4.1.63.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `MaxResults` | Integer | | Optional. The maximum number of results to return at one time. For more information about the maximum value that you can set, see [maxResults](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListWorkspacesRequest.html#maxResults()). |
| `NextToken` | String (unlimited) | | Optional. The string that specifies the next page of results. |

##### 4.1.63.2 Associations

The `ListWorkspacesRequest` entity does not have any associations.

#### 4.1.64 ListComponentTypeRequest

The `ListComponentTypeRequest` entity represents a request to lists all component types in a workspace.

For more information, see [ListComponentTypes](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypes.html) and [ListComponentTypesRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesRequest.html).

##### 4.1.64.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `MaxResults` | Integer | | Optional. The maximum number of results to return at one time. For more information about the maximum value that you can set, see [maxResults](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesRequest.html#maxResults()). |
| `NextToken` | String (unlimited) | | Optional. The string that specifies the next page of results. |
| `WorkspaceID` | String (unlimited) | | Required. The ID of the workspace. |

##### 4.1.64.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `ListComponentTypeRequest_AbstractListComponentTypeFilter` | `AWSTwinMakerConnector.AbstractListComponentTypeFilter` | ManyToMany | A list of objects that filter the request. For more information, see [filters](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesRequest.html#filters()). |

#### 4.1.65 EntitySpecificQuery

Optional. Use the `EntitySpecificQuery` entity for TwinMaker entity-specific queries, for example, to retrieve information about the history of a time series property value for a specific TwinMaker entity and component.

##### 4.1.65.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractQuery`.

##### 4.1.65.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `EntityID` | String (unlimited) | | Required. ID of TwinMaker entity. |
| `ComponentName` | String (unlimited) | | Identification name of component. |

##### 4.1.65.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractQuery_GetPropertyValueHistoryRequest` | `AWSTwinMakerConnector.GetPropertyValueHistoryRequest` | OneToOne | |

#### 4.1.66 ListWorkspacesResponse

The `ListWorkspacesResponse` entity represents the list of workspaces in the current account.

For more information, see [ListWorkspaces](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListWorkspaces.html) and [ListWorkspacesResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListWorkspacesResponse.html).

##### 4.1.66.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `NextToken` | String (unlimited) | | |

##### 4.1.66.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `ListWorkspacesResponse_WorkspaceSummary` | `AWSTwinMakerConnector.WorkspaceSummary` | ManyToMany | |

#### 4.1.67  AbstractListComponentTypeFilter

{{% alert color="warning" %}}
Do not use this entity directly. Instead, use one of its specializations.
{{% /alert %}}

The `AbstractListComponentTypeFilter` entity represents an object that filters items in a list of component types. For more information, see [ListComponentTypesFilter](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iotTwinMaker/model/ListComponentTypesFilter.html).

##### 4.1.67.1 Attributes

The `AbstractListComponentTypeFilter` entity does not have any attributes.

##### 4.1.67.2 Associations

The `AbstractListComponentTypeFilter` entity does not have any associations.

#### 4.1.68 CrossEntityQuery

Optional. Use the `CrossEntityQuery` entity for TwinMaker cross-entity queries, for example, to retrieve information about the history of a time series property value for all components of a specific type within a workspace. Filters can be applied to the limit the number of components or to target specific components.

##### 4.1.68.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractQuery`.

##### 4.1.68.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ComponenTypeID` | String (unlimited) | | The ID of the component type. |

##### 4.1.68.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractQuery_GetPropertyValueHistoryRequest` | `AWSTwinMakerConnector.GetPropertyValueHistoryRequest` | OneToOne | |

#### 4.1.69 WorkspaceSummary

The `WorkspaceSummary` entity contains information about a workspace.

For more information, see [WorkspaceSummary](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_WorkspaceSummary.html) and [Class WorkspaceSummary](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/WorkspaceSummary.html).

##### 4.1.69.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ARN` | String (unlimited) | | The ARN of the workspace. |
| `CreationDateTime` | Date and time | | The date and time when the workspace was created. |
| `Description` | String (unlimited) | | The description of the workspace. |
| `UpdateDateTime` | Date and time | | The date and time when the workspace was last updated. |
| `WorkspaceID` | String (unlimited) | | The ID of the workspace. |

##### 4.1.69.2 Associations

The `WorkspaceSummary` entity does not have any associations.

#### 4.1.70 ExtendsFromFilter

The `ExtendsFromFilter` entity represents filters containing the component type that the component types in the list extend.

For more information, see [ListComponentTypesFilter](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypesFilter.html) and [extendsFrom](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesFilter.html#extendsFrom()).

##### 4.1.70.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractListComponentTypeFilter`.

##### 4.1.70.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ExtendsFrom` | String (unlimited) | | The component type that the component types in the list extend (that is, the parent type). |

##### 4.1.70.3 Associations

The `ExtendsFromFilter` entity does not have any associations.

#### 4.1.71 SelectedProperty

The `SelectedProperty` entity represents a selected property, for example, the properties whose values the operation returns.

##### 4.1.71.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Property` | String (unlimited) | | Name of property |

##### 4.1.71.2 Associations

The `SelectedProperty` entity does not have any associations.

#### 4.1.72 IsAbstractFilter

The `IsAbstractFilter` entity represents filters containing a Boolean value that specifies whether the component types in the list are abstract.

For more information, see [ListComponentTypesFilter](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypesFilter.html) and [isAbstract](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesFilter.html#isAbstract()).

##### 4.1.72.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractListComponentTypeFilter`.

##### 4.1.72.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `IsAbstract` | Boolean | false | A Boolean value that specifies whether the component types in the list are abstract. |

##### 4.1.72.3 Associations

The `IsAbstractFilter` entity does not have any associations.

#### 4.1.73 GetPropertyValueHistoryRequestSelectedProperty

Required. The `GetPropertyValueHistoryRequestSelectedProperty` entity represents the TwinMaker property whose values you want to return. In TwinMaker, this property must be marked as a time-series property.

For more information, see [Request Body](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html#API_GetPropertyValue_RequestBody) and [selectedProperties](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetPropertyValueRequest.html#selectedProperties()).

##### 4.1.73.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.SelectedProperty`.

##### 4.1.73.2 Attributes

The `GetPropertyValueHistoryRequestSelectedProperty` entity does not have any attributes.

##### 4.1.73.3 Associations

The `GetPropertyValueHistoryRequestSelectedProperty` entity does not have any associations.

#### 4.1.74 NamespaceFilter

The `NamespaceFilter` entity represents filters containing the namespace to which the component types in the list belong.

For more information, see [ListComponentTypesFilter](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypesFilter.html) and [namespace](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesFilter.html#namespace()).

##### 4.1.74.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.AbstractListComponentTypeFilter`.

##### 4.1.74.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Namespace` | String (unlimited) | | The namespace to which the component types in the list belong. |

##### 4.1.74.3 Associations

The `NamespaceFilter` entity does not have any associations.

#### 4.1.75 ListComponentTypeResponse

The `ListComponentTypeResponse` entity is a response entity containing the list of all component types in a workspace.

For more information, see [ListComponentTypes](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypes.html) and [ListComponentTypesResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ListComponentTypesResponse.html).

##### 4.1.75.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `MaxResults` | Integer | | Specifies the maximum number of results to display. |
| `WorkspaceID` | String (unlimited) | | The ID of the workspace. |
| `NextToken` | String (unlimited) | | The string that specifies the next page of results. |

##### 4.1.75.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `ListComponentTypeResponse_ComponentTypeSummary` | `AWSTwinMakerConnector.ComponentTypeSummary` | ManyToMany | |

#### 4.1.76 ComponentTypeSummary

The `ComponentTypeSummary` entity contains information about the retrieved ComponentTypes.

For more information, see [ComponentTypeSummary](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ComponentTypeSummary.html) and [Class ComponentTypeSummary](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/ComponentTypeSummary.html).

##### 4.1.76.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ARN` | String (unlimited) | | The ARN of the component type. |
| `ComponentTypeID` | String (unlimited) | | The ID of the component type. |
| `ComponentTypeName` | String (unlimited) | | The component type name. |
| `CreationDateTime` | Date and time | | The date and time when the component type was created |
| `Description` | String (unlimited) | | The description of the component type. |
| `UpdateDateTime` | Date and time | | The date and time when the component type was last updated. |

##### 4.1.76.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `ComponentTypeSummary_ListComponentTypeStatus` | `AWSTwinMakerConnector.ListComponentTypeStatus` | OneToMany | |

#### 4.1.77 ListComponentTypeStatus

The `ListComponentTypeStatus` entity represents the current status of the component type.

For more information, see [Status](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html) and [Class Status](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html).

##### 4.1.77.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.Status`.

##### 4.1.77.2 Attributes

The `ListComponentTypeStatus` entity does not have any attributes.

##### 4.1.77.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `Status_ErrorDetails` | `AWSTwinMakerConnector.ErrorDetails` | OneToMany | |

#### 4.1.78 GetComponentTypeRequest

The `GetComponentTypeRequest` entity contains the request to retrieve information about a specific componentType.

For more information, see [GetComponentType](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetComponentType.html) and [GetComponentTypeRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetComponentTypeRequest.html).

##### 4.1.78.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ComponentTypeID` | String (unlimited) | | Required. The ID of the componentType. |
| `WorkspaceID` | String (unlimited) | | Required. The ID of the workspace. |

##### 4.1.78.2 Associations

The `GetComponentTypeRequest` entity does not have any associations.

#### 4.1.79 DataValueUsageListEntry

The `DataValueUsageListEntry` entity represents one entry in a list. This entity is a specialization of the `DataValueUsage` entity, as the value can be of any data value type.

##### 4.1.79.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.DataValueUsage`.

##### 4.1.79.2 Attributes

The `DataValueUsageListEntry` entity does not have any attributes.

##### 4.1.79.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.80 GetComponentTypeResponse

The `GetComponentTypeResponse` entity contains information on the requested ComponentType.

For more information, see [GetComponentType](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetComponentType.html) and [GetComponentTypeResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetComponentTypeResponse.html).

##### 4.1.80.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ARN` | String (unlimited) | | The ARN of the component type. |
| `ComponentTypeID` | String (unlimited) | | The ID of the component type. |
| `ComponentTypeName` | String (unlimited) | | The component type name. |
| `CreationDateTime` | Date and time | | The date and time when the component type was created. |
| `Description` | String (unlimited) | | The description of the component type. |
| `IsAbstract` | Boolean | false | A Boolean value that specifies whether the component type is abstract. |
| `IsSchemaInitialized` | Boolean | false | Boolean value that specifies whether the component type has a schema initializer and that the schema initializer has run. |
| `IsSingleton` | Boolean | false | A Boolean value that specifies whether an entity can have more than one component of this type. |
| `SyncSource` | String (unlimited) | | The syncSource of the SyncJob, if this entity was created by a SyncJob. |
| `UpdateDateTime` | Date and time | | The date and time when the component was last updated. |
| `WorkspaceID` | String (unlimited) | | The ID of the workspace that contains the component type. |

##### 4.1.80.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `GetComponentTypeResponse_ExtendsFrom` | `AWSTwinMakerConnector.ExtendsFrom` | ManyToMany | |
| `GetComponentTypeResponse_FunctionResponse` | `AWSTwinMakerConnector.FunctionResponse` | ManyToMany | |
| `GetComponentTypeResponse_ComponentTypePropertyDefinitionResponse` | `AWSTwinMakerConnector.ComponentTypePropertyDefinitionResponse` | ManyToMany | |
| `GetComponentTypeResponse_ComponentTypeStatus` | `AWSTwinMakerConnector.ComponentTypeStatus` | OneToMany | |
| `GetComponentTypeResponse_ComponentTypePropertyGroupResponse` | `AWSTwinMakerConnector.ComponentTypePropertyGroupResponse` | ManyToMany | |

#### 4.1.81 GetWorkspaceRequest

The `GetWorkspaceRequest` entity can be used to request the details of a workspace.

For more information, see [GetWorkspace](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetWorkspace.html) and [GetWorkspaceRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetWorkspaceRequest.html).

##### 4.1.81.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `WorkspaceID` | String (unlimited) | | Required. The ID of the workspace. |

##### 4.1.81.2 Associations

The `GetWorkspaceRequest` entity does not have any associations.

#### 4.1.82 ExtendsFrom

The `ExtendsFrom` entity represents the name of the parent component type that this component type extends.

##### 4.1.82.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ExtendsFrom` | String (unlimited) | | |

##### 4.1.82.2 Associations

The `ExtendsFrom` entity does not have any associations.

#### 4.1.83 GetWorkspaceResponse

The `GetWorkspaceResponse` entity contains the details of a workspace.

For more information, see [GetWorkspace](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetWorkspace.html) and [GetWorkspaceResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/GetWorkspaceResponse.html).

##### 4.1.83.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ARN` | String (unlimited) | | The ARN of the workspace. |
| `CreationDateTime` | Date and time | | The date and time when the workspace was created. |
| `Description` | String (unlimited) | | The description of the workspace. |
| `Role` | String (unlimited) | | The ARN of the execution role associated with the workspace. |
| `S3Location` | String (unlimited) | | The ARN of the S3 bucket where resources associated with the workspace are stored. |
| `UpdateDateTime` | Date and time | | The date and time when the workspace was last updated. |
| `WorkspaceID` | String (unlimited) | | The ID of the workspace. |

##### 4.1.83.2 Associations

The `GetWorkspaceResponse` entity does not have any associations.

#### 4.1.84 FunctionResponse

The `FunctionResponse` entity represents a function response.

For more information, see [FunctionResponse](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_FunctionResponse.html) and [Class FunctionResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/FunctionResponse.html).

##### 4.1.84.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Key` | String (unlimited) | | Functionname |
| `IsInherited` | Boolean | false | Indicates whether this function is inherited. |
| `Scope` | Enumeration `Scope` | | The scope of the function. |

##### 4.1.84.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `FunctionResponse_RequiredProperty` | `AWSTwinMakerConnector.RequiredProperty` | ManyToMany | |
| `FunctionResponse_DataConnector` | `AWSTwinMakerConnector.DataConnector` | OneToMany | |

#### 4.1.85 ComponentTypePropertyDefinitionResponse

The `ComponentTypePropertyDefinitionResponse` entity represents the property definitions in the component type.

For more information, see [PropertyDefinitionResponse](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html) and [Class PropertyDefinitionResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html).

##### 4.1.85.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.PropertyDefinitionResponse`.

##### 4.1.85.2 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Key` | String (unlimited) | | |

##### 4.1.85.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `PropertyDefinitionResponse_Configuration` | `AWSTwinMakerConnector.Configuration` | ManyToMany | |
| `PropertyDefinitionResponse_DataType` | `AWSTwinMakerConnector.DataType` | OneToMany | |
| `PropertyDefinitionResponse_PropertyDefinitionResponseDataValue` | `AWSTwinMakerConnector.PropertyDefinitionResponseDataValue` | OneToMany | |

#### 4.1.86 ComponentTypeStatus

The `ComponentTypeStatus` entity represents the current status of the component type.

For more information, see [Status](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Status.html) and [Class Status](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Status.html).

##### 4.1.86.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.Status`.

##### 4.1.86.2 Attributes

The `ComponentTypeStatus` entity does not have any attributes.

##### 4.1.86.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `Status_ErrorDetails` | `AWSTwinMakerConnector.ErrorDetails` | OneToMany | |

#### 4.1.87 RequiredProperty

The `RequiredProperty` entity represents the required properties of the function.

##### 4.1.87.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `RequiredProperty` | String (200) | | |

##### 4.1.87.2 Associations

The `RequiredProperty` entity does not have any associations.

#### 4.1.88 DataConnector

The `DataConnector` entity represents the data connector of the function.

For more information, see [DataConnector](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataConnector.html) and [Class DataConnector](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataConnector.html).

##### 4.1.88.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `IsNative` | Boolean | false | A Boolean value that specifies whether the data connector is native to AWS IoT TwinMaker. |

##### 4.1.88.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `DataConnector_LambdaFunction` | `AWSTwinMakerConnector.LambdaFunction` | OneToMany | |

#### 4.1.89 LambdaFunction

The `LambdaFunction` entity represents the Lambda function associated with this data connector.

For more information, see [LambdaFunction](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_LambdaFunction.html) and [Class LambdaFunction](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/LambdaFunction.html).

##### 4.1.89.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `ARN` | String (unlimited) | | The ARN of the Lambda function. |

##### 4.1.89.2 Associations

The `LambdaFunction` entity does not have any associations.

#### 4.1.90 PropertyDefinitionResponse

The `PropertyDefinitionResponse` entity represents an object that contains response data from a property definition request.

For more information, see [PropertyDefinitionResponse](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html) and [Class PropertyDefinitionResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html).

##### 4.1.90.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `DisplayName` | String (unlimited) | | A user-friendly name for the property. |
| `IsExternalID` | Boolean | false | A Boolean value that specifies whether the property ID comes from an external data store. |
| `IsFinal` | Boolean | false | A Boolean value that specifies whether the property definition can be updated. |
| `IsImported` | Boolean | false | A Boolean value that specifies whether the property definition is imported from an external data store. |
| `IsInherited` | Boolean | false | A Boolean value that specifies whether the property definition is inherited from a parent entity. |
| `IsRequiredInEntity` | Boolean | false | A Boolean value that specifies whether the property is required in an entity. |
| `IsStoredExternally` | Boolean | false | A Boolean value that specifies whether the property is stored externally. |
| `IsTimeSeries` | Boolean | false | A Boolean value that specifies whether the property consists of time series data. |

##### 4.1.90.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `PropertyDefinitionResponse_Configuration` | `AWSTwinMakerConnector.Configuration` | ManyToMany | |
| `PropertyDefinitionResponse_DataType` | `AWSTwinMakerConnector.DataType` | OneToMany | |
| `PropertyDefinitionResponse_PropertyDefinitionResponseDataValue` | `AWSTwinMakerConnector.PropertyDefinitionResponseDataValue` | OneToMany | |

#### 4.1.91 Configuration

The `Configuration` entity is a mapping that specifies configuration information about the property with key-value pairs.

For more information, see [PropertyDefinitionResponse Contents](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html#API_PropertyDefinitionResponse_Contents) and [configuration](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html#configuration()).

##### 4.1.91.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Key` | String (unlimited) | | Name of key or attribute |
| `Value` | String (unlimited) | | Value of key or attribute |

##### 4.1.91.2 Associations

The `Configuration` entity does not have any associations.

#### 4.1.92 DataType

The `DataType` entity contains information about the data type.

For more information, see [DataType](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataType.html) and [Class DataType](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataType.html).

##### 4.1.92.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `_Type` | Enumeration `_Type` | | The underlying type of the data type. For more information, see [DataType Contents](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataType.html#API_DataType_Contents) and [Type](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Type.html). |
| `UnitOfMeasure` | String (unlimited) | | The unit of measure used in this data type. |

##### 4.1.92.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `DataType_Relationship` | `AWSTwinMakerConnector.Relationship` | OneToMany | |
| `DataType_DataType_Nested` | `AWSTwinMakerConnector.DataType` | OneToMany | |
| `DataType_AllowedDataValue` | `AWSTwinMakerConnector.AllowedDataValue` | ManyToMany | |

#### 4.1.93 Relationship

The `Relationship` entity specifies a relationship with another component type.

For more information, see [Relationship](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_Relationship.html) and [Class Relationship](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/Relationship.html).

##### 4.1.93.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `RelationshipType` | String (unlimited) | | The type or description of the relationship. |
| `TargetComponentTypeID` | String (unlimited) | | The ID of the target component type associated with this relationship. |

##### 4.1.93.2 Associations

The `Relationship` entity does not have any associations.

#### 4.1.94 PropertyDefinitionResponseDataValue

PropertyDefinitionResponseDataValueUsage contains the default value of a PropertyDefinitionResponse

For more information, see the following articles:

* [PropertyDefinitionResponse Contents](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html#API_PropertyDefinitionResponse_Contents)
* [defaultValue](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyDefinitionResponse.html#defaultValue())
* [DataValue](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html)

##### 4.1.94.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.DataValueUsage`.

##### 4.1.94.2 Attributes

The `PropertyDefinitionResponseDataValue` entity does not have any attributes.

##### 4.1.94.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.95 AllowedDataValue

The AllowedDataValue entity represents the allowed values for this data type.

For more information, see the following articles:

* [DataType Contents](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataType.html#API_DataType_Contents)
* [DataValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DataValue.html)
* [allowedValues](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataType.html#allowedValues())
* [DataValue](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/DataValue.html)

##### 4.1.95.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.DataValueUsage`.

##### 4.1.95.2 Attributes

The `AllowedDataValue` entity does not have any attributes.

##### 4.1.95.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `AbstractDataValue_DataValueUsage` | `AWSTwinMakerConnector.DataValueUsage` | OneToOne | |

#### 4.1.96 PropertyGroupResponse

The `PropertyGroupResponse` entity represents the property group response.

For more information, see [PropertyGroupResponse](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyGroupResponse.html) and [Class PropertyGroupResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyGroupResponse.html).

##### 4.1.96.1 Attributes

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `Key` | String (unlimited) | | Name of the property group, used as key, identifier. |
| `GroupType` | Enumeration `GroupType` | | The group type. |
| `IsInherited` | Boolean | false | A Boolean value that specifies whether the property group is inherited from a parent entity. |

##### 4.1.96.2 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `PropertyGroupResponse_PropertyName` | `AWSTwinMakerConnector.PropertyName` | ManyToMany | |

#### 4.1.97 ComponentTypePropertyGroupResponse

The `ComponentTypePropertyGroupResponse` represents the `PropertyGroupResponse` associated with a `ComponentType`.

For more information, see [PropertyGroupResponse](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyGroupResponse.html) and [Class PropertyGroupResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/iottwinmaker/model/PropertyGroupResponse.html).

##### 4.1.97.1 Generalization

The generalization of this entity is `AWSTwinMakerConnector.PropertyGroupResponse`.

##### 4.1.97.2 Attributes

The `ComponentTypePropertyGroupResponse` entity does not have any attributes.

##### 4.1.97.3 Associations

| Name | Connected to | Multiplicity | Description |
| --- | --- | --- | --- |
| `PropertyGroupResponse_PropertyName` | `AWSTwinMakerConnector.PropertyName` | ManyToMany | |

### 4.2 Enumerations {#enumerations}

An enumeration is a predefined list of values that can be used as an attribute type. For the AWS IoT TwinMaker connector, enumerations list values such as the list of available AWS regions.

#### 4.2.1 Enumeration Scope

| Name | Caption |
| --- | --- |
| `ENTITY` | ENTITY |
| `WORKSPACE` | WORKSPACE |
| `UNKNOWN_TO_SDK_VERSION` | UNKNOWN_TO_SDK_VERSION |

#### 4.2.2 Enumeration ListEntityFilterType

| Name | Caption |
| --- | --- |
| `COMPONENT_TYPE_ID` | COMPONENT_TYPE_ID |
| `EXTERNAL_ID` | EXTERNAL_ID |
| `PARENT_ENTITY_ID` | PARENT_ENTITY_ID |

#### 4.2.3 Enumeration OrderByTime

The time direction to use in the result order.

| Name | Caption |
| --- | --- |
| `ASCENDING` | ASCENDING |
| `DESCENDING` | DESCENDING |

#### 4.2.4 Enumeration InterpolationType

The available interpolation types for interpolating results. For now, only one is supported, the `LINEAR` in time interpolation.

| Name | Caption |
| --- | --- |
| `LINEAR` | LINEAR |

#### 4.2.5 Enumeration State

| Name | Caption |
| --- | --- |
| `ACTIVE` | ACTIVE |
| `CREATING` | CREATING |
| `DELETING` | DELETING |
| `ERROR` | ERROR |
| `UPDATING` | UPDATING |
| `UNKNOWN_TO_SDK_VERSION` | UNKNOWN_TO_SDK_VERSION |

#### 4.2.67 Enumeration GroupType

| Name | Caption |
| --- | --- |
| `TABULAR` | TABULAR |
| `UNKNOWN_TO_SDK_VERSION` | UNKNOWN_TO_SDK_VERSION |

#### 4.2.7 Enumeration _Type

| Name | Caption |
| --- | --- |
| `_BOOLEAN` | BOOLEAN |
| `_DOUBLE` | DOUBLE |
| `INTEGER` | INTEGER |
| `LIST` | LIST |
| `_LONG` | LONG |
| `MAP` | MAP |
| `RELATIONSHIP` | RELATIONSHIP |
| `UNKNOWN_TO_SDK_VERSION` | UNKNOWN_TO_SDK_VERSION |
| `_STRING` | STRING |

#### 4.2.8 Enumeration ErrorCode

| Name | Caption |
| --- | --- |
| `INTERNAL_FAILURE` | INTERNAL_FAILURE |
| `SYNC_CREATING_ERROR` | SYNC_CREATING_ERROR |
| `SYNC_INITIALIZING_ERROR` | SYNC_INITIALIZING_ERROR |
| `SYNC_PROCESSING_ERROR` | SYNC_PROCESSING_ERROR |
| `UNKNOWN_TO_SDK_VERSION` | UNKNOWN_TO_SDK_VERSION |
| `VALIDATION_ERROR` | VALIDATION_ERROR |

#### 4.2.9 Enumeration Order

| Name | Caption |
| --- | --- |
| `ASCENDING` | ASCENDING |
| `DESCENDING` | DESCENDING |
| `UNKNOWN_TO_SDK_VERSION` | UNKNOWN_TO_SDK_VERSION |

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow.

#### 4.3.1 Microflow ListEntities

Retrieves the list of all TwinMaker entities in a workspace.

For more information, see [ListEntities](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListEntities.html).

##### 4.3.1.1 Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ListEntityRequest` | `AWSTwinMakerConnector.ListEntitiesRequest` | |
| `ENUM_Region` | `Enumeration AWSAuthentication.ENUM_Regio` | |
| `Credentials` | `AWSAuthentication.Credentials` | |

##### 4.3.1.2 Return type

This activity returns an `AWSTwinMakerConnector.ListEntitiesResponse` entity.

#### 4.3.2 Microflow GetWorkspace

Retrieves details of a workspace.

For more information, see [GetWorkspace](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetWorkspace.html).

##### 4.3.2.1 Parameters

| Name | Type | Description |
| --- | --- | --- |
| `GetWorkspaceRequest` | `AWSTwinMakerConnector.GetWorkspaceRequest` | |
| `ENUM_Region` | Enumeration `AWSAuthentication.ENUM_Region` | |
| `Credentials` | `AWSAuthentication.Credentials` | |

##### 4.3.2.2 Return type

This activity returns an `AWSTwinMakerConnector.GetWorkspaceResponse` entity.

#### 4.3.3 Microflow GetEntity

Retrieves information about a TwinMaker entity.

For more information, see [GetEntity](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetEntity.html).

##### 4.3.3.1 Parameters

| Name | Type | Description |
| --- | --- | --- |
| `GetEntityRequest` | `AWSTwinMakerConnector.GetEntityRequest` | |
| `ENUM_Region` | Enumeration `AWSAuthentication.ENUM_Region` | |
| `Credentials` | `AWSAuthentication.Credentials` | |

##### 4.3.3.2 Return type

This activity returns an `AWSTwinMakerConnector.GetEntityResponse` entity.

#### 4.3.4 Microflow GetPropertyValue

Gets the property values for a component, component type, entity, or workspace.

For more information, see [GetPropertyValue](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html).

##### 4.3.4.1 Parameters

| Name | Type | Description |
| --- | --- | --- |
| `GetPropertyValueRequest` | `AWSTwinMakerConnector.GetPropertyValueRequest` | |
| `ENUM_Region` | Enumeration `AWSAuthentication.ENUM_Region` | |
| `Credentials` | `AWSAuthentication.Credentials` | |

##### 4.3.4.2 Return type

This activity returns an `AWSTwinMakerConnector.GetPropertyValueResponse` entity.

#### 4.3.5 Microflow GetComponentType

Retrieves information about a specific component type.

For more information, see [GetComponentType](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetComponentType.html).

##### 4.3.5.1 Parameters

| Name | Type | Description |
| --- | --- | --- |
| `GetComponentTypeRequest` | `AWSTwinMakerConnector.GetComponentTypeRequest` | |
| `ENUM_Region` | Enumeration `AWSAuthentication.ENUM_Region` | |
| `Credentials` | `AWSAuthentication.Credentials` | |

##### 4.3.5.2 Return type

This activity returns an `AWSTwinMakerConnector.GetComponentTypeResponse` entity.

#### 4.3.6 Microflow GetPropertyValueHistory

Retrieves information about the history of a time series property value for a component, component type, twinmaker entity, or workspace.

You must specify a value for *workspaceId*. For TwinMaker entity-specific queries, specify values for *componentName* and *entityId*. For cross-entity queries, specify a value for *componentTypeId.*

For more information, see [GetPropertyValueHistory](https://docs.aws.amazon.com/iot-TwinMaker/latest/apireference/API_GetPropertyValueHistory.html).

##### 4.3.6.1 Parameters

| Name | Type | Description |
| --- | --- | --- |
| `GetPropertyValueHistoryRequest` | `AWSTwinMakerConnector.GetPropertyValueHistoryRequest` | |
| `ENUM_Region` | Enumeration `AWSAuthentication.ENUM_Region` | |
| `Credentials` | `AWSAuthentication.Credentials` | |

##### 4.3.6.2 Return type

This activity returns an `AWSTwinMakerConnector.GetPropertyValueHistoryResponse` entity.

#### 4.3.7 Microflow ListWorkspaces  {#list-workspace}

Retrieves the list of workspaces in the current account.

For more information, see [ListWorkspaces](https://docs.aws.amazon.com/iot-TwinMaker/latest/apireference/API_ListWorkspaces.html).

##### 4.3.7.1 Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ListWorkspacesRequest` | `AWSTwinMakerConnector.ListWorkspacesRequest` | |
| `ENUM_Region` | Enumeration `AWSAuthentication.ENUM_Region` | |
| `Credentials` | `AWSAuthentication.Credentials` | |

##### 4.3.7.2 Return type

This activity returns an `AWSTwinMakerConnector.ListWorkspacesResponse` entity.

#### 4.3.8 Microflow ListComponentTypes

Lists all component types in a workspace.

For more information, see [ListComponentTypes](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypes.html).

##### 4.3.8.1 Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ListComponentTypeRequest` | `AWSTwinMakerConnector.ListComponentTypeRequest` | |
| `ENUM_Region` | Enumeration `AWSAuthentication.ENUM_Region` | |
| `Credentials` | `AWSAuthentication.Credentials` | |

##### 4.3.8.2 Return type

This activity returns an `AWSTwinMakerConnector.ListComponentTypeResponse` entity.

#### 4.3.9 Microflow GetScene

Gets information about a specific scene.

For more information, see [GetScene](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html).

##### 4.3.9.1 Parameters

| Name | Type | Description |
| --- | --- | --- |
| `GetSceneRequest` | `AWSTwinMakerConnector.GetSceneRequest` | |
| `ENUM_Region` | Enumeration `AWSAuthentication.ENUM_Region` | |
| `Credentials` | `AWSAuthentication.Credentials` | |

##### 4.3.9.2 Return type

This activity returns an `AWSTwinMakerConnector.GetSceneResponse` entity.

#### 4.3.10 Microflow ListScenes

Retrieves the list of scenes in a workspace.

For more information, see [ListScenes](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListScenes.html).

##### 4.3.10.1 Parameters

| Name | Type | Description |
| --- | --- | --- |
| `ListSceneRequest` | `AWSTwinMakerConnector.ListScenesRequest` | |
| `ENUM_Region` | Enumeration `AWSAuthentication.ENUM_Region` | |
| `Credentials` | `AWSAuthentication.Credentials` | |

##### 4.3.10.2 Return type

This activity returns an `AWSTwinMakerConnector.ListScenesResponse` entity.
