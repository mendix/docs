---
title: "Image"
url: /appstore/widgets/combobox/
category: "Widgets"
description: "Describes the configuration and usage of the Image widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "combobox", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Combobox](https://marketplace.mendix.com/link/component/xxx) widget displays a list of options that users can select from.

### 1.1 Features

* Supports different data sources:
    * Association
    * Enumeration
    * Boolean
* Supports custom content rendering
* Supports options filtering for quick selection

## 2 Configuration

The following sections will describe the different available widget properties and how to configure the widget using them.  

### 2.1 General Tab {#general}

#### 2.1.1 Data Source Section

The **Data source** section (required) is used to configure the data for the widget. It has the following properties:

* **Association** – 
  
* **Enumeration** - 
* **Boolean** – 

#### 2.1.2 General Section

The **General** sections allows you to configure general behaviour and captions for the combobox. The following configurations are available:

* **Placeholder text** – captions that will be displayed when there is no data being selected
* **Filter type** – Allows the user to type into the input and filter displayable options on the combobox
* **No options text** - captions that will be used when filter results is empty, or there is no data displayed in the combobox's options
* **Clearable** - if turned on, then the selected data can be cleared
* **Custom content** - allows custom widgets to be displayed in the combobox instead of normal text value (only for association data source).


#### 2.1.3 Multi selection (reference set)

The **Multi selection (reference set)** sections allows you to configure combobox behavior for reference set type datasource. The following configurations are available:
* **Selection Method** - configure the behavior for selecting options
        * **Checkbox** – display checkbox on the left side of each options. Selected items will be marked by check mark.
        * **Row click** – Each of selected items will be filtered out from the displayed options. Deselect item can be done by clicking on "x" button on each of the displayed selected items.
* **Show selected item as** - You can choose to display selected item as labels with "x" button to unselect the items, or a simple comma separated text. Only available for Checkbox selection method.  

#### 2.1.4 Label
The **Label** sections allows you to displayed labels for the combobox.

### 2.1.5 Conditional visibility {#visibility-tab}

For more information, see [Visibility Section](/refguide/common-widget-properties/#visibility-properties) in *Properties Common in the Page Editor*.

### 2.1.6 Editability Tab {#editability-tab}

For more information, see [Editability Section](/refguide/common-widget-properties/#editability) in *Properties Common in the Page Editor*.

### 2.2 Events Tab {#events-tab}

**On change** – executes an action when the attribute value changes


### 2.3 Accessibility Tab {#accessibility-tab}

The **Accessibility** tab allows you to configure settings for combobox accessibility features.

### 2.4 Common Tab

For more information, see [Common Section](/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.