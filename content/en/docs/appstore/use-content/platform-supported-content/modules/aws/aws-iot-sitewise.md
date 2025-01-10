---
title: "AWS IoT SiteWise"
url: /appstore/modules/aws/aws-iot-sitewise/
description: "Describes the configuration and usage of the AWS Iot SiteWise connector from the Mendix Marketplace. AWS Iot SiteWise is a managed service that simplifies collecting, organizing, and analyzing industrial equipment data."
weight: 20
aliases:
    - /appstore/connectors/aws/aws-iot-sitewise/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [AWS IoT Sitewise](https://marketplace.mendix.com/link/component/215633) connector provides a way for you to optimize the data collection and processing for your Mendix app by implementing [AWS IoT SiteWise](https://aws.amazon.com/iot-sitewise/).

### Typical Use Cases

AWS IoT SiteWise is a managed service that simplifies collecting, organizing, and analyzing industrial equipment data. It enables you to collect, manage, and visualize data, identify and resolve issues through performance monitoring, and optimize processes with improved data insights.

### Prerequisites {#prerequisites}

The AWS IoT SiteWise connector requires Mendix Studio Pro 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS Authentication connector version 2.3.0 or higher](https://marketplace.mendix.com/link/component/120333). If you are using the Amazon Iot SiteWise connector version 2.0 or higher, it requires the AWS Authentication connector version 3.0 or higher. It is crucial for the Amazon Iot SiteWise connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the AWS IoT SiteWise connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AWSIoTSiteWiseConnector** section. The connector provides a [domain model and several activities](#technical-reference) that you can use to connect your app to AWS IoT SiteWise. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### Configuring AWS Authentication

In order to use the Amazon IoT SiteWise service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).
   
### Configuring a Microflow for an AWS Service

After you configure the authentication profile for AWS IoT SiteWise, you can implement the functions of the connector by using the provided activities in microflows. For example, to retrieve a list of asset models, implement the **ListAssetModels** activity by doing the following steps:

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

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
