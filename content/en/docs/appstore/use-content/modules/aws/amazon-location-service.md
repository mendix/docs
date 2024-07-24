---
title: "Amazon Location Service"
url: /appstore/modules/aws/amazon-location-service/
description: "Describes the configuration and usage of the Amazon Location Service connector from the Mendix Marketplace. Amazon Location Service is a location-based service that developers can use to add geospatial data and location functionality to applications."
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon Location Service](https://marketplace.mendix.com/link/component/209124) connector enables you to add location data to your Mendix app by connecting it to [Amazon Location Service](https://aws.amazon.com/location/).

### 1.1 Typical Use Cases

Amazon Location Service is a location-based service that developers can use to add geospatial data and location functionality to applications. Customers can visualize data on a map, recommend routes, use geocoding to convert plain text addresses into geographic coordinates, use reverse geocoding to convert latitude and longitude coordinates into addresses, and monitor and track assets such as fleets of vehicles. Typical use cases include the following:

* Tracking current and historical locations of your products
* Optimizing dispatch efficiency and delivery routes
* Visualizing data on a map

### 1.2 Prerequisites {#prerequisites}

The Amazon Location Service connector requires Mendix Studio Pro version 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS Authentication connector version 3.0.0 or higher](https://marketplace.mendix.com/link/component/120333). It is crucial for the Amazon Location Service connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon Location Service connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonLocationServiceConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon Location Service. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the Amazon Location service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module.

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](https://docs.mendix.com/appstore/connectors/aws/aws-authentication/).

### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon Location Service, you can implement the functions of the connector by using the provided activities in microflows. For example, to calculate a route between to sets of coordinates, implement the [CalculateRoute](#calculate-route) activity by performing the following steps:

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

## 4 Technical Reference

To help you work with the Amazon Location Service connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

#### 4.1.1 Position

| Name | Description |
| --- | --- |
| `Longitude` | The `Longitude` attribute is used to specify the longitude of the coordinate set of a specific location. |
| `Latitude` | The `Latitude` attribute is used to specify the latitude of the coordinate set of a specific location. |

#### 4.1.2 TravelModeOptions

| Name | Description |
| --- | --- |
| `AvoidFerries` | The `AvoidFerries` attribute can be used to avoid ferries. |
| `AvoidTolls` | The `AvoidTolls` attribute can be used to avoid tolls. |

#### 4.1.3 Result

| Name | Description |
| --- | --- |
| `Distance` | The `Distance` attribute holds the distance from the bias position of the `SearchPlaceIndexForText` operation and the distance from the index position of the `SearchPlaceIndexForPosition` operation. |

#### 4.1.4 Place

| Name | Description |
| --- | --- |
| `AddressNumber` | The `AddressNumber` attribute holds the numerical portion of an address, such as a building number. |
| `Country` | The `Country` attribute holds a country/region specified using ISO 3166 3-digit country/region code. For example, CAN. |
| `Interpolated` | The `Interpolated` attribute returns False for an address location that is found in the partner data, but returns True if an address does not exist in the partner data and its location is calculated by interpolating between other known addresses. |
| `Label` | The `Label` attribute holds the full name and address of the point of interest such as a city, region, or country. For example, 123 Any Street, Any Town, USA. |
| `Municipality` | The `Municipality` attribute holds a name for a local area, such as a city or town name. For example, Toronto. |
| `Neighborhood` | The `Neighborhood` attribute holds the name of a community district. For example, Downtown. |
| `PostalCode` | The `PostalCode` attribute holds a group of numbers and letters in a country-specific format, which accompanies the address for the purpose of identifying a location. |
| `Region` | The `Region` attribute holds a name for an area or geographical division, such as a province or state name. For example, British Columbia. |
| `Street` | The `Street` attribute holds the name for a street or a road to identify a location. For example, Main Street. |
| `SubRegion` | The `SubRegion` attribute holds a county, or an area that's part of a larger region. For example, Metro Vancouver. |

#### 4.1.5 TimeZone

| Name | Description |
| --- | --- |
| `Name` | The `Name` attribute holds the name of the time zone, following the IANA time zone standard. For example, America/Los_Angeles. |
| `Offset` | The `Offset` attribute holds the time zone's offset, in seconds, from UTC. |

#### 4.1.6 GeometryPoint

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

#### 4.1.7 BoundingBox

| Name | Description |
| --- | --- |
| N/A | This is a generalization for the `FilterBBox` and `RouteBBox` entities and has no additional attributes. |

#### 4.1.8 SouthWestPosition

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

#### 4.1.9 NorthEastPosition

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

#### 4.1.10 SearchPlaceIndexForTextRequest

| Name | Description |
| --- | --- |
| `Language` | The `Language` attribute is used to specify the preferred language used to return results. The value must be a valid BCP 47 language tag, for example, en for English. |
| `MaxResults` | The `MaxResults` attribute is used to specify the maximum number of results returned per request. |
| `Text` | The `Text` attribute is used to specify the address, name, city, or region to be used in the search in free-form text format. For example, 123 Any Street. |
| `IndexName` | The `IndexName` attribute is used to specify the name of the place index resource you want to use for the search. |

#### 4.1.11 FilterCountry

| Name | Description |
| --- | --- |
| `Value` | The `Value` attribute is used if one wants to limit the search results by returning only places that are in a specified list of countries. |

#### 4.1.12 FilterBBox

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `BoundingBox` entity and has no additional attributes. |

#### 4.1.13 BiasPosition

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

#### 4.1.14 SearchPlaceIndexForTextResponse

| Name | Description |
| --- | --- |
| N/A | This has no attributes but holds a list of results via an associated list of `SearchForTextResult` objects. |

#### 4.1.15 SearchForTextResult

| Name | Description |
| --- | --- |
| `Relevance` | The `Relevance` attribute is holds the relative confidence in the match for a result among the results returned. For example, if more fields for an address match (including house number, street, city, country/region, and postal code), the relevance score is closer to 1. |

#### 4.1.16 CalculateRouteRequest

| Name | Description |
| --- | --- |
| `CalculatorName` | The `CalculatorName` attribute specifies the name of the route calculator resource that you want to use to calculate the route. |
| `DepartNow` | The `DepartNow` attribute specifies the time of departure as the current time. Uses the current time to calculate a route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route. |
| `DepartureTime` | The `DepartureTime` attribute specifies the desired time of departure. Uses the given time to calculate the route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route. |
| `DistanceUnit` | The `DistanceUnit` attribute specifies the unit system to specify the distance. |
| `IncludeLegGeometry` | The `IncludeLegGeometry` attribute sets if to include the geometry details in the result for each path between a pair of positions. |
| `TravelMode` | The `TravelMode` attribute specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. You can choose Car, Truck, Walking, Bicycle or Motorcycle as options for the TravelMode. |

#### 4.1.17 DeparturePosition

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

#### 4.1.18 DestinationPosition

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

#### 4.1.19 WaypointPosition

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

#### 4.1.20 CarModeOptions

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `TravelModeOptions` entity and has no additional attributes. |

#### 4.1.20 TruckModeOptions

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `TravelModeOptions` entity and has no additional attributes. |

#### 4.1.21 TruckWeight

| Name | Description |
| --- | --- |
| `Total` | The `Total` attribute specifies the total weight of the truck. |
| `VehicleWeightUnit` | The `VehicleWeightUnit` attribute specifies the unit of measurement to use for the truck weight. |

#### 4.1.22 TruckDimensions

| Name | Description |
| --- | --- |
| `Height` | The `Height` attribute is used to specify the height of the truck. |
| `Length` | The `Length` attribute is used to specify the length of the truck. |
| `DimensionUnit` | The `DimensionUnit` attribute is used to specify the unit of measurement for the truck dimensions. |
| `Width` | The `IndexName` attribute is used to specify the width of the truck. |

#### 4.1.23 CalculateRouteResponse

| Name | Description |
| --- | --- |
| N/A | This has no attributes but holds a `CalculateRouteSummary` object and a list of results via an associated list of `Leg` objects. |

#### 4.1.24 CalculateRouteSummary

| Name | Description |
| --- | --- |
| `DataSource` | The `DataSource` attribute specifies the data provider of traffic and road network data used to calculate the route. Indicates one of the available providers: Esri, Grab or Here. |
| `DistanceUnit` | The `DistanceUnit` attribute specifies the unit system to specify the distance. |
| `Distance` | The `DepartureTime` attribute specifies the total distance covered by the route. The sum of the distance travelled between every stop on the route. |
| `DurationSeconds` | The `DurationSeconds` attribute specifies the total travel time for the route measured in seconds. The sum of the travel time between every stop on the route. |

#### 4.1.25 RouteBBox

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `BoundingBox` entity and has no additional attributes. |

#### 4.1.26 Step

| Name | Description |
| --- | --- |
| `GeometryOffset` | The `GeometryOffset` attribute represents the start position, or index, in a sequence of steps within the leg's line string geometry. For example, the index of the first step in a leg geometry is 0. |
| `Distance` | The `DepartureTime` attribute specifies the total distance covered by the route. The sum of the distance travelled between every stop on the route. |
| `DurationSeconds` | The `DurationSeconds` attribute specifies the total travel time for the route measured in seconds. The sum of the travel time between every stop on the route. |

#### 4.1.27 Leg

| Name | Description |
| --- | --- |
| `Distance` | The `DepartureTime` attribute specifies the total distance covered by the route. The sum of the distance travelled between every stop on the route. |
| `DurationSeconds` | The `DurationSeconds` attribute specifies the total travel time for the route measured in seconds. The sum of the travel time between every stop on the route. |

#### 4.1.28 StepStartPosition

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

#### 4.1.29 StepEndPosition

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

#### 4.1.30 GeometryLineString

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

#### 4.1.31 LegStartPosition

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

#### 4.1.32 LegEndPosition

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

#### 4.1.33 SearchPlaceIndexForPositionRequest

| Name | Description |
| --- | --- |
| `Language` | The `Language` attribute is used to specify the preferred language used to return results. The value must be a valid BCP 47 language tag, for example, en for English. |
| `MaxResults` | The `MaxResults` attribute is used to specify the maximum number of results returned per request. |
| `IndexName` | The `IndexName` attribute is used to specify the name of the place index resource you want to use for the search. |

#### 4.1.34 SearchPlaceIndexForPositionPosition

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

#### 4.1.35 SearchPlaceIndexForPositionResponse

| Name | Description |
| --- | --- |
| N/A | This has no attributes but holds a `SearchPlaceIndexForPositionSummary` object and and an associated list of `SearchForPositionResult` objects. |

#### 4.1.36 SearchForPositionResult

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `result` entity and has no additional attributes. |

#### 4.1.37 SearchPlaceIndexForPositionSummary

| Name | Description |
| --- | --- |
| `Language` | The `Language` attribute is used to specify the preferred language used to return results. The value must be a valid BCP 47 language tag, for example, en for English. |
| `MaxResults` | The `MaxResults` attribute is used to specify the maximum number of results returned per request. |
| `DataSource` | The `DataSource` attribute specifies the data provider of traffic and road network data used. Indicates one of the available providers: Esri, Grab or Here. |

#### 4.1.38 SearchPlaceIndexForPositionSummaryPosition

| Name | Description |
| --- | --- |
| N/A | This is a specialization of the `Position` entity and has no additional attributes. |

### 4.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the Amazon Location Service connector, enumerations list values such as {AS REQUIRED}.

#### 4.2.1 `ENUM_DimensionUnit`

| Name | Caption | Description |
| --- | --- | --- |
| Meters | Meters | Specifies that the distance units are meters. |
| Feet | Feet | Specifies that the distance units are feet. |

#### 4.2.2 `ENUM_DistanceUnit`

| Name | Caption | Description |
| --- | --- | --- |
| Kilometers | Kilometers | Specifies that the distance units are kilometers. |
| Miles | Miles | Specifies that the distance units are miles. |

#### 4.2.3 `ENUM_TravelMode`

| Name | Caption | Description |
| --- | --- | --- |
| Car | Car | Specifies that mode of travel is by car. |
| Truck | Truck | Specifies that mode of travel is by truck. |
| Walking | Walking | Specifies that mode of travel is by walking. |
| Bicycle | Bicycle | Specifies that mode of travel is by bicycle. |
| Motorcycle | Motorcycle | Specifies that mode of travel is by motorcycle. |

#### 4.2.4 `ENUM_VehicleWeightUnit`

| Name | Caption | Description |
| --- | --- | --- |
| Kilograms | Kilograms | Specifies that the weight of the vehicle is expressed in kilograms. |
| Pounds | Pounds | Specifies that the weight of the vehicle is expressed in pounds. |

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow.

#### 4.3.1 CalculateRoute {#calculate-route}

The `CalculateRoute` activity allows you to calculate a route between multiple points and returns the distance and duration of the proposed routes. It requires a `Credentials` object, a `CalculateRouteRequest` object containing the required information and the AWS_Region in which the Location service should be called.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `CalculateRouteRequest` | An array of objects. |

This activity returns a `CalculateRouteResponse` object with objects from the following entities, as shown in the table below:

| Name |    Generalization |    Documentation |
| --- | --- | --- |
| `CalculateRouteResponse` |  | This entity holds the root object for the `CalculateRoute` operation |
| `CalculateRouteSummary` |  | This entity holds a summary of the calculated route. |
| `RouteBBox` | `BoundingBox` | This entity specifies a geographical box surrounding a route. Used to zoom into a route when displaying it in a map. For example, [min x, min y, max x, max y]. |
| `Leg` |  | This entity contains the calculated route's details for each path between a pair of positions. The number of legs returned corresponds to one fewer than the total number of positions in the request. |
| `Step` |  | This entity represents an element of a leg within a route. A step contains instructions for how to move to the next step in the leg. |
| `StepStartPosition` | `Position` | This entity specifies the starting position of a step. If the position is the first step in the leg, this position is the same as the start position of the leg. |
| `EndPosition` | `Position` | This entity specifies the end position of a step. If the position the last step in the leg, this position is the same as the end position of the leg. |
| `GeometryLineString` | `Position` | This entity contains the geometry details for each path between a pair of positions. Used in plotting a route leg on a map. |
| `LegStartPosition` | `Position` | This entity contains the starting position of the leg. |
| `LegEndPosition` | `Position` | This entity contains the terminating position of the leg. |

#### 4.3.2 SearchPlaceIndexForPosition

The `SearchPlaceIndexForPosition` activity takes a set of coordinates and returns the nearest points of interest. It requires a `Credentials` object, a `SearchPlaceIndexForPositionRequest` object containing the required information and the AWS_Region in which the Location service should be called.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `SearchPlaceIndexForPositionRequest` | An array of objects. |

This activity returns a `SearchPlaceIndexForPositionResponse` object with objects from the following entities, as shown in the table below:

| Name |    Generalization |    Documentation |
| --- | --- | --- |
| `SearchPlaceIndexForPositionResponse` |  | This entity holds the root object for the `SearchPlaceIndexForPosition` operation |
| `SearchForPositionResult` | `Result` | This entity contains a search result from a position search query that is run on a place index resource. |
| `SearchPlaceIndexForPositionSummary` |  | This entity holds a summary of the request sent by using SearchPlaceIndexForPosition. |
| `SearchPlaceIndexForPositionSummaryPosition` | `Position` | This entity contains the position specified in the request. |

#### 4.3.3 SearchPlaceIndexForText

The `SearchPlaceIndexForText` activity geocodes free-form text, such as an address, name, city, or region to allow you to search for places or points of interest. It requires a `Credentials` object, a `SearchPlaceIndexForTextRequest` object containing the required information and the AWS_Region in which the Location service should be called.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `SearchPlaceIndexForTextRequest` | An array of objects. |

This activity returns a `SearchPlaceIndexForTextResponse` object with objects from the following entities, as shown in the table below:

| Name |    Generalization |    Documentation |
| --- | --- | --- |
| `SearchPlaceIndexForTextResponse` |  | This entity holds the root object for the `SearchPlaceIndexForText` operation |
| `SearchForTextResult` | `Result` | This entity contains a search result from a text search query that is run on a place index resource. |
