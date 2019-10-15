---
title: "CKEditor"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [CKEditor](https://appstore.home.mendix.com/link/app/1715/) gives you a full version of the CKEditor with an extra button that allows you to create microflow links inside your HTML output:

![](attachments/ckeditor/microflow-button.png)

### 1.1 Typical Usage Scenario

Use this widget to add a full WYSIWYG editor for your entity attributes. You can also add links to HTML that, when clicked, run microflows.

## 2 Description

The CKEditor widget comes with the CKEditor viewer. This viewer will enable the posibility to reformat links to microflow links.

    The viewer needs an entity and attribute where it can get the HTML code.
    You can style the link as a button or just text.
    Within the CKEditor widget configure labels that can be placed with the mendix link button.
    These labels can be configured in the viewer to execute a microflow.
    The microflow will get the entity from the viewer widget.

Example of the entire editor

test
Example of the end result in mendix.

test
Example of someone clicking the button.