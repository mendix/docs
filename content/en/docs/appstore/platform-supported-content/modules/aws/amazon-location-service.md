---
title: "Amazon Location Service"
url: /appstore/modules/aws/amazon-location-service/
description: "Describes the configuration and usage of the Amazon Location Service connector from the Mendix Marketplace. Amazon Location Service is a location-based service that developers can use to add geospatial data and location functionality to applications."
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Amazon Location Service](https://marketplace.mendix.com/link/component/209124) connector enables you to add location data to your Mendix app by connecting it to [Amazon Location Service](https://aws.amazon.com/location/).

### Typical Use Cases

Amazon Location Service is a location-based service that developers can use to add geospatial data and location functionality to applications. Customers can visualize data on a map, recommend routes, use geocoding to convert plain text addresses into geographic coordinates, use reverse geocoding to convert latitude and longitude coordinates into addresses, and monitor and track assets such as fleets of vehicles. Typical use cases include the following:

* Tracking current and historical locations of your products
* Optimizing dispatch efficiency and delivery routes
* Visualizing data on a map

### Prerequisites {#prerequisites}

The Amazon Location Service connector requires Mendix Studio Pro version 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS Authentication connector version 3.0.0 or higher](https://marketplace.mendix.com/link/component/120333). It is crucial for the Amazon Location Service connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon Location Service connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonLocationServiceConnector** section. The connector provides a [domain model and several activities](#technical-reference) that you can use to connect your app to Amazon Location Service. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### Configuring AWS Authentication

In order to use the Amazon Location service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module.

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/connectors/aws/aws-authentication/).

### Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon Location Service, you can implement the functions of the connector by using the provided activities in microflows. For example, to calculate a route between to sets of coordinates, implement the **CalculateRoute** activity by performing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_CalculateRoute*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonLocationServiceConnector** section, find the **CalculateRoute** operation microflow.
4. In the **App Explorer**, in the **AWSAuthentication** section, find the **GetStaticCredentials** and **GetTemporaryCredentials** microflows.
5. Drag the one you would like to use and the **SynthesizeSpeech** microflow in to your microflow in that order.
6. Double-click the **CalculateRoute** activity to configure the required parameters. 
    
    1. For the `CalculateRoute` activity, you must provide a credentials object and specify the AWS Region. You must then add your `CalculateRouteRequest` entity in your microflow as the last parameter. This entity requires the following parameters:

        * `CalculatorName` - The name of the route calculator resource that you want to use to calculate the route.
        * `DeparturePosition` - The start position for the route. This entity specifies the longitude and latitude of the start position of the route and are both required.
        * `DestinationPosition` - The position of the destination for the route. This entity specifies the longitude and latitude of the destination position of the route and are both required.

    2. Optionally, configure the following additional parameters:
       
        * `WaypointPosition` - This entity is used to add additional locations you want to visit along the route. This entity specifies the longitude and latitude of the
        * `DepartNow` - Sets the time of departure as the current time. Uses the current time to calculate a route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.
        * `DepartureTime` - Specifies the desired time of departure. Uses the given time to calculate the route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.
        * `DistanceUnit` - Set the unit system to specify the distance. 
        * `IncludeLegGeometry` - Set to include the geometry details in the result for each path between a pair of positions.
        * `TravelMode` - Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. You can choose Car, Truck, Walking, Bicycle, or Motorcycle as options for the TravelMode.
        * `CarModeOptions` - This entity can be used when in car mode to set settings like "AvoidFerries" and "AvoidTolls"   
        * `TruckModeOptions` - This entity and its associated entities can be used when in truck mode to set settings like "AvoidFerries", "AvoidTolls", "Truckweight" and "TruckDimensions".

7. Configure a method to trigger the `ACT_CalculateRoute` activity. 
    For example, you can associate the activity with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
