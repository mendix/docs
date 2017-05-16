---
title: "Build an IoT App 1: "
space: "Mendix 7 How-To's"
parent: "build-an-iot-app"
description: "Presents details on how to configure the sensor data subscription and expand the Mendix Logistics IoT app."
tags: ["iot", ________]
---

### Step 1 -  Connecting App Pages

In this section, you are going to observe the app in the development environment. You will make your first change, which will enable you to view the live details of the shipments listed on the shipments overview.

To connect an app page, follow these steps:

1. In **Tutorial_Workspace** module, open **Step 1 - Connect pages** > **Homepage**. This is the homepage of the **Global shipments** app that you will be expanding and improving.
2. Inspect how this page is built. Notice that there is a grid that represents the overview of the shipments. On the right there is a menu, which takes you to the pages where you can configure and edit the shipment details, sensor data, and cloud platform configuration.
2. The **Action [default]** button in the grid is not connected to a page, so right-click the button and select **Edit action** > **Show a page**.
3. In the **Select page** dialog box, select the **Shipment_Detail** page, which we have prepared for you).
4. Click **Show** to display the **Shipment_Detail** page and then **OK**.
6. Save the changes, click **Run Locally** to deploy the app, then click **View App** to view the app in your browser.
7. Click the menu button in the top-right corner of the app and select **Shipments**.
8. Click **Edit** on the preconfigured shipment, which will bring you to the **Shipment** form, where you can edit the details about the shipment.
