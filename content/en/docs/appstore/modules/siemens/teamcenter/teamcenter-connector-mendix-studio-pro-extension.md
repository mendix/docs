---
title: "Teamcenter Connector Mendix Studio Pro Extension"
#url: Set the relative URL of the document; after the name of the main directory/product the document is in, use the document title; example for document titled my-new-page.md, in refguide directory: /refguide/my-new-page/
#linktitle: Enter a short title to be used in the left side menu; increases readability and navigation through the menu
#weight: Enter the position of the document compared to other 'child' documents at the same level; number by 10 (for first), 20, 30, etc. for easy ordering of other documents in the future if necessary; don't add brackets or quotation marks
#description: "Describes the Teamcenter Connector Mendix Studio Pro Extension from the Mendix Marketplace. The extension facilitates a low-code approach to integrating with Teamcenter"
#tags: [Add a maximum of 5-7 tags/keywords; keep them focused on the most important topics of the document, and make sure the tag is used as a word in the actual content (will will function best for SEO as a word in a heading); each tag should have quotation marks and be separated by a comma, for example: "Samba", "MxCloud", "cloud", "share"; the tags should be enclosed with brackets and quotation marks]
#draft: true
---

## 1 Introduction

The Teamcenter Connector Mendix Studio Pro Extension or Teamcenter Connector Extension for short is built using the Mendix Extensibility Framework to provide you with an effortless means to harness the full capabilities of Teamcenter Connector for Mendix.

The Teamcenter Connector is a powerful tool that allows you to access, create and modify product data in Teamcenter. The Teamcenter Extension is layered atop it, providing a low-code experience to enhance the user friendliness and streamline the utilization of the connector.

### 1.1 Supported use-cases

In version 1.0.0, the extension will allow you to build Mendix artifacts for the following common use cases:
1.	Retrieve Item Revisions from Teamcenter
2.	Retrieve workspace objects from Teamcenter
3.	Create Item and Item Revisions in Teamcenter
4.	Update Item and Item Revisions in Teamcenter
5.	Revise Item Revision in Teamcenter
6.	Get BOM structures from Teamcenter

More details and typical user journeys for each use case is provided in the [[Action]] section below.

### 1.2 Pre-requisites

