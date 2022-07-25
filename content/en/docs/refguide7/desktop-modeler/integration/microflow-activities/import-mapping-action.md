---
title: "Import Mapping Action"
url: /refguide7/import-mapping-action/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}


## 1 Introduction

With the Import Mapping action, you can import the data stored in an XML or JSON document into [domain model](/refguide7/domain-model/) entities.

{{< figure src="/attachments/refguide7/desktop-modeler/integration/microflow-activities/import-mapping-action/import-mapping-action.png" >}}

## 2 Input

### 2.1 Variable

The input variable can either be a string, a file document, an [HttpRequest](/refguide7/http-request-and-response-entities/#http-request), or an [HttpRequest](/refguide7/http-request-and-response-entities/#http-response). The content of the file document, HttpRequest, or HttpResponse should be XML or JSON.

{{% alert color="info" %}}
Support for HttpRequest was added in version 7.11.0. Earlier versions needed a string variable that contained the HttpRequest content.
{{% /alert %}}

{{% alert color="info" %}}
Support for HttpResponse was added in version 7.22.0. Earlier versions needed a string variable that contained the HttpResponse content.
{{% /alert %}}

## 3 Import Mapping

### 3.1 Mapping

The [import mapping](/refguide7/import-mappings/) defines how to transform the XML or JSON into objects.

### 3.2 Input Content Type

{{% alert color="info" %}}

This feature was introduced in version 7.10.0.

{{% /alert %}}

If the import mapping is based on a [message definition](/refguide7/message-definition/), it can import both XML and JSON. Select whether the input variable contains XML or JSON.

### 3.3 The Input Contains

{{% alert color="info" %}}

This feature was introduced in version 7.10.0.

{{% /alert %}}

If the import mapping is based on a [message definition](/refguide7/message-definition/), it can import both single objects and lists. Select whether the input variable contains a single object or a list of objects.

### 3.4 If No Object Was Found

{{% alert color="info" %}}

This feature was introduced in version 7.17.0.

{{% /alert %}}

You can indicate what should happen **if no object was found** when the import mapping has checked the box **decide this at the place where the mapping gets used**.
 
### 3.5 Parameter

If the selected mapping requires a parameter, you can choose it here.

### 3.6 Range (If the Mapping Returns a List)

The range determines how many objects are mapped and returned.

| Range | Meaning |
| --- | --- |
| All | Map and return all objects. |
| First | Map and return only the first object. The result of the action will be a single object instead of a list. |
| Custom | Map and return a given number of objects (limit). The limit is a microflow expression that should result in a number. |

### 3.7 Commit {#commit}

Indicates whether the resulting objects should be committed to the database, and whether event handlers should be triggered.

| Option | Description |
| --- | --- |
| Yes | The objects are saved in the database and the [event handlers](/refguide7/event-handlers/) are triggered. |
| Yes without events | The objects are saved in the database, but the [event handlers](/refguide7/event-handlers/) are not triggered (default). |
| No | The objects are created without being saved in the database. You will need a [commit action](/refguide7/committing-objects/) to save them. |

## 4 Validation

{{% alert color="info" %}}

Validation properties are only applicable if an import mapping is selected that maps from XML based on an [XML schema](/refguide7/xml-schemas/) or a [consumed web service](/refguide7/consumed-web-service/).

{{% /alert %}}

### 4.1 Validate Against Schema

Determines whether the import action should validate the incoming XML against the [XML schema](/refguide7/xml-schemas/).

Setting this to _yes_ can greatly decrease performance!

*Default value:* No

## 5 Output

### 5.1 Store in Variable

Choose whether to store the result of the import in a variable.

### 5.2 Type

The type of the output variable.

### 5.3 Name

The name for the variable that will hold the result of the import.
