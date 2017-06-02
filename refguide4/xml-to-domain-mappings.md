---
title: "XML-to-Domain Mappings"
parent: "integration"
space: "Reference Guide 4"
---
An XML-to-Domain mapping is used to convert data in XML format to objects in your domain model. This is basically done by connecting the objects in the XML to entities in your domain model.

## Behavior properties

### Parameter

When set, this property specifies the type of the parameter that needs to be passed to this mapping. This parameter can be specified in the [Call web service](call-web-service) dialog.

### Use subtransactions for microflows

Specifies whether separate (nested) database transactions should be used when obtaining objects via microflow.

<div class="alert alert-warning">{% markdown %}

Enabling this feature may greatly decrease performance.

{% endmarkdown %}</div>

_Default value:_ False

### Validate against schema

Specifies whether the input XML is validated against the XSD (XML schema or web service operation) while performing the mapping. If a validation error is found, the mapping is aborted.

<div class="alert alert-warning">{% markdown %}

Enabling this feature may greatly decrease performance.

{% endmarkdown %}</div>

_Default value:_ False

## Common Properties

### Name

The internal name of the XML-to-domain mapping.

### Folder

The folder in which the XML-to-domain mapping is located in the project.

### Documentation

The documentation describing this mapping.

## XML element properties

These are visible when a gray box (an XML element) is selected.

### Common

#### Documentation

The documentation describing this element.

### Object Mapping

Reflects the properties that were selected in the [Map element to entity](map-element-to-entity) dialog.

### Schema

### XSD

Displays properties of the xml element.

#### Name

The name of the element

#### Namespace URI

The namespace that the element is in.

#### Path

XML path inside either the SOAP header or SOAP body.

#### Occurrence

How many times this element occurs.