The Teamcenter Connector Extension requires Mendix version 10.6.5 or higher. You also need to make sure you have the following installed from the Mendix Marketplace
1. [TcConnector](
https://marketplace.mendix.com/link/component/111627)
2. [CommunityCommons](https://marketplace.mendix.com/link/component/170)

### 1.3 License

[[todo]]

## 2 Import mapping

Every [[action]] ends with import mapping. Here you can define what data you want to retrieve from Teamcenter and how to handle this data in Mendix. Depending on the [[action]], the import mapping page starts with one or multiple entities/objects to configure, one per business object that need to be configured. 

[[Screenshot of empty object mapping page]]

During configuration, the import mapping page will build up a preview of the Mendix domain model involved in the integration. In addition, the import mapping page shows the corresponding business objects on the Teamcenter side. For this, the Teamcenter Connector Extension displays the display names of the objects and their properties, references and relations.

[[Screenshot of completed object mapping page]]

In the Teamcenter extension, the import mapping consists of two steps:
1. Object mapping: As Teamcenter works with many layers of specializations of its business objects, in the import mapping page, you need to configure which object type you want to retrieve from Teamcenter and what Mendix objects need to be created, when retrieving these business objects. This is called Object mapping.
2.	Selection of properties, references and relations: Configuration which properties, references and relations you want to retrieve from Teamcenter and include in your Mendix model .

Configuring the business objects starts with clicking on an empty box. This will open the object mapping dialog.

### 2.1 Object mapping

The object mapping dialog shows, on the left side, a tree of all relevant business objects available in the configured Teamcenter instance. The right side shows a tree of all relevant entities in your Mendix app.

Relevance is dependent on the [[action]] you are configuring. For example, for the [[action]] to get ItemRevisions from Teamcenter, the Teamcenter tree has an ItemRevision as its root object. That means that, for this action, you can only select ItemRevisions or specializations thereof. Similarly, in this example, the Mendix tree has the TcConnector.ItemRevision entity as its root entity.

[[Screenshot of object mapping for ItemRevision]]

When retrieving a tree of objects, relevance can also be based on the type of relation/reference. When working with typed relations/references, the type of Teamcenter business object is dictated by the relation/reference.

By limiting the list of Teamcenter objects and Mendix entities to those that are relevant, the Teamcenter extension guides you to select Teamcenter business objects that make sense in the context of the [[action]] you want to perform.

To configure which type of Teamcenter business object you are interested in and what type of Mendix entities this should be mapped to, you select a business object in the Teamcenter tree on the left and an entity on the Mendix tree on the right and click OK. 

It is also possible to create new entities for your integrations. This new entity needs to be a specialization of the root entity in the Mendix tree or one of its specializations. When you want to use a new entity, click your generalization of choice, click the Create new specialization of selected entity checkbox and provide an entity name. Now, once finishing the configuration for the [[action]], the Teamcenter extension will create a new entity with the given name and the selected entity as its generalization.

[[Screenshot of object mapping with new specialization]]

Once you click OK, you return to the import mapping tab with a sidebar opened to configure which Teamcenter properties, references, and relations to include when retrieving data for this business object.

### 2.2.	Selection of Teamcenter properties, references, and relations

In the import mapping sidebar, you can configure which Teamcenter properties, references, and relations to include when retrieving data from Teamcenter. The import mapping sidebar is launched automatically after completion of the object mapping. When you are on the import mapping page and the sidebar is closed, you can double-click on a previously configured entity to open the object mapping sidebar for that entity.

The import mapping sidebar shows all properties, references, and relations for the configured Teamcenter object. Depending on the use case, each one of them is accompanied with checkboxes to configure which of these you want to include when retrieving data from or creating data in Teamcenter.

You will often see that checkboxes are checked by default and/or disabled. In general, the following rules apply. 
1.	Properties that are already available on the Mendix entity or one of its generalizations are checked by default and cannot be unchecked.
2.	Properties, references, and relations for Marketplace entities are disabled by default as it is not good practice to change Mendix marketplace content.

For specific [[actions]] there may be additional rules. These are explained in the separate sections on those [[actions]].

You can select and deselect the properties, references, and relations depending on the data you need from Teamcenter. When you select a reference or relation, a new placeholder entity will be added to the object mapping tree. You will need to perform the import mapping for these referenced/related objects in a subsequent step (business object mapping and selection of Teamcenter properties, references, and relations).



## 3.	[[Actions]]

### 3.1.	Get ItemRevision

[[note: let's discuss the level of detail we want to provide!]]

The Get ItemRevision [[action]] allows you to configure and generate a microflow and domain model to search for and retrieve ItemRevisions from Teamcenter based on Item name, id and/or type. The action implements the Saved Query “Item Revision...” from Teamcenter.

To configure the Get ItemRevision action:
*	Start the Teamcenter extension
*	Click on the Get ItemRevision tile
*	Configure the import mapping (see above)
*	Click on Generate

The Get ItemRevision [[action]]:
*	Creates/change the entities configured during the import mapping
*	Creates a microflow to get ItemRevisions based on Item name, id and/or type
* *	Input parameters:
* * *	ItemName (String) query parameter 
* * *	ItemId (String) query parameter 
* * *	ItemRevisionType (String) query parameter 
* * *	ConfigName (string) name of the Teamcenter configuration
* *	Returns:
* * *	List of (a specialization of) TcConnector.ItemRevision
* *	Throws errors:
* * *	IllegalArgumentException when one or more of the input parameters are invalid
* * *	TeamcenterServiceException when the call to Teamcenter failed
* * *	NoServiceDataException when the response from Teamcenter contains no data
* * *	PartialErrorsExceptoin when the response from Teamcenter contains partial errors
* * *	[[Cast errors?]]




## 2 {Title of the User Interface Element Being Described}

{Describe the UI elements (for example, pages, widgets). Describe all the properties and features for each UI element.}

{{< figure src="/attachments/rest-of-image-path/image-name-and-extension" >}}

### 2.1 {Title of Sub-Section}

{Use sub-sections for more detail.}

## 3 {Example Usage Scenarios}

{Describe some example usage scenarios that can be referenced when using these features.}

## 4 Read More

* {Link 1}
* {Link2} – {an explanation when necessary especially if this is a third-party link}

{Make sure this section contains a bulleted list only with explanations where necessary. Do not just repeat cross-references you used throughout the document, but list useful supplementary links here.}
