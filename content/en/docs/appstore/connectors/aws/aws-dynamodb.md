---
title: "Amazon DynamoDB"
url: /appstore/connectors/aws/amazon-dynamodb/
description: "Describes the configuration and usage of the Amazon DynamoDB connector from the Mendix Marketplace. Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale."
weight: 20
tags: ["marketplace", "marketplace component", "amazon", "dynamodb", "connector"]
aliases:
    - /appstore/connectors/amazon-dynamodb/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon DynamoDB connector](https://marketplace.mendix.com/link/component/204872) provides a way for you to increase the security, scalability, and performance of your Mendix app by implementing [Amazon DynamoDB](https://aws.amazon.com/dynamodb/).

### 1.1 Typical Use Cases

Amazon DynamoDB helps improve your app by giving you the tools to build scalable, performant applications on a flexible, serverless database. You can use it to develop high-traffic online platforms and applications for a variety of modern industries, such as content streaming, electronic commerce, or gaming.

### 1.2 Prerequisites

To use the Amazon DynamoDB connector, you must first install and configure the following modules:

* [AWS Authentication connector version 2.0 or higher](https://marketplace.mendix.com/link/component/120333) - This connector is required to authenticate with Amazon Web Services (AWS). It is crucial for the Amazon DynamoDB connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
* [Community Commons module](https://marketplace.mendix.com/link/component/170) - This module is required to parse the `creationDateTime` attribute as returned by the `DescribeTable` activity.

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon DynamoDB connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonDynamoDBConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon DynamoDB. Each activity can be implemented by using it in a microflow.

For example, to list all Amazon DynamoDB tables for a specific region, implement the [ListTables](#list-tables) activity by doing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_ListTables*, and then click **OK**.
3. In the **App Explorer**, in the **Amazon DynamoDBConnector** > **Operations** section, find the **ListTables** activity.
4. Drag the **ListTables** activity onto the work area of your microflow.
5. Double-click the **ListTables** microflow activity to configure the required parameters.
    For the `ListTables` activity, you must specify the region for which you want to retrieve the tables. Other activities may have different required parameters.
6. In the **Edit parameters** section, edit the **AWS_Region** parameter, and provide a value by using a variable or an expression.
    For a list of available AWS regions, see [AWS_Region](#aws-region).
7. Click **OK**.
8. In the **Toolbox** pane, search for the **Retrieve** activity and drag it onto the microflow area.
9. Position the **Retrieve** activity between the **ListTables** activity and the microflow end event.
10. Double-click the **Retrieve** activity.
11. In the **Select Association** dialog box, in the **Association** section, click **Select**, and then select **ListTablesResponse** as the association.
12. Click **OK**.
13. Configure a method for triggering the **ACT_ListTables** microflow.
    For example, you can trigger a microflow by associating it with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).

To help you work with the Amazon DynamoDB connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 3.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

The entities in the table below describe all generalizations. These are reused by the different models for the specific microflow activities or for storing connection details.

| Name | Description |
| --- | --- |
| `Table` | This generalization entity holds information for a given table. The attribute it contains is `Name`, which is the name of the table inside of Amazon DynamoDB. |
| `Key` | This generalization entity holds information for the key in a key-value pair. The sole purpose of this entity is to be specialized from. Values in DynamoDB are stored in key-value pairs and the connector returns the data in its native type. |
| `Item` | This generalization entity holds information of items inside Amazon DynamoDB. Each item represents a row in a table. Each item at least has one `KeyValue` object. |
| `KeyValueLong` | This generalization entity holds information for a key-value pair for a given Item. The attribute it contains is `LongValue`, which is a numeric representation of value in a key-value pair. |
| `KeyValueDecimal` | This generalization entity holds information for a key-value pair for a given Item. The attribute it contains is `DecimalValue`, which is a numeric representation of value in a key-value pair. |
| `KeyValueBoolean` | This generalization entity holds information for a key-value pair for a given Item. The attribute it contains is `BooleanValue`, which is a Boolean representation of value in a key-value pair. |
| `KeyValueString` | This generalization entity holds information for a key-value pair for a given Item. The attribute it contains is `StringValue`, which is a string representation of value in a key-value pair. |

### 3.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the Amazon DynamoDB connector, enumerations list values such as the status of database tables, or the list of available AWS regions.

#### 3.2.1 `ENUM_BooleanValue`

| Name | Caption | Description |
| --- | --- | --- |
| `_TRUE` | **TRUE** | The enumeration element if a key-value pair is of the type Boolean and is set to true |
| `_FALSE` | **FALSE** | The enumeration element if a key-value pair is of the type Boolean and is set to false |

#### 3.2.2 `ENUM_TableStatus`

| Name | Caption | Description |
| --- | --- | --- |
| `CREATING` | **CREATING** | The enumeration element that shows the status of a table that is being created |
| `UPDATING` | **UPDATING** | The enumeration element that shows the status of a table that is being updated |
| `DELETING` | **DELETING** | The enumeration element that shows the status of a table that is being deleted |
| `ACTIVE` | **ACTIVE** | The enumeration element that shows the status of a table that is active |
| `INACCESSIBLE_ENCRYPTION_CREDENTIALS` | **INACCESSIBLE_ENCRYPTION_CREDENTIALS** | The enumeration element that shows the status of a table that has an inaccesible AWS KMS key. Table operations may fail due to this |

#### 3.2.3 `ENUM_KEY`

| Name | Caption | Description |
| --- | --- | --- |
| `HASH` | **HASH (partition)** | The enumeration element that reflects the partition key of a table |
| `RANGE` | **RANGE (sort)** | The enumeration element that reflects the sort key of a table |
| `UNKNOWN_TO_SDK_VERSION` | **UNKNOWN_TO_SDK_VERSION** | The enumeration element that reflects an unknown key schema element |

#### 3.2.4 `ENUM_AttributeType`

| Name | Caption | Description |
| --- | --- | --- |
| `String` | **String** | The enumeration element that reflects native data type of string |
| `Number` | **Number** | The enumeration element that reflects native data type of a number (decimal or long) |
| `Binary` | **Binary** | The enumeration element that reflects native data type of a binary file expressed as a string |

#### 3.2.5 `ENUM_ComparisonOperator`
For more information on using comparison operators, please visit [Amazon DynamoDB docs](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Condition.html).
| Name | Caption | Description |
| --- | --- | --- |
|`BEGINS_WITH` | **BEGINS_WITH** | The enumeration element that evaluates items for a prefix |
| `BETWEEN` | **BETWEEN** | The enumeration element that evaluates items between two given items, where the first item must be smaller than the second |
| `CONTAINS` | **CONTAINS** | The enumeration element that evaluates items for a subsequence or value in a set |
| `EQ` |    **EQUAL** | The enumeration element that evaluates items against an item. This comparison operator supports all data types, including lists and maps |
| `GE` |    **GREATER_THAN_OR_EQUAL** | The enumeration element that evaluates whether items are greater than or equal to the key-value pair |
| `GT` |    **GREATER_THAN** | The enumeration element that evaluates whether items are greater than the key-value pair |
| `IN` |    **IN** | The enumeration element that evaluates whether items match elements in a list |
| `LE` |    **LESS_THAN_OR_EQUAL** | The enumeration element that evaluates whether items are less than or equal to the key-value pair |
| `LT` |    **LESS_THAN** | The enumeration element that evaluates whether items are less than the key-value pair |
| `NE` |    **NOT_EQUAL** | The enumeration element that evaluates whether items are unequal to the key-value pair |
| `NOT_CONTAINS` |    **NOT_CONTAINS** | The enumeration element that evaluates items for absence of a subsequence, or absence of a value in a set |
| `NOT_NULL` |    **NOT_NULL** | The enumeration element that evaluates whether items are not null. This comparison operator supports all data types, including lists and maps |
| `_NULL` |    **NULL** | The enumeration element that evaluates whether items have the attribute. This comparison operator supports all data types, including lists and maps |

#### 3.2.6 `AWS_Region` {#aws-region}

| Name | Caption |
| --- | --- |
| `us_east_2` |    **US East (Ohio)** |
| `us_east_1` |    **US East (N. Virginia)** |
| `us_west_1` |    **US West (N. California)** |
| `us_west_2` |    **US West (Oregon)** |
| `af_south_1` |    **Africa (Cape Town)** |
| `ap_east_1` |    **Asia Pacific (Hong Kong)** |
| `ap_southeast_3` |    **Asia Pacific (Jakarta)** |
| `ap_south_1` |    **Asia Pacific (Mumbai)** |
| `ap_northeast_3` |    **Asia Pacific (Osaka)** |
| `ap_northeast_2` |    **Asia Pacific (Seoul)** |
| `ap_southeast_1` |    **Asia Pacific (Singapore)** |
| `ap_southeast_2` |    **Asia Pacific (Sydney)** |
| `ap_northeast_1` |    **Asia Pacific (Tokyo)** |
| `ca_central_1` |    **Canada (Central)** |
| `eu_central_1` |    **Europe (Frankfurt)** |
| `eu_west_1` |    **Europe (Ireland)** |
| `eu_west_2` |    **Europe (London)** |
| `eu_south_1` |    **Europe (Milan)** |
| `eu_west_3` |    **Europe (Paris)** |
| `eu_north_1` |    **Europe (Stockholm)** |
| `me_south_1` |    **Middle East (Bahrain)** |
| `sa_east_1` |    **South America (São Paulo)** |

### 3.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon DynamoDB connector, they represent the actions that can be performed on DynamoDB database tables.

#### 3.3.1 Batch Get Item

The `BatchGetItem` Amazon DynamoDB activity allows you to get multiple items from DynamoDB in a single call. It requires a valid AWS Region and a response entity that contains the tables from which the item must be fetched. You must also specify whether the activity should perform a consistent read, and provide a list of keys to query from.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `BatchGetItemRequest (Object)` | `BatchGetItemResponse (Object)` |
| `IsConsistentRead (Boolean)` | |

This activity returns a `BatchGetItemResponse` object with objects from the following entities, as shown in the table below:

| Name |    Generalization |    Documentation |
| --- | --- | --- |
| `RequestTable` | `AmazonDynamoDBConnector.Table` | This entity holds the references of which items are to be retrieved. The attribute it contains is `ProjectionExpression`, which is a string that identifies the attributes that one wants to retrieve. |
| `ResponseTable` | `AmazonDynamoDBConnector.Table` | This entity holds information for the item retrieval. It contains a list of items, each of which contain a list of key-value pairs. |
| `Item` | | This generalization entity holds information of items inside Amazon DynamoDB. Each item represents a row in a table. Each item at least has one `KeyValue` object. |
| `KeyValueLong` | | This generalization entity holds information for a key-value pair for a given `Item`. The attribute it contains is `LongValue`, which is a numeric representation of value in a key-value pair. |
| `KeyValueDecimal` | | This generalization entity holds information for a key-value pair for a given `Item`. The attribute it contains is `DecimalValue`, which is a numeric representation of value in a key-value pair. |
| `KeyValueBoolean` | | This generalization entity holds information for a key-value pair for a given `Item`. The attribute it contains is `BooleanValue`, which is a Boolean representation of value in a key-value pair. |
| `KeyValueString` | | This generalization entity holds information for a key-value pair for a given `Item`. The attribute it contains is `StringValue`, which is a string representation of value in a key-value pair. |

#### 3.3.2 List Tables {#list-tables}

The `ListTables` Amazon DynamoDB activity allows you to retrieve a list of `Table` objects for a given region, which contains the table's name. It requires a valid AWS region and AWS credentials.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| N/A | `ListTableResponse (Object)` |

This activity returns a ListTablesResponse object with objects from the following entities, as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| `ListTablesResponse` | | This entity is the root object that holds a list of `ListTable` objects. It is the response for the Amazon DynamoDB `ListTables` activity. It holds a list of `ListTable` objects. |
| `ListTable` | `AmazonDynamoDBConnector.Table` | This entity holds information of the retrieved table. The attribute it contains is `Name`, which reflects the name of the table inside Amazon DynamoDB. |

#### 3.3.3 Describe Table

The `DescribeTable` Amazon DynamoDB activity allows you to get a description from a given table inside DynamoDB. It requires a valid AWS region and a table name. It returns a `TableDescription` object which includes the `Name`, `ItemCount`, `CreationDateTime`, `TableARN`, `TableId` and `TableStatus`, as well as a list of `AttributeDefinitions` and `KeySchemaElements`.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `TableName (String)` | `TableDescription (Object)` |

This activity returns a `TableDescription` object with objects from the following entities, as shown in the table below:

| Name | Generalization | Documentation | Attributes |
| --- | --- | --- | --- |
| `TableDescription` | `AmazonDynamoDBConnector.Table` | This entity is the response for the Amazon DynamoDB `DescribeTable` activity. The attributes it contains are `Name`, `ItemCount`, `CreationDateTime`, `TableARN`, `TableId` and `TableStatus`. The response additionally contains a list of at least one `KeySchemaElement` and `AttributeDefinition` (for a table with only a partition key). | `Name` - the name of the table inside Amazon DynamoDB; `ItemCount` - the number of items the table contains; `CreationDateTime` - the moment at which the table had been created; `TableARN` - the resource name of the table inside Amazon; `TableId` - the table's identification; `TableStatus` - the status of the table. | 
| `AttributeDefinition` | `AmazonDynamoDBConnector.Key` | This entity holds information regarding the columns inside an Amazon DynamoDB table. The attributes it contains are `AttributeName` and `AttributeType`. | `AttributeName` - the column's name as it appears inside Amazon DynamoDB; `AttributeType` - the data type for the column. |
| `KeySchemaElement` | `AmazonDynamoDBConnector.Key` | This entity holds information regarding the key schema for a given table. The attributes it contains are `Key` and `KeyType`. | `Key` - the name of the column as it appears in Amazon DynamoDB; | `KeyType` - either `HASH (partition)` or `RANGE (sort)`. |

#### 3.3.4 Batch Write Item

The `BatchWriteItem` Amazon DynamoDB activity allows you to put or delete multiple items from DynamoDB in a single call. It requires a valid AWS Region, a `BatchWriteItemRequest` object containing the tables from which the item needs to be put or deleted. This activity has no return value.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `BatchWriteRequest (Object)` | N/A |

#### 3.3.5 Delete Item

The `DeleteItem` Amazon DynamoDB activity allows you to delete an item from a given table from your DynamoDB environment. It requires a valid AWS region, and a `DeleteItemRequest` object with an `Item` object associated to it. If the given table has only a partition key, the `Item` object should have a `KeyValue` object that that refers to the row that to be deleted. If the given table has both a partition and sort key, the `Item` object must have two `KeyValue` objects.

Optionally, you can include a condition expression. The delete activity is then only performed when the condition returns true. Additionally, you can include an expression attribute list to escape reserved words.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `DeleteItemRequest (Object)` | N/A |

#### 3.3.6 Scan Table

The `ScanTable` Amazon DynamoDB activity allows you to retrieve items from an Amazon DynamoDB table. It requires a valid AWS Region and a `ScanTableRequest` object. Optional parameters (attributes within `ScanTableRequest`) are the limit (how much data is retrieved in each batch), as well as the index name (the name of the secondary global index of the given table). This activity returns a `ScanTableResponse` object with a list of items associated with it.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ScanTableRequest (Object)`    | `ScanTableResponse (Object)` |

This activity returns a `ScanTableResponse` object with objects from the following entities, as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| `ScanTableResponse` | `AmazonDynamoDBConnector.Table` | This entity holds the information that is returned from the scan table activity. This entity has the table's name as an attribute. Moreover, it contains a list of items. Each item represents a row inside an Amazon DynamoDB table. Each item contains a list of key-value pairs, which represent the attributes inside a row of a table. |
| `Item` | | This generalization entity holds information of items inside Amazon DynamoDB. Each item represents a row in a table. Each item at least has one `KeyValue` object. |
| `KeyValueLong` | | This generalization entity holds information for a key-value pair for a given `Item`. The attribute it contains is `LongValue`, which is a numeric representation of value in a key-value pair. |
| `KeyValueDecimal` | | This generalization entity holds information for a key-value pair for a given `Item`. The attribute it contains is `DecimalValue`, which is a numeric representation of value in a key-value pair. |
| `KeyValueBoolean` | | This generalization entity holds information for a key-value pair for a given `Item`. The attribute it contains is BooleanValue, which is a Boolean representation of value in a key-value pair. |
| `KeyValueString` | | This generalization entity holds information for a key-value pair for a given `Item`. The attribute it contains is `StringValue`, which is a string representation of value in a key-value pair. |

#### 3.3.7 Put Item

The `PutItem` Amazon DynamoDB activity allows you to put and update an item in DynamoDB. It requires a valid AWS Region, `TableName`, and an `Item` object. If the table has only a partition key, then only one `KeyValue` object is required inside the `Item` object. If the table has both a partition and sort key, then two `KeyValue` objects are required.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `TableName (String)` | `RequestID (String)` |
| `Item (Object)` | |

#### 3.3.8 Get Item

The `GetItem` Amazon DynamoDB activity allows you to get an item from DynamoDB. It requires a valid AWS Region, a `TableName`, `IsConsistentRead`, and an `Item` object.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `TableName (String)`    | `Item (Object)` |
| `IsConsistentRead (Boolean)` | |
| `Item (Object)` |    |

This activity returns an `Item` object with objects from the following entities as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| Item | | This generalization entity holds information of items inside Amazon DynamoDB. Each item represents a row in a table. Each item at least has one `KeyValue` object. |
| `KeyValueLong` | | This generalization entity holds information for a key-value pair for a given `Item`. The attribute it contains is `LongValue`, which is a numeric representation of value in a key-value pair. |
| `KeyValueDecimal` | | This generalization entity holds information for a key-value pair for a given `Item`. The attribute it contains is `DecimalValue`, which is a numeric representation of value in a key-value pair. |
| `KeyValueBoolean` | | This generalization entity holds information for a key-value pair for a given `Item`. The attribute it contains is `BooleanValue`, which is a Boolean representation of value in a key-value pair. |
| `KeyValueString` | | This generalization entity holds information for a key-value pair for a given `Item`. The attribute it contains is `StringValue`, which is a string representation of value in a key-value pair. |
