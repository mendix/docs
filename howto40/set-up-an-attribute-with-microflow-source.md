---
title: "Set up an attribute with microflow source"
category: "howto40"
space: "Mendix 4 How-to's"
---
## Description

This section describes how to set up an attribute of which the value is calculated by a microflow. The related reference guide article can be found [here](https://world.mendix.com/pages/releaseview.action?pageId=9208495).

## Instructions

![](attachments/819203/917932.png) **If the attribute does not exist yet, create it. If you do not know how to do this, please refer to [this](https://world.mendix.com/display/howto25/Add+an+attribute) How To.**

### Method 1

![](attachments/819203/917932.png) **Right-click on the attribute and in the menu choose 'Select microflow...', or click on the '...' button next to 'Microflow' in the Properties window.**

![](attachments/2621522/2752526.png)

![](attachments/819203/917932.png) **Select the microflow you want to use to calculate the attribute value and click on 'Select'.**

![](attachments/2621522/2752541.png)

Note that the microflow should return a value of the same type as the attribute.

![](attachments/819203/917932.png) **The domain model will now indicate that the attribute is calculated by a microflow.**

![](attachments/2621522/2752540.png)

### Method 2

![](attachments/819203/917932.png) **Double-click on the attribute.**

![](attachments/819203/917932.png) **Change the source of the attribute to 'Microflow'. Press the 'Select...' button on the new line that appears.**

![](attachments/2621522/2752527.png)

![](attachments/819203/917932.png) **Select the microflow you want to use to calculate the attribute value and click on 'Select'.**

![](attachments/2621522/2752541.png)

Note that the microflow should return a value of the same type as the attribute.

![](attachments/819203/917932.png) **The domain model will now indicate that the attribute is calculated by a microflow.**

![](attachments/2621522/2752540.png)

