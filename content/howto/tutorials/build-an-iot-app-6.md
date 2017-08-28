---
title: "Build a Logistics IoT App Step 6: Expand the IoT App Tracking"
parent: "build-an-iot-app"
description: "Describes how to extend the shipments that the Mendix Logistics IoT app will track."
tags: ["iot", "logistics", "supply chain", "cargo", "shipment", "logistics", "sensor"]
---

## 1 Introduction

In this how-to, you are going to expand the shipments that will be tracked by the app and also improve the input form.

**This how-to will teach you how to do the following:**

* Add a new shipment with a sensing device
* Improve the input form

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisite:

* Use the previous how-to in this series: [How to Build a Logistics IoT App Step 5: Create Alerts](build-an-iot-app-5)

## 3 Expanding the IoT App Tracking (Step 6)

### 3.1 Adding a New Shipment with a Sensing Device (Step 6.1)

To add a new shipment, follow these steps:

1. In the Desktop Modeler, open the **Homepage**.
2. Right-click the first row of the **Layout grid** and select **Insert row above**. Select the default **full** row option.
3. In this new row, right-click and add a **Create button**.
4. In the **Select entity** dialog box, select the **Shipment** entity.
5. Right-click the **New** button and select **Generate page...**.
6. Enter *Shipment_New* for the **Page name**, then select **PopupLayout** for the **Navigation layout**.
7. Select **Forms** > **Form basic horizontal**, then click **OK**.
8. Right-click the **New** button and select **Go to page**.
9. On this new form, delete the input fields that you don't want to provide yet: **Lat**, **Lng**, **Is alerted for temperature**, **Latest sensor update**, and **Sensor view**.
10. Select the drop zone below **Cargo value** and in the **Connector**, expand **Shipment_CargoType** and double-click **Cargo Type** > **Description** to create a reference selector.
11. Select the drop zone below **Cargo Type** and in the **Connector**, expand **Shipment_Topic** and double click **Topic** > **Name** to create another reference selector.
12. Select the whole page and in the **Properties** pane, set **Navigation** > **Visible for** to **User**.
13. Save the changes, click **Run Locally**, then click **View**.
14. On the **Global shipments** page of the app, click **New**. This adds a new shipment to the homepage. If you'd like to see a detailed shipment instance on the app homepage, you can fill in the details on the **Edit Shipment** form.

### 3.2 Improving the Input Form (Step 6.2)

To improve the input form, follow these steps:

1. In the Desktop Modeler, open the **Shipment_New** form and select **Topic**.
2. In the **Properties** pane, select **Selectable objects** > **Source** > **Microflow**.
3. Click **Microflow** and then click **New** to create a new microflow. Name the new microflow **GetAvailableTopics**, and then open this new microflow.
4. Add a **Retrieve** activity to the microflow. Select **From database** as sthe ource and set the **Entity** to **Topic**.
5. For the **XPath constraint**, enter `[not(Tutorial_Workspace.Shipment_Topic/Tutorial_Workspace.Shipment)]`.
6. Open the **End Event**. For the **Return value**, enter `$TopicList`.
7. In the **Properties** for the microflow, set **Allowed roles** to **User**.
8. Save the changes, click **Run Locally**, and click **View**. Observe how the **Topic** drop-down menu only includes the topics that are available.

Congratulations! You have completed this how-to.

## 4 Feedback

We are very interested in your feedback. Please take [this short survey](https://www.surveymonkey.com/r/ZCRJSP3) to let us know what you think about this how-to.

## 5 Related Content

* [How to Build a Logistics IoT App](build-an-iot-app)
* [How to Build a Logistics IoT App Step 1: Connect App Pages](build-an-iot-app-1)
* [How to Build a Logistics IoT App Step 2: Configure the Sensor Data Subscription](build-an-iot-app-2)
* [How to Build a Logistics IoT App Step 3: Handle the Sensor Data](build-an-iot-app-3)
* [How to Build a Logistics IoT App Step 4: Add Another Data Dimension](build-an-iot-app-4)
* [How to Build a Logistics IoT App Step 5: Create Alerts](build-an-iot-app-5)
