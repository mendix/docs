---
title: "Merge multiple sequence flows"
category: "howto40"
space: "Mendix 4 How-to's"
---
## Description

This section describes how to merge multiple sequence flows in a microflow. The related reference guide article can be found [here](https://world.mendix.com/pages/releaseview.action?pageId=10420539).

## Instructions

![](attachments/819203/917932.png) **Create the microflow with multiple sequence flows using inheritance or exclusive splits. If you do not know how to add documents to your project, please refer to [this](add-documents-to-a-module) article; if you do not know how to add activities to a microflow, please refer to [this](add-an-activity-to-a-microflow) article.**

![](attachments/2621614/2752840.png)

![](attachments/819203/917932.png) **Add a merge gateway to the sequence flow in the location where you want to merge the separate flows into one.**

![](attachments/2621614/2752839.png)

![](attachments/819203/917932.png) **Drag new sequence flow from the circles around the edge of the last activity in the separate paths to the circles around the edge of the merge gateway.**

![](attachments/2621614/2752842.png)

![](attachments/819203/917932.png) **Connect all separate sequence flows you want to merge to the merge gateway.**

![](attachments/2621614/2752845.png)

