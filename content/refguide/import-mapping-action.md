---
title: "Import Mapping Action"
parent: "microflow-activities"
---

## 1 Introduction

With the Import Mapping action, you can import the data stored in an XML or JSON document into [domain model](domain-model) entities.

![](attachments/import-mapping-action/import-mapping-action.png)

## 2 Input

### 2.1 Variable

The input variable can either be a string, a file document or an [HttpRequest](http-request-and-response-entities#http-request). The content of the file document or HttpRequest should be XML or JSON.

{{% alert type="info" %}}

Support for HttpRequest was added in version 7.11.0. In earlier versions needed a string variable that contains the HttpRequest content.

{{% /alert %}}

## 3 Import mapping

### 3.1 Mapping

The [import mapping](import-mappings) defines how to transform the XML or JSON to objects.

### 3.2 Input content type

{{% alert type="info" %}}

This feature was introduced in version 7.10.0.

{{% /alert %}}

If the import mapping is based on a [message definition](message-definition), it can import both XML and JSON. Select whether the input variable contains XML or JSON.

### 3.3 The input contains

{{% alert type="info" %}}

This feature was introduced in version 7.10.0.

{{% /alert %}}

If the import mapping is based on a [message definition](message-definition), it can import both single objects and lists. Select whether the input variable contains a single object or a list of objects.

### 3.4 Parameter

If the selected mapping requires a parameter, you can choose it here.

### 3.5 Range (if the mapping returns a list)

The range determines how many objects are mapped and returned.

| Range | Meaning |
| --- | --- |
| All | Map and return all objects. |
| First | Map and return only the first object. The result of the action will be a single object instead of a list. |
| Custom | Map and return a given number of objects (limit). The limit is a microflow expression that should result in a number. |

## 4 Validation

{{% alert type="info" %}}

Validation properties are only applicable if an import mapping is selected that maps from XML based on an [XML Schema](xml-schemas) or a [consumed web service](consumed-web-service).

{{% /alert %}}

### 4.1 Validate Against Schema

Determines whether the import action should validate the incoming XML against the [XML Schema](xml-schemas).

Setting this to _yes_ can greatly decrease performance!

*Default value:* No

## 5 Output

### 5.1 Store in variable

Choose whether to store the result of the import in a variable.

### 5.2 Type

The type of the output variable.

### 5.3 Name

The name for the variable that will hold the result of the import.
