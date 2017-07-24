---
title: "Map entity to element"
parent: "domain-to-xml-mappings"
---


## Object Mapping

The type of domain entity that is mapped to the XML element. Specified in the [domain-to-XML mappings](domain-to-xml-mappings) screen.

Defining an object for a mapping is optional when the mapped element does not contain any attributes. When no object is defined for the optional mapping, the creation of the element will be skipped if it does not have any child element and the minimum required occurrence of the element is 0 (as specified by the XML Schema or WSDL). In the case the minimum occurrence is greater than 0 but it is nillable, the element will still be created with the nil attribute set to true.

## Obtain the object(s) by

Determines where the object comes from.

These properties are not applicable for:

*   The root element, because its objects are passed to the mapping as a parameter.
*   An element that is a child of a choice element, because its object is the same as the choice element's.

### Retrieving associated object(s)

Retrieve by association to an entity higher up in the hierarchy.

### Calling a microflow

Retrieve an object via Microflow. If the Microflow requires parameters, only domain entities are supported. These can by any entity higher up in the hierarchy.. Primitive types (String, Integer etc) can't be mapped at this time.

### If no object(s) were found

What to do if no objects were found via 'Retrieve associated object(s)' or  'Call a microflow'

#### Error

Throw an error and abort the XML mapping. The Microflow that called this mapping should handle the error.

#### Ignore (only if minimum occurrence is 0)

If the minimum required occurrence of the element is 0 (as specified by the XML Schema or WSDL) the creation of the element will be skipped. Mapping will continue for the rest of the elements.

## Attribute to value element mapping

For each XML value element that the complex XML element encompasses, an attribute needs to be mapped from the entity.

These properties are not applicable for choice elements, because they do not contain value elements.

### From attribute

The attribute in the domain entity that should be mapped to the element.

### To value element

The XML element that will be filled.

### Occurrence

Displays how often the element may occur. This can be "0..1" or "1", depending on if it is required or not. If the value is empty and the minimum required occurrence of the element is 0 (as specified by the XML Schema or WSDL) the creation of the element will be skipped. In the case you want to never map a value to an optional element, simply disable it in the "Select elements..." dialog in the [Domain-to-XML mapping](domain-to-xml-mappings) screen.

### Convert using (optional)

A Microflow to convert the value before insertion into the XML.
