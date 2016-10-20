---
title: "Generate Document"
parent: "Integration+Activities"
space: "Reference Guide 5"
---


The generate-document action can be used to create a document based on a [template](Document+Templates).

<div class="alert alert-info">{% markdown %}

![](attachments/819203/918200.png)
Generate document

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](Microflow+Element+Common+Properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Input Properties

### File document

The file document that will contain the generated document. It should be an object of entity System.FileDocument or a specialization thereof.

## Action Properties

### Language

The language in which the titles and labels of the document should appear.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Current user</td><td class="confluenceTd">Use the language of the current user.</td></tr><tr><td class="confluenceTd">Project default</td><td class="confluenceTd">Use the default language that is specified in the <a href="Project+Settings">Project Settings</a>.</td></tr><tr><td class="confluenceTd">Variable</td><td class="confluenceTd">Use the language stored in the selected variable. The variable should be of type System.Language.</td></tr></tbody></table>

_Default value:_ Current user

### Document type

The document type specifies the type of the generated document.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">HTML</td><td class="confluenceTd">Generate a document in HTML format.</td></tr><tr><td class="confluenceTd">PDF</td><td class="confluenceTd">Generate a document in PDF format.</td></tr><tr><td class="confluenceTd">Word 2007</td><td class="confluenceTd">Generate a document in Word 2007 format.</td></tr><tr><td class="confluenceTd">Word 2003</td><td class="confluenceTd">Generate a document in Word 2003 format.</td></tr><tr><td class="confluenceTd">Rich-text format</td><td class="confluenceTd">Generate a document in Rich-text format.</td></tr><tr><td class="confluenceTd">ODT</td><td class="confluenceTd">Generate a document in Open Office (ODT) format.</td></tr></tbody></table>

### Template

Template defines which [document template](Document+Templates) is used to generate the file. Depending on the template being used one or more arguments need to be specified. For each top-level data grid and data view objects of the correct type need to be passed to the template. The value of the argument can be entered using microflow expressions.

### Override margins

Here you can set custom margins for your documents that can be defined at runtime.
