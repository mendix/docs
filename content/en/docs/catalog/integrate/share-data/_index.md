---
title: "Share Data Between Apps"
url: /catalog/share-data/
description: "Describes how to publish and register a simple data asset to the Catalog from Studio Pro and create a new app that consumes this asset."
tags: ["Catalog", "data hub", "external entities", "landscape", "published OData service" ,"how to", "consume"]
weight: 10
aliases:
    - /catalog/use-data-catalog.html
    - /datahub/general/share-data/index.html
    - /catalog/use-data-catalog
    - /data-hub/share-data/
    - /catalog/#share-data
    - /data-hub/data-hub-catalog/share-data/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This how-to will demonstrate how easy it is to build apps using data from different sources using the Catalog. The steps describe the following: 

* Create an app in Mendix Studio Pro
* Publish an entity from the app and register it in the Catalog 
* Use the Catalog to explore the data sources from the organization that are registered as assets 
* Connect to the registered asset that you published earlier and use it in a new app
* Change data in the original app and see it updated in the new or consuming app
* See the network of shared data in the Landscape

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install Mendix Studio Pro version [8.14.0 or above](https://marketplace.mendix.com/link/studiopro/)

## 3 Creating an App {#createapp} 

Follow these steps to create a simple app in Mendix Studio Pro. 

1. In Studio Pro, click **New App** to create a new app using the **Blank** app template. Fill in the **App Name** as *{yourname}CustomerServiceApp* and select **Create app**. 
2. In the App Explorer, double-click the **Domain Model** in **MyFirstModule**. 
3. In the **Toolbox**, select **Entity** and drag it into the domain model.
4. Double-click the entity to open its properties and set its **Name** to *Customer*.
5. In the **Attributes** tab, click **New** and do the following:
    1. In the **Add Attribute** dialog box, set **Name** to *CustomerID* and set to **Type** to *Autonumber*.
    2. Click **OK** to create the attribute.

6. Repeat steps 5a and 5b to create attributes *FirstName*, *LastName*, *CompanyName*, *Address* and set type to *String* for all of them. 

    {{< figure src="/attachments/catalog/share-data/entity-properties-pane.png" >}}

7. Click **OK** to save your changes.
8. Right-click the entity and select **Generate overview pages** from the drop-down list.
9. In the **Generate pages** dialog box, make sure **Atlas_Default (Atlas_Core)** is selected as the **Content layout** and click **OK**. 
10. In the **Information** pop-up dialog, click **OK**. 
    Overview pages for the new entity are added in the **OverviewPages** folder of **MyFirstModule**.

    {{< figure src="/attachments/catalog/share-data/overview-pages-for-customer-entity.png" >}}

11. In the **App Explorer**, double-click **Home_Web** to open the **Home_Web** page.
12. From the **App Explorer** drag **Customer_Overview** into the empty **Auto-fill** container under the *Home* banner.

You have created a simple app with the entity **Customer**, and a web page where we can view and edit details for this entity. 

Go ahead and customize the homepage further by changing the banner text.

## 4 Publishing to the Catalog {#publishing}

You need to register the **Customer** entity in the Catalog to use this entity in other apps. To do this, you need to expose the **Customer** entity in a *Published OData service* in Mendix Studio Pro. OData v3 and OData v4 are REST-based protocols and standard formats for registering services in the Catalog. 

Do the following:

1. In the App Explorer, right-click **MyFirstModule**. From the drop-down list, select **Add a folder**. Name it  *APIs*.

    {{% alert color="info" %}}The published OData service functions as an API to your app. Some apps may have several published services, so it is good practice to keep them together in a folder for each module.{{% /alert %}}

2. In the **Domain Model**, right-click the **Customer** entity and select **Expose as OData resource…**.

    {{< figure src="/attachments/catalog/share-data/expose-as-odata-resource.png" >}}

3. In the **Select Published OData Service** dialog box, select the **MyFirstModule** > **APIs** folder and click **New** to add a new OData service to this folder.

    {{< figure src="/attachments/catalog/share-data/select-published-odata-service.png" >}}

4. Name the published OData service *{yourname}CustomerODataService* and click **OK**.

    The new **{yourname}CustomerODataService** is added to the module and the **Edit published resource** dialog box is displayed for the entity **Customer**. 

    {{< figure src="/attachments/catalog/share-data/edit-published-resource-box.png" >}}

    {{% alert color="info" %}}  Make a note of the **Exposed set name**. This defaults to the **Exposed name** with an "**s"** added to the end. When the service is registered in the Catalog, the **Exposed set name** will be displayed as the available **Dataset**. {{% /alert %}}

5. Click **OK** twice to display the **OData Service** document that will be registered in the Catalog. In the **General** tab, notice the **Version** number. 

    {{< figure src="/attachments/catalog/share-data/customer-odata-service-page.png" >}}

    Under **Entities**, the **Customer** entity is listed. The details of the entity are displayed on the right. To expose more entities in the service, add them on this page.

6. Click **Publish** in the top bar to deploy the app and publish it. When prompted, click **Save and continue** to save any unsaved changes to the app.     

7. The app is deployed, and the OData service is automatically registered in the Catalog. Click **View App** to open the app in a browser. 
8. On the app's home page, click **Customers Overview**.
9. Add data to the app. Click **New** to add data for a customer entry.

    {{< figure src="/attachments/catalog/share-data/add-data-in-app.png" alt="external entities" >}}

When this entity set is consumed by another app via the Catalog, the other app will see the data entered here.

## 5 Using the Catalog and Curating Your Own Service {#use-and-curate}

The **{yourname}CustomerODataService** from your app is now registered in the Catalog. The data can be used in other apps. The service is called a **Data Source** in the Catalog, and the exposed **Customer** entity is a **Dataset**.

Do the following:

1. Go to the [Catalog](https://catalog.mendix.com/).

2. In the search field, enter the search term *{yourname}*. All services and datasets that satisfy this search string are displayed in the **Search Results** pane in the **Search Details** screen. However, the service does not appear in the **Search Results** yet, as by default, a filter is set to show results in **Production** environments.
3. In the panel on the left, click **Filter** to see the **Filters** dialog box.
4. Your app was deployed to the **Mendix Free App** or **Sandbox** environment. Check **Sandbox** to include it in the search results, then click **Apply**:

    {{< figure src="/attachments/catalog/share-data/dh-filter-box.png" alt="Catalog screen" >}}

5. From the new search results list on the left, select the *{yourname}CustomerODataService* service. Full details from the OData contract for the service are displayed on the right.
6. The **Curate** bar confirms that "**You are the owner of this data source**". You have permissions edit the metadata for this service in the Catalog and a **Business Owner**.

    {{< figure src="/attachments/catalog/share-data/search-details-screen.png" alt="Catalog search details" >}}

    {{% alert color="info" %}}For more information about roles in the Catalog, see [User Roles](/catalog/manage/user-roles/).{{% /alert %}}

For more details on searching in the Catalog and the **Search Details** screen, see [How to Search in the Catalog](/catalog/search/). You can also explore registered services in the Landscape. For more information, see [Catalog Landscape](/catalog/manage/landscape/).

## 6 Using the Customer Dataset in Another App

You are going to create a second app and consume the **Customer** dataset from the **{yourname}CustomerODataService** service.

To do this, follow the steps below:

1. In Mendix Studio Pro, create a new app using the **Blank** app template and call it *{yourname}CustomerActionsApp*.
2. Go to the domain model > [Integration Pane](/refguide/integration-pane/) (if you do not see the [Integration Pane](/refguide/integration-pane/), click **View** > **Integration** to display it).
3. In the [Integration Pane](/refguide/integration-pane/), enter the search string *{yourname}*.
4. By default, search in the [Integration Pane](/refguide/integration-pane/) only shows services in **Production** environments. Your app was deployed as a **Sandbox** app. Click the **Filter** icon next to the search and check **Show development environments**.

    {{< figure src="/attachments/catalog/share-data/filter-icon.png" alt="Filter Icon" >}}

    The search results now include **{yourname}CustomerOData_service** from your Mendix Cloud **Sandbox** environment.

5. From **{yourname}CustomerODataService**, drag the **Customer** entity into the domain model. The consumed service and entity have green checkmarks in the [Integration Pane](/refguide/integration-pane/) now.
6. This entity is different from the blue entity container from the first app. This purple colored entity is called an [external entity](/refguide/external-entities/). The name of the OData service it is exposed in is displayed above it. Click the information icon for the consumed service in the [Integration Pane](/refguide/integration-pane/) to see further information about the service, and follow the link to **View in Catalog**.
7. In the **App Explorer**, notice the service and location documents for your external entity. These documents specify the metadata for the service and provide the links for connecting to the shared data.
8. Right-click the entity and select **Generate overview pages** for this entity. In the **Generate pages** dialog box, for **Content layout** select **Atlas_Default(Atlas_Core)** and click **OK**. Accept the **Information** box by clicking **OK**. Overview pages for the new entity are added in the **OverviewPages** folder of **MyFirstModule**.
9. From the App Explorer, drag **Customer_Overview** into the empty **Auto-fill** container under the *Home* banner.
10. Click **Publish** to deploy the app and pull in the data you added to the **Customer** entity in the publishing app (**{yourname)CustomerServiceApp**) through the **{yourname)CustomerODataService**.

## 7 Viewing the Shared Data in Your New App 

To view the consumed data in your new app, follow these steps:

1. When the app has successfully been deployed, click **View App** to open the app in the browser.
2. Click **Customer Overview**.

    The overview page displays the list of the customers that you entered in the **{yourname}CustomerServiceApp** app. The data is shared from another app, so there are no options for adding or changing the data.

## 8 Seeing Changes in Data in the Consuming App

To see an example of consumed data being updated when data is changed in the originating app, follow these steps:

1. Make sure both apps are published in Mendix Studio Pro, then open both apps in separate browser windows. 
2. Make a change to the customer list in **{yourname}CustomerServiceApp**, such as adding a few more customers or editing some existing entries.
3. Refresh the **{yourname}CustomerActionsApp** window by doing a **Search** to see the changes in the data displayed. 

Congratulations, you have successfully used the Catalog to share data between Mendix apps! You can now see your new apps in your Landscape. 

## 9 Viewing Your Apps in the Landscape

You can view the two apps that you have created in the Landscape and see how they are connected:

1. Open the [Catalog](https://catalog.mendix.com/#/home) home page.
2. Find your service using the search pane. Remember to use the filter to ensure you can see **Sandbox** apps. 
3. Click the **Landscape** tab to see a visual representation of your apps (rounded squares), services (circles), and connections (lines). The number of entity sets/datasets that have been exposed appears beneath the service. 

    {{< figure src="/attachments/catalog/share-data/landscape-full-screen.png" >}}

    The service **{yourname}CustomerODataAPI** is linked by a solid line to the running instance of **{yourname}CustomerCustomerServiceApp**, which is deployed as a Free App.

    The service is also linked by a dotted grey line to **{yourname}CustomerActionsApp**. The arrow indicates that **{yourname}CustomerActionsApp** is making a call to **{yourname}CustomerODataAPI** for data. If you click on **1 Dataset** on this dotted line, the datasets that are being consumed will be listed in the metadata panel on the right.
