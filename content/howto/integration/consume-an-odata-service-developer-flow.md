---
title: "Consume an OData Service and Use External External Entities"
category: "Integration"
menu_order: 8.5
tags: ["integration", "OData service", "data hub", "consume", "external entity", "OData service URL"]
description: "Describes the development workflow for working with oData and external entities using Odata service URL."
---

## 1 Introduction

Developers can consume OData services by specifying the service metadata URL or a (local) metadata file in the Consume OData Service document.  The entities exposed in the service will be listed in  the Data Hub Project pane and can be dragged into the domain model using the Data Hub pane.  

Developers who are publshing OData services can follow the steps in this how-to to test their published OData service locally before deploying them and registering  them in the Data Hub Catlog. 

**This how-to will teach you how to do the following:**

* Add a consumed OData Service document in your project module
* Specify the published OData service using the service metadata contract URL or location of the file
* Use the **Data Hub Project** pane to view and use exposed entities in your app development

{{% alert type="info" %}}
To consume OData services, you must have a Data Hub license.
{{% /alert %}}


## 2 Prerequisites

Before starting this how-to you will need the following:

* Be familiar with app modelling using [external entities](/refguide/external-entities)

* Have a URL of a valid published OData v3 or v4 metadata contract or a locally stored metadata contract – an example file to use in this how to is described in [using a sample OData service](#sampleODataservice)

	{{% alert type="info" %}}The OData metadata contract is the file  `$metadata` file and in Studio Pro the URL is displayed under the **Settings** tab of the **Published OData Service** document:
	

![published Odata service URL](attachments/consume-an-odata-service/metadata-contract-url.png)  
  {{% /alert %}}

  {{% alert type="info" %}}You can create a simple published OData service by following the steps in [Section 3: Creating an App](/data-hub/share-data/index#createapp) and [Section 4: Publishing to the Data Hub Catalog](/data-hub/share-data/index#publishing) of the Data Hub how-to [Share Data Between Apps](/data-hub/share-data/index).
  {{% /alert %}}



## 3 Using a Sample OData Service{#sampleODataservice}

You can locate a sample OData V3 metadata file to use in this how-to  from the OData.org website: https://www.odata.org/odata-services/. They provide some sample OData files for the different versions of OData. You can try using the URL, and you can also download the sample contract to your computer to try consuming from a local file.

1. Go to  https://www.odata.org/odata-services/ Under the **OData v3** tab you will use the sample OData v3 example, [Northwind read only](https://services.odata.org/V3/Northwind/Northwind.svc) service. Click the link for this file or any other file that is listed for OData v3 to open the metadata file for this service.
2. The file that you will see displayed is saved stored under the name `$metadata` at the web URL.
3. So for the example used in step 1, this file is https://services.odata.org/V3/Northwind/Northwind.svc/metadata.
4. You can download the file to your computer if you want to follow the steps for  consuming a local file. 



## 4 Consuming an OData Service using the URL {#consumeurl}

When you search for a data source in the [Data Hub](/refguide/data-hub-pane) pane you will be presented with all the registered assets in the [Dat Hub Catalog](/data-hub/data-hub-catalog/search) that satisfy your search criteria. These assets are exposed in, and registered as, published OData services in the **Data Hub Catlog**. When you drag an entity from the **Data Hub** pane into your domain model, the asset metadata contract is accessed at the service endpoint and a **Consumed OData Servcice** document is added to the app project module showing all the information in the contractat. 

If you have the URL of your OData service, you can use it to consume the service directly into your module and see the exposed entities in the **Data Hub** project. This means that you can easily drag them into your domain model. 

During app development and testing phases this means that you can deploy your app locally and without taking up a cloud slot and can speed up a process that possibly has to go through several iterations.

Follow these steps to consume a published Odata service directly using the URL:

1. First you will add a consumed OData service document to your model: in project explorer, right click over the model name and select **Add other** > **Consumed OData Service**.

     {{% alert type="info" %}}You must have a Data Hub license to see this menu item.
     {{% /alert %}}

2. In the **Add Consumed OData Service** dialog box, enter a name for the Consumed OData Service document that will be added to your module. In this case  and click **OK**.

3. A blank **Consumed OData** document is added to the module and the **Metadata Editor** dialog is displayed asking you to provide the metadata file to consume from.

4. By default the **Import from** is set to **URL**; click **Edit**.

5. Copy the full URL of the OData service you want to consume. For the example in [using a sample OData service](#sampleODataservice) this is: `https://services.odata.org/V3/Northwind/Northwind.svc/$metadata`

6.  Paste this in the **Metadata URL** and click **OK** twice:

     ![use data hub pane](attachments/consume-an-odata-service/metadata-URL-box.png)

7. You will informed of the following:

     ![use data hub pane](attachments/consume-an-odata-service/data-hub-pane-dialog-box.png)

8. Click **OK**. The service will be added under **Project** in the **Data Hub** pane and also be shown as being consumed. If you expand the service, the entities in this service will be listed: 

   ![use data hub pane](attachments/consume-an-odata-service/data-hub-project-pane.png)

9. Take a few moments to explore the entities that are available in the service, and the attributes for entities (click **+** to expand the entity and display the attributes): 

## 4 Consuming an OData Service using a local stored Metadata Contract



## 4 Read More

* 
