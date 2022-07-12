---
title: "Generate Document"
url: /refguide/generate-document/
weight: 80
description: "Describes generating documents from a microflow. "
tags: ["PDF", "document", "document template", "HTML", "Microsoft Word", "ODT", "studio pro", "generate document"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Generate document** activity is used to write a document to a file, based on a [document template](/refguide/document-templates/). 

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/generate-document/generate-document.png" alt="Generate Document" >}}

For more information on which types of documents can be created, see [Document Type](#document-type).

## 2 Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/generate-document/generate-document-properties.png" alt="Generate Document Properties" >}}

The **Generate document** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 File

The name of the file document that will contain the generated document. It should be an object of entity *System.FileDocument* or its specialization.

### 3.2 Language

The language in which the titles and labels of the document should appear is described in the table below:

| Option | Description |
| --- | --- |
| Current user *(default)*  | Use the language of the current user. |
| Project default | Use the default language that is specified in the [App Settings](/refguide/app-settings/). |
| Variable | Use the language stored in the selected object, which must be of type *System.Language*. |

### 3.3 Document Type{#document-type}

The document type specifies the type of the generated document.

| Option | Description |
| --- | --- |
| HTML | Generate a document in HTML format. |
| PDF | Generate a document in PDF format. |
| Word 2007 | Generate a document in Word 2007 format. |
| Word 2003 | Generate a document in Word 2003 format. |
| Rich-text format | Generate a document in Rich-text format. |
| ODT | Generate a document in Open Office (ODT) format. |

### 3.4 Override Margins

**Override margins** allows you to set custom margins for your documents. By using variables, these can be defined at runtime.

### 3.5 Template

Template defines which [document template](/refguide/document-templates/) is used to generate the file. Depending on the selected document template one or more [arguments](#argument) need to be specified. 

### 3.6 Arguments

Depending on the selected document, you will see a list of its arguments in a table. Arguments pass data to the activity. 

#### 3.5.1 Widget

The name of the widget in the document template that needs arguments to be passed to it. This property  is read-only.

#### 3.5.2 Type

The type of the argument used in the document template that is read-only.

#### 3.5.3 Argument {#argument}

The **Edit argument** button allows you to edit the argument value.  An argument is the input data that you are passing to the document template. For each document template parameter (for each non-nested data view and data grid), you must supply an argument of the same type. The values of the arguments are expressed using [expressions](/refguide/expressions/).

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}