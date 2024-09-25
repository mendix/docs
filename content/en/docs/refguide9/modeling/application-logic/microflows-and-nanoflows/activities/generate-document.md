---
title: "Generate Document"
url: /refguide9/generate-document/
weight: 80
description: "Describes generating documents from a microflow. "
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

{{% alert color="info" %}}
For information about generating PDF documents, see the [PDF Document Generation](/appstore/modules/document-generation/) module.
{{% /alert %}}

## Introduction

The **Generate document** activity is used to write a document to a file, based on a [document template](/refguide9/document-templates/). 

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/generate-document/generate-document.png" alt="Generate Document" class="no-border" >}}

For more information on which types of documents can be created, see [Document Type](#document-type).

## Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/generate-document/generate-document-properties.png" alt="Generate Document Properties" class="no-border" >}}

The **Generate document** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### File

The name of the file document that will contain the generated document. It should be an object of entity *System.FileDocument* or its specialization.

### Language

The language in which the titles and labels of the document should appear is described in the table below:

| Option | Description |
| --- | --- |
| Current user *(default)*  | Use the language of the current user. |
| Project default | Use the default language that is specified in the [App Settings](/refguide9/app-settings/). |
| Variable | Use the language stored in the selected object, which must be of type *System.Language*. |

### Document Type{#document-type}

The document type specifies the type of the generated document.

| Option | Description |
| --- | --- |
| HTML | Generate a document in HTML format. |
| PDF | Generate a document in PDF format. |
| Word 2007 | Generate a document in Word 2007 format. |
| Word 2003 | Generate a document in Word 2003 format. |
| Rich-text format | Generate a document in Rich-text format. |
| ODT | Generate a document in Open Office (ODT) format. |

### Override Margins

**Override margins** allows you to set custom margins for your documents. By using variables, these can be defined at runtime.

### Template

Template defines which [document template](/refguide9/document-templates/) is used to generate the file. Depending on the selected document template one or more [arguments](#argument) need to be specified. 

### Arguments

Depending on the selected document, you will see a list of its arguments in a table. Arguments pass data to the activity. 

#### Widget

The name of the widget in the document template that needs arguments to be passed to it. This property is read-only.

#### Type

The type of the argument used in the document template that is read-only.

#### Argument {#argument}

The **Edit argument** button allows you to edit the argument value.  An argument is the input data that you are passing to the document template. For each document template parameter (for each non-nested data view and data grid), you must supply an argument of the same type. The values of the arguments are expressed using [expressions](/refguide9/expressions/).

## Common Section {#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}
