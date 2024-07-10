---
title: "Amazon DynamoDB"
url: /appstore/modules/aws/amazon-dynamodb/
description: "Describes the configuration and usage of the Amazon DynamoDB connector from the Mendix Marketplace. Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale."
weight: 20
aliases:
    - /appstore/connectors/amazon-dynamodb/
    - /appstore/connectors/aws/amazon-dynamodb/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon DynamoDB](https://marketplace.mendix.com/link/component/204872) connector provides a way for you to increase the security, scalability, and performance of your Mendix app by implementing [Amazon DynamoDB](https://aws.amazon.com/dynamodb/).

### 1.1 Typical Use Cases

Amazon DynamoDB helps improve your app by giving you the tools to build scalable, performant applications on a flexible, serverless database. You can use it to develop high-traffic online platforms and applications for a variety of modern industries, such as content streaming, electronic commerce, or gaming.

### 1.2 Prerequisites {#prerequisites}

The Amazon DynamoDB connector requires Mendix Studio Pro 9.18.0 or above.

To use the Amazon DynamoDB connector, you must also install and configure the following modules:

* [AWS Authentication connector version 2.0 or higher](https://marketplace.mendix.com/link/component/120333) - This connector is required to authenticate with Amazon Web Services (AWS). It is crucial for the Amazon DynamoDB connector to function correctly. If you are using the Amazon DynamoDB connector version 2.0 or higher, it requires the AWS Authentication connector version 3.0 or higher. It is crucial for the Amazon S3 connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).
* [Community Commons module](https://marketplace.mendix.com/link/component/170) - This module is required to parse the `creationDateTime` attribute as returned by the `DescribeTable` activity.

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the Amazon DynamoDB connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonDynamoDBConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon DynamoDB. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the Amazon DynamoDB service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon DynamoDB, you can implement the functions of the connector by using the provided activities in microflows. For example, to list all Amazon DynamoDB tables for a specific region, implement the [ListTables](#list-tables) activity by doing the following steps:

1. In the **App Explorer**, find and open the domain model for your app.
2. Right-click on the working area of the domain model, and then click **Add entity**.

    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/addentity.png" alt="Adding a new entity to the domain model" class="no-border" >}}

3. Open the new entity by double-clicking on it.
4. Enter a name for the entity, for example, `DBTable`.
5. In the **Attributes** section, click **New**, and then configure the attribute in the following way:
    * **Name** - A unique name for the attribute, for example, `TableName`
    * **Type** - **String**

    The parameters that you need to configure depend on the contents of the response that an activity expects. The **ListTables** activity used in this example only expects the database table name as a response. Other activities require different parameters. For more information, see [Activities](#activities).
6. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
    
    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/addmicroflow.png" alt="Adding a microflow" class="no-border" >}}

7. Enter a name for your microflow, for example, *DS_ListTables*, and then click **OK**.
8. In the **App Explorer**, in the **AmazonDynamoDBConnector** > **Operations** section, find the **ListTables** activity.
9. Drag the **ListTables** activity onto the work area of your microflow.

    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/listtables.png" alt="The DS_ListTables microflow with the ListTables activity" class="no-border" >}}

10. In the **Properties** pane for the microflow, in the **Security** section, select a user role that should be allowed to run the microflow.

    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/microflowsecurity.png" alt="The Properties pane of a microflow" class="no-border" >}}

11. Double-click the **ListTables** activity to configure the required parameters.
  
    For the `ListTables` activity, you must specify the region for which you want to retrieve the tables from, a `Credentials` object and a `ListTablesRequest` object. Other activities may have different required parameters.
    
12. Click **Edit parameter value**, edit the **ENUM_Region** parameter, and change **Type** to **Expression**.
13. In the expression builder, type `ENUM_Region`, and then press **Ctrl+Space**.
14. In the autocomplete dialog, select **AWSAuthentication.ENUM_Region**, then type *.* and select your AWS region from the list.
15. Click **OK**, and then click **OK** again.
16. In the App Explorer, in the **AWSAuthentication > ConnectionDetails** section, find the **GetStaticCredentials** and **GetTemporaryCredentials** actions.
17. Drag the one you would like to use onto the microflow you are working on, and position it between the microflow start event and the **ListTables** activity.
18. Double-click the microflow action and then configure the required **ENUM_Region** parameter in the same way as described in step 5.
19. Double-click the **ListTables** activity and configure the **Credentials** parameter by doing the following steps:

    * Click **Edit parameter value**.
    * Edit the **Credentials** parameter and let it auto-fill.

20. In the **Toolbox** pane, search for the **Create Object** activity, drag it onto the microflow area, and position it between the **GetStaticCredentials** or **GetTemporaryCredentials** and the **ListTables** activity.
21. Double-click the **Create Object** activity, and then select **AmazonDynamoDBConnector.ListTablesRequest** as the entity.
22. Double-click the **CreateBucket** activity and configure the **CreateBucketRequest** parameter by doing the following steps:

    * Click **Edit parameter value**.
    * Edit the **CreateBucketRequest** parameter and let it auto-fill.

23. In the **Toolbox** pane, search for the **Retrieve** activity and drag it onto the microflow area.
24. Position the **Retrieve** activity between the **ListTables** activity and the microflow end event.

    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/microflow.png" alt="The microflow with the Retrieve activity added" class="no-border" >}}

25. Double-click the **Retrieve** activity.
26. In the **Association** section, click **Select**.
27. In the **Select Association** dialog box, expand the **Variable** item, and then select **ListTablesResponse** as the association.

    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/selectassociation.png" alt="Selecting the association" class="no-border" >}}

28. Click **OK**.
29. In the **Toolbox** pane, search for the **Create list** activity and drag it onto the microflow area.
30. Position the **Create list** activity between the microflow start event and the **ListTables** activity.

    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/createlist.png" alt="The microflow with the Create list activity added" class="no-border" >}}

31. Double-click the **Create list** activity.
32. In the **Entity** section, click **Select**.
33. In the **Select Entity** dialog box, select the entity that you previously added to your domain model, for example, `DBTable`.

    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/selectentity.png" alt="Selecting the entity" class="no-border" >}}

34. In the **Toolbox** pane, search for the **Loop** activity and drag it onto the microflow area.
35. Position the **Loop** activity before the microflow end event.

    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/addloop.png" alt="The microflow with the loop added" class="no-border" >}}

36. Double-click the **Loop** activity.
37. In the **Iterate over** list, select **ListTableList**.

    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/editloop.png" alt="Selecting the entity to iterate over" class="no-border" >}}

38. In the **Toolbox** pane, search for the **Create object** activity and drag it inside the loop area.

    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/createobject.png" alt="The microflow with the Create activity added" class="no-border" >}}

39. Double-click the **Create object** activity.
40. In the **Entity** section, click **Select**.
41. In the **Select Entity** dialog box, select the entity that you previously added to your domain model, for example, `DBTable`, and then click **Select**.
42. In the **Create Object** dialog box, click **New**.
43. In the **Edit Change Item** dialog box, in the **Member** drop-down, select the attribute that you previously created, for example, `TableName`.
44. In the expression editor, type `$IteratorListTable/TableName`, and then click **OK**.
45. In the **Toolbox** pane, search for the **Change List** activity and drag it inside the loop area, to the right of the **Create Object** activity.
46. Double-click the **Change List** activity, and then set the following values:

    * **Type** - **Add**
    * **Value** - The created object, for example, `$NewDBTable`
    
47. Double-click the end event of your microflow, and then set the following values:

    * **Type** - **List**
    * **Entity** - The entity that you previously added to your domain model, for example, `DBTable`
      
48. Right-click the **Create List** activity, and then click **Set {TableName}** as return value.
49. In the **App Explorer**, right-click on the name of your module, and then click **Add page**.
50. In the **Lists** category, select the **List** template for the page.
51. Enter a name for your page, for example, *Table_Overview*, and then click **OK**.
52. On the page, double-click the **List view** widget.

    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/listview.png" alt="The List view widget" class="no-border" >}}

53. In the **Select Data Source** dialog, set the **Type** to **Microflow**.
54. In the **Microflow** field, select the **DS_ListTables** microflow.
55. Click **OK**, and then click **Yes**.
56. In the **Properties** pane for the page, in the **Navigation** > **Visible for** section, select a user role that should be allowed to run the microflow.
57. In the **App Explorer**, double-click the **Navigation** for your app.
58. In the Menu section, click **New Item**.
59. In the **New Menu Item** dialog, configure the following settings:

    * **Caption** - A caption for the navigation item, for example, *Table*
    * **Icon** - An icon that will be displayed for this page in the navigation for your app
    * **On click** - **Show a page**
    * **Page** - Your **Table_Overview** page

    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/navigation.png" alt="The New Menu Item dialog" class="no-border" >}}

60. Click **OK**.

    {{< figure src="/attachments/appstore/use-content/modules/aws-dynamodb/microflow2.png" alt="The microflow after mapping the properties" class="no-border" >}}
    
61. Click **Run Locally** ({{% icon name="controls-play" %}}) to preview your app and validate your results. For more information, see [Studio Pro Overview: Run and View App](/refguide/studio-pro-overview/#menus).

## 4 Technical Reference

To help you work with the Amazon DynamoDB connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

#### 4.1.1 AbstractItem

This generalization entity holds information of items inside Amazon DynamoDB. Each item represents a row in a table. Each item at least has one KeyValue object.

| Name | Documentation |
| --- |  --- |
| N/A | The `AbstractItem` entity has no attributes. |

#### 4.1.2 AbstractKey
  
| Name | Documentation |
| --- |  --- |
| `Key` | |

#### 4.1.3 KeyValueString
  
| Name | Documentation |
| --- | --- |
| `StringValue` | The `StringValue` attribute describes an attribute of type String. |

#### 4.1.4 KeyValueLong
  
| Name | Documentation |
| --- | --- |
| `LongValue` | The `LongValue` attribute describes an attribute of type Long. |

#### 4.1.5 KeyValueDecimal

| Name | Documentation |
| --- | --- |
| `DecimalValue` | The DecimalValue attribute describes an attribute of type Decimal. |

#### 4.1.6 KeyValueBoolean
  
| Name | Documentation |
| --- | --- |
| `BooleanValue` | The `BooleanValue` attribute describes an attribute of type boolean. |

#### 4.1.7 DescribeTableRequest
  
| Name | Documentation |
| --- | --- |
| `TableName` | The `TableName` attribute describes the table name and is a required parameter. |

#### 4.1.8 DescribeTableResponse
  
| Name | Documentation |
| --- | --- |
| `ItemCount` | The `ItemCount` attribute describes the number of items in the specified table. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value. |
| `CreationDateTime` | The `CreationDateTime` attribute describes the date and time when the table was created, in UNIX epoch time format. |
| `TableARN` | The `TableARN` attribute describes the Amazon Resource Name (ARN) that uniquely identifies the table. |
| `TableId` | The `TableId` attribute describes the unique identifier for the table for which the backup was created. |
| `TableStatus` | The `TableStatus` attribute describes the current state of the table. |
| `TableName` | The `TableName` attribute describes the table name. |

#### 4.1.9 AttributeDefinition

| Name | Documentation |
| --- | --- |
| `AttributeType` | The `AttributeType` attribute describes the data type for the attribute. |

#### 4.1.10 KeySchemaElement
  
| Name | Documentation |
| --- | --- |
| `KeyType` | The `KeyType` attribute describes the role of the attribute. |

#### 4.1.11 DeleteItemRequest
  
| Name | Description |
| ---  | --- |
| `ConditionExpression` |  The `ConditionExpression` attribute describes a condition that must be satisfied in order for a conditional `DeleteItem` to succeed. |
| `TableName` | The `TableName` attribute describes the table name and is a required parameter. |

#### 4.1.12 DeleteItem

| Name | Description |
| ---  | --- |
| N/A |  Entity `DeleteItem` has no attributes, it inherits from `AbstractItem`. |

#### 4.1.13 ExpressionAttributeName
  
| Name | Documentation |
| --- | --- |
| Placeholder | N/A |

#### 4.1.14 DeleteItemResponse

| Name | Description |
| ---  | --- |
| N/A |  Entity `DeleteItemResponse` has no attributes. |

#### 4.1.15 ListTablesRequest
  
| Name | Documentation |
| --- | --- |
| `ExclusiveStartTableName` | The `ExclusiveStartTableName` attribute describes the first table name that this operation will evaluate. Use the value that was returned for `LastEvaluatedTableName` in a previous operation, so that you can obtain the next page of results. |
| `Limit` | The `Limit` attribute describes a maximum number of table names to return. If this parameter is not specified, the limit is 100. |

#### 4.1.16 ListTablesResponse
  
| Name | Documentation |
| --- | --- |
| `LastEvaluatedTableName` | The `LastEvaluatedTableName` attribute describes the name of the last table in the current page of results. Use this value as the `ExclusiveStartTableName` in a new request to obtain the next page of results, until all the table names are returned. |

#### 4.1.17 Table
  
| Name | Documentation |
| --- | --- |
| `TableName` | The `TableName` attribute describes the table name. |

#### 4.1.18 BatchGetItemRequest
  
| Name | Documentation |
| --- | --- |
| `isConsistentRead` | The `isConsistentRead` attribute describes the consistency of a read operation. If set to true, then a strongly consistent read is used; otherwise, an eventually consistent read is used. |

#### 4.1.19 RequestTable
  
| Name | Documentation |
| --- | --- |
| `TableName` | The `TableName` attribute describes the table name and is a required parameter. |
| `ProjectionExpression` | The `ProjectionExpression` attribute describes a string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the `ProjectionExpression` must be separated by commas. |

#### 4.1.20 BatchGetRequestedItem

| Name | Documentation |
| --- | --- |
| N/A | Entity `BatchGetRequestedItem` has no attributes, it inherits from `AbstractItem`. |

#### 4.1.21 BatchGetItemResponse

| Name | Documentation |
| --- | --- |
| N/A | Entity `BatchGetItemResponse` has no attributes. |

#### 4.1.22 ResponseTable
  
| Name | Documentation |
| --- | --- |
| `TableName` | The `TableName` attribute describes the table name. |

#### 4.1.23 BatchGetResponseItem

| Name | Documentation |
| --- | --- |
| N/A | Entity `BatchGetResponseItem` has no attributes, it inherits from `AbstractItem`. |

#### 4.1.24 ScanRequest
  
| Name | Documentation |
| --- | --- |
| `Limit` | The `Limit` attribute describes the maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, and a key in LastEvaluatedKey to apply in a subsequent operation, so that you can pick up where you left off. Also, if the processed dataset size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in LastEvaluatedKey to apply in a subsequent operation to continue the operation. |
| `IndexName` | The `IndexName` attribute describes the name of a secondary index to scan. This index can be any local secondary index or global secondary index. Note that if you use the IndexName parameter, you must also provide TableName. |
| `TableName` | The `TableName` attribute describes the name of the table containing the requested items; or, if you provide the `IndexName`, the name of the table to which that index belongs and is a required parameter. |

#### 4.1.25 Condition
  
| Name  | Documentation |
| --- | --- |
| `ComparisonOperator` | The `ComparisonOperator` attribute describes a comparator for evaluating attributes. For example, equals, greater than, less than, etc. and is a required parameter. |

#### 4.1.26 ScanTableValueString
  
| Name | Documentation |
| --- | --- |
| `StringValue` | The StringValue attribute describes an attribute of type String. |

#### 4.1.27 ScanTableValueDecimal

| Name |  Documentation |
| --- | --- |
| `DecimalValue` | The `DecimalValue` attribute describes an attribute of type Decimal. |

#### 4.1.28 ScanTableValueLong

| Name | Documentation |
| --- | --- |
| `LongValue` | The LongValue attribute describes an attribute of type Long. |

#### 4.1.29 ScanTableValueBoolean
  
| Name | Documentation |
| --- | --- |
| `BooleanValue` | The `BooleanValue` attribute describes an attribute of type Boolean. |

#### 4.1.30 ScanResponse
  
| Name | Documentation |
| --- | --- |
| `TableName` | The `TableName` attribute describes the table name. |

#### 4.1.31 ScanItem

| Name | Documentation |
| --- | --- |
| N/A | Entity `ScanItem` has no attributes, it inherits from `AbstractItem`. |

#### 4.1.32 BatchWriteItemRequest

| Name | Documentation |
| --- | --- |
| N/A | Entity `BatchWriteItemRequest` has no attributes. |

#### 4.1.33 TableWithItemsToAdd
  
| Name | Documentation |
| --- | --- |
| `TableName` | The `TableName` attribute describes the table name and is a required parameter. |

#### 4.1.34 ItemToAdd

| Name | Documentation |
| --- | --- |
| N/A | Entity `ItemToAdd` has no attributes, it inherits from `AbstractItem`. |

#### 4.1.35 TableWithItemsToDelete
  
| Name |  Documentation |
| --- | --- |
| `TableName` | The `TableName` attribute describes the table name and is a required parameter. |

#### 4.1.36 ItemToDelete

| Name | Documentation |
| --- | --- |
| N/A | Entity `ItemToDelete` has no attributes, it inherits from `AbstractItem`. |

#### 4.1.37 BatchWriteItemResponse

| Name | Documentation |
| --- | --- |
| N/A | Entity `BatchWriteItemResponse` has no attributes. |

#### 4.1.38 GetItemRequest
  
| Name | Documentation |
| --- | --- |
| `TableName` | The `TableName` attribute describes the table name and is a required parameter. |
| `isConsistentRead` | The `isConsistentRead` attribute describes the read consistency model. If set to true, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads. |

#### 4.1.39 GetItem

| Name | Documentation |
| --- | --- |
| N/A | Entity `GetItem` has no attributes, it inherits from `AbstractItem`. |

#### 4.1.40 GetItemResponse

| Name | Documentation |
| --- | --- |
| N/A | Entity `GetItemResponse` has no attributes, it inherits from `AbstractItem`. |

#### 4.1.41 PutItemRequest
  
| Name | Documentation |
| --- | --- |
| `TableName` | The `TableName` attribute describes the table name and is a required parameter. |

#### 4.1.42 PutItem

 Name | Documentation |
| --- | --- |
| N/A | Entity `PutItem` has no attributes, it inherits from `AbstractItem`. |

#### 4.1.43 PutItemResponse

 Name | Documentation |
| --- | --- |
| N/A | Entity `PutItemResponse` has no attributes. |

### 4.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the Amazon DynamoDB connector, enumerations list values such as the status of database tables.

#### 4.2.1 `ENUM_BooleanValue`

| Name | Caption | Description |
| --- | --- | --- |
| `_TRUE` | **TRUE** | The enumeration element if a key-value pair is of the type Boolean and is set to true |
| `_FALSE` | **FALSE** | The enumeration element if a key-value pair is of the type Boolean and is set to false |

#### 4.2.2 `ENUM_TableStatus`

| Name | Caption | Description |
| --- | --- | --- |
| `CREATING` | **CREATING** | The enumeration element that shows the status of a table that is being created |
| `UPDATING` | **UPDATING** | The enumeration element that shows the status of a table that is being updated |
| `DELETING` | **DELETING** | The enumeration element that shows the status of a table that is being deleted |
| `ACTIVE` | **ACTIVE** | The enumeration element that shows the status of a table that is active |
| `INACCESSIBLE_ENCRYPTION_CREDENTIALS` | **INACCESSIBLE_ENCRYPTION_CREDENTIALS** | The enumeration element that shows the status of a table that has an inaccessible AWS KMS key. Table operations may fail due to this |

#### 4.2.3 `ENUM_KEY`

| Name | Caption | Description |
| --- | --- | --- |
| `HASH` | **HASH (partition)** | The enumeration element that reflects the partition key of a table |
| `RANGE` | **RANGE (sort)** | The enumeration element that reflects the sort key of a table |
| `UNKNOWN_TO_SDK_VERSION` | **UNKNOWN_TO_SDK_VERSION** | The enumeration element that reflects an unknown key schema element |

#### 4.2.4 `ENUM_AttributeType`

| Name | Caption | Description |
| --- | --- | --- |
| `String` | **String** | The enumeration element that reflects native data type of string |
| `Number` | **Number** | The enumeration element that reflects native data type of a number (decimal or long) |
| `Binary` | **Binary** | The enumeration element that reflects native data type of a binary file expressed as a string |

#### 4.2.5 `ENUM_ComparisonOperator`

For more information on using comparison operators, please visit [Amazon DynamoDB docs](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Condition.html).
| Name | Caption | Description |
| --- | --- | --- |
|`BEGINS_WITH` | **BEGINS_WITH** | The enumeration element that evaluates items for a prefix |
| `BETWEEN` | **BETWEEN** | The enumeration element that evaluates items between two given items, where the first item must be smaller than the second |
| `CONTAINS` | **CONTAINS** | The enumeration element that evaluates items for a subsequence or value in a set |
| `EQ` | **EQUAL** | The enumeration element that evaluates items against an item. This comparison operator supports all data types, including lists and maps |
| `GE` | **GREATER_THAN_OR_EQUAL** | The enumeration element that evaluates whether items are greater than or equal to the key-value pair |
| `GT` | **GREATER_THAN** | The enumeration element that evaluates whether items are greater than the key-value pair |
| `IN` | **IN** | The enumeration element that evaluates whether items match elements in a list |
| `LE` | **LESS_THAN_OR_EQUAL** | The enumeration element that evaluates whether items are less than or equal to the key-value pair |
| `LT` | **LESS_THAN** | The enumeration element that evaluates whether items are less than the key-value pair |
| `NE` | **NOT_EQUAL** | The enumeration element that evaluates whether items are unequal to the key-value pair |
| `NOT_CONTAINS` | **NOT_CONTAINS** | The enumeration element that evaluates items for absence of a subsequence, or absence of a value in a set |
| `NOT_NULL` | **NOT_NULL** | The enumeration element that evaluates whether items are not null. This comparison operator supports all data types, including lists and maps |
| `_NULL` | **NULL** | The enumeration element that evaluates whether items have the attribute. This comparison operator supports all data types, including lists and maps |

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon DynamoDB connector, they represent the actions that can be performed on DynamoDB database tables.

#### 4.3.1 BatchGetItem

The `BatchGetItem` Amazon DynamoDB activity allows you to get multiple items from DynamoDB in a single call. It requires a valid AWS Region, a `Credentials` object and a `BatchGetItemRequest` object that contains the tables from which the item must be fetched. You must also specify whether the activity should perform a consistent read, and provide a list of keys to query from.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `BatchGetItemRequest` (Object) | `BatchGetItemResponse` (Object) |
| `Region` (Enumeration) | |
| `Credentials` (Object) | |

#### 4.3.2 ListTables {#list-tables}

The `ListTables` Amazon DynamoDB activity allows you to retrieve a list of `Table` objects for a given region, which contains the table's name. It requires a valid AWS Region, a `Credentials` object and a `ListTablesRequest` object.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ListTablesRequest` (Object) | `ListTablesResponse` (Object) |
| `Region` (Enumeration) | |
| `Credentials` (Object) | |

#### 4.3.3 DescribeTable

The `DescribeTable` Amazon DynamoDB activity allows you to get a description from a given table inside DynamoDB. It requires a valid AWS Region, a `Credentials` object and a `DescribeTableRequest` object. It returns a `DescribeTableResponse` object which includes the `Name`, `ItemCount`, `CreationDateTime`, `TableARN`, `TableId` and `TableStatus`, as well as a list of `AttributeDefinitions` and `KeySchemaElements`.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `DescribeTableRequest` (Object) | `DescribeTableResponse` (Object) |
| `Region` (Enumeration) | |
| `Credentials` (Object) | |

#### 4.3.4 BatchWriteItem

The `BatchWriteItem` Amazon DynamoDB activity allows you to put or delete multiple items from DynamoDB in a single call. It requires a valid AWS Region, a `Credentials` object and a `BatchWriteItemRequest` object containing the tables from which the item needs to be put or deleted.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `BatchWriteItemRequest` (Object) | `BatchWriteItemResponse` (Object) |
| `Region` (Enumeration) | |
| `Credentials` (Object) | |

#### 4.3.5 DeleteItem

The `DeleteItem` Amazon DynamoDB activity allows you to delete an item from a given table from your DynamoDB environment. It requires a valid AWS region, a `Credentials` object and a `DeleteItemRequest` object with a `DeleteItem` object associated to it. If the given table has only a partition key, the `DeleteItem` object should have a `KeyValue` object that that refers to the row that to be deleted. If the given table has both a partition and sort key, the `DeleteItem` object must have two `KeyValue` objects.

Optionally, you can include a condition expression. The delete activity is then only performed when the condition returns true. Additionally, you can include an expression attribute list to escape reserved words.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `DeleteItemRequest` (Object) | `DeleteItemResponse` (Object) |
| `Region` (Enumeration) | |
| `Credentials` (Object) | |

#### 4.3.6 ScanTable

The `ScanTable` Amazon DynamoDB activity allows you to retrieve items from an Amazon DynamoDB table. It requires a valid AWS Region, a `Credentials` object and a `ScanTableRequest` object. Optional parameters (attributes within `ScanTableRequest`) are the limit (how much data is retrieved in each batch), as well as the index name (the name of the secondary global index of the given table). This activity returns a `ScanTableResponse` object with a list of items associated with it.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ScanTableRequest` (Object) | `ScanTableResponse` (Object) |
| `Region` (Enumeration) | |
| `Credentials` (Object) | |

#### 4.3.7 PutItem

The `PutItem` Amazon DynamoDB activity allows you to put and update an item in DynamoDB. It requires a valid AWS Region, `Credentials` object, and an `PutItemRequest` object with a `PutItem` object associated to it. If the table has only a partition key, then only one `KeyValue` object is required inside the `PutItem` object. If the table has both a partition and sort key, then two `KeyValue` objects are required.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `PutItemRequest` (Object) | `PutItemResponse` (Object) |
| `Region` (Enumeration) | |
| `Credentials` (Object) | |

#### 4.3.8 GetItem

The `GetItem` Amazon DynamoDB activity allows you to get an item from DynamoDB. It requires a valid AWS Region, a `Credentials` object, and a `GetItemRequest` with a `GetItem` object associated to it.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `GetItemRequest` (Object) | `GetItemResponse` (Object) |
| `Region` (Enumeration) | |
| `Credentials` (Object) | |
