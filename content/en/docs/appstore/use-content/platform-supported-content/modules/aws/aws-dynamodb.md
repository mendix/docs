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

## Introduction

The [Amazon DynamoDB](https://marketplace.mendix.com/link/component/204872) connector provides a way for you to increase the security, scalability, and performance of your Mendix app by implementing [Amazon DynamoDB](https://aws.amazon.com/dynamodb/).

### Typical Use Cases

Amazon DynamoDB helps improve your app by giving you the tools to build scalable, performant applications on a flexible, serverless database. You can use it to develop high-traffic online platforms and applications for a variety of modern industries, such as content streaming, electronic commerce, or gaming.

### Prerequisites {#prerequisites}

The Amazon DynamoDB connector requires Mendix Studio Pro 9.18.0 or above.

To use the Amazon DynamoDB connector, you must also install and configure the following modules:

* [AWS Authentication connector version 2.0 or higher](https://marketplace.mendix.com/link/component/120333) - This connector is required to authenticate with Amazon Web Services (AWS). It is crucial for the Amazon DynamoDB connector to function correctly. If you are using the Amazon DynamoDB connector version 2.0 or higher, it requires the AWS Authentication connector version 3.0 or higher. It is crucial for the Amazon S3 connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).
* [Community Commons module](https://marketplace.mendix.com/link/component/170) - This module is required to parse the `creationDateTime` attribute as returned by the `DescribeTable` activity.

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Amazon DynamoDB connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonDynamoDBConnector** section. The connector provides a [domain model and several activities](#technical-reference) that you can use to connect your app to Amazon DynamoDB. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### Configuring AWS Authentication

In order to use the Amazon DynamoDB service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon DynamoDB, you can implement the functions of the connector by using the provided activities in microflows. For example, to list all Amazon DynamoDB tables for a specific region, implement the **ListTables** activity by doing the following steps:

1. In the **App Explorer**, find and open the domain model for your app.
2. Right-click on the working area of the domain model, and then click **Add entity**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/addentity.png" alt="Adding a new entity to the domain model" class="no-border" >}}

3. Open the new entity by double-clicking on it.
4. Enter a name for the entity, for example, `DBTable`.
5. In the **Attributes** section, click **New**, and then configure the attribute in the following way:
    * **Name** - A unique name for the attribute, for example, `TableName`
    * **Type** - **String**

    The parameters that you need to configure depend on the contents of the response that an activity expects. The **ListTables** activity used in this example only expects the database table name as a response. Other activities require different parameters. For more information, see [Technical Reference](#technical-reference).
6. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
    
    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/addmicroflow.png" alt="Adding a microflow" class="no-border" >}}

7. Enter a name for your microflow, for example, *DS_ListTables*, and then click **OK**.
8. In the **App Explorer**, in the **AmazonDynamoDBConnector** > **Operations** section, find the **ListTables** activity.
9. Drag the **ListTables** activity onto the work area of your microflow.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/listtables.png" alt="The DS_ListTables microflow with the ListTables activity" class="no-border" >}}

10. In the **Properties** pane for the microflow, in the **Security** section, select a user role that should be allowed to run the microflow.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/microflowsecurity.png" alt="The Properties pane of a microflow" class="no-border" >}}

11. Double-click the **ListTables** activity to configure the required parameters.
  
    For the `ListTables` activity, you must specify the region for which you want to retrieve the tables from, a `Credentials` object and a `ListTablesRequest` object. Other activities may have different required parameters.
    
12. Click **Edit parameter value**, edit the **ENUM_Region** parameter, and change **Type** to **Expression**.
13. In the expression builder, type `ENUM_Region`, and then press **Ctrl** + **Space**.
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

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/microflow.png" alt="The microflow with the Retrieve activity added" class="no-border" >}}

25. Double-click the **Retrieve** activity.
26. In the **Association** section, click **Select**.
27. In the **Select Association** dialog box, expand the **Variable** item, and then select **ListTablesResponse** as the association.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/selectassociation.png" alt="Selecting the association" class="no-border" >}}

28. Click **OK**.
29. In the **Toolbox** pane, search for the **Create list** activity and drag it onto the microflow area.
30. Position the **Create list** activity between the microflow start event and the **ListTables** activity.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/createlist.png" alt="The microflow with the Create list activity added" class="no-border" >}}

31. Double-click the **Create list** activity.
32. In the **Entity** section, click **Select**.
33. In the **Select Entity** dialog box, select the entity that you previously added to your domain model, for example, `DBTable`.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/selectentity.png" alt="Selecting the entity" class="no-border" >}}

34. In the **Toolbox** pane, search for the **Loop** activity and drag it onto the microflow area.
35. Position the **Loop** activity before the microflow end event.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/addloop.png" alt="The microflow with the loop added" class="no-border" >}}

36. Double-click the **Loop** activity.
37. In the **Iterate over** list, select **ListTableList**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/editloop.png" alt="Selecting the entity to iterate over" class="no-border" >}}

38. In the **Toolbox** pane, search for the **Create object** activity and drag it inside the loop area.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/createobject.png" alt="The microflow with the Create activity added" class="no-border" >}}

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

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/listview.png" alt="The List view widget" class="no-border" >}}

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

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/navigation.png" alt="The New Menu Item dialog" class="no-border" >}}

60. Click **OK**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-dynamodb/microflow2.png" alt="The microflow after mapping the properties" class="no-border" >}}
    
61. Click **Run Locally** ({{% icon name="controls-play" %}}) to preview your app and validate your results. For more information, see [Studio Pro Overview: Run and View App](/refguide/studio-pro-overview/#menus).

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
