---
title: "Domain-to-XML Mappings"
parent: "integration"
---


Domain to XML mappings are used to convert a domain entity to XML, so that it can be sent to other systems. They are used in two different scenarios:

*   An [imported web service](consumed-web-service) uses them to map domain entities to complex XML structures for the request.

*   An [export XML activity](export-xml) needs a domain to XML mapping so that it knows how to map the objects to XML.

The screen is divided in two; on the left side are the domain entities that are mapped to the XML elements. On the right side are gray boxes corresponding to XML elements.

The top level domain entity is considered the parameter to the domain-to-XML mapping and needs to be specified wherever the mapping is called (such as a [call web service](call-web-service) microflow activity). Thus, the "Obtain the object(s) by" section is disabled for the top level element.

All other domain entities that are mapped to elements need their "Obtain the object(s) by" specified, except for those that are a direct child of a choice element. For those elements, the object is the same as that of the parent choice element.

See [Map entity to element](map-entity-to-element) for details on mapping an entity to an XML element.

## Behavior

### Parameter

The entity that specifies the type of object or list that needs to be passed to the domain-to-XML mapping. This is the same entity that is placed opposite the root element of the domain-to-XML mapping.

## Common

### Name

The name of the mapping.

### Folder

The folder in the module where this mapping is located.

### Documentation

Extra information on what this mapping does.

## Web Service Operation

(only filled in if the mapping is for a web service call and not for an XML Schema)

### Web service

The name of the imported web service that this mapping is for.

### Service name

The actual name of the service, as it is defined in the WSDL of the imported service.

### Operation name

The name of the specific operation in the service that this mapping is meant for.

### Parameter name

The name of the parameter that this mapping is for.

### Is header parameter

Boolean that displays whether this is a parameter that occurs in the header of the SOAP request.

## XML Schema

This is only necessary if the mapping is for an XML schema and not for a web service call.

### XML Schema

Name of the XML Schema that this mapping is for.

### Start at

Determines which part of the XML structure this mapping defines.
