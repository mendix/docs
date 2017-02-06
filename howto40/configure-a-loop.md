---
title: "Configure a loop"
category: "howto40"
space: "Mendix 4 How-to's"
---
## Description

This section describes how to configure a loop in a microflow. The related reference guide article can be found [here](https://world.mendix.com/pages/releaseview.action?pageId=10420544).

## Instructions

![](attachments/819203/917932.png) **Open the microflow, or if necessary create a new one. If you do not know how to add documents to your project, please refer to [this](https://world.mendix.com/display/howto25/Add+documents+to+a+module) article.**

![](attachments/2621608/2752844.png)

Since the iterator of the loop will need a list of objects, make sure this list is created in the microflow. For example in the microflow in the screenshot, a retrieve activity is used to create a list of all the 'Order' objects of which the status attribute is 'Paid'.

![](attachments/819203/917932.png) **Add a loop to the microflow. If you do not know how to do this, please refer to [this](https://world.mendix.com/display/howto25/Add+an+activity+to+a+microflow) article.**

![](attachments/2621608/2752843.png)

![](attachments/819203/917932.png) **Double-click on the loop and select list you want the loop to iterate over using the drop-down menu at 'Iterate over'. You can edit the name for the variable holding the object from the list for which the flow inside the loop is being executed at 'Variable name'.**

![](attachments/2621608/2752846.png)

![](attachments/819203/917932.png) **Add the sequence flow inside the loop which is to be executed for every object on the list.**

![](attachments/2621608/2752849.png)

This generally works the same as sequence flow outside the loop with a few exceptions. Rather than having a start event, the iterator will automatically start at the first activity of the sequence flow. End events on the other hand are replaced by Continue events, which are used when the sequence flow has been executed and the iterator should move to the next object on the list, and Break events, which are used to stop iterating and continue with the rest of the microflow.

[![](attachments/819203/917564.png)](configure-a-loop)[(Back to Top)](configure-a-loop)