---
title: "Build an IoT App 5: "
space: "Mendix 7 How-To's"
parent: "build-an-iot-app"
description: "Presents details on how to configure the sensor data subscription and expand the Mendix Logistics IoT app."
tags: ["iot", ________]
---

### Step 5 - Creating Alerts

In this section, you will learn how to use business logic to configure the creation of alerts for when the cargo exceeds the temperature threshold.  

#### Step 5.1 - Extending the OnMessage Flow to Create Alerts

If the temperature threshold has been exceeded, an alert needs to be created. To extend the OnMessage microflow to create alerts, follow these steps:

1. Open the **IVK_OnMessage_HandleData_CreateTemperatureAlert** microflow (from the **Step 5.1** folder).
2. Add a **Retrieve** activity and keep the **Source** as **By association**.
3. To see what the threshold is for the shipment, the **CargoType** object needs to be retrieved. So, for the **Association**, select **Shipment** > **Shipment_CargoType** and click **OK**.
4. Insert an **Exclusive split** to check that the object is available (as in, not empty). In the **Expression** editor, add `$CargoType != empty`.
5. Insert another **Exclusive split** that will check that the temperature threshold exists. In the **Expression** editor, add `$CargoType/HasTemperatureThreshold`.
6. Set the condition value on this flow as **true**.
7. Insert one more **Exclusive split** that will check if the temperature is higher than the threshold. In the **Expression** editor, add `$SensorData/AmbientTemp > $CargoType/TemperatureThreshold`.
8. Set the condition value on this flow as **true**.
9. Add a **Create object** activity on this flow.
10. Select **Alert** for the **Entity** and set **Commit** to **Yes**.
11. Click **New** to add a new attribute. Set the **Member** to **Message** and set the **Value** as `'Temperature is too high'`.
12. Add another attribute. Set the **Member** to **AlertType** and click **Generate** to verify that the expression value is set to **Constant** > **Temp**.
13. Add one more attribute. Set the **Member** to **Tutorial_Workspace.Alert_Shipment**. Set the **Value** as `$Shipment`.
14. You still need to handle the outgoing sequence flows from the exlusive splits, so insert a **Merge** after the **NewAlert** entity.
15. Drag the **false** flow from each exclusive split to the merge.
16. Save the changes, click **Run Locally**, then click **View App**.
17. On the shipment overview page of the app, select **Container Bananas**, then click **Subscribe**. The data will now come into the indicators.
18. In order to generate alerts you need to make sure the temperature threshold, which you can configure on the Cargo Type edit page, is lower than the temperature data being pushed to the app.
19. The temperature threshold was set to 30 degrees in this example, so when the temperature goes above 30, you will get an alert. Click the alerts icon in the upper-right side of the screen. This will open the **Current alerts** panel, where you will see the newest alert.

#### Step 5.2 - Improving Alert Mechanism

Now you get an alert every time the temperature exceeds the threshold, which is unnecessary after the initial alert. You need an indicator on a shipment that an alert is active, so now you are going to build some logic that prevents these repetitive alert messages.

To improve the alert mechanism, follow these steps:

1. In the Modeler, open the **Domain Model** and then open the **Shipment** entity.
2. Click **New** to add a new attribute. Name this attribute **IsAlertedForTemperature** and set **Type** to **Boolean**.
3. Open the **IVK_OnMessage_HandleData_CreateTemperatureAlert** microflow and insert an **Exclusive split** before the **NewAlert** entity.
4. Set the **Expression** as `$Shipment/IsAlertedForTemperature`. This means that if an alert has already been created, an extra alert won't be created.
5. Drag a flow from this exclusive split to the merge (located after the **NewAlert** object), and set the **Condition value** on this flow to **true**. 
6. Add a **Change object** activity between the **NewAlert** object and the merge, and set the input variable to **Shipment**.
7. Click **New** to add a new change item, which will be **IsAlertedForTemperature**. Set the **Value** as `true`.
8. To change the message, open the **NewAlert** object and click the **Message** attribute. Change the message to `'Temperature is too high: ' + $SensorData/AmbientTemp`. Click **OK**.
9. Save the changes, click **Run Locally**, and click **View App**.
10. On the shipment overview page of the app, select **Container Bananas**, then click **Subscribe**.
11. Open the **Current alerts** panel by clicking the exclamation mark icon in the top right of the page. You will see a message like this: **Temperature is too high: 15**.
