---
title: "Reference Selector"
url: /refguide/reference-selector/
weight: 70
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A **reference selector** is used to display and, optionally, allow the end-user to select the value of a one-to-one or one-to-many [association](/refguide/associations/) by selecting the associated object.

A reference selector must be placed in a [data widget](/refguide/data-widgets/). The object(s) retrieved by this data widget must be at the *many* end of a one-to-many association, or at either end of a one-to-one association.

For example, if you have an employee they will work for one company. A company can have many employees. The entities **Employee** and **Company** have a one-to-many association, **Employee_Company**, which you can select by choosing a Company from the Employee through the reference selector.  

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/reference-selector/reference-selector-domain-model.png" >}}

In the reference selector, the name of the attribute of the associated objects which will be  displayed is shown inside the reference selector, between square brackets, and colored blue.

For example, the following reference allows the end-user to see, and set, the association **Employee_Company** by selecting the **CompanyName** for the current **Employee**.

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/reference-selector/reference-selector.png" >}}

{{% alert color="info" %}}
If you only want to _display_ information, you can also use a [text box](/refguide/text-box/). This has the added advantage that you can choose an attribute from an object which is linked via several association steps.
{{% /alert %}}

## 2 Properties

An example of reference selector properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/reference-selector/reference-selector-properties.png"   width="400"  >}}

Reference selector properties consist of the following sections:

