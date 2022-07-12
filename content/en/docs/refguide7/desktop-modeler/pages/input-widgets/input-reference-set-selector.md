---
title: "Input Reference Set Selector"
url: /refguide7/input-reference-set-selector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


The input reference set selector is an [input widget](/refguide7/input-widgets/) that can be used to display and edit [associations](/refguide7/associations/) for which the multiplicity setting is configured to allow multiple parent objects to associate with multiple children. This type of association is also known as a reference set.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/input-reference-set-selector/16844008.jpg" >}}
The multiplicity settings of an association can be found by double-clicking the association in the [domain model](/refguide7/domain-model/).

{{% /alert %}}{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/input-reference-set-selector/input-reference-set-selector.png" >}}
This input reference set selector allows you to link an employee to organizations.

{{% /alert %}}

When clicked, the input reference set selector will open a select page containing a widget with all possible objects that can be used to fill the association.

## General Properties

### Select Page

The select page determines which page is displayed when the input reference selector is clicked. This page can be used to select associated objects from the list of all possible objects. This page should contain a data grid, template grid or list view connected to the same entity as the input reference set selector.

If an input reference set selector is not editable under any circumstances, no select page is required.

See [Opening Pages](/refguide7/opening-pages/). Note that opening select pages in content is prohibited.

{{% alert color="success" %}}

You can generate a new page to show by right-clicking the widget and selecting 'Generate select page...'.

{{% /alert %}}

## Selectable Objects Properties

### XPath Constraint

With the XPath constraint you can add a manual constraint to limit the list of objects that can be selected.

{{% alert color="info" %}}

The XPath constraint `[InStock = true()]` on a reference selector for products will ensure that only products that are in stock are selectable.

{{% /alert %}}

### Constrained By

An input reference set selector can be constrained by one or more paths. This is typically used to make one reference selector dependent on another. For example, in page where you can edit a user, an organization selector can be constrained by a country selector. After selecting a country, the organization selector is constrained by this country and shows only organizations linked to that country.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/input-reference-set-selector/16844007.jpg" >}}

In the domain model the user has a reference association to country and a reference set association to organization. The third association, from country to organization, describes the relation between those two entities. Such a 'triangle' shaped part of the domain model is what makes constraining possible.

{{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/input-reference-set-selector/16844006.jpg" >}}

The page has displays a reference selector for the reference to country and an input reference set selector for the reference set to organization. The latter is constrained by the path through the domain model that forms the triangle.

{{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/input-reference-set-selector/16844005.jpg" >}}

{{% /alert %}}

## Data Source Properties

{{% snippet file="/static/_includes/refguide7/Attribute+Path+Property.md" %}}

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
