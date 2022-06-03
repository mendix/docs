---
title: "Get Started with the TimeSeries Connector"
url: /howto8/extensibility/get-started-with-the-timeseries-connector/
category: "Extensibility"
weight: 100
tags: ["iot", "connector", "timeseries", "big data", "analytics", "extensibility"]
---

## 1 Introduction

This how-to is focused on implementing and understanding the TimeSeries Connector and the TimeSeries Analytics platform. The TimeSeries Connector is especially useful when your application needs to handle large amounts of data. 

When looking at the IoT trend recently, one hundred sensors that send data each minute will send 144.000 objects to your database per day, one hundred and fifty will send 216.000 objects. See how these numbers start to add up once you add a few more sensors? Now imagine having your standard relational database handle this amount of data, let alone perform analysis on it. The TimeSeries Analytics platform is designed specifically to handle these amounts of data.

**This how-to will teach you how to do the following:**

* Sign up for the TimeSeries Connector
* Configure the module settings
* Create an asset
* Create a channel
* Store measurements
* Implement the actions

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have Mendix Studio Pro installed (download [here](https://marketplace.mendix.com/link/studiopro/))
* Have the [Community Commons Function Library](/appstore/modules/community-commons-function-library/) in your app

## 3 Sign Up for the TimeSeries Connector

Follow these steps to get access to the TimeSeries connector and receive an API key:

1. Sign up for the connector by going to the [TimeSeries Connector website](https://connector.timeseries.com/) and registering for free. You will receive your API key in an email after registering.

  {{% alert color="info" %}}
  It can take up to a few hours to generate the key and send it to you. This key is used to activate and access your TimeSeries Analytics instance.
  {{% /alert %}}

2. After you receive the key, import the [TimeSeries](https://marketplace.mendix.com/link/component/31951/) connector into your app from the Mendix Marketplace.

## 4 Configure the Module Settings

After importing the module, there are a couple of settings you need to configure. Some of the settings are preconfigured.

### 4.1 Set the Constants

There are three constants that you can configure. Follow these steps to configure them:

1. Expand your app and go to **App Store modules** > **TimeSeriesConnector** > **Settings**.
2. Open the **TimeSeriesAccessKey** constant.
3. Paste your TimeSeries API key in the **Default value** field and click **OK**.

  {{% alert color="info" %}}

  There are two more constants that don't need to be configured unless otherwise instructed.

  * `Dateformat` – by default set to **yyyy-MM-dd'T'HH:mm:ss.SSSZ** (and should remain like that)
  * `TimeSeriesBasePath` – by default set to `https://timeseries-connector.timeseries.nl:16000/` (and should remain like that unless communicated otherwise)

    {{% /alert %}}

### 4.2 Available Enumerations

These are the available enumerations in the TimeSeriesConnector module:

* **Enum_AggregationInterval** – `INTERVAL` or `REGISTER` – these are determined by the TimeSeries platform and are the supported interval types for aggregation calls
* **Enum_AggregationPeriod** – hourly, daily, weekly, monthly, and yearly are the supported time periods
* **Enum_MeasurementType** – `INTERVAL`, `REGISTER`, or `EVENT` – these are determined by the TimeSeries platform and are the only supported measurement types (note that measurements of the `EVENT` type cannot be aggregated)
* **Enum_SearchType** – Purely for UI. These are used to determine which search to perform

## 5 Implementation Example

Let's take the concept of a house. In this scenario the house is an asset, of which you can have multiple. This house will use gas and electricity, which we call channels. Each channel can hold values over time; electricity usage is measured and saved every X seconds, minutes, hours, and so on. These measurements can later be used for analysis.

{{< figure src="/attachments/howto8/extensibility/get-started-with-the-timeseries-connector/Systemoverview.PNG" >}}

The module comes with a ready-to-use domain model, which will be used in this how-to. This is not a necessity, and you can also use your own domain model. All referenced microflows in this how-to can also be found in the module.

{{% alert color="warning" %}}
If you want to use your own domain model, make sure that your entities have the necessary attributes for every action that requires a Type Parameter.
{{% /alert %}}

The domain model looks like this:

{{< figure src="/attachments/howto8/extensibility/get-started-with-the-timeseries-connector/Domainmodel.png" >}}

### 5.1 Creating an Asset

You start the implementation by creating an asset object in a page, or directly in a microflow.

1. Provide an **Asset name**, otherwise the connector will return an error. You are free to choose the name.

  In our example implementation, we have created a page with an *Asset* object on which the attributes can be set. The ID is grayed out because it will be returned by the connector later in this process.

  {{< figure src="/attachments/howto8/extensibility/get-started-with-the-timeseries-connector/CreateAsset.png" >}}

After having set the **Asset name**, we trigger some validation, call the **Create asset** action, and save the **Asset ID** for later references. Reference the microflow below:

{{< figure src="/attachments/howto8/extensibility/get-started-with-the-timeseries-connector/create-asset-microflow.png" >}}

### 5.2 Creating a Channel

The next step is creating a *Channel*. This *Channel* should belong to an *Asset*. Follow these steps to create a *Channel*:

1. Provide an **Asset ID** to make sure your channel belongs to an asset.
2. Provide a **Channel key**. 
3. Provide a **Measurement interval**. 

  {{% alert color="info" %}}

  You are free to choose the channel key name and the measurement interval. The interval is stored and can be used for analysis.

  {{% /alert %}}


In our example implementation we have created a page with a *Channel* object, on which the attributes and the association with an asset can be set.

{{< figure src="/attachments/howto8/extensibility/get-started-with-the-timeseries-connector/CreateChannel.png" >}}

After having set the necessary attributes and associations, we trigger some validation and call the **Add channel** action. This action will return a Boolean, specifying if the action was successful. Reference the microflow below:

{{< figure src="/attachments/howto8/extensibility/get-started-with-the-timeseries-connector/create-channel-microflow.png" >}}

### 5.3 Storing Measurement(s)

Now that you have created an asset with a channel, you can start storing measurements. Follow these steps to store your measurements:

1. Make sure your measurement belongs to a channel (and thus, an asset).
2. Provide the **Date and time** of the measurement.
3. Provide the **Measurement type**.
4. Provide the **Value**.

  {{% alert color="info" %}}

  The **Date and time** needs to be formatted in UTC to the following format: yyyy-MM-dd'T'HH:mm:ss.SSSZ. The **Measurement type** can be INTERVAL, REGISTER, or EVENT. The **Value** is a decimal.

  {{% /alert %}}

In our example implementation we have created a page with a *measurement* object, on which the attributes and the associations with an *Asset* and *Channel* can be set.

{{< figure src="/attachments/howto8/extensibility/get-started-with-the-timeseries-connector/StoreMeasurement.png" >}}

After having set the necessary attributes and associations, we trigger some validation and call the **Store measurement** action. This action will return a Boolean, which is not used. Reference the microflow below:

{{< figure src="/attachments/howto8/extensibility/get-started-with-the-timeseries-connector/store-measurement-microflow.png" >}}

### 5.4 Aggregating Your Data

Once your channel has sufficient data, the TimeSeries Connector will really start to shine. Instead of having enormous amounts of data in your database, which takes a long time to aggregate for reporting, you can now simply ask the TimeSeries platform for an aggregation of your data. Follow these steps to set up your data aggregation:

1. Create an **AggregateSearchResult** object to use as the **Type parameter**. If you create a new entity, make sure it has all the necessary attributes as defined in this example:

  {{< figure src="/attachments/howto8/extensibility/get-started-with-the-timeseries-connector/example-aggregate-domain.png" >}}

2. Provide the empty **Type parameter** used to populate the results.
3. Provide the **Asset ID** and **Channel key** to aggregate in.
4. Provide a **Start date** and **End date** in epoch/unix time.
5. Provide an **Aggregation period**, such as hourly or daily, in the correct ISO format.
6. Provide the **Timezone** in which the results will be aggregated.
7. Provide the **Measurement type** in which the measurements have been stored.

In our example implementation we have created a page with an *AggregateSearch* object, on which the search values and the associations with an asset and channel can be set.

{{< figure src="/attachments/howto8/extensibility/get-started-with-the-timeseries-connector/AggregateSearch.png" >}}

After having set the necessary attributes and associations, we trigger some validation, prepare the data, and call the **Aggregate between timestamps** action. This action will return a list of your type parameter, *AggregateSearchResult*. This list contains an aggregation of the channel data by the aggregation period specified. For example: From March 1st up to March 10th, you will receive a list of your total electricity usage per day. This means your list will hold 10 objects. Reference the microflow below:

{{< figure src="/attachments/howto8/extensibility/get-started-with-the-timeseries-connector/get-aggregations-microflow.png" >}}

## 6 Conclusion

This how-to provides an example on how to implement a basic subset of the available actions. Over time, more actions will be released.

This how-to was written by [Paul Ketelaars](https://developer.mendixcloud.com/link/profile/27632) and [Willem van Zantvoort](https://developer.mendixcloud.com/link/profile/27200). If you have any questions, please contact Paul Ketelaars at <paul.ketelaars@timeseries.nl> or Willem van Zantvoort at <willem.van.zantvoort@timeseries.nl>. 
