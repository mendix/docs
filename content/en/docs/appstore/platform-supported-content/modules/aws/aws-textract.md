---
title: "Amazon Textract"
url: /appstore/modules/aws/amazon-textract/
description: "Describes the configuration and usage of the Amazon Textract connector from the Mendix Marketplace. Amazon Textract is a service that enables developers to extract text, handwriting and data in a structured manner from documents."
weight: 20
aliases:
    - /appstore/connectors/aws/amazon-textract/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Amazon Textract](https://marketplace.mendix.com/link/component/205646) connector provides a way for you to enrich your Mendix app with the capability to extract text, handwriting and data from documents by implementing [Amazon Textract](https://aws.amazon.com/textract/).

### Typical Use Cases

Amazon Textract helps improve your app by giving you the tools to extract data from documents in a structured manner. For example, you can use it to extract business data from handwritten documents, or patient data from intake forms.

### Prerequisites {#prerequisites}

The Amazon Textract connector requires Mendix Studio Pro 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333). From Amazon Textract Connector version 2.0.0 on, AWS Authentication 3.0.0 or newer is required. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Amazon Textract connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonTextractConnector** section. The connector provides a [domain model and several activities](#technical-reference) that you can use to connect your app to Amazon Textract. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### Configuring AWS Authentication

In order to use the Amazon Textract service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).
    
### Configuring a Microflow for an AWS Service

After setting up the authentication, to analyze a document, implement the **AnalyzeDocument** activity by doing the following steps:

1. In the **Domain Model**, right-click on the work area, and then click **Add entity**.
2. Enter a name for your entity, for example, *Document*, and then click **OK**.
3. Double-click the **Document** entity, select the generalization **FileDocument**, and then click **OK**.
4. In the **Document** entity, find the **Access rules** tab.
5. Create new access rules by doing the following steps:
    1. Click **New**.
    2. Select a user role, and then select the checkboxes **Allow creating new objects** and **Allow deleting existing objects**. 
    3. Set the access rights for **Name**, **DeleteAfterDownload** and **Contents** to **Read/write**
    4. Set the remaining access rights to **Read**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-textract/6-completed-access-rules.png" class="no-border" >}}
   
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
15. In the properties pane of *ACT_AnalyzeDocument*, under **Security**, assign a user role to **Allow** roles.
16. In the **App Explorer**, in the **AWSAuthentication** section, find the **GetStaticCredentials** and **GetTemporaryCredentials** microflows.
17. Drag the one you would like to use to your microflow.
18. In the **Toolbox** pane, search for the **Create object** activity and drag it onto the microflow area.
19. Configure the  **Create object** activity by doing the following steps:
    1. Double-click the activity. 
    2. Select the **AnalyzeDocumentRequest** entity. 
20. Add another **Create object** activity, and select the **AnalyzeDocFeatureType** entity.
21. Set its **Value** attribute to **ENUM_FeatureType.FORMS** and the **AnalyzeDocFeatureType_AnalyzeDocumentRequest** association to the **AnalyzeDocumentRequest** object created in step 2.
22. In the **Toolbox** pane, in the **AmazonTextractConnector** section, find the **AnalyzeDocument** activity.
23. Drag the **AnalyzeDocument** activity onto the work area of your microflow between the **Create object** activities and the microflow end event.
24. Configure the **AnalyzeDocument** activity by doing the following steps:
    1. Double-click the activity.
    2. Set the values for [AWS_Region](https://docs.aws.amazon.com/general/latest/gr/textract.html#textract_region), **AnalyzeDocumentRequest**, and the **FileDocument** parameter.
    3. Click **OK**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-textract/analyze-document-properties.png" class="no-border" >}}
    
25. In the **Toolbox** [pane](/refguide/view-menu/#layout-of-panes), search for the **AbstractDocumentAnalysisResponse_ProcessResults** microflow and drag it onto the microflow area.
26. Position the **AbstractDocumentAnalysisResponse_ProcessResults** microflow between the **AnalyzeDocument** activity and the microflow end event.
27. Configure the **AbstractDocumentAnalysisResponse_ProcessResults** microflow by doing the following steps:
    1. Double-click the **AbstractDocumentAnalysisResponse_ProcessResults** microflow.
    2. Set the **AnalyzeDocumentResponse** parameter.
    3. Click **OK**.
28. In the **Toolbox** pane, find the **List operation** activity.
29. Drag the activity onto the microflow area between the **AbstractDocumentAnalysisResponse_ProcessResults** microflow and the end event.
30. Configure the **List operation** activity by doing the following steps:
    1. Double-click the activity.
    2. Select **Head** as the operation.
    3. Select the list that the **AbstractDocumentAnalysisResponse_ProcessResults** microflow returns.
31. Create a page with a data view of the **Page** entity, and configure the page to display the specialized `BlockItem` model.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-textract/block-item-page.png" class="no-border" >}}

32. In the **Toolbox** pane, find the **Show page** activity.
33. Drag the activity onto the microflow area between the **List* operation** activity and the end event.
34. Configure the **Show page** activity by doing the following steps:
    1. Double-click the activity
    2. Select the page with a data view of the Page entity.
    3. Set the **Page** parameter
    4. Click **OK**.
35. On the **Document_Overview** page, right-click the **Delete** button and add an **Action** button.
36. Right-click the **Action** button, and select the **ACT_AnalyzeDocument** microflow as the on-click action. 

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-textract/analyze-document-configure-microflow.png" class="no-border" >}}

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
