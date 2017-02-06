---
title: "Use a specialization of an entity"
category: "howto40"
space: "Mendix 4 How-to's"
---
## Description

This section describes how to use an inheritance split to use a specialization of an entity. The related reference guide article can be found [here](https://world.mendix.com/pages/releaseview.action?pageId=10420541).

## Instructions

![](attachments/819203/917932.png) **Open the microflow, or if necessary create a new one. If you do not know how to add documents to your project, please refer to [this](https://world.mendix.com/display/howto25/Add+documents+to+a+module) article.**

![](attachments/2621610/2752848.png)

![](attachments/819203/917932.png) **Add an 'Inheritance split' to the microflow and double click on it. If you do not know how to do this, please refer to [this](https://world.mendix.com/display/howto25/Add+an+activity+to+a+microflow) article.**

![](attachments/2621610/2752847.png)

![](attachments/819203/917932.png) **Use the drop down menu to choose the variable which is to be inspected for the inheritance split.**

![](attachments/2621610/2752850.png)

![](attachments/819203/917932.png) **After configuring the inheritance split, you will notice that the sequence flow paths leading out of it have turned red. Right-click on such a path and then under 'Condition value' choose the specialization for which this path should be executed.**

![](attachments/2621610/2752853.png)

![](attachments/819203/917932.png) **Create additional paths for every specialization. Add activities and, if necessary, end events to these paths to finish the microflow.**

![](attachments/2621610/2752854.png)

[![](attachments/819203/917564.png)](use-a-specialization-of-an-entity)[(Back to Top)](use-a-specialization-of-an-entity)