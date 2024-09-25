---
title: "Share Data Between Apps"
url: /howto/integration/share-data/
description: "Describes how to publish and register a simple data asset to the Catalog from Studio Pro and create a new app that consumes this asset."
weight: 10
aliases:
    - /catalog/use-data-catalog.html
    - /datahub/general/share-data/index.html
    - /catalog/use-data-catalog
    - /data-hub/share-data/
    - /catalog/#share-data
    - /data-hub/data-hub-catalog/share-data/
    - /catalog/share-data/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This how-to will demonstrate how easy it is to build apps using data from different sources using the [Catalog](https://catalog.mendix.com/). The steps describe the following: 

* Create an app in Mendix Studio Pro
* Publish an entity from the app and register it in the Catalog 
* Use the Catalog to explore the data sources from the organization that are registered as assets 
* Connect to the registered asset that you published earlier and use it in a new app
* Change data in the original app and see it updated in the new or consuming app
* See the network of shared data in the [Landscape](/catalog/manage/landscape/)

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install Mendix Studio Pro [8.14.0 or above](https://marketplace.mendix.com/link/studiopro/)

## Creating an App {#createapp} 

Follow these steps to create a simple app in Studio Pro: 

1. In Studio Pro, click **New App** and choose the **Blank** app template. Fill in the **App Name** as *{yourname}CustomerServiceApp* and select **Create app**. 
2. In the App Explorer, double-click the **Domain model** in **MyFirstModule**. 
3. In the **Toolbox**, select **Entity** and drag it into the domain model.
4. Double-click the entity to open its properties and set its **Name** to *Customer*.
5. In the **Attributes** tab, click **New** and do the following:
    1. In the **Add Attribute** dialog box, set **Name** to *CustomerID* and set to **Type** to *Autonumber*.
    2. Click **OK** to create the attribute.

6. Repeat steps 5a and 5b to create attributes *FirstName*, *LastName*, *CompanyName*, *Address* and set type to *String* for all of them. 

    {{< figure src="/attachments/catalog/share-data/entity-properties-pane.png" class="no-border" >}}

7. Click **OK** to save your changes.
8. Right-click the entity and select **Generate overview pages** from the drop-down list.
9. In the **Generate pages** dialog box, make sure **Atlas_Default (Atlas_Core)** is selected as the **Content layout** and click **OK**. 
10. In the **Information** pop-up dialog, click **Close**. 
    Overview pages for the new entity are added in the **OverviewPages** folder of **MyFirstModule**.

    {{< figure src="/attachments/catalog/share-data/overview-pages-for-customer-entity.png" class="no-border" >}}

11. In the **App Explorer**, double-click **Home_Web** to open the Home_Web page. 
12. From the **App Explorer**, drag **Customer_Overview** into the empty Auto-fill container under the Home banner.

You have created a simple app with the entity **Customer**, and a web page where you can view and edit details for this entity. 

Customize the home page further by changing the banner text.

## Publishing to the Catalog {#publishing}

You need to register the **Customer** entity in the Catalog to use this entity in other apps. To do this, expose the **Customer** entity in a [Published OData service](/refguide/published-odata-services/) in Studio Pro. OData v3 and OData v4 are REST-based protocols and standard formats for registering services in the Catalog. 

Do the following:

1. In the App Explorer, right-click **MyFirstModule**. From the drop-down list, select **Add folder** and name it *APIs*.

    {{% alert color="info" %}}The published OData service functions as an API to your app. Some apps may have several published services, so it is good practice to keep them together in a folder for each module.{{% /alert %}}

2. In the **Domain model**, right-click the **Customer** entity and select **Publish in OData service...**.

    {{< figure src="/attachments/catalog/share-data/publish-in-odata-resource.png" class="no-border" >}}

3. In the **Select Published OData Service** dialog box, select the **MyFirstModule** > **APIs** folder and click **New** to add a new OData service to this folder.

    {{< figure src="/attachments/catalog/share-data/select-published-odata-service.png" class="no-border" >}}

4. Name the published OData service *{yourname}CustomerODataService* and click **OK**. The new **{yourname}CustomerODataService** is added to the module.
5. In the **Choose key** dialog box, move the attributes you want to be the key from **Available attributes** to **Key attributes**.

    {{< figure src="/attachments/catalog/share-data/choose-key.png" class="no-border" >}}
6. Click **OK** to see the **Edit published entity** dialog. 

    {{< figure src="/attachments/catalog/share-data/edit-published-resource-box.png" class="no-border" >}}

    {{% alert color="info" %}} Make a note of the **Exposed set name**. This defaults to the **Exposed name** with an "**s"** added to the end. When the service is registered in the Catalog, the **Exposed set name** will be displayed as the available **Dataset**. {{% /alert %}}

7. Click **OK** to display the **OData Service** document that will be registered in the Catalog. In the **General** tab, notice the **Version** number. 

    {{< figure src="/attachments/catalog/share-data/customer-odata-service-page.png" class="no-border" >}}

    Under **Entities**, the **Customer** entity is listed. The details of the entity are displayed on the right. To expose more entities in the service, add them in this field.

8. Click **Publish** in the top bar to deploy the app and publish it. When prompted, click **Save and continue** to save any unsaved changes to the app.     

9. The app is deployed and the OData service is automatically registered in the Catalog. Click **View App** to open the app in a browser. 
10. On the app's home page, click **Customers Overview**.
11. Add data to the app. Click **New** to add data for a customer entry.

    {{< figure src="/attachments/catalog/share-data/add-data-in-app.png" alt="external entities" class="no-border" >}}

When this entity set is consumed by another app via the Catalog, the other app will see the data entered here.

## Using the Catalog and Curating Your Own Service {#use-and-curate}

The **{yourname}CustomerODataService** from your app is now registered in the Catalog. The data can be used in other apps. The service is called a **Data Source** in the Catalog, and the exposed **Customer** entity is a **Dataset**.

Do the following:

1. Go to the [Catalog](https://catalog.mendix.com/).

2. Click **Browse** and enter the search term *{yourname}*. All services and datasets that satisfy this search string are displayed in the search results pane.
3. In this scenario, your app was deployed to the **Sandbox** environment. To search within this environment, click **Filter** > Check **Sandbox** > **Apply**.

    {{< figure src="/attachments/catalog/share-data/filter-box.png" alt="Catalog screen" class="no-border" >}}

4. From the new search results list on the left, select the *{yourname}CustomerODataService* service. Full details from the OData contract for the service are displayed on the right.

You have permissions edit the metadata for this service in the Catalog and are a **Technical Owner**. To edit the metadata, click the edit icon in the top-right corner of the Data Source field. 

{{< figure src="/attachments/catalog/share-data/search-details-screen.png" alt="Catalog search details" class="no-border" >}}

{{% alert color="info" %}}For more information about roles in the Catalog, see [User Roles](/catalog/manage/user-roles/).{{% /alert %}}

For more details on searching in the Catalog and the **Search Details** screen, see [Search in the Catalog](/catalog/manage/search/). You can also explore registered services in the Landscape. For more information, see [Landscape View](/catalog/manage/landscape/).

## Using the Customer Dataset in Another App

You are going to create a second app and consume the **Customer** dataset from the **{yourname}CustomerODataService** service.

To do this, follow the steps below:

1. In Mendix Studio Pro, create a new app using the **Blank** app template and call it *{yourname}CustomerActionsApp*.
2. Go to the domain model > [Integration pane](/refguide/integration-pane/) (if you do not see the Integration pane, click **View** > **Integration** to display it).
3. In the Integration pane, enter the search string *{yourname}*.
4. By default, search in the Integration pane only shows services in **Production** environments. Your app was deployed as a **Sandbox** app. Click the **Filter** icon next to the search and check **Show development environments**.

    {{< figure src="/attachments/catalog/share-data/filter-icon.png" alt="Filter Icon" class="no-border" >}}

    The search results now include **{yourname}CustomerOData_service** from your Mendix Cloud **Sandbox** environment.

5. From **{yourname}CustomerODataService**, drag the **Customer** entity into the domain model. The consumed service and entity have green check marks in the Integration pane now.
6. This entity is different from the blue entity container from the first app. This purple colored entity is called an [external entity](/refguide/external-entities/). The name of the OData service it is exposed in is displayed above it. Click the information icon for the consumed service in the Integration pane to see further information about the service, and follow the link to **View in Catalog**.
7. In the **App Explorer**, notice the service and location documents for your external entity. These documents specify the metadata for the service and provide the links for connecting to the shared data.
8. Right-click the entity and select **Generate overview pages** for this entity. In the **Generate pages** dialog box, for **Content layout** select **Atlas_Default(Atlas_Core)** and click **OK**. Accept the **Information** box by clicking **Close**. Overview pages for the new entity are added in the **OverviewPages** folder of **MyFirstModule**.
9. From the **App Explorer**, open **Home_Web** and drag **Customer_Overview** into the empty Auto-fill container.
10. Click **Publish** to deploy the app and pull in the data you added to the **Customer** entity in the publishing app **({yourname}CustomerServiceApp**) through the **({yourname}CustomerODataService**).

## Viewing the Shared Data in Your New App 

To view the consumed data in your new app, follow these steps:

1. When the app has successfully been deployed, click **View App** to open the app in the browser.
2. Click **Customer Overview**.

    The overview page displays the list of the customers that you entered in the **{yourname}CustomerServiceApp** app. The data is shared from another app, so there are no options for adding or changing the data.

## Seeing Changes in Data in the Consuming App

To see an example of consumed data being updated when data is changed in the originating app, follow these steps:

1. Make sure both apps are published in Mendix Studio Pro, then open both apps in separate browser windows. 
2. Make a change to the customer list in **{yourname}CustomerServiceApp**, such as adding a few more customers or editing some existing entries.
3. Refresh the **{yourname}CustomerActionsApp** window and search to see the changes in the data displayed. 

Congratulations, you have successfully used the Catalog to share data between Mendix apps! You can now see your new apps in your Landscape. 

## Viewing Your Apps in the Landscape

You can view the two apps that you have created in the Landscape and see how they are connected:

1. Open the [Catalog](https://catalog.mendix.com/#/home) home page.
2. Find your service using the search pane. Remember to use the filter to ensure you can see **Sandbox** apps. 
3. Click **Landscape View** to see a visual representation of your apps (rounded squares), services (circles), and connections (lines). The number of entity sets/datasets that have been exposed appears beneath the service. 

    {{< figure src="/attachments/catalog/share-data/landscape-full-screen.png" class="no-border" >}}

    The service **{yourname}CustomerODataAPI** is linked by a solid line to the running instance of **{yourname}CustomerCustomerServiceApp**, which is deployed as a Free App.

    The service is also linked by a dotted grey line to **{yourname}CustomerActionsApp**. The arrow indicates that **{yourname}CustomerActionsApp** is making a call to **{yourname}CustomerODataAPI** for data. If you click **1 Dataset** on this dotted line, the datasets that are being consumed will be listed in the metadata panel on the right.
