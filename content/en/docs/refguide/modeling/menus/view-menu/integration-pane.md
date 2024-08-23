---
title: "Integration Pane"
url: /refguide/integration-pane/
weight: 30
description: "Describes the Integration Pane in Mendix Studio Pro."
aliases:
    - /refguide/data-hub-pane/
---

## Introduction

Use the Integration pane in Studio Pro to use available data sources from the different applications in an organization into your Mendix apps. New apps can be created using shared datasets that are registered in the [Catalog](/catalog/). In Studio Pro, this is possible using the integrated functionality of Catalog through the **Integration** pane.

You can search in the Catalog through the Integration pane to discover data sources that you can use in your app. Via this pane you can add the entities that are published in the registered OData services into your app's domain model. These entities are called [external entities](/refguide/external-entities/) and are different because they enable the connection to the data associated with the entities in the originating app.

Besides external entities, OData services can expose actions that can be called from within microflows, and can define non-persistable entities that can be used as parameters or return types of these actions. From this pane you can drag these actions onto a microflow, where they will appear as a **Call external action** activity. In this activity you can configure the parameters and result variable. If a parameter or result has an external or non-persistable entity as its type, it will add those to the domain model for you when you add the action to your microflow.

To display the Integration pane, click **View** > **Integration**.

{{% alert color="info" %}}
In the Catalog, registered published services are referred to as *data sources*. Published entities will show the **Entity set** name and are called *datasets.*
{{% /alert %}}

## Integration Pane Overview

The **Integration** pane is used to search the Catalog for entities that can be dragged into the domain model and used in your app and also display the external entities and the associated services that are consumed in your current model.

The following functionality is available in the pane:

