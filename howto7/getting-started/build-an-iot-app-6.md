---
title: "Build an IoT App 6: "
space: "Mendix 7 How-To's"
parent: "build-an-iot-app"
description: "Presents details on how to configure the sensor data subscription and expand the Mendix Logistics IoT app."
tags: ["iot", ________]
---

### Step 6 - Adding a New Shipment with a Sensing Device

In this section, you are going to expand the shipments that will be tracked by the app.

#### Step 6.1 - Adding a New Shipment

To add a new shipment, follow these steps:

1. In the Modeler, open the **Homepage**.
2. Right-click the first row of the **Layout grid** and select **Insert row above**. Select the default **full** row option.
3. In this new row, right-click and add a **Create button**.
4. In the **Select entity** dialog box, select the **Shipment** entity.
5. Right-click the **New** button and select **Generate page...**.
6. Enter *Shipment_New* for the **Page name**, then select **PopupLayout** for the **Navigation layout**.
7. Select **Forms** > **Form basic horizontal**, then click **OK**.
8. Right-click the **New** button and select **Go to page**.
9. On this new form, delete the input fields that you don't want to provide yet: **Lat**, **Lng**, **Is alerted for temperature**, **Latest sensor update**, and **Sensor view**.
10. Right-click the drop zone below **Cargo value** and in the **Connector**, double-click **Shipment_CargoType** > **Cargo Type** > **Description**.
11. Right-click the drop zone below **Cargo Type** and in the **Connector**, double-click **Shipment_Topic** > **Topic** > **Name** .
12. Select the whole page and in the **Properties** pane, set the **Navigation** visibility to **User**.
13. Save the changes, click **Run Locally**, then click **View App**.
14. On the **Global shipments** page of the app, click **New**. This adds a new shipment to the homepage. If you'd like to see a detailed shipment instance on the app homepage, you can fill in the details on the **Edit Shipment** form.

#### Step 6.2 - Improving the Input Form

To improve the input form, follow these steps:

1. In the Modeler, open the **Shipment_New** form and select **Topic**.
2. In the **Properties** pane, select **Selectable objects** > **Source** > **Microflow**.
3. Click **Microflow** and then click **New** to create a new microflow. Name the new microflow **GetAvailableTopics**.
4. Add a **Retrieve** activity, and set the **Entity** to **Topic**.
5. For the **XPath constraint**, enter `[not(Tutorial_Workspace.Shipment_Topic/Tutorial_Workspace.Shipment)]`.
6. Open the **End Event**. For the **Return value**, enter `$TopicLis`.
7. In the **Properties** for the microflow, set **Allowed roles** to **User**.
8. Save the changes, click **Run Locally**, and click **View App**. Observe how the **Topic** drop-down menu only includes the topics that are available.
