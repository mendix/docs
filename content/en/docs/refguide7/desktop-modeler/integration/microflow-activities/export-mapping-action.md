---
title: "Export Mapping Action"
url: /refguide7/export-mapping-action/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}


## 1 Introduction

{{< figure src="/attachments/refguide7/desktop-modeler/integration/microflow-activities/export-mapping-action/19399019.png" >}}

With the Export Mapping action, you can export the data stored in [domain model](/refguide7/domain-model/) entities into an XML document, JSON document, or string variable.

{{% alert color="info" %}}

For details on the properties that all activities share (for example, caption), see [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Export Mapping

The [Export Mapping](/refguide7/export-mappings/) action defines in which way the data in the [domain model](/refguide7/domain-model/) corresponds with the XML schema or JSON structure.

{{% alert color="info" %}}
 
Export mappings support flat JSON. You can select a JSON structure document in an export mapping, and you can select JSON elements that are at most one level deep. That means that you can export simple JSON objects like `{"Name":"John", "Age":46}`.
 
{{% /alert %}}

### 2.2 Parameter Type

If the [export mapping](/refguide7/export-mappings/) requires an input, this field shows the type of the input.

### 2.3 Parameter

If the [export mapping](/refguide7/export-mappings/) requires an input, you can select a variable of the correct type.

### 2.4 Content Type

{{% alert color="info" %}}

This feature was introduced in version 7.10.0.

{{% /alert %}}

If the [export mapping](/refguide7/export-mappings/) is based on a message definition, it can export both XML and JSON. Choose which type of output you want.

## 3 Validation Properties

{{% alert color="info" %}}

Validation properties are only applicable if an export mapping is selected that maps to XML.

{{% /alert %}}

### 3.1 Validate Against Schema

This determines whether the export action should validate the outgoing XML against the schema (XSD).

Setting this to yes can greatly decrease performance!

*Default value:* No

### 3.2 Optional and Nillable

Elements in a schema can be optional (`minOccurs=0`) and/or nillable. When an empty value for an element is encountered, the server will check the schema to decide whether to exclude the element (optional) or send the element with a nil attribute (nillable). In case an empty value is encountered but the element is not optional or nillable, the server will throw an exception, which you need to handle yourself in the microflow. This will occur regardless of the XML validation settings. It is recommended to make sure the data that is being exported is valid according to the schema.

## 4 Output Properties

There are two methods of storing the result of an Export Mapping action:

* Inside a 'System.FileDocument'
* Inside a string variable
