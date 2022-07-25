---
title: "Reference Selector"
url: /refguide7/reference-selector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

The reference selector is an [input widget](/refguide7/input-widgets/) that can be used to display and edit [associations](/refguide7/associations/).

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/reference-selector/reference-selector.png" >}}
This reference selector allows you to select a product for your orderline.
{{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/reference-selector/reference-selector-domain-model.png" >}}
To use a reference selector you need a many-to-one association in the domain model.

{{% /alert %}}

The reference selector is similar to a [Report Parameter](/refguide7/report-parameter/) except that it allows users to choose from a list of objects with which to fill an association rather than items listed in an enumeration. The selector requires you to choose an entity with which the parent object shares a reference. It will also require you to choose which attribute from that referenced entity you wish to display in the selector.

{{% alert color="success" %}}

If you only want to _display_ information, you can also use the text box. This has the added advantage that you can follow more than one association step.

{{% /alert %}}

## General Properties

### Select Using

The reference selector allows the end user to select objects by using either a drop-down or a pop-up page. If you choose to select using a page, the drop-down functionality will be replaced with a button to the right of the widget that will open a selection pop-up.

| Value | Description |
| --- | --- |
| Page | Select the reference using a pop-up page. |
| Drop-down | Select the reference using a drop-down. |

{{% alert color="success" %}}

The advantage of a selecting using a drop-down is that it is very efficient; no page needs to be opened. The advantage of selecting using a page is that the end user can search the objects. If there are a lot of objects (say, more than 20) to select from, selecting using a page is advisable.

{{% /alert %}}

_Default value:_ Drop-down

### Empty Option Caption

This property represents the caption for the empty option in the drop-down reference selector shown to the user. Setting the caption is not available if the Select Using property set to the Page option. This is a translatable text. For more details, see [Translatable Texts](/refguide7/translatable-texts/).

{{% alert color="info" %}}

Filling out the caption for an empty option increases the user experience of your application. It also helps screen-reader users to operate the application easily.

{{% /alert %}}

{{% alert color="info" %}}

The empty option caption is available from Mendix 7.2.0.

{{% /alert %}}

### Select Page

The select page property determines which page is opened when the select page button is used. This page can be used to select associated objects from the list of all possible objects. This page should contain a data grid, template grid or list view connected to the same entity as the input reference set selector.

See [Opening Pages](/refguide7/opening-pages/). Note that opening select pages in content is prohibited.

{{% alert color="success" %}}

You can generate a new page to show by right-clicking the widget and selecting 'Generate select page...'.

{{% /alert %}}

### Go-To Page

The go-to page gives end users quick access to a more detailed overview of the object being selected. This property determines which page is shown to the user. The page should contain a data view with the same entity as the one that is selected by the reference selector.

### Go-To Page Settings

These settings specify how the page is opened.

See [Opening Pages](/refguide7/opening-pages/) for more details.

## Validation Properties

{{% snippet file="/static/_includes/refguide7/Widget+Validation.md" %}}

## Formatting Properties

{{% snippet file="/static/_includes/refguide7/Numeric+Formatting+Properties.md" %}}

### Date Format (Only for Attributes of Type Date and Time)

The date format determines whether the reference selector displays the date, time, date and time, or a custom variation of the linked attribute. How the date and/or time are formatted depend on the localization of the user viewing the data.

_Default value:_ Date

### Selectable Objects Properties

The properties in the category 'Selectable objects' determine the objects out of which the end user can make a selection. There are two, mutually exclusive, ways of influencing the selectable objects:

1.  A microflow returns the list of selectable objects.
2.  The list of objects is determined automatically taking into account the context mechanism and the properties that influence that mechanism.

### Microflow

If a microflow is selected, the microflow will be called to compute the list of objects that the reference selector will show. A microflow can only be used if the selection is made using a drop-down.

{{% alert color="warning" %}}

Note that the other properties in this category have no effect when using a microflow!

{{% /alert %}}

### Microflow Settings

In the microflow settings you can specify what parameters to pass to the microflow.

### XPath Constraint

With the XPath constraint you can add a manual constraint to limit the list of objects that can be selected.

{{% alert color="info" %}}

The XPath constraint `[InStock = true()]` on a reference selector for products will ensure that only products that are in stock are selectable.

{{% /alert %}}

This property has no effect if a microflow is used to fill the reference selector.

### Constrained By

A reference selector can be constrained by one or more paths. This is typically used to make one reference selector dependent on another. For example, in page where you can edit an order line, a product selector can be constrained by a category selector. After selecting a category, the product selector is constrained by this category and shows only products in the category.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/reference-selector/917938.png" >}}
_Domain model_

In the domain model the order line has associations of type reference to both category and product. In this form, these can be edited with two reference selectors. The third association, from product to category, describes the relation between those two entities. Such a 'triangle' shaped part of the domain model is what makes constraining possible.

{{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/reference-selector/16844014.jpg" >}}
_Form_

The page has two reference selectors, one for category and one for product. The one for product is constrained by the path through the domain model that forms the triangle.

{{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/reference-selector/16844013.jpg" >}}

{{% /alert %}}

This property has no effect if a microflow is used to fill the reference selector.

### Sort Order

The sort order specifies the order in which the items in the reference selector are shown. You can sort on multiple attributes in both directions (ascending and descending). If no sort order is specified, the reference selector sorts on the displayed attribute.

_Default value:_ No sort order

## Data Source Properties

### Attribute Path

The attribute path specifies which attribute of an associated entity is shown in the reference selector. The path must follow one association of type reference starting in the entity of the data view.

{{% alert color="warning" %}}

Order_Customer/Customer/Name will allow the end user to select a user from a list of user names.

{{% /alert %}}{{% alert color="warning" %}}

Keep in mind that even though you connect an attribute to the reference selector you are actually selecting an object. The attribute is just there to provide a visualization of the object. In this respect, the reference selector is different from other widgets like check boxes and text boxes. In those widgets you edit the value of the attribute. In the reference selector you edit an association of type reference.

{{% /alert %}}

{{% snippet file="/static/_includes/refguide7/Label+Property.md" %}}

## Editability Properties

{{% snippet file="/static/_includes/refguide7/Editable+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Read+Only+Style.md" %}}

{{% snippet file="/static/_includes/refguide7/Condition+Property.md" %}}

## Visibility Properties

{{% snippet file="/static/_includes/refguide7/Visibility+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Visibility+Property+With+Module+Roles+Simple.md" %}}

## Events Properties

{{% snippet file="/static/_includes/refguide7/On+Change+Event.md" %}}

## Common Properties

{{% snippet file="/static/_includes/refguide7/Name+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Tab+index+Property.md" %}}

## Read More

*   [Data view](/refguide7/data-view/)
*   [Entities](/refguide7/entities/)
*   [Associations](/refguide7/associations/)
