---
title: "Configure the tooltip form of  a data grid"
category: "howto40"
space: "Mendix 4 How-to's"
---
## Description

This section describes how to configure a tooltip form for a data grid. The related reference guide article can be found [here](https://world.mendix.com/pages/releaseview.action?pageId=9699364).

## Instructions

![](attachments/819203/917932.png) **Create the form containing the data grid, as well as the form with data view you want to use as tooltip form. If you do not know how to add documents to a project please refer to [this](https://world.mendix.com/display/howto25/Add+documents+to+a+module) article; if you do not know how to add widgets to a form, please refer to [this](https://world.mendix.com/display/howto25/Add+a+widget+to+a+form) article.**

![](attachments/819203/917932.png) **Open the form containing the data grid, and select the data grid.**

![](attachments/819203/917932.png) **Right-click on the data grid and choose 'Select tooltip form...'. Alternatively you could click on the '...' button next to 'Tooltip form' in the Properties window.**

![](attachments/2621444/2752624.png)

![](attachments/819203/917932.png) **In the menu that pops up, select the form you want to use as tooltip form and press 'Select'.**

![](attachments/2621444/2752627.png)

This form should be a data view on the same entity as the reference set selector.

![](attachments/819203/917932.png) **Finally, the columns for which the tooltip form appears when the mouse hovers over them have to be configured. To do this, select a column you want to tooltip form to appear for, and in the Properties window use the drop down menu to set 'Show tooltip' to 'True'.**

![](attachments/2621444/2752626.png)

![](attachments/819203/917932.png) **The tooltip form will now be displayed when hovering over the columns for which it was turned on.**

![](attachments/2621444/2752625.png)

[![](attachments/819203/917564.png)](configure-the-tooltip-form-of--a-data-grid)[(Back to Top)](configure-the-tooltip-form-of--a-data-grid)