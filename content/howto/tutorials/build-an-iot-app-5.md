---
title: "Step 5: Create Alerts"
parent: "build-an-iot-app"
description: "Describes how to extend the Mendix Logistics IoT app to create alerts."
tags: ["iot", "logistics", "supply chain", "cargo", "shipment", "logistics", "sensor"]
---

## 1 Introduction

Now that the data has been received, you can implement functionality to act on any outliers in the data. 

In this how-to, you will learn how to use business logic to create alerts for when the cargo exceeds the temperature threshold.

**This how-to will teach you how to do the following:**

* Extend the OnMessage flow to create alerts
* Improve the alert mechanism

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisite:

* Use the previous how-to in this series: [Step 4: Add Another Data Dimension](build-an-iot-app-4)

## 3 Creating Alerts (Step 5)

### 3.1 Extending the OnMessage Flow to Create Alerts (Step 5.1)

If the temperature threshold has been exceeded, an alert needs to be created. To extend the OnMessage microflow to create alerts, follow these steps:

1. Return to the **IVK_Subscribe** microflow and double-click the **Data - Subscribe to MQTT topic** activity.
2. Change the **On message** microflow to **IVK_OnMessage_HandleData_CreateTemperatureAlert** (located in the **Step 5.1** folder)
3. Open the **IVK_OnMessage_HandleData_CreateTemperatureAlert** microflow.
4. Add a **Retrieve** activity and keep the **Source** as **By association**.
5. To see what the threshold is for the shipment, the **CargoType** object needs to be retrieved. So, for the **Association**, select **Shipment** > **Shipment_CargoType** and click **OK**.
6. Insert an **Exclusive split** to check that the object is available (as in, not empty). In the **Expression** editor, add `$CargoType != empty`.
7. Insert another **Exclusive split** that will check that the temperature threshold exists. In the **Expression** editor, add `$CargoType/HasTemperatureThreshold`.
8. Set the condition value on this flow as **true**.
9. Insert one more **Exclusive split** that will check if the temperature is higher than the threshold. In the **Expression** editor, add `$SensorData/AmbientTemp > $CargoType/TemperatureThreshold`.
10. Set the condition value on this flow as **true**.
11. Add a **Create object** activity on this flow.
12. Select **Alert** for the **Entity** and set **Commit** to **Yes**.
13. Click **New** to add a new attribute. Set the **Member** to **Message** and set the **Value** as `'Temperature is too high'`.
14. Add another attribute. Set the **Member** to **AlertType** and click **Generate** to verify that the expression value is set to **Constant** > **Temp**.
15. Add one more attribute. Set the **Member** to **Tutorial_Workspace.Alert_Shipment**. Set the **Value** as `$Shipment`.
16. You still need to handle the outgoing sequence flows from the exlusive splits, so insert a **Merge** after the **NewAlert** entity.
17. Drag the **false** flow from each exclusive split to the merge.
18. Save the changes, click **Run Locally**, then click **View**.
19. On the shipment overview page of the app, select **Container Bananas**, then click **Subscribe**. The data will now come into the indicators.
20. In order to generate alerts, you need to make sure that the temperature threshold (which you can configure on the **CargoType** edit page) is lower than the temperature data being pushed to the app. The temperature threshold was set to 23 degrees in this example, so when the temperature goes above 23, you will get an alert. Click the alerts icon in the upper-right side of the screen. This will open the **Current alerts** panel, where you will see the newest alert.

### 3.2 Improving the Alert Mechanism (Step 5.2)

You get an alert every time the temperature exceeds the threshold, which is unnecessary after the initial alert. You need an indicator on a shipment that an alert is active, so now you are going to build some logic that prevents these repetitive alert messages.

To improve the alert mechanism, follow these steps:

1. In the Desktop Modeler, open the **Domain Model** and then open the **Shipment** entity.
2. Click **New** to add a new attribute. Name this attribute **IsAlertedForTemperature** and set **Type** to **Boolean**.
3. Open the **IVK_OnMessage_HandleData_CreateTemperatureAlert** microflow and insert an **Exclusive split** before the **NewAlert** entity.
4. Set the **Expression** to `$Shipment/IsAlertedForTemperature`. This means that if an alert has already been created, an extra alert won't be created.
5. Drag a flow from this exclusive split to the merge (located after the **NewAlert** object), and set the **Condition value** on this flow to **true**. 
6. Add a **Change object** activity between the **NewAlert** object and the merge, and set the input variable to **Shipment**.
7. Click **New** to add a new change item, which will be **IsAlertedForTemperature**. Set the **Value** to `true`.
8. To change the message, open the **NewAlert** object and click the **Message** attribute. Change the message to `'Temperature is too high: ' + $SensorData/AmbientTemp`. Click **OK**.
9. Save the changes, click **Run Locally**, and click **View**.
10. On the shipment overview page of the app, select **Container Bananas**, then click **Subscribe**.
11. Open the **Current alerts** panel by clicking the exclamation mark icon in the top right of the page. You will see a message like this: **Temperature is too high: 15**.

Excellent! Now that you have configured the alert mechanism, you can move on to the final how-to in this tutorial: [Step 6: Expand the IoT App Tracking](build-an-iot-app-6).

## 4 Related Content

* [Step 1: Connect App Pages](build-an-iot-app-1)
* [Step 2: Configure the Sensor Data Subscription](build-an-iot-app-2)
* [Step 3: Handle the Sensor Data](build-an-iot-app-3)
* [Step 4: Add Another Data Dimension](build-an-iot-app-4)
* [Step 6: Expand the IoT App Tracking](build-an-iot-app-6)
