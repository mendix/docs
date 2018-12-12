---
title: "Visualize Data Using the ChartJS Module"
category: "Extensibility"
menu_order: 8
tags: ["extensibility", "chartjs"]
---

## 1 Introduction

It is said that a picture is worth a thousand words, and this is especially true when it comes to digesting data in your Mendix applications.  Smart use of charts to help aid in business decisions can save time, improve user experience, and reduce mistakes.  The ChartJS widget is a powerful package, and the Mendix widget utilizes these classes to add rich charts to your app.

**This how-to will teach you how to do the following:**

* Add the ChartJS widget package to a project
* Structure and retrieve data to interact with ChartJS graphs
* Configure chart display options
* Create  and view a multi-series line chart

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

*   Know how to download app store modules
*   Know how to configure a domain model
*   Know how to create microflows and pages
*   Know how to create non-persistant entities

## 3 Implementing ChartJS in an Existing Project

In this section, you will learn how to install the ChartJS widget.

### 3.1 Finding and Downloading the ChartJS Widget from the App Store

1.  Using the in-Modeler App Store browser, find the **ChartJS** widget:

    ![](attachments/19202962/19398991.png)
    
2.  Hit the download button to import the collection of widgets into your project.

### 3.2 Setting Up the Domain Model

In order to leverage the ChartJS classes in Mendix in a predictable way, the widget expects a specific data model structure.  This is defined by entities and attributes in the domain model.  To get the widget to work properly, the data structure must match the widget expectations exactly.   We also need to create a data entry entity to house our data for the purpose of this exercise.

{{% alert type="warning" %}}

TIP: Download the Github test project

To see a working domain model already configured in an application, you can go to the GitHub repository [here](https://github.com/mendix/ChartJS), download the zip package.

{{% /alert %}}

1.  Make a new module named **Charting**.
2.  Configure your domain model to contain a **Chart**, **Dataset**, and **Datapoint** entities:

    ![](attachments/19202962/19398992.png)
    
3.  Create the entity **Values** with attributes **X**, **Y**, and **Series**:

    ![](attachments/19202962/19398994.png)
    
4.  For the Series attribute, create a new enumeration named **Series** that contains the values **Series 1** and **Series 2**.
5.  Create a non-persistant **ChartWrapper** entity with no attributes:

    ![](attachments/19202962/19398997.png)

### 3.3 Creating the Data Entry Mechanism

To make this sample project actually generate charts, the first thing to do is configure a simple data entry page.  Mendix applications receive their data in all sorts of ways, and every application will be slightly different.  The goal of this tutorial is to configure the chart, not capture the data, so the data capture will be simple and generic.  Use this example can be extended to accommodate whatever data structure you might use in your project.

1.  Create a page that will allow for creation of data. 
2.  Add this page to user navigation.
3.  Use the **Generate page** feature to automatically create the data entry page for a data point.

    ![](attachments/19202962/19398995.png)

### 3.4 Adding a ChartJS Widget to a New Page

1.  Create a page called ShowChart and add it to the user navigation.
2.  Add a data view to this page that contains a ChartWrapper entity and has a microflow as the data source.
3.  Create a new microflow named **NewChartWrapper** to populate the data view.    

    ![](attachments/19202962/19398998.png)

4. Right-click the data view and select **Got to microflow**.
5. In the **NewChartWrapper** microflow, create a new ChartWrapper object and set that object as the return.

    ![](attachments/19202962/19398999.png)
    
6.  On the **ShowChart** page, add the **ChartJS - Line Chart** via the **Add widget** menu:

    ![](attachments/19202962/19398996.png)
    
7.  The final page should look as shown:

    ![](attachments/19202962/19399000.png)

### 3.5 Configuring the ChartJS Widget

The ChartJS widgets are configured through the familiar modeler widget dialogue box.  We must configure the ChartJS module to reference our Charting domain model.

1. Set the entity for the chart to be the created **Chart** entity:

    ![](attachments/19202962/19399001.png)

2.  On the **Data Set** tab, select the **Dataset** entity:

    ![](attachments/19202962/19399002.png)
    
3.  Also on the **Data Set** tab, configure the **Label**, **Sorting**, and **Fill Color** properties as shown here:

    ![](attachments/19202962/19399003.png)

4. Configure the **Data Point** tab with the **Entity**, **X Value**, **X sorting**, and **Y value** as shown below:

    ![](attachments/19202962/19399004.png)

### 3.6 Creating the Data Source Microflow

Now that we have added our widget to the page, we need to feed it some data.  To do this, we will need to write the data source microflow for our widget.  This microflow contains the logic to retrieve, count, and manipulate the data we want to display in our chart.  

1.  On the **Data Source** tab for the Line Chart widget, click **Select** for **Microflow** and create a new microflow called **MF_RetrieveValuesForChart**.

    ![](attachments/19202962/19399005.png)

2. In this new microflow, create a new **DataSet** object.

3.  Populate values for **Label** and **Color**:

    ![](attachments/19202962/19399006.png)
    
4. Create a new microflow in your module called **SUB_CreateSeries**.  This will be used as a sub-microflow to retrieve all the data associated with our new dataset.

5. Create input parameters for **SeriesType**, **Chart**, and **Dataset**.

6. Add a loop.

7.  We iterate through that list and create a **NewDatapoint**, setting X, Y, and X sorting using the corresponding attributes for our **Value** entity:

    ![](attachments/19202962/19399009.png)
    
8.  Retrieve the dataPoints:

    ![](attachments/19202962/19399008.png)
    
9.  For the change object in the loop, set the **Type**  to **Add** for the  Datapoint member and the **Value** to `$NewDatapoint` .  Do the same for the other change object, but set the Value to `$NewDataset`.

    ![](attachments/19202962/19399011.png)

10. Due to the way the ChartJS module expects the data structure, after each point is created, you must then associate it with the NewDataset object that we passed into the flow.  This NewDataset must then be associated with the Chart object.  These two actions happen after the Datapoint creation.
  
    ![](attachments/19202962/19399010.png)

11. In the **RetrieveValuesForChart** microflow, create a second DataSet object with **Label** `'Series 2'` and **Color** `#0000FF`. Note that **SUB_CreateSeries** is called once for each series of the chart.

    ![](attachments/19202962/19399012.png)

### 3.7 Creating Some Data

Now that the chart is configured, all we have left to do is create some sample data using the page we have created.  We will then be able to visualize our chart!

1.  In the application front end, navigate to the data entry page.
2.  Enter data values for X, Y, and Series to populate your app with data:

    ![](attachments/19202962/19399015.png)
    
3.  Navigate to the showChart page to see your data visualized!

    ![](attachments/19202962/19399014.png)
