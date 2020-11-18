---
title: "Curate Registered Assets"
category: "Data Hub Catalog"
menu_order: 40
description: "Describes curating functions in the Data Hub Catalog"
tags: ["data hub", "data hub catalog", "curate", "description", "services", "tags"]
---

## 1 Introduction

Curation is the processes of maintaining registered services and enriching the metadata of registered assets in the Data Hub Catalog to provide further information about the services as well as the entities and attributes exposed in the services. You can add catalog descriptions and tags to supplement the registered metadata in order to categorize the asset and the datasets they connect to. Curate functions include setting the [Discoverability](#discoverability) of registered assets, assigning a **Validated** tag and specifying the **Business** and **Technical** owners. 

Users who can curate assets in Data Hub Catalog are as follows:

* Owners of a registered service – can curate their own services and find those that are set to non-**Discoverable**
* [Data Hub Curators](../index#curator) and [Data Hub Admins](../index#admin) – can curate and find all registered assets, discoverable and non-discoverable

Owners and Curators can also get an overview of the registered assets they own and curate from the [Curate](#curatetab) tab of Data Hub.

{{% alert type="info" %}}
Information that is added or changed during curation is stored in the Data Hub Catalog for that item. It will not be added to the OData service contract or metadata files or affect any of the values in the metadata files associated with the service or the datasets associated with the exposed entities. 
{{% /alert %}}

## 2 The Curate List {#curatelist}

Owners and curators of registered assets can click  **Curate** from the **Data Hub** screen to see the **Curation List** screen which provides an overview of all the registered assets (**My Assets**) that you can curate as an owner and **Company Assets** that you can curate as a curator:

![curate list](attachments/curate/curate-list.png)

The list includes registered services and also individual entities that are exposed in the services.

From the overview, you can see details of assets, and determine if assets have to be further curated. 

You can search for specific assets by entering a search string in the search bar or **Filter By:** **Environment** or **Validated** assets.

The list can be also be sorted by any of the columns by clicking on the column header.

To go to the asset details, click **View**. You can then perform curate actions to add Catalog specific information to the asset metadata.

## 3 The Curation Bar

Curation is performed in the search details screen. Users with curation rights will see the **Curation Bar** in the **Search Details** screen of the selected item: 

![curate bar](attachments/curate/curate-bar.png)

{{% alert type="info" %}}
Owners of registered assets and can only curate their services.
{{% /alert %}}

On the **Curation bar**, the following details are displayed:

* Information about the role of the current user: owner or curator
* When a service is selected in the **Search Results**: 
	* **Edit Metadata** – edit the description of the service and entities, add tags or specify Business and Technical Owners
	* **Discoverable/Validated** – set the service as **Discoverable** and **Validate** from the drop-down menu. 
	  * **Discoverable** defines whether the service can be found (and consumed) by users of the Data Hub; if a service is set to **Non-discoverable**, only the owners of the service (**Business** and **Technical**) can find the registered service. 
	  * **Validate** indicates that the service and data set have been validated.
* When an entity is selected in the **Search Results**, **Edit Entity Details** – to edit entity and attribute descriptions 

## 3 Setting the Discoverability and Validating a Service{#discoverability}

### 3.1 Discoverable

By default, when a service is registered in the Data Hub catalog, it is set to **Discoverable**, which means that all users can find, consume, and see details of the service. 

When the **Discoverable** setting is turned off , it will only be visible to the owners of the service and curators and not be visible to other users of the Data Hub Catalog. This means that it cannot be found, either in the Data Hub Catalog or by users of the Data Hub integration in Studio Pro and Studio.

{{% alert type="info" %}}
When a service is set to not-**Discoverable**, neither the service nor the entities that are exposed by the service can be found by other users. However, there may be instances of the same entities being available through other services that are published in the Data Hub Catalog.
{{% /alert %}}

To change the discoverability of a service, follow these steps:

1. In the Data Hub Catalog, select the service to display the **Search Details**.

2.  If you have curation rights, the **Curation Bar** will be displayed. Click **Discoverability** to display the **Discoverable** toggle:

	![discoverable](attachments/curate/curate-discoverable.png)

3. Click the **Discoverable** toggle to turn it on or off. A message will be displayed to indicate the discoverability of the asset.

	![non-discoverable](attachments/curate/curate-non-discoverable.png) 

### 3.2 Vaidated {#validated}

The **Validated** value can be assigned to a service. When it is turned on, by clicking the **Validated** toggle, this will be indicated in the service details screen and also in the search results pane for the service. 

![validated](attachments/curate/curate-validated.png)

## 4 Curating Services 

A service can be curated to specify the owners of the app and also add or edit the descriptions and tags for the selected service. 

### 4.1 Changing the Technical and Business Owners of an App {#customowner}

By default, the **Technical Owner** for a registered service is the user who registered the service when registration is done through the deployment pipeline in Studio Pro or specified during manual registration. Services can be curated to change the owners. The **Technical** and **Business Owners** are displayed as a link the service **Metadata** pane so that users can contact them. 

{{% alert type="info" %}}
If you as a **Technical Owner** curate the service and change the name, then you will no longer have curation rights to the asset. If the discoverability is turned off, then you will not be able to find the asset in the Catalog.
{{% /alert %}}

{{% alert type="info" %}}
**Business** and **Technical Owners** have curation rights for the registered service in the Data Hub Catalog if they are registered users on the Mendix Platform. If a custom owner is created with the process described in this section, the link to contact them will be displayed for the asset but this does not mean that they are able to curate it.  
{{% /alert %}}

{{% alert type="info" %}}
Curators and the Data Hub Administrator can manage the custom Owner details in the **Owner Management** screen as an **Administration** function. For further details see the [Managing Custom Owners ](../general/data-hub-admin-functions#customowners) section of *Data Hub Administration*.  
{{% /alert %}}

To change the owners of the app for the selected service, follow these steps:

1.  In the service details screen for the selected service, in the **Curation Bar** click **Edit Metadata** > **Application Details**:

	![edit application](attachments/curate/edit-application-metadata.png)

2.  The **Application Metadata** dialog box is displayed. To change the **Business Owner ** or **Technical Owner** click in the name field and you can start typing or select from the drop-down list of names. 

	![](attachments/curate/application-meta-data.png)
	
3. If you type a name that is not on the list, you will be prompted if you want to **Create** it.  Click on this and the **Create new contact** dialog box is displayed:

    ![custom contact create](attachments/curate/custom-contact.png)

4. Enter the **Name** and **Email** of the owner and click **Save**. 

5. Click **Back to...** to return to the asset details screen where you will see the new owners.

   

### 4.2 Changing the Service Description

If a description was included in the OData metadata contract, this will be displayed in the **Search Details** screen for the selected service. You can curate a service to add a catalog description to include further details on data usage and relevancy. As search in the Data Hub Catalog also includes searching the contents of the description fields of registered services, entities, and attributes, adding relevant descriptions can help in the right users finding these shared assets.

You can also specify if the OData service **Contract Description** or the **Catalog Description** is displayed in the Data Hub Catalog. 

{{% alert type="info" %}}
If a **Catalog Description** is given for a service, both descriptions will be registered for the service in the Catalog and can be curated to set whether the catalog or the contract description is displayed. 
{{% /alert %}}

To edit the service metadata of a selected service, follow these steps: 

1.  In the **Curation Bar**, click **Edit Metadata** > **Service Details** to display the **Service Metadata** box:

	![](attachments/curate/service-metadata-box.png)

2.  The description from the OData service metadata is displayed in the **Contract Description**. This cannot be changed, as it is part of the OData service definition. You can provide an alternative description by toggling **Use the catalog description** to display the **Catalog Description** box: 

	![](attachments/curate/service-metadata-description.png)

4.  Add a catalog description. This will be stored with the service details in the Catalog. 

	{{% alert type="info" %}}If a **Catalog Description** has been given for a service, both descriptions will be registered with the service in the Catalog. If you have selected to display the **Contract Description**, the **Catalog Description** will be retained providing the option for curators to display this as desired.
	{{% /alert %}}

5.  Click **Save Changes** to save the changes that you have made to the **Edit Service Metadata** screen and return to the **Service Details** screen, which will now display the selected description.

	{{% alert type="info" %}}If you leave an **Edit Metadata** session without saving your change, you will loose all the changes from that session. 
	{{% /alert %}}

### 4.3 Adding or Editing Tags to a Service {#tags}

Add tags to categorize a registered service and provide additional means for finding the service. Tags that are specified for a service also apply to the entities and attributes that are exposed in the service. Specify tags for the selected service by following these steps:

1. In the **Search Details** screen of a selected service, click **Edit Metadata** > **Service Details** in the **Curation Bar** to display the **Service Metadata** box.
2.  To add tags, click the empty **Tag** input area:

	![](attachments/curate/service-metadata-tags.png)

3. To add or edit the tags, enter a tag string and press **Enter** or select one from the list of existing tags that are used in the Data Hub Catalog and displayed when you start typing in the **Tag** field. Tags can be made up of alphanumeric and underscore characters. To separate multiple tags, use spaces.

	{{% alert type="info" %}}Tags can only contain lower-case letters, numbers, and underscores. They must have a minimum of 2 characters. 
	{{% /alert %}}
	
	{{% alert type="info" %}}If you use capital letters when typing the tag string, they will be converted to lower-case.
	{{% /alert %}}

4.  You can enter multiple tags separated by spaces. You can remove tags by clicking the **x**:

	![](attachments/curate/service-metadata-tags-list.png)

5. When you are finished specifying the tags, click **Save Changes** to register the changes and the tags will be shown in the **Service Metadata** pane.

	{{% alert type="info" %}}If you leave an **Edit Metadata** session without saving your change, you will loose all the changes from that session. 
	{{% /alert %}}

## 5 Curating Entities and Attributes

Entities and their exposed attributes can be curated to add **Catalog descriptions**. Catalog descriptions are stored in the Data Hub Catalog and it is possible to specify if the description provided in the service contract metadata or the Data Hub Catalog descriptions are displayed for the item.

To change entity and attribute descriptions, follow these steps:

1.  In the **Search Details** screen for the selected entity, click **Edit Entity Details** on the **Curate** bar to display the **Entity Metadata** box:

	![](attachments/curate/curate-entity-metadata.png)

2. The service metadata contract description is displayed. To edit and use a **Catalog Description**, click the toggle and enter a description. 
3. If a **Catalog Description** has been provided for the entity or attribute but the toggle is set to use the contract description for the entity or attribute, the **Catalog Description** will still be retained for the item.

4. When there are a large number of attributes for an entity, you can use the search area to find specific attributes.
5.  Click **Save Changes**. 

	{{% alert type="info" %}}If a **Catalog Description** has been specified for an entity or attribute, this will be retained even if the toggle is set to display the **Contract Description** for the entity or attribute. 
	{{% /alert %}}
