---
title: "Integration Pane"
url: /refguide/integration-pane/
weight: 30
description: "Describes the Integration pane in Mendix Studio Pro."
aliases:
    - /refguide/data-hub-pane/
# SB: The images on this page are created using the Lato-LandscapeDemoApp (https://sprintr.home.mendix.com/link/project/1b515494-d818-4358-8c91-6c3d54e9cae5)
---

## Introduction

Use the Integration pane in Studio Pro to incorporate available assets from different applications in an organization into your Mendix apps. You can create new apps using shared entities, actions, and events that are registered in the [Catalog](/catalog/). In Studio Pro, this is possible through the integrated functionality of Catalog in the **Integration** pane.

You can search in the Catalog through the Integration pane to discover assets that you can use in your app. You can connect to services in your landscape by dragging elements from this pane into your app. For example, you can add entities that are published in registered OData services to your app's domain model. These entities are called [external entities](/refguide/external-entities/) and are different because they enable connection to the data associated with the entities in the originating app. Besides external entities, OData services can expose actions that can be called from within microflows and can define non-persistable entities that can be used as parameters or return types of these actions. You can also connect with [business event services](/refguide/business-event-services/) by dragging an event onto your app's domain model.

To display the Integration pane, click **View** > **Integration**.

## Integration Pane Overview

The following functionality is available in the pane:

