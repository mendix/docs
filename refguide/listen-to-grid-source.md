---
title: "Listen To Widget Source"
space: "Mendix 7 Reference Guide"
parent: "data-sources"
---


The listen-to-widget data source allows a data view to display detailed information on an object selected in a list widget on the same page. The data grid, template grid, and list view are list widgets. This is especially useful when displaying large amounts of data, which limits the information available per object, as it allows the user to view details concerning individual objects without having to open a new page.

<div class="alert alert-info">{% markdown %}

![](attachments/16713834/16843964.jpg)
The data view on the right listens to the data grid on the left. In this example, the listening view will display the image attached to the selected product if one is selected.

{% endmarkdown %}</div>

Both list views, template grids, and data grids can be listened to.

If no object is selected in the list widget, the data view will remain empty and unresponsive.

## Properties

### List widget

Specifies the list widget from which the data view derives its data.
