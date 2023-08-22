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

The [Amazon DynamoDB](https://marketplace.mendix.com/link/component/204872) connector provides a way for you to increase the security, scalability, and performance of your Mendix app by implementing [Amazon DynamoDB](https://aws.amazon.com/dynamodb/).

### 1.1 Typical Use Cases

Amazon DynamoDB helps improve your app by giving you the tools to build scalable, performant applications on a flexible, serverless database. You can use it to develop high-traffic online platforms and applications for a variety of modern industries, such as content streaming, electronic commerce, or gaming.

### 1.2 Prerequisites {#prerequisites}

The Amazon DynamoDB connector requires Mendix Studio Pro version 9.18.0 or above.

To use the Amazon DynamoDB connector, you must also install and configure the following modules:

* [AWS Authentication connector version 2.0 or higher](https://marketplace.mendix.com/link/component/120333) - This connector is required to authenticate with Amazon Web Services (AWS). It is crucial for the Amazon DynamoDB connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
* [Community Commons module](https://marketplace.mendix.com/link/component/170) - This module is required to parse the `creationDateTime` attribute as returned by the `DescribeTable` activity.

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon DynamoDB connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonDynamoDBConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon DynamoDB. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the Amazon DynamoDB service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.
    The Amazon DynamoDB connector supports both session and static credentials. By default, the connector is pre-configured to use static credentials, but you may want to switch to session credentials, for example, to increase the security of your app. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
3. In the **App Explorer**, double-click the **Settings** for your app.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/appsettings.png" alt="The Settings option in the App Explorer">}}

4. In the **App Settings** dialog, in the **Configurations** tab, edit or create an authentication profile.
    If you have multiple sets of AWS credentials, or if you want to use both static and session credentials for different use cases, create separate authentication profiles for each set of credentials.
5. In the **Edit Configuration** dialog, in the **Constants** tab, click **New** to add the constants required for the configuration.
6. In the **Select Constants** dialog, find and expand the **AmazonDynamoDBConnector** > **ConnectionDetails** section.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/credentials.png" alt="The SessionCredentials and StaticCredentials items in the ConnectionDetails section">}}

7. Depending on your selected authentication type, configure the required parameters for the **StaticCredentials** or **SessionCredentials**.

    | Credentials type | Constant | Value |
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

After you configure the authentication profile for Amazon DynamoDB, you can implement the functions of the connector by using the provided activities in microflows. For example, to list all Amazon DynamoDB tables for a specific region, implement the [ListTables](#list-tables) activity by doing the following steps:

1. In the **App Explorer**, find and open the domain model for your app.
2. Right-click on the working area of the domain model, and then click **Add entity**.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/addentity.png" alt="Adding a new entity to the domain model">}}

3. Open the new entity by double-clicking on it.
4. Enter a name for the entity, for example, `DBTable`.
5. In the **Attributes** section, click **New**, and then configure the attribute in the following way:
    * **Name** - A unique name for the attribute, for example, `TableName`
    * **Type** - **String**

    The parameters that you need to configure depend on the contents of the response that an activity expects. The **ListTables** activity used in this example only expects the database table name as a response. Other activities require different parameters. For more information, see [Activities](#activities).
6. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
    
    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/addmicroflow.png" alt="Adding a microflow">}}

7. Enter a name for your microflow, for example, *DS_ListTables*, and then click **OK**.
8. In the **App Explorer**, in the **Amazon DynamoDBConnector** > **Operations** section, find the **ListTables** activity.
9. Drag the **ListTables** activity onto the work area of your microflow.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/listtables.png" alt="The DS_ListTables microflow with the ListTables activity">}}

10. In the **Properties** pane for the microflow, in the **Security** section, select a user role that should be allowed to run the microflow.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/microflowsecurity.png" alt="The Properties pane of a microflow">}}

11. Double-click the **ListTables** activity to configure the required parameters.
  
    For the `ListTables` activity, you must specify the region for which you want to retrieve the tables. Other activities may have different required parameters.
12. Click **Edit parameter value**, edit the **AWS_Region** parameter, and change **Type** to **Expression**.
13. In the expression builder, type `AWS_Region`, and then press **Ctrl+Space**.
14. In the autocomplete dialog, select **AmazonDynamoDBConnector.AWS_Region**, then type *.* and select your AWS region from the list.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/awsregions.png" alt="The list of AWS regions">}}
    
    For a list of available AWS regions, see [AWS_Region](#aws-region).
15. Click **OK**, and then click **OK** again.
16. In the **Toolbox** pane, search for the **Retrieve** activity and drag it onto the microflow area.
17. Position the **Retrieve** activity between the **ListTables** activity and the microflow end event.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/microflow.png" alt="The microflow with the Retrieve activity added">}}

18. Double-click the **Retrieve** activity.
19. In the **Association** section, click **Select**.
20. In the **Select Association** dialog box, expand the **Variable** item, and then select **ListTablesResponse** as the association.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/selectassociation.png" alt="Selecting the association">}}

21. Click **OK**.
22. In the **Toolbox** pane, search for the **Create list** activity and drag it onto the microflow area.
23. Position the **Create list** activity between the microflow start event and the **ListTables** activity.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/createlist.png" alt="The microflow with the Create list activity added">}}

24. Double-click the **Create list** activity.
25. In the **Entity** section, click **Select**.
26. In the **Select Entity** dialog box, select the entity that you previously added to your domain model, for example, `DBTable`.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/selectentity.png" alt="Selecting the entity">}}

27. In the **Toolbox** pane, search for the **Loop** activity and drag it onto the microflow area.
28. Position the **Loop** activity before the microflow end event.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/addloop.png" alt="The microflow with the loop added">}}

29. Double-click the **Loop** activity.
30. In the **Iterate over** list, select **ListTableList**.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/editloop.png" alt="Selecting the entity to iterate over">}}

31. In the **Toolbox** pane, search for the **Create object** activity and drag it inside the loop area.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/createobject.png" alt="The microflow with the Create activity added">}}

32. Double-click the **Create object** activity.
33. In the **Entity** section, click **Select**.
34. In the **Select Entity** dialog box, select the entity that you previously added to your domain model, for example, `DBTable`, and then click **Select**.
35. In the **Create Object** dialog box, click **New**.
36. In the **Edit Change Item** dialog box, in the **Member** drop-down, select the attribute that you previously created, for example, `TableName`.
37. In the expression editor, type `$IteratorListTable/Name`, and then click **OK**.
38. In the **Toolbox** pane, search for the **Change List** activity and drag it inside the loop area, to the right of the **Create Object** activity.
39. Double-click the **Change List** activity, and then set the following values:
    * **Type** - **Add**
    * **Value** - The created object, for example, `$NewDBTable`
40. Double-click the end event of your microflow, and then set the following values:
    * **Type** - **List**
    * **Entity** - The entity that you previously added to your domain model, for example, `DBTable`
41. Right-click the **Create List** activity, and then click **Set {TableName}** as return value.
42. In the **App Explorer**, right-click on the name of your module, and then click **Add page**.
43. In the **Lists** category, select the **List** template for the page.
44. Enter a name for your page, for example, *Table_Overview*, and then click **OK**.
45. On the page, double-click the **List view** widget.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/listview.png" alt="The List view widget">}}

46. In the **Select Data Source** dialog, set the **Type** to **Microflow**.
47. In the **Microflow** field, select the **DS_ListTables** microflow.
48. Click **OK**, and then click **Yes**.
49. In the **Properties** pane for the page, in the **Navigation** > **Visible for** section, select a user role that should be allowed to run the microflow.
50. In the **App Explorer**, double-click the **Navigation** for your app.
51. In the Menu section, click **New Item**.
52. In the **New Menu Item** dialog, configure the following settings:
    * **Caption** - A caption for the navigation item, for example, *Table*
    * **Icon** - An icon that will be displayed for this page in the navigation for your app
    * **On click** - **Show a page**
    * **Page** - Your **Table_Overview** page

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/navigation.png" alt="The New Menu Item dialog">}}

53. Click **OK**.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/microflow2.png" alt="The microflow after mapping the properties">}}
54. Click the **Run locally** icon to preview your app and validate your results. For more information, see [Studio Pro Overview: Run and View App](/refguide/studio-pro-overview/#menus).

## 4 Technical Reference

To help you work with the Amazon DynamoDB connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

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

### 4.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the Amazon DynamoDB connector, enumerations list values such as the status of database tables, or the list of available AWS regions.

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

#### 4.2.6 `AWS_Region` {#aws-region}

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

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon DynamoDB connector, they represent the actions that can be performed on DynamoDB database tables.

#### 4.3.1 Batch Get Item

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

#### 4.3.2 List Tables {#list-tables}

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

#### 4.3.3 Describe Table

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

#### 4.3.4 Batch Write Item

The `BatchWriteItem` Amazon DynamoDB activity allows you to put or delete multiple items from DynamoDB in a single call. It requires a valid AWS Region, a `BatchWriteItemRequest` object containing the tables from which the item needs to be put or deleted. This activity has no return value.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `BatchWriteRequest (Object)` | N/A |

#### 4.3.5 Delete Item

The `DeleteItem` Amazon DynamoDB activity allows you to delete an item from a given table from your DynamoDB environment. It requires a valid AWS region, and a `DeleteItemRequest` object with an `Item` object associated to it. If the given table has only a partition key, the `Item` object should have a `KeyValue` object that that refers to the row that to be deleted. If the given table has both a partition and sort key, the `Item` object must have two `KeyValue` objects.

Optionally, you can include a condition expression. The delete activity is then only performed when the condition returns true. Additionally, you can include an expression attribute list to escape reserved words.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `DeleteItemRequest (Object)` | N/A |

#### 4.3.6 Scan Table

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

#### 4.3.7 Put Item

The `PutItem` Amazon DynamoDB activity allows you to put and update an item in DynamoDB. It requires a valid AWS Region, `TableName`, and an `Item` object. If the table has only a partition key, then only one `KeyValue` object is required inside the `Item` object. If the table has both a partition and sort key, then two `KeyValue` objects are required.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `TableName (String)` | `RequestID (String)` |
| `Item (Object)` | |

#### 4.3.8 Get Item

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
