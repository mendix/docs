---
title: "Label Selector"
category: "Widgets"
description: "Describes the configuration and usage of the Label Selector widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "label selector", "platform support"]
draft: true
---

## 1 Introduction

The [Label Selector](https://appstore.home.mendix.com/link/app/292/) widget enables easily creating objects, assigning objects to other objects, and removing objects (for example, labels) from other objects.

It features both an input box for searching and creating objects and a drop-down menu for selecting objects that already exist . The implementation is based on the [Tag-it library](https://aehlke.github.io/tag-it/).

You configure background colors for labels and how the text contrasts with a label background via the `text-normal` or `text-contrast` class.

### 1.1 Typical Usage Scenario

* Quickly adjust reference sets
* Easily create new objects to add

## 2 Properties

* **Label Object** – the entity used for the labels combined with the reference set from the context object
* **Caption Attribute** – the attribute of the label entity to be used as the caption
* **Color Attribute** – the attribute of the label color (optional)
* **Label constraint** – the constraint for the labels
* **After create label** – the microflow to be triggered after a new label is created and committed; this microflow receives the data view object
* **On change microflow** – the microflow to be triggered for every add and remove
