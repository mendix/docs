---
title: "Generate Document"
url: /refguide7/generate-document/
description: "Describes generating documents from a microflow. "
tags: ["PDF", "document", "document template", "HTML", "Microsoft Word", "ODT"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

The generate-document microflow action can be used to create a document based on a [template](/refguide7/document-templates/).

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/document-generation-activities/generate-document/918200.png" >}}
Generate document

{{% /alert %}}{{% alert color="info" %}}

See [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/) for properties that all activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Input Properties

### 2.1 File Document

The file document that will contain the generated document. It should be an object of entity System.FileDocument or a specialization thereof.

## 3 Action Properties

### 3.1 Language

The language in which the titles and labels of the document should appear.

| Option | Description |
| --- | --- |
| Current user | Use the language of the current user. |
| Project default | Use the default language that is specified in the [Project Settings](/refguide7/project-settings/). |
| Variable | Use the language stored in the selected variable. The variable should be of type System.Language. |

_Default value:_ Current user

### 3.2 Document Type

The document type specifies the type of the generated document.

| Option | Description |
| --- | --- |
| HTML | Generate a document in HTML format. |
| PDF | Generate a document in PDF format. |
| Word 2007 | Generate a document in Word 2007 format. |
| Word 2003 | Generate a document in Word 2003 format. |
| Rich-text format | Generate a document in Rich-text format. |
| ODT | Generate a document in Open Office (ODT) format. |

### 3.3 Template

Template defines which [document template](/refguide7/document-templates/) is used to generate the file. Depending on the template being used one or more arguments need to be specified. For each top-level data grid and data view objects of the correct type need to be passed to the template. The value of the argument can be entered using expressions.

### 3.4 Override Margins

Here you can set custom margins for your documents that can be defined at runtime.
