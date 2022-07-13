---
title: "External Entities"
url: /refguide8/external-entities/
weight: 15
tags: ["domain model", "entity", "entities", "attribute", "external entities", "even handler", "access rule", "studio pro", "consumed OData Service"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/external-entities.pdf).
{{% /alert %}}

## 1 Introduction

External entities connect to the data for shared data sources that are available through [Mendix Data Hub](/data-hub/). These external entities represent the link to the datasets that are maintained and stored in the external applications. You can integrate or *consume* external entities in your project and use them with local entities to create an app that uses the shared datasets. This dataset that the external entity connects to will be updated as it is changed in the source application. 

This means that several properties of the external entities are determined in their originating app and cannot be changed in your project. 

External entities are added to the domain model through the [Data Hub pane](/refguide8/data-hub-pane/) and are displayed as *purple* entity containers in the domain model. 

{{% alert color="info" %}}
A license is required to use Mendix Data Hub and connect to external data sources through consumed OData services in your apps.
{{% /alert %}}

For more information on adding external entites from the **Data Hub** pane see [Adding External Entities](#adding-external-entities).

## 2 Adding an External Entity to a Project {#adding-external-entities}

To add an external entity to your project, do the following:

1. Go to the domain model.

2. In the **Data Hub** pane, search for the entity that you would like to use in your app.

   {{% alert color="info" %}}In the Data Hub Catalog, an OData service may be registered several times with different versions or deployed to different environments all exposing the entity that you may want to use. Search the Data Hub Catalog first and find the one most relevant to the requirements for your project.{{% /alert %}}

3.  Drag and drop the entity in the domain model. The entity and its attributes are then added to your app:

	{{< figure src="/attachments/refguide8/modeling/domain-model/entities/virtual-entity-example.png" alt="Virtual Entity Example" >}}

{{% alert color="info" %}}
If you drag an entity that is associated with an entity from the same service already in your domain model, the association will be established between the entities. For more information on associations between external entities, see [Associations](#properties).
{{% /alert %}}

When an external entity is added to the domain model, two documents will be added in the **Project Explorer**: the **Consumed OData Service** document containing the metadata for the consumed entity, and the **OData Location** of the dataset. For more information, see [Consumed OData Service](/refguide8/consumed-odata-service/). 

In the **Project Section** of the **Data hub** pane the consumed entities that are in the current project will be listed. 

{{% alert color="info" %}}
If there is a newer version of a consumed service becomes available in the Data Hub Catlog, this will be indicated in the **Data Hub** pane by an update arrow against the service name. For more information, see the [Updating or Switching a Consumed OData Service](/refguide8/consumed-odata-service/#updating) section in *Consumed OData Service*.
{{% /alert %}}

You can make local changes to the properties of external entities that only affect how the data is used and presented in the consuming app. All other properties are defined in the source application and cannot be changed. When multiple external entities from the same OData service are used in a module or app, associations between the entities (made in the source app) will automatically be made in the local module.

For more information on using published OData services and entities through the Data Hub Catalog, see [How to Consume Registered Assets](/data-hub/data-hub-catalog/consume/) in the *Data Hub Guide*.

## 2 Properties of External Entities {#properties}

Compared to local entities, external entities have a limited number of properties that can be changed. The rest of the properties are defined in the originating app and are, therefore, read-only. 

{{% alert color="info" %}}
Changes that are made to the properties of external entities are made only in the consuming app. The originating app will not be affected by the changes.
{{% /alert %}}

### 2.1 General

This tab displays the general properties of the external entity. The values that are defined in the originating app are displayed but but cannot be edited. The values that can be edited will only apply to the local project:

{{< figure src="/attachments/refguide8/modeling/domain-model/external-entities/external-entity-properties.png" alt="External Entity Properties" >}}

* **Name** – the name of the entity in the local app
* **Original name** – this is read-only and shows the name of the entity as defined in the consumed OData service
* **Summary** – this is a read-only field and displays the description for the entity in the originating app

### 2.2 Attributes {#attributes}

The [attributes](/refguide8/attributes/) that have been exposed in the OData service for the external entity are listed here. All changes that are made to the attributes and the attribute list are applied to the local instance of the entity. As they are consumed, these changes will not affect the metadata of the consumed service that the entity is exposed in or the attributes of the entity in the originating app.

{{% alert color="info" %}}In the [Data Hub Pane](/refguide8/data-hub-pane/#association-attributes) the associations and attributes that are not supported in your Mendix model are shown as non-selectable (gray) and will not be included when you drag them into the domain model or be included in the entity properties. For more information see [Data Hub Pane](/refguide8/data-hub-pane/#association-attributes).{{% /alert %}}

The following operations can be done on the displayed attribute list:

* **Add** – add attributes that were exposed in the OData service for the entity and were previously removed for this local instance
* **Edit** – edit the selected attribute from the [Edit Attribute](#edit-attribute) form
* **Remove** – remove an attribute from list 

#### 2.2.1 Edit Attribute {#edit-attribute}

The **Edit Attribute** box can be used for specifying a local name for the attribute and adding a local description.

{{< figure src="/attachments/refguide8/modeling/domain-model/external-entities/edit-attributes.png" alt="Edit attributes" >}}

* **General Tab**
	* **Name** – a local name for the attribute
	* **Original Name** – this is a read-only value that displays the original name of the attribute as given in the originating app
	* **Summary** – the description for the attribute in the originating app; to enter a local description, add this in the [Documentation tab](#documentation)
	* **Type** – the **Type** and **Length** of the attribute as defined in the originating app 
* **Documentation** – a description for the attribute that is displayed for users of the current app

### 2.3 Associations {#associations}

This tab displays the associations that the external entity has with other entities that are exposed in the same service and also any associations that have been made with local entities. For further details on association properties in Studio Pro see [Association Tab Properties](/refguide8/association-member-properties/). 

{{< figure src="/attachments/refguide8/modeling/domain-model/external-entities/external-entity-associations.png" alt="Edit attributes" >}}

The following apply for all associations with the external entity:

**Name** – name of the association
**Type** – read-only for associations between two external entities
**Owner** – read-only for associations between two external entities
**Parent** – read-only for associations between two external entities
**Child** – read-only for associations between two external entities

You can **Add** and **Edit** associations to the external entity with a local entity. However, the association cannot be made *from* an external entity to a local entity: the local entity must be the owner of the association.

If you use an external entity in your app and this entity is associated with other external entities from the same OData service in your app, the association will automatically be added in the domain model and be listed here. 

{{% alert color="info" %}}
It is possible to **Remove** an association between two external entities in the domain model that has been automatically added. If at a later stage you want to restore the association, you can do this in the domain model by right-clicking one of the external entities and clicking **Add** > **Association**.
{{% /alert %}}

{{% alert color="info" %}}
If you want to connect two external entities that are not connected in the originating app, this is not possible as the relationship to the data cannot be influenced locally. However, consider adding a local entity and connect this local entity with both external entities. The local entity must be the owner of both associations, in this case.
{{% /alert %}}

### 2.3.1 Association Properties
When you **Edit** an association that is included for two entities exposed in the same OData service, the following properties are displayed and the only local change that can be name is the local Name:

{{< figure src="/attachments/refguide8/modeling/domain-model/external-entities/association-properties.png" alt="Edit external associations" >}}

* **Name** – local name of the association
* **Original Name** – name of the association given to it in the originating app 
* **Summary** – read-only description of the association from the originating app
* **Multiplicity** – read-only multiplicity values from the originating app
* **Documentation** – go to this tab to add a local description for the external entity association

### 2.3.2 Connecting Two External Entities 

If you want to connect two external entities that are not connected in the originating app, this is not possible as the relationship to the data cannot be influenced locally. However, you can add a local entity and connect this local entity with both external entities. The local entity must be the owner of both associations, in this case.

### 2.4 Documentation {#documentation}

You can add any local information about the external entity in this tab.

## 3 External Entity Limitations

External entities are the endpoints that are defined in the published OData service from the originating app. The consumed OData service document displays the values from the service metadata when the external entity is used through the **Data Hub** pane. The limitation on external entities is that they are consume-only entities. The datasets associated with the entities are maintained in the originating apps.

For more details on consuming services and exposed entities, including operations that can be performed on external entities, see [How to Consume Registered Assets](/data-hub/data-hub-catalog/consume/) in the *Data Hub Guide*.
