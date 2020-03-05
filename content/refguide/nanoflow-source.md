---
title: "Nanoflow Source"
parent: "data-sources"
tags: ["studio pro", "nanoflow source", "data source"]
menu_order: 50
---

## 1 Introduction

The **Nanoflow** data source is available for [data views](data-view) and [list views](list-view). 

In most cases, you use the *database*, *association* or *XPath* data sources to fill a [data widget](data-widgets). However, sometimes the target objects need to adhere to very specific criteria, or different objects are shown under different circumstances that cannot be handled by an [XPath](xpath-constraints). In these situations a *nanoflow data source* may be required. For more information on nanoflows and their advantages, see [Nanoflows](nanoflows).

When a data widget with a nanoflow data source is displayed in the browser or refreshed, it runs the designated nanoflow and displays the return value. The manner in which the objects are acquired in the nanoflow is entirely up to you, which allows for unlimited control over what objects to return.

A nanoflow data source ignores all context. It performs actions described in the nanoflow, nothing else. For example, nested data widgets with a nanoflow data source will not automatically create or invoke associations to the encasing data widget.

## 2 Nanoflow Data Source Example

For example, you have a list that needs to display a list of potential orders based on the order type:

![Nanoflow Source](attachments/data-widgets/nanoflow-source.png)
If the *OrderType* of the *Order* entity is set to *Cars*, then the data grid should display all *Products* for which the Boolean *Motorized* is set to true. If the *OrderType* is *Bicycles* only objects for which *Motorized* is set to false need be shown. If *OrderType* is empty the data grid should remain empty.

![Entities Example](attachments/data-widgets/entities-example.jpg)
Because of the mismatch in attribute types this cannot be constrained by XPath and a nanoflow data source is required. 

The nanoflow for the use-case should look like this:

![Nanoflow Example](attachments/data-widgets/microflow-nanoflow-example.jpg)
This nanoflow does the following:

1. It passes the *Order* of the enclosing data view as a parameter. 

2. It then splits on the *OrderType* attribute and retrieves a different set of products for each enumeration value. 

3. The nanoflow returns a list of products and each end event is configured to return a list. 

    {{% alert type="info" %}}The *empty* path also requires a value, where `empty` is also a value.
    {{% /alert %}}

## 3 Properties

###  3.1 Nanoflow

Defines the nanoflow used to populate the widget. This nanoflow will be run whenever the widget is loaded into the browser or refreshed. The nanoflow must have a return value of either an object or a list of objects, depending on the widget being used.

## 4 Read More

* [Nanoflows](nanoflows)
* [Data Widgets](data-widgets)