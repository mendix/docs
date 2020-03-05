---
title: "Microflow Source"
parent: "data-sources"
tags: ["studio pro", "microflow source", "data source"]
menu_order: 40
---

## 1 Introduction

In most cases, you use the **Database**, **XPath**, or **Association** data sources to fill a [data widget](data-widgets). For example, if the properties of a data grid require an object of an entity selected in the data grid, the data grid gets its objects from a database query. Another example is that a nested template grid can retrieve its objects over an association. However, sometimes the target objects need to adhere to very specific criteria, or different objects are shown under different circumstances that cannot be handled by an [XPath](xpath-constraints). In these situations a **Microflow** data source may be required.

When a data widget with a microflow data source is displayed in the browser or refreshed, it runs the designated microflow and displays the return value. The manner in which the objects are acquired in the microflow is entirely up to you, which allows for unlimited control over what objects to return.

A microflow data source ignores all context. It performs the actions described in the microflow, nothing else. For example, nested data widgets with a microflow data source will not automatically create or invoke associations to the encasing data widget.

{{% alert type="info" %}}
When **Microflow** is selected as the data source, this is regarded as "indirect usage." This means that you cannot also select an **Entity (path)** as you can with the **Database**, **XPath**, or **Association** data source types.
{{% /alert %}}

## 2 Microflow Data Source Example

In this scenario, you have a data grid that needs to display a list of potential orders based on the order type:

{{% image_container width="400" %}}![Microflow Data Source for a Data Grid](attachments/data-widgets/data-grid-microflow-source.jpg)
{{% /image_container %}}

If the **OrderType** of the **Order** entity is set to **Cars**, then the data grid should display all the **Products** for which the Boolean **Motorized** is set to true. If the **OrderType** is **Bicycles**, only objects for which **Motorized** is set to false need be shown. Finally, if **OrderType** is empty, the data grid should remain empty.

![Entities Example](attachments/data-widgets/entities-example.jpg)

Because of the mismatch in attribute types, this cannot be constrained by XPath, so a microflow data source is required. 

The microflow for this scenario should look like this:

![Microflow Example](attachments/data-widgets/microflow-nanoflow-example.jpg)

This microflow does the following:

1. It passes the **Order** of the enclosing data view as a parameter. 
2. It then splits on the **OrderType** attribute and retrieves a different set of products for each enumeration value. 
3. It returns a list of products, and each end event is configured to return a list. Note that the **empty** path also requires a value, wherein **empty** is also a value. 

## 3 Properties

###  3.1 Microflow{#microflow}

This designates the microflow to be used to populate the data widget. This microflow will be run whenever the data widget is loaded into the browser or refreshed. The microflow must have a return value of either an object or a list of objects, depending on the data widget being used.

### 3.2 Microflow Settings

**Microflow settings** opens a dialog box enabling you to specify what parameters will be passed to the microflow.

#### 3.2.1 Microflow

This duplicates the [Microflow](#microflow) specified above.

#### 3.2.2 Microflow Arguments

**Microflow arguments** are automatically configured based on the parameters of the selected microflow and the available arguments. In general arguments are taken from any enclosing data widget. If the data widget enclosing the widget calling a microflow is inside another (nested) data widget, then objects from that data widget and any others in which it is nested can also be passed.

## 4 Read More

* [Data Widgets](data-widgets)
