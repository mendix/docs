---
title: "Build a Logistics IoT App Step 3: Handle the Sensor Data"
parent: "build-an-iot-app"
description: "Describes how to handle the temperature sensor data in the Mendix Logistics IoT app."
tags: ["iot", "logistics", "supply chain", "cargo", "shipment", "logistics", "sensor"]
---

## 1 Introduction

In the previous how-to, you verified that you are receiving data. This is exciting, because now you can take this data and handle it how you like! 

In this how-to, you are going to process the data you receive in order to make it visible on the details page of the shipment.

**This how-to will teach you how to do the following:**

* Handle the sensor data

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisite:

* Use the previous how-to in this series: [How to Build a Logistics IoT App Step 2: Configure the Sensor Data Subscription](build-an-iot-app-2)

### 3 Handling the Sensor Data (Step 3)

To configure the handling of the sensor data, follow these steps:

1. Return to the **IVK_Subscribe** microflow and double-click the **Data - Subscribe to MQTT topic** activity.
2. Change the **On message microflow** to **IVK_OnMessage_HandleData** (located in the **Step 3** folder), which is the microflow that is triggered whenever AWS is sending data. It was originally configured to appear in the **Console**, and now you are configuring it to appear on the page.
    * The **Payload** parameter contains a message in the JSON format, which is a lightweight data-interchange format. To work with this data, we need to turn it into an object by mapping the JSON message to an entity. In this microflow, the JSON message is mapped to a **SensorData** object. The **Topic** parameter is used to retrieve the **Topic** object from the database in order to retrieve the **Shipment object** associated to it.
3. Now you need to associate the shipment object with the sensor data object created from the JSON response. Add a **Change object** activity and double-click to edit it. Set the **Variable** to **SensorData**, and set **Commit** to **Yes**, which will persist the object to the database. Click **New** to add the **Tutorial_Workspace.SensorData_Topic** attribute and enter this **value**: `$TopicObject`.
4. On the details page, you want to show the date and time that the latest sensor data is received. To do this, add a **Change object** activity to the flow:<br>
    a. Set the **Variable** to **Shipment**.<br>
    b. Set **Commit** to **Yes**.<br>
    c. Click **New** to add a new change item. Set the **Member** to **LatestSensorUpdate**.<br>
    d. Click **Generate** to set the **Expression value** to **Token** with **CurrentDateTime**.<br>
5. Click **OK**. This new microflow action will allow you to see the last date a message from AWS was received on the **Shipment_Detail** page.
6. Save the changes, click **Run Locally**, then click **View**.
7. In the app, click **Subscribe** and observe the temperature chart updating as data is being pushed to the app!

The sensor data handling has been configured, so go to [How to Build a Logistics IoT App Step 4: Add Another Data Dimension](build-an-iot-app-4) to learn how you can expand the app even more.
## 4 Related Content

* [How to Build a Logistics IoT App](build-an-iot-app)
* [How to Build a Logistics IoT App Step 1: Connect App Pages](build-an-iot-app-1)
* [How to Build a Logistics IoT App Step 2: Configure the Sensor Data Subscription](build-an-iot-app-2)
* [How to Build a Logistics IoT App Step 4: Add Another Data Dimension](build-an-iot-app-4)
* [How to Build a Logistics IoT App Step 5: Create Alerts](build-an-iot-app-5)
* [How to Build a Logistics IoT App Step 6: Expand the IoT App Tracking](build-an-iot-app-6)
