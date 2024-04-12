---
title: "Teamcenter Extension"
url: /appstore/modules/siemens/teamcenter/teamcenter-extension/
category: "Teamcenter"
linktitle: "Teamcenter Extension"
#weight: 10
description: "Describes the Teamcenter Extension from the Mendix Marketplace. The extension facilitates a low-code approach to integrating with Teamcenter"
tags: ["Teamcenter", "Integration", "PLM", "SOA connector", "low-code"]
---

## 1. Introduction {#introduction}

The [Teamcenter Extension](link) is a Mendix Extension built using the Mendix Extensibility Framework to provide you with an effortless means to harness the full capabilities of [Teamcenter Connector](https://marketplace.mendix.com/link/component/111627) for Mendix. The Teamcenter Extension is layered atop the Teamcenter Connector, providing a low-code experience by making it easier to visualize and access Teamcenter data model and automate creation of Mendix artifacts.

### 1.1. Pre-requisites {#prerequisities}

The Teamcenter Extension requires Mendix version 10.6.5 or higher. You also need the following modules installed from the Mendix Marketplace
1. [Teamcenter Connector](
https://marketplace.mendix.com/link/component/111627)
2. [Community Commons](https://marketplace.mendix.com/link/component/170)

Additionally, please ensure you have the correct feature flag enabled. Right click on the Mendix Desktop icon shortcut and select Properties. Add the keyword "--enable-extension-development" in the Target entry box.

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/d681ea41-784f-4b76-b959-fe7cf4e4c46c)

### 1.2. License {#license}

The Teamcenter Extension is free to download and use. You may, however require a Mendix Studio Pro License to develop apps in Mendix and Teamcenter Author license to connect to Teamcenter.

## 2.	Use Cases {#usecases}

### 2.1.	Get Item Revisions from Teamcenter {#getitemrevision}

The Get ItemRevision action allows you to generate a microflow to search for and retrieve ItemRevisions or specialization thereof from Teamcenter, and the corresponding domain model. The resulting microflow implements the Saved Query “Item Revision...” from Teamcenter.

### 2.2. Get Workspace Objects {#getworkspaceobjects}
The Get Workspace Objects action allows you to configure and generate a microflow to search for and retrieve Workspace Objects from Teamcenter, and the corresponding domain model. This action implements the Saved Query "General.." from Teamenter

### 2.3. Create Item and Item Revision {#createitem-and-itemrevision}
The Create Item and Item Revision action allows you to configure to generate a microflow to create an Item with ItemRevision or specializations thereof in Teamcenter, and the corresponding domain model. The resulting microflow implements the Create Object and Update Properties actions from the TcConnector. With the Create Object action, the Item and ItemRevision get created in Teamcenter, setting the Teamcenter properties that need to be set upon creation; with the Update Properties action, the remaining properties are updated in Teamcenter.

### 2.4. Update Item and Item Revision {#updateitem-and-itemrevision}
The Update Item and Item Revision action allows you to generate a microflow to update an Item with ItemRevision or specializations thereof in Teamcenter and the corresponding domain model. The resulting microflow implements the Update Properties action from the TcConnector. 

### 2.5. Revise Item Revision {#reviseitem-and-itemrevision}
The Revise Item and Item Revision action allows you to generate a microflow to revise an ItemRevision or specializations thereof in Teamcenter and the corresponding domain model. The resulting microflow implements the Revise Object and Update Properties actions from the TcConnector. With the Revise Object action, a new ItemRevision is created, setting the Teamcenter properties that need to be set upon revising; with the Update Properties action, the remaining properties are updated in Teamcenter.

### 2.6. Create BOM Window {#create-bom-window}
The Create BOM Window action allows you to generate microflows and corresponding domain model to configure a BOM Window and retrieve structure data from Teamcenter. This feature supports the retrieval of structures with:
•	RevisionRule (or default RevisionRule)
•	VariantRule
•	BOMWindow property flags
Depending on the configuration, microflows are generated to:
•	create BOMWindow (implementing the Create BOM Windows2 action from the TcConnector)
•	retrieve RevisionRules (implementing the Get Revision Rules action from the TcConnector)
•	retrieve VariantRules (implementing the Get Variant Rule action from the TcConnector)
•	expand a single BOMLine (implementing the Expand One Level 2 action from the TcConnector)
•	expand all BOMLines (implementing the Expand All Levels action from the TcConnector)
•	close the BOMWindow (implementing the Close BIM Windows action from the TcConnector)
•	get the root BOMLine for a BOMWindow.

## 3 Home Page {#homepage}
Open the Teamcenter Extension by clicking on menu option View -> Teamcenter inside Mendix Studio Pro. This will open the landing page. You will see two tabs: Menu and Settings. 

The Menu tab displays use cases or actions you can create artifacts for, using the extension. The Settings tab allows you to provide details of your Teamcenter instance to connect to, while using the extension.

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/2d2908bb-7f4f-4957-9bee-6f2b5a9d2ad7)

The Settings tab displays Teamcenter configuration page. This is where you can provide your Teamcenter Instance details to connect to while building your app. Click on Edit to open a panel to enter details. Please note the certificate path should be relative to the App Directory

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/252cd07f-3f6d-4f82-b9a6-9ea67d6c4916)

