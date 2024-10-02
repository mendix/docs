---
title: "External Entities"
url: /refguide/external-entities/
weight: 15
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
## Introduction

External entities can be added to the domain model through the [Integration pane](/refguide/integration-pane/). They are displayed as purple entity containers in the domain model. External entities represent the link to the datasets that are made available through the shared data sources registered in [Mendix Catalog](/catalog/). Data sources are collections of entity sets (that are referred to as datasets) in published OData services. 

Datasets are maintained and updated in the originating app. You can consume these datasets through external entities in your app development. When the app uses the data, it retrieves it from the originating app.

External entities can be used like local entities. However, as the datasets are maintained in the originating apps, not all properties can be changed in the consuming app.

## Adding an External Entity to an App {#adding-external-entities}

To add an external entity to your app model, follow these steps:

1. In the domain model of your app, use the Integration pane to search for the entity or data source you want to use. 

    {{% alert color="info" %}}In the [Catalog](/catalog/search/), an OData service may be registered multiple times with different version numbers or deployed to different environments, all publishing the entity (dataset) that you may want to use. Search the Catalog first and find the one most relevant to the requirements for your app.{{% /alert %}}

2. Drag the entity into the domain model. 

The entity and its attributes are then added to your app and two documents are added in the **App Explorer**: 

* A [Consumed OData Service](/refguide/consumed-odata-service/) document that contains details of the OData service and the metadata. The logo displayed identifies the originating app of the service.
* A **Location** constant that specifies the URL of the service.

{{< figure src="/attachments/refguide/modeling/domain-model/external-entities/consumed-service-docs.png" alt=" Virtual Entity and OData Service files" class="no-border" >}}

