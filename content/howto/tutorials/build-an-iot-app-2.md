---
title: "Step 2: Configure the Sensor Data Subscription"
parent: "build-an-iot-app"
description: "Describes how to configure the sensor data subscription in the Mendix Logistics IoT app."
tags: ["iot", "logistics", "supply chain", "cargo", "shipment", "logistics", "sensor"]
---

## 1 Introduction

This how-to describes how to configure the sensor data subscription in the Mendix Logistics IoT app.

**This how-to will teach you how to do the following:**

* Configure the sensor data subscription

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisite:

* Use the previous how-to in this series: [Step 1: Connect App Pages](build-an-iot-app-1)

## 3 Configuring the Sensor Data Subscription (Step 2)

In this section, you will connect a shipment to an IoT device so the data that the device is generating can be used.

To configure the sensor data subscription, follow these steps:

1. In the Desktop Modeler, open the **Shipment_Detail** page.
2. Right-click the left-side column of the layout grid (in which **Movement** and **Temperature** are also located) and select **Add widget** > **Button** > **Call microflow button** (note that a microflow allow you to express the logic of your application and functions as a visual way of expressing what traditionally ends up in textual program code):

    ![](attachments/build-an-iot-app/select-layoutgrid-column.png)

3. In the **Select Microflow** dialog box, select the **IVK_Subscribe** microflow (you can find it by typing **IVK_Subscribe** in the *Filter* input box).
4. Double-click the button and enter *Subscribe* for the caption.
5. Right-click the button and select **Go to microflow** to inspect the microflow.
    * When invoking a microflow, you can pass the context of a page to it. That enables you to work with all the data associations from the context objects. In this case, the context object is **Shipment**. You can view the structure of the **Shipment** object, which is called an entity, by right-clicking the **Shipment** input parameter and selecting the **Go to entity** option. The Shipment is associated to other entities like **Alert** and **Topic**, which means that objects from different entities are related to each other. The relation between a **Shipment** object and a **Topic** object and the relation between a **Topic** object and an **IoTPlatformConfiguration** object enables retrieval of the data required for connecting to AWS.
    * Return to the microflow to see what is happening there. In the farthest left activity, the **Topic** object is retrieved over its association to the **Shipment** object. It is a best practice to check that the association is not empty. If that is **true**, the microflow retrieves the **IoTPlatformConfiguration** object that is associated to the topic. The microflow must then check if there is an **IoTPlatformConfiguration** object available. If that is **true**, the data from those objects is used in the subscribe action (via the **AWS IoT Connector**, which is available in the [Mendix App Store](https://appstore.home.mendix.com/link/app/2868/Mendix/AWS-IoT-Connector)). In the subscribe activity, a microflow action is configured for the subscription to the topic on AWS. So, everytime new data is published on that topic, AWS will send a message to the app with that data and trigger this microflow.
6. Double-click the **Data - Subscribe to MQTT topic** activity and for the **On message microflow**, click **Show** to display the microflow from the details of the connector action.

    ![](attachments/build-an-iot-app/subscribe-to-mqtt-topic.png)

7. In the **IVK_OnMessage_LogResponse** microflow, there are two parameters: **Topic** (string) and **Payload** (string). You must log both parameters in the **Console** to verify that you are receiving the data (if the Console is not open, select **View** > **Console**).
8. Save the changes, click **Run Locally**, then click **View**.
9. Refresh the app in the browser, then click **Subscribe** and notice that you get a confirmation message. At this point you won't see anything happening in the app as you configured the app to log the messages it receives from AWS.
10. Return to the Desktop Modeler and observe the **Console**. Double-click the log message **Sensor data received**, which will open the **View Log Line Details** pop-up window, where you can see the **Topic** and **Payload** (JSON) in the **Message** section. Receiving this kind of log message means you have just connected to AWS and are receiving real-world data!

Now that you have the sensor data subscription set up, go through [Step 3: Handle the Sensor Data](build-an-iot-app-3) to learn about processing the data and making it visible in the app.

* [Step 1: Connect App Pages](build-an-iot-app-1)
* [Step 3: Handle the Sensor Data](build-an-iot-app-3)
* [Step 4: Add Another Data Dimension](build-an-iot-app-4)
* [Step 5: Create Alerts](build-an-iot-app-5)
* [Step 6: Expand the IoT App Tracking](build-an-iot-app-6)
