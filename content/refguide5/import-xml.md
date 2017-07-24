---
title: "Import XML"
parent: "integration-activities"
---


With the import-XML action you can import the data stored in a XML document into [domain model](domain-model) entities.

## Input Properties

### XML document

The XML document that will be imported. This should be an object of entity 'System.FileDocument' or a specialization thereof.

## Action Properties

### XML-to-domain mapping

The [XML-to-domain mapping](xml-to-domain-mappings) defines how to transform the XML document to objects.

### Parameter

If the selected mapping requires a parameter, you can choose it here.

### Range (if the mapping returns a list)

The range determines how many objects are mapped and returned.

<table><thead><tr><th class="confluenceTh">Range</th><th class="confluenceTh">Meaning</th></tr></thead><tbody><tr><td class="confluenceTd">All</td><td class="confluenceTd">Map and return all objects.</td></tr><tr><td class="confluenceTd">First</td><td class="confluenceTd">Map and return only the first object. The result of the action will be a single object instead of a list.</td></tr><tr><td class="confluenceTd">Custom</td><td class="confluenceTd">Map and return a given number of objects (limit). The limit is a microflow expression that should result in a number.</td></tr></tbody></table>

## Validation properties

### Validate against schema

Whether the import action should validate the incoming XML against the schema (XSD).

Setting this setting to yes can greatly decrease performance!

_Default value:_ No

## Output Properties

### Store in variable

Choose whether to store the result of the import in a variable.

### Name

The name for the variable that will hold the result of the import.
