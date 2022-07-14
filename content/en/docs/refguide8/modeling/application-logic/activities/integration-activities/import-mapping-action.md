---
title: "Import with Mapping"
url: /refguide8/import-mapping-action/
tags: ["studio pro", "import xml", "import with mapping", "import mapping", "integration activity"]
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/import-mapping-action.pdf).
{{% /alert %}}

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Import with mapping** activity allows you to import the data stored in an XML or JSON document into [domain model](/refguide8/domain-model/) entities.

## 2 Properties

An example of import with mapping properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/integration-activities/import-mapping-action/import-with-mapping-properties.png" alt="import with mapping properties" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The import with mapping properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/integration-activities/import-mapping-action/import-mapping-action.png" >}}

### 3.1 Variable

The input variable can be the name of a string variable, a file document, an [HttpRequest](/refguide8/http-request-and-response-entities/#http-request), or an [HttpRequest](/refguide8/http-request-and-response-entities/#http-response). The content of the file document, HttpRequest, or HttpResponse should be XML or JSON.

### 3.2 Mapping

The [import mapping](/refguide8/import-mappings/) defines how to transform the XML or JSON into objects.

### 3.3 Input Content Type

If the import mapping is based on a [message definitions](/refguide8/message-definitions/), it can import both XML and JSON. Select whether the input object contains XML or JSON.

### 3.4 The Input Contains

If the import mapping is based on a [message definitions](/refguide8/message-definitions/), it can import both single objects and lists. Select whether the input is a single object or a list of objects.

### 3.5 If No Object Was Found

You can indicate what should happen **if no object was found** when the import mapping has checked the box **decide this at the place where the mapping gets used**.

### 3.6 Parameter

If the selected mapping requires a parameter, you can choose it here.

### 3.7 Range

 If the mapping returns a list, you can select a range to determine how many objects are mapped and returned.

| Range | Meaning |
| --- | --- |
| All | Map and return all objects. |
| First | Map and return only the first object. The result of the action will be a single object instead of a list. |
| Custom | Map and return a given number of objects (limit). The limit is a microflow expression that should result in a number. |

### 3.8 Commit {#commit}

Indicates whether the resulting objects should be committed to the database, and whether event handlers should be triggered.

| Option | Description |
| --- | --- |
| Yes | The objects are saved in the database and the [event handlers](/refguide8/event-handlers/) are triggered. |
| Yes without events | The objects are saved in the database, but the [event handlers](/refguide8/event-handlers/) are not triggered (default). |
| No | The objects are created without being saved in the database. You will need a [commit action](/refguide8/committing-objects/) to save them. |

### 3.9 Validate Against Schema

{{% alert color="info" %}}

Validation properties are only applicable if an import mapping is selected that maps from XML based on an [XML schema](/refguide8/xml-schemas/) or a [consumed web service](/refguide8/consumed-web-service/).

{{% /alert %}}

Determines whether the import action should validate the incoming XML against the [XML schema](/refguide8/xml-schemas/).

Setting this to _yes_ can impact performance!

Default: *No*

### 3.10 Store in Variable

Choose whether to store the result of the import.

### 3.11 Type

The type of the result.

### 3.12 Name

The name of the result of the import.

## 4 Common Section{#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}
