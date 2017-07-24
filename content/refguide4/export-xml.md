---
title: "Export XML"
parent: "integration-activities"
space: "Reference Guide 4"
---
With the export-XML action you can export the data stored in [domain model](domain-model) entities into an XML document.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Action Properties

### Domain-to-XML mapping

The [domain-to-XML mapping](domain-to-xml-mappings) defines in which way the data in the [domain model](domain-model) corresponds with the XML document.

### Argument

If the [domain-to-XML mapping](domain-to-xml-mappings) requires an object as input, you can select a variable of the correct type.

## Output Properties

There are two methods of storing the result of an Export XML action:

*   Inside a 'System.FileDocument'.
*   Inside a string variable.
