---
title: "Teamcenter Extension"
#url: Set the relative URL of the document; after the name of the main directory/product the document is in, use the document title; example for document titled my-new-page.md, in refguide directory: /refguide/my-new-page/
#linktitle: Enter a short title to be used in the left side menu; increases readability and navigation through the menu
#weight: Enter the position of the document compared to other 'child' documents at the same level; number by 10 (for first), 20, 30, etc. for easy ordering of other documents in the future if necessary; don't add brackets or quotation marks
#description: "Describes the Teamcenter Connector Mendix Studio Pro Extension from the Mendix Marketplace. The extension facilitates a low-code approach to integrating with Teamcenter"
#tags: [Add a maximum of 5-7 tags/keywords; keep them focused on the most important topics of the document, and make sure the tag is used as a word in the actual content (will will function best for SEO as a word in a heading); each tag should have quotation marks and be separated by a comma, for example: "Samba", "MxCloud", "cloud", "share"; the tags should be enclosed with brackets and quotation marks]
#draft: true
---

## 1 Introduction {#introduction}

The [Teamcenter Extension] is a Mendix Module built using the Mendix Extensibility Framework to provide you with an effortless means to harness the full capabilities of [Teamcenter Connector] (https://marketplace.mendix.com/link/component/111627) for Mendix. The Teamcenter Connector is a powerful tool that allows you to access, create and modify product data in Teamcenter. The Teamcenter Extension is layered atop it, providing a low-code experience to enhance the user friendliness and streamline the utilization of the connector.

### 1.1 Use Cases {#usecases}

In version 1.0.0, the extension will allow you to build Mendix artifacts for the following common use cases:
1.	Retrieve Item Revisions from Teamcenter
2.	Retrieve workspace objects from Teamcenter
3.	Create Item and Item Revisions in Teamcenter
4.	Update Item and Item Revisions in Teamcenter
5.	Revise Item Revision in Teamcenter
6.	Get BOM structures from Teamcenter

More details and typical user journeys for each use case is provided in the [Actions](#actions) section below.

### 1.2 Pre-requisites {#prerequisities}

The Teamcenter Extension requires Mendix version 10.6.5 or higher. You also need to ensure the following modules installed from the Mendix Marketplace
1. [Teamcenter Connector](
https://marketplace.mendix.com/link/component/111627)
2. [Community Commons](https://marketplace.mendix.com/link/component/170)
3. Ensure you have the feature flag enabled - Right click on the Mendix Desktop icon shortcut and select Properties. In the "Target" box, add the keyword "--enable-extension-development" at the end.

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/6a2ea4d4-bc34-476f-b2c6-4c9e2f471abb)

### 1.3 License {#license}

Like with Teamcenter Connector, the Teamcenter Extension is free to download and use. You may, however require a Mendix Studio Pro License to develop apps in Mendix and Teamcenter Author license to connect to Teamcenter.

## 2 Start Teamcenter Extension {#start-teamcenter-extension}
Open the Teamcenter Extension by clicking on menu option View -> Teamcenter inside Mendix Studio Pro. This will open the landing page. You will see two tabs: Menu and Settings. 

The Menu tab displays use cases or actions you can create artifacts for, using the extension. The Settings tab allows you to provide details of your Teamcenter instance to connect to, while using the extension.

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/054f8938-44a7-43c0-a1ce-76e54cf2a813)

## 3 Teamcenter Configuration {#teamcenter-configuration}
The Settings tab displays Teamcenter configuration page. This is where you can provide your Teamcenter Instance details to connect to while building your app. Click on Edit to open a panel to enter details. Please note the certificate path should be relative to the App Directory

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/67dc5e98-9596-4a2c-8699-1a3a71b61d19)

## 4 Import mapping {#importmapping}

Clicking on any one of the [Actions](#actions) opens an empty import mapping page. Here you can define what data you want to retrieve from Teamcenter and how to handle this data in Mendix. Depending on the action, the import mapping page starts with one or multiple entities/objects to configure, one per business object that need to be configured. 

During configuration, the import mapping page will build up a preview of the Mendix domain model involved in the integration. In addition, the import mapping page shows the corresponding business objects on the Teamcenter side. For this, the Teamcenter Extension displays the display names of the objects and their properties, references and relations.

In the Teamcenter extension, the import mapping consists of two steps:
1. Object mapping: As Teamcenter works with many layers of specializations of its business objects, in the import mapping page, you need to configure which object type you want to retrieve from Teamcenter and what Mendix objects need to be created, when retrieving these business objects. This is called Object mapping.
2.	Selection of properties, references and relations: Configuration which properties, references and relations you want to retrieve from Teamcenter and include in your Mendix model .

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/3f1d9b37-d898-4d4e-ad9f-aee86274876a)

### 3.1 Object mapping {#objectmapping}

Clicking on any one of the empty box in import mapping page opens the object mapping dialog shows. On the left side of the dialog, a tree of all relevant business objects available from the configured Teamcenter instance is displayed. The right side shows a tree of all relevant entities in your Mendix app.

Relevance is dependent on the actions you are configuring. For example, for the action to get ItemRevisions from Teamcenter, the Teamcenter tree has an ItemRevision as its root object. That means that, for this action, you can only select ItemRevisions or specializations thereof. Similarly, in this example, the Mendix tree has the TcConnector.ItemRevision entity as its root entity.

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/ea1e86ce-0a19-4c9c-8592-eddbe9b78d24)

