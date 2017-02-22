---
title: "Microflow Source"
space: "Mendix 7 Reference Guide"
parent: "data-sources"
---


In most cases, the intended object or objects used to fill a [data widget](data-widgets) is obvious: an edit form opened from a data grid is going to require an object selected in the data grid, a data grid gets its objects from a database query, and a nested template grid will retrieve its objects over an association. However, sometimes the target objects need to adhere to very specific criteria, or different objects are shown under different circumstances that cannot be handled by [XPath](xpath-constraints). In these situations a microflow data source may be required.

When a data widget with a microflow data source is displayed in the browser or refreshed, it runs the designated microflow and displays the return value. The manner in which the objects are acquired in the microflow is entirely up to the designer. This allows for unlimited control over the exact objects returned.

<div class="alert alert-warning">{% markdown %}

A microflow data source ignores all context. It performs the actions described in the microflow, nothing else. For example: nested data widgets with a microflow data source will not automatically create or invoke associations to the encasing data view.

{% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

![](attachments/16713836/16843969.jpg)
The data grid above needs to display a list of potential orders based on the order type. If the OrderType of the encasing Order is set to 'Cars' then the grid should display all Products for which the boolean Motorized is set to true. If the OrderType is 'Bicycles' only objects for which Motorized is false need be shown. If OrderType is empty the data grid should remain empty.

![](attachments/16713836/16843968.jpg)
Because of the mismatch in attribute types this cannot be constrained by XPath and a microflow data source is required.

![](attachments/16713836/16843967.jpg)
The microflow above is passed the order of the enclosing data view as a parameter. It can then split on the OrderType attribute and retrieve a different set of products for each enumeration value. The microflow is configured to return a list of products and each end event is designated a list to return. Please note that the empty path also requires a value, where `empty` is also a value.

{% endmarkdown %}</div><div class="alert alert-warning">{% markdown %}

Sorting columns and searching are not available to data widgets with an association data source. This is because these features require a database call to function, which an association data source does not necessarily initiate.

{% endmarkdown %}</div>

## Properties

### Microflow

Designates the microflow used to populate the widget. This microflow will be run whenever the widget is loaded into the browser or refreshed. The microflow must have a return value of either an object or a list of objects, depending on the widget being used.

### Microflow settings

See [Starting Microflows](starting-microflows).
