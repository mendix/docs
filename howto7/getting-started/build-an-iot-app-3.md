---
title: "Build an IoT App 3: "
space: "Mendix 7 How-To's"
parent: "build-an-iot-app"
description: "Presents details on how to configure the sensor data subscription and expand the Mendix Logistics IoT app."
tags: ["iot", ________]
---

### Step 3 - Handling the Sensor Data

In the previous section, you verified that you are receiving data. This is exciting because now we can take this data and handle it the way we like! In this section, you are going to process the data you receive in order to make it visible on the details page of the shipment.

To configure the handling of the sensor data, follow these steps:

1. Return to the **IVK_Subscribe** microflow and double-click the **Data - Subscribe to MQTT topic** activity.
2. Change the **On message microflow** to **IVK_OnMessage_HandleData** (located in the **Step 3** folder), which is the microflow that is triggered whenever AWS is sending data. It was originally configured to appear in the **Console**, and now you are configuring it to appear on the page.
    * The **Payload** parameter contains a message in JSON format, which is a lightweight data-interchange format. To work with this data we need to turn it into an object by mapping the JSON message to an entity. In this microflow the JSON message is mapped to a **SensorData** object. The **Topic** parameter is used to retrieve the **Topic** object from the database in order to retrieve the **Shipment object** associated to it.
3. Now you need to associate the shipment object with the sensor data object created from the JSON response. Add a **Change object** activity and double click it to edit it. Set the **Variable** to **SensorData**, and set **Commit** to **Yes**, which will persist the object to the database. Click **New** to add the **Tutorial_Workspace.SensorData_Topic** attribute and enter this **value**: `$TopicObject`.
4. On the details page we like to show the date and time the latest sensor data is received. For this you need to add a **Change object** activity to the flow:<br>
    a. Set the **Variable** to **Shipment**.<br>
    b. Set **Commit** to **Yes**.<br>
    c. Click **New** to add a new change item. Set the **Member** to **LatestSensorUpdate**.<br>
    d. Click **Generate** to set the **Expression value** to **Token** with **CurrentDateTime**.<br>
    e. Click **OK**. This new microflow action will allow you to see the last date a message from AWS was recieved on the **Shipment_Detail** page.
5. Save the changes, click **Run Locally**, then click **View App**.
6. In the app, click **Subscribe** and observe the temperature chart updating as data is being pushed to the app!