When retrieving a tree of objects, relevance can also be based on the type of relation/reference. When working with typed relations/references, the type of Teamcenter business object is dictated by the relation/reference.

By limiting the list of Teamcenter objects and Mendix entities to those that are relevant, the Teamcenter extension guides you to select Teamcenter business objects that make sense in the context of the action you want to perform.

To configure which type of Teamcenter business object you are interested in and what type of Mendix entities this should be mapped to, you select a business object in the Teamcenter tree on the left and an entity on the Mendix tree on the right and click OK. 

It is also possible to create new entities for your integrations. This new entity needs to be a specialization of the root entity in the Mendix tree or one of its specializations. When you want to use a new entity, click your generalization of choice, click the Create new specialization of selected entity checkbox and provide an entity name. Now, once finishing the configuration for the actions, the Teamcenter extension will create a new entity with the given name and the selected entity as its generalization.

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/e3783a0c-fbd8-474e-ba67-b1d6723f3927)

Once you click OK, you will return to the import mapping tab with a sidebar opened to configure which Teamcenter properties, references, and relations to include when retrieving data for this business object.

### 3.2.	Teamcenter properties, references, and relations {#tcprop}

In the import mapping sidebar, you can configure which Teamcenter properties, references, and relations to include when retrieving data from Teamcenter. The import mapping sidebar is launched automatically after completion of the object mapping. When you are on the import mapping page and the sidebar is closed, you can double-click on a previously configured entity to open the object mapping sidebar for that entity.

The import mapping sidebar shows all properties, references, and relations for the configured Teamcenter object. Depending on the use case, each one of them is accompanied with checkboxes for reading and writing to configure which of these you want to include when retrieving data from or creating data in Teamcenter.

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/9b1eb260-774b-4603-a18b-2b4faa6fb4f9)

You will often see that checkboxes are checked by default and/or disabled. In general, the following rules apply. 
1.	Properties that are already available on the Mendix entity or one of its generalizations are checked by default and cannot be unchecked.
2.	Properties, references, and relations for Marketplace entities are disabled by default as it is not good practice to change Mendix marketplace content.

As an example, if a read checkbox is checked and disabled, it means that the property already exists as an attribute on the selected object or one of its generalizations. Similarly, if a write checkbox is checked and disabled, it means the property is required during creation of the selected object.

![image](https://github.com/mwbouwkamp-mendix/mendix-docs/assets/157635704/e151b84b-9e5e-4cfd-8554-f7045d556223)

You can select and deselect the properties, references, and relations depending on the data you need from Teamcenter. When you select a reference or relation, a new placeholder entity will be added to the object mapping tree. You will need to perform the import mapping for these referenced/related objects in a subsequent step (business object mapping and selection of Teamcenter properties, references, and relations).

Once you've finished your import mapping, clicking on Generate will create the microflows and corresponding domain models. These microflows can then be used in your app logic

## 4.	Actions {#actions}

### 4.1.	Get Item Revisions from Teamcenter {#getitemrevision}

The Get ItemRevision action allows you to generate a microflow to search for and retrieve ItemRevisions or specialization thereof from Teamcenter, and the corresponding domain model. The resulting microflow implements the Saved Query “Item Revision...” from Teamcenter.

### 4.2 Get Workspace Objects {#getworkspaceobjects}
The Get Workspace Objects action allows you to configure and generate a microflow to search for and retrieve Workspace Objects from Teamcenter, and the corresponding domain model. This action implements the Saved Query "General.." from Teamenter

### 4.3 Create Item and Item Revision {#createitem-and-itemrevision}
The Create Item and Item Revision action allows you to configure to generate a microflow to create an Item with ItemRevision or specializations thereof in Teamcenter, and the corresponding domain model. The resulting microflow implements the Create Object and Update Properties actions from the TcConnector. With the Create Object action, the Item and ItemRevision get created in Teamcenter, setting the Teamcenter properties that need to be set upon creation; with the Update Properties action, the remaining properties are updated in Teamcenter.

### 4.4 Update Item and Item Revision {#updateitem-and-itemrevision}
The Update Item and Item Revision action allows you to generate a microflow to update an Item with ItemRevision or specializations thereof in Teamcenter and the corresponding domain model. The resulting microflow implements the Update Properties action from the TcConnector. 

### 4.5 Revise Item Revision {#reviseitem-and-itemrevision}
The Revise Item and Item Revision action allows you to generate a microflow to revise an ItemRevision or specializations thereof in Teamcenter and the corresponding domain model. The resulting microflow implements the Revise Object and Update Properties actions from the TcConnector. With the Revise Object action, a new ItemRevision is created, setting the Teamcenter properties that need to be set upon revising; with the Update Properties action, the remaining properties are updated in Teamcenter.

### 4.6 Create BOM Window {#create-bom-window}
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
