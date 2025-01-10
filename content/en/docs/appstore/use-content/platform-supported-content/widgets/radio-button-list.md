---
title: "Radio Button List"
url: /appstore/widgets/radio-button-list/
description: "Describes the configuration and usage of the Radio Button List widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Radio Button List](https://marketplace.mendix.com/link/component/20/) widget enables rendering an attribute or association as a radio button list. The widget is used with enumeration values, Boolean values, and references, and it is a useful replacement for the default drop-down menu or reference selector widget.

### Typical Use Cases

Visualize all the possible options in your user interface, instead of just forcing your end-user to open a drop-down menu to view all available options.

### Features

* Display the list in a horizontal or vertical direction
* Specify the text of labels for a Boolean attribute
* Attach a microflow for the on-change event

### Limitations

* **On change** has no effect on the form. The workaround is to add a microflow to the on-change property of the widget. This microflow must contain a change activity. The change activity must have **Refresh in client** enabled.

## Installation

Download the widget into your app and add either **Association Radio Button List** or **Attribute Radio Button List** to a data view on a page. Configure the properties described below to determine how the widget will behave in your application.

## Properties

### General Properties

#### Display Tab

* **Direction** – determines if the radio button list will render horizontally or vertically

#### Events Tab

* **On change** – this is the microflow that will be invoked for an on-change event

### Attribute Radio Button List Properties {#attribute-radio-button-list}

#### Data Source Tab

* **Target attribute** – an attribute of the enumeration or Boolean type, the values of which will be rendered as the radio button list

#### Display Tab

* **True label (Boolean attribute)** – the label that will be shown if your **Target attribute** is of the Boolean type and the attribute value is **True**
* **False label (Boolean attribute)** – the label that will be shown if your **Target attribute** is of the Boolean type and the attribute value is **False**

### Association Radio Button List Properties {#association-radio-button-list}

#### Data Source Tab

* **Data source type** – the method used for retrieving objects – **XPath** or **Microflow**
* **Entity to list** – the entity containing the attribute that should be rendered as the radio button list
* **Sort order** – determines if the values of the sort attribute will be sorted in **Ascending** or **Descending** order
* **Label attribute** – (string) the attribute whose contents will be used as the label
* **Association** – the association to be set to the selected option

#### Data Source (Microflow) Tab

* **Data source microflow** – the microflow returning a list of objects

#### Data Source (XPath) Tab

* **XPath constraint** – the constraint applied to the list of objects to be retrieved

## Example

An example for a radio button list is based on an association: There are two entities defined, **CompanyDepartment** and **Employee**. The application requires the option to refer an employee to a department. In this case, Employee is the owner of an association between the two entities (**Employee_CompanyDepartment**).

The configuration of the widget's required properties would be the following:

* **Entity to list**: CompanyDepartment
* **Label**: Name (string attribute of CompanyDepartment)
* **Association**: Employee_CompanyDepartment/CompanyDepartment