* [Common](#common)
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [Editability](#editability)
* [Events](#events)
* [Formatting](#formatting)
* [General](#general)
* [Label](#label)
* [Selectable Objects](#selectable-objects)
* [Validation](#validation)
* [Visibility](#visibility)

### 2.1 Common Section{#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### 2.2 Data Source Section{#data-source}

{{% snippet file="/static/_includes/refguide/data-source-section-link.md" %}}

The attribute path specifies which attribute of an associated entity is shown in the reference selector. The path must follow one association of type reference starting in the entity of the data view.

### 2.3 Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### 2.4 Editability Section{#editability}

{{% snippet file="/static/_includes/refguide/editability-section-link.md" %}}

### 2.5 Events Section{#events}

The on-change property specifies an action that will be executed when leaving the widget, either by using the <kbd>Tab</kbd> key or by clicking another widget, after the value has been changed.

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

### 2.6 Formatting Section{#formatting}

The formatting section applies only to the way that numeric attributes are displayed. These are attributes of the following data types:

* Decimal
* Integer
* Long

{{% snippet file="/static/_includes/refguide/numeric-formatting-link.md" %}}

### 2.7 General Section{#general}

#### 2.7.1 Select Using{#select-using}

{{% alert color="warning" %}}The **Select using** property is not shown for native mobile pages. Native mobile pages only support the **Drop-down** method of selection{{% /alert %}}

The reference selector allows the end-user to select objects by using either a drop-down menu or a pop-up page. If you choose to to use a page, the drop-down functionality will be replaced with a button to the right of the widget that will open a page selection pop-up window.

| Value | Description |
| --- | --- |
| **Drop-down** *(default)* | Select the reference using a drop-down menu. |
| **Page** | Select the reference using a pop-up page. |

* The advantage of selecting using a [Drop-down](#drop-down) is that it is very efficient – the end-user can make a selection with fewer keystrokes, as all the information is on the same page
* The advantage of selecting using a [Page](#page) is that the end-user can search the objects, and more information about each object can be displayed – if there are a lot of objects to select from (for example, more than 20), it is recommended that selecting is done using a page

{{% alert color="warning" %}}
There is a small difference in functionality between a **Drop-down** reference selector and a **Page** reference selector. When changing a reference selector item that also has a linked list included in a second drop-down menu or page, the **Page** reference selector is NOT cleared as it is with a **Drop-down** reference selector.
{{% /alert %}}

#### 2.7.1.1 Drop-Down {#drop-down}

The drop-down reference selector is similar to a [drop-down](/refguide/drop-down/) for an enumeration, except that it allows users to choose from a list of objects which can be associated with the current object, rather than a list of values from an enumeration.

The reference selector displays an attribute from the objects which can be linked to the current entity via an association. The chosen attribute should be unique for each object which can be associated, otherwise the end-user will have difficulty choosing the correct one. For example, you should display a company _name_ (which will hopefully be unique) rather than the company _region_ (which will probably not be unique to a company).

#### 2.7.1.2 Page {#page}

Select using a page, links a button to the right of the widget with a pop-up page which is used to make the selection. You must choose the page to be displayed using the [Select Page](#select-page) property.

#### 2.7.2 Empty Option Caption

{{% alert color="info" %}}
This is only displayed if [Select using](#select-using) is set to **Drop-down**.
{{% /alert %}}

This property specifies the caption for the empty option in the drop-down reference selector shown to the end-user. This is a [translatable text](/refguide/translatable-texts/).

Filling out the caption for an empty option improves the user experience of your application. It also helps end-users using screen-reader to operate the application easily.

#### 2.7.3 Select Page{#select-page}

{{% alert color="info" %}}
This is only displayed if [Select using](#select-using) is set to **Page**. Consequently, select page is not supported on native mobile pages.
{{% /alert %}}

The select page property determines which page is opened when the select page button is used.

This page can be used to select an associated object from the list of all possible objects. This page should contain a data grid, template grid or list view connected to the same entity as the input reference set selector.

It is recommended that you generate a new page to show by right-clicking the widget and selecting **Generate select page…**. You can then edit the resulting page, if required.

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/reference-selector/generate-select-page.png" alt="Generate a select page by right-clicking the widget" >}}

See the [Show a Page](/refguide/on-click-event/#show-page) section of *On Click Event & Events Section*. Note that select pages must have a [pop-up layout](/refguide/layout/#layout-type).

**Page title**

{{% alert color="info" %}}
**Page title** is only available in the **Properties** dialog box, not in the **Properties** pane.
{{% /alert %}}

You can override the title of the page you open to, for example, indicate where you are opening it from.

This is activated by checking the **Override page title** check box.

#### 2.7.4 Go-To Page

{{% alert color="warning" %}}Go-to page is not supported on native mobile pages.{{% /alert %}}

The go-to page gives end users quick access to a more detailed overview of the currently selected object.

This property determines which page is shown to the user. The page should contain a data view with the data source **Type** set to **Context** and the same **Entity (path)** as the one that is selected by the reference selector.

It is recommended that you generate a new go-to page by right-clicking the widget and selecting **Generate go-to page…**. You can then edit the resulting page, if required.

**Page title**

{{% alert color="info" %}}
**Page title** is only available in the **Properties** dialog box, not in the **Properties** pane.
{{% /alert %}}

You can override the title of the page you open to, for example, indicate where you are opening it from.

This is activated by checking the **Override page title** check box.

### 2.8 Label Section{#label}

{{% snippet file="/static/_includes/refguide/label-section-link.md" %}}

### 2.9 Selectable Objects Section{#selectable-objects}

The properties in the Selectable objects section determine the objects from which the end user can make a selection.

The **Source** property sets which of the three ways to define the selectable objects is used:

* Database *(default)*
* XPath
* Microflow

#### 2.9.1 Database

Database is the default source for the selectable objects. By default, all database objects of the correct entity type will be selectable.

**Constraints**

You can limit the objects presented to the end-user by adding constraints. You will be guided through making constraints in the **Edit Constraints** dialog box:

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/reference-selector/database-constraints.png" alt="Edit constraints dialog box" >}}

See the [constraints](/refguide/database-source/#constraints) section of *Database Source* for more information.

**Sort Order**

The sort order specifies the order in which the items in the reference selector are shown. You can sort on multiple attributes in both directions (ascending and descending). If **(default)** sort order is specified, the reference selector sorts on the displayed attribute.

#### 2.9.2 XPath{#xpath-constraints}

If the source is XPath, the list of objects is also taken from the database, but the objects which are displayed are chosen by an XPath Constraint.

**XPath Constraint**

The XPath constraint limits the list of objects that can be selected.

For example, the XPath constraint `[InStock = true()]` on a reference selector for products will ensure that only products that are in stock are selectable.

See [XPath Constraints](/refguide/xpath-constraints/) for more information on XPath constraints.

**Constrained By**

A reference selector can be constrained by one or more paths. This is typically used to make one reference selector dependent on another. The best way to explain this is through an example.

Imagine you have an ordering system where the products are sorted into categories – for example, food products and drink products. On a page where you can edit an order line, a product selector can be constrained by a category selector. After selecting a category (*food*, for example), the product selector is constrained by this category and shows only products in the category.

_Example Domain model_
{{< figure src="/attachments/refguide/modeling/pages/input-widgets/reference-selector/orderline-domain-model.png" >}}

In the domain model the order line has many-to-one associations to both category and product. These associations can be be edited using reference selectors. A third association, from product to category, describes the relation between those two entities – that is, that every product has an associated category.

{{% alert color="info" %}}
Such a triangle-shaped part of the domain model is what makes using **constrained by** possible.
{{% /alert %}}

On the form, you have two reference selectors: one for **Category** and one for **Product**.

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/reference-selector/orderline-reference-selectors.png" >}}

Without a constraint, the reference set selector will offer all the products:

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/reference-selector/orderline-no-constraint.png" alt="List of all products, food and drink" >}}

However, because of the structure of the domain model, you can add a constraint which means that only the products of the previously selected category will be chosen. This is set by the **Constrained by** property.

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/reference-selector/orderline-constrained-by.png" >}}

Now the end-user will only see products in the selected category:

{{< figure src="/attachments/refguide/modeling/pages/input-widgets/reference-selector/orderline-with-constraint.png" alt="List of just products in the drink category" >}}

**Sort Order**

The sort order specifies the order in which the items in the reference selector are shown. You can sort on multiple attributes in both directions (ascending and descending). If **(default)** sort order is specified, the reference selector sorts on the displayed attribute.

#### 2.9.3 Microflow

{{% alert color="warning" %}}
A microflow can only be used if the selection is made using a drop-down.
{{% /alert %}}

If the source microflow is selected, a microflow is called, and returns the list of objects that the reference selector will show.

**Microflow**

Microflow specifies the microflow which is run to return the list of objects.

**Microflow Settings**

In microflow settings you can specify what parameters are passed to the microflow, depending on the parameters specified in the microflow itself.

### 2.10 Validation Section{#validation}

{{% snippet file="/static/_includes/refguide/widget-validation-link.md" %}}

### 2.11 Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

## 3 Read More

*   [Data view](/refguide/data-view/)
*   [Entities](/refguide/entities/)
*   [Associations](/refguide/associations/)