* [Search](#search) – Enter a search string of alphanumeric characters to search in the Catalog. The search will be performed on services, entities, attributes, associations, and descriptions in the Catalog.
* [Filter](#filter) – By default, the search is performed on assets in the **Production** environment. Click the **Filter** icon to include all other environments such as test, acceptance and also the Mendix free app environment **Sandbox** in the search.
* [View information](#viewing) on the service, its entities, attributes, and associations – When you enter a search term and browse through services, you can view various information on them.
* [View services used in your app](#used-in-app) – Services and the entities that are currently being used in your app are displayed in the **Used in your App** section and are indicated with a green check-mark in the search results. For more information, see the [Used in Your App](#used-in-app) section below. 

### Used in Your App Section {#used-in-app}

When you do not enter search text in the Integration pane, then the **Used in your App** section is displayed. This shows the consumed services and the related external entities and actions used in the current app. The list of entities, associations, attributes, and actions for the consumed services are shown as for the search results:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/data-hub-pane/used-in-your-app.png" alt="User in Your App Section" class="no-border" >}}

For more information on how to add entities and actions to your app, see [Adding an External Entity to an App](/refguide/external-entities/#adding-external-entities) section in *External Entities* or [Call external action](/refguide/call-external-action/).

## Searching Catalog Sources {#search}

As you enter a search term, all the items in the Catalog satisfying the search string are listed in the search results. This includes words in the service, entity and attribute descriptions, which are not displayed in the Integration pane. For more information, see the [Selected Asset Details](/catalog/manage/search/#search-details) section in *Search in the Catalog*.

You can drag the entity from the search results into your domain model and it will be added to your app and displayed as an [external entity](/refguide/external-entities/).

{{% alert color="info" %}}Services that are set to **not-Discoverable** in the Catalog are not be included in the search results for *any* user including owners of the service. To consume entities from these services owners must ensure that they are [Discoverable](/catalog/manage/curate/#discoverability).{{% /alert %}}

### Wildcard Search

You can perform a wildcard search by entering `*` in the search field.

{{% alert color="info" %}}
The search strings must be a minimum of three alphanumeric characters. Punctuation cannot be used as part of the search term except for the wildcard character `*` to perform an "empty" search in the Catalog. You cannot use the wildcard in combination with other characters. For further details, see [How to Search for Registered Assets](/catalog/search/).
{{% /alert %}}

### Filtering Environments {#filter}

By default, the search is performed on assets in the **Production** environment. To include all other environments such as test, acceptance, and also the Mendix free app environment, **Sandbox** in the search, click the **Filter** icon and check **Show development environments**:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/data-hub-pane/filter-icon.png" alt="Filter Icon"   width="300"  class="no-border" >}}

{{% alert color="info" %}}
When the **Show development environments** is checked, all subsequent searches results will also include those in non-production environments.
{{% /alert %}}

## Integration Pane Information {#viewing}

The information that is displayed in the [Integration pane](/refguide//) either when you enter a search term or when you open the **Used in your App** section is described in the sections below. 

### Services

The search results and **User in your App** section show the following information at a service level:

* **Service name**
* **Application icon** for the service (for example, Mendix, SAP, Siemens Teamcenter, or custom icons)
* **Service version**
* **Environment name** for non-production environments

    {{% alert color="info" %}}Only the names of non-production environments are displayed. Services in the **Production** do not show an environment name. {{% /alert %}}

* **Green check-mark** if the service or entity is consumed in the app. If you right-click a consumed service, you can do the following:

    * **View in Catalog** – click this to go to the [data source details](/catalog/manage/search/#service-details) page in the Catalog
    * **Go to connection settings** – click this to open the [consumed OData service](/refguide/consumed-odata-service/) document

        {{< figure src="/attachments/refguide/modeling/menus/view-menu/data-hub-pane/integration-pane-menu.png" alt="info on a Service" class="no-border" >}}

* **Gray shield icon** shows if the service or entity is validated in the Catalog
* **Update icon** is a blue arrow icon that indicates that there is another version of the consumed service available in the Catalog. Click to update the service that is consumed in the app to the contract that is now available:

    {{< figure src="/attachments/refguide/modeling/menus/view-menu/data-hub-pane/update-available.png" alt="Integration pane update" class="no-border" >}}

    {{% alert color="info" %}}If there is an OData service update available, then the entities that are listed are those that are available in that version of the OData service. These entities are grayed-out to indicate that they cannot be dragged into the domain model, as the *current* contract that is consumed in the app does not have these entities. You must update the contract to the version shown in the search results by clicking the **Update** icon. {{% /alert %}}

    {{% alert color="info" %}}The version number that is shown for the OData service is the latest one that is available in the Catalog at the service endpoint – in the example above, version 1.0.0 of **BikeVehicleService** is currently consumed in the app, but the contract that is available in the Catalog is different to the one currently consumed.{{% /alert %}}

* **Information icon** allows you to view further details for the service and a link to go directly to the [Service Details](/catalog/manage/search/#search-details) screen in the Catalog:

    {{< figure src="/attachments/refguide/modeling/menus/view-menu/data-hub-pane/integration-pane-info.png" alt="Integration pane Information" class="no-border" >}}

### Entities, Attributes, and Associations {#association-attributes}

Entities, attributes, and associations are displayed under the service name.

For any service in the list, you can click **Show details** to see the full list of the exposed entities, associations, and attributes for that service.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/data-hub-pane/expand-service-list.png" alt="Integration pane Information" class="no-border" >}}

{{% alert color="info" %}}The associations and attributes that are not supported in your Mendix app are shown as non-selectable (gray) and will not be included when you drag them into the domain model.{{% /alert %}}

#### Entity

If you right-click an entity and select **View in Catalog**, it will take you to the entity details page in the [Catalog](/catalog/).

If you right-click a consumed entity and **Go to entity**, it will take you to the entity in the domain model.

#### Associations

The associations that are exposed in the services are listed before attributes in alphabetical order. You can click on the **+** to see the entity that the association is with.

**Multiple association**s between the same entities are shown before single associations.

In the following example the entity **Customer** has multiple associations with the entity **Order** however, these associations are not supported and cannot be used in your app:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/data-hub-pane/multiple-associations.png" alt="multiple associations" class="no-border" >}}

#### Attributes

Attributes for a service are listed in alphabetical order. If you right-click an attribute of a consumed entity and **Go to attribute**, it takes you to the attribute in the domain model.

Unsupported attributes are grayed out and are not included in your app. 

#### CRUD Capabilities

If the entity, association, or attribute supports **C**reate, **R**ead, **U**pdate, or **D**elete capabilities and it is also supported by Studio Pro, then it is displayed in the Integration pane.
Entities and associations can have any of the CRUD capabilities, while attributes can only have create and update. For more information on CRUD capabilities, see [Write Data to Another App](/catalog/write-data/).

If an entity does not support any capability, it will be displayed with a yellow entity icon. This results in a non-persistable entity in the domain model.

### Actions {#actions}

External actions are displayed under the service, below the entities. By default the actions are hidden and can be made visible by clicking **Show more...**

By clicking the expand button next to the action, the parameters and return type of that action are shown. You can right-click and select **Find Usages** in order to search for all the places the action is used throughout the app.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/data-hub-pane/actions.png" alt="integration pane actions" width="400" class="no-border" >}}

{{% alert color="info" %}}Actions that [are not supported](/refguide/consumed-odata-service-requirements/#actions) in your Mendix app are shown as non-selectable (gray) and cannot be dragged into a microflow.{{% /alert %}}

## Read More

* [Catalog](/catalog/)
* [External Entities](/refguide/external-entities/)
* [Consumed OData Service](/refguide/consumed-odata-service/)
* [How to Consume Registered Assets](/catalog/consume/)