{{% alert color="info" %}}
When you drag an entity that is associated with an entity from the same service already in your domain model, the association will be displayed and established between the entities. For more information on associations between external entities, see [Associations](#properties).
{{% /alert %}}

For more information, see [Consumed OData Service](/refguide/consumed-odata-service/).

The consumed entities of the current app are listed in the **Used in your App** section of the Integration pane:

{{< figure src="/attachments/refguide/modeling/domain-model/external-entities/data-hub-app.png" alt=" Virtual Entity and OData Service files" class="no-border" >}}

{{% alert color="info" %}}
When a new version of a consumed service becomes available in the Catalog, this will be indicated in the Integration pane by an update arrow next to the service name. For more information, see the [Updating or Switching a Consumed OData Service](/refguide/consumed-odata-service/#updating) section in *Consumed OData Service*.
{{% /alert %}}

You can make local changes to the properties of external entities that only affect how the data is used and presented in the consuming app. All other properties are defined in the originating app and cannot be changed. When multiple external entities from the same OData service are used in a module or app, associations between the entities (made in the originating app) will automatically be made in the local module.

{{% alert color="info" %}}
If you delete an external entity from the domain model, the service documents remain in the App Explorer list and the service remains listed in the Integration pane. You can delete the two service documents if you are no longer going to use any entities from the consumed service.
{{% /alert %}}

For more information on using published OData services and entities through the Catalog, see [Consume Registered Assets](/catalog/consume/consume-registered-assets/).

## Properties of External Entities {#properties}

Compared to local entities, external entities have a limited number of properties that can be changed. The rest of the properties are defined in the originating app and are, therefore, read-only.

{{% alert color="info" %}}
Changes that are made to the properties of external entities are made only in the consuming app. The originating app will not be affected by the changes.
{{% /alert %}}

### General

This group displays the general properties of the external entity. These values are defined in the originating app, so you cannot edit them. The values that you can edit will only apply to the local app:

{{< figure src="/attachments/refguide/modeling/domain-model/external-entities/external-entity-properties.png" alt="External Entity Properties" class="no-border" >}}

* **Name** – the name of the entity in the local app
* **From service** – shows the service from which this entity originates
* **Original name** – shows the name of the entity as defined in the originating app
* **Capabilities** - indicates whether the service supports creating, reading, updating, and/or deleting objects
* **Create and change locally** - when switched off, the app can only create and update objects when the server supports it; when switched on, the app can create and update objects, but will not be able to [send](/refguide/send-external-object/) them to the server
* **Persistable** – indicates if this a persistable external entity, which means the originating app allows retrieving (reading) objects
* **Summary** – shows the description for the entity in the originating app (shown only when there is a description)

### Attributes {#attributes}

The [attributes](/refguide/attributes/) that have been published in the OData service for the external entity are listed here. You can choose to remove attributes that the app does not need. All changes that are made to the attributes and the attribute list are applied to the local instance of the entity. As they are consumed, the changes will not affect the metadata of the consumed service that the entity is published in or the attributes of the entity in the originating app.

{{% alert color="info" %}}In the Integration pane, the associations and attributes that are not supported in your Mendix model are shown as non-selectable (gray) and will not be included in the entity properties or when you drag them into the domain model. For more information, see [Integration Pane](/refguide/integration-pane/#association-attributes).{{% /alert %}}

The following operations can be done on the attribute list:

* **Add** – add attributes that were published in the OData service for the entity and were previously removed from this entity
* **Edit** – edit the selected attribute from the [Edit Attribute](#edit-attribute) dialog
* **Remove** – remove an attribute from the list

#### Edit Attribute {#edit-attribute}

The **Edit Attribute** dialog can be used to specify a local name and add a local description.

{{< figure src="/attachments/refguide/modeling/domain-model/external-entities/edit-attributes.png" alt="Edit attributes" class="no-border" >}}

* **General**
    * **Name** – a local name for the attribute
    * **Original Name** – a read-only value that displays the original name of the attribute in the originating app ¹
    * **Summary** – a read-only summary that displays the description for the attribute in the originating app; local descriptions are entered in the [Documentation tab](#documentation)
    * **Type** – read-only values for the **Type**, **Length**, and **Max length** of the attribute as defined in the originating app
    * **Default value** - the default value for this attribute when the app creates an object (visible only when the entity is creatable)
* **Documentation** – a description for the attribute as defined in the originating app

¹ For attributes that represent a property of a complex attribute, a forward slash (`/`) separates the name of the attribute of the entity and the name of the property of the complex type.

### Associations {#associations}

This tab displays the associations the external entity has with other entities that are published in the same service, and any associations that have been made with local entities. For more information on association properties in Studio Pro, see [Association Tab Properties](/refguide/association-member-properties/).

If the entity contains [one-way navigable associations](/refguide/association-properties/#one-way-navigable), there is a note at the top of the dialog box. 

{{< figure src="/attachments/refguide/modeling/domain-model/external-entities/external-entity-associations.png" alt="Edit attributes" class="no-border" >}}

The following apply for all associations with the external entity:

* **Navigability icon** – an icon indicating whether an association is [one-way navigable](/refguide/association-properties/#one-way-navigable)
* **Name** – name of the association as displayed in the current app
* **Type** – read-only for associations between two external entities
* **Owner** – read-only for associations between two external entities
* **Parent** – read-only for associations between two external entities
* **Child** – read-only for associations between two external entities

You can **Add** and **Edit** associations to the external entity with a local entity. However, the association cannot be made from an external entity to a local entity; the local entity must be the owner of the association.

If you use an external entity in your app that is associated with other external entities from the same OData service in your app, the association will automatically be added in the domain model and be listed here.

{{% alert color="info" %}}
It is possible to **Remove** an association between two external entities in the domain model that has been automatically added. If at a later stage you want to restore the association, you can do this in the domain model by right-clicking one of the external entities and clicking **Add** > **Association**.
{{% /alert %}}

{{% alert color="info" %}}
You cannot connect two external entities that are not connected in the originating app, as the relationship to the data cannot be influenced locally. However, consider adding a local entity and connect this local entity with both external entities. In this case, the local entity must be the owner of both associations.
{{% /alert %}}

### Association Properties

When you **Edit** an association that is included in two entities exposed in the same OData service, the following properties are displayed and the only local change that can be made is the local name:

{{< figure src="/attachments/refguide/modeling/domain-model/external-entities/association-properties.png" alt="Edit external associations" class="no-border" >}}

* **Name** – local name of the association
* **Original Name** – read-only name of the association given in the originating app
* **Summary** – read-only description of the association from the originating app
* **Multiplicity** – read-only multiplicity values from the originating app
* **Documentation** – a local description for the external entity association

If the association is [one-way navigable](/refguide/association-properties/#one-way-navigable), there is a note at the top of the dialog box.

{{< figure src="/attachments/refguide/modeling/domain-model/external-entities/association-properties-one-way-navigable.png" alt="Edit external associations one-way navigable" class="no-border" >}}

### Documentation {#documentation}

You can add any local information about the external entity in this tab.

## Authentication {#authentication}

Using external entities in production environments requires both publishers and consumers of OData services to set the correct authentication method.

### Publishers: Setting Authentication Method

Publishers of an OData service set the type of authentication needed for it to be consumed. The following authentication methods are available:

* [Username and password](/refguide/published-odata-services/#username-password) (basic authentication)
* [Active session](/refguide/published-odata-services/#authentication-active-session)
* [Custom](/refguide/published-odata-services/#authentication-microflow) (calling an authentication microflow)
    * [Mendix SSO](/refguide/published-odata-services/#authentication-mendix-sso)
    * Other (add your own, using a custom module for example)

For details on the types of authentication methods and how to set them up, see the [Security](/refguide/published-odata-services/#security) section of *Published OData Services*. 

### Consuming External Entities with Authentication

When an external entity is used in an app module through the Integration pane, a [consumed OData service](/refguide/consumed-odata-service/) document is added specifying the details of the consumed service. This is the API to the publishing app and the data associated with the entity.

If the service you are consuming requires authentication, you will need to add authentication credentials. Consumers of an OData service in an external entity can contact the owner of the data source to check the required authentication method and credentials. 

Learn more about adding authentication information to a consumed OData service:

* Configuring [username and password](/refguide/consumed-odata-service/#authentication) consuming apps
* Using [HTTP headers](/refguide/consumed-odata-service/#http-headers) for consuming custom authentication methods
* Consuming a service that uses [Mendix SSO](/refguide/consumed-odata-service/#authenticate-mendix-sso)

## External Entity Limitations {#limitations}

External entities are the endpoints that are defined in the published OData service from the originating app. The consumed OData service document displays the values from the service metadata when the external entity is used through the Integration pane. The datasets associated with the entities are maintained in the originating apps.

{{% alert color="info" %}}
Please note that external entities are not supported in native offline apps.
{{% /alert %}}

Furthermore, external entities cannot be committed. Use the [Send External Object activity](/refguide/send-external-object/) to persist changes to external entities. This means the following:

* The **Commit** activity does not work. Use **Send External Object** instead.
* On pages, the [Save button](/refguide/button-widgets/) and the [Save Changes event](/refguide/on-click-event/#save-changes) do not work when the page contains widgets that update external entities. Call a microflow that persists the changes using **Send External Object** instead.

For more details on consuming services and published entities, including operations that can be performed on external entities, see [Consume Registered Assets](/catalog/consume/) in the *Data Hub Guide*.