## 4 Import mapping {#importmapping}

Clicking on any one of the actions opens an empty import mapping page. Here you can define what data you want to retrieve from Teamcenter and how to handle this data in Mendix. Depending on the action, the import mapping page starts with one or multiple entities/objects to configure, one per business object that need to be configured. 

During configuration, the import mapping page will build up a preview of the Mendix domain model involved in the integration. In addition, the import mapping page shows the corresponding business objects on the Teamcenter side. For this, the Teamcenter Extension displays the display names of the objects and their properties, references and relations.

In the Teamcenter extension, the import mapping consists of two steps:
1. Object mapping: As Teamcenter works with many layers of specializations of its business objects, in the import mapping page, you need to configure which object type you want to retrieve from Teamcenter and what Mendix objects need to be created, when retrieving these business objects. This is called Object mapping.
2.	Selection of properties, references and relations: Configuration which properties, references and relations you want to retrieve from Teamcenter and include in your Mendix model .

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/3f1d9b37-d898-4d4e-ad9f-aee86274876a)

### 4.1 Object mapping {#objectmapping}

Clicking on any one of the empty box in import mapping page opens the object mapping dialog shows. On the left side of the dialog, a tree with all relevant business objects available from the configured Teamcenter instance is displayed. If you have created any custom business objects in Teamcenter BMIDE, those objects will be shown as well. The right side shows a tree of all relevant entities in your Mendix app.

Relevance is dependent on the actions you are configuring. For example, for the action to get ItemRevisions from Teamcenter, the Teamcenter tree has an ItemRevision as its root object. That means that, for this action, you can only select ItemRevisions or specializations thereof. Similarly, in this example, the Mendix tree has the TcConnector.ItemRevision entity as its root entity.

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/ea1e86ce-0a19-4c9c-8592-eddbe9b78d24)

When retrieving a tree of objects, relevance can also be based on the type of relation/reference. When working with typed relations/references, the type of Teamcenter business object is dictated by the relation/reference. By limiting the list of Teamcenter objects and Mendix entities to those that are relevant, the Teamcenter extension guides you to select Teamcenter business objects that make sense in the context of the action you want to perform.

To configure which type of Teamcenter business object you are interested in and what type of Mendix entities this should be mapped to,  select a business object in the Teamcenter tree on the left and an entity on the Mendix tree on the right and click OK. 

It is also possible to create new entities for your integrations. This new entity needs to be a specialization of the root entity in the Mendix tree or one of its specializations. When you want to use a new entity, click your generalization of choice, click the Create new specialization of selected entity checkbox and provide an entity name. Now, once finishing the configuration for the actions, the Teamcenter extension will create a new entity with the given name and the selected entity as its generalization.

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/e3783a0c-fbd8-474e-ba67-b1d6723f3927)

Once you click OK, you will return to the import mapping tab with a sidebar opened to configure which Teamcenter properties, references, and relations to include when retrieving data for this business object.

### 4.2.	Teamcenter properties, references, and relations {#tcprop}

In the import mapping sidebar, you can configure which Teamcenter properties, references, and relations to include when retrieving data from Teamcenter. The import mapping sidebar is launched automatically after completion of object mapping. When you are on the import mapping page and the sidebar is closed, you can double-click on a previously configured entity to open the sidebar for that entity.

The sidebar shows all properties, references, and relations for the configured Teamcenter object. Depending on the use case, each one of them is accompanied with checkboxes for reading and writing to configure which of these you want to include when retrieving data from or creating data in Teamcenter.

You will often see that checkboxes are checked by default and/or disabled. In general, the following rules apply. 
1.	Properties that are already available on the Mendix entity or one of its generalizations are checked by default and cannot be unchecked.
2.	Properties, references, and relations for Marketplace entities are disabled by default as it is not good practice to change Mendix marketplace content.

As an example, if a read checkbox is checked and disabled, it means that property already exists as an attribute on the selected object or one of its generalizations. Similarly, if a write checkbox is checked and disabled, it means the property is required during creation or revision of the selected object.

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/82cf072e-710f-4d20-8c18-2fcda5d5ee36)

You can select and deselect the properties, references, and relations depending on the data you need from Teamcenter. When you select a reference or relation, a new placeholder entity will be added to the object mapping tree. You will need to perform the import mapping for these referenced/related objects in a subsequent step (business object mapping and selection of Teamcenter properties, references, and relations).

## 5 Microflows and Domain Model

Once you've finished import mapping, click on Generate button to create microflows for the selected use case and its corresponding domain model. These artifacts can be used in your app logic.

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/6d3a7f29-5727-438b-8e4b-c3aa3ef83d7a)



