---
title: "Amazon Textract"
url: /appstore/connectors/aws/amazon-textract/
description: "Describes the configuration and usage of the Amazon Textract connector from the Mendix Marketplace. Amazon Textract is a service that enables developers to extract text, handwriting and data in a structured manner from documents."
weight: 20
tags: ["marketplace", "marketplace component", "amazon", "textract", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon Textract](https://marketplace.mendix.com/link/component/205646) connector provides a way for you to enrich your Mendix app with the capability to extract text, handwriting and data from documents by implementing [Amazon Textract](https://aws.amazon.com/textract/).

### 1.1 Typical Use Cases

Amazon Textract helps improve your app by giving you the tools to extract data from documents in a structured manner. For example, you can use it to extract business data from handwritten documents, or patient data from intake forms.

### 1.2 Prerequisites {#prerequisites}

The Amazon Textract connector requires Mendix Studio Pro version 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

### 1.4 Limitations

Because of a synchronous invocation limitation of the Amazon Textract service, the Amazon Textract connector only supports scanning a single page at a time. This limitation will be removed in future versions of the connector.

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon Textract connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonTextractConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon Textract. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the Amazon Textract service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.
    The Amazon Textract connector supports both session and static credentials. By default, the connector is pre-configured to use static credentials, but you may want to switch to session credentials, for example, to increase the security of your app. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
3. In the **App Explorer**, double-click the **Settings** for your app.

    {{< figure src="/attachments/appstore/connectors/aws-textract/textract_open_settings.png" alt="The Settings option in the App Explorer">}}

4. In the **App Settings** dialog, in the **Configurations** tab, edit or create an authentication profile.
    If you have multiple sets of AWS credentials, or if you want to use both static and session credentials for different use cases, create separate authentication profiles for each set of credentials.
5. In the **Edit Configuration** dialog, in the **Constants** tab, click **New** to add the constants required for the configuration.
6. In the **Select Constants** dialog, find and expand the **AmazonTextractConnector** > **ConnectionDetails** section.

    {{< figure src="/attachments/appstore/connectors/aws-textract/textract_edit_configuration.png" alt="The SessionCredentials and StaticCredentials items in the ConnectionDetails section">}}

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

After setting up the authentication, to analyze a document, implement the [AnalyzeDocument](#analyzedocument) activity by doing the following steps:

1. In the **Domain Model**, right-click on the work area, and then click **Add entity**.
2. Enter a name for your entity, for example, *Document*, and then click **OK**.
3. Double-click the **Document** entity, select the generalization **FileDocument**, and then click **OK**.
4. In the **Document** entity, find the **Access rules** tab.
5. Create new access rules by doing the following steps:
    1. Click **New**.
    2. Select a user role, and then select the checkboxes **Allow creating new objects** and **Allow deleting existing objects**. 
    3. Set the access rights for **Name**, **DeleteAfterDownload** and **Contents** to **Read/write**
    4. Set the remaining access rights to **Read**.
    The configured access rules look like this:
    {{< figure src="/attachments/appstore/connectors/aws-textract/6-completed-access-rules.png" >}}
6. In the App Explorer, right-click on the name of your module, click **Add page**, and then select the **Grid** template.
7. Enter a name for your page, for example, *Document_Overview*, and then click **OK**.
8. In the **Properties** pane of **Document_Overview**, in the **Navigation** section, select **Visible for** for a user role (see the [Properties](/refguide/page-properties/#properties) section of *Page Properties*).
9. Configure your page by doing the following steps:
    1. Open the page. 
    2. Double-click on the data grid.
    3. In the **Data source** tab, select the **Document** entity.
    4. Click **OK**.
    5. Confirm that you want to automatically fill the contents of the data grid.
10. Create a page where your users can enter data for the app by doing the following steps:
    1. Right-click the **New** button in the data grid.
    2. Click **Generate page**.
    3. Enter a name for your page, for example, *Document_NewEdit*.
    4. Click **OK**.
11. In the **Properties** pane of **Document_NewEdit**, in the **Navigation** section, select **Visible for** for a user role (see the [Properties](/refguide/page-properties/#properties) section of *Page Properties*).
12. In the App Explorer, right-click on the name of your module, and then click **Add microflow**.
13. Enter a name for your microflow, for example, *ACT_AnalyzeDocument*, and then click **OK**.
14. Add an input [parameter](/refguide/parameter/) of the Document entity to the ACT_AnalyzeDocument microflow.
15. In the properties pane of ACT_AnalyzeDocument, under Security, assign a user role to Allow roles.
16. In the **Toolbox** pane, search for the **Create object** activity and drag it onto the microflow area.
17. Configure the  **Create object** activity by doing the following steps:
    1. Double-click the activity. 
    2. Select the **AnalyzeDocumentRequest** entity. 
    3. Add the members **GetForms** and **GetTables**, set the value to **true**, and then click **OK**.
    The configured activity properties look like this: 
    {{< figure src="/attachments/appstore/connectors/aws-textract/create-object-properties.png" >}}
18. In the **Toolbox** pane, in the **AmazonTextractConnector** section, find the **AnalyzeDocument** activity.
19. Drag the **AnalyzeDocument** activity onto the work area of your microflow between the **Create object** activity and the microflow end event.
20. Configure the **AnalyzeDocument** activity by doing the following steps:
    1. Double-click the activity.
    2. Set the values for [AWS_Region](https://docs.aws.amazon.com/general/latest/gr/textract.html#textract_region), **AnalyzeDocumentRequest**, and the **FileDocument** parameter.
    3. Click **OK**.
    The configured properties look like this:
    {{< figure src="/attachments/appstore/connectors/aws-textract/analyze-document-properties.png" >}} 
21. In the **Toolbox** [pane](/refguide/view-menu/#layout-of-panes), search for the **AnalyzeDocumentResponse_ProcessResults** microflow and drag it onto the microflow area.
22. Position the **AnalyzeDocumentResponse_ProcessResults** microflow between the **AnalyzeDocument** activity and the microflow end event.
23. Configure the **AnalyzeDocumentResponse_ProcessResults** microflow by doing the following steps:
    1. Double-click the **AnalyzeDocumentResponse_ProcessResults** microflow.
    2. Set the **AnalyzeDocumentResponse** parameter.
    3. Click **OK**.
24. In the **Toolbox** pane, find the **List operation** activity.
25. Drag the activity onto the microflow area between the **AnalyzeDocumentResponse_ProcessResults** microflow and the end event.
26. Configure the **List operation** activity by doing the following steps:
    1. Double-click the activity.
    2. Select **Head** as the operation.
    3. Select the list that the **AnalyzeDocumentResponse_ProcessResults** microflow returns.
27. Create a page with a data view of the **Page** entity, and configure the page to display the specialized `BlockItem` model. The page model will look like this:
{{< figure src="/attachments/appstore/connectors/aws-textract/block-item-page.png" >}}
28. In the **Toolbox** pane, find the **Show page** activity.
29. Drag the activity onto the microflow area between the **List* operation** activity and the end event.
30. Configure the **Show page** activity by doing the following steps:
    1. Double-click the activity
    2. Select the page with a data view of the Page entity.
    3. Set the **Page** parameter
    4. Click **OK**.
31. On the **Document_Overview** page, right-click the **Delete** button and add an **Action** button.
32. Right-click the **Action** button, and select the **ACT_AnalyzeDocument** microflow as the on-click action. 
    The configured microflow looks like this:
    {{< figure src="/attachments/appstore/connectors/aws-textract/analyze-document-configure-microflow.png" >}}

## 4 Technical Reference

To help you work with the Amazon Textract connector, the following sections of this document list the available [entities](#domain-model), [enumerations](#enumerations), and [activities](#activities) that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

| Name | Description |
| --- | --- |
| `Block` | This generalization entity holds information for items that are recognized in a document within a group of pixels close to each other. The attribute it contains are `BlockType`, `ColumnIndex`, `ColumnSpan`, `Confidence`, `EntityTypes`, `_Id`, `Page`, `RowIndex`, `RowSpan`, `SelectionStatus`, `Text` and `TextType`. The `BlockType` describes the type of text item that's recognized, the `ColumnIndex` describes the column in which a table appears the first column position is 1, the second column position is 2 and so on), the `ColumnSpan` describes the number of columns that a table cell spans, the Confidence describes the score that Amazon Textract has in the accuracy of the recognized text, the `EntityTypes` describes the type of entity, the `Page` describes the page on which a block was detected, the `RowIndex` describes the row in which a table cell is located (the first row position is 1, the second row position is 2, and so on), the `RowSpan` describes the number of rows that a table cell spans, the `SelectionStatus` describes the selection status of a selection element (such as an option, radio or checkbox), the `Text` describes the word or line of text that is recognized by Amazon Textract and `TextType` describes the kind of text that Amazon Textract has detected (handwritten/printed). Additionally, this entity contains a list of `Relationship` objects, a specialized `Geometry` object (`BlockGeometry`) and if the action involved a query a `QueryBlock` object. |
| `Geometry` | This generalization entity holds information for the location of identified information on a document page: detected page, text, key-value pairs, tables, table cells and selection elements. Additionally, it contains a list of `Point` objects and a `BoundingBox` object. |
| `Point` | This entity holds information of the location of a fine-grained polygon of a recognized item. The attribute it contains are X and Y. The X describes the X-coordinate for a point on a polygon and the Y describes the Y-coordinate for a point on a polygon. |
| `BoundingBox` | This entity holds information for an axis-aligned coarse representation of the location of the recognized item on the document page. The attribute it contains are `Height`, `Left`, `Top` and `Width`. The `Height` describes height of the bounding box as a ratio of the overall document page height, the `Left` describes the left coordinate of the bounding box as a ratio of the overall document page width, the `Top` describes the top coordinate of the bounding box as a ratio of the overall document page height and `Width` describes the width of the bounding box as a ratio of the overall document page width. |
| `Relationship` | Contains the relationship type of a block entity to another block entity This entity holds information about how blocks are related to each other. The attribute it contains is `RelationshipType` which describes the type of relationships for all blocks in the `BlockId`'s array. This is represented as a list of `BlockId` objects. |
| `BlockId` | This entity holds information for blocks that are related by each other. The attribute it contains is `_Id` which reflects the identification of the block. |
| `QueryBlock` | This entity holds information for the results of the search query. The attribute it contains is `Text` which describes the value matched to the search query. Additionally, it contains a list of `PagesSearched` objects. |
| `PagesSearched` | This entity holds information for identifying which pages have been searched. |
| `ExpenseField` | This generalization entity holds information for the detected information, separated into categories `Type`, `LabelDetection` and `ValueDetection`. The attribute it contains is `PageNumber` which describes the page number on which the value was detected. Additionally, it contains a list of `GroupProperty` objects, a specialized `ExpenseDetection` object (both `ExpenseDetectionLabel` and `ExpenseDetectionValue`), an `ExpenseType` object and a `Currency` object. |
| `Currency` | This entity holds information for the detected currency. The attribute it contains are Code and Confidence. The `Code` describes the currency code for the detected currency (USD for dollars, EUR for euro, and so on) and the `Confidence` describes the percentual confidence of the detected currency. |
| `ExpenseType` | This entity holds information about the detected expense type. The attribute it contains are `Text` and `Confidence`. The `Text` describes the detected word or line and the `Confidence` describes the percentual confidence in the detection. |
| `GroupProperty` | This entity holds information for showing the group that a certain key belongs to. The attribute it contains is `_id` which describes the group identification number which will be the same for each member of the group. Additionally, it contains a list of `ExpenseGroupPropertyType` objects. |
| `ExpenseGroupPropertyType` | This entity holds information for distinguishing whether the expense group is a name or an address. The attribute it contains is `_Type`. |
| `ExpenseDetection` | This generalization entity holds information for describing the detected expenses. The attribute it contains are `Text` and `Confidence`. The `Text` describes the word or line of text that is detected and the `Confidence` describes the percentual confidence in the text's detection. Additionally, it contains a specialized `Geometry` object (`AnalyzeExpenseGeometry`). |

### 4.2 Enumerations {#enumerations}

An enumeration is a predefined list of values that can be used as an attribute type. For more information, see [Enumerations](/refguide/enumerations/).

#### 4.2.1 RelationshipType

This enumeration indicates the relationship between the current block and the other blocks in the array. For more information about the enumeration members, see [RelationshipType](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-textract/enums/relationshiptype.html) in the AWS API documentation.

| Name | Caption |
| --- | --- |
| `VALUE` | VALUE |
| `CHILD` | CHILD |
| `COMPLEX_FEATURES` | COMPLEX_FEATURES |
| `MERGED_CELL` | MERGED_CELL |
| `TITLE` | TITLE |
| `ANSWER` | ANSWER |

#### 4.2.2 TextType

This enumeration indicates the type of text that is scanned.  For more information about the enumeration members, see [TextType](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-textract/enums/texttype.html) in the AWS API documentation.

| Name | Caption |
| --- | --- |
| `PRINTED` | PRINTED |
| `HANDWRITING` | HANDWRITING |

#### 4.2.3 EntityTypes

For more information about the enumeration members, see [EntityType](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-textract/enums/entitytype.html) in the AWS API documentation.

| Name | Caption |
| --- | --- | 
| `KEY` | KEY |
| `VALUE` | VALUE |
| `COLUMN_HEADER` | COLUMN_HEADER |

#### 4.2.4 AWS_Region

This enumeration contains a list of supported AWS regions. For more information, see [Service endpoints](https://docs.aws.amazon.com/general/latest/gr/textract.html#textract_region).

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

#### 4.2.5 BlockType

This enumeration describes the current block. For more information about the enumeration members, see [BlockType](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-textract/enums/blocktype.html) in the AWS API documentation.

| Name | Caption |
| --- | --- |
| `CELL` | CELL |
| `KEY_VALUE_SET` | KEY_VALUE_SET |
| `LINE` | LINE |
| `MERGED_CELL` | MERGED_CELL |
| `PAGE` | PAGE |
| `QUERY` | QUERY |
| `QUERY_RESULT` | QUERY_RESULT |
| `SELECTION_ELEMENT` | SELECTION_ELEMENT |
| `TABLE` | TABLE |
| `TITLE` | TITLE |
| `WORD` | WORD | |

#### 4.2.6 SelectionStatus

This enumeration indicates the selection status of the block. For more information about the enumeration members, see [SelectionStatus](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-textract/enums/selectionstatus.html) in the AWS API documentation. 

| Name | Caption |
| --- | --- |
| `SELECTED` | SELECTED |
| `NOT_SELECTED` | NOT_SELECTED |

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon Textract connector, they represent actions such as analyzing a document or expense. For more information, see [Activities](/refguide/activities/).

#### 4.3.1 AnalyzeDocument {#analyzedocument}

The `AnalyzeDocument` Amazon Textract action allows you to analyze documents and extract information from them. It requires a valid AWS region and `AnalyzeDocumentRequest` object. It additionally requires at least a `RequestQuery` object when the `GetQueries` attribute in `AnalyzeDocumentRequest` is set to true.

Additionally, you can use the `AnalyzeDocumentResponse_ProcessResults` sub-flow. This will process the response from Amazon Textract into the specialized `BlockItem` model.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `AnalyzeDocumentRequest` (Object) | `AnalyzeDocumentResponse` (Object) |
| `AWS_Region` (Enumeration) | |
| `FileDocument` (Object) | |

This activity returns a `AnalyzeDocumentResponse` object with objects from the following entities, as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| `AnalyzeDocumentResponse` | | This entity is the response for the Amazon Textract `AnalyzeDocument` action. It contains a list of specialized Block objects (`AnalyzeDocumentBlock`). |
| `AnalyzeDocumentBlock` | `AmazonTextractConnector.Block` | This entity holds information for items that are recognized in a document within a group of pixels close to each other. The attribute it contains are `BlockType`, `ColumnIndex`, `ColumnSpan`, `Confidence`, `EntityTypes`, `_Id`, `Page`, `RowIndex`, `RowSpan`, `SelectionStatus`, `Text` and `TextType`. The `BlockType` describes the type of text item that's recognized, the `ColumnIndex` describes the column in which a table appears the first column position is 1, the second column position is 2 and so on), the `ColumnSpan` describes the number of columns that a table cell spans, the `Confidence` describes the score that Amazon Textract has in the accuracy of the recognized text, the `EntityTypes` describes the type of entity, the `Page` describes the page on which a block was detected, the `RowIndex` describes the row in which a table cell is located (the first row position is 1, the second row position is 2, and so on), the `RowSpan` describes the number of rows that a table cell spans, the `SelectionStatus` describes the selection status of a selection element (such as an option, radio or checkbox), the Text describes the word or line of text that's recognized by Amazon Textract and `TextType` describes the kind of text that Amazon Textract has detected (handwritten/printed). Additionally, this entity contains a list of `Relationship` objects, a `QueryBlock` object and a specialized `Geometry` object (`BlockGeometry`). |

#### 4.3.2 AnalyzeExpense

The AnalyzeExpense Amazon Textract action allows you to analyze expense documents and extract information from them. It requires a valid AWS region and a specialized `System.FileDocument` object in PNG, JPEG, PDF, or TIFF format.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `AWS_Region` (Enumeration) | `AnalyzeExpenseResponse` (Object) |
| `FileDocument` (Object) | |

This activity returns an `AnalyzeExpenseResponse` object with objects from the following entities, as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| `AnalyzeExpenseResponse` | | This entity is the response for the Amazon Textract `AnalyzeExpense` action. The attribute it contains is `PageCount` which describes the number of pages that are detected in the document. Additionally, it contains a list of `ExpenseDocument`, each of which contains a list of `SummaryFields`, `LineItemGroups` and `AnalyzeExpenseBlocks`. |
| `ExpenseDocument` | | This entity holds information for regarding the document. The attribute it contains is `ExpenseIndex`, which describes which invoice or receipt in the document the information is coming from (1 refers to the first document, 2 refers to the second document, and so on). |
| `SummaryField` | `AmazonTextractConnector.ExpenseField` | This specialized entity holds information for the detected non-expense related information, separated into categories `Type`, L`abelDetection` and `ValueDetection`. The attribute it contains is `PageNumber` which describes the page number on which the value was detected. Additionally, it contains a list of `GroupProperty` objects, a specialized `ExpenseDetection` object (both `ExpenseDetectionLabel` and `ExpenseDetectionValue`), an `ExpenseType` object and a `Currency` object. |
| `LineItemGroup` | | This entity holds information for a grouping of tables which contain `LineItems`. The attribute it contains is `LineItemGroupIndex` which describes which table was detected (1 represents the first encountered table, 2 represent the second encountered table, and so on). |
| `LineItemField` | | This entity holds information for a line within the given document's table. |
| `LineItemExpenseField` | `AmazonTextractConnector.ExpenseField` | This specialized entity holds information for the detected expense-related information, separated into categories `Type`, `LabelDetection` and `ValueDetection`. The attribute it contains is `PageNumber`, which describes the page number on which the value was detected. Additionally, it contains a list of `GroupProperty` objects, a specialized `ExpenseDetection` object (both `ExpenseDetectionLabel` and `ExpenseDetectionValue`), an `ExpenseType` object, and a `Currency` object. |
| `AnalyzeExpenseBlock` | `AmazonTextractConnector.Block` | This entity holds information for items that are recognized in a document within a group of pixels close to each other. The attributes it contains are `BlockType`, `ColumnIndex`, `ColumnSpan`, `Confidence`, `EntityTypes`, `_Id`, `Page`, `RowIndex`, `RowSpan`, `SelectionStatus`, `Text` and `TextType`. The `BlockType` describes the type of text item that's recognized, the `ColumnIndex` describes the column in which a table appears the first column position is 1, the second column position is 2 and so on), the `ColumnSpan` describes the number of columns that a table cell spans, the `Confidence` describes the score that Amazon Textract has in the accuracy of the recognized text, the `EntityTypes` describes the type of entity, the `Page` describes the page on which a block was detected, the `RowIndex` describes the row in which a table cell is located (the first row position is 1, the second row position is 2, and so on), the `RowSpan` describes the number of rows that a table cell spans, the `SelectionStatus` describes the selection status of a selection element (such as an option, radio or checkbox), the `Text` describes the word or line of text that's recognized by Amazon Textract and `TextType` describes the kind of text that Amazon Textract has detected (handwritten or printed). Additionally, this entity contains a list of `Relationship` objects and a specialized Geometry object (`BlockGeometry`). |