* [Search](#search) – Enter a search string of alphanumeric characters to search in the Catalog. The search is performed on services, entities, attributes, associations, actions, business events, and descriptions in the Catalog.
* [Filter](#filter) – By default, the search is performed on assets in the **Production** environment. Click the **Filter** icon > **Show development environments** to include non-production and sandbox environments in the search.
* [View service information](#viewing) – When you enter a search term and browse through the results, you can see all relevant information for that service, including the assets that it provides for use in your app.
* [View services used in this app](#used-in-app) – Services, entities, actions, and events that are currently used in your app are displayed in the **Used in this app** section. They are also indicated with a green check mark in the search results. For more information, see the [Used in this app](#used-in-app) section below. 

### Used in This App Section {#used-in-app}

When you do not enter search text in the Integration pane, the **Used in this app** section is displayed. This shows the consumed services and the related external entities, actions, and events used in the current app. The list of entities, associations, attributes, actions, and events for the consumed services is shown as for the search results:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/integration-pane/used-in-your-app.png" alt="Used in Your App section" class="no-border" width="300" >}}

For more information on how to add entities and actions to your app, see the [Adding an External Entity to an App](/refguide/external-entities/#adding-external-entities) section in *External Entities* or [Call External Action](/refguide/call-external-action/). For information on working with business events, see [Using Business Events](/appstore/services/business-events-configuration/#two-way-be).

## Searching Catalog Sources {#search}

As you enter a search term, all items in the Catalog that satisfy the search string are listed in the search results. This includes words in the service, entity, attribute, action, or event descriptions, which are not displayed in the Integration pane. For more information, see the [Selected Asset Details](/catalog/manage/search/#search-details) section in *Search in the Catalog*.

You can drag an external entity or a business event from the search results into your domain model. It is added to your app and displayed as an [external entity](/refguide/external-entities/) or a specialization of the BusinessEvents.ConsumedBusinessEvent or BusinessEvents.PublishedBusinessEvent entity, respectively.

{{% alert color="info" %}}Services that are set to **Not discoverable** in the Catalog are not included in the search results for any user, including owners of the service. To consume entities from these services, owners must ensure that they are [Discoverable](/catalog/manage/curate/#discoverability).{{% /alert %}}

### Wildcard Search

You can perform a wildcard search by entering `*` in the search field.

{{% alert color="info" %}}
The search string must be a minimum of three alphanumeric characters. Punctuation cannot be used as part of the search term except for the wildcard character `*` to perform an "empty" search in the Catalog. You cannot use the wildcard in combination with other characters. For further details, see [How to Search for Registered Assets](/catalog/search/).
{{% /alert %}}

### Filtering Environments {#filter}

By default, the search is performed on assets in the **Production** environment. To include all other environments such as test, acceptance, and also the Mendix Free App environment (**Sandbox**) in the search, click the **Filter** icon and select **Show development environments**:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/integration-pane/filter-icon.png" alt="Filter Icon"   width="300"  class="no-border" >}}

{{% alert color="info" %}}
When **Show development environments** is selected, all subsequent search results will also include those in non-production environments.
{{% /alert %}}

## Integration Pane Information {#viewing}

The information that is displayed in the Integration pane either when you enter a search term or when you open the **Used in this app** section is described in the sections below. 

### Services

The search results and **Used in this app** section show the following information at a service level:

* **Service name**
* **Application icon** for the service (for example, Mendix, SAP, Siemens Teamcenter, or custom icons)
* **Service version**
* **Environment name** for non-production environments

    {{% alert color="info" %}}Only the names of non-production environments are displayed. Services in a **Production** environment do not show an environment name. {{% /alert %}}

* **Green check mark** if the service or a service's asset is consumed in the app. If you right-click a consumed service, you can do the following:

    * **View in Catalog** – go to the [data source details](/catalog/manage/search/#service-details) page in the Catalog
    * **Go to ...** – open the corresponding document in this app

        {{< figure src="/attachments/refguide/modeling/menus/view-menu/integration-pane/integration-pane-menu.png" alt="Information on a service" class="no-border" width="300" >}}

* **Gray shield icon** – shows if the service or entity is validated in the Catalog
* **Update icon** – a blue arrow icon that indicates that there is another version of the consumed service available in the Catalog. Click to update the service that is consumed in the app to the contract that is now available:

    {{< figure src="/attachments/refguide/modeling/menus/view-menu/integration-pane/update-available.png" alt="Integration pane update" class="no-border" width="300" >}}

    {{% alert color="info" %}}The update feature is currently only available for OData services. {{% /alert %}}

    {{% alert color="info" %}}The service information presented in the **Used in this app** section represents the service that is currently consumed; information about the newer version of the service is visible in the search results. In the example above, version 1.2.0 of **BikeSubscriptionService** is currently consumed in the app. If you search for "BikeSubscriptionService", the new service version is listed, showing the elements of that newer version. The newer version could include elements that are not available in the current version of the service that is consumed in your app, or conversely, your app could use elements of the service that are no longer available in the new version of the service.{{% /alert %}}

* **Information icon** – view further details for the service and a link to go directly to the [Service Details](/catalog/manage/search/#search-details) screen in the Catalog:

    {{< figure src="/attachments/refguide/modeling/menus/view-menu/integration-pane/integration-pane-info.png" alt="Integration pane Information" class="no-border" width="300" >}}

### External Entities, Attributes, and Associations {#association-attributes}

External entities are grouped in the **Entities** folder under the service name. Expanding an entity displays its description, attributes, and associations.

In the search results, the visible elements are not all available elements in the service, but just the selection that matches the search term. For any service in the list, you can click **Show details** to see the full list of the exposed entities, associations, and attributes for that service.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/integration-pane/expand-service-list.png" alt="Integration pane Information" class="no-border" width="300" >}}

{{% alert color="info" %}}Entities, associations, and attributes that are not supported in your Mendix app are shown as non-selectable (gray) and are not included when you drag them into the domain model.{{% /alert %}}

#### Entity

If you right-click an entity and select **View in Catalog**, it takes you to the entity details page in the [Catalog](/catalog/).

If you right-click a consumed entity and select **Go to entity**, it takes you to the entity in the domain model.

#### Attributes

Attributes for a service are listed in the same order as the service has them defined.

Unsupported attributes are grayed out and are not included when you drag the entity into your app. 

#### Associations

The associations that are exposed in the services are listed after the attributes. Below each association, you can see the entity it associates with and a green check mark if that associated entity is already present in your app.

Unsupported associations are grayed out.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/integration-pane/unsupported-elements.png" alt="Integration pane greys out unsupported elements" class="no-border" width="300" >}} 

### Actions {#actions}

External actions are displayed under the service, below the entities, grouped in a folder named **Actions**. You can drag these actions onto a microflow, where they appear as a **Call external action** activity. In this activity, you can configure the parameters and result variable. If a parameter or result has an external or non-persistable entity as its type, they are added to the domain model for you when you add the action to your microflow. 

Click the expand button next to the action to show the parameters and return type of that action. You can right-click and select **Find Usages** to search for all the places the action is used throughout the app.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/integration-pane/actions.png" alt="integration pane actions" width="400" class="no-border" >}}

{{% alert color="info" %}}Actions that [are not supported](/refguide/consumed-odata-service-requirements/#actions) in your Mendix app are shown as non-selectable (gray) and cannot be dragged into a microflow.{{% /alert %}}

### Business Events {#business-events}

Business event services have a single folder, named **Events**, which contains the business events available in the service. You can consume these events by dragging one into your domain model and choosing whether you want to **Publish events** or **Subscribe to events** (or both). Clicking **OK** creates entities that represent the payload of the event you want to publish or subscribe to. If you subscribe to an event, a microflow is also created in which you can model how to handle the event.

In the case of both publishing and subscribing to business events, there are two different entities in your domain model. If your app performs any operation on that event, the green check mark appears in the Integration pane. As long as the event is not yet published or subscribed to by your app, but it is a [capability](#capabilities) the business event offers, you can drag it into your domain model.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/integration-pane/business-events.png" alt="integration pane business events" width="400" class="no-border" >}}

### Capabilities {#capabilities}

If an entity supports **C**reate, **R**ead, **U**pdate, or **D**elete capabilities and is also supported by Studio Pro, it is displayed in the Integration pane. If an entity does not support any capability, it is displayed with a yellow entity icon. Dragging this into your domain model results in a non-persistable entity in the domain model. For more information on CRUD capabilities, see [Write Data to Another App](/catalog/write-data/).

A business event can be **Pub**lished or **Sub**scribed to, or both.

## Read More

* [Catalog](/catalog/)
* [External Entities](/refguide/external-entities/)
* [Consumed OData Service](/refguide/consumed-odata-service/)
* [Business Event Services](/refguide/business-event-services/)
* [Using Business Events](/appstore/services/business-events-configuration/#two-way-be)
* [How to Consume Registered Assets](/catalog/consume/)
