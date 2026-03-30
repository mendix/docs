---
title: "Export With Mapping"
url: /refguide9/export-mapping-action/
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## Introduction

The **Export with mapping** activity allows you to export the data stored in [domain model](/refguide9/domain-model/) entities into an XML document, JSON document, or string variable.

## Properties

An example of export with mapping properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/integration-activities/export-mapping-action/properties.png" alt="export with mapping properties" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The export with mapping properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### Export Mapping

The [Export Mapping](/refguide9/export-mappings/) action defines in which way the data in the [domain model](/refguide9/domain-model/) corresponds with the XML schema or JSON structure.

### Parameter Type

If the [export mapping](/refguide9/export-mappings/) requires an input, this field shows the type of the input.

### Parameter

If the [export mapping](/refguide9/export-mappings/) requires an input, you can select a parameter of the correct type.

### Content Type

If the [export mapping](/refguide9/export-mappings/) is based on a message definition, it can export both XML and JSON. Choose which type of output you want.

### Validate Against Schema

{{% alert color="info" %}}
Validation against schema is only applicable if an export mapping is selected that maps to XML.
{{% /alert %}}

This determines whether the export action should validate the outgoing XML against the schema (XSD).

Setting this to yes can impact performance!

Default: *No*

### Optional and Nillable

Elements in a schema can be optional (`minOccurs=0`) and/or nillable. When an empty value for an element is encountered, the server will check the schema to decide whether to exclude the element (optional) or send the element with a nil attribute (nillable). In case an empty value is encountered but the element is not optional or nillable, the server will throw an exception, which you need to handle yourself in the microflow. This will occur regardless of the XML validation settings. It is recommended to make sure the data that is being exported is valid according to the schema.

### Store In

You can choose whether to store the result of an Export Mapping activity in an object which is a 'System.FileDocument' or a specialization of that entity or in a string variable.

### Name

The name of the object or string which is the result of the activity.

## Common Section{#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}
