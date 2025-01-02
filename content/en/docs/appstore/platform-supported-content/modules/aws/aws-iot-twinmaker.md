---
title: "AWS IoT TwinMaker"
url: /appstore/modules/aws/aws-iot-twinmaker/
description: "Describes the configuration and usage of the AWS IoT TwinMaker connector from the Mendix Marketplace. AWS IoT TwinMaker is a connector to read data from your digital twin stored in the AWS cloud."
weight: 20
aliases:
    - /appstore/connectors/aws/aws-iot-twinmaker/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [AWS IoT TwinMaker](https://marketplace.mendix.com/link/component/209624) connector allows you to connect your Mendix app to [AWS IoT TwinMaker](https://aws.amazon.com/iot-twinmaker/) and read data from the digital twin of your system.

### Typical Use Cases

AWS IoT TwinMaker makes it easier for developers to create digital twins of real-world systems such as buildings, factories, industrial equipment, and production lines. AWS IoT TwinMaker provides the tools you need to build digital twins to help you optimize building operations, increase production output, and improve equipment performance. With the ability to use existing data from multiple sources, create virtual representations of any physical environment, and combine existing 3D models with real-world data, you can now harness digital twins to create a holistic view of your operations faster and with less effort. When used with your Mendix app, the AWS IoT TwinMaker connector enables you to build actionable dashboards on top of AWS IoT Twinmaker, and build applications on top of the service with little coding experience required.

### Prerequisites {#prerequisites}

The AWS IoT TwinMaker connector requires Mendix Studio Pro version 9.18.3 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector version 2.1 or higher](https://marketplace.mendix.com/link/component/120333). If you are using the AWS IoT TwinMaker connector version 3.0.0 or higher, it requires the AWS Authentication connector version 3.0.0 or higher. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the AWS IoT TwinMaker connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AWSTwinMakerConnector** section. The connector provides a [domain model and several activities](#technical-reference) that you can use to connect your app to AWS IoT TwinMaker. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### Configuring AWS Authentication

In order to use the AWS IoT TwinMaker service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### Configuring a Microflow for an AWS Service

After you configure the authentication profile for AWS IoT TwinMaker, you can implement the functions of the connector by using the provided activities in microflows. For example, to list all workspaces, implement the **ListWorkspace** activity by doing the following steps:

1. In the **App Explorer**, find and open the domain model for your app.
2. Right-click on the working area of the domain model, and then click **Add entity**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-iot-twinmaker/addentity.png" alt="Adding a new entity to the domain model" class="no-border" >}}

3. Open the new entity by double-clicking on it.
4. Name the entity **MyWorkspace**.
5. In the **Attributes** section, click **New**, and then add a String-type attribute named *WorkspaceID*.

6. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
    
    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-iot-twinmaker/addmicroflow.png" alt="Adding a microflow" class="no-border" >}}

7. Enter a name for your microflow, for example, *DS_ListWorkspaces*, and then click **OK**.
8. In the **App Explorer**, in the **AWSTwinMakerConnector** > **Microflows** section, find the **ListWorkspaces** activity.
9. Drag the **ListWorkspaces** activity onto the work area of your microflow.
10. In the **Properties** pane for the microflow, in the **Security** section, select a user role that should be allowed to run the microflow.
11. Double-click the **ListWorkspaces** activity to configure the required parameters.
  
    For the `ListWorkspaces` activity, you must make a **ListWorkspaceRequest**, as well as specify the region for which you want to retrieve the tables. Other activities may have different required parameters.
12. Click **Edit parameter value**, edit the **AWS_Region** parameter, and change **Type** to **Expression**.
13. In the expression builder, type `ENUM_Region`, and then press **Ctrl** + **Space**.
14. In the autocomplete dialog, select **AWSAuthentication.ENUM_Region**, then type *.* and select your AWS region from the list.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-iot-twinmaker/awsregions.png" alt="The list of AWS regions" class="no-border" >}}
    
15. Click **OK**, and then click **OK** again.
16. In the **Toolbox** pane, search for the **Create Object** activity, drag it onto the microflow area, and position it between the microflow start event and the **ListWorkspaces** activity.
17. Double-click the **Create Object** activity, and then select **AWSTwinMakerConnector.ListWorkspacesRequest** as the entity.
18. Double-click the **ListWorkspaces** activity.
19. Click **Edit parameter value**, edit the **ListWorkspacesRequest** parameter, and let it auto-fill.
20. In the **Object name** field, enter *ListWorkspacesResponse*, and then click **OK**.
21. In the **Toolbox** pane, search for the **Retrieve** activity and drag it onto the microflow area.
22. Position the **Retrieve** activity between the **ListWorkspaces** activity and the microflow end event.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-iot-twinmaker/microflow.png" alt="The microflow with the Retrieve activity added" class="no-border" >}}

23. Double-click the **Retrieve** activity.
24. In the **Association** section, click **Select**, and then select **ListWorkspacesResponse_WorkspaceSummary** as the association.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-iot-twinmaker/selectassociation.png" alt="Selecting the association" class="no-border" >}}

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

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-iot-twinmaker/fullmicroflow.png" alt="The complete microflow" class="no-border" >}}

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

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
