---
title: "Mapping Documents"
parent: "integration"
---

## 1 Introduction

Mapping documents are used to define how Mendix objects can be converted to and from XML or JSON, according to a specific XML schema or JSON structure. There are two types of mappings: [Import Mappings](import-mappings) and [Export Mappings](export-mappings).

## 2 Import Mappings

Import mappings are used to define how incoming XML or JSON is converted into Mendix objects, according to a specific XML schema or JSON structure. This is needed to be able to interpret data received from other systems. In Mendix there are three basic scenarios for converting Mendix objects to XML or JSON:

*   Receiving XML from a web service (defined in an [imported web service](consumed-web-service)) in a [Call Web Service Action](call-web-service-action) activity.
*   Receiving XML or JSON from a call action [Call Rest Action](call-rest-action).
*   Importing XML or JSON directly in an [Import from Mapping](import-mapping-action) action. 

An example of an import mapping document is depicted in **Figure 1**. More details on import mapping specifics can be found at the [Import Mappings](import-mappings) page.

![](attachments/16713725/16843933.png)

**Figure 1**

## 3 Export Mappings

Export mappings are used to define how Mendix objects can be converted to XML according to a specific XML schema. This is needed to be able to send data to other systems in a format the other system can process. In Mendix there are two basic scenarios for converting Mendix objects to XML:

*   Sending XML to a web service (defined in an [imported web service](consumed-web-service)) in a [Call Web Service Action](call-web-service-action) activity.
*   Exporting XML directly in an [Export with Mapping](export-mapping-action) action. 

An example of an export mapping document is depicted in **Figure 2**. In that example a Cheesecake entity will be passed when the export mapping is called. Subsequently the Topping entities will be fetched by following the "Topping_Cheesecake" association from the passed Cheesecake Mendix object. The result is passed to an XML document, or sent to a webservice. More details on export mapping specifics can be found at the [Export Mappings](export-mappings) page.

![](attachments/16713726/16843940.png)

**Figure 2**

## 4 Creating a New Mapping Document

To specify an import or export mapping, the user needs to do a number of things:

1.  Create a new **Import Mapping** or **Export Mapping** document.

2.  Click **Select elements...** to select an XML schema, imported web service document, or JSON structure document as the source schema for this mapping. See **Figure 1**. 

    If the schema is large, a subset of elements can be selected so you don't have to map all of them. This is explained in more detail in the [Select Elements](select--elements) section.

3.  Click **OK**. A structure is created with placeholders for entities on the left-hand side, and the selected XSD elements on the right-hand side.

    It is possible to include a parameter entity in mapping documents. Mapping documents with a parameter entity need to be invoked (in a [Call Web Service Action](call-web-service-action) or [Export with Mapping](export-mapping-action) action) by passing a parameter of the configured type. Mapping documents without a parameter entity can be invoked without passing a parameter. For import mappings, a parameter entity can be included by dragging one onto the placeholder in the created structure using the Connector tool. Export mappings always need to have a parameter entity (the object that is being exported) and the mapped root element is used for this. In both cases, the parameter entity is depicted as a yellow arrow parameter symbol.

4.  Map the child elements of the schema. Entities can be obtained in four ways:
    
    * From a mapping parameter
    * By associations
    * From a custom microflow
    * By entity specializations in the case of choice or inheritance XML elements

5.  Finally the user needs to configure how entity attributes should be transformed into the XML or JSON structure.

## 5 Convenience Functions

*   Map automatically: Automatically look for entities and associations in the domain model that can be used in the mapping. If a matching entity or association is not found, it is created in the domain model. This function is explained in more detail in the [Map Automatically](map-automatically) section.
*   Clear mappings: Disconnects all mapping elements in the document from entities and associations. They are not deleted in the domain model.

## 6 Tip: Important Windows

Mapping documents rely heavily on two windows. If they are not visible in the Modeler, they can be enabled from the **View menu**.

*   **Properties window**. Details of individual mapping elements are shown here.
*   **Connector window**. Entities from the connector window are dragged into the mapping document.

## 7 User Interactions

*   Dragging entities. Drag an entity from the Connector Window and drop it on an entity placeholder (dashed box) to relate it to an XML element. 
*   Double clicking on a mapping element (on either the entity side or the XML side). Opens a dialog that allows you to specify details for the individual mapping. If the element is not yet related to an entity, a dialog appears that lets you select the entity first.
*   Right mouse click, "Select Entity". Change the entity that is coupled to an XML element.
*   Right mouse click, "Go to Entity". Open the Domain Model that contains the entity and jumps to the entity.
*   Right mouse click, "Collapse All". Hides all the children of the mapping element, so you can keep overview in large mappings.
*   Right mouse click, "Expand All". Expands all children of the mapping element; all underlying elements become visible.
*   Left mouse click on "-" icon (below mapping element). Makes underlying elements invisible.
*   Left mouse, click on "+" icon (below mapping element). Makes underlying elements visible again.

## 8 Properties

| Property | Description |
| --- | --- |
| Name | The name of the mapping. |
| Documentation | Here you can specify extra information to explain what this mapping does. |
| Web Service Operation Properties | This category is only filled in if the mapping is for a web service call and not for an XML Schema. |
| Web Service | The name of the imported web service that this mapping is for. |
| Service name | The actual name of the service, as it is defined in the WSDL of the imported service. |
| Operation name | The name of the specific operation in the service that this mapping is meant for. |
| Request part | Only applicable for Export Mappings. The name of the header or body parameter that this mapping is for. If the mapping is for all body parameters, the value is "Body". |
| XML Schema Properties | This category is only filled in if the mapping is for an XML schema and not for a web service call. |
| XML Schema | The name of the XML Schema that this mapping is for. |
| Start at | Determines which part of the XML structure this mapping defines. |
| Send empty values | Only applicable for export mappings. If a mapping element is optional and nillable, you need to select whether or not to send the empty values. The default is do not send the empty values. |
