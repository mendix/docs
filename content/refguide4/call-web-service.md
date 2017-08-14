---
title: "Call Web Service"
parent: "integration-activities"
---
The call-web-service activity can be used to call one of the [imported web service](imported-web-services) operations. You can specify whether or not to use authentication, what the request should look like and how the response of the web service should be handled.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Web Service Operation Properties

### Operation

Operation defines which operation of the web service is called.

## HTTP Properties

### Override location

Override location defines whether to override the location where the web service is called.

When calling a web service using a call-web-service activity, the location of the web service is determined as follows.

1.  If the location is overridden in the call-web-service activity, the location specified in that action is used.
2.  If the service that defines the operation has a location constant defined, the value of that constant is used.
3.  Otherwise, the location as specified in the WSDL of the imported web service is used.

### Location

If you override the location, this property defines the location where to call the web service. The location needs to be entered using [microflow expressions](microflow-expressions). The microflow expression should result in a valid URL string.

### Use HTTP authentication

Use HTTP authentication defines whether the Mendix Business Server should use HTTP authentication before the web service is called.

### User name

User name defines the user name that will be used to authenticate over HTTP. The user name needs to be entered using [microflow expressions](microflow-expressions). The microflow expression should result in a string.

### Password

Password defines the password that will be used to authenticate over HTTP. The password needs to be entered using [microflow expressions](microflow-expressions). The microflow expression should result in a string.

### Custom HTTP Headers

These custom headers are added to the HTTP request header. Each custom header is a pair of a key and a value (a microflow expression).

## Request Header/Body Properties

The XML for the request parts (header and body) can be generated in several ways that are described in the following sections.

### Mapping

Using the 'Mapping' option, a single [domain-to-XML mapping](domain-to-xml-mappings) can be used to generate the XML for the request part. You can choose the domain-to-XML mapping to use for the request part and, if applicable, the object or list that you want to use as parameter for the mapping.

### Simple

The 'Simple' option for request parts can be used when all children of the XML element of the request part occur at most once and are primitive values. If that is not the case, this options is disabled and cannot be used.

Using this option you need to supply an argument value for all elements of a primitive type (parameters). Argument values need to be entered using [microflow expressions](microflow-expressions) resulting in the same data type as the parameter.

### Custom

The 'Custom' option allows you to generate the XML for the request part using a template. The template defines the XML structure of the request part in plain text. Parameters can be used by writing a number between braces, e.g. {1}. For each parameter in the template you can specify its value using a [microflow expression](microflow-expressions) resulting in a String value.

For the request header, the Modeler provides some common XML structures in the drop down menu.

### Advanced

The 'Advanced' option can be used when all children of the XML element of the request part occur at most once. You need to supply an argument value for all top-level elements of the request (parameters). For simple parameters you can enter a microflow expression, for complex parameters you define a mapping.

We recommend using the 'Mapping' option instead of 'Advanced' because it is more powerful; it can handle the 'choice' construct at top-level.

## Response Properties

### Result type

The result type tells you the type of the data that is returned by the web service operation. If the data type is a complex XML structure it can be mapped to entities using a [XML-to-domain mapping](xml-to-domain-mappings). If it is primitive data, it can be stored in a variable immediately. The response does not have to be used though; it can also be ignored if you are not interested in it.

### Mapping (for complex XML structures)

Here you can choose the [XML-to-domain mapping](xml-to-domain-mappings) that will be used to transform the XML into objects.

### Parameter

If the selected mapping requires a parameter, you can choose it here.

### Range (if the mapping returns a list)

The range determines how many objects are mapped and returned.

| Range | Meaning |
| --- | --- |
| All | Map and return all objects. |
| First | Map and return only the first object. The result of the action will be a single object instead of a list. |
| Custom | Map and return a given number of objects (limit). The limit is a microflow expression that should result in a number. |

## Output Properties

### Store in variable

Choose whether to store the result of the operation in a variable.

### Name

The name for the variable that will hold the result of the operation.
