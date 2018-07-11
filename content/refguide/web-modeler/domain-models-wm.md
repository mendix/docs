---
title: "Domain Models Overview in the Web Modeler"
category: "Web Modeler"
description: "Describes the domain models in the Mendix Web Modeler."
tags: ["web modeler", "domain model"]
---

## 1 Introduction

The domain model is a data model that describes the information in your application domain in an abstract way. It is central to the architecture of your application. 

The domain model in the Web Modeler consists of the following:

* Entities
* [Associations](domain-models-association-properties-wm) 

{{% alert type="info" %}}

Let us say you have a collection of CDs like the one in the table below.

| Title                           | Artist                   |
| ------------------------------- | ------------------------ |
| How to Dismantle an Atomic Bomb | U2                       |
| Exodus                          | Bob Marley & The Wailers |

The rows in the table are CDs. The type of the two rows is 'CD' and this is the entity name. A specific CD like 'How to Dismantle an Atomic Bomb' of the band U2 is called an object of the entity 'CD'. Characteristics like the title and artist are called attributes.

{{% /alert %}}

To view the **Domain Models** of your app in the Web Modeler, click the **Domain Models** icon in the left menu bar of the Web Modeler.

![](attachments/domain-models-wm/wm-domain-model.png)

After opening a domain model, you will see an overview of all the entities, attribute, and associations of the entities. 

![](attachments/domain-models-wm/wm-domainoverview.png)

{{% alert type="info" %}}

The complexity of your domain model depends on the complexity of your app. 

{{% /alert %}}

The **Auto Arrange** option above the domain model auto-arranges the entities. You can click it several times to get the view that you like. 

## 2 Components 

| Domain model components                                  | Description                                                  | Properties |
| -------------------------------------------------------- | :----------------------------------------------------------- | ------------------- |
| Entity                                                   | An entity represents a class of real-world objects, such as customers, invoices, work items, etc. <br />If we draw a parallel with databases, the entity is a table. | Name<br />[Persistablity](../refguide/persistability) |
| [Attribute](domain-models-attributes-wm) | Attributes are characteristics that describe and/or identify the entity. For example, a *Customer* entity typically has attributes for the name of the customer, an e-mail address, and other personal information. <br />If we draw a parallel with databases, the attribute is a column. | Name<br />Type |
| [Association](domain-models-association-properties-wm) | An association describes a relation between entities. In the domain model, an association is represented by a line/arrow between two entities.<br />If we draw a parallel with databases, the association is a foreign key. | Name<br />[Multiplicity](domain-models-association-properties-wm#multiplicity)<br />[Delete behavior](domain-models-association-properties-wm#delete-behavior) |

For examples and more technical details, see the Desktop Modeler Reference Guide: [Domain Model](../refguide/domain-model), [Entities](../refguide/entities), [Attributes](../refguide/attributes), and [Associations](../refguide/associations). 

## 3 Adding New Entities {#adding-new-entities}

You can add new entities in the **Toolbox**. 

![](attachments/domain-models-wm/wm-domainentity.png)

To add an entity, do the following:

1. Open the **Toolbox** tab of the domain model.

2. Drag and drop **New Entity** to the working area.

3. Fill out the name for it and click **Create**:

   ![](attachments/domain-models-wm/wm-createnewentity_dialog.png)

The new entity is added to the domain model.

![](attachments/domain-models-wm/wm-new-entity.png)

## 4 Adding New Attributes {#adding-new-attributes}

To add attributes in the domain mode, do the following:

1. Select a block with entity you want to add attribute to. The **New attribute** option appears:

   ![](attachments/domain-models-wm/wm-addingattribute.png)

2. Click New attribute and specify its **Name** and **Type**:

   ![](attachments/domain-models-wm/wm-createneweattribute_dialog.png)

3. Click **Create**.

New attribute is added to the entity. 

![](attachments/domain-models-wm/wm-new-attribute.png)

## 5 Adding New Associations

To add association in the domain model, do the following:

1. Select a block with entity you want to add association to.

2. Click the arrow icon that appears:   

   ![](attachments/domain-models-wm/wm-addingassociation.png) 

3. Select a second entity for the new association from the list of existing entities and click **Select**. You can also create a new entity for the association from the dialog box. 

   ![](attachments/domain-models-wm/wm-new-association.png)


   {{% alert type="info" %}}

The module is indicated next to the entity name in the brackets. If you select the entity from another module, you will create a cross-module association. For more information, see [Cross-Module Associations](domain-models-association-properties-wm#cross-module-associations).  The entities of the current module are listed first. 

   {{% /alert %}}  

## 6 Specifying Properties

In the domain model, you can manage the properties of the entities, attributes, and associations on the **Properties** tab.

At the bottom of the tab you can see the **Delete** button.

### 6.1 Specifying Entity Properties

You can manage the following properties of an entity:

*   The **Name** of the entity
*   [Persistability](../refguide/persistability) of the entity

![](attachments/domain-models-wm/wm-entityproperties.png)

To change the entity properties, click the entity in the domain model. The **Properties** tab for the selected entity is displayed automatically. 

### 6.2 Specifying Attribute Properties

You can manage the following properties of an attribute:

*   The **Name** of the attribute
*   The [**Type**](domain-models-attributes-wm)  of the attribute

![](attachments/domain-models-wm/wm-attribute-properties.png)

To change the attribute properties, click the attribute in the domain model. The **Properties** tab for the selected attribute is displayed automatically. 

![](attachments/domain-models-wm/wm-selecting-attribute.png)


{{% alert type="info" %}}

Fields that are displayed in **Properties** may vary depending on the type of the attribute.

{{% /alert %}}

### 6.3 Specifying Association Properties

You can manage the following properties of an association:

*   The **Name** of the association
*   **Multiplicity** of the association
*   The delete behavior of the objects

For more information, see [Association Properties](domain-models-association-properties-wm). 

To change the association, click the line in the domain model. The **Properties** tab for the selected entity is displayed automatically. 

If the association type is one-to-many or many-to-many, you can swap direction of it clicking the corresponding icon. For more information, see [Multiplicity](domain-models-association-properties-wm#multiplicity). 

![](attachments/domain-models-wm/wm-managing_associations.png)

## 7 Deleting Entities, Attributes or Associations

To delete the entity, attribute or association, do the following:

1. Select the entity, attribute or association you want to delete.

2.  Press **Delete** or click the **Delete** button at the bottom of the **Properties** tab.

   ![](attachments/domain-models-wm/wm-deletion.png)

## 8 Related Content

* [Attribute Types in the Web Modeler](domain-models-attributes-wm)
* [Association Properties in the Web Modeler](domain-models-association-properties-wm) 