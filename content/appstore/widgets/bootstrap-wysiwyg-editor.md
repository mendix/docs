---
title: "Bootstrap WYSIWYG Editor (RTE)"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Bootstrap WYSIWYG Editor](https://appstore.home.mendix.com/link/app/902/) is a Bootstrap-based rich-text editor widget for Mendix. It is a more simplistic and more style-friendly version of the simple rich text editor. It provides basic text styling functionality such as bold,  italic, and underline.

The widget is based on the [jQuery Bootstrap WYSIWYG plugin](http://mindmup.github.io/bootstrap-wysiwyg/). The only configuration needed is the referenced text attribute.

### 1.1 Features

* The `div` accepts all the shortcuts that are used in text editing programs such as MS Word

### 1.2 Limitations

* Not all the editor buttons are available.

### 1.3 Dependencies

* jQuery (added to the package)
* [Bootstrap WYSIWYG Editor plugin](https://mdbootstrap.com/plugins/jquery/wysiwyg/) (added to the package)

## 2 Configuration

Place the widget inside a data view.

## 3 Properties

### 3.1 Data Source Tab

* **Data attribute** – the attribute to which the content should be saved
